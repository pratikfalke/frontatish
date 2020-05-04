(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),c=(n(0),n(140)),b={id:"checkbox",title:"CheckBox",sidebar_label:"CheckBox"},o={id:"checkbox",title:"CheckBox",description:"Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)",source:"@site/docs/checkbox.md",permalink:"/super/docs/checkbox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/checkbox.md",sidebar_label:"CheckBox",sidebar:"someSidebar",previous:{title:"Button",permalink:"/super/docs/button"},next:{title:"NumPad",permalink:"/super/docs/numpad"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>checked</code>",id:"checked",children:[]},{value:"<code>isDark</code>",id:"isdark",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>containerStyles</code>",id:"containerstyles",children:[]}]}],l={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-vector-icons"}),"react-native-vector-icons")),Object(c.b)("div",{className:"image-horizontal-preview"},Object(c.b)("figure",null,Object(c.b)("img",{src:"/super/img/checkbox.png",alt:"checkbox"}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// react base imports\n\nimport { Checkbox } from 'growwsuper/components';\n\n// normal checkbox\n  <CheckBox\n    isDark={true}\n    checked={true}\n    onPress={() => void}\n    containerStyle={{ marginRight: 20 }}\n  />\n\n// disabled checkbox\n  <CheckBox\n    checked={checked}\n    disable={true}\n    isDark={isDark}\n    onPress={() => void}\n    containerStyle={{ marginRight: 20 }}\n  />\n\n")),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"onpress"},Object(c.b)("inlineCode",{parentName:"h3"},"onPress")),Object(c.b)("p",null,"Callback function that needed to be passed which updates the state of checkbox,to hanle both checked and unchecked state of a checkbox."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"None",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Yes ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"checked"},Object(c.b)("inlineCode",{parentName:"h3"},"checked")),Object(c.b)("p",null,"checked will be a state variable which hold the state of the checkbox,on which checkbox will decide when to show check icon and when to not"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isdark"},Object(c.b)("inlineCode",{parentName:"h3"},"isDark")),Object(c.b)("p",null,"This flags helps us to handle colors for dark mode changes in the component,if the parent component support theming then this will be useful to handle color visibilty in the dark mode as well.(",Object(c.b)("em",{parentName:"p"},"we might update this attribute to something else to handle theme in a better way"),")"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"disabled"},Object(c.b)("inlineCode",{parentName:"h3"},"disabled")),Object(c.b)("p",null,"disabled make sure if its true then user won't be able to click it and the onPress would not get called"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"false ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(c.b)("img",{width:"500"}))))),Object(c.b)("h3",{id:"containerstyles"},Object(c.b)("inlineCode",{parentName:"h3"},"containerStyles")),Object(c.b)("p",null,"A react native style object which gives flexibility to alter the styles of checkobox container"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"ViewStyle ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"none ",Object(c.b)("img",{width:"500"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"No ",Object(c.b)("img",{width:"500"}))))))}d.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,O=p["".concat(b,".").concat(h)]||p[h]||s[h]||c;return n?r.a.createElement(O,o({ref:t},l,{components:n})):r.a.createElement(O,o({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);