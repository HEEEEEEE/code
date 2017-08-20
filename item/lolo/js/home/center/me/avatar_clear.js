/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*hide the menu:function*/
function IdeA_avatarclearmenuhide(){
	$('#MenU_avatarclear').css('display','none');		
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_avatarclearmenu(){	
		/* custom the menucustom the menucustom the menucustom the menu
		  * 
		 */
		/*
		  *custom the menucustom the menucustom the menucustom the menu 
		 */
		 					 
		/*hide the idea create menu*/
		$('#MenU_avatarclearback,#MenU_avatarclearcon_can_con').click(function(){
			IdeA_avatarclearmenuhide();																					
		});	
}
//OperatE the menu:action
$(function(){
        OperatE_avatarclearmenu();
})

/*delete the idea:Function*/
function AvataR_clearpost(){
	/*Set the data:*/
	/*
	 * 
	 */			
	/*AJAX*/
	     /*Start:create a AJAX object*/
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	     	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/me/avatarclear.php?action=user_avatarclear',
	     	type:'GET',
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_avatarclearpost(result);										     			
	     	},
	     });	
}
/*deal the result:Function*/
function ResulT_avatarclearpost(result){
	if(result=='user_avatarclearsuccess'){		
		$('#ForM_uploadavatarchange').css('display','none');
		var avataraddurl=ROOTDIR+'data/image/home/center/avatar_add.png';
		$('#HomeheaD_avataradd').attr('src',avataraddurl);
		$('#ForM_uploadavatar').css('display','block');	
		IdeA_avatarclearmenuhide();
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);				
	}else{
		$('#UnknowerroR').css('display','block');
	}	
}

/*delete the idea:Action*/
$(function(){
	$('#MenU_avatarclearbom_don').click(function(){
		AvataR_clearpost();																					
	});
})