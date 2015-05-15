package com.yadong.sia.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.UserDao;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.page.GenericDefaultPage;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

@Service
public class UserSercvicesImpl implements UserServices {

	@Autowired
	private UserDao userDao;

	@Override
	public String regedit(User user) {
		return userDao.regedit(user);

	}

	@Override
	public User login(String username, String password) {
		// TODO Auto-generated method stub
		return userDao.login(username, password);
	}

	@Override
	public User getById(String id) {
		// TODO Auto-generated method stub
		User byId = userDao.getById(id);
		
		return byId;
	}

	@Override
	public IGenericPage<User> findPageByParam(User user, Integer page,
			Integer rows, String sidx, String sord) {

		// 获取总页数
		Integer totalCount = userDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();

		List<User> list = userDao.getPage(startNum, endNum);
		// GenericDefaultPage <User>iPage = new GenericDefaultPage<User>(page,
		// rows, totalCount);
		// iPage.getNextPageNo();
		// return userDao.findPageBy(null, page, rows, 0, 0);
		return null;
	}

	@Override
	public List<User> findByParam(User user, String sidx,
			String sord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteByIds(String[] ids) {
		// TODO Auto-generated method stub
		Integer deleteByIds = userDao.deleteByIds(ids);
		return deleteByIds.intValue();
	}

	@Override
	public Page findPageByParam1(User user, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		Integer totalCount = userDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();
try{
	
	List<User> list = userDao.getPage(startNum, endNum);
	
	pages.setList(list);
}catch(Exception e){
	e.printStackTrace();
}
		//
		
		return pages;
	}
//	@Override
//	public Page findPageByParam12(User user, Integer page, Integer rows,
//			String uploadAttachmentIds, String uploadAttachmentIds2) {
//		Integer totalCount = userDao.getTotalCount();
//
//		Page pages = new Page(page.intValue(), totalCount.intValue(),
//				rows.intValue());
//
//		int startNum = pages.getStartNum();
//		int endNum = pages.getEndNum();
//		int totalPage = pages.getTotalPage();
//try{
//	
//	List<User> list = userDao.getPage(startNum, endNum);
//	
//	pages.setList(list);
//}catch(Exception e){
//	e.printStackTrace();
//}
//		//
//		
//		return pages;
//	}
	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		Integer update = userDao.update(user);
		System.out.println("sad"+update);
		
	}

	@Override
	public User getUser(String name, String pass) {
		// TODO Auto-generated method stub
		return userDao.getUser(name,pass);
	}

	@Override
	public User findByName(String username) {
		// TODO Auto-generated method stub
		return userDao.getUserByName(username);
	}

}
