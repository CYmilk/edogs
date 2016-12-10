$(function() {

	$('#wrap-header').load('html/header.html', function() {
		
		var str = $.cookie('login');
		if(str==undefined ||str==""){
			
		}else{
			var oCookie = JSON.parse(str);
			if(oCookie.type==false){
				
			}else{
				$("#header_right").find(".registered").html("<a href='#'>[退出]</a>");
				$("#header_right").find(".login").html("<p style='margin-top:6px'>"+oCookie.name+"</p>");
				
			}
		}
		
		$("#header_right").find(".registered").find("a").click(function(){
			var obj = {type:false};
			$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});
			location.href = "index.html";
		})
		
	});
	$('#wrap_head_search').load('html/search.html', function() {});
	$('#wrap-nav').load('html/nav.html', function() {
		var speed = 0;

		//	骨头旋转
		$('#menus span').parent().parent().mouseenter(function() {
			//			console.log(this)
			var self = this;
			var timer = setInterval(function() {
				speed += 60;
				$(self).find('span').eq(0).css('webkitTransform', "rotate(" + speed + "deg)");
				if(speed == 360) {
					speed = 0;
					clearInterval(timer);
				}
			}, 30)
		});

		//	APP链接滑动效果

		$('#nav-link').mouseenter(function() {
			$(this).animate({
				'right': 30
			}, 100)
		});

		$('#nav-link').mouseleave(function() {
			$(this).animate({
				'right': 10
			}, 100)
		});

		//	商品分类切换效果
		$('.animal').mouseenter(function() {
			$('.shop').css('border', '1px solid #e1e1e1').css('width', 112).css('padding-top', 0).css('color', 'black');
			$(this).css('border', 'none').css('width', 114).css('padding-top', 1);
			$(this).find('b').eq(0).css('background-position', '0 -1257px');
			$(this).find('a').eq(0).css('color', '#fff');
			$('.shop').find('b').eq(0).css('background-position', '-17px -1276px');
			$('#pet').css('display', 'block');
			$('#shop_list').css('display', 'none');
			var colorBg = $('#wrap-picture').css('background-color');
			$(this).css('background-color', colorBg);
			$('.shop').css('background-color', '#fff');
		});
		$('.shop').mouseenter(function() {
			$('.animal').css('border', '1px solid #e1e1e1').css('width', 112).css('padding-top', 0);
			$(this).css('border', 'none').css('width', 114).css('padding-top', 1).css('color', '#fff');
			$(this).find('b').eq(0).css('background-position', '0 -1276px');
			$('.animal').find('a').eq(0).css('color', 'black');
			$('.animal').find('b').eq(0).css('background-position', '-17px -1257px');
			$('#shop_list').css('display', 'block');
			$('#pet').css('display', 'none');
			var colorBg = $('#wrap-picture').css('background-color');
			$(this).css('background-color', colorBg);
			$('.animal').css('background-color', '#fff');
		});

		//商品列表的拉升

		$('.pet-active').mouseenter(function() {
			$('#boxsha').css('display', 'none');
			$('#cate-action').css('display', 'block');
		});
		$('.pet-active').mouseleave(function() {
			$('#cate-action').css('display', 'none');
		});

		$('#shop_list').find('li').mouseenter(function() {
			$(this).find('h3').animate({
				'left': 20
			}, 100);
			$(this).find('h3').css('background-color', '#fff');
			$(this).find('h3').css('background-position-y', -1100);

			$('#boxsha').css('display', 'block');
			$('.mincate').each(function() {
				$(this).css('display', 'none');
			});
			$('.minads').each(function() {
				$(this).css('display', 'none');
			});
			var num = $(this).index() + 1;
			$(".p_" + num).css('display', 'block');

			$('#boxsha').mouseenter(function() {
				$(this).css('display', 'block');
				$(this).find('h3').css('background-color', '#fff');
				$(this).find('h3').css('background-position-y', -1100);
			});
			$('#boxsha').mouseleave(function() {
				$(this).css('display', 'none');
				$('#shop_list').find('h3').css('background-color', '#fcfcfc');
				$('#shop_list').find('h3').css('background-position-y', -1206);
			});

		});

		$('#shop_list').find('li').mouseleave(function() {
			$(this).find('h3').animate({
				'left': 0
			}, 30)
			$('#boxsha').css('display', 'none');

			$('#shop_list').find('h3').css('background-color', '#fcfcfc');
			$('#shop_list').find('h3').css('background-position-y', -1206);
		});
	});

	$('#wrap-footer').load('html/footer.html', function() {});
	$('#wrap-footEnd').load('html/footEnd.html', function() {});
	$('#window_nav').load('html/window_nav.html', function() {
		
		var navTop = ($(window).height() - $('#window_nav').height())/2;
		
		$('#window_nav').css('top',navTop)
		
		$('.rtcont').find('.outLi').hover(function(){
			$(this).find('label').finish().css('display','block').finish().animate({
				'opacity':1,
				'right':35
			},500);
		},function(){
			$(this).find('label').finish().animate({
				'opacity':0,
				'right':53
			},500);
		});
		
		$('.rtcont').find('.enterLi').hover(function(){
			$(this).find('div').css('display','block');
		},function(){
			$(this).find('div').css('display','none');
			$(this).find('div').hover(function(){
				$(this).css('display','block');
			},function(){
				$(this).css('display','none');
			});
		});
		
		
		
		$(window).scroll(function(){
			if($(document).scrollTop() >= 300){
				$('.rtcont').find('.li-10').find('.rt-top').css('background-position','1px -515px');
			}else{
				$('.rtcont').find('.li-10').find('.rt-top').css({
					
					'background-position':'1px -540px'
				});
			}
		})
		
		$('.rtcont').find('.li-10').click(function(){
			$(document).scrollTop(0)
		})
		
	});
	
	
});