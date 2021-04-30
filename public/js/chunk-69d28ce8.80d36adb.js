(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69d28ce8"],{"057f":function(t,e,r){var i=r("fc6a"),n=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):n(i(t))}},"375e":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-template"},[r("topnavbar"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"inner-block",staticStyle:{opacity:"0.95"}},[r("div",{staticClass:"vertical-center"},[r("form",{attrs:{id:"signup-form"},on:{submit:function(e){return e.preventDefault(),t.registerClicked(e)}}},[r("h3",{staticClass:"pt-5"},[t._v("Add Exercises")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Exercise Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.name,expression:"exercise.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.exercise.name},on:{input:function(e){e.target.composing||t.$set(t.exercise,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Description")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.description,expression:"exercise.description"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Description",required:""},domProps:{value:t.exercise.description},on:{input:function(e){e.target.composing||t.$set(t.exercise,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Sets")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.exercise.sets,expression:"exercise.sets",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"number",placeholder:"sets"},domProps:{value:t.exercise.sets},on:{input:function(e){e.target.composing||t.$set(t.exercise,"sets",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("CaloriesBurnt")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.caloriesBurnt,expression:"exercise.caloriesBurnt"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"",required:""},domProps:{value:t.exercise.caloriesBurnt},on:{input:function(e){e.target.composing||t.$set(t.exercise,"caloriesBurnt",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("WorkoutStage")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.exercise.workoutStage,expression:"exercise.workoutStage"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"workoutstage",required:""},domProps:{value:t.exercise.workoutStage},on:{input:function(e){e.target.composing||t.$set(t.exercise,"workoutStage",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("p",{staticClass:"help is-danger"},[t._v(" "+t._s(t.error)+" ")])]),r("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v(" Add ")])])])])],1)},n=[],o=(r("a4d3"),r("e01a"),r("b0c0"),r("bc3a")),s=r.n(o),a=r("a18c"),c=r("9462"),l={components:{topnavbar:c["a"]},name:"AddExercise",data:function(){return{exercise:{name:"",description:"",sets:"",caloriesBurnt:"",workoutStage:""},error:"",picture:null,notificationModal:{isVisible:!1,modalColor:"is-success",title:"",text:""},uploadProgressBar:{isUploading:!1,uploadProgress:0}}},methods:{validateFields:function(){return 0===this.exercise.name.length?(this.error="Email should not be empty",!1):0===this.exercise.description.length?(this.error="fullname should not be empty",!1):0===this.exercise.sets.length?(this.error="Password is required",!1):0===this.exercise.caloriesBurnt.length?(this.error="age should not be empty",!1):0!==this.exercise.workoutStage.length||(this.error="weight should not be empty",!1)},registerClicked:function(){this.validateFields()&&s.a.post("http://localhost:8000/api/exercises",{name:this.exercise.name,description:this.exercise.description,sets:this.exercise.sets,caloriesBurnt:this.exercise.caloriesBurnt,workoutStage:this.exercise.workoutStage}).then((function(t){a["a"].push("/admin-page/manage-exercise"),console.log(t)})).catch((function(t){console.log(t)}))}}},u=l,f=(r("b9cb"),r("2877")),p=Object(f["a"])(u,i,n,!1,null,"296e217e",null);e["default"]=p.exports},"65f0":function(t,e,r){var i=r("861d"),n=r("e8b5"),o=r("b622"),s=o("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?i(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var i=r("428f"),n=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||s(e,t,{value:o.f(t)})}},"8b23":function(t,e,r){},9462:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),r("ul",{staticClass:"nav navbar-nav flex-row float-right"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),r("li",{staticClass:"nav-item"},[r("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},n=[],o={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},s=o,a=r("2877"),c=Object(a["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},a4d3:function(t,e,r){"use strict";var i=r("23e7"),n=r("da84"),o=r("d066"),s=r("c430"),a=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),p=r("e8b5"),d=r("861d"),v=r("825a"),m=r("7b0b"),b=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),x=r("df75"),w=r("241c"),C=r("057f"),k=r("7418"),S=r("06cf"),O=r("9bf2"),_=r("d1e7"),P=r("9112"),j=r("6eeb"),N=r("5692"),E=r("f772"),$=r("d012"),B=r("90e3"),A=r("b622"),F=r("e538"),q=r("746f"),D=r("d44e"),I=r("69f3"),J=r("b727").forEach,T=E("hidden"),W="Symbol",L="prototype",U=A("toPrimitive"),M=I.set,Q=I.getterFor(W),V=Object[L],z=n.Symbol,G=o("JSON","stringify"),H=S.f,K=O.f,R=C.f,X=_.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),it=n.QObject,nt=!it||!it[L]||!it[L].findChild,ot=a&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=H(V,e);i&&delete V[e],K(t,e,r),i&&t!==V&&K(V,e,i)}:K,st=function(t,e){var r=Y[t]=y(z[L]);return M(r,{type:W,tag:t,description:e}),a||(r.description=e),r},at=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===V&&ct(Z,e,r),v(t);var i=g(e,!0);return v(r),f(Y,i)?(r.enumerable?(f(t,T)&&t[T][i]&&(t[T][i]=!1),r=y(r,{enumerable:h(0,!1)})):(f(t,T)||K(t,T,h(1,{})),t[T][i]=!0),ot(t,i,r)):K(t,i,r)},lt=function(t,e){v(t);var r=b(e),i=x(r).concat(vt(r));return J(i,(function(e){a&&!ft.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===V&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,T)&&this[T][e])||r)},pt=function(t,e){var r=b(t),i=g(e,!0);if(r!==V||!f(Y,i)||f(Z,i)){var n=H(r,i);return!n||!f(Y,i)||f(r,T)&&r[T][i]||(n.enumerable=!0),n}},dt=function(t){var e=R(b(t)),r=[];return J(e,(function(t){f(Y,t)||f($,t)||r.push(t)})),r},vt=function(t){var e=t===V,r=R(e?Z:b(t)),i=[];return J(r,(function(t){!f(Y,t)||e&&!f(V,t)||i.push(Y[t])})),i};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=B(t),r=function(t){this===V&&r.call(Z,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),ot(this,e,h(1,t))};return a&&nt&&ot(V,e,{configurable:!0,set:r}),st(e,t)},j(z[L],"toString",(function(){return Q(this).tag})),j(z,"withoutSetter",(function(t){return st(B(t),t)})),_.f=ft,O.f=ct,S.f=pt,w.f=C.f=dt,k.f=vt,F.f=function(t){return st(A(t),t)},a&&(K(z[L],"description",{configurable:!0,get:function(){return Q(this).description}}),s||j(V,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),J(x(rt),(function(t){q(t)})),i({target:W,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:vt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),G){var mt=!c||u((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));i({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e,(d(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!at(e))return e}),n[1]=e,G.apply(null,n)}})}z[L][U]||P(z[L],U,z[L].valueOf),D(z,W),$[T]=!0},b0c0:function(t,e,r){var i=r("83ab"),n=r("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,r){var i=r("0366"),n=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,p=7==t,d=5==t||f;return function(v,m,b,g){for(var h,y,x=o(v),w=n(x),C=i(m,b,3),k=s(w.length),S=0,O=g||a,_=e?O(v,k):r||p?O(v,0):void 0;k>S;S++)if((d||S in w)&&(h=w[S],y=C(h,S,x),t))if(e)_[S]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:c.call(_,h)}else switch(t){case 4:return!1;case 7:c.call(_,h)}return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},b9cb:function(t,e,r){"use strict";r("8b23")},e01a:function(t,e,r){"use strict";var i=r("23e7"),n=r("83ab"),o=r("da84"),s=r("5135"),a=r("861d"),c=r("9bf2").f,l=r("e893"),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(p,u);var d=p.prototype=u.prototype;d.constructor=p;var v=d.toString,m="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(s(f,t))return"";var r=m?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,r){var i=r("b622");e.f=i},e8b5:function(t,e,r){var i=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-69d28ce8.80d36adb.js.map