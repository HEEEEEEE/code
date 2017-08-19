/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showrecommend(){
	/*set the data
	 * 
	 */
	 $('#LoadiN_tip').css('display','block');	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'include/part/idea/show/html/public.php?action=idea_showrecommend',
	 	type:'GET',
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideashowrecommend(result);
	 		
			//custom the recommend
			IdeA_customrecommend();		
	 	},
	 });
}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideashowrecommend(result){	
	/*IDEA*/
	//search
	$('#ProjectclosE_search').css('display','none');
		$('#IdeA_showcontop').css('display','none');
	//idea	
	$('#IdeA').html(result);

	$('#LoadiN_tipcon').css('margin','5px auto 0');				
		$('#LoadiN_tipcon').css({top:0,left:0});		
			$('#LoadiN_tip').css('display','none');
					$('#LoadiN_tipstr').html('');			
}
/*echo the item echo the item echo the item echo the item echo the item*/



/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customrecommend(){	
	//ExplorE more...ExplorE more...ExplorE more...ExplorE more...ExplorE more...
	$('#RecommenD_content_topdl1dt1_explore').click(function(){
		window.location.href=ROOTDIR+'explore.php';
	});



	//createcreatecreatecreatecreatecreatecreatecreatecreatecreatecreatecreate	
	$('#RecommenD_create_dl2dt1span1').click(function(){
		var exist=$('#MenU_ideacre div').length;
		if(exist>0){
			$('#MenU_ideacreate').css('display','block');			
		}
		else{			
			IdeA_createmenushow();			
		}
	});
	
	
		
/*ideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaidea
 * 
 */


	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/							
		$(".idea[data-ideaid="+ideaid+"]"+" .idea-center-enter").css({display:'block'});							
	});	  
	$('.idea-center-enter').mouseleave(function(){		
		$('.idea-center-enter').css({display:'none'});					
	});

	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  


	
/*ideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaideaidea
 * 
 */	 
	 	 	 
	 //chang another onechang another onechang another onechang another onechang another onechang another one
	$('#RecommenD_content_anotherground').click(function(){		
		var o=$(this).offset();
		var ptop=((o.top)-125)+'px';
		var pleft=(o.left)+'px';
		$('#LoadiN_tipcon').css({margin:0});				
		$('#LoadiN_tipcon').css({top:ptop,left:pleft});			
						
	            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
	            $('#LoadiN_tipstr').html(tip);	 	     					
		IdeA_showrecommend();
	});		 			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/



















