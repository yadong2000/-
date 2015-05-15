package com.yadong.sia.server.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Riddle {
    private Integer riddleId;

    private String riddleName;

    private String riddleSide;

    private String riddleBottom;

    private String riddleConLeavl;

    private Integer riddleHot;

    private String riddleImage;
                
    private String riddleTime;

    private String riddleTip;
                       
    private String      riddleUserName ;
    private Integer   riddleType ;
    private Integer  riddleCount ;
	 
    public String getRiddleUserName() {
		return riddleUserName;
	}

	public void setRiddleUserName(String riddleUserName) {
		this.riddleUserName = riddleUserName;
	}

	public Integer getRiddleType() {
		return riddleType;
	}

	public void setRiddleType(Integer riddleType) {
		this.riddleType = riddleType;
	}

	public Integer getRiddleCount() {
		return riddleCount;
	}

	public void setRiddleCount(Integer riddleCount) {
		this.riddleCount = riddleCount;
	}
	//评论属性
  	private Integer id;
  	private String name;
  	private Integer age;
  	private String password;
  	private Integer sex;
  	private String mail;
  	private String address;
  	private String work;
  	private String phone;
  	private String createDate;
  	private String birthDate;

  	 //用户属性

    private Integer commentId;

   // private Integer riddleId;
    private String commentCon;
    private Integer userId;
    private Date createtime;
    private String ipaddress;

    public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
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
    private Integer deletedid;
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public List<Comment> getCommentList() {
		return commentList;
	}

	public void setCommentList(List<Comment> commentList) {
		this.commentList = commentList;
	}

//	public List<User> getUserList() {
//		return UserList;
//	}
//
//	public void setUserList(List<User> userList) {
//		UserList = userList;
//	}

	//用户属性
	// List <User> UserList= new ArrayList<User>();
    ///
    List <Comment> commentList= new ArrayList<Comment>();
    
    public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	List <User> userList= new ArrayList<User>();
    
    
    public List<Comment> getRiddleList() {
		return commentList;
	}

	public void setRiddleList(List<Comment> commentList) {
		this.commentList = commentList;
	}
//////
	public Integer getRiddleId() {
        return riddleId;
    }

    public void setRiddleId(Integer riddleId) {
        this.riddleId = riddleId;
    }

    public String getRiddleName() {
        return riddleName;
    }

    public void setRiddleName(String riddleName) {
        this.riddleName = riddleName;
    }
    public String getRiddleSide() {
        return riddleSide;
    }

    public void setRiddleSide(String riddleSide) {
        this.riddleSide = riddleSide;
    }
    public String getRiddleBottom() {
        return riddleBottom;
    }

    public void setRiddleBottom(String riddleBottom) {
        this.riddleBottom = riddleBottom;
    }

    public String getRiddleConLeavl() {
        return riddleConLeavl;
    }

    public void setRiddleConLeavl(String riddleConLeavl) {
        this.riddleConLeavl = riddleConLeavl;
    }

    public Integer getRiddleHot() {
        return riddleHot;
    }

    public void setRiddleHot(Integer riddleHot) {
        this.riddleHot = riddleHot;
    }
    public String getRiddleImage() {
        return riddleImage;
    }

    public void setRiddleImage(String riddleImage) {
        this.riddleImage = riddleImage;
    }

    public String getRiddleTime() {
        return riddleTime;
    }

    public void setRiddleTime(String riddleTime) {
        this.riddleTime = riddleTime;
    }

    public String getRiddleTip() {
        return riddleTip;
    }

    public void setRiddleTip(String riddleTip) {
        this.riddleTip = riddleTip;
    }
}