import{g as x}from"./assets-BT-vUMk6.js";import{d as n,_ as i,h as a,i as d,j as e,l as h,x as s,F as u,H as y,f as c}from"./index-Blk8C98K.js";const b=n({name:"files-component",props:{folderName:String,files:String},components:{},setup(){return{getAssetPath:x}}}),$={class:"col-12 col-sm-12 col-xl"},v={class:"card h-100"},w={class:"card-body d-flex justify-content-center text-center flex-column p-8"},T={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},k={class:"symbol symbol-75px mb-6"},F=["src"],C=e("div",{class:"fs-5 fw-bold mb-2"},"Finance",-1),A=e("div",{class:"fs-7 fw-semobold text-gray-500 mt-auto"},"7 files",-1);function K(o,r,f,_,m,p){return a(),d("div",$,[e("div",v,[e("div",w,[e("a",T,[e("div",k,[e("img",{src:o.getAssetPath("media/svg/files/folder-document.svg"),alt:""},null,8,F)]),C]),A])])])}const S=i(b,[["render",K]]),M=n({name:"file-component",props:{fileTitle:String,createdAt:String,fileType:String},components:{}}),R={class:"col-12 col-sm-12 col-xl"},j={class:"card h-100"},D={class:"card-body d-flex justify-content-center text-center flex-column p-8"},P={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},I={class:"symbol symbol-60px mb-6"},N=["src"],B={class:"fs-5 fw-bold mb-2"},U={class:"fs-7 fw-semobold text-gray-500 mt-auto"};function V(o,r,f,_,m,p){return a(),d("div",R,[e("div",j,[e("div",D,[e("a",P,[e("div",I,[e("img",{src:`media/svg/files/${o.fileType}.svg`,alt:""},null,8,N)]),e("div",B,h(o.fileTitle),1)]),e("div",U,h(o.createdAt),1)])])])}const q=i(M,[["render",V]]),H=n({name:"profile-documents",components:{KTFolder:S,KTFile:q},setup(){return{getAssetPath:x}}}),E={class:"d-flex flex-wrap flex-stack mb-6"},L=e("h3",{class:"fw-bold my-2"},[y(" My Documents "),e("span",{class:"fs-6 text-gray-400 fw-semibold ms-1"},"100+ resources")],-1),O={class:"d-flex my-2"},z={class:"d-flex align-items-center position-relative me-4"},G=e("input",{type:"text",id:"kt_filter_search",class:"form-control form-control-white form-control-sm w-150px ps-9",placeholder:"Search"},null,-1),J=e("a",{href:"#",class:"btn btn-primary btn-sm","data-bs-toggle":"tooltip",title:"Coming soon"}," File Manager ",-1),Q={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},W=e("div",{class:"col d-none d-xl-block"},null,-1),X=e("div",{class:"col d-none d-xl-block"},null,-1),Y={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},Z={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},ee=e("div",{class:"col d-none d-xl-block"},null,-1),se=e("div",{class:"col d-none d-xl-block"},null,-1),te=e("div",{class:"col d-none d-xl-block"},null,-1);function oe(o,r,f,_,m,p){const g=c("KTIcon"),l=c("KTFolder"),t=c("KTFile");return a(),d(u,null,[e("div",E,[L,e("div",O,[e("div",z,[s(g,{"icon-name":"magnifier","icon-class":"fs-3 position-absolute ms-3"}),G]),J])]),e("div",Q,[s(l,{"folder-name":"Finance",files:"7"}),s(l,{"folder-name":"Customers",files:"3"}),s(l,{"folder-name":"CRM Project",files:"25"}),W,X]),e("div",Y,[s(t,{"file-title":"Project Reqs..","file-type":"pdf","created-at":"3 days ago"}),s(t,{"file-title":"CRM App Docs..","file-type":"doc","created-at":"3 days ago"}),s(t,{"file-title":"User CRUD Styles","file-type":"css","created-at":"4 days ago"}),s(t,{"file-title":"Metronic Logo","file-type":"ai","created-at":"5 days ago"}),s(t,{"file-title":"Orders backup","file-type":"sql","created-at":"1 week ago"})]),e("div",Z,[s(t,{"file-title":"UTAIR CRM API Co..","file-type":"xml","created-at":"2 weeks ago"}),s(t,{"file-title":"Tower Hill App..","file-type":"tif","created-at":"3 weeks ago"}),ee,se,te])],64)}const ne=i(H,[["render",oe]]);export{ne as default};
