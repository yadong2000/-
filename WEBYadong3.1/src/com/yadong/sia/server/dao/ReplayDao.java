package com.yadong.sia.server.dao;

import java.util.List;

import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.util.dao.IBaseGenericDAO;

public interface ReplayDao  extends IBaseGenericDAO<replay, java.lang.String> {

	List<replay> getComList(String id);

	List<replay> save(replay replay, String c_id);
	
	

}
