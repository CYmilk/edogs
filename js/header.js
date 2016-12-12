$(function(){
	var speed = 0;
	
//	骨头旋转
	$('#menus span').parent().parent().mouseenter(function(){
//			console.log(this)
		var self = this;
		var timer = setInterval(function(){
			speed += 60;
			$(self).find('span').eq(0).css('webkitTransform',"rotate(" + speed +"deg)");
			if(speed==360){
				speed = 0;
				clearInterval(timer);
			}
		},30)	
	});
	
//	APP链接滑动效果

	$('#nav-link').mouseenter(function(){
		$(this).animate({
			'right':30
		},100)
	})
	
	$('#nav-link').mouseleave(function(){
		$(this).animate({
			'right':10
		},100)
	});
	
//	商品分类切换效果
	$('.animal').mouseenter(function(){
		$('.shop').css('border','1px solid #e1e1e1').css('width',112).css('padding-top',0).css('color','black');
		$(this).css('border','none').css('width',114).css('padding-top',1);
		$(this).find('b').eq(0).css('background-position','0 -1257px');
		$(this).find('a').eq(0).css('color','#fff');
		$('.shop').find('b').eq(0).css('background-position','-17px -1276px');
		$('#pet').css('display','block');
		$('#shop_list').css('display','none');
		var colorBg = $('#wrap-picture').css('background-color');
		$(this).css('background-color',colorBg);
		$('.shop').css('background-color','#fff');
	});
	$('.shop').mouseenter(function(){
		$('.animal').css('border','1px solid #e1e1e1').css('width',112).css('padding-top',0);
		$(this).css('border','none').css('width',114).css('padding-top',1).css('color','#fff');
		$(this).find('b').eq(0).css('background-position','0 -1276px');
		$('.animal').find('a').eq(0).css('color','black');
		$('.animal').find('b').eq(0).css('background-position','-17px -1257px');
		$('#shop_list').css('display','block');
		$('#pet').css('display','none');
		var colorBg = $('#wrap-picture').css('background-color');
		$(this).css('background-color',colorBg);
		$('.animal').css('background-color','#fff');
	});

//商品列表的拉升

	$('.pet-active').mouseenter(function(){
		$('#boxsha').css('display','none');
		$('#cate-action').css('display','block');
	})
	$('.pet-active').mouseleave(function(){
		$('#cate-action').css('display','none');
	})
	
	$('#shop_list').find('li').mouseenter(function(){
		$(this).find('h3').animate({
			'left':20
		},100)
		$(this).find('h3').css('background-color','#fff');
		$(this).find('h3').css('background-position-y',-1100);
		
		$('#boxsha').css('display','block');
		$('.mincate').each(function(){
			$(this).css('display','none');
		})
		$('.minads').each(function(){
			$(this).css('display','none');
		})
		var num = $(this).index()+1;
		$(".p_"+num).css('display','block');
		
		$('#boxsha').mouseenter(function(){
			$(this).css('display','block');
			$(this).find('h3').css('background-color','#fff');
			$(this).find('h3').css('background-position-y',-1100);
		})
		$('#boxsha').mouseleave(function(){
			$(this).css('display','none');
			$('#shop_list').find('h3').css('background-color','#fcfcfc');
			$('#shop_list').find('h3').css('background-position-y',-1206);
		})
	
	})
	
	$('#shop_list').find('li').mouseleave(function(){
		$(this).find('h3').animate({
				'left':0
		},30)
		$('#boxsha').css('display','none');
			
		$('#shop_list').find('h3').css('background-color','#fcfcfc');
		$('#shop_list').find('h3').css('background-position-y',-1206);
	})
	
})
