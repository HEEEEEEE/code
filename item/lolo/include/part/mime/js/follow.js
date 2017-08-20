/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/




$(function(){
/*echo the item echo the item echo the item echo the item echo the item*/	
	Mime();
})



/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function Mime(){
	//tips										
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr').html(tip);
	$('#LoadiN_tip').css('display','block'); 
	//data
	var hid=$('#HiddeN_hid').val();
	var mimeWhich=$('#HiddeN_MimeWhich').val();	 
	var xmlhttp=$.ajax({
		url:ROOTDIR+'include/part/mime/html/follow.php?action=mime',
		type:'POST',
		data:'hid='+hid+'&mimeWhich='+mimeWhich,
		datatype:'html',
		success:function(){
			var result=xmlhttp.responseText;
			ResulT_Mime(result,mimeWhich);
			Mime_Custom();
		},
	});
}



/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_Mime(result,mimeWhich){	
	//follow
	$('#IdeA').html(result);
	
	//style
	if(mimeWhich=='following'){
		var frameW=$('#ProjectclosE_close').width();
		if(frameW >= 3*250){
			var ideaMargin=(frameW-3*250)/2;
			$(".mime-following").width(250);
			$(".mime-following").css({marginLeft:ideaMargin+'px'});
			$(".mime-following:nth-child(3n+1)").css({marginLeft:0});
			
			var ideaCenter=(250-112)/2;			
		}else if(frameW >= 2*250){
			var ideaMargin=(frameW-2*250);
			$(".mime-following").width(250);
			$(".mime-following").css({marginLeft:ideaMargin+'px'});
			$(".mime-following:nth-child(2n+1)").css({marginLeft:0});			
		}else if(frameW >= 250){
			$(".mime-following").width(250);
			$(".mime-following").css({margin:'0 auto'});			
		}else{
			$(".mime-following").width(250);
			$(".mime-following").css({margin:'0 auto'});			
		}
		
		$(".mime-center").width(125);
	}
	
	//hidden tips
	$('#LoadiN_tip').css({display:'none'});	
	$('#LoadiN_tipstr').html('');			
}



/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function Mime_Custom(){
	//unfollow
		//mouse
		$('.mime-follow').mouseover(function(){
			//unfolow
			var followinghid=$(this).attr('data-hid');
			var following=".mime[data-hid="+followinghid+"]"+" .following";
			var unfollow=".mime[data-hid="+followinghid+"]"+" .unfollow";
			$(following).css({display:'none'});
			$(unfollow).css({display:'block'});
			
			//follow
		});
		$('.mime-follow').mouseout(function(){
			//unfolow
			var followinghid=$(this).attr('data-hid');
			var following=".mime[data-hid="+followinghid+"]"+" .following";
			var unfollow=".mime[data-hid="+followinghid+"]"+" .unfollow";
			$(unfollow).css({display:'none'});			
			$(following).css({display:'block'});
			
			//follow
		});

	//unfollow 		
		//post
		$('.unfollow').click(function(){
			//followinghid
			var followinghid=$(this).attr('data-hid');			
			SociaL_Unfollow(followinghid);
		});
		
	//follow
		//post
		$('.startToFollow').click(function(){		
			var followinghid=$(this).attr('data-hid');
			SociaL_followpost(followinghid);				
		}); 						
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
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
/*unfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollow*/
function SociaL_Unfollow(followinghid){
	/*tipstipstipst*/
	var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	$('#LoadiN_tipstr').html(tip);	 	     
	$('#LoadiN_tip').css({display:'block'});	
	/*Set the data:*/	 					     
	xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/social/unfollow.php?action=social_unfollow',
	     	type:'POST',
	     	data:'followinghid='+followinghid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_SocialUnfollow(result,followinghid);										     			
	     	},
	});
}
/*deal the result:Function*/
function ResulT_SocialUnfollow(result,followinghid){
	var match=/social_unfollowsuccess/i.test(result);
	if(match==true){												
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);
	            setInterval('location.reload()',1250);			
	}else{
		$('#UnknowerroR').css('display','block');		
	}
}
/*unfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollowunfollow*/















