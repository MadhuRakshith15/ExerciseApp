(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-823f2112"],{9462:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand float-left",attrs:{href:"http://localhost/",target:"_blank"}},[t._v(" Fitness Freak ")]),a("ul",{staticClass:"nav navbar-nav flex-row float-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},i=[],l={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},r=l,o=a("2877"),n=Object(o["a"])(r,e,i,!1,null,null,null);s["a"]=n.exports},"9f73":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("topnavbar"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"container emp-profile",staticStyle:{opacity:"0.95"}},[a("form",{attrs:{method:"post"}},[t._m(0),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"tab-content profile-tab",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.getCurrentUser.userName))])])]),a("div",{staticClass:"row"},[t._m(3),a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.getCurrentUserFullName))])])]),a("div",{staticClass:"row"},[t._m(4),a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.getCurrentUser.height||""))])])]),a("div",{staticClass:"row"},[t._m(5),a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.getCurrentUser.weight||""))])])]),a("div",{staticClass:"row"},[t._m(6),a("div",{staticClass:"col-md-6"},[a("p",[t._v(t._s(t.getCurrentUser.age||""))])])])]),t._m(7)])])])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"profile-img"},[a("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",alt:""}}),a("div",{staticClass:"file btn btn-lg btn-primary"},[t._v(" Profile Image "),a("input",{attrs:{type:"file",name:"file"}})])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"profile-head"},[a("h5",[t._v(" Madhu Rakshith ")]),a("h6",[t._v(" Student at SUNY Newpaltz ")]),a("p",{staticClass:"proile-rating"},[t._v("Computer science")]),a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("About")])])])])]),a("div",{staticClass:"col-md-2"},[a("button",{staticClass:"profile-edit-btn",attrs:{type:"",name:"btnAddMore",value:""}},[t._v(" Edit Profile ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"profile-work"},[a("a",{attrs:{href:"https://github.com/MadhuRakshith15/ExerciseApp"}},[t._v("Github ExerciseApp")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("label",[t._v("User Id/Email")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("label",[t._v("Full Name")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("label",[t._v('Height"')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("label",[t._v("Weight")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6"},[a("label",[t._v("Age")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",[t._v("Experience")])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("Expert")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",[t._v("Hourly Rate")])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("10$/hr")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",[t._v("Total Projects")])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("230")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",[t._v("English Level")])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("Expert")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",[t._v("Availability")])]),a("div",{staticClass:"col-md-6"},[a("p",[t._v("6 months")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("label",[t._v("Your Bio")]),a("br"),a("p",[t._v("Your detail description")])])])])}],l=a("9462"),r={components:{topnavbar:l["a"]},name:"UserProfile",data:function(){return{getCurrentUser:{}}},mounted:function(){this.getCurrentUser=JSON.parse(sessionStorage.getItem("user")),console.log(sessionStorage.getItem("user")),sessionStorage.isLoggedIn||this.$router.push("/login")},computed:{getCurrentUserFullName:function(){return this.getCurrentUser.firstName+" "+this.getCurrentUser.lastName}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn")}}},o=r,n=a("2877"),c=Object(n["a"])(o,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-823f2112.dac70edd.js.map