<!DOCTYPE html>
<html>
<head>
	      <meta http-equiv='content-type' content='text/html;charset=utf-8' />
<style type="text/css">
                  body,form,input
{
margin:0;padding:0;	
}



	#TexT
	{
	                   width:250px;height:25px;margin:2.5px;	
	padding:0 0 0 12.5px;
	border-width:2.5px;border-style:solid;border-color:blue;
            
	color:rgb(200,200,255);
	                                      font-size:22.5px;	
	}
</style>
</head>
<body>
      <input name='text' value='Enter the Password' type='text' id='TexT' class='' />


</body>
<script>
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




         var str = 'VisitW3School';
var patt1 = new RegExp('fdgdsg');

var result = patt1.test(str);

document.write("Result: " + result);	
</script></html>











