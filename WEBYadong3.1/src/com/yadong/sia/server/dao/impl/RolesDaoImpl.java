package com.yadong.sia.server.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.yadong.sia.server.dao.RolesDao;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;
import com.yadong.sia.server.util.page.IGenericPage;

@Repository
public class RolesDaoImpl  extends MybatisBaseGenericDAOImpl<Roles, java.lang.String> implements RolesDao {

String ns="xiao_roles";
@Override
public String regedit(Roles ob) {
	// TODO Auto-generated method stub
	 try{
		 Integer save = super.save(ob);
		 if(save!=null){
			 return "sucess";
		 }
	 
	 }catch(Exception e){
		 e.printStackTrace();
	 }
		
		 return "error";
}

@Override
public User login(String username, String password) {
Map<String,String>  map =  new HashMap<String,String>();
map.put(username, password);
return	super.getSqlSession().selectOne("login", map);
	
}

@Override
public Integer getTotalCount() {
	// TODO Auto-generated method stub[p
	Integer selectOne = null;
	try{
		
		 selectOne= super.getSqlSession().selectOne(getDefaultSqlNamespace()+".queryTotalCount1");
	}catch(Exception e){
		e.printStackTrace();
	}
	return selectOne;
}

@Override
public List<Roles> getPage(int startNum, int endNum) {
	Map map = new HashMap();
	map.put("startNum", startNum);
	map.put("endNum", endNum);
	List<Roles> selectList = super.getSqlSession().selectList(getDefaultSqlNamespace()+".queryPage", map);
	 
	return selectList;
}

@Override
public Integer save(Map<String, String> map) {
	// TODO Auto-generated method stub
	return null;
}



}
