/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_search(search){
	$('#SearcH_resultfra').css({display:'none'});
		
	/*set the data
	 * 
	 */
	var search=FilteR_ajaxspecialstr(search);
	 	 	 		 
	var w=$('#SearcH3').width();
	var w2=w/2;
	var o=$('#SearcH3').offset();
	var ptop=((o.top)+125)+'px';
	var pleft=((o.left)+w2)+'px';
	$('#LoadiN_tipcon').css({margin:0});				
	$('#LoadiN_tipcon').css({top:ptop,left:pleft});	
								
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr').html(tip);
	$('#LoadiN_tip').css('display','block');	  	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/explore/idea/search/idea.php?action=idea_search',
	 	type:'POST',
	 	data:'search='+search,
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideasearch(result);
			IdeA_customsearch();	                      		
	 	},
	 });
}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideasearch(result){	
	//idea
		//basic
		$('#SearcH_resultcon').html(result);
		//style
		var frameW=$('#SearcH_resultcon').width();
		var ideaMargin=(frameW-3*325)/2;
		$(".idea_search").css({marginLeft:ideaMargin+'px',marginBottom:ideaMargin+'px'});
		$(".idea_search:nth-child(3n+1)").css({marginLeft:0});
			
	var ideaN=$('.idea_search').length;
	if(ideaN<=0){
		$('#SearcH_resultfra').css({display:'block'});
	}
		
	$('#LoadiN_tipcon').css('margin','5px auto 0');				
		$('#LoadiN_tipcon').css({top:0,left:0});		
			$('#LoadiN_tip').css('display','none');						
}
//echo the item:action
$(function(){	
	/*Search Search Search Search SearchSearch Search Search Search Search
	  * 
	 ******/

	var search=$("#SearcH3_toolentercon").val();
	IdeA_search(search);
	//Search:outsideSearch:outsideSearch:outsideSearch:outsideSearch:outside
	
	
	
	//Search:insideSearch:insideSearch:insideSearch:insideSearch:insideSearc
            //Event:mouse
            $("#SearcH3_tooldocon").click(function(){
	            var search=$("#SearcH3_toolentercon").val();
		var result=/^\s{1,125}$/.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=125)){	
			IdeA_search(search);		  									
		}	            			
	});
	//Event:key
	$("#SearcH3_toolentercon").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$(this).val();
			var model=new RegExp(/^\s{1,125}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=125)){	
				IdeA_search(search);		 										
				return false;						
			}
			return false;								
		}	    
	});
	//Search:insideSearch:insideSearch:insideSearch:insideSearch:insideSearc				  										            					
})
/*echo the item echo the item echo the item echo the item echo the item*/



function IdeA_preconhidesearch(){
	/*mouse*/		
	$('.idea_search-center-pre').mouseleave(function(){
		$('.idea_catego-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_search-center-pre').click(function(){
		$('.idea_search-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_search-center-pre').css({display:'none'});			
	});
}
function IdeA_customprelanssearch(){
	//idea lans pre con show	
	$('.idea_search-toollansshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea lans pre con show		
		var id='#IdeA_search_center_pre'+ideaid;
			var lanid='#IdeA_search_center_pre_1'+ideaid;			
					$(id).css('display','block');
						$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea lans pre con hide
	IdeA_preconhidesearch();	
}

function IdeA_custompreimagesearch(){
	//idea image pre con show	
	$('.idea_search-toolimageshow img').mouseover(function(e){
		//basic	
		var id=e.target.id;
			var id='#'+id;
				var ideaid=$(id).attr('data-ideaid');
				
		//idea image pre con show
		 var imgid='#IdeA_search_pre_image'+ideaid;
		 var imgurl=$(imgid).attr('src');			 
		 var framew=235;
		 var frameh=235;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 var id='#IdeA_search_center_pre'+ideaid;
		 $(id).css('display','block');
		 var imageid='#IdeA_search_center_pre_2'+ideaid;					
		 $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	//idea image pre con hide
	IdeA_preconhidesearch();			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customsearch(){		
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 /*lanlanlanlan*/ 	
	 /*con*/
		IdeA_customprelanssearch();	
	 /*lanlanlanlan*/		


	 /*imageimageim*/	 	 	
	 /*con*/
		IdeA_custompreimagesearch();	 	
	 /*imageimageim*/
	/*prepreprepreprepreprepreprepreprepreprpreprepreprepreprepreprepreprepreprepr
	*  
	 */
	 
	 
	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_search-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_search_center_enter"+ideaid;			
		$(id).css({display:'block'});							
	});	  
	$('.idea_search-center-enter').mouseleave(function(){		
		$('.idea_search-center-enter').css({display:'none'});					
	});

	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea_search-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_search-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea_search-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_search-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	//processsate processsate processsate processsate processsate processsate		 	 
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/


