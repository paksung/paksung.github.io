import '../css/common.less'; //引入公共css文件
import '../css/main.less'; //引入主页面的样式
import '../font/iconfont.css'; //图标字体
import $ from 'jquery'; //引入jQuery
import * as browser from '../js/browsers.js';   //判断浏览器的js模块

let scrollBarW = 17;    //pc浏览器中的滚动条宽度
if(browser.isMobile()){
    scrollBarW = 0;     //移动端浏览器中的滚动条宽度
    $('.icon-qq').next().attr('href', 'mqqwpa://im/chat?chat_type=wpa&uin=437919792&version=1&src_type=web&web_src=oicqzone.com');//移动端点击qq号跳转至聊天界面
}else if(browser.isIE()){
    $('.root').css('cursor', 'default');
}else{
    browser.isFirefox() ? $('.contacts>span').css('cursor', 'grab') : $('.contacts>span').css('cursor', '-webkit-grab');
}

$('body').on('mousemove', moveEyeBalls)
$('.loading_cover').on('mousemove', function(e){
     e.stopPropagation ? e.stopPropagation() : e.originalEvent.cancelBubble = true;
 });

/**
 * 眼球跟随鼠标位置移动
 * @param  {Object} e event
 */
function moveEyeBalls(e) {
    let windowW = $(window).width(), //窗口宽度
        windowH = $(window).height(), //窗口高度
        pleft = 0, //眼球的left定位
        ptop = 0; //right定位

    const ZONE_W = $('.act_zone').width(), //移动区域的宽
        ZONE_H = $('.act_zone').height(), //移动区域的高
        EYEBALL_R = $('.eyeball').width() / 2; //眼球半径

    pleft = e.clientX / windowW * ZONE_W - EYEBALL_R;
    ptop = e.clientY / windowH * ZONE_H - EYEBALL_R;

    $('.eyeball').css({
        left: pleft,
        top: ptop
    });
}


////////////
//折叠面板的动画 //
////////////

let angle = 90, //折叠面板的初始角度
    timer, //计时器ID
    i = -1, //角度变化数，延伸为折叠板的状态，-1：折叠     1：展开
    initW = $('.contacts>div')[0].offsetWidth; //折叠面板的宽度
$('.contacts>span').on('click', function(e) {
    clearInterval(timer);
    i = -i;
    //当点击展开时，将技术涉及块置于折叠板下
    if(i>0){
        $('.lib_used').css('z-index', '0');
        bodySize(); //设置body的尺寸
    }else{
        $('body,html').animate({'scrollLeft': 0}, 1000);   //滚动至最左边
    }
    timer = setInterval(() => {
        angle -= i;
        $('.contacts>div:nth-child(even)').css('transform', 'perspective(1500px) rotateY(' + angle + 'deg)');
        $('.contacts>div:nth-child(odd)').css('transform', 'perspective(1500px) rotateY(-' + angle + 'deg)');
        fixPos();
        if (angle == 0 || angle == 90) {
            if(angle === 90){
                $(this).css('left', 0);
                //折叠版收起后恢复
                $('.lib_used').css({
                    zIndex: '100',
                    marginBottom: '20px'
                });
                $('body').css({
                    width: '100%',
                    height: '100%'
                });
                $('.meow').css('margin-top', '-125px');
            }
            clearInterval(timer);
        }
    }, 16);
}).on('mousedown', function(e){
    browser.isFirefox() ? $('.contacts>span').css('cursor', 'grabbing') : $('.contacts>span').css('cursor', '-webkit-grabbing');
}).on('mouseup', function(e){
    browser.isFirefox() ? $('.contacts>span').css('cursor', 'grab') : $('.contacts>span').css('cursor', '-webkit-grab');
});

//阻止折叠板的鼠标移动冒泡事件
$('.contacts>div').on('mousemove', function(e) {
    e.stopPropagation ? e.stopPropagation() : e.originalEvent.cancelBubble = true;
});

//窗口尺寸改变时重置left值
$(window).on('resize', function(e) {
    if(i > 0){  //折叠板展开状态时，需重设body尺寸
        bodySize();
    }
    initW = $('.contacts>div')[0].offsetWidth;
    fixPos();
});

//展开收缩内容
$('.textLimited').on('click', function(e){
    $(this).toggleClass('releaseIt');
});

//显示隐藏手机号码
$('.me>div:nth-child(2) i+span').hover(function() {
    $(this).html('17620378778');
}, function() {
    $(this).html('176****8778');
});


//整个网页加载完毕，移除正在加载动画
$('.loading_cover').remove();

/**
 * 改变每块折叠板、开关的left值，使彼此贴紧在一起
 */
function fixPos() {
    let panelW = Math.floor($('.contacts>div')[0].getBoundingClientRect().width);
    $('.contacts>div').each(function(index, el) {
        if (index % 2 === 0) {
            $(el).css('left', index * panelW);
        } else {
            $(el).css('left', index * panelW - (initW - panelW));
        }
    });
    $('.contacts>span').css('left', panelW * $('.contacts>div').length);
}

/**
 * 设置body标签的最小宽高，给折叠板更好的展示
 */
function bodySize(){
    if($(window).width() < 1000){   //窗口宽度小于1000时，body的最小宽度为1000

        $('body').css('width', '1000px');
        //滚动条出现时保持内容相对窗口位置不改变
        $('.lib_used').css('margin-bottom', 20 - scrollBarW + 'px');
        $('.meow').css('margin-top', -125 + Math.ceil(scrollBarW / 2) + 'px');
    }else{

        $('body').css('width', '100%');
        //滚动条消失，保持位置不变
        $('.lib_used').css('margin-bottom', '20px');
        $('.meow').css('margin-top', '-125px');
    }

    if($(window).height() < 500){   //窗口高度小于500时，body的最小高度为500
        $('body').css('height', '500px');
    }else{
        $('body').css('height', '100%');
    }
}