"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9698],{85881:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(74165),i=t(15861),a=t(29439),s=t(47313),c=t(47670),o=t(30464),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(o.v.shop.SHOPS_PROMOTION+"?status=".concat(n,"&page=").concat(t,"&limit=").concat(i));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get(o.v.shop.SHOPS_PROMOTION+"/".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post(o.v.shop.SHOPS_PROMOTION,n);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.put(o.v.shop.SHOPS_PROMOTION+"/".concat(n.id),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f={getAllShopPromotions:u,getShopPromotion:d,postShopPromotion:l,putShopPromotion:p},h=function(){var e=(0,s.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],o=(0,s.useState)(),u=(0,a.Z)(o,2),d=u[0],l=u[1],p=(0,s.useState)(),h=(0,a.Z)(p,2),v=h[0],x=h[1],m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,f.getAllShopPromotions(n,t,i);case 3:return a=e.sent,c(!1),a.is_success&&x(a.data),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,f.getShopPromotion(n);case 3:return t=e.sent,c(!1),t.is_success&&l(t.data),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,f.postShopPromotion(n);case 3:return t=e.sent,c(!1),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,f.putShopPromotion(n);case 3:return t=e.sent,c(!1),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{fetchAllShopPromotions:m,fetchShopPromotion:b,addShopPromotion:_,updateShopPromotion:j,convertVariantProductToProductForm:function(e){var n=[];return e.filter((function(n,t){return t===e.findIndex((function(e){return n.product_id===e.product_id}))})).forEach((function(t,r){n[r]={id:t.product_id,name:t.product_name,in_form:!0,variants:[]},e.forEach((function(e){e.product_id===t.product_id&&n[r].variants.push({price:0,benefit:e.benefit,benefit_percentage:e.benefit_percentage,is_active:!0,quota:e.quota,variant_type_id:e.variant_type_id,variant_name:e.variant_type_name,max_buy_qty:e.max_buy_qty})}))})),n},addProductVariationFormNotActive:function(e,n){var t=[];return e.forEach((function(e,r){t[r]=e,n.forEach((function(n){var i;n.id===e.id&&(null===(i=n.variant_group)||void 0===i||i.variant_types.forEach((function(n){var i=!1;e.variants.forEach((function(e,a){if(n.id===e.variant_type_id)return t[r].variants[a].price=n.price,void(i=!0)})),i||t[r].variants.push({price:n.price,benefit:0,benefit_percentage:0,is_active:!1,max_buy_qty:0,quota:0,variant_name:n.name,variant_type_id:n.id})})))}))})),t},isLoading:t,shopPromotions:v,shopPromotion:d}}},86594:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(93433),i=t(1413),a=t(29439),s=t(84959),c=t(62128),o=t(43964),u=t(720),d=t(13338),l=t(53068),p=t(69748),f=t(7410),h=t(47313),v=t(58821),x=t(3463),m=t(45598),b=t(4942),_=t(46417);var j=function(e){var n=(0,h.useState)({quota:"",benefit:"",benefit_percentage:"",max_buy_qty:""}),t=(0,a.Z)(n,2),r=t[0],s=t[1],c=(0,h.useState)({quota:"",benefit_percentage:""}),d=(0,a.Z)(c,2),f=d[0],v=d[1],x=(0,h.useState)({benefit:!1,benefit_percentage:!1}),m=(0,a.Z)(x,2),j=m[0],g=m[1],y=function(e){s((0,i.Z)((0,i.Z)({},r),{},(0,b.Z)({},e.currentTarget.name,""===e.currentTarget.value?"":Number(e.currentTarget.value)))),v({quota:"",benefit_percentage:""})},Z=function(){var e=!1;return v({quota:"",benefit_percentage:""}),"number"===typeof r.quota&&r.quota<=0&&(v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{quota:"must be greater than 0"})})),e=!0),r.benefit>0&&r.benefit_percentage>0&&(v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{benefit_percentage:"fill in one of the benefit or benefit percentage fields"})})),e=!0),(r.benefit_percentage<0||r.benefit_percentage>99)&&(v((function(e){return(0,i.Z)((0,i.Z)({},e),{},{benefit_percentage:"min 0 and max 99"})})),e=!0),e};return(0,_.jsxs)(o.xu,{rounded:"lg",border:"1px",borderColor:"gray.200",p:5,my:5,children:[(0,_.jsxs)(o.MI,{columns:{base:1,sm:1,md:2,xl:4},spacingX:10,spacingY:5,children:[(0,_.jsxs)(u.NI,{isInvalid:""!==f.quota,children:[(0,_.jsx)(u.lX,{children:"Quota"}),(0,_.jsx)(l.II,{type:"number",name:"quota",onChange:function(e){return y(e)}}),(0,_.jsx)(u.J1,{children:f.quota})]}),(0,_.jsxs)(u.NI,{children:[(0,_.jsx)(u.lX,{children:"Benefit"}),(0,_.jsxs)(l.BZ,{children:[(0,_.jsx)(l.Ui,{children:"Rp"}),(0,_.jsx)(l.II,{type:"number",name:"benefit",variant:j.benefit?"filled":"outline",isDisabled:j.benefit,_disabled:{opacity:1},onChange:function(e){return function(e){g({benefit:!1,benefit_percentage:!1}),""!==e.currentTarget.value&&g({benefit:!1,benefit_percentage:!0}),y(e)}(e)}})]})]}),(0,_.jsxs)(u.NI,{isInvalid:""!==f.benefit_percentage,children:[(0,_.jsx)(u.lX,{children:"Benefit Percentage"}),(0,_.jsxs)(l.BZ,{children:[(0,_.jsx)(l.II,{type:"number",name:"benefit_percentage",variant:j.benefit_percentage?"filled":"outline",isDisabled:j.benefit_percentage,_disabled:{opacity:1},onChange:function(e){return function(e){g({benefit:!1,benefit_percentage:!1}),""!==e.currentTarget.value&&g({benefit:!0,benefit_percentage:!1}),y(e)}(e)}}),(0,_.jsx)(l.xW,{children:"%"})]}),(0,_.jsx)(u.J1,{children:f.benefit_percentage})]}),(0,_.jsxs)(u.NI,{children:[(0,_.jsx)(u.lX,{children:"Max Buy"}),(0,_.jsx)(l.II,{type:"number",name:"max_buy_qty",onChange:function(e){return y(e)}})]})]}),(0,_.jsx)(o.kC,{justifyContent:"end",mt:5,children:(0,_.jsx)(p.zx,{onClick:function(){return function(){var n=Z();e.onSubmit(r,n)}()},children:"Apply All"})})]})},g=t(30955),y=t(32768),Z=t(32176),q=t(98379),I=t(94129);var C=function(e){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(d.Od,{isLoaded:!e.isLoading,children:(0,_.jsx)(g.xJ,{border:"1px",rounded:"lg",borderColor:"gray.200",py:3,children:(0,_.jsxs)(g.iA,{variant:"unstyled",children:[(0,_.jsx)(g.hr,{children:(0,_.jsxs)(g.Tr,{children:[(0,_.jsx)(g.Th,{children:"Variant"}),(0,_.jsx)(g.Th,{isNumeric:!0,children:"Quota"}),(0,_.jsx)(g.Th,{isNumeric:!0,children:"Benefit"}),(0,_.jsx)(g.Th,{isNumeric:!0,children:"Benefit percentage"}),(0,_.jsx)(g.Th,{isNumeric:!0,children:"Max Buy"}),(0,_.jsx)(g.Th,{children:"Active"}),(0,_.jsx)(g.Th,{children:"action"})]})}),(0,_.jsx)(g.p3,{children:(0,_.jsx)(f.F2,{name:"products",render:function(n){return(0,_.jsxs)(_.Fragment,{children:[0===e.values.products.length?(0,_.jsx)(g.Tr,{children:(0,_.jsx)(g.Td,{colSpan:7,textAlign:"center",children:"Empty Data"})}):null,e.values.products.map((function(t,r){return(0,_.jsxs)(h.Fragment,{children:[(0,_.jsxs)(g.Tr,{bgColor:"gray.100",children:[(0,_.jsx)(g.Td,{colSpan:6,children:t.name}),(0,_.jsx)(g.Td,{children:e.isDisabled?null:(0,_.jsx)(y.u,{label:"Delete Product",children:(0,_.jsx)(p.hU,{"aria-label":"Delete",bgColor:"red",icon:(0,_.jsx)(v.yvY,{}),onClick:function(){e.onDeleteProduct(t.id),n.remove(r)}})})})]}),(0,_.jsx)(f.F2,{name:"products.".concat(r,".variants"),render:function(){return(0,_.jsx)(_.Fragment,{children:t.variants.map((function(n,t){return(0,_.jsxs)(g.Tr,{children:[(0,_.jsx)(g.Td,{verticalAlign:"top",children:(0,_.jsxs)(o.xv,{my:3,children:[n.variant_name," ",(0,_.jsxs)(Z.Vp,{colorScheme:"gray",children:["Rp",(0,I.xG)(n.price)]})]})}),(0,_.jsx)(g.Td,{verticalAlign:"top",isNumeric:!0,alignItems:"start",children:(0,_.jsxs)(u.NI,{isInvalid:!!(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".quota"))&&(0,f.u9)(e.touched,"products.".concat(r,".variants.").concat(t,".quota")),children:[(0,_.jsx)(f.gN,{as:l.II,type:"number",name:"products.".concat(r,".variants.").concat(t,".quota"),variant:e.isDisabled||!e.values.products[r].variants[t].is_active?"filled":"outline",_disabled:{opacity:1},isDisabled:e.isDisabled||!e.values.products[r].variants[t].is_active}),(0,_.jsx)(u.J1,{children:(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".quota"))})]})}),(0,_.jsx)(g.Td,{verticalAlign:"top",isNumeric:!0,children:(0,_.jsxs)(u.NI,{isInvalid:!!(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".benefit"))&&(0,f.u9)(e.touched,"products.".concat(r,".variants.").concat(t,".benefit")),children:[(0,_.jsxs)(l.BZ,{children:[(0,_.jsx)(l.Ui,{children:"Rp"}),(0,_.jsx)(f.gN,{as:l.II,type:"number",name:"products.".concat(r,".variants.").concat(t,".benefit"),minWidth:"150px",borderStartRadius:0,variant:e.isDisabled||!e.values.products[r].variants[t].is_active||e.values.products[r].variants[t].benefit_percentage>0?"filled":"outline",_disabled:{opacity:1},isDisabled:e.isDisabled||!e.values.products[r].variants[t].is_active||e.values.products[r].variants[t].benefit_percentage>0})]}),(0,_.jsx)(u.J1,{children:(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".benefit"))})]})}),(0,_.jsx)(g.Td,{verticalAlign:"top",isNumeric:!0,children:(0,_.jsxs)(u.NI,{isInvalid:!!(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".benefit_percentage"))&&(0,f.u9)(e.touched,"products.".concat(r,".variants.").concat(t,".benefit_percentage")),children:[(0,_.jsxs)(l.BZ,{children:[(0,_.jsx)(f.gN,{as:l.II,type:"number",min:0,max:100,borderEndRadius:0,name:"products.".concat(r,".variants.").concat(t,".benefit_percentage"),variant:e.isDisabled||!e.values.products[r].variants[t].is_active||e.values.products[r].variants[t].benefit>0?"filled":"outline",_disabled:{opacity:1},isDisabled:e.isDisabled||!e.values.products[r].variants[t].is_active||e.values.products[r].variants[t].benefit>0}),(0,_.jsx)(l.xW,{children:"%"})]}),(0,_.jsx)(u.J1,{children:(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".benefit_percentage"))})]})}),(0,_.jsx)(g.Td,{verticalAlign:"top",isNumeric:!0,children:(0,_.jsxs)(u.NI,{isInvalid:!!(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".max_buy_qty"))&&(0,f.u9)(e.touched,"products.".concat(r,".variants.").concat(t,".max_buy_qty")),children:[(0,_.jsx)(f.gN,{as:l.II,type:"number",name:"products.".concat(r,".variants.").concat(t,".max_buy_qty"),variant:e.isDisabled||!e.values.products[r].variants[t].is_active?"filled":"outline",_disabled:{opacity:1},isDisabled:e.isDisabled||!e.values.products[r].variants[t].is_active}),(0,_.jsx)(u.J1,{children:(0,f.u9)(e.errors,"products.".concat(r,".variants.").concat(t,".max_buy_qty"))})]})}),(0,_.jsx)(g.Td,{verticalAlign:"top",children:(0,_.jsx)(q.r,{my:1,size:"lg",name:"products.".concat(r,".variants.").concat(t,".is_active"),isDisabled:e.isDisabled,isChecked:e.values.products[r].variants[t].is_active,onChange:function(n){e.handleChange(n)}})})]},t)}))})}})]},r)}))]})}})})]})})})})},S=t(8914),D=t(34410),T=t(73253),P=t(46036);var N=function(e){var n,t,i,s=(0,P.Z)().user,c=(0,T.Z)().fetchShopProducts,u=(0,h.useState)(),d=(0,a.Z)(u,2),l=d[0],f=d[1],v=(0,h.useState)([]),x=(0,a.Z)(v,2),m=x[0],b=x[1],j=function(e){return m.some((function(n){return n.id===e}))},y=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null===(n=e.variant_group)||void 0===n?void 0:n.variant_types.map((function(e){return{variant_type_id:e.id,variant_name:e.name,price:e.price,benefit:0,benefit_percentage:0,is_active:!0,max_buy_qty:0,quota:0}}));return{id:e.id,name:e.name,in_form:t,variants:r}},Z=function(e){var n=Math.max.apply(Math,(0,r.Z)(e.map((function(e){return e.price})))),t=Math.min.apply(Math,(0,r.Z)(e.map((function(e){return e.price}))));return t===n?"Rp".concat((0,I.xG)(t)):"Rp".concat((0,I.xG)(t)," - Rp").concat((0,I.xG)(n))};return(0,h.useEffect)((function(){var e;c(null!==(e=null===s||void 0===s?void 0:s.shop_id)&&void 0!==e?e:0,{page:1,limit:5}).then((function(e){return f(e)}))}),[]),(0,h.useEffect)((function(){b((0,r.Z)(e.checkedProduct))}),[e.checkedProduct]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(S.u_,{isOpen:e.isOpen,onClose:e.onClose,size:"4xl",children:[(0,_.jsx)(S.ZA,{}),(0,_.jsxs)(S.hz,{rounded:"lg",children:[(0,_.jsx)(S.xB,{children:"Choose Product"}),(0,_.jsx)(S.ol,{}),(0,_.jsx)(S.fe,{children:(0,_.jsxs)(g.xJ,{children:[(0,_.jsxs)(g.iA,{children:[(0,_.jsx)(g.hr,{children:(0,_.jsxs)(g.Tr,{children:[(0,_.jsx)(g.Th,{children:"#"}),(0,_.jsx)(g.Th,{children:"Name"}),(0,_.jsx)(g.Th,{children:"Unit Sold"}),(0,_.jsx)(g.Th,{children:"Price"})]})}),(0,_.jsx)(g.p3,{children:null===l||void 0===l?void 0:l.data.map((function(e,n){var t,i,a;return(0,_.jsxs)(g.Tr,{children:[(0,_.jsx)(g.Td,{children:(0,_.jsx)(D.XZ,{isDisabled:(a=e.id,m.some((function(e){return e.id===a&&e.in_form}))),isChecked:j(e.id),onChange:function(n){return function(e,n){var t=y(n);b(e?[].concat((0,r.Z)(m),[t]):m.filter((function(e){return e.id!==n.id})))}(n.target.checked,e)}})}),(0,_.jsx)(g.Td,{children:e.name}),(0,_.jsx)(g.Td,{children:e.unit_sold}),(0,_.jsx)(g.Td,{children:Z(null!==(t=null===(i=e.variant_group)||void 0===i?void 0:i.variant_types)&&void 0!==t?t:[])})]},n)}))})]}),(0,_.jsxs)(o.kC,{pt:"5",justifyContent:"space-between",mb:5,children:[(0,_.jsxs)(o.xv,{fontSize:"sm",children:["Total ",null===l||void 0===l?void 0:l.total]}),(0,_.jsxs)(o.kC,{alignItems:"center",children:[(0,_.jsx)(p.zx,{size:"sm",isDisabled:(null!==(n=null===l||void 0===l?void 0:l.current_page)&&void 0!==n?n:0)<=1,fontWeight:"normal",onClick:function(){!function(){var e,n,t=(null!==(e=null===l||void 0===l?void 0:l.current_page)&&void 0!==e?e:0)-1;c(null!==(n=null===s||void 0===s?void 0:s.shop_id)&&void 0!==n?n:0,{page:t,limit:5}).then((function(e){return f(e)}))}()},children:"Prev"}),(0,_.jsxs)(o.xv,{px:3,children:[null===l||void 0===l?void 0:l.current_page," of ",null===l||void 0===l?void 0:l.total_page]}),(0,_.jsx)(p.zx,{size:"sm",isDisabled:(null!==(t=null===l||void 0===l?void 0:l.current_page)&&void 0!==t?t:0)>=(null!==(i=null===l||void 0===l?void 0:l.total_page)&&void 0!==i?i:0),fontWeight:"normal",onClick:function(){!function(){var e,n,t=(null!==(e=null===l||void 0===l?void 0:l.current_page)&&void 0!==e?e:0)+1;c(null!==(n=null===s||void 0===s?void 0:s.shop_id)&&void 0!==n?n:0,{page:t,limit:5}).then((function(e){return f(e)}))}()},children:"Next"})]})]})]})}),(0,_.jsxs)(S.mz,{justifyContent:"end",children:[(0,_.jsx)(p.zx,{variant:"ghost",mr:3,onClick:e.onClose,children:"Cancel"}),(0,_.jsx)(p.zx,{variant:"solid",colorScheme:"red",isLoading:e.isLoading,onClick:function(){return e.onConfirm(m)},children:"Confirm"})]})]})]})})};var k=function(e){var n=(0,s.qY)(),t=n.isOpen,b=n.onOpen,g=n.onClose,y=(0,m.Z)().errorToast,Z=(0,h.useState)([]),q=(0,a.Z)(Z,2),I=q[0],S=q[1],D=x.Ry().shape({name:x.Z_().required("Required"),start_date:x.hT().required("Required"),expiry_date:x.hT().required("Required").min(x.iH("start_date"),"expiry date must be greater or equal than start date").test("current date","expiry date must be greater or equal than current date",(function(e){return void 0!==e&&e>=new Date})),products:x.IX().of(x.Ry().shape({variants:x.IX().of(x.Ry().shape({quota:x.Rx().when("is_active",{is:!0,then:x.Rx().min(1,"Must be greater than 0").required("Required")}),benefit:x.Rx().lessThan(x.iH("price"),"benefit must be less than price"),benefit_percentage:x.Rx().when("is_active",{is:!0,then:x.Rx().min(0,"min 0 and max 99").max(99,"min 0 and max 99").when("benefit",{is:function(e){return e>0},then:function(e){return e.test("benefit_percentage","fill in one of the benefit or benefit percentage fields",(function(e){return void 0===e||0===e}))}}).when("benefit",{is:function(e){return 0===e||void 0===e},then:function(e){return e.test("benefit_percentage","fill in one of the benefit or benefit percentage fields",(function(e){return void 0!==e&&0!==e}))}})}),max_buy_qty:x.Rx().when("is_active",{is:!0,then:x.Rx().required("Required")})}))}))}),T={id:e.id,name:e.name,start_date:e.start_date,expiry_date:e.expiry_date,products:e.product};return(0,h.useEffect)((function(){S(e.product)}),[e.product]),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(c.Zb,{variant:"outline",rounded:"lg",p:5,bgColor:"white",children:[(0,_.jsx)(c.Ol,{children:(0,_.jsx)(o.kC,{justifyContent:"space-between",children:(0,_.jsx)(o.xv,{fontSize:"2xl",fontWeight:"bold",children:e.title})})}),(0,_.jsx)(f.J9,{enableReinitialize:!0,initialValues:T,validationSchema:D,onSubmit:function(n){!function(n){var t=[];n.products.forEach((function(e){e.variants.forEach((function(n){if(n.is_active){var r={product_id:e.id,product_name:e.name,variant_type_id:n.variant_type_id,variant_type_name:n.variant_name,benefit:Number(n.benefit),benefit_percentage:Number(n.benefit_percentage),max_buy_qty:n.max_buy_qty,quota:n.quota};t.push(r)}}))}));var r={id:n.id,name:n.name,start_date:n.start_date,expiry_date:n.expiry_date,shop_promotion_products:t};r.shop_promotion_products.length<=0?y("Required product promotion min 1 active"):e.onSubmit(r)}(n)},children:function(n){var a=n.handleChange,s=n.setValues,h=n.errors,x=n.touched,m=n.values;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(f.l0,{children:[(0,_.jsxs)(c.eW,{children:[(0,_.jsxs)(o.MI,{columns:{base:1,sm:1,md:3},spacingX:10,spacingY:5,children:[(0,_.jsxs)(u.NI,{isInvalid:!!h.name&&x.name,children:[(0,_.jsx)(u.lX,{children:"Name"}),(0,_.jsx)(d.Od,{isLoaded:!e.isLoading,children:(0,_.jsx)(f.gN,{as:l.II,type:"text",name:"name",variant:e.isDisabled?"filled":"outline",isDisabled:e.isDisabled,_disabled:{opacity:1}})}),(0,_.jsx)(u.J1,{children:h.name})]}),(0,_.jsxs)(u.NI,{isInvalid:!!h.start_date&&x.start_date,children:[(0,_.jsx)(u.lX,{children:"Start Date"}),(0,_.jsx)(d.Od,{isLoaded:!e.isLoading,children:(0,_.jsx)(f.gN,{as:l.II,type:"datetime-local",name:"start_date",variant:e.isDisabled?"filled":"outline",isDisabled:e.isDisabled,_disabled:{opacity:1}})}),(0,_.jsx)(u.J1,{children:h.start_date})]}),(0,_.jsxs)(u.NI,{isInvalid:!!h.expiry_date&&x.expiry_date,children:[(0,_.jsx)(u.lX,{children:"Expiry Date"}),(0,_.jsx)(d.Od,{isLoaded:!e.isLoading,children:(0,_.jsx)(f.gN,{as:l.II,type:"datetime-local",name:"expiry_date",variant:e.isDisabled?"filled":"outline",isDisabled:e.isDisabled,_disabled:{opacity:1}})}),(0,_.jsx)(u.J1,{children:h.expiry_date})]})]}),(0,_.jsx)(o.iz,{my:10}),(0,_.jsxs)(o.kC,{justifyContent:"space-between",alignItems:"center",flexDirection:{base:"column",sm:"row"},my:5,children:[(0,_.jsx)(o.xv,{fontWeight:"medium",fontSize:"lg",children:"Product Promotion"}),e.isDisabled?null:(0,_.jsx)(p.zx,{leftIcon:(0,_.jsx)(v.Dwu,{}),variant:"outline",isDisabled:e.isDisabled,onClick:b,children:"Add Product"})]}),e.isDisabled?null:(0,_.jsx)(j,{onSubmit:function(e,n){return function(e,n,t,r){if(!n){var a=[];t.products.forEach((function(n,t){a[t]=(0,i.Z)((0,i.Z)({},n),{},{variants:[]}),n.variants.forEach((function(n,r){a[t].variants[r]=n,n.is_active&&(a[t].variants[r]=(0,i.Z)((0,i.Z)({},n),{},{quota:"number"!==typeof e.quota?n.quota:e.quota,benefit:"number"!==typeof e.benefit||n.benefit_percentage>0?n.benefit:e.benefit,benefit_percentage:"number"!==typeof e.benefit_percentage||n.benefit>0?n.benefit_percentage:e.benefit_percentage,max_buy_qty:"number"!==typeof e.max_buy_qty?n.max_buy_qty:e.max_buy_qty}))}))})),r((0,i.Z)((0,i.Z)({},t),{},{products:a}))}}(e,n,m,s)}}),(0,_.jsx)(C,{values:m,errors:h,touched:x,isLoading:e.isLoading,isDisabled:e.isDisabled,handleChange:a,onDeleteProduct:function(e){return function(e){S(I.filter((function(n){return n.id!==e})))}(e)}})]}),(0,_.jsx)(c.iR,{children:(0,_.jsxs)(p.hE,{spacing:"2",children:[(0,_.jsx)(p.zx,{variant:"solid",colorScheme:"gray",onClick:function(){return e.onCancel()},children:"Cancel"}),e.isDisabled?null:(0,_.jsx)(p.zx,{variant:"primary",type:"submit",isLoading:e.isLoading,children:"Save"})]})})]}),(0,_.jsx)(N,{isLoading:!1,isOpen:t,checkedProduct:I,onClose:g,onConfirm:function(e){!function(e,n,t){var a=[];t.forEach((function(e){!1===e.in_form&&a.push((0,i.Z)((0,i.Z)({},e),{},{in_form:!0}))})),e((0,i.Z)((0,i.Z)({},n),{},{products:[].concat((0,r.Z)(n.products),a)})),S([].concat((0,r.Z)(I),a)),g()}(s,m,e)}})]})}})]})})}}}]);