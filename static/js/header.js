$(function(){
	$("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
	$.ajax({
		url:'header.html',
		type:'get',
		success:function(res){
			$(res).appendTo('header');
			// 搜索
			$('.serachmiddle button').on('click',function(){
				var ipt=$(this).prev().val()
				if(ipt.trim()==''){
					alert('搜索关键词不能为空')
				}else{
					location.href=`search.html?search=${ipt}`;
				}
			})
			
			if(location.search.indexOf('search=')!=-1){
				$('.serachmiddle input').val(decodeURIComponent(location.search.split('=')[1]))
			}
			
			// 全部商品
			$('div.nav ul li:first a').click(function(e){
				e.preventDefault()
				location.href='category.html'
			})
			
			// 搜索提示
			
			$('.serachmiddle input:first').on('input',function(e){
				var key =decodeURIComponent(e.target.value) ;
				if(key.trim()!=''){
					$.ajax({
						type:'get',
						url:`/header?key=${key}`,
						success:function(res){
							if(res.length){
								var html = `
									<ul>
								`;
								for(key of res){
									// console.log()
									html+=`
									<li><a href=product.html?cid=${key.cid}>${key.title}</a></li>
									`
								}
								html+=`</ul>`
								$('.searchinput').html('')
								$('.searchinput').append(html)
							}else{
								var html =`
									<ul>
										<br><br><br><br>
										      <li>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 没有查询到相关数据</li>
									</ul>
								`
								$('.searchinput').append(html)
							}

							// console.log($('.serachmiddle input:first'))
						} 
					})
				}else{
					 $('.searchinput').html('')
				}
				console.log()
// 				$('.searchinput input:first').blur(function(){
// 					console.log(1)
// 				})
			})
			// 如果input为空
			$('.serachmiddle input:first').blur(function(e){
				 $('.searchinput').hide(500)
			})
			$('.serachmiddle input:first').focus(function(e){
				$('.searchinput').show(500)
			})
		}
	})
	

})