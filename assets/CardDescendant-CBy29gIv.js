import{g as n}from"./assets-CVY5gKEc.js";import{d as c,_ as l,h as s,i as a,j as t,p as o,m as r,l as i,am as m,an as h}from"./index-CybLPJ6C.js";const g=c({name:"card-descendant",components:{},props:{cardClasses:String,avatar:String,color:String,name:String,nameEng:String,attribute:String,role:String,tier:String,passive:String,descendantId:String},setup(){return{getAssetPath:n}}}),d=e=>(m("data-v-93fe91f9"),e=e(),h(),e),p={class:"col-md-6 col-xxl-4"},_=["href"],u={class:"card-body d-flex flex-center flex-column p-9"},b={key:0,class:"symbol symbol-65px symbol-circle mb-5"},f=["src"],v={class:"bg-light position-absolute rounded-circle translate-middle start-100 top-100 border border-2 border-black h-30px w-30px ms-n3 mt-n3"},y=["src"],w=["src"],S=["src"],C=["src"],k=["src"],x={href:"#",class:"fs-4 text-gray-800 text-hover-primary fw-bold mb-0"},A={class:"fw-semobold text-gray-500 mb-6"},D={class:"d-flex flex-center flex-wrap mb-5"},I={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},P={class:"fs-6 fw-bold text-gray-700"},E=d(()=>t("div",{class:"fw-semibold text-gray-500"},"역할",-1)),$={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},B={class:"fs-6 fw-bold text-gray-700"},N=d(()=>t("div",{class:"fw-semibold text-gray-500"},"패시브 스킬",-1));function V(e,j,z,q,F,G){return s(),a("div",p,[t("a",{href:`#/dic/descendant/${e.descendantId}/info`,class:o(["card",e.cardClasses])},[t("div",u,[e.avatar?(s(),a("div",b,[t("img",{src:e.avatar,class:o(e.tier),alt:"image"},null,10,f),t("div",v,[e.attribute==="none"?(s(),a("img",{key:0,src:e.getAssetPath("media/tfd/ico_char_attribute--none.png"),alt:"image",width:"100%"},null,8,y)):r("",!0),e.attribute==="ice"?(s(),a("img",{key:1,src:e.getAssetPath("media/tfd/ico_char_attribute--chill.png"),alt:"image",width:"100%"},null,8,w)):r("",!0),e.attribute==="electric"?(s(),a("img",{key:2,src:e.getAssetPath("media/tfd/ico_char_attribute--electric.png"),alt:"image",width:"100%"},null,8,S)):r("",!0),e.attribute==="fire"?(s(),a("img",{key:3,src:e.getAssetPath("media/tfd/ico_char_attribute--fire.png"),alt:"image",width:"100%"},null,8,C)):r("",!0),e.attribute==="poison"?(s(),a("img",{key:4,src:e.getAssetPath("media/tfd/ico_char_attribute--toxic.png"),alt:"image",width:"100%"},null,8,k)):r("",!0)])])):r("",!0),t("a",x,i(e.name),1),t("div",A,i(e.nameEng),1),t("div",D,[t("div",I,[t("div",P,i(e.role),1),E]),t("div",$,[t("div",B,i(e.passive),1),N])])])],10,_)])}const K=l(g,[["render",V],["__scopeId","data-v-93fe91f9"]]);export{K as C};