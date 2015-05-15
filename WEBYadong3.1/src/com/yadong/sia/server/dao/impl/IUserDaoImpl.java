package com.yadong.sia.server.dao.impl;

import java.util.List;

import com.yadong.sia.server.dao.BaseDao;
import com.yadong.sia.server.dao.IUserDao;
import com.yadong.sia.server.domain.User;

public class IUserDaoImpl<User> extends IBaseDaoImpl<User> implements IUserDao<User> {

	
	
	public static void main(String[] args) {
		System.out.println("");
		IUserDaoImpl iUser = new IUserDaoImpl();
		
		
		List findAll = iUser.findAll();
		System.out.println(""+findAll.size());
	}
}


