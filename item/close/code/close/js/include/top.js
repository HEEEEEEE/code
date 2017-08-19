

/*Signed in:yes*/
$(function(){
	// the top basicf
	/*show the top basicf menu*/		
	$('#BasicF_img').click(function(){
		$(this).css('display','none');
		$('#BasicfnO_img').css('display','block');
		$('#ToP_basicmenu').css('display','block');		
	});	
	/*hide the top basicf menu*/
	$('#BasicfnO_img,html').mouseup(function(){
		$('#BasicfnO_img').css('display','none');
		$('#BasicF_img').css('display','block');
		$('#ToP_basicmenu').css('display','none');		
	});
	
	//Search in 3C
	/*Search in 3C display just one*/
	$("#ToP_search input").one("click",function(){
		$(this).val('');
	});	
})
/*Signed in:no*/
$(function(){
	$("#SigN_in").click(function(){
		$(this).attr('class','signin-click');
		$("#SigN_up").attr('class','signup');
		
		$("#LogiN_back,#LogiN").css('display','block');
		$("#SignuP_back,#SignuP,#SignuP_tips").css('display','none');		
	});
	$("#SigN_up").click(function(){
		$(this).attr('class','signup-click');
		$("#SigN_in").attr('class','signin');
		
		$("#SignuP_back,#SignuP,#SignuP_tips").css('display','block');
		$("#LogiN_back,#LogiN").css('display','none');
	});			
})






















