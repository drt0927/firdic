import{d as o,_ as n,h as a,i as d,j as t,l as e}from"./index-Blk8C98K.js";const i=o({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),r={class:"card"},c={class:"card-body p-0"},l={class:"card-px text-center py-20 my-10"},p={class:"fs-2x fw-bold mb-10"},_={class:"text-gray-500 fs-5 fw-semibold mb-13"},m=["innerHTML"],b=["data-bs-target"],g={class:"text-center px-5"},h=["src"];function f(s,u,x,y,S,T){return a(),d("div",r,[t("div",c,[t("div",l,[t("h2",p,e(s.title),1),t("p",_,[t("span",{innerHTML:s.description},null,8,m)]),t("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${s.modalId}`},e(s.buttonText),9,b)]),t("div",g,[t("img",{src:s.image,alt:"",class:"mw-100 mh-300px"},null,8,h)])])])}const v=n(i,[["render",f]]);export{v as K};
