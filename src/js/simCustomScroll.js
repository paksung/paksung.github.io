import $ from 'jquery';

let wrapper = $('.simCustomScroll');	//滚动容器
wrapper.each(function(index, item){
	let content = $(item).html();	//容器包裹内容
	$(item).css({
		padding: 0,
		overflow: 'hidden'
	});	//清除自身padding
	$(item).html(`<div class="simScrollWrapper">${content}</div><div class="smbar"></div>`);//增加直接子元素和滚动条
	updateBar($(item));	//设置滚动条高度
});

//滚动
wrapper.on('mousewheel', function(e){
	if(!isOverFlow($(this))){
		return false;	
	}
	const SPEED = 26;	//滚动速度
	let deltaY = e.originalEvent.deltaY > 0 ? 1 : -1,	//滚动方向
		bar = $(this).children('.smbar'),	//滚动条
		content = $(this).children('.simScrollWrapper'),	//内容
		barTop = parseFloat(bar.css('top')) + deltaY * SPEED;	//滚动条top值

	barTop = barTop < 0 ? 0 : barTop;	//top小于0时
	barTop = barTop > $(this).outerHeight() - bar.height() ? $(this).outerHeight() - bar.height() : barTop;	//控制滚动不超出范围
	bar.css('top', barTop + 'px');	//设置滚动条top值
	content.css('margin-top', -content.outerHeight() / $(this).outerHeight() * barTop + 'px');	//设置内容margin-top值
});

/**
 * 判断元素内的内容是否溢出
 * @param  {elementObject}  o 需判断的元素
 * @return {Boolean}   是否溢出了
 */
function isOverFlow(o){
	let [parent, child] = [o.outerHeight(), o.children('.simScrollWrapper').outerHeight()];
	return parent < child;
}

/**
 * 更新滚动条高度
 * @param  {elementObject} el 容器
 * @return {[type]}    [description]
 */
function updateBar(el){
	if(!isOverFlow(el)){
		return;
	}
	let bar = el.children('.smbar'),	//滚动条
		content = el.children('.simScrollWrapper'),	//内容
		barH = 0;
	el.find('.to_be_continue').remove();	//去除“未完待续”块再计算
	barH = Math.pow(el.outerHeight(), 2) / content.outerHeight();
	bar.height(barH);
}

module.exports = {
	updateBar
}