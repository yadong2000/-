package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

public interface RolesService {
	
	
	public String  regedit(Roles Role);

	public Roles login(String username, String password);

	public Roles getById(String id);

	public IGenericPage<User> findPageByParam(
			Roles user, Integer page,
			Integer rows, String sidx, String sord);

	public List<Roles> findByParam(Roles user, String sidx,
			String sord);

	public int deleteByIds(String[] ids);

	public Page findPageByParam1(Roles user, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	public void update(Roles role);
	

}
