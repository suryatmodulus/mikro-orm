(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90597],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=m(a),s=n,N=d["".concat(i,".").concat(s)]||d[s]||c[s]||p;return a?r.createElement(N,o(o({ref:t},k),{},{components:a})):r.createElement(N,o({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<p;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26980:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return m},default:function(){return c}});var r=a(74034),n=a(79973),p=(a(67294),a(3905)),o={id:"core.arraycollection",title:"Class: ArrayCollection<T, O>",sidebar_label:"ArrayCollection",custom_edit_url:null,hide_title:!0},l="Class: ArrayCollection<T, O>",i={unversionedId:"api/classes/core.arraycollection",id:"version-4.5/api/classes/core.arraycollection",isDocsHomePage:!1,title:"Class: ArrayCollection<T, O>",description:"core.ArrayCollection",source:"@site/versioned_docs/version-4.5/api/classes/core.arraycollection.md",sourceDirName:"api/classes",slug:"/api/classes/core.arraycollection",permalink:"/docs/api/classes/core.arraycollection",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1630080779,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"core.arraycollection",title:"Class: ArrayCollection<T, O>",sidebar_label:"ArrayCollection",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"AbstractNamingStrategy",permalink:"/docs/api/classes/core.abstractnamingstrategy"},next:{title:"ArrayType",permalink:"/docs/api/classes/core.arraytype"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Indexable",id:"indexable",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_count",id:"_count",children:[]},{value:"_property",id:"_property",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"items",id:"items",children:[]},{value:"owner",id:"owner",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"length",id:"length",children:[]},{value:"property",id:"property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Symbol.iterator",id:"symboliterator",children:[]},{value:"add",id:"add",children:[]},{value:"contains",id:"contains",children:[]},{value:"count",id:"count",children:[]},{value:"getIdentifiers",id:"getidentifiers",children:[]},{value:"getItems",id:"getitems",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"incrementCount",id:"incrementcount",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"loadCount",id:"loadcount",children:[]},{value:"propagate",id:"propagate",children:[]},{value:"propagateToInverseSide",id:"propagatetoinverseside",children:[]},{value:"propagateToOwningSide",id:"propagatetoowningside",children:[]},{value:"remove",id:"remove",children:[]},{value:"removeAll",id:"removeall",children:[]},{value:"set",id:"set",children:[]},{value:"shouldPropagateToCollection",id:"shouldpropagatetocollection",children:[]},{value:"toArray",id:"toarray",children:[]},{value:"toJSON",id:"tojson",children:[]}]}],k={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"class-arraycollectiont-o"},"Class: ArrayCollection<T, O",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ArrayCollection"),(0,p.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"O"))))),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"ArrayCollection")),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.collection"},(0,p.kt)("em",{parentName:"a"},"Collection"))))),(0,p.kt)("h2",{id:"indexable"},"Indexable"),(0,p.kt)("p",null,"\u25aa ","[k: ",(0,p.kt)("em",{parentName:"p"},"number"),"]",": T"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new ArrayCollection"),"<T, O",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"owner"),": O & ",(0,p.kt)("em",{parentName:"p"},"Partial"),"<O",">"," & { ",(0,p.kt)("inlineCode",{parentName:"p"},"[EntityRepositoryType]?"),": ",(0,p.kt)("em",{parentName:"p"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"[PrimaryKeyType]?"),": ",(0,p.kt)("em",{parentName:"p"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__helper?"),": ",(0,p.kt)("em",{parentName:"p"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__meta?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__platform?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"  }, ",(0,p.kt)("inlineCode",{parentName:"p"},"items?"),": T[]): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},(0,p.kt)("em",{parentName:"a"},"ArrayCollection")),"<T, O",">"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"O"))))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"owner")),(0,p.kt)("td",{parentName:"tr",align:"left"},"O & ",(0,p.kt)("em",{parentName:"td"},"Partial"),"<O",">"," & { ",(0,p.kt)("inlineCode",{parentName:"td"},"[EntityRepositoryType]?"),": ",(0,p.kt)("em",{parentName:"td"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"td"},"[PrimaryKeyType]?"),": ",(0,p.kt)("em",{parentName:"td"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"td"},"__helper?"),": ",(0,p.kt)("em",{parentName:"td"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"td"},"__meta?"),": ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"td"},"__platform?"),": ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"  }")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"items?")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},(0,p.kt)("em",{parentName:"a"},"ArrayCollection")),"<T, O",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L14"},"packages/core/src/entity/ArrayCollection.ts:14")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"_count"},"_","count"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"_","count"),": ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L13"},"packages/core/src/entity/ArrayCollection.ts:13")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"_property"},"_","property"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"_","property"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L14"},"packages/core/src/entity/ArrayCollection.ts:14")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"initialized"},"initialized"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("strong",{parentName:"p"},"initialized"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"= true"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L12"},"packages/core/src/entity/ArrayCollection.ts:12")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"items"},"items"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"items"),": ",(0,p.kt)("em",{parentName:"p"},"Set"),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L11"},"packages/core/src/entity/ArrayCollection.ts:11")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"owner"},"owner"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"owner"),": O & ",(0,p.kt)("em",{parentName:"p"},"Partial"),"<O",">"," & { ",(0,p.kt)("inlineCode",{parentName:"p"},"[EntityRepositoryType]?"),": ",(0,p.kt)("em",{parentName:"p"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"[PrimaryKeyType]?"),": ",(0,p.kt)("em",{parentName:"p"},"unknown")," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__helper?"),": ",(0,p.kt)("em",{parentName:"p"},"IWrappedEntityInternal"),"<O, keyof O, keyof O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__meta?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<O",">"," ; ",(0,p.kt)("inlineCode",{parentName:"p"},"__platform?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"  }"),(0,p.kt)("h2",{id:"accessors"},"Accessors"),(0,p.kt)("h3",{id:"length"},"length"),(0,p.kt)("p",null,"\u2022 get ",(0,p.kt)("strong",{parentName:"p"},"length"),"(): ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L139"},"packages/core/src/entity/ArrayCollection.ts:139")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"property"},"property"),(0,p.kt)("p",null,"\u2022 get ",(0,p.kt)("strong",{parentName:"p"},"property"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"internal"))," "),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L152"},"packages/core/src/entity/ArrayCollection.ts:152")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"symboliterator"},"[Symbol.iterator]"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"[Symbol.iterator]"),"(): ",(0,p.kt)("em",{parentName:"p"},"IterableIterator"),"<T",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"IterableIterator"),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L143"},"packages/core/src/entity/ArrayCollection.ts:143")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"add"},"add"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"add"),"(...",(0,p.kt)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"...items")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(T ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L71"},"packages/core/src/entity/ArrayCollection.ts:71")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"contains"},"contains"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"contains"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"check?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"check?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L122"},"packages/core/src/entity/ArrayCollection.ts:122")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"count"},"count"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"count"),"(): ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"number")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L127"},"packages/core/src/entity/ArrayCollection.ts:127")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getidentifiers"},"getIdentifiers"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getIdentifiers"),"<U",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"field?"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): U[]"),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"U")),(0,p.kt)("td",{parentName:"tr",align:"left"},"IPrimaryKeyValue"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#primary"},(0,p.kt)("em",{parentName:"a"},"Primary")),"<T",">"," & IPrimaryKeyValue")))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"field?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," U[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L53"},"packages/core/src/entity/ArrayCollection.ts:53")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getitems"},"getItems"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getItems"),"(): T[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," T[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L34"},"packages/core/src/entity/ArrayCollection.ts:34")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"hydrate"},"hydrate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hydrate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"items"),": T[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"internal"))," "),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"items")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L92"},"packages/core/src/entity/ArrayCollection.ts:92")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"incrementcount"},"incrementCount"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"incrementCount"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L202"},"packages/core/src/entity/ArrayCollection.ts:202")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isinitialized"},"isInitialized"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isInitialized"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"fully?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"fully")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L131"},"packages/core/src/entity/ArrayCollection.ts:131")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"loadcount"},"loadCount"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"loadCount"),"(): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L30"},"packages/core/src/entity/ArrayCollection.ts:30")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"propagate"},"propagate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"propagate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,p.kt)("em",{parentName:"p"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"remove"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"method")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"remove"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L162"},"packages/core/src/entity/ArrayCollection.ts:162")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"propagatetoinverseside"},"propagateToInverseSide"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"propagateToInverseSide"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,p.kt)("em",{parentName:"p"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"remove"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"method")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"remove"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L170"},"packages/core/src/entity/ArrayCollection.ts:170")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"propagatetoowningside"},"propagateToOwningSide"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"propagateToOwningSide"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"item"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,p.kt)("em",{parentName:"p"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"remove"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"item")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"method")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"remove"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L178"},"packages/core/src/entity/ArrayCollection.ts:178")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"remove"},"remove"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"remove"),"(...",(0,p.kt)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"...items")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(T ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L102"},"packages/core/src/entity/ArrayCollection.ts:102")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"removeall"},"removeAll"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"removeAll"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L118"},"packages/core/src/entity/ArrayCollection.ts:118")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"items"),": (T ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"items")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(T ","|"," ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.reference"},(0,p.kt)("em",{parentName:"a"},"Reference")),"<T",">",")[]")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L84"},"packages/core/src/entity/ArrayCollection.ts:84")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"shouldpropagatetocollection"},"shouldPropagateToCollection"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"shouldPropagateToCollection"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"collection"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.arraycollection"},(0,p.kt)("em",{parentName:"a"},"ArrayCollection")),"<O, T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"method"),": ",(0,p.kt)("em",{parentName:"p"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"remove"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"collection")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.arraycollection"},(0,p.kt)("em",{parentName:"a"},"ArrayCollection")),"<O, T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"method")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"add")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"remove"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L189"},"packages/core/src/entity/ArrayCollection.ts:189")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"toarray"},"toArray"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toArray"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L38"},"packages/core/src/entity/ArrayCollection.ts:38")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"tojson"},"toJSON"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/ArrayCollection.ts#L49"},"packages/core/src/entity/ArrayCollection.ts:49")))}c.isMDXComponent=!0}}]);