


function counttime()
{
                             var time=new Date();
                     var now=time.getTime()/1000;
	var future=Date.parse('2016/5/01 00:00:00')/1000;
	var fn=future - now;
	if(fn<=0){
		$('#TimetoR_dl1').css('display','none');
		$('#TimetoR_dl2').css('display','block');			
	}	
	var w=Math.floor(fn/604800);
	if(w<10){
		$("#TimetoR_con #w").html('0'+w+"<span>w</span>");		
	}
	else{
		$("#TimetoR_con #w").html(w+"<span>w</span>");		
	}
	
	var d=Math.floor(fn%604800/86400);
	if(d<10){
		$("#TimetoR_con #d").html('&nbsp;'+'0'+d+"<span>d</span>");		
	}
	else{
		$("#TimetoR_con #d").html('&nbsp;'+d+"<span>d</span>");		
	}	

	var h=Math.floor(fn%604800%86400/3600);
	if(h<10){
		$("#TimetoR_con #h").html('&nbsp;'+'0'+h+"<span>h</span>");		
	}
	else{
		$("#TimetoR_con #h").html('&nbsp;'+h+"<span>h</span>");		
	}
	
	var m=Math.floor(fn%604800%86400%3600/60);
	if(m<10){
		$("#TimetoR_con #m").html('&nbsp;'+'0'+m+"<span>m</span>");		
	}
	else{
		$("#TimetoR_con #m").html('&nbsp;'+m+"<span>m</span>");		
	}
	
	var s=Math.floor(fn%604800%86400%3600%60);
	if(s<10){
		$("#TimetoR_con #s").html('&nbsp;'+'0'+s+"<span>s</span>");		
	}
	else{
		$("#TimetoR_con #s").html('&nbsp;'+s+"<span>s</span>");		
	}
}

$(function(){
	setInterval('counttime()',500);		
})