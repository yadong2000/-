package com.yadong.sia.server.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yadong.sia.server.dao.CommentDao;
import com.yadong.sia.server.dao.RiddleDao;
import com.yadong.sia.server.dao.UserDao;
import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;

@Repository
public class CommentDaoImpl extends
		MybatisBaseGenericDAOImpl<Comment, java.lang.String> implements
		CommentDao

{
	String ns = "xiao_user";
	 
	@SuppressWarnings("unused")
	@Override
	public List<Comment> regedit(Comment ob,String c_id) {
		List <Comment> comlist = new  ArrayList<Comment>();  
		Map <String ,Integer> map = new HashMap<String, Integer>();
		try {
			//如果在保存之前评论ID不为空 ， 保存的是回复
//			if(ob.getCommentId()!=null && !"".equals(ob.getCommentId())){
//				map.put("C_id", Integer.parseInt(c_id));
//				map.put("userid",  ob.getUserId() );
//				map.put("parentId",  ob.getCommentId() );
//			    this.getSqlSession().insert("insertRiddleAndCommentReplay", map);
//			    return comlist;
//			}
			//保存pinlu
			Integer save = super.save(ob);
			System.out.println(""+save);
			map.put("commentId", ob.getCommentId());
			map.put("C_id", Integer.parseInt(c_id));
			map.put("userid",  ob.getUserId() );
			map.put("parentId",  ob.getCommentId() );
		    this.getSqlSession().insert("insertRiddleAndComment", map);
		    Integer riddleId=map.get("C_id");
		    List<Comment> selectList = this.getSqlSession().selectList("selectCommentByRiddleId",riddleId);
            for (Comment riddle : selectList) {
            	Integer commentId  = riddle.getCommentId();
                Comment  com  = this.getSqlSession().selectOne("selectCommentByRiddleIdToList",commentId);
                comlist.add(com);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
            return comlist;
		 
	}

	@Override
	public Integer getTotalCount() {
		Integer selectOne = null;
		try {

			selectOne = super.getSqlSession().selectOne(
					getDefaultSqlNamespace() + ".queryTotalCount");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return selectOne;
	}

	@Override
	public List<Comment> getPage(int startNum, int endNum) {
		Map map = new HashMap();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		List<Comment> selectList = super.getSqlSession().selectList(
				getDefaultSqlNamespace() + ".queryPage", map);
		return selectList;
	}

	@Override
	public List<Comment> getComListById(String id) {
		List<Comment> selectList = null;
		try {
			selectList = super.getSqlSession().selectList(
					getDefaultSqlNamespace() + ".getComListById",Integer.parseInt(id));
		} catch (Exception e) {
			e.printStackTrace();

		}
		return selectList;
	}

	@Override
	public Integer save(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> selectCommentById(String riddleId1) {
		Integer riddleId = new Integer(riddleId1);
		List <Comment> comlist = new  ArrayList<Comment>(); 
	    List<Comment> selectList = this.getSqlSession().selectList("selectCommentByRiddleId",riddleId);
        for (Comment riddle : selectList) {
        	Integer commentId  = riddle.getCommentId();
           Comment  com  = this.getSqlSession().selectOne("selectCommentByRiddleIdToList",commentId);
           comlist.add(com);
		}
	    System.out.println("===============");
		return comlist;
	}

	@Override
	public Integer getTotalCountByRiddleId(Integer riddleId) {
		// TODO Auto-generated method stub
		int riddleCount = this.getSqlSession().selectOne("selectCommentCountByRiddleId",riddleId);
		return riddleCount;
	}

	/*@Override
	public Integer save(Map<String, String> map) {
		int insert = this.getSqlSession().insert("insertRiddleAndComment", map);
		return Integer.valueOf(insert);
	}
	*/

}
