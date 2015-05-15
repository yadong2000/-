package com.yadong.sia.server.test;
///*		
// * Copyright 2011 CreditEase Co., Ltd. 
// * site: http://www.creditease.cn/
// * file: Id: EmployeeWebServiceImplTest.java
// * author : yub
// * created at:2011-7-22閿熸枻鎷烽敓鏂ゆ嫹11:15:41
// */
//package com.creditease.sia.server.test;
//
//
//import org.junit.Before;
//import org.junit.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.creditease.smp.manager.EmployeeWebService;
//import com.creditease.smp.manager.dto.AuthoritiesDTOForCrm;
//
///**
// * 
// * #Date: 2011-7-22
// * 
// * #Title: UserServiceTest.java
// * 
// * #Company: CreditEase
// * 
// * 
// * #Author: ljl
// * 
// * #Email:junlongli@creditease.cn
// */
//public class employServiceTest extends BaseJunit4Test{
//	
//	@Autowired
//	private EmployeeWebService employeeService;
// 
//	
//	
//	private Integer systemSign = 0;
//	private AuthoritiesDTOForCrm smpUserLogin;
//
//	public Integer getSystemSign() {
//		return systemSign;
//	}
//
//	public void setSystemSign(Integer systemSign) {
//		this.systemSign = systemSign;
//	}
//
//	@Before
//	public void setUp() {
//	}
//
//	@Test
//	@SuppressWarnings("unused")
//	public void testGetManagerMenu() {
////		AuthoritiesDTO auth=userAutService.smpUserLogin("chonghu", "888888");
////		AuthoritiesDTOForCrm employee=employeeWebService.smpUserLogin("xianliwan", "888888");
////		System.out.println(employee.getGroup());
////		EmployeeDTO emp=new EmployeeDTO();
////		emp.setName("鐜�);
////		emp.setComEmpNo(20l);
////		emp.setMobile("15210172218");
////		emp.setDepartmentId(728);
////		emp.setAreaId(234);
//////	emp.setAccount("iw");
////		String str="226,236,11000312,11000294,11000311";
////		EmployeeResultForCrm employee1=employeeWebService.smpQueryFinancialManagerByCityManager(130, str, 6,"ROLE_FinancingManager,ROLE_LenderSale_CCA");
//	   //EmployeeResult employee2 = employeeWebService.getcolleagueEmployeeById(new Integer("11004247"), new Integer("0"));//11004247   0   28843  6
////	    EmployeeResult employee3= employeeWebService.getEmployeeById(new Integer("11000990"), new Integer("97"));
//		smpUserLogin = employeeService.smpUserLogin("adminsmp","111111");  
////	  
//		//System.out.println("===="+  employee3.getEmployeeList().size());
//	    //EmployeeResultForCrm employee3=employeeWebService.smpQueryEmployeeInfo(emp, 1, 7);
////		String groupIds=employeeWebService.getGroupIdByComEmpIdAndSystemSign(13944, "6");
////		HashMap<String,String> map=new HashMap<String, String>();
////		map.put("20", "ROLE_TeamManager,ROLE_CityManager");
////		map.put("11", "ROLE_STORAGEMGR,ROLE_ADMIN_1");
////		map.put("6", "ROLE_xintuoDocmanagement");
////		int result=employeeWebService.smpQueryCountManager(map);
////		EmployeeResultForCrm employee4=employeeWebService.smpQueryFinancialManager(33767, 6,null);
////		EmployeeResult reset=employeeWebService.getEmployeeForYCD("admin", "888888");
//		System.out.println("---------------------"+smpUserLogin.getUsername());
////		System.out.println(ad.getRoles());
//	}
//}
