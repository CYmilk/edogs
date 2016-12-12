$(function(){
	var index = 0;
	
	show();
	
	function show(){
		
		
		
		if(index==$('.pictureBox').find('a').length){
			index=0;
		}
		
		$('.pictureBox').find('img').eq(index).finish().css({
			'width':790,
			'height':380,
			'top':'-=10',
			'left':'-=10'
		}).finish().animate({
			'width':"-=20",
			'height':'-=20',
			'top':'+=10',
			'left':'+=10'
		},2000)
		
		$('.pictureBox').find('a').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
		$('.palypic').find('a').eq(index).css({'background-color':'#fff','color':'#999'}).siblings().css({'background-color':'#999','color':'#fff'})
		
	}
	
	var timer = setInterval(fAnimate,4000);
	
	function fAnimate(){
		index++;
		show();
		colorChange(index);
		//console.log(index)
		//console.log($('.pictureBox').find('img').eq(0).css('opacity'))
	}
	
	$('.palypic').find('a').mouseenter(function(){
		index = $(this).index();
		show();
		colorChange(index);
	})
	
	$('#picture').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(fAnimate,4000);
	})
	
	
	function colorChange(index){
		var sL = parseInt($('.shop').css('border-width'));
		var	aL = parseInt($('.animal').css('border-width'));
		if(index==0){
			$('#wrap-picture').css('background-color','rgb(255,244,12)');
			if(sL==0){
				$('.shop').css('background-color','rgb(255,244,12)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(255,244,12)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==1){
			$('#wrap-picture').css('background-color','rgb(255,246,205)');
			if(sL==0){
				$('.shop').css('background-color','rgb(255,246,205)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(255,246,205)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==2){
			$('#wrap-picture').css('background-color','rgb(28,18,55)');
			if(sL==0){
				$('.shop').css('background-color','rgb(28,18,55)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(28,18,55)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==3){
			$('#wrap-picture').css('background-color','rgb(111,159,101)');
			if(sL==0){
				$('.shop').css('background-color','rgb(111,159,101)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(111,159,101)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==4){
			$('#wrap-picture').css('background-color','rgb(52,174,225)');
			if(sL==0){
				$('.shop').css('background-color','rgb(52,174,225)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(52,174,225)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==5){
			$('#wrap-picture').css('background-color','rgb(176,215,90)');
			if(sL==0){
				$('.shop').css('background-color','rgb(176,215,90)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(176,215,90)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		if(index==6){
			$('#wrap-picture').css('background-color','rgb(255,224,105)');
			if(sL==0){
				$('.shop').css('background-color','rgb(255,224,105)');
			}else{
				$('.shop').css('background-color','#fff');
			}
			if(aL==0){
				$('.animal').css('background-color','rgb(255,224,105)');
			}else{
				$('.animal').css('background-color','#fff');
			}
		}
		
		
	}
	
	
//	右边滑动效果
	$('.main_r').find('div').each(function(){
		var self = this;
		$(this).mouseenter(function(){
			$(self).find('img').eq(0).stop().animate({'right':15},300)
		})
		$(this).mouseleave(function(){
			$(self).find('img').eq(0).stop().animate({'right':0},300)
		})
	})
	
//	改变时间图标
	
	changeBgwork($('.timemove')[0]);
	$('.timemove').mouseenter(function(){
		changeBg()
		changeBgwork(this);
		var shopIndex = $(this).index();
		$('#surprise-massage').find('ul').each(function(){
			$(this).css('display','none');
		})
		$('#surprise-massage').find('ul').eq(shopIndex).css('display','block');
	})
	//已抢光动画效果
	$('.atonce-buy').hover(function(){
		$(this).stop().animate({
			'width':'+=4'
		},600)
	},function(){
		$(this).stop().animate({
			'width':'-=4'
		},600)
	})
	
	function changeBgwork(box){
		$(box).find('span').css({
		    'color': '#fff',
		    'font-weight': 'bold',
		    'background': '#fe5400',
		    'border-radius': 5,
		    'display': 'inline-block',
		    'padding':'3px 10px',
		    'height': 22,
		    'width':60,
		    'position': 'absolute',
		    'top':0,
		    'left':30
		})
		$(box).css('height',28)
		$(box).find('i').css({
            'bottom': -12,
		    'left': 65,
		    'border-style': 'solid solid dotted solid',
		    'border-color': '#fe5400 transparent transparent transparent',
		    'position': 'absolute',
		    'border-width': 7,
		    'font-size': 0,
		    'line-height': 0,
		    'z-index': 1,
		})
		$(box).find('em').css({
            'background-position': '37px -263px',
			'bottom': -52,
			'height': 62
		})
	}
	
	function changeBg(){
		$('.timemove').each(function(){
			$(this).find('span').css({
			    'color': '#999',
			    'font-weight': 'normal',
			    'background': '#f5f5f5',
			    'display': 'inline',
			    'position': 'static',
			    'top':0,
			    'left':0,
			    'padding':0,
			    'width':'auto',
			    'height':'auto'
			})
			$(this).css('height',20)
			$(this).find('i').css({
	            'bottom': 0,
			    'left': 0,
			    'border-style': 'none',
			    'border-color': '#f5f5f5',
			    'position': 'absolute',
			    'border-width': 0,
			    'font-size': 0,
			    'line-height': 0,
			    'z-index': 1,
			})
			$(this).find('em').css({
	            'background-position': '42px -227px',
				'bottom': -42,
				'height': 24
			})
		})
	}
	
	
//	惊喜轮播
	var i = 0;
	
	function surprise(){
		
		if(i==$('#surprise-play').find('a').length){
			i=0;
		}
		
		$('#daysurimg-id').find('li').eq(i).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0.6},500);
		$('#surprise-play').find('a').eq(i).stop().animate({'opacity':1},200).siblings().not("#daysurimg-id").stop().animate({'opacity':0},500);
	}
	
	surprise();
	
	var timer_surprise = setInterval(surprisePlay,3000);
	
	function surprisePlay(){
		i++;
		surprise();
	}
	
	$('#daysurimg-id').find('li').click(function(){
		i = $(this).index();
		surprise();
	})
	
	$('#surprise-play').hover(function(){
		clearInterval(timer_surprise);
	},function(){
		timer_surprise = setInterval(surprisePlay,3000);
	})
	
})
