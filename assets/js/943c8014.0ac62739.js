(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73572],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},37878:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={title:"Schema generator"},c=void 0,s={unversionedId:"schema-generator",id:"version-2.7/schema-generator",isDocsHomePage:!1,title:"Schema generator",description:"To generate schema from your entity metadata, you can use SchemaGenerator",source:"@site/versioned_docs/version-2.7/schema-generator.md",sourceDirName:".",slug:"/schema-generator",permalink:"/docs/2.7/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/schema-generator.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1626770388,formattedLastUpdatedAt:"7/20/2021",frontMatter:{title:"Schema generator"},sidebar:"version-2.7/docs",previous:{title:"Debugging",permalink:"/docs/2.7/debugging"},next:{title:"Usage with SQL Drivers",permalink:"/docs/2.7/usage-with-sql"}},u=[],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To generate schema from your entity metadata, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGenerator"),"\nhelper. You will need to create simple script where you initialize MikroORM\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'},"import { MikroORM, SchemaGenerator } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = new SchemaGenerator(orm.em.getDriver(), orm.getMetadata());\n  const dump = generator.generate();\n  console.log(dump);\n  await orm.close(true);\n})();\n")),(0,a.kt)("p",null,"Then run this script via ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ts-node create-schema\n")))}m.isMDXComponent=!0}}]);