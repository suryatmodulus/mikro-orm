(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20877],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return i},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),d=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(k.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),s=d(a),N=r,u=s["".concat(k,".").concat(N)]||s[N]||o[N]||l;return a?n.createElement(u,p(p({ref:t},i),{},{components:a})):n.createElement(u,p({ref:t},i))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var m={};for(var k in t)hasOwnProperty.call(t,k)&&(m[k]=t[k]);m.originalType=e,m.mdxType="string"==typeof e?e:r,p[1]=m;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},34896:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k},default:function(){return i}});var n=a(74034),r=a(79973),l=(a(67294),a(3905)),p={id:"knex.knex-1.wherein",title:"Interface: WhereIn<TRecord, TResult>",sidebar_label:"WhereIn",custom_edit_url:null,hide_title:!0},m={unversionedId:"api/interfaces/knex.knex-1.wherein",id:"version-4.5/api/interfaces/knex.knex-1.wherein",isDocsHomePage:!1,title:"Interface: WhereIn<TRecord, TResult\\>",description:"knex.Knex.WhereIn",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.wherein.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.wherein",permalink:"/docs/api/interfaces/knex.knex-1.wherein",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624102978,formattedLastUpdatedAt:"6/19/2021",sidebar_label:"WhereIn",frontMatter:{id:"knex.knex-1.wherein",title:"Interface: WhereIn<TRecord, TResult>",sidebar_label:"WhereIn",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: WhereExists<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.whereexists"},next:{title:"Interface: WhereNull<TRecord, TResult\\>",permalink:"/docs/api/interfaces/knex.knex-1.wherenull"}},k=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],d={toc:k};function i(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".WhereIn"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<K",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": K, ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#dbcolumn"},(0,l.kt)("em",{parentName:"a"},"DbColumn")),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},(0,l.kt)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",(0,l.kt)("em",{parentName:"p"},"base"),">","[K]",">","[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"symbol"))))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#dbcolumn"},(0,l.kt)("em",{parentName:"a"},"DbColumn")),"<",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},(0,l.kt)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",(0,l.kt)("em",{parentName:"td"},"base"),">","[K]",">","[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1291"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1295"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<K",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnNames"),": readonly K[], ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|",' readonly readonly DbColumn<ResolveTableType<TRecord, "base"',">","[K]",">","[][]","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"symbol"))))),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnNames")),(0,l.kt)("td",{parentName:"tr",align:"left"},"readonly K[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|",' readonly readonly DbColumn<ResolveTableType<TRecord, "base"',">","[K]",">","[][]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1299"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",(0,l.kt)("em",{parentName:"p"},"string"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[][]","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnNames")),(0,l.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,l.kt)("em",{parentName:"td"},"string"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#querycallback"},(0,l.kt)("em",{parentName:"a"},"QueryCallback")),"<any, unknown[]",">"," ","|"," readonly ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[][]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1303"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<K, TRecordInner, TResultInner",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": K, ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"symbol"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecordInner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResultInner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"K")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1307"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<TRecordInner, TResultInner",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[] ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecordInner"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResultInner"))))),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#value"},(0,l.kt)("em",{parentName:"a"},"Value")),"[] ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1311"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<K, TRecordInner, TResultInner",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnNames"),": readonly K[], ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-5"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"number")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"symbol"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecordInner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResultInner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnNames")),(0,l.kt)("td",{parentName:"tr",align:"left"},"readonly K[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TRecord","[K]",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1315"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"WhereIn"),"<TRecordInner, TResultInner",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",(0,l.kt)("em",{parentName:"p"},"string"),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"values"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">","): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"type-parameters-6"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecordInner"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResultInner"))))),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnNames")),(0,l.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,l.kt)("em",{parentName:"td"},"string"),"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"values")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecordInner, TResultInner",">")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1319"))}i.isMDXComponent=!0}}]);