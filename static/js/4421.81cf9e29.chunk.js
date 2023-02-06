"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4421],{34421:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t=r(62128),i=r(43964),o=r(69748),l=r(58821),a=r(2135),c=r(43974),s=r(93433),d=r(29439),u=r(88679),v=r(98379),p=r(30955),h=r(34410),f=r(91101),g=r(65098),m=r(32176),x=r(32768),j=r(47313),b=r(58467),C=r(73253),y=r(72849),T=r(45598),w=r(46036),Z=r(94129),E=r(46417);var k=function(){var e,n,r,t=(0,b.s0)(),a=(0,j.useState)(!1),k=(0,d.Z)(a,2),_=k[0],O=k[1],P=(0,j.useState)(!1),S=(0,d.Z)(P,2),A=S[0],D=S[1],I=(0,j.useState)(!1),z=(0,d.Z)(I,2),L=z[0],W=z[1],N=(0,j.useState)(),F=(0,d.Z)(N,2),R=F[0],$=F[1],G=(0,j.useState)([]),V=(0,d.Z)(G,2),B=V[0],U=V[1],M=(0,j.useState)(5),J=(0,d.Z)(M,2),q=J[0],X=J[1],K=(0,w.Z)().user,H=(0,T.Z)(),Q=H.successToast,Y=H.errorToast,ee=(0,C.Z)().fetchShopProducts,ne=(0,y.Z)().updateShopProductStatus,re=function(e){if(O((function(e){return!e})),e){var n=[];null===R||void 0===R||R.data.forEach((function(e){return n.push(e.id)})),U(n)}else U([])},te=function(e,n){e?(U([].concat((0,s.Z)(B),[n])),B.length+1===(null===R||void 0===R?void 0:R.data.length)&&O(!0)):(O(!1),U(B.filter((function(e){return e!==n}))))};return(0,j.useEffect)((function(){var e;W(!0),ee(null!==(e=null===K||void 0===K?void 0:K.shop_id)&&void 0!==e?e:0,{limit:q,page:1,sort:"desc"}).then((function(e){return $(e)})).finally((function(){return W(!1)}))}),[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.xu,{border:"1px",rounded:"md",borderColor:"gray.300",p:6,mb:5,children:(0,E.jsxs)(i.kC,{alignItems:{base:"center",md:"center"},justifyContent:{base:"center",lg:"space-between"},flexDirection:{base:"column",lg:"row"},children:[(0,E.jsxs)(i.kC,{marginEnd:5,alignItems:"center",mb:{base:5,lg:0},children:[(0,E.jsx)(i.xv,{me:5,fontWeight:"medium",children:"Limit"}),(0,E.jsxs)(u.Ph,{variant:"outline",onChange:function(e){var n;W(!0),ee(null!==(n=null===K||void 0===K?void 0:K.shop_id)&&void 0!==n?n:0,{limit:Number(e.currentTarget.value),page:1,sort:"desc"}).then((function(e){return $(e)})).finally((function(){return W(!1)})),X(Number(e.currentTarget.value))},children:[(0,E.jsx)("option",{value:"5",children:"5"}),(0,E.jsx)("option",{value:"10",children:"10"}),(0,E.jsx)("option",{value:"20",children:"20"}),(0,E.jsx)("option",{value:"30",children:"30"})]})]}),(0,E.jsxs)(i.kC,{alignItems:"center",flexDirection:{base:"column",md:"row"},children:[(0,E.jsxs)(i.kC,{mb:{base:5,md:0},children:[(0,E.jsx)(i.xv,{me:5,fontWeight:"medium",children:A?"Active":"Not Active"}),(0,E.jsx)(v.r,{me:8,colorScheme:"teal",size:"lg",alignItems:"start",isChecked:A,onChange:function(){return D(!A)}})]}),(0,E.jsx)(o.zx,{isDisabled:L,variant:"solid",colorScheme:"purple",px:10,onClick:function(){B.length<1?Y("min checked 1 product"):(W(!0),ne({status:A,product_ids:B}).then((function(e){var n;e.is_success?(Q(e.message),ee(null!==(n=null===K||void 0===K?void 0:K.shop_id)&&void 0!==n?n:0,{limit:q,page:1,sort:"desc"}).then((function(e){re(!1),O(!1),$(e)}))):Y(e.message)})).catch((function(){Y("Failed update status")})).finally((function(){W(!1)})))},children:"Apply"})]})]})}),(0,E.jsx)(p.xJ,{border:"1px",rounded:"md",borderColor:"gray.300",pt:5,children:(0,E.jsxs)(p.iA,{children:[(0,E.jsx)(p.hr,{children:(0,E.jsxs)(p.Tr,{children:[(0,E.jsx)(p.Th,{children:(0,E.jsx)(h.XZ,{isChecked:_,me:5,onChange:function(e){return re(e.currentTarget.checked)}})}),(0,E.jsx)(p.Th,{minWidth:"50px",children:"Product Name"}),(0,E.jsx)(p.Th,{children:"Variant"}),(0,E.jsx)(p.Th,{children:"Price"}),(0,E.jsx)(p.Th,{children:"Stock"}),(0,E.jsx)(p.Th,{children:"Status"}),(0,E.jsx)(p.Th,{textAlign:"center",children:"Action"})]})}),(0,E.jsxs)(p.p3,{children:[L?(0,E.jsx)(p.Tr,{children:(0,E.jsx)(p.Td,{colSpan:6,textAlign:"center",children:(0,E.jsx)(f.$,{})})}):null,L||0!==(null===R||void 0===R?void 0:R.data.length)?null:(0,E.jsx)(p.Tr,{children:(0,E.jsx)(p.Td,{colSpan:6,textAlign:"center",children:"Empty Data"})}),!L&&(null===R||void 0===R?void 0:R.data.map((function(e,n){var r;return null===(r=e.variant_group)||void 0===r?void 0:r.variant_types.map((function(r,a){var s,d,u,v,f,j,b,C,y,T,w,k;return(0,E.jsxs)(p.Tr,{children:[(null!==(s=null===(d=e.variant_group)||void 0===d?void 0:d.variant_types.length)&&void 0!==s?s:0)>1?0===a?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p.Td,{rowSpan:null===(u=e.variant_group)||void 0===u?void 0:u.variant_types.length,children:(0,E.jsx)(h.XZ,{isChecked:B.includes(e.id),onChange:function(n){return te(n.currentTarget.checked,e.id)}})}),(0,E.jsx)(p.Td,{minWidth:"150px",maxWidth:"250px",rowSpan:null===(v=e.variant_group)||void 0===v?void 0:v.variant_types.length,children:(0,E.jsxs)(i.kC,{alignItems:"center",children:[(0,E.jsx)(g.Ee,{loading:"lazy",boxSize:"80px",objectFit:"cover",marginEnd:4,src:null!==(f=null===e||void 0===e||null===(j=e.product_photo)||void 0===j?void 0:j.url)&&void 0!==f?f:"",alt:"Product photo"}),(0,E.jsx)(i.xv,{fontWeight:"medium",textOverflow:"ellipsis",noOfLines:1,children:e.name})]})})]}):null:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p.Td,{children:(0,E.jsx)(h.XZ,{isChecked:B.includes(e.id),onChange:function(n){return te(n.currentTarget.checked,e.id)}})}),(0,E.jsx)(p.Td,{minWidth:"150px",maxWidth:"250px",children:(0,E.jsxs)(i.kC,{alignItems:"center",children:[(0,E.jsx)(g.Ee,{loading:"lazy",boxSize:"80px",objectFit:"cover",marginEnd:4,src:null!==(b=null===e||void 0===e||null===(C=e.product_photo)||void 0===C?void 0:C.url)&&void 0!==b?b:"",alt:"Product photo"}),(0,E.jsx)(i.xv,{fontWeight:"medium",textOverflow:"ellipsis",noOfLines:1,children:e.name})]})})]}),(0,E.jsx)(p.Td,{children:r.name}),(0,E.jsxs)(p.Td,{children:["Rp",(0,Z.xG)(r.price)]}),(0,E.jsx)(p.Td,{children:r.stock}),(null!==(y=null===(T=e.variant_group)||void 0===T?void 0:T.variant_types.length)&&void 0!==y?y:0)>1?0===a?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p.Td,{rowSpan:null===(w=e.variant_group)||void 0===w?void 0:w.variant_types.length,children:e.is_active?(0,E.jsx)(m.Vp,{colorScheme:"teal",children:"Active"}):(0,E.jsx)(m.Vp,{colorScheme:"gray",children:"Not Active"})}),(0,E.jsx)(p.Td,{rowSpan:null===(k=e.variant_group)||void 0===k?void 0:k.variant_types.length,children:(0,E.jsx)(x.u,{hasArrow:!0,label:"Edit",bg:"gray.300",color:"black",children:(0,E.jsx)(o.hU,{mx:1,"aria-label":"Edit",bgColor:"yellow.300",icon:(0,E.jsx)(l.jox,{}),onClick:function(){return t(c.Z.SELLER_PRODUCT_EDIT(e.id))}})})})]}):null:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p.Td,{children:e.is_active?(0,E.jsx)(m.Vp,{colorScheme:"teal",children:"Active"}):(0,E.jsx)(m.Vp,{colorScheme:"gray",children:"Not Active"})}),(0,E.jsx)(p.Td,{children:(0,E.jsx)(x.u,{hasArrow:!0,label:"Edit",bg:"gray.300",color:"black",children:(0,E.jsx)(o.hU,{mx:1,"aria-label":"Edit",bgColor:"yellow.300",icon:(0,E.jsx)(l.jox,{}),onClick:function(){return t(c.Z.SELLER_PRODUCT_EDIT(e.id))}})})})]})]},"".concat(n,"-").concat(a))}))})))]})]})}),(0,E.jsxs)(i.kC,{pt:"5",justifyContent:"space-between",children:[(0,E.jsxs)(i.xv,{children:["Total ",null===R||void 0===R?void 0:R.total]}),(0,E.jsxs)(i.kC,{alignItems:"center",children:[(0,E.jsx)(o.zx,{isDisabled:(null!==(e=null===R||void 0===R?void 0:R.current_page)&&void 0!==e?e:0)<=1,fontWeight:"normal",onClick:function(){!function(){var e,n;O(!1),U([]);var r=(null!==(e=null===R||void 0===R?void 0:R.current_page)&&void 0!==e?e:0)-1;ee(null!==(n=null===K||void 0===K?void 0:K.shop_id)&&void 0!==n?n:0,{limit:q,page:r,sort:"desc"}).then((function(e){return $(e)})).finally((function(){return W(!1)}))}()},children:"Prev"}),(0,E.jsxs)(i.xv,{px:3,children:[null===R||void 0===R?void 0:R.current_page," of ",null===R||void 0===R?void 0:R.total_page]}),(0,E.jsx)(o.zx,{isDisabled:(null!==(n=null===R||void 0===R?void 0:R.current_page)&&void 0!==n?n:0)>=(null!==(r=null===R||void 0===R?void 0:R.total_page)&&void 0!==r?r:0),fontWeight:"normal",onClick:function(){!function(){var e,n;O(!1),U([]);var r=(null!==(e=null===R||void 0===R?void 0:R.current_page)&&void 0!==e?e:0)+1;ee(null!==(n=null===K||void 0===K?void 0:K.shop_id)&&void 0!==n?n:0,{limit:q,page:r,sort:"desc"}).then((function(e){return $(e)})).finally((function(){return W(!1)}))}()},children:"Next"})]})]})]})};var _=function(){return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(t.Zb,{variant:"outline",rounded:"xl",p:5,bgColor:"white",children:[(0,E.jsx)(t.Ol,{children:(0,E.jsxs)(i.kC,{justifyContent:"space-between",children:[(0,E.jsx)(i.xv,{fontSize:"2xl",fontWeight:"bold",children:"Product List"}),(0,E.jsx)(o.zx,{leftIcon:(0,E.jsx)(l.AzW,{}),as:a.rU,to:c.Z.SELLER_PRODUCT_CREATE,children:"Add Product"})]})}),(0,E.jsx)(t.eW,{children:(0,E.jsx)(k,{})})]})})}},32176:function(e,n,r){r.d(n,{Vp:function(){return g}});var t=r(45987),i=r(1413),o=r(29439),l=r(47313),a=r(33439),c=r(66195),s=r(31201),d=r(14988),u=["isDisabled","children"],v=(0,c.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),p=(0,o.Z)(v,2),h=p[0],f=p[1],g=(0,s.Gp)((function(e,n){var r=(0,s.jC)("Tag",e),t=(0,d.Lr)(e),o=(0,i.Z)({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},r.container);return l.createElement(h,{value:r},l.createElement(s.m$.span,(0,i.Z)((0,i.Z)({ref:n},t),{},{__css:o})))}));g.displayName="Tag",(0,s.Gp)((function(e,n){var r=f();return l.createElement(s.m$.span,(0,i.Z)((0,i.Z)({ref:n,noOfLines:1},e),{},{__css:r.label}))})).displayName="TagLabel",(0,s.Gp)((function(e,n){return l.createElement(a.JO,(0,i.Z)({ref:n,verticalAlign:"top",marginEnd:"0.5rem"},e))})).displayName="TagLeftIcon",(0,s.Gp)((function(e,n){return l.createElement(a.JO,(0,i.Z)({ref:n,verticalAlign:"top",marginStart:"0.5rem"},e))})).displayName="TagRightIcon";var m=function(e){return l.createElement(a.JO,(0,i.Z)({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),l.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};m.displayName="TagCloseIcon",(0,s.Gp)((function(e,n){var r=e.isDisabled,o=e.children,a=(0,t.Z)(e,u),c=f(),d=(0,i.Z)({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},c.closeButton);return l.createElement(s.m$.button,(0,i.Z)((0,i.Z)({ref:n,"aria-label":"close"},a),{},{type:"button",disabled:r,__css:d}),o||l.createElement(m,null))})).displayName="TagCloseButton"},32768:function(e,n,r){r.d(n,{u:function(){return E}});var t=r(4942),i=r(1413),o=r(45987),l=r(37762),a=r(47313),c=r(25763),s=r(88276),d=r(31201),u=r(14988),v=r(43905),p=r(82280),h=r(40073),f=r(34490),g=r(24401),m=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnScroll","closeOnPointerDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"],x=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor","motionProps"];var j={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};function b(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}var C=function(e){var n;return(null==(n=e.current)?void 0:n.ownerDocument)||document},y=function(e){var n,r;return(null==(r=null==(n=e.current)?void 0:n.ownerDocument)?void 0:r.defaultView)||window};var T="chakra-ui:close-tooltip";function w(e,n){return(0,a.useEffect)((function(){var r=C(e);return r.addEventListener(T,n),function(){return r.removeEventListener(T,n)}}),[n,e]),function(){var n=C(e),r=y(e);n.dispatchEvent(new r.CustomEvent(T))}}var Z=(0,d.m$)(v.E.div),E=(0,d.Gp)((function(e,n){var r,v,T=(0,d.mq)("Tooltip",e),E=(0,u.Lr)(e),k=(0,d.Fg)(),_=E.children,O=E.label,P=E.shouldWrapChildren,S=E["aria-label"],A=E.hasArrow,D=E.bg,I=E.portalProps,z=E.background,L=E.backgroundColor,W=E.bgColor,N=E.motionProps,F=(0,o.Z)(E,x),R=null!==(r=null!==(v=null!==z&&void 0!==z?z:L)&&void 0!==v?v:D)&&void 0!==r?r:W;if(R){T.bg=R;var $=(0,u.K1)(k,"colors",R);T[c.j.arrowBg.var]=$}var G,V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.openDelay,r=void 0===n?0:n,l=e.closeDelay,s=void 0===l?0:l,d=e.closeOnClick,u=void 0===d||d,v=e.closeOnMouseDown,p=e.closeOnScroll,x=e.closeOnPointerDown,j=void 0===x?v:x,T=e.closeOnEsc,Z=void 0===T||T,E=e.onOpen,k=e.onClose,_=e.placement,O=e.id,P=e.isOpen,S=e.defaultIsOpen,A=e.arrowSize,D=void 0===A?10:A,I=e.arrowShadowColor,z=e.arrowPadding,L=e.modifiers,W=e.isDisabled,N=e.gutter,F=e.offset,R=e.direction,$=(0,o.Z)(e,m),G=(0,f.q)({isOpen:P,defaultIsOpen:S,onOpen:E,onClose:k}),V=G.isOpen,B=G.onOpen,U=G.onClose,M=(0,c.D)({enabled:V,placement:_,arrowPadding:z,modifiers:L,gutter:N,offset:F,direction:R}),J=M.referenceRef,q=M.getPopperProps,X=M.getArrowInnerProps,K=M.getArrowProps,H=(0,a.useId)(),Q="tooltip-".concat(null!==O&&void 0!==O?O:H),Y=(0,a.useRef)(null),ee=(0,a.useRef)(),ne=(0,a.useCallback)((function(){ee.current&&(clearTimeout(ee.current),ee.current=void 0)}),[]),re=(0,a.useRef)(),te=(0,a.useCallback)((function(){re.current&&(clearTimeout(re.current),re.current=void 0)}),[]),ie=(0,a.useCallback)((function(){te(),U()}),[U,te]),oe=w(Y,ie),le=(0,a.useCallback)((function(){if(!W&&!ee.current){oe();var e=y(Y);ee.current=e.setTimeout(B,r)}}),[oe,W,B,r]),ae=(0,a.useCallback)((function(){ne();var e=y(Y);re.current=e.setTimeout(ie,s)}),[s,ie,ne]),ce=(0,a.useCallback)((function(){V&&u&&ae()}),[u,ae,V]),se=(0,a.useCallback)((function(){V&&j&&ae()}),[j,ae,V]),de=(0,a.useCallback)((function(e){V&&"Escape"===e.key&&ae()}),[V,ae]);(0,h.O)((function(){return C(Y)}),"keydown",Z?de:void 0),(0,h.O)((function(){return C(Y)}),"scroll",(function(){V&&p&&ie()})),(0,a.useEffect)((function(){W&&(ne(),V&&U())}),[W,V,U,ne]),(0,a.useEffect)((function(){return function(){ne(),te()}}),[ne,te]),(0,h.O)((function(){return Y.current}),"pointerleave",ae);var ue=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:(0,g.lq)(Y,n,J),onPointerEnter:b(e.onPointerEnter,(function(e){"touch"!==e.pointerType&&le()})),onClick:b(e.onClick,ce),onPointerDown:b(e.onPointerDown,se),onFocus:b(e.onFocus,le),onBlur:b(e.onBlur,ae),"aria-describedby":V?Q:void 0})}),[le,ae,se,V,Q,ce,J]),ve=(0,a.useCallback)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return q((0,i.Z)((0,i.Z)({},n),{},{style:(0,i.Z)((0,i.Z)({},n.style),{},(e={},(0,t.Z)(e,c.j.arrowSize.var,D?"".concat(D,"px"):void 0),(0,t.Z)(e,c.j.arrowShadowColor.var,I),e))}),r)}),[q,D,I]),pe=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=(0,i.Z)((0,i.Z)({},e.style),{},{position:"relative",transformOrigin:c.j.transformOrigin.varRef});return(0,i.Z)((0,i.Z)((0,i.Z)({ref:n},$),e),{},{id:Q,role:"tooltip",style:r})}),[$,Q]);return{isOpen:V,show:le,hide:ae,getTriggerProps:ue,getTooltipProps:pe,getTooltipPositionerProps:ve,getArrowProps:K,getArrowInnerProps:X}}((0,i.Z)((0,i.Z)({},F),{},{direction:k.direction}));if("string"===typeof _||P)G=a.createElement(d.m$.span,(0,i.Z)({display:"inline-block",tabIndex:0},V.getTriggerProps()),_);else{var B=a.Children.only(_);G=(0,a.cloneElement)(B,V.getTriggerProps(B.props,B.ref))}var U=!!S,M=V.getTooltipProps({},n),J=U?function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},e),i=(0,l.Z)(r);try{for(i.s();!(n=i.n()).done;){var o=n.value;o in t&&delete t[o]}}catch(a){i.e(a)}finally{i.f()}return t}(M,["role","id"]):M,q=function(e,n){var r,t={},i=(0,l.Z)(n);try{for(i.s();!(r=i.n()).done;){var o=r.value;o in e&&(t[o]=e[o])}}catch(a){i.e(a)}finally{i.f()}return t}(M,["role","id"]);return O?a.createElement(a.Fragment,null,G,a.createElement(p.M,null,V.isOpen&&a.createElement(s.h_,(0,i.Z)({},I),a.createElement(d.m$.div,(0,i.Z)((0,i.Z)({},V.getTooltipPositionerProps()),{},{__css:{zIndex:T.zIndex,pointerEvents:"none"}}),a.createElement(Z,(0,i.Z)((0,i.Z)((0,i.Z)({variants:j,initial:"exit",animate:"enter",exit:"exit"},N),J),{},{__css:T}),O,U&&a.createElement(d.m$.span,(0,i.Z)({srOnly:!0},q),S),A&&a.createElement(d.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},a.createElement(d.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:T.bg}}))))))):a.createElement(a.Fragment,null,_)}));E.displayName="Tooltip"}}]);