"use strict";(self.webpackChunkreact_typescript_project=self.webpackChunkreact_typescript_project||[]).push([[393],{9474:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var r=e(8214),i=e(5861),o=e(885),a=e(2791),c=e(501),u=e(6409),s=e(4569),p=e.n(s);p().defaults.baseURL="https://api.themoviedb.org/3/";var l,d,h,x,f,g,m,b,v,Z,j="9c009c00402fb866baf05bd346a2d01d",y=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p().get("trending/all/day?"+new URLSearchParams({api_key:j,page:t}));case 2:return e=n.sent,i=e.data,n.abrupt("return",{results:i.results,page:i.page,totalPages:i.total_pages});case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=e(168),w=e(6444),P=(0,w.ZP)("h2")(l||(l=(0,k.Z)(["\n  margin-bottom: 15px;\n  border-radius: 8px;\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n  text-shadow: 0 2px 4px orange;\n\n  /* background-image: repeating-linear-gradient(\n    -45deg,\n    rgb(47, 44, 185),\n    rgb(16, 15, 60) 15px,\n    rgb(21, 138, 159) 15px,\n    rgb(21, 138, 159) 30px\n  ); */\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold})),C=e(6871),z=e(3572),S=e(861),_=(0,w.ZP)("ul")(d||(d=(0,k.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(300px, auto);\n  grid-gap: 20px;\n  list-style: none;\n\n  & li {\n    padding: ","px;\n    border-radius: ",";\n    background: #fff;\n    box-shadow: rgba(255, 111, 80, 0.25) 0px 54px 55px,\n      rgba(255, 111, 80, 0.12) 0px -12px 30px,\n      rgba(255, 111, 80, 0.12) 0px 4px 6px,\n      rgba(255, 111, 80, 0.17) 0px 12px 13px,\n      rgba(255, 111, 80, 0.09) 0px -3px 5px;\n  }\n\n  & li:hover {\n    transform: scale(1.05);\n  }\n\n  & li a {\n    text-decoration: none;\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.text})),T=(0,w.ZP)("div")(h||(h=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n  font-size: ","px;\n  & p {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.fontSizes.m})),L=(0,w.ZP)(S.hlg)(x||(x=(0,k.Z)(["\n  margin-right: 5px;\n"]))),A=(0,w.ZP)(c.OL)(f||(f=(0,k.Z)(["\n  &:hover:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent})),E=e.p+"static/media/default .ac1f9b8465065c248bcc.jpg",B=e(184),H=function(n){var t=n.moviesArr,e=(0,C.TH)();return(0,B.jsx)(_,{children:t.map((function(n){var t=n.id,r=n.title,i=n.original_name,o=n.backdrop_path,a=n.poster_path,c=(0,C.Gn)(z.Z.movie,{movieId:t}),u=o||a?"https://image.tmdb.org/t/p/w500"+(null!==a&&void 0!==a?a:o):E;return(0,B.jsx)("li",{children:(0,B.jsxs)(A,{to:"/"===e.pathname?c:"".concat(t),state:{from:e},children:[(0,B.jsx)("img",{src:u,alt:"img"}),(0,B.jsxs)(T,{children:[(0,B.jsx)(L,{}),(0,B.jsx)("p",{children:r||i})]})]})},t)}))})},N=(0,w.ZP)("div")(g||(g=(0,k.Z)(["\n  width: 100%;\n  padding: ","px;\n  padding-top: 0;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 1200px;\n  }\n"])),(function(n){return n.theme.space[5]})),R=e(1413),U=(0,w.ZP)("div")(m||(m=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),W=(0,w.ZP)("button")(b||(b=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 20px;\n  padding: ","px;\n  &:not(:last-child) {\n    margin-right: ","px;\n  }\n  font-size: 10px;\n  font-weight: ",";\n  border: none;\n  border-radius: ",";\n  outline: none;\n  background: ",";\n  color: ",";\n  ","\n\n  @media (min-width: 768px) {\n    width: 45px;\n    height: 35px;\n    margin-right: ","px;\n    font-size: ","px;\n    ","\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.radii.normal}),(function(n){return n.current?n.theme.colors.active:n.theme.colors.white}),(function(n){return n.current?n.theme.colors.white:n.theme.colors.text}),(function(n){if(!n.current)return(0,w.iv)(v||(v=(0,k.Z)(["\n        &:hover {\n          background: ",";\n          box-shadow: 0px 0px 4px 4px ",";\n          font-size: ","px;\n        }\n      "])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xs}))}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){if(!n.current)return(0,w.iv)(Z||(Z=(0,k.Z)(["\n          &:hover {\n            font-size: ","px;\n          }\n        "])),(function(n){return n.theme.fontSizes.m}))})),G=function(n){var t=n.page,e=n.totalPages,r=n.onClick,i=t-2,u=t-1,s=t+2,p=t+1,l=(0,c.lr)(),d=(0,o.Z)(l,2),h=d[0],x=d[1];return(0,a.useEffect)((function(){var n=t.toString();x((0,R.Z)((0,R.Z)({},h),{},{page:n}))}),[t,x,h]),(0,B.jsxs)(U,{children:[t>1&&(0,B.jsx)(W,{type:"button",onClick:r,children:"prev"}),t>1&&(0,B.jsx)(W,{type:"button",onClick:r,children:"1"}),t>4&&(0,B.jsx)(W,{type:"button",children:"..."}),t>3&&(0,B.jsx)(W,{type:"button",onClick:r,children:i}),t>2&&(0,B.jsx)(W,{type:"button",onClick:r,children:u}),(0,B.jsx)(W,{type:"button",onClick:r,current:!0,children:t}),t<e-1&&(0,B.jsx)(W,{type:"button",onClick:r,children:p}),t<e-2&&(0,B.jsx)(W,{type:"button",onClick:r,children:s}),t<e-3&&(0,B.jsx)(W,{type:"button",children:"..."}),t<e&&(0,B.jsx)(W,{type:"button",onClick:r,children:e}),t<e&&(0,B.jsx)(W,{type:"button",onClick:r,children:"next"})]})},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=(0,a.useState)(n),r=(0,o.Z)(e,2),i=r[0],c=r[1],u=(0,a.useState)(t),s=(0,o.Z)(u,2),p=s[0],l=s[1],d=function(n){if(n.target instanceof HTMLElement){var t=n.target.textContent;return"next"===t?c((function(n){return n+1})):"prev"===t?c((function(n){return n-1})):void c(Number(t))}};return{currentPage:i,totalPages:p,setTotalPages:l,onBtnClick:d}},M=function(){var n=(0,a.useState)([]),t=(0,o.Z)(n,2),e=t[0],s=t[1],p=(0,c.lr)(),l=(0,o.Z)(p,1)[0],d=Number(l.get("page")),h=I(d||1),x=h.currentPage,f=h.totalPages,g=h.setTotalPages,m=h.onBtnClick;return(0,a.useEffect)((function(){function n(){return(n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y(x);case 3:t=n.sent,e=t.results,i=t.totalPages,s(e),g(i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),u.Am.error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[g,x]),(0,B.jsxs)(N,{children:[(0,B.jsx)(P,{children:"Trending Today"}),(0,B.jsx)(H,{moviesArr:e}),e.length>1&&(0,B.jsx)(G,{page:x,totalPages:f,onClick:m})]})}}}]);
//# sourceMappingURL=393.af60cea7.chunk.js.map