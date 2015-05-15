<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/jsp/basic/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script language="javascript"
	src="${pageContext.request.contextPath}/js/jquery.js"
	charset="utf-8"></script>
<script language="javascript"
	src="${pageContext.request.contextPath}/js/jquery.form.js"
	charset="utf-8"></script>
<script language="javascript"
	src="${pageContext.request.contextPath}/js/easyui-lang-zh_CN.js"
	charset="utf-8"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/amazeui.min.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/admin.css" />
 
	<style>
	
	.xxTitle {
  width: 603px;
  height: 35px;
  position: relative;
  clear: both;
  margin: 0 auto;
}
.newSList {
  /* width: 603px; */
  padding: 32px 0;
  clear: both;
}
.newsBox {
  zoom: 1;
}
.shouqiBtn {
  width: 646px;
  height: 34px;
  position: absolute;
  bottom: 0;
}
	</style>
<script type="text/javascript">
  function changeCaptcha() {
	
		$("#userCaptcha").attr("src","${pageContext.request.contextPath}/hmModelDatasetMpping_getCaptcha.action?randnum="+ Math.floor(Math.random() * 1000000));
	}
   function checkLogin(){
	
	if( $("#riddle-name").val() &&  $("#user-intro").val() && $("#captcha").val()){
	      return  true;
	}else {
	 	return false;
	}
	}
 //上傳圖片 	 
function submitUpload(){
 
	var option = {
	
			url:"/ssm/uploadAction_uploadPic.action",//覆盖以前的url
			type:"post",
			dataType:"text",
			data:{
				fileName:"ImgUrl"
			},
			success:function(responseText){
				//把文本解析成json的对象$.parseJSON(responseText);，eval('('+responseText+')')
				var pathObj = $.parseJSON(responseText);
				$("#imgFromId").attr("src",pathObj.pic_path);
				$("#imgs").val(pathObj.pic_path);
			},
			error:function(){
				alert("系统错误");
			}
	}
	$("#imgId").ajaxSubmit(option);
}
///
$(function(){
	
		$("#riddle-name").blur(function(){
		//	alert("sd"+$(this).val().length);
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#errorusername").html("标题可以突出你的才华");
				$("#errorusername").show(1);
			}else{
				$("#errorusername").hide(1);
			}
		});
		$("#user-intro").blur(function(){
			if($(this).val() == null || $.trim($(this).val()) == ""){
				  $("#smallId2").html("亲爱的 正文呢");
				$("#smallId2").show(1);
			}else{
				 $("#smallId2").hide(1);
			}
		})
		
		$("#captcha").blur(function(){
			
			if($(this).val() == null || $.trim($(this).val()) == ""){
				$("#smallId").html("验证码错误");
				$("#smallId").show(1);
			}else {
				$("#smallId").hide(1);
				//$("#errorcaptcha").html("");
			} 
		})
		//errorLi
			var errorTips = $("#errorTips").val();
			//var errorTips = $("#errorTips").val();
			if(errorTips!=null && $.trim(errorTips) !=""){
			 if(errorTips == "captchaerror"){
			  $("#smallId").html("验证码错误");
				   $("#smallId").show(1);
			 }
			}
		 
	})
  	 
  	 </script>
<title>发帖</title>
</head>
<body>
	<div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
		<ul class="am-nav am-nav-pills am-topbar-nav">
			<li class="am-active"><a href="#">首页</a></li>
			<li><a href="#">项目</a></li>
		 
		</ul>

		<form
			class="am-topbar-form am-topbar-left am-form-inline am-topbar-right"
			role="search">
			<div class="am-form-group">

				<div class="next-site menu-list">
					<ul class="am-nav am-nav-pills am-topbar-nav">
						 
							<li><a id="loginId"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_doLogin.action">登陆</a></li>
							<li><a id="regedit"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_forWord.action">注册</a></li>
						  
					</ul>
				</div>
			</div>


		</form>

	</div>

	<div class="am-cf admin-main">
		<!-- sidebar start commentFrom-->
		<div class="admin-sidebar">
			<ul class="am-list admin-sidebar-list">
			
				 
			</ul>
			<ul class="am-list am-collapse admin-sidebar-sub am-in"
				id="collapse-nav">

			</ul>
		 

		 
		</div>
		<!-- sidebar end -->

		<!-- content start uploadAction_uploadPic.action-->
		<div class="admin-content">
		
		<hr/>

			<div class="am-g">

				<div class="am-u-sm-12 am-u-md-4 am-u-md-push-8">

					<div class=" ">
						<div class="">
							<div class="">
								 
								<div class=" ">
								
								</div>
							 
							</div>
							<div class="user-info">
								 
							 
							</div>
						</div>
					</div>

				</div>

 
			
				<!-- 我发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布 -->
               
				<div class="am-u-sm-12 am-u-md-8 am-u-md-pull-4" id="fabuFrom"
					style="display:inline">
					<form class="am-form am-form-horizontal" action="${pageContext.request.contextPath}/riddlesAction_save.action"
						method="post"  	onsubmit="return checkLogin()">
						<div class="am-form-group">
							<label for="user-name" class="am-u-sm-3 am-form-label">标题
								/ Title</label>
							<div class="am-u-sm-9">
								<input type="text" id="riddle-name" name="riddleName"> 
							    <li id="errorusername" class="errorTip" style="display:none"></li>
							</div>
						</div>

						<div class="am-form-group">
							<div>
								<div class="am-g"></div>
							</div>
						</div>
						<div class="am-form-group"></div>
						<div class="am-form-group">
							<label for="user-intro" class="am-u-sm-3 am-form-label">正文/
								Intro</label>
							<div class="am-u-sm-9">
								<textarea class="" rows="9" id="user-intro" placeholder="如果你不输入正文，那我看什么呢"
									name="riddleSide"></textarea>
									<small id="smallId2"> </small>
							</div>
						</div>
						<div class="am-form-group">
							<label for="user-name" class="am-u-sm-3 am-form-label">验证码
								/ Captcha</label>
							<div class="am-btn" >
						
								<input type="text" id="captcha" name="captcha" maxLength="7"
										vld="{required:true}" />
								<input type="hidden"  id="errorTips" value="${tip}" />
								<small id="smallId"> </small>
							</div>
						</div>
							
 	 	<tr id="tr-vcode">
							<td width="245">
								<div class="am-btn">
								 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
								 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
								 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
								</div> <span class="bg_text small"> <img id="userCaptcha"
									src="${pageContext.request.contextPath}/hmModelDatasetMpping_getCaptcha.action"
									onclick="changeCaptcha()" class="code" alt="换一张" /> <a
									href="javascript:void(0);" onclick="changeCaptcha()"
									title="换一张">换一张</a>
									 </span>
								<li id="errorcaptcha" class="errorTip" style="display:none"></li>
							</td>
							<td></td>
						</tr>
						<div class="am-form-group">
							<div class="am-u-sm-9 am-u-sm-push-3">
								<input type="submit" class="am-btn am-btn-primary" value="提交"></input>
							</div>
						</div>
					</form>
				</div>
				<!-- 我要发布 -->
			</div>
		</div>
		<!-- content end -->

	</div>



</body>
</html>