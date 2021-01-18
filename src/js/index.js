import '../css/index.css'
import $ from 'jquery'
var reg = /^1[34578][0-9]{9}/;
var reg1 = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/;
var reg2 = /^[\u4e00-\u9fa5-Za-z0-9]{3,8}$/
$('input').focus(function(){
	$(this).prop('class','active').siblings('input').prop('class','')
})
$('button').click(function() {
	if ($('input[name="username"]').val() == '') {
		$('.msg').text('请您输入手机/邮箱/用户名').css('color', 'red')
	} else if (reg.test($('input[name="username"]').val()) || reg1.test($('input[name="username"]').val()) || reg2.test($('input[name="username"]').val())) {
		$('.msg').text('验证通过').css('color', 'green')
	} else {
		$('.msg').text('用户名格式错误').css('color', 'red')
	}
})
