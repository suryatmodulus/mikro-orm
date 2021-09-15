(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7614],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89242:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a={title:"Using Multiple Schemas"},s=void 0,l={unversionedId:"multiple-schemas",id:"version-4.5/multiple-schemas",isDocsHomePage:!1,title:"Using Multiple Schemas",description:"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL",source:"@site/versioned_docs/version-4.5/multiple-schemas.md",sourceDirName:".",slug:"/multiple-schemas",permalink:"/docs/multiple-schemas",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/multiple-schemas.md",tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1631669610,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Using Multiple Schemas"},sidebar:"version-4.5/docs",previous:{title:"Using Entity Constructors",permalink:"/docs/entity-constructors"},next:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/using-bigint-pks"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL\nterminology, it is called database, but from implementation point of view, it is a schema. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To use multiple schemas, your connection needs to have access to all of them (multiple\nconnections are not supported).")),(0,i.kt)("p",null,"All you need to do is simply define the table name including schema name in ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity({ tableName: 'first_schema.foo' })\nexport class Foo { ... }\n\n@Entity({ tableName: 'second_schema.bar' })\nexport class Bar { ... }\n")),(0,i.kt)("p",null,"Then use those entities as usual. Resulting SQL queries will use this ",(0,i.kt)("inlineCode",{parentName:"p"},"tableName")," value as a\ntable name so as long as your connection has access to given schema, everything should work\nas expected."),(0,i.kt)("p",null,"You can also query for entity in specific schema via ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await em.findOne(User, { ... }, { schema: 'client-123' });\n")),(0,i.kt)("p",null,"To create entity in specific schema, you will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = em.createQueryBuilder(User);\nawait qb.insert({ email: 'foo@bar.com' }).withSchema('client-123');\n")))}p.isMDXComponent=!0}}]);