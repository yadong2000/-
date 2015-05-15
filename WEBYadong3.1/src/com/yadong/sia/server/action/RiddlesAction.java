package com.yadong.sia.server.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.CommentService;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.service.RiddleService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.IpAttributionUtil;
import com.yadong.sia.server.util.json.JsonConvert;
import com.yadong.sia.server.util.page.GenericDefaultPage;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;
import com.yadong.sia.server.util.struts2.Struts2Utils;
import com.yadong.sia.server.webservices.ArrayOfString;
import com.yadong.sia.server.webservices.IpAddressSearchWebService;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceHttpGet;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceSoap;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client;

/**
 * @ClassName: HmModelDatasetMppingAction
 * @Description: HmModelDatasetMpping管理Action
 *
 */
@SuppressWarnings("serial")
@Controller("riddlesAction")
@Scope("prototype")
public class RiddlesAction extends BaseAction<Riddle> {
	@Autowired
	private RiddleService riddleService;
	private Riddle riddle = new Riddle();

	@Autowired
	private CommentService CommentService;
	
	private String[] ids;

	private String uploadAttachmentIds;

   //publish jape
	
	public  String jape(){
		
		return "jape";
	} 
	public  String publish(){
		
		return "publish";
	} 
	public String forWord() {
		return "forWord";
	}

	public String doLogin() {
		return "login";
	}
	
	
	public String UpdateUser(){
		if(null!=riddle){
			try{
				
				riddleService.update(riddle);
			
			}catch(Exception e){
				e.printStackTrace();
			}
			}else{
				
			}
		String[] parameterValues = request.getParameterValues("rows");
		System.out.println("hhh"+parameterValues);
		Struts2Utils.renderJson("success", "encoding:UTF-8");
		return NONE;
	}


	/**
	 * 跳转到用户列表页面
	 * 
	 * @return
	 */
	public String forWordtoRoleList() {
 	
		return "forWordtoRoleList";
	}

	public String saveUI() throws IOException {
		
		String id = request.getParameter("id");
		Integer integer = Integer.getInteger(id);
		System.out.println("dsada");
		Riddle byId = riddleService.getById(id);
		//response.getWriter().print(byId);
		StringBuffer sb = new StringBuffer();// ..。.。
		String result = "{\"total\" :" + 1 + ", \"rows\" :[";
		String list2json = JsonConvert.bean2json(byId);
		sb.append(result);
		sb.append(list2json);
		sb.append("]}");
		String string = sb.toString();
		System.out.println("string:" + string);
		Struts2Utils.renderJson(string, "encoding:UTF-8");
		return "saveUI";
	}

	/**
	 * 注册方法
	 */
	/**
	 * 新增或者修改记录
	 * @throws Exception 
	 */
	public String save() throws Exception {
 
		String ipAddr = getIpAddr();
		//根据IP获取地理位置
		IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client  ipAddress = null;
		ipAddress = new IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client();
		String cityByIp = ipAddress.getCityByIp(ipAddr);
		System.out.println("88888888888"+ipAddr+"countryCityByIp="+cityByIp);
		String captcha = request.getParameter("captcha");
		String tcaptcha = (String) session.getAttribute("piccode");
		String tip = "";
		if (captcha != null && captcha.equalsIgnoreCase(tcaptcha)) {
			if (riddle != null) {
				if(cityByIp!=null && !"".equals(cityByIp)){
					riddle.setRiddleUserName(cityByIp);
				}
				riddleService.regedit(riddle);
			}
		}else {
			tip = "captchaerror";
		}
		session.setAttribute("tip", tip);
		if ("".equals(tip)) {
			return "loginSucess";
		} else {
			return "jape";
		}
	}

	
	/**
	 * 新增或者修改记录
	 * @throws Exception 
	 */
	public String saveRiddles() throws Exception {
		String ipAddr = getIpAddr();
		String captcha = request.getParameter("captcha");
		IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client  ipAddress = null;
		ipAddress = new IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client();
		String cityByIp = ipAddress.getCityByIp("60.10.123.206");
		System.out.println("88888888888"+ipAddr+"countryCityByIp="+cityByIp);
		String tcaptcha = (String) session.getAttribute("piccode");
		String tip = "";
		if (captcha != null && captcha.equalsIgnoreCase(tcaptcha)) {
			if (riddle != null) {
				if(cityByIp!=null && !"".equals(cityByIp)){
					riddle.setRiddleUserName(cityByIp);
				}
				riddleService.regedit(riddle);
			}
		}else {
			tip = "captchaerror";
		}
		session.setAttribute("tip", tip);
		if ("".equals(tip)) {
			return "loginSucess";
		} else {
			return "publish";
		}
	}

	/**
	 * 加载数据对象
	 */
	public void load() {
		String string = Integer.toString(riddle.getRiddleId().intValue());
		Riddle hmModelDatasetMppingObj = riddleService
				.getById(string);
		JSONOuter().doOutRecordBean(getOut(), hmModelDatasetMppingObj);
	} 

	public void riddlesDataGird() throws Exception {
		
		String pageNo =request.getParameter("pageNo");
		System.out.println("boolean="+pageNo!=null);
		if((pageNo!=null) ){
			this.page = Integer.parseInt(pageNo);
		}

	 try {
		Page  listByPage = riddleService.findPageByParamByRiddleByPage(this.page,this.rows);
		List<Riddle> list = (List<Riddle>) listByPage.getList();
		session.setAttribute("page", listByPage);
		session.setAttribute("list", list);
	 }catch(Exception e){
		 e.printStackTrace();
		 
	 }
	}
	
	@SuppressWarnings("unchecked")
	public String riddlesDataGirdByPage() throws Exception {
		String pageNo =request.getParameter("pageNo");
		System.out.println("boolean="+pageNo!=null);
		if((pageNo!=null && !"".equals(pageNo)) ){
			this.page = Integer.parseInt(pageNo);
		}

	 try {
		Page  listByPage = riddleService.findPageByParamByRiddleByPage(this.page,this.rows);
		List<Riddle> list = (List<Riddle>) listByPage.getList();
		int  count = 0;
		for (Riddle riddle : list) {
		 count =	CommentService.getComByRiddleId(riddle.getRiddleId());
		 riddle.setRiddleCount(count);
		}
		session.setAttribute("page1", listByPage);
		session.setAttribute("list", list);
	 }catch(Exception e){
		 e.printStackTrace();
	 }
	 return "toListriddles";

	}

	/**
	 * 
	 * 
	 * 数据列表
	 */
	public void list() {
		List<Riddle> list = riddleService.findByParam(riddle,
				this.getSidx(), this.getSord());
		JSONOuter().doOutList(getOut(), list);
	}

	/**
	 * 
	 * 
	 * 批量删除记录
	 */
	public void delete() {
		String msg = "";

		try {
			if (ids != null && ids.length > 0) {
				int s = riddleService.deleteByIds(ids);
				msg = "删除成功" + s + "条记录";
			} else {
				msg = "请选择要删除的记录!";
			}
			JSONOuter().doOutSuccessMsg(getOut(), msg);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 模型驱动，自动装配页面属性
	 */
	public Riddle getModel() {
		riddle = new Riddle();
		return riddle;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

	public void setUploadAttachmentIds(String uploadAttachmentIds) {
		this.uploadAttachmentIds = uploadAttachmentIds;
	}

	/**
	 * 获取客户端IP地址
	 * @param request
	 * @return
	 */
	public String getIpAddr( ) {
	String ip =  request.getHeader("x-forwarded-for");
	if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	ip = request.getHeader("Proxy-Client-IP");
	}
	if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	ip = request.getHeader("WL-Proxy-Client-IP");
	}
	if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
	ip = request.getRemoteAddr();
	}
	return ip;
	}
	
}
