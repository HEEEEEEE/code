/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*hide the menu:function*/
function IdeA_tagmenuhide(){
	$('#MenU_ideatag').css('display','none');	
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_tagmenu(){	
		//custom the menucustom the menucustom the menucustom the menu
		//custom the menucustom the menucustom the menucustom the menu					 
		/*hide the idea create menu*/
		$('#MenU_ideatagback,#TaG_cancelcon').click(function(){
			IdeA_tagmenuhide();																					
		});	
}
//OperatE the menu:action
$(function(){
        OperatE_tagmenu();
})

/*tag the idea:Function*/
function IdeA_tagpost(){
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data:Set t*/
	/*
	 * 
	 */
	 var ideaid=$('#MenU_ideatool_hidideaid').val();
	 var tag=$('#TaG_entercon').val();
	 var tag=FilteR_ajaxspecialstr(tag) 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/idea/tag/idea.php?action=idea_tag',
	     	type:'POST',
	     	data:'id='+ideaid+'&tag='+tag,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideatagpost(result,ideaid,tag);										     			
	     	},
	     });
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data:Set t*/
}
/*deal the result:Function*/
function ResulT_ideatagpost(result,ideaid,tag){
	if(result=='idea_tagsuccess'){		
		var id='#IdeA_own_basicinfo_tag'+ideaid;
		$(id).val(tag);
						
		IdeA_tagmenuhide();
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);						
	}else{
		$('#UnknowerroR').css('display','block');
	}
}

/*tag the idea:Action*/
$(function(){
	$('#TaG_donecon').click(function(){		
		IdeA_tagpost();																					
	});
})

























