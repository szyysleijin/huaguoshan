$(function(){
	
	// 提示信息
	$('.tst p:first-child input').focus(function(){
		$(this).next().removeClass('hide').addClass('show')
	}).blur(function(){
		var reg = /^\w{6,12}$/;
		if(reg.test($(this).val().trim())){
			$(this).next().html('格式正确').css('background','#77BE22')
		}else{
			$(this).next().html('用户格式错误').css('background','red')
		}
	})
	
	$('.tst input[type=password]').focus(function(){
		
			$(this).next().removeClass('hide').addClass('show')
		}).blur(function(){
			var reg = /^\w{6,8}$/;
			if(reg.test($(this).val().trim())){
				$(this).next().html('格式正确').css('background','#77BE22')
			}else{
				$(this).next().html('密码格式错误').css('background','red')
			}
	})

	
	
	
	
	
	
	
	
	
	$('.reg').click(function(){
		var username=$(this).prev().prev().children('input');
		var userupwd=$(this).prev().children('input').val()
		// console.log(username,userupwd)
		$.ajax({
			type:'post',
			data:{username:username.val(),userupwd},
			url:'/login',
			success:function(result){
				console.log(result)
				if(result==1){
					alert('登录成功')
					history.go(-1)
				}else{
					alert('账号密码错误')
					username.focus()
				}
			}
		})
	})
})