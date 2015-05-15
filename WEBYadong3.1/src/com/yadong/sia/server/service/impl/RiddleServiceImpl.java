package com.yadong.sia.server.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.RiddleDao;
import com.yadong.sia.server.dao.UserDao;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.RiddleService;
import com.yadong.sia.server.util.page.Page;

@Service
public class RiddleServiceImpl implements RiddleService {

	@Autowired
	private RiddleDao riddleDao;

	@Override
	public void update(Riddle riddle) {
		// TODO Auto-generated method stub
		riddleDao.update(riddle);
	}

	@Override
	public Riddle getById(String id) {
		// TODO Auto-generated method stub
		return riddleDao.getById(id);
	}

	@Override
	public void regedit(Riddle riddle) {
		// TODO Auto-generated method stub
		riddleDao.regedit(riddle);
	}

	@Override
	public Page findPageByParam1(Riddle riddle, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		// TODO Auto-generated method stub
		// 获取总页数
		Integer totalCount = riddleDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();

		List<Riddle> list = riddleDao.getPage(startNum, endNum);
		pages.setList(list);

		// Riddle map = (Riddle) riddleDao.getRiddleAndCommentAndUser(startNum,
		// endNum);//new HashMap<String,String>();

		return pages;
	}

	@Override
	public List<Riddle> findByParam(Riddle riddle, String sidx, String sord) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteByIds(String[] ids) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Riddle> findPageByParamByRiddle() {
		// TODO Auto-generated method stub

		List<Riddle> list = riddleDao.getRiddleAndCommentAndUser();// new
																	// HashMap<String,String>();
		return list;
	}

	@Override
	public Page findPageByParamByRiddleByPage(Integer page, Integer rows) {

		try {
			// 获取总页数
			Integer totalCount = riddleDao.getTotalCount();
			Page pages = new Page(page.intValue(), totalCount.intValue(),
					rows.intValue());
			int startNum = pages.getStartNum();
			int endNum = pages.getEndNum();
			int totalPage = pages.getTotalPage();
			List<Riddle> list = riddleDao.getRiddleAndCommentAndUserByPage(
					startNum, endNum);// new HashMap<String,String>();
			pages.setList(list);
			return pages;
		} catch (Exception e) {
		        e.printStackTrace();
		}
		return null;
	}

}
