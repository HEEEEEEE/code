/*非全屏时：判断全屏的方法
 *         要全屏的元素.requestFullscreen 
 *非全屏时：执行全屏的方法 
 *         要全屏的元素.requestFullscreen()
 *attention: 兼容：requestFullscreen 
 *                         Firefox:mozRequestFullScreen
 *                         etc
 */
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
	  
	  
/*全屏时：判断全屏的方法
 *         document.exitFullscreen
 *           document.mozCancelFullScreen
 *                   document.webkitExitFullScreen
 *全屏时：执行非屏的方法 
 *         document.exitFullscreen()
 *           document.mozCancelFullScreen()
 *                   document.webkitExitFullScreen()
 */
 //FfullscreeN退出全屏	
	  if(document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if(document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if(document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	  }
/*过程：通过两个元素执行对应的函数可实现全屏的进入与退出
 * 
 * 
 * 
 * 
 * 
 */	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  	  