"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7706:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"List of all checkers",hide_table_of_contents:!0},c=void 0,s={unversionedId:"all-checkers",id:"all-checkers",title:"List of all checkers",description:"Here is an overview of the checkers currently available in Infer.",source:"@site/docs/all-checkers.md",sourceDirName:".",slug:"/all-checkers",permalink:"/docs/next/all-checkers",tags:[],version:"current",frontMatter:{title:"List of all checkers",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"infer run",permalink:"/docs/next/man-infer-run"},next:{title:"List of all issue types",permalink:"/docs/next/all-issue-types"}},p=[{value:"Annotation Reachability",id:"annotation-reachability",children:[],level:2},{value:"Biabduction",id:"biabduction",children:[],level:2},{value:"Buffer Overrun Analysis (InferBO)",id:"buffer-overrun-analysis-inferbo",children:[],level:2},{value:"Config Impact Analysis",id:"config-impact-analysis",children:[],level:2},{value:"Cost: Complexity Analysis",id:"cost-complexity-analysis",children:[],level:2},{value:"Datalog-based points-to analysis",id:"datalog-based-points-to-analysis",children:[],level:2},{value:"Eradicate",id:"eradicate",children:[],level:2},{value:"Fragment Retains View",id:"fragment-retains-view",children:[],level:2},{value:"Immutable Cast",id:"immutable-cast",children:[],level:2},{value:"Impurity",id:"impurity",children:[],level:2},{value:"Inefficient keySet Iterator",id:"inefficient-keyset-iterator",children:[],level:2},{value:"AST Language (AL)",id:"ast-language-al",children:[],level:2},{value:"Litho &quot;Required Props&quot;",id:"litho-required-props",children:[],level:2},{value:"Liveness",id:"liveness",children:[],level:2},{value:"Loop Hoisting",id:"loop-hoisting",children:[],level:2},{value:"Parameter Not Null Checked",id:"parameter-not-null-checked",children:[],level:2},{value:"<code>printf()</code> Argument Types",id:"printf-argument-types",children:[],level:2},{value:"Pulse",id:"pulse",children:[],level:2},{value:"Purity",id:"purity",children:[],level:2},{value:"Quandary",id:"quandary",children:[],level:2},{value:"RacerD",id:"racerd",children:[],level:2},{value:"Resource Leak Lab Exercise",id:"resource-leak-lab-exercise",children:[],level:2},{value:"Resource Leak checker for .NET",id:"resource-leak-checker-for-net",children:[],level:2},{value:"Scope Leakage",id:"scope-leakage",children:[],level:2},{value:"Static Initialization Order Fiasco",id:"static-initialization-order-fiasco",children:[],level:2},{value:"Simple Lineage",id:"simple-lineage",children:[],level:2},{value:"Self in Block",id:"self-in-block",children:[],level:2},{value:"Starvation",id:"starvation",children:[],level:2},{value:"Topl",id:"topl",children:[],level:2},{value:"Uninitialized Value",id:"uninitialized-value",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is an overview of the checkers currently available in Infer."),(0,a.kt)("h2",{id:"annotation-reachability"},"Annotation Reachability"),(0,a.kt)("p",null,"Given a pair of source and sink annotation, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"@PerformanceCritical")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Expensive"),", this checker will warn whenever some method annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@PerformanceCritical")," calls, directly or indirectly, another method annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@Expensive")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-annotation-reachability"},"Visit here for more information.")),(0,a.kt)("h2",{id:"biabduction"},"Biabduction"),(0,a.kt)("p",null,"This analysis deals with a range of issues, many linked to memory safety."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-biabduction"},"Visit here for more information.")),(0,a.kt)("h2",{id:"buffer-overrun-analysis-inferbo"},"Buffer Overrun Analysis (InferBO)"),(0,a.kt)("p",null,"InferBO is a detector for out-of-bounds array accesses."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-bufferoverrun"},"Visit here for more information.")),(0,a.kt)("h2",{id:"config-impact-analysis"},"Config Impact Analysis"),(0,a.kt)("p",null,"[EXPERIMENTAL]"," Collects function that are called without config checks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-config-impact-analysis"},"Visit here for more information.")),(0,a.kt)("h2",{id:"cost-complexity-analysis"},"Cost: Complexity Analysis"),(0,a.kt)("p",null,"Computes the asymptotic complexity of functions with respect to execution cost or other user defined resources. Can be used to detect changes in the complexity with ",(0,a.kt)("inlineCode",{parentName:"p"},"infer reportdiff"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-cost"},"Visit here for more information.")),(0,a.kt)("h2",{id:"datalog-based-points-to-analysis"},"Datalog-based points-to analysis"),(0,a.kt)("p",null,"Experimental datalog-based points-to analysis."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-datalog"},"Visit here for more information.")),(0,a.kt)("h2",{id:"eradicate"},"Eradicate"),(0,a.kt)("p",null,"The eradicate ",(0,a.kt)("inlineCode",{parentName:"p"},"@Nullable")," checker for Java annotations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained and will be removed in the future. Consider using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber/NullAway"},"NullAway")," as an alternative to Eradicate."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-eradicate"},"Visit here for more information.")),(0,a.kt)("h2",{id:"fragment-retains-view"},"Fragment Retains View"),(0,a.kt)("p",null,"Detects when Android fragments are not explicitly nullified before becoming unreachable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained due to poor precision."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-fragment-retains-view"},"Visit here for more information.")),(0,a.kt)("h2",{id:"immutable-cast"},"Immutable Cast"),(0,a.kt)("p",null,"Detection of object cast from immutable types to mutable types. For instance, it will detect casts from ",(0,a.kt)("inlineCode",{parentName:"p"},"ImmutableList")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ImmutableMap")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Map"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ImmutableSet")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained due to poor actionability of the reports."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-immutable-cast"},"Visit here for more information.")),(0,a.kt)("h2",{id:"impurity"},"Impurity"),(0,a.kt)("p",null,'Detects functions with potential side-effects. Same as "purity", but implemented on top of Pulse.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-impurity"},"Visit here for more information.")),(0,a.kt)("h2",{id:"inefficient-keyset-iterator"},"Inefficient keySet Iterator"),(0,a.kt)("p",null,"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-inefficient-keyset-iterator"},"Visit here for more information.")),(0,a.kt)("h2",{id:"ast-language-al"},"AST Language (AL)"),(0,a.kt)("p",null,"Declarative linting framework over the Clang AST."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," On end-of-life support, may be removed in the future."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-linters"},"Visit here for more information.")),(0,a.kt)("h2",{id:"litho-required-props"},'Litho "Required Props"'),(0,a.kt)("p",null,"Checks that all non-optional ",(0,a.kt)("inlineCode",{parentName:"p"},"@Prop"),"s have been specified when constructing Litho components."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-litho-required-props"},"Visit here for more information.")),(0,a.kt)("h2",{id:"liveness"},"Liveness"),(0,a.kt)("p",null,"Detection of dead stores and unused variables."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-liveness"},"Visit here for more information.")),(0,a.kt)("h2",{id:"loop-hoisting"},"Loop Hoisting"),(0,a.kt)("p",null,"Detect opportunities to hoist function calls that are invariant outside of loop bodies for efficiency."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-loop-hoisting"},"Visit here for more information.")),(0,a.kt)("h2",{id:"parameter-not-null-checked"},"Parameter Not Null Checked"),(0,a.kt)("p",null,"An Objective-C-specific analysis to detect when a block parameter is used before being checked for null first."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-parameter-not-null-checked"},"Visit here for more information.")),(0,a.kt)("h2",{id:"printf-argument-types"},(0,a.kt)("inlineCode",{parentName:"h2"},"printf()")," Argument Types"),(0,a.kt)("p",null,"Detect mismatches between the Java ",(0,a.kt)("inlineCode",{parentName:"p"},"printf")," format strings and the argument types For example, this checker will warn about the type error in ",(0,a.kt)("inlineCode",{parentName:"p"},'printf("Hello %d", "world")')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-printf-args"},"Visit here for more information.")),(0,a.kt)("h2",{id:"pulse"},"Pulse"),(0,a.kt)("p",null,"Memory and lifetime analysis."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-pulse"},"Visit here for more information.")),(0,a.kt)("h2",{id:"purity"},"Purity"),(0,a.kt)("p",null,'Detects pure (side-effect-free) functions. A different implementation of "impurity".'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-purity"},"Visit here for more information.")),(0,a.kt)("h2",{id:"quandary"},"Quandary"),(0,a.kt)("p",null,'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-quandary"},"Visit here for more information.")),(0,a.kt)("h2",{id:"racerd"},"RacerD"),(0,a.kt)("p",null,"Thread safety analysis."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-racerd"},"Visit here for more information.")),(0,a.kt)("h2",{id:"resource-leak-lab-exercise"},"Resource Leak Lab Exercise"),(0,a.kt)("p",null,'Toy checker for the "resource leak" write-your-own-checker exercise.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-resource-leak-lab"},"Visit here for more information.")),(0,a.kt)("h2",{id:"resource-leak-checker-for-net"},"Resource Leak checker for .NET"),(0,a.kt)("p",null,'"resource leak" checker for .NET.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-dotnet-resource-leak"},"Visit here for more information.")),(0,a.kt)("h2",{id:"scope-leakage"},"Scope Leakage"),(0,a.kt)("p",null,'The Java/Kotlin checker takes into account a set of "scope" annotations and a must-not-hold relation over the scopes. The checker raises an alarm if there exists a field access path from object A to object B, with respective scopes SA and SB, such that must-not-hold(SA, SB).'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-scope-leakage"},"Visit here for more information.")),(0,a.kt)("h2",{id:"static-initialization-order-fiasco"},"Static Initialization Order Fiasco"),(0,a.kt)("p",null,"Catches Static Initialization Order Fiascos in C++, that can lead to subtle, compiler-version-dependent errors."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-siof"},"Visit here for more information.")),(0,a.kt)("h2",{id:"simple-lineage"},"Simple Lineage"),(0,a.kt)("p",null,"Computes a dataflow graph"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-simple-lineage"},"Visit here for more information.")),(0,a.kt)("h2",{id:"self-in-block"},"Self in Block"),(0,a.kt)("p",null,"An Objective-C-specific analysis to detect when a block captures ",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-self-in-block"},"Visit here for more information.")),(0,a.kt)("h2",{id:"starvation"},"Starvation"),(0,a.kt)("p",null,"Detect various kinds of situations when no progress is being made because of concurrency errors."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-starvation"},"Visit here for more information.")),(0,a.kt)("h2",{id:"topl"},"Topl"),(0,a.kt)("p",null,"Detect errors based on user-provided state machines describing temporal properties over multiple objects."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-topl"},"Visit here for more information.")),(0,a.kt)("h2",{id:"uninitialized-value"},"Uninitialized Value"),(0,a.kt)("p",null,"Warns when values are used before having been initialized."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Uninitialized value checking has moved to Pulse."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/checker-uninit"},"Visit here for more information.")))}d.isMDXComponent=!0}}]);