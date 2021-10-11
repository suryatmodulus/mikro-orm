(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62219],{3905:function(e,o,n){"use strict";n.d(o,{Zo:function(){return d},kt:function(){return k}});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},d=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||r;return n?t.createElement(m,a(a({ref:o},d),{},{components:n})):t.createElement(m,a({ref:o},d))}));function k(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92180:function(e,o,n){"use strict";n.r(o),n.d(o,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var t=n(74034),i=n(79973),r=(n(67294),n(3905)),a={title:"Collections"},l=void 0,s={unversionedId:"collections",id:"version-4.1/collections",isDocsHomePage:!1,title:"Collections",description:"OneToMany and ManyToMany collections are stored in a Collection wrapper. It implements",source:"@site/versioned_docs/version-4.1/collections.md",sourceDirName:".",slug:"/collections",permalink:"/docs/4.1/collections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/collections.md",tags:[],version:"4.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1633986111,formattedLastUpdatedAt:"10/11/2021",frontMatter:{title:"Collections"},sidebar:"version-4.1/docs",previous:{title:"Entity References and Reference<T> Wrapper",permalink:"/docs/4.1/entity-references"},next:{title:"Entity Repository",permalink:"/docs/4.1/repositories"}},c=[{value:"OneToMany Collections",id:"onetomany-collections",children:[]},{value:"ManyToMany Collections",id:"manytomany-collections",children:[{value:"Unidirectional",id:"unidirectional",children:[]},{value:"Bidirectional",id:"bidirectional",children:[]},{value:"Forcing fixed order of collection items",id:"forcing-fixed-order-of-collection-items",children:[]}]},{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]},{value:"Filtering and ordering of collection items",id:"filtering-and-ordering-of-collection-items",children:[]}],d={toc:c};function p(e){var o=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OneToMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements\niterator so you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it. "),(0,r.kt)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items.\nKeep in mind that this approach will not check if the collection is initialed, while using ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\nmethod will throw error in this case."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that array access in ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, you\ncannot add new items to ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," this way. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.findOne(Author, '...', ['books']); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before you can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectId\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n\nconst author = orm.em.findOne(Author, '...'); // books collection has not been populated\nconsole.log(author.books.getItems()); // throws because the collection has not been initialized\n// initialize collection if not already loaded and return its items as array\nconsole.log(await author.books.loadItems()); // Book[]\n")),(0,r.kt)("h2",{id:"onetomany-collections"},"OneToMany Collections"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",(0,r.kt)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",(0,r.kt)("inlineCode",{parentName:"p"},"fk")," attribute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  // or via options object\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books2 = new Collection<Book>(this);\n\n}\n")),(0,r.kt)("h2",{id:"manytomany-collections"},"ManyToMany Collections"),(0,r.kt)("p",null,"For ManyToMany, SQL drivers use pivot table that holds reference to both entities. "),(0,r.kt)("p",null,"As opposed to them, with MongoDB we do not need to have join tables for ",(0,r.kt)("inlineCode",{parentName:"p"},"ManyToMany"),"\nrelations. All references are stored as an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectId"),"s on owning entity. "),(0,r.kt)("h3",{id:"unidirectional"},"Unidirectional"),(0,r.kt)("p",null,"Unidirectional ",(0,r.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, if you define only ",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"\nattribute, then it will be considered the owning side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany(() => Book)\nbooks1 = new Collection<Book>(this);\n\n// or mark it as owner explicitly via options object\n@ManyToMany({ entity: () => Book, owner: true })\nbooks2 = new Collection<Book>(this);\n")),(0,r.kt)("h3",{id:"bidirectional"},"Bidirectional"),(0,r.kt)("p",null,"Bidirectional ",(0,r.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store),\nmarked by ",(0,r.kt)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany(() => BookTag, tag => tag.books, { owner: true })\ntags = new Collection<BookTag>(this);\n\n// or via options object\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),(0,r.kt)("p",null,"And on the inversed side we define it with ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany(() => Book, book => book.tags)\nbooks = new Collection<Book>(this);\n\n// or via options object\n@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),(0,r.kt)("h3",{id:"forcing-fixed-order-of-collection-items"},"Forcing fixed order of collection items"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v3 many to many collections does not require having auto increment primary key, that\nwas used to ensure fixed order of collection items.")),(0,r.kt)("p",null,"To preserve fixed order of collections, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrder: true")," attribute, which will\nstart ordering by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column. Schema generator will convert the pivot table to have auto increment\nprimary key ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". You can also change the order column name via ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),". "),(0,r.kt)("p",null,"You can also specify default ordering via ",(0,r.kt)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute. This will be used when\nyou fully populate the collection including its items, as it orders by the referenced entity\nproperties instead of pivot table columns (which ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrderColumn")," is). On the other hand,\n",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrder")," is used to maintain the insert order of items instead of ordering by some property. "),(0,r.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,r.kt)("p",null,"When you use one of ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,r.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),(0,r.kt)("p",null,"Same applies for ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),(0,r.kt)("h2",{id:"filtering-and-ordering-of-collection-items"},"Filtering and ordering of collection items"),(0,r.kt)("p",null,"When initializing collection items via ",(0,r.kt)("inlineCode",{parentName:"p"},"collection.init()"),", you can filter the collection\nas well as order its items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await book.tags.init({ where: { active: true }, orderBy: { name: QueryOrder.DESC } });\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should never modify partially loaded collection.")))}p.isMDXComponent=!0}}]);