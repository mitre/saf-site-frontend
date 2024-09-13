import{H as h,T as _,M as g}from"./CamKSDFG.js";import{al as y,c as i,k as s,w as o,a as l,aQ as x,o as r,b as D,_ as v,l as V}from"./C-vTbds6.js";import{_ as k}from"./5WYruPkL.js";import{_ as T}from"./CGqU9Bw2.js";import{u as w}from"./CA6-J8VV.js";import"./CgkWV-VQ.js";import"./DW617VX3.js";import"./D-30s9gB.js";const S={data(){return{categorizedData:{"Cloud Service Providers":[],"Virtual Platforms":[],"Operating Systems":[],Databases:[],Network:[],"Application Logic":[],"Web Servers":[]},guidanceData:[],validationData:[],isLoaded:!1}},mounted(){this.$nextTick(async()=>{await this.getGuidance(),this.getValidationData(),this.isLoaded=!0})},methods:{async getGuidance(){this.guidanceData=await w("getValidateData",()=>GqlGetValidateData()).then(({data:e})=>e.value.guidances.data.map(a=>({name:a.attributes.name,id:a.id,type:a.attributes.type,category:a.attributes.category,source:a.attributes.source,date:a.attributes.date,version:a.attributes.version.length!==0?a.attributes.version[0].version:0,validation:a.attributes.validation.data.map(t=>({id:t.id,name:t.attributes.name,name_long:t.attributes.name_long,source:t.attributes.source,platform:{name:t.attributes.platform.data.attributes.name,link:t.attributes.platform.data.attributes.link,icon:{name:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.name:null,url:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.url:null,alt:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.alternativeText:null}},partner:{name:t.attributes.partner.data.attributes.name,name_long:t.attributes.partner.data.attributes.name_long,link:t.attributes.partner.data.attributes.link,icon:{name:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.name:null,url:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.url:null,alt:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.alternativeText:null}}}))})))},getValidationData(){for(let e=0;e<this.guidanceData.length;e+=1)this.guidanceData[e].validation.forEach(a=>{const t=a;t.category=this.guidanceData[e].category,t.version=this.guidanceData[e].version,t.benchmarkID=this.guidanceData[e].id,this.validationData.push(t)});for(let e=0;e<this.validationData.length;e+=1)this.categorizedData[this.validationData[e].category.replaceAll("_"," ")].push(this.validationData[e])}}},I={class:"relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},L={key:0},A={key:1,class:"grid h-screen place-items-center"};function E(e,a,t,M,n,N){const c=_,u=g,d=h,m=v,p=k,b=T,f=V;return r(),i("div",null,[s(d,null,{default:o(()=>[s(c,null,{default:o(()=>a[0]||(a[0]=[D("Validate Library")])),_:1}),s(u,{name:"description",content:"Validate library content"})]),_:1}),l("div",null,[s(m),l("div",I,[n.isLoaded?(r(),i("div",L,[a[1]||(a[1]=x('<div class="sm:flex sm:items-center"><div class="sm:flex-auto"><h1 class="text-5xl font-bold text-header">Validate</h1><p class="mt-2 text-xl"> These open source community-based InSpec profiles validate the security of common system components. MITRE is helping to provide stewardship over these profiles, hosted here and at other community vendor sites. If you are interested in new profiles, please contact us at <a href="mailto:saf@groups.mitre.org" class="underline">saf@groups.mitre.org</a>. If you are interested in developing and contributing your own profiles, please see our <a href="/training" class="underline">training material</a>. All assessment tests under MITRE SAF <sup>©</sup> are associated with NIST SP 800-53 Security Controls. </p><h2 class="mt-2 text-2xl font-bold text-header">Usage</h2><p class="mt-2 text-xl">The Validation Library contents are collections of test definitions that can be used in conjunction with testing tools such as Progress Chef recipes to validate system components against baselines. Specific usage instructions for each piece of validation content can be found in their repository README files.</p></div></div>',1)),s(p,{entries:n.categorizedData},null,8,["entries"])])):(r(),i("div",A,[s(b)]))]),s(f)])])}const R=y(S,[["render",E]]);export{R as default};