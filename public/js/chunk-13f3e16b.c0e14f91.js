(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f3e16b"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var s in o){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3660:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-template"},[r("topnavbar"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"inner-block",staticStyle:{opacity:"0.95"}},[r("div",{staticClass:"vertical-center"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.addBtnClicked(e)}}},[r("h3",{staticClass:"pt-3",staticStyle:{color:"blue"}},[t._v("User workout")]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Name")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.workout.name,expression:"workout.name"}],staticStyle:{"text-align":"center"},domProps:{value:t.workout.name},on:{input:function(e){e.target.composing||t.$set(t.workout,"name",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Level")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.workout.level,expression:"workout.level"}],staticStyle:{"text-align":"center"},domProps:{value:t.workout.level},on:{input:function(e){e.target.composing||t.$set(t.workout,"level",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Period Time")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.workout.period,expression:"workout.period",modifiers:{trim:!0}}],staticStyle:{"text-align":"center"},domProps:{value:t.workout.period},on:{input:function(e){e.target.composing||t.$set(t.workout,"period",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Completed")])],1)]),r("div",{staticClass:"col-md-6"},[r("center",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.workout.completed,expression:"workout.completed",modifiers:{trim:!0}}],staticStyle:{"text-align":"center"},domProps:{value:t.workout.completed},on:{input:function(e){e.target.composing||t.$set(t.workout,"completed",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1)]),r("div",{staticClass:"form-group"},[r("p",{staticClass:"help is-danger"},[t._v(" "+t._s(t.error)+" ")])]),r("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v(" Add ")])])])])],1)},o=[],i=(r("4de4"),r("5530")),a=r("bc3a"),s=r.n(a),c=r("9462"),u=r("a18c"),l={data:function(){return{ProId:this.$route.params.Pid,workout:{name:"",level:"",period:"",completed:""},error:""}},methods:{addBtnClicked:function(){console.log("post",this.workout),s.a.post("https://myappr.herokuapp.com/api/userworkouts",Object(i["a"])({},this.workout)).then((function(t){u["a"].push("/userworkout"),console.log(t)})).catch((function(t){console.log(t.message)}))}},components:{topnavbar:c["a"]},mounted:function(){var t=this;console.log("workoutid mount"),s.a.get("https://myappr.herokuapp.com/api/workouts").then((function(e){var r=e.data,n=t.$route.params.Pid;t.workout=r.filter((function(t){return t._id==n}))[0],t.workout.period="",t.workout.completed=""})).catch((function(t){console.log(t)}))}},f=l,d=(r("7287"),r("2877")),v=Object(d["a"])(f,n,o,!1,null,null,null);e["default"]=v.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},6482:function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7287:function(t,e,r){"use strict";r("6482")},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},9462:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),r("ul",{staticClass:"nav navbar-nav flex-row float-right"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),r("li",{staticClass:"nav-item"},[r("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},o=[],i={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},a=i,s=r("2877"),c=Object(s["a"])(a,n,o,!1,null,null,null);e["a"]=c.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),b=r("7b0b"),m=r("fc6a"),g=r("c04e"),h=r("5c6c"),w=r("7c73"),y=r("df75"),k=r("241c"),C=r("057f"),O=r("7418"),S=r("06cf"),P=r("9bf2"),j=r("d1e7"),L=r("9112"),x=r("6eeb"),_=r("5692"),E=r("f772"),T=r("d012"),N=r("90e3"),D=r("b622"),$=r("e538"),A=r("746f"),M=r("d44e"),F=r("69f3"),I=r("b727").forEach,V=E("hidden"),G="Symbol",B="prototype",H=D("toPrimitive"),J=F.set,R=F.getterFor(G),U=Object[B],W=o.Symbol,q=i("JSON","stringify"),Q=S.f,z=P.f,K=C.f,X=j.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,it=s&&l((function(){return 7!=w(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(U,e);n&&delete U[e],z(t,e,r),n&&t!==U&&z(U,e,n)}:z,at=function(t,e){var r=Y[t]=w(W[B]);return J(r,{type:G,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,r){t===U&&ct(Z,e,r),p(t);var n=g(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,V)&&t[V][n]&&(t[V][n]=!1),r=w(r,{enumerable:h(0,!1)})):(f(t,V)||z(t,V,h(1,{})),t[V][n]=!0),it(t,n,r)):z(t,n,r)},ut=function(t,e){p(t);var r=m(e),n=y(r).concat(pt(r));return I(n,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?w(t):ut(w(t),e)},ft=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,V)&&this[V][e])||r)},dt=function(t,e){var r=m(t),n=g(e,!0);if(r!==U||!f(Y,n)||f(Z,n)){var o=Q(r,n);return!o||!f(Y,n)||f(r,V)&&r[V][n]||(o.enumerable=!0),o}},vt=function(t){var e=K(m(t)),r=[];return I(e,(function(t){f(Y,t)||f(T,t)||r.push(t)})),r},pt=function(t){var e=t===U,r=K(e?Z:m(t)),n=[];return I(r,(function(t){!f(Y,t)||e&&!f(U,t)||n.push(Y[t])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===U&&r.call(Z,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),it(this,e,h(1,t))};return s&&ot&&it(U,e,{configurable:!0,set:r}),at(e,t)},x(W[B],"toString",(function(){return R(this).tag})),x(W,"withoutSetter",(function(t){return at(N(t),t)})),j.f=ft,P.f=ct,S.f=dt,k.f=C.f=vt,O.f=pt,$.f=function(t){return at(D(t),t)},s&&(z(W[B],"description",{configurable:!0,get:function(){return R(this).description}}),a||x(U,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),I(y(rt),(function(t){A(t)})),n({target:G,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),q){var bt=!c||l((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,q.apply(null,o)}})}W[B][H]||L(W[B],H,W[B].valueOf),M(W,G),T[V]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),s=a((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,v=5==t||f;return function(p,b,m,g){for(var h,w,y=i(p),k=o(y),C=n(b,m,3),O=a(k.length),S=0,P=g||s,j=e?P(p,O):r||d?P(p,0):void 0;O>S;S++)if((v||S in k)&&(h=k[S],w=C(h,S,y),t))if(e)j[S]=w;else if(w)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:c.call(j,h)}else switch(t){case 4:return!1;case 7:c.call(j,h)}return f?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=s.f,u=i(n),l={},f=0;while(u.length>f)r=o(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=o((function(){a(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-13f3e16b.c0e14f91.js.map