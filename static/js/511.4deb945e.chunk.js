"use strict";(self.webpackChunkmarvel_info_app=self.webpackChunkmarvel_info_app||[]).push([[511],{2062:function(e,n,r){var a=r(5671),t=r(3144),c=r(136),s=r(3668),i=r(2791),o=r(9613),l=r(184),u=function(e){(0,c.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).state={error:!1},e}return(0,t.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),r}(i.Component);n.Z=u},9613:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r.p+"static/media/error.42292aa12b6bc303ce99.gif",t=r(184),c=function(){return(0,t.jsx)("img",{style:{display:"block",margin:"0 auto",width:"260px",height:"250px",objectFit:"contain"},src:a,alt:"error"})}},5213:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var a=r(885),t=r(2791),c=r(2062),s=r(4259),i=r(2602),o=r(9613),l=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=r(184),h=function(e){var n=e.char,r=n.thumbnail,a=n.name,t=n.description,c=n.homepage,s=n.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"};return(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:a}),(0,u.jsx)("p",{className:"randomchar__descr",children:t}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,t.useState)({}),n=(0,a.Z)(e,2),r=n[0],c=n[1],d=(0,s.k)(),m=d.loading,f=d.error,p=d.getCharacter,_=d.clearError;(0,t.useEffect)((function(){v()}),[]);var x=function(e){c(e)},v=function(){_();var e=Math.floor(400*Math.random()+1011e3);p(e).then(x)},j=f?(0,u.jsx)(o.Z,{}):null,b=m?(0,u.jsx)(i.Z,{}):null,g=b||j?null:(0,u.jsx)(h,{char:r});return(0,u.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{onClick:function(){v()},className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,u.jsxs)("div",{className:"skeleton",children:[(0,u.jsxs)("div",{className:"pulse skeleton__header",children:[(0,u.jsx)("div",{className:"pulse skeleton__circle"}),(0,u.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"})]})]})},f=r(3504),p=function(e){var n=e.char,r=n.thumbnail,a=n.name,t=n.description,c=n.homepage,s=n.wiki,i=n.comicsItems,o=r.match("image_not_available.jpg")?{objectFit:"contain"}:null;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:r,alt:"abyss",style:o}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:a}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"Homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:t}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsx)("ul",{className:"char__comics-list",children:i.map((function(e,n){var r=e.resourceURI?e.resourceURI.match(/\d{3,}/):null,a=r?null:{pointerEvents:"none"};return(0,u.jsx)("li",{style:a,className:"char__comics-item",children:(0,u.jsx)(f.rU,{to:"comics/".concat(r),children:e.name})},n)}))})]})},_=function(e){var n=e.charId,r=(0,t.useState)(null),c=(0,a.Z)(r,2),l=c[0],h=c[1],d=(0,s.k)(),f=d.loading,_=d.error,x=d.getCharacter,v=d.clearError;(0,t.useEffect)((function(){b()}),[]),(0,t.useEffect)((function(){b()}),[n]);var j=function(e){h(e)},b=function(){n&&(v(),x(n).then(j))},g=l||_||f?null:(0,u.jsx)(m,{}),N=_?(0,u.jsx)(o.Z,{}):null,k=f?(0,u.jsx)(i.Z,{}):null,Z=k||N||!l?null:(0,u.jsx)(p,{char:l});return(0,u.jsxs)("div",{className:"char__info",children:[g,N,k,Z]})},x=r(2982),v=r(9295),j=r(5660),b=function(e){var n=e.arr,r=e.onCharSelected,a=(0,t.useRef)([]),c=function(e,n){e.forEach((function(e){return e.classList.remove("char__item_selected")})),e[n].classList.add("char__item_selected"),e[n].focus()},s=n.map((function(e,n){var t=e.thumbnail.match("image_not_available.jpg")?{objectFit:"contain"}:null;return(0,u.jsx)(v.Z,{timeout:500,classNames:"char__item",children:(0,u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return a.current[n]=e},onClick:function(){r(e.id),c(a.current,n)},onKeyDown:function(t){" "!==t.key&&"Enter"!==t.key||(r(e.id),c(a.current,n))},children:[(0,u.jsx)("img",{src:e.thumbnail,alt:"Character's name",style:t}),(0,u.jsx)("div",{className:"char__name",children:e.name})]},e.id)},e.id)}));return(0,u.jsx)("ul",{className:"char__grid",children:(0,u.jsx)(j.Z,{component:null,children:s})})},g=function(e){var n=(0,t.useState)([]),r=(0,a.Z)(n,2),c=r[0],l=r[1],h=(0,t.useState)(!1),d=(0,a.Z)(h,2),m=d[0],f=d[1],p=(0,t.useState)(210),_=(0,a.Z)(p,2),v=_[0],j=_[1],g=(0,t.useState)(!1),N=(0,a.Z)(g,2),k=N[0],Z=N[1],y=(0,t.useState)(!1),w=(0,a.Z)(y,2),C=(w[0],w[1],(0,s.k)()),S=C.loading,E=C.error,F=C.getAllCharacters;(0,t.useEffect)((function(){T(v,!0)}),[]);var T=function(e,n){f(!n),F(e).then((function(e){return I(e)}))},I=function(e){var n=!1;e.length<9&&(n=!0),l((function(n){return[].concat((0,x.Z)(n),(0,x.Z)(e))})),f(!1),j((function(e){return e+9})),Z(n)},R=E&&!m?(0,u.jsx)(o.Z,{}):null,A=S&&!m?(0,u.jsx)(i.Z,{}):null;return(0,u.jsxs)("div",{className:"char__list",children:[R,A,(0,u.jsx)(b,{arr:c,onCharSelected:e.onCharSelected}),(0,u.jsx)("div",{className:"char__buttons",children:(0,u.jsx)("button",{onClick:function(){T(v)},disabled:m,style:{display:"".concat(k?"none":"block")},className:"button button__main button__long",children:(0,u.jsx)("div",{className:"inner",children:"Next page"})})})]})},N=r(5705),k=r(132),Z=function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],c=n[1],i=(0,s.k)(),l=i.error,h=i.getCharacterByName,d=i.loading,m=i.clearError,p=l?(0,u.jsx)("div",{className:"char__search-critical-error",children:(0,u.jsx)(o.Z,{})}):null,_=r?r.length>0?(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsxs)("div",{className:"char__search-succeed",children:["There is! ",r[0].name," has been found"]}),(0,u.jsx)(f.rU,{to:"/Marvel_react_app/character/".concat(r[0].id),className:"button  button__main",children:(0,u.jsx)("div",{className:"inner",children:"TO PAGE"})})]}):(0,u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,u.jsxs)("div",{className:"char__search-form",children:[(0,u.jsx)(N.J9,{initialValues:{charName:""},validationSchema:k.Ry({charName:k.Z_().required("This is required field")}),onSubmit:function(e){var n;n=e.charName,m(),h(n).then((function(e){return c(e)}))},children:(0,u.jsxs)(N.l0,{children:[(0,u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsx)(N.gN,{name:"charName",type:"text",placeholder:"Enter name",className:"char__search-input"}),(0,u.jsx)("button",{type:"submit",className:"modal__btn button button__main",disabled:d,children:(0,u.jsx)("div",{className:"inner",children:"FIND"})})]}),(0,u.jsx)(N.Bc,{className:"char__search-error",component:"div",name:"charName"})]})}),_,p]})},y=r.p+"static/media/vision.067d4ae1936d64a577ce.png",w=function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],s=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{children:(0,u.jsx)(d,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(c.Z,{children:(0,u.jsx)(g,{onCharSelected:function(e){s(e)}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.Z,{children:(0,u.jsx)(_,{charId:r})}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(Z,{})})]})]}),(0,u.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},4259:function(e,n,r){r.d(n,{k:function(){return o}});var a=r(5861),t=r(7757),c=r.n(t),s=r(885),i=r(2791),o=function(){var e="https://gateway.marvel.com:443/v1/public/",n="apikey=804561fe0b4553a3fa7b8ec7fb139828",r=210,t=function(){var e=(0,i.useState)(!1),n=(0,s.Z)(e,2),r=n[0],t=n[1],o=(0,i.useState)(!1),l=(0,s.Z)(o,2),u=l[0],h=l[1],d=(0,i.useCallback)(function(){var e=(0,a.Z)(c().mark((function e(n){var r,a,s,i,o,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},e.prev=3,h(!0),e.next=7,fetch(n,{method:r,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,h(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(3),h(!1),t(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:u,error:r,request:d,clearError:(0,i.useCallback)((function(){return t(null)}),[])}}(),o=t.error,l=t.loading,u=t.request,h=t.clearError,d=function(){var t=(0,a.Z)(c().mark((function a(){var t,s,i=arguments;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:r,a.next=3,u("".concat(e,"characters?limit=9&offset=").concat(t,"&").concat(n));case 3:return s=a.sent,a.abrupt("return",s.data.results.map(x));case 5:case"end":return a.stop()}}),a)})));return function(){return t.apply(this,arguments)}}(),m=function(){var r=(0,a.Z)(c().mark((function r(a){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("".concat(e,"characters/").concat(a,"?").concat(n));case 2:return t=r.sent,r.abrupt("return",x(t.data.results[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(c().mark((function r(a){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("".concat(e,"characters?name=").concat(a,"&").concat(n));case 2:return t=r.sent,r.abrupt("return",t.data.results.map(x));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)(c().mark((function a(){var t,s,i=arguments;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:r,a.next=3,u("".concat(e,"comics?limit=8&offset=").concat(t,"&").concat(n));case 3:return s=a.sent,a.abrupt("return",s.data.results.map(v));case 5:case"end":return a.stop()}}),a)})));return function(){return t.apply(this,arguments)}}(),_=function(){var r=(0,a.Z)(c().mark((function r(a){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("".concat(e,"comics/").concat(a,"?").concat(n));case 2:return t=r.sent,r.abrupt("return",v(t.data.results[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,r=function(e,n){return e.length?e.splice(0,n):[{name:"This character does not have comics"}]};return{id:e.id,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),name:e.name,description:e.description?n?e.description:e.description.slice(0,220):"There is no description for this character",homepage:e.urls[0].url,wiki:e.urls[1].url,comicsItems:r(e.comics.items,10)}},v=function(e){return{id:e.id,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),title:e.title,description:e.description||"There is no description for this comic",price:e.prices[0].price+"$",language:e.textObjects.language||"en-us",pages:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages"}};return{loading:l,error:o,getAllCharacters:d,getCharacter:m,getAllComics:p,getComic:_,clearError:h,getCharacterByName:f}}}}]);
//# sourceMappingURL=511.4deb945e.chunk.js.map