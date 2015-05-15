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

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.HmModelDatasetMppingDao;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.util.page.IGenericPage;

/**
 * @ClassName: HmModelDatasetMppingServiceImpl
 * @Description: HmModelDatasetMpping服务实现类
 *
 */
@Service("hmModelDatasetMppingService")
public class HmModelDatasetMppingServiceImpl implements HmModelDatasetMppingService {
	@Autowired
	private HmModelDatasetMppingDao hmModelDatasetMppingDao;

	
	public HmModelDatasetMpping getById(String id) {
		return hmModelDatasetMppingDao.getById(id);
	}

	
	public Integer deleteByIds(String[] ids) {
		return hmModelDatasetMppingDao.deleteByIds(ids);

	}

	
	public void save(HmModelDatasetMpping ob) {
		hmModelDatasetMppingDao.save(ob);
	}

	
	public void update(HmModelDatasetMpping ob) {
		hmModelDatasetMppingDao.update(ob);
	}

	
	public void saveOrUpdate(HmModelDatasetMpping ob) {
		if (ob != null) {
			// 如果ID不为空说明是修改的实例，为更新操作
			if (StringUtils.isNotEmpty(ob.getId())) {
				hmModelDatasetMppingDao.update(ob);
			} else {
				hmModelDatasetMppingDao.save(ob);
			}
		}
	}

	
	public IGenericPage<HmModelDatasetMpping> findPageByParam(
			HmModelDatasetMpping param,
			int currentPage,
			int rows,
			String sort,
			String dir) {
		return hmModelDatasetMppingDao.findPageBy(
				wrapParams(param), currentPage, rows, sort, dir);
	}

	
	public Integer getCountByParam(HmModelDatasetMpping param) {
		return hmModelDatasetMppingDao.getCountBy(wrapParams(param));
	}

	
	public List<HmModelDatasetMpping> findByParam(
			HmModelDatasetMpping param,
			String sort,
			String dir) {
		return hmModelDatasetMppingDao.findListBy(
				wrapParams(param), sort, dir);
	}

	private HmModelDatasetMpping wrapParams(HmModelDatasetMpping param) {
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


	@Override
	public User findByName(String username) {
		// TODO Auto-generated method stub
		return null;
	}

}
