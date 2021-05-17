(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45573],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67202:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var a=t(74034),i=t(79973),r=(t(67294),t(3905)),s={title:"Inheritance Mapping"},o={unversionedId:"inheritance-mapping",id:"inheritance-mapping",isDocsHomePage:!1,title:"Inheritance Mapping",description:"Mapped Superclasses",source:"@site/docs/inheritance-mapping.md",sourceDirName:".",slug:"/inheritance-mapping",permalink:"/docs/next/inheritance-mapping",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/inheritance-mapping.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1621241679,formattedLastUpdatedAt:"5/17/2021",frontMatter:{title:"Inheritance Mapping"},sidebar:"docs",previous:{title:"Transactions and Concurrency",permalink:"/docs/next/transactions"},next:{title:"Cascading persist, merge and remove",permalink:"/docs/next/cascading"}},l=[{value:"Mapped Superclasses",id:"mapped-superclasses",children:[]},{value:"Single Table Inheritance",id:"single-table-inheritance",children:[{value:"Using <code>discriminatorValue</code> instead of <code>discriminatorMap</code>",id:"using-discriminatorvalue-instead-of-discriminatormap",children:[]},{value:"Explicit discriminator column",id:"explicit-discriminator-column",children:[]},{value:"Design-time considerations",id:"design-time-considerations",children:[]},{value:"Performance impact",id:"performance-impact",children:[]},{value:"SQL Schema considerations",id:"sql-schema-considerations",children:[]}]}],p={toc:l};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mapped-superclasses"},"Mapped Superclasses"),(0,r.kt)("p",null,"A mapped superclass is an abstract or concrete class that provides persistent entity state and\nmapping information for its subclasses, but which is not itself an entity. Typically, the purpose\nof such a mapped superclass is to define state and mapping information that is common to multiple\nentity classes."),(0,r.kt)("p",null,"Mapped superclasses, just as regular, non-mapped classes, can appear in the middle of an otherwise\nmapped inheritance hierarchy (through Single Table Inheritance)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A mapped superclass cannot be an entity, it is not query-able and persistent relationships defined\nby a mapped superclass must be unidirectional (with an owning side only). This means that One-To-Many\nassociations are not possible on a mapped superclass at all. Furthermore Many-To-Many associations\nare only possible if the mapped superclass is only used in exactly one entity at the moment. For\nfurther support of inheritance, the single table inheritance features have to be used.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// do not use @Entity decorator on base classes (mapped superclasses)\n// we can also use @Entity({ abstract: true })\nexport abstract class Person {\n\n  @Property()\n  mapped1!: number;\n\n  @Property()\n  mapped2!: string;\n \n  @OneToOne()\n  toothbrush!: Toothbrush;\n\n  // ... more fields and methods\n}\n\n@Entity()\nexport class Employee extends Person {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  // ... more fields and methods\n\n}\n\n@Entity()\nexport class Toothbrush {\n  \n  @PrimaryKey()\n  id!: number;\n\n  // ... more fields and methods\n\n}\n")),(0,r.kt)("p",null,"The DDL for the corresponding database schema would look something like this (this is for SQLite):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table `employee` (\n  `id` int unsigned not null auto_increment primary key,\n  `name` varchar(255) not null, `mapped1` integer not null,\n  `mapped2` varchar(255) not null,\n  `toothbrush_id` integer not null\n);\n")),(0,r.kt)("p",null,"As you can see from this DDL snippet, there is only a single table for the entity\nsubclass. All the mappings from the mapped superclass were inherited to the subclass\nas if they had been defined on that class directly."),(0,r.kt)("h2",{id:"single-table-inheritance"},"Single Table Inheritance"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Support for STI was added in version 4.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/singleTableInheritance.html"},"Single Table Inheritance"),"\nis an inheritance mapping strategy where all classes of a hierarchy are mapped to a single\ndatabase table. In order to distinguish which row represents which type in the hierarchy\na so-called discriminator column is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport class Person {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("p",null,"Things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorColumn")," option must be specified on the topmost class that is\npart of the mapped entity hierarchy."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorMap")," specifies which values of the discriminator column identify\na row as being of a certain type. In the case above a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"person")," identifies\na row as being of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Person")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"employee")," identifies a row as being of type\n",(0,r.kt)("inlineCode",{parentName:"li"},"Employee"),"."),(0,r.kt)("li",{parentName:"ul"},"All entity classes that are part of the mapped entity hierarchy (including the topmost\nclass) should be specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorMap"),". In the case above ",(0,r.kt)("inlineCode",{parentName:"li"},"Person")," class\nincluded."),(0,r.kt)("li",{parentName:"ul"},"We can use abstract class as the root entity - then the root class should not be part\nof the discriminator map"),(0,r.kt)("li",{parentName:"ul"},"If no discriminator map is provided, then the map is generated automatically.\nThe automatically generated discriminator map contains the table names that would be\notherwise used in case of regular entities. ")),(0,r.kt)("h3",{id:"using-discriminatorvalue-instead-of-discriminatormap"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"discriminatorValue")," instead of ",(0,r.kt)("inlineCode",{parentName:"h3"},"discriminatorMap")),(0,r.kt)("p",null,"As noted above, the discriminator map can be auto-generated. In that case, we might\nwant to control the tokens that will be used in the map. To do so, we can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorValue")," on the child entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorValue: 'person',\n})\nexport class Person {\n  // ...\n}\n\n@Entity({\n  discriminatorValue: 'employee',\n})\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"explicit-discriminator-column"},"Explicit discriminator column"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorColumn")," specifies the name of special column that will be used to\ndefine what type of class should given row be represented with. It will be defined\nautomatically for you and it will stay hidden (it won't by hydrated as regular property). "),(0,r.kt)("p",null,"On the other hand, it is perfectly fine to define the column explicitly. Doing so,\nyou will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"querying by the type, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"em.find(Person, { type: { $ne: 'employee' } }")),(0,r.kt)("li",{parentName:"ul"},"the column will be part of the serialized response")),(0,r.kt)("p",null,"Following example shows how we can define the discriminator explicitly, as well\nas a version where root entity is abstract class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'type',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport abstract class BasePerson {\n\n  @Enum()\n  type!: 'person' | 'employee';\n\n}\n\n@Entity()\nexport class Person extends BasePerson {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("p",null,"If we wanted to use ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorValue")," with abstract entities, we need to mark\nthe entity as ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract: true")," so it can be skipped from the discriminator map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'type',\n  abstract: true,\n})\nexport abstract class BasePerson {\n\n  @Enum()\n  type!: 'person' | 'employee';\n\n}\n\n@Entity({ discriminatorValue: 'person' })\nexport class Person extends BasePerson {\n  // ...\n}\n\n@Entity({ discriminatorValue: 'employee' })\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"design-time-considerations"},"Design-time considerations"),(0,r.kt)("p",null,"This mapping approach works well when the type hierarchy is fairly simple and stable.\nAdding a new type to the hierarchy and adding fields to existing supertypes simply\ninvolves adding new columns to the table, though in large deployments this may have\nan adverse impact on the index and column layout inside the database."),(0,r.kt)("h3",{id:"performance-impact"},"Performance impact"),(0,r.kt)("p",null,"This strategy is very efficient for querying across all types in the hierarchy or\nfor specific types. No table joins are required, only a WHERE clause listing the\ntype identifiers. In particular, relationships involving types that employ this\nmapping strategy are very performing."),(0,r.kt)("h3",{id:"sql-schema-considerations"},"SQL Schema considerations"),(0,r.kt)("p",null,"For Single-Table-Inheritance to work in scenarios where you are using either a legacy\ndatabase schema or a self-written database schema you have to make sure that all\ncolumns that are not in the root entity but in any of the different sub-entities\nhas to allow null values. Columns that have NOT NULL constraints have to be on the\nroot entity of the single-table inheritance hierarchy."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/inheritance-mapping.html"},"doctrine docs"),"\nas the behaviour here is pretty much the same.")))}c.isMDXComponent=!0}}]);