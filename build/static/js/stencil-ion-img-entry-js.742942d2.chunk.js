(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[21],{111:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return c}));var n=o(6),e=o(7),r=o(18),s=o(15),c=function(){function i(t){var o=this;Object(n.a)(this,i),Object(r.l)(this,t),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()},this.ionImgWillLoad=Object(r.f)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(r.f)(this,"ionImgDidLoad",7),this.ionError=Object(r.f)(this,"ionError",7)}return Object(e.a)(i,[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(r.j)(r.b,{class:Object(s.b)(this)},Object(r.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}},{key:"el",get:function(){return Object(r.g)(this)}}],[{key:"watchers",get:function(){return{src:["srcChanged"]}}}]),i}();c.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);
//# sourceMappingURL=stencil-ion-img-entry-js.742942d2.chunk.js.map