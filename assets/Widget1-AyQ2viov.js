import{g as m}from"./assets-BT-vUMk6.js";import{D as g}from"./Dropdown1-myiT5cOv.js";import{d as _,_ as f,f as l,h as o,i as n,j as t,x as c,F as b,k as u,p as a,l as d}from"./index-Blk8C98K.js";const h=_({name:"kt-widget-1",components:{Dropdown1:g},props:{widgetClasses:String},setup(){return{items:[{icon:"abstract-26",color:"success",title:"Project Briefing",description:"Project Manager"},{icon:"pencil",color:"warning",title:"Concept Design",description:"Art Director"},{icon:"message-text-2",color:"primary",title:"Functional Logics",description:"Lead Developer"},{icon:"disconnect",color:"danger",title:"Development",description:"DevOps"},{icon:"security-user",color:"info",title:"Testing",description:"QA Managers"}],getAssetPath:m}}}),v={class:"card-header border-0 pt-5"},y=t("h3",{class:"card-title align-items-start flex-column"},[t("span",{class:"card-label fw-bold text-gray-900"},"Tasks Overview"),t("span",{class:"text-muted mt-1 fw-semibold fs-7"},"Pending 10 tasks")],-1),x={class:"card-toolbar"},w={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},k={class:"card-body pt-5"},D={class:"symbol symbol-50px me-5"},C={class:"d-flex flex-column"},$={href:"#",class:"text-gray-900 text-hover-primary fs-6 fw-bold"},L={class:"text-muted fw-semibold"};function B(e,P,T,j,A,F){const i=l("KTIcon"),p=l("Dropdown1");return o(),n("div",{class:a(["card",e.widgetClasses])},[t("div",v,[y,t("div",x,[t("button",w,[c(i,{"icon-name":"category","icon-class":"fs-2"})]),c(p)])]),t("div",k,[(o(!0),n(b,null,u(e.items,(s,r)=>(o(),n("div",{key:r,class:a([{"mb-7":e.items.length-1!==r},"d-flex align-items-center"])},[t("div",D,[t("span",{class:a([`bg-light-${s.color}`,"symbol-label"])},[c(i,{"icon-name":s.icon,"icon-class":`text-${s.color} fs-2x`},null,8,["icon-name","icon-class"])],2)]),t("div",C,[t("a",$,d(s.title),1),t("span",L,d(s.description),1)])],2))),128))])],2)}const N=f(h,[["render",B]]);export{N as L};
