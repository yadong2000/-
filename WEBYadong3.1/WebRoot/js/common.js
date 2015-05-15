(function(){
var $=jQuery;
var _1=CURSITE.id||"";
var _2=CURSITE.url||"";
var _3={data:{},limit:10,dataType:"html",order:true,addAction:function(_4,_5,_6){
var _7=this;
var _8=_5;
if(_6){
_8+=_6;
}
$.ajax({url:""+_2+"/"+_4+"/comment",type:"post",data:_8+"&type="+_7.dataType,dataType:"json",success:function(r){
if(r.code==0){
$(_7).triggerHandler("addSuccess",[_4,r,++_7.data[_4].total]);
}else{
if(r.code==-100||r.code==-200){
_7.safeCodeDialog(_4,_5);
}else{
jQuery.messageDialog({message:r.msg||"鍑洪敊浜�"});
}
}
},complete:function(r){
var _9=JSON.parse(r.responseText);
$(_7).triggerHandler("addComplete",[_4]);
},error:function(){
$(_7).triggerHandler("addError");
}});
},loadAction:function(_a){
var _b=true;
if(this.data[_a].curpage>=(this.data[_a].pageNum-1)){
_b=false;
}
var _c=this;
$.ajax({url:""+_2+"/"+_a+"/comment/list",type:"get",data:"count="+this.limit+"&page="+this.data[_a].curpage+"&type="+_c.dataType+"&order="+_c.order,dataType:"json",success:function(r){
_c.data[_a].curpage++;
if(r.code==0){
$(_c).triggerHandler("loadSuccess",[_a,r,_b]);
}else{
jQuery.messageDialog({message:r.msg||"鍑洪敊浜�"});
}
},error:function(){
$(_c).triggerHandler("loadError");
}});
},shieldAction:function(_d,_e,_f,_10,_11){
jQuery.ajax({url:""+_2+"/block/add?id="+_d+"&ugcId="+_e+"&commentId="+_f,type:"post",dataType:"json",success:function(r){
if(r.code==0){
jQuery.messageDialog({message:"灞忚斀鎴愬姛"});
}else{
jQuery.messageDialog({message:r.msg||"鍑洪敊浜�"});
}
},error:function(){
}});
},delAction:function(_12,_13){
var _14=this;
$.ajax({url:""+_2+"/"+_12+"/comment/"+_13+"/delete",type:"post",dataType:"json",success:function(r){
if(r.code==0){
if(_14.data[_12].total>0){
$(_14).triggerHandler("delSuccess",[_13,_12,--_14.data[_12].total]);
}else{
$(_14).triggerHandler("delSuccess",[_13,_12,0]);
}
}else{
jQuery.messageDialog({message:r.msg||"鍑洪敊浜�"});
}
},error:function(){
$(_14).triggerHandler("delError");
}});
},extend:function(obj,_15,ov){
if(ov!==false){
ov=true;
}
for(var _16 in _15){
if(ov||obj[_16]===undefined){
obj[_16]=_15[_16];
}
}
if(_15&&_15.hasOwnProperty("call")){
obj.call=_15.call;
}
return obj;
},init:function(_17){
var _18=this;
this.extend(_17);
$(this).unbind("addAction").bind("addAction",function(_19,_1a,_1b){
_18.addAction(_1a,_1b);
}).unbind("loadAction").bind("loadAction",function(_1c,_1d){
_18.loadAction(_1d);
}).unbind("delAction").bind("delAction",function(_1e,_1f,_20){
_18.delAction(_1f,_20);
}).unbind("initPager").bind("initPager",function(_21,_22,_23){
_18.data[_22]={"total":_23,"pageNum":Math.ceil(_23/_18.limit),"curpage":0};
}).unbind("shieldAction").bind("shieldAction",function(_24,_25,_26,_27,_28,_29){
_18.shieldAction(_25,_26,_27,_28,_29);
});
},safeCodeDialog:function(_2a,_2b){
var _2c=this;
var _2d="localhost:8080/ssm";
var _2e="<div id=\"safeCodeDialog\"><span style=\"font-size:16px;color:#000;\">璇疯緭鍏ラ獙璇佺爜</span><p style=\"margin-top:10px;margin-bottom:10px;\"><input type=\"text\" name=\"icode\" id=\"comment_icode\" style=\"float:left ;height:43px;width:170px;line-height:43px;border:1px solid #ccc;\"/><img  src=\""+_2d+"&rnd="+Math.random()+"\" style=\"height:45px;width:120px;margin-left:10px;\"/><a href=\"javascript:;\"  id=\"comment_changeCode\" style=\"color:#00b9bd;margin-left:10px;vertical-align:bottom ;\">鎹竴寮�</a></p></div>";
var _2f=jQuery.popDialog({message:_2e,width:420,nofooter:false,callback:function(){
var _30=jQuery("#comment_icode");
var val=jQuery.trim(_30.val());
if(val==""){
_30.css("borderColor","#ed4e34");
_30.focus();
}else{
_2f.hide();
_2c.addAction(_2a,_2b,"&icode="+jQuery("#comment_icode").val());
}
}});
var _31=jQuery("#comment_icode");
this.bindSafeEvent(_2d);
},bindSafeEvent:function(req){
var _32=jQuery("#comment_icode");
_32.unbind("blur").blur(function(){
if(jQuery.trim(_32.val())!==""){
_32.css("borderColor","#ccc");
}else{
_32.css("borderColor","#ed4e34");
}
});
jQuery("#comment_changeCode").unbind("click").click(function(){
jQuery("#safeCodeDialog img").attr("src",req+"&rnd="+Math.random());
});
}};
window.CommentAction=_3;
})();
(function(){
var $=jQuery;
var _33={tooLong:"鏂囧瓧杩囧,鏈€澶�140涓瓧绗︼紒",requireTip:"璇峰～鍐欎綘瑕佸洖澶嶇殑鍐呭",limit:140,isSyncTotal:CURSITE.isSyncReplyTotal,init:function(){
var _34=this;
CommentAction.init();
if(CURSITE.notComment!=true){
jQuery(".post .post-action li .reply").live("click.reply",function(_35,_36){
_35.preventDefault();
if(CURSITE.auth!=true){
SmallSite.login.dialog();
return;
}
var id=jQuery(this).attr("id").substring(11);
if(document.body.id==="miqiang"){
jQuery("#feed_"+id+" .post-share").hide();
}
var _37=($("#feed_"+id).data("init")==true);
var _38=$("#feed_"+id).attr("replycount");
var _39=$("#replylist"+id);
var _3a=$("#replies"+id);
if(_3a.is(":visible")){
$("#feed_"+id).children(".post-footer").removeClass("post-change");
_3a.hide();
}else{
$("#feed_"+id).children(".post-footer").addClass("post-change");
if(_37){
_3a.show();
_34.initEditor(id);
}else{
if(_38=="0"){
_34.initComment(id);
_3a.show();
if(_36==true){
$("#content"+id).focus();
}
}else{
var p=$("#feed_"+id);
if(p.data("loading")==false||p.data("loading")==undefined){
_34.initComment(id);
p.data("loading",true);
$("#loading_"+id).show();
$(CommentAction).triggerHandler("loadAction",[id]);
}
}
}
}
});
}
$(CommentAction).bind("loadSuccess",function(_3b,id,ret,_3c){
$("#feed_"+id).data("loading",false);
$("#loading_"+id).hide();
$("#replylist"+id).append(ret.html);
$("#replies"+id).show();
$("#feed_"+id).data("init",true);
if(_3c){
$("#morecoment_"+id).parent().show();
}else{
$("#morecoment_"+id).parent().hide();
}
if(jQuery.queryString("t")=="cmt"){
$("#content"+id).focus();
}
});
$(CommentAction).bind("addSuccess",function(_3d,id,ret,_3e){
$("#replies"+id+" form").data("requesting",false);
$("#replies"+id).find("input[type=submit]").removeAttr("disabled");
var _3f=$(ret.html);
if(!$("#replylist"+id+" li:first-child").is(".even")){
_3f.addClass("even");
}
$("#replylist"+id).prepend(_3f);
_34.updateNumber(id,_3e);
_34.initEditor(id);
if(XZ.showFirstOperateGuide){
jQuery.use("guideLayout",function(){
new SmallSite.app.guideLayout();
});
}
});
$(CommentAction).bind("addComplete",function(_40,id){
$("#replies"+id+" form").data("requesting",false);
$("#replies"+id).find("input[type=submit]").removeAttr("disabled");
});
$(CommentAction).bind("delSuccess",function(_41,id,_42,_43){
$("#reply_"+id).remove();
_34.updateNumber(_42,_43);
});
$(CommentAction).bind("delDialogSuccess",function(_44,obj){
$(obj).remove();
});
},initComment:function(id){
var _45=this;
$("#replies"+id+" form").submit(function(_46){
_46.preventDefault();
if($(this).data("requesting")!=true){
$("#replies"+id+" form").data("requesting",true);
if(!_45.check(id)){
$("#replies"+id+" form").data("requesting",false);
return;
}else{
$("#replies"+id).find("input[type=submit]").attr("disabled","disabled");
$(CommentAction).triggerHandler("addAction",[id,$(this).serialize()]);
}
}
}).quickSubmit();
$("#morecoment_"+id).click(function(){
var p=$("#feed_"+id);
if(p.data("loading")==false||p.data("loading")==undefined){
p.data("loading",true);
setTimeout(function(){
$(CommentAction).triggerHandler("loadAction",[id]);
},0);
}
});
$("#replylist"+id).click(function(_47){
var id=jQuery(this).parents("article").attr("data-feedid");
if(!id){
id=jQuery(this).attr("id").substring(9);
}
var _48=_47.target;
var _49=jQuery(_48).attr("order");
var _4a=XZ.hostId;
if(jQuery(_48).hasClass("reply-report")){
var _4b=jQuery(_48).parents("li").find(".comment-text").text();
}
_49=eval("("+_49+")");
if(_49&&_49.type=="reply"){
_45.replyAction(id,_49);
}else{
if(_49&&_49.type=="del"){
_45.delAction(id,_49.id);
}else{
if(_49&&_49.type=="block"){
_45.shieldAction(jQuery(_48),_49,id);
}else{
if(_49&&_49.type=="report"){
_45.reportAction(id,_49.id,_49.toId,_4a,_4b);
}
}
}
}
});
$("#replylist"+id).delegate("li","mouseenter",function(_4c){
jQuery(this).data("isEnter",true);
jQuery(this).find(".reply-report, .delete, .shield, .to-share").show();
jQuery(this).find(".reply-time").hide();
}).delegate("li","mouseleave",function(_4d){
jQuery(this).data("isEnter",false);
var _4e=jQuery(this);
var _4f=jQuery(".smallsite-card");
if(!jQuery(_4d.relatedTarget).is(".smallsite-card")){
jQuery(this).find(".reply-report, .delete, .shield, .to-share").hide();
jQuery(this).find(".reply-time").show();
}else{
setTimeout(function(){
if(_4f.is(":visible")){
_4f.mouseleave(function(_50){
setTimeout(function(){
if(_4e.data("isEnter")==true){
return;
}
_4e.find(".reply-report, .delete, .shield, .to-share").hide();
_4e.find(".reply-time").show();
},500);
});
}
},50);
}
});
$("#content"+id).limitLength(_45.limit);
$("#replies"+id).find(".release .btn").click(function(_51){
_51.preventDefault();
var _52=jQuery(this).attr("order");
_52=eval("("+_52+")");
if(_52&&_52.type=="reply"){
_45.replyAction(id,_52);
}
});
$(CommentAction).triggerHandler("initPager",[id,$("#feed_"+id).attr("replycount")]);
},replyAction:function(id,_53){
this.initEditor(id,_53);
},shieldAction:function(cur,_54,_55){
var _56=this;
var _57=["<div class = \"shieldContent\">","<p  class = \"ptext\" >纭畾瑕佸睆钄藉悧锛�</p>","<p  class = \"ptextWho\">灏忕珯涓嶄細鍐嶆敹鍒�"+_54.name+"鐨勮瘎璁�</p>","</div>","<div class =\"shieldButton\">","<div class = \"shieldConfirm\"><a id = \"shieldConfirm\" href=\"javascript:;\">灞忚斀</a></div>","<div class = \"shieldCancle\"><a id = \"shieldCancle\" href=\"javascript:;\">鍙栨秷</a></div>","</div>"].join("");
var _58=jQuery.alertDialog({message:_57,width:437});
_58.getFooter().hide();
_58.getHeader().hide();
jQuery("div.shieldConfirm").bind("click",function(){
var _59=jQuery(this).offset().left;
var _5a=jQuery(this).offset().top;
$(CommentAction).triggerHandler("shieldAction",[_54.toId,_55,_54.id,_59,_5a]);
});
jQuery("div.shieldCancle").bind("click",function(){
_58.hide();
});
},reportAction:function(id,_5b,_5c,_5d,_5e){
var _5f=this;
var _60="feedId="+id+"&commentId="+_5b+"&toId="+_5c+"&hostId="+_5d+"&text="+_5e;
jQuery.ajax({url:"commecommentreport/report",type:"post",data:_60,dataType:"json",success:function(r){
jQuery.messageDialog({message:"涓炬姤鎴愬姛锛�"});
},error:function(){
}});
},delAction:function(_61,_62){
$(CommentAction).triggerHandler("delAction",[_61,_62]);
},check:function(id){
var val=jQuery.trim($("#content"+id).val());
if(val==""){
jQuery.messageDialog({message:this.requireTip});
return false;
}
if(val.length>140){
jQuery.messageDialog({message:this.tooLong});
return false;
}
return true;
},initEditor:function(id,_63){
if(!_63){
$("#feed_"+id+" form")[0].reset();
$("#toId"+id).val($("#feed_"+id).attr("authorid"));
}else{
$("#toId"+id).val(_63.toId);
$("#content"+id).focus().val("鍥炲"+_63.name+": ");
}
},updateNumber:function(id,_64){
if(!this.isSyncTotal){
return;
}
if(CURSITE.notwrap==true){
$("#replynum"+id).html(_64!=0?_64:"");
}else{
$("#replynum"+id).html(_64!=0?("("+_64+")"):"");
}
}};
window.Comments=_33;
})();
(function(){
var $=jQuery;
var _65={tooLong:"鏂囧瓧杩囧,鏈€澶�140涓瓧绗︼紒",requireTip:"璇峰～鍐欎綘瑕佸洖澶嶇殑鍐呭",limit:140,pageLimit:10,id:0,replycount:0,authorid:0,init:function(id,_66,_67){
var _68=this;
if(id){
_68.id=id;
}
if(_66){
_68.replycount=_66;
}
if(_67){
_68.authorid=_67;
}
if(!this.isInited){
this.isInited=true;
CommentAction.limit=this.pageLimit;
CommentAction.init();
$(CommentAction).unbind("loadSuccess").bind("loadSuccess",function(_69,id,ret,_6a){
$("#loadingBox").data("loading",false);
$("#loadingBox").hide();
$("#replylist").append(ret.html);
if(_6a){
$("#morecoment").parent().show();
}else{
$("#morecoment").parent().hide();
}
});
$(CommentAction).unbind("addSuccess").bind("addSuccess",function(_6b,id,ret,_6c){
$("#editorBox form").data("requesting",false);
$("#editorBox").find("input[type=submit]").removeAttr("disabled");
var _6d=$(ret.html);
if(!$("#replylist li:first-child").is(".even")){
_6d.addClass("even");
}
$("#replylist").prepend(_6d);
_68.updateNumber(_6c);
_68.initEditor();
if(XZ.showFirstOperateGuide){
jQuery.use("guideLayout",function(){
new SmallSite.app.guideLayout();
});
}
});
$(CommentAction).unbind("addComplete").bind("addComplete",function(_6e,id,ret,_6f){
$("#editorBox form").data("requesting",false);
$("#editorBox").find("input[type=submit]").removeAttr("disabled");
});
$(CommentAction).unbind("delSuccess").bind("delSuccess",function(_70,id,_71,_72){
$("#reply_"+id).remove();
_68.updateNumber(_72);
});
}
jQuery(".reply").bind("click",function(){
if(CURSITE.auth!=true){
SmallSite.login.dialog();
return;
}
var id=_68.id;
var _73=_68.replycount;
var _74=$("#replylist");
var _75=$("#editorBox");
if(_75.is(":visible")){
_75.hide();
}else{
_75.show();
_68.initEditor();
}
return false;
});
_68.initComment();
if(CURSITE.auth==true){
$(CommentAction).triggerHandler("loadAction",[_68.id]);
}
},initComment:function(){
var _76=this;
$("#editorBox form").unbind("submit").submit(function(_77){
_77.preventDefault();
if(CURSITE.auth!=true){
SmallSite.login.dialog();
return;
}
if($(this).data("requesting")!=true){
if(!_76.check()){
return;
}else{
$("#editorBox").find("input[type=submit]").attr("disabled","disabled");
$(this).data("requesting",true);
$(CommentAction).triggerHandler("addAction",[_76.id,$(this).serialize()]);
}
}
}).quickSubmit();
$("#morecoment").unbind("click").click(function(){
var p=$("#loadingBox");
if(p.data("loading")==false||p.data("loading")==undefined){
p.data("loading",true);
$(CommentAction).triggerHandler("loadAction",[_76.id]);
}
return false;
});
$("#replylist").unbind("click").click(function(_78){
var _79=CURSITE.feedId;
var _7a=_78.target;
var _7b=jQuery(_7a).attr("order");
var _7c=XZ.hostId;
if(jQuery(_7a).hasClass("reply-report")){
var _7d=jQuery(_7a).parents("li").find(".comment-text").text();
}
_7b=eval("("+_7b+")");
if(_7b&&_7b.type=="reply"){
_76.replyAction(_7b);
}else{
if(_7b&&_7b.type=="del"){
_76.delAction(_7b.id);
}else{
if(_7b&&_7b.type=="block"){
_76.shieldAction(jQuery(_7a),_7b,_76.id);
}else{
if(_7b&&_7b.type=="report"){
_76.reportAction(_79,_7b.id,_7b.toId,_7c,_7d);
}
}
}
}
});
$("#replylist").delegate("li","mouseenter",function(_7e){
jQuery(this).data("isEnter",true);
jQuery(this).find(".reply-report, .delete, .shield, .to-share").show();
jQuery(this).find(".reply-time").hide();
}).delegate("li","mouseleave",function(_7f){
jQuery(this).data("isEnter",false);
var _80=jQuery(this);
var _81=jQuery(".smallsite-card");
if(!jQuery(_7f.relatedTarget).is(".smallsite-card")){
jQuery(this).find(".reply-report, .delete, .shield, .to-share").hide();
jQuery(this).find(".reply-time").show();
}else{
setTimeout(function(){
if(_81.is(":visible")){
_81.mouseleave(function(_82){
setTimeout(function(){
if(_80.data("isEnter")==true){
return;
}
_80.find(".reply-report, .delete, .shield, .to-share").hide();
_80.find(".reply-time").show();
},500);
});
}
},50);
}
});
$("#contentId").limitLength(_76.limit);
$("#editorBox").find(".release .btn").click(function(_83){
_83.preventDefault();
var _84=jQuery(this).attr("order");
_84=eval("("+_84+")");
if(_84&&_84.type=="reply"){
_76.replyAction(_84);
}
});
$(CommentAction).triggerHandler("initPager",[_76.id,_76.replycount]);
},replyAction:function(_85){
this.initEditor(_85);
},shieldAction:function(cur,_86,_87){
var _88=this;
var _89=["<div class = \"shieldContent\">","<p  class = \"ptext\" >纭畾瑕佸睆钄藉悧锛�</p>","<p  class = \"ptextWho\">灏忕珯涓嶄細鍐嶆敹鍒�"+_86.name+"鐨勮瘎璁�</p>","</div>","<div class =\"shieldButton\">","<div class = \"shieldConfirm\"><a id = \"shieldConfirm\" href=\"javascript:;\">灞忚斀</a></div>","<div class = \"shieldCancle\"><a id = \"shieldCancle\" href=\"javascript:;\">鍙栨秷</a></div>","</div>"].join("");
var _8a=jQuery.alertDialog({message:_89,width:437});
_8a.getFooter().hide();
_8a.getHeader().hide();
jQuery("div.shieldConfirm").bind("click",function(){
var _8b=jQuery(this).offset().left;
var _8c=jQuery(this).offset().top;
$(CommentAction).triggerHandler("shieldAction",[_86.toId,_87,_86.id,_8b,_8c]);
});
jQuery("div.shieldCancle").bind("click",function(){
_8a.hide();
});
},reportAction:function(id,_8d,_8e,_8f,_90){
var _91=this;
var _92="feedId="+id+"&commentId="+_8d+"&toId="+_8e+"&hostId="+_8f+"&text="+_90;
jQuery.ajax({url:"commentreport/report",type:"post",data:_92,dataType:"json",success:function(r){
jQuery.messageDialog({message:"涓炬姤鎴愬姛锛�"});
},error:function(){
}});
},delAction:function(_93){
$(CommentAction).triggerHandler("delAction",[this.id,_93]);
},check:function(){
var val=jQuery.trim($("#contentId").val());
if(val==""){
jQuery.messageDialog({message:this.requireTip});
return false;
}
if(val.length>140){
jQuery.messageDialog({message:this.tooLong});
return false;
}
return true;
},initEditor:function(_94){
if(!_94){
$("#editorBox form")[0].reset();
$("#toId").val(this.authorid);
}else{
$("#toId").val(_94.toId);
$("#contentId").focus().val("鍥炲"+_94.name+": ");
}
},updateNumber:function(_95){
$("#replyAction"+this.id).html("璇勮"+(_95!=0?(" ("+_95+")"):""));
}};
window.Comment=_65;
})();
