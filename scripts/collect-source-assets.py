from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlparse,unquote
import requests,json,hashlib,shutil,re,concurrent.futures
root=Path(__file__).resolve().parent.parent
out=root/'evidence/source/assets';out.mkdir(exist_ok=True)
urls=set();cached={}
for f in (root/'evidence/source').glob('*-bundle.json'):
 b=json.loads(f.read_text())
 for a in b['assets']:
  if a['url'].startswith('https:'):cached[a['url']]=a
 for a in b['failures']:
  if a['name'].endswith(('.woff2','.mp4')):urls.add(a['url'])
for name in ['home','about','vocao','cycle-aura']:
 s=BeautifulSoup((root/'evidence/source'/f'{name}.html').read_text(),'html.parser')
 for e in s.select('img,video'):
  if e.get('src','').startswith('https:'):urls.add(e['src'])
 for e in s.select('meta[property="og:image"]'):urls.add(e['content'])
 for e in s.find_all(style=True):
  for v in re.findall(r'url\([\'\"]?(data:image/svg\+xml,[^\'\")]+)',e['style']):
   text=unquote(v.split(',',1)[1]);name=hashlib.sha256(text.encode()).hexdigest()[:12]+'.svg';(out/name).write_text(text)
urls.update(cached)
def fetch(url):
 key=hashlib.sha256(url.encode()).hexdigest()[:12];suffix=Path(urlparse(url).path).suffix
 dest=out/(key+suffix)
 try:
  if not dest.exists():
   if url in cached:shutil.copyfile(cached[url]['path'],dest);ctype=cached[url]['contentType']
   else:
    r=requests.get(url,timeout=45);r.raise_for_status();dest.write_bytes(r.content);ctype=r.headers.get('content-type','')
  else:ctype='cached'
  return {'url':url,'path':str(dest.relative_to(root)),'contentType':ctype,'bytes':dest.stat().st_size}
 except Exception as e:return {'url':url,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:results=list(pool.map(fetch,sorted(urls)))
(root/'evidence/source/asset-manifest.json').write_text(json.dumps(results,indent=2))
print(json.dumps({'assets':len(results),'bytes':sum(r.get('bytes',0) for r in results),'errors':[r for r in results if 'error' in r]},indent=2))
for name in ['home','about','vocao','cycle-aura']:
 s=BeautifulSoup((root/'evidence/source'/f'{name}.html').read_text(),'html.parser')
 anim=s.find('script',id='__framer__appearAnimationsContent')
 if anim:(root/'evidence/source'/f'{name}-animations.json').write_text(anim.text)
 for t in s(['script','style']):t.decompose()
 (root/'evidence/source'/f'{name}-readable.html').write_text(s.prettify())
