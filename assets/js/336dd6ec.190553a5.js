(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,O=l["".concat(o,".").concat(u)]||l[u]||m[u]||a;return n?i.a.createElement(O,c(c({ref:t},p),{},{components:n})):i.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),a=(n(0),n(1026)),o={id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.assignoptions",id:"api/interfaces/core.assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"Interface: AssignOptions",source:"@site/docs/api/interfaces/core.assignoptions.md",slug:"/api/interfaces/core.assignoptions",permalink:"/docs/next/api/interfaces/core.assignoptions",editUrl:null,version:"current",sidebar_label:"AssignOptions",sidebar:"API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},next:{title:"Interface: CacheAdapter",permalink:"/docs/next/api/interfaces/core.cacheadapter"}},s=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]},{value:"updateNestedEntities",id:"updatenestedentities",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-assignoptions"},"Interface: AssignOptions"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".AssignOptions"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L201"},"packages/core/src/entity/EntityAssigner.ts:201")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"em"},"em"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"em"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(a.b)("em",{parentName:"a"},"EntityManager")),"<",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(a.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(a.b)("em",{parentName:"a"},"Connection")),">",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L204"},"packages/core/src/entity/EntityAssigner.ts:204")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"merge"},"merge"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"merge"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L203"},"packages/core/src/entity/EntityAssigner.ts:203")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"mergeobjects"},"mergeObjects"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"mergeObjects"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L202"},"packages/core/src/entity/EntityAssigner.ts:202")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"onlyproperties"},"onlyProperties"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"onlyProperties"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L200"},"packages/core/src/entity/EntityAssigner.ts:200")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"updatenestedentities"},"updateNestedEntities"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"updateNestedEntities"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/73108b1/packages/core/src/entity/EntityAssigner.ts#L199"},"packages/core/src/entity/EntityAssigner.ts:199")))}b.isMDXComponent=!0}}]);