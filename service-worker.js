if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise((async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},c=(c,s)=>{Promise.all(c.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(c)};self.define=(c,i,n)=>{s[c]||(s[c]=Promise.resolve().then((()=>{let s={};const r={uri:location.origin+c.slice(1)};return Promise.all(i.map((c=>{switch(c){case"exports":return s;case"module":return r;default:return e(c)}}))).then((e=>{const c=n(...e);return s.default||(s.default=c),s}))})))}}define("./service-worker.js",["./workbox-2b0e2b86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"4f1c0d690b5c08414131e73faf48ee08"},{url:"favicon.ico",revision:"38c0d0cbc5bec2cc882843e24ba0c1dc"},{url:"favicon.png",revision:"43051252d1635cc655970cadae18c8b9"},{url:"index.html",revision:"147d38c86dbc94808e97c5bfc2824168"},{url:"js/app.da5e3d7d9cecce687bd8.js",revision:null},{url:"js/vendor.56d5ba113561fbca8080.js",revision:null},{url:"manifest.json",revision:"c90ebf13c749d81f72dd13cd919e3033"},{url:"static/fontawesome-webfont.1e59d2330b4c6deb84b340635ed36249.ttf",revision:null},{url:"static/fontawesome-webfont.20fd1704ea223900efa9fd4e869efb08.woff2",revision:null},{url:"static/fontawesome-webfont.8b43027f47b20503057dfbbaa9401fef.eot",revision:null},{url:"static/fontawesome-webfont.c1e38fd9e0e74ba58f7a2b77ef29fdd3.svg",revision:null},{url:"static/fontawesome-webfont.f691f37e57f04c152e2315ab7dbad881.woff",revision:null},{url:"static/src/static/icons/icon-128x128.png",revision:"07fd0ba602ffacbcbdd7ba548e5b7373"},{url:"static/src/static/icons/icon-144x144.png",revision:"afe62508e332c659c0c027f1da9c8458"},{url:"static/src/static/icons/icon-152x152.png",revision:"f9302a115641f6efd5c64ac1c2f6bb4c"},{url:"static/src/static/icons/icon-192x192.png",revision:"29ed13977e2676a4760088aa272b5f61"},{url:"static/src/static/icons/icon-384x384.png",revision:"fabef66244d8d77e6fa02db32ff896fc"},{url:"static/src/static/icons/icon-512x512.png",revision:"c2dbda02983e1b76eab7f01a14a21c98"},{url:"static/src/static/icons/icon-72x72.png",revision:"8de3cff77a671adfe9d6727870a2a44e"},{url:"static/src/static/icons/icon-96x96.png",revision:"00fd2ba8e904ab7a4f33ae760e173138"},{url:"stylesheets/app.7f1dd889a73db60e9e0e.css",revision:null},{url:"stylesheets/vendor.c1032a2f472a7fe2ba55.css",revision:null}],{}),e.registerRoute(/https:\/\/ngzk-blog-archieve-resources.netlify.com\//,new e.CacheFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:1209600,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
