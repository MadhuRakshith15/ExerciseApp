(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9906380"],{"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),s=a("2d00"),i=n("species");t.exports=function(t){return s>=51||!r((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5ea5":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidenav"},[a("br"),a("br"),a("br"),a("br"),a("ul",{staticClass:"default-responsive-navlinks"},[a("h3",[a("center",[t._v("DashBoard")])],1),a("li",[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/admin-page/manage-users"}},[a("center",[t._v("Manage Users")])],1)],1),a("li",[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/admin-page/manage-exercise"}},[a("center",[t._v("Manage Exercise")])],1)],1),a("li",[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/admin-page/manageworkout"}},[a("center",[t._v("Manage Workout")])],1)],1)])])},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports},"65f0":function(t,e,a){var r=a("861d"),n=a("e8b5"),s=a("b622"),i=s("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var i=r(e);i in t?n.f(t,i,s(0,a)):t[i]=a}},"8c0a":function(t,e,a){},"8d43":function(t,e,a){"use strict";a("8c0a")},9462:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand float-left",attrs:{href:"https://myappr.herokuapp.com/",target:"_blank"}},[t._v(" Fitness Freak ")]),a("ul",{staticClass:"nav navbar-nav flex-row float-right"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/user-dashboard"}},[t._v("Dashboard")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/post"}},[t._v("Post")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userexercise"}},[t._v("Exercise")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-3",attrs:{to:"/userworkout"}},[t._v("Workout")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link pr-4",attrs:{to:"/friends"}},[t._v("Friends")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link mr-4",attrs:{to:"/user-profile"}},[t._v("Profile")])],1),a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-outline-danger",on:{click:t.logout}},[t._v("Logout")])])])])])},n=[],s={name:"TopNavbar",data:function(){return{}},methods:{logout:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("isLoggedIn"),this.$router.push("/")}},mounted:function(){}},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=c.exports},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("23cb"),s=a("a691"),i=a("50c4"),o=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=u("splice"),v=Math.max,f=Math.min,p=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var a,r,u,d,h,m,_=o(this),g=i(_.length),x=n(t,g),C=arguments.length;if(0===C?a=r=0:1===C?(a=0,r=g-x):(a=C-2,r=f(v(s(e),0),g-x)),g+a-r>p)throw TypeError(b);for(u=c(_,r),d=0;d<r;d++)h=x+d,h in _&&l(u,d,_[h]);if(u.length=r,a<r){for(d=x;d<g-r;d++)h=d+r,m=d+a,h in _?_[m]=_[h]:delete _[m];for(d=g;d>g-r+a;d--)delete _[d-1]}else if(a>r)for(d=g-r;d>x;d--)h=d+r-1,m=d+a-1,h in _?_[m]=_[h]:delete _[m];for(d=0;d<a;d++)_[d+x]=arguments[d+2];return _.length=g-r+a,u}})},b727:function(t,e,a){var r=a("0366"),n=a("44ad"),s=a("7b0b"),i=a("50c4"),o=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,d=6==t,v=7==t,f=5==t||d;return function(p,b,h,m){for(var _,g,x=s(p),C=n(x),k=r(b,h,3),w=i(C.length),y=0,E=m||o,A=e?E(p,w):a||v?E(p,0):void 0;w>y;y++)if((f||y in C)&&(_=C[y],g=k(_,y,x),t))if(e)A[y]=g;else if(g)switch(t){case 3:return!0;case 5:return _;case 6:return y;case 2:c.call(A,_)}else switch(t){case 4:return!1;case 7:c.call(A,_)}return d?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c740:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").findIndex,s=a("44d2"),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},dbec:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("topnavbar"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("Sidebar")],1),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"routerview"},[a("router-view")],1),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"container"},[a("p",{domProps:{innerHTML:t._s(t.error)}}),a("div",{staticClass:"portlet box blue",staticStyle:{width:"1000px",opacity:"0.95"}},[t._m(0),a("div",{staticClass:"portlet-body"},[a("div",{staticClass:"mycss"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.exercises,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.description))]),a("td",[t._v(t._s(e.sets))]),a("td",[t._v(t._s(e.caloriesBurnt))]),a("td",[t._v(t._s(e.workoutStage))]),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.deleteExercise(e._id)}}},[t._v(" Delete ")])])])})),0)])]),a("br"),a("div",{staticStyle:{textAlign:"center"}},[a("router-link",{attrs:{to:"/admin-page/manage-exercise/add"}},[a("button",{staticClass:"btn btn-primary pull-right"},[t._v(" Add Exercise ")])])],1),a("br")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portlet-title"},[a("div",{staticClass:"caption"},[a("i",{staticClass:"fa fa-gift"}),t._v("Exercise List")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v(" Exercise Name ")]),a("td",[t._v(" description ")]),a("td",[t._v(" Sets ")]),a("td",[t._v(" CakiruesBurnt ")]),a("td",[t._v(" WorkoutStage ")]),a("td",[t._v(" Delete ")])])])}],s=(a("c740"),a("a434"),a("bc3a")),i=a.n(s),o=a("9462"),c=a("5ea5"),l={data:function(){return{exercises:[]}},methods:{deleteExercise:function(t){var e=this,a="http://localhost:8000/api/exercises/".concat(t),r=this.exercises.findIndex((function(e){return e._id===t}));window.confirm("Do you really want to delete?")&&i.a.delete(a).then((function(){e.exercises.splice(r,1),console.log("adfafda")})).catch((function(t){console.log(t)}))}},components:{topnavbar:o["a"],Sidebar:c["a"]},mounted:function(){var t=this;i.a.get("http://localhost:8000/api/exercises").then((function(e){t.exercises=e.data,console.log("aaaaaaaaaa",e.data)})).catch((function(t){console.log(t)}))}},u=l,d=(a("8d43"),a("2877")),v=Object(d["a"])(u,r,n,!1,null,null,null);e["default"]=v.exports},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-d9906380.0b321e69.js.map