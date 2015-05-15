//SmallSite.contribute=function(){
//};
//SmallSite.contribute.prototype={init:function(){
//this.guestPublisher=jQuery("#guestPublisher");
//this.toolbar=jQuery(".tools");
//this.bindEvent();
//},bindEvent:function(){
//var _1=this;
//var _2=jQuery("#publishbar .tools");
//_2.delegate("a.bar-contribute","click",function(){
//jQuery("#publishbar").find(".smallsite-guide").hide();
//_1.showPublisher();
//});
//_2.delegate("a.contribute-cancel","click",function(){
//jQuery.confirmDialog({message:"杩樻病鏈夋彁浜わ紝鏄惁鍙栨秷鎶曠锛�",confirmText:"绂诲紑",cancelText:"鐣欎笅",callback:function(){
//_1.hidePublisher();
//if(jQuery("#masks")!=undefined){
//jQuery("#masks").hide();
//}
//this.remove();
//}});
//});
//},showPublisher:function(){
//this.guestPublisher.show();
//var _3=this.toolbar.children();
//_3.hide();
//jQuery("#publishbar .bar-contribute").removeClass("bar-contribute").addClass("contribute-cancel");
//jQuery(".contribute-cancel").html("鍙栨秷").show();
//},hidePublisher:function(){
//this.guestPublisher.hide();
//jQuery(".contribute-cancel").html("鎶曠").hide();
//jQuery(".contribute-cancel").removeClass("contribute-cancel").addClass("bar-contribute");
//this.toolbar.show();
//this.toolbar.children().show();
//}};
//var contribution=new SmallSite.contribute();
//jQuery(function(){
//contribution.init();
//});
//$=jQuery;
//SmallSite.app.Publisher=function(){
//this.versions={text:"201111301642",photo:"201111301642",video:"201111301642",music:"201111301642",link:"201111301642"};
//this.defaultSetting={text:{},photo:{},video:{},music:{},link:{}};
//};
//SmallSite.app.Publisher.prototype={curState:"none",nav:"#publisherNav",box:"#publisherBox",bar:"#page div.sub-header",eEditArticle:{id:null,top:0,eHeight:null},tips:{par:null,border:null},subHeadHtml:null,ContriBution:{},tagList:{},eEditFeed:null,savaTime:null,saveDrafta:null,tmplParams:{siteId:null,from:null,syncRenren:null,syncDouban:null,syncSina:null,syncWangyi:null},init:function(_4){
//this.eNav=$(this.nav);
//this.eBox=$(this.box);
//$.extend(this.tmplParams,{toSiteUrl:CURSITE.url,from:"homeNew",syncRenren:CURSITE.syncRenren,syncDouban:CURSITE.syncDouban,syncSina:CURSITE.syncSina,syncWangyi:CURSITE.syncWangyi});
//this.addEvents();
//this.accNum();
//},addEvents:function(){
//var _5=this.eNav.find("li a");
//var _6=this;
//_5.each(function(){
//$(this).bind("click",function(e){
//if(!_6.conditionEstimateSite()){
//return;
//}
//if(CURSITE.url==""){
//$.messageDialog({width:330,height:60,message:"<p style='white-space:nowrap'>鎷ユ湁灏忕珯鎵嶅彲浠ュ彂琛ㄦ柊鍐呭锛屽厛鍒涘缓鑷繁鐨勫皬绔欏惂锛�</p><a style='display:block;width:115px;height:40px;margin:10px auto 0px auto;background:#00babc;color:#fff;font-size:18px;text-decoration:none;line-height:40px;text-align:center;' href='http://zhan.renren.com/zhan/create'>鍒涘缓灏忕珯</a>"});
//return;
//}else{
//var _7=$(this).parents("li")[0].className.match(/publisher-(\w+)/)[1];
//e.preventDefault();
//_6.eEditFeed=null;
//_6.active(_7);
//_6._statistics(_7);
//}
//});
//});
//$(this.box).delegate("a.close","click",function(e){
//e.preventDefault();
//_6.close(_6.curState,"eEdit");
//});
//$("#publisherBox").delegate(".select-submit","click",function(e){
//e.preventDefault();
//_6.syncTo(e.target);
//});
//},_statistics:function(_8){
//var _9=$("#publishbar").size()>0?"template":"home",_a="http://"+XZ.domain+"/statistics/publiserLog?from="+_9+"&type="+_8;
//$.ajax({url:_a,type:"GET",dataType:"json",success:function(r){
//}});
//},active:function(_b,_c){
//var _d=this.curState;
//var _e=$(this.nav+" .publisher-"+_b+" a");
//var _f;
//if($(".progressa").size()>0&&$(".progressa").css("display")=="block"){
//$.messageDialog({message:"姝ｅ湪涓婁紶鍥剧墖锛屾殏鏃朵笉鑳藉叧闂彂甯冨櫒",width:300,time:1000});
//return;
//}
//if(!this.eEditFeed){
//$(window).scrollTop(0);
//$("#publisherEditor-"+_b).find("input[name=gid]").val("");
//_f=$("#publisherEditor-"+_b).find("input[name=rejectionId]");
//if(_f.val()!==""){
//_f.val("");
//}
//}
//if(_b===_d&&this.eEditFeed==null){
//return;
//}
//if(_d!=="none"){
//$(this.nav+" .publisher-"+_d+" a").removeClass("act");
//}
//this.arrowPosition(_b);
//_e.addClass("act");
//if(!this[_b]&&!_c){
//this.syncLoad(_b);
//}else{
//this.open(_b);
//}
//if(this.eEditArticle.top!==0&&this.eEditFeed==null){
//this.eEditArticle.top=0;
//}
//},syncLoad:function(_10){
//var _11=this;
//var _12=_10.replace(/link|video/g,"share");
//jQuery.use("publisher-"+_12,function(){
//_11.render(_10);
//});
//},render:function(_13){
//var _14=$("#publisherEditor-"+_13);
//var _15=tmpl(this[_13].template);
//var _16=this;
//if(this[_13].tmplParams){
//$.extend(true,this.tmplParams,this[_13].tmplParams);
//}
//_14.html(_15(this.tmplParams));
//this[_13].box=$("#publisherEditor-"+_13);
//this[_13].init();
//this[_13].inited=true;
//this.open(_13);
//},addTagTip:function(box){
//var tag=box.find(".write-tag-feed");
//var tip=box.find(".explain-tag");
//var _17=box.find(".write-tag-list");
//var _18=tag.attr("status");
//if(_17.length===0&&_18=="first"&&this.accNum()==2){
//tag.css("background-color","#ffcecf").attr("status","allow");
//tip.css("color","#ff8285");
//return true;
//}else{
//this._changeBgcolor(box);
//return false;
//}
//},_changeBgcolor:function(_19,_1a){
//var box=(typeof (_19)=="string")?this[_19].box:_19;
//var tag=box.find(".write-tag-feed");
//var tip=box.find(".explain-tag");
//tag.css("background-color","#fff");
//if(_1a=="reset"){
//tip.css("color","#888");
//tag.attr("status","first");
//}
//},renderSubjects:function(_1b){
//var _1c=this;
//var _1d=_1b.type;
//var tag=_1b.tag;
//var _1e=$.queryString("tag")?decodeURI($.queryString("tag")).split(","):"";
//var _1f=_1b.edit;
//var _20;
//if(_1e&&!this.publisherTagShow){
//this.publisherTagShow=true;
//}else{
//_1e="";
//}
//jQuery.use("tag",function(){
//var _21={box:$("#publisherEditor-"+_1d+" .write-tag-box")};
//var s={tags:_1e,maxNum:5};
//if(tag){
//s.tags=tag;
//_1c._changeBgcolor(_1d);
//}
//var _22=new SmallSite.app.Subject(jQuery.extend({},_21,s));
//jQuery.extend(_21,{input:$("#publisherEditor-"+_1d+" .tag-input"),"subject":_22});
//_1c.subjectBox=new SmallSite.app.SubjectBox(_21);
//$(_22).bind("rulesErrTip",function(_23,obj){
//$.messageDialog({message:"鏍煎紡杈撳叆閿欒锛屽繀椤绘槸鏁板瓧瀛楁瘝姹夊瓧"});
//});
//$(_22).bind("renderSuccess",function(_24,obj){
//_1c.cancelSaveButton(_1d);
//_1c._changeBgcolor(_1d);
//});
//$(_22).bind("delSuccess",function(_25,obj){
//_1c.cancelSaveButton(_1d);
//});
//$(_1c.box).undelegate(".tag-selector li a","click").delegate(".tag-selector li a","click",function(){
//$(_22).triggerHandler("render",[{"val":$(this).attr("data-tag")}]);
//});
//_1c.zhanSwitch(_1d,_1f);
//});
//},zhanSwitch:function(_26,_27){
//var b=this[_26].box;
//var _28=b.find(".tag-selector");
//var _29=b.parent().find(".post-basic a")[0];
//var _2a=b.parent().parent().find("figure img");
//var _2b=this;
//var _2c,url,_2d;
//_2d=function(_2e){
//if($("#publishbar").size()>0){
//_28.empty();
//$.each(_2e,function(i){
//_28.append("<li><a data-tag=\""+_2e[i]+"\" href=\"javascript:;\">"+_2e[i]+"</a></li>");
//});
//}
//};
//XZ.USER=XZ.USER||{};
//XZ.USER.sites=XZ.USER.sites||{};
//XZ.USER.sites[CURSITE.url]=XZ.USER.sites[CURSITE.url]||{};
//if(_27){
//url=_27;
//XZ.USER.sites[url]=XZ.USER.sites[url]||{};
//}else{
//url=CURSITE.url;
//XZ.USER.sites[CURSITE.url]=XZ.USER.sites[CURSITE.url]||{};
//}
//if(CURSITE.url&&XZ.USER.sites[url]["recommendTags"]==undefined){
//jQuery.ajax({url:" http://zhan.renren.com/"+url+"/recommendTags",dataType:"json",type:"get",async:false,success:function(r){
//if(r.code==0){
//_2d(r.recommendTags);
//XZ.USER.sites[url]["recommendTags"]=r.recommendTags;
//}
//}});
//}else{
//_2d(XZ.USER.sites[url]["recommendTags"]);
//}
//if($("#publishbar").size()===0){
//jQuery.use("zhanswitch",function(){
//var _2f=new SmallSite.app.zhanSwitch({sites:sitelist,curtags:XZ.USER.sites[url]["recommendTags"],shareText:"鍙戝竷鍒�",cancelable:false,isGetTag:true,tagBox:b.find(".tag-selector"),zhanBox:b.find(".share-main"),siteurl:b.find(".toSiteUrl")});
//jQuery(_2f).bind("switchSuccess",function(_30,_31){
//$(_29).html(XZ.USER.sites[_31].name);
//_2a.attr("src",XZ.USER.sites[_31].tinyHeadSource);
//_2b.cancelSaveButton(_26);
//});
//});
//}
//},syncTo:function(_32){
//var $li={};
//var _33="";
//var _34="";
//var _35="";
//var _36="";
//var _37="http://zhan.renren.com/zhan/settinginfo";
//if(_32.nodeName.toLowerCase()!=="a"){
//return;
//}
//_36=jQuery(_32).parents("div.publisher-editor-box")[0].id.match(/publisherEditor-(\w+)/)[1];
//$li=jQuery(_32).parent("li");
//_35=_32.className;
//_33=$li.attr("class").match(/publish\-to\-([^\s\-]+)/)[1];
//_34=_35.match(/[^\s\-\.]+\-[^\d\s\.\-]+(\d?)/)[1];
//if(_34==""){
//_32.className=_35+"2";
//_32.title=_32.title.replace("宸�","鏈�");
//jQuery("#publisher-fm-"+_36+" input[name=sync"+_33+"]").val("false");
//}else{
//if(CURSITE["sync"+_33]){
//_32.className=_35.replace("2","");
//_32.title=_32.title.replace("鏈�","宸�");
//jQuery("#publisher-fm-"+_36+" input[name=sync"+_33+"]").val("true");
//}else{
//window.open(_37+"?sync=true");
//}
//}
//this.cancelSaveButton(_36);
//},_resetParam:function(){
//var _38=$("#publisherBox .save_times");
//if(this.savaTime){
//clearInterval(this.savaTime);
//this.savaTime=null;
//}
//if(this.saveDrafta){
//this.saveDrafta=null;
//}
//if(_38.html()!=""){
//_38.html("");
//}
//},open:function(_39){
//var _3a=this.curState;
//var _3b=$(this.box);
//var _3c=$("#publisherEditor-"+_39);
//var _3d=$("#publishbar").size();
//var _3e=$("#guestPublisher");
//var _3f=$("#publisherBox .save_times");
//var _40=$.browser.msie&&$.browser.version==6;
//_3b.show();
//if(this[_39]&&!this[_39].inited){
//this.render(_39);
//return;
//}
//if($("body.issue").size()>0){
//if(_39=="text"||_39=="photo"){
//this[_39].box.find(".btn-finish").val("淇濆瓨");
//}
//}
//if(!this.conditionEstimate()){
//this[_39].box.find(".tent_timer").hide();
//if(_39=="text"||_39=="photo"){
//this[_39].box.find(".tent_save").hide();
//}
//}
//this.tipRemoves();
//if(this.eEditFeed){
//$(window).scrollTop(0);
//this.terminalOpacity(this.eEditFeed);
//this[_39].edit();
//}else{
//}
//if(this.shareDateStaus&&this.shareDateInfo){
//var _41=this.shareDateInfo;
//this[_39].shareData(_41);
//this.shareDateStaus=null;
//this.shareDateInfo=null;
//}
//if(_3a==="none"){
//_3b.show();
//_3c.show();
//_3b.css("margin-top",0);
//}else{
//if(_39!==_3a){
//this.change(_39);
//}
//}
//if(_3d>0&&!_40){
//$(window).scrollTop(0);
//$("body").addClass("pub-act");
//}
//if(_3e.css("display")=="block"){
//_3b.find(".select-submit").hide();
//_3b.find("input[name=syncRenren]").val("false");
//_3b.find("input[name=syncDouban]").val("false");
//_3b.find("input[name=syncSina]").val("false");
//_3b.find("input[name=syncWangyi]").val("false");
//}
//this.curState=_39;
//if(this.eEditFeed==null){
//this.renderSubjects({"type":_39});
//}
//this._resetParam();
//if(this.conditionEstimate()){
//if(_39=="text"){
//this.saveTent({"type":"text","eDom":this.box,"timer":true,"dataMore":"&isDraft=true"});
//}
//}
//},recovery:function(_42){
//var box=this[_42].box;
//var _43=box.parent().find(".post-basic a")[0];
//var _44=box.parent().parent().find("figure img");
//var url=box.parent().parent().find("input[name=toSiteUrl]");
//if(_43&&_43.innerHTML!=sitelist[0].name&&_44.attr("src")!=sitelist[0].tinyHeadSource){
//$(_43).html(sitelist[0].name);
//_44.attr("src",sitelist[0].tinyHeadSource);
//url.val(sitelist[0].url);
//this.renderSubjects({"type":_42});
//}
//},change:function(_45){
//var _46=this.curState;
//var _47=$("#publisherEditor-"+_45);
//var _48=$("#publisherEditor-"+_46);
//_48.hide();
//_47.show();
//},close:function(_49,_4a){
//var _4b=$(this.box);
//var _4c=_4b.height()+20;
//var _4d=this;
//var _4e=this.eEditArticle.id;
//var top=this.eEditArticle.top;
//var _4f=($("#publisher-selector-box").length>0)?0:100;
//var _50=$("#publishbar").size();
//if(!_49){
//_49=this.curState;
//}
//if(_49==="none"){
//return;
//}
//if(_49=="photo"&&$(".progressa").size()>0&&$(".progressa").css("display")!="none"){
//$.messageDialog({message:"姝ｅ湪涓婁紶鍥剧墖锛屾殏鏃朵笉鑳藉叧闂彂甯冨櫒",width:300,time:1000});
//return;
//}
//if(this.conditionEstimate(_49)){
//if(!this.saveDrafta){
//if(this[_49].savaDialog()){
//return;
//}
//}
//}
//if(this.eEditFeed){
//this.terminalOpacityShow(this.eEditFeed);
//}
//this.reset(_49);
//if($.browser.msie&&$.browser.version==6){
//$("#publisherBox").hide();
//}
//if(_4f!==0){
//_4b.css("margin-top",-_4c);
//}else{
//_4b.hide();
//}
//setTimeout(function(){
//$(_4d.nav+" .publisher-"+_4d.curState+" a").removeClass("act");
//$("#publisherEditor-"+_4d.curState).hide();
//_4d.curState="none";
//_4d[_49].close();
//},_4f);
//this.publisherStyle();
//if(_50===0){
//this.recovery(_49);
//}
//},showEditDom:function(){
//var _51=this;
//var _52=this.eEditArticle.id;
//var top=this.eEditArticle.top;
//if(_52){
//if($("#publishbar").size()>0){
//$("body").find("#feed_"+_52).show();
//}else{
//$("body").find("article[data-feedid="+_52+"]").show();
//}
//if(top>0){
//if(this.eEditArticle.eHeight){
//$(window).scrollTop(top-$("#header").height()-$(".sub-header").height());
//}else{
//$(window).scrollTop(top-$("#header").height());
//}
//}else{
//$(window).scrollTop(0);
//}
//_52=null;
//top=0;
//}
//},publisherStyle:function(){
//var _53=$("#publisher-selector-box").length;
//var _54=$("#publishbar").css("position");
//if(_53>0&&_54=="absolute"){
//$("body").removeClass("pub-act");
//$(window).scrollTop(0);
//}
//},reset:function(_55){
//var _56=$("#publisher-selector-box").length;
//var _57=$("#publishbar").css("position");
//var _58=$("#publisherBox .save_times");
//var _59=$("#publisherBox .tent_save");
//var _5a=$("#publisherBox .tent_timer");
//var _5b=this[_55].box.find(".select-submit");
//var _5c=this[_55].box.find(".share-main");
//var _5d=this[_55].box.find("input[name=draftId]");
//var _5e;
//this.tipRemoves();
//if(_5b.css("display")=="none"){
//_5b.show();
//}
//if(_5c.css("display")=="none"){
//_5c.show();
//}
//if(this.subHeadHtml){
//_5e=$(".sub-header").find(".publisher-nav");
//if($(_5e).hasClass("publisher-nav")){
//$(_5e).appendTo("body").css("display","none");
//$("#sitemainold").css({"margin-top":""});
//}
//$(".sub-header").html(this.subHeadHtml).css("height","60px").attr("data-height",60);
//this.subHeadHtml=null;
//}
//this[_55].reset();
//this[_55].box.find(".write-tag-box").empty();
//this.eEditArticle.top=this.eEditArticle.id=null;
//this.publisherStyle();
//this.eEditFeed=null;
//this.shareDateStaus=null;
//this._resetParam();
//if(_59.css("display")=="none"){
//_59.show();
//}
//if(_5a.css("display")=="none"){
//_5a.show();
//}
//if(_5d.val!=""){
//_5d.val("");
//}
//this._changeBgcolor(_55,"reset");
//this.eEditFeed=null;
//},finish:function(_5f,_60,_61,_62){
//var _63=$("#publishbar").size()>0?$("#postList"):$("#feed-container");
//var _64=$(innerShiv(_5f))[0].firstChild;
//var _65=this.curState;
//var _66=$("#guestPublisher");
//var _67=$("#publishbar .tools");
//var _68=_60?_60:[];
//var _69=(_61)?"<li class='addtags'>宸插悓姝ュ埌浠ヤ笅璇濋</li>":"<li class='addtags'>娣诲姞璇濋锛岃鏇村浜哄彂鐜颁綘</li>";
//var url=window.location.href;
//var _6a=$.urlParam(url,"terminalEdit");
//var _6b="";
//var _6c;
//CURSITE=CURSITE||{};
//var _6d=function(){
//_6b="";
//for(var i=0;i<_68.length;i++){
//_6b+="<li><a target='_blank' href='http://zhan.renren.com/tag?value="+_68[i].tabValue+"&from=pubSuccess' class='tag_info'>#"+_68[i].tabValue+"</a> <em>"+_68[i].followCount+"浜鸿闃�</em><a target='_blank' href='http://zhan.renren.com/tag?value="+_68[i].tabValue+"&from=pubSuccess' class='view_tag'>鏌ョ湅>></a></li>";
//}
//return _6b;
//};
//$(window).scrollTop(0);
//if(_66.size()>0){
//_67.hide();
//jQuery.messageDialog({"width":400,"message":"<p style=\"font-size:16px;\">鎶曠鎴愬姛锛岀珯闀垮鏍镐箣鍚庡氨浼氬彂甯�<br/>鎰熻阿鎮ㄧ殑鎶曠^_^</p>"});
//_66.hide();
//contribution.hidePublisher();
//}else{
//jQuery.popDialog({message:"<div class=\"pub_success\">\t\t\t\t\t\t\t<div class=\"success_msg clearfix\">鍙戝竷鎴愬姛!</div>\t\t\t\t\t\t\t<ul class=\"tag_list clearfix\">\t\t\t\t\t\t\t\t"+_69+_6d()+"\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t</div>",width:300,time:5000});
//}
//if(_64){
//_63.prepend($(_64));
//this[_65].renderNewFeed($(_64));
//}
//if(CURSITE.isTerm){
//var _6e=window;
//var _6f=_6e.location.href.replace(_6e.location.search,"");
//window.location.href=_6f;
//return;
//}
//if(this.eEditFeed){
//this.eEditFeed.remove();
//}
//if($("#publishbar").size()>0){
//jQuery.lazyPics("#postList img[data-src]");
//}
//if(_62){
//_62(_64);
//}
//$("#publisherBox").hide();
//if(!this.saveDrafta){
//this.saveDrafta=true;
//}
//this.close();
//},arrowPosition:function(_70){
//var _71;
//switch(_70){
//case "text":
//_71="95px";
//break;
//case "photo":
//_71="200px";
//break;
//case "video":
//_71="300px";
//break;
//case "music":
//_71="400px";
//break;
//case "link":
//_71="500px";
//break;
//}
//$(".arrow-area .arrow").css({"marginLeft":_71});
//},showPublisher:function(_72){
//$("#sitemainold").css({"marginTop":"0px"});
//$(".sub-header").html(_72).css({"height":"100px"}).attr("data-height",100);
//_72.show();
//},edit:function(_73,_74,_75){
//var _76=this;
//var _77=$(_75).parents("article")[0];
//var _78=($(".sub-header").height()>5)?true:false;
//var _79=$("body").find(".publisher-nav");
//var _7a=this.curState;
//var _7b=null;
//var url=window.location.href;
//if(this.eEditFeed){
//this.eEditFeed.show();
//}
//this.eEditFeed=$(_77);
//if(_79.attr("types")=="contributions"||CURSITE.location=="home"){
//this.ContriBution.status=true;
//if(CURSITE.location!="home"){
//this.subHeadHtml=$(".sub-header").html();
//this.showPublisher(_79);
//}
//}
//switch(_73){
//case "BLOG":
//_73="text";
//break;
//case "STATUS":
//_73="text";
//break;
//case "PHOTO_MULTI":
//_73="photo";
//break;
//case "PHOTO":
//_73="photo";
//break;
//case "SHARE_VIDEO":
//_73="video";
//break;
//case "SHARE_AUDIO":
//_73="link";
//break;
//case "SHARE_LINK":
//_73="link";
//break;
//case "MUSIC":
//_73="music";
//break;
//}
//if(_7a!=="none"&&_7a==_73){
//_7b="edit";
//this[_73].reset();
//}
//if(this.judgeEdit(_74).data){
//if(this.judgeEdit(_74).type=="rejection"){
//this.ContriBution.status=true;
//}
//this.eEditArticle.id=this.judgeEdit(_74).data;
//}else{
//this.eEditArticle.id=($("#publishbar").size()>0)?$(_77).attr("id").replace("feed_",""):$(_77).attr("data-feedid");
//}
//if(!this.judgeEdit(_74)){
//this.eEditArticle.eHeight=_78;
//if($("body").find("#publisherEditor-"+_73).css("display")!="none"){
//this.eEditArticle.top=$(_77).offset().top-$("body").find("#publisherBox").outerHeight();
//}else{
//this.eEditArticle.top=$(_77).offset().top;
//}
//}
//this.active(_73,_7b);
//},judgeEdit:function(_7c){
//var url=window.location.href;
//var _7d=$.urlParam(url,"terminalEdit");
//var _7e=$("#postList").find("article");
//if(url.indexOf("rejectionid")!==-1&&url.indexOf("rejectiontype")!==-1){
//return param={"data":jQuery.queryString("rejectionid"),"type":"rejection"};
//}else{
//if(url.indexOf("terminalEdit")!==-1){
//for(var i=0;i<_7e.length;i++){
//if($(_7e[i]).attr("id")=="feed_"+_7c){
//this.terminalEditId="feed_"+_7c;
//return false;
//break;
//}
//}
//return param={"data":jQuery.queryString("id"),"type":"terminalEdit"};
//}else{
//return true;
//}
//}
//},isContribution:function(_7f){
//var _80=this.ContriBution;
//var url=window.location.href;
//if(_80.status){
//if(this.eEditFeed!=null){
//var _81=$(this.eEditFeed);
//var _82=$(this.eEditFeed).find(".post-site-user a");
//var _83=$(_7f).parent().parent().find("figure");
//var _84=(CURSITE.location=="home")?$(_7f).parent().parent().find(".post-basic"):$(_7f).parent().parent().find(".post-site-user");
//_80.siteURL=_81.attr("uri");
//_83.find("img").attr("src",_81.find("img").attr("src"));
//_84.find("a:first").html(_82.html());
//}
//if(CURSITE.location=="home"){
//_80.thisType="";
//}else{
//if(url.indexOf("rejectionid")!==-1&&url.indexOf("rejectiontype")!==-1){
//_80.thisType="?type=rejection";
//}else{
//if($("body").hasClass("draft")){
//_80.thisType="?type=draft";
//}else{
//if($("body").hasClass("issue")){
//_80.thisType="?type=issue";
//}else{
//_80.thisType="?type=contribution";
//}
//}
//}
//}
//}else{
//_80.thisType="";
//}
//},tipRemoves:function(){
//var _85=$(".publisher_tips");
//var _86=$(".photo_pubtip");
//if(_86.size()>0){
//_86.remove();
//}
//if(_85.size()>0){
//_85.remove();
//this.tips.par.css({"border-color":this.tips.border});
//}
//},tipAdd:function(_87,msg){
//var _88=_87||null;
//var _89=msg||"";
//var tip=document.createElement("div");
//var _8a=$(".publisher_tips");
//var _8b=$(".page-content");
//this.tipRemoves();
//this.tips=tip;
//this.tips.par=_88;
//this.tips.border=$(_88).css("border-color");
//$(_88).css({"border":"1px solid #e54f36"});
//if($("#publishbar").size()>0){
//$("body").append(tip);
//$(tip).addClass("publisher_tips").css({"top":$(_88).offset().top-$(tip).height()});
//}else{
//$(".page-content").append(tip);
//$(tip).addClass("publisher_tips").css({"top":$(_88).offset().top-$(tip).height()-_8b.offset().top});
//}
//$(tip).addClass("publisher_tips").css({"left":$(_88).offset().left}).show();
//$(tip).html(_89);
//$(window).scrollTop(0);
//return;
//},counter:function(ele,_8c,max,_8d){
//var len=ele.value.length;
//var _8e=max-len;
//if(_8d=="photo"){
//_8c=$(ele).parent().find(_8c);
//}
//if(len>max){
//var num=$(ele).val().substr(0,max);
//$(ele).val(num);
//}else{
//$(_8c).text(max-len);
//}
//},rejeckTionDisposal:function(_8f,_90){
//var _91=window.location.href;
//if(_91.indexOf("rejectionid")!==-1&&_91.indexOf("rejectiontype")!==-1){
//contribution.showPublisher();
//_8f.find("input[name=rejectionId]").val(_90);
//}else{
//if($("body").hasClass("draft")){
//_8f.find("input[name=draftId]").val(_90);
//}else{
//if($("body").hasClass("issue")){
//_8f.find("input[name=issueId]").val(_90);
//}else{
//_8f.find("input[name=gid]").val(_90);
//}
//}
//}
//},checkTime:function(i){
//if(i<10){
//i="0"+i;
//}
//return i;
//},saveTent:function(_92){
//var _93=$(_92.eDom);
//var _94=_93.find("input[name=draftId]");
//var _95=_93.find("input[name=issueId]");
//var _96=_92.timer||null;
//var _97=_92.type||null;
//var _98=60000*2;
//var _99=con||"";
//var _9a=this.eEditArticle.id||"";
//var _9b=this;
//var _9c=_92.statu||"";
//var _9d=_92.dataMore||"";
//var _9e=_92.draftIssue;
//var _9f=_92.dateSiteUrl;
//var _a0,_a1,_a2,_a3,_a4,_a5,_a6,_a7,_a8,con,_a9;
//if(!_97){
//return;
//}
//switch(_92.type){
//case "text":
//_97="word";
//break;
//case "video":
//_97="share";
//break;
//case "link":
//_97="share";
//break;
//}
//if(_9a){
//_94.val(_9a);
//}
//_a2=function(r,_aa){
//_a1=new Date();
//var _ab=_9b.checkTime(_a1.getHours());
//var _ac=_9b.checkTime(_a1.getMinutes());
//$("#publisherBox").find(".post-basic .save_times").html("鍐呭宸蹭簬"+_ab+":"+_ac+"鎴愬姛淇濆瓨鑷� <a href=\"http://zhan.renren.com/drafts\" target=\"_blank\">鑽夌绠�</a>");
//$("#publisherBox").find(".post-site-user .save_times").html("鍐呭宸蹭簬"+_ab+":"+_ac+"鎴愬姛淇濆瓨鑷� <a href=\"http://zhan.renren.com/drafts\" target=\"_blank\">鑽夌绠�</a>");
//_9b.saveDrafta=true;
//if(!_92.dateSiteUrl){
//if(_94.val()==""&&r.draftId){
//_94.val(r.draftId);
//}
//}
//if(_aa=="thisTime"){
//_a8=$(_93).find(".tent_save");
//$(_a8).attr("status","stop").addClass("saved");
//_a8.find("img").attr("src","http://a.xnimg.cn/smallsite/images/tent_saved.png");
//_9b.drafeMessage("<img src=\"http://a.xnimg.cn/smallsite/images/yes2.png\" />鎴愬姛淇濆瓨鑷宠崏绋跨",1000);
//}else{
//if(_aa=="setTime"){
//$.messageDialog({message:"<div class=\"draftsuccess\">宸叉垚鍔熸坊鍔犺嚦瀹氭椂鍙戝竷闃熷垪锛�<a target=\"_blank\" href=\"http://zhan.renren.com/issues\">鐐瑰嚮鏌ョ湅</a></div>",width:320,height:75,time:3000,noPadding:true});
//}
//}
//if(_92.close){
//_9b.close(_92.type);
//$("#timerSave").data("settime_status",false);
//}
//};
//_a4=function(_ad){
//if(_92.dateSiteUrl){
//_a9=_92.dateSiteUrl;
//if(_92.oldSiteUrlName){
//_9b[_92.type].box.find("input[name=\"toSiteUrl\"]").val(_92.oldSiteUrlName);
//}
//}else{
//_a9=_93.find("input[name=toSiteUrl]").val();
//}
//_a3="http://zhan.renren.com/"+_a9+"/"+_97+"/"+"create";
//$.ajax({url:_a3,type:"POST",data:_a0+_9d,dataType:"json",success:function(r){
//if(r.code==0){
//_a2(r,_ad);
//}else{
//if(r.code==-2){
//_9b.drafeMessage(r.msg,3000);
//_9b.saveDrafta=true;
//clearInterval(_9b.savaTime);
//_9b.close(_92.type);
//}else{
//if(r.code==-3){
//$("#timerSave").data("settime_status",false);
//$("#pubtimer input[name=\"siteUrl\"]").attr("disabled","");
//$("#pubtimer .error_report").html("涓嶈兘鏃╀簬褰撳墠鏃堕棿");
//}else{
//alert(r.msg);
//}
//}
//}
//}});
//};
//_a6=function(_ae){
//_a0=_93.find("#publisher-fm-"+_92.type).serialize();
//if(_97=="word"){
//_a5=$.trim(_93.find("textarea[name=subject]").val());
//if(window.tinymce){
//con=$(tinymce.editors[0].getContent());
//thumb=$(con.find("img")[0]).attr("src");
//if(thumb){
//_93.find("input[name=feedSrc]").val(thumb);
//_a0=_93.find("#publisher-fm-"+_92.type).serialize();
//}
//}
//if(_a5==""&&con.size()<=0||_a5=="鏍囬"&&con.size()<=0){
//if(_ae=="thisTime"){
//_9b.drafeMessage("璇疯緭鍏ュ唴瀹瑰啀淇濆瓨鑽夌锛�",1000);
//}else{
//if(_ae=="setTime"){
//_9b.drafeMessage("璇疯緭鍏ュ唴瀹瑰啀淇濆瓨瀹氭椂鍙戝竷锛�",1000);
//}
//}
//return;
//}else{
//_a4(_ae);
//}
//}else{
//_a4(_ae);
//}
//};
//if(_96){
//this.savaTime=setInterval(function(){
//_a6("auto");
//},_98);
//}else{
//_a6(_9c);
//}
//},clearDialog:function(){
//$(".dialog").remove();
//$("#maskLayer").hide();
//},closePublisher:function(box,_af){
//var _b0=this;
//var _b1=box||null;
//var _b2=_af||"";
//var _b3;
//$.popDialog({message:"<div class=\"draftdialog\">\t\t\t\t\t\t<div class=\"msgs\">鎮ㄧ殑鏁版嵁灏氭湭淇濆瓨锛屾槸鍚﹁绂诲紑锛�</div>\t\t\t\t\t\t<div class=\"button_bottoms\">\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"quit\">鏀惧純骞剁寮€</a>\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"saves\">淇濆瓨骞剁寮€</a>\t\t\t\t\t\t</div>\t\t\t\t\t</div>",width:490,height:160,noPadding:true});
//_b3=function(){
//_b0.saveDrafta=true;
//_b0.close(_b2,"eEdit");
//};
//$(".draftdialog").find(".saves").bind("click",function(){
//_b0.saveTent({"type":_b2,"eDom":_b1,"statu":"close","statu":"thisTime","dataMore":"&isDraft=true"});
//_b0.clearDialog();
//_b3();
//_b0.drafeMessage("<img src=\"http://a.xnimg.cn/smallsite/images/yes2.png\" />鎴愬姛淇濆瓨鑷宠崏绋跨<a href=\"http://zhan.renren.com/drafts\" target=\"_blank\">鐐瑰嚮鏌ョ湅>></a>",3000);
//});
//$(".draftdialog").find(".quit").bind("click",function(){
//_b0.clearDialog();
//_b3();
//});
//},conditionEstimate:function(_b4){
//var _b5=$("#guestPublisher").size()||0;
//var _b6=$("body.contributtion").size()||0;
//var _b7=$("body.contributtion-mine").size()||0;
//var _b8=(this.eEditFeed&&CURSITE.location=="home")?1:0;
//if(this.eEditFeed&&$("#publishbar").size()>0){
//_b8=1;
//}
//var _b9=0;
//var _ba=$("body.issue").size()||0;
//if(_b4){
//if(_b4!="photo"&&_b4!="text"){
//_b9=1;
//}
//}
//var _bb=_b7+_b6+_b5+_b8+_b9+_ba;
//if(_bb>0){
//return false;
//}else{
//return true;
//}
//},conditionDrafts:function(r,_bc){
//var _bd=this;
//_bd.drafeMessage("r.msg",3000);
//if($("body.draft").size()>0){
//this.eBox.hide();
//if(this.subHeadHtml){
//var _be=$(".sub-header").find(".publisher-nav");
//if($(_be).hasClass("publisher-nav")){
//$(_be).appendTo("body").css("display","none");
//$("#sitemainold").css({"marginTop":""});
//}
//$(".sub-header").html(this.subHeadHtml).css("height","60px").attr("data-height",60);
//this.subHeadHtml=null;
//}
//}else{
//this.close(_bc);
//}
//if(this.savaTime){
//clearInterval(this.savaTime);
//this.savaTime=null;
//}
//},conditionEstimateSite:function(){
//var _bf=$("body.issue").size()||0;
//var pub=$("body.contributtion").size()||0;
//var _c0=$("body.draft").size()||0;
//var _c1=_bf+pub+_c0;
//if(_c1>0){
//return false;
//}else{
//return true;
//}
//},cancelSaveButton:function(_c2){
//var _c3=this[_c2].box.find(".tent_save");
//if(_c3.hasClass("saved")){
//_c3.removeClass("saved").attr("status","allow");
//_c3.find("img").attr("src","http://a.xnimg.cn/smallsite/images/tent_save.png");
//}
//},drafeMessage:function(msg,_c4){
//var _c5=_c4||"";
//$.messageDialog({message:"<div class=\"draftsuccess\">"+msg+"</div>",width:280,height:75,time:_c5,noPadding:true});
//},setTimeSave:function(_c6){
//var _c7="<div id=\"pubtimer\" class=\"pubtimer\">\t\t\t\t\t\t<form id=\"timerSave\">\t\t\t\t\t\t\t<input type=\"hidden\" name=\"issuetime\" value=\"true\" />\t\t\t\t\t\t\t<input type=\"hidden\" name=\"siteUrl\" value=\"\" />\t\t\t\t            <div class=\"tools clearfix\">\t\t\t\t            \t<div class=\"error_report\"></div>\t\t\t\t                <div class=\"toheight clearfix\">\t\t\t\t                    <div class=\"calendar bl fl\">\t\t\t\t                    \t<input type=\"text\" name=\"issueDay\" class=\"fl date\" value=\"\" />\t\t\t\t                    \t<i class=\"timeMarks\"></i>\t\t\t\t                    </div>\t\t\t\t                    <input type=\"text\" maxlength=\"2\" name=\"issueHour\" class=\"time_hour bl fl\" value=\"\" />\t\t\t\t                    <div class=\"time_emblem fl\">\t\t\t\t                    :\t\t\t\t                    </div>\t\t\t\t                    <input type=\"text\" maxlength=\"2\" name=\"issueMinute\" class=\"time_min bl fl\" value=\"\" />\t\t\t\t                </div>\t\t\t\t                <div class=\"text_area time fl\">\t\t\t\t                \t璇ュ唴瀹瑰皢鍦� <span class=\"date\"></span>&nbsp;<span class=\"times_hour\"></span>:<span class=\"times_min\"></span>&nbsp;<span class=\"pub_to\">鍙戝竷鍒�</span>\t\t\t\t                </div>\t\t\t\t                <div class=\"selctArea\">\t\t\t\t\t                <div class=\"fl select\">\t\t\t\t\t                    鍐呭\t\t\t\t\t                </div>\t\t\t\t\t                <ul class=\"site_lists\">\t\t\t\t\t                </ul>\t\t\t\t\t            </div>\t\t\t\t            </div>\t\t\t\t            <div class=\"button_area\">\t\t\t\t            \t<a class=\"cancel\" href=\"javascript:;\">鍙栨秷</a>\t\t\t\t            \t<input type=\"submit\" class=\"timer_sub\" value=\"瀹氭椂鍙戝竷\">\t\t\t\t            </div>\t\t\t\t        </form>\t\t\t        </div>";
//var _c8=_c6.siteId||"";
//var _c9=_c6.siteName||"";
//var _ca=_c6.type||"";
//var _cb=_c6.eDom||null;
//var _cc=new Date();
//var _cd=this;
//var _ce,_cf,_d0,_d1,_d2,_d3;
//if(_ca&&_ca!="music"){
//if(!_cd[_ca].checkForm()){
//_cd.clearDialog();
//return;
//}
//}
//$.popDialog({message:_c7,width:550,height:215,noPadding:true});
//setTimeout(function(){
//$.use("date-select",function(){
//Date.firstDayOfWeek=0;
//_d0.find(".calendar .date").datePicker();
//});
//},300);
//_d0=$("#pubtimer");
//_d1=function(){
//_ce="";
//if(sitelist.length>1){
//for(var i=0;i<sitelist.length;i++){
//_ce+="<li siteUrl="+sitelist[i].url+" siteImg="+sitelist[i].tinyHeadSource+">"+sitelist[i].name+"</li>";
//}
//_d0.find(".select").bind("click",function(){
//_d0.find(".site_lists").toggle();
//});
//}else{
//_ce="<li siteUrl="+sitelist[0].url+"  siteImg="+sitelist[0].tinyHeadSource+">"+sitelist[0].name+"</li>";
//_d0.find(".selctArea").css("background","none");
//}
//return _ce;
//};
//_d0.find("ul.site_lists").html(_d1());
//_d0.find(".site_lists > li").bind("click",function(){
//$("#pubtimer .select").html($(this).html());
//_d0.find("input[name=siteUrl]").val($(this).attr("siteurl"));
//_d0.find(".selctArea .select").data("siteTinyHead",$(this).attr("siteimg"));
//$("ul.site_lists").hide();
//});
//_d0.find(".selctArea").bind("mouseleave",function(){
//$("ul.site_lists").hide();
//});
//if(_ca!=""){
//var _d4=_d0.find("input[name=siteUrl]");
//var _d5=_d0.find(".select");
//var _d6=_cc.getHours()<23?this.checkTime(_cc.getHours()+1):this.checkTime(_cc.getHours());
//if($("#publishbar").size()>0){
//_d4.val(CURSITE.url);
//_d5.html(CURSITE.name);
//}else{
//_d4.val(_c8);
//_d5.html(_c9);
//}
//_d0.find(".time_hour").val(_d6);
//_d0.find(".time_min").val(this.checkTime(_cc.getMinutes()));
//_d0.find(".times_hour").html(_d6);
//_d0.find(".times_min").html(this.checkTime(_cc.getMinutes()));
//_d0.find(".calendar .date").val(_cc.getFullYear()+"/"+this.checkTime(_cc.getMonth()+1)+"/"+this.checkTime(_cc.getDate()));
//_d0.find(".text_area .date").html(_cc.getFullYear()+"/"+this.checkTime(_cc.getMonth()+1)+"/"+this.checkTime(_cc.getDate()));
//}else{
//var _d7=$("body").find("article[feedid="+_c6+"]");
//var _d8=_d7.attr("uri");
//var _d9=_d7.find(".post-site-user .name-card").html();
//var _da=_d7.find("figure.newsfeed-user img").attr("src");
//_d0.find(".selctArea .select").data("siteTinyHead",_da);
//$.ajax({url:"http://zhan.renren.com/"+_d8+"/issue/"+_c6+"/getIssueDate",type:"GET",dataType:"json",success:function(r){
//if(r.code===-1){
//_d0.find("input[name=siteUrl]").val(_d8);
//_d0.find(".select").html(_d9);
//_d0.find(".time_hour").val(r.issueHour);
//_d0.find(".time_min").val(r.issueMinute);
//_d0.find(".times_hour").html(r.issueHour);
//_d0.find(".times_min").html(r.issueMinute);
//_d0.find(".calendar .date").val(r.issueDay);
//_d0.find(".text_area .date").html(r.issueDay);
//}else{
//if(r.code===-2){
//_cd.drafeMessage(r.msg,3000);
//_d7.hide();
//}
//}
//}});
//}
//_d2=function(_db,str){
//if($(_db).hasClass("time_hour")){
//_d0.find(".times_hour").html(str);
//}else{
//_d0.find(".times_min").html(str);
//}
//};
//_d0.find(".time_hour,.time_min").bind("input",function(){
//_d2(this,$(this).val());
//}).bind("propertychange",function(){
//_d2(this,$(this).val());
//});
//_d0.find("#timerSave").bind("submit",(function(e){
//e.preventDefault();
//var _dc=_d0.find(".time_hour");
//var min=_d0.find(".time_min");
//var _dd=_dc.val()?parseInt(_dc.val()):-1;
//var _de=min.val()?parseInt(min.val()):-1;
//var _df=_d0.find(".error_report");
//var _e0=_d0.find("input[name=siteUrl]");
//var _e1=_d0.find(".select").html();
//var _e2=_d0.find("input[name=issueDay]").val();
//var _e3="";
//var _e4,_e5;
//var _e6=function(str){
//if(str||str==0){
//return str;
//}else{
//return -1;
//}
//};
//if($(this).data("settime_status")){
//return;
//}
//var _e7=function(str){
//_str=str.replace(/\//g,"");
//var _e8=parseInt(_str);
//var _e9=parseInt(_cc.getFullYear()+_cd.checkTime(_cc.getMonth()+1)+_cd.checkTime(_cc.getDate()));
//if(_e8==_e9){
//return true;
//}
//};
//_df.html("");
//if(_e6(_dd)<0||_e6(_dd)>24){
//_df.html("璇疯緭鍏ユ纭殑鏃堕棿");
//_dc.val("").focus();
//return;
//}
//if(_e6(_de)<0||_e6(_de)>=60){
//_df.html("璇疯緭鍏ユ纭殑鏃堕棿");
//min.val("").focus();
//return;
//}
//if(_e7(_e2)&&_e6(_dd)<_cc.getHours()){
//_df.html("涓嶈兘鏃╀簬褰撳墠鏃堕棿");
//_dc.val("").focus();
//return;
//}
//if(_e7(_e2)&&_e6(_dd)==_cc.getHours()&&_e6(_de)<=_cc.getMinutes()){
//_df.html("涓嶈兘鏃╀簬褰撳墠鏃堕棿");
//min.val("").focus();
//return;
//}
//if(_ca!=""){
//_e5=_cd[_ca].box.find("input[name=toSiteUrl]");
//_d3=_e0.val();
//_e4=_e5.val();
//_e5.val(_d3);
//_e0.attr("disabled","disabled");
//if($("body.draft").size()>0){
//_e3=true;
//}
//data="&"+$("#timerSave").serialize();
//_cd.saveTent({"type":_ca,"eDom":_cb,"statu":"setTime","dataMore":data,"dateSiteUrl":_d3,"close":true,"draftIssue":_e3,"oldSiteUrlName":_e4});
//}else{
//data=$("#timerSave").serialize();
//$.ajax({url:"http://zhan.renren.com/"+_d8+"/issue/"+_c6+"/updateIssueDate",type:"POST",data:data,dataType:"json",success:function(r){
//if(r.code===0){
//_d7.find("a.issue_time").html(_e2+"&nbsp;"+_e6(_dd)+":"+_e6(_de)+"&nbsp;鍙戝竷");
//_d7.find(".post-site-user a.name-card").html(_e1);
//_d7.find("figure.newsfeed-user .name-card img").attr("src",_d0.find(".selctArea .select").data("siteTinyHead"));
//_d7.find("figure.newsfeed-user a.site").attr("data-uri","http://"+XZ.domain+"/"+_e0.val());
//_cd.clearDialog();
//}else{
//if(r.code===-2){
//_cd.drafeMessage(r.msg,3000);
//_d7.hide();
//}else{
//if(r.code===-1){
//$("#timerSave").data("settime_status",false);
//$("#pubtimer input[name=\"siteUrl\"]").attr("disabled","");
//$("#pubtimer .error_report").html("涓嶈兘鏃╀簬褰撳墠鏃堕棿");
//}else{
//alert(r.msg||"鎿嶄綔澶辫触锛岃绋嶅悗閲嶈瘯銆�");
//}
//}
//}
//}});
//}
//$(this).data("settime_status",true);
//}));
//_d0.find(".cancel").bind("click",function(){
//_cd.clearDialog();
//});
//},shareDate:function(_ea,_eb){
//this.active(_ea);
//this.shareDateStaus=true;
//this.shareDateInfo=_eb;
//},accNum:function(){
//var _ec=(XZ.hostId).toString();
//var num=_ec.length;
//return _ec.charAt(num-1);
//},terminalEdit:function(_ed,_ee){
//var url=window.location.href;
//var _ef=$.urlParam(url,"terminalEdit");
//var dom=$("#feed_"+_ed).find(".delete");
//if(_ef){
//if(this.judgeEdit(_ed)){
//this.edit(_ee,_ed,$("body"));
//}else{
//this.edit(_ee,_ed,dom);
//}
//}
//},terminalOpacity:function(_f0){
//CURSITE=CURSITE||{};
//if($("#publishbar").size()>0&&CURSITE.isTerm){
//_f0.addClass("opacity-30");
//}else{
//_f0.hide();
//}
//},terminalOpacityShow:function(_f1){
//CURSITE=CURSITE||{};
//if($("#publishbar").size()>0&&CURSITE.isTerm){
//_f1.removeClass("opacity-30");
//}else{
//this.showEditDom();
//}
//},disabledButton:function(_f2,_f3){
//var dom=_f2;
//var _f4=dom.find("input.btn-finish");
//if(_f3=="disabled"){
//_f4.css("disabled","disabled");
//}else{
//if(_f3=="restore"){
//_f4.css("disabled","");
//}
//}
//}};
//window.publisher=new SmallSite.app.Publisher();
//var swfobject=function(){
//var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){
//var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;
//if(typeof t.plugins!=D&&typeof t.plugins[S]==r){
//ab=t.plugins[S].description;
//if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){
//T=true;
//X=false;
//ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
//ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);
//ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);
//ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;
//}
//}else{
//if(typeof O.ActiveXObject!=D){
//try{
//var ad=new ActiveXObject(W);
//if(ad){
//ab=ad.GetVariable("$version");
//if(ab){
//X=true;
//ab=ab.split(" ")[1].split(",");
//ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];
//}
//}
//}
//catch(Z){
//}
//}
//}
//return {w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac};
//}(),k=function(){
//if(!M.w3){
//return;
//}
//if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){
//f();
//}
//if(!J){
//if(typeof j.addEventListener!=D){
//j.addEventListener("DOMContentLoaded",f,false);
//}
//if(M.ie&&M.win){
//j.attachEvent(x,function(){
//if(j.readyState=="complete"){
//j.detachEvent(x,arguments.callee);
//f();
//}
//});
//if(O==top){
//(function(){
//if(J){
//return;
//}
//try{
//j.documentElement.doScroll("left");
//}
//catch(X){
//setTimeout(arguments.callee,0);
//return;
//}
//f();
//})();
//}
//}
//if(M.wk){
//(function(){
//if(J){
//return;
//}
//if(!/loaded|complete/.test(j.readyState)){
//setTimeout(arguments.callee,0);
//return;
//}
//f();
//})();
//}
//s(f);
//}
//}();
//function f(){
//if(J){
//return;
//}
//try{
//var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));
//Z.parentNode.removeChild(Z);
//}
//catch(aa){
//return;
//}
//J=true;
//var X=U.length;
//for(var Y=0;Y<X;Y++){
//U[Y]();
//}
//};
//function K(X){
//if(J){
//X();
//}else{
//U[U.length]=X;
//}
//};
//function s(Y){
//if(typeof O.addEventListener!=D){
//O.addEventListener("load",Y,false);
//}else{
//if(typeof j.addEventListener!=D){
//j.addEventListener("load",Y,false);
//}else{
//if(typeof O.attachEvent!=D){
//i(O,"onload",Y);
//}else{
//if(typeof O.onload=="function"){
//var X=O.onload;
//O.onload=function(){
//X();
//Y();
//};
//}else{
//O.onload=Y;
//}
//}
//}
//}
//};
//function h(){
//if(T){
//V();
//}else{
//H();
//}
//};
//function V(){
//var X=j.getElementsByTagName("body")[0];
//var aa=C(r);
//aa.setAttribute("type",q);
//var Z=X.appendChild(aa);
//if(Z){
//var Y=0;
//(function(){
//if(typeof Z.GetVariable!=D){
//var ab=Z.GetVariable("$version");
//if(ab){
//ab=ab.split(" ")[1].split(",");
//M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];
//}
//}else{
//if(Y<10){
//Y++;
//setTimeout(arguments.callee,10);
//return;
//}
//}
//X.removeChild(aa);
//Z=null;
//H();
//})();
//}else{
//H();
//}
//};
//function H(){
//var ag=o.length;
//if(ag>0){
//for(var af=0;af<ag;af++){
//var Y=o[af].id;
//var ab=o[af].callbackFn;
//var aa={success:false,id:Y};
//if(M.pv[0]>0){
//var ae=c(Y);
//if(ae){
//if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){
//w(Y,true);
//if(ab){
//aa.success=true;
//aa.ref=z(Y);
//ab(aa);
//}
//}else{
//if(o[af].expressInstall&&A()){
//var ai={};
//ai.data=o[af].expressInstall;
//ai.width=ae.getAttribute("width")||"0";
//ai.height=ae.getAttribute("height")||"0";
//if(ae.getAttribute("class")){
//ai.styleclass=ae.getAttribute("class");
//}
//if(ae.getAttribute("align")){
//ai.align=ae.getAttribute("align");
//}
//var ah={};
//var X=ae.getElementsByTagName("param");
//var ac=X.length;
//for(var ad=0;ad<ac;ad++){
//if(X[ad].getAttribute("name").toLowerCase()!="movie"){
//ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value");
//}
//}
//P(ai,ah,Y,ab);
//}else{
//p(ae);
//if(ab){
//ab(aa);
//}
//}
//}
//}
//}else{
//w(Y,true);
//if(ab){
//var Z=z(Y);
//if(Z&&typeof Z.SetVariable!=D){
//aa.success=true;
//aa.ref=Z;
//}
//ab(aa);
//}
//}
//}
//}
//};
//function z(aa){
//var X=null;
//var Y=c(aa);
//if(Y&&Y.nodeName=="OBJECT"){
//if(typeof Y.SetVariable!=D){
//X=Y;
//}else{
//var Z=Y.getElementsByTagName(r)[0];
//if(Z){
//X=Z;
//}
//}
//}
//return X;
//};
//function A(){
//return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312);
//};
//function P(aa,ab,X,Z){
//a=true;
//E=Z||null;
//B={success:false,id:X};
//var ae=c(X);
//if(ae){
//if(ae.nodeName=="OBJECT"){
//l=g(ae);
//Q=null;
//}else{
//l=ae;
//Q=X;
//}
//aa.id=R;
//if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){
//aa.width="310";
//}
//if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){
//aa.height="137";
//}
//j.title=j.title.slice(0,47)+" - Flash Player Installation";
//var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;
//if(typeof ab.flashvars!=D){
//ab.flashvars+="&"+ac;
//}else{
//ab.flashvars=ac;
//}
//if(M.ie&&M.win&&ae.readyState!=4){
//var Y=C("div");
//X+="SWFObjectNew";
//Y.setAttribute("id",X);
//ae.parentNode.insertBefore(Y,ae);
//ae.style.display="none";
//(function(){
//if(ae.readyState==4){
//ae.parentNode.removeChild(ae);
//}else{
//setTimeout(arguments.callee,10);
//}
//})();
//}
//u(aa,ab,X);
//}
//};
//function p(Y){
//if(M.ie&&M.win&&Y.readyState!=4){
//var X=C("div");
//Y.parentNode.insertBefore(X,Y);
//X.parentNode.replaceChild(g(Y),X);
//Y.style.display="none";
//(function(){
//if(Y.readyState==4){
//Y.parentNode.removeChild(Y);
//}else{
//setTimeout(arguments.callee,10);
//}
//})();
//}else{
//Y.parentNode.replaceChild(g(Y),Y);
//}
//};
//function g(ab){
//var aa=C("div");
//if(M.win&&M.ie){
//aa.innerHTML=ab.innerHTML;
//}else{
//var Y=ab.getElementsByTagName(r)[0];
//if(Y){
//var ad=Y.childNodes;
//if(ad){
//var X=ad.length;
//for(var Z=0;Z<X;Z++){
//if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){
//aa.appendChild(ad[Z].cloneNode(true));
//}
//}
//}
//}
//}
//return aa;
//};
//function u(ai,ag,Y){
//var X,aa=c(Y);
//if(M.wk&&M.wk<312){
//return X;
//}
//if(aa){
//if(typeof ai.id==D){
//ai.id=Y;
//}
//if(M.ie&&M.win){
//var ah="";
//for(var ae in ai){
//if(ai[ae]!=Object.prototype[ae]){
//if(ae.toLowerCase()=="data"){
//ag.movie=ai[ae];
//}else{
//if(ae.toLowerCase()=="styleclass"){
//ah+=" class=\""+ai[ae]+"\"";
//}else{
//if(ae.toLowerCase()!="classid"){
//ah+=" "+ae+"=\""+ai[ae]+"\"";
//}
//}
//}
//}
//}
//var af="";
//for(var ad in ag){
//if(ag[ad]!=Object.prototype[ad]){
//af+="<param name=\""+ad+"\" value=\""+ag[ad]+"\" />";
//}
//}
//aa.outerHTML="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\""+ah+">"+af+"</object>";
//N[N.length]=ai.id;
//X=c(ai.id);
//}else{
//var Z=C(r);
//Z.setAttribute("type",q);
//for(var ac in ai){
//if(ai[ac]!=Object.prototype[ac]){
//if(ac.toLowerCase()=="styleclass"){
//Z.setAttribute("class",ai[ac]);
//}else{
//if(ac.toLowerCase()!="classid"){
//Z.setAttribute(ac,ai[ac]);
//}
//}
//}
//}
//for(var ab in ag){
//if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){
//e(Z,ab,ag[ab]);
//}
//}
//aa.parentNode.replaceChild(Z,aa);
//X=Z;
//}
//}
//return X;
//};
//function e(Z,X,Y){
//var aa=C("param");
//aa.setAttribute("name",X);
//aa.setAttribute("value",Y);
//Z.appendChild(aa);
//};
//function y(Y){
//var X=c(Y);
//if(X&&X.nodeName=="OBJECT"){
//if(M.ie&&M.win){
//X.style.display="none";
//(function(){
//if(X.readyState==4){
//b(Y);
//}else{
//setTimeout(arguments.callee,10);
//}
//})();
//}else{
//X.parentNode.removeChild(X);
//}
//}
//};
//function b(Z){
//var Y=c(Z);
//if(Y){
//for(var X in Y){
//if(typeof Y[X]=="function"){
//Y[X]=null;
//}
//}
//Y.parentNode.removeChild(Y);
//}
//};
//function c(Z){
//var X=null;
//try{
//X=j.getElementById(Z);
//}
//catch(Y){
//}
//return X;
//};
//function C(X){
//return j.createElement(X);
//};
//function i(Z,X,Y){
//Z.attachEvent(X,Y);
//I[I.length]=[Z,X,Y];
//};
//function F(Z){
//var Y=M.pv,X=Z.split(".");
//X[0]=parseInt(X[0],10);
//X[1]=parseInt(X[1],10)||0;
//X[2]=parseInt(X[2],10)||0;
//return (Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false;
//};
//function v(ac,Y,ad,ab){
//if(M.ie&&M.mac){
//return;
//}
//var aa=j.getElementsByTagName("head")[0];
//if(!aa){
//return;
//}
//var X=(ad&&typeof ad=="string")?ad:"screen";
//if(ab){
//n=null;
//G=null;
//}
//if(!n||G!=X){
//var Z=C("style");
//Z.setAttribute("type","text/css");
//Z.setAttribute("media",X);
//n=aa.appendChild(Z);
//if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){
//n=j.styleSheets[j.styleSheets.length-1];
//}
//G=X;
//}
//if(M.ie&&M.win){
//if(n&&typeof n.addRule==r){
//n.addRule(ac,Y);
//}
//}else{
//if(n&&typeof j.createTextNode!=D){
//n.appendChild(j.createTextNode(ac+" {"+Y+"}"));
//}
//}
//};
//function w(Z,X){
//if(!m){
//return;
//}
//var Y=X?"visible":"hidden";
//if(J&&c(Z)){
//c(Z).style.visibility=Y;
//}else{
//v("#"+Z,"visibility:"+Y);
//}
//};
//function L(Y){
//var Z=/[\\\"<>\.;]/;
//var X=Z.exec(Y)!=null;
//return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y;
//};
//var d=function(){
//if(M.ie&&M.win){
//window.attachEvent("onunload",function(){
//var ac=I.length;
//for(var ab=0;ab<ac;ab++){
//I[ab][0].detachEvent(I[ab][1],I[ab][2]);
//}
//var Z=N.length;
//for(var aa=0;aa<Z;aa++){
//y(N[aa]);
//}
//for(var Y in M){
//M[Y]=null;
//}
//M=null;
//for(var X in swfobject){
//swfobject[X]=null;
//}
//swfobject=null;
//});
//}
//}();
//return {registerObject:function(ab,X,aa,Z){
//if(M.w3&&ab&&X){
//var Y={};
//Y.id=ab;
//Y.swfVersion=X;
//Y.expressInstall=aa;
//Y.callbackFn=Z;
//o[o.length]=Y;
//w(ab,false);
//}else{
//if(Z){
//Z({success:false,id:ab});
//}
//}
//},getObjectById:function(X){
//if(M.w3){
//return z(X);
//}
//},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){
//var X={success:false,id:ah};
//if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){
//w(ah,false);
//K(function(){
//ae+="";
//ag+="";
//var aj={};
//if(af&&typeof af===r){
//for(var al in af){
//aj[al]=af[al];
//}
//}
//aj.data=ab;
//aj.width=ae;
//aj.height=ag;
//var am={};
//if(ad&&typeof ad===r){
//for(var ak in ad){
//am[ak]=ad[ak];
//}
//}
//if(Z&&typeof Z===r){
//for(var ai in Z){
//if(typeof am.flashvars!=D){
//am.flashvars+="&"+ai+"="+Z[ai];
//}else{
//am.flashvars=ai+"="+Z[ai];
//}
//}
//}
//if(F(Y)){
//var an=u(aj,am,ah);
//if(aj.id==ah){
//w(ah,true);
//}
//X.success=true;
//X.ref=an;
//}else{
//if(aa&&A()){
//aj.data=aa;
//P(aj,am,ah,ac);
//return;
//}else{
//w(ah,true);
//}
//}
//if(ac){
//ac(X);
//}
//});
//}else{
//if(ac){
//ac(X);
//}
//}
//},switchOffAutoHideShow:function(){
//m=false;
//},ua:M,getFlashPlayerVersion:function(){
//return {major:M.pv[0],minor:M.pv[1],release:M.pv[2]};
//},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){
//if(M.w3){
//return u(Z,Y,X);
//}else{
//return undefined;
//}
//},showExpressInstall:function(Z,aa,X,Y){
//if(M.w3&&A()){
//P(Z,aa,X,Y);
//}
//},removeSWF:function(X){
//if(M.w3){
//y(X);
//}
//},createCSS:function(aa,Z,Y,X){
//if(M.w3){
//v(aa,Z,Y,X);
//}
//},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){
//var Z=j.location.search||j.location.hash;
//if(Z){
//if(/\?/.test(Z)){
//Z=Z.split("?")[1];
//}
//if(aa==null){
//return L(Z);
//}
//var Y=Z.split("&");
//for(var X=0;X<Y.length;X++){
//if(Y[X].substring(0,Y[X].indexOf("="))==aa){
//return L(Y[X].substring((Y[X].indexOf("=")+1)));
//}
//}
//}
//return "";
//},expressInstallCallback:function(){
//if(a){
//var X=c(R);
//if(X&&l){
//X.parentNode.replaceChild(l,X);
//if(Q){
//w(Q,true);
//if(M.ie&&M.win){
//l.style.display="block";
//}
//}
//if(E){
//E(B);
//}
//}
//a=false;
//}
//}};
//}();
////document.domain="127.0.0.1:8080";
//jQuery(function(){
//jQuery(".post .video-play").live("click",function(){
//jQuery.use("playmedia",function(){
//var obj=jQuery(this);
//var _f5=obj.attr("data").split(";");
//var _f6=_f5[0];
//var url=_f5[1];
//var _f7=510;
//var _f8=parseInt(_f7/_f6);
//var _f9=jQuery("<div class=\"video-panel\" />").html(getVedioHTML(url,_f7,_f8,false,obj.attr("datavars"))).append("<div class=\"toolbar\"><a class=\"close\"><small>鏀惰捣瑙嗛</small></a></div>");
//obj.hide().parent().prepend(_f9);
//},this);
//return false;
//});
//jQuery(".post .video-panel .close").live("click",function(){
//var _fa=jQuery(this).parentsUntil(".post");
//_fa.find(".video-panel").remove();
//_fa.find(".video-play").show();
//return false;
//});
//});
//jQuery(function(){
//jQuery(".post .audio-play").live("click",function(){
//jQuery.use("playmedia",function(){
//var obj=jQuery(this);
//var _fb=obj.attr("data").split(";");
//var _fc=_fb[0];
//var url=_fb[1];
//var _fd=jQuery("<div class=\"audio-panel\" />").html(getAudioHTML(url,_fc));
//obj.hide().parent().prepend(_fd);
//},this);
//return false;
//});
//});
//jQuery(function(){
//if(document.body.id!=="miqiang"){
//jQuery.use("comment",function(){
//Comments.init();
//});
//}
//});
//jQuery(function(){
//var _fe={deleteFeed:function(_ff){
//jQuery.ajax({url:CURSITE.url+"/"+_ff+"/delete",dataType:"json",type:"post",success:function(_100){
//if(_100.code==0){
//if(document.body.id!=="miqiang"){
//jQuery("#feed_"+_ff).remove();
//}else{
//window.location.reload();
//}
//}
//}});
//},toogleLike:function(src,id,_101){
//var that=this;
//var _102=0;
//if(src.attr("num")!=undefined){
//_102=parseInt(src.attr("num"));
//}
//if(src.data("requesting")==false||src.data("requesting")==undefined){
//src.data("requesting",true);
//jQuery.ajax({url:_101?"http://zhan.renren.com/zhan/entry/"+id+"/unlike":"http://zhan.renren.com/zhan/entry/"+id+"/like",type:"post",dataType:"json",success:function(r){
//src.data("requesting",false);
//if(r.code==0){
//if(_101){
//_102=(_102-1)>0?(_102-1):0;
//src.removeClass("enjoy").addClass("enjoy").removeClass("enjoyed").attr("num",_102);
//that.updateNum(id,_102,src);
//}else{
//_102=_102+1;
//src.removeClass("enjoyed").addClass("enjoyed").removeClass("enjoy").attr("num",_102);
//that.updateNum(id,_102,src);
//if(XZ.showFirstOperateGuide){
//jQuery.use("guideLayout",function(){
//new SmallSite.app.guideLayout();
//});
//}
//}
//}else{
//jQuery.messageDialog({message:r.msg||"鍑洪敊浜�"});
//}
//},error:function(){
//src.data("requesting",true);
//}});
//}
//},updateNum:function(id,_103,src){
//if(CURSITE.isSyncLikeTotal==true){
//src.find("#likenum"+id).html(_103<=0?"":_103);
//}
//},shareFeed:function(id,url){
//jQuery.use("share",function(){
//SmallSite.share.dialog(id,url);
//});
//},topFeed:function(src,_104,_105){
//var _106=src.data("requesting");
//if(_106===true){
//return;
//}
//src.data("requesting",true);
//jQuery.ajax({url:CURSITE.url+"/"+_104+(_105?"/top":"/untop"),dataType:"json",type:"post",success:function(_107){
//if(_107.code==0){
//var _108=new jQuery.dialog({message:_105?"缃《鎴愬姛":"鍙栨秷缃《鎴愬姛",width:200});
//_108.getBody().addClass("center");
//setTimeout(function(){
//_108.hide();
//var page=jQuery.queryString("page");
//if(jQuery.queryString("page")==null){
//location.reload();
//}else{
//var href=location.href.replace(/page=\d+/,"page=0");
//location.href=href;
//}
//},2500);
//}
//},complete:function(){
//src.data("requesting",false);
//}});
//},getFeedId:function(obj){
//var _109="";
//if(document.body.id!=="miqiang"){
//_109=obj.parents(".post").attr("id").substring(5);
//}else{
//_109=jQuery("#mqDialog .dialog-box").attr("data-gid");
//}
//return _109;
//},bindEvent:function(){
//var that=this;
//jQuery(".post .post-action li .delete,#mqDialog .post-action li  .delete").live("click",function(){
//var obj=jQuery(this);
//if(confirm("纭畾鍒犻櫎鍚楋紵")){
//var _10a=that.getFeedId(obj);
//that.deleteFeed(_10a);
//}
//return false;
//});
//jQuery(".post li .enjoy,.post li .enjoyed,#mqDialog .post-action li  .enjoy,#mqDialog  .post-action li .enjoyed").live("click",function(_10b){
//_10b.preventDefault();
//if(CURSITE.auth!=true){
//SmallSite.login.dialog();
//return;
//}
//var obj=jQuery(this);
//var _10c=jQuery(this).is(".enjoyed");
//var _10d=that.getFeedId(obj);
//that.toogleLike(obj,_10d,_10c);
//return false;
//});
//jQuery(".post li .share,#mqDialog .post-action li  .share").live("click",function(_10e){
//_10e.preventDefault();
//if(CURSITE.auth!=true){
//SmallSite.login.dialog();
//return;
//}
//var obj=jQuery(this);
//var _10f=that.getFeedId(obj);
//if(XZ.showBindBubble){
//jQuery(".account-synca").show();
//}else{
//jQuery(".account-synca").remove();
//}
//that.shareFeed(_10f,CURSITE.url);
//return false;
//});
//jQuery(".post li .placetop,#mqDialog .post-action li .placetop").live("click",function(_110){
//_110.preventDefault();
//if(CURSITE.auth!=true){
//SmallSite.login.dialog();
//return;
//}
//var obj=jQuery(this);
//var p=jQuery(this).parents(".post");
//var _111=obj.text()==="缃《";
//var _112=that.getFeedId(obj);
//that.topFeed(obj,_112,_111);
//return false;
//});
//}};
//_fe.bindEvent();
//});
//jQuery(function(){
//jQuery.use("playmedia",function(){
//var _113=jQuery(".post-article .content .audio");
//_113.each(function(){
//var o=jQuery(this);
//var data=o.attr("alt").split(";");
//var type=data[0];
//var url=data[1];
//o.replaceWith(jQuery("<div class=\"audio-panel\" />").html(getAudioHTML(url,type)));
//});
//});
//});
//jQuery(function(){
//jQuery(function(){
//jQuery("#siteTopic .topics li a").tagOrderTip();
//});
//});
//function compressImg(img,_114,_115){
//var _116=img.naturalWidth||img.width;
//var _117=img.naturalHeight||img.height;
//var _118=240;
//var _119=(_117*_118)/_116;
//if(_119<240){
//_119=240;
//_118=(_116*_118)/_117;
//}
//img.style.width=_118+"px";
//img.style.height=_119+"px";
//img.style.visibility="visible";
//};
//document.domain="renren.com";
//var FollowAction={follow:function(_11a,from){
//if(CURSITE.auth!=true){
//SmallSite.login.dialog();
//return;
//}
//jQuery.ajax({url:"http://zhan.renren.com/"+(_11a||CURSITE.url)+"/follow"+from,type:"post",dataType:"json",success:function(_11b){
//if(_11b.code==0){
//jQuery(FollowAction).triggerHandler("followSuccess");
//}else{
//alert("鏈嶅姟鍣ㄧ箒蹇欙紝璇风◢鍚庡啀璇曪紒");
//}
//}});
//},cancel:function(_11c,from){
//if(confirm("纭鍙栨秷鍏虫敞灏忕珯鈥�"+CURSITE.name+"鈥濆悧锛�")){
//jQuery.ajax({url:"http://zhan.renren.com/"+(_11c||CURSITE.url)+"/unfollow"+from,type:"post",dataType:"json",success:function(_11d){
//if(_11d.code==0){
//jQuery(FollowAction).triggerHandler("cancelSuccess");
//}else{
//alert("鏈嶅姟鍣ㄧ箒蹇欙紝璇风◢鍚庡啀璇曪紒");
//}
//}});
//}
//}};
//jQuery(function(){
//var from=jQuery.queryString("from");
//if(from==null){
//from="?from=templeteBar";
//}else{
//from="?from=templeteBar&from2="+from;
//}
//jQuery(FollowAction).bind("followSuccess",function(){
//jQuery(".bar-btn-attention").removeClass("bar-btn-attention").addClass("bar-btn-ready");
//jQuery(".bar-btn-ready").text("宸插叧娉�");
//if(XZ.showFirstOperateGuide){
//jQuery.use("guideLayout",function(){
//new SmallSite.app.guideLayout();
//});
//}else{
//if(SmallSite.app&&SmallSite.app.followAboutPop){
//new SmallSite.app.followAboutPop("templateBarAbout"+(jQuery.queryString("from")?"&from2="+jQuery.queryString("from"):""),CURSITE.url);
//}
//}
//}).bind("cancelSuccess",function(){
//if(jQuery(".bar-btn").length>=1){
//jQuery(".bar-btn").removeClass("bar-btn").addClass("bar-btn-attention");
//}
//if(jQuery(".bar-btn-ready").length>=1){
//jQuery(".bar-btn-ready").removeClass("bar-btn-ready").addClass("bar-btn-attention");
//}
//jQuery(".bar-btn-attention").text("鍏虫敞");
//});
//jQuery(".bar-btn-attention").live("click",function(){
//FollowAction.follow(CURSITE.url,from);
//return false;
//});
//jQuery(".bar-btn").live("click",function(){
//FollowAction.cancel(CURSITE.url,from);
//return false;
//});
//jQuery(".bar-btn-ready").live("mouseenter",function(){
//jQuery(this).removeClass("bar-btn-ready").addClass("bar-btn").html("鍙栨秷");
//});
//jQuery(".bar-btn").live("mouseleave",function(){
//jQuery(this).removeClass("bar-btn").addClass("bar-btn-ready").html("宸插叧娉�");
//});
//});
//jQuery(function(){
//jQuery("body").unbind("publish-success").bind("publish-success",function(_11e,ret,type){
//if(!ret.isAppend){
//return;
//}
//var _11f="#postList";
//if(this.id==="miqiang"){
//_11f="#postList .column:first";
//}
//jQuery(innerShiv(ret.html)).fadeIn().prependTo(_11f);
//if(type=="photo"){
//jQuery(".picture-tip,.theme-tip").hide();
//jQuery(".home-tip").show();
//}
//});
//jQuery(".home-tip .closed,.picture-tip .closed,.theme-tip .closed").bind("click",function(){
//jQuery.ajax({url:"http://zhan.renren.com/guide/step/close",type:"post",dataType:"json",success:function(_120){
//if(_120.code==0){
//jQuery(".home-tip,.picture-tip,.theme-tip").hide();
//}else{
//alert("鏈嶅姟鍣ㄧ箒蹇欙紝璇风◢鍚庡啀璇曪紒");
//}
//}});
//});
//jQuery("a.publisher-photo-trigger").click(function(){
//jQuery(".picture-tip").hide();
//});
//if(jQuery.queryString("step")==0){
//jQuery(".theme-tip").css({left:jQuery(".tools .settingbox").offset().left-jQuery("#publishbar .barpanel").offset().left-87}).show();
//}else{
//if(jQuery.queryString("step")==2){
//if(jQuery("#publisherNav .publisher-photo").length<1){
//return;
//}
//jQuery(".picture-tip").css({"left":jQuery("#publisherNav .publisher-photo").offset().left-jQuery("#publishbar .barpanel").offset().left-45}).show();
//}
//}
//function _121(type){
//var _122=153;
//switch(type){
//case "siteFollowed":
//if(XZ.showSiteFollowBubble==false){
//return;
//}
//var obj=jQuery(".atten-tion");
//if(jQuery(".tools .bar-btn-attention").length<1){
//return;
//}
//obj.css({left:jQuery(".tools .bar-btn-attention").offset().left-jQuery("#publishbar .barpanel").offset().left});
//obj.show();
//XZ.showSiteFollowBubble=false;
//break;
//case "nextSite":
//if(XZ.showNextSiteBubble==false){
//return;
//}
//var obj=jQuery(".next-station");
//if(jQuery(".tools .next-site").length<1){
//return;
//}
//obj.css({left:jQuery(".tools .next-site").offset().left-jQuery("#publishbar .barpanel").offset().left});
//obj.show();
//XZ.showNextSiteBubble=false;
//break;
//case "create":
//if(XZ.showCreateSiteBubble==false){
//return;
//}
//var obj=jQuery(".create-newsite");
//if(jQuery(".tools .bar-btn-creat").length<1){
//return;
//}
//obj.css({left:jQuery(".tools .bar-btn-creat").offset().left-jQuery("#publishbar .barpanel").offset().left});
//obj.show();
//XZ.showCreateSiteBubble=false;
//break;
//case "statistics":
//if(XZ.showStatBubble==false){
//return;
//}
//if(jQuery(".tools .tongji").length<1){
//return;
//}
//var obj=jQuery(".statistics-tics");
//obj.css({left:jQuery(".tools .tongji").offset().left-jQuery("#publishbar .barpanel").offset().left-_122});
//obj.show();
//XZ.showStatBubble=false;
//break;
//}
//};
//if(!XZ.skipShowGuide&&CURSITE.auth==true){
//jQuery(".tools .bar-btn-attention").click(function(){
//jQuery(".atten-tion").hide();
//});
//if(jQuery.queryString("step")==null){
//if(XZ.showSiteFollowBubble==true){
//_121("siteFollowed");
//}else{
//if(XZ.showNextSiteBubble==true){
//_121("nextSite");
//}else{
//if(XZ.showCreateSiteBubble==true){
//_121("create");
//}else{
//if(XZ.showStatBubble==true){
//_121("statistics");
//}
//}
//}
//}
//jQuery(".next-station .textarea a,.atten-tion .textarea a,.create-newsite .textarea a,.statistics-tics .textarea a").bind("click",function(){
//jQuery(this).parent().parent().hide();
//});
//}
//}
//if(XZ.skipShowGuide==true){
//var _123=null;
//var _124=null;
//var _125=jQuery(".meet-atten");
//var _126=jQuery(".love-atten");
//jQuery(".next-site").hover(function(){
//_125.css({left:jQuery(this).offset().left-jQuery("#publishbar .barpanel").offset().left}).show();
//},function(){
//_125.hide();
//});
//jQuery(".bar-btn-attention").hover(function(){
//_126.css({left:jQuery(this).offset().left-jQuery("#publishbar .barpanel").offset().left}).show();
//},function(){
//_126.hide();
//});
//}
//});
//jQuery(function(){
//jQuery(document).click(function(e){
//if(e.button==0){
//}
//});
//jQuery(".settingspop .btn").click(function(){
//if(typeof jQuery(this).attr("order")!="undefined"){
//var _127=jQuery(this).attr("order");
//if(_127=="leave"){
//jQuery.confirmDialog({message:"纭畾閫€鍑哄悧锛�",title:"閫€鍑哄皬绔�",callback:function(){
//this.hide();
//jQuery.ajax({url:"http://zhan.renren.com/"+CURSITE.url+"/customize/owner/left",dataType:"json",type:"post",success:function(_128){
//window.location.href="http://zhan.renren.com/"+CURSITE.url;
//}});
//}});
//}
//}
//});
//jQuery(document.body).bind("click",function(_129){
//var _12a=_129.target;
//if(jQuery(_12a).is(".settings-owener")){
//var pop=jQuery(".settingspop");
//if(pop.is(":visible")){
//pop.hide();
//}else{
//jQuery(".settingspop").show();
//}
//}else{
//if(!jQuery.contains(jQuery(".settingspop")[0]||jQuery("body")[0],_12a)){
//jQuery(".settingspop").hide();
//}
//}
//});
//});
//jQuery(function(){
//var gid="";
//var _12b=jQuery.queryString("t")=="cmt";
//var _12c=true;
//var _12d=40;
//if(typeof CURSITE!="undefined"){
//gid=CURSITE.gid;
//_12c=CURSITE.isTerm;
//}
//if(jQuery.browser.msie&&(jQuery.browser.version=="6.0")){
//_12d=0;
//}
//if(!_12c&&gid!=""&&gid!="0"&&!_12b&&jQuery("#feed_"+gid).size()>0){
//jQuery("html, body").animate({scrollTop:jQuery("#feed_"+gid).offset().top-_12d},0);
//}
//jQuery.use("comment",function(){
//if(gid!=""&&CURSITE.auth==true){
//jQuery("#replyAction"+gid).trigger("click.reply",[_12b]);
//}
//});
//});
//jQuery(function(){
//var _12e=null;
//var _12f=null;
//var _130=0,_131=0,rdId=0;
//jQuery(".menubox").live("mouseover",function(){
//jQuery(".settingspop").hide();
//if(_12f){
//clearTimeout(_12f);
//}
//if(_12e){
//clearTimeout(_12e);
//}
//if(_130&&(new Date().getTime()-_130)<=500&&rdId==jQuery(this).attr("rdId")){
//return;
//}
//var obj=jQuery(this);
//rdId=Math.random()+"";
//obj.attr("rdId",rdId);
//jQuery(".bar-menulist").unbind();
//jQuery(".bar-menulist").hover(function(){
//if((new Date().getTime()-_131)<=500){
//clearTimeout(_12e);
//}
//},function(){
//var That=this;
//_130=new Date().getTime();
//_12f=setTimeout(function(){
//jQuery(That).hide();
//},500);
//});
//jQuery(".bar-menulist").show();
//}).live("mouseout",function(){
//_131=new Date().getTime();
//_12e=setTimeout(function(){
//jQuery(".bar-menulist").hide();
//},500);
//});
//});
//jQuery(function(){
//var hash=location.hash;
//if(hash.indexOf("contribute")!==-1){
//contribution.showPublisher();
//publisher.active("photo");
//}else{
//if(hash.indexOf("pubblog")!==-1){
//contribution.showPublisher();
//publisher.active("text");
//}else{
//if(hash.indexOf("pubphoto")!==-1){
//contribution.showPublisher();
//publisher.active("photo");
//}else{
//if(hash.indexOf("pubvideo")!==-1){
//contribution.showPublisher();
//publisher.active("video");
//}else{
//if(hash.indexOf("pubmusic")!==-1){
//contribution.showPublisher();
//publisher.active("music");
//}else{
//if(hash.indexOf("publink")!==-1){
//contribution.showPublisher();
//publisher.active("link");
//}
//}
//}
//}
//}
//}
//});
//jQuery(function(){
//window.guideScorllStatus=true;
//(function(){
//var _132=jQuery(["<div id=\"guide-scorll\" class=\"guidescorll\">","<div class=\"autowidth\">","<div class=\"text-area\">","<p class=\"p1\"><strong>娆㈣繋鏉ュ埌浜轰汉灏忕珯!</strong>  <em>鎽勫奖銆侀煶涔愩€佺編椋熴€佽璁°€佺數褰便€佸灞呫€佹梾琛屻€佸姩婕€佹苯杞�.....</em></p>","<p class=\"p2\">鏇剧粡鐨�<em>姊︽兂</em>銆佹浘缁忕殑<em>鐖卞ソ</em>銆佹槸鍚︽笎娓愯閬楀繕...... 璇村嚭浣�<em>鍠滄浠€涔�</em>锛屾瘡澶╅兘鑳界湅鍒颁綘鍠滄鐨勫唴瀹�</p>","</div>","<div id=\"find_Interest\" class=\"find\">鍙戠幇鍏磋叮</div>","<a id=\"guide-close\" class=\"close\" href=\"javascript:void(0)\" title=\"鍏抽棴\"></a>","</div>","</div>"].join(""));
//if(XZ.showFirstOperateGuide){
//jQuery("body").append(_132);
//jQuery("#find_Interest").live("click",function(){
//if(XZ.showFirstOperateGuide){
//jQuery.use("guideLayout",function(){
//new SmallSite.app.guideLayout();
//});
//}
//jQuery("#guide-scorll").css({display:"none"});
//guideScorllStatus=false;
//});
//jQuery("#guide-close").live("click",function(){
//jQuery("#guide-scorll").css({display:"none"});
//guideScorllStatus=false;
//});
//jQuery(window).scroll(function(_133){
//var _134=parseInt(jQuery(window).height());
//var _135=parseInt(jQuery(this).scrollTop());
//if(window.guideScorllStatus){
//if(jQuery.browser.msie&&(jQuery.browser.version=="6.0")){
//jQuery("#guide-scorll").css({top:_135,position:"absolute"});
//}
//if(_135-_134>=0){
//jQuery(".next-station,.atten-tion,.create-newsite").hide();
//jQuery("#guide-scorll").fadeIn(500);
//}else{
//jQuery("#guide-scorll").fadeOut(500);
//}
//}
//});
//}
//})();
//});
//jQuery(function(){
//var url=window.location.href;
//var _136,_137;
//var url=window.location.href;
//var name=$.urlParam(url,"terminalEdit");
//var _138,_139;
//if(url.indexOf("rejectionid")!==-1&&url.indexOf("rejectiontype")!==-1){
//_136=jQuery.queryString("rejectionid");
//_137=jQuery.queryString("rejectiontype");
//publisher.edit(_137,_136);
//}
//if(name){
//_138=jQuery.queryString("type");
//_139=jQuery.queryString("id");
//publisher.terminalEdit(_139,_138);
//}
//});
//function music_openRRMCPop(_13a){
//id=_13a["id"][1];
//var _13b="toolbar=no,location=no,directories=no,menubar=no,resizable=yes,status=yes,scrollbars=no,width=620,height=565,left=200,top=0",_13c=window.open("http://a.xnimg.cn/xnapp/music/res/blank.htm","rrMCWin",_13b);
//if(_13c){
//_13c.focus();
//}else{
//alert("浣犵殑娴忚鍣ㄦ嫤鎴簡鎾斁鍣ㄧ獥鍙�,璇疯缃�!");
//return false;
//}
//var _13d={url:"http://music.renren.com/playlist/add?from=xiaozhan"};
//music_postRequest(_13d.url,_13a,"rrMCWin");
//};
//function music_postRequest(url,_13e,_13f){
//try{
//var _140=document;
//var f=_140.createElement("form");
//f.action=url;
//f.method="post";
//for(var item in _13e){
//if(_13e[item] instanceof Array){
//for(var iaa=0;iaa<_13e[item].length;iaa++){
//creatHiddenInput(escape(item),escape(_13e[item][iaa]),f);
//}
//}else{
//creatHiddenInput(escape(item),escape(_13e[item]),f);
//}
//}
//if(_13f){
//f.target=_13f;
//}
//creatHiddenInput("redirectType","new",f);
//creatHiddenInput("_rtk",XZ.get_check,f);
//f.submit();
//}
//catch(e){
//}
//};
//function creatHiddenInput(name,_141,f){
//var _142=document;
//var obj=_142.createElement("input");
//obj.type="hidden";
//obj.name=name;
//obj.value=_141;
//f.appendChild(obj);
//_142.body.appendChild(f);
//};
//function music_playSong(ids,tj){
//music_openRRMCPop({type:"song",id:[ids]});
//};
//(function(b){
//var e,d,a=[],c=window;
//b.fn.tinymce=function(j){
//var p=this,g,k,h,m,i,l="",n="";
//if(!p.length){
//return p;
//}
//if(!j){
//return tinyMCE.get(p[0].id);
//}
//p.css("visibility","hidden");
//function o(){
//var r=[],q=0;
//if(f){
//f();
//f=null;
//}
//p.each(function(t,u){
//var s,w=u.id,v=j.oninit;
//if(!w){
//u.id=w=tinymce.DOM.uniqueId();
//}
//s=new tinymce.Editor(w,j);
//r.push(s);
//s.onInit.add(function(){
//var x,y=v;
//p.css("visibility","");
//if(v){
//if(++q==r.length){
//if(tinymce.is(y,"string")){
//x=(y.indexOf(".")===-1)?null:tinymce.resolve(y.replace(/\.\w+$/,""));
//y=tinymce.resolve(y);
//}
//y.apply(x||tinymce,r);
//}
//}
//});
//});
//b.each(r,function(t,s){
//s.render();
//});
//};
//if(!c.tinymce&&!d&&(g=j.script_url)){
//d=1;
//h=g.substring(0,g.lastIndexOf("/"));
//if(/_(src|dev)\.js/g.test(g)){
//n="_src";
//}
//m=g.lastIndexOf("?");
//if(m!=-1){
//l=g.substring(m+1);
//}
//c.tinyMCEPreInit=c.tinyMCEPreInit||{base:h,suffix:n,query:l};
//if(g.indexOf("gzip")!=-1){
//i=j.language||"en";
//g=g+(/\?/.test(g)?"&":"?")+"js=true&core=true&suffix="+escape(n)+"&themes="+escape(j.theme)+"&plugins="+escape(j.plugins)+"&languages="+i;
//if(!c.tinyMCE_GZ){
//tinyMCE_GZ={start:function(){
//tinymce.suffix=n;
//function q(r){
//tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(r));
//};
//q("langs/"+i+".js");
//q("themes/"+j.theme+"/editor_template"+n+".js");
//q("themes/"+j.theme+"/langs/"+i+".js");
//b.each(j.plugins.split(","),function(s,r){
//if(r){
//q("plugins/"+r+"/editor_plugin"+n+".js");
//q("plugins/"+r+"/langs/"+i+".js");
//}
//});
//},end:function(){
//}};
//}
//}
//b.ajax({type:"GET",url:g,dataType:"script",cache:true,success:function(){
//tinymce.dom.Event.domLoaded=1;
//d=2;
//if(j.script_loaded){
//j.script_loaded();
//}
//o();
//b.each(a,function(q,r){
//r();
//});
//}});
//}else{
//if(d===1){
//a.push(o);
//}else{
//o();
//}
//}
//return p;
//};
//b.extend(b.expr[":"],{tinymce:function(g){
//return g.id&&!!tinyMCE.get(g.id);
//}});
//function f(){
//function i(l){
//if(l==="remove"){
//this.each(function(n,o){
//var m=h(o);
//if(m){
//m.remove();
//}
//});
//}
//this.find("span.mceEditor,div.mceEditor").each(function(n,o){
//var m=tinyMCE.get(o.id.replace(/_parent$/,""));
//if(m){
//m.remove();
//}
//});
//};
//function k(n){
//var m=this,l;
//if(n!==e){
//i.call(m);
//m.each(function(p,q){
//var o;
//if(o=tinyMCE.get(q.id)){
//o.setContent(n);
//}
//});
//}else{
//if(m.length>0){
//if(l=tinyMCE.get(m[0].id)){
//return l.getContent();
//}
//}
//}
//};
//function h(m){
//var l=null;
//(m)&&(m.id)&&(c.tinymce)&&(l=tinyMCE.get(m.id));
//return l;
//};
//function g(l){
//return !!((l)&&(l.length)&&(c.tinymce)&&(l.is(":tinymce")));
//};
//var j={};
//b.each(["text","html","val"],function(n,l){
//var o=j[l]=b.fn[l],m=(l==="text");
//b.fn[l]=function(s){
//var p=this;
//if(!g(p)){
//return o.apply(p,arguments);
//}
//if(s!==e){
//k.call(p.filter(":tinymce"),s);
//o.apply(p.not(":tinymce"),arguments);
//return p;
//}else{
//var r="";
//var q=arguments;
//(m?p:p.eq(0)).each(function(u,v){
//var t=h(v);
//r+=t?(m?t.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):t.getContent()):o.apply(b(v),q);
//});
//return r;
//}
//};
//});
//b.each(["append","prepend"],function(n,m){
//var o=j[m]=b.fn[m],l=(m==="prepend");
//b.fn[m]=function(q){
//var p=this;
//if(!g(p)){
//return o.apply(p,arguments);
//}
//if(q!==e){
//p.filter(":tinymce").each(function(s,t){
//var r=h(t);
//r&&r.setContent(l?q+r.getContent():r.getContent()+q);
//});
//o.apply(p.not(":tinymce"),arguments);
//return p;
//}
//};
//});
//b.each(["remove","replaceWith","replaceAll","empty"],function(m,l){
//var n=j[l]=b.fn[l];
//b.fn[l]=function(){
//i.call(this,l);
//return n.apply(this,arguments);
//};
//});
//j.attr=b.fn.attr;
//b.fn.attr=function(n,q,o){
//var m=this;
//if((!n)||(n!=="value")||(!g(m))){
//return j.attr.call(m,n,q,o);
//}
//if(q!==e){
//k.call(m.filter(":tinymce"),q);
//j.attr.call(m.not(":tinymce"),n,q,o);
//return m;
//}else{
//var p=m[0],l=h(p);
//return l?l.getContent():j.attr.call(b(p),n,q,o);
//}
//};
//};
//})(jQuery);
//new function(_143){
//var _144=_143.separator||"&";
//var _145=_143.spaces===false?false:true;
//var _146=_143.suffix===false?"":"[]";
//var _147=_143.prefix===false?false:true;
//var _148=_147?_143.hash===true?"#":"?":"";
//var _149=_143.numbers===false?false:true;
//jQuery.query=new function(){
//var is=function(o,t){
//return o!=undefined&&o!==null&&(!!t?o.constructor==t:true);
//};
//var _14a=function(path){
//var m,rx=/\[([^[]*)\]/g,_14b=/^([^[]+)(\[.*\])?$/.exec(path),base=_14b[1],_14c=[];
//while(m=rx.exec(_14b[2])){
//_14c.push(m[1]);
//}
//return [base,_14c];
//};
//var set=function(_14d,_14e,_14f){
//var o,_150=_14e.shift();
//if(typeof _14d!="object"){
//_14d=null;
//}
//if(_150===""){
//if(!_14d){
//_14d=[];
//}
//if(is(_14d,Array)){
//_14d.push(_14e.length==0?_14f:set(null,_14e.slice(0),_14f));
//}else{
//if(is(_14d,Object)){
//var i=0;
//while(_14d[i++]!=null){
//}
//_14d[--i]=_14e.length==0?_14f:set(_14d[i],_14e.slice(0),_14f);
//}else{
//_14d=[];
//_14d.push(_14e.length==0?_14f:set(null,_14e.slice(0),_14f));
//}
//}
//}else{
//if(_150&&_150.match(/^\s*[0-9]+\s*$/)){
//var _151=parseInt(_150,10);
//if(!_14d){
//_14d=[];
//}
//_14d[_151]=_14e.length==0?_14f:set(_14d[_151],_14e.slice(0),_14f);
//}else{
//if(_150){
//var _151=_150.replace(/^\s*|\s*$/g,"");
//if(!_14d){
//_14d={};
//}
//if(is(_14d,Array)){
//var temp={};
//for(var i=0;i<_14d.length;++i){
//temp[i]=_14d[i];
//}
//_14d=temp;
//}
//_14d[_151]=_14e.length==0?_14f:set(_14d[_151],_14e.slice(0),_14f);
//}else{
//return _14f;
//}
//}
//}
//return _14d;
//};
//var _152=function(a){
//var self=this;
//self.keys={};
//if(a.queryObject){
//jQuery.each(a.get(),function(key,val){
//self.SET(key,val);
//});
//}else{
//jQuery.each(arguments,function(){
//var q=""+this;
//q=q.replace(/^[?#]/,"");
//q=q.replace(/[;&]$/,"");
//if(_145){
//q=q.replace(/[+]/g," ");
//}
//jQuery.each(q.split(/[&;]/),function(){
//var key=decodeURIComponent(this.split("=")[0]||"");
//var val=decodeURIComponent(this.split("=")[1]||"");
//if(!key){
//return;
//}
//if(_149){
//if(/^[+-]?[0-9]+\.[0-9]*$/.test(val)){
//val=parseFloat(val);
//}else{
//if(/^[+-]?[0-9]+$/.test(val)){
//val=parseInt(val,10);
//}
//}
//}
//val=(!val&&val!==0)?true:val;
//if(val!==false&&val!==true&&typeof val!="number"){
//val=val;
//}
//self.SET(key,val);
//});
//});
//}
//return self;
//};
//_152.prototype={queryObject:true,has:function(key,type){
//var _153=this.get(key);
//return is(_153,type);
//},GET:function(key){
//if(!is(key)){
//return this.keys;
//}
//var _154=_14a(key),base=_154[0],_155=_154[1];
//var _156=this.keys[base];
//while(_156!=null&&_155.length!=0){
//_156=_156[_155.shift()];
//}
//return typeof _156=="number"?_156:_156||"";
//},get:function(key){
//var _157=this.GET(key);
//if(is(_157,Object)){
//return jQuery.extend(true,{},_157);
//}else{
//if(is(_157,Array)){
//return _157.slice(0);
//}
//}
//return _157;
//},SET:function(key,val){
//var _158=!is(val)?null:val;
//var _159=_14a(key),base=_159[0],_15a=_159[1];
//var _15b=this.keys[base];
//this.keys[base]=set(_15b,_15a.slice(0),_158);
//return this;
//},set:function(key,val){
//return this.copy().SET(key,val);
//},REMOVE:function(key){
//return this.SET(key,null).COMPACT();
//},remove:function(key){
//return this.copy().REMOVE(key);
//},EMPTY:function(){
//var self=this;
//jQuery.each(self.keys,function(key,_15c){
//delete self.keys[key];
//});
//return self;
//},load:function(url){
//var hash=url.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");
//var _15d=url.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");
//return new _152(url.length==_15d.length?"":_15d,url.length==hash.length?"":hash);
//},empty:function(){
//return this.copy().EMPTY();
//},copy:function(){
//return new _152(this);
//},COMPACT:function(){
//function _15e(orig){
//var obj=typeof orig=="object"?is(orig,Array)?[]:{}:orig;
//if(typeof orig=="object"){
//function add(o,key,_15f){
//if(is(o,Array)){
//o.push(_15f);
//}else{
//o[key]=_15f;
//}
//};
//jQuery.each(orig,function(key,_160){
//if(!is(_160)){
//return true;
//}
//add(obj,key,_15e(_160));
//});
//}
//return obj;
//};
//this.keys=_15e(this.keys);
//return this;
//},compact:function(){
//return this.copy().COMPACT();
//},toString:function(){
//var i=0,_161=[],_162=[],self=this;
//var _163=function(str){
//str=str+"";
//if(_145){
//str=str.replace(/ /g,"+");
//}
//return encodeURIComponent(str);
//};
//var _164=function(arr,key,_165){
//if(!is(_165)||_165===false){
//return;
//}
//var o=[_163(key)];
//if(_165!==true){
//o.push("=");
//o.push(_163(_165));
//}
//arr.push(o.join(""));
//};
//var _166=function(obj,base){
//var _167=function(key){
//return !base||base==""?[key].join(""):[base,"[",key,"]"].join("");
//};
//jQuery.each(obj,function(key,_168){
//if(typeof _168=="object"){
//_166(_168,_167(key));
//}else{
//_164(_162,_167(key),_168);
//}
//});
//};
//_166(this.keys);
//if(_162.length>0){
//_161.push(_148);
//}
//_161.push(_162.join(_144));
//return _161.join("");
//}};
//return new _152(location.search,location.hash);
//};
//}(jQuery.query||{});
//jQuery.extend({lazyPicsSet:false,lazyPicsSelectors:[],lazyPics:function(_169){
//var $=jQuery;
//if(!_169){
//return;
//}
//var _16a={selector:"#postList img[data-src]",loadNum:10,stepNum:1,callback:""};
//var args=arguments;
//var opts={};
//var isIE=$.browser.msie;
//var _16b=0;
//var _16c=-1;
//var _16d=[];
//var _16e,_16f,_170,_171,_172;
//var init=function(){
//var _173;
//if(!args[0].hasOwnProperty("length")){
//opts=$.extend(_16a,args[0],true);
//}else{
//opts=_16a;
//opts.selector=args[0];
//opts.callback=args[1];
//}
//_171=opts.selector;
//_16f=$(_171).filter("img[data-src]");
//_170=opts.loadNum;
//callback=opts.callback;
//_172=opts.stepNum;
//$.lazyPicsSet=true;
//_173=_174().index;
//_173=_173===-1?0:_173;
//if(_16f.size()===0){
//return;
//}
//_175(_173,_170);
//_16c=_173;
//if($.inArray(_171,$.lazyPicsSelectors)===-1){
//$.lazyPicsSelectors.push(_171);
//}else{
//_176();
//_177();
//}
//_178();
//};
//var _178=function(){
//var r={};
//var _179=-1;
//var _17a=0;
//$(window).bind("scroll.lazyPics",function(){
//_16b=$(this).scrollTop();
//if(_16e){
//clearTimeout(_16e);
//_16e=null;
//}
//_16e=setTimeout(function(){
//if($(window).scrollTop()===_16b){
//r=_174();
//_179=r.index;
//_17a=r.resultNum;
//if(_179>-1){
//_16c=_179;
//_175(_16c,_170>=_17a?_170:_17a);
//}else{
//if(_16c!=-1){
//_175(_16c,_172);
//}
//}
//}
//},300);
//});
//};
//var _177=function(){
//_16f=$(_171).filter("img[data-src]");
//};
//var _174=function(){
//var sel=typeof _171==="string"?_171:$(_171).filter("img[data-src]");
//var _17b=$.scrollAt(sel,-500);
//var _17c=_17b.length;
//var _17d=_16f.index($(_17b[0]));
//if(_17b.length===0){
//_17d=-1;
//}
//return {index:_17d,resultNum:_17c};
//};
//var _175=function(_17e,_17f){
//var len=_17f||_170;
//var _180=_16f.splice(_17e,len);
//if(_180.length===0){
//_16c=-1;
//return;
//}
//$(_180).each(function(){
//var _181=$(this);
//if(isIE){
//if(!_181.attr("data-src")){
//return;
//}
//_181.attr("src",_181.attr("data-src")).removeAttr("data-src");
//if(callback){
//callback.call(_181);
//}
//return;
//}
//var _182=new Image();
//$(_182).bind("load",(function(_183){
//return function(){
//var _184=$(this);
//_184.css("opacity",0);
//if(callback){
//callback.call(this);
//}
//_183.replaceWith(_184);
//setTimeout(function(){
//_184.css("opacity",1);
//},25);
//};
//})(_181));
//$(_182).bind("error",(function(_185){
//return function(){
//var _186=$(this);
//_186[0].src="http://a.xnimg.cn/smallsite/images/img-404.png";
//_186[0].alt="鍥剧墖鏈壘鍒�";
//_186[0].title="鍥剧墖鏈壘鍒�";
//_185.replaceWith(_186);
//};
//})(_181));
//_182.src=_181.attr("data-src");
//_182.alt=_181.attr("alt");
//_182.title=_181.attr("title");
//_181.removeAttr("data-src");
//});
//};
//var _176=function(){
//$(window).unbind("scroll.lazyPics");
//};
//init();
//}});
//document.domain="renren.com";
//SmallSite.recommand=function(){
//};
//SmallSite.recommand.prototype={Initialization:function(){
//this.tuijian=jQuery("#tuijian");
//this.zijian=jQuery(".zijian");
//this.suggestSite=jQuery("#suggestSite");
//this.fromArg=jQuery.queryString("from");
//this.fromUrl=jQuery.queryString("siteurl");
//this.bindEvent();
//this.autoPop();
//},bindEvent:function(){
//var That=this;
//this.tuijian.hover(function(){
//if(That.suggestNum==undefined){
//That.getSuggestNumAjax();
//}
//jQuery(".bar-tuijian").css("display","block");
//},function(){
//jQuery(".bar-tuijian").css("display","none");
//});
//this.zijian.hover(function(){
//if(That.suggestNum==undefined){
//That.getSuggestNumAjax();
//}
//if(XZ.skipShowGuide==true){
//jQuery(".bar-zijian").css("display","block");
//}
//},function(){
//jQuery(".bar-zijian").css("display","none");
//});
//this.suggestSite.bind("click",function(){
//That.from="zhanSuggest";
//That.getCategoryAjax(this);
//});
//jQuery(window).scroll(function(){
//if(XZ.showSuggestSiteBubble&&jQuery(window).scrollTop()>1900){
//if(That.suggestNum==undefined){
//That.getSuggestNumAjax();
//}
//jQuery(".bar-tuijian").show();
//}
//});
//},autoPop:function(){
//if(jQuery.queryString("from")=="templateSuggest"){
//this.suggestSite.trigger("click");
//}else{
//return;
//}
//},getCategoryAjax:function(T){
//var This=this;
//var that=T;
//if(jQuery(that).data("requesting")==true){
//return;
//}
//jQuery(that).data("requesting",true);
//jQuery.ajax({url:"http://zhan.renren.com/suggest/category?from="+This.from,dataType:"json",success:function(res){
//var Li=This.constructLi(res);
//This.showLayer(Li,that);
//},complete:function(){
//jQuery(that).data("requesting",false);
//},error:function(){
//jQuery.messageDialog({message:"鏈嶅姟鍑洪敊浜嗭紝绋嶅悗閲嶈瘯"});
//}});
//},constructLi:function(r){
//var len=r.length;
//var _187=[];
//for(var i=0;i<len;i++){
//var data=r[i].tagName;
//_187.push("<li><input name=\"tag\" value=\""+data+"\" type=\"radio\" class=\"layer-choose\" tabindex=\""+(i+1)+"\"/> "+data+"</li>");
//}
//return _187.join("");
//},getSuggestNumAjax:function(){
//var zhan=CURSITE.url;
//var that=this;
//jQuery.ajax({url:"http://zhan.renren.com/suggest/site/suggestNum",dataType:"json",type:"post",data:"uri="+zhan,success:function(r){
//var _188=""+r.num+"浜烘帹鑽�";
//that.suggestNum=r.num;
//jQuery(".numofrecomman").html(_188);
//},error:function(){
//jQuery.messageDialog({message:"鏈嶅姟鍑洪敊浜嗭紝绋嶅悗閲嶈瘯"});
//}});
//},recommandAjax:function(list,add,btn){
//if(btn.data("requesting")==true){
//return;
//}
//btn.data("requesting",true);
//var that=this;
//var _189=add;
//var _18a=list.split("&")[1];
//jQuery.ajax({url:"http://zhan.renren.com/suggest/site",type:"post",dataType:"json",data:list,success:function(r){
//if(r.code==0){
//that.SuccessLayer(_189);
//setTimeout(function(){
//location.href="http://zhan.renren.com/suggest?"+_18a+"#newsite";
//},2000);
//}else{
//jQuery.messageDialog({message:r.msg});
//}
//},complete:function(){
//btn.data("requesting",false);
//}});
//},SuccessLayer:function(_18b){
//var mes=["<div class=\"copy-layer\" id=\"recommend-tag-container\">","<span class=\"copy-layer-close\"><img src=\"http://a.xnimg.cn/smallsite/images/layer-close.png\" alt=\"\" />鍏抽棴</span>","<div class=\"copy-layer-content\">","<h3>鎺ㄨ崘鎴愬姛</h3>","<div class=\"link-layer\">","<label>澶嶅埗灏忕珯閾炬帴锛岄€氳繃QQ鎴栬€呭井鍗氬彂閫佺粰浣犵殑濂藉弸锛�</label>","<div class=\"copy\">缁欏ぇ瀹舵帹鑽愪竴涓緢妫掔殑灏忕珯","<input type=\"text\" tabindex=\"1\" class=\"link-input\"/>","</div>","<a href=\"#nogo\" class=\"copy-input\" id =\"recomBtn\">澶嶅埗</a>","</div>","</div>","</div>"].join("");
//var _18c=jQuery.alertDialog({message:mes,width:534});
//_18c.getHeader().hide();
//_18c.getFooter().hide();
//jQuery(".dialog_content").css("padding","0");
//jQuery(".dtm").parent().css("display","none");
//jQuery(".dbm").parent().css("display","none");
//jQuery(".dialog_body").css("border-radius","5px");
//var _18d=jQuery(".copy-layer-close");
//_18d.bind("click",function(){
//_18c.hide();
//});
//jQuery(".link-input").val(_18b);
//setTimeout(function(){
//var _18e=jQuery("#recomBtn")[0];
//var _18f=jQuery(".copy-layer")[0];
//jQuery.use("zeroclipboard",function(){
//var _190=new ZeroClipboard.Client();
//_190.setHandCursor(true);
//_190.addEventListener("complete",function(_191,text){
//alert("宸茬粡鎴愬姛澶嶅埗鍒版偍鐨勫壀鍒囨澘锛�");
//});
//_190.setText(jQuery(".link-input").val());
//_190.glue(_18e,_18f);
//});
//},100);
//},fillinAddress:function(url){
//var _192=jQuery(".address");
//if(typeof url=="undefined"){
//var _193=CURSITE.url;
//var urla="http://zhan.renren.com/"+_193+"";
//_192.val(urla);
//}else{
//_192.val("http://zhan.renren.com/"+url);
//}
//},checkForm:function(add,_194){
//if(add==""){
//jQuery(".errorMsg").html("璇峰～鍐欒鎺ㄨ崘鐨勫皬绔欏湴鍧€").css("visibility","visible");
//return false;
//}
//if(_194.length==0){
//jQuery(".errorMsg").html("璇烽€夋嫨鍒嗙被").css("visibility","visible");
//return false;
//}
//return true;
//},showLayer:function(li,that){
//var That=this;
//var html=["<div class=\"layer\">","<span class=\"layer-close\"><img src=\"http://a.xnimg.cn/smallsite/images/layer-close.png\" alt=\"\" />鍏抽棴</span>","<form id = \"recom\">","<div class=\"layer-content\">","<h3>鎺ㄨ崘浣犲枩娆㈢殑灏忕珯缁欏ぇ瀹�</h3>","<label>灏忕珯鍦板潃</label>","<input type=\"text\" class=\"address\" name = \"url\" tabindex=\"0\" />","<label>鍒嗙被锛�</label>","<ul id = \"classic\" class=\"clearfix\">","</ul>","<label>鎺ㄨ崘鐞嗙敱锛�</label>","<input type=\"text\" class=\"reason\" name = \"content\" tabindex=\"1\" />","<div class=\"layer-btn clearfix\">","<div class= \"errorMsg\">璇烽€夋嫨瑕佹帹鑽愮殑灏忕珯鍦板潃</div>","<div class=\"notify\"><input type=\"checkbox\" id = \"notifyType\" tabindex=\"\" checked=\"true\" />&nbsp;鎺ㄨ崘缁欏ソ鍙�</div>","<input type = \"hidden\" name=\"isNotify\" value=\"true\" />","<span><a class =\"recommandBtn\" href=\"javascript:;\">鎺ㄨ崘</a></span> ","</div>","</form>"," </div>","</div>"].join("");
//var _195=jQuery.alertDialog({message:html,width:534});
//_195.getHeader().hide();
//_195.getFooter().hide();
//jQuery(".dialog_content").css("padding","0");
//jQuery(".dtm").parent().css("display","none");
//jQuery(".dbm").parent().css("display","none");
//jQuery(".dialog_body").css("border-radius","5px");
//jQuery("#classic").html(li);
//var _196=jQuery(".layer-close");
//_196.bind("click",function(){
//_195.hide();
//});
//var _197=jQuery(".recommandBtn");
//_197.bind("click",function(){
//var _198=jQuery("#notifyType").attr("checked");
//jQuery("input[name=isNotify]").val(_198);
//var list=jQuery("#recom").serialize();
//var addr=jQuery(".address");
//var add=addr.val();
//var _199=jQuery("input[class=layer-choose]:checked");
//if(That.checkForm(add,_199)){
//That.recommandAjax(list,add,jQuery(this));
//}
//});
//var tag=jQuery(that).attr("class");
//if(this.fromArg=="templateSuggest"){
//That.fillinAddress(this.fromUrl);
//}else{
//return false;
//}
//}};
//jQuery(function(){
//var r=new SmallSite.recommand();
//r.Initialization();
//});
//jQuery(function(){
//var $=jQuery;
//var _19a={init:function(){
//this.visitorNum="";
//this.followNum="";
//this.requested=false;
//this.itemname="SmallSiteReport"+CURSITE.url;
//this.dateListener();
//this.hoverListener();
//},getCurrentDate:function(){
//var _19b=new Date();
//var year=_19b.getFullYear();
//var _19c=_19b.getMonth()+1;
//var day=_19b.getDate();
//var date=year+""+_19c+""+day;
//return date;
//},setStorageDate:function(){
//siteStorage.setItem(this.itemname+"SmallSiteReport",this.getCurrentDate());
//},dateListener:function(){
//var that=this;
//var _19d=this.getCurrentDate();
//var _19e=siteStorage.getItem(this.itemname+"SmallSiteReport");
//if(_19e==_19d){
//$(".bar-hovertongji").hide();
//}else{
//this.getNum();
//}
//},getReportData:function(){
//var that=this;
//var zhan=CURSITE.url;
//$.ajax({url:"http://zhan.renren.com/"+zhan+"/report/summaryData",type:"post",dataType:"json",success:function(r){
//that.requested=true;
//that.visitorNum=r.visiteNum;
//that.followNum=r.followNum;
//$("#visit").html(r.visiteNum);
//$("#follow").html(r.followNum);
//}});
//$(".bar-hovertongji").show();
//this.autoHide();
//},getNum:function(){
//var that=this;
//var zhan=CURSITE.url;
//$.ajax({url:"http://zhan.renren.com/"+zhan+"/report/summaryData",type:"post",dataType:"json",success:function(r){
//that.requested=true;
//that.visitorNum=r.visiteNum;
//that.followNum=r.followNum;
//$("#visit").html(r.visiteNum);
//$("#follow").html(r.followNum);
//}});
//$(".bar-hovertongji").show();
//this.autoHide();
//this.setStorageDate();
//},autoHide:function(){
//setTimeout(function(){
//$(".bar-hovertongji").fadeOut(500);
//},5000);
//},hoverListener:function(){
//var that=this;
//$(".tongji").hover(function(){
//if(that.requested==false){
//that.getNum();
//}else{
//$("#visit").html(that.visitorNum);
//$("#follow").html(that.followNum);
//}
//$(".bar-hovertongji").show();
//},function(){
//$(".bar-hovertongji").hide();
//});
//$(".bar-hovertongji").hover(function(){
//$(this).show();
//},function(){
//$(this).hide();
//});
//}};
//if(CURSITE.auth){
//_19a.init();
//}
//});
//jQuery(function(){
//var $=jQuery;
//var eBar=$("#publishbar");
//var _19f=970;
//var _1a0=$("#publisher-box");
//if($.browser.msie&&$.browser.version=="6.0"){
//return;
//}
//detect=function(){
//var _1a1=$(window).width();
//var _1a2=eBar.css("position");
//var _1a3="#publisherNav a.act";
//var _1a4="#publisher-selector-box .publisher-selector dd.active";
//var _1a5=$(_1a3).size()||$(_1a4).size();
//if(_1a5){
//return;
//}
//if(_1a1<_19f&&_1a2=="fixed"){
//eBar.css({"position":"absolute","top":0,"left":0,"_position":"relative"});
//}else{
//if(_1a1>=_19f&&_1a2=="absolute"){
//eBar.css({"position":"fixed","top":0,"left":0,"_position":"relative"});
//}
//}
//};
//detect();
//$(window).resize(detect);
//});
//jQuery(function(){
//var $=jQuery;
//var eTip=$("#publishbar .station-hot a");
//var x=0;
//var num=4;
//if(eTip.size()===0){
//return;
//}
//(function(){
//if(eTip.attr("data-light")=="t"){
//eTip.css("color","#fff");
//eTip.attr("data-light","f");
//}else{
//eTip.css("color","#565656");
//eTip.attr("data-light","t");
//}
//x+=1;
//if(x>=num){
//eTip.removeAttr("style");
//return;
//}
//setTimeout(arguments.callee,600);
//})();
//});
//SmallSite.app.BlackBar=function(){
//};
//SmallSite.app.BlackBar.prototype=(function($){
//var eBar={};
//var _1a6=1;
//var _1a7="";
//var _1a8=false;
//var init=function(_1a9){
//_1a6=_1a9||1;
//_1a8=_1a8();
//eBar=$("#rogue-suggest");
//if($.browser.msie&&$.browser.version==="6.0"){
//return;
//}
//if(eBar.size()===0){
//return;
//}
//if(CURSITE.isBlackSite==false&&siteStorage.getItem("blackHasAppeared")==new Date().getDate()){
//return;
//}
//if(!_1a8){
//eBar.addClass("no-ani");
//}
//_1aa();
//};
//var _1ab=function(type){
//if(siteStorage.getItem("blackbar")){
//_1a6=2;
//}
//var t=type||"show";
//var c="ani"+_1a6+"-"+t;
//if(t!="show"){
//eBar.removeClass("ani2-show");
//this.timeForAnimate=true;
//setTimeout(function(){
//siteStorage.setItem("blackbar",true);
//},3800);
//}else{
//if(this.timeForAnimate){
//if(_1a6==1){
//setTimeout(function(){
//eBar.removeClass("ani1-show").addClass("ani2-show");
//},3800);
//}else{
//eBar.addClass("ani2-show");
//}
//this.timeForAnimate=null;
//}
//}
//if(!_1a8){
//eBar[type]();
//return;
//}
//if(_1a7===c){
//return;
//}
//if(_1a7!==""){
//eBar.removeClass(_1a7);
//}
//eBar.addClass(c);
//_1a7=c;
//if(CURSITE.isBlackSite==false){
//siteStorage.setItem("blackHasAppeared",new Date().getDate());
//}
//};
//var _1aa=function(){
//var _1ac=$(window).height(),_1ad;
//this.timeForAnimate=true;
//if(CURSITE.isTerm&&$("#publisher-box").size()==0){
//$(window).scroll(function(){
//var _1ae=$(document).height()-$(window).height();
//if($(this).scrollTop()==_1ae){
//_1ab("show");
//if($("#tagcard-terminal").size()==0&&$("#sprout-terminal").size()==0&&$("#chu-terminal").size()==0){
//$("body").css("marginBottom","190px");
//}
//}
//});
//return;
//}
//if(CURSITE.isBlackSite){
//_1ad=_1ac*4;
//}else{
//_1ad=_1ac*10;
//}
//$(window).scroll(function(){
//if($(this).scrollTop()>_1ad){
//_1ab("show");
//}else{
//if(_1a7!==""||!_1a8){
//_1ab("hide");
//}
//}
//});
//};
//var _1af=function(){
//$.get("http://test.renren.com/zhan/black-bar.html",function(r){
//eBar=$(r);
//$("body").append(eBar);
//if(!_1a8){
//eBar.addClass("no-ani");
//}
//});
//};
//var _1a8=function(){
//var b=$.browser;
//var s=document.documentElement.style;
//if("animation" in s){
//return true;
//}
//if(b.mozilla&&"MozAnimation" in s){
//return true;
//}
//if(b.webkit&&"webkitAnimation" in s){
//return true;
//}
//if(b.opera&&"OAnimation" in s){
//return true;
//}
//return false;
//};
//return {init:init};
//})(jQuery);
//jQuery(function(){
//var _1b0=new SmallSite.app.BlackBar();
//_1b0.init(1);
//});
//jQuery(function(){
//var _1b1=function(){
//var _1b2=$("#rogue-suggest .select-list li");
//var _1b3=$("#rogue-suggest .close-bar");
//var _1b4=$("#rogue-suggest .select-list").find("li");
//var _1b5=function(dom,_1b6,data,_1b7){
//var html="";
//for(var i=data.length-1;i>=0;i--){
//html+="<li class=\"name-card\" data-uri=\"http://zhan.renren.com/"+data[i].url+"\">    \t\t\t\t\t\t<a target=\"_blank\" href=\"http://zhan.renren.com/"+data[i].url+"?from=blackbar\">\t\t\t\t\t\t\t\t<img src=\""+data[i].tinyHeadSource+"\">\t\t\t\t\t\t\t\t<span class=\"site_name\">"+data[i].name+"</span>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t</li>";
//}
//$(dom).html(html);
//$("#rogue-suggest").data(_1b6,$(dom).html());
//setTimeout(function(){
//if(_1b7){
//_1b7();
//}
//},0);
//};
//var _1b8=function(_1b9,_1ba){
//var _1bb=_1b9.replace(/b[0-9]+/g,"");
//var num=$("#rogue-suggest").data("num");
//var dom=$("ul.black-site[data-array="+_1b9+"]");
//var html="";
//var dom=$("#rogue-suggest").find("ul.black-site");
//var _1bc=$.trim(dom.html());
//if(num){
//$("#rogue-suggest").data("num",num+1);
//}else{
//$("#rogue-suggest").data("num",1);
//}
//$.ajax({url:"http://zhan.renren.com/waqq/getTopSites?tagId="+_1bb,type:"GET",dataType:"json",success:function(r){
//setTimeout(function(){
//if(_1ba){
//_1b5(dom,_1b9,r,_1ba);
//}else{
//_1b5(dom,_1b9,r);
//}
//},50);
//},complete:function(){
//var num=$("#rogue-suggest").data("num");
//$("#rogue-suggest").data("num",num-1);
//}});
//};
//var _1bd=function(){
//var _1be=$(".layout-wrap ul");
//for(var i=_1be.length-1;i>=0;i--){
//if($.trim($(_1be[i]).html())!=""){
//return true;
//}
//}
//return false;
//};
//_1b3.bind("click",function(){
//jQuery(this).parents("#rogue-suggest").remove();
//jQuery(".gotop").css("bottom","30px");
//if(!CURSITE.isBlackSite){
//var _1bf=new Image();
//_1bf.src="http://zhan.renren.com/cache/closeBar";
//}
//});
//ajaxDomInfo=function(_1c0,_1c1){
//if($("#rogue-suggest").data("num")&&$("#rogue-suggest").data("num")>0){
//return;
//}
//setTimeout(function(){
//_1b8(_1c0,_1c1);
//},50);
//};
//_1b2.bind("click",function(){
//var data=$(this).attr("data-array"),_1c2=$(this).html(),_1c3=$("#rogue-suggest .select-list").find(".selected"),left=$(this).offset().left,_1c4=$(this).width()/2,_1c5=$(".arrow_area .arrow"),dom=$("#rogue-suggest").find("ul.black-site"),_1c6=$.trim(dom.html()),eBar=$("#rogue-suggest"),that=this;
//if($(this).hasClass("more_site")){
//return;
//}
//dom.removeClass("bar-show").addClass("bar-hidden");
//var _1c7=function(){
//var dom=$("#rogue-suggest").find("ul.black-site");
//_1c5.css("marginLeft",left+_1c4-10);
//_1c3.removeClass("selected");
//$(that).addClass("selected");
//setTimeout(function(){
//dom.removeClass("bar-hidden").addClass("bar-show");
//},250);
//$(".black-more").attr("src","/suggest?tag="+_1c2+"&from=blackbar");
//};
//if($("#rogue-suggest").data(data)){
//setTimeout(function(){
//dom.html($("#rogue-suggest").data(data));
//},350);
//setTimeout(function(){
//_1c7();
//},100);
//}else{
//ajaxDomInfo(data,_1c7);
//}
//});
//};
//_1b1();
//});
//SmallSite.app.nameCard=function(){
//this.card=document.createElement("div");
//this.times=500;
//jQuery(this.card).addClass("smallsite-card");
//this.init();
//};
//SmallSite.app.nameCard.prototype={nameCards:{},init:function(){
//this._showCard();
//},clearCard:function(){
//var eDom=jQuery("body").find(".smallsite-card");
//eDom.removeClass("namecardshow");
//eDom.empty().remove();
//},_showNameCard:function(card,_1c8,dom,e){
//var card=jQuery(card);
//vTop=_1c8.top,vLeft=_1c8.left;
//height=115,winWidth=jQuery(window).width(),cardWidth=233,domWidth=jQuery(dom).width();
//if(vLeft+cardWidth>winWidth){
//vLeft=vLeft-cardWidth+domWidth;
//card.addClass("right");
//}else{
//if(card.hasClass("right")){
//card.removeClass("right");
//}
//}
//card.addClass("namecardshow");
//jQuery(card).css({top:vTop-height,left:vLeft});
//this.readyTime=setTimeout(function(){
//if(jQuery(".smallsite-card").length>0){
//card.show();
//}else{
//if(jQuery(e.target).parents("#rogue-suggest").size()>0){
//var _1c9=jQuery("#rogue-suggest"),tops=vTop-_1c9.offset().top;
//jQuery(card).css({top:tops-height,left:vLeft});
//jQuery("#rogue-suggest").append(card);
//}else{
//jQuery("body").append(card);
//}
//}
//},this.times);
//},_showCard:function(){
//var _1ca;
//var _1cb;
//var that=this;
//var sc=jQuery("body").find(".smallsite-card");
//var _1cc="ready";
//var _1cd=this.clearCard;
//_1cd();
//jQuery(".name-card").die().live({mouseenter:function(e){
//var vTop=jQuery(this).offset().top,_1ce=jQuery(this).offset().left,_1cf=jQuery(this).attr("data-uri"),_1d0=_1cf.replace("http://zhan.renren.com/",""),_1cb=that.jsonUrla=_1d0;
//if(_1ca!=undefined){
//clearTimeout(_1ca);
//}
//_1cd();
//isTouch=setTimeout(function(){
//if(_1cc=="ready"){
//_1cc="doing";
//_1cd();
//if(that.nameCards[_1d0]==undefined){
//_1cd();
//jQuery.getJSON(_1cf+"/card",function(data){
//if(data.code==0){
//var _1d1="<a target=\"_blank\" href=\"http://zhan.renren.com/tag?value="+data.tags[0].value+"\">";
//if(!data.isOwner){
//var _1d2=(data.isFollowed==false)?"<a href=\"javascript:;\" class=\"card-btn nc-nofollow\">鍏虫敞</a>":"<a href=\"javascript:;\" class=\"card-btna nc-nofollow\">鍙栨秷鍏虫敞</a>";
//}else{
//var _1d2="";
//}
//var _1d3="<div class='card'><div class='card-main'><a class='user-pic' href='http://zhan.renren.com/"+data.siteUri+"'><img src='"+data.head+"'alt='"+data.title+"' /></a><div class='user-content'><h3 class='card-tit'><a href='http://zhan.renren.com/"+data.siteUri+"'>"+data.title+"</a></h3><p>"+data.desc+"</p></div></div><div class='card-footer'><div class='card-tag'>"+_1d1+"#"+SmallSite.util.substr(data.tags[0].value,12,true)+"</a></div>"+_1d2+"<span class='card-num'>"+data.followerCount+"浜�</span></div></div><div class='card-arrow'><img src='http://a.xnimg.cn/smallsite/images/card-arrow.png' alt='' /></div>";
//jQuery(that.card).html(_1d3);
//that.nameCards[data.siteUri]=_1d3;
//_1cc="ready";
//data=null;
//}else{
//var _1d4="";
//_1cc="ready";
//that.nameCards[_1d0]=_1d4;
//}
//});
//}else{
//if(_1ca!=undefined){
//clearTimeout(_1ca);
//}
//jQuery(that.card).empty();
//jQuery(that.card).html(that.nameCards[_1d0]);
//_1cc="ready";
//}
//}
//},that.times);
//var _1d5={top:vTop,left:_1ce};
//that._showNameCard(that.card,_1d5,this,e);
//},mouseleave:function(){
//if(isTouch!=undefined){
//clearTimeout(isTouch);
//}
//clearTimeout(that.readyTime);
//_1ca=setTimeout(function(){
//_1cd();
//},that.times);
//}});
//sc.die().live({mouseenter:function(){
//clearTimeout(_1ca);
//},mouseleave:function(){
//_1ca=setTimeout(function(){
//_1cd();
//},that.times);
//}});
//jQuery(".nc-nofollow").live("click",function(){
//var That=this;
//var CF=function(fna,mod){
//jQuery(this).removeClass("nc-nofollow").html("...");
//jQuery.post("http://zhan.renren.com/"+that.jsonUrla+"/"+arguments[0]+"?from=namecard",function(data){
//var data=JSON.parse(data);
//if(data.code==0){
//if(mod=="fl"){
//jQuery(That).html("鍏虫敞").removeClass("card-btna").addClass("card-btn");
//}else{
//jQuery(That).html("鍙栨秷鍏虫敞").removeClass("card-btn").addClass("card-btna");
//if(SmallSite.app&&SmallSite.app.followAboutPop){
//_1ca=setTimeout(function(){
//_1cd();
//},0);
//new SmallSite.app.followAboutPop("namecardAbout",that.jsonUrla);
//}
//}
//that.nameCards[that.jsonUrla]=jQuery(".smallsite-card").html();
//jQuery(That).addClass("nc-nofollow");
//}else{
//jQuery.messageDialog({message:data.msg});
//}
//data=null;
//});
//};
//if(jQuery(this).hasClass("card-btna")){
//CF("unfollow","fl");
//}else{
//CF("follow","nfl");
//}
//});
//}};
//jQuery(document).ready(function(){
//if(XZ.isLogin){
//gg=new SmallSite.app.nameCard();
//}
//});
//SmallSite.app=SmallSite.app||{};
//SmallSite.app.help=function(){
//this.init();
//};
//SmallSite.app.help.prototype={init:function(){
//this.eBtn=jQuery(".help-enter .enter");
//if(this.eBtn.size()==0){
//if(jQuery("#home-guide1").size()==0){
//this.createBtn();
//}
//}
//this.bindEvent();
//},bindEvent:function(){
//var that=this;
//this.fuckIE6();
//},createBtn:function(){
//if(this.eBtn.size()>0){
//return;
//}
//this.eBtn=jQuery(["<div class=\"help-enter\">","<a href=\"http://zhan.renren.com/help\"  class=\"enter\" title=\"甯姪\">甯姪</a>","</div>"].join(""));
//jQuery(document.body).append(this.eBtn);
//},fuckIE6:function(){
//var that=this;
//if(jQuery.browser.msie&&jQuery.browser.version==6){
//jQuery(window).scroll(function(){
//that.eBtn.show();
//if(jQuery.browser.msie&&jQuery.browser.version==6){
//setTimeout(function(){
//that.eBtn.css("top",jQuery(window).scrollTop()+screen.height-400);
//},30);
//}
//});
//}
//}};
//jQuery(function(){
//new SmallSite.app.help();
//});
//SmallSite.app=SmallSite.app||{};
//SmallSite.app.followAboutPop=function(from,_1d6,_1d7){
//this.from=from;
//this.siteUrl=_1d6;
//this.count=2;
//if(_1d7){
//this.count=_1d7;
//}
//this.init();
//};
//SmallSite.app.followAboutPop.prototype={init:function(){
//var that=this;
//this.getSites(function(r){
//that.render(r);
//});
//},bindEvents:function(){
//var that=this;
//var body=that.dia.getBody();
//body.find(".followabout").mouseenter(function(){
//if(that.timer){
//clearTimeout(that.timer);
//}
//});
//body.find(".site-btn a").bind("click",function(){
//var _1d8=jQuery(this).attr("data-uri");
//if(typeof _1d8==="undefined"){
//_1d8=CURSITE.url;
//}
//that.followAction(jQuery(this),_1d8);
//});
//},render:function(r){
//var that=this;
//that.dia=jQuery.popDialog({width:572,noPadding:true,modal:false,message:that.getHtml(r)});
//var body=that.dia.getBody();
//this.siteBox=body.find(".site-list");
//this.bindEvents();
//},getHtml:function(data){
//return ["<div class=\"followabout followsitepop\"><form>","<div class=\"layer-content\">","<div class=\"success-tip\"><span>鍏虫敞鎴愬姛</span></div>","<div class=\"about-sites\"><h4>鐚滀綘杩樺枩娆㈣繖浜涘皬绔欙細<a href=\"http://zhan.renren.com/suggest?from=followsite\"      class=\"more-sites\" target=\"_blank\">鏌ョ湅鏇村</a></h4><ul  class=\"site-list\">"+this.getListHtml(data)+"</ul></div>","</div></form>","</div>"].join("");
//},getListHtml:function(r){
//var html="";
//var len=r.length;
//if(len>this.count){
//len=this.count;
//}
//for(var i=0;i<len;i++){
//html+=this.getOneHtml(r[i],i==len-1);
//}
//return html;
//},getOneHtml:function(site,_1d9){
//return ["<li "+(_1d9?"class=\"last\"":"")+">","<div class=\"site-pic-box\"><a class=\"site-pic\" href=\"http://zhan.renren.com/"+site.url+"?from=followsite\" title=\""+site.name+"\" target=\"_blank\"><img alt=\""+site.name+"\" src=\""+site.tinyHeadSource+"\" onload=\"SmallSite.autoResizeImg(this, 100, 100);\"></a>","<p class=\"site-btn\"><a  data-uri=\""+site.url+"\" href=\"javascript:;\">鍏虫敞</a></p></div><div class=\"info\"><h4 class=\"title\"><a href=\"http://zhan.renren.com/"+site.url+"?from=followsite\" title=\""+site.name+"\" target=\"_blank\">"+site.name+"</a></h4><p class=\"descrip\"><a href=\"http://zhan.renren.com/"+site.url+"?from=followsite\" target=\"_blank\">"+site.description+"</a></p></div>","</li>"].join("");
//},followAction:function(obj,_1da){
//if(obj.data("requesting")==true){
//return;
//}
//obj.data("requesting",true);
//jQuery.ajax({url:"http://zhan.renren.com/"+_1da+"/follow?"+"from="+this.from,type:"post",dataType:"json",success:function(_1db){
//if(_1db.code==0){
//obj.parent().html("宸插叧娉�");
//}else{
//alert("鏈嶅姟鍣ㄧ箒蹇欙紝璇风◢鍚庡啀璇曪紒");
//}
//},complete:function(){
//obj.data("requesting",false);
//}});
//},getSites:function(cb){
//var _1dc="";
//if(this.siteUrl){
//_1dc="&siteUrl="+this.siteUrl;
//}
//jQuery.ajax({url:"http://zhan.renren.com/zhan/suggest/get?count="+this.count+_1dc,type:"get",dataType:"json",success:function(_1dd){
//cb(_1dd);
//}});
//}};
//SmallSite.app.tagAboutPop=function(from,_1de,tag){
//this.from=from;
//this.successTip="璁㈤槄鎴愬姛";
//this.tag=tag;
//if(_1de){
//this.successTip=_1de;
//}
//this.init();
//};
//SmallSite.app.tagAboutPop.prototype={init:function(){
//var that=this;
//this.getSites(function(r){
//that.render(r);
//});
//},bindEvents:function(){
//var that=this;
//var body=that.dia.getBody();
//body.find(".layer-close").click(function(){
//that.dia.hide();
//});
//body.find(".followabout").mouseenter(function(){
//if(that.timer){
//clearTimeout(that.timer);
//}
//});
//body.find(".site-btn a").bind("click",function(){
//var _1df=jQuery(this).attr("data-uri");
//if(typeof _1df==="undefined"){
//_1df=CURSITE.url;
//}
//that.followAction(jQuery(this),_1df);
//});
//},render:function(r){
//var that=this;
//that.dia=jQuery.popDialog({width:571,noPadding:true,modal:false,message:that.getHtml(r)});
//var body=that.dia.getBody();
//this.siteBox=body.find(".site-list");
//this.bindEvents();
//},getHtml:function(data){
//return ["<div class=\"followabout\"><form>","<div class=\"layer-content\">","<div class=\"success-tip\"><span>"+this.successTip+"</span></div>","<div class=\"about-sites\"><h4>"+("<span class=\"tag-title\">鍏虫敞 <a href=\"http://zhan.renren.com/tag?value="+this.tag+"\" target=\"_blank\">"+this.tag+"</a> 鐨勯《灏栧皬绔�</span>")+"<a href=\"http://zhan.renren.com/suggest?from=followabout\"      class=\"more-sites\" target=\"_blank\">鏌ョ湅鏇村</a></h4><ul  class=\"site-list\">"+this.getListHtml(data)+"</ul></div>","</div></form>","</div>"].join("");
//},getListHtml:function(r){
//var html="";
//for(var i=0;i<r.length;i++){
//html+=this.getOneHtml(r[i]);
//}
//return html;
//},getOneHtml:function(site){
//return ["<li>","<div class=\"site-pic-box\"><a class=\"site-pic\" href=\"http://zhan.renren.com/"+site.url+"?from=followabout\" title=\""+site.name+"\" target=\"_blank\"><img alt=\""+site.name+"\" src=\""+site.tinyHeadSource+"\"></a>","<p class=\"site-btn\"><a  data-uri=\""+site.url+"\" href=\"javascript:;\">鍏虫敞</a></p></div><p class=\"title\"><a href=\"http://zhan.renren.com/"+site.url+"?from=followabout\" title=\""+site.name+"\" target=\"_blank\">"+site.name+"</a></p>","</li>"].join("");
//},followAction:function(obj,_1e0){
//if(obj.data("requesting")==true){
//return;
//}
//obj.data("requesting",true);
//jQuery.ajax({url:"http://zhan.renren.com/"+_1e0+"/follow?"+"from="+this.from,type:"post",dataType:"json",success:function(_1e1){
//if(_1e1.code==0){
//obj.parent().html("宸插叧娉�");
//}else{
//alert("鏈嶅姟鍣ㄧ箒蹇欙紝璇风◢鍚庡啀璇曪紒");
//}
//},complete:function(){
//obj.data("requesting",false);
//}});
//},getSites:function(cb){
//jQuery.ajax({url:"http://zhan.renren.com/zhan/suggest/getByTag?count=5&tagValue="+encodeURIComponent(this.tag),type:"get",dataType:"json",success:function(_1e2){
//if(_1e2.code==0){
//if(_1e2.sites.length==0){
//jQuery.messageDialog({width:200,message:"<div class=\"dia-message-box\"><span>璁㈤槄鎴愬姛 锛�</span></div>"});
//return;
//}else{
//cb(_1e2.sites);
//}
//}
//}});
//}};
//SmallSite.app.shareAboutPop=function(from){
//this.from=from;
//this.init();
//};
//SmallSite.app.shareAboutPop.prototype={init:function(){
//var that=this;
//this.getSites(function(r){
//that.render(r);
//});
//},render:function(r){
//var that=this;
//that.dia=jQuery.messageDialog({width:266,noPadding:true,modal:false,message:that.getHtml(r),time:4000});
//},getHtml:function(data){
//return ["<div class=\"share-dialog-guide\">","<div class=\"layer-content\">","<div class=\"success-tip\"><span>鍒嗕韩鎴愬姛锛�</span></div>","<div class=\"about-sites\"><h4>鐚滀綘涔熶細鍠滄<a href=\"http://zhan.renren.com/suggest?from=followabout\"      class=\"more-sites\" target=\"_blank\">鏌ョ湅鏇村</a></h4><ul  class=\"site-list\">"+this.getListHtml(data)+"</ul></div>","</div>","</div>"].join("");
//},getListHtml:function(r){
//var html="";
//for(var i=0;i<r.length;i++){
//html+=this.getOneHtml(r[i]);
//}
//return html;
//},getOneHtml:function(site){
//return ["<li>","<div class=\"site-pic-box\"><a class=\"site-pic\" href=\"http://zhan.renren.com/"+site.url+"?from=followabout\" title=\""+site.name+"\" target=\"_blank\"><img alt=\""+site.name+"\" src=\""+site.tinyHeadSource+"\"></a>","</li>"].join("");
//},getSites:function(cb){
//jQuery.ajax({url:"http://zhan.renren.com/zhan/suggest/get?count=4",type:"get",dataType:"json",success:function(_1e3){
//cb(_1e3);
//}});
//}};
//var tagCard=function(){
//this.card=document.createElement("div");
//this.times=500;
//jQuery(this.card).addClass("smallsite-card");
//this.init();
//};
//tagCard.prototype={nameCards:{},init:function(){
//this._showCard();
//},clearCard:function(){
//var eDom=jQuery("body").find(".smallsite-card");
//eDom.empty().remove();
//},_showCard:function(){
//var _1e4;
//var _1e5;
//var _1e6;
//var that=this;
//var sc=jQuery(".smallsite-card");
//var _1e7="ready";
//var _1e8=this.clearCard;
//_1e8();
//jQuery(".tag-card").die().live({mouseenter:function(){
//var vTop=jQuery(this).offset().top,_1e9=jQuery(this).offset().left,_1ea=jQuery(this).attr("data-title");
//_1e6=_1ea;
//if(_1e4!=undefined){
//clearTimeout(_1e4);
//}
//_1e8();
//isTouch=setTimeout(function(){
//if(_1e7=="ready"){
//_1e7="doing";
//_1e8();
//if(that.nameCards[_1ea]==undefined){
//_1e8();
//jQuery.getJSON("http://zhan.renren.com/tag/tagCard?tagValue="+encodeURIComponent(_1ea),function(data){
//if(data.code==1){
//if(!data.isOwner){
//var _1eb=(data.isFollowed==false)?"<a href=\"javascript:;\" class=\"card-btn tag-nofollow\">璁㈤槄璇濋</a>":"<a href=\"javascript:;\" class=\"card-btna tag-nofollow\">鍙栨秷璁㈤槄</a>";
//}else{
//var _1eb="";
//}
//var _1ec="<div class='card'><div class='card-main'><a class='user-pic' href='http://zhan.renren.com/tag?value="+data.tagValue+"'><img src='"+data.head+"'alt='"+data.title+"' /></a><div class='user-content'><h3 class='card-tit'><a href='http://zhan.renren.com/tag?value="+data.tagValue+"'>"+data.title+"</a></h3><p>"+data.desc+"</p></div></div><div class='card-footer'>"+_1eb+"<span class='card-num'>"+data.followerCount+"浜�</span></div></div><div class='card-arrow'><img src='http://a.xnimg.cn/smallsite/images/card-arrow.png' alt='' /></div>";
//jQuery(that.card).html(_1ec);
//that.nameCards[data.tagValue]=_1ec;
//_1e7="ready";
//data=null;
//}else{
//var _1ed="";
//_1e7="ready";
//that.nameCards[_1ea]=_1ed;
//}
//});
//}else{
//if(_1e4!=undefined){
//clearTimeout(_1e4);
//}
//jQuery(that.card).empty();
//jQuery(that.card).html(that.nameCards[_1ea]);
//_1e7="ready";
//}
//}
//},that.times);
//jQuery(that.card).css({top:vTop-115,left:_1e9});
//_1e5=setTimeout(function(){
//if(jQuery(".smallsite-card").length>0){
//jQuery(that.card).show();
//}else{
//jQuery("body").append(that.card);
//}
//},that.times);
//},mouseleave:function(){
//if(isTouch!=undefined){
//clearTimeout(isTouch);
//}
//clearTimeout(_1e5);
//_1e4=setTimeout(function(){
//_1e8();
//},that.times);
//}});
//sc.die().live({mouseenter:function(){
//clearTimeout(_1e4);
//},mouseleave:function(){
//_1e4=setTimeout(function(){
//_1e8();
//},that.times);
//}});
//jQuery("body").delegate(".tag-nofollow","click",function(){
//var That=this;
//var CF=function(fna,mod){
//jQuery(this).removeClass("tag-nofollow").html("...");
//jQuery.post("http://zhan.renren.com/tag/"+encodeURIComponent(_1e6)+"/"+arguments[0]+"?from=namecard",function(data){
//var data=JSON.parse(data);
//if(data.code==0){
//if(mod=="fl"){
//jQuery(That).html("璁㈤槄璇濋").removeClass("card-btna").addClass("card-btn");
//}else{
//jQuery(That).html("鍙栨秷璁㈤槄").removeClass("card-btn").addClass("card-btna");
//if(SmallSite.app&&SmallSite.app.tagAboutPop){
//_1e4=setTimeout(function(){
//_1e8();
//},0);
//new SmallSite.app.tagAboutPop("tagfollow","璁㈤槄鎴愬姛",_1e6);
//}
//}
//that.nameCards[_1e6]=jQuery(".smallsite-card").html();
//jQuery(That).addClass("tag-nofollow");
//}else{
//jQuery.messageDialog({message:data.msg});
//}
//data=null;
//});
//};
//if(jQuery(this).hasClass("card-btna")){
//CF("unfollow","fl");
//}else{
//CF("follow","nfl");
//}
//});
//}};
//jQuery(function(){
//if(XZ.isLogin){
//new tagCard();
//}
//});
//SmallSite.app=SmallSite.app||{};
//SmallSite.app.feedPageScroll=function(){
//this.init();
//};
//SmallSite.app.feedPageScroll.prototype={init:function(){
//this.isIE6=jQuery.browser.msie&&jQuery.browser.version==6;
//this.time=1000;
//this.step=200;
//this.wrap=jQuery(document.body);
//this.pageBox=jQuery(".feed-scroll-page");
//this.preBtn=jQuery(".feed-pre-btn");
//this.nextBtn=jQuery(".feed-next-btn");
//if(this.pageBox.size()==0){
//this.createPageBox();
//}
//if(jQuery("#postList").length>0){
//this.feedWrap="#postList";
//this.isUseFeedScroll=true;
//this.distance=40;
//}else{
//if(jQuery("#feed-container").length>0){
//this.feedWrap="#feed-container";
//this.isUseFeedScroll=true;
//this.scrollFoldH=170;
//this.headerMinus=20;
//this.barHeight=70;
//this.feedMarginTop=20;
//this.minheaderH=5;
//this.distance=this.barHeight+this.feedMarginTop+this.minheaderH-this.headerMinus;
//if(!this.isIE6){
//this.headerH=jQuery(".sub-header").height();
//}
//}else{
//this.isUseFeedScroll=false;
//}
//}
//if(this.isIE6){
//this.distance=0;
//}
//if(this.isUseFeedScroll){
//this.bindEvent();
//}
//},bindEvent:function(){
//var that=this;
//jQuery(window).scroll(function(){
//if(that.isIE6){
//setTimeout(function(){
//that.fuckIE6();
//},30);
//}
//that.toogle(that.getStatus());
//});
//this.preBtn.click(function(e){
//e.preventDefault();
//that.preAction();
//});
//this.nextBtn.click(function(e){
//e.preventDefault();
//that.nextAction();
//});
//if(this.isUseFeedScroll){
//jQuery(document).keyup(function(e){
//var _1ee=e.target.tagName.toLowerCase();
//if(_1ee=="input"||_1ee=="textarea"){
//e.stopPropagation();
//return;
//}
//if(e.keyCode==75){
//that.preAction();
//}else{
//if(e.keyCode==74){
//that.nextAction();
//}
//}
//});
//}
//},getStatus:function(){
//var _1ef=0;
//var _1f0=jQuery.scrollAt(this.feedWrap+">article",this.step);
//if(_1f0[0]=="top"||jQuery(_1f0[0]).is(this.feedWrap+">article:first-child")){
//_1ef=0;
//}else{
//if(_1f0[0]=="bottom"||jQuery(_1f0[0]).is(this.feedWrap+">article:last-child")){
//_1ef=1;
//if(this.feedWrap=="#postList"){
//_1ef=10;
//}
//}else{
//_1ef=2;
//}
//}
//return _1ef;
//},toogle:function(_1f1){
//if(_1f1==0){
//this.preBtn.css("visibility","hidden");
//this.nextBtn.css("visibility","visible");
//}else{
//if(_1f1==1){
//this.preBtn.css("visibility","visible");
//this.nextBtn.css("visibility","visible");
//}else{
//if(_1f1==10){
//this.preBtn.css("visibility","visible");
//this.nextBtn.css("visibility","hidden");
//}else{
//this.preBtn.css("visibility","visible");
//this.nextBtn.css("visibility","visible");
//}
//}
//}
//},createPageBox:function(){
//if(this.pageBox.size()>0){
//return;
//}
//this.pageBox=jQuery("<div>  </div>");
//this.wrap.append(this.pageBox);
//this.pageBox=jQuery(".feed-scroll-page");
//this.preBtn=jQuery(".feed-pre-btn");
//this.nextBtn=jQuery(".feed-next-btn");
//},fuckIE6:function(){
//this.pageBox.css("top",jQuery(window).scrollTop()+screen.height-662);
//if(jQuery("#rogue-suggest").length!==0){
//jQuery("#rogue-suggest").css("top",jQuery(window).scrollTop()+screen.height-662+81).show();
//this.pageBox.css("top",jQuery(window).scrollTop()+screen.height-642);
//}
//},preAction:function(){
//var _1f2=jQuery.scrollAt(this.feedWrap+">article",this.step);
//var top=0;
//if(_1f2.length==0){
//return;
//}
//if(_1f2[0]=="top"){
//this.toogle(1);
//}else{
//if(_1f2[0]=="bottom"){
//jQuery("html, body").animate({scrollTop:jQuery(this.feedWrap+">article:last").offset().top-this.distance},this.time);
//}else{
//if(jQuery(_1f2[0]).is(this.feedWrap+">article:first-child")){
//return;
//}
//var pre=jQuery(_1f2[0]).prevAll(":first");
//if(pre.length>0){
//top=pre.offset().top-this.distance;
//}else{
//top=0;
//}
//if(!this.isIE6&&this.feedWrap=="#feed-container"&&top<this.scrollFoldH){
//top=top-this.headerH+this.minheaderH;
//top=top-this.headerMinus;
//}
//jQuery("html, body").animate({scrollTop:top},this.time);
//}
//}
//},nextAction:function(){
//var _1f3=jQuery.scrollAt(this.feedWrap+">article",this.step);
//var feed=_1f3[0];
//if(_1f3.length==0){
//return;
//}
//if(feed=="bottom"){
//this.toogle(0);
//}else{
//if(feed=="top"){
//feed=jQuery(this.feedWrap+">article:first");
//var top=feed.offset().top;
//jQuery("html, body").animate({scrollTop:top-this.distance},this.time);
//}else{
//if(feed.nextAll(":first").length==0){
//return;
//}
//var top=jQuery(_1f3[0]).nextAll(":first").offset().top-this.distance;
//if(!this.isIE6&&this.feedWrap=="#feed-container"&&top<this.scrollFoldH){
//top=top-this.headerH+this.minheaderH;
//}
//jQuery("html, body").animate({scrollTop:top},this.time);
//}
//}
//}};
//jQuery(function(){
//if(CURSITE.isTerm==false||typeof CURSITE.isTerm=="undefined"){
//if(CURSITE.location!=="friends"){
//var _1f4=new SmallSite.app.feedPageScroll();
//}
//}
//});
//function LoadADScript(url,_1f5,_1f6){
//this.dw=document.write;
//this.url=url;
//this.containerObj=(typeof _1f5=="string"?document.getElementById(_1f5):_1f5);
//this.callback=_1f6||function(){
//};
//};
//LoadADScript.prototype={startLoad:function(){
//var _1f7=document.createElement("script"),_1f8=this;
//if(_1f7.readyState){
//_1f7.onreadystatechange=function(){
//if(_1f7.readyState=="loaded"||_1f7.readyState=="complete"){
//_1f7.onreadystatechange=null;
//_1f8.finished();
//}
//};
//}else{
//_1f7.onload=function(){
//_1f8.finished();
//};
//}
//document.write=function(ad){
//var html=_1f8.containerObj.innerHTML;
//_1f8.containerObj.innerHTML=html+ad;
//};
//_1f7.src=_1f8.url;
//_1f7.type="text/javascript";
//document.getElementsByTagName("head")[0].appendChild(_1f7);
//},finished:function(){
//document.write=this.dw;
//this.callback.apply();
//}};
//jQuery(function(){
//var href=window.location.href;
//var _1f9=null;
//var _1fa=function(){
//var url="http://ebp.renren.com/ebpn/show?t="+new Date().getTime()+"&r=http://static.jebe.renren.com/u/100000090001";
//jQuery.getScript(url,function(){
//function _1fb(){
//jQuery(".ad-xiaozhan-hide").hide();
//jQuery(".ad-xiaozhan").fadeIn();
//};
//function _1fc(){
//jQuery(".ad-xiaozhan").hide();
//jQuery(".ad-xiaozhan-hide").fadeIn();
//};
//var divs=new Array();
//for(var i=0;i<jebe_json.list.length;i+=1){
//if(jebe_json.list[i].ads.length>0){
//var ad=jebe_json.list[i].ads[0].ad_param;
//var _1fd=eval("("+jebe_json.list[i].ads[0].widget+")");
//var div=document.createElement("div");
//div.setAttribute("id","xiaozhanad");
//var _1fe=jebe_json.list[i].ads[0].widget_id;
//if(_1fe==275){
//div.innerHTML="<a class=\"ad-xiaozhan-hide\"><img src=\"http://a.xnimg.cn/smallsite/images/zhan_tips.png\" /></a><div class=\"ad-xiaozhan ad-taobao\"><a style=\"display:none!important\" id=\"tanx-a-mm_26632128_2431797_14672348\"></a><script id=\"tanx-s-mm_26632128_2431797_14672348\" src=\"http://p.tanx.com/ex?i=mm_26632128_2431797_14672348\" charset=\"gbk\"></script></div>";
//}else{
//if(_1fe==295){
//div.innerHTML="<a class=\"ad-xiaozhan-hide\"><img src=\"http://a.xnimg.cn/smallsite/images/zhan_tips.png\" /></a><div class=\"ad-xiaozhanyi ad-yichuanmei\"><iframe style=\"width:350px;height:320px;\"  src=\"http://jebe.xnimg.cn/u/yicm.html\" frameborder=\"0\"></iframe>";
//}else{
//div.innerHTML="<a class=\"ad-xiaozhan-hide\"><img src=\"http://a.xnimg.cn/smallsite/images/zhan_tips.png\" /></a>\t\t\t\t\t\t\t\t<div class=\"ad-xiaozhan\">\t\t\t\t\t\t\t\t<div>\t\t\t\t\t\t\t\t<p class=\"ad-title\"><a href=\""+ad.click_url+"\" target=\"_blank\">"+_1fd.title+"</a><a class=\"ad-close\" href=\"#nogo\"></a></p>\t\t\t\t\t\t\t\t<p><a target=\"_blank\" href=\""+ad.click_url+"\"><img src=\""+ad.media_uri+decodeURIComponent(_1fd.mediaUri)+"\" /></a></p></div>\t\t\t\t\t\t\t\t</div>";
//}
//}
//divs.push(div);
//}
//}
//if(divs.length>0){
//jQuery("#xiaozhanad").remove();
//jQuery("body").append(divs[0]);
//_1fb();
//_1f9=setTimeout(function(){
//_1fc();
//},5000);
//jQuery(".ad-close").bind("click",function(){
//clearTimeout(_1f9);
//_1fc();
//});
//var _1ff=false;
//jQuery(".ad-xiaozhan-hide").hover(function(){
//_1fb();
//jQuery(".ad-xiaozhan").hover(null,function(e){
//_1fc();
//});
//},null);
//}
//});
//};
//_1fa();
//if(!jQuery.browser.msie){
//jQuery(".site-tag li").bind("click",function(){
//clearTimeout(_1f9);
//_1f9=setTimeout(function(){
//_1fa();
//},2000);
//});
//}
//});
