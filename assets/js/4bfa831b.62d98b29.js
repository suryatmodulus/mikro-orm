(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50950],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),m=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=m(a),d=r,N=k["".concat(l,".").concat(d)]||k[d]||s[d]||o;return a?n.createElement(N,p(p({ref:e},c),{},{components:a})):n.createElement(N,p({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,p=new Array(o);p[0]=k;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var m=2;m<o;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},48419:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=a(74034),r=a(79973),o=(a(67294),a(3905)),p={id:"knex.abstractsqlconnection",title:"Class: AbstractSqlConnection",sidebar_label:"AbstractSqlConnection",custom_edit_url:null},i={unversionedId:"api/classes/knex.abstractsqlconnection",id:"api/classes/knex.abstractsqlconnection",isDocsHomePage:!1,title:"Class: AbstractSqlConnection",description:"knex.AbstractSqlConnection",source:"@site/docs/api/classes/knex.abstractsqlconnection.md",sourceDirName:"api/classes",slug:"/api/classes/knex.abstractsqlconnection",permalink:"/docs/next/api/classes/knex.abstractsqlconnection",editUrl:null,version:"current",sidebar_label:"AbstractSqlConnection",frontMatter:{id:"knex.abstractsqlconnection",title:"Class: AbstractSqlConnection",sidebar_label:"AbstractSqlConnection",custom_edit_url:null},sidebar:"API",previous:{title:"Class: EntityGenerator",permalink:"/docs/next/api/classes/entity_generator.entitygenerator"},next:{title:"Class: AbstractSqlDriver<C\\>",permalink:"/docs/next/api/classes/knex.abstractsqldriver"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getPlatform",id:"getplatform",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"loadFile",id:"loadfile",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],m={toc:l};function c(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".AbstractSqlConnection"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"AbstractSqlConnection")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new AbstractSqlConnection"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionoptions"},(0,o.kt)("em",{parentName:"a"},"ConnectionOptions")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type?"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"read"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"write"'),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},(0,o.kt)("em",{parentName:"a"},"AbstractSqlConnection"))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"config")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.connectionoptions"},(0,o.kt)("em",{parentName:"a"},"ConnectionOptions")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"type?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'"read"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"write"'))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},(0,o.kt)("em",{parentName:"a"},"AbstractSqlConnection"))),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L19"},"packages/knex/src/AbstractSqlConnection.ts:19")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"begin"},"begin"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"begin"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"ctx?"),": ",(0,o.kt)("em",{parentName:"p"},"Transaction"),"<any, any[]",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<Transaction<any, any[]",">",">"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Transaction"),"<any, any[]",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<Transaction<any, any[]",">",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L57"},"packages/knex/src/AbstractSqlConnection.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"close"},"close"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"close"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"force?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"force?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L30"},"packages/knex/src/AbstractSqlConnection.ts:30")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"commit"},"commit"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"commit"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),": ",(0,o.kt)("em",{parentName:"p"},"Transaction"),"<any, any[]",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Transaction"),"<any, any[]",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L73"},"packages/knex/src/AbstractSqlConnection.ts:73")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connect"},"connect"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,o.kt)("strong",{parentName:"p"},"connect"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Establishes connection to database"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L28"},"packages/core/src/connections/Connection.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"execute"},"execute"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"execute"),"<T",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"queryOrKnex"),": ",(0,o.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"p"},"QueryBuilder"),"<any, any",">"," ","|"," ",(0,o.kt)("em",{parentName:"p"},"Raw"),"<any",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"params?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[], ",(0,o.kt)("inlineCode",{parentName:"p"},"method?"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"all"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"get"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"run"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx?"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.queryresult"},(0,o.kt)("em",{parentName:"a"},"QueryResult"))," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,o.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">"," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,o.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">","[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,o.kt)("em",{parentName:"a"},"EntityData")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,o.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">","[]")))),(0,o.kt)("h4",{id:"parameters-4"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"queryOrKnex")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,o.kt)("em",{parentName:"td"},"QueryBuilder"),"<any, any",">"," ","|"," ",(0,o.kt)("em",{parentName:"td"},"Raw"),"<any",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"params")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any"),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},'"all"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"get"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"run"')),(0,o.kt)("td",{parentName:"tr",align:"left"},"'all'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"any")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L102"},"packages/knex/src/AbstractSqlConnection.ts:102")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getclienturl"},"getClientUrl"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getClientUrl"),"(): ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L75"},"packages/core/src/connections/Connection.ts:75")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},(0,o.kt)("em",{parentName:"a"},"ConnectionConfig"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},(0,o.kt)("em",{parentName:"a"},"ConnectionConfig"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L63"},"packages/core/src/connections/Connection.ts:63")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,o.kt)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L43"},"packages/core/src/connections/Connection.ts:43")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getknex"},"getKnex"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getKnex"),"(): ",(0,o.kt)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L26"},"packages/knex/src/AbstractSqlConnection.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getplatform"},"getPlatform"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPlatform"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,o.kt)("em",{parentName:"a"},"Platform"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,o.kt)("em",{parentName:"a"},"Platform"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L90"},"packages/core/src/connections/Connection.ts:90")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isconnected"},"isConnected"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isConnected"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L34"},"packages/knex/src/AbstractSqlConnection.ts:34")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"loadfile"},"loadFile"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"loadFile"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Execute raw SQL queries from file"),(0,o.kt)("h4",{id:"parameters-5"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L128"},"packages/knex/src/AbstractSqlConnection.ts:128")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"rollback"},"rollback"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"rollback"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),": ",(0,o.kt)("em",{parentName:"p"},"Transaction"),"<any, any[]",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("h4",{id:"parameters-6"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Transaction"),"<any, any[]",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L88"},"packages/knex/src/AbstractSqlConnection.ts:88")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setmetadata"},"setMetadata"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setMetadata"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},(0,o.kt)("em",{parentName:"a"},"MetadataStorage")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-7"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"metadata")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.metadatastorage"},(0,o.kt)("em",{parentName:"a"},"MetadataStorage")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L82"},"packages/core/src/connections/Connection.ts:82")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setplatform"},"setPlatform"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setPlatform"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,o.kt)("em",{parentName:"a"},"Platform")),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"parameters-8"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"platform")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,o.kt)("em",{parentName:"a"},"Platform")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/connections/Connection.ts#L86"},"packages/core/src/connections/Connection.ts:86")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"transactional"},"transactional"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"transactional"),"<T",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"cb"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"trx"),": ",(0,o.kt)("em",{parentName:"p"},"Transaction"),"<any, any[]",">",") => ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx?"),": ",(0,o.kt)("em",{parentName:"p"},"Transaction"),"<any, any[]",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))))),(0,o.kt)("h4",{id:"parameters-9"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cb")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(",(0,o.kt)("inlineCode",{parentName:"td"},"trx"),": ",(0,o.kt)("em",{parentName:"td"},"Transaction"),"<any, any[]",">",") => ",(0,o.kt)("em",{parentName:"td"},"Promise"),"<T",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ctx?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"Transaction"),"<any, any[]",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},(0,o.kt)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("p",null,"Overrides: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},"Connection")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/knex/src/AbstractSqlConnection.ts#L43"},"packages/knex/src/AbstractSqlConnection.ts:43")))}c.isMDXComponent=!0}}]);