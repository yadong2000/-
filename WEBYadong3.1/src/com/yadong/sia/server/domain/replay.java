package com.yadong.sia.server.domain;

import java.util.Date;

//回复列表
public class replay {
	
//	private Integer replayid;
//	 
//	private Date credittime;
//	 
//	private String ip;
// 
//	private String replaycontext;
//	 
//	private Integer deleteid;
// 
//	private Integer commentid;
//	 
//	private Integer userid;
// 
//	public Integer getReplayid() {
//		return replayid;
//	}
//	 
//	public void setReplayid(Integer replayid) {
//		this.replayid = replayid;
//	}
//	 
//	public Date getCredittime() {
//		return credittime;
//	}
// 
//	public void setCredittime(Date credittime) {
//		this.credittime = credittime;
//	}
// 
//	public String getIp() {
//		return ip;
//	}
// 
//	public void setIp(String ip) {
//		this.ip = ip;
//	}
// 
//	public String getReplaycontext() {
//		return replaycontext;
//	}
// 
//	public void setReplaycontext(String replaycontext) {
//		this.replaycontext = replaycontext;
//	}
// 
//	public Integer getDeleteid() {
//		return deleteid;
//	}
// 
//	public void setDeleteid(Integer deleteid) {
//		this.deleteid = deleteid;
//	}
// 
//	public Integer getCommentid() {
//		return commentid;
//	}
// 
//	public void setCommentid(Integer commentid) {
//		this.commentid = commentid;
//	}
// 
//	public Integer getUserid() {
//		return userid;
//	}
// 
//	public void setUserid(Integer userid) {
//		this.userid = userid;
//	}
	private Date creditTime;
	private Integer  replayId;
	//IP
	private String IP;
	private String replayContext;
	private String deleteId;
	private Integer commentId;
	private Integer userId;
	private String userName;
	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getCommentId() {
		return commentId;
	}
	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getDeleteId() {
		return deleteId;
	}
	public void setDeleteId(String deleteId) {
		this.deleteId = deleteId;
	}
	public Date getCreditTime() {
		return creditTime;
	}
	public void setCreditTime(Date creditTime) {
		this.creditTime = creditTime;
	}
	public Integer getReplayId() {
		return replayId;
	}
	public void setReplayId(Integer replayId) {
		this.replayId = replayId;
	}
	public String getIP() {
		return IP;
	}
	public void setIP(String iP) {
		IP = iP;
	}
	public String getReplayContext() {
		return replayContext;
	}
	public void setReplayContext(String replayContext) {
		this.replayContext = replayContext;
	}
	 

}
