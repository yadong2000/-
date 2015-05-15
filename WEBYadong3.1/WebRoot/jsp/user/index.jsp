<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>来挑战我吧</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="KEYWords" contect="来挑战我吧，挑战，"> 
<meta name="DEscription" contect="好玩，好笑，好乐，好逗"> 
<link rel="alternate icon" type="image/png" href="${pageContext.request.contextPath}/assets/i/favicon.png">
<script src="${pageContext.request.contextPath}/assets/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.form.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/amazeui.min.css" />
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/public.css" />
<!-- <link rel="stylesheet" type="text/css" href="http://s.itiexue.net/css/pengfu/v2/public.css?resourceversion=10" /> -->
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
			 
			//pinlun
	function GetCommentInfo(humorId) {
    var spanPlus = $("#spanPlus_" + humorId).html();
    var isShowPinLun=$("#isshowpinlun_"+humorId).val();
  //   $("#newList_" + humorId).load("${pageContext.request.contextPath}/commentAction_selectCommentById.action");
    //鍒楄〃灞曞紑鐨勬椂鍊?
    if (spanPlus == "+") {
        		$.ajax({
				 type : 'POST',
				 url : "${pageContext.request.contextPath}/commentAction_selectCommentById.action?randnum="+Math.floor(Math.random()*1000000),
				 data : {riddleId: humorId},
				 success : function(data) {
				 
				  // $("#newList_" + humorId).text("");
				   $("#newList_" + humorId).append(data);
				   $("#spanPlus_" + humorId).html("-");
                   $("#newList_" + humorId).fadeIn("fast");
                   $("#shouqiBtn_" + humorId).fadeIn("fast"); 
                   $("#spanPlus_" + humorId).html("-");
                   $("#newList_" + humorId).fadeIn("fast");
                   $("#shouqiBtn_" + humorId).fadeIn("fast");
                
				 }
				 
				 });
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
            //$("#show").html("");
             // $("#newList_" + humorId).html("");
              var  Cid= $("#Input_text_"+humorId).val();
              $("#Input_text_"+humorId).val(Cid);
			  var option = {
		      url : "${pageContext.request.contextPath}/commentAction_save.action?randnum="+Math.floor(Math.random()*1000000),
		     //	url : "${pageContext.request.contextPath}/commentAction_save.action",//覆盖以前的url
			  type:"POST",
			data : {
			//C_id:Cid,
			commentCon1:$(".Input_text").val(),
		//	riddleId: $(".postBtn :first-child").val()
			},  
			success:function(responseText){
			      /*   var spanPlus = $("#spanPlus_"+responseText).html();
                    var isShowPinLun=$("#isshowpinlun_"+responseText).val(); */
       				 $("#newList_" +humorId).append(responseText);
       				 $("#spanPlus_" +humorId).html("-");
        			 $("#newList_" +humorId).fadeIn("fast");
                     $("#shouqiBtn_" + humorId).fadeIn("fast");
		   	},
			error:function(){
			  alert("系统错误");
			}
	        }
	       $("#commentPushId_"+humorId).ajaxSubmit(option);		
									
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
    
    function juBao(flag ,num){
    
    
    }
    
  function fnHuiFu(humorId, commentId, commentUserName, isHotComment) {
    //鍚屾椂鏄剧ず澶ф 闅愯棌灏忔
    fnMouseDown(humorId);
   // $("#flagId").val(commentId);
    var  html = "<input type=\"hidden\" name=\"parentId\"  value=\""+commentId+"\" id=\"flag\" />";
  // alert(html+"commentPushId_3"); append  _"+commentId+"
    $("#flag").remove();
    $("#commentPushId_"+humorId).append(html);
    var commentContent = $("#commentConId_" + humorId);
    var ddCommentContent = $("#ddCommentContent_" + commentId);
    var ddCommentContentId = "#ddCommentContent_" + commentId;
    $("#currentReferCommentId_" + humorId).val(commentId);
    var commentText;
    document.getElementById("currentReferCommentUserName_" + humorId).value = commentUserName.trim();
    //commentContent.focus();
    commentContent[0].value = "回复: " + commentUserName;
    commentContent[0].style.color = "#000";
    //window.scrollTo(0, getAbsoluteTopPosBySrcElement(o[0]) + oHeight - 120);
    //濡傛灉鏄垪琛ㄩ〉
    if (isHotComment == true) {
        var o = $("#divHottestComment_" + humorId);
        var oHeight = o.height();
        window.scrollTo(0, getAbsoluteTopPosBySrcElement(o[0]) + oHeight - 120);
    } else if ($("#newList_" + humorId) && $("#contentmaodian").val()=="") {
        var commentList = $("#newList_" + humorId);
        window.scrollTo(0, getAbsoluteTopPosBySrcElement(commentList[0]) -180);
    }
    if ($("#contentmaodian").val()) {
        window.location.href = "#contentcomment";
    }
   
}
</script>

<script type="text/javascript">
$(function(){
	var $qqServer = $('.qqserver');
	var $qqserverFold = $('.qqserver_fold');
	var $qqserverUnfold = $('.qqserver_arrow');
	$qqserverFold.click(function(){
		$qqserverFold.hide();
		$qqServer.addClass('unfold');
	});
//	$qqserverUnfold.click(function(){
		$qqServer.removeClass('unfold');
		$qqserverFold.show();
//	});
	//窗体宽度小鱼1024像素时不显示客服QQ
	function resizeQQserver(){
		$qqServer[document.documentElement.clientWidth < 1024 ? 'hide':'show']();
	}
	$(window).bind("load resize",function(){
		resizeQQserver();
	});
});
</script>
<script type="text/javascript">
$(function(){


}

</script>
<script type="text/javascript">
/**
*百度统计代码
*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?9829108afd80dc1f6f2403b484382774";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
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
}
<!---->
*{margin:0;padding:0;list-style:none;border:none;}
body{font-size:12px;}
a{color:#666;text-decoration:none;}
/*客服代码部分*/
.qqserver .qqserver-header:after,.qqserver .qqserver-header:before,.qqserver li a:after,.qqserver li a:before{display:table;content:' '}
.qqserver .qqserver-header:after,.qqserver li a:after{clear:both}
.qqserver .qqserver-header,.qqserver li a,.tabs,.user-main,.view-category,.view-category-list>li{*zoom:1}
.qqserver{position:fixed;top:50%;right:0;height:209px;margin-top:-104px}
.qqserver.unfold .qqserver-body{right:0}
.qqserver .qqserver-body{position:absolute;right:-144px;width:122px;height:183px;padding:12px 10px;-webkit-transition:.3s cubic-bezier(.19,1,.22,1);-o-transition:.3s cubic-bezier(.19,1,.22,1);transition:.3s cubic-bezier(.19,1,.22,1);border:1px solid #62b651;border-radius:4px;background:#f4f7fa}
.qqserver .qqserver_fold{position:absolute;right:0;padding:14px 7px;cursor:pointer;border-top-left-radius:4px;border-bottom-left-radius:4px;background:#70ca5d}
.qqserver .qqserver-header{padding-bottom:10px;padding-left:6px;border-bottom:1px dashed #d1d4cc}
.qqserver .qqserver-header *{float:left}
.qqserver .qqserver_arrow{margin-top:-1px;margin-left:7px;cursor:pointer}
.qqserver li{margin-top:6px}
.qqserver li a{display:block;padding:6px 12px 4px}
.qqserver li a div{font-size:14px;float:left;margin-right:11px;color:#697466}
.qqserver li a span{font-size:12px;line-height:18px;float:left;text-indent:4px;color:#fff}
.qqserver li a span.qqserver-service-alert{font-weight:400;display:block}
.qqserver li a:hover{text-decoration:none;border-radius:4px;background:#eaebe9}
.qqserver li a:hover div{color:#62b651}
.qqserver .qqserver-footer{margin-top:10px;padding-top:14px;padding-bottom:14px;padding-left:11px;border-top:1px dashed #d1d4cc}
.qqserver .qqserver-footer .text-primary{color:#70CA5D;font-size:14px;}
.qqserver .qqserver_icon-alert{display:inline-block;margin-right:10px;vertical-align:-3px;*display:inline;*zoom:1;*vertical-align:-1px}
.qqserver-header div{width:90px;height:18px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-419px -80px}
.qqserver_icon-alert{width:16px;height:14px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-595px -85px}
.qqserver li a span{width:30px;height:23px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-265px 0}
.qqserver li a .qqserver-service-alert{width:30px;height:22px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-342px 0}
.qqserver_fold div{width:26px;height:132px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:0 0}
.qqserver_fold:hover div{width:26px;height:132px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-27px 0}
.qqserver_arrow{width:18px;height:18px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-435px 0}
.qqserver_arrow:hover{width:18px;height:18px;background-image:url(http://demo.lanrenzhijia.com/2014/service1004/images/lanren.png);background-position:-435px -38px}
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
			<li class="am-active"><a href="#">挑战吧</a></li>
			 
		</ul>

		<form class="am-topbar-form am-topbar-left am-form-inline am-topbar-right" role="search">
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
						<li><!-- <span id="qqLoginBtn"></span> --></li>
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
		 <h4 class="am-article-meta blog-meta">
		 <a href="#">${list.riddleUserName}于${list.riddleTime}发布</a>
		 <a href="">  </a>  
		<!--  <a href="#">点击数</a>  -->
		 <a href="#">评论数:${list.riddleCount}</a>
		 </h4>
   
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
            <input type="hidden" id="currentReferContent_${list.riddleId }" />
            <input type="hidden" id="currentReferCommentUserName_${list.riddleId }" />
            <input type="hidden" id="currentReferCommentId_${list.riddleId }" />
            <div class="inputBox" style="display:block;" id="smallComment_${list.riddleId }">
                <input type="text" value="快来说两句吧！不用登录也能评论哦！" onmousedown="fnMouseDown(${list.riddleId })" />
                <div class="btnBox" onclick="GetCommentInfo(${list.riddleId })">
                    <em></em><span class="plFont">${list.riddleCount}</span><b></b><span class="jianjiao"></span>
                </div>
            </div>
            <!--小框 回复框 结束d-->
            <!--大框 回复框 开始-->
            <form id="commentPushId_${list.riddleId }"   method="post">  
            <div class="hufuInput" id="divCommentContent_${list.riddleId }" style="display: none">
                <div class="textBox">
                    <textarea name="commentCon"  id= "commentConId_${list.riddleId }"class="Input_text" ></textarea>
                    <div class="btnBox" onclick="GetCommentInfo(${list.riddleId })"><em></em>
                        <span class="plFont">${list.riddleCount}</span><b></b>
                        <span class="jianjiao"></span>
                        <span id="spanPlus_${list.riddleId }" style="display: none">+</span>
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
                    <a onclick="postcommentinfo(${list.riddleId },false);"  class="1postBtn" >提交
                    <input type="hidden" name="commentId" id=""></input>
			         <input type="hidden" id="rid_${list.riddleId }" name="riddleId"  value="${list.riddleId }"/>
                    </a>
                </div>
                <div class="upImg" id="upImg_${list.riddleId }" style="display: none"><p><img src="" width="120" height="90" /><em onclick="cleanPic(${list.riddleId })">X</em></p></div>
                <input type="hidden"   name="userId"  value="${user.id }"/>
                <input type="hidden" value="" id="hdUploadImg_${list.riddleId }" />
               <%--  <input type="hidden" value="${user.name }" name="userName" id="userName" /> --%>
                
            </div>
            </form>
            <!--大框 回复框 结束-->
            <!--评论页 开始-->
            <div class="newSList" style="display: none" id="newList_${list.riddleId }">
     	
            <%--  <p style="text-align: center; height: 20px; margin-top: 15px;" id="nopinglun_${list.riddleId }">没有最新评论</p> --%>
             <div class="shouqiBtn" style="display: block" id="shouqiBtn_${list.riddleId }" onclick="shouqiBtn(${list.riddleId },this)"><span></span></div> 
                    <!--添加测试数据-->
             </div>
            </div>
            <!--评论页 结束-->
			 <!-- pinlunjiesu -->
			 <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone"></a><a href="#" class="bds_tsina" data-cmd="tsina"></a><a href="#" class="bds_tqq" data-cmd="tqq"></a><a href="#" class="bds_renren" data-cmd="renren"></a><a href="#" class="bds_weixin" data-cmd="weixin"></a></div>
<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
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
			<form action="/ssm/riddlesAction_riddlesDataGirdByPage1.action">
			 
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
					<li><a href="#">iOS，誰的字體好讀？</a></li>
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
		 <br /> <small>Copyright © 2015-2016 zmdiba.com 版权所有
			 </small>
	</p>
	</footer>

<div style=":before,:after" class="qqserver" >
  
  <div class="qqserver-body" style="display: block;">
    <div class="qqserver-header">
      
    <span  class=""></span> </div>
    <ul style="margin:0;padding:0;list-style:none;border:none;">
      <li style="margin-top:6px">
       <a 
       style="display:block;padding:6px 12px 4px"
       title="点击这里给我发消息" href="http://wpa.qq.com/msgrd?v=3&amp;uin=714037465&amp;site=qq&amp;menu=yes" target="_blank">
        <div style="font-size:14px;float:left;margin-right:11px;color:#697466">业务联系QQ</div>
      <!--   <span>琳琳</span> --> </a> </li>
    
    </ul>
    <div class="qqserver-footer"><span class="qqserver_icon-alert"></span><a class="text-primary" href="javascript:;">来挑战我吧</a> </div>
  </div>
</div>

<script>
$(function(){
	var $qqServer = $('.qqserver');
	var $qqserverFold = $('.qqserver_fold');
	var $qqserverUnfold = $('.qqserver_arrow');
//	$qqserverFold.click(function(){
		$qqserverFold.hide();
		$qqServer.addClass('unfold');
//	});
	$qqserverUnfold.click(function(){
		$qqServer.removeClass('unfold');
		$qqserverFold.show();
	});
	//窗体宽度小鱼1024像素时不显示客服QQ
	function resizeQQserver(){
		$qqServer[document.documentElement.clientWidth < 1024 ? 'hide':'show']();
	}
	$(window).bind("load resize",function(){
		resizeQQserver();
	});
});
</script>
</body>

</html>