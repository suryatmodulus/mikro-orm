(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79901],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),l=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=l(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),d=l(a),N=r,c=d["".concat(o,".").concat(N)]||d[N]||k[N]||i;return a?n.createElement(c,p(p({ref:e},s),{},{components:a})):n.createElement(c,p({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,p=new Array(i);p[0]=d;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96403:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return l},default:function(){return k}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),p={id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null,hide_title:!0},m="Class: EntityAssigner",o={unversionedId:"api/classes/core.entityassigner",id:"version-4.5/api/classes/core.entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"core.EntityAssigner",source:"@site/versioned_docs/version-4.5/api/classes/core.entityassigner.md",sourceDirName:"api/classes",slug:"/api/classes/core.entityassigner",permalink:"/docs/api/classes/core.entityassigner",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1629841455,formattedLastUpdatedAt:"8/24/2021",frontMatter:{id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"DriverException",permalink:"/docs/api/classes/core.driverexception"},next:{title:"EntityCaseNamingStrategy",permalink:"/docs/api/classes/core.entitycasenamingstrategy"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"assignCollection",id:"assigncollection",children:[]},{value:"assignEmbeddable",id:"assignembeddable",children:[]},{value:"assignReference",id:"assignreference",children:[]},{value:"autoWireOneToOne",id:"autowireonetoone",children:[]},{value:"createCollectionItem",id:"createcollectionitem",children:[]},{value:"validateEM",id:"validateem",children:[]}]}],s={toc:l};function k(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-entityassigner"},"Class: EntityAssigner"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EntityAssigner"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new EntityAssigner"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityassigner"},(0,i.kt)("em",{parentName:"a"},"EntityAssigner"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityassigner"},(0,i.kt)("em",{parentName:"a"},"EntityAssigner"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},"assign"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): T"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L15"},"packages/core/src/entity/EntityAssigner.ts:15")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"assign"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"onlyProperties?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): T"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,i.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onlyProperties?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L16"},"packages/core/src/entity/EntityAssigner.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assigncollection"},"assignCollection"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"assignCollection"),"<T, U",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"collection"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.collection"},(0,i.kt)("em",{parentName:"a"},"Collection")),"<U, unknown",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"U")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<U",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">")))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"collection")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.collection"},(0,i.kt)("em",{parentName:"a"},"Collection")),"<U, unknown",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L126"},"packages/core/src/entity/EntityAssigner.ts:126")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assignembeddable"},"assignEmbeddable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"assignEmbeddable"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L138"},"packages/core/src/entity/EntityAssigner.ts:138")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assignreference"},"assignReference"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"assignReference"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L109"},"packages/core/src/entity/EntityAssigner.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"autowireonetoone"},"autoWireOneToOne"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"autoWireOneToOne"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": T): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"auto-wire 1:1 inverse side with owner as in no-sql drivers it can't be joined\nalso makes sure the link is bidirectional when creating new entities from nested structures"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"internal"))," "),(0,i.kt)("h4",{id:"type-parameters-5"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},"T")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L83"},"packages/core/src/entity/EntityAssigner.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createcollectionitem"},"createCollectionItem"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"createCollectionItem"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"item"),": ",(0,i.kt)("em",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")),"): T"),(0,i.kt)("h4",{id:"type-parameters-6"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"item")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,i.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"invalid")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},(0,i.kt)("em",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L159"},"packages/core/src/entity/EntityAssigner.ts:159")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"validateem"},"validateEM"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"validateEM"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,i.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,i.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,i.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L101"},"packages/core/src/entity/EntityAssigner.ts:101")))}k.isMDXComponent=!0}}]);