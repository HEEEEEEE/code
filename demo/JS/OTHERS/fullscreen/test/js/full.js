function Fullscreen() 
{	
var FfullscreeN=document.getElementById('FfullscreeN');
//FfullscreeN全屏显示
	  if(FfullscreeN.requestFullscreen) {
		  FfullscreeN.requestFullscreen();
	  } else if(FfullscreeN.mozRequestFullScreen) {
		  FfullscreeN.mozRequestFullScreen();
	  } else if(FfullscreeN.webkitRequestFullscreen) {
		  FfullscreeN.webkitRequestFullscreen();
	  } else if(FfullscreeN.msRequestFullscreen) {
		  FfullscreeN.msRequestFullscreen();
	  }
//ClickE消失
var ClickE=document.getElementById('ClickE');	  
	  ClickE.style.display='none';
//EclicK出现
var EclicK=document.getElementById('EclicK');
EclicK.style.display='block';	  	  
}

function exitFullscreen()
{
//FfullscreeN退出全屏	
	  if(document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if(document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if(document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	  }
//ClickE出现
var ClickE=document.getElementById('ClickE');	  
	  	  ClickE.style.display='block';
//EclicK消失
var EclicK=document.getElementById('EclicK');
EclicK.style.display='none';	  
}











