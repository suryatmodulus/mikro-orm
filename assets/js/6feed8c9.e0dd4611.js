(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11610],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,c=s["".concat(i,".").concat(u)]||s[u]||k[u]||l;return a?r.createElement(c,p(p({ref:t},m),{},{components:a})):r.createElement(c,p({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,p[1]=d;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},74602:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return o},default:function(){return k}});var r=a(74034),n=a(79973),l=(a(67294),a(3905)),p={id:"knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",custom_edit_url:null,hide_title:!0},d="Interface: OrderBy<TRecord, TResult>",i={unversionedId:"api/interfaces/knex.knex-1.orderby",id:"version-4.5/api/interfaces/knex.knex-1.orderby",isDocsHomePage:!1,title:"Interface: OrderBy<TRecord, TResult>",description:"knex.Knex.OrderBy",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.orderby.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.orderby",permalink:"/docs/api/interfaces/knex.knex-1.orderby",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1633916479,formattedLastUpdatedAt:"10/11/2021",frontMatter:{id:"knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"},next:{title:"PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:o};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interface-orderbytrecord-tresult"},"Interface: OrderBy<TRecord, TResult",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OrderBy"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord, ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"desc"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"desc"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1369"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1373"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnDefs"),": (keyof TRecord ","|"," ",(0,l.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"desc"),"  }",">",")[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnDefs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(keyof TRecord ","|"," ",(0,l.kt)("em",{parentName:"td"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"td"},"column"),": ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",(0,l.kt)("inlineCode",{parentName:"td"},"order?"),": ",(0,l.kt)("em",{parentName:"td"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"desc"),"  }",">",")[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1374"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnDefs"),": (",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"  }",">",")[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnDefs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(",(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"td"},"column"),": ",(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",(0,l.kt)("inlineCode",{parentName:"td"},"order?"),": ",(0,l.kt)("em",{parentName:"td"},"string"),"  }",">",")[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1382"))}k.isMDXComponent=!0}}]);