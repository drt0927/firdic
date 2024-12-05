import{g as p}from"./assets-BT-vUMk6.js";import{d as m,r as d,J as b,L as u,a5 as $,a6 as g,aG as n,_ as y,f as h,h as _,i as w,j as e,p as f,x as c,o as z}from"./index-Blk8C98K.js";import{D as O}from"./Dropdown3-ebbodnLK.js";const A=m({name:"widget-1",components:{Dropdown3:O},props:{widgetClasses:String,widgetColor:String,strokeColor:String},setup(s){const t=d(null),o=d({}),i=b(),r=d([{name:"Net Profit",data:[30,45,32,70,40,40,40]}]),l=u(()=>i.mode);$(()=>{Object.assign(o.value,k(s.widgetColor,s.strokeColor))});const a=()=>{t.value&&t.value.updateOptions(k(s.widgetColor,s.strokeColor))};return g(l,()=>{a()}),{chart:o,series:r,chartRef:t,getAssetPath:p}}}),k=(s="primary",t)=>{const o=n("--bs-gray-500"),i=n("--bs-gray-200"),r=n(`--bs-${s}`);return{chart:{fontFamily:"inherit",type:"area",toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:5,left:0,blur:3,color:t,opacity:.5}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:0},stroke:{curve:"smooth",show:!0,width:3,colors:[t]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:o,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:i,width:1,dashArray:3}}},yaxis:{min:0,max:80,labels:{show:!1,style:{colors:o,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(l){return"$"+l+" thousands"}},marker:{show:!1}},markers:{colors:[r],strokeColors:[t],strokeWidth:3}}},T={class:"card card-xxl-stretch"},H=e("h3",{class:"card-title fw-bold text-white"},"Sales Statistics",-1),P={class:"card-toolbar"},R={class:"card-body p-0"},D={class:"card-p mt-n20 position-relative"},B={class:"row m-0"},F={class:"col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7"},J=e("a",{href:"#",class:"text-warning fw-semibold fs-6"}," Weekly Sales ",-1),W={class:"col bg-light-primary px-6 py-8 rounded-2 mb-7"},N=e("a",{href:"#",class:"text-primary fw-semibold fs-6"}," New Users ",-1),j={class:"row m-0"},L={class:"col bg-light-danger px-6 py-8 rounded-2 me-7"},I=e("a",{href:"#",class:"text-danger fw-semibold fs-6 mt-2"}," Item Orders ",-1),K={class:"col bg-light-success px-6 py-8 rounded-2"},V=e("a",{href:"#",class:"text-success fw-semibold fs-6 mt-2"}," Bug Reports ",-1);function E(s,t,o,i,r,l){const a=h("KTIcon"),v=h("Dropdown3"),x=h("apexchart");return _(),w("div",T,[e("div",{class:f([`bg-${s.widgetColor}`,"card-header border-0 py-5"])},[H,e("div",P,[e("button",{type:"button",class:f([`btn-active-color-${s.widgetColor}`,"btn btn-sm btn-icon btn-color-white btn-active-white border-0 me-n3"]),"data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},[c(a,{"icon-name":"category","icon-class":"fs-2"})],2),c(v)])],2),e("div",R,[c(x,{ref:"chartRef",class:f([`bg-${s.widgetColor}`,"mixed-widget-2-chart card-rounded-bottom"]),options:s.chart,series:s.series,height:"200",type:"area"},null,8,["class","options","series"]),e("div",D,[e("div",B,[e("div",F,[c(a,{"icon-name":"chart-simple","icon-class":"fs-3x text-warning d-block my-2"}),J]),e("div",W,[c(a,{"icon-name":"plus","icon-class":"fs-3x text-primary d-block my-2"}),N])]),e("div",j,[e("div",L,[c(a,{"icon-name":"abstract-26","icon-class":"fs-3x text-danger d-block my-2"}),I]),e("div",K,[c(a,{"icon-name":"sms","icon-class":"fs-3x text-success d-block my-2"}),V])])])])])}const Be=y(A,[["render",E]]),G=m({name:"widget-7",components:{Dropdown3:O},props:{widgetClasses:String,chartColor:String,chartHeight:String},setup(s){const t=d(null),o=d({}),i=b(),r=[{name:"Net Profit",data:[30,30,60,25,25,40]}],l=u(()=>i.mode);z(()=>{Object.assign(o.value,C(s.chartColor,s.chartHeight))});const a=()=>{t.value&&t.value.updateOptions(C(s.chartColor,s.chartHeight))};return g(l,()=>{a()}),{chart:o,series:r,chartRef:t,getAssetPath:p}}}),C=(s="primary",t="auto")=>{const o=n("--bs-gray-800"),i=n("--bs-gray-300"),r=n(`--bs-${s}`),l=n(`--bs-${s}-light`);return{chart:{fontFamily:"inherit",type:"area",height:t,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[r]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:o,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:i,width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{min:0,max:65,labels:{show:!1,style:{colors:o,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(a){return"$"+a+" thousands"}}},colors:[l],markers:{colors:[l],strokeColors:[r],strokeWidth:3}}},Y={class:"card-header border-0 py-5"},U=e("h3",{class:"card-title align-items-start flex-column"},[e("span",{class:"card-label fw-bold fs-3 mb-1"},"Trends"),e("span",{class:"text-muted fw-semibold fs-7"},"Latest trends")],-1),q={class:"card-toolbar"},Q={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},X={class:"card-body d-flex flex-column"},Z={class:"mt-5"},ee={class:"d-flex flex-stack mb-5"},se={class:"d-flex align-items-center me-2"},te={class:"symbol symbol-50px me-3"},oe={class:"symbol-label bg-light"},ae=["src"],re=e("div",null,[e("a",{href:"#",class:"fs-6 text-gray-800 text-hover-primary fw-bold"},"Top Authors"),e("div",{class:"fs-7 text-muted fw-semibold mt-1"}," Ricky Hunt, Sandra Trepp ")],-1),le=e("div",{class:"badge badge-light fw-semibold py-4 px-3"},"+82$",-1),ie={class:"d-flex flex-stack mb-5"},ne={class:"d-flex align-items-center me-2"},ce={class:"symbol symbol-50px me-3"},de={class:"symbol-label bg-light"},he=["src"],fe=e("div",null,[e("a",{href:"#",class:"fs-6 text-gray-800 text-hover-primary fw-bold"},"Top Sales"),e("div",{class:"fs-7 text-muted fw-semibold mt-1"},"PitStop Emails")],-1),pe=e("div",{class:"badge badge-light fw-semibold py-4 px-3"},"+82$",-1),me={class:"d-flex flex-stack"},be={class:"d-flex align-items-center me-2"},ue={class:"symbol symbol-50px me-3"},ge={class:"symbol-label bg-light"},ye=["src"],_e=e("div",{class:"py-1"},[e("a",{href:"#",class:"fs-6 text-gray-800 text-hover-primary fw-bold"},"Top Engagement"),e("div",{class:"fs-7 text-muted fw-semibold mt-1"},"KT.com")],-1),we=e("div",{class:"badge badge-light fw-semibold py-4 px-3"},"+82$",-1);function ve(s,t,o,i,r,l){const a=h("KTIcon"),v=h("Dropdown3"),x=h("apexchart");return _(),w("div",{class:f([s.widgetClasses,"card"])},[e("div",Y,[U,e("div",q,[e("button",Q,[c(a,{"icon-name":"category","icon-class":"fs-2"})]),c(v)])]),e("div",X,[c(x,{ref:"chartRef",class:"mixed-widget-5-chart card-rounded-top",options:s.chart,series:s.series,type:"area",height:s.chartHeight},null,8,["options","series","height"]),e("div",Z,[e("div",ee,[e("div",se,[e("div",te,[e("div",oe,[e("img",{src:s.getAssetPath("media/svg/brand-logos/plurk.svg"),alt:"",class:"h-50"},null,8,ae)])]),re]),le]),e("div",ie,[e("div",ne,[e("div",ce,[e("div",de,[e("img",{src:s.getAssetPath("media/svg/brand-logos/figma-1.svg"),alt:"",class:"h-50"},null,8,he)])]),fe]),pe]),e("div",me,[e("div",be,[e("div",ue,[e("div",ge,[e("img",{src:s.getAssetPath("media/svg/brand-logos/vimeo.svg"),alt:"",class:"h-50"},null,8,ye)])]),_e]),we])])])],2)}const Fe=y(G,[["render",ve]]),xe=m({name:"widget-7",props:{widgetClasses:String,chartColor:String,chartHeight:String},setup(s){const t=d(null),o=d({}),i=b(),r=d([{name:"Net Profit",data:[15,25,15,40,20,50]}]),l=u(()=>i.mode);$(()=>{Object.assign(o.value,S(s.chartColor,s.chartHeight))});const a=()=>{t.value&&t.value.updateOptions(S(s.chartColor,s.chartHeight))};return g(l,()=>{a()}),{chart:o,series:r,chartRef:t,refreshChart:a,getAssetPath:p}}}),S=(s="primary",t="auto")=>{const o=n("--bs-gray-800"),i=n("--bs-gray-300"),r=n(`--bs-${s}`),l=n(`--bs-${s}-light`);return{chart:{fontFamily:"inherit",type:"area",height:t,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[r]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:o,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:i,width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{min:0,max:60,labels:{show:!1,style:{colors:o,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(a){return"$"+a+" thousands"}}},colors:[l],markers:{colors:[l],strokeColors:[r],strokeWidth:3}}},$e={class:"card-body d-flex flex-column p-0"},ke={class:"flex-grow-1 card-p pb-0"},Ce={class:"d-flex flex-stack flex-wrap"},Se=e("div",{class:"me-2"},[e("a",{href:"#",class:"text-gray-900 text-hover-primary fw-bold fs-3"},"Generate Reports"),e("div",{class:"text-muted fs-7 fw-semibold"}," Finance and accounting reports ")],-1);function Me(s,t,o,i,r,l){const a=h("apexchart");return _(),w("div",{class:f([s.widgetClasses,"card"])},[e("div",$e,[e("div",ke,[e("div",Ce,[Se,e("div",{class:f([`text-${s.chartColor}`,"fw-bold fs-3"])},"$24,500",2)])]),c(a,{ref:"chartRef",class:"mixed-widget-7-chart card-rounded-bottom",options:s.chart,series:s.series,type:"area",height:s.chartHeight},null,8,["options","series","height"])])],2)}const Je=y(xe,[["render",Me]]),Oe=m({name:"widget-12",props:{widgetClasses:String,chartColor:String,chartHeight:String},setup(s){const t=d(null),o=d({}),i=b(),r=d([{name:"Net Profit",data:[50,60,70,80,60,50,70,60]},{name:"Revenue",data:[50,60,70,80,60,50,70,60]}]),l=u(()=>i.mode);$(()=>{Object.assign(o.value,M(s.chartColor,s.chartHeight))});const a=()=>{t.value&&t.value.updateOptions(M(s.chartColor,s.chartHeight))};return g(l,()=>{a()}),{chart:o,series:r,chartRef:t,refreshChart:a,getAssetPath:p}}}),M=(s="primary",t="auto")=>{const o=n("--bs-gray-500"),i=n("--bs-gray-200"),r=n("--bs-gray-300"),l=n(`--bs-${s}`);return{chart:{fontFamily:"inherit",type:"bar",height:t,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"50%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:o,fontSize:"12px"}}},yaxis:{labels:{style:{colors:o,fontSize:"12px"}}},fill:{type:"solid"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(a){return"$"+a+" revenue"}}},colors:[l,r],grid:{padding:{top:10},borderColor:i,strokeDashArray:4,yaxis:{lines:{show:!0}}}}},ze={class:"card-body p-0 d-flex justify-content-between flex-column overflow-hidden"},Ae={class:"d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3"},Te=e("div",{class:"me-2"},[e("span",{class:"fw-bold text-gray-800 d-block fs-3"},"Sales"),e("span",{class:"text-gray-500 fw-semibold"},"Oct 8 - Oct 26 21")],-1);function He(s,t,o,i,r,l){const a=h("apexchart");return _(),w("div",{class:f([s.widgetClasses,"card"])},[e("div",ze,[e("div",Ae,[Te,e("div",{class:f(["fw-bold fs-3",`text-${s.chartColor}`])},"$15,300",2)]),c(a,{ref:"chartRef",class:"mixed-widget-10-chart",options:s.chart,series:s.series,type:"bar",height:s.chartHeight},null,8,["options","series","height"])])],2)}const We=y(Oe,[["render",He]]);export{Be as M,Fe as a,Je as b,We as c};
