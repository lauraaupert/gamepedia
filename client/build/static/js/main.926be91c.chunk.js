(this.webpackJsonpgamedex=this.webpackJsonpgamedex||[]).push([[0],{215:function(e,a,t){e.exports=t(326)},220:function(e,a,t){},221:function(e,a,t){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),o=t.n(r),c=(t(220),t(221),t(34)),i=t(378),m=t(379),u=t(385),s=t(174),d=[{field:"image",headerName:"Image",width:130},{field:"name",headerName:"Name",width:130},{field:"cost",headerName:"Cost",width:130},{field:"platform",headerName:"Plaform",sortable:!0,width:160}],h=[{id:1,cost:"Snow",Name:"Jon",platform:35}],E=function(e){return l.a.createElement("div",{style:{height:400,width:"100%"}},l.a.createElement(s.a,{rows:h,columns:d,pageSize:5,checkboxSelection:!0}))},f=Object(c.a)((function(){return{root:{minWidth:800},root2:{minWidth:700,height:700},media:{height:0,paddingcenter:"100%"}}}));function g(){var e=f();return l.a.createElement("div",null,l.a.createElement(u.a,{display:"flex",justifyContent:"center",textAlign:"center"},l.a.createElement(i.a,{className:e.root},l.a.createElement(u.a,null,l.a.createElement(m.a,{title:"WistList",subheader:"Choose Your Game"})))),l.a.createElement("br",null),l.a.createElement(u.a,{display:"flex",justifyContent:"center",textAlign:"center"},l.a.createElement(i.a,{className:e.root2},l.a.createElement(u.a,null,l.a.createElement(m.a,{title:"Game list",subheader:""}),l.a.createElement(E,null)))))}var p=t(7),b=t(380),v=t(377),w=t(74),y=t(66),C=t(180),k=t.n(C),x=t(181),N=t.n(x),W=t(333),S=t(332),j=t(337),O=t(58),P=t(190),L=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(0)},title:{flexGrow:1}}}));function G(){var e=L(),a=l.a.useState(!0),t=Object(p.a)(a,2),n=t[0],r=t[1],o=l.a.useState(null),c=Object(p.a)(o,2),i=c[0],m=c[1],u=Boolean(i),s=function(){m(null)};return l.a.createElement("div",{className:e.root},l.a.createElement(j.a,null,l.a.createElement(S.a,{control:l.a.createElement(W.a,{checked:n,onChange:function(e){r(e.target.checked)},"aria-label":"login switch"}),label:n?"Logout":"Login"})),l.a.createElement(b.a,{position:"static"},l.a.createElement(v.a,null,l.a.createElement(y.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(k.a,null)),l.a.createElement(w.a,{variant:"h6",className:e.title},"Gamedex"),l.a.createElement(w.a,{onClick:!0,variant:"h6",className:e.title},"Steam"),l.a.createElement(w.a,{variant:"h6",className:e.title},"Epic"),n&&l.a.createElement("div",null,l.a.createElement(y.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},l.a.createElement(N.a,null)),l.a.createElement(P.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:s},l.a.createElement(O.a,{onClick:s},"Profile"),l.a.createElement(O.a,{onClick:s},"My Wishlist"))))))}var A=t(191),B=t(116),z=t(386),I=t(384),J=t(381),M=t(389),R=t(142),Y=t(67),q=t(382),F=t(187),T=t.n(F),U=t(140),D=t(115),V=t(133),$=function(e){var a=e.handleChange,t={backgroundColor:"#00801c",margin:"8px 0"},n=V.a().shape({username:V.b("please enter valid email")});return l.a.createElement(J.a,null,l.a.createElement(B.a,{style:{padding:20,height:"61.5vh",width:300,margin:"0 auto"}},l.a.createElement(J.a,{align:"center"},l.a.createElement(M.a,{style:{backgroundColor:"#00801c"}},l.a.createElement(T.a,null)),l.a.createElement("h2",null,"Login")),l.a.createElement(D.c,{initialValues:{username:"",password:"",remember:!1},onSubmit:function(e,a){console.log(e)},validationSchema:n},(function(e){return l.a.createElement(D.b,null,console.log(e),l.a.createElement(R.a,{label:"Username",name:"username",placeholder:"Enter username",fullWidth:!0,required:!0}),l.a.createElement(R.a,{label:"Password",name:"password",placeholder:"Enter Password",type:"password",fullWidth:!0,required:!0}),l.a.createElement(D.a,{as:S.a,name:"remember",control:l.a.createElement(U.a,{color:"#00801c"}),label:"Remember me"}),l.a.createElement(Y.a,{type:"submit",style:t,variant:"contained",color:"secondary",fullWidth:!0},"Login"))})),l.a.createElement(w.a,null,l.a.createElement(q.a,{href:"#"},"Forgot password ?")),l.a.createElement(w.a,null," Do you have an account ?",l.a.createElement(q.a,{href:"#",onClick:function(){return a("event",1)}},"Sign up!"))))},H=t(188),K=t.n(H),Q=t(387),X=t(383),Z=t(86),_=t(329),ee=function(){return l.a.createElement(J.a,null,l.a.createElement(B.a,{style:{padding:20,width:300,margin:"0 auto"}},l.a.createElement(J.a,{align:"center"},l.a.createElement(M.a,{style:{backgroundColor:"#00801c"}},l.a.createElement(K.a,null)),l.a.createElement("h2",{style:{margin:0}},"Sign up"),l.a.createElement(w.a,{variant:"caption",gutterbottom:!0},"Please fill this form to create an account")),l.a.createElement("form",null,l.a.createElement(R.a,{fullWidth:!0,label:"Name",placeholder:"Enter your name"}),l.a.createElement(R.a,{fullWidth:!0,label:"Email",placeholder:"Enter your Email"}),l.a.createElement(Z.a,{component:"fieldset",style:{marginTop:10}},l.a.createElement(_.a,{component:"legend"},"Gender"),l.a.createElement(X.a,{"aria-label":"gender",name:"gender",style:{display:"initial"}},l.a.createElement(S.a,{value:"female",control:l.a.createElement(Q.a,null),label:"Female"}),l.a.createElement(S.a,{value:"male",control:l.a.createElement(Q.a,null),label:"Male"}),l.a.createElement(S.a,{value:"other",control:l.a.createElement(Q.a,null),label:"Other"}))),l.a.createElement(R.a,{fullWidth:!0,label:"Phone Number",placeholder:"Enter your Phone Number"}),l.a.createElement(R.a,{fullWidth:!0,label:"Password",placeholder:"Create Your Password"}),l.a.createElement(R.a,{fullWidth:!0,label:"Confirm Password",placeholder:"Confirm Your Password"}),l.a.createElement(S.a,{control:l.a.createElement(U.a,{name:"checkedA",color:"#00801c"}),label:"I accept terms and conditions"}),l.a.createElement(Y.a,{type:"submit",style:{backgroundColor:"#00801c",color:"white"},varient:"contained"},"Sign up"))))},ae=function(){var e=Object(n.useState)(0),a=Object(p.a)(e,2),t=a[0],r=a[1],o=function(e,a){r(a)};function c(e){var a=e.children,t=e.value,n=e.index,r=Object(A.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(u.a,null,l.a.createElement(w.a,null,a)))}return l.a.createElement(B.a,{elevation:20,style:{width:340,margin:"20px auto",opacity:"75%"}},l.a.createElement(z.a,{value:t,indicatorColor:"primary",textColor:"primary",onChange:o,"aria-label":"disabled tabs example"},l.a.createElement(I.a,{label:"Login"}),l.a.createElement(I.a,{label:"Sign up"})),l.a.createElement(c,{value:t,index:0},l.a.createElement($,{handleChange:o})),l.a.createElement(c,{value:t,index:1},l.a.createElement(ee,null)))},te=t(189),ne=t(20);var le=function(){return l.a.createElement(te.a,null,l.a.createElement(ne.c,null,l.a.createElement("div",{className:"App"},l.a.createElement(ne.a,{exact:!0,path:"/"},l.a.createElement(ae,null)),l.a.createElement(ne.a,{exact:!0,path:["/Navbar","/Wishlist"]},l.a.createElement(G,null),l.a.createElement(g,null)))))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(le,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");re?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):oe(e)}))}}()}},[[215,1,2]]]);
//# sourceMappingURL=main.926be91c.chunk.js.map