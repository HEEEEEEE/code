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
		//hide con
		$('#DisassemblE2_imagepre,#DisassemblE2_imageprebrowser').css('display','none');

		//show add			
		 $('#DisassemblE2_imagepreadd').css('display','block');
		 
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













