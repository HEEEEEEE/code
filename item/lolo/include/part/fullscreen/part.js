/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 * 
 */





/*action areaaction areaaction areaaction areaaction area 
 */
$(function(){	
					
})





/*function areafunction areafunction areafunction areafunc
 */
/*OperateFullscreenOperateFullscreenOperateFullscreenOper
 *
 *  
 */
function StartFullscreen(){
	//fullscreenfullscreenfullscreenfullscreenfullscreenfullscreen
		var objectFullscreen=document.getElementById('Fullscreen');	
		
		//basic
		var objectClick=$('.timecont-main1conimg');
		Fullscreen(objectClick,objectFullscreen);
		//set
		objectClick.click(function(){
			var imgurl=$(this).attr('data-url');
			
			var imgid=$('.fullscreenLevel1_contentType1');
			var framew=$('.fullscreenLevel1_centerCenterContent').width();
			var frameh=$('.fullscreenLevel1_centerCenterContent').height();
			var topIs='0';
			PicturE_auto(imgurl,imgid,framew,frameh,topIs);	
		});
		
		var objectClick1=$('.timepoint');
		Fullscreen(objectClick1,objectFullscreen);
		objectClick1.click(function(){
			var imgurl=$(this).attr('data-timeid');
			var imgurl=$('#TimeconT'+imgurl+' .timecont-main1conimg').attr('data-url');
			
			var imgid=$('.fullscreenLevel1_contentType1');
			var framew=$('.fullscreenLevel1_centerCenterContent').width();
			var frameh=$('.fullscreenLevel1_centerCenterContent').height();
			var topIs='0';
			PicturE_auto(imgurl,imgid,framew,frameh,topIs);	
		});				
	//exitFullscreenexitFullscreenexitFullscreenexitFullscreenexit
		//basic
		var objectClick=$('.fullscreenLevel1_exitButton');
		var objectKeyboard=$('.hiddenForFullscreen');
		var objectFullscreen=$('#Fullscreen');		
		ExitFullscreen(objectClick,objectKeyboard,objectFullscreen);	
}
/*
 * 
 *OperateFullscreenOperateFullscreenOperateFullscreenOper 
 */
 
 
 
 
 
//FullscreenFullscreenFullscreenFullscreenFullscreenFull
function Fullscreen(objectClick,objectFullscreen){
	objectClick.click(function(){
		//basic
		if(objectFullscreen.requestFullscreen){
			objectFullscreen.requestFullscreen();
		}else if(objectFullscreen.mozRequestFullScreen){
			objectFullscreen.mozRequestFullScreen();
		}else if(objectFullscreen.msRequestFullscreen){
			objectFullscreen.msRequestFullscreen();
		}else if(objectFullscreen.webkitRequestFullscreen){
			objectFullscreen.webkitRequestFullscreen();
		}
		//set
		objectFullscreen.style.display='block';
	});	

}



//ExitFullscreenExitFullscreenExitFullscreenExitFullscree
function ExitFullscreen(objectClick,objectKeyboard,objectFullscreen){
	//mousemousemousemousemousemousemousemousemousemousemous
		objectClick.click(function(){
			//basic
			if(document.exitFullscreen){
				document.exitFullscreen();
			}else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
			}else if(document.webkitExitFullscreen){
				document.webkitExitFullscreen();
			}
			//set
			objectFullscreen.css({display:'none'});
		});
	//keyboardkeyboardkeyboardkeyboardkeyboardkeyboardkeyboar
		objectKeyboard.resize(function(){
			if(objectKeyboard.width()==5){
				objectFullscreen.css({display:'none'});
			}
		});	
}







	