import{H as b,T as y,M as g}from"./CamKSDFG.js";import{al as k,g as d,i as w,j,c as o,k as e,w as m,a as t,u as i,o as s,b as H,_ as S,l as T}from"./C-vTbds6.js";import{_ as B}from"./CGqU9Bw2.js";import{u as D}from"./CA6-J8VV.js";import{J as r}from"./rz57kNau.js";const E={class:"max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},J={key:0},N={class:"sm:flex sm:items-center"},V={class:"sm:flex-auto my-5 max-w-7xl mx-auto"},C={class:"dark:block hidden"},M={class:"dark:hidden"},F={key:1,class:"text-center my-5"},G={__name:"example-ohdf-schema",setup(O){const l=d(!0),n=d(null),_=async()=>{n.value=await D("getJsonContentByPage",()=>GqlGetJsonContentByPage({pageName:"Normalize-Example-Schema"})).then(({data:c})=>c.value.jsonContents.data[0].attributes.json)};return w(async()=>{await j(async()=>{await _(),l.value=!0})}),(c,a)=>{const u=y,p=g,x=b,h=S,f=B,v=T;return s(),o("div",null,[e(x,null,{default:m(()=>[e(u,null,{default:m(()=>a[0]||(a[0]=[H("Example OHDF Schema")])),_:1}),e(p,{name:"description",content:"Example OHDF Schema"})]),_:1}),t("div",null,[e(h),t("div",E,[l.value?(s(),o("div",J,[t("div",N,[t("div",V,[a[1]||(a[1]=t("h1",{class:"text-center text-5xl font-bold text-header mb-5"},[t("strong",null,"Example Ubuntu 16.04 STIG baseline requirement V-75443")],-1)),t("div",C,[e(i(r),{value:n.value,"expand-depth":3,expanded:!0,copyable:"",theme:"json-code-dark-theme",boxed:""},null,8,["value"])]),t("div",M,[e(i(r),{value:n.value,"expand-depth":3,expanded:!0,copyable:"",theme:"json-code-light-theme",boxed:""},null,8,["value"])])])])])):(s(),o("div",F,[e(f)])),e(v)])])])}}},z=k(G,[["__scopeId","data-v-f4805fd8"]]);export{z as default};