(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,a,t){e.exports=t(83)},74:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),l=t(19),i=t(32),s=t(14),u=t(118),m=t(135),d=t(120),p=t(85),b=(t(74),Object(p.a)({AppBar:{background:"#222629",height:70},Tab:{color:"#94b4c3",fontSize:15,height:70}})),h=Object(i.e)(function(e){var a=e.history,t=Object(n.useState)(0),o=Object(s.a)(t,2),c=o[0],i=o[1];Object(n.useEffect)(function(){switch(!0){case"/"===a.location.pathname:i(0);break;case a.location.pathname.includes("/match/"):i(1);break;case a.location.pathname.includes("/player/"):i(2);break;default:i(0)}},[a.location.pathname]);var p=b();return r.a.createElement(u.a,{className:p.AppBar,position:"static"},r.a.createElement(m.a,{value:c,onChange:function(e,a){return i(a)},centered:!0,textColor:"primary",indicatorColor:"primary"},r.a.createElement(d.a,{className:p.Tab,label:"Dotabuff",component:l.b,to:"/"}),r.a.createElement(d.a,{className:p.Tab,label:"Match",component:l.b,to:"/match/"}),r.a.createElement(d.a,{className:p.Tab,label:"Player",component:l.b,to:"/player/"})))}),f=t(121),g=t(122),E=t(123),v=t(79),y=t(84),w=t(62),N=t(124),j=t(125),x=t(126),O=t(137),q=function(){return fetch("https://dotabuff.herokuapp.com/getHeroes").then(function(e){return e.json()}).then(function(e){return e.result.heroes})},S=function(e,a){return e.filter(function(e){return e.id===a})[0].name.replace("npc_dota_hero_","")},k=Object(f.a)(function(e){return{paper:{width:"90vw",margin:"10px auto",backgroundColor:"#222629",marginTop:e.spacing(2),overflowX:"auto",flexWrap:"wrap"},table:{minWidth:650},head:{color:"#94b4c3"},body:{color:"#eee2dc"},tablecell:{borderBottomColor:"#3f51b5"},headerrow:{borderBottom:"none"},headercell:{color:"#3f51b5"},gray:{color:"#94b4c3",borderBottom:"none"},text:{color:"#94b4c3",padding:e.spacing(1)},toppaper:{display:"flex",justifyContent:"space-around"},chipwin:{color:"#5cdb95",borderColor:"#5cdb95",marginLeft:5},chiplose:{color:"#9a1750",borderColor:"#9a1750",marginLeft:5},name:{color:"#eee2dc",marginTop:-40,marginLeft:50,lineHeight:"36px"}}}),C=function(e){var a=e.data,t=a.dire_score,o=a.duration,c=a.match_id,l=a.players,i=a.radiant_score,u=a.radiant_win,m=a.start_time,d=Object(n.useState)(),p=Object(s.a)(d,2),b=p[0],h=p[1],f=Object(n.useState)(!1),C=Object(s.a)(f,2),_=C[0],M=C[1];Object(n.useEffect)(function(){return M(!1),void q().then(function(e){return h(e)}).then(function(){return M(!0)})},[]);var L=k(),D=function(e){return e.map(function(e){return r.a.createElement(g.a,{key:e.hero_id,hover:!0},r.a.createElement(E.a,{classes:{body:L.body,root:L.tablecell}},!_&&"".concat(e.hero_id),_&&r.a.createElement(v.a,{alt:"avatar",src:"http://cdn.dota2.com/apps/dota2/images/heroes/".concat(S(b,e.hero_id),"_sb.png")}),_&&r.a.createElement(y.a,{className:L.name},e.personaname||"Nickname")),r.a.createElement(E.a,{classes:{body:L.body,root:L.tablecell},align:"center"},e.kills,"/",e.deaths,"/",e.assists),r.a.createElement(E.a,{classes:{body:L.body,root:L.tablecell},align:"center"},e.gold_per_min),r.a.createElement(E.a,{classes:{body:L.body,root:L.tablecell},align:"center"},e.xp_per_min),r.a.createElement(E.a,{classes:{body:L.body,root:L.tablecell},align:"center"},e.last_hits,"/",e.denies))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"".concat(L.paper," ").concat(L.toppaper)},r.a.createElement(y.a,{className:L.text},"Match ",c),r.a.createElement(y.a,{className:L.text},"Duration ",Math.trunc(o/60),":",o%60),r.a.createElement(y.a,{className:L.text},"Started: ","".concat(function(e){var a=new Date(1e3*e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],r=a.getDate(),o=a.getHours(),c=a.getMinutes(),l=a.getSeconds();return"".concat(r," ").concat(n," ").concat(t," ").concat(o,":").concat(c,":").concat(l)}(m)))),r.a.createElement(w.a,{className:L.paper},r.a.createElement(N.a,{className:L.table,size:"small"},r.a.createElement(j.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,{classes:{head:L.head,root:L.tablecell}},"Hero"),r.a.createElement(E.a,{classes:{head:L.head,root:L.tablecell},align:"center"},"K/D/A"),r.a.createElement(E.a,{classes:{head:L.head,root:L.tablecell},align:"center"},"GPM"),r.a.createElement(E.a,{classes:{head:L.head,root:L.tablecell},align:"center"},"XPM"),r.a.createElement(E.a,{classes:{head:L.head,root:L.tablecell},align:"center"},"LH/DN"))),r.a.createElement(x.a,null,r.a.createElement(g.a,{classes:{root:L.gray}},r.a.createElement(E.a,{classes:{body:L.headercell,root:L.headerrow},align:"center"},"Radiant ",u?r.a.createElement(O.a,{label:"Win",className:L.chipwin,variant:"outlined"}):r.a.createElement(O.a,{label:"Lose",className:L.chiplose,variant:"outlined"})),r.a.createElement(E.a,{classes:{body:L.body,root:L.gray},align:"left"}," Score: ",i)),D(l.filter(function(e){return e.isRadiant})),r.a.createElement(g.a,null,r.a.createElement(E.a,{classes:{body:L.headercell,root:L.headerrow},align:"center"},"Dire ",u?r.a.createElement(O.a,{label:"Lose",className:L.chiplose,variant:"outlined"}):r.a.createElement(O.a,{label:"Win",className:L.chipwin,variant:"outlined"})),r.a.createElement(E.a,{classes:{body:L.body,root:L.gray},align:"left"},"Score: ",t)),D(l.filter(function(e){return!e.isRadiant}))))))},_=t(59),M=(t(81),function(){var e=Object(_.cn)("Loading");return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:e()}))}),L=function(e){var a=e.match,t=Object(n.useState)(),o=Object(s.a)(t,2),c=o[0],l=o[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(!1),b=Object(s.a)(p,2),h=b[0],f=b[1];return Object(n.useEffect)(function(){return e=a.params.id,f(!0),d(!1),void fetch("https://api.opendota.com/api/matches/".concat(e)).then(function(e){return e.json()}).then(function(e){return l(e),e}).then(function(e){return console.log(e)}).then(function(){return d(!0)}).then(function(){return f(!1)});var e},[a.params.id]),r.a.createElement("main",null,!m&&h&&r.a.createElement(M,null),m&&r.a.createElement(C,{data:c}))},D=t(39),W=t(127),A=t(138),B=Object(f.a)(function(e){return{paper:{backgroundColor:"#222629",marginTop:e.spacing(3),overflowX:"auto"},head:{color:"#94b4c3"},body:{color:"#eee2dc"},tablecell:Object(D.a)({borderBottomColor:"#3f51b5"},e.breakpoints.down("sm"),{padding:"14px 4px"}),chip:{color:"#5cdb95",borderColor:"#5cdb95",margin:"20px auto 0",display:"flex",width:200},avatar:{height:33,width:59},root:{border:"1px solid white",borderRadius:"0"},text:Object(D.a)({color:"#eee2dc",marginLeft:30},e.breakpoints.down("sm"),{marginLeft:8}),chipwin:{color:"#5cdb95",borderColor:"#5cdb95",marginLeft:5},chiplose:{color:"#9a1750",borderColor:"#9a1750",marginLeft:5},wrapper:{display:"flex",alignItems:"center",backgroundColor:"transparent"}}}),T=Object(A.a)()(Object(i.e)(function(e){var a=e.recent,t=e.history,o=e.width,c=B(),l=Object(n.useState)(),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),b=p[0],h=p[1],f=Object(n.useState)(o.includes("sm")||o.includes("xs")),k=Object(s.a)(f,2),C=k[0],_=k[1];Object(n.useEffect)(function(){return _(o.includes("sm")||o.includes("xs"))},[o]);return Object(n.useEffect)(function(){return h(!1),void q().then(function(e){return m(e)}).then(function(){return h(!0)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{label:"Recent Matches",className:c.chip,variant:"outlined"}),r.a.createElement(w.a,{className:c.paper},r.a.createElement(N.a,null,r.a.createElement(j.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"Hero"),r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"W/L"),!C&&r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"K/D/A"),!C&&r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"Duration"),!C&&r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"GPM"),!C&&r.a.createElement(E.a,{classes:{head:c.head,root:c.tablecell},align:"center"},"XPM"))),r.a.createElement(x.a,null,a.map(function(e){return r.a.createElement(g.a,{key:e.match_id,hover:!0,onClick:function(){return t.push("/match/".concat(e.match_id))}},r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell}},!b&&"".concat(e.hero_id),b&&r.a.createElement(w.a,{className:c.wrapper,elevation:0},r.a.createElement(v.a,{alt:"avatar",src:"http://cdn.dota2.com/apps/dota2/images/heroes/".concat(S(u,e.hero_id),"_sb.png"),className:c.avatar,classes:{root:c.root}}),r.a.createElement(y.a,{className:c.text},S(u,e.hero_id).replace("_"," ").toUpperCase()))),r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell},align:"center"},b&&e.radiant_win?e.player_slot<128?r.a.createElement(O.a,{label:"Win",className:c.chipwin,variant:"outlined"}):r.a.createElement(O.a,{label:"Lose",className:c.chiplose,variant:"outlined"}):e.player_slot>=128?r.a.createElement(O.a,{label:"Win",className:c.chipwin,variant:"outlined"}):r.a.createElement(O.a,{label:"Lose",className:c.chiplose,variant:"outlined"})),!C&&r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell},align:"center"},e.kills,"/",e.deaths,"/",e.assists),!C&&r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell},align:"center"},Math.round(e.duration/60)),!C&&r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell},align:"center"},e.gold_per_min),!C&&r.a.createElement(E.a,{classes:{body:c.body,root:c.tablecell},align:"center"},e.xp_per_min))})))))})),F=Object(f.a)(function(e){return{wrapper:{width:"90vw",margin:"20px auto",backgroundColor:"transparent"},avatar:{height:64,width:64},root:{border:"1px solid white",borderRadius:"50%"},header:Object(D.a)({backgroundColor:"#222629",display:"flex",alignItems:"center",padding:10,justifyContent:"space-between"},e.breakpoints.down(600),{flexDirection:"column"}),text:{marginLeft:25,color:"#3f51b5"},head:{color:"#94b4c3"},body:{color:"#eee2dc"},tableheadcell:{borderBottomColor:"#3f51b5"},tablebodycell:{borderBottom:"none"},win:{color:"#5cdb95"},lose:{color:"red"},stats:Object(D.a)({backgroundColor:"#424242"},e.breakpoints.down(600),{marginTop:25}),trpaper:{display:"flex",alignItems:"center",backgroundColor:"transparent"}}}),I=function(e){var a=e.player,t=e.recent,n=e.wl,o=a.mmr_estimate.estimate,c=a.profile,l=c.avatarfull,i=c.personaname,s=c.profileurl,u=n.win,m=n.lose,d=F();return r.a.createElement(w.a,{className:d.wrapper,elevation:0},r.a.createElement(w.a,{className:d.header},r.a.createElement(w.a,{className:d.trpaper,elevation:0},r.a.createElement(v.a,{alt:"avatar",src:l,className:d.avatar,classes:{root:d.root}}),r.a.createElement(W.a,{className:d.text,href:s},i)),r.a.createElement(w.a,{className:d.stats},r.a.createElement(N.a,null,r.a.createElement(j.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,{classes:{head:d.head,root:d.tableheadcell}},"Win-Loss"),r.a.createElement(E.a,{classes:{head:d.head,root:d.tableheadcell},align:"center"},"MMR"),r.a.createElement(E.a,{classes:{head:d.head,root:d.tableheadcell},align:"center"},"Winrate"))),r.a.createElement(x.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,{classes:{body:d.body,root:d.tablebodycell},component:"th",scope:"row"},r.a.createElement(y.a,{display:"inline",className:d.win},u),"-",r.a.createElement(y.a,{display:"inline",className:d.lose},m)),r.a.createElement(E.a,{classes:{body:d.body,root:d.tablebodycell},align:"center"},o),r.a.createElement(E.a,{classes:{body:d.body,root:d.tablebodycell},align:"center"},Math.round(u/(u+m)*100)," %")))))),r.a.createElement(T,{recent:t}))},P=function(e){var a=e.match,t=Object(n.useState)(),o=Object(s.a)(t,2),c=o[0],l=o[1],i=Object(n.useState)(),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(),b=Object(s.a)(p,2),h=b[0],f=b[1],g=Object(n.useState)(!1),E=Object(s.a)(g,2),v=E[0],y=E[1],w=Object(n.useState)(!1),N=Object(s.a)(w,2),j=N[0],x=N[1];return Object(n.useEffect)(function(){return e=a.params.id,x(!0),y(!1),void fetch("https://api.opendota.com/api/players/".concat(e)).then(function(e){return e.json()}).then(function(a){return l(a),console.log("player",a),fetch("https://api.opendota.com/api/players/".concat(e,"/recentMatches"))}).then(function(e){return e.json()}).then(function(a){return d(a),console.log("recent",a),fetch("https://api.opendota.com/api/players/".concat(e,"/wl"))}).then(function(e){return e.json()}).then(function(e){f(e),console.log("wl",e)}).then(function(){return y(!0)}).then(function(){return x(!1)});var e},[a.params.id]),r.a.createElement("main",null,!v&&j&&r.a.createElement(M,null),v&&r.a.createElement(I,{player:c,recent:m,wl:h}))},R=t(134),H=t(139),J=t(129),U=Object(p.a)({textField:{marginLeft:10,marginRight:10,width:200,color:"#94b4c3"},gray:{color:"#94b4c3"},input:{display:"none"},form:{display:"flex",alignItems:"center"},button:{height:56,marginTop:8,boxSizing:"border-box"},root:{"& label":{color:"#6b6e70"},"& label.Mui-focused":{color:"#45a29e"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#474b4f"},"&:hover fieldset":{borderColor:"#6b6e70"},"&.Mui-focused fieldset":{borderColor:"#45a29e",borderLeftWidth:6,padding:"4px !important"}}}}),V=function(e){var a=e.placeholder,t=e.value,o=e.forplayer,c=(e.formatch,Object(n.useState)(t||"")),i=Object(s.a)(c,2),u=i[0],m=i[1],d=U(),p=o?"/player/".concat(u):"/match/".concat(u);return r.a.createElement("form",{className:d.form},r.a.createElement(R.a,{label:a,defaultValue:u,onChange:function(e){return m(e.target.value)},onSubmit:function(e){return e.preventDefault()},className:d.textField,classes:{root:d.root},InputProps:{className:d.gray},margin:"normal",autoFocus:!!t,variant:"outlined"}),r.a.createElement(H.a,{title:!u&&"You must specify ID field",disableHoverListener:!!u},r.a.createElement(J.a,{variant:"outlined",color:"primary",className:d.button,component:l.b,to:p},"Search")))},X=t(130),z=t(131),Q=t(132),G=t(133),K=Object(f.a)({card:{maxWidth:400,backgroundColor:"#222629",marginBottom:30},paper:{width:"85vw",margin:"70px auto 0",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"transparent",flexWrap:"wrap"},button:{},text:{color:"#eee2dc"},header:{color:"#5cdb95"},action:{justifyContent:"center"},divider:{backgroundColor:"#5cdb95",marginBottom:10}}),Y=function(){var e=K();return r.a.createElement(w.a,{className:e.paper,elevation:0},r.a.createElement(X.a,{className:e.card},r.a.createElement(z.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",className:e.header},"Search Matches"),r.a.createElement(Q.a,{variant:"middle",className:e.divider}),r.a.createElement(y.a,{variant:"body2",className:e.text,component:"p"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.")),r.a.createElement(G.a,{className:e.action},r.a.createElement(H.a,{title:"Find out DOTA2 matches statistics!"},r.a.createElement(J.a,{variant:"outlined",color:"primary",className:e.button,component:l.b,to:"/match/"},"Search Match")))),r.a.createElement(X.a,{className:e.card},r.a.createElement(z.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",className:e.header},"Search Players"),r.a.createElement(Q.a,{variant:"middle",className:e.divider}),r.a.createElement(y.a,{variant:"body2",className:e.text,component:"p"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.")),r.a.createElement(G.a,{className:e.action},r.a.createElement(H.a,{title:"Find out DOTA2 players statistics!"},r.a.createElement(J.a,{variant:"outlined",color:"primary",className:e.button,component:l.b,to:"/player/"},"Search Player")))),r.a.createElement(X.a,{className:e.card},r.a.createElement(z.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",className:e.header},"Search Matches"),r.a.createElement(Q.a,{variant:"middle",className:e.divider}),r.a.createElement(y.a,{variant:"body2",className:e.text,component:"p"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique perspiciatis corrupti optio iure explicabo repellat eos incidunt suscipit. Voluptatum libero nisi, consectetur culpa quod vel eum sed laborum quos fuga inventore reiciendis dolores consequuntur illum. Magni reiciendis quia quam. Quod, laborum corporis. Dolorem laudantium fugiat, exercitationem voluptatum consequatur ipsam ullam libero quaerat deleniti iusto consectetur itaque doloribus, magni quasi voluptate, illo voluptatem distinctio. Debitis adipisci, ratione consectetur facere dolorum id perferendis pariatur nam dicta iusto corporis delectus, sed sunt, nostrum nulla odit exercitationem quae error? A vitae facere, dolorum dolorem incidunt, officiis animi magnam ducimus quam sed voluptatum! Fugit, repellendus.")),r.a.createElement(G.a,{className:e.action},r.a.createElement(H.a,{title:"Main page"},r.a.createElement(J.a,{variant:"outlined",color:"primary",className:e.button,component:l.b,to:"/"},"Search")))))},$=(t(82),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(h,null),r.a.createElement(i.a,{path:"/",exact:!0,component:Y}),r.a.createElement(i.a,{path:"/match/",exact:!0,render:function(){return r.a.createElement(V,{forplayer:!1,placeholder:"Match ID"})}}),r.a.createElement(i.a,{path:"/player/",exact:!0,render:function(){return r.a.createElement(V,{forplayer:!0,placeholder:"Player ID",value:"212884473"})}}),r.a.createElement(i.a,{path:"/match/:id",component:L}),r.a.createElement(i.a,{path:"/player/:id",component:P})))}),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dotabuff",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/dotabuff","/service-worker.js");Z?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ee(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ee(a,e)})}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.44f21161.chunk.js.map