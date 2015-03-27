define(['jquery'], function($) {

	// 绑定头部事件与交互
	// area-box
	$('body').on('click','.picker',function(e){
		$('.area-box').addClass('on');
	})

	$('body').on('mouseleave','.picker',function(e){
		$('.area-box').removeClass('on');
	})

	$('body').on('click','.cart-box',function(e){
		$('.cart-box').addClass('on');
	})

	$('body').on('mouseleave','.cart-box',function(e){
		$('.cart-box').removeClass('on');
	})

});