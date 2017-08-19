/*动作：                                                                      鼠标
*****************************************************************************************************
 *鼠标的左键
 *        击一下:  onclick=onmousedown+onmouseup//若单击对象后不在对象上释放在其他地方释放则事件无法执行
 *                                              、、在其他地方单击后在对象上释放事件无法执行
 *        击一下后不放:onmousedown              //单击即执行
 *        击一下后拖动:
 *        击一下后释放:onmouseup                //若单击对象后不在对象上释放在其他地方释放则事件无法执行
 *                                             、、在其他地方单击后在对象上释放事件可以执行
 *        击二下:         ondbclick
 * 
 *        拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放拖放
 * 
 *鼠标的中键
 *
 *鼠标的右键 
 *
 * 
 * 
 *鼠标的指针
 *        移动到元素上时:onmouseover
 *        从元素上离开时:onmouseout 
 * 
 *指针选文本
 *               onselect
**************************************************************************************************** 
 */
  


/*动作的方法:只有在动作发生后才能执行
 ******************************************************************************************************
 *
 * 
 * 
 * 
 * 
 * 
 */
  
/*动作的属性:只有在动作发生后才能执行 
 *格式:
 STEP ONE:定义执行动作的对象:div
 STEP TWO:定义执行的动作和动作执行后执行的方法:div.onclick=function(event)//event是硬性规定的参数 必写
 STEP THREE:{
          //通过  event.event属性  调用事件本身的属性
          event.clientX;
          //当div的某个位置被onclick后 返回被click位置相对body的水平坐标
        
             }
 

 ****************************************************************************************************
 *button
 * 值:event.button  ==  0 左键| 1 中建| 2 右键 
 *  
 *warning:
 *                 右键默认MENU的取消与自定义
 * 
 *client: 返回元素距离body边框的水平或垂直距离 
 *client
 *                      值:event.clientX | Y
 *                      值:event.screenX | Y
 *screen:  返回元素距离屏幕边框的水平或垂直距离  
 */
     window.onload=function(){button();clickCoords();}; 
     
     
     
function button(){  
            var R=document.getElementById('CmrmousE');
R.onmousedown=function whichButton(event)
{
	              var buttonr = event.button;
	if (buttonr==2)
	  	{
	  	this.style.background='green';
	  	};
};
}; 



function clickCoords(){  
            var R=document.getElementById('CmrmousE');
R.onclick=function cx(event)
{
		alert(event.clientX);
};
};


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 