if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"114dfb5a3f53aa8fca17b40ac7ee3da6"},{url:"/_next/static/Pzk2rIKo1VspYAtGb2b3a/_buildManifest.js",revision:"ed8a39873587a05331215998ad0b0f4e"},{url:"/_next/static/Pzk2rIKo1VspYAtGb2b3a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/260-0b5af008cb098413.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/406-44194817a0285557.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/69-7cd1d8a9ad200993.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/703-2a40cf99ead21e00.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/862-2d167bd9c2f0e664.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/_not-found-00c249f79f4c310f.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/layout-c80163ae00d77557.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/page-992539e00e3d3bc7.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/doctor/login/page-bbe118ee1976e304.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/doctor/register/page-7bd45885d8be433d.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/editor/page-dd513673deabb025.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/home/page-5ad4dcf026f05283.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/otp/page-ccb91e0cca78e3c2.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/patient/login/page-d835de19277258a7.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/app/pages/patient/register/page-0b3afcea99349de9.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/fd9d1056-f1685d5f614ff1d3.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/main-9ebfe6ee09f07a46.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/main-app-6d472455b72b29f9.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6dc3563c862d536d.js",revision:"Pzk2rIKo1VspYAtGb2b3a"},{url:"/_next/static/css/dbbe2da1bd03d531.css",revision:"dbbe2da1bd03d531"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/check_icon.svg",revision:"856a55bd86d6b100a8acd7de2d1c3692"},{url:"/dark_icon.svg",revision:"de342083afd9ae27a6ef66955293e122"},{url:"/down_icon.svg",revision:"acb4f2c521d3a68b3511ec8cd4ec48cb"},{url:"/error_icon.svg",revision:"bbee2f18dbef1c1c92ce657ff4ce88fd"},{url:"/icon-192x192.png",revision:"9654770f17e069435b792b844fc23468"},{url:"/icon-256x256.png",revision:"b37e8548732616fd361ef53828812a92"},{url:"/icon-384x384.png",revision:"820c6802af62826854f1027e1ada2ef5"},{url:"/icon-512x512.png",revision:"547fed7a198e995c5b7488bfda62c661"},{url:"/light_icon.svg",revision:"d97c7b1e54768edf2c3c74f8746031c5"},{url:"/manifest.json",revision:"46ac46c121224bf76a63bdb0bc7f4edf"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pass_close_icon.svg",revision:"181c4073e6772915c0672988e51ea51e"},{url:"/pass_open_icon.svg",revision:"5dea0098adbca39e75e65ab3f95a847e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
