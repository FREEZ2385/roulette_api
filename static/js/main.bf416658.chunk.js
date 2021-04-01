(this.webpackJsonproulette_app=this.webpackJsonproulette_app||[]).push([[0],{53:function(t){t.exports=JSON.parse('{"name":"roulette_app","version":"0.4.0","private":true,"homepage":"http://freez2385.github.io/roulette_api/","dependencies":{"@material-ui/core":"^4.11.3","@material-ui/icons":"^4.11.2","@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.3","gh-pages":"^3.1.0","node-sass":"^5.0.0","react":"^17.0.1","react-cookie":"^4.0.3","react-custom-roulette":"^1.1.8","react-dom":"^17.0.1","react-scripts":"4.0.3","web-vitals":"^1.1.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},63:function(t,e,n){},64:function(t,e,n){},66:function(t,e,n){},71:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),c=(n(63),n(45)),s=n(31),l=(n.p,n(64),n(43)),u=n(110),d=n(111),p=(n(66),n(5)),j=function(t){var e=Object.assign({},t),n=e.rouletteClick,r=e.setRouletteClick,a=e.rouletteData;return Object(p.jsxs)("div",{className:"roulette",children:[Object(p.jsx)(l.Wheel,{mustStartSpinning:n,onStopSpinning:function(){return r(!1)},prizeNumber:Math.floor(Math.random()*a.length),data:a,backgroundColors:["#386fa4","#84d2f6"],innerRadius:20,outerBorderWidth:2,outerBorderColor:"#999999",innerBorderWidth:2,innerBorderColor:"#DDDDDD",radiusLineWidth:1===a.length?0:1,textColors:["#ffffff"]}),Object(p.jsxs)(d.a,{style:{marginBottom:50,width:"30%",position:"absolute",left:"calc(13vw)",top:"calc(26vh)",height:"30%"},onClick:function(){return r(!0)},variant:"contained",color:"primary",children:["\u56de\u308b",Object(p.jsx)("br",{}),"Roll"]})]})},b=n(44),h=n.n(b),f=(n(71),function(t){var e=Object.assign({},t),n=e.rouletteData,r=e.deleteRouletteData,a=e.shuffleRouletteData;return Object(p.jsxs)("div",{className:"entry-list",children:[Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("p",{className:"title-text",children:"\u30a8\u30f3\u30c8\u30ea\u30fc\u4e00\u89a7"}),Object(p.jsx)(d.a,{variant:"contained",color:"primary",style:{marginLeft:15,width:150,height:32,marginTop:"auto",marginBottom:"auto"},onClick:function(){a()},children:"\u9806\u756a\u3092\u5909\u308f\u308b"})]}),Object(p.jsx)("div",{className:"button-list",children:n.map((function(t,e){if(""!==t.option)return Object(p.jsx)(d.a,{variant:"contained",color:"primary",style:{marginRight:15,marginBottom:15},onClick:function(){return r(e)},startIcon:Object(p.jsx)(h.a,{}),children:t.option})}))})]})}),g=n(109),m=(n(76),function(t){var e=Object.assign({},t),n=(e.rouletteData,e.entryName),r=e.addEntryName,a=e.addRouletteData;return Object(p.jsx)("div",{className:"input-text",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"title-text",children:"\u30a8\u30f3\u30c8\u30ea\u30fc\u5165\u529b"}),Object(p.jsx)(g.a,{id:"outlined-basic",label:"\u540d\u524d(name)",variant:"outlined",value:n,onChange:function(t){return r(t.target.value)},style:{backgroundColor:"white",width:"100%"},onKeyPress:function(t){"Enter"===t.key&&""!==n&&a(n)}}),Object(p.jsx)(d.a,{variant:"contained",color:"primary",style:{marginTop:10,width:100,float:"right"},onClick:function(){""!==n&&a(n)},children:"\u8ffd\u52a0"})]})})}),x=n(53);var O=function(){var t=Object(r.useState)(!1),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)([{option:""}]),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(u.a)(["rouletteData"]),h=Object(s.a)(b,3),g=h[0],O=h[1],v=(h[2],Object(r.useState)("")),D=Object(s.a)(v,2),y=D[0],C=D[1];return Object(r.useEffect)((function(){g.rouletteData&&d(g.rouletteData)}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{style:{textAlign:"center",fontSize:24,marginTop:20},children:["\u30eb\u30fc\u30ec\u30c3\u30c8\uff06\u9806\u756a\u6c7a\u3081 ",Object(p.jsx)("br",{}),"Roulette & OrderNumber"]}),Object(p.jsxs)("p",{style:{textAlign:"right",color:"#CCCCCC",marginRight:20},children:["Ver ",x.version," Developed By Lee Freez"]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"50%",marginLeft:50},children:Object(p.jsx)(j,{rouletteClick:n,setRouletteClick:a,rouletteData:l})}),Object(p.jsxs)("div",{style:{width:"50%",marginRight:50,marginLeft:50},children:[Object(p.jsx)(m,{rouletteData:l,entryName:y,addEntryName:C,addRouletteData:function(t){return e=t,1===l.length&&""===l[0].option?(d([{option:e}]),O("rouletteData",[{option:e}],{expires:new Date(Date.now()+2592e3)})):(d(l.concat({option:e})),O("rouletteData",l.concat({option:e}),{expires:new Date(Date.now()+2592e3)})),void C("");var e}}),Object(p.jsx)("hr",{style:{borderTop:"1px solid #cccccc"}}),Object(p.jsx)(f,{deleteRouletteData:function(t){return function(t){if(1==l.length)d([{option:""}]),O("rouletteData",[{option:""}],{mexpires:new Date(Date.now()+2592e3)});else{var e=Object(c.a)(l);e.splice(t,1),d(e),O("rouletteData",e,{expires:new Date(Date.now()+2592e3)})}}(t)},rouletteData:l,shuffleRouletteData:function(){if(1!==l.length&&""!==l[0].option){var t=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}(Object(c.a)(l));d(t),O("rouletteData",t,{expires:new Date(Date.now()+2592e3)})}}})]})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),i(t),o(t)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),v()}},[[77,1,2]]]);
//# sourceMappingURL=main.bf416658.chunk.js.map