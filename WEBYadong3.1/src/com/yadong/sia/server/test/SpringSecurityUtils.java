package com.yadong.sia.server.test;
//package com.creditease.sia.server.test;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.Iterator;
//import java.util.List;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.util.Assert;
//
//import com.creditease.core.exception.BusinessException;
//import com.creditease.core.utils.Constants;
//import com.creditease.core.web.struts.Struts2Utils;
//
//public class SpringSecurityUtils {
//
//	/**
//	 * 取得当前用户的登录名, 如果当前用户未登录则返回空字符串.
//	 */
//	public static String getCurrentUserName() {
//		Authentication auth = SecurityContextHolder.getContext()
//				.getAuthentication();
//		Assert.notNull(auth, "该用户登入已过期，请重新登入");
//		return auth.getName();
//	}
//
//	/**
//	 * 取得当前用户, 返回值为SpringSecurity的User类及其子类, 如果当前用户未登录则返回null.
//	 */
//
//	public static User getCurrentUser() {
//		Object p = SecurityContextHolder.getContext().getAuthentication()
//				.getPrincipal();
//		Assert.isInstanceOf(User.class, p, "该用户登入已过期，请重新登入");
//		Assert.notNull(p, "该用户登入已过期，请重新登入");
//		return (User)p;
//	}
//	
//	/**
//	 * 取得当前用户, 返回值为是否只有一个组, 如果当前用户未登录则返回null.
//	 */
//	public static boolean isSignleGroup() {
//		Object p = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//		User user = null;
//		if (p instanceof User) {
//			user = (User) p;
//		}
//		if (null != user) {
//			if (!SpringSecurityUtils.isAdmin()) {//管理员返回true
//				String[] s = user.getGroup().split(",");
//				if(s.length == 1) {
//					return true;
//				}
//			} else {
//				return true;
//			}
//		} else {
//			throw new BusinessException("该用户登入已过期，请重新登入！");
//		}
//		return false;
//	}
//
//	/**
//	 * 获取该用户所要业务数据
//	 *
//	 * @return
//	 */
//	@SuppressWarnings("unchecked")
//	public static List<String> getAuthList() {
//		return getAuthList(Struts2Utils.getSession());
//	}
//	
//	/**
//	 * 获取该用户所要业务数据(需传入session不同系统获取session方式不一样
//	 *
//	 * @return
//	 */
//	@SuppressWarnings("unchecked")
//	public static List<String> getAuthList(HttpSession session) {
//		List<String> autList = new ArrayList<String>();
//		Object p = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//		User user = null;
//		if (p instanceof User)
//			user = (User) p;
//		if (null != user) {
//			if (!SpringSecurityUtils.isAdmin()) {
//				Object groupId = session.getAttribute(Constants.GROUP_ID);
//				HashMap<String, String> groupMap = (HashMap<String, String>)groupId;
//				if(!"-1".equals(groupMap.get(Constants.GROUP_ID))) {
//					String isShare = groupMap.get(Constants.IS_SHARE);
//					if(null == isShare || "".equals(isShare) || Constants.IS_SHARE_TRUE.equals(isShare)) {
//						autList.add(groupMap.get(Constants.GROUP_ID));
//					} else {// 组不共享则取当前员工id
//						autList.add("U_" + user.getUserId());
//					}
//				} else {// 获取所有组权限
//					String[] groupIds = groupMap.get(Constants.IS_SHARE).split(",");
//					for (String ss : groupIds) {
//						if (null != ss && ss.length() > 0) {
//							autList.add(ss);
//						}
//					}
//					autList.add("U_" + user.getUserId());
//				}
//				
//			}
//		} else {
//			throw new BusinessException("该用户登入已过期，请重新登入！");
//		}
//		return autList;
//	}
//	
//	/**
//	 * 员工是否包含管理员角色
//	 */
//	public static boolean isAdmin() {
//		Iterator<?> it = SpringSecurityUtils.getCurrentUser().getAuthorities().iterator();
//		while (it.hasNext()) {
//			if(String.valueOf(it.next()).indexOf(Constants.SMP_ADMIN) == 0) {
//				return true;
//			}
//		}
//		return false;
//	}
//	
//	/**
//	 * 员工是否包含超级管理员角色
//	 */
//	public static boolean isAdminSmp() {
//		Iterator<?> it = SpringSecurityUtils.getCurrentUser().getAuthorities().iterator();
//		while (it.hasNext()) {
//			if(it.next().equals(Constants.SMP_ADMIN_SUPER)) {
//				return true;
//			}
//		}
//		return false;
//	}
//	/**
//	 * 判断员工是否是树节点管理员
//	 * @return
//	 */
//	public static boolean isTreeNodeAdmin(){
//		Iterator<?> it = SpringSecurityUtils.getCurrentUser().getAuthorities().iterator();
//		while (it.hasNext()) {
//			if(it.next().equals(Constants.TREE_NODE_ADMIN)) {
//				return true;
//			}
//		}
//		return false;
//	}
//}
