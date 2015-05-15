package com.yadong.sia.server.util.page;

import java.util.List;

public class Page {
	/**
	 * 当前页
	 */
	int pageNo = 1;
	/**
	 * 总记录数totalCount
	 */
	int totalCount = 0;
	/**
	 * 每页记录数
	 */
	int pageSize = 5;
	/**
	 * 总页数
	 */
	int totalPage = 1;
	
	/**
	 * 起始行号
	 */
	int startNum = 0;
	/**
	 * 结束行号
	 */
	int endNum = 0;
	/**
	 * 查询的结果集
	 */
	List<?> list;
	public Page(int pageNo, int totalCount, int pageSize) {
		super();
		this.pageNo = pageNo;
		this.totalCount = totalCount;
		this.pageSize = pageSize;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	/**
	 * 获得总页数
	 * @return
	 */
	public int getTotalPage() {
		/*totalPage = totalCount/pageSize;
		//
		if(totalCount%pageSize == 0){
			return totalPage;
		}else{
			return ++totalPage;
		}*/
		
		return  (totalCount + pageSize -1)/pageSize;
		
	}
	
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	/**
	 * 计算当前页的起始行号
	 * 当前页码*页面容量-1
	 * @return
	 */
	public int getStartNum() {
		
		return (pageNo - 1) * pageSize;
	}
	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}
	/**
	 * 获得当前页的结束行号
	 * @return
	 */
	public int getEndNum() {
		return  10 ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	}
	public void setEndNum(int endNum) {
		this.endNum = endNum;
	}
	public List<?> getList() {
		return list;
	}
	public void setList(List<?> list) {
		this.list = list;
	}
	
	
	

}
