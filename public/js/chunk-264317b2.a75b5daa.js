(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-264317b2"],{a00c:function(e,t,r){},bf94:function(e,t,r){"use strict";r("a00c")},c3f0:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-template"},[r("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[e._v(" Fitness Freak ")]),r("ul",{staticClass:"nav navbar-nav flex-row float-right"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/login"}},[e._v("Sign in")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"btn btn-outline-primary mr-3",attrs:{to:"/signup"}},[e._v("Sign up")])],1)])])]),r("div",{staticClass:"inner-block"},[r("div",{staticClass:"vertical-center"},[r("form",{attrs:{id:"signup-form"},on:{submit:function(t){return t.preventDefault(),e.registerClicked(t)}}},[r("h3",{staticClass:"pt-5"},[e._v("Sign Up")]),r("div",{staticClass:"form-group"},[r("label",[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Firstname",required:""},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Lastname",required:""},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userName,expression:"user.userName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your username",required:""},domProps:{value:e.user.userName},on:{input:function(t){t.target.composing||e.$set(e.user,"userName",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg ",attrs:{type:"text",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Your password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("mobileNumber")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.mobileNumber,expression:"user.mobileNumber",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"number",placeholder:"phone"},domProps:{value:e.user.mobileNumber},on:{input:function(t){t.target.composing||e.$set(e.user,"mobileNumber",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Age")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.age,expression:"user.age",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"number",placeholder:"Age"},domProps:{value:e.user.age},on:{input:function(t){t.target.composing||e.$set(e.user,"age",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Weight")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.weight,expression:"user.weight",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"number",placeholder:"Weight"},domProps:{value:e.user.weight},on:{input:function(t){t.target.composing||e.$set(e.user,"weight",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Height")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.height,expression:"user.height",modifiers:{trim:!0}}],staticClass:"form-control form-control-lg",attrs:{type:"number",placeholder:"Height"},domProps:{value:e.user.height},on:{input:function(t){t.target.composing||e.$set(e.user,"height",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("p",{staticClass:"help is-danger"},[e._v(" "+e._s(e.error)+" ")])]),r("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[e._v(" Signup ")]),r("p",{staticClass:"forgot-password text-right"},[e._v(" Already registered "),r("router-link",{attrs:{to:{name:"login"}}},[e._v("sign in?")])],1)])])])])},a=[],o=r("bc3a"),i=r.n(o),l=r("a18c"),n={name:"SignUp",data:function(){return{user:{userName:"",firstName:"",lastName:"",email:"",password:"",mobileNumber:"",age:"",height:"",weight:""},error:"",picture:null,notificationModal:{isVisible:!1,modalColor:"is-success",title:"",text:""},uploadProgressBar:{isUploading:!1,uploadProgress:0}}},methods:{validateFields:function(){return 0===this.user.firstName.length?(this.error="FirstName should not be empty",!1):0===this.user.lastName.length?(this.error="Lastname should not be empty",!1):0===this.user.password.length?(this.error="Password is required",!1):0===this.user.age.length?(this.error="age should not be empty",!1):0===this.user.weight.length?(this.error="weight should not be empty",!1):0!==this.user.height.length||(this.error="height should not be empty",!1)},registerClicked:function(){console.log(JSON.parse(sessionStorage.getItem("users"))),this.validateFields()&&i.a.post("https://myappr.herokuapp.com/api/auth/signup",{userName:this.user.userName,firstName:this.user.firstName,lastName:this.user.lastName,mobileNumber:this.user.mobileNumber,email:this.user.email,password:this.user.password,age:this.user.age,height:this.user.height,weight:this.user.weight}).then((function(e){l["a"].push("/login"),console.log(e)})).catch((function(e){console.log(e)}))},clearForm:function(){this.picture=null;var e=this.user;e.username="",e.password="",e.fullname="",e.age="",e.weight="",e.height=""}},mounted:function(){sessionStorage.isLoggedIn&&this.$router.push("/user-dashboard")}},u=n,m=(r("bf94"),r("2877")),c=Object(m["a"])(u,s,a,!1,null,"1b998c91",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-264317b2.a75b5daa.js.map