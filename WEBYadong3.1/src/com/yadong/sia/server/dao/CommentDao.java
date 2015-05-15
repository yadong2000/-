package com.yadong.sia.server.dao;

import java.util.List;

import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;

public interface CommentDao extends IBaseGenericDAO<Comment, java.lang.String>{
	
	public   List<Comment>   regedit(Comment menus, String c_id);

	//public Riddle login(String username, String password);

	public Integer getTotalCount();

	public List<Comment> getPage(int startNum, int endNum);

	public List<Comment> getComListById(String id);

	public List<Comment> selectCommentById(String riddleId);

	public Integer getTotalCountByRiddleId(Integer riddleId);
	
	

}
