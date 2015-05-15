SmallSite.app=SmallSite.app||{};
SmallSite.app.guideLayout=function(){
this.from="guide";
this.selfTag=[];
if(XZ.showFirstOperateGuide){
this.init();
}
};
SmallSite.app.guideLayout.prototype={init:function(){
var _1=this;
_1.showGuideDialog("one");
_1.bindEvents();
_1.tagAttention("tag_change","span");
_1.findHidden("tag_list","site_list");
_1.siteAttention("site_list","i");
jQuery("#guide-scorll").css({display:"none"});
window.guideScorllStatus=false;
},_stepInner:function(_2){
var _3=this;
switch(arguments[0]){
case "one":
return jQuery(["<div class=\"warp\">","<div class=\"title_window\">","<h2>\u4eba\u4eba\u5c0f\u7ad9\u6b22\u8fce\u4f60\uff01</h2>","<div id=\"closewindow\" class=\"close_window\">\u5173\u95ed</div>","</div>","<div class=\"content\">","<div class=\"text-inner-two\">","<h4>\u5173\u6ce8\u4f60\u559c\u6b22\u7684\u8bdd\u9898\uff0c\u8ba9\u5c0f\u7ad9\u66f4\u61c2\u4f60\uff0c\u4f1a\u4e3a\u4f60\u63a8\u8350\u611f\u5174\u8da3\u7684\u5185\u5bb9</h4>","<ul id=\"tag_change\" class=\"model clearfix\">","<li><a target=\"_blank\" href=\"/home#topic/\u63d2\u753b?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_01.png\" alt=\"\u63d2\u753b\" ></a><span>\u63d2\u753b</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u521b\u610f?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_02.png\" alt=\"\u521b\u610f\"></a><span>\u521b\u610f</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u63d2\u753b?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_03.png\" alt=\"\u642d\u914d\"></a><span>\u642d\u914d</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u642d\u914d?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_04.png\" alt=\"\u7535\u5f71\"></a><span>\u7535\u5f71</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u52a8\u6f2b?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_05.png\" alt=\"\u52a8\u6f2b\"></a><span>\u52a8\u6f2b</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u5bb6\u5c45?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_06.png\" alt=\"\u5bb6\u5c45\"></a><span>\u5bb6\u5c45</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u5efa\u7b51?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_07.png\" alt=\"\u5efa\u7b51\"></a><span>\u5efa\u7b51</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u604b\u7269?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_08.png\" alt=\"\u604b\u7269\"></a><span>\u604b\u7269</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u65c5\u884c?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_09.png\" alt=\"\u65c5\u884c\"></a><span>\u65c5\u884c</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u7f8e\u98df?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_10.png\" alt=\"\u7f8e\u98df\"></a><span>\u7f8e\u98df</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u840c?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_11.png\" alt=\"\u840c\"></a><span>\u840c</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u6c7d\u8f66?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_12.png\" alt=\"\u6c7d\u8f66\"></a><span>\u6c7d\u8f66</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u8bbe\u8ba1?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_13.png\" alt=\"\u8bbe\u8ba1\"></a><span>\u8bbe\u8ba1</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u6444\u5f71?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_14.png\" alt=\"\u6444\u5f71\"></a><span>\u6444\u5f71</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u65f6\u5c1a?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_15.png\" alt=\"\u65f6\u5c1a\"></a><span>\u65f6\u5c1a</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u6587\u5b66?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_16.png\" alt=\"\u6587\u5b66\"></a><span>\u6587\u5b66</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u827a\u672f?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_17.png\" alt=\"\u827a\u672f\"></a><span>\u827a\u672f</span></li>","<li><a target=\"_blank\" href=\"/home#topic/\u97f3\u4e50?from=guide\"><img src=\"http://a.xnimg.cn/smallsite/images/guide_18.png\" alt=\"\u97f3\u4e50\"></a><span>\u97f3\u4e50</span></li>","</ul>","<p class=\"p1\">\u65e0\u4f11\u6b62\u7684\u52a0\u73ed\uff1f\u8003\u8bd5\uff1f\u4ea4\u7a0e\uff1f......\u8fd9\u4e0d\u662f\u4f60\u8be5\u6709\u7684\u751f\u6d3b</p>","<p class=\"p2\">\u4e0d\u8981\u9057\u5931 \u4f60\u7684<em>\u68a6\u60f3</em> \u6765\u5c0f\u7ad9 \u627e\u56de\u4f60\u66fe\u7ecf\u65e0\u6cd5\u91ca\u6000\u7684<em>\u5c0f\u7231\u597d</em></p>","<p class=\"p3\">\u4e0d\u8981\u72ec\u81ea \u575a\u6301<em>\u68a6\u60f3</em> \u6765\u5c0f\u7ad9 \u9047\u89c1\u5174\u8da3\u76f8\u6295\u7684<em>\u597d\u670b\u53cb</em></p>","</div>","<div class=\"inner-footer clearfix\">","<div class=\"go_desc\">\u53ea\u9700\u4e24\u6b65\uff0c\u79bb\u68a6\u60f3\u66f4\u8fd1\u4e00\u70b9\uff01</div><a id=\"one_go\" class=\"go-step\" href=\"javascript:void(0)\" title=\"\u4e0b\u4e00\u6b65\">\u4e0b\u4e00\u6b65</a><i class=\"kx\"></i><i class=\"sx\"></i>","</div>","</div>","</div>"].join(""));
break;
case "three":
return jQuery(["<div class=\"warp\">","<div class=\"title_window\">","<h2>\u4eba\u4eba\u5c0f\u7ad9\u6b22\u8fce\u4f60\uff01</h2>","<div id=\"closewindow\" class=\"close_window\">\u5173\u95ed</div>","</div>","<div class=\"content\">","<div class=\"text-inner\">","<p class=\"blue_f\">\u606d\u559c\u4f60\u627e\u56de\u4e86\u81ea\u5df1\u5fc3\u5e95\u7684\u5c0f\u68a6\u60f3~</p>","<p class=\"blue_f\">\u751f\u6d3b\u96be\u514d\u8ba9\u4eba\u5931\u671b\uff0c\u4e0d\u8981\u518d\u5f04\u4e22\u4e86\u81ea\u5df1\u7684\u68a6\u60f3\uff01</p>","<p id=\"mylove_area\" class=\"black_f\">\u4f60\u7231<span id=\"mylovetag\"></span></p>","<p class=\"link_zhan\"></p>","<p class=\"gray_f\">\u5e38\u6765\u4eba\u4eba\u5c0f\u7ad9\uff0cTA\u6c38\u8fdc\u7ed9\u4f60\u60ca\u559c</p>","</div>","<a id=\"window_overs\" class=\"go-step\" href=\"localhost:8080\" title=\"\u73b0\u5728\u5c31\u53bb\">\u73b0\u5728\u5c31\u53bb</a>","</div>","</div>"].join(""));
break;
default:
return;
}
},changeDialog:function(_4){
var _5=this;
_4.getHeader().hide();
_4.getFooter().hide();
var _6=_4.getBody();
_6.css("padding","0");
_4.getTemplate().find(".dtm").parent().css("display","none");
_4.getTemplate().find(".dbm").parent().css("display","none");
_4.getTemplate().find(".dialog_body").css("border-radius","5px");
_4.setPosition();
},showGuideDialog:function(_7){
var _8=this;
if(_7==="two"){
jQuery.ajax({url:"/guide/firstOpGuide/step2",success:function(_9){
_8.dia=jQuery.alertDialog({width:825,height:"auto",message:_9});
_8.changeDialog(_8.dia);
}});
}else{
_8.dia=jQuery.alertDialog({width:825,height:"auto",message:_8._stepInner(_7)});
_8.changeDialog(_8.dia);
}
},bindEvents:function(){
var _a=this;
jQuery("#closewindow").live("click",function(){
_a.dia.hide();
_a.shutNext();
guideScorllStatus=false;
});
jQuery("#window_overs").live("click",function(){
_a.shutNext();
XZ.showFirstOperateGuide=false;
});
jQuery("#one_go").live("click",function(){
_a.showGuideDialog("two");
});
jQuery("#goStepThree").live("click",function(){
_a.dia.remove();
_a.showGuideDialog("three");
if(_a.selfTag.length>0){
jQuery("#mylovetag").html(_a.selfTag.join(""));
}else{
jQuery("#mylove_area").remove();
}
});
},shutNext:function(){
var _b=this;
jQuery.ajax({url:"/guide/close/operated?from="+_b.from,type:"post"});
},tagAttention:function(_c,_d){
var _e=this;
var _f=jQuery("#"+arguments[0]);
_f.find("li").mouseenter(function(){
jQuery(this).find("img").css({"filter":"alpha(opacity=100)","opacity":"1"});
jQuery(this).find(_d).css({"color":"#fff","background-color":"#000","background-position":"-3px -18px"});
}).mouseleave(function(){
if(!jQuery(this).find(_d).hasClass("empty")){
jQuery(this).find(_d).css({"background-position":"0 -45px"});
}
jQuery(this).find("img").css({"filter":"alpha(opacity=30)","opacity":"0.3"});
jQuery(this).find(_d).css({"color":"#000","background-color":""});
});
_f.find(_d).click(function(){
var _10=_e;
if(jQuery(this).hasClass("empty")==false){
var _11=jQuery(this).html();
var _12=jQuery(this);
jQuery.ajax({url:"/tag/"+encodeURI(_11)+"/follow?from="+_10.from,type:"post",dataType:"json",success:function(_13){
_12.addClass("empty");
_10.selfTag.push(_11);
}});
}
});
},siteAttention:function(_14,_15){
var _16=this;
var _17=jQuery("#"+arguments[0]);
_17.find("span").live("click",function(){
var _18=_16;
var _19=this;
var _1a=jQuery(this).parent().attr("data-key");
var _1b=jQuery("#personNum");
if(!jQuery(this).hasClass("atten")){
jQuery.ajax({url:"/"+_1a+"/follow?"+"from="+_18.from,type:"post",dataType:"json",success:function(_1c){
if(_1c.code==0){
jQuery(_19).parent("li").addClass("atten");
_1b.html(parseInt(_1b.html())+1);
}
}});
}
});
},findHidden:function(_1d,_1e){
var _1f=jQuery("#"+_1d+">li");
_1f.live("click",function(){
var _20=jQuery(this).attr("data-type");
jQuery("#"+_1d+">li").removeClass("touch");
jQuery(this).addClass("touch");
jQuery("#"+_1e+">li").css({"display":"none"});
if(_20=="all"){
jQuery("#"+_1e+">li").css({"display":"block"});
}else{
jQuery("#"+_1e+">li[data-type='"+_20+"']").css({"display":"block"});
}
});
}};