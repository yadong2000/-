<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
 <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/default/easyui.css" />
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/icon.css" />
  <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/demo.css" />
	<script language="javascript" src="${pageContext.request.contextPath}/js/jquery.min.js" charset="utf-8"></script>
 <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js" charset="utf-8"></script>
 <script type="text/javascript">
 function submitForm(){
		$('#userForm').form('submit', {    
		    url:"${pageContext.request.contextPath}/hmModelDatasetMpping_save.action",    
		    onSubmit: function(){  
		    //	alert("cg");
		        // do some check    dzsf
		        // return false to prevent submit;    aSAasdaswda
		    },    
		    success:function(data){    
		    	alert(data);
		    	if("success"==data){
		    		window.close();
		    	}
		    
		    }    
		});  

		/* $.ajax({
			url:'${pageContext.request.contextPath}/hmModelDatasetMpping_save.action', 
			context: document.body,
		 	success: function(data){
                  alert("添加失败");  			        
	      },sadd
	      error : function(){
	    	alert("添加失败");  
	      } 
		
		}); */
		 
	 }
 $(function(){
	 
	 
	function submitForm(){
		// asds
		alert("+点击111"); 
		/*	$.ajax({
					url:'${pageContext.request.contextPath}/hmModelDatasetMpping_saveUI.action', 
					context: document.body,sad
				 	success: function(data){
                          alert("添加失败");  		ssadasdad	        
			      },dfdgfdg
			      error : function(){
			    	alert("添加失败");  asdsa
			      } 
				
				}); */
		 
	 }
	 
	 
	 
	 
 })
 
 
 
 
 
 </script>
</head>
<body>
<div id="deptDiv" class="deptDiv">
			<form id="userForm" method="post" name="departmentForm">
			
			<%-- 	<input type="hidden" id="parentId" name="parentId">
				<input type="hidden" id="deptId" name="deptId">
				<input type="hidden" id="sys_sign" name="sys_sign"/>
				<input type="hidden" id="administrator" name="administrator" value="<%=administrator%>">
				<input type="hidden" id="adminsmp" name="adminsmp" value="<%=adminsmp%>"/> --%>
				
				<table style="font-size: 16px; font-weight:bold;boder:0">
					<tr>
						<td id="display"></td>
					</tr>
				</table>
				<table width="80%" border="1" cellspacing="0" cellpadding="0">
				
				   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">姓名：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="deptType" class="" name="name" valueField='itemCode' textField ='name' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
					   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">性别：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox" validType="length[0,50]" type="radio" id="sex" name="sex"  value="Y">男</input>
			            	<input class="easyui-validatebox" validType="length[0,50]" type="radio" id="sex1" name="sex1" value="N" checked>女</input>
			         	</td>
			        </tr>
					  <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">地址：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="address" class="" name="address" valueField='address' textField ='user_address' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
			        
					<tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">邮箱：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
			            	<input class="" validType="length[0,20]" type="text" id="mail" name="mail" required="true" style="width:70%"></input>
			        	</td>
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">电话：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="phone" class="" name="phone" valueField='phone' textField ='phone' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
	        		
	        	 
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">工作：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class=""  type="text" id="work" name="work" style="width:70%"></input>
			         	</td>
			        	
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			           		&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">密码：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class=""  type="text" id="password" name="password" style="width:70%"></input>
			         	</td>
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">重复密码：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class=""  type="text" id="user_password_reply" name="user_password_reply" style="width:70%"></input>
			         	</td>
			        </tr>
					<!-- <td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">邮箱：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox" validType="length[0,100]" type="text" id="easCostCenterId" name="easCostCenterId" style="width:70%"></input>
			         	</td>
			        </tr>
			      -->
			      <!--   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">部门邮箱：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox" type="text" id="email" validType="email" maxlength=60 name="email" style="width:70%"></input>
			         	</td>
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action2" style="font-size: 13px;">asd述：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<textarea class="easyui-validatebox" validType="length[0,50]" id="desc" name="desc" style="height:60px;width:30%"></textarea>
			         	</td>
			        </tr> -->
			        
			        <tr>
						<td colspan="2" align="center">
							<a class="easyui-linkbutton" id="btnSubmit" iconCls="icon-ok" onclick="submitForm()">提  交</a>
							<a class="easyui-linkbutton" iconCls="icon-redo"  onclick="resetForm()">重  置</a>
			        	</td>
			        </tr>
			    </table>
			</form>		
		</div>
</body>
</html>