layui.use(['carousel', 'element', 'jquery', 'flow'], function() {
	var carousel = layui.carousel,
		element = layui.element,
		$ = layui.$
	flow = layui.flow;

	var bool = false;
	carousel.render({
		elem: '#banner',
		width: '100%',
		arrow: 'always',
		height: '3.8rem',
		arrow: 'none'
	});

	//上拉加载
	var counter = 0,
        num = 5, //每次加载数据的条数
        pageStart = 0,
		pageEnd = 0;
	flow.load({
		elem: '#reload', //流加载容器					,
		done: function(page, next) { //执行下一页的回调
			setTimeout(function() {
				var lis = [];
				$.get('Json/test.json?page=' + page, function(res) {
					//假设你的列表返回在data集合中
					counter++;
					pageEnd = num * counter;
					pageStart = pageEnd - num;
					var length = res.data.length;
					var list = Math.ceil(res.data.length / 4)
					for(var i = pageStart; i < pageEnd; i++) {
						lis.push('<li><div class="car-image"><img src="' + res.data[i].img + '" /></div><div class="infor"><p class="name line1-overflow">' + res.data[i].name + '</p><p class="size">' + res.data[i].size + '</p><div class="tips"><span>' + res.data[i].tips + '</span><span>' + res.data[i].price + '</span></div></div></li>');
						if((i + 1) >= res.data.length) {
							next(lis.join(''), page < res.pages);
						}
					}
					//pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
					next(lis.join(''), page < list);
				});
			}, 500);
		}
	});

    //点击品牌
	$(".brandClick").click(function() {
		bool = !bool;
		brandFilter();
	})

	$(".default, .price-sort").click(function() {
		bool = false;
		brandFilter();
	})

	//品牌筛选
	function brandFilter() {
		if(bool) {
			$(".brandClick").find('span').css("color", "#2b76ff");
			$("html").css("background-color", "#fff");
			$(".head, .brand, .list").hide();
			$(".brand-filter").show();
		} else {
			$(".brandClick").find('span').css("color", "#000");
			$("html").css("background-color", "#f5f5f5");
			$(".head, .brand, .list").show();
			$(".brand-filter").hide();
		}
	}

	//品牌选择
	$(".brand li").click(function() {
		var result = $(this).find("span").html(); //拿到的品牌名称
		console.log(result);
		bool = !bool;
		$(".brandClick").find('span').css("color", "#000");
		$("html").css("background-color", "#f5f5f5");
		$(".head, .brand, .list").show();
		$(".brand-filter").hide();
		$(".filter-result").show();
		$(".filter-name").html(result);
	})

	//点击关闭图标
	$(".cancle").click(function() {
		$(".filter-result").hide();
		$(".filter-name").empty();
	})
});