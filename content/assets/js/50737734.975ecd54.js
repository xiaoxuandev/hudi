"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[21373],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9230:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(92303);function o(e){let{children:t,url:o}=e;return(0,a.A)()&&(n.g.window.location.href=o),r.createElement("span",null,t,"or click ",r.createElement("a",{href:o},"here"))}},72032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(9230);const i={title:"Understanding Apache Hudi's Consistency Model Part 2",author:"Jack Vanlightly",category:"blog",image:"/assets/images/blog/2024-04-24-understanding-apache-hudi-consistency-model-part-2.png",tags:["blog","consistency","concurrency control","multi writer","monotonic timestamp","timestamp collision","jack-vanlightly"]},l=void 0,c={permalink:"/blog/2024/04/24/understanding-apache-hudi-consistency-model-part-2",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-04-24-understanding-apache-hudi-consistency-model-part-2.mdx",source:"@site/blog/2024-04-24-understanding-apache-hudi-consistency-model-part-2.mdx",title:"Understanding Apache Hudi's Consistency Model Part 2",description:"Redirecting... please wait!!",date:"2024-04-24T00:00:00.000Z",formattedDate:"April 24, 2024",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"consistency",permalink:"/blog/tags/consistency"},{label:"concurrency control",permalink:"/blog/tags/concurrency-control"},{label:"multi writer",permalink:"/blog/tags/multi-writer"},{label:"monotonic timestamp",permalink:"/blog/tags/monotonic-timestamp"},{label:"timestamp collision",permalink:"/blog/tags/timestamp-collision"},{label:"jack-vanlightly",permalink:"/blog/tags/jack-vanlightly"}],readingTime:.045,truncated:!1,authors:[{name:"Jack Vanlightly"}],prevItem:{title:"Understanding Apache Hudi's Consistency Model Part 1",permalink:"/blog/2024/04/24/understanding-apache-hudi-consistency-model-part-1"},nextItem:{title:"Understanding Apache Hudi's Consistency Model Part 3",permalink:"/blog/2024/04/24/understanding-apache-hudi-consistency-model-part-3"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{url:"https://jack-vanlightly.com/analyses/2024/4/24/understanding-apache-hudi-consistency-model-part-2",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);