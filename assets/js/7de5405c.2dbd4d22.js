(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93874],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40887:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a={id:"core.InitOptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/core.InitOptions",id:"api/interfaces/core.InitOptions",isDocsHomePage:!1,title:"Interface: InitOptions<T>",description:"core.InitOptions",source:"@site/docs/api/interfaces/core.InitOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.InitOptions",permalink:"/docs/next/api/interfaces/core.InitOptions",editUrl:null,version:"current",frontMatter:{id:"core.InitOptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",custom_edit_url:null},sidebar:"API",previous:{title:"IndexOptions",permalink:"/docs/next/api/interfaces/core.IndexOptions"},next:{title:"LoadedCollection",permalink:"/docs/next/api/interfaces/core.LoadedCollection"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"where",id:"where",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".InitOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"orderby"},"orderBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.QueryOrderMap"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryOrderMap"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/entity/Collection.ts#L407"},"packages/core/src/entity/Collection.ts:407")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"populate"},"populate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"populate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#populate"},(0,i.kt)("inlineCode",{parentName:"a"},"Populate")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/entity/Collection.ts#L406"},"packages/core/src/entity/Collection.ts:406")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"where"},"where"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"where"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#filterquery"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/entity/Collection.ts#L408"},"packages/core/src/entity/Collection.ts:408")))}u.isMDXComponent=!0}}]);