$(function() {
	var pno = 1;
	function loadpage(i=1) {
		pno=i
		$.ajax({
			type: 'get',
			url: '/category?pno='+pno,
			success: function(res) {
				 console.log(res)
				 
				 if($('.orderbyasc').html()=='销量按升序排序'){
					 
				 }
				var html ='<div class="recpall">';
				for (var list of res.data) {
					html +=`
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
				html+=`</div>`
				$(html).replaceAll('.recpall')

				$('.allnew p:first span').html('全部商品')
			}
		})
	}
	loadpage(pno)
	
	//升序排列
// 	$('.orderbyasc').click(function(e){
// 		e.preventDefault();
// 		$.ajax({
// 			url:'/category/desc',
// 			type:'get',
// 			success:function(res){
// 				console.log(res)
// 			}
// 		})
// 	})
	
	
	
	
	
	
	
	
	// 分页
	var html = `
		<div class='page'>
			<button>上一页</button>
	`;
	for (var i = 0; i < 6; i++) {
		html +=` <a href="javascript:;">${i+1}</a>`
	}
	html += `
			<button>下一页</button>
		</div>
	`
	$('.page').append(html)
	$('.page a:first').addClass('active')


	// btn a 单击 分页
	$('.allnew').on('click', '.page button,.page a', function() {
		// console.log($(this).index()==pno)
		if ($(this).html() == '上一页') {
			if(pno>1){
				loadpage(pno-1)	
				$('.page a[class=active]').prev().addClass('active').siblings().removeClass('active')
// 				e--;
// 				for(var i=0;i<$('.page a').length;i++){
// 					if(i==e){
// 						$('.page a').siblings().removeClass('active')
// 						$('.page a')[i].className='active'
// 					}
// 				}
			}
		} else if ($(this).html() == '下一页') {
			if(pno!=6){
				loadpage(pno+1)
				$('.page a[class=active]').next().addClass('active').siblings().removeClass('active')
//				e++;
// 				for(var i=0;i<$('.page a').length;i++){
// 					if(i==e){
// 						$('.page a').siblings().removeClass('active')
// 						$('.page a')[i].className='active'
// 					}
// 				}
			}
		} else {
			loadpage(parseInt($(this).html()))
			$(this).addClass('active').siblings('a').removeClass('active')
		}
	})
})
