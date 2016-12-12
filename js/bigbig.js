//变大classname:zom
$(function(){
	
	$('.zom').hover(function(){
		$(this).finish().animate({
			'width':'+=8px',
			'height':'+=8px',
			'top':'-=4px',
			'left':'-=4px'
		},500)
	},function(){
		$(this).finish().animate({
			'width':'-=8px',
			'height':'-=8px',
			'top':'+=4px',
			'left':'+=4px'
		},500)
	})
	
	$('.daiyan').find('a').click(function(){
		$(this).css({'border':'1px solid #e6e6e6','border-bottom':'1px solid #fff'});
		$(this).siblings().css('border','none')
		$('.multi-content').find('div').eq($(this).index()).css('display','block');
		$('.multi-content').find('div').eq($(this).index()).siblings().css('display','none');
	})
	
})
