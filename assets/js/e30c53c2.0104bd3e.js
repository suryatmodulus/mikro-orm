(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82041],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),k=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=k(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=k(n),s=r,N=o["".concat(m,".").concat(s)]||o[s]||u[s]||l;return n?a.createElement(N,p(p({ref:t},d),{},{components:n})):a.createElement(N,p({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=o;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var k=2;k<l;k++)p[k]=n[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},20341:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m},default:function(){return d}});var a=n(74034),r=n(79973),l=(n(67294),n(3905)),p={id:"knex.knex-1.columnbuilder",title:"Interface: ColumnBuilder",sidebar_label:"ColumnBuilder",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.columnbuilder",id:"version-4.5/api/interfaces/knex.knex-1.columnbuilder",isDocsHomePage:!1,title:"Interface: ColumnBuilder",description:"knex.Knex.ColumnBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.columnbuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.columnbuilder",permalink:"/docs/api/interfaces/knex.knex-1.columnbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1621241679,formattedLastUpdatedAt:"5/17/2021",sidebar_label:"ColumnBuilder",frontMatter:{id:"knex.knex-1.columnbuilder",title:"Interface: ColumnBuilder",sidebar_label:"ColumnBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: ChainableInterface<T\\>",permalink:"/docs/api/interfaces/knex.knex-1.chainableinterface"},next:{title:"Interface: ColumnInfo",permalink:"/docs/api/interfaces/knex.knex-1.columninfo"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"after",id:"after",children:[]},{value:"alter",id:"alter",children:[]},{value:"comment",id:"comment",children:[]},{value:"defaultTo",id:"defaultto",children:[]},{value:"first",id:"first",children:[]},{value:"index",id:"index",children:[]},{value:"notNullable",id:"notnullable",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"primary",id:"primary",children:[]},{value:"queryContext",id:"querycontext",children:[]},{value:"references",id:"references",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"withKeyName",id:"withkeyname",children:[]}]}],k={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ColumnBuilder"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ColumnBuilder")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.postgresqlcolumnbuilder"},(0,l.kt)("em",{parentName:"a"},"PostgreSqlColumnBuilder"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,l.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.altercolumnbuilder"},(0,l.kt)("em",{parentName:"a"},"AlterColumnBuilder"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"after"},"after"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"after"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1817"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"alter"},"alter"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"alter"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1814"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"comment"},"comment"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"comment"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1813"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"defaultto"},"defaultTo"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"defaultTo"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1809"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"first"},"first"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"first"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1818"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"index"},"index"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"index"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"indexName?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"indexName?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1803"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"notnullable"},"notNullable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"notNullable"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1811"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nullable"},"nullable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"nullable"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1812"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ondelete"},"onDelete"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"onDelete"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"command"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"command")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1807"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onupdate"},"onUpdate"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"onUpdate"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"command"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"command")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1808"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"primary"},"primary"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"primary"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"constraintName?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"constraintName?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1804"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"querycontext"},"queryContext"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"queryContext"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,l.kt)("em",{parentName:"p"},"any"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1815"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"references"},"references"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"references"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,l.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,l.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1806"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unique"},"unique"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"unique"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"indexName?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"indexName?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1805"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unsigned"},"unsigned"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"unsigned"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1810"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"withkeyname"},"withKeyName"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"withKeyName"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"keyName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"keyName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.columnbuilder"},(0,l.kt)("em",{parentName:"a"},"ColumnBuilder"))),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1816"))}d.isMDXComponent=!0}}]);