/*Basic Basic Basic Basic Basic Basic Basic Basic Basic 
 * 
 */
//ROOTDIR
var ROOTDIR=document.getElementById('HiddeN_rootdir').value;

//resizeresizeresizeresizeresizeresizeresizeresizeresizeresizeresizeresizeresizeresizeresize
/*
main:a plug-in for html elements resize checking
code:
$('selector').resize(function(){
	code area
});
 */
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);


/*actionactionactionactionactionactionactionactionaction
 * 
 */

$(function(){
	/*input_browserinput_browserinput_browserinput_browserinput_browser*/	
	input_browser();
})



/*functionfunctionfunctionfunctionfunctionfunctionfuncti
 * 
 */
//check the browser
function checkBrowser(){
	var userAgent = navigator.userAgent;
	var isOpera = userAgent.indexOf("Opera") > -1;
    	if(isOpera){return "Opera";}
    	if (userAgent.indexOf("Firefox") > -1){return "FF";}
    	if (userAgent.indexOf("Chrome") > -1){return "Chrome";}
    	if (userAgent.indexOf("Safari") > -1){return "Safari";} 
    	if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){return "IE";};
}
 /*input_browser*/
function input_browser(){	
	var cb = checkBrowser();
	if (cb == "IE") {
		//email
		$('.input-email').val('电子邮件');
		$('.input-email').click(function(){ var val=$(this).val(); if(val=='电子邮件'){ $(this).val('');}});
		$('.input-email').blur(function(){ var val=$(this).val(); if(val==''){ $(this).val('电子邮件');}});
						
		//password
		$('.input-password').val('密码');
		$('.input-password').attr('type','text');
		$('.input-password').click(function(){var val=$(this).val();if(val=='密码'){$(this).val('');$(this).attr('type','password');}});
		$('.input-password').blur(function(){var val=$(this).val();if(val==''){$(this).val('密码');$(this).attr('type','text');}});
			
		//username
		$('.input-username').val('昵称');
		$('.input-username').click(function(){var val=$(this).val();if(val=='昵称'){$(this).val('');}});
		$('.input-username').blur(function(){var val=$(this).val();if(val==''){$(this).val('昵称');}});
			
		//code
		$('.input-code').val('验证码');
		$('.input-code').click(function(){var val=$(this).val();if(val=='验证码'){$(this).val('');}});
		$('.input-code').blur(function(){var val=$(this).val();if(val==''){$(this).val('验证码');}});
			
		//search
		$('.input-search').val('搜搜');
		$('.input-search').click(function(){var val=$(this).val();if(val=='搜搜'){$(this).val('');}});
		$('.input-search').blur(function(){var val=$(this).val();if(val==''){$(this).val('搜搜');}}); 
	}	
}

/*paste words filter*/
function Filter_PasteWords(){
	$('.contentEditable').bind('input propertychange',function(e){
		/*filterfilterfilterfilterfilterfilterfilterfilterfilterfilterfilter*/	
			//to text
			var html=$(this).html();
			if(/<(.*)>(.*)<\/(.*)>|<(.*)\/>/.test(html)){
				var text=$(this).text();
				//remove the blank
				if(/\n/.test(text)){
					var text=text.replace(/\n/g,'');	
					$(this).text(text);						
				}else{
					$(this).text(text);
				}					
			}else{
				var text=$(this).text();
			}				
		
		/*stylestylestylestylestylestylestylestylestylestylestylestylestyle*/
			var parentsId=$(this).attr('data-parents');
			var holder=$(this).attr('data-holder');
			var color=$(this).attr('data-color');
			var tipsId=$('#'+parentsId+' .contentEditableTips');				
			//empty	
			if(text==''){
				tipsId.css('display','none');
				if(color){
					$(this).addClass(holder).css('color','rgba(50,25,0,0.5)');	
				}else{
					$(this).addClass(holder).css('color','rgba(255,255,255,0.5)');	
				}
				
			}
			else{
				if(color){
					$(this).css('color','rgba(50,25,0,1)').off('click').removeClass(holder);	
				}else{
					$(this).css('color','rgba(255,255,255,1)').off('click').removeClass(holder);	
				}				
				tipsId.css('display','block');
								
			}
			//length
			var numId=$('#'+parentsId+' .contentEditableNum');				
			var textl=text.length;
			var textl=125 - textl;
			numId.text(textl);			
			if(textl < 0){
				numId.css('color','rgba(255,62,0,1)');
			}
			else if(textl >= 0){
				numId.css('color','rgba(0,255,0,1)');						
			}			
	})	  
}  

/*ajax special filter*/
function FilteR_ajaxspecialstr(data){
	var model = new RegExp(/&|\+/gi);	
	var result = model.test(data);	
	if(result){	
		var data=data.replace(/&/gi,'%26');
		var data=data.replace(/\+/gi,'%2B');
		return data;
	}else{
		return data;		
	}
}  

//picturepicturepicturepicturepicture
/*picture's size
 * imgurl:picture url
 * imgid:picture id [a html object by jq or js]
 * framew,frameh:the frame include the picture
 * */
function PicturE_auto(imgurl,imgid,framew,frameh,topIs){		
		/*picture:width,heightpicture:width,heightpicture:width,height*/
		//custom the img's object
		var img=new Image();
		//set the object img's src
		img.src=imgurl;
				
		img.onload=function(){
			    //computer the img w and h based on frame
			    	imgsw=img.width;
			    imgsh=img.height;
			    if(framew>=imgsw && frameh>=imgsh){
				var imgnw=imgsw;
				var imgnh=imgsh;
			    }
			    else if(framew>=imgsw && frameh<imgsh){
					var imgnh=frameh;
					var rate=imgsh/imgnh;
					var imgnw=imgsw/rate;
			    }
			    else if(framew<imgsw && frameh>=imgsh){
					var imgnw=framew;
					var rate=imgsw/imgnw;
					var imgnh=imgsh/rate;
			    }
			    else if(framew<imgsw && frameh<imgsh){
			    	if(imgsw>imgsh){
					var rate=imgsw/framew;
					var imgnh=imgsh/rate;
					var imgnw=framew;					
					if(imgnh>frameh){
						var rate=imgnh/frameh;
						var imgnw=imgnw/rate;
						var imgnh=frameh;
						
					}			    		
			    	}
			    	else{
					var rate=imgsh/frameh;
					var imgnw=imgsw/rate;
					var imgnh=frameh;
					if(imgnw>framew){
						var rate=imgnw/framew;
						var imgnh=imgnh/rate;
						var imgnw=framew;						
					}			    		
			    	}		
			    }
			   //set the imgset the imgset the imgset the imgset the img
				   //w and h
				   if(typeof(imgid)!='string'){
					   	imgid.css('width',imgnw+'px');
					   imgid.css('height',imgnh+'px');
					   //position
					   if(!topIs){
						   var positionR=(frameh-imgnh)/2;
						   imgid.css('top',positionR+'px'); 				   	
					   }
					   //url
					   imgid.attr('src',imgurl); 				   	
				   }else{
					   	$(imgid).css('width',imgnw+'px');
					   $(imgid).css('height',imgnh+'px');
					   //position
					   if(!topIs){
						   var positionR=(frameh-imgnh)/2;
						   $(imgid).css('top',positionR+'px'); 				   	
					   }
					   //url
					   $(imgid).attr('src',imgurl); 				   	
				   }
  						
		}					
}

























































