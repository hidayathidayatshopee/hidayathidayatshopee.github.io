"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[66],{8771:function(e,r,n){var a=n(8342),i=n(333),t=n.n(i),o=n(2327),l=n(8802),c=n(184);r.Z=function(e){var r,n,i,s,d,u,m,g,y,h,p,v,f,b,x,_,Z,C,j=e.categories;return(0,c.jsxs)(a.aG,{display:{base:"none",lg:"flex"},spacing:"8px",separator:(0,c.jsx)(o.Z.ChevronRight,{color:"gray.500"}),my:8,variant:"default",children:[(0,c.jsx)(a.gN,{children:(0,c.jsx)(a.At,{href:l.Z.HOME,children:"Home"})}),(null===(r=j.primary_category)||void 0===r?void 0:r.id)&&(0,c.jsx)(a.gN,{isCurrentPage:!(null!==(n=j.secondary_category)&&void 0!==n&&n.id),children:(0,c.jsx)(a.At,{href:l.Z.PRIMARY_CATEGORY(t()(null===(i=j.primary_category)||void 0===i?void 0:i.name)),color:"".concat(null!==(s=j.secondary_category)&&void 0!==s&&s.id?"darkLighten":"primary"),children:null===(d=j.primary_category)||void 0===d?void 0:d.name})}),(null===(u=j.secondary_category)||void 0===u?void 0:u.id)&&(0,c.jsx)(a.gN,{isCurrentPage:!(null!==(m=j.tertiary_category)&&void 0!==m&&m.id),children:(0,c.jsx)(a.At,{href:l.Z.SECONDARY_CATEGORY(t()(null===(g=j.primary_category)||void 0===g?void 0:g.name),t()(null===(y=j.secondary_category)||void 0===y?void 0:y.name),null===(h=j.secondary_category)||void 0===h?void 0:h.id),color:"".concat(null!==(p=j.tertiary_category)&&void 0!==p&&p.id?"darkLighten":"primary"),children:null===(v=j.secondary_category)||void 0===v?void 0:v.name})}),(null===(f=j.tertiary_category)||void 0===f?void 0:f.id)&&(0,c.jsx)(a.gN,{children:(0,c.jsx)(a.At,{href:l.Z.TERTIARY_CATEGORY(t()(null===(b=j.primary_category)||void 0===b?void 0:b.name),t()(null===(x=j.secondary_category)||void 0===x?void 0:x.name),t()(null===(_=j.tertiary_category)||void 0===_?void 0:_.name),null===(Z=j.tertiary_category)||void 0===Z?void 0:Z.id),color:"primary",children:null===(C=j.tertiary_category)||void 0===C?void 0:C.name})})]})}},5842:function(e,r,n){n.d(r,{Z:function(){return f}});var a=n(1413),i=n(9712),t=n(6400),o=n(7689),l=n(333),c=n.n(l),s=n(2327),d=n(8802),u=n(1585),m=n(6459),g=n(4828),y=n(3421),h=n(184),p=function(e){var r=Object.assign({},((0,m.Z)(e),e));return(0,h.jsxs)(i.kC,{role:"button",onClick:r.onClick,direction:{base:"row",lg:"column"},flexShrink:0,w:{base:"200px",lg:"125px"},h:{base:"50px",lg:"auto"},border:"2px solid",borderColor:"light",borderRadius:"lg",boxShadow:"default",children:[(0,h.jsx)(i.oM,{ratio:1,flexShrink:0,width:{base:"25%",lg:"100%"},height:{base:"100%",lg:"auto"},borderRadius:"lg",children:(0,h.jsx)(g.Ee,{src:r.icon,borderRadius:"lg",onError:y.wY})}),(0,h.jsx)(i.xv,{align:"center",variant:"productCardTitle",mx:2,my:3,noOfLines:{base:1,lg:2},children:r.name})]})},v=n(2791);var f=function(e){var r=e.label,n=e.categoryLevel,l=e.categories,m=e.primaryURL,g=e.secondaryURL,y=e.isLoading,f=e.onError,b=(0,o.s0)();return(0,h.jsx)(h.Fragment,{children:0!==l.length&&(0,h.jsxs)(i.kC,{direction:"column",my:2,children:[(0,h.jsx)(i.kC,{justifyContent:"space-between",children:(0,h.jsx)(i.X6,{variant:"sectionHeading",fontSize:{base:"md",sm:"xl",md:"2xl"},children:null!==r&&void 0!==r?r:"Category"})}),f?(0,h.jsx)(i.xu,{bgColor:"lightLighten",py:28,borderRadius:"lg",children:(0,h.jsx)(i.M5,{children:(0,h.jsxs)(i.gC,{children:[(0,h.jsx)(i.xv,{children:"Something has occurred.."}),(0,h.jsxs)(i.xv,{as:i.rU,href:"#",variant:"link",alignItems:"center",fontSize:"lg",children:[(0,h.jsx)(s.Z.Refresh,{width:4,pb:"2px",me:2}),"Refresh"]})]})})}):(0,h.jsx)(t.Od,{isLoaded:!y,borderRadius:"lg",children:(0,h.jsx)(u.F,{children:l.map((function(e){return(0,v.createElement)(p,(0,a.Z)((0,a.Z)({},e),{},{key:e.id,onClick:function(){return function(e,r){switch(n){case"primary":return void b(d.Z.PRIMARY_CATEGORY(r));case"secondary":return void b(d.Z.SECONDARY_CATEGORY(m,r,e));case"tertiary":return void b(d.Z.TERTIARY_CATEGORY(m,g,r,e));default:return}}(e.id,c()(e.name))}}))}))})})]})})}},6066:function(e,r,n){n.r(r);var a=n(9439),i=n(9712),t=n(2791),o=n(7689),l=n(8771),c=n(5842),s=n(4610),d=n(2618),u=n(3421),m=n(6243),g=n(184);r.default=function(){var e=(0,o.UO)(),r=e.cPrimary,n=e.cSecondary,y=(0,s.Z)(),h=y.categoryLoading,p=y.fetchCategoriesProduct,v=y.fetchPrimaryCategoryBySlugifiedName,f=y.fetchSecondaryCategoryBySlugifiedName,b=(0,t.useState)(null),x=(0,a.Z)(b,2),_=x[0],Z=x[1],C=(0,t.useState)(null),j=(0,a.Z)(C,2),k=j[0],E=j[1];return(0,d.Z)((0,u.Ui)(null===k||void 0===k?void 0:k.name)),(0,t.useEffect)((function(){var e=v(r),a=f(r,n);Z(null!==e&&void 0!==e?e:null),E(null!==a&&void 0!==a?a:null)}),[h]),(0,t.useEffect)((function(){p("")}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.xu,{className:"p-4 pb-5 p-lg-5",children:[_&&k&&(0,g.jsx)(l.Z,{categories:{id:0,primary_category:{id:_.id,name:_.name},secondary_category:{id:k.id,name:k.name}}}),k&&(0,g.jsx)(c.Z,{categoryLevel:"tertiary",primaryURL:r,secondaryURL:n,categories:null===k||void 0===k?void 0:k.tertiary_category,label:null===k||void 0===k?void 0:k.name})]}),(0,g.jsx)(m.default,{})]})}},1585:function(e,r,n){n.d(r,{F:function(){return t}});var a,i=n(168),t=n(7691).ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  padding-bottom: 5px;\n  overflow-x: scroll;\n\n  &:hover {\n    ::-webkit-scrollbar {\n      height: 5px;\n    }\n\n    ::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 2px #319795;\n      border-radius: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      background: #38b2ac;\n      border-radius: 10px;\n    }\n  }\n\n  ::-webkit-scrollbar {\n    height: 5px;\n  }\n\n  ::-webkit-scrollbar-track {\n    border-radius: 10px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: white;\n  }\n"])))},8342:function(e,r,n){n.d(r,{At:function(){return Z},aG:function(){return x},gN:function(){return C}});var a=n(1413),i=n(5987),t=n(9439),o=n(2791),l=n(7810),c=n(6088),s=n(2965),d=n(2680),u=["children","spacing","separator","className","listProps"],m=["spacing"],g=["isCurrentPage","as","className","href"],y=["isCurrentPage","separator","isLastChild","spacing","children","className"],h=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter(Boolean).join(" ")},p=(0,d.k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "}),v=(0,t.Z)(p,2),f=v[0],b=v[1],x=(0,c.Gp)((function(e,r){var n=(0,c.jC)("Breadcrumb",e),t=(0,s.Lr)(e),d=t.children,m=t.spacing,g=void 0===m?"0.5rem":m,y=t.separator,p=void 0===y?"/":y,v=t.className,b=t.listProps,x=(0,i.Z)(t,u),_=(0,l.W)(d),Z=_.length,C=_.map((function(e,r){return(0,o.cloneElement)(e,{separator:p,spacing:g,isLastChild:Z===r+1})})),j=h("chakra-breadcrumb",v);return o.createElement(c.m$.nav,(0,a.Z)({ref:r,"aria-label":"breadcrumb",className:j,__css:n.container},x),o.createElement(f,{value:n},o.createElement(c.m$.ol,(0,a.Z)((0,a.Z)({className:"chakra-breadcrumb__list"},b),{},{__css:(0,a.Z)({display:"flex",alignItems:"center"},n.list)}),C)))}));x.displayName="Breadcrumb";var _=(0,c.Gp)((function(e,r){var n=e.spacing,t=(0,i.Z)(e,m),l=b(),s=(0,a.Z)({mx:n},l.separator);return o.createElement(c.m$.span,(0,a.Z)((0,a.Z)({ref:r,role:"presentation"},t),{},{__css:s}))}));_.displayName="BreadcrumbSeparator";var Z=(0,c.Gp)((function(e,r){var n=e.isCurrentPage,t=e.as,l=e.className,s=e.href,d=(0,i.Z)(e,g),u=b(),m=(0,a.Z)({ref:r,as:t,className:h("chakra-breadcrumb__link",l)},d);return n?o.createElement(c.m$.span,(0,a.Z)({"aria-current":"page",__css:u.link},m)):o.createElement(c.m$.a,(0,a.Z)({__css:u.link,href:s},m))}));Z.displayName="BreadcrumbLink";var C=(0,c.Gp)((function(e,r){var n=e.isCurrentPage,t=e.separator,s=e.isLastChild,d=e.spacing,u=e.children,m=e.className,g=(0,i.Z)(e,y),p=(0,l.W)(u).map((function(e){return e.type===Z?(0,o.cloneElement)(e,{isCurrentPage:n}):e.type===_?(0,o.cloneElement)(e,{spacing:d,children:e.props.children||t}):e})),v=b(),f=(0,a.Z)({display:"inline-flex",alignItems:"center"},v.item),x=h("chakra-breadcrumb__list-item",m);return o.createElement(c.m$.li,(0,a.Z)((0,a.Z)({ref:r,className:x},g),{},{__css:f}),p,!s&&o.createElement(_,{spacing:d},t))}));C.displayName="BreadcrumbItem"}}]);
//# sourceMappingURL=66.f7c8e34e.chunk.js.map