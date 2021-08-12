(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22909],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(r),k=a,f=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6766:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"core.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},l="Interface: PoolConfig",p={unversionedId:"api/interfaces/core.poolconfig",id:"version-4.5/api/interfaces/core.poolconfig",isDocsHomePage:!1,title:"Interface: PoolConfig",description:"core.PoolConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/core.poolconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.poolconfig",permalink:"/docs/api/interfaces/core.poolconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1628805007,formattedLastUpdatedAt:"8/12/2021",frontMatter:{id:"core.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"OneToOneOptions",permalink:"/docs/api/interfaces/core.onetooneoptions"},next:{title:"PrimaryKeyOptions",permalink:"/docs/api/interfaces/core.primarykeyoptions"}},m=[{value:"Properties",id:"properties",children:[{value:"Promise",id:"promise",children:[]},{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[]},{value:"afterCreate",id:"aftercreate",children:[]},{value:"autostart",id:"autostart",children:[]},{value:"evictionRunIntervalMillis",id:"evictionrunintervalmillis",children:[]},{value:"fifo",id:"fifo",children:[]},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[]},{value:"log",id:"log",children:[]},{value:"max",id:"max",children:[]},{value:"maxWaitingClients",id:"maxwaitingclients",children:[]},{value:"min",id:"min",children:[]},{value:"name",id:"name",children:[]},{value:"numTestsPerRun",id:"numtestsperrun",children:[]},{value:"priorityRange",id:"priorityrange",children:[]},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[]},{value:"refreshIdle",id:"refreshidle",children:[]},{value:"returnToHead",id:"returntohead",children:[]},{value:"softIdleTimeoutMillis",id:"softidletimeoutmillis",children:[]},{value:"testOnBorrow",id:"testonborrow",children:[]}]}],s={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".PoolConfig"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"promise"},"Promise"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"Promise"),": ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L337"},"packages/core/src/utils/Configuration.ts:337")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L331"},"packages/core/src/utils/Configuration.ts:331")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"aftercreate"},"afterCreate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"afterCreate"),": (...",(0,i.kt)("inlineCode",{parentName:"p"},"a"),": ",(0,i.kt)("em",{parentName:"p"},"unknown"),"[]) => ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (...",(0,i.kt)("inlineCode",{parentName:"p"},"a"),": ",(0,i.kt)("em",{parentName:"p"},"unknown"),"[]): ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...a")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L318"},"packages/core/src/utils/Configuration.ts:318")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L318"},"packages/core/src/utils/Configuration.ts:318")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"autostart"},"autostart"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"autostart"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L333"},"packages/core/src/utils/Configuration.ts:333")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"evictionrunintervalmillis"},"evictionRunIntervalMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"evictionRunIntervalMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L334"},"packages/core/src/utils/Configuration.ts:334")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fifo"},"fifo"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fifo"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L332"},"packages/core/src/utils/Configuration.ts:332")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L322"},"packages/core/src/utils/Configuration.ts:322")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"log"},"log"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"log"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),": ",(0,i.kt)("em",{parentName:"p"},"string"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration:"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L326"},"packages/core/src/utils/Configuration.ts:326")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L326"},"packages/core/src/utils/Configuration.ts:326")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L320"},"packages/core/src/utils/Configuration.ts:320")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxwaitingclients"},"maxWaitingClients"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"maxWaitingClients"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L329"},"packages/core/src/utils/Configuration.ts:329")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"min"},"min"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"min"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L319"},"packages/core/src/utils/Configuration.ts:319")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L317"},"packages/core/src/utils/Configuration.ts:317")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"numtestsperrun"},"numTestsPerRun"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"numTestsPerRun"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L335"},"packages/core/src/utils/Configuration.ts:335")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"priorityrange"},"priorityRange"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"priorityRange"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L325"},"packages/core/src/utils/Configuration.ts:325")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"reapIntervalMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L323"},"packages/core/src/utils/Configuration.ts:323")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refreshidle"},"refreshIdle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"refreshIdle"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L321"},"packages/core/src/utils/Configuration.ts:321")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"returntohead"},"returnToHead"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"returnToHead"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L324"},"packages/core/src/utils/Configuration.ts:324")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"softidletimeoutmillis"},"softIdleTimeoutMillis"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"softIdleTimeoutMillis"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L336"},"packages/core/src/utils/Configuration.ts:336")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"testonborrow"},"testOnBorrow"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"testOnBorrow"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Configuration.ts#L330"},"packages/core/src/utils/Configuration.ts:330")))}u.isMDXComponent=!0}}]);