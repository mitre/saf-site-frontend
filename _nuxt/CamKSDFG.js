import{d as a,cE as s}from"./C-vTbds6.js";const d=i=>{const t=Object.create(null);for(const n in i){const e=i[n];e!==void 0&&(t[n]=e)}return t},l=(i,t)=>(n,e)=>(s(()=>i({...d(n),...e.attrs},e)),()=>{var r,o;return t?(o=(r=e.slots).default)==null?void 0:o.call(r):null}),g={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},u=a({name:"Title",inheritAttrs:!1,setup:l((i,{slots:t})=>{var n,e,r;return{title:((r=(e=(n=t.default)==null?void 0:n.call(t))==null?void 0:e[0])==null?void 0:r.children)||null}})}),S=a({name:"Meta",inheritAttrs:!1,props:{...g,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:l(i=>{const t={...i};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),c=a({name:"Head",inheritAttrs:!1,setup:(i,t)=>()=>{var n,e;return(e=(n=t.slots).default)==null?void 0:e.call(n)}});export{c as H,S as M,u as T};