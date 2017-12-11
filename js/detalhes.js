var num =0;
$(".meio img").click(function(){
	$("#box img").eq($(this).index()).show().siblings().hide();
	$(".left-como img").eq($(this).index()).show().siblings().hide();
})
//放大镜
$(function(){
	$(".left-como").hover(function(){
		$(".scara").show();
		$("#box").show()
	},function(){
		$(".scara").hide();
		$("#box").hide();
	})
	
	$(".left-como").mousemove(function(evevt){
		var ev = event||window.event;
			var PX = ev.pageX || ev.clientX+$(window).scrollLeft();
			var PY = ev.pageY || ev.clientY+$(window).scrollTop();
			var maxWidth = $('.left-como').width()-$('.scara').width();
			var maxHeight = $('.left-como').height()-$('.scara').height();
			//大图移动比例
			var ratio = ($('#box img').width()-$('#box').width())/($('.left-como').width()-$('.scara').width());
			
			var endX = PX - $('.left-como').offset().left - $('.scara').width()/2;
			var endY = PY - $('.left-como').offset().top - $('.scara').height()/2;
			if(endX > maxWidth){
				endX = maxWidth;
			}else if(endX < 0){
				endX = 0;
			}
					
			if(endY > maxHeight){
				endY = maxHeight;
			}else if(endY < 0){
				endY = 0;
			}
			$('.scara').css({'left':endX,'top':endY});
			$('#box img').css({'left':-endX*ratio,'top':-endY*ratio})
	})
})


//购物车飞起来
var offset = $('.go-shooping').offset(); //获取右侧购物车距离网页顶部的距离 
		$('.sp6').click(function (event) {
			console.log(event.pageX)
		    var thisItem = $(this);  //获取当前点击元素
		    var flyer = thisItem.clone(); //克隆当前点击元素
		    flyer.fly({ //飞行函数 
		        start: {  
		            left: event.pageX-25,  //商品起始横坐标
		            top: event.pageY-25 //商品起始纵坐标
		        },  
		        end: {  
		            left: offset.left +25,  //商品结束横坐标等于右侧购物车距离网页左侧的距离+10
		            top: offset.top +25,  //商品结束横坐标等于右侧购物车距离等于右侧购物车距离网页顶部的距离+10
		            width: 0,  //宽高清0，使其消失
		            height: 0  
		        },  
		      }); 
		        flyer.hide();
		        var nun = Number($(".go-shooping p").html())
		        	if(nun == Number){
		        		nun+=mo;
		        	}else{
		        		nun+=1
		        	}
		        	$(".go-shooping p").html(nun);
		        	$(".go-shooping p").css({
		        		color:"black"
		        	})
		        	alert("成功添加该商品")
		});  
		
		
		
//二维码以及公仔
var btn =  document.getElementById("return-top");
//var code =  document.getElementById("code");
var codeimg =  document.getElementById("code-img");
var time2 = null;
window.onscroll = function(){
var scrollY = document.body.scrollTop||document.documentElement.scrollTop;
// console.log(scrollY);
	if(scrollY>=350){
		btn.style.display = "block";
	}else{
		btn.style.display = "none";
	}
	if(scrollY>=350){
		code.style.display = "block";
	}else{
		code.style.display = "none";
	}
		btn.onclick = function(){	
			clearInterval(time2)
				 time2 = setInterval(function(){
			  		scrollBy(0,-30)
			 	},20)
			}
		if(scrollY == 0){
			clearInterval(time2);
		}
	}
//公仔消失
	$(".xiaoshi").click (function(){
		$("#code-img").hide();
	})
	
//二维码出现消失
$("#code").mouseover(function(){
	$(".code-two").show();
})
$("#code").mouseout(function(){
	$(".code-two").hide();
})

//商品跳转详情页
$(".coat").click(function(){
	location.href = "detalhes.html"
})


//数量加减
$(function(){
	var numb = 1;
	$('.reduzir').click(function(){
		var str = Number($('.num').html());
		if(str == Number){
			numb += str;
		}else{
			numb +=1;
		}
		
		 $('.num').html(numb)

	})
	var numb = 1;
	$('.alem').click(function(){
		
		var str = Number($('.num').html());
		if(str == Number){
			numb -= str-1;
		}else if(numb==1){
			numb = 1;
		}else{
			numb -=1;
		}
		$('.num').html(numb)
	})
})

$(".coat").click(function(){
	location.href = "detalhes.html"
})
//点击跳转子页面
$(".go-shooping").click(function(){
	location.href ="compas.html"
})
$(".loginbarer").click(function(){
	location.href ="register.html"
})
$(".loginbar").click(function(){
	location.href = "registo.html"
})
$(".boy").click(function(){
	location.href = "children.html"
})
