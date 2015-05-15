package com.yadong.sia.server.test;
//package com.creditease.sia.server.test;
//
//import static org.junit.Assert.*;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.creditease.core.ws.client.UserService;
//import com.creditease.sia.manager.EmployeeService;
//import com.creditease.smp.manager.EmployeeWebService;
//import com.creditease.smp.manager.dto.AuthoritiesDTOForCrm;
//
//public class CaseTest  extends BaseJunit4Test{
// 
//	private Integer systemSign = 0;
//	@Autowired
//	private EmployeeService employeeService;
////	@Autowired
////	private UserService userService;
// 
//	
//	
// 
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
////		smpUserLogin = employeeService.smpUserLogin("adminsmp","111111");  
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
