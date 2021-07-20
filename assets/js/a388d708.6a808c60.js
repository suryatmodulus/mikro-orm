(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9438],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=m(r),s=n,f=k["".concat(l,".").concat(s)]||k[s]||d[s]||p;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},42263:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=r(74034),n=r(79973),p=(r(67294),r(3905)),i={id:"core.loadedreference",title:"Interface: LoadedReference<T, P>",sidebar_label:"LoadedReference",custom_edit_url:null,hide_title:!0},o="Interface: LoadedReference<T, P>",l={unversionedId:"api/interfaces/core.loadedreference",id:"version-4.5/api/interfaces/core.loadedreference",isDocsHomePage:!1,title:"Interface: LoadedReference<T, P>",description:"core.LoadedReference",source:"@site/versioned_docs/version-4.5/api/interfaces/core.loadedreference.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.loadedreference",permalink:"/docs/api/interfaces/core.loadedreference",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1626770388,formattedLastUpdatedAt:"7/20/2021",frontMatter:{id:"core.loadedreference",title:"Interface: LoadedReference<T, P>",sidebar_label:"LoadedReference",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"LoadedCollection",permalink:"/docs/api/interfaces/core.loadedcollection"},next:{title:"ManyToManyOptions",permalink:"/docs/api/interfaces/core.manytomanyoptions"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"$",id:"",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"getEntity",id:"getentity",children:[]},{value:"getProperty",id:"getproperty",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"load",id:"load",children:[]},{value:"populated",id:"populated",children:[]},{value:"set",id:"set",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"unwrap",id:"unwrap",children:[]}]}],c={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"interface-loadedreferencet-p"},"Interface: LoadedReference<T, P",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".LoadedReference"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"P")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"never"))))),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">"),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"LoadedReference")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:""},"$"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"$"),": T & P"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L385"},"packages/core/src/typings.ts:385")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(): T & P"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T & P"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L386"},"packages/core/src/typings.ts:386")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getentity"},"getEntity"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getEntity"),"(): T"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L108"},"packages/core/src/entity/Reference.ts:108")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getproperty"},"getProperty"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getProperty"),"<K",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": K): T","[K]"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"K")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"symbol"))))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},"K")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T","[K]"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L116"},"packages/core/src/entity/Reference.ts:116")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isinitialized"},"isInitialized"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isInitialized"),"(): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L120"},"packages/core/src/entity/Reference.ts:120")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"load"},"load"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"load"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,p.kt)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the entity."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L67"},"packages/core/src/entity/Reference.ts:67")),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"load"),"<K",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": K): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),(0,p.kt)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the requested property instead of the whole entity."),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"K")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"symbol"))))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},"K")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L73"},"packages/core/src/entity/Reference.ts:73")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"populated"},"populated"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"populated"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"populated?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"populated?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L124"},"packages/core/src/entity/Reference.ts:124")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#identifiedreference"},(0,p.kt)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#primaryproperty"},(0,p.kt)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#identifiedreference"},(0,p.kt)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#primaryproperty"},(0,p.kt)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L91"},"packages/core/src/entity/Reference.ts:91")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"tojson"},"toJSON"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toJSON"),"(...",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("em",{parentName:"p"},"any"),"[]): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"...args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"),"[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L128"},"packages/core/src/entity/Reference.ts:128")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"unwrap"},"unwrap"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"unwrap"),"(): T"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},"Reference")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Reference.ts#L104"},"packages/core/src/entity/Reference.ts:104")))}d.isMDXComponent=!0}}]);