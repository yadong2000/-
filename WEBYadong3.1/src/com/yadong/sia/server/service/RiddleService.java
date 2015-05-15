package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.util.page.Page;

public interface RiddleService {

	void update(Riddle riddle);

	Riddle getById(String id);

	void regedit(Riddle riddle);

	Page findPageByParam1(Riddle riddle, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	List<Riddle> findByParam(Riddle riddle, String sidx, String sord);

	int deleteByIds(String[] ids);

	//查询谜语关联的评论与回复以及用户
	List<Riddle> findPageByParamByRiddle();
	//查询谜语关联的评论与回复以及用户 分页查找
	Page findPageByParamByRiddleByPage(Integer page, Integer rows);

}
