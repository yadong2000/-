package com.yadong.sia.server.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yadong.sia.server.action.base.BaseAction;
import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.Riddle;
import com.yadong.sia.server.domain.Roles;
import com.yadong.sia.server.domain.User;
import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.service.CommentService;
import com.yadong.sia.server.service.HmModelDatasetMppingService;
import com.yadong.sia.server.service.ReplayService;
import com.yadong.sia.server.service.UserServices;
import com.yadong.sia.server.util.Constants;
import com.yadong.sia.server.util.json.JsonConvert;
import com.yadong.sia.server.util.page.GenericDefaultPage;
import com.yadong.sia.server.util.page.IGenericPage;
import com.yadong.sia.server.util.page.Page;
import com.yadong.sia.server.util.struts2.Struts2Utils;
import com.yadong.sia.server.webservices.ArrayOfString;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceHttpGet;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceSoap;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap12_Client;
import com.yadong.sia.server.webservices.IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client;

/**
 * @ClassName: HmModelDatasetMppingAction
 * @Description: HmModelDatasetMpping绠＄悊Action
 *
 */
@SuppressWarnings("serial")
@Controller("commentAction")
@Scope("prototype")
public class CommentAction extends BaseAction<Comment> {
	@Autowired
	private CommentService CommentService;
	@Autowired
	private ReplayService replayService;
	private Comment riddle = new Comment();
	private String[] ids;
	private String C_id;
	public String getC_id() {
		return C_id;
	}
	public void setC_id(String c_id) {
		C_id = c_id;
	}
	public String forWord() {
		return "forWord";
	}
	public String doLogin() {
		return "login";
	}
	public void selectCommentById() throws Exception{
		List <Comment> comlist = null ;
		List <replay> relist = null ;
		String riddleId = request.getParameter("riddleId");
			try{
			  comlist=  CommentService.selectCommentById(riddleId);
			  String sendHtmlByCommentAndRepaly = sendHtmlByCommentAndRepaly(comlist ,riddleId);
			  response.setContentType("text/html; charset=utf-8");
			  response.getWriter().write(sendHtmlByCommentAndRepaly);
			}catch(Exception e){
		    	e.printStackTrace();
		    }
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
	
	//
	public void queryCommentById(){
		
		String pageNo = request.getParameter("pageNo");
		String userId = request.getParameter("userId");
		
		if(null!=pageNo && !"".equals(pageNo)){
          this.page = Integer.parseInt(pageNo);			
		}
		if(userId != null && !"".equals(userId)){
			Page  comList = CommentService.getComListByPage(this.page ,this.rows, userId);
		}
		
	/*	Integer userId2 = riddle.getUserId();
		System.out.println("userId2"+userId2);
		List <Comment> comList = CommentService.getComList(userId2.toString());
		session.setAttribute("comList", comList);*/
	}
	
	public String UpdateUser(){
		if(null!=riddle){
			try{
				CommentService.update(riddle);
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
	 * 鏂板鎴栬�淇敼璁板綍
	 * @throws IOException 
	 */
	@SuppressWarnings("unused")
	public void save() throws IOException {
		try{
		List <Comment> comlist = null ;
		List <replay> relist = null ;
		String commentCon = request.getParameter("commentCon");
		String riddleId = request.getParameter("riddleId");
		String userId = request.getParameter("userId");
		String ipAddr = getIpAddr( ) ;
		//flagId  parentId
		String parentId= request.getParameter("parentId");
		//根据IP获取地理位置
		IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client  ipAddress = null;
		ipAddress = new IpAddressSearchWebServiceSoap_IpAddressSearchWebServiceSoap_Client();
		String cityByIp = ipAddress.getCityByIp(ipAddr);
		System.out.println("88888888888"+ipAddr+"countryCityByIp="+cityByIp);
		replay  re = new replay();		
		if(!"".equals(userId)&&userId!=null){
			riddle.setUserId(Integer.parseInt(userId));
		} 
		if(!"".equals(ipAddr)&&ipAddr!=null){
			riddle.setIpaddress(ipAddr);
		} 
		if(!"".equals(cityByIp)&&cityByIp!=null){
			riddle.setUserName(cityByIp);
		} 
		if (riddle != null) {
			if(!"".equals(parentId)&&parentId!=null){
				re.setIP(ipAddr);
				re.setReplayContext(riddle.getCommentCon());
				Integer newparentId = new Integer(parentId);
				re.setCommentId(newparentId);
				if(riddle.getUserId()!=null&& !"".equals(riddle.getUserId())){
					re.setUserId(riddle.getUserId());
				}
				relist=	 replayService.save(re, null);
			}else{
				      riddle.setUserName(cityByIp);
					  CommentService.regedit(riddle,riddleId);
			} 
		}
		comlist=  CommentService.selectCommentById(riddleId);
		  String sendHtmlByCommentAndRepaly = sendHtmlByCommentAndRepaly(comlist ,riddleId);
		  response.setContentType("text/html; charset=utf-8");
		  response.getWriter().write(sendHtmlByCommentAndRepaly);
	
		}catch(Exception e){
			e.printStackTrace();
		}
	    System.out.println("================");
	}

	public void commentDataGird() throws IOException {
		//List<Comment> list=null;
		// 褰撳墠椤�
		try{
		String commentIds = request.getParameter("commentIds");
		String substring = commentIds.substring(0,commentIds.lastIndexOf(","));
		String[] sourceStrArray = substring.split(",");
		for (int i = 0; i < sourceStrArray.length; i++) {
			//System.out.println("sourceStrArray"+i+"鍊�+sourceStrArray[i]);
			// list=	CommentService.findByCommentByRiddleId(sourceStrArray[i]);
		}
		}catch(Exception e){
			e.printStackTrace();
		}	
		Struts2Utils.renderJson("", "encoding:UTF-8");
	 
	}

	/**
	 * 
	 * 
	 * 鏁版嵁鍒楄〃
	 */
	public void list() {
		List<Comment> list = CommentService.findByParam(riddle,
				this.getSidx(), this.getSord());
		JSONOuter().doOutList(getOut(), list);
	}

	/**
	 * 
	 * 
	 * 鎵归噺鍒犻櫎璁板綍
	 */
	public void delete() {
		String msg = "";

		try {
			if (ids != null && ids.length > 0) {
				int s = CommentService.deleteByIds(ids);
				msg = "鍒犻櫎鎴愬姛" + s + "鏉¤褰�;";
			} else {
				msg = "璇烽�鎷╄鍒犻櫎鐨勮褰�";
			}
			JSONOuter().doOutSuccessMsg(getOut(), msg);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 妯″瀷椹卞姩锛岃嚜鍔ㄨ閰嶉〉闈㈠睘鎬�
	 */
	public Comment getModel() {
		riddle = new Comment();
		return riddle;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

 //拼接字符串公用代码
	public  String sendHtmlByCommentAndRepaly(List<Comment> comlist,String riddleId) throws IOException {
		 
		List <replay> relist = null ;
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < comlist.size(); i++) {
		if(comlist.get(i)!=null && !"".equals(comlist.get(i))){
	    Comment comment =comlist.get(i);
	    if(comment.getCommentId()!=null && !"".equals(comment.getCommentId())){
	    	//根据评论ID查询回复
	    	relist = replayService.selectReplayById(comment.getCommentId().toString());
	    }
//		sb.append("<div class=\"newSList\" id=\"newList_"+riddleId+"\"style=\"display: block;\">");
		sb.append("<p class=\"xxTitle\"><strong>最新评论</strong><span></span></p>");
		sb.append("<div class=\"newsBox\" id=\"newsBox_1205433\">");
		sb.append(" <div class=\"ihoverBg\" onmouseover=\"juBao(true,3599371)\" onmouseout=\"juBao(false,3599371)\" id=\"3599371\"><dl><dt>");
		sb.append("	<img src=\"http://122.112.93.231:8080/ImgServer/upload/mylogo.png\" width=\"35\" height=\"35\"></dt><dd>");
		//Constants http://122.112.93.231:8080/ImgServer/upload/20150429095258234563.jpg
//		sb.append("	<img src=\"http://h.img.pengfu.cn/nofound.png\" width=\"35\" height=\"35\"></dt><dd>");
		int j = i+1;
		sb.append("<div class=\"fontP\"><em>"+j+"楼</em> <a class=\"newUser\" target=\"_blank\" href=\"javascript:void()\">"+comment.getUserName()+"：</a>");
		sb.append("<div class=\"yingYong\">");
//		sb.append("<div class=\"yyBox\">");
//		sb.append("<div class=\"yyJiao\"></div>");
		if(relist.size()>0){
			for (replay replay : relist) {
				    sb.append("<div class=\"yyBox\">");
				    sb.append("<div class=\"yyJiao\"></div>");
					sb.append("<div class=\"yyoFont\">");
					sb.append("<em>"+j+"楼</em>");
					sb.append("<a href=\"/#\">"+comment.getUserName()+"：</a>");
					sb.append("<span>"+replay.getReplayContext()+"</span>");
					sb.append("</div>");
					sb.append("</div>");
			}
			}
		sb.append("</div>");
	//	sb.append("<input name=\"CommentuserName_\""+riddleId+"  id=\"CommentuserName_\""+riddleId+"  value=\"河北省廊坊市捧友\""+i+" >");
		sb.append("	<span class=\"zxhffont\">"+comment.getCommentCon()+"</span><div class=\"tisDianji\">");
		sb.append("<span id=\"liangle_3599371\" class=\"dingBtn\" onclick=\"UpdateSupportNum(3599371,0,'测试',false,1205433)\"></span>");
//		sb.append("	<span class=\"pinglBtn\" onclick=\"fnHuiFu("+riddleId+","+comment.getCommentId()+",'河北省廊坊市捧友',false)\">回复</span>");
		sb.append("	<span class=\"pinglBtn\" onclick=\"fnHuiFu("+riddleId+","+comment.getCommentId()+",'"+comment.getUserName()+"',false)\">回复</span>");
		sb.append("<span class=\"pinglBtn\"  onclick=\"showDaShangDialog(0,"+comment.getUserName()+",1205433)\">点赞</span>");
		sb.append("<span class=\"pinglBtn\"  onclick=\"showDaShangDialog(0,"+comment.getUserName()+",1205433)\">举报</span>");
//		sb.append("	<a class=\"jubao\" onclick=\"report(3599371)\" style=\"display: none;\">举报</a></div></div></dd></dl>");
		sb.append("	</div> </div> ");
		sb.append("</div>");
		}
		}
		 System.out.println("================");
	
		 return sb.toString();
	   
	}

}
