package com.yadong.sia.server.util;

import java.util.UUID;

/**
 * 逐渐生成器
 * @author 赵士杰
 *
 */
public class GeneratorKey {
	
	   public static String genaraId(){
		   return UUID.randomUUID().toString().replace("-", "");
	   }

}
