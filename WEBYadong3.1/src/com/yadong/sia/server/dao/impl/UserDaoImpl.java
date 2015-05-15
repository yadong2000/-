package com.yadong.sia.server.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yadong.sia.server.dao.UserDao;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;
@Repository
public class UserDaoImpl 
extends MybatisBaseGenericDAOImpl<User, java.lang.String>
implements
		UserDao 
		
		{
String ns="xiao_user";
	@Override
	public String regedit(User ob) {
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
		Integer selectOne = null;
		try{
			
			 selectOne= super.getSqlSession().selectOne(getDefaultSqlNamespace()+".queryTotalCount");
		}catch(Exception e){
			e.printStackTrace();
		}
		return selectOne;
	}

	@Override
	public List<User> getPage(int startNum, int endNum) {
		Map map = new HashMap();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		List<User> selectList = super.getSqlSession().selectList(getDefaultSqlNamespace()+".queryPage", map);
		for (User user : selectList) {
			
			//user.getCreateDate();
			
		}
		return selectList;
	}

	@Override
	public User getUser(String name, String pass) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("name", name);
		map.put("pass", pass);
		User user = super.getSqlSession().selectOne(getDefaultSqlNamespace()+".getUser", map);
		//User user = (User) super.getSqlSession().selectList(getDefaultSqlNamespace()+".getUser", map);
		
		return user;
	}

	@Override
	public Integer save(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserByName(String username) {
		User user = super.getSqlSession().selectOne(getDefaultSqlNamespace()+".getUserByName", username);
		return user;
	}

}
