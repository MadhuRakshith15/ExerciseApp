(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f4ffaa"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),s=r("9112");for(var a in i){var c=n[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),s=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2f11":function(t,e,r){},"39be":function(t,e,r){"use strict";r("2f11")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),s=o("filter");n({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,o(0,r)):t[s]=r}},9462:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand float-left",attrs:{href:"https://myappr.herokuapp.com/",target:"_blank"}},[t._v(" Fitness Freak ")]),r("ul",{staticClass:"nav navbar-nav flex-row float-right"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),r("li",{staticClass:"nav-item"},[r("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},i=[],o={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},s=o,a=r("2877"),c=Object(a["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports},"9d16":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-template"},[r("topnavbar"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"inner-block",staticStyle:{opacity:"0.95"}},[r("div",{staticClass:"vertical-center"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.addBtnClicked(e)}}},[r("h3",{staticClass:"pt-3",staticStyle:{color:"blue"}},[t._v("User Exercise")]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Name")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.name,expression:"exercise.name"}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.name},on:{input:function(e){e.target.composing||t.$set(t.exercise,"name",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Sets")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.sets,expression:"exercise.sets"}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.sets},on:{input:function(e){e.target.composing||t.$set(t.exercise,"sets",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("CaloriesBurnt")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.caloriesBurnt,expression:"exercise.caloriesBurnt"}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.caloriesBurnt},on:{input:function(e){e.target.composing||t.$set(t.exercise,"caloriesBurnt",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Workout Stage")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.workoutStage,expression:"exercise.workoutStage"}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.workoutStage},on:{input:function(e){e.target.composing||t.$set(t.exercise,"workoutStage",e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Period Time")])],1)]),r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.exercise.period,expression:"exercise.period",modifiers:{trim:!0}}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.period},on:{input:function(e){e.target.composing||t.$set(t.exercise,"period",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[r("center",[t._v("Completed")])],1)]),r("div",{staticClass:"col-md-6"},[r("center",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.exercise.completed,expression:"exercise.completed",modifiers:{trim:!0}}],staticStyle:{"text-align":"center"},domProps:{value:t.exercise.completed},on:{input:function(e){e.target.composing||t.$set(t.exercise,"completed",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1)]),r("div",{staticClass:"form-group"},[r("p",{staticClass:"help is-danger"},[t._v(" "+t._s(t.error)+" ")])]),r("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v(" Add ")])])])])],1)},i=[],o=(r("4de4"),r("5530")),s=r("bc3a"),a=r.n(s),c=r("9462"),u=r("a18c"),l={data:function(){return{ProId:this.$route.params.Pid,exercise:{name:"",sets:"",caloriesBurnt:"",workoutStage:"",period:"",completed:""},error:""}},methods:{addBtnClicked:function(){console.log("post",this.exercise),a.a.post("https://myappr.herokuapp.com:8000/api/userexercise",Object(o["a"])({},this.exercise)).then((function(t){u["a"].push("/userexercise"),console.log(t)})).catch((function(t){console.log(t.message)}))}},components:{topnavbar:c["a"]},mounted:function(){var t=this;console.log("exerciseid mount"),a.a.get("https://myappr.herokuapp.com:8000/api/exercises").then((function(e){var r=e.data,n=t.$route.params.Pid;t.exercise=r.filter((function(t){return t._id==n}))[0],t.exercise.period="",t.exercise.completed=""})).catch((function(t){console.log(t)}))}},f=l,d=(r("39be"),r("2877")),v=Object(d["a"])(f,n,i,!1,null,null,null);e["default"]=v.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),a=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),b=r("7b0b"),m=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),x=r("df75"),w=r("241c"),S=r("057f"),C=r("7418"),O=r("06cf"),k=r("9bf2"),P=r("d1e7"),j=r("9112"),L=r("6eeb"),_=r("5692"),E=r("f772"),N=r("d012"),T=r("90e3"),D=r("b622"),$=r("e538"),A=r("746f"),B=r("d44e"),M=r("69f3"),F=r("b727").forEach,I=E("hidden"),V="Symbol",G="prototype",H=D("toPrimitive"),J=M.set,R=M.getterFor(V),U=Object[G],W=i.Symbol,q=o("JSON","stringify"),Q=O.f,z=k.f,K=S.f,X=P.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=i.QObject,it=!nt||!nt[G]||!nt[G].findChild,ot=a&&l((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(U,e);n&&delete U[e],z(t,e,r),n&&t!==U&&z(U,e,n)}:z,st=function(t,e){var r=Y[t]=y(W[G]);return J(r,{type:V,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,r){t===U&&ct(Z,e,r),p(t);var n=g(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,I)&&t[I][n]&&(t[I][n]=!1),r=y(r,{enumerable:h(0,!1)})):(f(t,I)||z(t,I,h(1,{})),t[I][n]=!0),ot(t,n,r)):z(t,n,r)},ut=function(t,e){p(t);var r=m(e),n=x(r).concat(pt(r));return F(n,(function(e){a&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,I)&&this[I][e])||r)},dt=function(t,e){var r=m(t),n=g(e,!0);if(r!==U||!f(Y,n)||f(Z,n)){var i=Q(r,n);return!i||!f(Y,n)||f(r,I)&&r[I][n]||(i.enumerable=!0),i}},vt=function(t){var e=K(m(t)),r=[];return F(e,(function(t){f(Y,t)||f(N,t)||r.push(t)})),r},pt=function(t){var e=t===U,r=K(e?Z:m(t)),n=[];return F(r,(function(t){!f(Y,t)||e&&!f(U,t)||n.push(Y[t])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===U&&r.call(Z,t),f(this,I)&&f(this[I],e)&&(this[I][e]=!1),ot(this,e,h(1,t))};return a&&it&&ot(U,e,{configurable:!0,set:r}),st(e,t)},L(W[G],"toString",(function(){return R(this).tag})),L(W,"withoutSetter",(function(t){return st(T(t),t)})),P.f=ft,k.f=ct,O.f=dt,w.f=S.f=vt,C.f=pt,$.f=function(t){return st(D(t),t)},a&&(z(W[G],"description",{configurable:!0,get:function(){return R(this).description}}),s||L(U,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),F(x(rt),(function(t){A(t)})),n({target:V,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(b(t))}}),q){var bt=!c||l((function(){var t=W();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,q.apply(null,i)}})}W[G][H]||j(W[G],H,W[G].valueOf),B(W,V),N[I]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),s=r("d039"),a=s((function(){o(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,v=5==t||f;return function(p,b,m,g){for(var h,y,x=o(p),w=i(x),S=n(b,m,3),C=s(w.length),O=0,k=g||a,P=e?k(p,C):r||d?k(p,0):void 0;C>O;O++)if((v||O in w)&&(h=w[O],y=S(h,O,x),t))if(e)P[O]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:c.call(P,h)}else switch(t){case 4:return!1;case 7:c.call(P,h)}return f?-1:u||l?l:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),s=r("fc6a"),a=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),i=a.f,u=o(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),s=r("06cf").f,a=r("83ab"),c=i((function(){s(1)})),u=!a||c;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-73f4ffaa.65b10393.js.map