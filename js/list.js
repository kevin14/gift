require(['jquery','common'], function($) {

	//头部导航
	//价格选择
	$('.selector-nav').on('click','.price ',function(e){
		$(this).addClass('on');
	})

	$('.selector-nav').on('mouseleave','.price ',function(e){
		$(this).removeClass('on');
	})

	//类别选择
	$('.selector-nav').on('click','.type',function(e){
		$('.type-box').addClass('on');
	})

	$('.selector-nav').on('mouseleave','.type',function(e){
		$('.type-box').removeClass('on');
	})

	//星级选择
	$('.selector-nav').on('click','.score',function(e){
		$('.score-box').addClass('on');
	})

	$('.selector-nav').on('mouseleave','.score',function(e){
		$('.score-box').removeClass('on');
	})

	//tag选择
	$('.selector-nav').on('click','.tags',function(e){
		$('.tags-box').addClass('on');
	})

	$('.selector-nav').on('mouseleave','.tags',function(e){
		$('.tags-box').removeClass('on');
	})

});