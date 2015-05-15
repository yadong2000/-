package com.yadong.sia.server.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;
@Repository
public interface RiddleDao  extends IBaseGenericDAO<Riddle, java.lang.String>{

	public   String   regedit(Riddle menus);

	//public Riddle login(String username, String password);

	public Integer getTotalCount();

	public List<Riddle> getPage(int startNum, int endNum);

	public List<Riddle> getRiddleAndCommentAndUser();
 //分页查找
	public List<Riddle> getRiddleAndCommentAndUserByPage(Integer page, Integer rows);
	
	
	
}
