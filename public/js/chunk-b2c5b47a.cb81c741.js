(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2c5b47a"],{"02b1":function(t,s,a){"use strict";a("7f46")},"7f46":function(t,s,a){},9462:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),a("ul",{staticClass:"nav navbar-nav flex-row float-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},i=[],n={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},r=n,o=a("2877"),l=Object(o["a"])(r,e,i,!1,null,null,null);s["a"]=l.exports},"9c93":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("topnavbar"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"container"},[a("p",{domProps:{innerHTML:t._s(t.error)}}),a("div",{staticClass:"portlet box blue",staticStyle:{width:"1000px",opacity:"0.95"}},[t._m(0),a("div",{staticClass:"portlet-body"},[a("div",{staticClass:"mycss"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("td",[a("b",[a("center",[t._v("Image")])],1)]),t._m(1),t._m(2),t._m(3)])]),a("tbody",t._l(t.posts,(function(s){return a("tr",{key:s._id},[a("td",[a("div",{staticClass:"profile-img"},[a("img",{staticStyle:{height:"70px",width:"70px"},attrs:{src:s.image,alt:""}})])]),a("td",[t._v(t._s(s.user))]),a("td",[t._v(t._s(s.title))]),a("td",[t._v(t._s(s.description))])])})),0)])]),a("br"),a("div",{staticStyle:{textAlign:"center"}},[a("router-link",{attrs:{to:"/post/add"}},[a("button",{staticClass:"btn btn-primary pull-right"},[t._v(" Add post ")])])],1),a("br")])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"portlet-title"},[a("div",{staticClass:"caption"},[a("i",{staticClass:"fa fa-gift"}),t._v("posts List")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",[a("b",[t._v(" User")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",[a("b",[t._v(" Title")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",[a("b",[t._v(" Description")])])}],n=a("bc3a"),r=a.n(n),o=a("9462"),l={data:function(){return{posts:[]}},methods:{},components:{topnavbar:o["a"]},mounted:function(){var t=this;r.a.get("http://localhost:8000/api/post").then((function(s){t.posts=s.data,console.log(t.posts),console.log(s.data)})).catch((function(t){console.log(t)}))}},c=l,u=(a("02b1"),a("2877")),v=Object(u["a"])(c,e,i,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-b2c5b47a.cb81c741.js.map