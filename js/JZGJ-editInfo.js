layui.use(['form', 'laydate', 'upload', 'jquery'], function() {
	var form = layui.form,
		laydate = layui.laydate,
		upload = layui.upload,
		$ = layui.$;

	//表单提交验证
	form.on('submit(editInfo)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});

	//添加驾照表单验证
	form.on('submit(addCarBtn)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});

	//日期选择
	laydate.render({
		elem: '#licenseDate'
	});
	laydate.render({
		elem: '#period'
	});

	//弹出框
	$(".take-pic").click(function() {
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			shadeClose: true,
			skin: 'yourclass',
			content: $(".layer-lincese")
		});
	})

	$(".know").click(function() {
		layer.closeAll();
	})

	//文件上传
	var uploadInst = upload.render({
		elem: '#upLoad',
		url: '',
		before: function(obj) {
			obj.preview(function(index, file, result) {
				$(".take-pic").hide();
				$(".upload-img").show();
				$('.upload-img img').attr('src', result);
			});
		},
		done: function(res) {
			//如果上传失败
			if(res.code > 0) {
				return layer.msg('上传失败');
			}
		},
		error: function() {
			//演示失败状态，并实现重传
			var demoText = $('#demoText');
			demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
			demoText.find('.demo-reload').on('click', function() {
				uploadInst.upload();
			});
		}
	});
});