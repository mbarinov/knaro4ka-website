"""Compare saved CUA observations. Never controls a browser or changes reference images."""
from pathlib import Path
from collections import defaultdict
import json
from PIL import Image, ImageDraw, ImageChops, ImageStat

ROOT = Path(__file__).resolve().parent.parent
EVIDENCE = ROOT / "evidence"
OUT = EVIDENCE / "comparisons"
OUT.mkdir(exist_ok=True)
PAGES = ["home", "about", "vocao", "cycle-aura", "404"]
WIDTHS = [375, 390, 768, 809, 810, 1024, 1199, 1200, 1440]


def load(side, page, width):
    return json.loads((EVIDENCE / side / f"{page}-{width}-qa.json").read_text())


def moving(node, layout):
    return any(t["y"] - 1 <= node["y"] < t["y"] + t["h"] + 1 for t in layout.get("tickers", []))


layout_results = []
for page in PAGES:
    for width in WIDTHS:
        source, local = [load(side, page, width) for side in ["source", "local"]]
        assert source["width"] == local["width"] == width
        assert source["height"] == local["height"]
        assert source["dpr"] == local["dpr"] == 1
        assert source["scroll"] == local["scroll"] == 0
        groups = []
        for data in [source, local]:
            group = defaultdict(list)
            for node in data["nodes"]:
                if node["cls"] and not moving(node, data):
                    group[(node["tag"], node["cls"], node["text"])].append(node)
            groups.append(group)
        deviations, matched = [], 0
        for key in groups[0].keys() & groups[1].keys():
            if len(groups[0][key]) != len(groups[1][key]):
                continue
            for a, b in zip(groups[0][key], groups[1][key]):
                matched += 1
                delta = {k: round(b[k] - a[k], 3) for k in ["x", "y", "w", "h"] if abs(b[k] - a[k]) > 0.6}
                if delta:
                    deviations.append({"element": key, "delta": delta})
        layout_results.append({
            "page": page, "width": width, "height": local["scrollHeight"],
            "heightDelta": local["scrollHeight"] - source["scrollHeight"],
            "horizontalOverflow": local["scrollWidth"] > width,
            "matchedElements": matched, "deviations": deviations,
        })


def stitch(side, page, width):
    folder = EVIDENCE / side
    frames = json.loads((folder / f"{page}-{width}-frames.json").read_text())
    last = frames[-1]
    assert last["scroll"] + last["height"] >= last["pageHeight"] - 1
    canvas = Image.new("RGB", (width, last["pageHeight"]), (9, 9, 9))
    end = 0
    for i, frame in enumerate(frames):
        image = Image.open(folder / frame["file"]).convert("RGB")
        assert image.size == (width, frame["height"])
        y, cut = round(frame["scroll"]), 80 if i else 0
        assert i == 0 or y + cut <= end, "Gap between screenshots"
        canvas.paste(image.crop((0, cut, width, image.height)), (0, y + cut))
        end = y + image.height
    canvas.save(OUT / f"{page}-{width}-{side}-full.png")
    return canvas


pixel_results = []
for page in PAGES:
    for width in [375, 1440]:
        source, local = [stitch(side, page, width) for side in ["source", "local"]]
        assert source.size == local.size
        difference = ImageChops.difference(source, local)
        difference.save(OUT / f"{page}-{width}-diff.png")
        Image.blend(source, local, 0.5).save(OUT / f"{page}-{width}-overlay.png")
        # Independent ticker phases, source editor controls, badge and transient
        # native scrollbar are excluded only from the score, never the raw diff.
        mask = Image.new("L", source.size, 255)
        draw = ImageDraw.Draw(mask)
        for side in ["source", "local"]:
            for ticker in load(side, page, width).get("tickers", []):
                draw.rectangle((0, ticker["y"] - 2, width, ticker["y"] + ticker["h"] + 2), fill=0)
        draw.rectangle((width - 48, 0, width, source.height), fill=0)
        draw.rectangle((width - 190, source.height - 65, width, source.height), fill=0)
        mae = sum(ImageStat.Stat(difference, mask).mean) / 3
        pixel_results.append({"page": page, "width": width, "meanChannelErrorOutOf255": round(mae, 4)})
        thumb_width = min(width, 720)
        thumb_height = round(source.height * thumb_width / width)
        board = Image.new("RGB", (thumb_width * 2, thumb_height + 30), "white")
        labels = ImageDraw.Draw(board)
        for i, image in enumerate([source, local]):
            board.paste(image.resize((thumb_width, thumb_height)), (i * thumb_width, 30))
            labels.text((i * thumb_width + 10, 10), ["ORIGINAL", "NEXT.JS"][i], fill="black")
        board.save(OUT / f"{page}-{width}-comparison.jpg", quality=90)

report = {"layout": layout_results, "pixels": pixel_results}
(OUT / "report.json").write_text(json.dumps(report, indent=2))
print(json.dumps({"states": len(layout_results), "matchedElements": sum(r["matchedElements"] for r in layout_results),
    "layoutIssues": [r for r in layout_results if r["deviations"] or r["heightDelta"] or r["horizontalOverflow"]],
    "pixels": pixel_results}, indent=2))
