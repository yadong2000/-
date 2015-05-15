/**   
 * @Title: HmModelDatasetMppingService.java 
 * @Package com.test.zsj.user.dao 
 * @Copyright: Copyright (c) 2001-- 2013 北京东方正通科技有限公司
 * @author Harmony
 * @date - 2013-03-06
 * @version V1.0   
 */
package com.yadong.sia.server.service;

import java.util.List;

import org.springframework.security.core.userdetails.User;

import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.util.page.IGenericPage;



/** 
 * @ClassName: HmModelDatasetMppingService
 * @Description: HmModelDatasetMpping服务接口
 * 
 */
public interface HmModelDatasetMppingService {
	/**
	 * 根据ID获取一个HmModelDatasetMpping实例
	 * @param id HmModelDatasetMppingID
	 * @return HmModelDatasetMpping实例
	 */
	public HmModelDatasetMpping getById(String id);

	/**
	 * 批量删除
	 * @param ids 要删除的HmModelDatasetMppingID集合
	 * @return 删除成功的记录生活
	 */
	public Integer deleteByIds(String[] ids);

	/**
	 * 保持一个新增的HmModelDatasetMpping实例
	 * @param hmModelDatasetMpping HmModelDatasetMpping
	 */
	public void save(HmModelDatasetMpping hmModelDatasetMpping);

	/**
	 * 保存一个修改的HmModelDatasetMpping实例
	 * @param hmModelDatasetMpping HmModelDatasetMpping
	 */
	public void update(HmModelDatasetMpping hmModelDatasetMpping);

	/**
	 * 保存一个新增或修改的HmModelDatasetMpping实例
	 * @param hmModelDatasetMpping HmModelDatasetMpping
	 */
	public void saveOrUpdate(HmModelDatasetMpping hmModelDatasetMpping);

	/**
	 * 分页查询
	 * @param param 查询参数
	 * @param currentPage 当前页码
	 * @param rows 每页记录行数
	 * @param sort 排序字段
	 * @param dir 排序方式、降序(desc)或升序(asc)
	 * @return HmModelDatasetMpping实例集合
	 */
	public IGenericPage<HmModelDatasetMpping> findPageByParam(
			HmModelDatasetMpping param,
			int currentPage,
			int rows,
			String sort,
			String dir);

	/**
	 * 主要是配合分页查询返回总记录数
	 * @param param 主要查询参数封装在param中
	 * @return 记录数
	 */
	public Integer getCountByParam(HmModelDatasetMpping param);

	/**
	 * 不分页查询
	 * @param param 主要查询参数封装在param中
	 * @param sort 排序字段
	 * @param dir 排序方式、降序(desc)或升序(asc)
	 * @return HmModelDatasetMpping实例集合
	 */
	public List<HmModelDatasetMpping> findByParam(HmModelDatasetMpping param, String sort, String dir);

	public User findByName(String username);

}
