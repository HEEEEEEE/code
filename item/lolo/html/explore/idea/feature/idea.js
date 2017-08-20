/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
var time1;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showfeature(){
	/*set the data
	 * 
	 */
	 var explore=$('#CategorY_leafcon1').attr('data-search');
	 
	 $('#LoadiN_tip').css('display','block');	 	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/explore/idea/feature/idea.php?action=idea_showfeature&explore='+explore,
	 	type:'GET',
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideashowfeature(result);
			IdeA_customfeature();							
	 	},
	 });

}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideashowfeature(result){
	//ideashowfeatureideashowfeatureideashowfeatureide
	//show	
	$('#FeaturE_centercon').html(result);					
	//hidden
	$('#LoadiN_tipcon').css('margin','5px auto 0');				
		$('#LoadiN_tipcon').css({top:0,left:0});		
			$('#LoadiN_tip').css('display','none');
	$('#LoadiN_tipstr').html('');	
}
//echo the item:action
$(function(){
	IdeA_showfeature();
	
	$('#FeaturE_topfra2').click(function(){
		var o=$(this).offset();
		var ptop=((o.top)+250)+'px';
		var pleft=((o.left)+195)+'px';
		$('#LoadiN_tipcon').css({margin:0});				
		$('#LoadiN_tipcon').css({top:ptop,left:pleft});			
						
	            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
	            $('#LoadiN_tipstr').html(tip);	
	            		
		IdeA_showfeature();
	});
//			
//	var time=1.25*60*1000;
//	time1=setInterval('IdeA_showfeature()',time);		
})
/*echo the item echo the item echo the item echo the item echo the item*/



function IdeA_preconhidefeature(){
	/*mouse*/		
	$('.idea_feature-center-pre').mouseleave(function(){
		$('.idea_feature-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_feature-center-pre').click(function(){
		$('.idea_feature-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_feature-center-pre').css({display:'none'});			
	});
}
function IdeA_customfeatureprelansfeature(){
	//idea lans pre con show	
	$('.idea_feature-toollansshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea lans pre con show		
		var id='#IdeA_feature_center_pre'+ideaid;
			var lanid='#IdeA_feature_center_pre_1'+ideaid;			
					$(id).css('display','block');
						$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea lans pre con hide
	IdeA_preconhidefeature();	
}

function IdeA_customfeaturepreimagefeature(){
	//idea image pre con show	
	$('.idea_feature-toolimageshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea image pre con show
		 var imgid='#IdeA_feature_pre_image'+ideaid;
		 var imgurl=$(imgid).attr('src');			 
		 var framew=360;
		 var frameh=360;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 var id='#IdeA_feature_center_pre'+ideaid;
		 $(id).css('display','block');
		 var imageid='#IdeA_feature_center_pre_2'+ideaid;					
		 $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea image pre con hide
	IdeA_preconhidefeature();			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customfeature(){		
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 /*lanlanlanlan*/ 	
	 /*con*/
		IdeA_customfeatureprelansfeature();	
	 /*lanlanlanlan*/		


	 /*imageimageim*/	 	 	
	 /*con*/
		IdeA_customfeaturepreimagefeature();	 	
	 /*imageimageim*/
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_feature-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_feature_center_enter"+ideaid;			
		$(id).css({display:'block'});							
	});	  
	$('.idea_feature-center-enter').mouseleave(function(){		
		$('.idea_feature-center-enter').css({display:'none'});					
	});

	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea_feature-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_feature-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea_feature-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_feature-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	//processsate processsate processsate processsate processsate processsate		 	 
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/