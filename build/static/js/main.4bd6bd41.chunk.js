(this["webpackJsonpsanat-utilities"]=this["webpackJsonpsanat-utilities"]||[]).push([[0],{31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(11),s=n.n(a),u=(n(31),n(14)),i=n(9),o=n(15),p={usersData:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET USER NAMES":return Object(o.a)(Object(o.a)({},e),{},{usersData:t.data});default:return Object(o.a)({},e)}},d=Object(i.c)({homereducer:f}),j=n(25),b=n(21),l=n(5),h=n.n(l),O=n(24),x=n(7),v=function(e){return e.homereducer},m=n(10),w=n(13),E=new(function(){function e(){Object(m.a)(this,e)}return Object(w.a)(e,[{key:"executeAPI",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r="https://sanat-node-server.herokuapp.com/"+e;return new Promise((function(e,c){var a=t,s=new XMLHttpRequest;s.open(a,r,!0),s.setRequestHeader("Content-Type","application/json;charset=UTF-8"),s.onload=function(){var t=s.getResponseHeader("Content-Type").includes("json")?JSON.parse(s.response):s.response;e(t)},null!=n?s.send(JSON.stringify(n)):s.send()}))}}]),e}()),U=h.a.mark(A),S=h.a.mark(C),g=h.a.mark(T),k=h.a.mark(P),y=h.a.mark(I),R=h.a.mark(N),D=h.a.mark(M);function A(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.d)({type:"SET USER NAMES",data:e});case 2:case"end":return t.stop()}}),U)}function C(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.executeAPI("getUsers","GET");case 2:return e=t.sent,t.next=5,Object(x.b)(A,e);case 5:console.log("User data:",e);case 6:case"end":return t.stop()}}),S)}function T(e){var t,n,r,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.user,n={user:t},a.next=4,E.executeAPI("addUser","POST",n);case 4:return a.next=6,Object(x.e)(v);case 6:return r=a.sent,c=[].concat(Object(O.a)(r.usersData),[{Name:t}]),a.next=10,Object(x.b)(A,c);case 10:case"end":return a.stop()}}),g)}function P(e){var t,n,r,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.user,n={user:t},a.next=4,E.executeAPI("removeUser","DELETE",n);case 4:return a.next=6,Object(x.e)(v);case 6:return r=a.sent,c=r.usersData.filter((function(e){return t!==e.Name})),a.next=10,Object(x.b)(A,c);case 10:case"end":return a.stop()}}),k)}function I(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)("DISPLAY USERS",C);case 2:case"end":return e.stop()}}),y)}function N(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)("ADD USER",T);case 2:case"end":return e.stop()}}),R)}function M(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)("REMOVE USER",P);case 2:case"end":return e.stop()}}),D)}var L=h.a.mark(F);function F(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([Object(x.c)(I),Object(x.c)(N),Object(x.c)(M)]);case 2:case"end":return e.stop()}}),L)}var J=Object(j.a)(),Y=Object(i.e)(d,Object(i.a)(J,b.a));J.run(F);var H=Y,q=n(26),B=n(23),V=new(function(e){Object(q.a)(n,e);var t=Object(B.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return n}(n(22).Dispatcher)),G=(new(function(){function e(){Object(m.a)(this,e),this.dispatchToken=V.register(this.dispatcherCallback.bind(this))}return Object(w.a)(e,[{key:"dispatcherCallback",value:function(e){switch(e.type){case"MY TYPE":console.log(e.data)}}}]),e}()),n(4));var X=Object(u.b)((function(e){return{sagaResponse:e.homereducer}}),(function(e){return{displayUser:function(){return e({type:"DISPLAY USERS"})},addUser:function(t){return e({type:"ADD USER",user:t})},removeUser:function(t){return e({type:"REMOVE USER",user:t})}}}))((function(e){var t=e.sagaResponse.usersData,n="",r=function(e){n=e.target.value},c="",a="";return Object(G.jsxs)("div",{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"text",placeholder:"Enter user name",onChange:r,ref:function(e){c=e}}),Object(G.jsx)("button",{onClick:function(){return function(t){e.addUser(t),c.value=""}(n)},children:"Add User"})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"text",placeholder:"Enter user name",onChange:r,ref:function(e){a=e}}),Object(G.jsx)("button",{onClick:function(){return function(t){e.removeUser(t),a.value=""}(n)},children:"Remove User"})]}),Object(G.jsx)("button",{onClick:function(){return e.displayUser()},children:"Display User"}),Object(G.jsx)("div",{children:t.map((function(e,t){return Object(G.jsx)("li",{children:Object(G.jsx)("span",{children:e.Name})},t)}))})]})}));var z=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(u.a,{store:H,children:Object(G.jsx)(X,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(z,{})}),document.getElementById("root")),K()}},[[42,1,2]]]);
//# sourceMappingURL=main.4bd6bd41.chunk.js.map