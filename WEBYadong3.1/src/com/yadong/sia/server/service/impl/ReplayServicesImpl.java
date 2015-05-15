package com.yadong.sia.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yadong.sia.server.dao.MenusDao;
import com.yadong.sia.server.dao.ReplayDao;
import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.service.ReplayService;
import com.yadong.sia.server.util.page.Page;

@Service
public class ReplayServicesImpl implements ReplayService {
	
	@Autowired
	private ReplayDao replayDao;


/*	@Override
	public void update(replay replay1) {
		
		replayDao.update(replay1);

	}*/

	@Override
	public replay getById(String id) {
		
		return 	replayDao.getById(id);
	}

	@Override
	public List<replay> getComList(String id) {
		
		return replayDao.getComList(id) ;
	}

	@Override
	public List<replay> save(replay Replay, String c_id) {
		
		return replayDao.save(Replay,  c_id);
	}

	@Override
	public Page findPageByParam1(replay Replay, Integer page, Integer rows,
			String uploadAttachmentIds, String uploadAttachmentIds2) {
		
		return null;
	}

	@Override
	public List<replay> findByParam(replay Replay, String sidx, String sord) {
		
		return null;
	}

	@Override
	public int deleteByIds(String[] ids) {
		
		return 0;
	}

	@Override
	public Page getComListByPage(Integer page, Integer rows, String userId) {
		
		return null;
	}

	@Override
	public List<replay> selectReplayById(String riddleId) {
		
		return replayDao.getComList(riddleId);
	}

}
