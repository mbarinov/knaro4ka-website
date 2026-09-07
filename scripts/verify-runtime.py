"""Read-only checks against an already running production server."""
from pathlib import Path
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor
import json, re, sys
import requests
from bs4 import BeautifulSoup

base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3000"
root = Path(__file__).resolve().parent.parent
session = requests.Session()
session.trust_env = False  # Local verification does not need a proxy.
routes = {"/": 200, "/about": 200, "/vocao": 200, "/cycle-aura": 200,
          "/404": 404, "/missing-page-verification": 404, "/robots.txt": 200, "/sitemap.xml": 200}
assets, links, report = set(), set(), {"routes": [], "assets": [], "issues": []}
for path, expected in routes.items():
    response = session.get(base + path, timeout=20)
    report["routes"].append({"path": path, "status": response.status_code})
    assert response.status_code == expected, (path, response.status_code)
    if "html" not in response.headers.get("content-type", ""):
        continue
    soup = BeautifulSoup(response.content, "html.parser")
    assert soup.title and "Sienna Vanghn" in soup.title.text
    for element in soup.select("[src], link[href]"):
        value = element.get("src") or element.get("href")
        if value.startswith("/"):
            assets.add(value)
        elif urlparse(value).netloc and element.get("rel") != ["canonical"]:
            report["issues"].append({"externalResource": value})
    for element in soup.select("a[href]"):
        value = element["href"]
        if value.startswith("/"):
            links.add(value.split("#")[0] or "/")
    if expected == 404:
        assert soup.select_one('meta[name="robots"][content*="noindex"]')
    else:
        assert soup.select_one('link[rel="canonical"]')
        assert soup.select_one('meta[property="og:image"]')
    assert not re.search(r"[\u00c2-\u00f4][\u0080-\u00bf]{2,}", soup.get_text())

for path in list(assets):
    if path.split("?")[0].endswith(".css"):
        css = session.get(base + path, timeout=20).text
        for value in re.findall(r"url\([\"']?([^\"')]+)", css):
            if value.startswith("/"):
                assets.add(value)
            elif value.startswith("http"):
                report["issues"].append({"externalCSSResource": value})


def check_asset(path):
    video = path.endswith(".mp4")
    headers = {"Range": "bytes=0-65535"} if video else {}
    response = session.get(base + path, headers=headers, timeout=30)
    assert response.status_code == (206 if video else 200), (path, response.status_code)
    assert response.content, path
    if video:
        assert response.headers.get("content-range", "").startswith("bytes 0-65535/")
    return {"path": path, "status": response.status_code, "type": response.headers.get("content-type")}


with ThreadPoolExecutor(max_workers=6) as pool:
    report["assets"] = list(pool.map(check_asset, sorted(assets)))
for path in links:
    assert session.get(base + path, timeout=20).status_code == 200, path
report["internalLinks"] = sorted(links)
assert not report["issues"], report["issues"]
(root / "evidence/runtime-check.json").write_text(json.dumps(report, indent=2))
print(json.dumps({"routes": report["routes"], "assetsChecked": len(report["assets"]),
                  "internalLinks": report["internalLinks"], "issues": report["issues"]}, indent=2))
