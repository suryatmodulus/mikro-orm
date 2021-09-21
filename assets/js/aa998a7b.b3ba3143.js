(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62087],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,N=c["".concat(l,".").concat(d)]||c[d]||s[d]||o;return a?r.createElement(N,i(i({ref:t},k),{},{components:a})):r.createElement(N,i({ref:t},k))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60870:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=a(74034),n=a(79973),o=(a(67294),a(3905)),i={id:"core.mikroorm",title:"Class: MikroORM<D>",sidebar_label:"MikroORM",custom_edit_url:null,hide_title:!0},p="Class: MikroORM<D>",l={unversionedId:"api/classes/core.mikroorm",id:"version-4.5/api/classes/core.mikroorm",isDocsHomePage:!1,title:"Class: MikroORM<D>",description:"core.MikroORM",source:"@site/versioned_docs/version-4.5/api/classes/core.mikroorm.md",sourceDirName:"api/classes",slug:"/api/classes/core.mikroorm",permalink:"/docs/api/classes/core.mikroorm",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1632241235,formattedLastUpdatedAt:"9/21/2021",frontMatter:{id:"core.mikroorm",title:"Class: MikroORM<D>",sidebar_label:"MikroORM",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MetadataValidator",permalink:"/docs/api/classes/core.metadatavalidator"},next:{title:"MongoNamingStrategy",permalink:"/docs/api/classes/core.mongonamingstrategy"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"logger",id:"logger",children:[]},{value:"metadata",id:"metadata",children:[]}]},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"connect",id:"connect",children:[]},{value:"getEntityGenerator",id:"getentitygenerator",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMigrator",id:"getmigrator",children:[]},{value:"getSchemaGenerator",id:"getschemagenerator",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"init",id:"init",children:[]}]}],k={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-mikroormd"},"Class: MikroORM<D",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MikroORM"),(0,o.kt)("p",null,"Helper class for bootstrapping the MikroORM."),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"D")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new MikroORM"),"<D",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">","): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},(0,o.kt)("em",{parentName:"a"},"MikroORM")),"<D",">"),(0,o.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"D")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),", D",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">")))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},(0,o.kt)("em",{parentName:"a"},"MikroORM")),"<D",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L50"},"packages/core/src/MikroORM.ts:50")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"config"},"config"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"config"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L16"},"packages/core/src/MikroORM.ts:16")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"driver"},"driver"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"driver"),": D"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L18"},"packages/core/src/MikroORM.ts:18")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"em"},"em"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"em"),": D[",(0,o.kt)("em",{parentName:"p"},"typeof")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitymanagertype"},(0,o.kt)("em",{parentName:"a"},"EntityManagerType")),"] & ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L15"},"packages/core/src/MikroORM.ts:15")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"logger"},"logger"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"logger"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},(0,o.kt)("em",{parentName:"a"},"Logger"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L19"},"packages/core/src/MikroORM.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"metadata"},"metadata"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"metadata"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,o.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L17"},"packages/core/src/MikroORM.ts:17")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"close"},"close"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"close"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"force?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Closes the database connection."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"force")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L97"},"packages/core/src/MikroORM.ts:97")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connect"},"connect"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"connect"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<D",">"),(0,o.kt)("p",null,"Connects to the database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<D",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L72"},"packages/core/src/MikroORM.ts:72")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getentitygenerator"},"getEntityGenerator"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getEntityGenerator"),"<T",">","(): T"),(0,o.kt)("p",null,"Gets the EntityGenerator."),(0,o.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"IEntityGenerator"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IEntityGenerator")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L118"},"packages/core/src/MikroORM.ts:118")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getmetadata"},"getMetadata"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getMetadata"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,o.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,o.kt)("p",null,"Gets the MetadataStorage."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,o.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L104"},"packages/core/src/MikroORM.ts:104")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getmigrator"},"getMigrator"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getMigrator"),"<T",">","(): T"),(0,o.kt)("p",null,"Gets the Migrator."),(0,o.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"IMigrator"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IMigrator")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L127"},"packages/core/src/MikroORM.ts:127")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getschemagenerator"},"getSchemaGenerator"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getSchemaGenerator"),"<T",">","(): T"),(0,o.kt)("p",null,"Gets the SchemaGenerator."),(0,o.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ISchemaGenerator"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ISchemaGenerator")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L111"},"packages/core/src/MikroORM.ts:111")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isconnected"},"isConnected"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isConnected"),"(): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,o.kt)("p",null,"Checks whether the database connection is active."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<boolean",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L90"},"packages/core/src/MikroORM.ts:90")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"init"},"init"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"init"),"<D",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"connect?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean"),"): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},(0,o.kt)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),(0,o.kt)("p",null,"Initialize the ORM, load entity metadata, create EntityManager and connect to the database.\nIf you omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter, your CLI config will be used."),(0,o.kt)("h4",{id:"type-parameters-5"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"D")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),", D",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">")))),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#options"},(0,o.kt)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,o.kt)("em",{parentName:"a"},"Configuration")),"<D",">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"connect")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.mikroorm"},(0,o.kt)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/MikroORM.ts#L25"},"packages/core/src/MikroORM.ts:25")))}s.isMDXComponent=!0}}]);