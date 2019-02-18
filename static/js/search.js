$(function(){
	if(location.search.indexOf('search=')!==-1){
		var key = decodeURIComponent(location.search.split('=')[1])
		$.ajax({
			type:'get',
			url:`/search?search=${key}`,
			success:function(res){
				if(res.length){
					var html='';
					for(var list of res){
						html+=`
						<div class='recp'>
							<a href='product.html?cid=${list.cid}'><img data-lid='${list.cid}' src="${list.img}" alt=""></a>
							<b>${list.title}</b><br>
							<span>${list.subtitle}</span><br>
							<s>￥${list.original.toFixed(2)}</s>
							<h2>￥${list.price.toFixed(2)}</h2><br>
							<p><span>${list.buy}</span>人已购买 <button>加入购物车</button></p>
						</div>
						`;
					}
					$('.title').append(html)
					console.log(res)
					$('.title p:first span').html(key)
				}else{
					$('.title p:first span').html(key)
					$('.title').append('<h1 style="font-size:30px;padding-left:50px;">查询结果为0<h1>')
				}

			}
		})
	}
})