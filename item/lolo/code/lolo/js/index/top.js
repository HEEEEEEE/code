/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
$(function(){
	// the top basicf
	/*show the top basicf menu*/		
	$('#BasicF_dl1dt1span1').mouseover(function(){	
		var o=$('#BasicF_dl1dt1span1').offset();
			var ptop='35px';
				var pleft=((o.left)-160)+'px';			
		$('#ToP_basicdiv1menu').css({top:ptop,left:pleft,display:'block'});		
	});	
	/*hide the top basicf menu*/
	$('#ToP_basicdiv1menu').mouseleave(function(){
		$('#ToP_basicdiv1menu').css({display:'none'});				
	});
	$('html').mouseup(function(){
		$('#ToP_basicdiv1menu').css({display:'none'});				
	});		
})