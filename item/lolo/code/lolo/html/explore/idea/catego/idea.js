/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showcatego(){
	/*set the data
	 * 
	 */
	 var explore=$('#CategorY_leafcon1').attr('data-search');
	 
	 $('#LoadiN_tip').css('display','block');	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/explore/idea/catego/idea.php?action=idea_showcatego&explore='+explore,
	 	type:'GET',
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideashowcatego(result);
			IdeA_customcatego();				
	 	},
	 });

}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideashowcatego(result){
	/*IDEA*/
	//search

	//idea
		//basic	
		$('#CategorY_centercon').html(result);
		//style
		var frameW=$('#CategorY_centercon').width();
		var ideaMargin=(frameW-3*325)/2;
		$(".idea_catego").css({marginLeft:ideaMargin+'px',marginBottom:ideaMargin+'px'});
		$(".idea_catego:nth-child(3n+1)").css({marginLeft:0});	
						
	$('#LoadiN_tip').css('display','none');	
}
//echo the item:action
$(function(){
	IdeA_showcatego();		
})
/*echo the item echo the item echo the item echo the item echo the item*/



function IdeA_preconhidecatego(){
	/*mouse*/		
	$('.idea_catego-center-pre').mouseleave(function(){
		$('.idea_catego-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_catego-center-pre').click(function(){
		$('.idea_catego-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_catego-center-pre').css({display:'none'});			
	});
}
function IdeA_customcategoprelanscatego(){
	//idea lans pre con show	
	$('.idea_catego-toollansshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea lans pre con show		
		var id='#IdeA_catego_center_pre'+ideaid;
			var lanid='#IdeA_catego_center_pre_1'+ideaid;			
					$(id).css('display','block');
						$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea lans pre con hide
	IdeA_preconhidecatego();	
}

function IdeA_customcategopreimagecatego(){
	//idea image pre con show	
	$('.idea_catego-toolimageshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea image pre con show
		 var imgid='#IdeA_catego_pre_image'+ideaid;
		 var imgurl=$(imgid).attr('src');			 
		 var framew=235;
		 var frameh=235;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 var id='#IdeA_catego_center_pre'+ideaid;
		 $(id).css('display','block');
		 var imageid='#IdeA_catego_center_pre_2'+ideaid;					
		 $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea image pre con hide
	IdeA_preconhidecatego();			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customcatego(){		
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 /*lanlanlanlan*/ 	
	 /*con*/
		IdeA_customcategoprelanscatego();	
	 /*lanlanlanlan*/		


	 /*imageimageim*/	 	 	
	 /*con*/
		IdeA_customcategopreimagecatego();	 	
	 /*imageimageim*/
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_catego-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_catego_center_enter"+ideaid;			
		$(id).css({display:'block'});							
	});	  
	$('.idea_catego-center-enter').mouseleave(function(){		
		$('.idea_catego-center-enter').css({display:'none'});					
	});

	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea_catego-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_catego-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea_catego-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_catego-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	//processsate processsate processsate processsate processsate processsate		 	 
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/