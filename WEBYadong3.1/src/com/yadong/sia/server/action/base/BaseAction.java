package com.yadong.sia.server.action.base;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serializable;
import java.io.Writer;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.util.ServletContextAware;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.yadong.sia.server.util.json.DefaultJsonCreator;
import com.yadong.sia.server.util.json.IJsonCreator;
/**
 * 基控制类
 * @author 赵士杰
 *
 */
public abstract class BaseAction<T> extends ActionSupport implements ServletRequestAware, ServletContextAware, ServletResponseAware,Serializable, ModelDriven<T>{
	private static final long serialVersionUID = -1040212988363452551L;
	
    protected HttpServletRequest request;
    //HttpSession session,
    protected ServletContext application;
    protected HttpServletResponse response;
    protected HttpSession session;
    
    
    /** 定义日志对象. */
    protected Logger logger  = Logger.getLogger(this.getClass());
 
    
  //等于pageNo
    protected Integer page = 1;

	//等于pageSize
    protected Integer rows = 10;
	
	//排序字段
    protected String sidx;

	//排序方式
    protected String sord;
    
    
    public Integer getPage() {
		return page;
	}


	public void setPage(Integer page) {
		this.page = page;
	}


	public Integer getRows() {
		return rows;
	}


	public void setRows(Integer rows) {
		this.rows = rows;
	}


	public String getSidx() {
		return sidx;
	}


	public void setSidx(String sidx) {
		this.sidx = sidx;
	}


	public String getSord() {
		return sord;
	}


	public void setSord(String sord) {
		this.sord = sord;
	}


	public abstract T getModel();
	
	
	public void setServletRequest(HttpServletRequest arg0) {
		this.request = arg0;
		session = this.request.getSession();
	}

	public void setServletResponse(HttpServletResponse arg0) {
		this.response = arg0;
	}

	public void setServletContext(ServletContext arg0) {
		this.application = arg0;
	}
	
	
	
	/**
	 * json构建者
	 */
	private static IJsonCreator jsonCreator = new DefaultJsonCreator();
	

	/**
	 * 获取 IJsonCreator 对象
	 * 
	 * @return
	 */
	public IJsonCreator JSONOuter() {
		return jsonCreator;
	}
	

	/**
	 * 根据response获取输出流对象
	 * 
	 * @param response
	 * @return
	 */
	protected PrintWriter getOut(HttpServletResponse response) {
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			// 设置浏览器不要缓存
			response.setHeader("Pragma", "No-cache");
			response.setHeader("Cache-Control", "no-cache");
			response.setDateHeader("Expires", 0);
			return response.getWriter();
		} catch (IOException e) {
			logger.error(BaseAction.class + ":<" + e.getMessage() + ">");
		}
		return null;
	}
	
	
	protected Writer getOut() {
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			// 设置浏览器不要缓存
			response.setHeader("Pragma", "No-cache");
			response.setHeader("Cache-Control", "no-cache");
			response.setDateHeader("Expires", 0);
			return response.getWriter();
		} catch (IOException e) {
			logger.error(BaseAction.class + ":<" + e.getMessage() + ">");
		}
		return null;
	}
	
	
}
