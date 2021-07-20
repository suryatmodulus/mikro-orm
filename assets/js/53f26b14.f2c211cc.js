(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64039],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32534:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=a(74034),n=a(79973),l=(a(67294),a(3905)),i={id:"core.NullCacheAdapter",title:"Class: NullCacheAdapter",sidebar_label:"NullCacheAdapter",custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/core.NullCacheAdapter",id:"api/classes/core.NullCacheAdapter",isDocsHomePage:!1,title:"Class: NullCacheAdapter",description:"core.NullCacheAdapter",source:"@site/docs/api/classes/core.NullCacheAdapter.md",sourceDirName:"api/classes",slug:"/api/classes/core.NullCacheAdapter",permalink:"/docs/next/api/classes/core.NullCacheAdapter",editUrl:null,version:"current",frontMatter:{id:"core.NullCacheAdapter",title:"Class: NullCacheAdapter",sidebar_label:"NullCacheAdapter",custom_edit_url:null},sidebar:"API",previous:{title:"NotNullConstraintViolationException",permalink:"/docs/next/api/classes/core.NotNullConstraintViolationException"},next:{title:"NullHighlighter",permalink:"/docs/next/api/classes/core.NullHighlighter"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"get",id:"get",children:[]},{value:"set",id:"set",children:[]}]}],d={toc:c};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".NullCacheAdapter"),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/core.CacheAdapter"},(0,l.kt)("inlineCode",{parentName:"a"},"CacheAdapter")))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new NullCacheAdapter"),"()"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"clear"},"clear"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Clears all items stored in the cache."),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter"},"CacheAdapter"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter#clear"},"clear")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/cache/NullCacheAdapter.ts#L22"},"packages/core/src/cache/NullCacheAdapter.ts:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"get"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("p",null,"Gets the items under ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," key from the cache."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter"},"CacheAdapter"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter#get"},"get")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/cache/NullCacheAdapter.ts#L8"},"packages/core/src/cache/NullCacheAdapter.ts:8")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"set"},"set"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"set"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"origin"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("p",null,"Sets the item to the cache. ",(0,l.kt)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"origin")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,l.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter"},"CacheAdapter"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.CacheAdapter#set"},"set")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/cache/NullCacheAdapter.ts#L15"},"packages/core/src/cache/NullCacheAdapter.ts:15")))}s.isMDXComponent=!0}}]);