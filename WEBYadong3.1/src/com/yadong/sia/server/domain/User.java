package com.yadong.sia.server.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class User {
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

//	private List<Riddle> riddleList = new ArrayList<Riddle>() ;
//	
//	private List<Comment>commentList = new ArrayList<Comment>() ;

   //头像地址
	private String ImgUrl;
	
	public String getImgUrl() {
		return ImgUrl;
	}

	public void setImgUrl(String imgUrl) {
		ImgUrl = imgUrl;
	}

	 

	public String getCreateDate() {
	return createDate;
}

public void setCreateDate(String createDate) {
	this.createDate = createDate;
}

 

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

	public String getCreatedate() {
		return createDate;
	}

	public void setCreatedate(String createDate) {
		this.createDate = createDate;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthdate) {
		this.birthDate = birthdate;
	}
 
}