!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,n){"use strict";function a(t){var e=(0,r.default)(window).width(),n=(0,r.default)(window).height(),a=0,o=0,i=(0,r.default)(".act_zone").width(),s=(0,r.default)(".act_zone").height(),u=(0,r.default)(".eyeball").width()/2;a=t.clientX/e*i-u,o=t.clientY/n*s-u,(0,r.default)(".eyeball").css({left:a,top:o})}function o(){var t=Math.floor((0,r.default)(".contacts>div")[0].getBoundingClientRect().width);(0,r.default)(".contacts>div").each(function(e,n){e%2==0?(0,r.default)(n).css("left",e*t):(0,r.default)(n).css("left",e*t-(g-t))}),(0,r.default)(".contacts>span").css("left",t*(0,r.default)(".contacts>div").length)}function i(){(0,r.default)(window).width()<1e3?((0,r.default)("body").css("width","1000px"),(0,r.default)(".lib_used").css("margin-bottom",20-d+"px"),(0,r.default)(".meow").css("margin-top",-125+Math.ceil(d/2)+"px")):((0,r.default)("body").css("width","100%"),(0,r.default)(".lib_used").css("margin-bottom","20px"),(0,r.default)(".meow").css("margin-top","-125px")),(0,r.default)(window).height()<500?(0,r.default)("body").css("height","500px"):(0,r.default)("body").css("height","100%")}n(2),n(3),n(4),n(5);var s=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(s),u=n(6),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),l=!c.isMobile()&&n(7),d=17;c.isMobile()?(d=0,(0,r.default)(".icon-qq").next().attr("href","mqqwpa://im/chat?chat_type=wpa&uin=437919792&version=1&src_type=web&web_src=paksung.github.io")):c.isIE()?(0,r.default)(".root").css("cursor","default"):c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grab"):(0,r.default)(".contacts>span").css("cursor","-webkit-grab"),(0,r.default)("body").on("mousemove",a),(0,r.default)(".loading_cover").on("mousemove",function(t){t.stopPropagation?t.stopPropagation():t.originalEvent.cancelBubble=!0});var f=90,p=void 0,h=-1,g=(0,r.default)(".contacts>div")[0].offsetWidth;(0,r.default)(".contacts>span").on("click",function(t){var e=this;clearInterval(p),h=-h,h>0?((0,r.default)(".lib_used").css("z-index","0"),i()):(0,r.default)("body,html").animate({scrollLeft:0},1e3),p=setInterval(function(){f-=h,(0,r.default)(".contacts>div:nth-child(even)").css("transform","perspective(1500px) rotateY("+f+"deg)"),(0,r.default)(".contacts>div:nth-child(odd)").css("transform","perspective(1500px) rotateY(-"+f+"deg)"),o(),0!=f&&90!=f||(90===f&&((0,r.default)(e).css("left",0),(0,r.default)(".lib_used").css({zIndex:"100",marginBottom:"20px"}),(0,r.default)("body").css({width:"100%",height:"100%"}),(0,r.default)(".meow").css("margin-top","-125px")),clearInterval(p))},16)}).on("mousedown",function(t){c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grabbing"):(0,r.default)(".contacts>span").css("cursor","-webkit-grabbing")}).on("mouseup",function(t){c.isFirefox()?(0,r.default)(".contacts>span").css("cursor","grab"):(0,r.default)(".contacts>span").css("cursor","-webkit-grab")}),(0,r.default)(".contacts>div").on("mousemove",function(t){t.stopPropagation?t.stopPropagation():t.originalEvent.cancelBubble=!0}),(0,r.default)(window).on("resize",function(t){h>0&&i(),g=(0,r.default)(".contacts>div")[0].offsetWidth,o()}),(0,r.default)(".textLimited").on("click",function(t){if((0,r.default)(this).toggleClass("releaseIt"),l){var e=(0,r.default)(this).parentsUntil(".simCustomScroll"),n=e.eq(e.length-1).parent();l.updateBar(n)}}),(0,r.default)(".me>div:nth-child(2) i+span").hover(function(){(0,r.default)(this).html("17620378778")},function(){(0,r.default)(this).html("176****8778")}),r.default.get("https://paksung.github.io/data/tagexp.json",function(t){var e=t.tags.map(function(t,e){return"<span>"+t+"</span>"}),n=t.workexp.map(function(t,e){return'<div class="exp_card">\n                    <span>DATE:</span>'+t.date+" <br />\n                    <span>EXPERIENCE:</span>"+t.experience+" <br />\n                    <span>ROLE:</span>"+t.role+"\n                </div>"}),a=t.projectexp.map(function(t,e){return'<div class="exp_card">\n                    <span>DATE:</span>'+t.date+" <br />\n                    <span>PROJECT:</span>"+t.project+' <br />\n                    <div class="textLimited"><span>DESCRIPTION:</span>'+t.des+'</div>\n                    <div class="textLimited"><span>DUTY:</span>'+t.duty+"</div>\n                </div>"});(0,r.default)(".collapse.intro").append(e),(0,r.default)(".collapse.work .to_be_continue").before(n),(0,r.default)(".collapse.project .to_be_continue").before(a),l&&(l.updateBar((0,r.default)(".simCustomScroll").eq(0)),l.updateBar((0,r.default)(".simCustomScroll").eq(1))),(0,r.default)(".loading_cover").remove()})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";function a(){return s.indexOf("Mobile")>-1}function o(){return s.indexOf("Trident")>-1}function i(){return s.indexOf("Firefox")>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.isMobile=a,e.isIE=o,e.isFirefox=i;var s=navigator.userAgent},function(t,e,n){"use strict";function a(t){var e=[t.outerHeight(),t.children(".simScrollWrapper").outerHeight()];return e[0]<e[1]}function o(t){if(a(t)){var e=t.children(".smbar"),n=t.children(".simScrollWrapper"),o=0;t.find(".to_be_continue").remove(),o=Math.pow(t.outerHeight(),2)/n.outerHeight(),e.height(o)}}var i=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i),r=(0,s.default)(".simCustomScroll");r.each(function(t,e){var n=(0,s.default)(e).html();(0,s.default)(e).css({padding:0,overflow:"hidden"}),(0,s.default)(e).html('<div class="simScrollWrapper">'+n+'</div><div class="smbar"></div>'),o((0,s.default)(e))}),r.on("mousewheel",function(t){if(!a((0,s.default)(this)))return!1;var e=t.originalEvent.deltaY>0?1:-1,n=(0,s.default)(this).children(".smbar"),o=(0,s.default)(this).children(".simScrollWrapper"),i=parseFloat(n.css("top"))+26*e;i=i<0?0:i,i=i>(0,s.default)(this).outerHeight()-n.height()?(0,s.default)(this).outerHeight()-n.height():i,n.css("top",i+"px"),o.css("margin-top",-o.outerHeight()/(0,s.default)(this).outerHeight()*i+"px")}),t.exports={updateBar:o}}]);