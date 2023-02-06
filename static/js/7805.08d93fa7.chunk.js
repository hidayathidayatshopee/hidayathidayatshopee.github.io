"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7805],{23401:function(e,t,n){var r=n(74165),i=n(15861),a=n(47670),s=n(30464),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post(s.v.transaction.CHECKOUT,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.post(s.v.transaction.TRANSACTIONS,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get(s.v.transaction.TRANSACTIONS,{params:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get(s.v.transaction.TRANSACTION_DETAILS(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get(s.v.transaction.ORDER_DETAILS(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h={createCheckout:o,getTransactionHistory:u,createTransaction:c,getTransactionDetail:l,getOrderDetails:d};t.Z=h},38466:function(e,t,n){var r=n(43964),i=n(65098),a=n(94129),s=n(46417);t.Z=function(e){var t=e.name,n=e.qty,o=e.regularPrice,c=e.discountedPrice,u=e.total,l=e.variantName,d=e.onClick,h=e.disabled,p=e.productPhoto;return(0,s.jsxs)(r.Ug,{alignItems:"start",gap:3,width:"100%",children:[(0,s.jsx)(r.oM,{ratio:1,minWidth:"4em",borderRadius:"lg",children:(0,s.jsx)(i.Ee,{loading:"lazy",src:p,alt:t,fallbackSrc:"./image-fallback.png",borderRadius:"lg",opacity:h?.5:1})}),(0,s.jsxs)(r.gC,{alignItems:"flex-start",flexGrow:2,spacing:1,children:[(0,s.jsx)(r.xv,{role:"button",textTransform:"uppercase",fontWeight:"bold",onClick:d,opacity:h?.5:1,_hover:{textDecoration:h?"none":"underline"},children:t}),(0,s.jsxs)(r.xv,{fontWeight:"semibold",fontSize:"xs",color:"gray.500",children:[l," - ",n," item(s)"]}),(0,s.jsxs)(r.kC,{direction:"row",justifyContent:"space-between",width:"100%",children:[0!==c?(0,s.jsxs)(r.kC,{direction:"row",gap:1,children:[(0,s.jsxs)(r.xv,{fontSize:"sm",color:"gray.500",textDecor:"line-through",fontWeight:"bold",children:["Rp",(0,a.xG)(o)]}),(0,s.jsxs)(r.xv,{fontSize:"md",color:"red.400",fontWeight:"bold",children:["Rp",(0,a.xG)(c)]})]}):(0,s.jsxs)(r.xv,{color:"darkDarken",fontSize:"sm",fontWeight:"bold",opacity:h?.5:1,children:["Rp",(0,a.xG)(o)]}),(0,s.jsxs)(r.xv,{color:"darkDarken",fontSize:"sm",fontWeight:"bold",opacity:h?.5:1,children:["Rp",(0,a.xG)(u)]})]})]})]})}},59522:function(e,t,n){var r=n(43964),i=n(46417);t.Z=function(e){var t=e.shopName,n=e.shopCityName,a=e.onClick;return(0,i.jsxs)(r.gC,{alignItems:"start",spacing:0,pb:3,children:[(0,i.jsx)(r.xv,{role:"button",fontWeight:"bold",onClick:a,_hover:{textDecoration:"underline"},children:t}),(0,i.jsx)(r.xv,{fontSize:"sm",fontWeight:"semibold",color:"gray.500",children:n})]})}},13415:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),i=n(29439),a=n(15088),s=n(43964),o=n(69748),c=n(53068),u=n(47313),l=n(36777);var d=function(e,t){var n=(0,u.useRef)();return(0,u.useEffect)((function(){return function(){n.current&&clearTimeout(n.current)}}),[]),function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=setTimeout((function(){e.apply(void 0,i)}),t);clearTimeout(n.current),n.current=s}},h=n(46417);var p=function(e){var t=e.disabled,n=e.minQty,p=e.maxQty,x=e.stock,f=e.defaultValue,m=e.onQuantityChange,g=(0,u.useState)(null!==f&&void 0!==f?f:1),j=(0,i.Z)(g,2),v=j[0],b=j[1],C=(0,a.MM)({focusInputOnChange:!1,defaultValue:null!==f&&void 0!==f?f:1,min:n&&n>1?n:1,max:p&&p>0&&p<x?p:x>0?x:1,isDisabled:t,onChange:function(e,t){""!==e&&b(t)},value:v}),y=C.getInputProps,Z=C.getIncrementButtonProps,k=C.getDecrementButtonProps,w=d(m,1e3);return(0,u.useEffect)((function(){w(v)}),[v]),(0,u.useEffect)((function(){b(null!==f&&void 0!==f?f:1)}),[x]),(0,h.jsxs)(s.Ug,{ms:-2,my:3,children:[(0,h.jsx)(o.hU,(0,r.Z)({"aria-label":"minus",icon:(0,h.jsx)(l.Z.Minus,{fill:"primary"}),variant:"quantity"},k())),(0,h.jsx)(c.II,(0,r.Z)((0,r.Z)({},y()),{},{border:"none",textAlign:"center",_focusVisible:{outline:"none"},fontWeight:"semibold",variant:"quantity",maxW:20})),(0,h.jsx)(o.hU,(0,r.Z)({"aria-label":"plus",icon:(0,h.jsx)(l.Z.Plus,{fill:"primary"}),variant:"quantity"},Z()))]})}},72301:function(e,t,n){var r=n(74165),i=n(15861),a=n(23401);t.Z=function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.createCheckout(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.createTransaction(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{createCheckout:e,createTransaction:t}}},87129:function(e,t,n){var r=n(47313);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BAZR",t=document.getElementById("title");(0,r.useEffect)((function(){t.innerHTML=e}),[e])}},37805:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(4942),i=n(1413),a=n(74165),s=n(15861),o=n(93433),c=n(29439),u=n(84959),l=n(19195),d=n(43964),h=n(34410),p=n(69748),x=n(8914),f=n(47313),m=n(58467),g=n(36777),j=n(59522),v=n(36459),b=n(53068),C=n(78788),y=n(43974),Z=n(38466),k=n(13415),w=n(46417),_=function(e){var t=Object.assign({},((0,v.Z)(e),e)),n=(0,m.s0)(),r=(0,C.Z)().updateCart,i=(0,f.useState)(!1),a=(0,c.Z)(i,2),s=a[0],o=a[1],u=!t.data.stock||t.data.stock<t.data.min_buy_qty;return(0,w.jsxs)(d.xu,{backgroundColor:u?"lightLighten":"transparent",children:[(0,w.jsxs)(d.Ug,{width:"100%",pt:3,alignItems:"start",gap:2,children:[(0,w.jsx)(h.XZ,{isChecked:t.selectedCart,colorScheme:"default",onChange:function(e){return t.handleSelectItem(e,t.data.cart_id,t.data.shop_id)},disabled:u}),(0,w.jsx)(d.xu,{width:"100%",pb:5,pe:3,children:(0,w.jsx)(Z.Z,{name:t.data.product_name,qty:t.data.quantity,regularPrice:t.data.variant_type_price,discountedPrice:t.data.price_after_discount,total:t.data.total,variantName:t.data.variant_type_name.split(",").join(", "),onClick:function(){return n(y.Z.PDP(t.data.product_id,t.data.product_name))},disabled:u,productPhoto:t.data.product_photo},t.data.variant_type_id)})]}),(0,w.jsxs)(d.kC,{alignItems:"center",width:"100%",justifyContent:"space-between",mb:3,flexDirection:{base:"column",sm:"column",md:"row",lg:"row",xl:"row"},children:[s?(0,w.jsx)(b.II,{marginStart:"2.75em",placeholder:"Notes",size:"sm",value:t.data.notes,onChange:t.handleInputNotes}):(0,w.jsx)(p.zx,{variant:"unstyled",marginStart:"2.75em",color:"primary",textAlign:"start",fontSize:"xs",disabled:u,onClick:function(){return o(!0)},children:"Add Notes"}),(0,w.jsxs)(d.Ug,{spacing:5,justifyContent:"end",alignItems:"center",width:"100%",children:[u&&(0,w.jsx)(d.xv,{fontSize:"xs",color:"dark",fontWeight:"semibold",children:"Out of stock"}),(0,w.jsx)(p.hU,{variant:"unstyled","aria-label":"delete",icon:(0,w.jsx)(g.Z.Trash,{boxSize:4,fill:u?"red":"dark"}),onClick:function(){return t.handleDeleteItem(t.data.cart_id)}}),(0,w.jsx)(k.Z,{onQuantityChange:function(e){e!==t.data.quantity&&r({quantity:e-t.data.quantity,shop_id:t.data.shop_id,variant_type_id:t.data.variant_type_id})},maxQty:t.data.max_buy_qty,minQty:t.data.min_buy_qty,stock:t.data.stock,defaultValue:t.data.quantity,disabled:u})]})]})]})};var S=function(e){var t=e.isOpen,n=e.onClose,r=e.onClearCart;return(0,w.jsxs)(x.u_,{isOpen:t,onClose:n,children:[(0,w.jsx)(x.ZA,{}),(0,w.jsxs)(x.hz,{children:[(0,w.jsx)(x.xB,{children:"Clear Cart"}),(0,w.jsx)(x.ol,{}),(0,w.jsx)(x.fe,{children:"Are you sure want to clear your cart?"}),(0,w.jsx)(x.mz,{children:(0,w.jsx)(p.zx,{colorScheme:"default",onClick:r,children:"Clear Cart"})})]})]})},I=function(e){return(0,w.jsx)(d.xu,{py:2,px:3,width:{base:"15em",sm:"20em",md:"20em",lg:"20em",xl:"20em"},color:"white",backgroundColor:"primary",borderRadius:"lg",mx:"auto",children:(0,w.jsxs)(d.Ug,{width:"100%",justifyContent:"space-between",children:[(0,w.jsx)(d.xv,{fontSize:{base:"sm",sm:"md",md:"lg",lg:"lg",xl:"lg"},children:e.description}),(0,w.jsx)(p.zx,{variant:"unstyled",onClick:e.onClick,children:e.isUpdated?"OK":"Undo"})]})})},T=n(72301),z=n(87129),O=n(94129),R=function(){(0,z.Z)("Cart | BAZR");var e=(0,C.Z)(),t=e.cart,n=e.setCheckoutData,v=e.deleteCart,b=e.deleteItem,Z=e.undoDeleteItem,k=e.setCheckoutCartIds,R=e.getCart,W=e.updateNotes,U=(0,u.qY)(),D=U.isOpen,A=U.onOpen,E=U.onClose,N=(0,m.s0)(),P=(0,l.pm)(),q=(0,f.useRef)(),G=(0,T.Z)().createCheckout,B=(0,f.useState)(!1),M=(0,c.Z)(B,2),H=M[0],L=M[1],Q=(0,f.useState)({}),X=(0,c.Z)(Q,2),V=X[0],Y=X[1],K=(0,f.useState)({}),F=(0,c.Z)(K,2),J=F[0],$=F[1],ee=(0,f.useState)([]),te=(0,c.Z)(ee,2),ne=te[0],re=te[1],ie=(0,f.useState)(0),ae=(0,c.Z)(ie,2),se=ae[0],oe=ae[1],ce=(0,f.useState)(0),ue=(0,c.Z)(ce,2),le=ue[0],de=ue[1],he=(0,f.useState)(0),pe=(0,c.Z)(he,2),xe=pe[0],fe=pe[1],me=(0,f.useState)(0),ge=(0,c.Z)(me,2),je=ge[0],ve=ge[1],be=(0,u.qY)(),Ce=function(e,n,r){e.currentTarget.checked?re([].concat((0,o.Z)(ne),[t.find((function(e){return e.cart_id===n}))])):re(ne.filter((function(e){return e.cart_id!==n})))},ye=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r=[],ne.forEach((function(e){var n;0===t.length||-1===t.findIndex((function(t){return t.shop_id===e.shop_id}))?t=[].concat((0,o.Z)(t),[{shop_id:e.shop_id,order_details:[{notes:e.notes,cart_id:e.cart_id}]}]):null===(n=t.find((function(t){return t.shop_id===e.shop_id})))||void 0===n||n.order_details.push({notes:e.notes,cart_id:e.cart_id});r.push(e.cart_id)})),e.next=5,G({orders:t});case 5:(i=e.sent).is_success&&(n(i.data),k(r),N(y.Z.CART_SHIPMENT,{replace:!0}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(e){b(e),q.current&&P.isActive(q.current)&&P.close(q.current),q.current=P({description:"Item deleted.",duration:3e3,position:"top",onCloseComplete:function(){v(e)},render:function(e){return(0,w.jsx)(I,{description:e.description,isUpdated:!1,onClick:function(){return L(!0)}})}})};return(0,f.useEffect)((function(){q.current&&H&&(Z(),P.update(q.current,{description:"Success undo delete item.",duration:3e3,position:"top",onCloseComplete:function(){},render:function(e){return(0,w.jsx)(I,{description:e.description,isUpdated:!0,onClick:function(){return P.close(q.current)}})}}),L(!1))}),[H]),(0,f.useEffect)((function(){var e={all:0!==t.length&&ne.length===t.length};Object.keys(J).forEach((function(t){e[t]=ne.filter((function(e){return e.shop_id===parseInt(t)})).length===Object.values(J[parseInt(t)]).length}));var n=ne.reduce((function(e,t){return e+t.variant_type_price*t.quantity}),0),r=ne.reduce((function(e,t){return e+t.price_after_discount*t.quantity}),0),a=n-r,s=ne.reduce((function(e,t){return e+t.quantity}),0);oe(n),de(a),fe(r),ve(s),Y((0,i.Z)({},e))}),[ne,t]),(0,f.useEffect)((function(){if(0!==t.length){var e={};t.forEach((function(t){e[t.shop_id]=(0,i.Z)((0,i.Z)({},e[t.shop_id]),{},(0,r.Z)({},t.cart_id,t))})),$(e)}}),[t]),(0,w.jsxs)(d.W2,{maxW:"container.xl",children:[(0,w.jsx)(d.xu,{px:{base:"1em",sm:"2em",md:"3em",lg:"4em",xl:"4em"},py:{base:"1em",sm:"1.5em",md:"2em",lg:"2.5em",xl:"4em"},children:0!==t.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.X6,{variant:"sectionHeading",fontSize:{base:"md",sm:"xl",md:"2xl"},children:"Cart"}),(0,w.jsxs)(d.rj,{templateColumns:"repeat(3, 1fr)",gap:10,width:"100%",mb:{base:"7em",sm:"6em",md:"6em",lg:0,xl:0},children:[(0,w.jsx)(d.P4,{colSpan:{base:3,sm:3,md:3,lg:2,xl:2},children:(0,w.jsxs)(d.gC,{spacing:5,children:[(0,w.jsxs)(d.xu,{width:"100%",children:[(0,w.jsxs)(d.Ug,{justifyContent:"space-between",children:[(0,w.jsx)(h.XZ,{isChecked:V.all,onChange:function(e){e.currentTarget.checked?re(t):re([])},spacing:4,colorScheme:"default",children:(0,w.jsx)(d.xv,{fontSize:"sm",fontWeight:"bold",textTransform:"uppercase",children:"Select All"})}),(0,w.jsx)(p.zx,{variant:"navLink",color:"primary",onClick:be.onOpen,fontSize:"xs",children:"Clear cart"})]}),(0,w.jsx)(d.iz,{})]}),Object.entries(J).map((function(e,n){var r,a,s=(0,c.Z)(e,2),u=s[0],l=s[1];return(0,w.jsxs)(d.xu,{width:"100%",children:[(0,w.jsxs)(d.xu,{width:"100%",children:[(0,w.jsxs)(d.Ug,{alignItems:"start",gap:2,children:[(0,w.jsx)(h.XZ,{isChecked:V[u],onChange:function(e){return function(e,n){e.currentTarget.checked?re([].concat((0,o.Z)(ne.filter((function(e){return e.shop_id!==n}))),(0,o.Z)(t.filter((function(e){return e.shop_id===n}))))):re(ne.filter((function(e){return e.shop_id!==n})))}(e,parseInt(u))},mt:1,colorScheme:"default"}),(0,w.jsx)(j.Z,{shopName:null===(r=Object.values(l).at(0))||void 0===r?void 0:r.shop_name,shopCityName:null===(a=Object.values(l).at(0))||void 0===a?void 0:a.city_name})]}),(0,w.jsx)(d.gC,{children:Object.values(l).map((function(e,t){return(0,w.jsxs)(d.xu,{width:"100%",children:[(0,w.jsx)(_,{handleSelectItem:Ce,data:e,selectedCart:-1!==ne.findIndex((function(t){return t.cart_id===e.cart_id})),handleDeleteItem:Ze,handleInputNotes:function(t){return n=t,r=e,void W((0,i.Z)((0,i.Z)({},r),{},{notes:n.currentTarget.value}));var n,r}}),t<Object.values(l).length-1&&(0,w.jsx)(d.iz,{borderBottomWidth:"0.1em"})]},e.cart_id)}))})]}),n<Object.entries(J).length&&(0,w.jsx)(d.iz,{})]},u)}))]})}),(0,w.jsx)(d.P4,{colSpan:1,display:{base:"none",sm:"none",md:"none",lg:"block",xl:"block"},children:(0,w.jsxs)(d.gC,{boxShadow:"md",p:4,spacing:5,borderRadius:"lg",border:"2px solid",borderColor:"lightLighten",children:[(0,w.jsx)(d.xv,{fontWeight:"bold",textAlign:"start",width:"100%",textTransform:"uppercase",children:"Order Summary"}),(0,w.jsxs)(d.gC,{alignItems:"start",width:"100%",spacing:0,children:[(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,w.jsxs)(d.xv,{fontWeight:"semibold",fontSize:"sm",color:"gray.500",children:["Total Price"," ",0!==je&&"(".concat(je," ").concat(je>1?"Items":"Item",")")]}),(0,w.jsxs)(d.xv,{fontWeight:"semibold",fontSize:"sm",color:"gray.500",children:["Rp",(0,O.xG)(se)]})]}),(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,w.jsx)(d.xv,{fontWeight:"semibold",fontSize:"sm",color:"gray.500",children:"Total Discount"}),(0,w.jsxs)(d.xv,{fontWeight:"semibold",fontSize:"sm",color:"gray.500",children:["-Rp",(0,O.xG)(le)]})]})]}),(0,w.jsx)(d.iz,{borderBottomWidth:"0.1em"}),(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",fontWeight:"bold",textAlign:"start",children:[(0,w.jsx)(d.xv,{textTransform:"uppercase",children:"Grand Total"}),(0,w.jsxs)(d.xv,{color:"primary",children:["Rp",(0,O.xG)(xe)]})]}),(0,w.jsxs)(p.zx,{borderRadius:"lg",width:"100%",shadow:"none",onClick:ye,variant:"primary",isDisabled:0===ne.length,children:["Checkout (",ne.length,")"]})]})})]}),(0,w.jsx)(d.xu,{background:"white",position:"fixed",right:0,bottom:0,left:0,p:5,borderTop:"1px",borderColor:"primary",display:{base:"block",sm:"block",md:"block",lg:"none",xl:"none"},children:(0,w.jsx)(d.gC,{spacing:5,children:(0,w.jsxs)(d.Ug,{width:"100%",justifyContent:"space-between",children:[(0,w.jsxs)(d.gC,{alignItems:"start",children:[(0,w.jsx)(d.xv,{children:"Total Price"}),(0,w.jsxs)(d.Ug,{spacing:0,children:[(0,w.jsxs)(d.xv,{fontWeight:"semibold",children:["Rp",(0,O.xG)(xe)]}),(0,w.jsx)(p.hU,{size:"md","aria-label":"chevron up",variant:"ghost",icon:(0,w.jsx)(g.Z.ChevronUp,{}),onClick:A})]})]}),(0,w.jsxs)(p.zx,{borderRadius:"lg",shadow:"none",onClick:ye,variant:0===ne.length?"basicOutline":"primary",isDisabled:0===ne.length,children:["Buy (",ne.length,")"]})]})})}),(0,w.jsxs)(x.dy,{placement:"bottom",onClose:E,isOpen:D,children:[(0,w.jsx)(x.P1,{}),(0,w.jsxs)(x.sc,{children:[(0,w.jsx)(x.OX,{children:"Shopping summary"}),(0,w.jsxs)(x.Ng,{children:[(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,w.jsx)(d.xv,{children:"Total Price (Item)"}),(0,w.jsxs)(d.xv,{children:["Rp",(0,O.xG)(xe)]})]}),(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,w.jsx)(d.xv,{children:"Total Discount Item(s)"}),(0,w.jsxs)(d.xv,{children:["Rp",(0,O.xG)(0)]})]})]}),(0,w.jsx)(x.ze,{borderTopWidth:"1px",children:(0,w.jsxs)(d.Ug,{justifyContent:"space-between",alignItems:"center",width:"100%",fontWeight:"semibold",children:[(0,w.jsx)(d.xv,{children:"Grand Total"}),(0,w.jsxs)(d.xv,{children:["Rp",(0,O.xG)(xe)]})]})})]})]})]}):(0,w.jsx)(d.M5,{children:(0,w.jsxs)(d.gC,{children:[(0,w.jsx)(d.xv,{children:"Your Cart is Empty"}),(0,w.jsx)(p.zx,{borderRadius:"lg",shadow:"none",color:"white",onClick:function(){return N(y.Z.HOME,{replace:!0})},children:"Shop Now"})]})})}),(0,w.jsx)(S,{isOpen:be.isOpen,onClose:be.onClose,onClearCart:function(){be.onClose(),Object.entries(J).forEach((function(e){var t=(0,c.Z)(e,2),n=(t[0],t[1]);Object.values(n).forEach((function(e){var t=e.cart_id;b(t),v(t).then((function(){R()}))}))}))}})]})}}}]);