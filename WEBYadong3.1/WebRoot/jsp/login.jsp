<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path1 = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path1 + "/";
	String path = request.getContextPath() + request.getServletPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>login</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
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
	$(function() {

		 
	})
	function changeCaptcha() {
	
		$("#userCaptcha").attr("src","${pageContext.request.contextPath}/hmModelDatasetMpping_getCaptcha.action?randnum="+ Math.floor(Math.random() * 1000000));
	}
	
	function checkLogin(){
	
	if(!$("#name").val()){
	 
		return false;
	 
	}
	if(!$("#password").val()){
		return false;
	 
	}
	if(!$("#captcha").val()){
	
	 
		return false;
	 
	}
	
	 if( $("#name").val() &&  $("#password").val() && $("#captcha").val()){
	
	      return  true;
	 }
	}
	
	$(function(){
	
		$("#name").blur(function(){
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
				//$("#errorName").hide(1);errorcaptcha
			}
		})
		
		$("#captcha").blur(function(){
			
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorcaptcha").html("验证码错误");
				$("#errorcaptcha").show(1);
			}else {
				$("#errorcaptcha").hide(1);
				//$("#errorcaptcha").html("");
			} 
		})
		//errorLi
			var errorTips = $("#errorTips").val();
			//var errorTips = $("#errorTips").val();
			if(errorTips!=null && $.trim(errorTips) !=""){
			     if(errorTips == "captchaerror"){
			 $("#errorcaptcha").html("验证码错误");
				   $("#errorcaptcha").show(1);
			 }else if(errorTips == "uperror"){
			     	$("#errorusername").html("用户名或者密码错误");
			     	$("#errorusername").show(1);
			 }
			     
			      
			}
		      
			
		 
	})
</script>
</head>
<body>
 
 
	<div class="logina-logo" style="height: 55px">
		<a href=""> <img src="http://122.112.93.231:8080/ImgServer/upload/mylogo.png"
			height="60" alt=""> </a>
	</div>
	<div class="logina-main main clearfix">
		<div class="tab-con">

			<form id="form-login" method="post"
				action="${pageContext.request.contextPath}/hmModelDatasetMpping_login.action"
				onsubmit="return checkLogin()">
				<div id='login-error' class="error-tip"></div>
				<table border="0" cellspacing="0" cellpadding="0">
					<tbody>
						<tr>
							<th>账户</th>
							<td width="245"><input id="name" type="text" name="name"
								placeholder="电子邮箱/手机号" autocomplete="off" value="">
								<li id="errorusername" class="errorTip" style="display:none"></li>
							</td>
					
							<td></td>
						</tr>
						<tr>
							<th>密码</th>
							<td width="245"><input id="password" type="password"
								name="password" placeholder="请输入密码" autocomplete="off">
								<li id="errorpassword" class="errorTip" style="display:none"></li>
								<input type="hidden"  id="errorTips" value="${tip}" />
							</td>
							<td></td>
						</tr>
						<tr id="tr-vcode">
							<th>验证码</th>
							<td width="245">
								<div class="valid">
									<input type="text" id="captcha" name="captcha" maxLength="7"
										vld="{required:true}" />
								</div> <span class="bg_text small"> <img id="userCaptcha"
									src="${pageContext.request.contextPath}/hmModelDatasetMpping_getCaptcha.action"
									onclick="changeCaptcha()" class="code" alt="换一张" /> <a
									href="javascript:void(0);" onclick="changeCaptcha()"
									title="换一张">换一张</a>
									<li id="errorLi" class="errorTip" style="display:none"></li>
									 </span>
								<li id="errorcaptcha" class="errorTip" style="display:none"></li>
							</td>
							<td></td>
						</tr>
						<tr class="find">
							<th></th>
							<td>
								<div>
									<label class="checkbox" for="chk11"><input
										style="height: auto;" id="chk11" type="hidden"
										name="remember_me"></label> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="passport/forget-pwd">忘记密码？</a>
								</div></td>
							<td></td>
						</tr>
						<tr>
							<th></th>
							<td width="245"><input class="confirm" type="submit"
								value="登  录">
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<input type="hidden" name="refer" value="site/">
			</form>
		</div>
		<div class="reg">
			<p>
				还没有账号？<br>赶快免费注册一个吧！
			</p>
			<a class="reg-btn" href="http://localhost:8080/ssm/hmModelDatasetMpping_forWord.action">立即免费注册</a>
		</div>
	</div>
	<div id="footer">
		<div class="copyright">Copyright © 2014 js-css.cn. All Rights
			Reserved. 猜谜网版权所有</div>
	</div>
</body>
<!-- 登陆界面 -->




</html>
