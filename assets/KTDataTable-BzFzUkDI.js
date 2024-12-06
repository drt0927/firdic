import{d as y,r as m,o as q,a6 as v,L as b,_ as k,h as d,i as c,j as i,A as _,ak as A,m as C,F as L,k as S,p as f,G as $,H as O,l as w,z as B,f as P,x as h,n as E,aw as V,w as F,al as D}from"./index-CybLPJ6C.js";import{g as M}from"./assets-CVY5gKEc.js";const H=y({name:"table-head-row",props:{checkboxEnabledValue:{type:Boolean,required:!1,default:!1},checkboxEnabled:{type:Boolean,required:!1,default:!1},sortLabel:{type:String,required:!1,default:null},sortOrder:{type:String,required:!1,default:"asc"},header:{type:Array,required:!0}},emits:["on-select","on-sort"],components:{},setup(e,{emit:t}){const a=m(!1),n=m({label:e.sortLabel,order:e.sortOrder});q(()=>{t("on-sort",n.value)}),v(()=>e.checkboxEnabledValue,s=>{a.value=s});const r=()=>{t("on-select",a.value)},g=(s,l)=>{l&&(n.value.label===s?n.value.order==="asc"?n.value.order="desc":n.value.order==="desc"&&(n.value.order="asc"):(n.value.order="asc",n.value.label=s),t("on-sort",n.value))},o=b(()=>n.value.order==="asc"?"&#x2191;":"&#x2193;");return{onSort:g,selectAll:r,checked:a,sortArrow:o,columnLabelAndOrder:n}}}),R={class:"text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0"},U={key:0,style:{width:"30px"}},j={class:"form-check form-check-sm form-check-custom form-check-solid me-3"},z=["onClick"],W=["innerHTML"];function K(e,t,a,n,r,g){return d(),c("thead",null,[i("tr",R,[e.checkboxEnabled?(d(),c("th",U,[i("div",j,[_(i("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=o=>e.checked=o),onChange:t[1]||(t[1]=o=>e.selectAll())},null,544),[[A,e.checked]])])])):C("",!0),(d(!0),c(L,null,S(e.header,(o,s)=>(d(),c("th",{key:s,class:f({"text-end":s===e.header.length-1}),onClick:l=>e.onSort(o.columnLabel,o.sortEnabled),style:$({minWidth:o.columnWidth?`${o.columnWidth}px`:"0",width:"auto",cursor:o.sortEnabled?"pointer":"auto"})},[O(w(o.columnName)+" ",1),e.columnLabelAndOrder.label===o.columnLabel&&o.sortEnabled?(d(),c("span",{key:0,innerHTML:e.sortArrow},null,8,W)):C("",!0)],14,z))),128))])])}const G=k(H,[["render",K]]),J=y({name:"table-body-row",components:{},props:{header:{type:Array,required:!0},data:{type:Array,required:!0},currentlySelectedItems:{type:Array,required:!1,default:()=>[]},checkboxEnabled:{type:Boolean,required:!1,default:!1},checkboxLabel:{type:String,required:!1,default:"id"}},emits:["on-select"],setup(e,{emit:t}){const a=m([]);return v(()=>[...e.currentlySelectedItems],r=>{e.currentlySelectedItems.length!==0?a.value=[...new Set([...a.value,...r])]:a.value=[]}),{selectedItems:a,onChange:()=>{t("on-select",a.value)}}}}),Q={class:"fw-semibold text-gray-600"},X={key:0},Y={class:"form-check form-check-sm form-check-custom form-check-solid"},Z=["value"];function x(e,t,a,n,r,g){return d(),c("tbody",Q,[(d(!0),c(L,null,S(e.data,(o,s)=>(d(),c("tr",{key:s},[e.checkboxEnabled?(d(),c("td",X,[i("div",Y,[_(i("input",{class:"form-check-input",type:"checkbox",value:o[e.checkboxLabel],"onUpdate:modelValue":t[0]||(t[0]=l=>e.selectedItems=l),onChange:t[1]||(t[1]=(...l)=>e.onChange&&e.onChange(...l))},null,40,Z),[[A,e.selectedItems]])])])):C("",!0),(d(!0),c(L,null,S(e.header,(l,u)=>(d(),c("td",{key:u,class:f({"text-end":u===e.header.length-1})},[B(e.$slots,`${l.columnLabel}`,{row:o},()=>[O(w(o),1)])],2))),128))]))),128))])}const ee=k(J,[["render",x]]),te=y({name:"kt-loading",components:{}}),ae={class:"overlay-layer card-rounded bg-dark bg-opacity-5"},ne=i("div",{class:"spinner-border text-primary",role:"status"},[i("span",{class:"visually-hidden"},"Loading...")],-1),oe=[ne];function se(e,t,a,n,r,g){return d(),c("div",ae,oe)}const le=k(te,[["render",se]]),re=y({name:"table-body",props:{header:{type:Array,required:!0},data:{type:Array,required:!0},emptyTableText:{type:String,default:"No data found"},sortLabel:{type:String,required:!1,default:null},sortOrder:{type:String,required:!1,default:"asc"},checkboxEnabled:{type:Boolean,required:!1,default:!1},checkboxLabel:{type:String,required:!1,default:"id"},loading:{type:Boolean,required:!1,default:!1}},emits:["on-sort","on-items-select"],components:{TableHeadRow:G,TableBodyRow:ee,Loading:le},setup(e,{emit:t}){const a=m([]),n=m([]),r=m(!1);v(()=>e.data,()=>{a.value=[],n.value=[],r.value=!1,e.data.forEach(l=>{l[e.checkboxLabel]&&n.value.push(l[e.checkboxLabel])})});const g=l=>{r.value=l,l?a.value=[...new Set([...a.value,...n.value])]:a.value=[]},o=l=>{a.value=[],l.forEach(u=>{a.value.includes(u)||a.value.push(u)})},s=l=>{t("on-sort",l)};return v(()=>[...a.value],l=>{l&&t("on-items-select",l)}),q(()=>{a.value=[],n.value=[],r.value=!1,e.data.forEach(l=>{l[e.checkboxLabel]&&n.value.push(l[e.checkboxLabel])})}),{onSort:s,selectedItems:a,selectAll:g,itemsSelect:o,check:r}}}),ie={class:"table-responsive"},de={key:1,class:"odd"},ue={colspan:"7",class:"dataTables_empty"};function ce(e,t,a,n,r,g){const o=P("TableHeadRow"),s=P("TableBodyRow"),l=P("Loading");return d(),c("div",ie,[i("table",{class:f([[e.loading&&"overlay overlay-block"],"table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"])},[h(o,{onOnSort:e.onSort,onOnSelect:e.selectAll,checkboxEnabledValue:e.check,checkboxEnabled:e.checkboxEnabled,"sort-label":e.sortLabel,"sort-order":e.sortOrder,header:e.header},null,8,["onOnSort","onOnSelect","checkboxEnabledValue","checkboxEnabled","sort-label","sort-order","header"]),e.data.length!==0?(d(),E(s,{key:0,onOnSelect:e.itemsSelect,currentlySelectedItems:e.selectedItems,data:e.data,header:e.header,"checkbox-enabled":e.checkboxEnabled,"checkbox-label":e.checkboxLabel},V({_:2},[S(e.$slots,(u,T)=>({name:T,fn:F(({row:N})=>[B(e.$slots,T,{row:N})])}))]),1032,["onOnSelect","currentlySelectedItems","data","header","checkbox-enabled","checkbox-label"])):(d(),c("tr",de,[i("td",ue,w(e.emptyTableText),1)])),e.loading?(d(),E(l,{key:2})):C("",!0)],2)])}const ge=k(re,[["render",ce]]),be=y({name:"table-items-per-page-select",components:{},props:{itemsPerPage:{type:Number,default:10},itemsPerPageDropdownEnabled:{type:Boolean,required:!1,default:!0}},emits:["update:itemsPerPage"],setup(e,{emit:t}){const a=m(10);return q(()=>{a.value=e.itemsPerPage}),{itemsCountInTable:b({get(){return e.itemsPerPage},set(r){t("update:itemsPerPage",r)}})}}}),me={class:"col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"},pe={for:"items-per-page"},fe=i("option",{value:10},"10",-1),he=i("option",{value:25},"25",-1),Pe=i("option",{value:50},"50",-1),ye=[fe,he,Pe];function ke(e,t,a,n,r,g){return d(),c("div",me,[i("label",pe,[e.itemsPerPageDropdownEnabled?_((d(),c("select",{key:0,class:"form-select form-select-sm form-select-solid","onUpdate:modelValue":t[0]||(t[0]=o=>e.itemsCountInTable=o),name:"items-per-page",id:"items-per-page"},ye,512)),[[D,e.itemsCountInTable]]):C("",!0)])])}const ve=k(be,[["render",ke]]),$e=y({name:"table-pagination",components:{},props:{maxVisibleButtons:{type:Number,required:!1,default:5},totalPages:{type:Number,required:!0},total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},emits:["page-change"],setup(e,{emit:t}){const a=b(()=>{const p=Math.floor(e.maxVisibleButtons/2);return e.totalPages<e.maxVisibleButtons||e.currentPage===1||e.currentPage<=Math.floor(e.maxVisibleButtons/2)||e.currentPage+p>e.totalPages&&e.totalPages===e.maxVisibleButtons?1:e.currentPage+p>e.totalPages?e.totalPages-e.maxVisibleButtons+1:e.currentPage-p}),n=b(()=>Math.min(a.value+e.maxVisibleButtons-1,e.totalPages)),r=b(()=>{const p=[];for(let I=a.value;I<=n.value;I+=1)p.push({name:I,isDisabled:I===e.currentPage});return p}),g=b(()=>e.currentPage===1),o=b(()=>e.currentPage===e.totalPages);return{startPage:a,endPage:n,pages:r,isInFirstPage:g,isInLastPage:o,onClickFirstPage:()=>{t("page-change",1)},onClickPreviousPage:()=>{t("page-change",e.currentPage-1)},onClickPage:p=>{t("page-change",p)},onClickNextPage:()=>{t("page-change",e.currentPage+1)},onClickLastPage:()=>{t("page-change",e.totalPages)},isPageActive:p=>e.currentPage===p,getAssetPath:M}}}),Ce={class:"col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"},Se={class:"dataTables_paginate paging_simple_numbers"},Te={class:"pagination"},Ie=["onClick"];function Le(e,t,a,n,r,g){const o=P("KTIcon");return d(),c("div",Ce,[i("div",Se,[i("ul",Te,[i("li",{class:f(["paginate_button page-item",{disabled:e.isInFirstPage}]),style:$({cursor:e.isInFirstPage?"auto":"pointer"})},[i("a",{class:"page-link",onClick:t[0]||(t[0]=(...s)=>e.onClickFirstPage&&e.onClickFirstPage(...s))},[h(o,{"icon-name":"double-left","icon-class":"fs-2"})])],6),i("li",{class:f(["paginate_button page-item",{disabled:e.isInFirstPage}]),style:$({cursor:e.isInFirstPage?"auto":"pointer"})},[i("a",{class:"page-link",onClick:t[1]||(t[1]=(...s)=>e.onClickPreviousPage&&e.onClickPreviousPage(...s))},[h(o,{"icon-name":"left","icon-class":"fs-2"})])],6),(d(!0),c(L,null,S(e.pages,(s,l)=>(d(),c("li",{class:f(["paginate_button page-item",{active:e.isPageActive(s.name)}]),style:$({cursor:s.isDisabled?"auto":"pointer"}),key:l},[i("a",{class:"page-link",onClick:u=>e.onClickPage(s.name)},w(s.name),9,Ie)],6))),128)),i("li",{class:f(["paginate_button page-item",{disabled:e.isInLastPage}]),style:$({cursor:e.isInLastPage?"auto":"pointer"})},[i("a",{class:"paginate_button page-link",onClick:t[2]||(t[2]=(...s)=>e.onClickNextPage&&e.onClickNextPage(...s))},[h(o,{"icon-name":"right","icon-class":"fs-2"})])],6),i("li",{class:f(["paginate_button page-item",{disabled:e.isInLastPage}]),style:$({cursor:e.isInLastPage?"auto":"pointer"})},[i("a",{class:"paginate_button page-link",onClick:t[3]||(t[3]=(...s)=>e.onClickLastPage&&e.onClickLastPage(...s))},[h(o,{"icon-name":"double-right","icon-class":"fs-2"})])],6)])])])}const qe=k($e,[["render",Le]]),we=y({name:"table-footer",components:{TableItemsPerPageSelect:ve,TablePagination:qe},props:{count:{type:Number,required:!1,default:5},itemsPerPage:{type:Number,default:5},itemsPerPageDropdownEnabled:{type:Boolean,required:!1,default:!0},currentPage:{type:Number,required:!1,default:1}},emits:["update:itemsPerPage","page-change"],setup(e,{emit:t}){const a=m(e.currentPage),n=m(e.itemsPerPage);v(()=>e.count,()=>{a.value=1}),v(()=>n.value,()=>{a.value=1}),q(()=>{n.value=e.itemsPerPage});const r=s=>{a.value=s,t("page-change",a.value)},g=b({get(){return e.itemsPerPage},set(s){n.value=s,t("update:itemsPerPage",s)}}),o=b(()=>Math.ceil(e.count/g.value));return{pageChange:r,pageCount:o,page:a,itemsCountInTable:g,inputItemsPerPage:n}}}),Ee={class:"row"};function _e(e,t,a,n,r,g){const o=P("TableItemsPerPageSelect"),s=P("TablePagination");return d(),c("div",Ee,[h(o,{itemsPerPage:e.itemsCountInTable,"onUpdate:itemsPerPage":t[0]||(t[0]=l=>e.itemsCountInTable=l),"items-per-page-dropdown-enabled":e.itemsPerPageDropdownEnabled},null,8,["itemsPerPage","items-per-page-dropdown-enabled"]),e.pageCount>1?(d(),E(s,{key:0,"total-pages":e.pageCount,total:e.count,"per-page":e.itemsPerPage,"current-page":e.page,onPageChange:e.pageChange},null,8,["total-pages","total","per-page","current-page","onPageChange"])):C("",!0)])}const Be=k(we,[["render",_e]]),Ne=y({name:"kt-datatable",props:{header:{type:Array,required:!0},data:{type:Array,required:!0},itemsPerPage:{type:Number,default:10},itemsPerPageDropdownEnabled:{type:Boolean,required:!1,default:!0},checkboxEnabled:{type:Boolean,required:!1,default:!1},checkboxLabel:{type:String,required:!1,default:"id"},total:{type:Number,required:!1},loading:{type:Boolean,required:!1,default:!1},sortLabel:{type:String,required:!1,default:null},sortOrder:{type:String,required:!1,default:"asc"},emptyTableText:{type:String,required:!1,default:"No data found"},currentPage:{type:Number,required:!1,default:1}},emits:["page-change","on-sort","on-items-select","on-items-per-page-change"],components:{TableContent:ge,TableFooter:Be},setup(e,{emit:t}){const a=m(e.currentPage),n=m(e.itemsPerPage);v(()=>n.value,u=>{a.value=1,t("on-items-per-page-change",u)});const r=u=>{a.value=u,t("page-change",u)},g=b(()=>{if(e.data){if(e.data.length<=n.value)return e.data;{let u=(a.value-1)*n.value;return e.data.slice(u,u+n.value)}}return[]}),o=b(()=>e.data?e.data.length<=n.value?e.total:e.data.length:0);return{pageChange:r,dataToDisplay:g,onSort:u=>{t("on-sort",u)},onItemSelect:u=>{t("on-items-select",u)},itemsInTable:n,totalItems:o}}}),Ae={class:"dataTables_wrapper dt-bootstrap4 no-footer"};function Oe(e,t,a,n,r,g){const o=P("TableContent"),s=P("TableFooter");return d(),c("div",Ae,[h(o,{onOnItemsSelect:e.onItemSelect,onOnSort:e.onSort,header:e.header,data:e.dataToDisplay,checkboxEnabled:e.checkboxEnabled,checkboxLabel:e.checkboxLabel,"empty-table-text":e.emptyTableText,"sort-label":e.sortLabel,"sort-order":e.sortOrder,loading:e.loading},V({_:2},[S(e.$slots,(l,u)=>({name:u,fn:F(({row:T})=>[B(e.$slots,u,{row:T})])}))]),1032,["onOnItemsSelect","onOnSort","header","data","checkboxEnabled","checkboxLabel","empty-table-text","sort-label","sort-order","loading"]),h(s,{onPageChange:e.pageChange,"current-page":e.currentPage,itemsPerPage:e.itemsInTable,"onUpdate:itemsPerPage":t[0]||(t[0]=l=>e.itemsInTable=l),count:e.totalItems,"items-per-page-dropdown-enabled":e.itemsPerPageDropdownEnabled},null,8,["onPageChange","current-page","itemsPerPage","count","items-per-page-dropdown-enabled"])])}const Me=k(Ne,[["render",Oe]]);export{Me as D};