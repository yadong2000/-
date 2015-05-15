package com.yadong.sia.server.dao;

import java.io.Serializable;
import java.util.List;

public interface BaseDao<T>  extends Serializable {

	//增删改查
	
	
	public Integer save(T t);
	

	/**
	 * 根据id删除
	 */
	public void delete(Integer id);
	
	/**
	 * 根据id修改
	 */
	public void update(T entity);
	
	/**
	 * 根据id查询
	 */
	public T getById(Long id);
	
	/**
	 * 一次查询多个对象
	 */
	public List<T> getByIds(Integer [] ids);
	
	/**
	 * 查询所有
	 */
	public List<T> findAll();
	
	
}
