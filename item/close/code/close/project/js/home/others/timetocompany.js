


function timetocompany()
{
                             var time=new Date();
                     var now=time.getTime()/1000;
	var future=Date.parse('2016/03/14 05:05:05')/1000;
	var fn=future - now;
	if(fn<=0){
		$('#TimetoC_dl1').css('display','none');
		$('#TimetoC_dl2').css('display','block');			
	}
	var w=Math.floor(fn/604800);
	if(w<10){
		$("#TimetoC_con #w").html('0'+w+"<span>w</span>");		
	}
	else{
		$("#TimetoC_con #w").html(w+"<span>w</span>");		
	}
	
	var d=Math.floor(fn%604800/86400);
	if(d<10){
		$("#TimetoC_con #d").html('&nbsp;'+'0'+d+"<span>d</span>");		
	}
	else{
		$("#TimetoC_con #d").html('&nbsp;'+d+"<span>d</span>");		
	}	

	var h=Math.floor(fn%604800%86400/3600);
	if(h<10){
		$("#TimetoC_con #h").html('&nbsp;'+'0'+h+"<span>h</span>");		
	}
	else{
		$("#TimetoC_con #h").html('&nbsp;'+h+"<span>h</span>");		
	}
	
	var m=Math.floor(fn%604800%86400%3600/60);
	if(m<10){
		$("#TimetoC_con #m").html('&nbsp;'+'0'+m+"<span>m</span>");		
	}
	else{
		$("#TimetoC_con #m").html('&nbsp;'+m+"<span>m</span>");		
	}
	
	var s=Math.floor(fn%604800%86400%3600%60);
	if(s<10){
		$("#TimetoC_con #s").html('&nbsp;'+'0'+s+"<span>s</span>");		
	}
	else{
		$("#TimetoC_con #s").html('&nbsp;'+s+"<span>s</span>");		
	}
}

$(function(){
	setInterval('timetocompany()',500);		
})