<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>用户列表</title>
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/default/easyui.css" />
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/icon.css" />
     <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/css/themes/demo.css" />
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery-1.7.1.min.js" charset="utf-8"></script>
	 <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.min.js" charset="utf-8"></script>
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.easyui.min.js" charset="utf-8"></script>
     <script language="javascript" src="${pageContext.request.contextPath}/js/jquery.form.js" charset="utf-8"></script>
      <script language="javascript" src="${pageContext.request.contextPath}/js/formValidatorRegex.js" charset="utf-8"></script>
      <script language="javascript" src="${pageContext.request.contextPath}/js/easyui-lang-zh_CN.js" charset="utf-8"></script>
    
   
     <script type="text/javascript">
 $(function(){

		$('#dg').datagrid({
			url:'${pageContext.request.contextPath}/hmModelDatasetMpping_userDataGird.action?randnum='+Math.floor(Math.random()*1000000),
		    pagination:true,
		    onLoadSuccess:function(){  
	            $('#dg').datagrid('clearSelections'); //一定要加上这一句，要不然datagrid会记住之前的选择状态，删除时会出问题  
		    },
			columns:[[    
			          {field:'id',title:'用户 ID',width:50},    
			          {field:'name',title:'姓名',width:100},    
			          {field:'age',title:'年龄',width:30},
			          {field:'address',title:'地址',width:170},
			          {field:'sex',title:'性别',width:50,
			        	  formatter: function(value,row,index){
							if (row.sex==0){
								return "男";
							}else{
								return "女";
							}
						}
},
			          {field:'mail',title:'邮箱',width:150},
			          {field:'work',title:'工作',width:100},
			          {field:'createDate',title:'创建时间',width:190},
			          {field:'birthDate',title:'生日',width:120},
			          {field:'phone',title:'电话',width:120} 
			          //createDate
			          
			      ]]  
		    ,
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
			
			 $('#testpa').show();
			 $('#testpa1').show();
			 $('#id').attr("value",'');
			 $('#name').attr("value",'');
			 $('#address').attr("value",'');
			 $('#mail').attr("value",'');
			 $('#phone').attr("value",'');
			 $('#work').attr("value",'');
			 $('#testpa').attr("value",'');
			 $('#testpa1').attr("value",'');
			 $('#password').attr("value","");
			 $('#password1').attr("value","");
			 $("#w").fadeIn();
		 	 $('#userForm').resetForm();
			 $('#w').panel({title:"用户添加"});
			 $('#w').window('open');
		 });
		 
		 $("#btnupdateList").click(function(){
			 var rows = $('#dg').datagrid('getSelections');
			 //name  address  mail  phone  work  password disabled
			 $('#id1').attr("value",rows[0].id);
			 $('#name1').attr("value",rows[0].name);
			 if(1==rows[0].sex){
				 $('#sex3').attr("checked","checked");
				 $('#sex2').attr("checked",false);
			 }else{
				 $('#sex2').attr("checked","checked");
				 $('#sex3').attr("checked",false);
			 }
			 $('#address1').attr("value",rows[0].address);
			 $('#mail1').attr("value",rows[0].mail);
			 $('#phone1').attr("value",rows[0].phone);
			 $('#work1').attr("value",rows[0].work);
			 console.log("s时间是"+ rows[0].birthDate);
			 //$('#dd').datebox('setValue', '6/1/2012');	

			 $('#birthDate11').datebox('setValue','6/1/2012');
			// $("#disabled").datebox("disabled","disabled");
			 //$('#birthDate1').attr("value",rows[0].birthDate);
			// $('#birthDate1').attr("disable","disable");
			// $('#password11').attr("readonly","readonly");
			 $("#w1").fadeIn();
		 	 $('#userForm1').resetForm();
			 $('#w1').panel({title:"用户修改"});
			 $('#w1').window('open');
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
					url:'${pageContext.request.contextPath}/hmModelDatasetMpping_delete.action', 
					data: {ids:rows[0].id},
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
	// alert($('#userForm').form('validate')+";ds");
	
	 
	 if($('#id').val()){
		//alert($('#address').validatebox(validType));
		 if($('#name').validatebox()&&$('#address').validatebox()&&$('#mail').validatebox()&&$('#phone').validatebox()&&$('#work').validatebox()){
			 alert("验证通过");
		 $('#userForm').form('submit', {    
			    url:'${pageContext.request.contextPath}/hmModelDatasetMpping_UpdateUser.action',    
			    onSubmit: function(){  
			    },    
			    success:function(data){    
			    	if("success"==data){
			    		$('#w').window('close');  
			    		$('#dg').datagrid('reload');    
			    	}
			    }    
			}); 
		 }
	 }else{
		 if(!$('#userForm').form('validate')) {
			 return;
		 }			 
		 $('#userForm').form('submit', {    
			    url:'${pageContext.request.contextPath}/hmModelDatasetMpping_save.action',    
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
	 function submitForm1(){
			// alert($('#userForm').form('validate')+";ds");
			
			  if(!$('#userForm1').form('validate')) {
						
					 return;
				 }
			 
				 $('#userForm1').form('submit', {    
					    url:'${pageContext.request.contextPath}/hmModelDatasetMpping_UpdateUser.action',    
					    onSubmit: function(){  
					    },    
					    success:function(data){    
					    	if("success"==data){
					    		$('#w1').window('close');  
					    		$('#dg').datagrid('reload');    
					    	}
					    
					    }    
					}); 
				 }
			 

		  
 </script>
 
</head>
<body>

	<h2>用户列表</h2>
	<div style="margin:20px 0;">
	</div>
	<table id="dg" style="width: 1200px"></table>
	
	<div id="dd" title="My Dialog" style="width:400px;height:200px;" >   
	<div id="w" class="easyui-window" title="sadsa" data-options="modal:true,closed:true,iconCls:'icon-save'" style="width:500px;height:400px;padding:10px;">
			<form id="userForm" method="post" name="userForm">
				<table style="font-size: 16px; font-weight:bold;boder:0">
					<tr>
						<td id="display"></td>
					</tr>
				</table>
				<table width="80%" border="1" cellspacing="0" cellpadding="0">
					<input id="id" class=""  type="hidden" name="id" valueField='address' textField ='user_address' editable="false" panelHeight="82">
				   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">姓名：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="name" class="easyui-validatebox"  required="true" validType="length[0,20]" invalidMessage="不能超过20个字符！"  name="name" valueField='itemCode' textField ='name' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
	        		   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">性别：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="sex" class="easyui-validatebox"  required="true"   type="radio" name="sex"  value="0" textField ='name'   >男</input>
	        				<input id="sex1" class="easyui-validatebox"  required="true"  type="radio" name="sex"  value="1" textField ='name'    >女</input>
	        			</td>
	        		</tr>
	        		  
					<tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">地址：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="address" class="easyui-validatebox"  required="true" validType="length[0,60]" invalidMessage="不能超过60个字符！" name="address" valueField='address' textField ='user_address' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">生日：</label>
	            		</td>
	            		<td style="background:#FFF;  font-size:12px;">
	            			<input id="birthDate" class="easyui-datebox"   name="birthDate"  >
	        			</td>
	        		</tr>
					<tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">邮箱：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
			            	<input  class="easyui-validatebox" validType="email" type="text" id="mail" name="mail" required="true" style="width:70%"></input>
			        	</td>
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">电话：</label>
	            		</td>
	            		 <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
			            	<input  class="easyui-validatebox" validType="mobile" type="text" id="phone" name="phone" required="true" style="width:70%"></input>
			        	</td>
	        		</tr>
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">工作：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox" validType="length[0,20]" type="text" id="work" name="work" style="width:70%"></input>
			         	</td>
			        </tr>
			          <tr id="testpa">
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">密码：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox"  required="true" validType="length[6,20]" type="password" id="password" name="password" style="width:70%"></input>
			         	</td>
			        	
			        </tr>
			          <tr id="testpa1">
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1"  style="font-size: 13px;">重复密码：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            <input  class="easyui-validatebox"  validType="equalTo['password']" required="true" type="password" id="password1" name="password1" style="width:70%"></input>
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
	<!-- 修改 -->
	<div id="w1" class="easyui-window" title="sadsa" data-options="modal:true,closed:true,iconCls:'icon-save'" style="width:500px;height:400px;padding:10px;">
			<form id="userForm1" method="post" name="userForm">
			
				<table style="font-size: 16px; font-weight:bold;boder:0">
					<tr>
						<td id="display"></td>
					</tr>
				</table>
				<table width="80%" border="1" cellspacing="0" cellpadding="0">
					<input id="id1" class=""  type="hidden" name="id" valueField='address' textField ='user_address' editable="false" panelHeight="82">
				   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">姓名：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="name1" class="easyui-validatebox"  required="true" validType="length[0,20]" invalidMessage="不能超过20个字符！"  name="name" valueField='itemCode' textField ='name' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
	        		   <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">性别：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="sex2" class="easyui-validatebox"  required="true"   type="radio" name="sex"  value="0" textField ='name'   >男</input>
	        				<input id="sex3" class="easyui-validatebox"  required="true"   type="radio" name="sex"  value="1" textField ='name'    >女</input>
	        			</td>
	        		</tr>
					  <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">地址：</label>
	            		</td>
	            		<td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
	            			<input id="address1" class="easyui-validatebox"  required="true" validType="length[0,60]" invalidMessage="不能超过60个字符！" name="address" valueField='address' textField ='user_address' editable="false" panelHeight="82">
	        			</td>
	        		</tr>
					<tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">邮箱：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
			            	<input  class="easyui-validatebox" validType="email" type="text" id="mail1" name="mail" required="true" style="width:70%"></input>
			        	</td>
			        </tr>
			        
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">电话：</label>
	            		</td>
	            		 <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;">
			            	<input  class="easyui-validatebox" validType="mobile" type="text" id="phone1" name="phone" required="true" style="width:70%"></input>
			        	</td>
	        		</tr>
	        		 <!--  <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
	            			<label for="action1" style="font-size: 13px;">生日：</label>
	            		</td>
	            		<td style="background:#FFF;  font-size:12px;">
	            			<input id="birthDate11" class="easyui-datebox" type="text"  required="true" name="birthDate"  >
	        			</td>
	        		</tr> -->
			        <tr>
						<td width="20%" style="background: #E0ECFF;text-align:right">
			            	&nbsp;&nbsp;<label for="action1" style="font-size: 13px;">工作：</label>
			            </td>
			            <td style="background:#FFF; padding:3px 0 4px 5px; font-size:12px;"> 
			            	<input class="easyui-validatebox" validType="length[0,20]" type="text" id="work1" name="work" style="width:70%"></input>
			         	</td>
			        </tr>
			        <tr>
						<td colspan="2" align="center">
							<a class="easyui-linkbutton" id="btnSubmit" iconCls="icon-ok" onclick="submitForm1()">提  交</a>
							<a class="easyui-linkbutton" iconCls="icon-redo"  onclick="resetForm()">重  置</a>
			        	</td>
			        </tr>
			    </table>
			</form>		
	</div>
</div>  
	 
</body>
</html>