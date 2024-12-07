import{g as b}from"./descendant-CnfqKM-m.js";import{g as f}from"./assets-B5JXcKye.js";import{d as c,_ as l,h as s,i as n,j as t,p as i,m as r,l as o,ag as v,ah as y,r as w,o as C,F as S,k as $,f as k,n as x}from"./index-DFwW4pmA.js";import"./system-Bb3YO62R.js";import"./clipboard-Bw6u_SbE.js";const D=c({name:"card-descendant",components:{},props:{cardClasses:String,avatar:String,color:String,name:String,nameEng:String,attribute:String,role:String,tier:String,passive:String,descendantId:String},setup(){return{getAssetPath:f}}}),m=e=>(v("data-v-0bd3b453"),e=e(),y(),e),A={class:"col-md-4 col-xxl-4"},I=["href"],E={class:"card-body d-flex flex-center flex-row p-9"},P={class:"d-flex flex-center flex-column me-5"},B={key:0,class:"symbol symbol-65px symbol-circle mb-5"},F=["src"],L={class:"bg-light position-absolute rounded-circle translate-middle start-100 top-100 border border-2 h-30px w-30px ms-n3 mt-n3"},N=["src"],V=["src"],j=["src"],z=["src"],M=["src"],q={class:"fs-4 text-gray-800 fw-bold mb-0"},G={class:"fw-semobold text-gray-500"},H={class:"d-flex flex-center flex-column"},J={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},K={class:"fs-6 fw-bold text-gray-700"},O=m(()=>t("div",{class:"fw-semibold text-gray-500"},"역할",-1)),Q={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},R={class:"fs-6 fw-bold text-gray-700"},T=m(()=>t("div",{class:"fw-semibold text-gray-500"},"패시브 스킬",-1));function U(e,d,_,u,p,g){return s(),n("div",A,[t("a",{href:`#/dic/descendant/${e.descendantId}`,class:i(["card",e.cardClasses])},[t("div",E,[t("div",P,[e.avatar?(s(),n("div",B,[t("img",{src:e.avatar,class:i(e.tier),alt:"image"},null,10,F),t("div",L,[e.attribute==="none"?(s(),n("img",{key:0,src:e.getAssetPath("media/tfd/ico_char_attribute--none.png"),alt:"image",width:"100%"},null,8,N)):r("",!0),e.attribute==="ice"?(s(),n("img",{key:1,src:e.getAssetPath("media/tfd/ico_char_attribute--chill.png"),alt:"image",width:"100%"},null,8,V)):r("",!0),e.attribute==="electric"?(s(),n("img",{key:2,src:e.getAssetPath("media/tfd/ico_char_attribute--electric.png"),alt:"image",width:"100%"},null,8,j)):r("",!0),e.attribute==="fire"?(s(),n("img",{key:3,src:e.getAssetPath("media/tfd/ico_char_attribute--fire.png"),alt:"image",width:"100%"},null,8,z)):r("",!0),e.attribute==="poison"?(s(),n("img",{key:4,src:e.getAssetPath("media/tfd/ico_char_attribute--toxic.png"),alt:"image",width:"100%"},null,8,M)):r("",!0)])])):r("",!0),t("span",q,o(e.name),1),t("div",G,o(e.nameEng),1)]),t("div",H,[t("div",null,[t("div",J,[t("div",K,o(e.role),1),O]),t("div",Q,[t("div",R,o(e.passive),1),T])])])])],10,I)])}const W=l(D,[["render",U],["__scopeId","data-v-0bd3b453"]]),X=c({name:"dic-descendant",components:{CardDescendant:W},setup(){const e=w([]);return C(async()=>{const d=await b();e.value.push(...d)}),{descendant:e}}}),Y={class:"card"},Z={class:"card-body"},ee={class:"row g-6 g-xl-9"};function te(e,d,_,u,p,g){const h=k("CardDescendant");return s(),n("div",Y,[t("div",Z,[t("div",ee,[(s(!0),n(S,null,$(e.descendant,a=>(s(),x(h,{key:a.descendant_id,cardClasses:"shadow-sm",name:a.descendant_name,nameEng:a.eng_name,avatar:a.descendant_image_url,attribute:a.attribute,role:a.role,tier:a.tier,passive:a.skill_name,descendantId:a.descendant_id},null,8,["name","nameEng","avatar","attribute","role","tier","passive","descendantId"]))),128))])])])}const de=l(X,[["render",te]]);export{de as default};
