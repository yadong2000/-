package com.yadong.sia.server.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yadong.sia.server.dao.RiddleDao;
import com.yadong.sia.server.dao.UserDao;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;
@Repository
public class RibbleDaoImpl 
extends MybatisBaseGenericDAOImpl<Riddle, java.lang.String>
implements
RiddleDao 
		
		{
String ns="xiao_user";
	@Override
	public String regedit(Riddle ob) {
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
	public List<Riddle> getPage(int startNum, int endNum) {
		Map map = new HashMap();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		List<Riddle> selectList = super.getSqlSession().selectList(getDefaultSqlNamespace()+".queryPage", map);
		return selectList;
	}



	@SuppressWarnings("unchecked")
	@Override
	public List <Riddle> getRiddleAndCommentAndUser() {
		List <Riddle> RiddleList = null ;
		try{
			RiddleList = super.getSqlSession().selectList(getDefaultSqlNamespace()+".QueryRiddleToComment");
			System.out.println("sd"+RiddleList);
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
	    return RiddleList;
	}



	@Override
	public List<Riddle> getRiddleAndCommentAndUserByPage(Integer page, Integer rows) {
		List <Riddle> RiddleList = null ;
		try{
			Map map = new HashMap();
			map.put("startNum", page);
			map.put("endNum", rows);
			RiddleList = super.getSqlSession().selectList(getDefaultSqlNamespace()+".QueryRiddleToCommentByPage",map);
			System.out.println("sd"+RiddleList);
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
	    return RiddleList;
	}



	@Override
	public Integer save(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}


}
