package com.yadong.sia.server.util;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import com.yadong.sia.server.domain.Comment;
import com.yadong.sia.server.domain.replay;
import com.yadong.sia.server.service.CommentService;
import com.yadong.sia.server.service.ReplayService;


public class IpAttributionUtil {
	@Autowired
	private CommentService CommentService;
	@Autowired
	private ReplayService replayService;
	
	/**
	 * 获取客户端IP地址
	 * @param request
	 * @return
	 */
	public static String getIpAddr(HttpServletRequest request) {
	String ip = request.getHeader("x-forwarded-for");
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
	

	/**
	 * 	StringBuffer sb = new StringBuffer();
		for (int i = 0; i < comlist.size(); i++) {
		if(comlist.get(i)!=null && !"".equals(comlist.get(i))){
	    Comment comment =comlist.get(i);
	    if(comment.getCommentId()!=null && !"".equals(comment.getCommentId())){
	    	//根据评论ID查询回复
	    	relist = replayService.selectReplayById(comment.getCommentId().toString());
	    }
		sb.append("<div class=\"newSList\" id=\"newList_"+riddleId+"\"style=\"display: block;\">");
		sb.append("<p class=\"xxTitle\"><strong>最新评论</strong><span></span></p>");
		sb.append("<div class=\"newsBox\" id=\"newsBox_1205433\">");
		sb.append(" <div class=\"ihoverBg\" onmouseover=\"juBao(true,3599371)\" onmouseout=\"juBao(false,3599371)\" id=\"3599371\"><dl><dt>");
		sb.append("	<img src=\"http://h.img.pengfu.cn/nofound.png\" width=\"35\" height=\"35\"></dt><dd>");
		int j = i+1;
		sb.append("<div class=\"fontP\"><em>"+j+"楼</em> <a class=\"newUser\" target=\"_blank\" href=\"javascript:void()\">"+comment.getUserName()+"：</a>");
		sb.append("<div class=\"yingYong\">");
		sb.append("<div class=\"yyBox\">");
//		sb.append("<input type=\"hidden\"   value=\""+comment.getCommentId()+"\"  id="+commentId+"+"+riddleId+" >");
		sb.append("<div class=\"yyJiao\"></div>");
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
		sb.append("	<span class=\"pinglBtn\" onclick=\"fnHuiFu("+riddleId+","+comment.getUserName()+","+comment.getUserName()+",false)\">回复</span>");
		sb.append("<span class=\"pinglBtn\" onclick=\"showDaShangDialog(0,"+comment.getUserName()+",1205433)\">打赏</span>");
		sb.append("	<a class=\"jubao\" onclick=\"report(3599371)\" style=\"display: none;\">举报</a></div></div></dd></dl>");
		sb.append("	</div> </div> </div>");
		}
		}
		response.setContentType("text/html; charset=utf-8");
		response.getWriter().write(sb.toString());
	 */
	
	
}
