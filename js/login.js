$(function(){
	
	$("#loginbtn").click(function(){
		
		var sName = $('#username').val();
		var sPsw = $('#psw').val();
		
		if(sName!="" && sPsw!=""){
			
			var sCookie = $.cookie('user');
			if(sCookie=='' || sCookie==undefined){
				var obj = {type:false};
				alert('用户未注册');
			}else{
				
				var aCookie = JSON.parse(sCookie);
				var bRig = true;
				$.each(aCookie,function(){
					if(this.name==sName &&this.pws==sPsw){
						bRig = false ;//登录成功
					}
				});
				if(bRig){
					alert('用户信息有误');
					var obj = {type:false};
				}else{
					var obj = {type:true,name:sName}
					location.href = "index.html";
				}
				
			}
			
			$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});
			console.log( $.cookie('login'));
			
		}else{
			alert('请输入用户信息');
		}
		
	});
	
})
