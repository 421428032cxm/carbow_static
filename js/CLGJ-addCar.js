var menuBottom = document.getElementById('cbp-spmenu-s4');
var provinces = new Array("京", "沪", "浙", "苏", "粤", "鲁", "晋", "冀",
	"豫", "川", "渝", "辽", "吉", "黑", "皖", "鄂",
	"津", "贵", "云", "桂", "琼", "青", "新", "藏",
	"蒙", "宁", "甘", "陕", "闽", "赣", "湘");
var mask = false;  //蒙层是否显示

layui.use(['form', 'laydate', 'upload', 'jquery', 'layer'], function() {
	var form = layui.form,
		laydate = layui.laydate,
		upload = layui.upload,
		$ = layui.$,
		layer = layui.layer;

	//添加驾照表单验证
	form.on('submit(addCarBtn)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});

	//日期选择
	laydate.render({
		elem: '#licenseDate'
	});

	//选择图片弹出层
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

	//动态添加省份选择弹出层
	for(var i = 0; i < provinces.length; i++) {
		var label_span = $("<span></span>");
		var label_li = $("<li></li>");
		label_li.attr("class", "province-li");
		label_span.html(provinces[i]);
		label_li.append(label_span);
		$(".ul_pro").append(label_li);
	}

	//点击选择省份简称
	$("#showBottom").click(function() {
		mask = true;
		if(mask == true) {
			$(".mask").show();
			classie.toggle(menuBottom, 'cbp-spmenu-open');
		}
	})

	//点击蒙层 弹出层消失
	$(".mask").click(function() {
		mask = false;
		if(mask == false) {
			$(".mask").hide();
			classie.toggle(menuBottom, 'cbp-spmenu-open');
		}
	})
    
    //选择省份简称
	$(".province-li").each(function() {
		var $this = $(this);
		$this.click(function() {
			mask = false;
			$this.find("span").css({
				"backgroundColor": "#2b76ff",
				"color": "#fff"
			})
			if(mask == false) {
				$(".mask").hide();
				classie.toggle(menuBottom, 'cbp-spmenu-open');
				$(".province-input").val($this.find("span").html());
			}
			setTimeout(function() {
				$this.find("span").css({
					"backgroundColor": "#fff",
					"color": "#000"
				})
			}, 120)
		})
	})
});