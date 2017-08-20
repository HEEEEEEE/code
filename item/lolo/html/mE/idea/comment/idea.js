/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//function ShoW_ideaenterajax(){
//	ActioN_ideaenter();			
//}
                        /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Scroll1(){
	$('#CommenT_concon').mCustomScrollbar(
		{
		 set_width:false,
  		         set_height:false,
  		 horizontalScroll:false,
  		 scrollInertia:500,
  		 scrollEasing:'easeInCubic',
  		 mouseWheel:true,
  		 autoDraggerLength:true,
  		 	
		 scrollButtons:
		 	{
		 enable:true,
		 scrollType:"continuous",
		 scrollSpeed:50,
		 scrollAmount:50
		 	},
		 advanced:
		 	{
                            updateOnBrowserResize:true,
                            updateOnContentResize:true,
                            autoExpandHorizontalScroll:false,
                            autoScrollOnFocus:true,  
                         	},
                         callbacks:{   onScrollStart:function(){                    	
                         }   } 	
		 }	
	);			
}
/*Custom the scroll:ACTION*/
$(function(){

})
function IdeA_commentmenu(){
	/*Set the data:*/
	/*
	 * 
	 */ 
	   var iid=$('#HiddeN_ideaid_GET').val();
	 	 var hid=$('#HiddeN_hid').val();		 	 	 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
                 var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'html/mE/idea/comment/idea.php?action=idea_comment',
	     	type:'POST',
	     	data:'iid='+iid+'&hid='+hid,
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideacommentmeu(result);
	     		
			Scroll1();	
	     					     		
			OperatE_ideacommentmenu();		     										     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_ideacommentmeu(result){	
	$('#MenU_ideaentercomment').html(result);
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});	
}
/*enter the idea:action*/
$(function(){		

})

function OperatE_ideacommentmenuwrite(){
            //click
	$('#CommenT_writesignyebox').click(function(){
		$('.comment-writesignyetop,.comment-writesignyebottom').css('display','block');						
		$('#CommenT_writesignyebox').css({color:'rgba(255,255,255,0.5)'});
						
	});
	
	//input
	Filter_PasteWords();
			
	//post
	$('#CommenT_writesignyedonecon').click(function(){
		//filter:empty blank more
			//basic
			var text=$('#CommenT_writesignyebox').text();
			var textl=text.length;
			var blank=/^\s{1,125}$/.test(text);
			if(textl>0 && textl<=125 && blank==false){
				IdeA_commentpost();				
			}
			if(blank==true){
				$('#CommenT_writesignye_enteralbetips').css('display','none');
				$('#CommenT_writesignye_enteralbenum').text('125');
				$('#CommenT_writesignyebox').text('');
				$('#CommenT_writesignyebox').addClass('comment-placeholder');
				$('#CommenT_writesignyebox').css('color','rgba(255,255,255,0.5)');
				$('#CommenT_writesignyebox').focus();		
			}
	});	
}
/*hide the menu:function*/
function IdeA_commentmenuhide(){
		$('#MenU_ideaentercomment').css('display','none');
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE:function
function OperatE_ideacommentmenu(){
	var boxlength=$('#CommenT_writesignyebox').length;
	if(boxlength > 0){
		OperatE_ideacommentmenuwrite();	
	}
			  	
	/*hide the menu*/
	$('#CommenT_mainrightclose').click(function(){
		IdeA_commentmenuhide();																					
	});
	  		
}
//OperatE:Action
$(function(){
	
})
/*post:Function*/
function IdeA_commentpost(){
	/*Set the data:*/

	 var data=$('#CommenT_writesignyebox').text(); 
	 //lans
	 var lans=FilteR_ajaxspecialstr(data);
	 
	 //iid
	 var iid=$('#HiddeN_enteriid').val();			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
					
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/idea/comment/idea.php?action=idea_comment',
	     	type:'POST',
	     	data:'lans='+lans+'&iid='+iid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideacommentpost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_ideacommentpost(result){
	var match=/idea_commentsuccess/i.test(result);
	if(match==true){						
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);
	            var url=$('#HiddeN_enterurlvalue').val(); 				            	     	
		location.href=url;			
			
	}else{
		$('#UnknowerroR').css('display','block');		
	}
}

/*post:Action*/
$(function(){
})
