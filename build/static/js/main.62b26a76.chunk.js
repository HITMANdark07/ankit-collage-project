(this["webpackJsonpfb-clone"]=this["webpackJsonpfb-clone"]||[]).push([[0],{66:function(e,a,t){e.exports=t(97)},71:function(e,a,t){},72:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),o=(t(71),t(11)),i=(t(72),t(36)),s=t.n(i),m=t(41),u=t.n(m),d=t(42),p=t.n(d),E=t(43),f=t.n(E),h=t(29),g=t.n(h),b=t(44),v=t.n(b),_=t(112),N=t(110),y=t(45),S=t.n(y),j=t(46),w=t.n(j),O=t(47),x=t.n(O),I=t(48),k=t.n(I),D=Object(n.createContext)(),M=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(D.Provider,{value:Object(n.useReducer)(a,t)}," ",r)},B=function(){return Object(n.useContext)(D)};var C=function(){var e=B(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement("img",{className:"i1",src:"https://serving.photos.photobox.com/61203057d9e6c95528bd1560e33d3a28f80dc67e4e26de3409a295b82f1d67e30e5fe766.jpg",alt:""}),l.a.createElement("div",{className:"header__input"},l.a.createElement(s.a,null),l.a.createElement("input",{placeholder:"Search Edgepost",type:"text"}))),l.a.createElement("div",{className:"header__center"},l.a.createElement("div",{className:"header__option header__option--active"},l.a.createElement(u.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(p.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(f.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(g.a,{fontSize:"large"})),l.a.createElement("div",{className:"header__option"},l.a.createElement(v.a,{fontSize:"large"}))),l.a.createElement("div",{className:"header__right"},l.a.createElement("div",{className:"header__info"},l.a.createElement(_.a,{src:t.photoURL}),l.a.createElement("h4",null,t.displayName)),l.a.createElement(N.a,null,l.a.createElement(S.a,null)),l.a.createElement(N.a,null,l.a.createElement(w.a,null)),l.a.createElement(N.a,null,l.a.createElement(x.a,null)),l.a.createElement(N.a,null,l.a.createElement(k.a,null))))};t(78),t(79),t(80);var W=function(e){var a=e.src,t=e.Icon,n=e.title;return l.a.createElement("div",{className:"sidebarRow"},a&&l.a.createElement(_.a,{src:a}),t&&l.a.createElement(t,null),l.a.createElement("h4",null,n))},R=t(49),q=t.n(R),J=t(50),L=t.n(J),P=t(51),z=t.n(P),H=t(52),Q=t.n(H),U=t(53),A=t.n(U),V=t(113);var F=function(){var e=B(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"sidebar"},l.a.createElement(W,{src:t.photoURL,title:t.displayName}),l.a.createElement(W,{Icon:q.a,title:"COVID-19 Information Center"}),l.a.createElement(W,{Icon:L.a,title:"Pages"}),l.a.createElement(W,{Icon:z.a,title:"Friends"}),l.a.createElement(W,{Icon:Q.a,title:"Messenger"}),l.a.createElement(W,{Icon:g.a,title:"Marketplace"}),l.a.createElement(W,{Icon:A.a,title:"Videos"}),l.a.createElement(W,{Icon:V.a,title:"Marketplace"}),l.a.createElement("br",null),l.a.createElement("div",{className:"name"},l.a.createElement("b",null,"Built by ")," ",l.a.createElement("br",null),l.a.createElement("a",null," ",l.a.createElement("b",null,"Group 39 CSE TMSL "))))},G=(t(81),t(82),t(54)),T=t.n(G),K=t(55),X=t.n(K),Z=t(56),$=t.n(Z),Y=t(22),ee=t.n(Y),ae=ee.a.initializeApp({databaseURL:"https://collage-project-70d81-default-rtdb.asia-southeast1.firebasedatabase.app",apiKey:"AIzaSyDmyPpQwm-orpRr1-_GDrtCV6-n5xgk-go",authDomain:"collage-project-70d81.firebaseapp.com",projectId:"collage-project-70d81",storageBucket:"collage-project-70d81.appspot.com",messagingSenderId:"789323818563",appId:"1:789323818563:web:aefc4b09d359cd400d96f6",measurementId:"G-243LKF8MNN"}).firestore(),te=ee.a.auth(),ne=new ee.a.auth.GoogleAuthProvider,le=ae;var re=function(){var e=B(),a=Object(o.a)(e,2),t=a[0].user,r=(a[1],Object(n.useState)("")),c=Object(o.a)(r,2),i=c[0],s=c[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),d=u[0],p=u[1];return l.a.createElement("div",{className:"messageSender"},l.a.createElement("div",{className:"messageSender__top "},l.a.createElement(_.a,{src:t.photoURL}),l.a.createElement("form",null,l.a.createElement("input",{value:i,onChange:function(e){return s(e.target.value)},className:"messageSender__input",placeholder:"What's popping, ".concat(t.displayName," ?")}),l.a.createElement("input",{className:"imgholder",value:d,onChange:function(e){return p(e.target.value)},placeholder:"Image URL (optional)"}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),le.collection("posts").add({message:i,timestamp:ee.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:d}),s(""),p("")},type:"submit"},"Hidden Submit"))),l.a.createElement("div",{className:"messageSender__bottom "},l.a.createElement("div",{className:"messageSender__option"},l.a.createElement(T.a,{style:{color:"red"}}),l.a.createElement("h3",null,"Live Video")),l.a.createElement("div",{className:"messageSender__option"},l.a.createElement(X.a,{style:{color:"#27ae60"}}),l.a.createElement("h3",null,"Photo/Video")),l.a.createElement("div",{className:"messageSender__option"},l.a.createElement($.a,{style:{color:"orange"}}),l.a.createElement("h3",null,"Feeling/Activity"))))};t(93),t(94);var ce=function(e){var a=e.image,t=e.profilesSrc,n=e.title;return l.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"story"},l.a.createElement(_.a,{src:t,className:"story__avatar"}),l.a.createElement("h4",null," ",n))};var oe=function(){return l.a.createElement("div",{className:"storyReel"},l.a.createElement(ce,{image:"https://images.unsplash.com/photo-1598929213197-a0042191f4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",profilesSrc:"https://serving.photos.photobox.com/4089119911de48887add1332edd7192b1a9856c6eb5a7f5bcab5e53c267f0474e9b77f36.jpg",title:"Susnata"}),l.a.createElement(ce,{image:"https://images.unsplash.com/photo-1599206614622-d7dae04bb031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",profilesSrc:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",title:"Alena "}),l.a.createElement(ce,{image:"https://images.unsplash.com/photo-1599168637454-f2944229c953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",profilesSrc:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",title:"Raymond "}),l.a.createElement(ce,{image:" https://images.unsplash.com/photo-1599164735242-5cb1a1a8b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",profilesSrc:"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80",title:"Alex "}),l.a.createElement(ce,{image:"https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",profilesSrc:"https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",title:"Gal "}))},ie=(t(95),t(57)),se=t.n(ie),me=t(58),ue=t.n(me),de=t(59),pe=t.n(de),Ee=t(60),fe=t.n(Ee);var he=function(e){var a=e.profilePic,t=e.image,n=e.username,r=e.timestamp,c=e.message;return l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"post__top"},l.a.createElement(_.a,{src:a,className:"post__avatar"}),l.a.createElement("div",{className:"post__topInfo"},l.a.createElement("h3",null," ",n),l.a.createElement("p",null," ",new Date(null===r||void 0===r?void 0:r.toDate()).toUTCString()," "))),l.a.createElement("div",{className:"post__bottom"},l.a.createElement("p",null,c)),l.a.createElement("div",{className:"post__image"},l.a.createElement("img",{src:t,alt:""})),l.a.createElement("div",{className:"post__options"},l.a.createElement("div",{className:"post__option"},l.a.createElement(se.a,{className:"like2"}),l.a.createElement("p",null,"Like")),l.a.createElement("div",{className:"post__option"},l.a.createElement(ue.a,null),l.a.createElement("p",null,"Comment")),l.a.createElement("div",{className:"post__option"},l.a.createElement(pe.a,null),l.a.createElement("p",null,"Share")),l.a.createElement("div",{className:"post__option"},l.a.createElement(fe.a,null),l.a.createElement(V.a,null))))};var ge=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){le.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),l.a.createElement("div",{className:"feed"},l.a.createElement(oe,null),l.a.createElement(re,null),t.map((function(e){return l.a.createElement(he,{key:e.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image})})))};var be=function(){return l.a.createElement("div",{className:"widgets"},l.a.createElement("iframe",{src:"https://open.spotify.com/embed/playlist/1EtpOzSuCXq0m15xZfWAie",width:"310",height:"1500",frameborder:"0",allowtransparency:"true",allow:"encrypted-media",style:{border:" none ",overflow:"hidden",height:"100%"}}))},ve=(t(96),t(111)),_e=t(32),Ne="SET_USER",ye=function(e,a){switch(console.log(a),a.type){case Ne:return Object(_e.a)(Object(_e.a)({},e),{},{user:a.user});default:return e}};var Se=function(){var e=B(),a=Object(o.a)(e,2),t=(a[0],a[1]);return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__logo"},l.a.createElement("img",{className:"logo1",src:"https://www.shoutmeloud.com/wp-content/uploads/2012/04/Social-Media-for-businesses.jpg",alt:""}),l.a.createElement("img",{className:"logo2",src:"https://kbizsoft.com/wp-content/uploads/2021/08/social-media-marketing.png",alt:""})),l.a.createElement(ve.a,{type:"submit",onClick:function(){te.signInWithPopup(ne).then((function(e){t({type:Ne,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In"))};var je=function(){var e=B(),a=Object(o.a)(e,2),t=a[0].user;return a[1],l.a.createElement("div",{className:"app"},t?l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null),l.a.createElement("div",{className:"app__body"},l.a.createElement(F,null),l.a.createElement(ge,null),l.a.createElement(be,null))):l.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,{initialState:{user:null},reducer:ye},l.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.62b26a76.chunk.js.map