(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34237],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),m=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),g=m(a),k=n,c=g["".concat(l,".").concat(k)]||g[k]||d[k]||i;return a?r.createElement(c,o(o({ref:e},s),{},{components:a})):r.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=g;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73381:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={id:"migrations.Migrator",title:"Class: Migrator",sidebar_label:"Migrator",custom_edit_url:null},p=void 0,l={unversionedId:"api/classes/migrations.Migrator",id:"api/classes/migrations.Migrator",isDocsHomePage:!1,title:"Class: Migrator",description:"migrations.Migrator",source:"@site/docs/api/classes/migrations.Migrator.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.Migrator",permalink:"/docs/next/api/classes/migrations.Migrator",editUrl:null,version:"current",frontMatter:{id:"migrations.Migrator",title:"Class: Migrator",sidebar_label:"Migrator",custom_edit_url:null},sidebar:"API",previous:{title:"MigrationStorage",permalink:"/docs/next/api/classes/migrations.MigrationStorage"},next:{title:"TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.TsMorphMetadataProvider"}},m=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createInitialMigration",id:"createinitialmigration",children:[]},{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"getStorage",id:"getstorage",children:[]},{value:"up",id:"up",children:[]}]}],s={toc:m};function d(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations"},"migrations"),".Migrator"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Migrator"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.EntityManager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.AbstractSqlDriver"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.AbstractSqlConnection"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSqlConnection")),">",">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L25"},"packages/migrations/src/Migrator.ts:25")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createinitialmigration"},"createInitialMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createInitialMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L66"},"packages/migrations/src/Migrator.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createmigration"},"createMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"path?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"blank?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initial?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blank")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initial")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationResult")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L44"},"packages/migrations/src/Migrator.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#migrateoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L143"},"packages/migrations/src/Migrator.ts:143")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L127"},"packages/migrations/src/Migrator.ts:127")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPendingMigrations"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L133"},"packages/migrations/src/Migrator.ts:133")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getstorage"},"getStorage"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getStorage"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.MigrationStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.MigrationStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L147"},"packages/migrations/src/Migrator.ts:147")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"up"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#migrateoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrateOptions")))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"UmzugMigration")),"[]",">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/cac741d/packages/migrations/src/Migrator.ts#L139"},"packages/migrations/src/Migrator.ts:139")))}d.isMDXComponent=!0}}]);