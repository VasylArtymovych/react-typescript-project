"use strict";(self.webpackChunkreact_typescript_project=self.webpackChunkreact_typescript_project||[]).push([[438],{9438:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,u=t(4165),c=t(5861),s=t(885),i=t(2791),o=t(6871),p=t(5667),f=t(8174),l=t(4597),d=t(168),h=t(6444),g=(0,h.ZP)("ul")(r||(r=(0,d.Z)(["\n  list-style: none;\n  padding: 0px 20px 20px;\n  font-size: ","px;\n  & li {\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[2]})),v=(0,h.ZP)("p")(a||(a=(0,d.Z)(["\n  font-size: 34px;\n  text-align: center;\n  padding-bottom: 20px;\n  color: ",";\n"])),(function(e){return e.theme.colors.accent})),x=t(184);function m(){var e=(0,o.bx)(),n=(0,i.useState)(null),t=(0,s.Z)(n,2),r=t[0],a=t[1];return(0,i.useEffect)((function(){(0,c.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Hx)(e);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),f.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[e]),r&&p.NY.scrollMore(250),(0,x.jsx)(x.Fragment,{children:r&&(r.results.length>0?(0,x.jsx)(g,{children:r.results.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,x.jsxs)("li",{children:[(0,x.jsxs)("h2",{children:["Author: ",t]}),(0,x.jsxs)("p",{children:[" ",r]})]},n)}))}):(0,x.jsx)(v,{children:"No rewiews"}))})}},4597:function(e,n,t){t.d(n,{Mc:function(){return p},uV:function(){return f},Hx:function(){return l},Tg:function(){return i},qF:function(){return o}});var r=t(4165),a=t(5861),u=t(4569),c=t.n(u);c().defaults.baseURL="https://api.themoviedb.org/3/";var s="9c009c00402fb866baf05bd346a2d01d",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("trending/all/day?"+new URLSearchParams({api_key:s,page:n}));case 2:return t=e.sent,a=t.data,e.abrupt("return",{results:a.results,page:a.page,totalPages:a.total_pages});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,u,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,c().get("search/movie?"+new URLSearchParams({api_key:s,query:n,language:"en-US",page:t,include_adult:!1}));case 3:return a=e.sent,u=a.data,e.abrupt("return",{results:u.results,page:u.page,totalPages:u.total_pages});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(n,"?")+new URLSearchParams({api_key:s,language:"en-US"}));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(n,"/credits?")+new URLSearchParams({api_key:s,language:"en-US"}));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(n,"/reviews?")+new URLSearchParams({api_key:s,language:"en-US",page:1}));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=438.a78f3c5e.chunk.js.map