/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function User_Recommend(){
	/*set the data
	 * 
	 */
	//tips
	var w=$('#User_Recommend').width();
	var o=$('#User_Recommend').offset();
	var ptop=((o.top)+125)+'px';
	var pleft=((o.left)+w/2)+'px';				
	$('#LoadiN_tip1').css({top:ptop,left:pleft});	
									
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr1').html(tip);
	$('#LoadiN_tip1').css('display','block'); 	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'include/part/mime/html/recommend.php?action=user_recommend',
	 	type:'GET',
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_UserRecommend(result);
			User_CustomRecommend();
	 	},
	 });
}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_UserRecommend(result){	
	//user recommend
	$('#User_Recommend').html(result);	
	//hidden tips
	$('#LoadiN_tip1').css({display:'none',top:0,left:0});	
	$('#LoadiN_tipstr1').html('');			
}
/*echo the item echo the item echo the item echo the item echo the item*/

$(function(){
	User_Recommend();
})

/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function User_CustomRecommend(){	
	//followfollowfollowfollowfollowfollowfollowfollowfollowfollowfollow
	$('.user-follow').click(function(){		
		var followinghid=$(this).attr('data-hid');
		SociaL_followpost(followinghid);				
	}); 			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/



















