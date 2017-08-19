/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
function timetodeleteclient(){
	var time=new Date();
	var now=time.getTime()/1000;
	var future=Date.parse('2016/03/25 12:25:00 ')/1000;
	var fn=future-now;
	if(fn<=0){
// 		timetodeleteserver();		
	}
	else{
		var w=Math.floor(fn/604800);
		if(w<10){
			$("#TimetoD_con #w").html('0'+w+"<span>w</span>");		
		}
		else{
			$("#TimetoD_con #w").html(w+"<span>w</span>");		
		}
		
		var d=Math.floor(fn%604800/86400);
		if(d<10){
			$("#TimetoD_con #d").html('&nbsp;'+'0'+d+"<span>d</span>");		
		}
		else{
			$("#TimetoD_con #d").html('&nbsp;'+d+"<span>d</span>");		
		}	

		var h=Math.floor(fn%604800%86400/3600);
		if(h<10){
			$("#TimetoD_con #h").html('&nbsp;'+'0'+h+"<span>h</span>");		
		}
		else{
			$("#TimetoD_con #h").html('&nbsp;'+h+"<span>h</span>");		
		}
		
		var m=Math.floor(fn%604800%86400%3600/60);
		if(m<10){
			$("#TimetoD_con #m").html('&nbsp;'+'0'+m+"<span>m</span>");		
		}
		else{
			$("#TimetoD_con #m").html('&nbsp;'+m+"<span>m</span>");		
		}
		
		var s=Math.floor(fn%604800%86400%3600%60);
		if(s<10){
			$("#TimetoD_con #s").html('&nbsp;'+'0'+s+"<span>s</span>");		
		}
		else{
			$("#TimetoD_con #s").html('&nbsp;'+s+"<span>s</span>");		
		}		
	}		
}
function urlturn(){
	location.href='';
}
function timetodeleteserver(){
	var xmlhttp=$.ajax({
			url:PROJECTDIR+'home/timetodelete_website/timetodeleteA.php',
			type:'GET',
			datatype:'text',
			success:function(){
				result=xmlhttp.responseText;
				if(result=='Byebye'||result=='Byebyf'){
					$('#TimetoD_dl1').css('display','none');
					$('#TimetoD_dl2').css('display','block');
					setTimeout('urlturn()',2500);					
				}
			        },
		});
}
$(function(){
	setInterval('timetodeleteclient()',500);		
})