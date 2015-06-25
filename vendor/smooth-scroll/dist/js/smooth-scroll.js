(function(b,a){if(typeof define==='function'&&define.amd){define([],a(b))}else if(typeof exports==='object'){module.exports=a(b)}else{b.smoothScroll=a(b)}})(typeof global!=="undefined"?global:this.window||this.global,function(d){'use strict';var j={};var B=!!d.document.querySelector&&!!d.addEventListener;var m,n,i,k;var s={speed:500,easing:'easeInOutCubic',offset:0,updateURL:true,callbackBefore:function(){},callbackAfter:function(){}};var t=function(b,a,e){if(Object.prototype.toString.call(b)==='[object Object]'){for(var f in b){if(Object.prototype.hasOwnProperty.call(b,f)){a.call(e,b[f],f,b)}}}else{for(var c=0,g=b.length;c<g;c++){a.call(e,b[c],c,b)}}};var o=function(e,f){var c={};t(e,function(b,a){c[a]=e[a]});t(f,function(b,a){c[a]=f[a]});return c};var C=function(b,a){var e=a.charAt(0);for(;b&&b!==d.document;b=b.parentNode){if(e==='.'){if(b.classList.contains(a.substr(1))){return b}}else if(e==='#'){if(b.id===a.substr(1)){return b}}else if(e==='['){if(b.hasAttribute(a.substr(1,a.length-2))){return b}}}return false};var D=function(b){return Math.max(b.scrollHeight,b.offsetHeight,b.clientHeight)};var E=function(b){var a=String(b);var e=a.length;var f=-1;var c;var g='';var p=a.charCodeAt(0);while(++f<e){c=a.charCodeAt(f);if(c===0x0000){throw new InvalidCharacterError('Invalid character: the input contains U+0000.');}if((c>=0x0001&&c<=0x001F)||c==0x007F||(f===0&&c>=0x0030&&c<=0x0039)||(f===1&&c>=0x0030&&c<=0x0039&&p===0x002D)){g+='\\'+c.toString(16)+' ';continue}if(c>=0x0080||c===0x002D||c===0x005F||c>=0x0030&&c<=0x0039||c>=0x0041&&c<=0x005A||c>=0x0061&&c<=0x007A){g+=a.charAt(f);continue}g+='\\'+a.charAt(f)}return g};var F=function(b,a){var e;if(b==='easeInQuad')e=a*a;if(b==='easeOutQuad')e=a*(2-a);if(b==='easeInOutQuad')e=a<0.5?2*a*a:-1+(4-2*a)*a;if(b==='easeInCubic')e=a*a*a;if(b==='easeOutCubic')e=(--a)*a*a+1;if(b==='easeInOutCubic')e=a<0.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1;if(b==='easeInQuart')e=a*a*a*a;if(b==='easeOutQuart')e=1-(--a)*a*a*a;if(b==='easeInOutQuart')e=a<0.5?8*a*a*a*a:1-8*(--a)*a*a*a;if(b==='easeInQuint')e=a*a*a*a*a;if(b==='easeOutQuint')e=1+(--a)*a*a*a*a;if(b==='easeInOutQuint')e=a<0.5?16*a*a*a*a*a:1+16*(--a)*a*a*a*a;return e||a};var G=function(b,a,e){var f=0;if(b.offsetParent){do{f+=b.offsetTop;b=b.offsetParent}while(b)}f=f-a-e;return f>=0?f:0};var H=function(){return Math.max(d.document.body.scrollHeight,d.document.documentElement.scrollHeight,d.document.body.offsetHeight,d.document.documentElement.offsetHeight,d.document.body.clientHeight,d.document.documentElement.clientHeight)};var I=function(b){return!b||!(typeof JSON==='object'&&typeof JSON.parse==='function')?{}:JSON.parse(b)};var J=function(b,a){if(d.history.pushState&&(a||a==='true')){d.history.pushState(null,null,[d.location.protocol,'//',d.location.host,d.location.pathname,d.location.search,b].join(''))}};var q=function(b){return b===null?0:(D(b)+b.offsetTop)};j.animateScroll=function(c,g,p){var h=o(h||s,p||{});var K=I(c?c.getAttribute('data-options'):null);h=o(h,K);g='#'+E(g.substr(1));var u=g==='#'?d.document.documentElement:d.document.querySelector(g);var v=d.pageYOffset;if(!i){i=d.document.querySelector('[data-scroll-header]')}if(!k){k=q(i)}var w=G(u,k,parseInt(h.offset,10));var x;var L=w-v;var M=H();var y=0;var l,r;J(g,h.updateURL);var N=function(b,a,e){var f=d.pageYOffset;if(b==a||f==a||((d.innerHeight+f)>=M)){clearInterval(e);u.focus();h.callbackAfter(c,g)}};var O=function(){y+=16;l=(y/parseInt(h.speed,10));l=(l>1)?1:l;r=v+(L*F(h.easing,l));d.scrollTo(0,Math.floor(r));N(r,w,x)};var P=function(){h.callbackBefore(c,g);x=setInterval(O,16)};if(d.pageYOffset===0){d.scrollTo(0,0)}P()};var z=function(b){var a=C(b.target,'[data-scroll]');if(a&&a.tagName.toLowerCase()==='a'){b.preventDefault();j.animateScroll(a,a.hash,m)}};var A=function(b){if(!n){n=setTimeout(function(){n=null;k=q(i)},66)}};j.destroy=function(){if(!m)return;d.document.removeEventListener('click',z,false);d.removeEventListener('resize',A,false);m=null;n=null;i=null;k=null};j.init=function(b){if(!B)return;j.destroy();m=o(s,b||{});i=d.document.querySelector('[data-scroll-header]');k=q(i);d.document.addEventListener('click',z,false);if(i){d.addEventListener('resize',A,false)}};return j});