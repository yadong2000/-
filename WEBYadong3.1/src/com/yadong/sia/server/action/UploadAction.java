package com.yadong.sia.server.action;



import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;


import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import com.yadong.sia.server.util.Constants;
import com.yadong.sia.server.util.struts2.Struts2Utils;

@Controller("uploadAction")
@Scope("prototype")
public class UploadAction extends ActionSupport {
    private File image; //上传的文件
    private String imageFileName; //文件名称
    private String imageContentType; //文件类型
	public void uploadPic() throws IOException {
try{
		String realpath = ServletActionContext.getServletContext().getRealPath("/images");
	        //D:\apache-tomcat-6.0.18\webapps\struts2_upload\images
	        System.out.println("realpath: "+realpath);
	        if (image != null) {
	            File savefile = new File(new File(realpath), imageFileName);
	            if (!savefile.getParentFile().exists())
	                savefile.getParentFile().mkdirs();
	            FileUtils.copyFile(image, savefile);
	            ActionContext.getContext().put("message", "文件上传成功");
	        }
	      //上传至服务器
	    	SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmssSSS");
			String tFileName = format.format(new Date());
			Random random = new Random();
			for(int i = 0 ; i < 3 ;i ++){
				tFileName = tFileName + random.nextInt(9);
			}
			 
			String suffix = imageFileName.substring(imageFileName.lastIndexOf("."));
			//��һ������jersey�Ŀͻ���
			Client client = Client.create();
			//ָ���ļ��ڷ�������ȫ·��
			WebResource webResource =  client.resource(Constants.PIC_PATH+tFileName+suffix);
			webResource.put(String.class, image);
			String result = "{\"pic_path\":\""+Constants.PIC_PATH+tFileName+suffix+"\", \"relative_path\":\"upload/"+tFileName+suffix+"\"}";
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType("text/html; charset=utf-8");
			response.getWriter().write(result);
	    
}catch(Exception e){
	e.printStackTrace();
} 
	}

	public File getImage() {
		return image;
	}

	public void setImage(File image) {
		this.image = image;
	}

	public String getImageFileName() {
		return imageFileName;
	}

	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}

	public String getImageContentType() {
		return imageContentType;
	}

	public void setImageContentType(String imageContentType) {
		this.imageContentType = imageContentType;
	}

}
