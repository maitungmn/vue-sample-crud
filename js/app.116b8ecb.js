(function(e){function t(t){for(var n,a,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-288b8625":"5d5b2c16","chunk-b31fb184":"6ca24a87","chunk-e748e34c":"3999dfeb","chunk-1387b8de":"63e5e5d7","chunk-386b9e38":"155962b7","chunk-2d0afa3b":"9e1d7c1c"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-b31fb184":1,"chunk-e748e34c":1,"chunk-1387b8de":1,"chunk-386b9e38":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-288b8625":"31d6cfe0","chunk-b31fb184":"f45f300c","chunk-e748e34c":"fed900f0","chunk-1387b8de":"68469430","chunk-386b9e38":"e1ab6ecb","chunk-2d0afa3b":"31d6cfe0"}[e]+".css",o=u.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-sample-crud/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2032:function(e,t,r){"use strict";r.r(t);var n={desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},a={setToggleSnackbar:function(e,t){e.toggleSnackbar=t},setDesserts:function(e,t){e.desserts=t}},o={},c={desserts:function(e){return e.desserts}};t["default"]={namespaced:!0,state:n,getters:c,actions:o,mutations:a}},"2a74":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("ac1f"),r("5319"),r("159b"),r("ddb0");var n=r("d307"),a={};n.keys().forEach((function(e){if("./index.js"!==e){var t=e.replace(/(\.\/|\.js)/g,""),r=n(e).default;a[t]=r}})),t["default"]=a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",["/signin"!==e.$route.path?r("DefaultLayout",[r("router-view")],1):r("router-view")],1)},o=[],c=(r("d3b7"),{name:"App",components:{DefaultLayout:function(){return Promise.all([r.e("chunk-e748e34c"),r.e("chunk-1387b8de")]).then(r.bind(null,"7b3d"))}},data:function(){return{}},created:function(){}}),s=c,u=(r("8d06"),r("2877")),i=r("6544"),l=r.n(i),f=r("7496"),d=Object(u["a"])(s,a,o,!1,null,"35710bc9",null),p=d.exports;l()(d,{VApp:f["a"]});var b=r("f309");n["a"].use(b["a"]);var m=new b["a"]({}),h=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("DataTable",{attrs:{id:"data-table"}})},g=[],k={name:"Home",components:{DataTable:function(){return Promise.all([r.e("chunk-e748e34c"),r.e("chunk-288b8625"),r.e("chunk-386b9e38")]).then(r.bind(null,"1fdb"))}},created:function(){}},y=k,w=Object(u["a"])(y,v,g,!1,null,null,null),S=w.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Login form")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{attrs:{id:"check-login-form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("v-text-field",{attrs:{rules:e.nameRules,counter:16,label:"Id",name:"login",type:"text",required:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id","string"===typeof t?t.trim():t)},expression:"form.id"}}),r("v-text-field",{attrs:{rules:e.pwRules,counter:16,label:"Password",name:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{type:"submit",color:"primary",form:"check-login-form"}},[e._v("Login")])],1)],1)],1)],1),r("Snackbar")],1)},x=[],T={name:"Signin",props:{source:String},components:{Snackbar:function(){return Promise.all([r.e("chunk-288b8625"),r.e("chunk-b31fb184")]).then(r.bind(null,"22b2"))}},data:function(){return{form:{id:"",password:""},nameRules:[function(e){return!!e||"Id is required"},function(e){return e.length<=16||"Id must be less than 16 characters"}],pwRules:[function(e){return!!e||"Password is required"},function(e){return e.length<=16||"Password must be less than 16 characters"}]}},methods:{handleLogin:function(){var e="demo",t=this.form,r=t.id,n=t.password;r===e&&n===e?(localStorage.setItem("user",e),this.$router.push("/")):this.$store.commit("auth/setToggleSnackbar",!0)}}},O=T,_=r("8336"),E=r("b0af"),C=r("99d9"),P=r("62ad"),L=r("a523"),V=r("4bd4"),D=r("0fd9"),A=r("2fa4"),$=r("8654"),I=r("71d9"),N=r("2a7f"),q=Object(u["a"])(O,j,x,!1,null,null,null),F=q.exports;l()(q,{VBtn:_["a"],VCard:E["a"],VCardActions:C["a"],VCardText:C["b"],VCol:P["a"],VContainer:L["a"],VForm:V["a"],VRow:D["a"],VSpacer:A["a"],VTextField:$["a"],VToolbar:I["a"],VToolbarTitle:N["a"]});var M=function(e,t,r){localStorage.getItem("user")?r():r({path:"/signin"})};n["a"].use(h["a"]);var R=new h["a"]({mode:"history",base:"/vue-sample-crud/",routes:[{path:"/",name:"home",component:S,beforeEnter:M},{path:"/signin",name:"Signin",component:F}]}),B=r("2f62"),H=r("2a74");n["a"].use(B["a"]);var J=new B["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:H["default"]});n["a"].config.productionTip=!1,new n["a"]({router:R,store:J,vuetify:m,render:function(e){return e(p)}}).$mount("#app")},"87d8":function(e,t,r){},"8d06":function(e,t,r){"use strict";var n=r("87d8"),a=r.n(n);a.a},c7d4:function(e,t,r){"use strict";r.r(t);var n={user:"",toggleSnackbar:!1},a={setToggleSnackbar:function(e,t){e.toggleSnackbar=t}},o={},c={user:function(e){return e.user},toggleSnackbar:function(e){return e.toggleSnackbar}};t["default"]={namespaced:!0,state:n,getters:c,actions:o,mutations:a}},d307:function(e,t,r){var n={"./auth.js":"c7d4","./dataTable.js":"2032","./index.js":"2a74"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="d307"}});
//# sourceMappingURL=app.116b8ecb.js.map