SmallSite.share={dialog:function(id,_2){
var _3=this;
this.tagReg=/^[A-Za-z0-9\u4E00-\u9FA5\uf900-\ufa2d]{1,}$/;
this.tagReg2=/^[A-Za-z0-9\u4E00-\u9FA5\uf900-\ufa2d]{1,}[,锛�;锛涖€�.\s]{1}$/;
this.tagTip="\u6dfb\u52a0\u8bdd\u9898";
if(typeof CURSITE.siteList=="undefined"){
CURSITE.siteList={};
}
_3.dia=jQuery.dialog({title:"\u5206\u4eab",width:660,noPadding:true,confirmText:"\u5206\u4eab",message:"\u52a0\u8f7d\u4e2d"});
this.dia.element.find(".confirm").attr("disabled","disabled");
this.getShare(id,function(r){
if(r.code!=0){
_3.dia.getBody().html("\u5206\u4eab\u52a0\u8f7d\u5931\u8d25\uff01");
}else{
_3.initBlogInfo(r);
_3.dia.element.find(".confirm").removeAttr("disabled");
var _5=[];
for(var i=0;i<r.postTags.length;i++){
_5.push(r.postTags[i]);
}
_3.dia.getBody().html(_3.renderShare(id,r));
if(XZ.showBindBubble==true){
XZ.showBindBubble=false;
jQuery.ajax({url:"/guide/close/bindBubbleClosed",type:"post",success:function(_7){
}});
}
jQuery("#shareDialogContainer").find(".tags-input").data("tagArr",_5);
_3.bindEvents(id,_2);
}
});
},initBlogInfo:function(r){
this.isMusic=r.isMusic;
if(this.blogInfo&&this.blogInfo["douban"]){
return;
}
this.blogInfo={"douban":{"hiddenName":"syncDouban","jsConstant":"syncDouban","syncClass":"douban-pic","unsyncClass":"douban-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u8c46\u74e3\u8bf4","unsyncTip":"\u672a\u540c\u6b65\u5230\u8c46\u74e3\u8bf4"},"sina":{"hiddenName":"syncSina","jsConstant":"syncSina","syncClass":"sina-pic","unsyncClass":"sina-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a"},"qqweibo":{"hiddenName":"syncQqweibo","jsConstant":"syncQqweibo","syncClass":"qqweibo-pic","unsyncClass":"qqweibo-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a"},"wangyi":{"hiddenName":"syncWangyi","jsConstant":"syncWangyi","syncClass":"wangyi-pic","unsyncClass":"wangyi-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","blogName":"\u7f51\u6613\u5fae\u535a"},"":{"hiddenName":"sync","jsConstant":"syncRenren","syncClass":"renren-pic","unsyncClass":"renren-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u4eba\u4eba\u7f51","unsyncTip":"\u672a\u540c\u6b65\u5230\u4eba\u4eba\u7f51"}};
for(var k in this.blogInfo){
CURSITE[this.blogInfo[k]["jsConstant"]]=r[k];
}
},getShare:function(id,cb){
jQuery.ajax({url:"/zhan/entry/"+id+"/popup",dataType:"json",success:function(r){
cb(r);
},error:function(){
}});
},checkShare:function(_d){
var _e=_d.find("input[name=siteId]").val();
if(!this.checkBlog(_d)&&_e==""){
alert("\u8bf7\u9009\u62e9\u53d1\u5e03\u5185\u5bb9\u53bb\u54ea");
return false;
}
return true;
},bindEvents:function(id,url,dia){
var _12=this;
var box=jQuery("#shareDialogContainer");
var _14=jQuery(".account-synca");
var _15=jQuery(".account-synca a");
var _16=box.find(".input-button");
var _17=box.find(".select-submit ul li");
var _18=box.find(".tags-input");
var _19=box.find("input[name=sync]");
var _1a=box.find("input[name=syncSina]");
var _1b=box.find("input[name=syncDouban]");
var _1c=box.find("input[name=siteId]");
var _1d=box.find(".site-list");
var _1e=box.find(".post-share form");
var _1f=box.parents(".post-cell");
var _20=function(){
jQuery.ajax({url:"/guide/close/bindBubbleClosed",type:"post",success:function(_21){
}});
};
_15.bind("click",function(){
jQuery(this).parent().parent().hide();
_20();
XZ.showBindBubble=false;
});
jQuery(_16).bind("click",function(){
_14.hide();
_20();
XZ.showBindBubble=false;
});
jQuery(_17).bind("click",function(){
_14.hide();
_20();
XZ.showBindBubble=false;
});
box.find("textarea[name=comment]").limitLength(140).focus();
_18.placeholder(_12.tagTip);
_18.bind("keydown",function(_22){
if(_22.keyCode===8){
if(jQuery(this).val()==""){
_22.preventDefault();
_12.removeTag(box,box.find(".selectioninputselection:last").attr("tag"));
}
}else{
if(_22.keyCode===188||_22.keyCode===59||_22.keyCode===13||_22.keyCode===32){
_22.preventDefault();
_12.addTag(jQuery(this),false,jQuery(this).val());
}
}
});
_18.bind("blur",function(_23){
_12.addTag(jQuery(this),true,jQuery(this).val());
});
_18.bind("propertychange",function(_24){
cutValue();
});
_18.bind("input",function(_25){
cutValue();
});
function cutValue(){
var val=_18.val();
var _27=val.replace(/[\u4E00-\u9FFF]/g,",,");
var _28=parseInt(_18.attr("maxlength"));
if(_27.length>_28){
_27=_27.substring(0,_28);
_27=_27.replace(/,,/g,";");
try{
_18.val(val.substring(0,_27.length));
}
catch(e){
}
}
}
box.find(".selectioninputwrapper").click(function(_29){
var _2a=_29.target;
if(jQuery(_2a).is(".selectioninputdelete")){
_29.stopPropagation();
_12.removeTag(box,jQuery(_2a).parent().attr("tag"));
}
});
box.find(".tag-selector").click(function(e){
e.preventDefault();
var _2c=e.target;
if(jQuery(_2c).is("a")){
_12.addTag(box.find(".tags-input"),true,jQuery(_2c).text());
return false;
}
});
box.find(".input-button").bind("click",function(){
if(_12.checkShare(box)){
jQuery(this).attr("disabled","disabled");
jQuery.ajax({url:"/"+url+"/"+id+"/share",dataType:"json",type:"post",data:box.find("form").serialize(),success:function(r){
jQuery(this).removeAttr("disabled");
if(r.code==0){
if(XZ.showFirstOperateGuide){
jQuery.use("guideLayout",function(){
new SmallSite.app.guideLayout();
});
}else{
if(SmallSite.app&&SmallSite.app.shareAboutPop){
new SmallSite.app.shareAboutPop("sharetip");
}
}
}else{
jQuery.messageDialog({message:r.msg||"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
}
_12.dia.remove();
},error:function(){
jQuery.messageDialog({message:"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
_12.dia.remove();
}});
}
});
box.find(".site-list a").click(function(){
var _2e=jQuery(this).attr("siteid");
var _2f="";
if(CURSITE.siteList[_2e]["recommendTags"]==undefined){
jQuery.ajax({url:"/"+CURSITE.siteList[_2e].url+"/recommendTags",dataType:"json",type:"get",success:function(r){
if(r.code==0){
CURSITE.siteList[_2e]["recommendTags"]=r.recommendTags;
for(var i=0;i<CURSITE.siteList[_2e]["recommendTags"].length;i++){
_2f+="<li><a href=\"javascript:;\">"+CURSITE.siteList[_2e]["recommendTags"][i]+"</a></li>";
}
box.find(".tag-selector").html(_2f);
_1c.val(CURSITE.siteList[_2e].id);
box.find(".zhan-box a:first").text(CURSITE.siteList[_2e].name).attr("siteid",_2e);
_1d.hide();
box.find(".zhan-box").removeClass("select").addClass("select").removeClass("havelist");
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
}});
}else{
for(var i=0;i<CURSITE.siteList[_2e]["recommendTags"].length;i++){
_2f+="<li><a href=\"javascript:;\">"+CURSITE.siteList[_2e]["recommendTags"][i]+"</a></li>";
}
box.find(".tag-selector").html(_2f);
_1c.val(CURSITE.siteList[_2e].id);
box.find(".zhan-box a:first").text(CURSITE.siteList[_2e].name);
_1d.hide();
box.find(".zhan-box").removeClass("select").addClass("select").removeClass("havelist");
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".renren-box").click(function(){
if(jQuery(this).is(".select")){
jQuery(this).removeClass("select");
_19.val(false);
}else{
jQuery(this).addClass("select");
_19.val(true);
}
if(_19.val()=="false"&&_1c.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").removeAttr("disabled").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".sync-items ul li a").click(function(e){
e.preventDefault();
var _34=jQuery(this).attr("data-sync-type");
var _35=jQuery(this).attr("data-status");
_12.toogleBlogStatus(box,_35,_34,jQuery(this));
});
box.find(".zhan-box").click(function(){
if(jQuery(this).is(".select")){
jQuery(this).removeClass("select").addClass("havelist");
_1c.val("");
}else{
jQuery(this).addClass("select").removeClass("havelist");
_1c.val(jQuery(this).find("a:first").attr("siteid"));
}
if(!_12.checkBlog(box)&&_1c.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".openlist,.closelist").click(function(){
if(_1d.is(":visible")){
jQuery(this).removeClass("openlist").addClass("closelist");
_1d.hide();
}else{
jQuery(this).removeClass("closelist").addClass("openlist");
_1d.show();
}
});
box.find(".close").click(function(){
_12.dia.remove();
});
},removeTag:function(box,val){
var arr=box.find(".tags-input").data("tagArr");
arr=SmallSite.util.removeFromArr(val,arr);
box.find(".tags-input").data("tagArr",arr);
box.find("span[tag="+val+"]").remove();
},toogleBlogStatus:function(box,_3a,_3b,obj){
if(!(CURSITE[this.blogInfo[_3b]["jsConstant"]])){
window.open("/zhan/settinginfo?sync=true");
}else{
var _3d=(_3a=="true"?this.blogInfo[_3b]["unsyncClass"]:this.blogInfo[_3b]["syncClass"]);
var _3e=(_3a=="true"?this.blogInfo[_3b]["unsyncTip"]:this.blogInfo[_3b]["syncTip"]);
var _3f=box.find("input[name="+this.blogInfo[_3b]["hiddenName"]+"]");
var _40=box.find("input[name=siteId]");
if(_3a=="true"){
box.find("input[name="+this.blogInfo[_3b]["hiddenName"]+"]").val(false);
obj.attr("data-status","false").attr("title",_3e);
}else{
_3f.val(true);
obj.attr("data-status","true").attr("title",_3e);
}
if(!this.checkBlog(box)&&_40.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
obj.attr("class",_3d);
}
},checkBlog:function(box){
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(box.find("input[name="+this.blogInfo[i].hiddenName+"]").val()=="true"){
return true;
}
}
return false;
},addTag:function(obj,_44,v){
var arr=obj.data("tagArr");
if(SmallSite.util.isInArray(v,arr)){
return;
}
if(arr.length>=5){
obj.val("");
return;
}
if(_44){
if(v==this.tagTip||!this.tagReg.test(v)){
return;
}
jQuery("<span class=\"selectioninputselection\" tag=\""+v+"\">"+v+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+v+"\"></span>").appendTo(obj.siblings("span"));
arr.push(v);
obj.data("tagArr",arr);
obj.val("");
}else{
if(!_44){
if(!this.tagReg.test(obj.val())||v==this.tagTip){
obj.val("");
}else{
jQuery("<span class=\"selectioninputselection\" tag=\""+v+"\">"+v+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+v+"\"></span>").appendTo(obj.siblings("span"));
arr.push(v);
obj.data("tagArr",arr);
obj.val("");
}
}
}
},renderShare:function(id,r){
var _49=["<div class=\"post-share\" id =\"shareDialogContainer\">","<div class=\"share-box\">","<p class=\"input-title\">\u8bf7\u6dfb\u52a0\u8bc4\u8bba\uff1a</p><a href=\"javascript:\" class=\"close\">\u5173\u95ed</a>","<form method=\"post\" action=\"#\">","<input type=\"hidden\" name=\"ugcId\" value=\""+id+"\"/>","<textarea  name=\"comment\" autocomplete=\"off\"></textarea>","<input type=\"hidden\" name=\"siteId\" value=\"\"/>"];
var _4a=[];
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
_4a.push("<input type=\"hidden\" name=\""+this.blogInfo[i]["hiddenName"]+"\" value=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\"/>");
}
_4a.push("<div class=\"tag-inputer clearfix\"><ul class=\"tag-selector\">");
for(var i=0;i<r.recommendTags.length;i++){
_4a.push("<li><a href=\"javascript:;\">"+r.recommendTags[i]+"</a></li>");
}
_4a.push("</ul><label class=\"selectioninputwrapper input-tagbox\" for=\"selectioninput\"><span>");
for(var i=0;i<r.postTags.length;i++){
_4a.push("<span class=\"selectioninputselection\" tag=\""+r.postTags[i]+"\">"+r.postTags[i]+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+r.postTags[i]+"\"></span>");
}
var _4c=["</span><input id=\"selectioninput\"  class=\"selectioninput tags-input\" data-norepeat=\"norepeat\" maxlength=\"20\" pattern=\"[wd\u4e00-\u9fa5]+\" placeholder=\"\u6dfb\u52a0\u8bdd\u9898\"></label>","</div>","</form>","<div class=\"share-btn-box clearfix\">","<input type=\"submit\" value=\"\u5206\u4eab\" class=\"input-button\" />","<div class=\"base-select-submit sync-items\" style=\"float:right\">","<div class=\"select-submit\">","<ul>"];
var _4d=[];
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(CURSITE[this.blogInfo[i]["jsConstant"]]){
_4d.push("<li><a title=\""+this.blogInfo[i]["syncTip"]+"\" class=\""+this.blogInfo[i]["syncClass"]+"\" href=\"javascript:;\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+i+"</a></li>");
}else{
_4d.push("<li><a title=\""+this.blogInfo[i]["unsyncTip"]+"\" class=\""+this.blogInfo[i]["unsyncClass"]+"\" href=\"/zhan/settinginfo\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+i+"</a></li>");
}
}
_4d.push("</ul></div></div><div class=\"share-to\"><span>\u53d1\u5e03\u5230</span>");
if(r.sites.length>0){
_4d.push("<dl><dt  class=\"zhan-box\"><a class=\"select\" siteid=\""+r.sites[0].id+"\" href=\"javascript:;\">"+r.sites[0].name+"</a><a class=\"closelist\" href=\"javascript:;\">\u9009\u62e9</a></dt><dd class=\"site-list\" style=\"display:none\">");
for(var i=0;i<r.sites.length;i++){
_4d.push("<a href=\"javascript:;\" siteid=\""+r.sites[i].id+"\">"+r.sites[i].name+"</a>");
if(typeof CURSITE.siteList[r.sites[i].id]=="undefined"){
CURSITE.siteList[r.sites[i].id]={"url":r.sites[i].url,"id":r.sites[i].id,"name":r.sites[i].name};
}
}
_4d.push("</dd></dl>");
}
var _4e=["</div>","</div>","</div>",((XZ.showBindBubble==true)?"<div class=\"account-synca\"><div class=\"textarea\"><p>\u5e10\u53f7\u540c\u6b65\uff0c\u5206\u4eab\u7ed9\u66f4\u591a\u597d\u53cb\uff01</p><a title=\"\u5173\u95ed\" href=\"javascript:void(0)\"></a></div></div>":""),"</div>"];
return _49.join("")+_4a.join("")+_4c.join("")+_4d.join("")+_4e.join("");
}};
SmallSite.shareSingle=function(id,url){
this.init(id,url);
};
SmallSite.shareSingle.prototype={init:function(id,url){
var _53=this;
this.tagReg=/^[A-Za-z0-9\u4E00-\u9FA5\uf900-\ufa2d]{1,}$/;
this.tagReg2=/^[A-Za-z0-9\u4E00-\u9FA5\uf900-\ufa2d]{1,}[,锛�;锛涖€�.\s]{1}$/;
this.tagTip="\u6dfb\u52a0\u8bdd\u9898";
if(typeof CURSITE.siteList=="undefined"){
CURSITE.siteList={};
}
jQuery("#feed_"+id+" .post-reply").hide();
var _54=jQuery("#feed_"+id+" .post-share");
if(_54.length>0){
if(_54.is(":visible")){
return;
}else{
_54.show();
return;
}
}
this.getShare(id,function(r){
if(r.code!=0){
}else{
_53.initBlogInfo(r);
var _56=[];
for(var i=0;i<r.postTags.length;i++){
_56.push(r.postTags[i]);
}
_53.dia=jQuery(_53.renderShare(id,r)).appendTo("#feed_"+id+" .post-footer");
_53.dia.find(".tags-input").data("tagArr",_56);
_53.bindEvents(id,url);
}
});
},initBlogInfo:function(r){
this.isMusic=r.isMusic;
if(this.blogInfo&&this.blogInfo["douban"]){
return;
}
this.blogInfo={"douban":{"hiddenName":"syncDouban","jsConstant":"syncDouban","syncClass":"douban-pic","unsyncClass":"douban-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u8c46\u74e3\u8bf4","unsyncTip":"\u672a\u540c\u6b65\u5230\u8c46\u74e3\u8bf4"},"sina":{"hiddenName":"syncSina","jsConstant":"syncSina","syncClass":"sina-pic","unsyncClass":"sina-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a"},"qqweibo":{"hiddenName":"syncQqweibo","jsConstant":"syncQqweibo","syncClass":"qqweibo-pic","unsyncClass":"qqweibo-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a"},"wangyi":{"hiddenName":"syncWangyi","jsConstant":"syncWangyi","syncClass":"wangyi-pic","unsyncClass":"wangyi-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","blogName":"\u7f51\u6613\u5fae\u535a"},"renren":{"hiddenName":"sync","jsConstant":"syncRenren","syncClass":"renren-pic","unsyncClass":"renren-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u4eba\u4eba\u7f51","unsyncTip":"\u672a\u540c\u6b65\u5230\u4eba\u4eba\u7f51"}};
for(var k in this.blogInfo){
CURSITE[this.blogInfo[k]["jsConstant"]]=r[k];
}
},getShare:function(id,cb){
jQuery.ajax({url:"/zhan/entry/"+id+"/popup",dataType:"json",success:function(r){
cb(r);
},error:function(){
}});
},checkShare:function(box){
var _5e=box.find("input[name=siteId]").val();
if(!this.checkBlog(box)&&_5e==""){
alert("\u8bf7\u9009\u62e9\u53d1\u5e03\u5185\u5bb9\u53bb\u54ea");
return false;
}
return true;
},bindEvents:function(id,url,dia){
var _62=this;
var box=jQuery("#shareDialogContainer");
var _64=box.find(".tags-input");
var _65=box.find("input[name=siteId]");
var _66=box.find(".site-list");
var _67=box.find(".post-share form");
var _68=box.parents(".post-cell");
box.find("textarea[name=comment]").limitLength(140).focus();
_64.placeholder(_62.tagTip);
_64.bind("keydown",function(_69){
if(_69.keyCode===8){
if(jQuery(this).val()==""){
_69.preventDefault();
_62.removeTag(box,box.find(".selectioninputselection:last").attr("tag"));
}
}else{
if(_69.keyCode===188||_69.keyCode===59||_69.keyCode===13||_69.keyCode===32){
_69.preventDefault();
_62.addTag(jQuery(this),false,jQuery(this).val());
}
}
});
_64.bind("blur",function(_6a){
_62.addTag(jQuery(this),true,jQuery(this).val());
});
_64.bind("propertychange",function(_6b){
cutValue();
});
_64.bind("input",function(_6c){
cutValue();
});
function cutValue(){
var val=_64.val();
var _6e=val.replace(/[\u4E00-\u9FFF]/g,",,");
var _6f=parseInt(_64.attr("maxlength"));
if(_6e.length>_6f){
_6e=_6e.substring(0,_6f);
_6e=_6e.replace(/,,/g,";");
try{
_64.val(val.substring(0,_6e.length));
}
catch(e){
}
}
}
box.find(".selectioninputwrapper").click(function(_70){
var _71=_70.target;
if(jQuery(_71).is(".selectioninputdelete")){
_70.stopPropagation();
_62.removeTag(box,jQuery(_71).parent().attr("tag"));
}
});
box.find(".tag-selector").click(function(e){
e.preventDefault();
var _73=e.target;
if(jQuery(_73).is("a")){
_62.addTag(box.find(".tags-input"),true,jQuery(_73).text());
return false;
}
});
box.find(".share-box form").submit(function(){
return false;
});
box.find(".input-button").bind("click",function(){
if(_62.checkShare(box)){
jQuery(this).attr("disabled","disabled");
jQuery.ajax({url:"/"+url+"/"+id+"/share",dataType:"json",type:"post",data:box.find("form").serialize(),success:function(r){
jQuery(this).removeAttr("disabled");
if(r.code==0){
if(XZ.showFirstOperateGuide){
jQuery.use("guideLayout",function(){
new SmallSite.app.guideLayout();
});
}else{
if(SmallSite.app&&SmallSite.app.shareAboutPop){
new SmallSite.app.shareAboutPop("sharetip");
}
}
}else{
jQuery.messageDialog({message:r.msg||"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
}
_62.dia.remove();
},error:function(){
jQuery.messageDialog({message:"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
_62.dia.remove();
}});
}
});
box.find(".site-list a").click(function(){
var _75=jQuery(this).attr("siteid");
var _76="";
if(CURSITE.siteList[_75]["recommendTags"]==undefined){
jQuery.ajax({url:"/"+CURSITE.siteList[_75].url+"/recommendTags",dataType:"json",type:"get",success:function(r){
if(r.code==0){
CURSITE.siteList[_75]["recommendTags"]=r.recommendTags;
for(var i=0;i<CURSITE.siteList[_75]["recommendTags"].length;i++){
_76+="<li><a href=\"javascript:;\">"+CURSITE.siteList[_75]["recommendTags"][i]+"</a></li>";
}
box.find(".tag-selector").html(_76);
_65.val(CURSITE.siteList[_75].id);
box.find(".zhan-box a:first").text(CURSITE.siteList[_75].name).attr("siteid",_75);
_66.hide();
box.find(".zhan-box").removeClass("select").addClass("select").removeClass("havelist");
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
}});
}else{
for(var i=0;i<CURSITE.siteList[_75]["recommendTags"].length;i++){
_76+="<li><a href=\"javascript:;\">"+CURSITE.siteList[_75]["recommendTags"][i]+"</a></li>";
}
box.find(".tag-selector").html(_76);
_65.val(CURSITE.siteList[_75].id);
box.find(".zhan-box a:first").text(CURSITE.siteList[_75].name);
_66.hide();
box.find(".zhan-box").removeClass("select").addClass("select").removeClass("havelist");
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".renren-box").click(function(){
if(jQuery(this).is(".select")){
jQuery(this).removeClass("select");
sync.val(false);
}else{
jQuery(this).addClass("select");
sync.val(true);
}
if(sync.val()=="false"&&_65.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").removeAttr("disabled").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".sync-items ul li a").click(function(e){
e.preventDefault();
var _7b=jQuery(this).attr("data-sync-type");
var _7c=jQuery(this).attr("data-status");
_62.toogleBlogStatus(box,_7c,_7b,jQuery(this));
});
box.find(".zhan-box").click(function(){
if(jQuery(this).is(".select")){
jQuery(this).removeClass("select").addClass("havelist");
_65.val("");
}else{
jQuery(this).addClass("select").removeClass("havelist");
_65.val(jQuery(this).find("a:first").attr("siteid"));
}
if(!_62.checkBlog(box)&&_65.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
});
box.find(".openlist,.closelist").click(function(){
if(_66.is(":visible")){
jQuery(this).removeClass("openlist").addClass("closelist");
_66.hide();
}else{
jQuery(this).removeClass("closelist").addClass("openlist");
_66.show();
}
});
box.find(".close").click(function(){
_62.dia.remove();
});
},removeTag:function(box,val){
var arr=box.find(".tags-input").data("tagArr");
arr=SmallSite.util.removeFromArr(val,arr);
box.find(".tags-input").data("tagArr",arr);
box.find("span[tag="+val+"]").remove();
},toogleBlogStatus:function(box,_81,_82,obj){
if(!(CURSITE[this.blogInfo[_82]["jsConstant"]])){
window.open("/zhan/settinginfo?sync=true");
}else{
var _84=(_81=="true"?this.blogInfo[_82]["unsyncClass"]:this.blogInfo[_82]["syncClass"]);
var _85=(_81=="true"?this.blogInfo[_82]["unsyncTip"]:this.blogInfo[_82]["syncTip"]);
var _86=box.find("input[name="+this.blogInfo[_82]["hiddenName"]+"]");
var _87=box.find("input[name=siteId]");
if(_81=="true"){
box.find("input[name="+this.blogInfo[_82]["hiddenName"]+"]").val(false);
obj.attr("data-status","false").attr("title",_85);
}else{
_86.val(true);
obj.attr("data-status","true").attr("title",_85);
}
if(!this.checkBlog(box)&&_87.val()==""){
box.find(".input-button").removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}else{
box.find(".input-button").removeClass("gray-button").removeAttr("disabled");
}
obj.attr("class",_84);
}
},checkBlog:function(box){
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(box.find("input[name="+this.blogInfo[i].hiddenName+"]").val()=="true"){
return true;
}
}
return false;
},addTag:function(obj,_8b,v){
var arr=obj.data("tagArr");
if(SmallSite.util.isInArray(v,arr)){
return;
}
if(arr.length>=5){
obj.val("");
return;
}
if(_8b){
if(v==this.tagTip||!this.tagReg.test(v)){
return;
}
jQuery("<span class=\"selectioninputselection\" tag=\""+v+"\">"+v+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+v+"\"></span>").appendTo(obj.siblings("span"));
arr.push(v);
obj.data("tagArr",arr);
obj.val("");
}else{
if(!_8b){
if(!this.tagReg.test(obj.val())||v==this.tagTip){
obj.val("");
}else{
jQuery("<span class=\"selectioninputselection\" tag=\""+v+"\">"+v+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+v+"\"></span>").appendTo(obj.siblings("span"));
arr.push(v);
obj.data("tagArr",arr);
obj.val("");
}
}
}
},renderShare:function(id,r){
var _90=["<div class=\"post-share miqiang-share\" id =\"shareDialogContainer\">","<div class=\"share-box\">","<form method=\"post\" action=\"#\">","<input type=\"hidden\" name=\"ugcId\" value=\""+id+"\"/>","<textarea  name=\"comment\" autocomplete=\"off\"></textarea>","<input type=\"submit\" value=\"\u5206\u4eab\" class=\"input-button\" />","<input type=\"hidden\" name=\"siteId\" value=\"\"/>"];
var _91=[];
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
_91.push("<input type=\"hidden\" name=\""+this.blogInfo[i]["hiddenName"]+"\" value=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\"/>");
}
_91.push("<div class=\"tag-inputer clearfix\"><ul class=\"tag-selector\">");
for(var i=0;i<r.recommendTags.length;i++){
_91.push("<li><a href=\"javascript:;\">"+r.recommendTags[i]+"</a></li>");
}
_91.push("</ul><label class=\"selectioninputwrapper input-tagbox\" for=\"selectioninput\"><span>");
for(var i=0;i<r.postTags.length;i++){
_91.push("<span class=\"selectioninputselection\" tag=\""+r.postTags[i]+"\">"+r.postTags[i]+"<span class=\"selectioninputdelete\"></span><input type=\"hidden\" name=\"tag\" value=\""+r.postTags[i]+"\"></span>");
}
var _93=["</span><input id=\"selectioninput\"  class=\"selectioninput tags-input\" data-norepeat=\"norepeat\" maxlength=\"20\" pattern=\"[wd\u4e00-\u9fa5]+\" placeholder=\"\u6dfb\u52a0\u8bdd\u9898\"></label>","</div>","</form>","<div class=\"share-btn-box clearfix\">","<div class=\"base-select-submit sync-items\" style=\"float:right\">","<div class=\"select-submit\">","<ul>"];
var _94=[];
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(CURSITE[this.blogInfo[i]["jsConstant"]]){
_94.push("<li><a title=\""+this.blogInfo[i]["syncTip"]+"\" class=\""+this.blogInfo[i]["syncClass"]+"\" href=\"javascript:;\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+i+"</a></li>");
}else{
_94.push("<li><a title=\""+this.blogInfo[i]["unsyncTip"]+"\" class=\""+this.blogInfo[i]["unsyncClass"]+"\" href=\"/zhan/settinginfo\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+i+"</a></li>");
}
}
_94.push("</ul></div></div><div class=\"share-to\"><span>\u53d1\u5e03\u5230</span>");
if(r.sites.length>0){
_94.push("<dl><dt  class=\"zhan-box\"><a class=\"select\" siteid=\""+r.sites[0].id+"\" href=\"javascript:;\">"+r.sites[0].name+"</a><a class=\"closelist\" href=\"javascript:;\">\u9009\u62e9</a></dt><dd class=\"site-list\" style=\"display:none\">");
for(var i=0;i<r.sites.length;i++){
_94.push("<a href=\"javascript:;\" siteid=\""+r.sites[i].id+"\">"+r.sites[i].name+"</a>");
if(typeof CURSITE.siteList[r.sites[i].id]=="undefined"){
CURSITE.siteList[r.sites[i].id]={"url":r.sites[i].url,"id":r.sites[i].id,"name":r.sites[i].name};
}
}
_94.push("</dd></dl>");
}
var _95=["</div>","</div>","</div>",((XZ.showBindBubble==true)?"<div class=\"account-synca\"><div class=\"textarea\"><p>\u5e10\u53f7\u540c\u6b65\uff0c\u5206\u4eab\u7ed9\u66f4\u591a\u597d\u53cb\uff01</p><a title=\"\u5173\u95ed\" href=\"javascript:void(0)\"></a></div></div>":""),"</div>"];
return _90.join("")+_91.join("")+_93.join("")+_94.join("")+_95.join("");
}};
SmallSite.app=SmallSite.app||{};
SmallSite.app.share={dialog:function(id,url){
var _98=this;
XZ.USER=XZ.USER||{};
XZ.USER.sites=XZ.USER.sites||{};
XZ.USER.sites[CURSITE.url]=XZ.USER.sites[CURSITE.url]||{};
_98.dia=jQuery.dialog({title:"\u5206\u4eab",width:616,noPadding:true,confirmText:"\u5206\u4eab",message:"\u52a0\u8f7d\u4e2d"});
this.dia.element.find(".confirm").attr("disabled","disabled");
this.getShare(id,function(r){
if(r.code!=0){
_98.dia.getBody().html("\u5206\u4eab\u52a0\u8f7d\u5931\u8d25\uff01");
}else{
_98.initBlogInfo(r);
_98.dia.element.find(".confirm").removeAttr("disabled");
var _9a=[];
for(var i=0;i<r.postTags.length;i++){
_9a.push(r.postTags[i]);
}
XZ.USER.sites[CURSITE.url]["recommendTags"]=r.recommendTags;
_98.dia.getBody().html(_98.renderShare(r.recommendTags,id));
var box=_98.dia.getBody().find(".feed-share");
jQuery.use("tag",function(){
var _9d={box:box.find(".write-tag-box")};
var s={tags:_9a,maxNum:5};
var _9f=new SmallSite.app.Subject(jQuery.extend({},_9d,s));
jQuery.extend(_9d,{input:box.find("input[name=taginput]"),"subject":_9f});
new SmallSite.app.SubjectBox(_9d);
box.delegate(".tag-selector li a","click",function(){
jQuery(_9f).triggerHandler("render",[{"val":jQuery(this).attr("data-tag")}]);
});
});
jQuery.use("zhanswitch",function(){
var _a0=box.find(".input-btn");
var _a1=new SmallSite.app.zhanSwitch({sites:sitelist,curtags:XZ.USER.sites[CURSITE.url]["recommendTags"],zhanBox:box.find(".share-main"),siteUrl:box.find("input[name=toSiteUrl]"),isGetTag:true,tagBox:box.find(".tag-selector"),submitBtn:_a0,shareText:"\u53d1\u5e03\u5230",selected:false});
jQuery(_a1).bind("selected",function(_a2){
_a0.removeClass("gray-button").removeAttr("disabled");
});
jQuery(_a1).bind("unselected",function(_a3){
var _a4=box.find("input[name=toSiteUrl]");
if(!_98.checkBlog(box)&&_a4.val()==""){
_a0.removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}
});
});
if(XZ.showBindBubble==true){
XZ.showBindBubble=false;
jQuery.ajax({url:"/guide/close/bindBubbleClosed",type:"post",success:function(_a5){
}});
}
_98.bindEvents(id,url);
}
});
},initBlogInfo:function(r){
this.isMusic=r.isMusic;
if(this.blogInfo&&this.blogInfo["douban"]){
return;
}
this.blogInfo={"douban":{"hiddenName":"syncDouban","jsConstant":"syncDouban","syncClass":"douban","unsyncClass":"douban-off","syncTip":"\u5df2\u540c\u6b65\u5230\u8c46\u74e3\u8bf4","unsyncTip":"\u672a\u540c\u6b65\u5230\u8c46\u74e3\u8bf4","blogName":"\u8c46\u74e3"},"sina":{"hiddenName":"syncSina","jsConstant":"syncSina","syncClass":"sina","unsyncClass":"sina-off","syncTip":"\u5df2\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u65b0\u6d6a\u5fae\u535a","blogName":"\u65b0\u6d6a\u5fae\u535a"},"qqweibo":{"hiddenName":"syncQqweibo","jsConstant":"syncQqweibo","syncClass":"tengxun","unsyncClass":"tengxun-off","syncTip":"\u5df2\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u817e\u8baf\u5fae\u535a","blogName":"\u817e\u8baf\u5fae\u535a"},"wangyi":{"hiddenName":"syncWangyi","jsConstant":"syncWangyi","syncClass":"wangyi-pic","unsyncClass":"wangyi-pic2","syncTip":"\u5df2\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","unsyncTip":"\u672a\u540c\u6b65\u5230\u7f51\u6613\u5fae\u535a","blogName":"\u7f51\u6613\u5fae\u535a"},"renren":{"hiddenName":"sync","jsConstant":"syncRenren","syncClass":"renren","unsyncClass":"renren-off","syncTip":"\u5df2\u540c\u6b65\u5230\u4eba\u4eba\u7f51","unsyncTip":"\u672a\u540c\u6b65\u5230\u4eba\u4eba\u7f51","blogName":"\u4eba\u4eba\u7f51"}};
for(var k in this.blogInfo){
CURSITE[this.blogInfo[k]["jsConstant"]]=r[k];
}
},getShare:function(id,cb){
jQuery.ajax({url:"/zhan/entry/"+id+"/popup",dataType:"json",success:function(r){
cb(r);
},error:function(){
}});
},checkShare:function(box){
var _ac=box.find("input[name=toSiteUrl]").val();
if(!this.checkBlog(box)&&_ac==""){
alert("\u8bf7\u9009\u62e9\u53d1\u5e03\u5185\u5bb9\u53bb\u54ea");
return false;
}
return true;
},bindEvents:function(id,url,dia){
var _b0=this;
var box=jQuery("#shareDialogBox");
var _b2=jQuery(".account-synca");
var _b3=jQuery(".account-synca a");
var _b4=box.find(".input-btn");
var _b5=box.find(".select-submit ul li");
var _b6=box.find(".tags-input");
var _b7=box.find("input[name=sync]");
var _b8=function(){
jQuery.ajax({url:"/guide/close/bindBubbleClosed",type:"post",success:function(_b9){
}});
};
_b3.bind("click",function(){
jQuery(this).parent().parent().hide();
_b8();
XZ.showBindBubble=false;
});
jQuery(_b4).bind("click",function(){
_b2.hide();
_b8();
XZ.showBindBubble=false;
});
jQuery(_b5).bind("click",function(){
_b2.hide();
_b8();
XZ.showBindBubble=false;
});
box.find("textarea[name=comment]").limitLength(140).focus();
box.find(".share-select a").click(function(e){
e.preventDefault();
var _bb=jQuery(this).attr("data-sync-type");
var _bc=jQuery(this).attr("data-status");
_b0.toogleBlogStatus(box,_bc,_bb,jQuery(this));
});
box.find(".input-btn").bind("click",function(e){
e.preventDefault();
if(_b0.checkShare(box)){
jQuery(this).attr("disabled","disabled");
jQuery.ajax({url:"/"+url+"/"+id+"/share",dataType:"json",type:"post",data:box.find("form").serialize(),success:function(r){
jQuery(this).removeAttr("disabled");
if(r.code==0){
if(XZ.showFirstOperateGuide){
jQuery.use("guideLayout",function(){
new SmallSite.app.guideLayout();
});
}else{
if(SmallSite.app&&SmallSite.app.shareAboutPop){
new SmallSite.app.shareAboutPop("sharetip");
}
}
}else{
jQuery.messageDialog({message:r.msg||"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
}
_b0.dia.remove();
},error:function(){
jQuery.messageDialog({message:"\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"});
_b0.dia.remove();
}});
}
});
box.find(".close").click(function(){
_b0.dia.remove();
});
},toogleBlogStatus:function(box,_c0,_c1,obj){
if(!(CURSITE[this.blogInfo[_c1]["jsConstant"]])){
window.open("/zhan/settinginfo?sync=true");
}else{
var _c3=(_c0=="true"?this.blogInfo[_c1]["unsyncClass"]:this.blogInfo[_c1]["syncClass"]);
var _c4=(_c0=="true"?this.blogInfo[_c1]["unsyncTip"]:this.blogInfo[_c1]["syncTip"]);
var _c5=box.find("input[name="+this.blogInfo[_c1]["hiddenName"]+"]");
var _c6=box.find("input[name=toSiteUrl]");
if(_c0=="true"){
box.find("input[name="+this.blogInfo[_c1]["hiddenName"]+"]").val(false);
obj.attr("data-status","false").attr("title",_c4);
}else{
_c5.val(true);
obj.attr("data-status","true").attr("title",_c4);
}
if(!this.checkBlog(box)&&_c6.val()==""){
box.find(".input-btn").removeClass("gray-button").addClass("gray-button").attr("disabled","disabled");
}else{
box.find(".input-btn").removeClass("gray-button").removeAttr("disabled");
}
obj.attr("class",_c3);
}
},checkBlog:function(box){
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(box.find("input[name="+this.blogInfo[i].hiddenName+"]").val()=="true"){
return true;
}
}
return false;
},renderShare:function(_c9,id){
var _cb=this;
var _cc="<input type=\"submit\" value=\"\u5206\u4eab\" class=\"input-btn\" >";
function checkHaveBlog(){
for(var i in _cb.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(CURSITE[_cb.blogInfo[i]["jsConstant"]]==true){
return true;
}
}
return false;
}
if(!checkHaveBlog()){
_cc="<input type=\"submit\" value=\"\u5206\u4eab\" disabled class=\"input-btn gray-button\" >";
}
return ["<div class=\"feed-share clearfix\"  id=\"shareDialogBox\">","<div class=\"feed-add-act clearfix\">","<p class=\"input-title\">\u8bf7\u6dfb\u52a0\u8bc4\u8bba\uff1a</p><a href=\"javascript:\" class=\"close\">\u5173\u95ed</a>","<form name=\"shareForm\">","<textarea name=\"comment\" class=\"input-reply\"></textarea>","<input type=\"hidden\" name=\"toSiteUrl\" value=\"\">","<input type=\"hidden\" name=\"ugcId\" value=\""+id+"\"/>","<div class=\"tag-inputer clearfix\">","<ul class=\"tag-selector\">"+this.getTagHtml(_c9)+"</ul>","<label class=\"write-tag-feed\">","<span class=\"write-tag-box\"></span>","<input name=\"taginput\" data-norepeat=\"norepeat\" maxlength=\"20\" placeholder=\"\u6dfb\u52a0\u8bdd\u9898\" class=\"tag-input\">","</label>","</div>","<div class=\"share-btn-box clearfix\">",""+_cc,"<div class=\"share-select\">"+this.getBlog()+"</div>","<div class=\"share-main\"></div>","</div>","</form>","</div>","</div>"].join("");
},getBlog:function(){
var _ce=[];
for(var i in this.blogInfo){
if(this.isMusic&&i=="renren"){
continue;
}
if(CURSITE[this.blogInfo[i]["jsConstant"]]){
_ce.push("<a title=\""+this.blogInfo[i]["syncTip"]+"\" class=\""+this.blogInfo[i]["syncClass"]+"\" href=\"javascript:;\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+this.blogInfo[i]["blogName"]+"</a>"+"<input type=\"hidden\" name=\""+this.blogInfo[i]["hiddenName"]+"\" value=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\"/>");
}else{
_ce.push("<a title=\""+this.blogInfo[i]["unsyncTip"]+"\" class=\""+this.blogInfo[i]["unsyncClass"]+"\" href=\"/zhan/settinginfo\" data-sync-type=\""+i+"\" data-status=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\">"+this.blogInfo[i]["blogName"]+"</a>"+"<input type=\"hidden\" name=\""+this.blogInfo[i]["hiddenName"]+"\" value=\""+CURSITE[this.blogInfo[i]["jsConstant"]]+"\"/>");
}
}
return _ce.join("");
},getTagHtml:function(_d0){
var _d1=[];
for(var i=0;i<_d0.length;i++){
_d1.push("<li><a data-tag=\""+_d0[i]+"\" href=\"javascript:;\">"+_d0[i]+"</a></li>");
}
return _d1.join("");
}};