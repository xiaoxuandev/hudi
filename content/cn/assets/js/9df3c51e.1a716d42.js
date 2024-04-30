"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[61959],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9230:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(92303);function i(e){let{children:t,url:i}=e;return(0,a.A)()&&(n.g.window.location.href=i),r.createElement("span",null,t,"or click ",r.createElement("a",{href:i},"here"))}},40966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(58168),a=(n(96540),n(15680)),i=n(9230);const l={title:"Hands-On Guide: Reading Data from Hudi Tables Incrementally, Joining with Delta Tables using HudiStreamer and SQL-Based Transformer",author:"Soumil Shah",category:"blog",image:"/assets/images/blog/2024-04-03-hands-on-guide-reading-data-from-hudi-tables-joining-delta.png",tags:["blog","apache hudi","deltastreamer","hudi streamer","delta","sql transformer","linkedin"]},o=void 0,d={permalink:"/cn/blog/2024/04/03/hands-on-guide-reading-data-from-hudi-tables-joining-delta",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-04-03-hands-on-guide-reading-data-from-hudi-tables-joining-delta.mdx",source:"@site/blog/2024-04-03-hands-on-guide-reading-data-from-hudi-tables-joining-delta.mdx",title:"Hands-On Guide: Reading Data from Hudi Tables Incrementally, Joining with Delta Tables using HudiStreamer and SQL-Based Transformer",description:"Redirecting... please wait!!",date:"2024-04-03T00:00:00.000Z",formattedDate:"April 3, 2024",tags:[{label:"blog",permalink:"/cn/blog/tags/blog"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"deltastreamer",permalink:"/cn/blog/tags/deltastreamer"},{label:"hudi streamer",permalink:"/cn/blog/tags/hudi-streamer"},{label:"delta",permalink:"/cn/blog/tags/delta"},{label:"sql transformer",permalink:"/cn/blog/tags/sql-transformer"},{label:"linkedin",permalink:"/cn/blog/tags/linkedin"}],readingTime:.045,truncated:!1,authors:[{name:"Soumil Shah"}],prevItem:{title:"Build Real Time Streaming Pipeline with Kinesis, Apache Flink and Apache Hudi with Hands-on",permalink:"/cn/blog/2024/04/21/build-real-time-streaming-pipeline-with-kinesis-apache-flink-and-apache-hudi"},nextItem:{title:"Record Level Indexing in Apache Hudi Delivers 70% Faster Point Lookups",permalink:"/cn/blog/2024/03/30/record-level-indexing-apache-hudi-delivers-70-faster-point"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(i.A,{url:"https://www.linkedin.com/pulse/hands-on-guide-reading-data-from-hudi-tables-joining-delta-shah-vqivf/?trk=public_post_main-feed-card_feed-article-content",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);