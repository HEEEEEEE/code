/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showown(){
	/*set the data
	 * 
	 */
	 $('#LoadiN_tip').css({display:'block'});	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/index/idea/show/idea.php?action=idea_showown',
	 	type:'GET',
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideashowown(result);
			IdeA_customown();				
	 	},
	 });

}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideashowown(result){
	//idea	
	$('#CenteR_maincentercon').html(result);
						
	$('#LoadiN_tip').css({display:'none'});	
}
//echo the item:action
$(function(){
	IdeA_showown();	
})
/*echo the item echo the item echo the item echo the item echo the item*/



function IdeA_preconhide(){
	/*mouse*/		
	$('.idea_own2-center-pre').mouseleave(function(){
		$('.idea_own2-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_own2-center-pre').click(function(){
		$('.idea_own2-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_own2-center-pre').css({display:'none'});			
	});
}
function IdeA_customownprelans(){
	//idea lans pre con show	
	$('.idea_own2-toollansshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea lans pre con show		
		var id='#IdeA_own_center_pre'+ideaid;
			var lanid='#IdeA_own2_center_pre_1'+ideaid;			
					$(id).css('display','block');
						$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea lans pre con hide
	IdeA_preconhide();	
}

function IdeA_customownpreimage(){
	//idea image pre con show	
	$('.idea_own2-toolimageshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea image pre con show
		 var imgid='#IdeA_own2_pre_image'+ideaid;
		 var imgurl=$(imgid).attr('src');			 
		 var framew=360;
		 var frameh=360;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 var id='#IdeA_own2_center_pre'+ideaid;
		 $(id).css('display','block');
		 var imageid='#IdeA_own2_center_pre_2'+ideaid;					
		 $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea image pre con hide
	IdeA_preconhide();
			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customown(){					
	/*preprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepre
	 *  
	 */
	 /*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan*/ 
	
	 /*conconconconconconconconconconconconconconconconconconconconconconconcon*/
	IdeA_customownprelans();	
	 /*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan*/		


	 /*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimage*/
	
	 /*conconconconconconconconconconconconconconconconconconconconconconconcon*/
	IdeA_customownpreimage();	 	
	 /*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimage*/
	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_own2-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_own2_center_enter"+ideaid;			
		$(id).css({display:'block'});							
	});	  
	$('.idea_own2-center-enter').mouseleave(function(){		
		$('.idea_own2-center-enter').css({display:'none'});					
	});
	
	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea_own2-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_own2-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea_own2-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_own2-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/



























