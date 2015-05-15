package com.yadong.sia.server.dao;

import java.util.List;

import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;

public interface MenusDao  extends IBaseGenericDAO<Menus, java.lang.String>{
	
	//、、 UserDao extends IBaseGenericDAO<User, java.lang.String>
	public   String   regedit(Menus menus);

	public User login(String username, String password);

	public Integer getTotalCount();

	public List<Menus> getPage(int startNum, int endNum);

	public List<Menus> selectAllMenus();
	  

}
