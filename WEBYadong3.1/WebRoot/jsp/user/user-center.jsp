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
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/amazeui.min.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/admin.css">
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
  	 	 $("#commentList").hide();
  	 function getfabuFrom(){
  		// alert("sd");
  		$("#fabuFrom").css("display","inline");
  		 $("#userCenterFromTo").hide();
  		 	 $("#commentList").hide();
  	 }
  	 
  	 function getUser(userid){
  	
  	 $("#userCenterFromTo").show();
  	 $("#fabuFrom").css("display","none");
  	 $("#commentList").hide();
  	 }
  	 //commentFrom commentFrom
  	 function commentFrom(userid){
  	 alert("ddddd");
  	 
  	 
  	 }
    function ValiedMail(userId){
    
    
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
			alert("Sda"+responseText);
				//把文本解析成json的对象$.parseJSON(responseText);，eval('('+responseText+')')
				var pathObj = $.parseJSON(responseText);
				
				$("#imgFromId").attr("src",pathObj.pic_path);
				$("#imgs").val(pathObj.pic_path);
			},
			error:function(){
				alert("系统错误");
			}
	}
//	document.getElementById("imgId").ajaxSubmit(option);
	$("#imgId").ajaxSubmit(option);
}
  	 
  	 </script>
<title>个人中心</title>
</head>
<body>

	<header class="am-topbar admin-header">
	<div class="am-topbar-brand">
		<strong>亚东系统</strong> <small>后台管理模板</small>
	</div>

	<button
		class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
		data-am-collapse="{target: '#topbar-collapse'}">
		<span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span>
	</button>

	<div class="am-collapse am-topbar-collapse" id="topbar-collapse">

		<ul
			class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
			<li><a href="javascript:;"><span class="am-icon-envelope-o"></span>
					${user.name } <span class="am-badge am-badge-warning">5</span> </a></li>
			<li class="am-dropdown" data-am-dropdown>
			<!-- <a
				class="am-dropdown-toggle" data-am-dropdown-toggle
				href="javascript:;"> <span class="am-icon-users"></span> 管理员 <span
					class="am-icon-caret-down"></span> </a> -->
				<ul class="am-dropdown-content">
					<li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
					<li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
					<li><a href="#"><span class="am-icon-power-off"></span> 退出</a>
					</li>
				</ul>
			</li>
			<li><a href="javascript:;" id="admin-fullscreen"><span
					class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span>
			</a></li>
		</ul>
	</div>
	</header>

	<div class="am-cf admin-main">
		<!-- sidebar start commentFrom-->
		<div class="admin-sidebar">
			<ul class="am-list admin-sidebar-list">
				<li><a href="javascript:;" onclick="getUser(${user.id });"><span
						class="am-icon-home"></span> 个人资料</a></li>
				<li class="admin-parent"><a class="am-cf"
					data-am-collapse="{target: '#collapse-nav'}"
					onclick="getfabuFrom();"><span class="am-icon-file"></span>我要发布
						<span class="am-icon-angle-right am-fr am-margin-right"></span> </a>
				</li>
				<li><a href="javascript:;" onclick="commentFrom(${user.id })"><span
						class="am-icon-check"></span> 我的评论<span
						class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
				</a></li>
				<li><a href="admin-table.html"><span class="am-icon-table"></span>
						我的发布</a></li>
				<li><a href="javascript:;" onclick="ValiedMail(${user.id })"><span
						class="am-icon-pencil-square-o"></span>邮箱验证</a></li>
				<li><a href="#"><span class="am-icon-sign-out"></span> 注销</a></li>
			</ul>
			<ul class="am-list am-collapse admin-sidebar-sub am-in"
				id="collapse-nav">

			</ul>
			<div class="am-panel am-panel-default admin-sidebar-panel">
				<div class="am-panel-bd">
					<p>
						<span class="am-icon-bookmark"></span> 公告
					</p>
					<p>时光静好，与君语；细水流年，与君同。—— 亚东系统</p>
				</div>
			</div>

			<div class="am-panel am-panel-default admin-sidebar-panel">
				<div class="am-panel-bd">
					<p>
						<span class="am-icon-tag"></span> wiki
					</p>
					<p>Welcome to the Amaze UI wiki!</p>
				</div>
			</div>
		</div>
		<!-- sidebar end -->

		<!-- content start uploadAction_uploadPic.action-->
		<div class="admin-content">
			<div class="am-cf am-padding">
				<div class="am-fl am-cf" style="display:none">
					<strong class="am-text-primary am-text-lg">个人资料</strong> / <small>Personal
						information</small>
				</div>
			</div>

			<hr />

			<div class="am-g">

				<div class="am-u-sm-12 am-u-md-4 am-u-md-push-8">
					<div class="am-panel am-panel-default">
						<div class="am-panel-bd">
							<div class="am-g">
								<div class="am-u-md-4">
									<img id ="imgFromId" class="am-img-circle am-img-thumbnail"
										src="http://amui.qiniudn.com/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"
										alt="" />
								</div>
								<div class="am-u-md-8">
									<p>
										为了更好的效果<a href="#">gravatar.com</a>可以选择上传相关图片。
									</p>
									<form class="am-form" enctype="multipart/form-data" id="imgId" method="post">  
										<div class="am-form-group">
											<input type="file" id="ImgUrl" name='image'   onchange='submitUpload()'>
											<p class="am-form-help">请选择要上传的文件...</p>
											<button type="button" class="am-btn am-btn-primary am-btn-xs">保存</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div class="am-panel am-panel-default">
						<div class="am-panel-bd">
							<div class="user-info">
								<p>等级信息</p>
								<div class="am-progress am-progress-sm">
									<div class="am-progress-bar" style="width: 60%"></div>
								</div>
								<p class="user-info-order">
									当前等级：<strong>LV8</strong> 活跃天数：<strong>587</strong> 距离下一级别：<strong>160</strong>
								</p>
							</div>
							<div class="user-info">
								<p>信用信息</p>
								<div class="am-progress am-progress-sm">
									<div class="am-progress-bar am-progress-bar-success"
										style="width: 80%"></div>
								</div>
								<p class="user-info-order">
									信用等级：正常当前 信用积分：<strong>80</strong>
								</p>
							</div>
						</div>
					</div>

				</div>
<!-- 评论列表 padding: 32px 0;
  clear: both; width: 603px;
  height: 35px;
  position: relative;
  clear: both;
  margin: 0 auto;-->
 
	<div class="am-u-sm-12 am-u-md-8 am-u-md-pull-4"
					style="display:none" id="userCenterFromComment">
	  <c:forEach items="${comList }" var="comlist">		 		   
	<div class="newSList" style=" padding: 32px 0;clear: both" id="commentList">
                <p class="xxTitle" ><strong>最新评论</strong><span></span></p>
                <div class="newsBox" id="newsBox_1204617">
                    <!--全部更改 全部显示 隐藏 添加测试数据-->
                    <c:if test="${comList ==null }">
                    <p style="text-align: center; height: 20px; margin-top: 15px;" id="nopinglun_1204617">没有最新评论</p>
                    </c:if>
                    <c:if test="${comList!=null }">
                  
                    <a><p style="text-align: center; height: 20px; margin-top: 15px;" id="nopinglun_1204617">${comlist.commentCon }</p></a>
                     
                    </c:if>
                    <div class="shouqiBtn" style="display: block;" id="shouqiBtn_1204617" onclick="shouqiBtn(1204617,this)"><span></span></div>
                    <!--添加测试数据-->
                </div>
            </div>
          </c:forEach>
           </div>
             </form>
				<div class="am-u-sm-12 am-u-md-8 am-u-md-pull-4"
					id="userCenterFromTo" style="display:none">
					<form class="am-form am-form-horizontal">
						<div class="am-form-group">
							<label for="user-name" class="am-u-sm-3 am-form-label">姓名
								/ Name</label>
							<div class="am-u-sm-9">

								<input type="text" id="user-name" value="  ${user.name }">
								<small>输入你的名字，让我们记住你。</small>
							</div>
						</div>

						<div class="am-form-group">
							<label for="user-email" class="am-u-sm-3 am-form-label">电子邮件
								/ Email</label>
							<div class="am-u-sm-9">

								<input type="email" id="user-email" value=" ${user.mail }">
								<!--  <small>邮箱你懂得...</small> -->
							</div>
						</div>

						<div class="am-form-group">
							<label for="user-phone" class="am-u-sm-3 am-form-label">电话
								/ Telephone</label>
							<div class="am-u-sm-9">
								<input type="email" id="user-phone" value="  ${user.phone}">

							</div>
						</div>

						<div class="am-form-group">
							<label for="user-QQ" class="am-u-sm-3 am-form-label">QQ</label>
							<div class="am-u-sm-9">
								<input type="email" id="user-QQ" value="714037465">
                              
							</div>
						</div>

						<!--  <div class="am-form-group">
            <label for="user-weibo" class="am-u-sm-3 am-form-label">微博 / Twitter</label>
            <div class="am-u-sm-9">
              <input type="email" id="user-weibo" placeholder="输入你的微博 / Twitter">
            </div>
          </div> -->

						<div class="am-form-group">
							<label for="user-intro" class="am-u-sm-3 am-form-label">简介
								/ Intro</label>
							<div class="am-u-sm-9">
								<textarea class="" rows="5" id="user-intro" placeholder="输入个人简介"></textarea>
								<small>250字以内写出你的一生...</small>
							</div>
						</div>

						<div class="am-form-group">
							<div class="am-u-sm-9 am-u-sm-push-3">
								<button type="button" class="am-btn am-btn-primary">保存修改</button>
							</div>
						</div>
					</form>
				</div>
				<!-- 我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布我要发布 -->

				<div class="am-u-sm-12 am-u-md-8 am-u-md-pull-4" id="fabuFrom"
					style="display:none">
					<form class="am-form am-form-horizontal"
						action="${pageContext.request.contextPath}/riddlesAction_save.action"
						method="post">
						<div class="am-form-group">
							<label for="user-name" class="am-u-sm-3 am-form-label">名称
								/ Name</label>
							<div class="am-u-sm-9">

								<input type="text" id="riddle-name" name="riddleName"> <small>输入你的名字，让我们记住你。</small>
							</div>
						</div>

						<div class="am-form-group">
							<div>
								<div class="am-g"></div>
							</div>
						</div>
						<div class="am-form-group"></div>
						<div class="am-form-group">
							<label for="user-phone" class="am-u-sm-3 am-form-label">谜底</label>
							<div class="am-u-sm-9">
								<input type="email" id="riddleBottom" value="  "
									name="riddleBottom">

							</div>
						</div>

						<div class="am-form-group">
							<label for="user-QQ" class="am-u-sm-3 am-form-label">提示</label>
							<div class="am-u-sm-9">
								<input type="email" id="riddleTip" name="riddleTip">

							</div>
						</div>

						<div class="am-form-group">
							<label for="user-weibo" class="am-u-sm-3 am-form-label">查看等级</label>
							<div class="am-u-sm-9">
								<input id="riddleConLeavl" class="easyui-validatebox"
									required="true" checked="checked" type="radio"
									name="riddleConLeavl" value="0" textField='name'>壹</input> <input
									id="riddleConLeavl1" class="easyui-validatebox" required="true"
									type="radio" name="riddleConLeavl" value="1" textField='name'>贰</input>
							</div>
						</div>

						<div class="am-form-group">
							<label for="user-intro" class="am-u-sm-3 am-form-label">谜面/
								Intro</label>
							<div class="am-u-sm-9">
								<textarea class="" rows="10" id="user-intro" placeholder="输入谜面"
									name="riddleSide"></textarea>
								<!--  <small>250字以内写出你的一生...</small> -->
								  <input type="text" id="imgs" name="riddleImage" />
							</div>
						</div>
 
						<div class="am-form-group">
							<div class="am-u-sm-9 am-u-sm-push-3">
								<button type="button" type="submit"
									class="am-btn am-btn-primary">保存</button>
								<input type="submit" class="am-btn am-btn-primary">保存1</input>
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