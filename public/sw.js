if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),o={module:{uri:n},exports:r,require:t};a[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"442b801b8cc792264953db123483c6e3"},{url:"/_next/static/FOaLkLrDXHjIazTxJlXMF/_buildManifest.js",revision:"f55bb73b0950774ddc0f0e6653a9f7de"},{url:"/_next/static/FOaLkLrDXHjIazTxJlXMF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/134-aac103fc0fbe607d.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/260-f17a54c756a783b7.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/306-21ea512b18def36d.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/604-befdff29ed02cd7c.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/684-7e0345a0a70282df.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/69-8bfc0fa632f331b8.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/703-522b283c8ec1c6d7.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/792-ef7aea902457ae0d.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/798-47cec7e33dabe218.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/860-0f5d1f3674612dff.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/_not-found-a87e7bca0457dc53.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/layout-8da9620195168415.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/page-a69360cabde41329.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/doctor/login/page-dec6c61c592a1d15.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/doctor/main/page-18e70f52d5e666a9.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/doctor/otp/page-d4943a466961ec3d.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/doctor/profile/page-a67e9f4f7dbcd8de.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/doctor/register/page-e26d1bf5dc505e37.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/home/page-95786ec7cdfd501d.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/main/page-0b2854084c8671b2.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/medicine/page-4d02a4ab451625b5.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/choose-account/page-3d7bd03af060595c.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/login/page-823c243fdeaed1d2.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/main/page-43a76ca0832c9ac9.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/otp/page-35050a0564d20253.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/profile/page-2b89d945fe2203d9.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/patient/register/page-1bf55c519dc11bf7.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/scan/page-67b748c516e6524a.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/app/pages/upload/page-2f15773dec78fe25.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/fd9d1056-1b7bef29188f195a.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/main-app-b7828b1d1a600ace.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/main-c9009691a06de3b6.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e424a6e6422a2742.js",revision:"FOaLkLrDXHjIazTxJlXMF"},{url:"/_next/static/css/8cf6941748c4a0bf.css",revision:"8cf6941748c4a0bf"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/add.png",revision:"ceb837d0bf2aa1c21ec546f0f946c4aa"},{url:"/add_document.png",revision:"c901dd1cd2f2f951e967bea01266cfe6"},{url:"/arrow.png",revision:"90ca79e1c68f0a46e11df4aa98c87ce9"},{url:"/back.png",revision:"92b055c4f9933f745d3649f6458613e3"},{url:"/bold_icon.svg",revision:"c4477bd5b158e0d2c308d7397c7b7981"},{url:"/camera.png",revision:"db118494fd296c68465e8fbb3b680fea"},{url:"/check_icon.svg",revision:"856a55bd86d6b100a8acd7de2d1c3692"},{url:"/close.svg",revision:"db91ed72366dbb63508429543cf5d18d"},{url:"/compress.png",revision:"432cb11dce282254d404f729047de90e"},{url:"/curly_arrow.png",revision:"50ef0096170d371557dd6d836662a1c8"},{url:"/dark_icon.svg",revision:"de342083afd9ae27a6ef66955293e122"},{url:"/decompress.png",revision:"c0db6f16bb9ab3cf8c60c2de5e10fd17"},{url:"/doctors.svg",revision:"a139b5777d156365c5c560ccc3943212"},{url:"/document.png",revision:"62ebf82b2a586c1716852fdaea9468a0"},{url:"/down_icon.svg",revision:"acb4f2c521d3a68b3511ec8cd4ec48cb"},{url:"/editor.svg",revision:"dbf20338bf3a35f7e6f5ca41e5663c70"},{url:"/error_icon.svg",revision:"bbee2f18dbef1c1c92ce657ff4ce88fd"},{url:"/expand.png",revision:"9f9b6c16e9a92ea54ba8c8e47e064151"},{url:"/ham_menu.svg",revision:"feb8d6c8428bc4c3cf6c25c1edc8c0f8"},{url:"/icon-192x192.png",revision:"9654770f17e069435b792b844fc23468"},{url:"/icon-256x256.png",revision:"b37e8548732616fd361ef53828812a92"},{url:"/icon-384x384.png",revision:"820c6802af62826854f1027e1ada2ef5"},{url:"/icon-512x512.png",revision:"547fed7a198e995c5b7488bfda62c661"},{url:"/image.png",revision:"6c693496f58112a224c87aa0abcf2da3"},{url:"/italic_icon.svg",revision:"32cecdeee4514e94e36e11c9a9c0aec1"},{url:"/justify_both_icon.svg",revision:"d9cab3716935aff87f93d82d26fed2dd"},{url:"/justify_center_icon.svg",revision:"7c84af2742561399adbb4a1580238972"},{url:"/justify_full_icon.svg",revision:"1d5e351ed60fa4e1269e452fab101c1d"},{url:"/light_icon.svg",revision:"d97c7b1e54768edf2c3c74f8746031c5"},{url:"/link.svg",revision:"8e60b487cc35db35752852db2272ab9a"},{url:"/main_bg.jpg",revision:"213035bc116cb1e4c9fbf758ec455759"},{url:"/main_bg_2 - Copy.jpg",revision:"98a99461ed658199b47a07be791fbfd7"},{url:"/main_bg_2.jpg",revision:"98a99461ed658199b47a07be791fbfd7"},{url:"/manifest.json",revision:"46ac46c121224bf76a63bdb0bc7f4edf"},{url:"/medicines.svg",revision:"24ff521cc29a9301002038ba0cb3adb3"},{url:"/menu.png",revision:"30deb53b277c1fbc0c3c8589dd83f8c6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pass_close_icon.svg",revision:"181c4073e6772915c0672988e51ea51e"},{url:"/pass_open_icon.svg",revision:"5dea0098adbca39e75e65ab3f95a847e"},{url:"/patients.svg",revision:"76531c90197895850d0fe25c5e3ecfb8"},{url:"/prescriptions.svg",revision:"4705d536192b0081cd97e94e851feedb"},{url:"/temp_prescription.png",revision:"7adc59885fa1bf5723e4866513fb60b9"},{url:"/underline_icon.svg",revision:"c13d2f33b11011ad3fee646a33e0bd02"},{url:"/upload.png",revision:"e52f4237ed93e8b9c3550df23618fc51"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
