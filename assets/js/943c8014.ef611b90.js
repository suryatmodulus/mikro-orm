(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},658:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(1110)),i={title:"Schema generator"},c={unversionedId:"schema-generator",id:"version-2.7/schema-generator",isDocsHomePage:!1,title:"Schema generator",description:"To generate schema from your entity metadata, you can use SchemaGenerator",source:"@site/versioned_docs/version-2.7/schema-generator.md",slug:"/schema-generator",permalink:"/docs/2.7/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/schema-generator.md",version:"2.7",lastUpdatedBy:"Kamil Piotrowski",lastUpdatedAt:1617140317,formattedLastUpdatedAt:"3/30/2021",sidebar:"version-2.7/docs",previous:{title:"Debugging",permalink:"/docs/2.7/debugging"},next:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/2.7/usage-with-sql"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGenerator"),"\nhelper. You will need to create simple script where you initialize MikroORM\nlike this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'},"import { MikroORM, SchemaGenerator } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = new SchemaGenerator(orm.em.getDriver(), orm.getMetadata());\n  const dump = generator.generate();\n  console.log(dump);\n  await orm.close(true);\n})();\n")),Object(a.b)("p",null,"Then run this script via ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(a.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ ts-node create-schema\n")))}u.isMDXComponent=!0}}]);