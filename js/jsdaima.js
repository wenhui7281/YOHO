 var timer = null;
 var num = 0;
 //定时器
timer = setInterval(function(){
//	clearInterval(timer)
	num++;
	num%=$('.warp-photo img').length;
	$('.warp-photo img').eq(num).addClass("show").siblings().removeClass("show");
	$(".slide-shad li").eq(num).addClass("active").siblings().removeClass("active");
},1500)
 //tab切换
$('.slide-shad li').click(function(){
			clearInterval(timer)
			$(this).addClass("active").siblings().removeClass("active");
			$('.warp-photo img').eq($(this).index()).addClass("show").siblings().removeClass("show");
			num = $(this).index();
	})
//左切换
$('.one').click(function(){
	clearInterval(timer)
	num--;
	if(num<0){
		num = $('.warp-photo img').length-1
	}
//	(num<0)? $('.warp-photo img').length-1 : num;
	$('.warp-photo img').eq(num).addClass("show").siblings().removeClass("show");
	$('.slide-shad li').eq(num).addClass("active").siblings().removeClass("active");
})
//右切换
$('.two').click(function(){
	clearInterval(timer)
	num++
	num%=$('.warp-photo img').length;
	$('.warp-photo img').eq(num).addClass("show").siblings().removeClass("show");
	$('.slide-shad li').eq(num).addClass("active").siblings().removeClass("active");
})
//鼠标进入图片清楚定时器离开重启定时器
$("#warp-pho").mouseover(function(){
	 clearInterval(timer)
})
$(".warp-photo img").mouseout(function(){
	 timer = setInterval(function(){
	 	num++;
	num%=$('.warp-photo img').length;
	$('.warp-photo img').eq(num).addClass("show").siblings().removeClass("show");
	$(".slide-shad li").eq(num).addClass("active").siblings().removeClass("active");
	 },1500)
})

//无缝轮播

	var nums = 0;
	var time = null;
	var newLi = $('.mul li').eq(0).clone();
	$('.mul').append(newLi);
	var len = $('.mul li').length;
	$('.mul').css('width',len*990);
	$(".img-left").click(function(){
		nums--;
		fn();
	})
	$(".img-right").click(function(){
		nums++;
		fn();
	})
	
   function fn(){
//	nums--;
	if(nums<0){
		nums = len-2;
		$('.mul').css('left',-(len-1)*990)
	}
	if(nums>len-1){
		nums=1;
		$('.mul').css('left',0);
	}
	$(".mul").stop().animate({'left':-(nums*990)},500)
	//tab切换
		if(nums>$('.mulss dd').length-1){
			$('.mulss dd').eq(0).addClass("mulss-show").siblings().removeClass('mulss-show')
		}else{
			$('.mulss dd').eq(nums).addClass("mulss-show").siblings().removeClass('mulss-show')
	}
}
	time = setInterval(function(){
		nums++
		fn();
	},2000)
	
	$('.img-warped').mouseover(function(){
		
		clearInterval(time);
		console.log(111)
	})
	$('.img-warped').mouseout(function(){
		time = setInterval(function(){
			nums++
			fn()
		},2000)
	})
		
	$('.mulss dd').click(function(){
		nums = $(this).index();
		fn()
	})
	
	//左右切换
	var numr = 0;
//	alert($(".logos-brander .gun").siblings().length);
	$(".left-one").click(function(){
		numr--;
		if(numr<0){
			numr=$(".logos-brander li").length-1;
		}
		
		$('.logos-brander li ').eq(numr).addClass("logo-show img").siblings(300).removeClass("logo-show img");
})
$('.left-two').click(function(){
	numr++;
	if(numr>$('.logos-brander li').length-1){
		numr%=$('.logos-brander li').length;
	}
	$('.logos-brander li ').eq(numr).addClass("logo-show img").siblings(300).removeClass("logo-show img");
})

//百叶窗
$('#photo-mmp li').eq(0).stop().animate({'width':650},500).siblings().stop().animate({'width':125},500)
$('#photo-mmp li').mouseover(function(){
		$(this).stop().animate({"width":650},500).siblings().stop().animate({"width":125},500);
//				$('#box').width(1280)
	})
$('#photo-mmp li').mouseout(function(){
		$('#photo-mmp li').eq(0).stop().animate({'width':650},500).siblings().stop().animate({'width':125},500)
})

//回顶部，悬浮二维码出现
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