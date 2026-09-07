import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const path = (relative) => fileURLToPath(new URL(relative, root));
const source = path("assets/branding/knara-character.png");

// Mechanical resizing preserves the supplied artwork, without redrawing it.
const icon = (size) =>
  sharp(source)
    .resize(size, size, { fit: "contain", background: "#000000" })
    .flatten({ background: "#000000" })
    .ensureAlpha()
    .png()
    .toBuffer();

await mkdir(path("public/og"), { recursive: true });
await writeFile(path("src/app/icon.png"), await icon(192));
await writeFile(path("src/app/apple-icon.png"), await icon(180));

const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(icon));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(path("src/app/favicon.ico"), Buffer.concat([header, ...images]));

// Code-native typography and layout; the supplied character is only resized.
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="64" y="295" fill="white" font-family="Arial, sans-serif" font-size="64" font-weight="700">Knara Sobchak</text>
  <text x="64" y="355" fill="white" font-family="Arial, sans-serif" font-size="32">Product Designer</text>
</svg>`);
const character = await icon(480);
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#000000" },
})
  .composite([
    { input: character, left: 656, top: 75 },
    { input: text, left: 0, top: 0 },
  ])
  .png()
  .toFile(path("public/og/knara-sobchak.png"));
