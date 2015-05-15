package com.yadong.sia.server.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.service.RolesService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.json.JsonConvert;
import com.yadong.sia.server.util.page.GenericDefaultPage;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;
import com.yadong.sia.server.util.struts2.Struts2Utils;

/**
 * @ClassName: HmModelDatasetMppingAction
 * @Description: HmModelDatasetMpping管理Action
 *
 */
@SuppressWarnings("serial")
@Controller("rolesAction")
@Scope("prototype")
public class RolesAction extends BaseAction<Roles> {
	@Autowired
	private RolesService RolesService;
	private Roles roles = new Roles();

	private String[] ids;

	private String uploadAttachmentIds;


	public String forWord() {
		return "forWord";
	}

	public String doLogin() {
		return "login";
	}
	
	
	public String UpdateUser(){
		if(null!=roles){
			try{
				RolesService.update(roles);
			
			}catch(Exception e){
				e.printStackTrace();
			}
			}else{
				
			}
		String[] parameterValues = request.getParameterValues("rows");
		System.out.println("hhh"+parameterValues);
		Struts2Utils.renderJson("success", "encoding:UTF-8");
		return NONE;
	}


	/**
	 * 跳转到用户列表页面
	 * 
	 * @return
	 */
	// @RequestMapping("/forWordtoUserList")
	public String forWordtoRoleList() {

 		System.out.println("forWordtoUserList" + this.page
				+ "forWordtoUserList" + this.rows);
		return "forWordtoRoleList";
	}

	public String saveUI() throws IOException {
		
		String id = request.getParameter("id");
		Integer integer = Integer.getInteger(id);
		
		System.out.println("dsada");
		Roles byId = RolesService.getById(id);
		//response.getWriter().print(byId);
		StringBuffer sb = new StringBuffer();// ..。.。
		String result = "{\"total\" :" + 1 + ", \"rows\" :[";
		String list2json = JsonConvert.bean2json(byId);
		sb.append(result);
		sb.append(list2json);
		sb.append("]}");
		String string = sb.toString();
		System.out.println("string:" + string);
		Struts2Utils.renderJson(string, "encoding:UTF-8");

		return "saveUI";
	}

	/**
	 * 注册方法
	 */
	/**
	 * 新增或者修改记录
	 */
	public String save() {
		if (roles != null) {
			RolesService.regedit(roles);
		}
		Struts2Utils.renderJson("success", "encoding:UTF-8");
		return NONE;
	}

	/**
	 * 加载数据对象
	 */
	public void load() {
		String string = Integer.toString(roles.getRoleId().intValue());
		Roles hmModelDatasetMppingObj = RolesService
				.getById(string);
		JSONOuter().doOutRecordBean(getOut(), hmModelDatasetMppingObj);
	} 

	public void roleDataGird() {

		// 当前页
		System.out.println("forWordtoUserList" + this.page
				+ "forWordtoUserList" + this.rows);

		if (this.page == null) {
			this.page = 1;
		}
		Page findPageByParam = RolesService.findPageByParam1(roles, page, rows,
				uploadAttachmentIds, uploadAttachmentIds);
		int totalCount = findPageByParam.getTotalCount();
		List<User> list = (List<User>) findPageByParam.getList();
		StringBuffer sb = new StringBuffer();// ..。.。
		String result = "{\"total\" :" + totalCount + ", \"rows\" :";
		String list2json = JsonConvert.list2json(list);
		sb.append(result);
		sb.append(list2json);
		sb.append("}");
		String string = sb.toString();
		System.out.println("string:" + string);
		Struts2Utils.renderJson(string, "encoding:UTF-8");
	}

	/**
	 * 分页查询
	 */
	public void pagelist() {
		// IGenericPage<HmModelDatasetMpping> page =
		// userServices.findPageByParam(
		// user,
		// this.getPage(),
		// this.getRows(),
		// this.getSidx(),
		// this.getSord());
		// JSONOuter().doOutPage(getOut(), page);

	}

	/**
	 * 
	 * 
	 * 数据列表
	 */
	public void list() {
		List<Roles> list = RolesService.findByParam(roles,
				this.getSidx(), this.getSord());
		JSONOuter().doOutList(getOut(), list);
	}

	/**
	 * 
	 * 
	 * 批量删除记录
	 */
	public void delete() {
		String msg = "";

		try {
			if (ids != null && ids.length > 0) {
				int s = RolesService.deleteByIds(ids);
				msg = "删除成功" + s + "条记录";
			} else {
				msg = "请选择要删除的记录!";
			}
			JSONOuter().doOutSuccessMsg(getOut(), msg);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 模型驱动，自动装配页面属性
	 */
	public Roles getModel() {
		roles = new Roles();
		return roles;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

	public void setUploadAttachmentIds(String uploadAttachmentIds) {
		this.uploadAttachmentIds = uploadAttachmentIds;
	}

}
