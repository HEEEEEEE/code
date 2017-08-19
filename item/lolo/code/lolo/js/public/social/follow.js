/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
$(function(){
	//follow or unfollow
		//mouse
		$('.loloerfollow').mouseover(function(){
			$('.following').css({display:'none'});
			$('.social-follow').css({display:'block'});
		});
		$('.loloerfollow').mouseout(function(){
			$('.social-follow').css({display:'none'});
			$('.following').css({display:'block'});
		});
	
	//follow 
		//post
		$('#FolloW').click(function(){
			//followinghid
			var followinghid=$('#HiddeN_hid').val();			
			SociaL_followpost(followinghid);
		});
	//unfollow 
		//post
		$('#UnfolloW').click(function(){
			SociaL_unfollowpost();
		});								

})

function SociaL_followpost(followinghid){
	/*Set the data:*/	 
			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
					
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/social/follow.php?action=social_follow',
	     	type:'POST',
	     	data:'followinghid='+followinghid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_socialfollowpost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_socialfollowpost(result){
	var match=/social_followsuccess/i.test(result);
	if(match==true){
		$("#SociaL_follow").remove();		
//	  	var html="<div style='display:none;' class='social-follow' id='SociaL_unfollow'><span class='follow' id='UnfolloW'>unfollow-</span><span class='followfra'></span></div>";	
//		$("#mE_avatarconhaveconcon").after(html);		
//		//unfollow 
//			//post
//		$('#UnfolloW').click(function(){
//			SociaL_unfollowpost();
//		});
										
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);
	            setInterval("location.reload()",1250);		
	}else{
		$('#UnknowerroR').css('display','block');		
	}
}



function SociaL_unfollowpost(){
	/*Set the data:*/	 
	 //iid
	 var followinghid=$('#HiddeN_hid').val();			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
					
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/social/unfollow.php?action=social_unfollow',
	     	type:'POST',
	     	data:'followinghid='+followinghid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_socialunfollowpost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_socialunfollowpost(result){
	var match=/social_unfollowsuccess/i.test(result);
	if(match==true){
		$("#SociaL_unfollow").remove();		
//	  	var html="<div style='display:none;' class='social-follow' id='SociaL_follow'><span class='follow' id='FolloW'>follow+</span><span class='followfra'></span></div>";	
//		$("#mE_avatarconhaveconcon").after(html);		
//		//unfollow 
//			//post
//		$('#FolloW').click(function(){
//			SociaL_followpost();
//		});
										
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);
	            setInterval("location.reload();",1250);		
	}else{
		$('#UnknowerroR').css('display','block');		
	}
}



