layui.use(['layer', 'jquery', 'form', 'laydate'], function() {
	var layer = layui.layer,
		$ = layui.$,
		laydate = layui.laydate,
		form = layui.form;;

	$(".test-drive button").click(function() {
		layer.open({
			type: 1,
			title: false,
			closeBtn: 1,
			shadeClose: true,
			skin: 'yourclass',
			content: $(".layer-yuyue")
		});
	})

	//时间选择器
	laydate.render({
		elem: '#chooseDate'
	});

	//监听提交
	form.on('submit(formDemo)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});
});