$(function(){
	
	$.getJSON('json/shop_goods.json',function(res){
		
		//console.log(res)
		$.each(res,function(index,obj){
			
			var str = "";
			str += "<div class='list-box-li'>";
			
			str += "<div class='list-box-one'>";
			str += '<div class="country-pic"><img src='+obj.countrypic+' /></div>';
			str += '<div class="shop-bigpic"><div class="hovtitle">'+obj.weight+'</div><a href=product.html?'+index+'><img class="imgbox-fly" src='+obj.shopimg+' /></a><div class="act-notice"><a href="###"><span class="a-span-left"></span><span class="a-span-right">有优惠</span></a></div></div>';
			str += '<div class="goods-smallpic"><ul><li><a href="#"><img src='+obj.shopimg+' /></a></li><li><a href="#"><img src='+obj.shopimg+' /></a></li></ul></div>';
			str += '<a class="shop-name" href="#"><span class="longgo">直邮</span><span class="shop-name-text">'+obj.shopname+'</span></a>';
			str += '<p class="gpirce"><span class="pri-span1">'+obj.ageprice+'</span><span class="pri-span2">'+obj.nowprice+'</span><span class="pri-span3">'+obj.oneprice+'</span></p>';
			str += '<p class="shopedNum"><em>'+obj.selled+'</em><em>'+obj.people+'</em></p>';
			str += '<p class="sendPeople">'+obj.sendAdress+'<em class="idnumber">'+obj.idnumber+'</em></p>';
			str += '</div>';
			
			str += "<div class='list-box-two'>";
			str += '<a href="#" class="shoucang"><span>收藏</span></a><a href="###" class="addcar-pic"><span>加入购物车</span></a>';
			str += "</div>";
			
			str += "</div>";
			
			$('#list-box').append(str);
			
		});
		
		//console.log($('.list-box-li').css('border'))
		$('.list-box-li').hover(function(){
			$(this).css('border-color','#53aa5b')
			//console.log('haha')
		},function(){
			$(this).css('border-color','#ddd')
		});
		
		
//		添加到购物车
		$(".addcar-pic").click(function(e){
			
			var idnumber = $(this).parent().parent().find('.idnumber').html();
			var shopimg = $(this).parent().parent().find('.shop-bigpic').find('img').attr('src');
			var shopname = $(this).parent().parent().find('.shop-name-text').html();
			var nowprice = $(this).parent().parent().find('.pri-span2').html();
			//console.log(nowprice)
			var obj = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice};
			var strCookie =  $.cookie("good");
			
			var flag = false;
			if(strCookie == undefined || strCookie =="" ){
				var oCookie = [];
				var newGood = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice,"num":1};
				oCookie.push(newGood);
			}else{
				var oCookie = JSON.parse(strCookie);
				$.each(oCookie,function(){
					if(this.idnumber==idnumber){
						var num = parseInt(this.num)+1;
						this.num = num;
						flag = true;
					}
				});
				
				if(flag==false){
					var newGood = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice,"num":1};
					oCookie.push(newGood);
				}
			}
			
			$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
			
			//console.log($.cookie('good'))
			
			//购物动画
			var oldx = e.clientX;
			var oldy = e.clientY;
			var newleft = $('.li-2').offset().left;
			var flyer = $(this).parent().parent().find('.imgbox-fly').clone();
			
			flyer.fly({
				//起点
				start: {
					left: oldx,
					top: oldy
				},
				//终点
				end: {
					left: newleft,
					top: 220,
					width: 0,
					height: 0
				},
				//到达终点后调用的
				onEnd: function(){
					console.log("到达终点");

				}
			});	
			
		});
		
		
	});
	
	
	
})
