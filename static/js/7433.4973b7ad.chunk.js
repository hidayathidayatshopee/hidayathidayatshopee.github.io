"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7433],{42170:function(e,r,n){n.d(r,{Z:function(){return v}});var t=n(74165),c=n(15861),s=n(29439),a=n(47313),u=n(47670),i=n(30464),o=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.post(i.v.voucher.SHOP_VOUCHER,r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.put(i.v.voucher.SHOP_VOUCHER+"/"+r.id,r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.delete(i.v.voucher.SHOP_VOUCHER+"/"+r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(i.v.voucher.SHOP_VOUCHER+"/"+r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r,n,c,s){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(i.v.voucher.SHOP_VOUCHER+"?shopId=".concat(s,"&status=").concat(r,"&page=").concat(n,"&limit=").concat(c,"&sortBy=min_purchase"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n,t,c){return e.apply(this,arguments)}}(),x=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get(i.v.voucher.VOUCHER+"?status=user&sortBy=min_purchase");case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f={createVoucher:o,editVoucher:l,deleteVoucher:d,getVoucher:h,getAllVouchers:p,getAllMarketplaceVouchers:x},v=function(){var e=(0,a.useState)(!1),r=(0,s.Z)(e,2),n=r[0],u=r[1],i=(0,a.useState)(),o=(0,s.Z)(i,2),l=o[0],d=o[1],h=(0,a.useState)(),p=(0,s.Z)(h,2),x=p[0],v=p[1],j=(0,a.useState)([]),g=(0,s.Z)(j,2),Z=g[0],b=g[1],m=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.createVoucher(r);case 3:return n=e.sent,u(!1),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),C=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.editVoucher(r);case 3:return n=e.sent,u(!1),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.deleteVoucher(r);case 3:return n=e.sent,u(!1),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.getVoucher(r);case 3:return n=e.sent,u(!1),n.is_success&&d(n.data),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(r,n,c,s){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.getAllVouchers(r,n,c,s);case 3:return(a=e.sent).is_success&&v(a.data),u(!1),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(r,n,t,c){return e.apply(this,arguments)}}(),y=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.getAllMarketplaceVouchers();case 3:return r=e.sent,u(!1),r.is_success&&b(r.data.data),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{createVoucher:m,editVoucher:C,deleteVoucher:_,fetchVoucher:w,fetchAllVoucher:k,voucherLoading:n,voucher:l,vouchers:x,fetchAllMarketplaceVoucher:y,marketplaceVouchers:Z}}},27433:function(e,r,n){n.r(r),n.d(r,{default:function(){return E}});var t=n(62128),c=n(43964),s=n(69748),a=n(63714),u=n(58821),i=n(2135),o=n(43974),l=n(74165),d=n(15861),h=n(29439),p=n(84959),x=n(30955),f=n(91101),v=n(32768),j=n(10658),g=n.n(j),Z=n(47313),b=n(58467),m=n(8914),C=n(46417);var _=function(e){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(m.u_,{isOpen:e.isOpen,onClose:e.onClose,children:[(0,C.jsx)(m.ZA,{}),(0,C.jsxs)(m.hz,{rounded:"lg",children:[(0,C.jsx)(m.ol,{}),(0,C.jsx)(m.fe,{paddingY:"30px",children:(0,C.jsxs)(c.gC,{spacing:"30px",children:[(0,C.jsx)(u.fZX,{size:100,color:"red"}),(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"25px",children:"Are You Sure?"}),(0,C.jsx)(c.xv,{children:"Do you really want to delete these records?"})]})}),(0,C.jsxs)(m.mz,{justifyContent:"center",mb:"30px",children:[(0,C.jsx)(s.zx,{variant:"solid",colorScheme:"gray",mr:3,onClick:e.onClose,children:"Cancel"}),(0,C.jsx)(s.zx,{variant:"solid",colorScheme:"red",isLoading:e.isLoading,onClick:e.onDelete,children:"Delete"})]})]})]})})},w=n(45598),k=n(46036),y=n(42170),V=n(94129);var A=function(e){var r,n,t=(0,y.Z)(),a=t.vouchers,i=t.voucherLoading,j=t.fetchAllVoucher,m=t.deleteVoucher,A=(0,w.Z)(),E=A.successToast,T=A.errorToast,O=(0,p.qY)(),S=O.isOpen,D=O.onOpen,L=O.onClose,U=(0,Z.useState)(0),H=(0,h.Z)(U,2),R=H[0],z=H[1],Y=(0,k.Z)().user,P=(0,b.s0)(),B=function(){var r=(0,d.Z)((0,l.Z)().mark((function r(n){var t;return(0,l.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m(n);case 2:(t=r.sent).is_success?(E(t.message),L(),j(e.status,1,10,null===Y||void 0===Y?void 0:Y.shop_id)):T(t.message);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),M=function(e,r){return g()().isAfter(g()(e))&&g()().isBefore(g()(r))},N=function(e,r){return g()().isBefore(g()(e))&&g()().isBefore(g()(r))};return(0,Z.useEffect)((function(){j(e.status,1,10,null===Y||void 0===Y?void 0:Y.shop_id)}),[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x.xJ,{children:(0,C.jsxs)(x.iA,{variant:"striped",children:[(0,C.jsx)(x.hr,{children:(0,C.jsxs)(x.Tr,{children:[(0,C.jsx)(x.Th,{children:"Code"}),(0,C.jsx)(x.Th,{children:"Start"}),(0,C.jsx)(x.Th,{children:"End"}),(0,C.jsx)(x.Th,{isNumeric:!0,children:"Quota"}),(0,C.jsx)(x.Th,{isNumeric:!0,children:"Benefit"}),(0,C.jsx)(x.Th,{isNumeric:!0,children:"Benefit Percentage"}),(0,C.jsx)(x.Th,{textAlign:"center",children:"Action"})]})}),(0,C.jsxs)(x.p3,{children:[i?(0,C.jsx)(x.Tr,{children:(0,C.jsx)(x.Td,{colSpan:7,textAlign:"center",children:(0,C.jsx)(f.$,{})})}):null,i||0!==(null===a||void 0===a?void 0:a.data.length)?null:(0,C.jsx)(x.Tr,{children:(0,C.jsx)(x.Td,{colSpan:7,textAlign:"center",children:"Empty Data"})}),!i&&(null===a||void 0===a?void 0:a.data.map((function(e,r){return(0,C.jsxs)(x.Tr,{children:[(0,C.jsx)(x.Td,{children:e.code}),(0,C.jsx)(x.Td,{children:g()(e.start_date).format("YYYY-MM-DD hh:mmA")}),(0,C.jsx)(x.Td,{children:g()(e.expiry_date).format("YYYY-MM-DD hh:mmA")}),(0,C.jsx)(x.Td,{isNumeric:!0,children:e.quota}),(0,C.jsxs)(x.Td,{isNumeric:!0,children:["Rp ",(0,V.xG)(e.benefit)]}),(0,C.jsxs)(x.Td,{isNumeric:!0,children:[e.benefit_percentage,"%"]}),(0,C.jsxs)(x.Td,{textAlign:"center",children:[(n=e.start_date,t=e.expiry_date,g()().isAfter(g()(n))&&g()().isAfter(g()(t))?(0,C.jsx)(v.u,{hasArrow:!0,label:"Detail",bg:"gray.300",color:"black",children:(0,C.jsx)(s.hU,{mx:1,"aria-label":"Detail",bgColor:"blue.300",icon:(0,C.jsx)(u.rCC,{}),onClick:function(){P(o.Z.SELLER_VOUCHER_DETAIL(e.id))}})}):null),M(e.start_date,e.expiry_date)||N(e.start_date,e.expiry_date)?(0,C.jsx)(v.u,{hasArrow:!0,label:"Edit",bg:"gray.300",color:"black",children:(0,C.jsx)(s.hU,{mx:1,"aria-label":"Edit",bgColor:"yellow.300",icon:(0,C.jsx)(u.jox,{}),onClick:function(){P(o.Z.SELLER_VOUCHER_EDIT(e.id))}})}):null,(0,C.jsx)(v.u,{hasArrow:!0,label:"Duplicate",bg:"gray.300",color:"black",children:(0,C.jsx)(s.hU,{mx:1,"aria-label":"Duplicate",bgColor:"green.400",icon:(0,C.jsx)(u.rEd,{}),onClick:function(){P(o.Z.SELLER_VOUCHER_DUPLICATE(e.id))}})}),N(e.start_date,e.expiry_date)?(0,C.jsx)(v.u,{hasArrow:!0,label:"Delete",bg:"gray.300",color:"black",children:(0,C.jsx)(s.hU,{mx:1,"aria-label":"Delete",bgColor:"red",icon:(0,C.jsx)(u.yvY,{}),onClick:function(){return function(e){z(e),D()}(e.id)}})}):null]})]},r);var n,t})))]})]})}),(0,C.jsxs)(c.kC,{pt:"5",justifyContent:"space-between",children:[(0,C.jsxs)(c.xv,{children:["Total ",null===a||void 0===a?void 0:a.total]}),(0,C.jsxs)(c.kC,{alignItems:"center",children:[(0,C.jsx)(s.zx,{isDisabled:1===(null===a||void 0===a?void 0:a.current_page),fontWeight:"normal",onClick:function(){!function(){var r,n=(null!==(r=null===a||void 0===a?void 0:a.current_page)&&void 0!==r?r:0)-1;j(e.status,n,10,null===Y||void 0===Y?void 0:Y.shop_id)}()},children:"Prev"}),(0,C.jsxs)(c.xv,{px:3,children:[null===a||void 0===a?void 0:a.current_page," of ",null===a||void 0===a?void 0:a.total_page]}),(0,C.jsx)(s.zx,{isDisabled:(null!==(r=null===a||void 0===a?void 0:a.current_page)&&void 0!==r?r:0)>=(null!==(n=null===a||void 0===a?void 0:a.total_page)&&void 0!==n?n:0),fontWeight:"normal",onClick:function(){!function(){var r,n=(null!==(r=null===a||void 0===a?void 0:a.current_page)&&void 0!==r?r:0)+1;j(e.status,n,10,null===Y||void 0===Y?void 0:Y.shop_id)}()},children:"Next"})]})]}),(0,C.jsx)(_,{isLoading:!1,isOpen:S,onClose:L,onDelete:function(){return B(R)}})]})};var E=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(t.Zb,{variant:"outline",rounded:"xl",p:5,bgColor:"white",children:[(0,C.jsx)(t.Ol,{children:(0,C.jsxs)(c.kC,{justifyContent:"space-between",children:[(0,C.jsx)(c.xv,{fontSize:"2xl",fontWeight:"bold",children:"Voucher List"}),(0,C.jsx)(s.zx,{leftIcon:(0,C.jsx)(u.AzW,{}),as:i.rU,to:o.Z.SELLER_VOUCHER_CREATE,children:"Create Voucher"})]})}),(0,C.jsx)(t.eW,{children:(0,C.jsxs)(a.mQ,{variant:"enclosed",isLazy:!0,children:[(0,C.jsxs)(a.td,{children:[(0,C.jsx)(a.OK,{children:"All"}),(0,C.jsx)(a.OK,{children:"Ongoing"}),(0,C.jsx)(a.OK,{children:"Upcoming"}),(0,C.jsx)(a.OK,{children:"Has ended"})]}),(0,C.jsxs)(a.nP,{children:[(0,C.jsx)(a.x4,{paddingX:0,children:(0,C.jsx)(A,{status:"all"})}),(0,C.jsx)(a.x4,{paddingX:0,children:(0,C.jsx)(A,{status:"ongoing"})}),(0,C.jsx)(a.x4,{paddingX:0,children:(0,C.jsx)(A,{status:"upcoming"})}),(0,C.jsx)(a.x4,{paddingX:0,children:(0,C.jsx)(A,{status:"ended"})})]})]})})]})})}}}]);