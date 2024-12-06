import{g as t}from"./assets-DG_-6kgt.js";import{d as b,L as l,_ as h,h as i,i as r,j as e,p as v,l as n,G as S,F as f,k as $,m as w,x as o,I as y,f as C}from"./index-Dgo1f1_0.js";const A=b({name:"card-1",components:{},props:{progress:Number,statusDataBadgeColor:String,statusDataColor:String,status:String,icon:String,title:String,description:String,date:String,budget:String,users:Array},setup(s){const d=l(()=>s.description?s.description:"CRM App application to HR efficiency"),c=l(()=>s.date?s.date:"Feb 21, 2021"),g=l(()=>s.budget?s.budget:"$284,900.00"),u=l(()=>s.status?s.status:"In Progress"),m=l(()=>s.statusDataBadgeColor?s.statusDataBadgeColor:"badge-light-primary"),a=l(()=>s.statusDataColor?s.statusDataColor:"bg-primary");return{getDescription:d,getDate:c,getBudget:g,getStatus:u,getStatusDataBadgeColor:m,getStatusDataColor:a}}}),P={href:"#",class:"card border border-2 border-gray-300 border-hover"},k={class:"card-header border-0 pt-9"},D={class:"card-title m-0"},M={class:"symbol symbol-50px w-50px bg-light"},x=["src"],j={class:"card-toolbar"},R={class:"card-body p-9"},B={class:"fs-3 fw-bold text-gray-900"},I={class:"text-gray-500 fw-semibold fs-5 mt-1 mb-7"},N={class:"d-flex flex-wrap mb-5"},F={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"},T={class:"fs-6 text-gray-800 fw-bold"},W=e("div",{class:"fw-semibold text-gray-500"},"Due Date",-1),E={class:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"},V={class:"fs-6 text-gray-800 fw-bold"},z=e("div",{class:"fw-semibold text-gray-500"},"Budget",-1),G=["title"],K=["aria-valuenow"],L={key:0,class:"symbol-group symbol-hover"},O=["title"],q=["src"];function H(s,d,c,g,u,m){return i(),r("a",P,[e("div",k,[e("div",D,[e("div",M,[e("img",{src:s.icon,alt:"image",class:"p-3"},null,8,x)])]),e("div",j,[e("span",{class:v([s.getStatusDataBadgeColor,"badge fw-bold me-auto px-4 py-3"])},n(s.getStatus),3)])]),e("div",R,[e("div",B,n(s.title),1),e("p",I,n(s.getDescription),1),e("div",N,[e("div",F,[e("div",T,n(s.getDate),1),W]),e("div",E,[e("div",V,n(s.getBudget),1),z])]),e("div",{class:"h-4px w-100 bg-light mb-5","data-bs-toggle":"tooltip",title:`This project ${s.progress}% completed`},[e("div",{class:v([s.getStatusDataColor,"rounded h-4px"]),role:"progressbar",style:S({width:s.progress+"%"}),"aria-valuenow":s.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,14,K)],8,G),s.users?(i(),r("div",L,[(i(!0),r(f,null,$(s.users,(a,p)=>(i(),r("div",{key:p,class:"symbol symbol-35px symbol-circle","data-bs-toggle":"tooltip",title:a.title},[a.src?(i(),r("img",{key:0,alt:"Pic",src:a.src},null,8,q)):(i(),r("span",{key:1,class:v(["symbol-label fw-bold",`bg-${a.state} text-inverse-${a.state}`])},n(a.initials),3))],8,O))),128))])):w("",!0)])])}const J=h(A,[["render",H]]),Q=b({name:"profile-projects",components:{KTCard:J},setup(){const s=[{name:"Emma Smith",src:t("media/avatars/300-6.jpg")},{name:"Rudy Stone",src:t("media/avatars/300-1.jpg")},{name:"Susan Redwood",initials:"S",state:"primary"}],d=[{name:"Alan Warden",initials:"A",state:"warning"},{name:"Brian Cox",src:t("media/avatars/300-5.jpg")}],c=[{name:"Mad Masy",src:t("media/avatars/300-6.jpg")},{name:"Cris Willson",src:t("media/avatars/300-1.jpg")},{name:"Mike Garcie",initials:"M",state:"info"}],g=[{name:"Nich Warden",initials:"N",state:"warning"},{name:"Rob Otto",initials:"R",state:"success"}],u=[{name:"Francis Mitcham",src:t("media/avatars/300-20.jpg")},{name:"Michelle Swanston",src:t("media/avatars/300-7.jpg")},{name:"Susan Redwood",initials:"S",state:"primary"}],m=[{name:"Emma Smith",src:t("media/avatars/300-6.jpg")},{name:"Rudy Stone",src:t("media/avatars/300-1.jpg")},{name:"Susan Redwood",initials:"S",state:"primary"}],a=[{name:"Meloday Macy",src:t("media/avatars/300-2.jpg")},{name:"Rabbin Watterman",initials:"S",state:"success"}],p=[{name:"Emma Smith",src:t("media/avatars/300-6.jpg")},{name:"Rudy Stone",src:t("media/avatars/300-1.jpg")},{name:"Susan Redwood",initials:"S",state:"primary"}],_=[{name:"Meloday Macy",src:t("media/avatars/300-2.jpg")},{name:"Rabbin Watterman",initials:"S",state:"danger"}];return{users1:s,users2:d,users3:c,users4:g,users5:u,users6:m,users7:a,users8:p,users9:_,getAssetPath:t}}}),U=y('<div class="d-flex flex-wrap flex-stack my-5"><h2 class="fs-2 fw-semibold my-2"> Projects <span class="fs-6 text-gray-500 ms-1">by Status</span></h2><div class="d-flex flex-wrap my-1"><div class="m-0"><select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-white form-select-sm fw-bold w-125px"><option value="Active" selected>Active</option><option value="Approved">In Progress</option><option value="Declined">To Do</option><option value="In Progress">Completed</option></select></div></div></div>',1),X={class:"row g-6 g-xl-9"},Y={class:"col-md-6 col-xl-4"},Z={class:"col-md-6 col-xl-4"},ss={class:"col-md-6 col-xl-4"},es={class:"col-md-6 col-xl-4"},as={class:"col-md-6 col-xl-4"},ts={class:"col-md-6 col-xl-4"},os={class:"col-md-6 col-xl-4"},is={class:"col-md-6 col-xl-4"},rs={class:"col-md-6 col-xl-4"},ls=y('<div class="d-flex flex-stack flex-wrap pt-10"><div class="fs-6 fw-semibold text-gray-700"> Showing 1 to 10 of 50 entries </div><ul class="pagination"><li class="page-item previous"><a href="#" class="page-link"><i class="previous"></i></a></li><li class="page-item active"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">4</a></li><li class="page-item"><a href="#" class="page-link">5</a></li><li class="page-item"><a href="#" class="page-link">6</a></li><li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li></ul></div>',1);function ns(s,d,c,g,u,m){const a=C("KTCard");return i(),r(f,null,[U,e("div",X,[e("div",Y,[o(a,{progress:50,title:"Fitnes App",icon:s.getAssetPath("media/svg/brand-logos/plurk.svg"),users:s.users1},null,8,["icon","users"])]),e("div",Z,[o(a,{status:"Pending","status-data-badge-color":"badge-light",progress:30,icon:s.getAssetPath("media/svg/brand-logos/disqus.svg"),title:"Leaf CRM",date:"May 10, 2021",budget:"$36,400.00",users:s.users2},null,8,["icon","users"])]),e("div",ss,[o(a,{status:"Completed","status-data-badge-color":"badge-light-success",progress:100,icon:s.getAssetPath("media/svg/brand-logos/figma-1.svg"),title:"Atica Banking",date:"Mar 14, 2021",budget:"$605,100.00",users:s.users3},null,8,["icon","users"])]),e("div",es,[o(a,{status:"Pending",progress:60,"status-data-badge-color":"badge-light",icon:s.getAssetPath("media/svg/brand-logos/sentry-3.svg"),title:"Finance Dispatch",budget:"$36,400.00",users:s.users4},null,8,["icon","users"])]),e("div",as,[o(a,{status:"In Progress",progress:40,icon:s.getAssetPath("media/svg/brand-logos/xing-icon.svg"),title:"9 Degree",date:"May 10, 2021",budget:"$36,400.00",users:s.users5},null,8,["icon","users"])]),e("div",ts,[o(a,{status:"In Progress",progress:70,icon:s.getAssetPath("media/svg/brand-logos/tvit.svg"),title:"GoPro App",date:"May 10, 2021",budget:"$36,400.00",users:s.users6},null,8,["icon","users"])]),e("div",os,[o(a,{status:"In Progress",progress:30,icon:s.getAssetPath("media/svg/brand-logos/aven.svg"),title:"Buldozer CRM",date:"May 10, 2021",budget:"$36,400.00",users:s.users7},null,8,["icon","users"])]),e("div",is,[o(a,{status:"Overdue",progress:10,"status-data-badge-color":"badge-light-danger",icon:s.getAssetPath("media/svg/brand-logos/treva.svg"),title:"Aviasales App",date:"May 10, 2021",budget:"$36,400.00",users:s.users8},null,8,["icon","users"])]),e("div",rs,[o(a,{status:"Completed",progress:100,"status-data-badge-color":"badge-light-success",icon:s.getAssetPath("media/svg/brand-logos/kanba.svg"),title:"Oppo CRM",date:"May 10, 2021",budget:"$36,400.00",users:s.users9},null,8,["icon","users"])]),ls])],64)}const gs=h(Q,[["render",ns]]);export{gs as default};