(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f3ca2c"],{"039a":function(t,e,s){"use strict";s("7174")},"578a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-template"},[s("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),s("ul",{staticClass:"nav navbar-nav flex-row float-right"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/login"}},[t._v("Sign in")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"btn btn-outline-primary mr-3",attrs:{to:"/signup"}},[t._v("Sign up")])],1)])])]),s("div",{staticClass:"vertical-center mt-5"},[s("div",{staticClass:"inner-block mt-5",staticStyle:{opacity:"0.95"}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.loginBtnClicked(e)}}},[s("h3",[t._v("Sign In")]),s("div",{staticClass:"form-group"},[s("label",[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.credentials.username,expression:"credentials.username",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Your Email",required:""},domProps:{value:t.credentials.username},on:{input:function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.credentials.password,expression:"credentials.password",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"password",required:""},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("p",{staticClass:"help is-danger"},[t._v(" "+t._s(t.error)+" ")])]),t._m(0)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",[s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v(" login ")])])}],n=s("bc3a"),i=s.n(n),o=s("a18c"),l={name:"SignIn",data:function(){return{credentials:{username:"",password:""},error:""}},mounted:function(){sessionStorage.isLoggedIn&&this.$router.push("/user-dashboard")},methods:{validateFields:function(){return 0===this.credentials.username.length?(this.error="Username is required",!1):0!==this.credentials.password.length||(this.error="Password is required",!1)},loginBtnClicked:function(){this.validateFields()&&i.a.post("https://myappr.herokuapp.com/api/auth/login",{email:this.credentials.username,password:this.credentials.password}).then((function(t){console.log(t),401==t.data.status?alert(t.data.msg):200==t.data.status&&(sessionStorage.setItem("token",t.data.token),sessionStorage.setItem("isLoggedIn",!0),sessionStorage.setItem("user",JSON.stringify(t.data.user)),o["a"].push("/user-dashboard"))})).catch((function(t){console.log(t.message)}))},resetForm:function(){this.credentials.username=null,this.credentials.password=null}}},c=l,u=(s("039a"),s("2877")),d=Object(u["a"])(c,a,r,!1,null,null,null);e["default"]=d.exports},7174:function(t,e,s){}}]);
//# sourceMappingURL=chunk-77f3ca2c.41680127.js.map