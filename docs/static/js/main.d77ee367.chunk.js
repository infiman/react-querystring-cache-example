(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(138)},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(12),o=t.n(i),l=t(18),c=t(45),d=t.n(c),m=t(9),s=t(21),u=t(158),p=t(165),h=t(162),f=t(154),g=t(155),b=t(22),v=t(96),E=t(46),y=r.a.createContext({}),x=function(e,a){var t=a.persist,n=a.scope,r=a.pathname,i=a.add,o=a.remove;return{state:Object(v.a)({},e.createStateObject({persist:t,scope:n||r,mutation:{add:i,remove:o}})),pathname:r,search:e.resolveQueryString(n||r,{add:i,remove:o})}},w=Object(s.d)(function(e){var a=e.history,t=e.children,n=e.options,i=r.a.useContext(y).queryStore,o=r.a.useState(),l=Object(b.a)(o,2)[1];return r.a.useEffect(function(){return a.listen(function(e){(i||Object(E.createQueryStore)(n)).add(e),l()})},[]),r.a.createElement(y.Provider,{value:{resolvePath:x,queryStore:i||Object(E.createQueryStore)(n)}},t)}),O=function(e){var a=e.persist,t=void 0!==a&&a,n=e.scope,i=e.pathname,o=e.children,l=e.add,c=e.remove,d=r.a.useContext(y),m=d.queryStore;return o({path:(0,d.resolvePath)(m,{persist:t,scope:n,pathname:i,add:l,remove:c})})},k=t(161),D=t(29),S=t.n(D),G=S.a.debounce(function(e){var a=e.history,t=e.queryStore,n=e.resolvePath,r=e.value;return a.push(n(t,{scope:"*",pathname:"/explore",add:{query:r}}))},250),z=Object(s.d)(function(e){var a=e.history,t=e.location.search,n=r.a.useContext(y),i=n.queryStore,o=n.resolvePath,l=i.parseQueryString(t).query;return r.a.createElement(p.a,{pad:{horizontal:"xlarge"},flex:"grow"},r.a.createElement(k.a,{defaultValue:l||"",placeholder:"Search...",onChange:function(e){var t=e.target.value;return G({history:a,queryStore:i,resolvePath:o,value:t})}}))}),T=t(168),A=t(157),q=t(164),P=t(172),W=t(170),H=t(166),I=t(148),C=t(94),F=t.n(C),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"Home")),r.a.createElement(p.a,{flex:"grow"},r.a.createElement(T.a,{fill:!0},r.a.createElement(p.a,{background:"dark-1",fill:!0},r.a.createElement(A.a,{controls:!1,fit:"cover",autoPlay:!0,mute:!0,loop:!0},r.a.createElement("source",{key:"video",src:F.a,type:"video/mp4"}))),r.a.createElement(p.a,{background:{color:"dark-1",opacity:"strong"},fill:!0,align:"center",pad:{top:"100px",horizontal:"medium"}},r.a.createElement(q.a,{size:"large",textAlign:"center"},"...world never says \u201chello\u201d back..."),r.a.createElement(P.a,{textAlign:"center",margin:{bottom:"75px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.a.createElement(O,{pathname:"/explore"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(W.a,{as:"span",primary:!0,label:r.a.createElement(p.a,{direction:"row",pad:"xsmall",align:"center"},r.a.createElement(H.a,{weight:"bold",margin:{right:"10px"},size:"xxlarge"},"EXPLORE"),r.a.createElement(I.a,{color:"dark-1",size:"large"}))}))})))))},Q=t(167),B=t(149),Y=t(150),L=Object(s.d)(function(e){var a=e.video,t=e.location.search,n=r.a.useContext(y).queryStore;return r.a.createElement(p.a,{width:"330px",height:"small",style:{position:"fixed",bottom:"24px"},overflow:"hidden",elevation:"medium",round:"medium",background:"dark-2",key:n.parseQueryString(t).video},r.a.createElement(O,{pathname:"/explore",remove:{video:void 0}},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(p.a,{style:{position:"fixed",zIndex:2},margin:"small"},r.a.createElement(h.a,{as:"span",icon:r.a.createElement(B.a,null)})))}),r.a.createElement(O,{pathname:"/explore/page"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(p.a,{style:{position:"fixed",zIndex:1,marginTop:"54px"},margin:"small"},r.a.createElement(h.a,{as:"span",icon:r.a.createElement(Y.a,null)})))}),r.a.createElement(A.a,{controls:!1,fit:"cover",autoPlay:!0,mute:!0,loop:!0},r.a.createElement("source",{key:"video",src:a,type:"video/mp4"})))}),R=t(156),M=t(151),U=function(e){var a=e.id,t=e.title,n=e.length,i=e.rating,o=e.video;return r.a.createElement(p.a,{key:a,direction:"row",margin:"medium",background:"light-3",overflow:"hidden",elevation:"small",round:"medium",height:"small"},r.a.createElement(O,{pathname:"/explore",add:{video:a}},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(p.a,{width:"small",height:"small",background:"dark-2"},r.a.createElement(A.a,{controls:!1,fit:"cover",mute:!0,loop:!0},r.a.createElement("source",{key:"video",src:o,type:"video/mp4"}))))}),r.a.createElement(p.a,{width:"medium",height:"small",justify:"between",pad:{horizontal:"small",vertical:"xsmall"}},r.a.createElement(p.a,null,r.a.createElement(O,{scope:"/explore",pathname:"/explore/page",add:{video:a}},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span",size:"medium"},t))}),r.a.createElement(p.a,null,r.a.createElement(H.a,{size:"small",weight:"bold"},n,"m"),r.a.createElement(p.a,{direction:"row",align:"center"},r.a.createElement(H.a,{margin:{right:"10px"},size:"small",weight:"bold"},"Rating:"),r.a.createElement(R.a,{round:!0,type:"bar",background:"light-4",thickness:"small",size:"small",values:[{value:20*i,color:20*i>=50?"status-ok":"status-error"}]}))),r.a.createElement(P.a,{size:"small",margin:"0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),r.a.createElement(p.a,{alignSelf:"end"},r.a.createElement(O,{scope:"/explore",pathname:"/explore/page",add:{video:a,feature:"comments"}},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span",size:"xsmall",icon:r.a.createElement(M.a,{size:"medium"})}))}))))},K=t(171),N=t(169),J=S.a.debounce(function(e){var a=e.history,t=e.resolvePath,n=e.queryStore,r=e.value;return a.push(t(n,{pathname:"/explore",add:{duration:r}}))},250),V=S.a.debounce(function(e){var a=e.history,t=e.resolvePath,n=e.queryStore,r=e.values;return a.push(t(n,{pathname:"/explore",remove:{rating:void 0},add:{rating:r}}))},250),X=Object(s.d)(function(e){var a=e.history,t=e.location.search,n=r.a.useContext(y),i=n.queryStore,o=n.resolvePath,l=i.parseQueryString(t),c=l.duration,d=void 0===c?0:c,m=l.rating,s=void 0===m?[1,5]:m,u=r.a.useState([parseInt(s[0],10),parseInt(s[1],10)]||!1),h=Object(b.a)(u,2),f=h[0],g=h[1],v=r.a.useState(parseInt(d,10)||0),E=Object(b.a)(v,2),x=E[0],w=E[1];return r.a.createElement(p.a,null,r.a.createElement(q.a,{level:3},"Duration(>=):"),r.a.createElement(K.a,{value:x,onChange:function(e){var t=e.target.value;return w(function(){return J({history:a,queryStore:i,resolvePath:o,value:t}),t})}}),r.a.createElement(q.a,{level:3},"Rating:"),r.a.createElement(T.a,null,r.a.createElement(p.a,{direction:"row",justify:"between"},[1,2,3,4,5].map(function(e){return r.a.createElement(p.a,{key:e,pad:"small",border:!1},r.a.createElement(H.a,{style:{fontFamily:"monospace"}},e))})),r.a.createElement(N.a,{direction:"horizontal",invert:!1,min:1,max:5,size:"full",round:"small",values:f,onChange:function(e){return g(function(){return V({history:a,queryStore:i,resolvePath:o,values:e}),e})}})))}),$=t(159),Z=t(163),_=t(152),ee=t(153),ae=t(38),te=t.n(ae),ne=t(53),re=t.n(ne),ie=t(54),oe=t.n(ie),le=t(55),ce=t.n(le),de=t(56),me=t.n(de),se=t(57),ue=t.n(se),pe=t(58),he=t.n(pe),fe=t(59),ge=t.n(fe),be=t(60),ve=t.n(be),Ee=t(61),ye=t.n(Ee),xe=t(62),we=t.n(xe),Oe=t(63),ke=t.n(Oe),De=t(64),Se=t.n(De),Ge=t(65),ze=t.n(Ge),Te=t(66),Ae=t.n(Te),qe=t(67),Pe=t.n(qe),We=[{id:"7a4af374-da90-44bb-9224-97176f881a17",title:"5 Problems Everyone Has With DOG \u2013 How To Solved Them",length:63,rating:4,video:te.a},{id:"28035488-7049-4579-866d-a7052320ec50",title:"Everything You Wanted to Know About DOG and Were Afraid To Ask",length:49,rating:4,video:re.a},{id:"53981331-937b-45ed-b736-6f04b3de6233",title:"Learn Exactly How We Made DOG Last Month",length:25,rating:5,video:oe.a},{id:"0fd7bc1b-3209-4f63-adb0-c26b585c228d",title:"DOG: Do You Really Need It? This Will Help You Decide!",length:46,rating:3,video:ce.a},{id:"aca6c53d-e209-4797-8aa3-f8f2995a9830",title:"DOG Iphone Apps",length:26,rating:4,video:me.a},{id:"ea37499f-cc17-4a19-a7bd-badcd445b058",title:"Why I Hate DOG",length:22,rating:3,video:ue.a},{id:"bf5ecafd-ed66-490b-8c57-d1f02400ff94",title:"The Ugly Truth About DOG",length:36,rating:1,video:he.a},{id:"b8cc5745-dac0-4cc0-a04c-4e1fdf324b1a",title:"How To Win Clients And Influence Markets with DOG",length:55,rating:5,video:ge.a},{id:"9cbd1736-90f2-460c-b2fc-a07aafbf8d91",title:"5 Romantic DOG Ideas",length:80,rating:4,video:ve.a},{id:"37aa744a-6fdd-455a-bada-058546a56a9d",title:"Take The Stress Out Of DOG",length:49,rating:5,video:ye.a},{id:"7ab41473-938e-449a-8804-e197834c944a",title:"Best 50 Tips For DOG",length:67,rating:1,video:we.a},{id:"03dfaa5f-9d88-40bd-ae7c-9d588b27909d",title:"Fall In Love With DOG",length:60,rating:4,video:ke.a},{id:"86e36749-5514-4e6b-a3ee-3329a25badc7",title:"5 Brilliant Ways To Teach Your Audience About DOG",length:91,rating:4,video:Se.a},{id:"a6081a35-8ed2-49ff-a362-87726903d301",title:"How To Take The Headache Out Of DOG",length:66,rating:4,video:ze.a},{id:"39457e92-4347-4f54-b32a-008179f59bcf",title:"Got Stuck? Try These Tips To Streamline Your DOG",length:96,rating:1,video:Ae.a},{id:"d0292f17-4d67-49f3-b233-f09d8c400118",title:"Why Some People Almost Always Make/Save Money With DOG",length:64,rating:1,video:Pe.a},{id:"21f54273-11df-4f7c-91bf-9d2285e3a657",title:"Do DOG Better Than Barack Obama",length:2,rating:4,video:te.a},{id:"a24d38a0-16ee-4d96-b076-7ab5a1f112ba",title:"DOG: An Incredibly Easy Method That Works For All",length:13,rating:1,video:re.a},{id:"0b9df89e-7624-4c7f-b348-f16689c8a8d8",title:"Use DOG To Make Someone Fall In Love With You",length:16,rating:5,video:oe.a},{id:"101f0451-13f2-4bbc-8afc-39d69ea4eeff",title:"DOG Strategies For Beginners",length:84,rating:4,video:ce.a},{id:"382f4cd7-12ec-43f5-bff4-9912be515536",title:"9 Ridiculous Rules About DOG",length:58,rating:4,video:me.a},{id:"32f7d74f-6e7a-4f73-9276-af9e974b04c3",title:"The Ultimate Guide To DOG",length:13,rating:3,video:ue.a},{id:"46229a7b-d5bb-409b-820b-9fdb86bbffe2",title:"How To Start A Business With DOG",length:55,rating:5,video:he.a},{id:"d32d44ff-320f-4db3-a861-7f593278f29c",title:"The Ultimate Deal On DOG",length:0,rating:4,video:ge.a},{id:"b40835ee-5330-48b3-bb87-410419e2b16a",title:"13 Myths About DOG",length:58,rating:4,video:ve.a},{id:"af61eb02-fad1-4dfd-8e6c-ad211c739cd6",title:"How To Buy (A) DOG On A Tight Budget",length:39,rating:5,video:ye.a},{id:"23399674-1b88-487b-b0ce-8b7c2a0c51ca",title:"Why Everything You Know About DOG Is A Lie",length:96,rating:2,video:we.a},{id:"f64b0391-c429-421d-b715-4d386c513fe3",title:"Clear And Unbiased Facts About DOG (Without All the Hype)",length:31,rating:3,video:ke.a},{id:"3b5c756e-b804-4681-9304-0f70432b97f9",title:"Don't Fall For This DOG Scam",length:84,rating:5,video:Se.a},{id:"2290ac54-4d6d-45fc-8d02-4edce249fd82",title:"Are You Embarrassed By Your DOG Skills? Here's What To Do",length:29,rating:2,video:ze.a},{id:"ed6611fb-5bf8-409d-b8c7-835a082c6e85",title:"10 Funny DOG Quotes",length:28,rating:1,video:Ae.a},{id:"bfa81705-bea7-4bcc-b224-fe31ee0afe94",title:"17 Tricks About DOG You Wish You Knew Before",length:70,rating:5,video:Pe.a},{id:"be2156a5-74d6-49f5-b5cc-4998b494aeeb",title:"What Can You Do About DOG Right Now",length:71,rating:2,video:te.a}],He=function(e){var a=e.location.search,t=e.history,n=r.a.useContext(y),i=n.queryStore,o=n.resolvePath,c=function(){return t.push(o(i,{pathname:"/explore"}))},d=i.parseQueryString(a),s=d.video,u=d.feature,f=We.findIndex(function(e){return e.id===s}),g=We[f]||{},b=g.title,v=g.length,E=g.rating,x=g.video;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,b)),r.a.createElement($.a,{margin:{horizontal:"large",top:"large"},full:!0,onClickOutside:c,onEsc:c,position:"bottom"},r.a.createElement(Q.a,{fill:!0,areas:[{name:"video",start:[0,0],end:[0,0]},{name:"description",start:[1,0],end:[1,0]}],columns:["flex","330px"],rows:["flex"]},r.a.createElement(p.a,{width:"auto",height:"auto",gridArea:"video",round:{size:"xsmall",corner:"top-left"},overflow:"hidden"},r.a.createElement(A.a,{fit:"cover",autoPlay:!0,mute:!0,loop:!0},r.a.createElement("source",{key:"video",src:x,type:"video/mp4"}))),r.a.createElement(p.a,{gridArea:"description",background:"light-2",pad:"medium",round:{size:"xsmall",corner:"top-right"},overflow:"hidden"},r.a.createElement(p.a,{alignSelf:"end"},r.a.createElement(O,{pathname:"/explore"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span"},r.a.createElement(_.a,null)))})),r.a.createElement(q.a,{level:1,size:"small"},b),r.a.createElement(p.a,null,r.a.createElement(H.a,{size:"small",weight:"bold"},v,"m"),r.a.createElement(p.a,{direction:"row",align:"center"},r.a.createElement(H.a,{margin:{right:"10px"},size:"small",weight:"bold"},"Rating:"),r.a.createElement(R.a,{round:!0,type:"bar",background:"light-4",thickness:"small",size:"small",values:[{value:20*E,color:20*E>=50?"status-ok":"status-error"}]}))),r.a.createElement(P.a,{size:"small"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),"comments"!==u&&r.a.createElement(O,{pathname:"/explore/page",add:{feature:"comments"}},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span",size:"small"},"Comment"))}),"comments"===u&&r.a.createElement(p.a,{background:"light-1",pad:{top:"large",bottom:"small",horizontal:"small"},flex:"grow",border:"all",round:"xsmall",justify:"between"},r.a.createElement(p.a,{alignSelf:"center"},r.a.createElement(ee.a,{size:"large"})),r.a.createElement(Z.a,{autoFocus:!0,resize:"vertical",placeholder:"Type your comment here..."}))))))},Ie=function(e){e.history;var a=e.match,t=e.location,n=t.search,i=t.pathname,o=r.a.useContext(y).queryStore,c=i.split("/"),d=Object(b.a)(c,3)[2],m=o.parseQueryString(n),u=m.video,h=m.query,f=m.duration,g=m.rating,v=We.findIndex(function(e){return e.id===u}),E=(We[v]||{}).video,x=h||g||f?We.filter(function(e){var a=e.title,t=e.length,n=e.rating;return h&&a.includes(h)||f&&t>=parseInt(f,10)||g&&n>=g[0]&&n<=g[1]}):We;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"Explore")),r.a.createElement(Q.a,{fill:!0,areas:[{name:"nav",start:[0,0],end:[0,0]},{name:"content",start:[1,0],end:[1,0]}],columns:["330px","flex"],rows:["flex"],gap:"medium"},r.a.createElement(p.a,{gridArea:"nav",pad:"medium"},r.a.createElement(q.a,{level:1},"Explore:"),r.a.createElement(X,null),!d&&E&&r.a.createElement(L,{video:E})),r.a.createElement(p.a,{gridArea:"content",pad:"medium"},r.a.createElement(p.a,{direction:"row",wrap:!0},x.map(U)))),r.a.createElement(s.a,{path:"".concat(a.url,"/page"),component:He}))},Ce=t(95),Fe=t.n(Ce),je=(t(136),{arrayFormat:"brackets",addQueryPrefix:!0,ignoreQueryPrefix:!0,interpretNumericEntities:!0}),Qe={parseQueryString:function(e){return d.a.parse(e,je)},stringifyQueryParams:function(e){return d.a.stringify(e,je)}},Be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("link",{rel:"shortcut icon",href:Fe.a,type:"image/x-icon"})),r.a.createElement(m.a,null,r.a.createElement(w,{options:Qe},r.a.createElement(u.a,null,r.a.createElement(p.a,{direction:"row",background:"brand",pad:"small",as:"header",align:"center"},r.a.createElement(O,{pathname:"/"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{icon:r.a.createElement(f.a,{size:"large"}),as:"span",size:"xsmall"}))}),r.a.createElement(z,null),r.a.createElement(O,{pathname:"/"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{icon:r.a.createElement(g.a,{size:"large"}),as:"span",size:"xsmall"}))})),r.a.createElement(p.a,{background:"light-2",as:"main",flex:"grow"},r.a.createElement(s.a,{path:"/",exact:!0,component:j}),r.a.createElement(s.a,{path:"/explore",component:Ie})),r.a.createElement(p.a,{background:"light-4",pad:"small",as:"footer"},r.a.createElement(O,{pathname:"/"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span"},"Home"))}),r.a.createElement(O,{pathname:"/explore"},function(e){var a=e.path;return r.a.createElement(m.b,{to:a},r.a.createElement(h.a,{as:"span"},"Explore"))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(137);o.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,a,t){e.exports=t.p+"static/media/1.e30edf6b.mp4"},53:function(e,a,t){e.exports=t.p+"static/media/2.6fb60432.mp4"},54:function(e,a,t){e.exports=t.p+"static/media/3.045354e3.mp4"},55:function(e,a,t){e.exports=t.p+"static/media/4.b18ec123.mp4"},56:function(e,a,t){e.exports=t.p+"static/media/5.6315d8c5.mp4"},57:function(e,a,t){e.exports=t.p+"static/media/6.1f0d36d4.mp4"},58:function(e,a,t){e.exports=t.p+"static/media/7.cef97286.mp4"},59:function(e,a,t){e.exports=t.p+"static/media/8.a0f159b6.mp4"},60:function(e,a,t){e.exports=t.p+"static/media/9.229b538e.mp4"},61:function(e,a,t){e.exports=t.p+"static/media/10.01ea6f66.mp4"},62:function(e,a,t){e.exports=t.p+"static/media/11.ac5d8f64.mp4"},63:function(e,a,t){e.exports=t.p+"static/media/12.c679f89b.mp4"},64:function(e,a,t){e.exports=t.p+"static/media/13.41d7ccc4.mp4"},65:function(e,a,t){e.exports=t.p+"static/media/14.e6385e65.mp4"},66:function(e,a,t){e.exports=t.p+"static/media/15.f0abaa17.mp4"},67:function(e,a,t){e.exports=t.p+"static/media/16.d976a194.mp4"},94:function(e,a,t){e.exports=t.p+"static/media/home.e495cad1.mp4"},95:function(e,a,t){e.exports=t.p+"static/media/favicon.bdae6aec.ico"}},[[100,1,2]]]);
//# sourceMappingURL=main.d77ee367.chunk.js.map