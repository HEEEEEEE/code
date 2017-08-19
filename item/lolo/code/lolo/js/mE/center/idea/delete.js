/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//function ShoW_deletemenuajax(){
//        OperatE_deletemenu();
//        	ActioN_ideadeletepost();		
//}
/*hide the menu:function*/
function IdeA_deletemenuhide(){
		$('#MenU_ideadeltop').css('display','none');
	$('#MenU_ideadel').css('display','none');	
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_deletemenu(){	
		//custom the menucustom the menucustom the menucustom the menu
		//custom the menucustom the menucustom the menucustom the menu					 
		/*hide the idea create menu*/
		$('#MenU_ideadelback,#MenU_ideadelcon_can_con').click(function(){
			IdeA_deletemenuhide();																					
		});	
}
//OperatE the menu:action
$(function(){
        OperatE_deletemenu();
})

/*delete the idea:Function*/
function IdeA_deletepost(){
	/*Set the data:*/
	/*
	 * 
	 */
	 var ideaid=$('#MenU_ideatool_hidideaid').val(); 
	 var ideaid=parseInt(ideaid); 			
		/*AJAX*/
		     /*Start:create a AJAX object*/	
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/idea/delete/idea.php?action=idea_delete',
	     	type:'POST',
	     	data:'id='+ideaid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideadeletepost(result);										     			
	     	},
	     });
}

/*deal the result:Function*/
function ResulT_ideadeletepost(result){
	if(result=='idea_deletesuccess'){		
		//remove deleted idea
		var ideaid=$('#MenU_ideatool_hidideaid').val();							
		var id='#IdeA_own'+ideaid;
		$(id).remove();

		var numall=$('#mE_minecon1num').text();
		var numall=numall-1;			
		if(numall>0){
			$('#mE_minecon1num').text(numall);
			$('#mE_minecon1num').attr('title',numall);																	
		}else{
			IdeA_showrecommend();			
		}

	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",500);
	     	
		//hide delete menu
		IdeA_deletemenuhide();	     											
	}else{
		$('#UnknowerroR').css('display','block');
	}
}

/*delete the idea:Action*/
$(function(){
	$('#MenU_ideadelbom_don').click(function(){		
		IdeA_deletepost();																					
	});
})
//function ActioN_ideadeletepost(){	
//	$('#MenU_ideadelbom_don').click(function(){
//		IdeA_deletepost();																					
//	});		
//}

























