(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49950],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,N=c["".concat(s,".").concat(d)]||c[d]||k[d]||p;return a?n.createElement(N,m(m({ref:t},o),{},{components:a})):n.createElement(N,m({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,m=new Array(p);m[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var l=2;l<p;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99618:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},metadata:function(){return i},toc:function(){return s},default:function(){return o}});var n=a(74034),r=a(79973),p=(a(67294),a(3905)),m={id:"core.eventmanager",title:"Class: EventManager",sidebar_label:"EventManager",custom_edit_url:null},i={unversionedId:"api/classes/core.eventmanager",id:"api/classes/core.eventmanager",isDocsHomePage:!1,title:"Class: EventManager",description:"core.EventManager",source:"@site/docs/api/classes/core.eventmanager.md",sourceDirName:"api/classes",slug:"/api/classes/core.eventmanager",permalink:"/docs/next/api/classes/core.eventmanager",editUrl:null,version:"current",sidebar_label:"EventManager",frontMatter:{id:"core.eventmanager",title:"Class: EventManager",sidebar_label:"EventManager",custom_edit_url:null},sidebar:"API",previous:{title:"Class: EnumType",permalink:"/docs/next/api/classes/core.enumtype"},next:{title:"Class: ExceptionConverter",permalink:"/docs/next/api/classes/core.exceptionconverter"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispatchEvent",id:"dispatchevent",children:[]},{value:"hasListeners",id:"haslisteners",children:[]},{value:"registerSubscriber",id:"registersubscriber",children:[]}]}],l={toc:s};function o(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".EventManager"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new EventManager"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"subscribers"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">","[]): ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.eventmanager"},(0,p.kt)("em",{parentName:"a"},"EventManager"))),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"subscribers")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">","[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.eventmanager"},(0,p.kt)("em",{parentName:"a"},"EventManager"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L9"},"packages/core/src/events/EventManager.ts:9")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"dispatchevent"},"dispatchEvent"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#transactioneventtype"},(0,p.kt)("em",{parentName:"a"},"TransactionEventType")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")),"): ",(0,p.kt)("em",{parentName:"p"},"unknown")),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#transactioneventtype"},(0,p.kt)("em",{parentName:"a"},"TransactionEventType")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.transactioneventargs"},(0,p.kt)("em",{parentName:"a"},"TransactionEventArgs")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"unknown")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L25"},"packages/core/src/events/EventManager.ts:25")),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.eventtype#oninit"},(0,p.kt)("em",{parentName:"a"},"onInit")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("em",{parentName:"p"},"Partial"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">",">","): ",(0,p.kt)("em",{parentName:"p"},"unknown")),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/enums/core.eventtype#oninit"},(0,p.kt)("em",{parentName:"a"},"onInit")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"Partial"),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"unknown")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L26"},"packages/core/src/events/EventManager.ts:26")),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispatchEvent"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.eventtype"},(0,p.kt)("em",{parentName:"a"},"EventType")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,p.kt)("em",{parentName:"p"},"Partial"),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs"))," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">",">","): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/enums/core.eventtype"},(0,p.kt)("em",{parentName:"a"},"EventType")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"args")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"Partial"),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.flusheventargs"},(0,p.kt)("em",{parentName:"a"},"FlushEventArgs"))," ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.eventargs"},(0,p.kt)("em",{parentName:"a"},"EventArgs")),"<T",">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<unknown",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L27"},"packages/core/src/events/EventManager.ts:27")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"haslisteners"},"hasListeners"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hasListeners"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.eventtype"},(0,p.kt)("em",{parentName:"a"},"EventType")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-4"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/enums/core.eventtype"},(0,p.kt)("em",{parentName:"a"},"EventType")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L51"},"packages/core/src/events/EventManager.ts:51")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"registersubscriber"},"registerSubscriber"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"registerSubscriber"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"subscriber"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-5"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"subscriber")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/005bfda/packages/core/src/events/EventManager.ts#L15"},"packages/core/src/events/EventManager.ts:15")))}o.isMDXComponent=!0}}]);