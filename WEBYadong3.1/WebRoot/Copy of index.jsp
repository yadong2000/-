<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path1 = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path1+"/";
String path = request.getContextPath()+request.getServletPath();
%>
<%@include file="/jsp/basic/taglibs.jsp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta charset="utf-8" />
<meta name="description" content="知识无限大 我们需要更多的知识填满我们空虚无知的生活 每天一点小知识 带你进入知识的海洋 - 人人小站" />
<meta name="keywords" content="猜谜，对联，小题 ">
<title>猜谜，对联，小题目</title>
<!-- <link href="http://hdn.xnimg.cn/photos/hdn321/20120413/1015/h_tiny_6ZbI_56310004e15b2f76" rel="shortcut icon" /> -->
<link href="/ssm/css/home-alone2-all-min.css" rel="stylesheet" />
<!-- <link href="http://s.xnimg.cn/a61220/smallsite/styles/home_alone2-all-min.css" rel="stylesheet" /> -->
<!-- 
<link href="/css/home_alone2_all-min.css" rel="stylesheet" />
<link href="request.getSession().getServletContext().getRealPath/css/home_alone2-all-min.css" rel="stylesheet" /> -->
<link rel="alternate" title="每天懂得一点小知识" type="application/rss+xml" href="/" />
<script src="/ssm/js/core.js"></script>
<!-- <script src="http://s.xnimg.cn/a52311/smallsite/scripts/compatible/core.js"></script> <script type="text/javascript">document.domain ='/' ;</script> --> 
<script src="/ssm/js/home-alone2.js"/>
<script>


//图片延迟加载配置
jQuery(function(){
/* jQuery.lazyPics({
selector: '#postList img[data-src]',
loadNum: 10,
stepNum: 1,
callback: ''
}); */
 
	/* $.ajax({
	     type: 'POST',
	     url: "${pageContext.request.contextPath}/riddlesAction_riddlesDataGird.action" ,
	     data: data ,
	     success: success ,
	     dataType: dataType
	}); */
});
</script>
<script>/*回复框自适应*/
jQuery(function()  {
	//alert("dsa243d");
	$.ajax({
	     type: 'POST',
	     url: "${pageContext.request.contextPath}/riddlesAction_riddlesDataGird.action" ,
	     data: "" ,
	      success: function(data){
	    	//  alert(data.rows.length+"123");
	    	   for(var i = 0;i<data.rows.length;i++){
	    		   var j = i+1;
	    		//   alert(j+"=j"+data.rows[i].riddleSide);
	    		   $("#postList"+j).show();
	    		   $("#title"+j).html("sda");
	    		   $("#span"+j).html(data.rows[i].riddleSide);
	    		   $("#span-"+j).html("hhhh");
	    	  }  
	      } /* ,
	     dataType: dataType  */
	});

	$("#pageBy").click(function(){
		/* 	<li class="current" id="pagefor">1</li>
			<li class="next"><a href="#" id="pageBy">下一页</a></li> */
			var a =$("#pagefor").val();
			var h = a+1;	
			$("#pagefor").
			$.ajax({
			     type: 'POST',
			     url: "${pageContext.request.contextPath}/riddlesAction_riddlesDataGird.action" ,
			     data:  "page="+h ,
			      success: function(data){
			    	//  alert(data.rows.length+"123");
			    	   for(var i = 0;i<data.rows.length;i++){
			    		   var j = i+1;
			    		//   alert(j+"=j"+data.rows[i].riddleSide);
			    		   $("#postList"+j).show();
			    		   $("#title"+j).html("sda");
			    		   $("#span"+j).html(data.rows[i].riddleSide);
			    		   $("#span-"+j).html("hhhh");
			    	  }  
			      } 
			     
			});
			
		})
var eTextarea = jQuery('textarea.reply-input');
eTextarea.autoResizeTa();
})
</script>
 <link href="/ssm/css/storybook-new.css" rel="stylesheet" />
  <script>//终端页模板区分逻辑
jQuery(function() {
if (jQuery('body').hasClass('customize')) {return;}
</script>
<script type="text/javascript">
jQuery.use.add([
{
name: 'comment',
files: ['/ssm/js/common.js'],
provides: []
},
{
name: 'share',
files: ['/ssm/js/share.js'],
provides: []
},
{
name: 'guideLayout',
files: ['/ssm/js/guideLayout-all-min.css'],
provides: []
}
]);
});
//var XZ ={get_check:'6a8f7507',  'domain': 'zhan./', 'hostId': 0,'isLogin': false};			
</script>  
<![if IE]><script src="/ssm/js/expressions.js"></script><![endif]>
<style id="customizeSheet"> 
*#title {	color: rgb(112,109,72);}*#sitedesc {	
color: rgb(84,130,139);}body {	color: rgb(51,51,51);}*.post-content *.title, 
*.post-text *.post-content, *.post-link *.link a {	color: rgb(255,255,255);}*.post-photo 
*.title {	background-color: rgb(211,136,161);}*.post-photo *.reprint a, *.post-photo 
*.post-meta a, *.post-photo *.post-reply a {	color: rgb(211,136,161);}*.post-article *.
title {	background-color: rgb(185,193,111);}*.post-article *.reprint a, *.post-article *.post-meta a, 
*.post-article *.post-reply a {	color: rgb(185,193,111);}*.post-video *.title {	background-color: rgb(204,102,51);}*.
post-video *.reprint a, *.post-video *.post-meta a, *.post-video *.post-reply a {	color: rgb(204,102,51);}*.post-link 
*.post-content {	background-color: rgb(158,135,181);}*.post-link *.reprint a, *.post-link *.post-meta a, *.post-link *.
post-reply a {	color: rgb(158,135,181);}
</style>

</head>
<body >

<div id="reply" ></div>
<div id="publishbar">
<div class="barpanel">
<div id="logo">
 <a href="/home"><img alt="领悟网" src="/ssm/image/bar-logo.png" ></a>
</div><div class="tools"><!-- <div class="station-hot"><a href="/" target="_target">！</a></div> -->

<a class="bar-btn-attention popup-reg menu-list" id="regedit" href="http://localhost:8080/ssm/hmModelDatasetMpping_forWord.action"  target="_target">注册</a>
<div class="next-site menu-list"><a href="http://localhost:8080/ssm/hmModelDatasetMpping_doLogin.action">登录</a></div>
</div><div class="love-atten">
<div class="textarea">
<p>小站会根据您的关注，为您发现更多，</p>
<p>看到喜欢的小站就马上关注吧！</p>
</div>
</div>
<div class="meet-atten">
<div class="textarea">
<p>下一站，你会遇见谁的梦想？</p>
</div>
</div>
</div> 
</div>
<div class="maskdiv" id="masks" style="display: none;"></div> <div id="container">
<header>
<a class="sitehead" href="#">
<img alt="小站头像" src="" />
</a><h1><a id="title" href="/"   ></a></h1>
<p id="sitedesc" class="clearfix"></p>


</header>

 
<form action="" method="post" id="pageFrom">  

<div id="main-wrap" class="clearfix" >
<section id="main">
<div class="clearfix" id="postList1"  style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="" id="" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title1"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span1">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span-1">　
    　</span></p>
</div>
</div>
</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">
<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="" style="display:none;">
<div class="add-reply">
<input type="hidden" id="" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                                          
</div>
</article>
 
</div>
<div class="clearfix" id="postList2" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title=""  id="title2"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span2">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span-2">　
    </span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第三 -->
<div class="clearfix" id="postList3" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title3"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span3">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">　　
       　</span></p>
</div>
</div>
</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第四 -->
<div class="clearfix" id="postList4" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title4"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span4">　
 </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">
    </span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第五 -->
<div class="clearfix" id="postList5" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title=""  id="title5"> </h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span5">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">　
    </span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第六 -->
<div class="clearfix" id="postList6" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title6"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span6">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">
       　</span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第七 -->
<div class="clearfix" id="postList7" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title7"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span7">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">　
    　</span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第八 -->
<div class="clearfix" id="postList8" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title8"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span8">　
 </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">
    </span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第九 -->
<div class="clearfix" id="postList9" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title="" id="title9"></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span9">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">
    　</span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>
<!-- 第十 -->
<div class="clearfix" id="postList10" style="display:none">
<article class="post-article post" data-type="BLOG" data-feedid="3602888498036824744" id="feed_3602888498036824744" authorId="381622908" replyCount="0">
<div class="post-panel">


<div class="post-content">
<h2 class="title"  title=""></h2>
<div class="content">
<p>  
  <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;" id="span10">　
  </span> 
  
    <span style="color: rgb(66,66,66);font-family: Arial , Helvetica , sans-serif;line-height: 25.0px;">　　
    </span></p>
</div>
</div>
  


</div>
<div class="post-footer"> 
<div class="post-meta clearfix">
</div>
<div class="post-action clearfix">

<!-- <div class="hot-count">
<h5>热度</h5>
<a href="javascript:;">56</a>
</div> -->
<ul>
<li>
<!-- <a href="javascript:;" title="分享" class="share hot-view">分享<span>2</span></a>
<a href="javascript:;" title="回复" class="reply hot-view" id="replyAction3">回复<span id="replynum3602888498026368573"></span>
</a> -->
<a href="javascript:;" title="喜欢" num="0" class="hot-view enjoy">喜欢<span id="replynum"></span></a>
</li>
</ul>
</div>
<div class="post-reply clearfix" id="replies3602888498026368573" style="display:none;">
<div class="add-reply">
<form method="post" action="#" class="reply-form clearfix">
<input type="hidden" id="toId3602888498026368573" name="toId" value="381622908" />
<textarea id="content3602888498026368573" name="content" class="reply-input" autocomplete="off"></textarea>
<input type="submit" value="回 复" class="input-button" />
<span class="sync_area">
<input id="sync-tag3602888498026368573" name="share" value="true" type="checkbox"/> <label for="sync-tag3602888498026368573">同时分享</label>
</span>                        
</form>                    
</div>
</article>
</div>

<div id="pagerbar">
<ul class="pages">
<li class="current" id="pagefor">1</li>
<li class="next"><a href="#" id="pageBy">下一页</a></li>
</ul>
</div>
</form>

<!-- 分页结束 -->

</section>
<aside id="siteTopic">

<h4>小站话题</h4>
<ul class="topics">
<li><a  href="http://zhan.//shenghuozhishi?from=template" >全部</a></li>
 <li ><a order="99+"    href="http://zhan.//shenghuozhishi?tagId=12770&from=template" >生活</a></li>
<li ><a order="21"    href="http://zhan.//shenghuozhishi?tagId=17391&from=template" >知识</a></li>
<li ><a order="99+" class="s"   href="http://zhan.//shenghuozhishi?tagId=8059&from=template" >健康</a></li>
<li ><a order="99+"    href="http://zhan.//shenghuozhishi?tagId=18638&from=template" >创意</a></li>
</ul></aside>  
</div>
</div>

</body>

</html>

