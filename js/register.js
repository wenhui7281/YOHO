$(function() {
	$('#tab li').click(function() {
		$(this).addClass("yong").siblings().removeClass("yong");
		$('#tb li').eq($(this).index()).show().siblings().hide();
	});

	var btn = document.getElementById("btn")
	var btns = document.getElementById("btn1")
	var inp = document.getElementsByTagName("input");
	var local = window.localStorage;
	var flag = null;
	btn.onclick = function() {
		if(inp[0].value == "") {
			alert("用户名不能为空！");
			flag = false;
		} else if(!(inp[0].value == local.usecname)) {
			alert("该用户未注册！");
			flag = false;
		} else if(inp[1].value == "") {
			alert("密码不能为空！");
			flag = false;
		} else if(!(inp[1].value == local.senha)) {
			alert("密码不正确！");
			flag = false;
		} else {
			alert("恭喜你，登录成功 ，将为你跳转主页！");
			flag = true;
			location.href = 'index.html'
		}
	}
	btns.onclick = function() {
		if(inp[3].value == "") {
			alert("手机号码不能为空！");
			flag = false;
		} else if(!(inp[3].value == local.Number)) {
			alert("该手机号未注册！");
			flag = false;
		} else if(inp[4].value == "") {
			alert("密码不能为空！");
			flag = false;
		} else if(!(inp[4].value == local.senha)) {
			alert("密码不正确！");
			flag = false;
		} else {
			alert("恭喜你，登录成功，将为你跳转主页！");
			flag = true;
			location.href = 'index.html'
		}
	}
});

$(".mian").click(function(){
	location.href = "registo.html"
})