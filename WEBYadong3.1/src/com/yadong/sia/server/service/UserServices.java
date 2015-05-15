package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

public interface UserServices {
	
	
	public String  regedit(User user);

	public User login(String username, String password);

	public User getById(String id);

	public IGenericPage<User> findPageByParam(
			User user, Integer page,
			Integer rows, String sidx, String sord);

	public List<User> findByParam(User user, String sidx,
			String sord);

	public int deleteByIds(String[] ids);

	public Page findPageByParam1(User user, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	public void update(User user);

	public User getUser(String name, String pass);

	public User findByName(String username);
	


}
