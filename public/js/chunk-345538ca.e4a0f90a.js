(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-345538ca"],{9462:function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),s("ul",{staticClass:"nav navbar-nav flex-row float-right"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),s("li",{staticClass:"nav-item"},[s("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},n=[],e={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},r=e,i=s("2877"),l=Object(i["a"])(r,o,n,!1,null,null,null);a["a"]=l.exports},a326:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"vue-template"},[s("topnavbar"),s("div",{staticClass:"vertical-center mt-5"},[s("div",{staticClass:"inner-block mt-5",staticStyle:{opacity:"0.95"}},[s("h3",[t._v("Choose Workout")]),t._l(t.workouts,(function(a){return s("div",{key:a._id},[s("button",{staticClass:"btn btn-primary btn-lg btn-block",on:{click:function(s){return t.Toworkout(a._id)}}},[t._v(" "+t._s(a.name)+" ")]),s("br")])}))],2)])],1)},n=[],e=s("bc3a"),r=s.n(e),i=s("9462"),l={components:{topnavbar:i["a"]},name:"TopNavbar",data:function(){return{exercises:[],workouts:[]}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")},Toworkout:function(t){this.$router.push({name:"workout_id",params:{Pid:t}}),console.log("sdfafdsafdasfdasfdsa")}},mounted:function(){var t=this;r.a.get("https://myappr.herokuapp.com/api/workouts").then((function(a){t.workouts=a.data,console.log("bbbbbbbbb",a.data)})).catch((function(t){console.log(t)}))}},c=l,u=s("2877"),v=Object(u["a"])(c,o,n,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-345538ca.e4a0f90a.js.map