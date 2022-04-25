"use strict";(self.webpackChunkmarvel_info_app=self.webpackChunkmarvel_info_app||[]).push([[790],{3957:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",c=n(184),o=function(){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},9613:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",margin:"0 auto",width:"260px",height:"250px",objectFit:"contain"},src:r,alt:"error"})}},4306:function(t,e,n){n.r(e);var r=n(885),a=n(2791),c=n(6871),o=n(2602),s=n(9613),i=n(4259),u=n(3957),l=n(184);e.default=function(t){var e=t.Component,n=t.dataType,p=(0,a.useState)(null),f=(0,r.Z)(p,2),h=f[0],d=f[1],m=(0,c.UO)().id,v=(0,i.k)(),g=v.loading,b=v.error,x=v.getComic,w=v.getCharacter,k=v.clearError;(0,a.useEffect)((function(){C()}),[m]);var y=function(t){d(t)},C=function(){switch(k(),n){case"comic":x(m).then(y);break;case"char":w(m).then(y)}},j=b?(0,l.jsx)(s.Z,{}):null,Z=g?(0,l.jsx)(o.Z,{}):null,_=Z||j||!h?null:(0,l.jsx)(e,{data:h});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{}),j,Z,_]})}},4259:function(t,e,n){n.d(e,{k:function(){return i}});var r=n(5861),a=n(7757),c=n.n(a),o=n(885),s=n(2791),i=function(){var t="https://gateway.marvel.com:443/v1/public/",e="apikey=804561fe0b4553a3fa7b8ec7fb139828",n=210,a=function(){var t=(0,s.useState)(!1),e=(0,o.Z)(t,2),n=e[0],a=e[1],i=(0,s.useState)(!1),u=(0,o.Z)(i,2),l=u[0],p=u[1],f=(0,s.useCallback)(function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,o,s,i,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},t.prev=3,p(!0),t.next=7,fetch(e,{method:n,body:r,headers:o});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status ").concat(s.status));case 10:return t.next=12,s.json();case 12:return i=t.sent,p(!1),t.abrupt("return",i);case 17:throw t.prev=17,t.t0=t.catch(3),p(!1),a(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[3,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:l,error:n,request:f,clearError:(0,s.useCallback)((function(){return a(null)}),[])}}(),i=a.error,u=a.loading,l=a.request,p=a.clearError,f=function(){var a=(0,r.Z)(c().mark((function r(){var a,o,s=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:n,r.next=3,l("".concat(t,"characters?limit=9&offset=").concat(a,"&").concat(e));case 3:return o=r.sent,r.abrupt("return",o.data.results.map(g));case 5:case"end":return r.stop()}}),r)})));return function(){return a.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(t,"characters/").concat(r,"?").concat(e));case 2:return a=n.sent,n.abrupt("return",g(a.data.results[0]));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(t,"characters?name=").concat(r,"&").concat(e));case 2:return a=n.sent,n.abrupt("return",a.data.results.map(g));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var a=(0,r.Z)(c().mark((function r(){var a,o,s=arguments;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:n,r.next=3,l("".concat(t,"comics?limit=8&offset=").concat(a,"&").concat(e));case 3:return o=r.sent,r.abrupt("return",o.data.results.map(b));case 5:case"end":return r.stop()}}),r)})));return function(){return a.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("".concat(t,"comics/").concat(r,"?").concat(e));case 2:return a=n.sent,n.abrupt("return",b(a.data.results[0]));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,n=function(t,e){return t.length?t.splice(0,e):[{name:"This character does not have comics"}]};return{id:t.id,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),name:t.name,description:t.description?e?t.description:t.description.slice(0,220):"There is no description for this character",homepage:t.urls[0].url,wiki:t.urls[1].url,comicsItems:n(t.comics.items,10)}},b=function(t){return{id:t.id,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),title:t.title,description:t.description||"There is no description for this comic",price:t.prices[0].price+"$",language:t.textObjects.language||"en-us",pages:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages"}};return{loading:u,error:i,getAllCharacters:f,getCharacter:h,getAllComics:m,getComic:v,clearError:p,getCharacterByName:d}}}}]);
//# sourceMappingURL=790.372b7d40.chunk.js.map