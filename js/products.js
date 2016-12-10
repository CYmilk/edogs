$(function(){
	
//	$.ajax({
//		
//		type : "get",
//		url : "json/product.json",
//		success : function(res){
//			product(res);
//			console.log(res)
//		}
//		
//	})
	$.getJSON('json/product.json',function(res){
		//console.log("haha")
		var index = location.search.replace("?","");
		//console.log(index)
		$(".goods-box").find("a").html("<img src="+ res[index].shopimg +" />");
		$(".oborder").find("a").html("<img src="+ res[index].shopimg +" />");
		$("#bigpic").html("<img src="+ res[index].shopimg +" />")
		$(".product-message-left").find("h1").html("<span>[多件优惠]</span>" + res[index].shopname);
		$(".scj-pri").html(res[index].ageprice);
		$(".ecj-pri2").html(res[index].nowprice);
		$(".other-1").html("<span>编号：</span>" + res[index].idnumber);
		$(".other-2").html("<span>已售：</span>" + res[index].selled);
		
		var $smallpic = $(".goods-box");
		var $pos = $('#pos');
		var $bigpic = $('#bigpic img');
		
		$(document).mousemove(function(e){
			//console.log("鼠标y"+e.pageY)
			//console.log("鼠标x"+e.pageX)
			var disX = e.pageX - 76;
			var disY = e.pageY - 279;
			//console.log("鼠标x"+disX)
			//console.log("鼠标y"+disY)
			//console.log($pos.outerHeight())
			var smallOffset = $smallpic.offset();
			if(e.pageY>=smallOffset.top && e.pageX>=smallOffset.left && e.pageX<=smallOffset.left+$smallpic.outerWidth() && e.pageY <= smallOffset.top + $smallpic.outerHeight()){
				$pos.show();
				$("#bigpic").show();
				$pos.css({
					top:disY -$pos.outerHeight()/2,
					left:disX - $pos.outerWidth()/2,
				});
				//右边界
				if(e.pageX>=smallOffset.left + $smallpic.outerWidth()-$pos.outerWidth()/2){
					
					$pos.css({
						left:$smallpic.outerWidth()-$pos.outerWidth()
					})
				}
				//下边界
				if(e.pageY>=smallOffset.top + $smallpic.outerHeight()-$pos.outerHeight()/2){
					
					$pos.css({
						top:$smallpic.outerHeight()-$pos.outerHeight()
					})
				}
				//上边界
				if(e.pageY<=smallOffset.top +$pos.outerHeight()/2){
					$pos.css({
						top:0
					})
				}
				//左边界
				if(e.pageX<=smallOffset.left +$pos.outerWidth()/2){
					$pos.css({
						left:0
					})
				}
				
				var aTop = $pos.offset().top - 279;
				var aLeft = $pos.offset().left - 76;
				var beishuL = parseInt($bigpic.css('width'))/parseInt($smallpic.css('width'));
				var beishuH = parseInt($bigpic.css('height'))/parseInt($smallpic.css('height'));
				$bigpic.css({
					top: -aTop * beishuH,
					left: -aLeft * 2.6
				})
				//console.log(beishuL)
				
			}else{
				$pos.hide();
				$("#bigpic").hide();
			}
			
		});
		
	})
	
	
//	function product(res){
//		
//		var index = location.search.replace("?","");
//		console.log(index)
//		$(".goods-box").find("a").html("<img src="+ res[index].productimg +" />");
//		$(".product-message-left").find("h1").html("<span>[多件优惠]</span>" + res[index].shopname);


//	}
	
	var num = 1;
	$(".numadd").click(function(){
		num++;
		$(".shop-num").val(num)
	})
	$(".numcut").click(function(){
		if(num==1){
			return;
		}
		num--;
		$(".shop-num").val(num)
	})

//图片放大镜
	var $smallpic = $(".goods-box");
	var $pos = $('#pos');
	var $bigpic = $('#bigpic img');
	
	$(document).mousemove(function(e){
		//console.log("鼠标y"+e.pageY)
		//console.log("鼠标x"+e.pageX)
		var disX = e.pageX - 76;
		var disY = e.pageY - 279;
		//console.log("鼠标x"+disX)
		//console.log("鼠标y"+disY)
		//console.log($pos.outerHeight())
		var smallOffset = $smallpic.offset();
		if(e.pageY>=smallOffset.top && e.pageX>=smallOffset.left && e.pageX<=smallOffset.left+$smallpic.outerWidth() && e.pageY <= smallOffset.top + $smallpic.outerHeight()){
			$pos.show();
			$("#bigpic").show();
			$pos.css({
				top:disY -$pos.outerHeight()/2,
				left:disX - $pos.outerWidth()/2,
			});
			//右边界
			if(e.pageX>=smallOffset.left + $smallpic.outerWidth()-$pos.outerWidth()/2){
				
				$pos.css({
					left:$smallpic.outerWidth()-$pos.outerWidth()
				})
			}
			//下边界
			if(e.pageY>=smallOffset.top + $smallpic.outerHeight()-$pos.outerHeight()/2){
				
				$pos.css({
					top:$smallpic.outerHeight()-$pos.outerHeight()
				})
			}
			//上边界
			if(e.pageY<=smallOffset.top +$pos.outerHeight()/2){
				$pos.css({
					top:0
				})
			}
			//左边界
			if(e.pageX<=smallOffset.left +$pos.outerWidth()/2){
				$pos.css({
					left:0
				})
			}
			
			var aTop = $pos.offset().top - 279;
			var aLeft = $pos.offset().left - 76;
			var beishuL = parseInt($bigpic.css('width'))/parseInt($smallpic.css('width'));
			var beishuH = parseInt($bigpic.css('height'))/parseInt($smallpic.css('height'));
			$bigpic.css({
				top: -aTop * beishuH,
				left: -aLeft * 2.6
			})
			//console.log(beishuL)
			
		}else{
			$pos.hide();
			$("#bigpic").hide();
		}
		
	});
	
	
	$('.add-shopcar').click(function(){
		var idnumber = $(this).parent().parent().find('.other-1').html();
		idnumber = idnumber.replace('<span>编号：</span>','');
		var shopimg = $(this).parent().parent().parent().find('#bigpic').find('img').attr('src');
		var shopname = $(this).parent().parent().find('h1').html();
		shopname = shopname.replace('<span>[多件优惠]</span>','')
		var nowprice = $(this).parent().parent().find('.ecj-pri2').html();
		nowprice = '￥' + nowprice;
		var shopping_num = $(this).parent().parent().find('.shop-num').val();
		console.log(shopping_num)
		
		var obj = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice};
		var strCookie =  $.cookie("good");
		
		var flag = false;
		if(strCookie == undefined || strCookie =="" ){
			var oCookie = [];
			var newGood = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice,"num":shopping_num};
			oCookie.push(newGood);
		}else{
			var oCookie = JSON.parse(strCookie);
			$.each(oCookie,function(){
				if(this.idnumber==idnumber){
					var num = parseInt(this.num)+parseInt(shopping_num);
					this.num = num;
					flag = true;
				}
			});
			
			if(flag==false){
				var newGood = {"idnumber":idnumber,"shopimg":shopimg,"shopname":shopname,"nowprice":nowprice,"num":shopping_num};
				oCookie.push(newGood);
			}
		}
		
		$.cookie("good",JSON.stringify(oCookie),{expires:7 , path:"/"});
		console.log($.cookie('good'))
		alert("商品已经加入购物车！");
	});
	console.log()
})

