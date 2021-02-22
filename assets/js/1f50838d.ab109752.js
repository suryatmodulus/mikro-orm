(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1051:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),i=d(a),o=n,O=i["".concat(l,".").concat(o)]||i[o]||u[o]||b;return a?r.a.createElement(O,c(c({ref:t},p),{},{components:a})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=o;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(1051)),l={id:"knex.knex.columnnamequerybuilder",title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",sidebar_label:"ColumnNameQueryBuilder",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.columnnamequerybuilder",id:"version-4.4/api/interfaces/knex.knex.columnnamequerybuilder",isDocsHomePage:!1,title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",description:"Interface: ColumnNameQueryBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.columnnamequerybuilder.md",slug:"/api/interfaces/knex.knex.columnnamequerybuilder",permalink:"/docs/api/interfaces/knex.knex.columnnamequerybuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.columnnamequerybuilder.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613981285,sidebar_label:"ColumnNameQueryBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: ColumnInfo",permalink:"/docs/api/interfaces/knex.knex.columninfo"},next:{title:"Interface: Config<SV>",permalink:"/docs/api/interfaces/knex.knex.config"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],p={toc:m};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-columnnamequerybuildertrecord-tresult"},"Interface: ColumnNameQueryBuilder<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".ColumnNameQueryBuilder"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.select"},Object(b.b)("em",{parentName:"a"},"Select"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.distinct"},Object(b.b)("em",{parentName:"a"},"Distinct"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.groupby"},Object(b.b)("em",{parentName:"a"},"GroupBy"))))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(b.b)("em",{parentName:"p"},"**): ["),"QueryBuilder",Object(b.b)("em",{parentName:"p"},"](/docs/api/classes/knex.knex.querybuilder)<TRecord, "),"ArrayIfAlready",Object(b.b)("em",{parentName:"p"},"<TResult, "),"DeferredKeySelection",Object(b.b)("em",{parentName:"p"},"<TRecord, "),"string",Object(b.b)("em",{parentName:"p"},", "),"false",Object(b.b)("em",{parentName:"p"},", {}, "),"false",Object(b.b)("em",{parentName:"p"},", {}, "),"never*",">",">",">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnName")),Object(b.b)("td",{parentName:"tr",align:null},"***")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"ArrayIfAlready"),"<TResult, ",Object(b.b)("em",{parentName:"p"},"DeferredKeySelection"),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"false"),", {}, ",Object(b.b)("em",{parentName:"p"},"false"),", {}, ",Object(b.b)("em",{parentName:"p"},"never"),">",">",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1428"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder"),"<ColNameUT, TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"AddAliases"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(b.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:null},"readonly ColNameUT[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1434"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder"),"<ColNameUT, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"AddAliases"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(b.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnNames")),Object(b.b)("td",{parentName:"tr",align:null},"readonly ColNameUT[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1445"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder"),"<TResult2",">","(...",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(b.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"AddAliases"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(b.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(b.b)("td",{parentName:"tr",align:null},"readonly ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(b.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1456"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ColumnNameQueryBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(b.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"AddAliases"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(b.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columnNames")),Object(b.b)("td",{parentName:"tr",align:null},"readonly ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#columndescriptor"},Object(b.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(b.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1468"))}d.isMDXComponent=!0}}]);