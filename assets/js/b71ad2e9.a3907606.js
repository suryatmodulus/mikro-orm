(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53048],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=l(a),k=r,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return a?n.createElement(u,p(p({ref:e},m),{},{components:a})):n.createElement(u,p({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15217:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),p={id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null},o={unversionedId:"api/classes/core.entityassigner",id:"api/classes/core.entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"core.EntityAssigner",source:"@site/docs/api/classes/core.entityassigner.md",sourceDirName:"api/classes",slug:"/api/classes/core.entityassigner",permalink:"/docs/next/api/classes/core.entityassigner",editUrl:null,version:"current",sidebar_label:"EntityAssigner",frontMatter:{id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null},sidebar:"API",previous:{title:"Class: DriverException",permalink:"/docs/next/api/classes/core.driverexception"},next:{title:"Class: EntityCaseNamingStrategy",permalink:"/docs/next/api/classes/core.entitycasenamingstrategy"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]}]}],l={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".EntityAssigner"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new EntityAssigner"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entityassigner"},(0,i.kt)("em",{parentName:"a"},"EntityAssigner"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entityassigner"},(0,i.kt)("em",{parentName:"a"},"EntityAssigner"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},"assign"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">"," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("em",{parentName:"a"},"EntityDTO")),"<T",">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): T"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">"," ","|"," ",(0,i.kt)("em",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("em",{parentName:"a"},"EntityDTO")),"<T",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/entity/EntityAssigner.ts#L15"},"packages/core/src/entity/EntityAssigner.ts:15")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">"," ","|"," ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("em",{parentName:"a"},"EntityDTO")),"<T",">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyProperties?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): T"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">"," ","|"," ",(0,i.kt)("em",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("em",{parentName:"a"},"EntityDTO")),"<T",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onlyProperties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/entity/EntityAssigner.ts#L16"},"packages/core/src/entity/EntityAssigner.ts:16")))}m.isMDXComponent=!0}}]);