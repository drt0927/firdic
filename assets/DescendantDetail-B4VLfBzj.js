import{g as H}from"./assets-DwF9tyoD.js";import{d as M,u as W,r as K,o as L,_ as j,i as s,j as e,p as z,l,H as N,x as d,m as n,I as R,f as o,h as a,ag as q,ah as G}from"./index-CVjETNBT.js";import{a as J}from"./descendant-Bv99c5rf.js";import{S as Q,a as U,b as X,O as Y}from"./OnlyWeapon-ChtzWV7-.js";import"./system-Dv8yCwa6.js";import"./clipboard-fIy7Ro2n.js";import"./lodash-BmFqam-j.js";const Z=M({name:"descendant-details",components:{Stat:Q,Skill:U,Story:X,OnlyWeapon:Y},setup(){const t=W().params.id,c=K();return L(async()=>{const r=await J(t);console.log(r),c.value=r}),{getAssetPath:H,descendant:c}}}),i=t=>(q("data-v-665cf1ba"),t=t(),G(),t),tt={class:"d-flex flex-column flex-xl-row"},et={class:"flex-column flex-lg-row-auto w-100 w-xl-350px mb-10"},st={class:"card mb-5 mb-xl-8"},at={class:"card-body pt-15"},nt={class:"d-flex flex-center flex-column mb-5"},dt={class:"symbol symbol-100px symbol-circle mb-7"},ot=["src"],it={class:"fs-3 text-gray-800 fw-bold mb-1"},lt={class:"fs-5 fw-semibold text-muted mb-6"},ct={class:"d-flex flex-stack fs-4 py-3"},rt={class:"fw-bold rotate collapsible","data-bs-toggle":"collapse",href:"#kt_customer_view_details",role:"button","aria-expanded":"false","aria-controls":"kt_customer_view_details"},_t={class:"ms-2 rotate-180"},ut=i(()=>e("div",{class:"separator separator-dashed my-3"},null,-1)),mt={id:"kt_customer_view_details",class:"collapse show"},pt={class:"py-5 fs-6",style:{"padding-top":"0px !important"}},bt=i(()=>e("div",{class:"fw-bold mt-5"},"계승자 속성",-1)),ht={class:"text-gray-600"},ft=["src"],vt=["src"],gt=["src"],yt=["src"],Ct=["src"],wt={key:5},kt={key:6},At={key:7},xt={key:8},St={key:9},Bt=i(()=>e("div",{class:"fw-bold mt-5"},"역할",-1)),Dt={class:"text-gray-600"},Et=i(()=>e("div",{class:"fw-bold mt-5"},"전용 장비",-1)),It={class:"text-gray-600"},Pt=i(()=>e("div",{class:"fw-bold mt-5"},"특징",-1)),Nt=["innerHTML"],Tt={class:"flex-lg-row-fluid ms-lg-15"},Vt=R('<ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8" data-v-665cf1ba><li class="nav-item" data-v-665cf1ba><a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#stat_and_skill_tab" data-v-665cf1ba>스탯 &amp; 스킬</a></li><li class="nav-item" data-v-665cf1ba><a class="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#story_and_weapon_tab" data-v-665cf1ba>스토리 &amp; 전용 장비</a></li></ul>',1),Ft={class:"tab-content"},Ot={class:"tab-pane fade show active",id:"stat_and_skill_tab",role:"tabpanel"},$t={class:"tab-pane fade",id:"story_and_weapon_tab",role:"tabpanel"};function Ht(t,c,r,Mt,Wt,Kt){var _,u,m,p,b,h,f,v,g,y,C,w,k,A,x,S,B,D,E,I,P;const T=o("KTIcon"),V=o("Stat"),F=o("Skill"),O=o("Story"),$=o("OnlyWeapon");return a(),s("div",tt,[e("div",et,[e("div",st,[e("div",at,[e("div",nt,[e("div",dt,[e("img",{src:(_=t.descendant)==null?void 0:_.descendant_image_url,alt:"image",class:z((u=t.descendant)==null?void 0:u.detail.tier)},null,10,ot)]),e("span",it,l((m=t.descendant)==null?void 0:m.descendant_name),1),e("div",lt,l((p=t.descendant)==null?void 0:p.detail.eng_name),1)]),e("div",ct,[e("div",rt,[N(" 기본정보 "),e("span",_t,[d(T,{"icon-name":"down","icon-class":"fs-3"})])])]),ut,e("div",mt,[e("div",pt,[bt,e("div",ht,[((b=t.descendant)==null?void 0:b.detail.attribute)==="none"?(a(),s("img",{key:0,src:t.getAssetPath("media/tfd/ico_char_attribute--none.png"),alt:"image",width:"25px"},null,8,ft)):n("",!0),((h=t.descendant)==null?void 0:h.detail.attribute)==="ice"?(a(),s("img",{key:1,src:t.getAssetPath("media/tfd/ico_char_attribute--chill.png"),alt:"image",width:"25px"},null,8,vt)):n("",!0),((f=t.descendant)==null?void 0:f.detail.attribute)==="electric"?(a(),s("img",{key:2,src:t.getAssetPath("media/tfd/ico_char_attribute--electric.png"),alt:"image",width:"25px"},null,8,gt)):n("",!0),((v=t.descendant)==null?void 0:v.detail.attribute)==="fire"?(a(),s("img",{key:3,src:t.getAssetPath("media/tfd/ico_char_attribute--fire.png"),alt:"image",width:"25px"},null,8,yt)):n("",!0),((g=t.descendant)==null?void 0:g.detail.attribute)==="poison"?(a(),s("img",{key:4,src:t.getAssetPath("media/tfd/ico_char_attribute--toxic.png"),alt:"image",width:"25px"},null,8,Ct)):n("",!0),N("   "),((y=t.descendant)==null?void 0:y.detail.attribute)==="none"?(a(),s("span",wt,"무속성")):n("",!0),((C=t.descendant)==null?void 0:C.detail.attribute)==="ice"?(a(),s("span",kt,"냉기")):n("",!0),((w=t.descendant)==null?void 0:w.detail.attribute)==="electric"?(a(),s("span",At,"전기")):n("",!0),((k=t.descendant)==null?void 0:k.detail.attribute)==="fire"?(a(),s("span",xt,"화염")):n("",!0),((A=t.descendant)==null?void 0:A.detail.attribute)==="poison"?(a(),s("span",St,"독성")):n("",!0)]),Bt,e("div",Dt,l((x=t.descendant)==null?void 0:x.detail.role),1),Et,e("div",It,l((S=t.descendant)==null?void 0:S.detail.only_weapon),1),Pt,e("div",{class:"text-gray-600",innerHTML:(B=t.descendant)==null?void 0:B.detail.point.replace(/\n/gi,"<br/>")},null,8,Nt)])])])])]),e("div",Tt,[Vt,e("div",Ft,[e("div",Ot,[d(V,{"card-classes":"mb-6 mb-xl-9",stat:(D=t.descendant)==null?void 0:D.descendant_stat},null,8,["stat"]),d(F,{"card-classes":"mb-6 mb-xl-9",skill:(E=t.descendant)==null?void 0:E.descendant_skill},null,8,["skill"])]),e("div",$t,[d(O,{"card-classes":"mb-6 mb-xl-9",detail:(I=t.descendant)==null?void 0:I.detail},null,8,["detail"]),d($,{"card-classes":"mb-6 mb-xl-9",detail:(P=t.descendant)==null?void 0:P.detail},null,8,["detail"])])])])])}const Qt=j(Z,[["render",Ht],["__scopeId","data-v-665cf1ba"]]);export{Qt as default};
