package com.yadong.sia.server.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.yadong.sia.server.dao.ReplayDao;
import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;
import com.yadong.sia.server.util.page.IGenericPage;
@Repository
public class ReplayDaoImpl extends MybatisBaseGenericDAOImpl< replay , java.lang.String> implements ReplayDao {

	@Override
	public Integer save(Map<String, String> map) {
		
		return null;
	}

	@Override
	public replay getById(String id) {
		
		return null;
	}

	@Override
	public Integer deleteById(String id) {
		
		return null;
	}

	@Override
	public Integer deleteByIds(String[] ids) {
		
		return null;
	}

	@Override
	public IGenericPage<replay> findPageBy(replay param, int pageNo,
			int pageSize, String sort, String dir) {
		
		return null;
	}

	@Override
	public Integer getCountBy(replay param) {
		
		return null;
	}

	@Override
	public List<replay> findListBy(replay param, String sort, String dir) {
		
		return null;
	}

	@Override
	public List<replay> findListBy(String param, String sort, String dir,
			replay pa) {
		
		return null;
	}

	@Override
	public IGenericPage<replay> findPageBy(Map<String, Object> params,
			int pageNo, int pageSize, String sort, String dir) {
		
		return null;
	}

	@Override
	public IGenericPage<replay> findPageBy(Map<String, Object> params,
			PageBounds pageBounds) {
		
		return null;
	}

	@Override
	public List<replay> getComList(String integer1) {
		Integer integer = new Integer(integer1);
		List<replay> replayList = this.getSqlSession().selectList("selectReplayById", integer);
		return replayList;
	}

	@Override
	public List<replay> save(replay replay, String c_id) {
		try{
			System.out.println("ddddddddd");
			// this.save(this.getDefaultSqlNamespace()+" .save",replay);
			 this.getSqlSession().insert(this.getDefaultSqlNamespace()+".save", replay);
		//	Integer save = super.save(ob);d
			//返回回复主键，保存至中间表
			Map <String ,String> map = new HashMap<String, String>();
			map.put("replayId", replay.getReplayId().toString());
			if(replay.getUserId()!=null){
				map.put("userId", replay.getUserId().toString());
			}
			map.put("commentId", replay.getCommentId().toString());
			//保存至中间表
		   this.getSqlSession().insert("insertSelective",map);
			//根据评论 查询 回复内容
			List<replay> replayList = this.getSqlSession().selectList("selectReplayById", replay.getCommentId());
			return replayList;
		}catch(Exception e){
			e.printStackTrace();
		}
	return null;
	}

	
}
