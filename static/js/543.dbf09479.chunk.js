"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[543],{4320:function(r,e,t){var n=t(4165),a=t(5861),u=t(9396),s=t(2914),c=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.auth.REGISTER,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.auth.REGISTER_MERCHANT,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.email,a=e.password,r.prev=1,r.next=4,u.Z.post(s.v.auth.LOGIN,{email:t,password:a});case 4:return c=r.sent,r.abrupt("return",c.data);case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.auth.LOGIN_GOOGLE,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.auth.REFRESH,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.user.PROFILE,{email:e});case 3:if(!((t=r.sent).status>=200&&t.status<=300)){r.next=6;break}return r.abrupt("return",t.data);case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),c=r.t0,r.abrupt("return",null===(a=c.response)||void 0===a?void 0:a.data);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.post(s.v.auth.PASSWORD,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.put(s.v.auth.PASSWORD,e);case 3:return t=r.sent,r.abrupt("return",t.data);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),d={register:c,registerMerchant:i,login:o,loginGoogle:p,refresh:l,checkEmail:h,resetPassword:f,changePassword:v};e.Z=d},2618:function(r,e,t){var n=t(2791);e.Z=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BAZR",e=document.getElementById("title");(0,n.useEffect)((function(){e.innerHTML=r}),[r])}},1543:function(r,e,t){t.r(e);var n=t(4165),a=t(5861),u=t(9439),s=t(9712),c=t(5863),i=t(824),o=t(5777),p=t(5705),l=t(2791),h=t(7689),f=t(1724),v=t(4320),d=t(2618),m=t(4355),Z=t(8802),x=t(184);e.default=function(){(0,d.Z)("Merchant Registration | BAZR");var r=(0,h.TH)().state,e=(0,h.s0)(),t=(0,m.Z)(),b=t.successToast,w=t.errorToast,y=(0,l.useState)(!1),g=(0,u.Z)(y,2),E=g[0],R=g[1],S=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return R(!0),r.next=3,v.Z.registerMerchant(t).finally((function(){return R(!1)}));case 3:(a=r.sent).is_success?(b("Your shop account has been created!"),e(Z.Z.SELLER_HOME)):w("Failed to register shop account",a.message);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),k=f.Ry().shape({name:f.Z_().required("Required").matches(/^[a-zA-Z ]*$/,"Must not contain any number"),username:f.Z_().required("Required").matches(/^[a-zA-Z0-9]*$/,"Must not contain any space and symbol")});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.xu,{textAlign:"center",children:(0,x.jsx)(s.X6,{children:"Sign up as a Merchant"})}),(0,x.jsx)(s.xu,{textAlign:"left",mt:4,children:(0,x.jsx)(p.J9,{initialValues:{name:"",username:""},validationSchema:k,onSubmit:function(r){S(r)},children:function(e){var t=e.handleSubmit,n=e.errors,a=e.touched;return(0,x.jsxs)("form",{onSubmit:t,children:[(0,x.jsxs)(c.NI,{mt:4,isInvalid:!!n.name&&a.name,isDisabled:!!r,children:[(0,x.jsx)(c.lX,{children:"Shop Name"}),(0,x.jsx)(p.gN,{as:i.II,name:"name",type:"text",placeholder:"Enter your shop name",variant:"filled"}),(0,x.jsx)(c.J1,{children:n.name})]}),(0,x.jsxs)(c.NI,{mt:4,isInvalid:!!n.username&&a.username,children:[(0,x.jsx)(c.lX,{children:"Shop Username"}),(0,x.jsx)(p.gN,{as:i.II,name:"username",type:"text",placeholder:"Enter your shop username",variant:"filled"}),(0,x.jsx)(c.J1,{children:n.username})]}),(0,x.jsx)(o.zx,{variant:"primary",width:"full",mt:10,type:"submit",isLoading:E,children:"Sign up"})]})}})})]})}}}]);
//# sourceMappingURL=543.dbf09479.chunk.js.map