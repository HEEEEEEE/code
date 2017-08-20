/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



$(function(){
	/*Custom the included title Custom the included title Custom the included title
	 */
	var title=$('#BasicF_username').attr('title');
	var title='OCLOCLO '+title+" > Filebox";
	$('title').text(title);
		 		
	/*Custom the included top's cssCustom the included top's cssCustom the included top's css
	 * 
	 * 
	 * 
	 */
	 /*Custom the top*/					
})



$(function(){
	/*Custom FileboX ProjectstarT
	 */
	//basic
	$('#FileboX_filemark1_l1,#FileboX_filemark1_l2').css('opacity','1');
	
	
	
	//Custom select:mouse
	$(".FileboX_filemark_l2").mouseover(function(){		
		$(this).css('opacity','1');
				
	});
	
	$("#FileboX_filemark2_l2,#FileboX_filemark3_l2,#FileboX_filemark4_l2,#FileboX_filemark5_l2").on('mouseout',function(){
		$(this).css('opacity','0.5');		
	});	

		
				 
	//Custom select:click
	$(".FileboX_filemark_l2").click(function(){		
		var parentid=$(this).attr('data-parentid');
		var id1='#'+parentid+' .FileboX_filemark_l1';
		var id2='#'+parentid+' .FileboX_filemark_l2';
		$(id1).css('opacity','1');
		$(id2).css('opacity','1');
		$(this).off('mouseout');
		
	});
	$(".FileboX_filemark_l2").mouseup(function(){
		$('.FileboX_filemark_l1').css('opacity','0.5');
		$('.FileboX_filemark_l2').css('opacity','0.5');	
		
			$(".FileboX_filemark_l2").on('mouseout',function(){
				$(this).css('opacity','0.5');		
			});			
	});	

		//Custom select:click_gif
		$("#FileboX_filemark3_l2").click(function(){	
			var src=PROJECTDIR+'data/filebox/image/box/mark/gif/gif.gif';		
			$('#FileboX_filemark3_l2 img').attr('src',src);			
		});			
		$("#FileboX_filemark1_l2,#FileboX_filemark2_l2,#FileboX_filemark4_l2,#FileboX_filemark5_l2").click(function(){
			var src=PROJECTDIR+'data/filebox/image/box/mark/gif/gif.png';		
			$('#FileboX_filemark3_l2 img').attr('src',src);			
		});	








					
})