(function(e){function n(n){for(var a,c,o=n[0],i=n[1],d=n[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(n);while(f.length)f.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-29590bba":"1c325837","chunk-00da572e":"d280eda7","chunk-13f3e16b":"23a10e1f","chunk-1835d6f5":"78bf5133","chunk-1d8701e0":"6d22bc0d","chunk-31fac5dd":"462fc9db","chunk-345538ca":"ecb5d66e","chunk-39c53cd6":"46e75424","chunk-489a7a50":"252cdd00","chunk-52ad0f82":"1b4654a9","chunk-5dbeba58":"79a1270c","chunk-62b7467d":"e43b9475","chunk-6357c950":"1ba44659","chunk-73f4ffaa":"4402356a","chunk-77f3ca2c":"f059da9c","chunk-7acb8f14":"91887156","chunk-7ff826a8":"897ad97f","chunk-b2c5b47a":"eff9c3b5","chunk-ca121866":"0e32229f","chunk-d9906380":"381dc340","chunk-2d230100":"fda43e4c","chunk-823f2112":"e7225f5b","chunk-91e5f96a":"17d9038c","chunk-fd1acf22":"e9e3a6d1"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-00da572e":1,"chunk-13f3e16b":1,"chunk-1835d6f5":1,"chunk-1d8701e0":1,"chunk-31fac5dd":1,"chunk-39c53cd6":1,"chunk-489a7a50":1,"chunk-52ad0f82":1,"chunk-5dbeba58":1,"chunk-62b7467d":1,"chunk-73f4ffaa":1,"chunk-77f3ca2c":1,"chunk-7ff826a8":1,"chunk-b2c5b47a":1,"chunk-ca121866":1,"chunk-d9906380":1,"chunk-91e5f96a":1,"chunk-fd1acf22":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-29590bba":"31d6cfe0","chunk-00da572e":"f610366e","chunk-13f3e16b":"f610366e","chunk-1835d6f5":"283466b0","chunk-1d8701e0":"f610366e","chunk-31fac5dd":"6ff5a68a","chunk-345538ca":"31d6cfe0","chunk-39c53cd6":"17609047","chunk-489a7a50":"283466b0","chunk-52ad0f82":"f610366e","chunk-5dbeba58":"283466b0","chunk-62b7467d":"f610366e","chunk-6357c950":"31d6cfe0","chunk-73f4ffaa":"f610366e","chunk-77f3ca2c":"283466b0","chunk-7acb8f14":"31d6cfe0","chunk-7ff826a8":"f610366e","chunk-b2c5b47a":"f610366e","chunk-ca121866":"b5ae2dd3","chunk-d9906380":"f610366e","chunk-2d230100":"31d6cfe0","chunk-823f2112":"31d6cfe0","chunk-91e5f96a":"1b85bff3","chunk-fd1acf22":"41f54dae"}[e]+".css",u=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var d=r[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){d=f[o],l=d.getAttribute("data-href");if(l===a||l===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],s.parentNode.removeChild(s),t(r)},s.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var f=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,t[1](f)}u[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var s=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3dfd":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"vue-tempalte"},[a("div",{staticClass:"App"},[a("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[e._v(" Fitness Freak ")]),a("ul",{staticClass:"nav navbar-nav flex-row float-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/login"}},[e._v("Sign in")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"btn btn-outline-primary mr-3",attrs:{to:"/signup"}},[e._v("Sign up")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"btn btn-outline-info",attrs:{to:"/admin-login"}},[e._v("Admin Login")])],1)])])]),a("div",{staticClass:"bg-Img",style:{backgroundImage:"url("+t("519f")+")"}},[a("router-view")],1)])])},c=[],u=t("2877"),r={},o=Object(u["a"])(r,a,c,!1,null,null,null);n["default"]=o.exports},"519f":function(e,n,t){e.exports=t.p+"img/luke-chesser-rCOWMC8qf8A-unsplash.55d75715.jpg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=t("3dfd"),u=t("a18c"),r=t("5f5b");t("ab8b"),t("3e48"),t("5aea");a["default"].config.productionTip=!1,a["default"].use(r["a"]),new a["default"]({router:u["a"],render:function(e){return e(c["default"])}}).$mount("#app")},"5aea":function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7");var a=t("2b0e"),c=t("8c4f");a["default"].use(c["a"]);var u=[{path:"/userexercise",name:"userexercises",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-52ad0f82")]).then(t.bind(null,"0bf0"))},meta:{title:"Exercise"}},{path:"/userexercise/add",name:"adduserexercise",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-7acb8f14")]).then(t.bind(null,"722a"))},meta:{title:"Exercise"}},{path:"/exercise/:Pid",name:"exercise_id",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-73f4ffaa")]).then(t.bind(null,"9d16"))},meta:{title:"Exerciseid"}},{path:"/workout/:Pid",name:"workout_id",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-13f3e16b")]).then(t.bind(null,"3660"))},meta:{title:"Workoutid"}},{path:"/user-profile",name:"user-profile",component:function(){return t.e("chunk-823f2112").then(t.bind(null,"9f73"))},meta:{title:"User-Profile"}},{path:"/signup",name:"signup",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-ca121866")]).then(t.bind(null,"c3f0"))}},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-77f3ca2c")]).then(t.bind(null,"578a"))}},{path:"/forgot-password",name:"forgot-password",component:function(){return t.e("chunk-2d230100").then(t.bind(null,"eb4a"))}},{path:"/admin-login",name:"admin-login",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-1835d6f5")]).then(t.bind(null,"5d0e"))}},{path:"/user-dashboard",name:"user-dashboard",component:function(){return t.e("chunk-fd1acf22").then(t.bind(null,"f71b"))}},{path:"/friends",name:"friends",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-1d8701e0")]).then(t.bind(null,"d318"))}},{path:"/friends/add",name:"friendsadd",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-5dbeba58")]).then(t.bind(null,"1bea"))}},{path:"/post",name:"post",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-b2c5b47a")]).then(t.bind(null,"9c93"))}},{path:"/post/add",name:"addpost",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-7ff826a8")]).then(t.bind(null,"cad4"))}},{path:"/admin-page",name:"admin",component:function(){return t.e("chunk-91e5f96a").then(t.bind(null,"6d25"))}},{path:"/admin-page/manage-users",name:"manage-users",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-62b7467d")]).then(t.bind(null,"33ac"))}},{path:"/admin-page/manage-users/add",name:"adduser",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-39c53cd6")]).then(t.bind(null,"8aef"))},meta:{title:"Addfriend"}},{path:"/admin-page/manage-exercise/",name:"manage-exercise",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-d9906380")]).then(t.bind(null,"dbec"))}},{path:"/admin-page/manage-exercise/add",name:"manage-exercise_add",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-31fac5dd")]).then(t.bind(null,"375e"))}},{path:"/admin-page/manageworkout",name:"manage-exercise",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-6357c950")]).then(t.bind(null,"a8f7"))}},{path:"/admin-page/manageworkout/add",name:"manage-exercise_add",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-489a7a50")]).then(t.bind(null,"c2e0"))}},{path:"/userworkout",name:"userworkouts",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-00da572e")]).then(t.bind(null,"ad6c"))},meta:{title:"Workouts"}},{path:"/userworkout/add",name:"adduserworkouts",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-345538ca")]).then(t.bind(null,"a326"))},meta:{title:"Workouts"}},{path:"/",name:"home",component:function(){return Promise.resolve().then(t.bind(null,"3dfd"))}}],r=new c["a"]({mode:"history",base:"/",routes:u});n["a"]=r}});
//# sourceMappingURL=app.99d06cde.js.map