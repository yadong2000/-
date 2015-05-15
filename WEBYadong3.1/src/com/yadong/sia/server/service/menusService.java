package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

public interface menusService {
	
	
	public String  regedit(Menus menus);

	public User login(String username, String password);

	public Menus getById(String id);

	public IGenericPage<Menus> findPageByParam(
			Menus menus, Integer page,
			Integer rows, String sidx, String sord);

	public List<Menus> findByParam(Menus menus, String sidx,
			String sord);

	public int deleteByIds(String[] ids);

	public Page findPageByParam1(Menus menus, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	public void update(Menus menus);

	public List<Menus> findAll();
	


}
