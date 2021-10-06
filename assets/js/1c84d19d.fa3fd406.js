(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67877],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69084:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a={id:"core.AssignOptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/core.AssignOptions",id:"api/interfaces/core.AssignOptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"core.AssignOptions",source:"@site/docs/api/interfaces/core.AssignOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.AssignOptions",permalink:"/docs/next/api/interfaces/core.AssignOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.AssignOptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null},sidebar:"API",previous:{title:"TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.TsMorphMetadataProvider"},next:{title:"CacheAdapter",permalink:"/docs/next/api/interfaces/core.CacheAdapter"}},c=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]},{value:"updateByPrimaryKey",id:"updatebyprimarykey",children:[]},{value:"updateNestedEntities",id:"updatenestedentities",children:[]}]}],l={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".AssignOptions"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L238"},"packages/core/src/entity/EntityAssigner.ts:238")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"em"},"em"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"../classes/core.EntityManager"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"core.IDatabaseDriver"},(0,o.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"../classes/core.Connection"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L241"},"packages/core/src/entity/EntityAssigner.ts:241")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"merge"},"merge"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"merge"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L240"},"packages/core/src/entity/EntityAssigner.ts:240")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mergeobjects"},"mergeObjects"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"mergeObjects"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L239"},"packages/core/src/entity/EntityAssigner.ts:239")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onlyproperties"},"onlyProperties"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"onlyProperties"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L237"},"packages/core/src/entity/EntityAssigner.ts:237")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatebyprimarykey"},"updateByPrimaryKey"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"updateByPrimaryKey"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L236"},"packages/core/src/entity/EntityAssigner.ts:236")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatenestedentities"},"updateNestedEntities"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"updateNestedEntities"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bb22b9b/packages/core/src/entity/EntityAssigner.ts#L235"},"packages/core/src/entity/EntityAssigner.ts:235")))}m.isMDXComponent=!0}}]);