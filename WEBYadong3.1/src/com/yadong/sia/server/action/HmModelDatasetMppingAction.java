package com.yadong.sia.server.action;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.MD5;
import com.yadong.sia.server.util.SendEmail;
import com.yadong.sia.server.util.json.JsonConvert;
import com.yadong.sia.server.util.page.GenericDefaultPage;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;
import com.yadong.sia.server.util.struts2.Struts2Utils;

/**
 * @ClassName: HmModelDatasetMppingAction
 * @Description: HmModelDatasetMpping管理Action
 * 
 */
@SuppressWarnings("serial")
@Controller("hmModelDatasetMppingAction")
@Scope("prototype")
public class HmModelDatasetMppingAction extends BaseAction<User> {
	@Autowired
	private HmModelDatasetMppingService hmModelDatasetMppingService;

	private HmModelDatasetMpping hmModelDatasetMpping;

	private String[] ids;

	private String uploadAttachmentIds;

	private User user;
	@Autowired
	private UserServices userServices;

	public String forWord() {
		return "forWord";
	}

	public String doLogin() {
		return "login";
	}

	
	//userCenter跳转到个人中心
	public  String  ToUserCenter(){
		String id = request.getParameter("id");
		
		User user = userServices.getById(id);
		if(user!=null){
			session.setAttribute("user", user);
			return "userCenter";
		}
		
		return null;
		
	}
	
	@SuppressWarnings("unused")
	public String ffffogin1(String username, String password, String captcha) {

		String username1 = request.getParameter("");
		String password1 = request.getParameter("");

		return NONE;
	}

	public void getCaptcha() throws Exception {
		System.out
				.println("#######################生成数字和字母的验证码#######################");
		BufferedImage img = new BufferedImage(68, 22,
				BufferedImage.TYPE_INT_RGB);
		// 得到该图片的绘图对象
		Graphics g = img.getGraphics();
		Random r = new Random();
		Color c = new Color(200, 150, 255);
		g.setColor(c);
		// 填充整个图片的颜色
		g.fillRect(0, 0, 68, 22);
		// 向图片中输出数字和字母
		StringBuffer sb = new StringBuffer();
		char[] ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
		int index, len = ch.length;
		for (int i = 0; i < 4; i++) {
			index = r.nextInt(len);
			g.setColor(new Color(r.nextInt(88), r.nextInt(188), r.nextInt(255)));
			g.setFont(new Font("Arial", Font.BOLD | Font.ITALIC, 22));
			// 输出的 字体和大小
			g.drawString("" + ch[index], (i * 15) + 3, 18);
			// 写什么数字，在图片 的什么位置画
			sb.append(ch[index]);
		}
		request.getSession().setAttribute("piccode", sb.toString());
		ImageIO.write(img, "JPG", response.getOutputStream());
	}

	public String login() {
		MD5 md5 = new MD5();
		// 给密码加密
		String pass = md5.GetMD5Code(user.getPassword());
		String captcha = request.getParameter("captcha");
		String tip = "";
		// 获得session的验证码
		String tcaptcha = (String) session.getAttribute("piccode");
		if (captcha != null && captcha.equalsIgnoreCase(tcaptcha)) {
			User user1 = userServices.getUser(user.getName(), pass);
			if (user1 != null) {
				session.setAttribute("user", user1);
				request.setAttribute("user", user1);

			} else {
				tip = "uperror";
			}
		} else {
			tip = "captchaerror";
		}
		session.setAttribute("tip", tip);
		// model.addAttribute("tip", tip);
		if ("".equals(tip)) {
			return "loginSucess";
		} else {
			return "login";
		}

	}

	public String UpdateUser() {
		if (null != user) {
			try {
				userServices.update(user);

			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {

		}
		String[] parameterValues = request.getParameterValues("rows");
		System.out.println("hhh" + parameterValues);
		Struts2Utils.renderJson("success", "encoding:UTF-8");
		return NONE;
	}

	public String login1() {
		System.out.println("登陆");
		// if(username!=null&&password!=null){
		// User user = userServices.login(username,password);
		// }
		// ////dfsdfasdasdi9tdsfsdf
		return "login";
	}

	/**
	 * 跳转到用户列表页面
	 * 
	 * @return
	 */
	// @RequestMapping("/forWordtoUserList")
	public String forWordtoUserList() {

		System.out.println("forWordtoUserList" + this.page
				+ "forWordtoUserList" + this.rows);
		return "forWordtoUserList";
	}

	public String saveUI() throws IOException {

		String id = request.getParameter("id");
		Integer integer = Integer.getInteger(id);

		System.out.println("dsada");
		User byId = userServices.getById(id);
		// response.getWriter().print(byId);
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
	 * 
	 * @throws ParseException
	 */
	public String save() throws ParseException {
		if (user != null) {
			if (user.getBirthDate() != null) {

				Date date = new SimpleDateFormat("yyyy-MM-dd").parse(user
						.getBirthDate());
				// user.setAge(1);
				String dateStr = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss")
						.format(date);
				String dateStr1 = new SimpleDateFormat("yyyy-MM-dd")
						.format(date);
				user.setCreatedate(dateStr);
			}
			// user.setBirthDate(dateStr1);
			MD5 md5 = new MD5();
			// 给密码加密
			String pass = md5.GetMD5Code(user.getPassword());
			user.setPassword(pass);
/////////////////
			 ///邮件的内容
	        StringBuffer sb=new StringBuffer("点击下面链接激活账号，48小时生效，否则重新注册账号，链接只能使用一次，请尽快激活！</br>");
	        sb.append("<a href=\"http://localhost:8080/springmvc/user/register?action=activate&email=");
	        sb.append(user.getMail()); 
	        sb.append("&validateCode="); 
	       // sb.append(user.getValidateCode());
	        sb.append("\">http://localhost:8080/springmvc/user/register?action=activate&email="); 
	        sb.append(user.getMail());
	        sb.append("&validateCode=");
	     //   sb.append(user.getValidateCode());
	        sb.append("</a>");

	        //发送邮件
	        SendEmail.send(user.getMail(), sb.toString());
	        System.out.println("发送邮件");
	    
	    }

			///////////////////////////
			userServices.regedit(user);
			return "login";
		}
	//	Struts2Utils.renderJson("success", "encoding:UTF-8");
	
	 

	/**
	 * 加载数据对象
	 */
	public void load() {
		String string = Integer.toString(user.getId().intValue());
		User hmModelDatasetMppingObj = userServices.getById(string);
		JSONOuter().doOutRecordBean(getOut(), hmModelDatasetMppingObj);
	}

	public void userDataGird() {

		// 当前页
		System.out.println("forWordtoUserList" + this.page
				+ "forWordtoUserList" + this.rows);

		if (this.page == null) {
			this.page = 1;
		}
		Page findPageByParam = userServices.findPageByParam1(user, page, rows,
				uploadAttachmentIds, uploadAttachmentIds);
		int totalCount = findPageByParam.getTotalCount();
		List<User> list = (List<User>) findPageByParam.getList();
		StringBuffer sb = new StringBuffer();// ..。.。
		String result = "{\"total\" :" + totalCount + ", \"rows\" :";
		String list2json = JsonConvert.list2json(list);
		sb.append(result);
		sb.append(list2json);
		sb.append("}");
		String string = sb.toString();
		System.out.println("string:" + string);
		Struts2Utils.renderJson(string, "encoding:UTF-8");
	}

	/**
	 * 分页查询
	 */
	public void pagelist() {
		// IGenericPage<HmModelDatasetMpping> page =
		// userServices.findPageByParam(
		// user,
		// this.getPage(),
		// this.getRows(),
		// this.getSidx(),
		// this.getSord());
		// JSONOuter().doOutPage(getOut(), page);

	}

	/**
	 * 
	 * 
	 * 数据列表
	 */
	public void list() {
		List<User> list = userServices.findByParam(user, this.getSidx(),
				this.getSord());
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
				int s = userServices.deleteByIds(ids);
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
	public User getModel() {
		user = new User();
		return user;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

	public void setUploadAttachmentIds(String uploadAttachmentIds) {
		this.uploadAttachmentIds = uploadAttachmentIds;
	}

}
