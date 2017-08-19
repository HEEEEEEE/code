                                    window.onload=function ()
{controlmouseover();

	listmouseoveR();LooP1();LooP2();LooP3();LooP4();LooP5();
listdblclicK();
                   FullscreeN();
                                      	
var video=document.getElementById('VideocontenT');
video.onplaying=function()
	{				
	var hh=setInterval('TimehhautO()',50);
	TimehhFautO();	    
	    var yy=setInterval('TimeyY()',50);
	}

var StopvideO=document.getElementById('STOP');
	StopvideO.onclick=function(){
	var vedio=document.getElementById('VideocontenT');
//	alert('sdfdsaf');
	            if(vedio.readyState)
	            {

		            vedio.src='';//判断视频是否已准备就绪 是的话将视频的src设空
		                         //
		                         // 
		                         // 
		                         //
		            /*代码问题为当将vedio的src设空 setInterval函数依然在运行
		             * 
		             */
		clearInterval(hh);//无法停止setInterval()函数的运行因onplaying与onclick
	            clearInterval(yy);//同时进行的冲突             	          		
	            }	
	};				    	
};




 //通过画画显示的时间通过画画显示的时间通过画画显示的时间通过画画显示的时间通过画画显示的时间
                                                                   //自动播放时 进度条的显示状态   
function TimehhautO()
{
//自动播放时                                          当前播放进度条工作过程
 	
var vedio=document.getElementById('VideocontenT');//取得视频		
var mprobar=document.getElementById('timehh');    //取得总的进度条
var nprobar=document.getElementById('hhtime');    //取得当前播放的进度条
var timeall=vedio.duration;//取得视频总的时间长度
var timenow=vedio.currentTime;//取得视频当前播放的时间长度

                            //总的进度条的基准参数
mh=mprobar.offsetLeft;                           //总的进度条开始的水平位置

mlength=mprobar.offsetWidth;                    //总的进度条的长度
                            //计算出      当前进度条的长度
                            //将当前播放的进度条以图像呈现
var turnpicture=((timenow/timeall)*mlength); 
var picture=turnpicture + 'px';                          
nprobar.style.width=picture;                            		    		   		    
};
                                                                    //手动播放时进度条的显示状态
function TimehhFautO()
{ 	
var vedio=document.getElementById('VideocontenT');//取得视频		
var mprobar=document.getElementById('timehh');    //取得总的进度条
var nprobar=document.getElementById('hhtime');    //取得当前播放的进度条
var timeall=vedio.duration;//取得视频总的时间长度
var timenow=vedio.currentTime;//取得视频当前播放的时间长度

                            //总的进度条的基准参数
mh=mprobar.offsetLeft;                           //总的进度条开始的水平位置

mlength=mprobar.offsetWidth;                    //总的进度条的长度



//手动播放 进度增加时         当前播放进度条工作过程

mprobar.onclick=function (event)
{
var e=event.clientX;	
var currentl=e - mh - 25 ;
var clength=currentl + 'px';//      计算出onclick的当前播放进度条长度
nprobar.style.width=clength;//将onclick的当前播放进度条长度以图像呈现
                            //将当前播放的图像进度与真实的视频进度对应
vedio.currentTime=(currentl/mlength)*timeall;                        	
};

//手动播放 进度减少时      当前播放进度条工作过程

nprobar.onclick=function (event)
{
var e=event.clientX;	
var currentl=e - mh - 25 ;
var clength=currentl + 'px';//      计算出onclick的当前播放进度条长度
nprobar.style.width=clength;//将onclick的当前播放进度条长度以图像呈现
                            //将当前播放的图像进度与真实的视频进度对应
vedio.currentTime=(currentl/mlength)*timeall;                         	
};
                            		    		   		    
};
//通过画画显示的时间通过画画显示的时间通过画画显示的时间通过画画显示的时间通过画画显示的时间  

//通过语言显示的时间通过语言显示的时间通过语言显示的时间通过语言显示的时间通过语言显示的时间
function TimeyY()
{

    	var vediotime=document.getElementById('VideocontenT');//取得视频
                                    var timenow=vediotime.currentTime;//取得视频当前播放的时间长度
                                                                      //计算视频当前播放的时间长度START                                                                                    
	            	var hourn=Math.floor(timenow/3600);
	            	if(hourn < 10)
                                    {
                                    	var hourn='0'+hourn; 	
                                    }
	            	
	            	var minuten=Math.floor(timenow%3600/60);
                                    if(minuten < 10)
                                    {
                                    	var minuten='0'+minuten; 	
                                    }
	            	
	            	var secondn=Math.floor(timenow%3600%60);
                                    if(secondn < 10)
                                    {
                                    	var secondn='0'+secondn; 	
                                    }
                                    
	            	var timen= hourn + ':' + minuten + ':' + secondn;
	            	                                   //计算视频当前播放的时间长度END
	            	                                   
	            	                                   
	            	                                   
	            	var timeall=vediotime.duration;                 //取得视频总的时间长度
	            	                                         //计算视频总的时间长度START         
	            	var houra=Math.floor(timeall/3600);
                                    if(houra < 10)
                                    {
                                    	var houra='0'+houra; 	
                                    }
	            	
	            	var minutea=Math.floor(timeall%3600/60);
                                    if(minutea < 10)
                                    {
                                    	var minutea='0'+minutea; 	
                                    }
	            	
	            	var seconda=Math.floor(timeall%3600%60);
                                    if(seconda < 10)
                                    {
                                    	var seconda='0'+seconda; 	
                                    }
                                    
	            	var timea= houra + ':' + minutea + ':' + seconda;
	            	                                             //计算视频总的时间长度END
	            	var timeyy=timen + '/' + timea ;
	            	
	document.getElementById('timeyy').innerHTML=timeyy;
	             			
	document.getElementById('timefhy').style.background='white';
	      document.getElementById('timeyy').style.color='white';    		  
};
//通过语言显示的时间通过语言显示的时间通过语言显示的时间通过语言显示的时间通过语言显示的时间




                      //控制条控制播放 控制条控制播放 控制条控制播放 控制条控制播放 控制条控制播放
//控制条部件的鼠标悬浮事件
function controlmouseover()
{
//var looP1=document.getElementById('looP1');
//var looP2=document.getElementById('looP2');
//var looP3=document.getElementById('looP3');
//var looP4=document.getElementById('looP4');
//var looP5=document.getElementById('looP5');
//	looP1.onmouseover=function(){this.style.borderWidth='1px'};
//	looP1.onmouseout=function(){this.style.borderWidth='0px'};
//	looP2.onmouseover=function(){this.style.borderWidth='1px'};
//	looP2.onmouseout=function(){this.style.borderWidth='0px'};
//	looP3.onmouseover=function(){this.style.borderWidth='1px'};
//	looP3.onmouseout=function(){this.style.borderWidth='0px'};
//	looP4.onmouseover=function(){this.style.borderWidth='1px'};
//	looP4.onmouseout=function(){this.style.borderWidth='0px'};
//	looP5.onmouseover=function(){this.style.borderWidth='1px'};
//	looP5.onmouseout=function(){this.style.borderWidth='0px'};
	
	
          var UponE=document.getElementById('UponE');
var buttonplay=document.getElementById('buttonplay');
      var DownonE=document.getElementById('DownonE');
      var STOP=document.getElementById('STOP');
	     UponE.onmouseover=function(){this.style.borderWidth='1px'};
	      UponE.onmouseout=function(){this.style.borderWidth='0px'};

	buttonplay.onmouseover=function(){this.style.borderWidth='1px'};
	 buttonplay.onmouseout=function(){this.style.borderWidth='0px'};
	
	   DownonE.onmouseover=function(){this.style.borderWidth='1px'};
	    DownonE.onmouseout=function(){this.style.borderWidth='0px'};
	    
	STOP.onmouseover=function(){this.style.borderWidth='1px'};
	    STOP.onmouseout=function(){this.style.borderWidth='0px'};
	    
	    
var VoicestarT=document.getElementById('VoicestarT');
      var VolumecontroL=document.getElementById('VolumecontroL');
      var FullscreeN=document.getElementById('FullscreeN');	
      
      VoicestarT.onmouseover=function(){this.style.borderWidth='1px'};
	      VoicestarT.onmouseout=function(){this.style.borderWidth='0px'};

	VolumecontroL.onmouseover=function(){this.style.borderWidth='1px'};
	 VolumecontroL.onmouseout=function(){this.style.borderWidth='0px'};
	
	   FullscreeN.onmouseover=function(){this.style.borderWidth='1px'};
	    FullscreeN.onmouseout=function(){this.style.borderWidth='0px'};        	
};


//循环控制视频的播放循环控制视频的播放循环控制视频的播放循环控制视频的播放循环控制视频的播放
/*
 *单影播放
 */
function LooP1()
{
//被单击后 边框变成白色
var looP1=document.getElementById('looP1');
looP1.onclick=function(){
this.style.borderWidth='1px';this.style.borderColor='white';
var looP2=document.getElementById('looP2').style.borderWidth='0px';
var looP3=document.getElementById('looP3').style.borderWidth='0px';
var looP4=document.getElementById('looP4').style.borderWidth='0px';
var looP5=document.getElementById('looP5').style.borderWidth='0px';
//被单击后 当视频结束时结束播放即单影播放
var vedio=document.getElementById('VideocontenT');//取得视频
vedio.onended=function(){vedio.src=''};
//if(vedio.readyState)
//{
//var timeall=vedio.duration;//取得视频总的时间长度
//var timenow=vedio.currentTime;//取得视频当前播放的时间长度
//var time=1000*Math.ceil(timeall-timenow);
////总时间-当前时后赋值给setTimeout()函数
//setTimeout(
//"var vedio=document.getElementById('VideocontenT');vedio.src=''"
//,time
//);
//}
}; 	
};
 
/*
 *单影循环
 */ 
function LooP2()
{
//被单击后 边框变成白色
var looP2=document.getElementById('looP2');
looP2.onclick=function(){
this.style.borderWidth='1px';this.style.borderColor='white';
var looP1=document.getElementById('looP1').style.borderWidth='0px';
var looP3=document.getElementById('looP3').style.borderWidth='0px';
var looP4=document.getElementById('looP4').style.borderWidth='0px';
var looP5=document.getElementById('looP5').style.borderWidth='0px';
//被单击后 当视频结束时重新播放即单影循环
var vedio=document.getElementById('VideocontenT');//取得视频
vedio.onended=function(){vedio.load();vedio.play();};
		};	
};

/*
 *随机播放
 */
function LooP3()
{
	
//被单击后 边框变成白色
var looP3=document.getElementById('looP3');
looP3.onclick=function()
	{
this.style.borderWidth='1px';this.style.borderColor='white';
var looP1=document.getElementById('looP1').style.borderWidth='0px';
var looP2=document.getElementById('looP2').style.borderWidth='0px';
var looP4=document.getElementById('looP4').style.borderWidth='0px';
var looP5=document.getElementById('looP5').style.borderWidth='0px';
//被单击后 随机播放
var vedio=document.getElementById('VideocontenT');//取得视频
var buttonplay=document.getElementById('buttonplay');
vedio.onended=function(){
m=Math.ceil(Math.random()*5);//生成随机数12345	
v=document.getElementById('list'+m).innerHTML+'.webm';
vedio.src='WATCH/VIDEO/'+v;
if(vedio.paused)
	{
		vedio.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}
		
                        };
	};	
};
 
/*
 *有序播放
 */
function LooP4()
{
//被单击后 边框变成白色
var looP4=document.getElementById('looP4');
looP4.onclick=function(){
this.style.borderWidth='1px';this.style.borderColor='white';
var looP1=document.getElementById('looP1').style.borderWidth='0px';
var looP2=document.getElementById('looP2').style.borderWidth='0px';
var looP3=document.getElementById('looP3').style.borderWidth='0px';
var looP5=document.getElementById('looP5').style.borderWidth='0px';
//被单击后 有序播放
vedio.onended=function(){		
/*取得正在播放的视频的信息：五个视频间的信息由上及下必以某种规律递增 例12345
 *当视频播放结束时信息即递增而而实现由上倒下依次播放 
 *当信息递增至最大时 播放后即结束播放而最终实现有序播放 
 * 
 */
	
                        };
		};	
};
 
 /*
 *列表循环
 */
 function LooP5()
{
//被单击后 边框变成白色
var looP5=document.getElementById('looP5');
looP5.onclick=function(){
this.style.borderWidth='1px';this.style.borderColor='white';
var looP1=document.getElementById('looP1').style.borderWidth='0px';
var looP2=document.getElementById('looP2').style.borderWidth='0px';
var looP3=document.getElementById('looP3').style.borderWidth='0px';
var looP4=document.getElementById('looP4').style.borderWidth='0px';
//被单击后 循环播放
vedio.onended=function(){
/*取得正在播放的视频的信息：五个视频间的信息由上及下必以某种规律递增 例12345
 *当视频播放结束时信息即递增而而实现由上倒下依次播放 
 *当信息递增至最大时 播放后即从头播放而最终实现循环播放 
 * 
 */	
	
	
                        };
		};	
};  
//循环控制视频的播放循环控制视频的播放循环控制视频的播放循环控制视频的播放循环控制视频的播放



//上一个视频上一个视频上一个视频上一个视频上一个视频上一个视频上一个视频上一个视频上一个视频

//暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放		            	
function VplayorpausE()
{
	var buttonplay=document.getElementById('buttonplay');
	
var vedioplay=document.getElementById('VideocontenT');

	if(vedioplay.paused)
	{
		vedioplay.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'	
	}
	else
	{
		vedioplay.pause();
		buttonplay.src='WATCH/IMAGE/button_play.png'	
	}
	
};
//暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放暂停 | 播放

//下一个视频下一个视频下一个视频下一个视频下一个视频下一个视频下一个视频下一个视频下一个视频



//第一次进入视频播放器时
            //将视频的src设空
                    //将背景图片的地址成为一动画图片的地址
	            	// 
	            	// 
	            	// 
	            	// 	
//判断视频的视频信息是否一载入 是：停止载入同时载入一段动画作为视频播放器的背景
//function StopvideO(){
//var StopvideO=document.getElementById('STOP');
//	StopvideO.onclick=function(){
//	var vedio=document.getElementById('VideocontenT');
////	alert('sdfdsaf');
//	            if(vedio.readyState)
//	            {
//	            clearInterval(hh);
//	            clearInterval(yy);
//	            vedio.src='';//判断视频是否已准备就绪 是的话将视频的src设空
//	                         //
//	                         // 
//	                         // 
//	                         //
//		            /*代码问题为当将vedio的src设空 setInterval函数依然在运行
//		             * 
//		             */	          		
//	            }	
//	};	
//};



//声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无
function VoicestsP()
{
        var voicestart=document.getElementById('VoicestarT');

var videovoice=document.getElementById('VideocontenT');

   if(videovoice.volume!=0)
	{
		videovoice.volume=0;
		voicestart.src='WATCH/IMAGE/voicestop.png';	
	}
	else
	{
		videovoice.volume=0.3;
		voicestart.src='WATCH/IMAGE/voicestart.png';	
	}
};
//声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无声音的 有 | 无


//音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制
function Volume5()
{
			var volum1=document.getElementById('volume1');
			var volum2=document.getElementById('volume2');
			var volum3=document.getElementById('volume3');
			var volum4=document.getElementById('volume4');
	        var volum5=document.getElementById('volume5');
	        	       	
   var videovolume5=document.getElementById('VideocontenT');
   
   {
	   videovolume5.volume=0.5;
	   volum1.src='WATCH/IMAGE/volume1.png';
	   volum2.src='WATCH/IMAGE/volume2.png';
	   volum3.src='WATCH/IMAGE/volume3.png';
	   volum4.src='WATCH/IMAGE/volume4.png';
	   volum5.src='WATCH/IMAGE/volume5.png';	
   }
};
function Volume4()
{
	        var volu1=document.getElementById('volume1');
			var volu2=document.getElementById('volume2');
			var volu3=document.getElementById('volume3');
			var volu4=document.getElementById('volume4');
	        var volu5=document.getElementById('volume5');
	        	       	
   var videovolume4=document.getElementById('VideocontenT');
   
   {
	   videovolume4.volume=0.4;
	   volu1.src='WATCH/IMAGE/volume1.png';
	   volu2.src='WATCH/IMAGE/volume2.png';
	   volu3.src='WATCH/IMAGE/volume3.png';
	   volu4.src='WATCH/IMAGE/volume4.png';
	   volu5.src='WATCH/IMAGE/volumegray5.png';	
   }
};
function Volume3()
{
	        var vol1=document.getElementById('volume1');
			var vol2=document.getElementById('volume2');
			var vol3=document.getElementById('volume3');
			var vol4=document.getElementById('volume4');
	        var vol5=document.getElementById('volume5');
	        	       	
   var videovolume3=document.getElementById('VideocontenT');
   
   {
	   videovolume3.volume=0.3;
	   vol1.src='WATCH/IMAGE/volume1.png';
	   vol2.src='WATCH/IMAGE/volume2.png';
	   vol3.src='WATCH/IMAGE/volume3.png';
	   vol4.src='WATCH/IMAGE/volumegray4.png';
	   vol5.src='WATCH/IMAGE/volumegray5.png';	
   }
};
function Volume2()
{
	        var vo1=document.getElementById('volume1');
			var vo2=document.getElementById('volume2');
			var vo3=document.getElementById('volume3');
			var vo4=document.getElementById('volume4');
	        var vo5=document.getElementById('volume5');
	        	       	
   var videovolume2=document.getElementById('VideocontenT');
   
   {
	   videovolume2.volume=0.2;
	   vo1.src='WATCH/IMAGE/volume1.png';
	   vo2.src='WATCH/IMAGE/volume2.png';
	   vo3.src='WATCH/IMAGE/volumegray3.png';
	   vo4.src='WATCH/IMAGE/volumegray4.png';
	   vo5.src='WATCH/IMAGE/volumegray5.png';	
   }
};
function Volume1()
{
	        var v1=document.getElementById('volume1');
			var v2=document.getElementById('volume2');
			var v3=document.getElementById('volume3');
			var v4=document.getElementById('volume4');
	        var v5=document.getElementById('volume5');
	        	       	
   var videovolume1=document.getElementById('VideocontenT');
   
   {
	   videovolume1.volume=0.1;
	   v1.src='WATCH/IMAGE/volume1.png';
	   v2.src='WATCH/IMAGE/volumegray2.png';
	   v3.src='WATCH/IMAGE/volumegray3.png';
	   v4.src='WATCH/IMAGE/volumegray4.png';
	   v5.src='WATCH/IMAGE/volumegray5.png';	
   }   	
};
//音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制音量的控制



//视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全
/*全屏方法为：全屏元素.requestFullScreen(); 
 *注意:Webkit:webkitRequestFullScreen          Firefox:mozRequestFullScreen
 *取消全屏为：全屏元素.cancelFullScreen();
 * 
 *判断浏览器是否处于全屏状态:document.fullScreen
 *注意:Webkit:document.webkitIsFullScreen;    Firefox:document.mozFullScreen
 * 
 *                   full-screen{}用在CSS代码中，可以控制全屏元素（及其子元素）全屏状态时的样式
 *注意:Webkit:     :-webkit-full-screen{}            Firefox:     :-moz-full-screen{}
 *        CSS分别控制多个全屏元素:#element1:-moz-full-screen{}    #element2:-moz-full-screen{}
 * 
 *  
 */     
function FullscreeN()
{
var video=document.getElementById('VideocontenT');	
var fullsn=document.getElementById('FullscreeN');



	fullsn.onclick=function ()
		{
	if(! video.mozFullScreen)
		{
			video.mozRequestFullScreen();
		};				
	
		};
	
};
//视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全屏 | 非全屏/视频的 全












//播放列表控制播放 播放列表控制播放 播放列表控制播放 播放列表控制播放 播放列表控制播放
//设置鼠标悬浮事件
function listmouseoveR()
{
var list1=document.getElementById('list1');
var list2=document.getElementById('list2');
var list3=document.getElementById('list3');
var list4=document.getElementById('list4');
var list5=document.getElementById('list5');
list1.onmouseover=function(){this.style.borderColor='black'};
list1.onmouseout=function(){this.style.borderColor='white'};
list2.onmouseover=function(){this.style.borderColor='black'};
list2.onmouseout=function(){this.style.borderColor='white'};
list3.onmouseover=function(){this.style.borderColor='black'};
list3.onmouseout=function(){this.style.borderColor='white'};
list4.onmouseover=function(){this.style.borderColor='black'};
list4.onmouseout=function(){this.style.borderColor='white'};
list5.onmouseover=function(){this.style.borderColor='black'};
list5.onmouseout=function(){this.style.borderColor='white'};
};
//设置鼠标双击事件
function listdblclicK()
{
var list1=document.getElementById('list1');
var list2=document.getElementById('list2');
var list3=document.getElementById('list3');
var list4=document.getElementById('list4');
var list5=document.getElementById('list5');

     var VideocontenT=document.getElementById('VideocontenT');
     
var buttonplay=document.getElementById('buttonplay');
	list1.ondblclick=function()
	{	
	VideocontenT.src='WATCH/VIDEO/QUEENQUEENQUEEN.webm';
	if(VideocontenT.paused)
	{
		VideocontenT.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}	
	};
	list2.ondblclick=function()
	{	
	VideocontenT.src='WATCH/VIDEO/SOMEBODY TO LOVE.webm';
	if(VideocontenT.paused)
	{
		VideocontenT.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}	
	};
	list3.ondblclick=function()
	{	
	VideocontenT.src='WATCH/VIDEO/LOVE OF MY LIFE.webm';
	if(VideocontenT.paused)
	{
		VideocontenT.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}	
	};
	list4.ondblclick=function()
	{	
	VideocontenT.src='WATCH/VIDEO/UNDER PRESSURE.webm';
	if(VideocontenT.paused)
	{
		VideocontenT.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}	
	};
	list5.ondblclick=function()
	{	
	VideocontenT.src='WATCH/VIDEO/KEEP YOURSELF ALIVE.webm';
	if(VideocontenT.paused)
	{
		VideocontenT.play();
		buttonplay.src='WATCH/IMAGE/button_pause.png'
	}	
	};	
};

//播放列表控制播放 播放列表控制播放 播放列表控制播放 播放列表控制播放 播放列表控制播放














