function changeImg() {   
      var imgSrc = $("#imgObj");   
      var src = imgSrc.attr("src");   
      imgSrc.attr("src", chgUrl(src));   
      //ʱ���   
      //Ϊ��ʹÿ������ͼƬ��һ�£�����������������棬������Ҫ����ʱ���   
      function chgUrl(url) {   
          var timestamp = (new Date()).valueOf();   
          urlurl = url.substring(0, 17);   
         if ((url.indexOf("?") >= 0)) {   
             urlurl = url + "&t=" + timestamp;   
         } else {   
             urlurl = url + "?t=" + timestamp;   
         }   
         return urlurl;   
     }   
}   

//function ChangeImage(img)
//{
//	document.getElementsByName("ImageButton1").src = "../images/3_06.gif";
//}
//
function getUrl(i,j) {   
     $.ajax({   
         type:"POST",   
         url:"DisPatch_getUrl",   
         data:"i="+i+"&j="+j,   
         success:callback   
     });   
}   
    
function callback(data) {   
     $("#info").html(data);   
}   
