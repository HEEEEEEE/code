/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



$(function(){
	/*Custom the included title Custom the included title Custom the included title
	 */
	var username=$('#BasicF_username').attr('title');
	var closename=$('#BasicC_name').attr('title');
	var title='OCLOCLO '+username+' > Close:'+closename+' > Album';
	$('title').text(title);
		 		
	/*Custom the included top's cssCustom the included top's cssCustom the included top's css
	 * 
	 * 
	 * 
	 */
	 /*Custom the top*/					
})



$(function(){
	/*Custom AlbuM ProjectstarT
	 */
	//basic
	$('#AlbuM_filemark1_l1,#AlbuM_filemark1_l2').css('opacity','1');
	
	
	
	//Custom select:mouse
	$(".AlbuM_filemark_l2").mouseover(function(){		
		$(this).css('opacity','1');
				
	});
	
	$("#AlbuM_filemark2_l2,#AlbuM_filemark3_l2,#AlbuM_filemark4_l2,#AlbuM_filemark5_l2").on('mouseout',function(){
		$(this).css('opacity','0.5');		
	});	

		
				 
	//Custom select:click
	$(".AlbuM_filemark_l2").click(function(){		
		var parentid=$(this).attr('data-parentid');
		var id1='#'+parentid+' .AlbuM_filemark_l1';
		var id2='#'+parentid+' .AlbuM_filemark_l2';
		$(id1).css('opacity','1');
		$(id2).css('opacity','1');
		$(this).off('mouseout');
		
	});
	$(".AlbuM_filemark_l2").mouseup(function(){
		$('.AlbuM_filemark_l1').css('opacity','0.5');
		$('.AlbuM_filemark_l2').css('opacity','0.5');	
		
			$(".AlbuM_filemark_l2").on('mouseout',function(){
				$(this).css('opacity','0.5');		
			});			
	});	

		//Custom select:click_gif
		$("#AlbuM_filemark3_l2").click(function(){	
			var src=PROJECTDIR+'data/close/image/album/album/mark/gif/gif.gif';		
			$('#AlbuM_filemark3_l2 img').attr('src',src);			
		});			
		$("#AlbuM_filemark1_l2,#AlbuM_filemark2_l2,#AlbuM_filemark4_l2,#AlbuM_filemark5_l2").click(function(){
			var src=PROJECTDIR+'data/close/image/album/album/mark/gif/gif.png';		
			$('#AlbuM_filemark3_l2 img').attr('src',src);			
		});						
})

/*load a new kind of album
 * 
 **************************************************************************************************
 */
//load a new kind of album:function
 function show_anewalbum(typ){
 	if(typ==1){
 		typeu='pictu';	
 	}
 	else if(typ==2){
 		typeu='audio';		
 	}
 	else if(typ==3){
 		typeu='anima'; 		
 	} 
  	else if(typ==4){
 		typeu='video';		
 	}
 	else if(typ==5){
 		typeu='hlink';		
 	}
 	else{
 		typeu='pictu';		
 	}
 	//cid
 	var cid=$('#HiddeN_projectcid').val();		
 	xmlhttp=$.ajax({
 		url:PROJECTDIR+'close/albui/'+typeu+'/show.php?show='+typ+'&closeid='+cid,
 		type:'GET',
 		dataType:'html',
 		success:function(){
 			result=xmlhttp.responseText;
 			result_shownewalbum(result);
 		},
 		
 	});	
 }
//Function:show the ajaxresult
function result_shownewalbum(result){
	$('#AlbuM_con').html(result);
	$("#AlbuM").addClass('_mCS_1');
}
$(function(){
	
})
//Action:show the ajaxresult
//load a new kind of album:action
$(function(){
	$(".AlbuM_filemark_l2").click(function(){		
		var typ=$(this).attr('data-type');
		var typ=parseInt(typ,10);
		show_anewalbum(typ);		
	});	
})

