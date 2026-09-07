"""One-time migration of captured, user-owned Framer markup to standalone React.
The browser captures in evidence/source are the input, never a runtime dependency.
Retain original layout selectors to make visual comparisons traceable.
"""
from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Comment
from PIL import Image as PILImage
from urllib.parse import urlparse, unquote
import json,re,hashlib,shutil
root=Path(__file__).resolve().parent.parent
src=root/'evidence/source'; target=root/'src/components/pages';target.mkdir(parents=True,exist_ok=True)
assets=root/'public/assets'; assets.mkdir(parents=True,exist_ok=True)
manifest=json.loads((src/'asset-manifest.json').read_text()); lookup={}; dimensions={}
for a in manifest:
 if 'error' in a:continue
 path=root/a['path']; name=path.name
 # Use correct extensions for content-negotiated source images.
 try:
  with PILImage.open(path) as im:
   name=path.stem+{'AVIF':'.avif','WEBP':'.webp','PNG':'.png','JPEG':'.jpg'}.get(im.format,path.suffix)
   dimensions['/assets/'+name]=im.size
 except Exception:pass
 lookup[a['url']]='/assets/'+name
 shutil.copyfile(path,assets/name)
lookup['https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png']='/assets/noise.png'
shutil.copyfile(src/'assets/noise.png',assets/'noise.png')
used=set(); svg_assets={}
def localize(value):
 if value in lookup:used.add(lookup[value]);return lookup[value]
 for url,path in lookup.items():
  if url in value:value=value.replace(url,path);used.add(path)
 for match in re.findall(r"data:image/svg\+xml,[^']+",value):
  markup=unquote(match.split(',',1)[1]);name=hashlib.sha256(markup.encode()).hexdigest()[:12]+'.svg'
  (assets/name).write_text(markup);value=value.replace(match,'/assets/'+name);used.add('/assets/'+name)
 return value

def css_obj(raw):
 raw=localize(raw);out={}
 for item in raw.split(';'):
  if ':' not in item:continue
  k,v=item.split(':',1);k=k.strip();v=v.strip()
  if not k or k in ['webkit-user-drag','user-drag','will-change']:continue
  if not k.startswith('--'):k=re.sub(r'-([a-z])',lambda m:m[1].upper(),k)
  if k.startswith('Webkit'):pass
  if k.startswith('webkit'):k='W'+k[1:]
  out[k]=v
 return out

def js(value):return json.dumps(value,ensure_ascii=False)

VOID={'img','input','br','hr','source','wbr','area','embed','col','param','track','link','meta'}
TAGS={'foreignobject':'foreignObject'}
ATTR={'class':'className','tabindex':'tabIndex','viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','playsinline':'playsInline','autoplay':'autoPlay','srcset':'srcSet','crossorigin':'crossOrigin','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-rule':'fillRule','clip-rule':'clipRule'}
BOOL={'controls','loop','autoplay','playsinline','muted','hidden'}
imports=set()
def render(e,depth=0,animation=None):
 if isinstance(e,Comment):return ''
 if isinstance(e,NavigableString):return '{'+js(str(e))+'}' if str(e) else ''
 if e.name in ['script','style']:return ''
 classes=e.get('class',[])
 if e.name=='nav':imports.add('SiteNavigation');return '<SiteNavigation caseStudy={'+str(page in ['vocao','cycle-aura']).lower()+'} />'
 if e.name=='footer':imports.add('SiteFooter');return '<SiteFooter responsive={'+str(page!='cycle-aura').lower()+'} />'
 # A Framer ssr variant may contain duplicate nav/footer wrappers. Keep the first.
 if 'ssr-variant' in classes and (e.find('nav') or e.find('footer')):
  kind='nav' if e.find('nav') else 'footer'
  if kind in emitted:return ''
  emitted.add(kind)
  return ''.join(render(c,depth,animation) for c in e.children)
 # Remove nested SSR variants around nav; the shared component is already responsive.
 if e.find('nav') and e.name=='div' and 'ssr-variant' in classes:
  return ''.join(render(c,depth,animation) for c in e.children)
 if 'parallax-effect' in classes:
  imports.add('TiltCard');return '<TiltCard>'+''.join(render(c,depth+1,animation) for c in e.children if getattr(c,'get',lambda *a:[])('class',[])!=['glare-wrapper'])+'</TiltCard>'
 # Native ticker: its original eight/ten cards are repeated by the component.
 if e.name=='ul' and e.find('li',class_='ticker-item',recursive=False):
  imports.add('Ticker');return '<Ticker speed={50} gap={10}>'+''.join(render(c,depth+1,animation) for c in e.find_all('li',recursive=False))+'</Ticker>'
 if 'ticker-item' in classes:
  return '<li className="ticker-item">'+''.join(render(c,depth+1,animation) for c in e.children)+'</li>'
 # The services ticker is one responsive component, with original content and mask.
 if 'framer-1jdkfek-container' in classes:
  imports.add('ServicesTicker');return '<ServicesTicker />'
 tag=TAGS.get(e.name,e.name);attrs=[]
 if tag=='a' and e.get('href','').startswith('/') and e.get('target')!='_blank':
  tag='Link';imports.add('Link')
 if 'data-framer-appear-id' in e.attrs:
  ident=e['data-framer-appear-id'];anim=animation.get(ident,{}).get('default',{}) if animation else {}
  if anim:
   imports.add('Reveal');attrs+=['as='+js(tag),'effect={'+js(anim)+'}'];tag='Reveal'
 if 'framer-1d64ou8' in classes:
  imports.add('ParallaxHeading');tag='ParallaxHeading'
 for k,v in e.attrs.items():
  if e.name=='video' and k=='preload':v='metadata'
  if k in ['data-framer-hydrate-v2','data-framer-root','data-framer-generated-page','data-framer-appear-id','data-framer-portal-id','data-hydrated','data-framer-original-sizes','data-framer-image-type','data-styles-preset','_constraints','parentsize','radius','rotation','shadows','name','data-framer-preserve-params','data-framer-page-optimized-at']:continue
  if k.startswith('on'):continue
  if k=='style':
   obj=css_obj(v)
   if tag=='Reveal':obj.pop('opacity',None);obj.pop('transform',None)
   if tag=='ParallaxHeading':obj.pop('transform',None)
   if obj:attrs.append('style={'+js(obj)+' as CSSProperties}')
   continue
  if k in BOOL:attrs.append(ATTR.get(k,k));continue
  if k in ['start','tabindex']:v=int(v)
  if k=='class':v=' '.join(v)
  if k=='href':
   if v.startswith('./'):v='/'+v[2:]
   if v=='mailto:hello@siennavaughn.com':v='mailto:knarasobchak@gmail.com'
  if k=='download' or (k=='title' and v=='Download File'):continue
  if k in ['srcset','decoding','loading'] and e.name=='img':continue
  if k=='target':attrs.append('rel="noopener noreferrer"')
  if k in ['src','poster']:v=localize(v)
  attrs.append(ATTR.get(k,k)+'={'+js(v)+'}')
 if e.name=='img':
  tag='Image';imports.add('Image');source=localize(e['src']);dims=dimensions.get(source,(int(e.get('width',1)),int(e.get('height',1))))
  for k,value in [('width',dims[0]),('height',dims[1])]:
   if k not in e.attrs:attrs.append(k+'={'+str(value)+'}')
  attrs.append('unoptimized')
  if e.get('src','').endswith('.svg') or '.svg?' in e.get('src',''):pass
 if 'data-framer-root' in e.attrs:attrs.append('data-site-page='+js(page))
 content=''.join(render(c,depth+1,animation) for c in e.children)
 a=(' '+' '.join(attrs)) if attrs else ''
 return '<'+tag+a+(' />' if e.name in VOID else '>'+content+'</'+tag+'>')

allcss=[]
for page in ['home','about','vocao','cycle-aura','404']:
 s=BeautifulSoup((src/(page+'-server.html')).read_text(),'html.parser');imports=set();emitted=set()
 anim=s.find('script',id='__framer__appearAnimationsContent');animation=json.loads(anim.text) if anim else {}
 (src/(page+'-animations.json')).write_text(json.dumps(animation,indent=2))
 tree=s.select_one('#main > div')
 # Desktop SSR content is retained together with CSS-controlled mobile image galleries.
 body=render(tree,animation=animation)
 lines=['import type { CSSProperties } from "react";']
 if 'Image' in imports:lines.append('import Image from "next/image";')
 if 'Link' in imports:lines.append('import Link from "next/link";')
 ui=imports-{'Image','Link'}
 if ui:lines.append('import { '+', '.join(sorted(ui))+' } from "../site-components";')
 function=''.join(w.title() for w in page.split('-'))+'Page' if page!='404' else 'NotFoundPage'
 lines.append('/** Layout and content migrated from the captured original. No Framer runtime. */')
 lines.append('export default function '+function+'() { return ('+body+'); }')
 (target/(page+'.tsx')).write_text('\n'.join(lines))
 css='\n'.join(t.text for t in s.find_all('style') if t.has_attr('data-framer-css-ssr-minified') or t.has_attr('data-framer-breakpoint-css') or t.has_attr('data-framer-html-style'))
 css=localize(css)
 # @font-face is managed once, locally, in fonts.css.
 css=re.sub(r'@font-face\s*\{[^}]*\}','',css)
 allcss.append(css)
(root/'src/app').mkdir(parents=True,exist_ok=True)
(root/'src/app/source-layout.css').write_text('\n'.join(allcss))
# Downloaded fonts retain their original family names and metrics.
font_specs=[('Gambarino','6KBHT5N',400),('Geist Mono','AbeEPKJ',500),('Geist Mono','or3yQ6',400)]
# 400 source used by the two external CTA buttons; it may not have been requested in the homepage capture.
font_entries=[]
for a in manifest:
 url=a['url'];font_style='normal'
 if not url.endswith('.woff2'):continue
 if '6KBHT5N' in url:family,weight='Gambarino',400
 elif 'AbeEPKJ' in url:family,weight='Geist Mono',500
 elif 'AbeE9KK5U5Ck' in url:family,weight='Geist Mono',400
 elif 'vQyev' in url:family,weight='Inter',400
 elif 'syRNPWz' in url:family,weight='Inter',700
 elif 'ia3uin3' in url:family,weight,font_style='Inter',700,'italic'
 elif 'pKRFNWF' in url:family,weight,font_style='Inter',400,'italic'
 elif 'AbeHaL55' in url:family,weight='Geist Mono',700
 else:continue
 path=lookup[url];used.add(path);font_entries.append(f'@font-face {{font-family:"{family}";src:url("{path}") format("woff2");font-style:{font_style};font-weight:{weight};font-display:swap;}}')
(root/'src/app/fonts.css').write_text('\n'.join(font_entries))
(root/'src/asset-map.json').write_text(json.dumps({'urls':lookup,'dimensions':dimensions},indent=2))
print('Generated 5 React pages; '+str(len(used))+' referenced assets')
