"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44567],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var r=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return t?r.createElement(g,o(o({ref:a},c),{},{components:t})):r.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34056:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const n={title:"Build Universal Data lake with Posgres + Debezium+Kafka+DeltaSTreamer + Minio+HiveMetastore+Trino",authors:[{name:"Soumil Shah"}],category:"blog",image:"/assets/images/video_blogs/2024-04-06-Build-Universal-Data-lake-with-Posgres-+-Debezium+Kafka+DeltaSTreamer-+-Minio+HiveMetastore+Trino.png",navigate:"https://youtu.be/8buCo_JlJFg?feature=shared",tags:["guide","beginner","apache hudi","apache kafka","debezium","postgres","deltastreamer","hudi streamer","trino","minio","apache hive","hive metastore","data lakehouse","lakehouse","universal lakehouse"]},o=void 0,l={permalink:"/cn/videos/2024/04/06/Build-Universal-Data-lake-with-Posgres-+-Debezium+Kafka+DeltaSTreamer-+-Minio+HiveMetastore+Trino",source:"@site/videoBlog/2024-04-06-Build-Universal-Data-lake-with-Posgres-+-Debezium+Kafka+DeltaSTreamer-+-Minio+HiveMetastore+Trino.mdx",title:"Build Universal Data lake with Posgres + Debezium+Kafka+DeltaSTreamer + Minio+HiveMetastore+Trino",description:"",date:"2024-04-06T00:00:00.000Z",formattedDate:"April 6, 2024",tags:[{label:"guide",permalink:"/cn/videos/tags/guide"},{label:"beginner",permalink:"/cn/videos/tags/beginner"},{label:"apache hudi",permalink:"/cn/videos/tags/apache-hudi"},{label:"apache kafka",permalink:"/cn/videos/tags/apache-kafka"},{label:"debezium",permalink:"/cn/videos/tags/debezium"},{label:"postgres",permalink:"/cn/videos/tags/postgres"},{label:"deltastreamer",permalink:"/cn/videos/tags/deltastreamer"},{label:"hudi streamer",permalink:"/cn/videos/tags/hudi-streamer"},{label:"trino",permalink:"/cn/videos/tags/trino"},{label:"minio",permalink:"/cn/videos/tags/minio"},{label:"apache hive",permalink:"/cn/videos/tags/apache-hive"},{label:"hive metastore",permalink:"/cn/videos/tags/hive-metastore"},{label:"data lakehouse",permalink:"/cn/videos/tags/data-lakehouse"},{label:"lakehouse",permalink:"/cn/videos/tags/lakehouse"},{label:"universal lakehouse",permalink:"/cn/videos/tags/universal-lakehouse"}],readingTime:0,truncated:!1,authors:[{name:"Soumil Shah"}],prevItem:{title:"Build Universal Data lake with MySQL + Debezium+Kafka+DeltaSTreamer + Minio+HiveMetastore+Trino",permalink:"/cn/videos/2024/04/10/Build-Universal-Data-lake-with-MySQL-+-Debezium+Kafka+DeltaSTreamer-+-Minio+HiveMetastore+Trino"},nextItem:{title:"Reading Data from Hudi INC & Joining with Delta Tables using HudiStreamer & SQL-Based Transformer",permalink:"/cn/videos/2024/04/03/Reading-Data-from-Hudi-INC-and-Joining-with-Delta-Tables-using-HudiStreamer-and-SQL-Based-Transformer"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u},m="wrapper";function p(e){let{components:a,...t}=e;return(0,i.yg)(m,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);