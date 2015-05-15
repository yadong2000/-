package com.yadong.sia.server.dao;

import java.util.List;

import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;

public interface RolesDao  extends IBaseGenericDAO<Roles, java.lang.String>{
	
	//、、 UserDao extends IBaseGenericDAO<User, java.lang.String>
	public   String   regedit(Roles roles);

	public User login(String username, String password);

	public Integer getTotalCount();

	public List<Roles> getPage(int startNum, int endNum);
	  

}
