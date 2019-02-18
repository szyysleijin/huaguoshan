$(function(){
	var cid = location.search.split('=')[1]
	// console.log(cid)
	$.ajax({
		type:'get',
		url:'/product/lis?cid='+cid,
		success:function(result){

			var html=`
				<div class='titleimg'>
					<img src="${result[0].img}" alt="">
					<div class='list'>
						<p>${result[0].title}</p>
						<div>
							<div class='price'>
								价&nbsp;&nbsp;&nbsp;格 
								<span>￥${result[0].price.toFixed(2)}</span>
							</div>
							<div class='xs'>
								<s>￥${result[0].original.toFixed(2)}</s>
								<span>限时抢购</span>
								<span>可获得${result[0].price}积分</span>
								<br> 
								<u>${result[0].assi}</u>
							</div>
						</div>
						<p>其他规格: <a href="">¥${result[0].price} <span>${result[0].assi}</span></a></p>
						<p>配送至 <a href="">广东 <span>x</span></a></p>
						<p>已有<span>${result[0].buy}</span>人购买 <span>共有<a href="">12</a> 条评论</span></p>
						<p>购买 
							<button>1</button>
								<p id='zin'>
									<button>+</button>
									<button>-</button>
								</p>
							<button class='shop'>加入购物车</button>
						</p>
						<p>简介: <span>${result[0].subtitle}</span></p>
					</div>
					<div class='xsimg'>
						<ul>
							<li><img src="${result[0].img}" alt=""></li>
						</ul>
					</div>
				</div>
			
			`;
			$('.title').append(html)
		}
	})
	$.ajax({
		url:'/search/sales',
		success:function(res){
			console.log(res)
		}
	})
})