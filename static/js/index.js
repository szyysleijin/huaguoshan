$(function() {
	
	

	
	
	
	
	$.ajax({
		type: 'get',
		url: '/mypro/load',
		success: function(res) {
			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.tj').append(html)
			//$(html).appendTo('.one');
		}
	})

	$.ajax({
		type: 'get',
		url: '/mypro/qiyiguo',
		success: function(res) {

			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.qiyiguo').append(html)
		}
	})

	$.ajax({
		type: 'get',
		url: '/mypro/mg',
		success: function(res) {

			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.mg').append(html)
		}
	})

	$.ajax({
		type: 'get',
		url: '/mypro/cz',
		success: function(res) {

			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.cz').append(html)
		}
	})

	$.ajax({
		type: 'get',
		url: '/mypro/ka',
		success: function(res) {

			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.ka').append(html)
		}
	})

	$.ajax({
		type: 'get',
		url: '/mypro/pl',
		success: function(res) {

			var html = '';
			for (var list of res) {
				html +=
					`
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
			$('.pl').append(html)
		}
	})



})


	//  轮播
