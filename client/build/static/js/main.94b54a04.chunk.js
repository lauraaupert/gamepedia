(this.webpackJsonpgamedex=this.webpackJsonpgamedex||[]).push([[0],{212:function(e,a,t){e.exports=t(324)},217:function(e,a,t){},218:function(e,a,t){},219:function(e,a,t){},324:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),o=t.n(r),c=(t(217),t(218),t(7)),i=t(34),m=t(374),u=t(375),s=t(74),d=t(66),E=t(178),h=t.n(E),f=t(58),g=t(189),p=(t(219),Object(i.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}))),b={background:"darkgreen",color:"black",fontvariant:"all-petite-caps"};function v(){var e=p(),a=l.a.useState(!0),t=Object(c.a)(a,2),n=t[0],r=(t[1],l.a.useState(null)),o=Object(c.a)(r,2),i=o[0],E=o[1],v=Boolean(i),w=function(){E(null)};return l.a.createElement("div",{className:e.root},l.a.createElement(m.a,{position:"static"},l.a.createElement(u.a,{style:b},l.a.createElement(s.a,{variant:"h6",className:e.title},"Gamedex"),n&&l.a.createElement("div",null,l.a.createElement(d.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit"},l.a.createElement(h.a,null)),l.a.createElement(g.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:w},l.a.createElement(f.a,{onClick:w},"Profile"),l.a.createElement(f.a,{onClick:w},"My Wishlist"))))))}var w=function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};var y=function(){return l.a.createElement("h1",null,"Matt's sexy landing page")},x=t(188),k=t(20),C=t(378),N=t(379),W=t(383),j=t(179),O=[{field:"image",headerName:"Image",width:130},{field:"name",headerName:"Name",width:130},{field:"cost",headerName:"Cost",width:130},{field:"platform",headerName:"Plaform",sortable:!0,width:160,valueGetter:function(e){return"".concat(e.getValue("firstName")||""," ").concat(e.getValue("lastName")||"")}}];function P(e){return l.a.createElement("div",{style:{height:400,width:"100%"}},l.a.createElement(j.a,{rows:e.rows,columns:O,pageSize:5,checkboxSelection:!0}))}var S=Object(i.a)((function(){return{root:{minWidth:800,opacity:"20%"},root2:{minWidth:700,height:700,opacity:"20%"},media:{height:0,paddingcenter:"100%"}}})),G=[{id:1,cost:"Snow",Name:"Jon",platform:35},{id:2,cost:"Rain",Name:"Jess",platform:50}];function L(){var e=S();return l.a.createElement("div",null,l.a.createElement(W.a,{display:"flex",justifyContent:"center",textAlign:"center"},l.a.createElement(C.a,{className:e.root},l.a.createElement(W.a,null,l.a.createElement(N.a,{title:"WistList",subheader:"Choose Your Game"})))),l.a.createElement("br",null),G.length?l.a.createElement(W.a,{display:"flex",justifyContent:"center",textAlign:"center"},l.a.createElement(C.a,{className:e.root2},l.a.createElement(W.a,null,l.a.createElement(N.a,{title:"Game list",subheader:""}),l.a.createElement(P,{rows:G})))):l.a.createElement("h1",null,"Nothing is in here go away"))}var A=function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(L,null))},F=t(190),J=t(113),M=t(384),R=t(382),z=t(380),B=t(387),I=t(142),V=t(67),Y=t(381),q=t(186),T=t.n(q),U=t(330),D=t(139),$=t(112),H=t(132),K=function(e){var a=e.handleChange,t={backgroundColor:"#00801c",margin:"8px 0"},n=H.a().shape({username:H.b("please enter valid email")});return l.a.createElement(z.a,null,l.a.createElement(J.a,{style:{padding:20,height:"61.5vh",width:300,margin:"0 auto"}},l.a.createElement(z.a,{align:"center"},l.a.createElement(B.a,{style:{backgroundColor:"#00801c"}},l.a.createElement(T.a,null)),l.a.createElement("h2",null,"Login")),l.a.createElement($.c,{initialValues:{username:"",password:"",remember:!1},onSubmit:function(e,a){console.log(e)},validationSchema:n},(function(e){return l.a.createElement($.b,null,console.log(e),l.a.createElement(I.a,{label:"Username",name:"username",placeholder:"Enter username",fullWidth:!0,required:!0}),l.a.createElement(I.a,{label:"Password",name:"password",placeholder:"Enter Password",type:"password",fullWidth:!0,required:!0}),l.a.createElement($.a,{as:U.a,name:"remember",control:l.a.createElement(D.a,{color:"#00801c"}),label:"Remember me"}),l.a.createElement(V.a,{type:"submit",style:t,variant:"contained",color:"secondary",fullWidth:!0},"Login"))})),l.a.createElement(s.a,null,l.a.createElement(Y.a,{href:"#"},"Forgot password?")),l.a.createElement(s.a,null," Do you have an account?",l.a.createElement(Y.a,{href:"#",onClick:function(){return a("event",1)}},l.a.createElement("br",null)," Sign up!"))))},Q=t(187),X=t.n(Q),Z=t(385),_=t(388),ee=t(86),ae=t(329),te=function(){return l.a.createElement(z.a,null,l.a.createElement(J.a,{style:{padding:20,width:300,margin:"0 auto"}},l.a.createElement(z.a,{align:"center"},l.a.createElement(B.a,{style:{backgroundColor:"#00801c"}},l.a.createElement(X.a,null)),l.a.createElement("h2",{style:{margin:0}},"Sign up"),l.a.createElement(s.a,{variant:"caption",gutterbottom:!0},"Please fill this form to create an account")),l.a.createElement("form",null,l.a.createElement(I.a,{fullWidth:!0,label:"Name",placeholder:"Enter your name"}),l.a.createElement(I.a,{fullWidth:!0,label:"Email",placeholder:"Enter your Email"}),l.a.createElement(ee.a,{component:"fieldset",style:{marginTop:10}},l.a.createElement(ae.a,{component:"legend"},"Gender"),l.a.createElement(_.a,{"aria-label":"gender",name:"gender",style:{display:"initial"}},l.a.createElement(U.a,{value:"female",control:l.a.createElement(Z.a,null),label:"Female"}),l.a.createElement(U.a,{value:"male",control:l.a.createElement(Z.a,null),label:"Male"}),l.a.createElement(U.a,{value:"other",control:l.a.createElement(Z.a,null),label:"Other"}))),l.a.createElement(I.a,{fullWidth:!0,label:"Phone Number",placeholder:"Enter your Phone Number"}),l.a.createElement(I.a,{fullWidth:!0,label:"Password",placeholder:"Create Your Password"}),l.a.createElement(I.a,{fullWidth:!0,label:"Confirm Password",placeholder:"Confirm Your Password"}),l.a.createElement(U.a,{control:l.a.createElement(D.a,{name:"checkedA",color:"#00801c"}),label:"I accept terms and conditions"}),l.a.createElement(V.a,{type:"submit",style:{backgroundColor:"#00801c",color:"white"},varient:"contained"},"Sign up"))))},ne=function(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=a[0],r=a[1],o=function(e,a){r(a)};function i(e){var a=e.children,t=e.value,n=e.index,r=Object(F.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(W.a,null,l.a.createElement(s.a,null,a)))}return l.a.createElement(J.a,{elevation:20,style:{width:340,margin:"20px auto",opacity:"75%"}},l.a.createElement(M.a,{value:t,indicatorColor:"primary",textColor:"primary",onChange:o,"aria-label":"disabled tabs example"},l.a.createElement(R.a,{label:"Login"}),l.a.createElement(R.a,{label:"Sign up"})),l.a.createElement(i,{value:t,index:0},l.a.createElement(K,{handleChange:o})),l.a.createElement(i,{value:t,index:1},l.a.createElement(te,null)))};var le=function(){return l.a.createElement(ne,null)};var re=function(){return l.a.createElement(x.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/"},l.a.createElement(y,null)),l.a.createElement(k.a,{exact:!0,path:"/login"},l.a.createElement(le,null)),l.a.createElement(k.a,{exact:!0,path:"/Wishlist"},l.a.createElement(A,null)),l.a.createElement(k.a,null,l.a.createElement(w,null)))))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");oe?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):ce(e)}))}}()}},[[212,1,2]]]);
//# sourceMappingURL=main.94b54a04.chunk.js.map