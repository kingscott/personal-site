(()=>{var e={3349:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),c=n(3727),o=n(5977),s=n(7757),l=n.n(s),i=n(8926),u=n.n(i),m=n(3038),f=n.n(m),d=n(6479),p=n.n(d);const x=function(e){var t=e.data,n=e.currentFolder;return r.createElement("div",{className:"flex flex-row md:flex-col flex-wrap w-4/5 self-center md:self-end items-center md:items-end"},t&&t.length>0&&t.map((function(e,t){var a=e.split("-").join(" ");return r.createElement("div",{key:t,className:"folder-name-container block transform transition-colors duration-200 hover:text-gray-900 ".concat(n===e?"text-gray-900":"text-gray-500"," text-base md:text-right capitalize cursor-pointer mx-3 md:mx-0 md:my-2")},r.createElement(c.rU,{to:"/".concat(e)},a))})))};const h=function(e){return r.createElement("div",{className:"image-container flex justify-center w-5/6 md:w-3/5 h-auto my-6 md:my-12"},r.createElement("img",{src:e.src,alt:""}))};var v=n(4575),g=n.n(v),w=n(3913),y=n.n(w),b=n(1226),E=n.n(b),k=n(8690),j=n.n(k),I="scottkingphotos";j().config.region="ca-central-1",j().config.credentials=new(j().CognitoIdentityCredentials)({IdentityPoolId:"ca-central-1:1b0ee55b-730f-473f-93c9-12abc39a2946"});var N=new WeakMap;const C=new(function(){function e(){g()(this,e),N.set(this,{writable:!0,value:new(j().S3)({apiVersion:"2006-03-01",params:{Bucket:I}})})}var t,n;return y()(e,[{key:"listAvailableFolders",value:(n=u()(l().mark((function e(){var t=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){return E()(t,N).listObjects({Delimiter:"/"},(function(t,n){if(t);else{var r=n.CommonPrefixes.map((function(e){var t=e.Prefix.replace("/","");return decodeURIComponent(t)}));e(r)}}))})));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"getImagesInFolder",value:(t=u()(l().mark((function e(t){var n,r=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(encodeURIComponent(t),"/"),e.abrupt("return",new Promise((function(e,t){return E()(r,N).listObjects({Prefix:n},(function(t,n){if(t);else{var r="https://".concat(I,".s3.").concat(j().config.region,".amazonaws.com");console.log(n.Contents);var a=n.Contents.filter((function(e){return e.Key.includes(".png")||e.Key.includes(".jpg")})).map((function(e){return"".concat(r,"/").concat(encodeURIComponent(e.Key))}));e(a)}}))})));case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}());const F=function(e){var t=e.data,n=e.setData,a=e.currentFolder;return(0,r.useEffect)(u()(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,C.getImagesInFolder(a);case 3:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)}))),[a]),r.createElement("div",{className:"flex flex-col items-center"},t.length>0&&t.map((function(e,t){return r.createElement(h,{key:t,src:e})})))};const P=function(){return r.createElement("div",{className:"nameplate flex justify-center md:justify-end"},r.createElement("div",{className:"text-3xl text-center md:text-right"},"Scott King"))};const O=function(e){var t=e.match,n=(p()(e,["match"]),t.params.folderName),a=(0,r.useState)([]),c=f()(a,2),o=c[0],s=c[1],i=(0,r.useState)([]),m=f()(i,2),d=m[0],h=m[1];return(0,r.useEffect)(u()(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.listAvailableFolders();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)}))),[]),r.createElement("div",{className:"container mx-auto flex flex-col md:flex-row"},r.createElement("div",{className:"flex flex-col md:flex-col w-screen md:w-1/5 my-4 md:my-12 md:ml-12 md:mr-6"},r.createElement(P,null),r.createElement(x,{data:o,currentFolder:n})),r.createElement("div",{className:"flex w-screen md:w-4/5 my-4 md:my-12 mx-0 md:ml-6 md:mr-12 justify-center"},r.createElement(F,{data:d,setData:h,currentFolder:n})))};var U=n(6994),A=n.n(U),K=n(9502),S={insert:"head",singleton:!1};A()(K.Z,S);K.Z.locals;const D=function(){return r.createElement(c.UT,null,r.createElement(o.AW,{exact:!0,path:"/",component:O}),r.createElement(o.AW,{path:"/:folderName",component:O}))};(0,a.render)(r.createElement(D,null),document.getElementById("app-container"))},9502:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"",""]);const c=a},2993:()=>{}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0},t=[[3349,494]],r=()=>{};function a(){for(var r,a=0;a<t.length;a++){for(var c=t[a],o=!0,s=1;s<c.length;s++){var l=c[s];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),r=n(n.s=c[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},o=o.slice();for(var e=0;e<o.length;e++)c(o[e]);return(r=a)()};var c=a=>{for(var c,o,[l,i,u,m]=a,f=0,d=[];f<l.length;f++)o=l[f],n.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(c in i)n.o(i,c)&&(n.m[c]=i[c]);for(u&&u(n),s(a);d.length;)d.shift()();return m&&t.push.apply(t,m),r()},o=self.webpackChunkphotos=self.webpackChunkphotos||[],s=o.push.bind(o);o.push=c})(),n.x()})();