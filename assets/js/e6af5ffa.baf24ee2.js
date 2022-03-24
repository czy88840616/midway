"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1311],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?l.createElement(k,a(a({ref:t},c),{},{components:n})):l.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var l=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],p={title:"\u90e8\u7f72"},o=void 0,u={unversionedId:"hooks/deploy",id:"hooks/deploy",title:"\u90e8\u7f72",description:"Midway Hooks \u652f\u6301 Api Server \u4e0e\u4e00\u4f53\u5316\u4e24\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/hooks/deploy.md",sourceDirName:"hooks",slug:"/hooks/deploy",permalink:"/docs/hooks/deploy",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/deploy.md",tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72"},sidebar:"hooks",previous:{title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef",permalink:"/docs/hooks/client"}},c=[{value:"Api Server \u90e8\u7f72",id:"api-server-\u90e8\u7f72",children:[],level:2},{value:"\u4e00\u4f53\u5316\u90e8\u7f72",id:"\u4e00\u4f53\u5316\u90e8\u7f72",children:[{value:"\u524d\u540e\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0a",id:"\u524d\u540e\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0a",children:[],level:3}],level:2},{value:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0c\u540e\u7aef\u6258\u7ba1 HTML &amp; \u63d0\u4f9b\u63a5\u53e3",id:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3-cdn\u540e\u7aef\u6258\u7ba1-html--\u63d0\u4f9b\u63a5\u53e3",children:[{value:"\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u516c\u5171\u57df\u540d",id:"\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u516c\u5171\u57df\u540d",children:[],level:4},{value:"\u90e8\u7f72\u9759\u6001\u6587\u4ef6",id:"\u90e8\u7f72\u9759\u6001\u6587\u4ef6",children:[],level:4},{value:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0cHTML \u7531\u5355\u72ec\u7684\u670d\u52a1\u6258\u7ba1\uff08CDN / Nginx / etc.\uff09\uff0c\u540e\u7aef\u4ec5\u63d0\u4f9b\u63a5\u53e3",id:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3-cdnhtml-\u7531\u5355\u72ec\u7684\u670d\u52a1\u6258\u7ba1cdn--nginx--etc\u540e\u7aef\u4ec5\u63d0\u4f9b\u63a5\u53e3",children:[{value:"\u5168\u6808\u5957\u4ef6\u90e8\u7f72\u6307\u5357",id:"\u5168\u6808\u5957\u4ef6\u90e8\u7f72\u6307\u5357",children:[],level:4}],level:3}],level:2}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Midway Hooks \u652f\u6301 Api Server \u4e0e\u4e00\u4f53\u5316\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"api-server-\u90e8\u7f72"},"Api Server \u90e8\u7f72"),(0,i.kt)("p",null,"Api Server \u90e8\u7f72\u53ef\u4ee5\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://midwayjs.org/docs/deployment"},"\u542f\u52a8\u548c\u90e8\u7f72"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5355\u6587\u4ef6\u90e8\u7f72\uff0c\u53ef\u4ee5\u53c2\u8003\u793a\u4f8b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/hooks/blob/main/examples/api-bundle/readme.md"},"hooks-api-bundle-starter")),(0,i.kt)("h2",{id:"\u4e00\u4f53\u5316\u90e8\u7f72"},"\u4e00\u4f53\u5316\u90e8\u7f72"),(0,i.kt)("p",null,"\u4e00\u4f53\u5316\u7684\u6784\u5efa\u4ea7\u7269\u4e2d\u5305\u542b\u524d\u540e\u7aef\uff0c\u6839\u636e\u90e8\u7f72\u7684\u96be\u6613\u7a0b\u5ea6\uff0c\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0a\uff0c\u7531\u540e\u7aef\u6258\u7ba1 HTML & \u9759\u6001\u8d44\u6e90 & \u63d0\u4f9b\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0c\u540e\u7aef\u6258\u7ba1 HTML & \u63d0\u4f9b\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0cHTML \u7531\u5355\u72ec\u7684\u670d\u52a1\u6258\u7ba1\uff08CDN / Nginx / etc.\uff09\uff0c\u540e\u7aef\u4ec5\u63d0\u4f9b\u63a5\u53e3")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u5c06\u4ecb\u7ecd\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f\u5982\u4f55\u843d\u5730\uff0c\u4f18\u52bf\u53ca\u5b58\u5728\u7684\u95ee\u9898\u3002"),(0,i.kt)("h3",{id:"\u524d\u540e\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0a"},"\u524d\u540e\u7aef\u90e8\u7f72\u5728\u540c\u4e00\u670d\u52a1\u5668\u4e0a"),(0,i.kt)("p",null,"\u8fd9\u662f\u5168\u6808\u5957\u4ef6\u9ed8\u8ba4\u7684\u90e8\u7f72\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u4f18\u52bf\uff1a\u6700\u7b80\u5355\uff0c\u5c06\u6253\u5305\u540e\u7684\u4ea7\u7269\u76f4\u63a5\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\uff0c\u542f\u52a8\u540e\u5373\u53ef\u63d0\u4f9b\u670d\u52a1\n\u52a3\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u670d\u52a1\u9700\u8981\u5904\u7406 & \u53d1\u9001\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u4e0d\u5728 CDN\uff0c\u4e0d\u540c\u5730\u57df\u7684\u8bbf\u95ee\u901f\u5ea6\u4e0d\u7a33\u5b9a")),(0,i.kt)("p",null,"\u6574\u4f53\u90e8\u7f72\u67b6\u6784\u5982\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01GYtN9n1T2tbEXWOwf_!!6000000002325-2-tps-2064-648.png",alt:null})),(0,i.kt)("h2",{id:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3-cdn\u540e\u7aef\u6258\u7ba1-html--\u63d0\u4f9b\u63a5\u53e3"},"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0c\u540e\u7aef\u6258\u7ba1 HTML & \u63d0\u4f9b\u63a5\u53e3"),(0,i.kt)("p",null,"\u8fd9\u4e5f\u662f\u5f53\u524d\u524d\u7aef\u4e3b\u6d41\u7684\u90e8\u7f72\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u4f18\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u7531 CDN \u6258\u7ba1\uff0c\u4fdd\u8bc1\u7528\u6237\u8bbf\u95ee\u901f\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u6258\u7ba1 HTML\uff0c\u786e\u4fdd\u8fd4\u56de\u7684 HTML \u6587\u4ef6\u662f\u6700\u65b0\u7684")),(0,i.kt)("p",null,"\u52a3\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u4ecd\u9700\u8981\u6258\u7ba1 HTML\uff0c\u4ecd\u9700\u8981\u5904\u7406 & \u53d1\u9001\u6587\u4ef6\uff0c\u4e14\u5982\u679c\u670d\u52a1\u5b95\u673a\u5219\u9875\u9762\u65e0\u6cd5\u8bbf\u95ee")),(0,i.kt)("p",null,"\u6574\u4f53\u8bbf\u95ee\u67b6\u6784\u5982\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01ue3LJg1HeernvfxgQ_!!6000000000783-55-tps-267-367.svg",alt:null})),(0,i.kt)("h4",{id:"\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u516c\u5171\u57df\u540d"},"\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u516c\u5171\u57df\u540d"),(0,i.kt)("p",null,"\u5728\u5168\u6808\u5957\u4ef6\u9879\u76ee\u4e2d\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"midway.config.ts")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"vite.base")," \u9009\u9879\uff0c\u6765\u6307\u5b9a\u9759\u6001\u8d44\u6e90\u7684\u516c\u5171\u57df\u540d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import react from '@vitejs/plugin-react';\nimport { defineConfig } from '@midwayjs/hooks-kit';\n\nexport default defineConfig({\n  vite: {\n    plugins: [react()],\n    base: 'https://cdn.example.com',\n  },\n});\n")),(0,i.kt)("p",null,"\u6b64\u65f6\u8bbf\u95ee\u9875\u9762\u65f6\uff0c\u9759\u6001\u8d44\u6e90\u4f1a\u6307\u5411 CDN \u7684\u5730\u5740\u3002"),(0,i.kt)("h4",{id:"\u90e8\u7f72\u9759\u6001\u6587\u4ef6"},"\u90e8\u7f72\u9759\u6001\u6587\u4ef6"),(0,i.kt)("p",null,"\u5168\u6808\u5957\u4ef6\u9879\u76ee\u4e2d\uff0c\u9ed8\u8ba4\u7684\u6784\u5efa\u76ee\u5f55\u4e3a dist\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/_clients")," \u4e3a\u524d\u7aef\u9759\u6001\u8d44\u6e90\u76ee\u5f55\u3002"),(0,i.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dist\n\u251c\u2500\u2500 _client\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.85bb4f15.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.b779b14d.css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 vendor.346bc0da.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 logo.png\n\u2502\xa0\xa0 \u2514\u2500\u2500 manifest.json\n\u251c\u2500\u2500 _serve\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 book.js\n\u251c\u2500\u2500 configuration.js\n\u251c\u2500\u2500 date.js\n\u251c\u2500\u2500 midway.config.js\n\u2514\u2500\u2500 star.js\n")),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u81ea\u884c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"_client")," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4e0a\u4f20\u81f3 CDN\uff0c\u800c\u5728\u90e8\u7f72\u540e\u7aef\u65f6\uff0c\u4ecd\u7136\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"p"},"_client/index.html")," \u6587\u4ef6\uff0c\u4ee5\u4f9b\u540e\u7aef\u6258\u7ba1\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3-cdnhtml-\u7531\u5355\u72ec\u7684\u670d\u52a1\u6258\u7ba1cdn--nginx--etc\u540e\u7aef\u4ec5\u63d0\u4f9b\u63a5\u53e3"},"\u9759\u6001\u8d44\u6e90\u90e8\u7f72\u81f3 CDN\uff0cHTML \u7531\u5355\u72ec\u7684\u670d\u52a1\u6258\u7ba1\uff08CDN / Nginx / etc.\uff09\uff0c\u540e\u7aef\u4ec5\u63d0\u4f9b\u63a5\u53e3"),(0,i.kt)("p",null,"\u8fd9\u4e5f\u662f\u524d\u7aef\u76ee\u524d\u4e3b\u6d41\u7684\u90e8\u7f72\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u4f18\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u4ec5\u63d0\u4f9b API \u63a5\u53e3\uff0c\u4e0d\u9700\u8981\u5904\u7406 & \u53d1\u9001\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\u7531 CDN \u6258\u7ba1\uff0c\u4fdd\u8bc1\u7528\u6237\u8bbf\u95ee\u901f\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"HTML \u7531\u5355\u72ec\u670d\u52a1\u6258\u7ba1\uff0c\u4fdd\u8bc1\u8bbf\u95ee\u662f\u9875\u9762\u662f\u6700\u65b0\u7248\u672c\uff0c\u540e\u7aef\u670d\u52a1\u5b95\u673a\u4e0d\u5f71\u54cd\u9875\u9762\u5c55\u793a"),(0,i.kt)("li",{parentName:"ul"},"\u67b6\u6784\u53ef\u62d3\u5c55\uff0c\u53ef\u589e\u52a0\u66f4\u591a\u8282\u70b9\u5e94\u5bf9\u610f\u5916\u60c5\u51b5\uff0c\u5982\u5728\u540e\u7aef\u524d\u7f6e\u589e\u52a0\u7f51\u5173\u8282\u70b9\uff0c\u5728\u540e\u7aef\u670d\u52a1\u5b95\u673a\u65f6\u5207\u6362\u81f3\u5907\u7528\u670d\u52a1\u7b49")),(0,i.kt)("p",null,"\u52a3\u52bf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u590d\u6742\uff0c\u5bf9 CI / CD \u6d41\u6c34\u7ebf\u53ca\u57fa\u5efa\u8981\u6c42\u9ad8")),(0,i.kt)("p",null,"\u6574\u4f53\u8bbf\u95ee\u67b6\u6784\u5982\u56fe\u6240\u793a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01i78JiC1yinvfLq84b_!!6000000006613-55-tps-323-367.svg",alt:null})),(0,i.kt)("p",null,"\u90e8\u7f72\u5de5\u4f5c\u6d41\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN018oAQf71h1QxHtRHYY_!!6000000004217-2-tps-1728-1680.png",alt:null})),(0,i.kt)("h4",{id:"\u5168\u6808\u5957\u4ef6\u90e8\u7f72\u6307\u5357"},"\u5168\u6808\u5957\u4ef6\u90e8\u7f72\u6307\u5357"),(0,i.kt)("p",null,"\u9700\u8981\u9ed8\u8ba4\u7981\u7528\u5168\u6808\u5957\u4ef6\u7684 index.html \u6258\u7ba1\u80fd\u529b\uff0c\u6b64\u65f6\u5168\u6808\u5957\u4ef6\u5728\u6784\u5efa\u65f6\u4e0d\u4f1a\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," \u7684\u6258\u7ba1\u51fd\u6570\uff0c\u4ec5\u63d0\u4f9b Api \u670d\u52a1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@midwayjs/hooks-kit';\n\nexport default defineConfig({\n  static: false,\n});\n")),(0,i.kt)("p",null,"\u5728\u4f60\u7684 CI / CD \u5de5\u4f5c\u6d41\u4e2d\uff0c\u9700\u8981\u9488\u5bf9\u4ee5\u4e0b\u6587\u4ef6\u505a\u5355\u72ec\u5904\u7406\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"index.html\uff1a\u90e8\u7f72\u81f3\u5355\u72ec\u7684\u6258\u7ba1\u670d\u52a1\uff0c\u5982 Nginx / CDN \u7b49\uff0c\u8be5\u670d\u52a1\u53ea\u590d\u6742\u9759\u6001\u9875\u9762\u6e32\u67d3"),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90\uff1a\u90e8\u7f72\u81f3 CDN\uff0c\u5982 Aliyun OSS \u7b49\uff0c\u8be5\u670d\u52a1\u53ef\u4ee5\u63d0\u4f9b\u9759\u6001\u8d44\u6e90\u7684 CDN \u52a0\u901f"),(0,i.kt)("li",{parentName:"ul"},"Api \u670d\u52a1\uff1a\u90e8\u7f72\u81f3\u4f60\u7684\u670d\u52a1\u5668\u4e2d")),(0,i.kt)("p",null,"\u6700\u7ec8\u7684\u57df\u540d\u53ef\u80fd\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"index.html: ",(0,i.kt)("a",{parentName:"li",href:"https://example.com"},"https://example.com")),(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001\u8d44\u6e90: ",(0,i.kt)("a",{parentName:"li",href:"https://cdn.example.com"},"https://cdn.example.com")),(0,i.kt)("li",{parentName:"ul"},"Api \u670d\u52a1: ",(0,i.kt)("a",{parentName:"li",href:"https://api.example.com"},"https://api.example.com")," \u6216\u8005 ",(0,i.kt)("a",{parentName:"li",href:"https://example.com/api%EF%BC%88%E9%9C%80%E8%A6%81%E8%AE%BE%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%EF%BC%89"},"https://example.com/api\uff08\u9700\u8981\u8bbe\u7f6e\u53cd\u5411\u4ee3\u7406\uff09"))))}s.isMDXComponent=!0}}]);