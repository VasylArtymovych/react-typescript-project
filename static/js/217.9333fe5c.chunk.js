"use strict";(self.webpackChunkreact_typescript_project=self.webpackChunkreact_typescript_project||[]).push([[217],{1217:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a=t(4165),c=t(5861),u=t(885),i=t(2791),s=t(6871),p=t(5667),o=t(8174),d=t(4597),f=t(7577),l=t(168),g=(0,t(6444).ZP)("ul")(r||(r=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 20px;\n  padding: 0px 0px 20px 0px;\n  list-style: none;\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(7, 1fr);\n  }\n  & li {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: ","px;\n    font-size: ","px;\n    text-align: center;\n    border-radius: 10px;\n    color: ",";\n    background: ",";\n    & img {\n    }\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.background})),h=t(5794),m=t(184);function x(){var n=(0,s.bx)(),e=(0,i.useState)(null),t=(0,u.Z)(e,2),r=t[0],l=t[1];return(0,i.useEffect)((function(){(0,c.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.uV)(n);case 3:t=e.sent,r=t.cast,l(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,o.Am)(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[n]),r&&p.NY.scrollMore(250),(0,m.jsx)(h.W,{children:r&&(0,m.jsx)(g,{children:r.map((function(n){var e=n.cast_id,t=n.name,r=n.profile_path,a=n.character,c=r?"https://image.tmdb.org/t/p/w500"+r:f;return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:c,alt:t,width:"105",height:"140"}),(0,m.jsx)("p",{children:t}),(0,m.jsxs)("p",{children:["Character: ",a]})]},e)}))})})}},5794:function(n,e,t){t.d(e,{W:function(){return c}});var r,a=t(168),c=(0,t(6444).ZP)("div")(r||(r=(0,a.Z)(["\n  width: 100%;\n  padding: 0px ","px;\n  margin: 0 auto;\n  @media (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 1200px;\n  }\n"])),(function(n){return n.theme.space[5]}))},4597:function(n,e,t){t.d(e,{Mc:function(){return o},uV:function(){return d},Hx:function(){return f},Tg:function(){return s},qF:function(){return p}});var r=t(4165),a=t(5861),c=t(4569),u=t.n(c);u().defaults.baseURL="https://api.themoviedb.org/3/";var i="9c009c00402fb866baf05bd346a2d01d",s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/all/day?"+new URLSearchParams({api_key:i,page:e}));case 2:return t=n.sent,a=t.data,n.abrupt("return",{results:a.results,page:a.page,totalPages:a.total_pages});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,c,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,u().get("search/movie?"+new URLSearchParams({api_key:i,query:e,language:"en-US",page:t,include_adult:!1}));case 3:return a=n.sent,c=a.data,n.abrupt("return",{results:c.results,page:c.page,totalPages:c.total_pages});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"?")+new URLSearchParams({api_key:i,language:"en-US"}));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/credits?")+new URLSearchParams({api_key:i,language:"en-US"}));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/reviews?")+new URLSearchParams({api_key:i,language:"en-US",page:1}));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7577:function(n,e,t){n.exports=t.p+"static/media/default.2e01288c0c1a3f24d743.jpeg"}}]);
//# sourceMappingURL=217.9333fe5c.chunk.js.map