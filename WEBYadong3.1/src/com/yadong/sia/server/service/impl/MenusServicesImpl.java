package com.yadong.sia.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.MenusDao;
import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.menusService;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

@Service
public class MenusServicesImpl implements menusService {

	@Autowired
	private MenusDao menuDao;

	@Override
	public String regedit(Menus menus) {
		return menuDao.regedit(menus);

	}

	@Override
	public User login(String username, String password) {
		return menuDao.login(username, password);
	}

	@Override
	public Menus getById(String id) {
		Menus byId = menuDao.getById(id);

		return byId;
	}

	@Override
	public IGenericPage<Menus> findPageByParam(Menus menus, Integer page,
			Integer rows, String sidx, String sord) {

		// 获取总页数
		Integer totalCount = menuDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();

		List<Menus> list = menuDao.getPage(startNum, endNum);

		return null;
	}

	@Override
	public List<Menus> findByParam(Menus menus, String sidx, String sord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteByIds(String[] ids) {
		// TODO Auto-generated method stub
		Integer deleteByIds = menuDao.deleteByIds(ids);
		return deleteByIds.intValue();
	}

	@Override
	public Page findPageByParam1(Menus menus, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		Integer totalCount = menuDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();
		try {

			List<Menus> list = menuDao.getPage(startNum, endNum);

			pages.setList(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		//

		return pages;
	}

	@Override
	public void update(Menus menus) {
		// TODO Auto-generated method stub
		Integer update = menuDao.update(menus);
		System.out.println("sad" + update);

	}

	@Override
	public List<Menus> findAll() {
	
		return 	menuDao.selectAllMenus();
	}

}
