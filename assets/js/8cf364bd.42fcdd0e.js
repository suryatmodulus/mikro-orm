(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58017],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=o(),y=f.tabGroupChoices,h=f.setTabGroupChoices,k=(0,r.useState)(a),g=k[0],b=k[1],v=r.Children.toArray(e.children),w=[];if(null!=d){var N=y[d];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&b(N)}var R=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;b(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:R,onClick:R},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},89006:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=n(55064),l=n(58215),s={title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},c=void 0,p={unversionedId:"entity-references",id:"version-4.5/entity-references",isDocsHomePage:!1,title:"Entity References",description:"Every single entity relation is mapped to an entity reference. Reference is an entity that has",source:"@site/versioned_docs/version-4.5/entity-references.md",sourceDirName:".",slug:"/entity-references",permalink:"/docs/entity-references",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/entity-references.md",version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1629875149,formattedLastUpdatedAt:"8/25/2021",frontMatter:{title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},sidebar:"version-4.5/docs",previous:{title:"Identity Map and Request Context",permalink:"/docs/identity-map"},next:{title:"Collections",permalink:"/docs/collections"}},u=[{value:"Better Type-safety with <code>Reference&lt;T&gt;</code> Wrapper",id:"better-type-safety-with-referencet-wrapper",children:[{value:"Assigning to Reference Properties",id:"assigning-to-reference-properties",children:[]},{value:"What is IdentifiedReference?",id:"what-is-identifiedreference",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every single entity relation is mapped to an entity reference. Reference is an entity that has\nonly its identifier. This reference is stored in identity map so you will get the same object\nreference when fetching the same document from database."),(0,o.kt)("p",null,"You can call ",(0,o.kt)("inlineCode",{parentName:"p"},"await wrap(entity).init()")," to initialize the entity. This will trigger database call\nand populate itself, keeping the same reference in identity map. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\n\nawait wrap(author).init(); // this will trigger db call\nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),(0,o.kt)("h2",{id:"better-type-safety-with-referencet-wrapper"},"Better Type-safety with ",(0,o.kt)("inlineCode",{parentName:"h2"},"Reference<T>")," Wrapper"),(0,o.kt)("p",null,"When you define ",(0,o.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToOne")," properties on your entity, TypeScript compiler\nwill think that desired entities are always loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: Author;\n\n  constructor(author: Author) {\n    this.author = author;\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Author); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // undefined as `Author` is not loaded yet\n")),(0,o.kt)("p",null,"You can overcome this issue by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference<T>")," wrapper. It simply wraps the entity,\ndefining ",(0,o.kt)("inlineCode",{parentName:"p"},"load(): Promise<T>")," method that will first lazy load the association if not already\navailable. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"unwrap(): T")," method to access the underlying entity without loading\nit."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"load<K extends keyof T>(prop: K): Promise<T[K]>"),", which works like ",(0,o.kt)("inlineCode",{parentName:"p"},"load()"),"\nbut returns the specified property."),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),(0,o.kt)(l.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),(0,o.kt)(l.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  id: number;\n  author: IdentifiedReference<Author>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    id: { type: Number, primary: true },\n    author: { entity: () => Author, wrappedReference: true },\n  },\n});\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // type error, there is no `name` property\nconsole.log(book.author.unwrap().name); // undefined as author is not loaded\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log((await book.author.load()).name); // ok, author already loaded\nconsole.log(book.author.unwrap().name); // ok, author already loaded\n")),(0,o.kt)("p",null,"There are also ",(0,o.kt)("inlineCode",{parentName:"p"},"getEntity()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getProperty()")," methods that are synchronous getters,\nthat will first check if the wrapped entity is initialized, and if not, it will throw\nand error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.getEntity()); // Error: Reference<Author> 123 not initialized\nconsole.log(book.author.getProperty('name')); // Error: Reference<Author> 123 not initialized\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log(book.author.getProperty('name')); // ok, author already loaded\n")),(0,o.kt)("p",null,"If you use different metadata provider than ",(0,o.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),"\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"), you will also need to explicitly set ",(0,o.kt)("inlineCode",{parentName:"p"},"wrappedReference"),"\nparameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne(() => Author, { wrappedReference: true })\nauthor!: IdentifiedReference<Author>;\n")),(0,o.kt)("h3",{id:"assigning-to-reference-properties"},"Assigning to Reference Properties"),(0,o.kt)("p",null,"When you define the property as ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference")," wrapper, you will need to assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference"),"\nto it instead of the entity. You can create it via ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference.create()")," factory, or use ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapped"),"\nparameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"em.getReference()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconst repo = orm.em.getRepository(Author);\n\nbook.author = repo.getReference(2, true);\n\n// same as:\nbook.author = Reference.create(repo.getReference(2));\nawait orm.em.flush();\n")),(0,o.kt)("p",null,"Another way is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"toReference()")," method available as part of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/entity-helper#wrappedentity-and-wrap-helper"},(0,o.kt)("inlineCode",{parentName:"a"},"WrappedEntity")," interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...)\nbook.author = wrap(author).toReference();\n")),(0,o.kt)("p",null,"If the reference already exist, you can also re-assign to it via ",(0,o.kt)("inlineCode",{parentName:"p"},"set()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"book.author.set(new Author(...));\n")),(0,o.kt)("h3",{id:"what-is-identifiedreference"},"What is IdentifiedReference?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IdentifiedReference")," is an intersection type that adds primary key property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference"),"\ninterface. It allows to get the primary key from ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference")," instance directly."),(0,o.kt)("p",null,"By default, we try to detect the PK by checking if a property with a known name exists.\nWe check for those in order: ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," - with a way to manually set the property\nname via ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryKeyProp")," symbol (",(0,o.kt)("inlineCode",{parentName:"p"},"[PrimaryKeyProp]?: 'foo';"),"). "),(0,o.kt)("p",null,"We can also override this via second generic type argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns the PK\n")),(0,o.kt)("p",null,"You can also have non-standard primary key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"author: IdentifiedReference<Author, 'myPrimaryKey'>;\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.myPrimaryKey); // ok, returns the PK\n")),(0,o.kt)("p",null,"For MongoDB, define the PK generic type argument as ",(0,o.kt)("inlineCode",{parentName:"p"},"'id' | '_id'")," to access both ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")," PK values:"),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),(0,o.kt)(l.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),(0,o.kt)(l.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  _id: ObjectId;\n  id: string;\n  author: IdentifiedReference<IAuthor, 'id' | '_id'>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: String, serializedPrimaryKey: true },\n    author: { entity: 'Author', wrappedReference: true },\n  },\n});\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns string PK\nconsole.log(book.author._id); // ok, returns ObjectId PK\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityHelper.init()")," which always refreshes the entity, ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference.load()"),"\nmethod will query the database only if the entity is not already loaded in Identity Map.")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);