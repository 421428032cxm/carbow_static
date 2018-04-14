layui.use(['element', 'jquery', 'layer'], function() {
	var element = layui.element,
		$ = layui.$,
		layer = layui.layer;

	//取消订单弹出框
	$(".cancel").click(function() {
		layer.confirm('确定取消该订单吗？', {
		    title :'提示',
			btn: ['取消', '确定'],
			closeBtn: 0
		}, function() {
			layer.closeAll();
		}, function() {
			layer.msg('订单已取消');
		});
	})

	//订单分类切换图片
	$(".order-all").click(function() {
		$(this).find("img").attr("src", "img/order_qbdd1.png");
		$(".order-waitpay").find("img").attr("src", "img/order_dfk2.png");
		$(".order-completed").find("img").attr("src", "img/order_ywc2.png");
		$(".order-cancel").find("img").attr("src", "img/order_yqx2.png");
	})
	$(".order-waitpay").click(function() {
		$(this).find("img").attr("src", "img/order_dfk1.png");
		$(".order-all").find("img").attr("src", "img/order_qbdd2.png");
		$(".order-completed").find("img").attr("src", "img/order_ywc2.png");
		$(".order-cancel").find("img").attr("src", "img/order_yqx2.png");
	})
	$(".order-completed").click(function() {
		$(this).find("img").attr("src", "img/order_qbdd1.png");
		$(".order-all").find("img").attr("src", "img/order_qbdd2.png");
		$(".order-waitpay").find("img").attr("src", "img/order_dfk2.png");
		$(".order-cancel").find("img").attr("src", "img/order_yqx2.png");
	})
	$(".order-cancel").click(function() {
		$(this).find("img").attr("src", "img/order_yqx1.png");
		$(".order-all").find("img").attr("src", "img/order_qbdd2.png");
		$(".order-waitpay").find("img").attr("src", "img/order_dfk2.png");
		$(".order-completed").find("img").attr("src", "img/order_ywc2.png");
	})

});