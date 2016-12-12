$(function(){
	
	flag = false;
	//手机号验证
	$("#phone").blur(function(){
		
		if((/^(\d){11}$/.test($(this).val())) ==false){
			$("#phoen-number").css("display","block");
			$("#phone").css("border-color","#ff6f4a");
		}else{
			$("#phoen-number").css("display","none");
			$("#phone").css("border-color","#ddd");
			$("#phonemsg_img").css("display","block");
			flag = true;
		}
		//console.log(flag)
	});
	//验证码验证
	$.idcode.setCode();
	$("#butn").click(function(){
		$.idcode.validateCode()
	})
	$("#Txtidcode").blur(function(){
		flag = false;
		//console.log($(this).val().length)
		
		var IsBy = $.idcode.validateCode();
		if(IsBy){
            $("#shuruyanzhengma").css("display","none");
			$("#varify").css("border-color","#ddd");
			$("#yanzheng_img").css("display","block");
			flag = true;
        }else {
            $("#shuruyanzhengma").css("display","block");
            $("#varify").css("border-color","#ff6f4a");
        }
	});
	//获取短信验证码
	
	$("#phonecodebtnregister").click(function(){
		
		$("#duanxinyzm").css({
			"display":"block",
			"background-color":"#fff"
		});
		$("#duanxinyzm").find("span").html("158158");
		
	});
	
	//短信验证
	$("#msgcode").blur(function(){
		flag = false;
		//console.log($(this).val().length)
		if($(this).val()==""){
			$("#duanxinyzm").css({
				"display":"block",
				"background-color":"#fff3d9"
			});
			$("#duanxinyzm").find("span").html("请输入短信验证码");
			$("#msgcode").css("border-color","#ff6f4a");
		}else if((/^158158$/.test($(this).val())) ==false){
			$("#duanxinyzm").css({
				"display":"block",
				"background-color":"#fff3d9"
			});
			$("#duanxinyzm").find("span").html("验证码输入错误");
			$("#msgcode").css("border-color","#ff6f4a");
		}else{
			$("#duanxinyzm").css("display","none");
			$("#msgcode").css("border-color","#ddd");
			$("#dunxinyanz_img").css("display","block");
			flag = true;
		}
	});
	
	//用户名验证
	$("#username").blur(function(){
		flag = false;
		if((/^(\w){4,20}$/.test($(this).val())) ==false){
			$("#usernamets").css("display","block");
			$("#username").css("border-color","#ff6f4a");
		}else{
			$("#usernamets").css("display","none");
			$("#username").css("border-color","#ddd");
			$("#username_img").css("display","block");
			flag = true;
		}
		//console.log(flag)
	});
	
	//密码验证
	$("#password").blur(function(){
		flag = false;
		if((/^(\w){8,20}$/.test($(this).val())) ==false){
			$("#mima").css("display","block");
			$("#password").css("border-color","#ff6f4a");
		}else{
			$("#mima").css("display","none");
			$("#password").css("border-color","#ddd");
			$("#password_img").css("display","block");
			flag = true;
		}
		//console.log(flag)
	});
	
	$("#password-ok").blur(function(){
		flag = false;
		if($(this).val()==""){
			$("#mimayanzheng").find("span").html("请输入正确密码");
			$("#mimayanzheng").css("display","block");
			$("#password-ok").css("border-color","#ff6f4a");
		}else if($(this).val() != $("#password").val()){
			$("#mimayanzheng").css("display","block");
			$("#mimayanzheng").find("span").html("2次密码不一致");
			$("#password-ok").css("border-color","#ff6f4a");
		}else{
			$("#mimayanzheng").css("display","none");
			$("#password-ok").css("border-color","#ddd");
			$("#password-ok_img").css("display","block");
			flag = true;
		}
		//console.log(flag)
	});
	
	
	//console.log(flag)
	
	
	
		
	$("#submit").click(function(){
		
		//console.log(flag)
		
//		$(".adiv").each(function(){
//			if($(this).find("input").val()==""){
//				flag=false;
//			}
//			
//		})
		
		if(flag==false){
			console.log("用户信息输入错误");
		}else{
			var sUser = $('#username').val();
			var sPsw = $('#password').val();
			
			var  newUser = {"name":sUser,"pws":sPsw};
			var sCookie = $.cookie('user');
			
			if(sCookie==undefined  || sCookie==""){
				var aCookie = [];
				aCookie.push(newUser);
			}else{
				
				var aCookie = JSON.parse(sCookie);
				var  bReg  = false;
				$.each(aCookie,function(){
					if(this.name==sUser){
						bReg = true;
					}
				});
				
				if(bReg){
					alert('你输入的信息已经注册');
				}else{
					aCookie.push(newUser);
					location.href = "login.html";
				}
				
			}
		}
		
		$.cookie('user',JSON.stringify(aCookie),{expires:7 , path:"/"});
				
		console.log( $.cookie('user'));
		
	});
	

	
})
