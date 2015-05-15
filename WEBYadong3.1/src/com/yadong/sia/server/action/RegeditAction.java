package com.yadong.sia.server.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.util.page.IGenericPage;

/**
 * @ClassName: HmModelDatasetMppingAction 
 * @Description: HmModelDatasetMpping管理Action 
 *
 */
@SuppressWarnings("serial")
@Controller("RegeditAction")
@Scope("prototype")
public class RegeditAction extends BaseAction<User> {
	@Autowired
	private HmModelDatasetMppingService hmModelDatasetMppingService;

	private HmModelDatasetMpping hmModelDatasetMpping;
	
	private User  user;
	

	private String[] ids;

	private String uploadAttachmentIds;

	
	public String forword(){
	System.out.println("forword");	
		return "regedit";
	}
	
	/**
	 * 新增或者修改记录
	 */
	public void save() {
		hmModelDatasetMppingService.saveOrUpdate(hmModelDatasetMpping);
		JSONOuter().doOutSuccessMsg(getOut(), "数据保存成功", hmModelDatasetMpping);
	}

	/**
	 * 加载数据对象
	 */
	public void load() {
		HmModelDatasetMpping hmModelDatasetMppingObj = hmModelDatasetMppingService.getById(hmModelDatasetMpping.getId());
		JSONOuter().doOutRecordBean(getOut(), hmModelDatasetMppingObj);
	}

	/**
	 * 分页查询
	 */
	public void pagelist() {
		IGenericPage<HmModelDatasetMpping> page = hmModelDatasetMppingService.findPageByParam(
				hmModelDatasetMpping,
				this.getPage(),
				this.getRows(),
				this.getSidx(),
				this.getSord());
		JSONOuter().doOutPage(getOut(), page);
		
	}

	/**
	 * 数据列表
	 */
	public void list() {
		List<HmModelDatasetMpping> list = hmModelDatasetMppingService.findByParam(
				hmModelDatasetMpping, this.getSidx(), this.getSord());
		JSONOuter().doOutList(getOut(), list);
	}

	/**
	 * 批量删除记录
	 */
	public void delete() {
		String msg = "";

		if (ids != null && ids.length > 0){
			int s = hmModelDatasetMppingService.deleteByIds(ids);
			msg = "删除成功" + s + "条记录";
		} else {
			msg = "请选择要删除的记录!";
		}
		JSONOuter().doOutSuccessMsg(getOut(), msg);
	}

	/**
	 * 模型驱动，自动装配页面属性
	 */
	public User getModel() {
		hmModelDatasetMpping = new HmModelDatasetMpping();
		return user;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

	public void setUploadAttachmentIds(String uploadAttachmentIds) {
		this.uploadAttachmentIds = uploadAttachmentIds;
	}

}
