(function(t){function e(e){for(var r,o,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5452:function(t,e,n){"use strict";n("af35")},"568f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{links:t.links}}),n("Main"),n("FooterTop"),n("FooterBottom")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"header"}},[r("div",{staticClass:"container d-flex align-items-center justify-content-between"},[r("img",{attrs:{id:"brand-logo",src:n("9d64"),alt:""}}),r("nav",[r("ul",{staticClass:"d-flex align-items-center m-0"},[t._l(t.links,(function(e){return r("li",{key:e.text},[r("a",{attrs:{href:e.url}},[t._v(t._s(e.text))])])})),t._m(0),t._m(1)],2)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("button",{staticClass:"secondary-button"},[t._v("JOIN US")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",[n("i",{staticClass:"fas fa-search"})])])}],l={name:"Header",props:["links"]},u=l,c=(n("5452"),n("2877")),f=Object(c["a"])(u,o,s,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("IntroForum"),n("Description"),n("News")],1)},d=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative",attrs:{id:"intro"}},[n("div",{staticClass:"center container"},[n("h1",{staticClass:"text-white fw-800"},[t._v("Tech Forum!")]),n("p",{staticClass:"text-white my-4"},[t._v(" Discuss all the latest technology news and trends ")]),n("button",{staticClass:"primary-button btn-lg"},[t._v("GET AVADA NOW!")])])])}],A={name:"IntroForum"},b=A,O=(n("cf70"),Object(c["a"])(b,m,h,!1,null,null,null)),g=O.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-grey"},[n("div",{staticClass:"container text-center py-5"},[n("h4",{staticClass:"fs-6"},[t._v("AVADA FORUM IS THE PLACE TO BE")]),n("p",{staticClass:"px-150 my-4"},[t._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sit delectus, rerum voluptatem voluptates dignissimos? Fuga, veniam odio officiis numquam ipsa et nam eos quam facere pariatur sint modi voluptatem. ")])])])}],j={name:"Description"},T=j,y=Object(c["a"])(T,_,x,!1,null,null,null),B=y.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5 text-center"},[n("h6",[t._v("PHASELLUS EGET METUS")]),n("h2",[n("strong",[t._v(" All the latest news")])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row my-5"},[n("div",{staticClass:"col-4"},[t._v("ciao")]),n("div",{staticClass:"col-4"},[t._v("ciao")]),n("div",{staticClass:"col-4"},[t._v("ciao")])])])])}],P={name:"News"},F=P,k=Object(c["a"])(F,E,C,!1,null,null,null),w=k.exports,S={name:"Main",components:{IntroForum:g,Description:B,News:w}},U=S,z=Object(c["a"])(U,v,d,!1,null,null,null),D=z.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("FooterTop")])])}],H={name:"FooterTop"},N=H,I=Object(c["a"])(N,J,L,!1,null,null,null),R=I.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("FooterBottom")])])}],M={name:"FooterBottom"},V=M,Z=Object(c["a"])(V,Y,G,!1,null,null,null),q=Z.exports,K={name:"App",components:{Header:p,Main:D,FooterTop:R,FooterBottom:q},data:function(){return{links:[{text:"Home",url:"#",active:!0},{text:"Apple",url:"#",active:!1},{text:"Microsoft",url:"#",active:!1},{text:"Android",url:"#",active:!1},{text:"Forums",url:"#",active:!1},{text:"Contact us",url:"#",active:!1}]}}},W=K,X=(n("5c0b"),Object(c["a"])(W,i,a,!1,null,null,null)),Q=X.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Q)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},"9d64":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAAA9CAMAAABcHe89AAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAu3dE7iIRZjPdVZmqiAbNAhknFftACZFaO/WeLcJuUEk2Hg3n1MakhH1p4raLYYfkwKJ8AAAFx0lEQVRo3u2baYPaIBCGB5IAuT3iravrvUfb+f+/rpqAoJCsH2qP2OdLILybzQvDDGst1JEdR/2yIQ4v8GRwxG9lY484hydh0ykvK0ReNmL0qwAI+tByomK7rmJ9IoN/0C2vy2I6gXaTIEbOgSNi2zf+IPzcOAf6SbKB/7SPObtLNllB6zji1jLPmL0n2rjtF4hC94ZzAMh8PwPovJj1fYk4grYx2B+v0v0EAGYzAHjFhamjo7bX+e8JU80OfwWAbgBPAP0GDnZTBu3Hn2ZgQ5MM2sj8pQuaXu+O5HAYQCtgPpK7hP0fatNvcfrIMOD0BIffQLdQ3tnipTEB4uhSED868DgIniDwO1gd11VD4KFJN3yROmBRF0z+Xe+a3hD+BqT3P8hyCW9j8NZ3SNvlvfsO6245Az1g+nYnoS71v+49CN9Bwwbar/EWm+kOnPyT3id8KBuYguJlcBMFOiN0VePArdnz6IkoUNPnnRFqVJRdW6iJUkISGhjeLfUvpVfgSBnsaK831Xtm/+JPxJ7ZF3GIklDOil92AIxeYgsVnrpNtXdL/Ut5RZxZ6zeBrxlhsTb7Phok5a20bAu5qGUnsoQKrm/G2rul/qW8f+tb87Gyj3RHPbqpiv1YgEmMJmk5h7Kpx0NbaFlXEOdjH0Lw2jSaDS7W7TjR66oJLjkrNOKC1giB+W7vtvoR7AomW+NB46GejN0Dfp5GnufRan9SvZhCewhcQr09kJ4EPNTeHepHQC/L2eu7wiKGL2DqGt7s1vQSu0mzELm+Lwds9Z/gzgO8Wm3f3OTKHK8TiirHqfvau61+LPdm09uzv6DJuT5HVXiD9iTUizuF2q13VTOIW62rfkWgSiTl4upgEaiOeQ0EKD2DcW5toTm4WKjGciCnCH+AVZ41UJLLoE/ktUZIZcs619lqBfVJCVc9GoekcubheSD0adUB0FeKHoBqfGBRrd/kOzTSV6uNH/KK29uINDFuh8BUprOFzd5ttYIS0MR56Tr1hWHX87nDe8hkQHpwwLwa26M6qrzNoYmXsfx90zcjFVbJilCaEvWSunYJXg66hdo7s7xbard3zw9kLBJzqdPE9k7ytIzHFD3oCLltB7SjfAxdjpvDghobVm1Mne3SMuR5vdCTh74KVhm21LXek1S9OgrDLiUO7+L8OBqy0+Vesk5zfpR5WhsBoxOWmY7VCwPp1pxIYqlrvfuRauVU22UhdXgH6rOz/xrvo4Fd3rM7/uqk5tZXIyFK4iZhbkiEDHS3WkfaRWX4IJVdeiL1U3B5hzzJU6jz3nFMR6COtPuJPaoLuX51/Y4S0STk0gn3vBhl21LXrnvIdUt5Jz4Dt3fh5+zG+2Y30g+ujfB35OCAq1ePYv86KTGsyJuFuX2et9S13mPVDjBQNlmYyiNGtWxRePkpKlSsrHlXpmT9tPG192/GhziyCMzjpalgfm0xSqo+bRYK476vjq+22u09UGmSxHqJhbwZ0mp+YuOnlPcQd3LhM3N95/rJkIHFDouN2Rf6zaugvf0DjzUKTfN+pOu7pXbXd15ObUByZoQ5rSpf5HuyY3vfOg/J8z6U07aGYQIO9ri9jg1BZKgGOiEb2S7+UshieV/o+m6r3d7BI0jykF5vcUJYFe0h8YkAh/fJbOCuZG9ZtoNZHzTBYqWaXR5YtYC7P1UT+nTdLGQRpVTUP7YZj9UOBfaYTbhrHB7jG7QWkjePiw78p6UMBbhYLXqXOteFFuF9fA4vxRzH7s+kVZ7L8lZt+wRxqdoD0rs947Kz48vdHmIO7WFZfPTBJFgYi58UvaupOGyX0CJYdt2fFDMA4NPiPAXHxTN8x0qzzkrvfgRPQpZBM/1WZXiTbjhdNQpep0ULv0Utj6x4+OpTuRTaCdtvvebA+Pxs+xeJ4fW2wgfR3/EFrMfzjsUETPpTTOA5GKl/NZwV+408yS3gOWDxaFheEeUhnsc9eDJO697i/xf2E5sdB2kL3bsrAAAAAElFTkSuQmCC"},af35:function(t,e,n){},cf70:function(t,e,n){"use strict";n("568f")}});
//# sourceMappingURL=app.641955b2.js.map