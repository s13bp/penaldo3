(this["webpackJsonp@login-with-metamask/frontend"]=this["webpackJsonp@login-with-metamask/frontend"]||[]).push([[0],{14:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);n(14);var c=n(12),a=n(1),s=n(13),r=n.n(s),i=n(4),o=(n(23),n(3)),u=n(6),l=n(7),d=n.n(l),j=(n(26),n(0)),b=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2);t[0],t[1];return Object(j.jsx)("div",{className:"mintzy",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"box box1",children:[Object(j.jsx)("h2",{}),Object(j.jsx)("button",{className:"buttonz",children:"PLACE BET"})]}),Object(j.jsxs)("div",{className:"box box2",children:[Object(j.jsx)("h2",{}),Object(j.jsx)("button",{className:"buttonz",children:"FANTASY LEAGUE"})]}),Object(j.jsxs)("div",{className:"box box3",children:[Object(j.jsx)("h2",{}),Object(j.jsx)("button",{className:"buttonz",children:"STAKE"})]})]})})},h=(n(28),n.p+"static/media/PENALDO.98d36470.png"),p=void 0,O=function(e){var t=e.onLoggedIn,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],r=c[1],l=function(e){var t=e.publicAddress,n=e.signature;return fetch("".concat("https://peaceful-crag-68748.herokuapp.com/api","/auth"),{body:JSON.stringify({publicAddress:t,signature:n}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},b=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n,c,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.publicAddress,c=t.nonce,e.prev=1,e.next=4,p.eth.personal.sign("I am signing my one-time nonce: ".concat(c),n,"");case 4:return a=e.sent,e.abrupt("return",{publicAddress:n,signature:a});case 8:throw e.prev=8,e.t0=e.catch(1),new Error("You need to sign the message to be able to log in.");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return fetch("".concat("https://peaceful-crag-68748.herokuapp.com/api","/users"),{body:JSON.stringify({publicAddress:e}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))},m=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=3;break}return window.alert("Please install MetaMask first."),e.abrupt("return");case 3:if(p){e.next=14;break}return e.prev=4,e.next=7,window.ethereum.enable();case 7:p=new d.a(window.ethereum),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),window.alert("You need to allow MetaMask."),e.abrupt("return");case 14:return e.next=16,p.eth.getCoinbase();case 16:if(n=e.sent){e.next=20;break}return window.alert("Please activate MetaMask first."),e.abrupt("return");case 20:c=n.toLowerCase(),r(!0),fetch("".concat("https://peaceful-crag-68748.herokuapp.com/api","/users?publicAddress=").concat(c)).then((function(e){return e.json()})).then((function(e){return e.length?e[0]:O(c)})).then(b).then(l).then(t).catch((function(e){window.alert(e),r(!1)}));case 23:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:h,className:"pic"}),Object(j.jsx)("button",{className:"Login-button Login-mm",onClick:m,children:s?"Loading...":"Web3 Login"})]}),Object(j.jsx)("div",{})]})},m=n(2),f=(n(29),n(10)),g=function(e){var t=e.auth,n=e.onLoggedOut,c=Object(a.useState)({loading:!1,user:void 0,username:""}),s=Object(i.a)(c,2),r=s[0],o=s[1];Object(a.useEffect)((function(){var e=t.accessToken,n=Object(f.a)(e).payload.id;fetch("".concat("https://peaceful-crag-68748.herokuapp.com/api","/users/").concat(n),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return o(Object(m.a)(Object(m.a)({},r),{},{user:e}))})).catch(window.alert)}),[]);var u=t.accessToken,l=(Object(f.a)(u).payload.publicAddress,r.loading,r.user),d=l&&l.username;return Object(j.jsxs)("div",{className:"Profile ",children:[Object(j.jsxs)("div",{className:"names",children:[d?Object(j.jsx)("pre",{children:d}):""," ",Object(j.jsx)("pre",{})]}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{className:"Login-button Login-mm",onClick:n,children:"Logout"})}),Object(j.jsx)("button",{className:"live",children:"LIVE STREAM"})]})},x=n.p+"static/media/PENALDO.98d36470.png",v="login-with-metamask:auth",w=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(v),t=e&&JSON.parse(e);c({auth:t})}),[]);var s=n.auth;return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"App-intro",children:s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:x,className:"App-logo",alt:"logo"}),Object(j.jsx)("div",{className:"App-title",children:" STREAM "}),Object(j.jsx)("div",{className:"App-title",children:" BET "}),Object(j.jsx)("div",{className:"App-title",children:" PLAY "}),Object(j.jsx)("div",{className:"App-title",children:" STAKE "})]}),Object(j.jsx)(g,{auth:s,onLoggedOut:function(){localStorage.removeItem(v),c({auth:void 0})}}),Object(j.jsx)(b,{})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{onLoggedIn:function(e){localStorage.setItem(v,JSON.stringify(e)),c({auth:e})}})})})})};Object(c.config)({path:".env.production"}),r.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e732261.chunk.js.map