	 $(function(){	
					var first = $('.warp-photo img').eq(0).clone();
					$('.warp-photo').append(first).width($('.warp-photo img').length*1150);
					var len = $('.warp-photo img').length;
					var num = 0;
					
					function move(){
						if(num > 8){
							num = 1;
							$('.warp-photo img').eq(0).show().siblings().hide();
						}
						if(num < 0){
							num = 7;
							$('.warp-photo img').eq(len-1).show().siblings().hide();
						}
						$('.warp-photo img').eq(num).fadeIn(800).siblings().fadeOut(400);
						if(num > 7){
							$('.slide-shade li').eq(0).addClass("active").siblings().removeClass("active");
						}else{
							$('.slide-shade li').eq(num).addClass("active").siblings().removeClass("active");
						}
					}
					$('.left-on').click(function(){
						num--;
						move();
					})
					
					$('.right-on').click(function(){
						num++;
						move();
					})
					
					var timer = setInterval(function(){
						num++;
						move();
					},2000)
					
					$('#warp-pho').hover(function(){
						clearInterval(timer)
					},function(){
						timer = setInterval(function(){
							num++;
							move();
						},2000)
					})
					
					$('.slide-shade li').click(function(){
						num = $(this).index();
						move();
					})
				})
	 
var btn =  document.getElementById("return-top");
//var code =  document.getElementById("code");
var codeimg =  document.getElementById("code-img");
var time2 = null;
window.onscroll = function(){
var scrollY = document.body.scrollTop||document.documentElement.scrollTop;
// console.log(scrollY);
	if(scrollY>=500){
		btn.style.display = "block";
	}else{
		btn.style.display = "none";
	}
	if(scrollY>=500){
		code.style.display = "block";
	}else{
		code.style.display = "none";
	}
		btn.onclick = function(){	
			clearInterval(time2)
				 time2 = setInterval(function(){
			  		scrollBy(0,-50)
			 	},10)
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

$(".girl").click(function(){
	location.href = "index.html"
})