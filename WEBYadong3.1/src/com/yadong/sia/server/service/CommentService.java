package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.util.page.Page;

public interface CommentService {
	void update(Comment comment);

	Comment getById(String id);
	List <Comment>  getComList(String id);

	List<Comment> regedit(Comment comment, String c_id);

	Page findPageByParam1(Comment comment, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	List<Comment> findByParam(Comment comment, String sidx, String sord);

	int deleteByIds(String[] ids);

	Page getComListByPage(Integer page, Integer rows, String userId);

	List<Comment> selectCommentById(String riddleId);

	int getComByRiddleId(Integer riddleId);
}
