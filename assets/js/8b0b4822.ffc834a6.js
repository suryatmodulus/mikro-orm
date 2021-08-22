(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44021],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,f=k["".concat(l,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(f,p(p({ref:e},m),{},{components:n})):a.createElement(f,p({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,p=new Array(i);p[0]=k;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36984:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),p={id:"core.BaseEntity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/core.BaseEntity",id:"api/classes/core.BaseEntity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P>",description:"core.BaseEntity",source:"@site/docs/api/classes/core.BaseEntity.md",sourceDirName:"api/classes",slug:"/api/classes/core.BaseEntity",permalink:"/docs/next/api/classes/core.BaseEntity",editUrl:null,version:"current",frontMatter:{id:"core.BaseEntity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null},sidebar:"API",previous:{title:"ArrayType",permalink:"/docs/next/api/classes/core.ArrayType"},next:{title:"BigIntType",permalink:"/docs/next/api/classes/core.BigIntType"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],m={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".BaseEntity"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PK")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string``never"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/core.IWrappedEntity"},(0,i.kt)("inlineCode",{parentName:"a"},"IWrappedEntity")),"<",(0,i.kt)("inlineCode",{parentName:"li"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"P"),">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BaseEntity"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PK"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","()"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PK")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string``never"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L7"},"packages/core/src/entity/BaseEntity.ts:7")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},"assign"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"assign"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityData")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.AssignOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#assign"},"assign")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L35"},"packages/core/src/entity/BaseEntity.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"populated?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#init"},"init")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L39"},"packages/core/src/entity/BaseEntity.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isinitialized"},"isInitialized"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isInitialized"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#isinitialized"},"isInitialized")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L11"},"packages/core/src/entity/BaseEntity.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"populated"},"populated"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"populated"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"populated?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#populated"},"populated")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L15"},"packages/core/src/entity/BaseEntity.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tojson"},"toJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toJSON"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#tojson"},"toJSON")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L27"},"packages/core/src/entity/BaseEntity.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toobject"},"toObject"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toObject"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreFields?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreFields")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#toobject"},"toObject")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L23"},"packages/core/src/entity/BaseEntity.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topojo"},"toPOJO"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toPOJO"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#topojo"},"toPOJO")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L31"},"packages/core/src/entity/BaseEntity.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toreference"},"toReference"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toReference"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.IWrappedEntity#toreference"},"toReference")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7d525df/packages/core/src/entity/BaseEntity.ts#L19"},"packages/core/src/entity/BaseEntity.ts:19")))}s.isMDXComponent=!0}}]);