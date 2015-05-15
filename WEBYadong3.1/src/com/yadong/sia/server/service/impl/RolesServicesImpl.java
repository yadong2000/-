package com.yadong.sia.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.RolesDao;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.RolesService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

@Service
public class RolesServicesImpl implements RolesService {

	
	@Autowired
	private RolesDao roleDao;

	@Override
	public String regedit(Roles Role) {
		// TODO Auto-generated method stub
		System.out.println("");
		try{
			
			@SuppressWarnings("unused")
			Integer save = roleDao.save(Role);
		}catch(Exception e){
			e.printStackTrace();
		}
		return "save";
	}
 

	@Override
	public Roles getById(String id) {
		// TODO Auto-generated method stub
		return null;
	}
 

	 

	@Override
	public int deleteByIds(String[] ids) {
		// TODO Auto-generated method stub
		return roleDao.deleteByIds(ids);
	}

	@Override
	public Page findPageByParam1(Roles user, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		Integer totalCount = roleDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();
try{
	
	List<Roles> list = roleDao.getPage(startNum, endNum);
	
	pages.setList(list);
}catch(Exception e){
	e.printStackTrace();
}
		//
		
		return pages;
	}

	@Override
	public void update(Roles role) {
		// TODO Auto-generated method stub
		roleDao.update(role);
	}

	@Override
	public Roles login(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public IGenericPage<User> findPageByParam(Roles user, Integer page,
			Integer rows, String sidx, String sord) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public List<Roles> findByParam(Roles user, String sidx, String sord) {
		// TODO Auto-generated method stub
		return null;
	}
	
	 

}
