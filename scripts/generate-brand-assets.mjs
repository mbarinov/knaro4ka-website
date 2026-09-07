import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const path = (relative) => fileURLToPath(new URL(relative, root));
const source = path("assets/branding/knara-character.png");
const paper = "#F3F0E8";

// Preserve the complete supplied character on a light background.
async function icon(size) {
  const inset = Math.max(1, Math.round(size * 0.1));
  const character = await sharp(source)
    .resize(size - inset * 2, size - inset * 2, {
      fit: "contain",
      kernel: "nearest",
      background: paper,
    })
    .flatten({ background: paper })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: paper },
  })
    .composite([{ input: character, left: inset, top: inset }])
    .ensureAlpha()
    .png()
    .toBuffer();
}

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
const character = await sharp(source)
  .resize(432, 432, { kernel: "nearest" })
  .png()
  .toBuffer();
const card = Buffer.from(`<svg width="480" height="502" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="502" rx="32" fill="${paper}"/>
</svg>`);
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#000000" },
})
  .composite([
    { input: card, left: 656, top: 64 },
    { input: character, left: 680, top: 99 },
    { input: text, left: 0, top: 0 },
  ])
  .png()
  .toFile(path("public/og/knara-sobchak.png"));
