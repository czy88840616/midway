"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8254],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"\u5168\u6808\u5957\u4ef6"},s=void 0,c={unversionedId:"hooks/fullstack",id:"hooks/fullstack",title:"\u5168\u6808\u5957\u4ef6",description:"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 @midwayjs/hooks-kit \u6765\u5feb\u901f\u5f00\u53d1\u5168\u6808\u5e94\u7528\u3002",source:"@site/docs/hooks/fullstack.md",sourceDirName:"hooks",slug:"/hooks/fullstack",permalink:"/en/docs/next/hooks/fullstack",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/hooks/fullstack.md",tags:[],version:"current",frontMatter:{title:"\u5168\u6808\u5957\u4ef6"},sidebar:"hooks",previous:{title:"\u9759\u6001\u7c7b\u578b\u5b89\u5168 + \u8fd0\u884c\u65f6\u5b89\u5168",permalink:"/en/docs/next/hooks/safe"},next:{title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef",permalink:"/en/docs/next/hooks/client"}},u=[{value:"\u547d\u4ee4\u884c\u754c\u9762",id:"\u547d\u4ee4\u884c\u754c\u9762",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," \u6765\u5feb\u901f\u5f00\u53d1\u5168\u6808\u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"\u547d\u4ee4\u884c\u754c\u9762"},"\u547d\u4ee4\u884c\u754c\u9762"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," \u7684\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u5728 npm scripts \u4e2d\u4f7f\u7528 hooks \u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6216\u8005\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"npx hooks")," \u8fd0\u884c\u3002\u4e0b\u9762\u662f\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa\u7684 Midway \u5168\u6808\u9879\u76ee\u4e2d\u9ed8\u8ba4\u7684 npm scripts\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "hooks dev", // \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\n    "start": "hooks start", // \u542f\u52a8\u751f\u4ea7\u670d\u52a1\u5668\uff0c\u4f7f\u7528\u524d\u8bf7\u786e\u4fdd\u5df2\u8fd0\u884c `npm run build`\n    "build": "hooks build" // \u4e3a\u751f\u4ea7\u73af\u5883\u6784\u5efa\u4ea7\u7269\n  }\n}\n')),(0,i.kt)("p",null,"\u5728\u4f7f\u7528\u547d\u4ee4\u884c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u4f20\u5165\u9009\u9879\uff0c\u5177\u4f53\u9009\u9879\u53ef\u4ee5\u901a\u8fc7 --help \u53c2\u8003\u3002"),(0,i.kt)("p",null,"\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"hooks build --help")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage:\n  $ hooks build [root]\n\nOptions:\n  --outDir <dir>  [string] output directory (default: dist)\n  --clean         [boolean] clean output directory before build (default: false)\n  -h, --help      Display this message\n")))}d.isMDXComponent=!0}}]);