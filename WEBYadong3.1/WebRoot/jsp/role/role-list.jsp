<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>角色列表</title>
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/default/easyui.css" />
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/icon.css" />
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/demo.css" />
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery-1.7.1.min.js" charset="utf-8"></script>
	 <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.min.js" charset="utf-8"></script>
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js" charset="utf-8"></script>
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.form.js" charset="utf-8"></script>
     <script type="text/javascript">
 $(function(){
	 
		$('#dg').datagrid({
			url:'${pageContext.request.contextPath}/rolesMpping_roleDataGird.action?randnum='+Math.floor(Math.random()*1000000),
		    pagination:true,
		    onLoadSuccess:function(){  
	            $('#dg').datagrid('clearSelections'); //一定要加上这一句，要不然datagrid会记住之前的选择状态，删除时会出问题  
		    },
			columns:[[    
			          {field:'roleId',title:'角色 ID',width:100},    
			          {field:'roleName',title:'角色姓名',width:200},    
			          {field:'roleDisc',title:'备注',width:300}
			      ]]    ,
			      striped: true, //显示斑马线,
			  	toolbar:[
								{
									id:'btnaddList',
									text:'新增',
									iconCls:'icon-add',
								//	handler:addEmployee
								},'-',
								
								{
									id:'btnupdateList',
									text:'修改',
									iconCls:'icon-add',
								//	handler:addEmployee
								},'-',
								
								{
									id:'btndeleteList',
									text:'删除',
									iconCls:'icon-add',
								//	handler:addEmployee
								},'-' 
							]
		 }); 
		
		
		 $("#btnaddList").click(function(){
		//	 $('#w ').window('refresh', '${pageContext.request.contextPath}/hmModelDatasetMpping_userDataGird.action?randnum='+Math.floor(Math.random()*1000000)); 
			// roleName，roleId，roleDisc
			 $('#roleId').attr("value",'');
			 $('#roleName').attr("value",'');
			 $('#roleDisc').attr("value",'');
			 
			 $("#w").fadeIn();
			 //$('#dg').datagrid('clearSelections');
		 	 $('#userForm').resetForm();
			 /* $('#w').window({    
				    width:600,    
				    height:400,    
				    cache : false  ,
				    modal:true   
				});  */ 
		//	 $('#w').window('cache',false);
			 $('#w').window('open');
		 });
		 
		 $("#btnupdateList").click(function(){
			 var rows = $('#dg').datagrid('getSelections');
			 //name  address  mail  phone  work  password
			  
			 $('#roleId').attr("value",rows[0].roleId);
			 $('#roleName').attr("value",rows[0].roleName);
			 $('#roleDisc').attr("value",rows[0].roleDisc);
			 
			 
			 $('#w').window('open');
		 });
		 
		 
		 $("#btndeleteList").click(function(){
				//window.open('${pageContext.request.contextPath}/hmModelDatasetMpping_saveUI.action','Derek','height=500,width=600,status=yes,toolbar=yes,menubar=no,location=no')
		var rows = $('#dg').datagrid('getSelections');
		if(rows.length != 1) {
			alert('提示','请选择一行数据进行操作!');
			return;
		}else {
			$.messager.confirm('确认','您确认想要删除记录吗？',function(r){    
			    if (r){    
			    	 $.ajax({
					url:'${pageContext.request.contextPath}/rolesMpping_delete.action', 
					data: {ids:rows[0].roleId},
					context: document.body,
					cache: false,
				 	success: function(data){
		                  alert("删除成功");  	
		                  $('#dg').datagrid('reload');    
		                  
			        },
			        error : function(){
			    	alert("删除失败");  
			      } 
				
				});    
			    }    
			});  
			
		}	
		
		
		 });
 })
		 function submitForm(){
	 if($('#roleId').val()){
		 $('#userForm').form('submit', {    
			    url:'${pageContext.request.contextPath}/rolesMpping_UpdateUser.action',    
			    onSubmit: function(){  
			    },    
			    success:function(data){    
			    	//alert(data);
			    	if("success"==data){
			    		$('#w').window('close');  
			    		$('#dg').datagrid('reload');    
			    	}
			    }    
			});  
	 }else{
		 $('#userForm').form('submit', {    
			    url:'${pageContext.request.contextPath}/rolesMpping_save.action',    
			    onSubmit: function(){  
			    },    
			    success:function(data){    
			    	//alert(data);
			    	if("success"==data){
			    		$('#dg').datagrid('reload');    
			    		$('#w').window('close');  
			    	}
			    
			    }    
			});  
	 }
	 

		 }		 
 
 </script>
 
</head>
<body>

	<h2>角色列表</h2>
	<div style="margin:20px 0;">
	</div>
	<table id="dg" style="width: 697.777778px"></table>
	
	<div id="dd" title="My Dialog" style="width:400px;height:200px;" >   
	<div id="w" class="easyui-window" title="sadsa" data-options="modal:true,closed:true,iconCls:'icon-save'" style="width:500px;height:400px;padding:10px;">
			<form id="userForm" method="post" name="userForm">
			
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
					<input id="roleId" class=""  type="hidden" name="roleId" valueField='address' textField ='user_address' editable="false" panelHeight="82">
				   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">姓名：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="roleName" class="easyui-validatebox"  required="true" validType="length[0,40]" invalidMessage="不能超过20个字符！"  name="roleName" valueField='itemCode' textField ='name' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
				 
					  <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">描述：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="roleDisc" class="easyui-validatebox"  required="true" validType="length[0,20]" invalidMessage="不能超过20个字符！" name="roleDisc" valueField='address' textField ='user_address' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
			        <tr>
						<td colspan="2" align="center">
							<a class="easyui-linkbutton" id="btnSubmit" iconCls="icon-ok" onclick="submitForm()">提  交</a>
							<a class="easyui-linkbutton" iconCls="icon-redo"  onclick="resetForm()">重  置</a>
			        	</td>
			        </tr>
			    </table>
			</form>		
	</div>
</div>  
	 
</body>
</html>