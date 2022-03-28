"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8373],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8180:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],i={title:"\u6587\u4ef6\u4e0a\u4f20"},s=void 0,p={unversionedId:"hooks/upload",id:"hooks/upload",title:"\u6587\u4ef6\u4e0a\u4f20",description:"Midway Hooks \u63d0\u4f9b\u4e86 @midwayjs/hooks-upload \u5e76\u914d\u5408 @midwayjs/upload \u6765\u5b9e\u73b0\u7eaf\u51fd\u6570 + \u4e00\u4f53\u5316\u9879\u76ee\u4e2d\u7684\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u3002",source:"@site/docs/hooks/upload.md",sourceDirName:"hooks",slug:"/hooks/upload",permalink:"/docs/hooks/upload",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/upload.md",tags:[],version:"current",frontMatter:{title:"\u6587\u4ef6\u4e0a\u4f20"},sidebar:"hooks",previous:{title:"\u9759\u6001\u7c7b\u578b\u5b89\u5168 + \u8fd0\u884c\u65f6\u5b89\u5168",permalink:"/docs/hooks/safe"},next:{title:"\u5168\u6808\u5957\u4ef6",permalink:"/docs/hooks/fullstack"}},u=[{value:"\u8d77\u6b65",id:"\u8d77\u6b65",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u542f\u7528 upload \u7ec4\u4ef6",id:"\u542f\u7528-upload-\u7ec4\u4ef6",children:[],level:3},{value:"\u521b\u5efa\u63a5\u53e3",id:"\u521b\u5efa\u63a5\u53e3",children:[],level:3}],level:2},{value:"Api",id:"api",children:[{value:"Upload(path?: string)",id:"uploadpath-string",children:[],level:3},{value:"useFiles()",id:"usefiles",children:[],level:3},{value:"useFields()",id:"usefields",children:[],level:3}],level:2}],d={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Midway Hooks \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-upload")," \u5e76\u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u6765\u5b9e\u73b0\u7eaf\u51fd\u6570 + \u4e00\u4f53\u5316\u9879\u76ee\u4e2d\u7684\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u8d77\u6b65"},"\u8d77\u6b65"),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @midwayjs/upload @midwayjs/hooks-upload\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u542f\u7528-upload-\u7ec4\u4ef6"},"\u542f\u7528 upload \u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5728\u540e\u7aef\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u7ec4\u4ef6\uff0c\u5177\u4f53\u652f\u6301\u7684\u914d\u7f6e\u9879\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensions/upload"},"\u6587\u4ef6\u4e0a\u4f20")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import { createConfiguration, hooks } from '@midwayjs/hooks';\nimport * as Koa from '@midwayjs/koa';\n+ import * as upload from '@midwayjs/upload';\n\n/**\n * setup midway server\n */\nexport default createConfiguration({\n  imports: [\n    Koa,\n    hooks(),\n+   upload\n  ],\n  importConfigs: [{ default: { keys: 'session_keys' } }],\n});\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u63a5\u53e3"},"\u521b\u5efa\u63a5\u53e3"),(0,r.kt)("p",null,"\u5728\u540e\u7aef\u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u63a5\u53e3\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Api } from '@midwayjs/hooks';\nimport {\n  Upload,\n  useFiles,\n} from '@midwayjs/hooks-upload';\n\nexport default Api(\n  Upload('/api/upload'),\n  async () => {\n    const files = useFiles();\n    return files;\n  }\n);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e00\u4f53\u5316\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import upload from \'./api/upload\';\n\nfunction Form() {\n  const [file, setFile] =\n    React.useState<FileList>(null);\n\n  const handleSubmit = async (\n    e: React.FormEvent<HTMLFormElement>\n  ) => {\n    e.preventDefault();\n    const files = { images: file };\n    const response = await upload({\n      files,\n    });\n    console.log(response);\n  };\n\n  const handleOnChange = (\n    e: React.ChangeEvent<HTMLInputElement>\n  ) => {\n    console.log(e.target.files);\n    setFile(e.target.files);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <h1>Hooks File Upload</h1>\n      <input\n        multiple\n        type="file"\n        onChange={handleOnChange}\n      />\n      <button type="submit">\n        Upload\n      </button>\n    </form>\n  );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u624b\u52a8\u8c03\u7528\uff08\u901a\u8fc7 FormData \u4e0a\u4f20\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const input =\n  document.getElementById('file');\n\nconst formdata = new FormData();\nformdata.append('file', input.files[0]);\n\nfetch('/api/upload', {\n  method: 'POST',\n  body: formdata,\n})\n  .then((res) => res.json())\n  .then((res) => console.log(res));\n")),(0,r.kt)("h2",{id:"api"},"Api"),(0,r.kt)("h3",{id:"uploadpath-string"},"Upload(path?: string)"),(0,r.kt)("p",null,"\u58f0\u660e\u4e0a\u4f20\u63a5\u53e3\uff0c\u53ef\u4ee5\u6307\u5b9a\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u63a5\u53e3\uff0c\u53ea\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," \u7c7b\u578b\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"usefiles"},"useFiles()"),(0,r.kt)("p",null,"\u5728\u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useFiles()")," \u53ef\u4ee5\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6\u3002\u8fd4\u56de\u503c\u4e3a Object\uff0ckey \u4e3a\u4e0a\u4f20\u65f6\u7684\u5b57\u6bb5\u540d\u3002\u6709\u591a\u4e2a\u6587\u4ef6\u5b57\u6bb5\u540d\u76f8\u540c\u65f6\uff0cValue \u4e3a Array\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// frontend\nawait upload({ pdf });\n\n// backend\nconst files = useFiles();\n{\n  pdf: {\n    filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n    data: '/var/tmp/xxx.pdf',    // mode \u4e3a file \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n    fieldname: 'test1',          // \u8868\u5355 field \u540d\n    mimeType: 'application/pdf', // mime\n  }\n}\n")),(0,r.kt)("h3",{id:"usefields"},"useFields()"),(0,r.kt)("p",null,"\u8fd4\u56de FormData \u4e2d\u975e\u6587\u4ef6\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// frontend\nconst formdata = new FormData();\nformdata.append('name', 'test');\n\npost(formdata);\n\n// backend\nconst fields = useFields();\n// { name: 'test' }\n")))}c.isMDXComponent=!0}}]);