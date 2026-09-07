"""Compare saved Browser observations; does not control a browser."""
import json
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse, parse_qs

root = Path(__file__).resolve().parent.parent / "evidence/performance"
results = []


def key(node):
    src = node.get("src") or ""
    if "_next/image" in src:
        src = parse_qs(urlparse(src).query)["url"][0]
    if node["tag"] == "VIDEO":
        src = "video"  # Intentional faststart replacement.
    return node["tag"], node["cls"], node["text"], src


for page in ["home", "about", "vocao", "cycle-aura", "404"]:
    for width in [390, 809, 810, 1199, 1200, 1440]:
        before, after = [json.loads((root / side / f"{page}-{width}.json").read_text())
                         for side in ["before", "after"]]
        assert before["width"] == after["width"] == width
        assert before["dpr"] == after["dpr"] == 1
        assert before["height"] == after["height"]
        groups = []
        for data in [before, after]:
            group = defaultdict(list)
            for node in data["nodes"]:
                group[key(node)].append(node)
            groups.append(group)
        issues, matched = [], 0
        for identity in groups[0].keys() & groups[1].keys():
            a, b = [g[identity] for g in groups]
            if len(a) != len(b):
                continue
            for old, new in zip(a, b):
                # Track phases differ intentionally after offscreen pausing.
                fields = ["w", "h"] if old["moving"] else ["x", "y", "w", "h"]
                delta = {field: round(new[field] - old[field], 3) for field in fields
                         if abs(new[field] - old[field]) > 1}
                matched += 1
                if delta:
                    issues.append({"element": identity, "delta": delta})
        results.append({"page": page, "width": width, "matched": matched, "issues": issues,
                        "heightDelta": after["scrollHeight"] - before["scrollHeight"],
                        "horizontalOverflow": after["scrollWidth"] > width})

failures = [r for r in results if r["issues"] or r["heightDelta"] or r["horizontalOverflow"]]
report = {"states": len(results), "matched": sum(r["matched"] for r in results),
          "failures": failures, "results": results}
(root / "layout-comparison.json").write_text(json.dumps(report, indent=2))
print(json.dumps({k: report[k] for k in ["states", "matched", "failures"]}, indent=2))
assert not failures
