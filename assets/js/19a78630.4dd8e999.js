(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91394],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90133:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o={id:"knex.knex-1.multikeyforeignconstraintbuilder",title:"Interface: MultikeyForeignConstraintBuilder",sidebar_label:"MultikeyForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},l="Interface: MultikeyForeignConstraintBuilder",c={unversionedId:"api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",id:"version-4.5/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",isDocsHomePage:!1,title:"Interface: MultikeyForeignConstraintBuilder",description:"knex.Knex.MultikeyForeignConstraintBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1626770388,formattedLastUpdatedAt:"7/20/2021",frontMatter:{id:"knex.knex-1.multikeyforeignconstraintbuilder",title:"Interface: MultikeyForeignConstraintBuilder",sidebar_label:"MultikeyForeignConstraintBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MsSqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig"},next:{title:"MySql2ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysql2connectionconfig"}},u=[{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-multikeyforeignconstraintbuilder"},"Interface: MultikeyForeignConstraintBuilder"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MultikeyForeignConstraintBuilder"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"references"},"references"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"references"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",(0,a.kt)("em",{parentName:"p"},"string"),"[]): ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,a.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"columnNames")),(0,a.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,a.kt)("em",{parentName:"td"},"string"),"[]")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.referencingcolumnbuilder"},(0,a.kt)("em",{parentName:"a"},"ReferencingColumnBuilder"))),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1826"))}p.isMDXComponent=!0}}]);