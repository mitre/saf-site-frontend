import{H as M,T as y,M as w}from"./components.3d787212.js";import{_ as H}from"./Component.0c2e8fe8.js";import{u as C,f as L}from"./gql.3486b515.js";import{g as e,h as N,i as I,j as S,x as A,c as B,k as r,w as v,u as n,p as E,o as R,b as F}from"./entry.aa641b54.js";import{s as T}from"./useSlugify.31da7e80.js";import"./scrollToTop.vue.5fa666c7.js";import"./LoadingSpinner.95f33edd.js";const z={__name:"index",setup(G){const d=e({}),m=e(""),p=e([]),f=e(""),u=e(""),_=e([]),D=e(0),b=e(""),h=e(!1),g=N(),k=async()=>{d.value=await C("getIndexDocumentation",()=>L()).then(({data:o})=>{if(!o.value||!o.value.currentDoc.data[0])return E("/docs");const s=o.value.currentDoc.data[0].attributes;b.value=s.subsections[0].title,f.value=s.section_title,_.value=o.value.allLinks.data.flatMap(t=>t.attributes.subsections),u.value=g.hash.replace(/^#+/,"");const{content:i}=s.subsections[0],a=[],c=new DOMParser().parseFromString(i,"text/html");let l=-1;for(const t of c.body.childNodes)t.localName==="h1"&&(a.push({title:t.outerText,subtitles:[]}),l+=1,t.id=T(t.outerText)),t.localName==="h2"&&l!=-1&&(a[l].subtitles.push(t.outerText),t.id=T(t.outerText));return m.value=c.documentElement.outerHTML,p.value=a,o.value.allLinks.data.map(t=>({section_title:t.attributes.section_title,subsections:t.attributes.subsections}))})};return I(async()=>{await S(async()=>{await k(),h.value=!0})}),A(async o=>{u.value=o.hash.replace(/^#+/,"")}),(o,s)=>{const i=y,a=w,x=M,c=H;return R(),B("div",null,[r(x,null,{default:v(()=>[r(i,null,{default:v(()=>[F("Documentation")]),_:1}),r(a,{name:"description",content:"Collection of MITRE SAF© documentation"})]),_:1}),r(c,{"all-links":n(_),"current-heading":n(u),"current-index":n(D),"current-section-title":n(f),"current-subsection":n(b),"doc-data":n(d),"is-loaded":n(h),"table-of-contents":n(p),"rendered-content":n(m)},null,8,["all-links","current-heading","current-index","current-section-title","current-subsection","doc-data","is-loaded","table-of-contents","rendered-content"])])}}};export{z as default};
