$(document).ready(function(){
var _1=!!window.ActiveXObject;
var _2=_1&&!window.XMLHttpRequest;
if(_2){
}else{
$(".popup-reg").bind("click",function(){
$("#jsContainer").hide();
$(".iframe_wrapper").show();
});
$(".iframe_close").bind("click",function(){
$(".iframe_wrapper").hide();
$(window).unbind("scroll",showpop);
$("#jsContainer").show();
$(".dialog").hide();
$("#maskLayer").hide();
});
$(window).bind("scroll",showpop);
}
function showpop(){
var _3=$(window).scrollTop();
if(_3>600){
$(".iframe_wrapper").show();
}
}
});
var iframechange=true;
$("#reg_popup_iframe").bind("load",function(){
if(iframechange==true){
iframechange=false;
}else{
var _4=$("#reg_popup_iframe")[0].contentWindow.location.href;
href="//register/index";
$(".iframe_wrapper").hide();
if(_4==href){
window.location.reload();
}else{
window.location.href=_4;
}
}
});
