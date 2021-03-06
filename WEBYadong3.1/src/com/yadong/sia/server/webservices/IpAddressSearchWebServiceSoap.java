package com.yadong.sia.server.webservices;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 3.0.4
 * 2015-05-03T08:12:57.073+08:00
 * Generated source version: 3.0.4
 * 
 */
@WebService(targetNamespace = "http://WebXml.com.cn/", name = "IpAddressSearchWebServiceSoap")
@XmlSeeAlso({ObjectFactory.class})
public interface IpAddressSearchWebServiceSoap {

    /**
     * <br /><h3>通过输入IP地址查询国家、城市、所有者等信息。没有注明国家的为中国</h3><p>输入参数：IP地址（自动替换 " 。" 为 "."），返回数据： 一个一维字符串数组String(1)，String(0) = IP地址；String(1) = 查询结果或提示信息</p><br />
     */
    @WebResult(name = "getCountryCityByIpResult", targetNamespace = "http://WebXml.com.cn/")
    @RequestWrapper(localName = "getCountryCityByIp", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetCountryCityByIp")
    @WebMethod(action = "http://WebXml.com.cn/getCountryCityByIp")
    @ResponseWrapper(localName = "getCountryCityByIpResponse", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetCountryCityByIpResponse")
    public ArrayOfString getCountryCityByIp(
        @WebParam(name = "theIpAddress", targetNamespace = "http://WebXml.com.cn/")
        java.lang.String theIpAddress
    );

    /**
     * <br /><h3>获得本IP地址搜索 WEB 服务的数据库版本更新时间</h3><p>输入参数：无，输出参数 String</p><br />
     */
    @WebResult(name = "getVersionTimeResult", targetNamespace = "http://WebXml.com.cn/")
    @RequestWrapper(localName = "getVersionTime", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetVersionTime")
    @WebMethod(action = "http://WebXml.com.cn/getVersionTime")
    @ResponseWrapper(localName = "getVersionTimeResponse", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetVersionTimeResponse")
    public java.lang.String getVersionTime();

    /**
     * <br /><h3>获得您的IP地址和地址信息</h3><p>输入参数：无，返回数据： 一个一维字符串数组String(1)，String(0) = IP地址；String(1) = 地址信息</p><br />
     */
    @WebResult(name = "getGeoIPContextResult", targetNamespace = "http://WebXml.com.cn/")
    @RequestWrapper(localName = "getGeoIPContext", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetGeoIPContext")
    @WebMethod(action = "http://WebXml.com.cn/getGeoIPContext")
    @ResponseWrapper(localName = "getGeoIPContextResponse", targetNamespace = "http://WebXml.com.cn/", className = "cxf.GetGeoIPContextResponse")
    public ArrayOfString getGeoIPContext();
}
