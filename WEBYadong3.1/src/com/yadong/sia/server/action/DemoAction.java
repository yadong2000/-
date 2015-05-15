package com.yadong.sia.server.action;


import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@Controller("demoAction")
@Scope("prototype")
public class DemoAction {
	

	/**
	 * 新增或者修改记录
	 */
	public void save() {

		System.out.println("===============================================");
		System.out.println("===============================================");
	}

	/**
	 * 加载数据对象
	 */
	public void load() {
		System.out.println("===============================================");
		System.out.println("===============================================");
	}

	

}
