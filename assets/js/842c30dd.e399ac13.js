(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57118],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,f=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35456:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.5/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"knex.ForeignKey",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.foreignkey.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624997e3,formattedLastUpdatedAt:"6/29/2021",sidebar_label:"ForeignKey",frontMatter:{id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},l=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"columnname"},"columnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"columnName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"constraintname"},"constraintName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"constraintName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"deleterule"},"deleteRule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"deleteRule"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencedcolumnname"},"referencedColumnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"referencedColumnName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencedtablename"},"referencedTableName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"referencedTableName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updaterule"},"updateRule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"updateRule"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}s.isMDXComponent=!0}}]);