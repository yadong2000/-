package com.yadong.sia.server.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.CommentDao;
import com.yadong.sia.server.dao.RolesDao;
import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.CommentService;
import com.yadong.sia.server.service.RolesService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;

@Service
public class CommentServicesImpl implements CommentService {

	
	@Autowired
	private CommentDao commentDao;

	@Override
	public void update(Comment riddle) {
		// TODO Auto-generated method stub
		commentDao.update(riddle);
	}

	@Override
	public Comment getById(String id) {
		// TODO Auto-generated method stub
		return commentDao.getById(id);
	}

	@Override
	public List<Comment> regedit(Comment riddle,String C_id) {
		return  commentDao.regedit(riddle,C_id);
		
	}

	@Override
	public Page findPageByParam1(Comment riddle, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		 
		// 获取总页数
				Integer totalCount = commentDao.getTotalCount();

				Page pages = new Page(page.intValue(), totalCount.intValue(),
						rows.intValue());

				int startNum = pages.getStartNum();
				int endNum = pages.getEndNum();
				int totalPage = pages.getTotalPage();

				List<Comment> list = commentDao.getPage(startNum, endNum);
				pages.setList(list);
				return pages;
	}

	@Override
	public List<Comment> findByParam(Comment comment, String sidx, String sord) {
		return null;
	}

	@Override
	public int deleteByIds(String[] ids) {
		return 0;
	}

	@Override
	public List<Comment> getComList(String id) {
		
		return commentDao.getComListById(id);
	}

	@Override
	public Page getComListByPage(Integer page, Integer rows, String userId) {
		
		Integer totalCount = commentDao.getTotalCount();

		Page pages = new Page(page.intValue(), totalCount.intValue(),
				rows.intValue());

		int startNum = pages.getStartNum();
		int endNum = pages.getEndNum();
		int totalPage = pages.getTotalPage();

		List<Comment> list = commentDao.getPage(startNum, endNum);
		pages.setList(list);
		return null;
	}

	@Override
	public List<Comment> selectCommentById(String riddleId) {
		// TODO Auto-generated method stub
		return commentDao.selectCommentById(riddleId);
	}

	@Override
	public int getComByRiddleId(Integer riddleId) {
		Integer totalCount = commentDao.getTotalCountByRiddleId(riddleId);
		
		return totalCount;
	}
	 

}
