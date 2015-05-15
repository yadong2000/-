package com.yadong.sia.server.service;

import java.util.List;

import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.util.page.Page;

public interface ReplayService {
//	void update(replay replay);

	replay getById(String id);
	
	List <replay>  getComList(String id);

	List<replay> save(replay Replay, String c_id);

	Page findPageByParam1(replay Replay, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2);

	List<replay> findByParam(replay Replay, String sidx, String sord);

	int deleteByIds(String[] ids);

	Page getComListByPage(Integer page, Integer rows, String userId);

	List<replay> selectReplayById(String riddleId);
}
