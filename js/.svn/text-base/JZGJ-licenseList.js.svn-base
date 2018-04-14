layui.use(['jquery', 'form', 'layer'], function() {
	var $ = layui.$,
		form = layui.form,
		layer = layui.layer;

	//点击刷新图标  执行动画
	$(".refresh").click(function() {
		refres_animate();
		layer.open({
			type: 1,
			title: false,
			closeBtn: 1,
			shadeClose: true,
			skin: 'yourclass',
			content: $(".layer-yuyue")
		});
	})

	//监听提交
	form.on('submit(formDemo)', function(data) {
		layer.msg(JSON.stringify(data.field));
		layer.closeAll(); //验证通过 关闭弹窗
		refres_animate();
		return false;
	});

	//刷新动画
	function refres_animate() {
		$(".refresh").find("img").addClass("layui-anim-rotate");
		setTimeout(function() {
			$(".refresh").find("img").removeClass("layui-anim-rotate");
		}, 1000)
	}
})