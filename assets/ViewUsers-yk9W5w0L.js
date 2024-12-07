import{K as x}from"./Card-C4IRsraJ.js";import{g as a,a as y}from"./assets-xu5WeCcl.js";import{d,_ as p,f as c,h as t,i as o,j as e,x as r,F as _,k as w,p as k,l as i,H as m,I as M}from"./index-CCUIqZtT.js";const $=d({name:"view-users-modal",components:{},setup(){return{users:[{avatar:a("media/avatars/300-6.jpg"),name:"Emma Smith",email:"e.smith@kpmg.com.au",position:"Art Director",sales:"23,000"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",position:"Marketing Analytic",sales:"50,500"},{avatar:a("media/avatars/300-1.jpg"),name:"Max Smith",email:"max@kt.com",position:"Software Enginer",sales:"75,900"},{avatar:a("media/avatars/300-1.jpg"),name:"Sean Bean",email:"sean@dellito.com",position:"Web Developer",sales:"10,500"},{avatar:a("media/avatars/300-25.jpg"),name:"Brian Cox",email:"brian@exchange.com",position:"UI/UX Designer",sales:"20,000"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",position:"Head Of Marketing",sales:"9,300"},{avatar:a("media/avatars/300-9.jpg"),name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",position:"Software Arcitect",sales:"15,000"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",position:"System Admin",sales:"23,000"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",position:"Account Manager",sales:"45,000"},{avatar:a("media/avatars/300-23.jpg"),name:"Dan Wilson",email:"dam@consilting.com",position:"Web Desinger",sales:"90,500"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",position:"Corporate Finance",sales:"5,000"},{avatar:a("media/avatars/300-12.jpg"),name:"Ana Crown",email:"ana.cf@limtel.com",position:"Customer Relationship",sales:"70,000"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",position:"Marketing Executive",sales:"45,500"}],getAssetPath:a}}}),C={class:"modal fade",id:"kt_modal_view_users",tabindex:"-1","aria-hidden":"true"},U={class:"modal-dialog mw-650px"},j={class:"modal-content"},A={class:"modal-header pb-0 border-0 justify-content-end"},T={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},V={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},K=e("div",{class:"text-center mb-13"},[e("h1",{class:"mb-3"},"Browse Users"),e("div",{class:"text-gray-500 fw-semibold fs-5"},[m(" If you need more info, please check out our "),e("a",{href:"#",class:"link-primary fw-bold"},"Users Directory"),m(". ")])],-1),S={class:"mb-15"},D={class:"mh-375px scroll-y me-n7 pe-7"},I={class:"d-flex align-items-center"},B={class:"symbol symbol-35px symbol-circle"},E=["src"],N={class:"ms-6"},F={href:"#",class:"d-flex align-items-center fs-5 fw-bold text-gray-900 text-hover-primary"},P={class:"badge badge-light fs-8 fw-semibold ms-2"},W={class:"fw-semibold text-gray-500"},O={class:"d-flex"},H={class:"text-end"},R={class:"fs-5 fw-bold text-gray-900"},z=e("div",{class:"fs-7 text-muted"},"Sales",-1),L=M('<div class="d-flex justify-content-between"><div class="fw-semibold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-500"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="" checked><span class="form-check-label fw-semibold text-gray-500"> Allowed </span></label></div>',1);function X(n,f,h,b,v,g){const l=c("KTIcon");return t(),o("div",C,[e("div",U,[e("div",j,[e("div",A,[e("div",T,[r(l,{"icon-name":"cross","icon-class":"fs-1"})])]),e("div",V,[K,e("div",S,[e("div",D,[(t(!0),o(_,null,w(n.users,(s,u)=>(t(),o("div",{key:u,class:"d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"},[e("div",I,[e("div",B,[s.avatar?(t(),o("img",{key:0,alt:"Pic",src:s.avatar},null,8,E)):(t(),o("span",{key:1,class:k([`bg-light-${s.state} text-${s.state}`,"symbol-label fw-semibold"])},i(s.name.charAt(0)),3))]),e("div",N,[e("a",F,[m(i(s.name)+" ",1),e("span",P,i(s.position),1)]),e("div",W,i(s.email),1)])]),e("div",O,[e("div",H,[e("div",R," $"+i(s.sales),1),z])])]))),128))])]),L])])])])}const q=p($,[["render",X]]),G=d({name:"view-users",components:{KTModalCard:x,KTViewUsersModal:q},setup(){return{getIllustrationsPath:y}}});function J(n,f,h,b,v,g){const l=c("KTModalCard"),s=c("KTViewUsersModal");return t(),o(_,null,[r(l,{title:"View Users Modal Example",description:"Click on the below buttons to launch <br/>user lists example.",image:n.getIllustrationsPath("10.png"),"button-text":"View Users","modal-id":"kt_modal_view_users"},null,8,["image"]),r(s)],64)}const ee=p(G,[["render",J]]);export{ee as default};