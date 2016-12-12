$(function(){
	
	$('#wrap-header').load('html/header.html', function() {
		
		var str = $.cookie('login');
		if(str==undefined ||str==""){
			
		}else{
			var oCookie = JSON.parse(str);
			//console.log(oCookie)
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
	
	//购物车添加
	var strCookie = $.cookie("good");
	
	if(strCookie==undefined || strCookie==""){
		//console.log("haha")
	}else{
		var oCookie = JSON.parse(strCookie);
		//console.log(oCookie)
		var n = 0;
		var money = 0;
		$.each(oCookie, function() {
			var str="";
			str += '<tr class="cart-order">'
			str += '<td class="td-2"><input checked="checked" type="checkbox"></td>'
			str += '<td class="td-3"><div class="por-img"><a href="#" target="_blank"><img src='+this.shopimg+' width="80"></a></div><div class="por-intro"><a href="#" target="_blank" class="shopname">'+this.shopname+'</a><div class="shopgshui"><font>关税：￥0.00<span class="through" style="padding-left: 5px;">￥15.01</span><i></i></font></div></div><div class="clear"></div></td>'
			str += '<td class="td-4"><div class="buynum-wrap"><span class="lessl">-</span><input type="text" value='+this.num+' id="num" class="text" /><span class="addl">+</span></div><p class="havegood">有货</p></td>';
			str += '<td class="td-5">'+this.nowprice+'</td>'
			str += '<td class="td-6"><a href="#" class="shoucang">[收藏]</a><a href="###" class="shanchu">[删除]</a></td>'
			str += '</tr>'
			
			$('tbody').find('tr').eq(-2).before(str);
			
			n += this.num;
			money += parseFloat((this.nowprice).replace("￥",""))*this.num;
		});
		$('.gobalance').find('span').html(n);
		$('#one1').find('em').html(n);
	//总金额
		$('.money').html("￥"+money);
	
	//关税总额
		$('.gsmoney').html("￥"+15.01*n);
	}
	
	
	
	//加减商品
	$(".addl").click(function(){
		var aCookie = JSON.parse($.cookie("good"));
		var shoppingname = $(this).parent().parent().parent().find('.shopname').html();
		$.each(aCookie, function() {
			if(this.shopname == shoppingname){
				var anum = parseInt(this.num)+1;
				this.num = anum;
			}
		});
		
		$.cookie("good",JSON.stringify(aCookie),{expires:7 , path:"/"});
		//console.log($.cookie('good'))
		var newcookie = JSON.parse($.cookie("good"));
		var anumber = 0;
		var amoney = 0;
		var bnumber = 0;
		$.each(newcookie, function() {
			if(this.shopname == shoppingname){
				anumber += this.num;
				
			}
			amoney += parseFloat((this.nowprice).replace("￥",""))*this.num;
			bnumber += this.num;
		});
		$('.gobalance').find('span').html(bnumber);
		$('#one1').find('em').html(bnumber);
		//总金额
		$('.money').html("￥"+amoney);
		
		//关税总额
		$('.gsmoney').html("￥"+15.01*bnumber);
		$(this).parent().find('.text').val(anumber);
		//console.log($.cookie('good'))
	});
	
	$(".lessl").click(function(){
		if($(this).parent().find('.text').val()==1){
			return
		}
		var aCookie = JSON.parse($.cookie("good"));
		var shoppingname = $(this).parent().parent().parent().find('.shopname').html();
		$.each(aCookie, function() {
			if(this.shopname == shoppingname){
				var anum = parseInt(this.num)-1;
				this.num = anum;
			}
		});
		
		$.cookie("good",JSON.stringify(aCookie),{expires:7 , path:"/"});
		//console.log($.cookie('good'))
		var newcookie = JSON.parse($.cookie("good"));
		var anumber = 0;
		var amoney = 0;
		var bnumber = 0;
		$.each(newcookie, function() {
			if(this.shopname == shoppingname){
				anumber += this.num;
				
			}
			amoney += parseFloat((this.nowprice).replace("￥",""))*this.num;
			bnumber += this.num;
		});
		$('.gobalance').find('span').html(bnumber);
		$('#one1').find('em').html(bnumber);
		//总金额
		$('.money').html("￥"+amoney);
		
		//关税总额
		$('.gsmoney').html("￥"+15.01*bnumber);
		$(this).parent().find('.text').val(anumber);
		//console.log($.cookie('good'))
	});
	//console.log($(".addl"))
	
//删除购物车物品
	$('.shanchu').click(function(){
		
		$(this).parent().parent().remove();
		var aCookie = JSON.parse($.cookie("good"));
		var shoppingname = $(this).parent().parent().find('.shopname').html();
		$.each(aCookie, function(index,obj) {
			if(this.shopname == shoppingname){
				aCookie.splice(index,1);
				$.cookie("good",JSON.stringify(aCookie),{expires:7 , path:"/"});
			}
		});
		var newcookie = JSON.parse($.cookie("good"));
		var anumber = 0;
		var amoney = 0;
		var bnumber = 0;
		$.each(newcookie, function() {
			if(this.shopname == shoppingname){
				anumber += this.num;
			}
			amoney += parseFloat((this.nowprice).replace("￥",""))*this.num;
			bnumber += this.num;
		});
		$('.gobalance').find('span').html(bnumber);
		$('#one1').find('em').html(bnumber);
		//总金额
		$('.money').html("￥"+amoney);
		
		//关税总额
		$('.gsmoney').html("￥"+15.01*bnumber);
		$(this).parent().find('.text').val(anumber);
		//console.log($.cookie('good'))
		
	});
	
	
	//全选
	$('.all-checked').click(function(){
		
		$('.cart-order').find(':checkbox').prop('checked',this.checked);
		
		
	});
	
	//console.log($('.cart-order').find(':checked'))
	
	$('.delete-shop').click(function(){
		$('.cart-order').find(':checked').parent().parent().remove();
	})
})


