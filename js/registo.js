$('#phone').click(function() {
	//				var str = "";
	//				var flag = null;
	$('#ph').animate({
		'left': -70
	}, 300);
	$('#hon').show();
})
$('#yong').click(function() {
	var str = "";
	var flag = null;
	$('#phOne').animate({
		'left': -70
	}, 300);
	$('#honOne').show();
})
$('#ya').click(function() {
	var str = "";
	var flag = null;
	$('#phThree').animate({
		'left': -70
	}, 300);
})
$('#phoney').click(function() {
	var str = "";
	var flag = null;
	$('#phFour').animate({
		'left': -82
	}, 300);
})
$('#mi').click(function() {
	var str = "";
	var flag = null;
	$('#phFive').animate({
		'left': -82
	}, 300);
	$('#honFive').show();
})
$('#mim').click(function() {
	var str = "";
	var flag = null;
	$('#phSix').animate({
		'left': -82
	}, 300);
	$('#honSix').show();
})

//验证
var btn = document.getElementById("btn")
var inp = document.getElementsByTagName("input");
var flag = null;
var username = /^[\u4e00-\u9fa5\w]{3,16}$/;
var phone = /^1[3|4|5|8][0-9]\d{4,8}$/;
var pass = /^[a-z0-9_-]{6,18}$/;
var local = window.localStorage;
btn.onclick = function() {
	if(inp[0].value == "") {
		alert("用户名不能为空！");
		flag = false;
	} else if(!username.test(inp[0].value)) {
		alert("用户名不合法！");
		flag = false;
	} else if(inp[1].value == "") {
		alert("手机号码不能为空！");
		flag = false;
	} else if(!phone.test(inp[1].value)) {
		alert("手机号码不合法！");
		flag = false;
	} else if(inp[3].value == "") {
		alert("密码不能为空！");
		flag = false;
	} else if(!pass.test(inp[3].value)) {
		alert("密码不合法！");
		flag = false;
	} else if(inp[4].value == "") {
		alert("密码不能为空！");
		flag = false;
	} else if(inp[4].value != inp[3].value) {
		alert("密码不一致！");
		flag = false;
	} else {
		alert("恭喜你，注册成功！");
		flag = true;
		local.usecname = inp[0].value;
		local.senha = inp[3].value;
		local.Number = inp[1].value;
		location.href = "register.html"
	}
}

//随机获取二维码
var arr= ["【有货】验证码：1202，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。",
		    "【有货】验证码：1117，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。",
		    "【有货】验证码：0314，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。",
		  "【有货】验证码：0218，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。",
		  "【有货】验证码：0310，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。",
		  "【有货】验证码：1201，为保护账户安全，请不要将此验证码告知他人，如有疑问请咨询客服电话4008899646。"]
$("#btns").click(function(){
	alert(arr[Math.floor(Math.random()*arr.length)])
})

