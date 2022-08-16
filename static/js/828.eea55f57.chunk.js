"use strict";(self.webpackChunkreact_typescript_project=self.webpackChunkreact_typescript_project||[]).push([[828],{4814:function(n,e,t){t.d(e,{Z:function(){return k}});var r,i,a,o,c,u,s=t(168),p=t(6444),l=(0,p.ZP)("ul")(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(300px, auto);\n  grid-gap: 20px;\n  list-style: none;\n"]))),h=t(6871),d=t(3572),f=t.p+"static/media/default .ac1f9b8465065c248bcc.jpg",x=t(1578),m=t(3504),g=(0,p.ZP)("li")(i||(i=(0,s.Z)(["\n  padding: ","px;\n  border-radius: ",";\n\n  background: ",";\n  box-shadow: rgba(255, 111, 80, 0.25) 0px 54px 55px,\n    rgba(255, 111, 80, 0.12) 0px -12px 30px,\n    rgba(255, 111, 80, 0.12) 0px 4px 6px, rgba(255, 111, 80, 0.17) 0px 12px 13px,\n    rgba(255, 111, 80, 0.09) 0px -3px 5px;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background})),b=(0,p.ZP)(m.OL)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),v=(0,p.ZP)("div")(o||(o=(0,s.Z)(["\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n"]))),Z=(0,p.ZP)("div")(c||(c=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n  font-size: ","px;\n  & p {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.fontSizes.m})),y=(0,p.ZP)(x.hlg)(u||(u=(0,s.Z)(["\n  margin-right: 5px;\n"]))),w=t(184),j=function(n){var e,t=n.movie,r=(0,h.TH)(),i=(0,h.Gn)(d.Z.movie,{movieId:t.id}),a=t.backdrop_path||t.poster_path?"https://image.tmdb.org/t/p/w500"+(null!==(e=t.poster_path)&&void 0!==e?e:t.backdrop_path):f;return(0,w.jsx)(g,{children:(0,w.jsxs)(b,{to:"/"===r.pathname?i:"".concat(t.id),state:{from:r},children:[(0,w.jsx)(v,{children:(0,w.jsx)("img",{src:a,alt:"img"})}),(0,w.jsxs)(Z,{children:[(0,w.jsx)(y,{}),(0,w.jsx)("p",{children:t.title||t.original_name})]})]})})},k=function(n){var e=n.moviesArr;return(0,w.jsx)(l,{children:e.map((function(n){return(0,w.jsx)(j,{movie:n},n.id)}))})}},520:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,a,o,c=t(168),u=t(6444),s=(0,u.ZP)("div")(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),p=(0,u.ZP)("button")(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 20px;\n  padding: ","px;\n  &:not(:last-child) {\n    margin-right: ","px;\n  }\n  font-size: 10px;\n  font-weight: ",";\n  border: none;\n  border-radius: ",";\n  outline: none;\n  background: ",";\n  color: ",";\n  ","\n\n  @media (min-width: 768px) {\n    width: 45px;\n    height: 35px;\n    margin-right: ","px;\n    font-size: ","px;\n    ","\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.radii.normal}),(function(n){return n.current?n.theme.colors.active:n.theme.colors.background}),(function(n){return n.current?n.theme.colors.white:n.theme.colors.primary}),(function(n){if(!n.current)return(0,u.iv)(a||(a=(0,c.Z)(["\n        &:hover {\n          background: ",";\n          box-shadow: 0px 0px 4px 4px ",";\n          font-size: ","px;\n        }\n      "])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xs}))}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){if(!n.current)return(0,u.iv)(o||(o=(0,c.Z)(["\n          &:hover {\n            font-size: ","px;\n          }\n        "])),(function(n){return n.theme.fontSizes.m}))})),l=t(3143),h=t(3153),d=t(184),f=function(){var n=(0,h.C)((function(n){return n.page})),e=n.page,t=n.totalPages,r=(0,h.T)(),i=e-2,a=e-1,o=e+2,c=e+1,u=function(n){if(n.target instanceof HTMLElement){var e=n.target.textContent;return"next"===e?r((0,l.nP)()):"prev"===e?r((0,l.Mj)()):void r((0,l.YA)(Number(e)))}};return(0,d.jsxs)(s,{children:[e>1&&(0,d.jsx)(p,{type:"button",onClick:u,children:"prev"}),e>1&&(0,d.jsx)(p,{type:"button",onClick:u,children:"1"}),e>4&&(0,d.jsx)(p,{type:"button",children:"..."}),e>3&&(0,d.jsx)(p,{type:"button",onClick:u,children:i}),e>2&&(0,d.jsx)(p,{type:"button",onClick:u,children:a}),(0,d.jsx)(p,{type:"button",onClick:u,current:!0,children:e}),e<t-1&&(0,d.jsx)(p,{type:"button",onClick:u,children:c}),e<t-2&&(0,d.jsx)(p,{type:"button",onClick:u,children:o}),e<t-3&&(0,d.jsx)(p,{type:"button",children:"..."}),e<t&&(0,d.jsx)(p,{type:"button",onClick:u,children:t}),e<t&&(0,d.jsx)(p,{type:"button",onClick:u,children:"next"})]})}},9153:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,a,o,c=t(4165),u=t(5861),s=t(885),p=t(2791),l=t(3504),h=t(8174),d=t(4597),f=t(5705),x=t(56),m=t(7692),g=t(168),b=t(6444),v=(0,b.ZP)(f.l0)(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.primary})),Z=(0,b.ZP)(f.gN)(i||(i=(0,g.Z)(["\n  width: 320px;\n  min-height: 25px;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  background: grey;\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primary})),y=(0,b.ZP)("button")(a||(a=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border: 0;\n  background: ",";\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.accent})),w=t(184),j=x.Ry().shape({search:x.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),k=function(n){var e=n.onSubmit;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(f.J9,{initialValues:{search:""},validationSchema:j,onSubmit:function(n,t){var r=n.search;e(r),t.resetForm()},children:(0,w.jsxs)(v,{children:[(0,w.jsx)(Z,{type:"text",name:"search",placeholder:"search name"}),(0,w.jsx)(y,{type:"submit",children:(0,w.jsx)(m.Goc,{size:22,color:"white"})})]})})})},P=t(4814),S=t(520),_=(0,b.ZP)("div")(o||(o=(0,g.Z)(["\n  width: 100%;\n  padding: ","px;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 1200px;\n  }\n"])),(function(n){return n.theme.space[5]})),C=t(3153),z=t(3143),U=function(){var n,e=(0,l.lr)(),t=(0,s.Z)(e,2),r=t[0],i=t[1],a=null!==(n=r.get("search"))&&void 0!==n?n:"",o=(0,p.useState)([]),f=(0,s.Z)(o,2),x=f[0],m=f[1],g=(0,p.useState)(a),b=(0,s.Z)(g,2),v=b[0],Z=b[1],y=(0,C.C)((function(n){return n.page})).page,j=(0,C.T)();(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)((0,c.Z)().mark((function n(){var e,t,r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.qF)(v,y);case 3:if(e=n.sent,t=e.results,r=e.totalPages,0!==t.length){n.next=10;break}return h.Am.info("Movie with name: ".concat(v," not found!")),m([]),n.abrupt("return");case 10:m(t),j((0,z.K$)(r)),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),h.Am.error(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)}v&&function(){n.apply(this,arguments)}()}),[j,y,v]);return(0,w.jsxs)(_,{children:[(0,w.jsx)(k,{onSubmit:function(n){Z(n),i(""!==n?{search:n}:{}),j((0,z.YA)(1))}}),(0,w.jsx)(P.Z,{moviesArr:x}),x.length>0&&(0,w.jsx)(S.Z,{})]})}},4597:function(n,e,t){t.d(e,{Mc:function(){return p},uV:function(){return l},Hx:function(){return h},Tg:function(){return u},qF:function(){return s}});var r=t(4165),i=t(5861),a=t(4569),o=t.n(a);o().defaults.baseURL="https://api.themoviedb.org/3/";var c="9c009c00402fb866baf05bd346a2d01d",u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/all/day?"+new URLSearchParams({api_key:c,page:e}));case 2:return t=n.sent,i=t.data,n.abrupt("return",{results:i.results,page:i.page,totalPages:i.total_pages});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,a,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,o().get("search/movie?"+new URLSearchParams({api_key:c,query:e,language:"en-US",page:t,include_adult:!1}));case 3:return i=n.sent,a=i.data,n.abrupt("return",{results:a.results,page:a.page,totalPages:a.total_pages});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"?")+new URLSearchParams({api_key:c,language:"en-US"}));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"/credits?")+new URLSearchParams({api_key:c,language:"en-US"}));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(e,"/reviews?")+new URLSearchParams({api_key:c,language:"en-US",page:1}));case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=828.eea55f57.chunk.js.map