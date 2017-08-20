/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showown(){
	/*set the data
	 * 
	 */
	 var mine=$('#HiddeN_mineclose').val();
	 
	 $('#LoadiN_tip').css('display','block');	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/mE/idea/show/own/show.php?action=idea_showown&mine='+mine,
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
	/*IDEAIDEAIDEAIDEAIDEAIDEAIDEAIDEAIDEAIDEAIDEAIDEA
	 * 
	 * */
	//search
	$('#ProjectclosE_search').css('display','block');
		//idea	
		$('#IdeA').html(result);
							
	$('#LoadiN_tip').css('display','none');	
}
//echo the item:action
$(function(){
	var num=$('#HiddeN_mineclosenum').val();
	var num=parseInt(num,10);
	if(num > 0){			
		IdeA_showown();						
	}else{		
		IdeA_showrecommend();				
	}	
})
/*echo the item echo the item echo the item echo the item echo the item*/




function IdeA_preconhide(){
	/*mouse*/		
	$('.idea_own-center-pre').mouseleave(function(){
		$('.idea_own-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_own-center-pre').click(function(){
		$('.idea_own-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_own-center-pre').css({display:'none'});			
	});
}
function IdeA_customownprelans(){
	//idea lans pre con show	
	$('.idea_own-toollansshow img').mouseover(function(){
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea lans pre con show		
		var id='#IdeA_own_center_pre'+ideaid;
			var lanid='#IdeA_own_center_pre_1'+ideaid;			
		       $(id).css('display','block');
		$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	
	//idea lans pre con hide
	IdeA_preconhide();
	
	//idea lans pre con change
	$('.idea_own-pre-lanschange').click(function(){		
		/*idea lans pre tool showidea lans pre tool showidea lans pre tool show*/
		//basic
		var ideaid=$(this).attr('data-ideaid');

		/************************************************************************/				
			//give the pre con to pre tool
			var preconid='#IdeA_own_pre_lans'+ideaid;		
			var prelans=$(preconid).text();
					
			$('#PrelanboX').text(prelans);
			$('#PrelanboX').removeClass('prelanholder');
			$('#PrelanboX').css('color','rgba(255,255,255,1)');			
	                        //count out the enterable num
			var tex=prelans.length;
			var tex=125 - tex;
			$('#PrelaN_enteralbenum').text(tex);
		/************************************************************************/		
												
		//show idea lans pre tool 
		var id='#IdeA_own'+ideaid;
			var o=$(id).offset();
				var ptop=(o.top)+'px';
					var pleft=(o.left)+'px';			
		$('#MenU_ideaprelanin').css({top:ptop,left:pleft});			
		$('#MenU_ideaprelan').css({display:'block'});				                        
				
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);						
	});	
}



function IdeA_customownpreimage(){
	//idea image pre con show	
	$('.idea_own-toolimageshow img').mouseover(function(){
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea image pre con show
		 var imgid='#IdeA_own_pre_image'+ideaid;
		 var imgurl=$(imgid).attr('src');			 
		 var framew=360;
		 var frameh=360;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 var id='#IdeA_own_center_pre'+ideaid;
		 $(id).css('display','block');
		 var imageid='#IdeA_own_center_pre_2'+ideaid;					
		 $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	
	//idea image pre con hide
	IdeA_preconhide();
	
	//idea image pre con change
	$('.idea_own-pre-imagechange').click(function(){		
		/*idea image pre tool show*/
		//basic	
		var ideaid=$(this).attr('data-ideaid');
																
		//idea image pre tool show 		
		var id='#IdeA_own'+ideaid;
		var o=$(id).offset();
		var ptop=(o.top)+'px';
		var pleft=(o.left)+'px';			
		$('#MenU_ideapreimagein').css({top:ptop,left:pleft});			
		$('#MenU_ideapreimage').css({display:'block'});
		$('#PrE_imageupload').css({display:'block'});
		$('#PrE_imageuploadbrowser').css('display','none');
		
		//idea image pre con hide
		$('.idea_own-center-pre').css({display:'none'});
						
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);						
	});
	
	//idea image pre con clear menu show
	$('.idea_own-pre-imageclear').click(function(){
		$('.idea_own-center-pre').off('mouseleave');												

		//basic	
		var ideaid=$(this).attr('data-ideaid');
							
				var id='#IdeA_own'+ideaid;
			var o=$(id).offset();
		var ptop=((o.top)+70)+'px';
			var pleft=((o.left)+62.5)+'px';		
		               $('#MenU_preimageclearin').css({top:ptop,left:pleft});			
		$('#MenU_preimageclear').css({display:'block'});																
	});			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customown(){	 		
	/*
	* more menumore menumore menumore menumore menumore menumore menumore menumore
	 */
	 //showshowshowshowshow
	$('.idea_own-right-more1').click(function(){
		//more
		var o=$(this).offset();
		var ptop=((o.top)+45)+'px';
		var pleft=((o.left)-40)+'px';
		$('#MenU_ideatoolmore').css({top:ptop,left:pleft,display:'block'});
		
		/*
		*more:deletedeletedeletedeletedeletedeletedeletedeletedeletedelete 
		 */
		var ideaid=$(this).attr('data-ideaid');
		$('#MenU_ideatool_hidideaid').val(ideaid);
		
		var processstateid='#IdeA_own_basicinfo_processstate'+ideaid;
		var processstate=$(processstateid).val();
		
		var taglength=$('.menu_ideatoolmore-kind-1add').length;
		if((processstate!='2')&&(taglength<=0)){
			var html="<dt class='menu_ideatoolmore-kind-1 menu_ideatoolmore-kind-1add'><span id='MenU_ideatoolmore_tag' class='menu_ideatoolmore-kind-1-1'>标签</span></dt>";
			$('.menu_ideatoolmore-kind').prepend(html);
		            //tag		
			$('#MenU_ideatoolmore_tag').click(function(){
				$('#MenU_ideatoolmore').css({display:'none'});
					
						var ideaid=$('#MenU_ideatool_hidideaid').val();						
					var id='#IdeA_own_basicinfo_tag'+ideaid;
				var tag=$(id).val();
				$('#TaG_entercon').val(tag);
				
				var id='#IdeA_own'+ideaid;				
				var o=$(id).offset();
				var ptop=(o.top)+'px';
				var pleft=(o.left)+'px';			
					$('#MenU_ideatagin').css({top:ptop,left:pleft});			
						$('#MenU_ideatag').css({display:'block'});						
			});			
		}else if((processstate=='2')&&(taglength>0)){
			$('.menu_ideatoolmore-kind-1add').remove();
		}
		//delete		
		$('#MenU_ideatoolmore_delete').click(function(){
			$('#MenU_ideatoolmore').css({display:'none'});
				
					var ideaid=$('#MenU_ideatool_hidideaid').val();						
				var id='#IdeA_own'+ideaid;
			var o=$(id).offset();
			var ptop=(o.top)+'px';
			var pleft=(o.left)+'px';			
				$('#MenU_ideadelin').css({top:ptop,left:pleft});			
					$('#MenU_ideadel').css({display:'block'});						
		});



	});
	 //hidehidehidehidehide		
	$('#MenU_ideatoolmore').mouseleave(function(){
		$('#MenU_ideatoolmore').css({display:'none'});
	});			
	$('html').mouseup(function(){
		$('#MenU_ideatoolmore').css({display:'none'});
	});

 	

	
	/*
	*preprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepre  
	 */
	 
	 /*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 
	 //tooltooltooltooltooltool
	 //idea lans pre tool show	
	$('.idea_own-toollans img').click(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea lans pre tool show 		
		var id='#IdeA_own'+ideaid;
		var o=$(id).offset();
		var ptop=(o.top)+'px';
		var pleft=(o.left)+'px';			
		$('#MenU_ideaprelanin').css({top:ptop,left:pleft});			
		$('#MenU_ideaprelan').css({display:'block'});
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);					
	});
	
	//conconconconconconconconco
	IdeA_customownprelans();	
	/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 



	 /*imageimageimageimageimageimageimageimageimageimageimageimage*/	 	 
	 //tooltooltooltooltooltooltooltoolto
	 //idea image pre tool show	
	$('.idea_own-toolimage img').click(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea image pre tool show 		
		var id='#IdeA_own'+ideaid;
		var o=$(id).offset();
		var ptop=(o.top)+'px';
		var pleft=(o.left)+'px';			
		$('#MenU_ideapreimagein').css({top:ptop,left:pleft});			
		$('#MenU_ideapreimage').css({display:'block'});
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);					
	});
	
	 //conconconconconconconconconconconco
	IdeA_customownpreimage();	 	
	  /*imageimageimageimageimageimageimageimageimageimageimageimage*/



	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_own-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_own_center_enter"+ideaid;			
		$(id).css({display:'block'});
		
		/*give the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);							
	});	  
	$('.idea_own-center-enter').mouseleave(function(){		
		$('.idea_own-center-enter').css({display:'none'});					
	});
		  
	 //enter the idea enter the idea enter the idea enter the idea enter the idea

	//process the ideaprocess the ideaprocess the ideaprocess the ideaprocess the
	//mouse  
	$('.idea_own-center-processcon').mouseover(function(){	
		            var url=ROOTDIR+'include/part/idea/show/data/image/process.png';	
			$(this).attr('src',url);				
	});	  
	$('.idea_own-center-processcon').mouseleave(function(){		
		            var url=ROOTDIR+'include/part/idea/show/data/anima/process.gif';	
			$(this).attr('src',url);						
	});		  
	 //process the ideaprocess the ideaprocess the ideaprocess the ideaprocess the


	//processsate processsate processsate processsate processsate processsate
	//mouse  	
	$('.idea_own-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_own-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	//processsate processsate processsate processsate processsate processsate		
}




















