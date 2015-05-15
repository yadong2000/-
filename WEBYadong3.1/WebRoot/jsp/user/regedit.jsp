<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/javascript"
	href="${pageContext.request.contextPath}/css/style.css" />
<link
	href="${pageContext.request.contextPath}/css/res/ui/css/screen.css?v=3.9"
	media="screen, projection" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/res/ui/css/base.css?v=3.9">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/css/res/passport/css/login.css?v=3.9">
<script language="javascript"
	src="${pageContext.request.contextPath}/js/jquery.js" charset="utf-8"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/com.js" charset="utf-8"></script>
	<script type="text/javascript">
	
	$(function(){
		//length 
		$("#username").blur(function(){
		//	alert("sd"+$(this).val().length);
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorusername").html("请输入用户名");
				$("#errorusername").show(1);
				
			}else{
				if($(this).val().length < 6){
					$("#errorusername").html("用户名不得少于6位");
					$("#errorusername").show(1);
				}else if($(this).val().length > 20){
					$("#errorusername").html("用户名不得多于20位");
					$("#errorusername").show(1);
				}else{
					$("#errorusername").hide(1);
				}
			}
		});
		$("#password").blur(function(){
			
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorpassword").html("请输入密码");
				$("#errorpassword").show(1);
			}else{
				if($(this).val().length < 6){
					$("#errorpassword").html("用户名不得少于6位");
					$("#errorpassword").show(1);
				}else if($(this).val().length > 20){
					$("#errorpassword").html("用户名不得多于20位");
					$("#errorpassword").show(1);
				}else{
					$("#errorpassword").hide(1);
				}
				//$("#errorName").hide(1);
			}
		})
		$("#reppassword").blur(function(){
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorreppassword").html("请再次输入密码");
				$("#errorreppassword").show(1);
			}else{
				 if($(this).val()===$("#password").val()){
					 $("#errorreppassword").hide(1);
				 }else{
					 $("#errorreppassword").html("两次输入的密码不同");
					 $("#errorreppassword").show(1);
				 }
			}
		})
		//邮箱 验证
			$("#email").blur(function(){
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#erroremail").html("请输入邮箱");
				$("#erroremail").show(1);
			}else{
				if ($("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) { 
 
					 $("#erroremail").hide(1);
				 }else{
					 $("#erroremail").html("邮箱不符合规则");
					 $("#erroremail").show(1);
				 }
			}
		})
		//手机验证
			$("#phone").blur(function(){
			//	alert("__");
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorphone").html("请输入手机号码");
				$("#errorphone").show(1);
			}else{
				 if($("#phone").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
					 $("#errorphone").hide(1);
				 }else{
					 $("#errorphone").html("两次输入的密码不同");
				 }
			}
		})
		
		$("#regedi1t").click(function(){
			$("#username").val();
			alert("");
			 return false;
			
		})
		
		//	
	})
		function check_fields(){
			//alert("");
			//$("#username").blur(function(){
				if($("#username").val() == null || $.trim($("#username").val()) == ""){
					$("#errorusername").html("请输入用户名");
					$("#errorusername").show(1);
					$("#form-login").attr("target","hideIframe");
					//target="hideIframe"
					 return false;
					
				}else{
					/* if($(this).val().length < 6){
						$("#errorusername").html("用户名不得少于6位");
						$("#errorusername").show(1);
					}else */ 
					if($(this).val().length > 20){
						$("#errorusername").html("用户名不得大于20位");
						$("#errorusername").show(1);
						 return false;
					}else{
						$("#errorusername").hide(1);
					}
				}
			
		 
				
				if($("#password").val() == null || $.trim($("#password").val()) == ""){
					$("#errorpassword").html("请输入密码");
					$("#errorpassword").show(1);
					 return false;
				}else{
					if($(this).val().length < 6){
						$("#errorpassword").html("密码不得少于6位");
						$("#errorpassword").show(1);
						 return false;
					}else if($(this).val().length > 20){
						$("#errorpassword").html("密码不得多于20位");
						$("#errorpassword").show(1);
						 return false;
					}else{
						$("#errorpassword").hide(1);
						
					}
					//$("#errorName").hide(1);
				}
			 
			 
				if($("#reppassword").val() == null || $.trim($("#reppassword").val()) == ""){
					$("#errorreppassword").html("请再次输入密码");
					$("#errorreppassword").show(1);
					 return false;
				}else{
					 if($(this).val()===$("#password").val()){
						 $("#errorreppassword").hide(1);
					 }else{
						 $("#errorreppassword").html("两次输入的密码不同");
						 $("#errorreppassword").show(1);
						 return false;
					 }
				}
		 
			//邮箱 验证
			 
				if($("#email").val() == null || $.trim($("#email").val()) == ""){
					$("#erroremail").html("请输入邮箱");
					$("#erroremail").show(1);
					 return false;
				}else{
					if ($("#email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) { 
	 
						 $("#erroremail").hide(1);
					 }else{
						 $("#erroremail").html("邮箱不符合规则");
						 $("#erroremail").show(1);
						 return false;
					 }
				}
			 
			//手机验证
			 
				//	alert("__");
				if($("#phone").val() == null || $.trim($("#phone").val()) == ""){
					$("#errorphone").html("请输入手机号码");
					$("#errorphone").show(1);
					 return false;
				}else{
					 if($("#phone").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
						 $("#errorphone").hide(1);
					 }else{
						 $("#errorphone").html("两次输入的密码不同");
						 $("#errorphone").show(1);
						 return false;
					 }
				}
			 
				
			//}
		}
	</script>
<title>注册页面</title>
</head>
<body>
	<div class="logina-logo" style="height: 55px">
		<a href=""> <img src="http://122.112.93.231:8080/ImgServer/upload/mylogo.png"
			height="60" alt="">
		</a>
	</div>
<div class="logina-main main clearfix">
		<div class="tab-con">

			<form id="form-login" method="post" action="${pageContext.request.contextPath}/hmModelDatasetMpping_save.action ">
				
				<li id="errorName" class="errorTip" style="display:none"></li>
				<div id='login-error' class="error-tip"></div>
				<table border="0" cellspacing="0" cellpadding="0">
					<tbody>
						<tr>
							<th>* 账户</th>
							<td width="245">
							<input id="username" type="text"
								name="name" placeholder="电子邮箱/手机号" autocomplete="off"
								value="">
							<li id="errorusername" class="errorTip" style="display:none"></li></td>
							<td></td>
						</tr>
							<tr>
							<th>* 密码</th>
							<td width="245"><input id="password" type="password"
								name="password" placeholder="请输入密码" autocomplete="off">
							<li id="errorpassword" class="errorTip" style="display:none"></li></td>
							</td>
							<td></td>
						</tr>
							<tr>
							<th>* 确认密码</th>
							<td width="245"><input id="reppassword" type="password"
								name="reppassword" placeholder="请确认输入密码" autocomplete="off">
							<li id="errorreppassword" class="errorTip" style="display:none"></li>
							</td>
							<td></td>
						</tr>
						<tr>
							<th>* 邮箱</th>
							<td width="245"><input id="email" type="text"
								name="mail" placeholder="电子邮箱" autocomplete="off"
								value="">
							<li id="erroremail" class="errorTip" style="display:none"></li>	
								</td>
							<td></td>
						</tr>
						<tr>
							<th>* 手机</th>
							<td width="245"><input id="phone" type="text"
								name="phone" placeholder="手机号" autocomplete="off"
								value="">
							<li id="errorphone"" class="errorTip" style="display:none"></li>		
								</td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td width="245">
							<button onclick="check_fields();" type="submit">注 册</button>
							<!-- <input id="regedit" onclick="check_fields()"  class="confirm" type="submit"
								value="注 册"> --></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		<div class="reg">
			<p>
				已有账号请登录<br>我要登陆！
			</p>
			<a class="reg-btn" href="${pageContext.request.contextPath}/hmModelDatasetMpping_doLogin.action">登陆入口</a>
		</div>
	</div>
	<div id="footer">
		<div class="copyright">Copyright © 2014 js-css.cn. All Rights
			Reserved.  猜谜网版权所有</div>
	</div>
</body>
</html>