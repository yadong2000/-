<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>我的评论</title>
</head>
<body>
   <div class="inputBox" style="display:block;" id="smallComment_1204617">
                <input type="text" value="ࠬ4˵}ߤщáһԃև¼ҲŜǀÛŶá" onmousedown="fnMouseDown(1204617)" />
                <div class="btnBox" onclick="GetCommentInfo(1204617)">
                    <em></em><span class="plFont">0</span><b></b><span class="jianjiao"></span>
                </div>
            </div>
         
            <div class="hufuInput" id="divCommentContent_1204617" style="display: none">
                <div class="textBox">
                    <textarea name="" cols="" rows="" id="txtCommentContent_1204617" ></textarea>
                    <div class="btnBox" onclick="GetCommentInfo(1204617)"><em></em>
                        <span class="plFont">0</span><b></b>
                        <span class="jianjiao"></span>
                        <span id="spanPlus_1204617" style="display: none">+</span>
                        <input type="hidden" value="0" id="isshowpinlun_1204617" />
                    </div>
                </div>
                <div class="textBtn">
                    <div id="uploadImage_1204617" class="showUploadImage" style="display: none;margin-top:15px;">
                        <object id="swfImg" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="120" height="35">
                            <param name="movie" value="/flashpic/txupload.swf" />
                            <param name="quality" value="high" />
                            <param name="wmode" value="transparent" />
                            <embed src="/flashpic/txupload.swf?btn_normal_image=/flashpic/uploadbtn2.png&image_quality=75&btn_hover_image=/flashpic/uploadbtn.png&file_upload_limit=1&file_size_limit=5120&image_width_limit=800&image_height_limit=20000&file_types=*.jpg;*.jpeg;*.png;*.gif&upload_url=http://pic.pengfu.com/home/uploadimage?imagesize='b|s'&type=0&humorId=1204617" width="120" height="35" />
                            <param name="flashvars" value="btn_normal_image=/flashpic/uploadbtn2.png&btn_hover_image=/flashpic/uploadbtn.png&file_size_limit=5120&image_width_limit=800&image_height_limit=20000&file_upload_limit=1&file_types=*.jpg;*.jpeg;*.png;*.gif&upload_url=http://pic.pengfu.com/home/uploadimage?imagesize='b|s'&type=0&humorId=1204617" />
                        </object>
                    </div>
                    <div class="zheZhaoBtn" id="zheZhaoBtn_1204617" onclick="ZheZhaoBtn()"><a href="###">ѡձͼƬʏԫ</a></div>
                    <span onclick="postcommentinfo(1204617,false);pengfu_click(null,1204617,5610924);"  id="1204617" isSubmit="0">͡ݻ</span>
                </div>
                <div class="upImg" id="upImg_1204617" style="display: none"><p><img src="" width="120" height="90" /><em onclick="cleanPic(1204617)">X</em></p></div>
                
                <input type="hidden" value="" id="hdUploadImg_1204617" />
            </div>
            <!--ճ࠲ ܘش࠲ ޡ˸-->
            <!--ǀÛҳ ߪʼ-->
            <div class="newSList" style="display: none" id="newList_1204617">
                <p class="xxTitle"><strong>خтǀÛ</strong><span></span></p>
                <div class="newsBox" id="newsBox_1204617">
                    <!--ȫҿټل ȫҿДʾ ӾӘ ͭݓӢ˔˽ߝ-->
                                        <p style="text-align: center; height: 20px; margin-top: 15px;" id="nopinglun_1204617">ûԐخтǀÛ</p>
                    <div class="shouqiBtn" style="display: block" id="shouqiBtn_1204617" onclick="shouqiBtn(1204617,this)"><span></span></div>
                    <!--ͭݓӢ˔˽ߝ-->
                </div>
            </div>
            <!--ǀÛҳ ޡ˸-->
        </div>
    </div>






</body>
</html>