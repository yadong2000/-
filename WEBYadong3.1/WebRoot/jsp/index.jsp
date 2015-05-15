<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>科举网</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="alternate icon" type="image/png" href="${pageContext.request.contextPath}/assets/i/favicon.png">
<script language="javascript" src="${pageContext.request.contextPath}/js/jquery.js" charset="utf-8"></script>
<script src="${pageContext.request.contextPath}/js/jquery.form.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/amazeui.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/amazeui.min.css" />
 <link rel="stylesheet" type="text/css" href="http://s.itiexue.net/css/pengfu/v2/public.css?resourceversion=10" />
<script type="text/javascript" src="http://s.itiexue.net/js/global/base-all-v2.js?resourceversion=1"></script>
<script>
	jQuery(function() {
		var totalCount = parseInt($("#totalCount").val());
     	var pageNo = parseInt($("#currentPageNo").val());
    	var totalPage = parseInt($("#totalPage").val());
    	
    	$("#pagePiece").html(totalCount);
    	$("#pageTotal").html("第"+pageNo+"页" + "/"+"共"+totalPage+"页"); 
    	
    	if(totalPage == 1){
    		$("#previous").hide();
    		$("#next").hide();
    	}else if(pageNo == 1 && totalPage > 1){
    		$("#previous").show();//
    		$("#next").show();
    	}else if(pageNo > 1 && pageNo < totalPage){
    		$("#previous").show();
    		$("#next").show();
    	}else if(pageNo > 1 && pageNo == totalPage){
    		$("#previous").show();
    		$("#next").show();
    	}
    	
    	$("#next").click(function(){
    	 if(pageNo<totalPage){
    	 	$("#pageNo").val(pageNo+1);
    		$("#form1").submit();
    	 }
    	
    	});
    	$("#previous").click(function(){
    	if(pageNo!=1){
    	    		$("#pageNo").val(pageNo-1);
    		        $("#form1").submit();
    	
    	}
    	});
				 });
	function GetCommentInfo(humorId) {
    var spanPlus = $("#spanPlus_" + humorId).html();
    var isShowPinLun=$("#isshowpinlun_"+humorId).val();
    //鍒楄〃灞曞紑鐨勬椂鍊?
    if (spanPlus == "+") {
        $("#spanPlus_" + humorId).html("-");
        $("#newList_" + humorId).fadeIn("fast");
        $("#shouqiBtn_" + humorId).fadeIn("fast");
    } else {
        $("#spanPlus_" + humorId).html("+");
        $("#newList_" + humorId).slideUp("fast");
        $("#shouqiBtn_" + humorId).slideUp("fast");
    }
}

            function fnMouseDown(humorId) {
  			  $("#smallComment_" + humorId).hide();
  			  $("#divCommentContent_" + humorId).show();
   			  $("#txtCommentContent_" + humorId).focus();
  			  if (navigator.userAgent.indexOf("Firefox") > 0) {
      		  setTimeout(function () { $("#txtCommentContent_" + humorId).focus(); }, 0);
   			  }
			}
    function postcommentinfo(humorId,isContent) {
            var  Cid= $("#Cid_"+humorId).val();
			var option = {
			url:"${pageContext.request.contextPath}/commentAction_save.action",//覆盖以前的url
			type:"post",
			dataType:"text",
			data : {userId:"${user.id}",C_id:Cid},
			success:function(responseText){
			  alert("Sda"+responseText);
		   	},
			error:function(){
			  alert("系统错误");
			}
	}
	$("#commentPushId").ajaxSubmit(option);		
}

//璁板綍鐢ㄦ埛鐐瑰嚮琛屼负
function pengfu_click(t, id, writerId) {
    var pengfu_click_script_id = "click_pengfu";
    var pengfu_click_script_src = '#'
    var pengfu_click_element = document.getElementById(pengfu_click_script_id);
    if (pengfu_click_element == null) {
        var pengfu_click_script = document.createElement('img');
        pengfu_click_script.id = pengfu_click_script_id;
        pengfu_click_script.src = pengfu_click_script_src;
        pengfu_click_script.style.border = "0px";
        pengfu_click_script.style.width = "0px";
        pengfu_click_script.style.height = "0px";
        document.body.appendChild(pengfu_click_script);
    }
    else {
        pengfu_click_element.src = pengfu_click_script_src;
    }
}

function shouqiBtn(ribbleId){
      $("#newList_" + ribbleId).slideUp("fast");
}
</script>
 
<style>
  @media only screen and (min-width: 1200px) {
      .blog-g-fixed {
        max-width: 1200px;
      }
    }

    @media only screen and (min-width: 641px) {
      .blog-sidebar {
        font-size: 1.4rem;
      }
    }

    .blog-main {
      padding: 20px 0;
    }

    .blog-title {
      margin: 10px 0 20px 0;
    }

    .blog-meta {
      font-size: 14px;
      margin: 10px 0 20px 0;
      color: #222;
    }

    .blog-meta a {
      color: #27ae60;
    }

    .blog-pagination a {
      font-size: 1.4rem;
    }

    .blog-team li {
      padding: 4px;
    }

    .blog-team img {
      margin-bottom: 0;
    }

    .blog-footer {
      padding: 10px 0;
      text-align: center;
    }
    .faxiaohua {
height: 59px;
background: #FDF4F4;
margin-bottom: 14px;
</style>

</head>
<body>
	<header class="am-topbar">
	<h1 class="am-topbar-brand">
	 
	</h1>

	<button
		class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
		data-am-collapse="{target: '#doc-topbar-collapse'}">
		<span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span>
	</button>

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
						<c:if test="${user!=null}">
							<li><a id="loginId"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_ToUserCenter.action?id=${user.id }">我的科举</a></li>
							<li><a id="regedit"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_forWord.action">${user.name }你好</a></li>
						</c:if>
						<c:if test="${user==null}">
							<li><a id="loginId"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_doLogin.action">登陆</a></li>
							<li><a id="regedit"
								href="${pageContext.request.contextPath}/hmModelDatasetMpping_forWord.action">注册</a></li>
						</c:if>
					</ul>
				</div>
			</div>
		</form>
	</div>
	</header>            
	<div class="am-g am-g-fixed blog-g-fixed">
		<div class="am-u-md-8">
			<hr class="am-article-divider blog-hr">
			<!-- 2 --> 
			<c:forEach items="${list}" var="list">

			<article class="blog-main">
			<input type="hidden"  id="Cid_${list.riddleId}" value="${list.riddleId}" />
			<h3 class="am-article-title">
				<%-- <a href="#">${ list.riddleId}</a> --%>
				<a href="#">${ list.riddleName}</a>
			</h3>
		<%-- 	<h4 class="am-article-meta blog-meta">
				<a href="#">${ list.riddleName}</a>
			</h4> --%>
   
			<div class="am-g blog-content">
				<div class="am-u-lg-7">
				 

					<p>	${ list.riddleSide}</p>
				</div>
					<c:choose>  
  
   <c:when test="${list.riddleImage == '' }">    
   </c:when>  
       <c:when test="${list.riddleImage==null}">    
   </c:when>  
     
   <c:otherwise>  
   <div class="am-u-lg-5">
					<p>
						<img
							src="${ list.riddleImage}">
					</p>
				</div> 
   </c:otherwise>  
				</c:choose>   
			</div>
		 
			 <div class="tieziBox">
        <div class="fenxiang">
            <div class="bdsharebuttonbox" data-tag="share_1" >
                <a class="bds_more" data-cmd="more">更多</a>
            </div>
            
        </div>
        
       
        <div class="hfbox">
            <!--隐藏-->
      
            <div class="dingBox">
                <div class="rssTab" id="userTag_${list.riddleId }">
                    <input type="hidden" value="" id="listTags${list.riddleId }" />
                </div>
                
            </div>
            <!--小框 回复框 开始-->
            <div class="inputBox" style="display:block;" id="smallComment_${list.riddleId }">
                <input type="text" value="快来说两句吧！不用登录也能评论哦！" onmousedown="fnMouseDown(${list.riddleId })" />
                <div class="btnBox" onclick="GetCommentInfo(${list.riddleId })">
                    <em></em><span class="plFont">0</span><b></b><span class="jianjiao"></span>
                </div>
            </div>
            <!--小框 回复框 结束d-->
            <!--大框 回复框 开始-->
            <form id="commentPushId"   method="post">  
            <div class="hufuInput" id="divCommentContent_${list.riddleId }" style="display: none">
                <div class="textBox">
                    <textarea name="commentCon" cols="" rows="" class="Input_text" id="Input_text_${list.riddleId }"></textarea>
                    <div class="btnBox" onclick="GetCommentInfo(${list.riddleId })"><em></em>
                        <span class="plFont">0</span><b></b>
                        <span class="jianjiao"></span>
                        <span id="spanPlus_${list.riddleId }" style="display: none">+</span>
                        <input type="hidden" value="0" id="isshowpinlun_${list.riddleId }" />
                    </div>
                </div>
                <div class="textBtn">
                    <div id="uploadImage_${list.riddleId }" class="showUploadImage" style="display: none;margin-top:15px;">
                        <object id="swfImg" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="120" height="35">
                            <param name="movie" value="/flashpic/txupload.swf" />
                            <param name="quality" value="high" />
                            <param name="wmode" value="transparent" />
                            <embed src="/flashpic/txupload.swf?btn_normal_image=/flashpic/uploadbtn2.png&image_quality=75&btn_hover_image=/flashpic/uploadbtn.png&file_upload_limit=1&file_size_limit=5120&image_width_limit=800&image_height_limit=20000&file_types=*.jpg;*.jpeg;*.png;*.gif&upload_url=http://pic.pengfu.com/home/uploadimage?imagesize='b|s'&type=0&humorId=1204617" width="120" height="35" />
                            <param name="flashvars" value="btn_normal_image=/flashpic/uploadbtn2.png&btn_hover_image=/flashpic/uploadbtn.png&file_size_limit=5120&image_width_limit=800&image_height_limit=20000&file_upload_limit=1&file_types=*.jpg;*.jpeg;*.png;*.gif&upload_url=http://pic.pengfu.com/home/uploadimage?imagesize='b|s'&type=0&humorId=1204617" />
                        </object>
                    </div>
                    <div class="zheZhaoBtn" id="zheZhaoBtn_${list.riddleId }" onclick="ZheZhaoBtn()"><a href="###">选择图片上传</a></div>
                    <a onclick="postcommentinfo(${list.riddleId },false);pengfu_click(null,${list.riddleId },5610924);"  class="1postBtn" >提交
			            <input type="hidden" id="rid1" value="ds"/>
                    </a>
                </div>
                <div class="upImg" id="upImg_${list.riddleId }" style="display: none"><p><img src="" width="120" height="90" /><em onclick="cleanPic(${list.riddleId })">X</em></p></div>
                <input type="hidden" value="" id="hdUploadImg_${list.riddleId }" />
            </div>
            </form>
            <!--大框 回复框 结束-->
            <!--评论页 开始-->
            <div class="newSList" style="display: none" id="newList_${list.riddleId }">
           
                <!--全部更改 全部显示 隐藏 添加测试数据-->
                <div class="newSList" id="newList_${list.riddleId }" style="display: block;">
                <p class="xxTitle"><strong>最新评论</strong><span></span></p>
                <div class="newsBox" id="newsBox_1205433">
                <c:forEach items="${list.commentList }"  var="cList" varStatus="cStatus">
				<div class="ihoverBg" onmouseover="juBao(true,3599371)" onmouseout="juBao(false,3599371)" id="3599371"><dl><dt>
				<img src="http://h.img.pengfu.cn/nofound.png" width="35" height="35"></dt><dd>
				<div class="fontP"><em>${cStatus.index+1 }楼</em> <a class="newUser" target="_blank" href="javascript:void()">河北省廊坊市捧友：</a>
				<div class="yingYong"><div class="yyBox"><div class="yyJiao"></div>
				<div class="yyoFont"><em>5楼</em> <a href="/u/3093953">七腿蚊子：</a>做出来不是奇事，关键他能卖得出去，吃这些东东的那才是奇人~~~</div></div></div>
				<span class="zxhffont">${cList.commentCon }</span><div class="tisDianji">
				<span id="liangle_3599371" class="dingBtn" onclick="UpdateSupportNum(3599371,0,'河北省廊坊市捧友',false,1205433)">${cStatus.count}</span>
				<span class="pinglBtn" onclick="fnHuiFu(1205433,3599371,'河北省廊坊市捧友',false)">回复</span>
				<span class="pinglBtn" onclick="showDaShangDialog(0,'河北省廊坊市捧友',1205433)">打赏</span>
				<a class="jubao" onclick="report(3599371)" style="display: none;">举报</a></div></div></dd></dl>
				 </c:forEach>
				</div>
	            </div>
              
                
              
                  <p style="text-align: center; height: 20px; margin-top: 15px;" id="nopinglun_${list.riddleId }">没有最新评论</p>
                    <div class="shouqiBtn" style="display: block" id="shouqiBtn_${list.riddleId }" onclick="shouqiBtn(${list.riddleId },this)"><span></span></div> 
                    <!--添加测试数据-->
                </div>
            </div>
            <!--评论页 结束-->
			 <!-- pinlunjiesu -->
			</article>

			<hr class="am-article-divider blog-hr">
</c:forEach>
		 
		<hr class="am-article-divider blog-hr"> 
				<form action="/ssm/riddlesAction_riddlesDataGirdByPage.action" id="form1">  
			<ul class="am-pagination blog-pagination">
		    <input type="hidden" value="${pageNo}" id="pageNo" name="pageNo" />  
            <input type="hidden" value="${page1.totalCount}" id="totalCount" name="totalCount" />
            <input type="hidden" value="${page1.pageNo}" id="currentPageNo" name="currentPageNo" />
            <input type="hidden" value="${page1.totalPage}" id="totalPage" name="totalPage" /> 
			<li class="am-pagination-prev"><a href="javascript:void(0);" id="previous">&laquo; 上一页</a></li>
                                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp   &nbsp&nbsp&nbsp&nbsp&nbsp     共<a id="pagePiece" class="orange"></a>条<a id="pageTotal"> </a>
                                    
			<li class="am-pagination-next"><a href="javascript:void(0);" id="next">下一页 &raquo;</a></li>
			</ul> 
			</form>
		</div>

		<div class="am-u-md-4 blog-sidebar"> 
			<div class="am-panel-group">
			<div class="faxiaohua">
			<a target="_blank" href="${pageContext.request.contextPath}/riddlesAction_jape.action"><em></em>
			<span>我要发笑话</span></a>
			<a target="_blank" href="${pageContext.request.contextPath}/riddlesAction_publish.action"><em></em>
			<span>我要发问题</span></a>
			</div>
			 	<section class="am-panel am-panel-default">
				<div class="am-panel-hd">笑话</div>
				<div class="am-panel-bd">
				<ul class="am-list blog-list">
					<li><a href="#">Google fonts 的字體（sans-serif 篇）</a></li>
					<li><a href="#">[but]服貿最前線？－再訪桃園機場</a></li>
					<li><a href="#">到日星鑄字行學字型</a></li>
					<li><a href="#">glyph font vs. 漢字（上）</a></li>
					<li><a href="#">浙江民間書刻體上線</a></li>
					<li><a href="iOS，誰的字體好讀？</a></li>
				</ul>
					<a class="am-btn am-btn-success am-btn-sm" href="#">查看更多 →</a>
				</div>
				</section>
				
					<section class="am-panel am-panel-default">
				<div class="am-panel-hd">古典历史</div>
				<div class="am-panel-bd">
					<ul class="am-list blog-list">
					<li><a href="#">Google fonts 的字體（sans-serif 篇）</a></li>
					<li><a href="#">[but]服貿最前線？－再訪桃園機場</a></li>
					<li><a href="#">到日星鑄字行學字型</a></li>
					<li><a href="#">glyph font vs. 漢字（上）</a></li>
					<li><a href="#">浙江民間書刻體上線</a></li>
					<li><a href="iOS，誰的字體好讀？</a></li>
				</ul>
					<a class="am-btn am-btn-success am-btn-sm" href="#">查看更多 →</a>
				</div>
				</section>
				<section class="am-panel am-panel-default">
				<div class="am-panel-hd">文章目录</div>
				<ul class="am-list blog-list">
					<li><a href="#">Google fonts 的字體（sans-serif 篇）</a></li>
					<li><a href="#">[but]服貿最前線？－再訪桃園機場</a></li>
					<li><a href="#">到日星鑄字行學字型</a></li>
					<li><a href="#">glyph font vs. 漢字（上）</a></li>
					<li><a href="#">浙江民間書刻體上線</a></li>
					<li><a href="iOS，誰的字體好讀？</a></li>
				</ul>
				
				</section>  

				<section class="am-panel am-panel-default">
				<div class="am-panel-hd">团队成员</div>
				<div class="am-panel-bd">
					<ul class="am-avg-sm-4 blog-team">
						<li>每日红楼</li>
						<li>每日笑话</li>
					 
					</ul>
				</div>
				</section>
			</div>
		</div>

	</div>

	<footer class="blog-footer">
	<p>
		blog template<br /> <small>© Copyright XXX. by the AmazeUI
			Team.</small>
	</p>
	</footer>

	<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
<script src="assets/js/polyfill/rem.min.js"></script>
<script src="assets/js/polyfill/respond.min.js"></script>
<script src="assets/js/amazeui.legacy.js"></script>
<![endif]-->

	<!--[if (gte IE 9)|!(IE)]><!-->
	<!-- D:\360安全浏览器下载\moke8\AmazeUI-2.2.1\assets\js -->


	<!--<![endif]-->

</body>

</html>