(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26012],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76747:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a={id:"core.NodeState",title:"Enumeration: NodeState",sidebar_label:"NodeState",custom_edit_url:null},c=void 0,u={unversionedId:"api/enums/core.NodeState",id:"api/enums/core.NodeState",isDocsHomePage:!1,title:"Enumeration: NodeState",description:"core.NodeState",source:"@site/docs/api/enums/core.NodeState.md",sourceDirName:"api/enums",slug:"/api/enums/core.NodeState",permalink:"/docs/next/api/enums/core.NodeState",editUrl:null,version:"current",frontMatter:{id:"core.NodeState",title:"Enumeration: NodeState",sidebar_label:"NodeState",custom_edit_url:null},sidebar:"API",previous:{title:"LockMode",permalink:"/docs/next/api/enums/core.LockMode"},next:{title:"QueryFlag",permalink:"/docs/next/api/enums/core.QueryFlag"}},l=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"IN_PROGRESS",id:"in_progress",children:[]},{value:"NOT_VISITED",id:"not_visited",children:[]},{value:"VISITED",id:"visited",children:[]}]}],p={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".NodeState"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,i.kt)("h3",{id:"in_progress"},"IN","_","PROGRESS"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"IN","_","PROGRESS")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L6"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"not_visited"},"NOT","_","VISITED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NOT","_","VISITED")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L5"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visited"},"VISITED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"VISITED")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"2")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L7"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:7")))}s.isMDXComponent=!0}}]);