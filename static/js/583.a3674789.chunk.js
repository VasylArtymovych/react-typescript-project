"use strict";(self.webpackChunkreact_typescript_project=self.webpackChunkreact_typescript_project||[]).push([[583],{4814:function(n,t,e){e.d(t,{Z:function(){return w}});var r,i,o,c,u,a,s=e(168),p=e(6444),l=(0,p.ZP)("ul")(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: minmax(300px, auto);\n  grid-gap: 20px;\n  list-style: none;\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]))),d=e(6871),h=e(3572),x=e.p+"static/media/default .ac1f9b8465065c248bcc.jpg",f=e(1578),m=e(3504),g=(0,p.ZP)("li")(i||(i=(0,s.Z)(["\n  padding: ","px;\n  border-radius: ",";\n\n  background: ",";\n  box-shadow: rgba(255, 111, 80, 0.25) 0px 54px 55px,\n    rgba(255, 111, 80, 0.12) 0px -12px 30px,\n    rgba(255, 111, 80, 0.12) 0px 4px 6px, rgba(255, 111, 80, 0.17) 0px 12px 13px,\n    rgba(255, 111, 80, 0.09) 0px -3px 5px;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.background})),b=(0,p.ZP)(m.OL)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),j=(0,p.ZP)("div")(c||(c=(0,s.Z)(["\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n"]))),v=(0,p.ZP)("div")(u||(u=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n  font-size: ","px;\n  & p {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.fontSizes.m})),y=(0,p.ZP)(f.hlg)(a||(a=(0,s.Z)(["\n  margin-right: 5px;\n"]))),Z=e(184),k=function(n){var t,e=n.movie,r=(0,d.TH)(),i=(0,d.Gn)(h.Z.movie,{movieId:e.id}),o=e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w500"+(null!==(t=e.poster_path)&&void 0!==t?t:e.backdrop_path):x;return(0,Z.jsx)(g,{children:(0,Z.jsxs)(b,{to:"/"===r.pathname?i:"".concat(e.id),state:{from:r},children:[(0,Z.jsx)(j,{children:(0,Z.jsx)("img",{src:o,alt:"img"})}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(y,{}),(0,Z.jsx)("p",{children:e.title||e.original_name})]})]})})},w=function(n){var t=n.moviesArr;return(0,Z.jsx)(l,{children:t.map((function(n){return(0,Z.jsx)(k,{movie:n},n.id)}))})}},520:function(n,t,e){e.d(t,{Z:function(){return x}});var r,i,o,c,u=e(168),a=e(6444),s=(0,a.ZP)("div")(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),p=(0,a.ZP)("button")(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 20px;\n  padding: ","px;\n  &:not(:last-child) {\n    margin-right: ","px;\n  }\n  font-size: 10px;\n  font-weight: ",";\n  border: none;\n  border-radius: ",";\n  outline: none;\n  background: ",";\n  color: ",";\n  ","\n\n  @media (min-width: 768px) {\n    width: 45px;\n    height: 35px;\n    margin-right: ","px;\n    font-size: ","px;\n    ","\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.radii.normal}),(function(n){return n.current?n.theme.colors.active:n.theme.colors.background}),(function(n){return n.current?n.theme.colors.white:n.theme.colors.primary}),(function(n){if(!n.current)return(0,a.iv)(o||(o=(0,u.Z)(["\n        &:hover {\n          background: ",";\n          box-shadow: 0px 0px 4px 4px ",";\n          font-size: ","px;\n        }\n      "])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.xs}))}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.s}),(function(n){if(!n.current)return(0,a.iv)(c||(c=(0,u.Z)(["\n          &:hover {\n            font-size: ","px;\n          }\n        "])),(function(n){return n.theme.fontSizes.m}))})),l=e(3143),d=e(3153),h=e(184),x=function(){var n=(0,d.C)((function(n){return n.page})),t=n.page,e=n.totalPages,r=(0,d.T)(),i=t-2,o=t-1,c=t+2,u=t+1,a=function(n){if(n.target instanceof HTMLElement){var t=n.target.textContent;return"next"===t?r((0,l.nP)()):"prev"===t?r((0,l.Mj)()):void r((0,l.YA)(Number(t)))}};return(0,h.jsxs)(s,{children:[t>1&&(0,h.jsx)(p,{type:"button",onClick:a,children:"prev"}),t>1&&(0,h.jsx)(p,{type:"button",onClick:a,children:"1"}),t>4&&(0,h.jsx)(p,{type:"button",children:"..."}),t>3&&(0,h.jsx)(p,{type:"button",onClick:a,children:i}),t>2&&(0,h.jsx)(p,{type:"button",onClick:a,children:o}),(0,h.jsx)(p,{type:"button",onClick:a,current:!0,children:t}),t<e-1&&(0,h.jsx)(p,{type:"button",onClick:a,children:u}),t<e-2&&(0,h.jsx)(p,{type:"button",onClick:a,children:c}),t<e-3&&(0,h.jsx)(p,{type:"button",children:"..."}),t<e&&(0,h.jsx)(p,{type:"button",onClick:a,children:e}),t<e&&(0,h.jsx)(p,{type:"button",onClick:a,children:"next"})]})}},4956:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,i=e(2791),o=e(8174),c=e(168),u=(0,e(6444).ZP)("h2")(r||(r=(0,c.Z)(["\n  margin-bottom: 15px;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n  color: ",";\n  text-shadow: 0 2px 4px ",";\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary})),a=e(4814),s=e(520),p=e(5794),l=e(3153),d=e(3143),h=e(4015),x=e(8560),f=e(184),m=function(){var n=(0,l.C)((function(n){return n.page})).page,t=(0,l.T)(),e=(0,h.nZ)(n),r=e.data,c=e.isLoading,m=e.error;return(0,i.useEffect)((function(){r&&t((0,d.K$)(r.total_pages))}),[r,t]),m&&(console.log(m),(0,o.Am)("TypeError: Failed to fetch")),(0,f.jsxs)(p.W,{children:[(0,f.jsx)(u,{children:"Trending Today"}),c&&(0,f.jsx)(x.O7,{}),r&&(0,f.jsx)(a.Z,{moviesArr:r.results}),r&&r.results.length>1&&(0,f.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=583.a3674789.chunk.js.map