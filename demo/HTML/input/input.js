/*input:name='' value='' type='' id='' class=''
 *type:text password radio submit 
 * 
 * 
 * 
 */

/****************************************************************
 *type:text password radio submit 
 *HTML的属性:normal
 *value:返回或设置text的初始值 
 *disabled:返回文本域是否被禁用或设置文本域为禁用 语法:textobject.disabled=true || false
 *size:返回或设置文本域的宽度[以字符计算的]maxlength:返回或设置文本域字符写入的最大值
 *type:返回或设置输入域的类型
 * 
 * 
 *   
 *HTML的属性:  动作
 *            主体上用于表单中的元素 但同样适用于有相同或类似属性的元素
 *onfocus:当输入域获得焦点时     onblur:当输入域失去焦点时
 *  
 *onchang:当input捕获到焦点后，系统储存当前值
 *        当input焦点离开后，判断当前值与之前存储的值是否不等，如果为true则触发onchange事件
 * 
 *oninput 当输入域中获得输入的时候 
 * 
 *onselect当输入域中的文本被选中时      
 */
window.onload=function ()
{changetype();};
	function changetype()
	{
		var text=document.getElementById('TexT');
		text.onfocus=function topassword()
		{
		this.value='';	
		this.type='password';		
		this.style.color='blue';
		};	
	};

 /****************************************************************
 *主体上方法
 *blur():让输入域失去焦点 
 *focus():让输入域获得焦点
 *select():让输入域中的文本被选中 
 * 
 *  
 */