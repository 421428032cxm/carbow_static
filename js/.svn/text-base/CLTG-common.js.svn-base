layui.use(['carousel', 'jquery', 'form'], function() {
	var carousel = layui.carousel,
		$ = layui.$,
		form = layui.form;

	var checked = false,
		totalScore = 0, //选中罚单的扣分总数
		totalCount = 0, //所有罚单的总金额
        scoreArr = [],
	    countArr = [];
	//轮播图
	carousel.render({
		elem: '#banner',
		width: '100%',
		height: '3.3rem',
		arrow: 'always',
		indicator: 'none',
		autoplay: false
	});

    //轮播图切换监听
	carousel.on('change(lincese)', function(obj) {
		console.log(obj.item[0].id); //当前条目的id
	});

	//表单提交
	form.on('submit(formDemo)', function(data) {
		layer.msg(JSON.stringify(data.field));
		return false;
	});

	//点击刷新 执行旋转动画
	$(".shuaxin").click(function() {
		refres_animate();
	})

	//处理违章点击事件
	$(".deal-btn").click(function() {
		$(this).hide();
		$(".select,.submit").show();
	})

	//点击全选 切换选中状态
	$(".select-all").click(function() {
		if($(".check-all").prop("checked") == true) {
			$("input[name='check']").prop("checked", true);
			$(".layui-unselect").addClass("layui-form-checked");
			$(this).find("span").html("取消全选");
		} else {
			$("input[name='check']").prop("checked", false);
			$(".layui-unselect").removeClass("layui-form-checked");
			$(this).find("span").html("全选");
		}
	})

	//点击复选框和全选  计算总的笔数
	$(".select,.select-all").click(function() {
		totalScore = 0;
		totalCount = 0;
		var check_length = $("input[name='check']:checked").length,   //被勾选的罚单的总数量
		    li_length = $(".layui-form li").length;  //所有罚单总数量
		$(".num").html(check_length);
		
		//当勾选总数量等于罚单总数量时  全选状态出现
        if(check_length == li_length){
        	$(".submit input[name='checkAll']").prop("checked", true);
        	$(".submit .layui-unselect").addClass("layui-form-checked");
        	$(".select-all").find("span").html("取消全选");
        }else{
        	$(".submit input[name='checkAll']").prop("checked", false);
        	$(".submit .layui-unselect").removeClass("layui-form-checked");
        	$(".select-all").find("span").html("全选");
        }
        
        //每次勾选复选框  重新遍历罚单列表  对被选中的罚单信息进行核算
		$(".layui-form li").each(function (index) {
			var selected = $(this).find("input[name='check']").prop("checked");
			if (selected == true) {
			  scoreArr[index] = parseInt($(this).find(".score").html());
			  countArr[index] = parseInt($(this).find(".delay-pay").html()) 
			                    + parseInt($(this).find(".fine").html())
			                    + parseInt($(this).find(".service-fee").html());
			}else{
			  scoreArr[index] = 0;
			  countArr[index] = 0;
			}
		})
        for (var i = 0; i < scoreArr.length; i++) {
        	totalScore += scoreArr[i];
        }
        for (var i = 0; i < countArr.length; i++) {
        	totalCount += countArr[i];
        }
        $(".totalScore").html(totalScore);
        $(".totalCount").html(totalCount);
	})

	//刷新动画
	function refres_animate() {
		$(".shuaxin").find("img").addClass("layui-anim-rotate");
		setTimeout(function() {
			$(".shuaxin").find("img").removeClass("layui-anim-rotate");
		}, 1000)
	}
});