package com.yadong.sia.server.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Comment {
  
    private Integer commentId;
    private Integer riddleId;
    private String commentCon;
    private Integer userId;
    private Date createtime;
    private String ipaddress;
    private String userName;
    public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	private Integer deletedid;
    private Integer  parentId;

 	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public Integer getCommentId() {
        return commentId;
    }
    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }
    public Integer getRiddleId() {
        return riddleId;
    }
    public void setRiddleId(Integer riddleId) {
        this.riddleId = riddleId;
    }
    public String getCommentCon() {
        return commentCon;
    }
    public void setCommentCon(String commentCon) {
        this.commentCon = commentCon;
    }
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public Date getCreatetime() {
        return createtime;
    }
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    public String getIpaddress() {
        return ipaddress;
    }
    public void setIpaddress(String ipaddress) {
        this.ipaddress = ipaddress;
    }
    public Integer getDeletedid() {
        return deletedid;
    }
    public void setDeletedid(Integer deletedid) {
        this.deletedid = deletedid;
    }
}