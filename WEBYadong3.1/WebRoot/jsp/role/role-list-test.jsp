<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	 <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/default/easyui.css" />
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/icon.css" />
  <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/demo.css" />
	<script language="javascript" src="${pageContext.request.contextPath}/js/jquery.min.js" charset="utf-8"></script>
 <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js" charset="utf-8"></script>
</head>
<body>
	<h2>Basic Pagination</h2>
	<p>The user can change page number and page size on page bar.</p>
	<div style="margin:20px 0;"></div>
	<div class="easyui-panel">
		<div class="easyui-pagination" data-options="total:114"></div>
	</div>
</body>
</html>