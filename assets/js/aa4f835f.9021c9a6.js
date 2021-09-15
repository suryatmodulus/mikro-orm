(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66639],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return k}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},o=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=l(a),k=n,N=c["".concat(s,".").concat(k)]||c[k]||g[k]||i;return a?r.createElement(N,m(m({ref:e},o),{},{components:a})):r.createElement(N,m({ref:e},o))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,m=new Array(i);m[0]=c;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,m[1]=p;for(var l=2;l<i;l++)m[l]=a[l];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42619:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return g}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),m={id:"core.entitycasenamingstrategy",title:"Class: EntityCaseNamingStrategy",sidebar_label:"EntityCaseNamingStrategy",custom_edit_url:null,hide_title:!0},p="Class: EntityCaseNamingStrategy",s={unversionedId:"api/classes/core.entitycasenamingstrategy",id:"version-4.5/api/classes/core.entitycasenamingstrategy",isDocsHomePage:!1,title:"Class: EntityCaseNamingStrategy",description:"core.EntityCaseNamingStrategy",source:"@site/versioned_docs/version-4.5/api/classes/core.entitycasenamingstrategy.md",sourceDirName:"api/classes",slug:"/api/classes/core.entitycasenamingstrategy",permalink:"/docs/api/classes/core.entitycasenamingstrategy",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1631669610,formattedLastUpdatedAt:"9/15/2021",frontMatter:{id:"core.entitycasenamingstrategy",title:"Class: EntityCaseNamingStrategy",sidebar_label:"EntityCaseNamingStrategy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"EntityAssigner",permalink:"/docs/api/classes/core.entityassigner"},next:{title:"EntityComparator",permalink:"/docs/api/classes/core.entitycomparator"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],o={toc:l};function g(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-entitycasenamingstrategy"},"Class: EntityCaseNamingStrategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EntityCaseNamingStrategy"),(0,i.kt)("p",null,"This strategy keeps original entity/property names for table/column."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},(0,i.kt)("em",{parentName:"a"},"AbstractNamingStrategy"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"EntityCaseNamingStrategy")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new EntityCaseNamingStrategy"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitycasenamingstrategy"},(0,i.kt)("em",{parentName:"a"},"EntityCaseNamingStrategy"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitycasenamingstrategy"},(0,i.kt)("em",{parentName:"a"},"EntityCaseNamingStrategy"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L8"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getclassname"},"getClassName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"separator?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"separator")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"'-'")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"composite?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"composite")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L16"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jointablename"},"joinTableName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sourceEntity"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"targetEntity"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L26"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L30"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts#L34"},"packages/core/src/naming-strategy/EntityCaseNamingStrategy.ts:34")))}g.isMDXComponent=!0}}]);