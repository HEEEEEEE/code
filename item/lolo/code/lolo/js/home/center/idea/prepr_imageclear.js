/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//function ShoW_preimageclearmenuajax(){
//        OperatE_preimageclearmenu();
//        	ActioN_preimageclearpost();			
//}
/*hide the menu:function*/
function IdeA_preimageclearmenuhide(){
	$('#MenU_preimageclear').css('display','none');
		
	$('.idea_own-center-pre').on('mouseleave',function(){
		$('.idea_own-center-pre').css({display:'none'});			
	});		
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_preimageclearmenu(){	
		/* custom the menucustom the menucustom the menucustom the menu
		  * 
		 */
		/*
		  *custom the menucustom the menucustom the menucustom the menu 
		 */
		 					 
		/*hide the idea create menu*/
		$('#MenU_preimageclearback,#MenU_preimageclearcon_can_con').click(function(){
			IdeA_preimageclearmenuhide();																					
		});	
}
//OperatE the menu:action
$(function(){
	OperatE_preimageclearmenu();
})

/*delete the idea:Function*/
function IdeA_preimageclearpost(){
	/*Set the data:*/
	/*
	 * 
	 */
	 var ideaid=$('#HiddeN_ideaid').val(); 
	 var ideaid=parseInt(ideaid);
	 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
 
	     var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	     $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/idea/prepr/imageclear.php?action=idea_preimageclear',
	     	type:'POST',
	     	data:'id='+ideaid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideapreimageclearpost(result);										     			
	     	},
	     });	
}
/*deal the result:Function*/
function ResulT_ideapreimageclearpost(result){
	if(result=='idea_preimageclearsuccess'){		
		//hide the con
		$('.idea_own-center-pre').css('display','none');

		// get the ideaid from hidden
		//basic 				
		var ideaid=$('#HiddeN_ideaid').val();	
				
		/*preconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustom*/
		/*basicbasicbasicbasicbasicbasicbasic*/
		//change pre tool tool to pre con tool 
		var id='#IdeA_own_toolimage'+ideaid;
		$(id).attr('title','ImagE+');
		
			$(id).removeClass('idea_own-toolimageshow');
			$(id).addClass('idea_own-toolimage');
			
				var imgid='#IdeA_own_toolimagecon'+ideaid;
				var imgsrc=ROOTDIR+'include/part/idea/show/data/image/imageadd.png';
				$(imgid).attr("src",imgsrc);
				
					$(imgid).off('mouseover');
					$(imgid).on('click',function(e){
						//basic	
						var id=e.target.id;
							var id='#'+id;
								var ideaid=$(id).attr('data-ideaid');
								
						//idea image pre tool show 		
						var id='#IdeA_own'+ideaid;
						var o=$(id).offset();
						var ptop=(o.top)+'px';
						var pleft=(o.left)+'px';			
						$('#MenU_ideapreimagein').css({top:ptop,left:pleft});			
						$('#MenU_ideapreimage').css({display:'block'});
						$('#PrE_imageupload').css({display:'block'});
						$('#PrE_imageuploadbrowser').css('display','none');
												
						/*give the ideaid to hiddengive the ideaid to hidden*/
						$('#HiddeN_ideaid').val(ideaid);						
					});	
		
		/*conconconconconconconconconconconconconconconconconconconconconconconcon*/

		//hide clear menu
		IdeA_preimageclearmenuhide();
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);							
	}else{
		$('#UnknowerroR').css('display','block');
	}	
}

/*delete the idea:Action*/
$(function(){
	$('#MenU_preimageclearbom_don').click(function(){
		IdeA_preimageclearpost();																					
	});
})
//function ActioN_preimageclearpost(){	
//	$('#MenU_preimageclearbom_don').click(function(){
//		IdeA_preimageclearpost();																					
//	});		
//}