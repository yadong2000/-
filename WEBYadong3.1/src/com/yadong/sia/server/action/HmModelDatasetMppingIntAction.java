package com.yadong.sia.server.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.HmModelDatasetMppingInt;
import com.yadong.sia.server.service.HmModelDatasetMppingIntService;
import com.yadong.sia.server.util.page.IGenericPage;

/**
 * @ClassName: HmModelDatasetMppingAction 
 * @Description: HmModelDatasetMpping管理Action 
 *
 */
@SuppressWarnings("serial")
@Controller("hmModelDatasetMppingIntAction")
@Scope("prototype")
public class HmModelDatasetMppingIntAction extends BaseAction<HmModelDatasetMppingInt> {
	@Autowired
	private HmModelDatasetMppingIntService hmModelDatasetMppingIntService;

	private HmModelDatasetMppingInt hmModelDatasetMppingInt;

	private Integer[] ids;

	private String uploadAttachmentIds;

	/**
	 * 新增或者修改记录
	 */
	public void save() {
		hmModelDatasetMppingIntService.saveOrUpdate(hmModelDatasetMppingInt);
		JSONOuter().doOutSuccessMsg(getOut(), "数据保存成功", hmModelDatasetMppingInt);
	}

	/**
	 * 加载数据对象
	 */
	public void load() {
		HmModelDatasetMppingInt hmModelDatasetMppingObj = hmModelDatasetMppingIntService.getById(hmModelDatasetMppingInt.getId());
		JSONOuter().doOutRecordBean(getOut(), hmModelDatasetMppingObj);
	}

	/**
	 * 分页查询
	 */
	public void pagelist() {
		IGenericPage<HmModelDatasetMppingInt> page = hmModelDatasetMppingIntService.findPageByParam(
				hmModelDatasetMppingInt,
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
		List<HmModelDatasetMppingInt> list = hmModelDatasetMppingIntService.findByParam(
				hmModelDatasetMppingInt, this.getSidx(), this.getSord());
		JSONOuter().doOutList(getOut(), list);
	}

	/**
	 * 批量删除记录
	 */
	public void delete() {
		String msg = "";

		if (ids != null && ids.length > 0){
			int s = hmModelDatasetMppingIntService.deleteByIds(ids);
			msg = "删除成功" + s + "条记录";
		} else {
			msg = "请选择要删除的记录!";
		}
		JSONOuter().doOutSuccessMsg(getOut(), msg);
	}

	/**
	 * 模型驱动，自动装配页面属性
	 */
	public HmModelDatasetMppingInt getModel() {
		hmModelDatasetMppingInt = new HmModelDatasetMppingInt();
		return hmModelDatasetMppingInt;
	}

	public void setIds(Integer[] ids) {
		this.ids = ids;
	}

	public void setUploadAttachmentIds(String uploadAttachmentIds) {
		this.uploadAttachmentIds = uploadAttachmentIds;
	}

}
