import{T,M as y,H as w}from"./CamKSDFG.js";import{d as B,g as n,h as H,i as M,j as E,o as _,c as d,k as o,w as m,b as L,e as P,a as f,s as $,_ as C,l as F}from"./C-vTbds6.js";import{_ as N}from"./C1rUSoOe.js";import{_ as S}from"./CGqU9Bw2.js";import{u as V}from"./CA6-J8VV.js";import"./CgkWV-VQ.js";const q={key:0},A=["innerHTML"],G={key:1,class:"grid h-screen place-items-center"},O=B({__name:"[title]",setup(I){const u=n(!1),s=n(""),p=n(""),v=n(""),g=n(""),x=H(),h=async()=>{await V("getBlogDataFromID",()=>{var t;return GqlGetBlogDataFromID({id:((t=x.query.id)==null?void 0:t.toString())??"Error"})}).then(({data:t})=>{var a,r,l,c,i;if(!t.value||!((r=(a=t==null?void 0:t.value)==null?void 0:a.blogPost)!=null&&r.data)){$("/blog");return}const e=t.value.blogPost.data.attributes;s.value=(e==null?void 0:e.title)??"Error",p.value=e==null?void 0:e.date,g.value=(e==null?void 0:e.content)??"Error",v.value=((i=(c=(l=e==null?void 0:e.users_permissions_user)==null?void 0:l.data)==null?void 0:c.attributes)==null?void 0:i.name)??"Error",u.value=!0})};return M(async()=>{await E(async()=>{await h(),u.value=!0})}),(t,e)=>{const a=T,r=y,l=w,c=C,i=N,b=S,k=F;return _(),d("div",null,[o(l,null,{default:m(()=>[o(a,null,{default:m(()=>[L(P(s.value),1)]),_:1}),o(r,{name:"description",content:`${s.value} blog post`},null,8,["content"])]),_:1}),f("div",null,[o(c),u.value?(_(),d("div",q,[o(i,{title:s.value,"last-updated":p.value,author:v.value,"go-back-link":"/blog"},{default:m(()=>[f("div",{class:"prose prose-xl max-w-full mx-auto mt-8 text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start",innerHTML:g.value},null,8,A)]),_:1},8,["title","last-updated","author"])])):(_(),d("div",G,[o(b)])),o(k)])])}}});export{O as default};