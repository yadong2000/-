package com.yadong.sia.server.dao.impl;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;

import com.yadong.sia.server.dao.BaseDao;

public class IBaseDaoImpl<T>  extends SqlSessionDaoSupport implements BaseDao<T> {

	
private Class<T> clazz;
//	
//	public IBaseDaoImpl() {
//		//获得实体类型
//		ParameterizedType genericSuperclass = (ParameterizedType) this.getClass().getGenericSuperclass();//获得真正的父类
//		Type[] types = genericSuperclass.getActualTypeArguments();
//		clazz = (Class<T>) types[0];
//	}
//	
	@Autowired(required = false)
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory){
		super.setSqlSessionFactory(sqlSessionFactory);
	}
	

	public static final String SQLNAME_SEPARATOR = ".";
	public static final String SQL_SAVE = "save";   
	public static final String SQL_UPDATE = "update";   
	public static final String SQL_GETBYID = "getById";
	public static final String SQL_DELETEBYID = "deleteById";
	public static final String SQL_DELETEBYIDS = "deleteByIds";
	public static final String SQL_FINDPAGEBY = "findPageBy";
	public static final String SQL_FINDLISTBY = "findListBy";
	public static final String SQL_GETCOUNTBY = "getCountBy";
	 
	@Override
	public Integer save(T t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(T entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public T getById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<T> getByIds(Integer[] ids) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<T> findAll() {
		
		return 	this.getSqlSession().selectList(" com.creditease.sia.server.domain.HmModelDatasetMpping.fandAll");
	
	}

}
