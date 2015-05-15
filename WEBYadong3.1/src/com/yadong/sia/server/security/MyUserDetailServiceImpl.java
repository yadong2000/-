package com.yadong.sia.server.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.yadong.sia.server.domain.Menus;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.service.UserServices;
 

//2
public class MyUserDetailServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserServices userServices;
	 

 
	
	//登录验证
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("username is " + username);
		//这里应该可以不用再查了
		User users = this.userServices.findByName(username);
		
		Collection<GrantedAuthority> grantedAuths = obtionGrantedAuthorities(users);
		
//		boolean enables = true;
//		boolean accountNonExpired = true;
//		boolean credentialsNonExpired = true;
//		boolean accountNonLocked = true;
//		//封装成spring security的user
//		User userdetail = new User(users.getAccount(), users.getPassword(), enables, accountNonExpired, credentialsNonExpired, accountNonLocked, grantedAuths);
//		return userdetail;
		return null;
	}
	
	//取得用户的权限
	private Set<GrantedAuthority> obtionGrantedAuthorities(User user) {
	Set<GrantedAuthority> authSet = new HashSet<GrantedAuthority>();
	/*	List<Menus> resources = new ArrayList<Menus>();
		Set<Roles> roles = user.getRoles();
		for(Roles role : roles) {
			Set<Menus> tempRes = role.getResources();
			for(Menus res : tempRes) {
				resources.add(res);
			}
		}
		for(Menus res : resources) {
			authSet.add(new GrantedAuthorityImpl(res.getName()));
		}*/
		return authSet;
	}
}
