!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,n){"use strict";function o(t){var e=(0,r.default)(window).width(),n=(0,r.default)(window).height(),o=0,i=0,a=(0,r.default)(".act_zone").width(),s=(0,r.default)(".act_zone").height(),u=(0,r.default)(".eyeball").width()/2;o=t.clientX/e*a-u,i=t.clientY/n*s-u,(0,r.default)(".eyeball").css({left:o,top:i})}function i(){var t=Math.floor((0,r.default)(".contacts>div")[0].getBoundingClientRect().width);(0,r.default)(".contacts>div").each(function(e,n){e%2==0?(0,r.default)(n).css("left",e*t):(0,r.default)(n).css("left",e*t-(g-t))}),(0,r.default)(".contacts>span").css("left",t*(0,r.default)(".contacts>div").length)}function a(){(0,r.default)(window).width()<1e3?((0,r.default)("body").css("width","1000px"),(0,r.default)(".lib_used").css("margin-bottom",20-d+"px"),(0,r.default)(".meow").css("margin-top",-125+Math.ceil(d/2)+"px")):((0,r.default)("body").css("width","100%"),(0,r.default)(".lib_used").css("margin-bottom","20px"),(0,r.default)(".meow").css("margin-top","-125px")),(0,r.default)(window).height()<500?(0,r.default)("body").css("height","500px"):(0,r.default)("body").css("height","100%")}n(2),n(3),n(4),n(5);var s=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(s),u=n(6),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),l=!c.isMobile()&&n(7);r.default.get("https://paksung.github.io/data/tagexp.json",function(t){console.log(t)});var d=17;c.isMobile()?(d=0,(0,r.default)(".icon-qq").next().attr("href","mqqwpa://im/chat?chat_type=wpa&uin=437919792&version=1&src_type=web&web_src=paksung.github.io")):c.isIE()?(0,r.default)(".root").css("cursor","default"):c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grab"):(0,r.default)(".contacts>span").css("cursor","-webkit-grab"),(0,r.default)("body").on("mousemove",o),(0,r.default)(".loading_cover").on("mousemove",function(t){t.stopPropagation?t.stopPropagation():t.originalEvent.cancelBubble=!0});var f=90,h=void 0,p=-1,g=(0,r.default)(".contacts>div")[0].offsetWidth;(0,r.default)(".contacts>span").on("click",function(t){var e=this;clearInterval(h),p=-p,p>0?((0,r.default)(".lib_used").css("z-index","0"),a()):(0,r.default)("body,html").animate({scrollLeft:0},1e3),h=setInterval(function(){f-=p,(0,r.default)(".contacts>div:nth-child(even)").css("transform","perspective(1500px) rotateY("+f+"deg)"),(0,r.default)(".contacts>div:nth-child(odd)").css("transform","perspective(1500px) rotateY(-"+f+"deg)"),i(),0!=f&&90!=f||(90===f&&((0,r.default)(e).css("left",0),(0,r.default)(".lib_used").css({zIndex:"100",marginBottom:"20px"}),(0,r.default)("body").css({width:"100%",height:"100%"}),(0,r.default)(".meow").css("margin-top","-125px")),clearInterval(h))},16)}).on("mousedown",function(t){c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grabbing"):(0,r.default)(".contacts>span").css("cursor","-webkit-grabbing")}).on("mouseup",function(t){c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grab"):(0,r.default)(".contacts>span").css("cursor","-webkit-grab")}),(0,r.default)(".contacts>div").on("mousemove",function(t){t.stopPropagation?t.stopPropagation():t.originalEvent.cancelBubble=!0}),(0,r.default)(window).on("resize",function(t){p>0&&a(),g=(0,r.default)(".contacts>div")[0].offsetWidth,i()}),(0,r.default)(".textLimited").on("click",function(t){if((0,r.default)(this).toggleClass("releaseIt"),l){var e=(0,r.default)(this).parentsUntil(".simCustomScroll"),n=e.eq(e.length-1).parent();l.updateBar(n)}}),(0,r.default)(".me>div:nth-child(2) i+span").hover(function(){(0,r.default)(this).html("17620378778")},function(){(0,r.default)(this).html("176****8778")}),(0,r.default)(".loading_cover").remove()},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";function o(){return s.indexOf("Mobile")>-1}function i(){return s.indexOf("Trident")>-1}function a(){return s.indexOf("Firefox")>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.isMobile=o,e.isIE=i,e.isFirefox=a;var s=navigator.userAgent},function(t,e,n){"use strict";function o(t){var e=[t.outerHeight(),t.children(".simScrollWrapper").outerHeight()];return e[0]<e[1]}function i(t){if(o(t)){var e=t.children(".smbar"),n=t.children(".simScrollWrapper"),i=0;t.find(".to_be_continue").remove(),i=Math.pow(t.outerHeight(),2)/n.outerHeight(),e.height(i)}}var a=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(a),r=(0,s.default)(".simCustomScroll");r.each(function(t,e){var n=(0,s.default)(e).html();(0,s.default)(e).css({padding:0,overflow:"hidden"}),(0,s.default)(e).html('<div class="simScrollWrapper">'+n+'</div><div class="smbar"></div>'),i((0,s.default)(e))}),r.on("mousewheel",function(t){if(!o((0,s.default)(this)))return!1;var e=t.originalEvent.deltaY>0?1:-1,n=(0,s.default)(this).children(".smbar"),i=(0,s.default)(this).children(".simScrollWrapper"),a=parseFloat(n.css("top"))+26*e;a=a<0?0:a,a=a>(0,s.default)(this).outerHeight()-n.height()?(0,s.default)(this).outerHeight()-n.height():a,n.css("top",a+"px"),i.css("margin-top",-i.outerHeight()/(0,s.default)(this).outerHeight()*a+"px")}),t.exports={updateBar:i}}]);