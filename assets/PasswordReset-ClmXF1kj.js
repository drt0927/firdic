import{d as p,a0 as g,aq as h,a1 as w,av as v,r as y,_ as x,i as k,x as n,w as d,f as i,h as F,j as t,H as u}from"./index-C-7U9C4U.js";import{c as S,a as B}from"./index.esm-D2fFo3zD.js";import{S as m}from"./sweetalert2-D2PfiXC8.js";const P=p({name:"password-reset",components:{Field:g,VForm:h,ErrorMessage:w},setup(){const o=v(),s=y(null),c=S().shape({email:B().email().required().label("Email")});return{onSubmitForgotPassword:async e=>{var a,r;e=e,s.value.disabled=!0,(a=s.value)==null||a.setAttribute("data-kt-indicator","on"),await o.forgotPassword(e);const l=Object.values(o.errors);l?m.fire({text:l[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",heightAuto:!1,customClass:{confirmButton:"btn fw-semibold btn-light-danger"}}):m.fire({text:"You have successfully logged in!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn fw-semibold btn-light-primary"}}),(r=s.value)==null||r.removeAttribute("data-kt-indicator"),s.value.disabled=!1},forgotPassword:c,submitButton:s}}}),E={class:"w-lg-500px p-10"},C=t("div",{class:"text-center mb-10"},[t("h1",{class:"text-gray-900 mb-3"},"Forgot Password ?"),t("div",{class:"text-gray-500 fw-semibold fs-4"},"Enter your email to reset your password.")],-1),V={class:"fv-row mb-10"},$=t("label",{class:"form-label fw-bold text-gray-900 fs-6"},"Email",-1),A={class:"fv-plugins-message-container"},T={class:"fv-help-block"},j={class:"d-flex flex-wrap justify-content-center pb-lg-0"},M={type:"submit",ref:"submitButton",id:"kt_password_reset_submit",class:"btn btn-lg btn-primary fw-bold me-4"},N=t("span",{class:"indicator-label"}," Submit ",-1),q=t("span",{class:"indicator-progress"},[u(" Please wait... "),t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),O=[N,q];function H(o,s,c,f,e,l){const a=i("Field"),r=i("ErrorMessage"),_=i("router-link"),b=i("VForm");return F(),k("div",E,[n(b,{class:"form w-100 fv-plugins-bootstrap5 fv-plugins-framework",onSubmit:o.onSubmitForgotPassword,id:"kt_login_password_reset_form","validation-schema":o.forgotPassword},{default:d(()=>[C,t("div",V,[$,n(a,{class:"form-control form-control-solid",type:"email",placeholder:"",name:"email",autocomplete:"off"}),t("div",A,[t("div",T,[n(r,{name:"email"})])])]),t("div",j,[t("button",M,O,512),n(_,{to:"/sign-up",class:"btn btn-lg btn-light-primary fw-bold"},{default:d(()=>[u("Cancel")]),_:1})])]),_:1},8,["onSubmit","validation-schema"])])}const D=x(P,[["render",H]]);export{D as default};
