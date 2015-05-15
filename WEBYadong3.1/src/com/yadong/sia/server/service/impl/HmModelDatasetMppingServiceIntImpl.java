/**   
 * @Title: HmModelDatasetMppingServiceImpl.java 
 * @Package com.test.zsj.user.dao 
 * @Copyright: Copyright (c) 2001-- 2013 北京东方正通科技有限公司
 * @author Harmony
 * @date - 2013-03-06
 * @version V1.0   
 */
package com.yadong.sia.server.service.impl;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.HmModelDatasetMppingIntDao;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.HmModelDatasetMppingInt;
import com.yadong.sia.server.service.HmModelDatasetMppingIntService;
import com.yadong.sia.server.util.page.IGenericPage;

/**
 * @ClassName: HmModelDatasetMppingServiceImpl
 * @Description: HmModelDatasetMpping服务实现类
 *
 */
@Service("hmModelDatasetMppingIntService")
public class HmModelDatasetMppingServiceIntImpl implements HmModelDatasetMppingIntService {
	@Autowired
	private HmModelDatasetMppingIntDao hmModelDatasetMppingIntDao;

	
	public HmModelDatasetMppingInt getById(Integer id) {
		return hmModelDatasetMppingIntDao.getById(id);
	}

	
	public Integer deleteByIds(Integer[] ids) {
		return hmModelDatasetMppingIntDao.deleteByIds(ids);

	}

	
	public void save(HmModelDatasetMppingInt ob) {
		hmModelDatasetMppingIntDao.save(ob);
	}

	
	public void update(HmModelDatasetMppingInt ob) {
		hmModelDatasetMppingIntDao.update(ob);
	}

	
	public void saveOrUpdate(HmModelDatasetMppingInt ob) {
		if (ob != null) {
			// 如果ID不为空说明是修改的实例，为更新操作
			if (ob.getId()!=null && ob.getId()>0) {
				hmModelDatasetMppingIntDao.update(ob);
			} else {
				hmModelDatasetMppingIntDao.save(ob);
			}
		}
	}

	
	public IGenericPage<HmModelDatasetMppingInt> findPageByParam(
			HmModelDatasetMppingInt param,
			int currentPage,
			int rows,
			String sort,
			String dir) {
		return hmModelDatasetMppingIntDao.findPageBy(
				wrapParams(param), currentPage, rows, sort, dir);
	}

	
	public Integer getCountByParam(HmModelDatasetMppingInt param) {
		return hmModelDatasetMppingIntDao.getCountBy(wrapParams(param));
	}

	
	public List<HmModelDatasetMppingInt> findByParam(
			HmModelDatasetMppingInt param,
			String sort,
			String dir) {
		return hmModelDatasetMppingIntDao.findListBy(
				wrapParams(param), sort, dir);
	}

	private HmModelDatasetMppingInt wrapParams(HmModelDatasetMppingInt param) {
		if(param != null){
			if(StringUtils.isNotEmpty(param.getModelId())){
				param.setModelId("%"+param.getModelId()+"%");
			}
			if(StringUtils.isNotEmpty(param.getDatasetIds())){
				param.setDatasetIds("%"+param.getDatasetIds()+"%");
			}
			if(StringUtils.isNotEmpty(param.getMappingInfo())){
				param.setMappingInfo("%"+param.getMappingInfo()+"%");
			}
			if(StringUtils.isNotEmpty(param.getRemark())){
				param.setRemark("%"+param.getRemark()+"%");
			}
			if(StringUtils.isNotEmpty(param.getType())){
				param.setType("%"+param.getType()+"%");
			}
		}
		return param;
	}

}
