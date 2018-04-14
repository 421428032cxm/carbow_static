layui.use(['carousel', 'jquery'], function() {
	var carousel = layui.carousel,
		$ = layui.$;
    
    //轮播图中图片的总数量
    var total = $(".layui-carousel>[carousel-item]").find("div").length;
  
	carousel.render({
		elem: '#banner',
		width: '100%',
		height: '3.8rem',
		arrow: 'none',
		indicator: 'none'
	});
    
    //展开更多
	$(".more").click(function() {
		$(".des-content").css("height", "auto");
		$(this).hide();
	})
    
    //自定义轮播图角标索引值
	carousel.on('change(test1)', function(obj) { 
		$(".now").html(obj.index + 1);
		$(".total").html(total);
	});
});