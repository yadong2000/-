package com.yadong.sia.server.action;

import org.springframework.security.authentication.encoding.Md5PasswordEncoder;

import com.yadong.sia.server.domain.User;

public class TestMd5 {
	
	public static void main(String[] args) {
		
		Md5PasswordEncoder md5 = new Md5PasswordEncoder();
		User user = new User ();
		user.setPassword((md5.encodePassword("password","111111")));
		System.out.println("password="+user.getPassword());
	
	}

}
