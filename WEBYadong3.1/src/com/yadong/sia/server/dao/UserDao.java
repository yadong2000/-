package com.yadong.sia.server.dao;

import java.util.List;

import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;

public interface UserDao extends IBaseGenericDAO<User, java.lang.String>{
	
	
	public   String   regedit(User user);

	public User login(String username, String password);

	public Integer getTotalCount();

	public List<User> getPage(int startNum, int endNum);

	public User getUser(String name, String pass);

	public User getUserByName(String username);

}
