// Inspect a running production server and its matching build; no browser timing claims.
import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const base = process.argv[2] ?? "http://[::1]:3101";
const result = { routes: [], resources: [] };
const get = async (path, headers = {}) => {
  const response = await fetch(new URL(path, base), { headers });
  const body = Buffer.from(await response.arrayBuffer());
  assert.equal(response.status, 200, path);
  result.resources.push({
    path,
    bytes: body.length,
    headers: Object.fromEntries(response.headers),
  });
  return { response, body };
};
for (const route of ["/", "/about", "/vocao", "/cycle-aura"]) {
  const { body } = await get(route);
  const html = body.toString();
  const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*>/g)]
    .filter((match) => !/nomodule/i.test(match[0]))
    .map((match) => match[1]);
  const js = [];
  for (const path of new Set(scripts)) {
    const body = await readFile(`.next/${path.replace("/_next/", "")}`);
    js.push({ path, bytes: body.length, gzip: gzipSync(body).length });
    if (route === "/vocao" || route === "/cycle-aura") {
      assert(
        !body.toString().includes("glareMaxOpacity"),
        "Tilt implementation in case initial JS",
      );
      assert(
        !body.toString().includes("lenis-smooth"),
        "Lenis implementation in case initial JS",
      );
    }
  }
  const css = [];
  for (const path of new Set(
    [...html.matchAll(/href="([^"]+\.css)"/g)].map((match) => match[1]),
  )) {
    const body = await readFile(`.next/${path.replace("/_next/", "")}`);
    css.push({ path, bytes: body.length, gzip: gzipSync(body).length });
  }
  assert.equal(
    (html.match(/as="font"/g) ?? []).length,
    2,
    "Only two font preloads",
  );
  if (route === "/cycle-aura") {
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    const hero = images.filter((img) =>
      /(?:257e6f8bfacb|b77835e7e6a3|93319df78041)/.test(img),
    );
    assert.equal(hero.length, 3, "One responsive hero");
    for (const img of hero) {
      assert(img.includes('loading="eager"'));
      assert(/srcSet=/i.test(img));
      assert(img.includes('sizes="'));
    }
  }
  result.routes.push({
    route,
    html: body.length,
    htmlGzip: gzipSync(body).length,
    js,
    css,
  });
}
for (const path of ["/assets/b77835e7e6a3.png", "/assets/f4f150f08e04.woff2"]) {
  const { response } = await get(path);
  assert.equal(
    response.headers.get("cache-control"),
    "public, max-age=31536000, immutable",
  );
}
for (const path of ["/assets/noise.png", "/favicon-light.png"]) {
  const { response } = await get(path);
  assert(!response.headers.get("cache-control")?.includes("immutable"));
}
const { body, response } = await get(
  "/_next/image?url=%2Fassets%2Fb77835e7e6a3.png&w=640&q=75",
  { Accept: "image/webp" },
);
assert.equal(response.headers.get("content-type"), "image/webp");
assert(body.length < 40000);
const vocao = await readFile("src/components/pages/vocao.tsx", "utf8");
const videoPath = vocao.match(/src=\{"(\/assets\/[^\"]+\.mp4)"\}/)[1];
const video = await readFile(`public${videoPath}`);
const atoms = [];
for (let pos = 0; pos + 8 <= video.length;) {
  const size = video.readUInt32BE(pos);
  assert(size >= 8, "Valid MP4 atom");
  atoms.push({ type: video.toString("ascii", pos + 4, pos + 8), pos, size });
  pos += size;
}
assert(
  atoms.find((a) => a.type === "moov").pos <
    atoms.find((a) => a.type === "mdat").pos,
);
const range = await fetch(new URL(videoPath, base), {
  headers: { Range: "bytes=0-65535" },
});
assert.equal(range.status, 206);
assert.equal((await range.arrayBuffer()).byteLength, 65536);
assert.equal(
  range.headers.get("cache-control"),
  "public, max-age=31536000, immutable",
);
result.video = {
  path: videoPath,
  bytes: video.length,
  atoms,
  rangeStatus: range.status,
};
await mkdir("evidence/performance/after", { recursive: true });
await writeFile(
  "evidence/performance/after/resources.json",
  JSON.stringify(result, null, 2),
);
console.log(
  JSON.stringify(
    {
      routes: result.routes.map((r) => ({
        route: r.route,
        jsGzip: r.js.reduce((n, a) => n + a.gzip, 0),
        cssGzip: r.css.reduce((n, a) => n + a.gzip, 0),
      })),
      optimizedImageBytes: body.length,
      videoFaststart: true,
    },
    null,
    2,
  ),
);
