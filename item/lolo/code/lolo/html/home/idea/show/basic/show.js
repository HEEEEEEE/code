/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_showown(){
	/*set the data
	 * 
	 */
	 $('#LoadiN_tip').css('display','block');
	 var ideanum=$('#HomestarT_closeallnum').text();
	 var followingnum=$('#HomestarT_closepubnum').text();	 		 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/home/idea/show/basic/show.php?action=idea_showown',
	 	type:'POST',
	 	data:'ideanum='+ideanum+'&followingnum='+followingnum,
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideashowown(result);
			    IdeA_customown();
				IdeA_customownnotmine();
	
	 	},
	 });

}
/*deal the resultdeal the resultdeal the resultdeal the resultdeal the */
//deal the result:function
function ResulT_ideashowown(result){	
	/*IDEA*/
	//search
	$('#ProjectclosE_search').css('display','block');
	//idea	
	$('#IdeA').html(result);
	
	notMineL=$('.idea_ownnotmine').length;
	mineL=$('.idea_own').length;
	if(mineL<=0){
		$('#IdeA_mineshoworhidden').remove();
		$('#IdeA_mine').remove();				
	}	
	if((notMineL<=0) && (mineL<=0)){
		IdeA_showrecommend();		
	}
	
	$('#LoadiN_tip').css('display','none');					
	
}
//echo the item:action
$(function(){			
	IdeA_showown();						
		
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
	*my lolo always show or hidemy lolo always show or hidemy lolo always show or 
	 */ 	
	$('#IdeA_myloloviewstate').click(function(){
		IdeA_viewpost();											
	});	 
	/*
	*my lolo show or hidemy lolo show or hidemy lolo show or hidemy lolo show or h
	 */
	 //showshowshowshowshow
	$('#IdeA_mineshow').mouseover(function(){
		var url=ROOTDIR+'include/part/idea/show/data/image/mylolohide.png';
		$(this).attr('src',url);															
	});	 
	$('#IdeA_mineshow').mouseout(function(){
		var url=ROOTDIR+'include/part/idea/show/data/image/myloloshow.png';
		$(this).attr('src',url);															
	});

	$('#IdeA_mineshow').click(function(){
		$(this).css({display:'none'});
		
		$('#IdeA_mine').css({display:'none'});
		
		$('#IdeA_minehide').css({display:'block'});

		
		$('#IdeA_spiltmineandnot').attr('data-state','0');																	
	});	

	
		
	 //hidehidehidehidehide	
	$('#IdeA_minehide').mouseover(function(){
		var url=ROOTDIR+'include/part/idea/show/data/image/myloloshow.png';
		$(this).attr('src',url);															
	});
	$('#IdeA_minehide').mouseout(function(){
		var url=ROOTDIR+'include/part/idea/show/data/image/mylolohide.png';
		$(this).attr('src',url);															
	});
		
	$('#IdeA_minehide').click(function(){
		$(this).css({display:'none'});
					
		$('#IdeA_mine').css({display:'block'});
		
		$('#IdeA_mineshow').css({display:'block'});
		
		
		$('#IdeA_spiltmineandnot').attr('data-state','1');						
	});	 		
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
		
		var toplength=$(this).attr('data-top');
		var menutoplength=$('.menu_ideatoolmore-kind-1top').length;
		var menutopcancellength=$('.menu_ideatoolmore-kind-1topcancel').length;
		if((toplength=='1')&&(menutopcancellength<=0)){
			if(menutoplength>0){
				$('.menu_ideatoolmore-kind-1top').remove();
			}
			var html="<dt class='menu_ideatoolmore-kind-1 menu_ideatoolmore-kind-1topcancel'><span id='MenU_ideatoolmore_topcancel' class='menu_ideatoolmore-kind-1-1'>取消置顶</span></dt>";
			$('.menu_ideatoolmore-kind-1delete').before(html);
			
			//cancel the top cancel the top cancel the top cancel the top	  
			$('#MenU_ideatoolmore_topcancel').click(function(){			
				IdeA_topcancelpost();										
			});	  
			//cancel the top cancel the top cancel the top cancel the top			
		}else if((toplength!='1')&&(menutoplength<=0)){
			if(menutopcancellength>0){
				$('.menu_ideatoolmore-kind-1topcancel').remove();
			}
			var html="<dt class='menu_ideatoolmore-kind-1 menu_ideatoolmore-kind-1top'><span id='MenU_ideatoolmore_top' class='menu_ideatoolmore-kind-1-1'>置顶</span></dt>";
			$('.menu_ideatoolmore-kind-1delete').before(html);
						
			//top the idea top the idea top the idea top the idea top the idea	   
			$('#MenU_ideatoolmore_top').click(function(){		
				//basic	
				var ideaid=$('#MenU_ideatool_hidideaid').val();
				
				IdeA_toppost(ideaid);										
			});	  
			//top the idea top the idea top the idea top the idea top the idea			
		}		

		var topid=$(this).attr('data-top');
		$('#HiddeN_topid').val(topid);
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
	
	
	//cancel the top cancel the top cancel the top cancel the top
	//mouse  	
	$('.idea_own-others-topcancel').mouseover(function(){		
			$(this).text('取消');			
	});	  
	$('.idea_own-others-topcancel').mouseleave(function(){		
			$(this).text('置顶中');					
	}); 
	//click	  
	$('.idea_own-others-topcancel').click(function(){			
		IdeA_topcancelpost();										
	});	  
	//cancel the top cancel the top cancel the top cancel the top	
	
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
/*view the idea:Function*/
function IdeA_viewpost(){
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data*/
	/*
	 * 
	 */ 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/home/idea/view/idea.php?action=idea_view',
	     	type:'GET',
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideaviewpost(result);										     			
	     	},
	     });
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data:Set t*/
}
/*deal the result:Function*/
function ResulT_ideaviewpost(result){
	if(result=='idea_viewsuccess'){				
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("location.reload();",1250);					
	}else{
		$('#UnknowerroR').css('display','block');
	}
}








/*top the idea:Function*/
function IdeA_toppost(ideaid){
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data*/
	/*
	 * 
	 */ 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/home/idea/top/idea.php?action=idea_top',
	     	type:'POST',
	     	data:'ideaid='+ideaid,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideatoppost(result);										     			
	     	},
	     });
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data:Set t*/
}
/*deal the result:Function*/
function ResulT_ideatoppost(result){
	if(result=='idea_topsuccess'){				
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("location.reload();",1250);					
	}else{
		$('#UnknowerroR').css('display','block');
	}
}
/*cancel the top:Function*/
function IdeA_topcancelpost(){
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data*/
	/*
	 * 
	 */ 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/home/idea/top/cancel.php?action=idea_topcancel',
	     	type:'GET',
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideatopcancelpost(result);										     			
	     	},
	     });
	/*Set the dataSet the dataSet the dataSet the dataSet the dataSet the data:Set t*/
}
/*deal the result:Function*/
function ResulT_ideatopcancelpost(result){
	if(result=='idea_topcancelsuccess'){				
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("location.reload();",1250);					
	}else{
		$('#UnknowerroR').css('display','block');
	}
}





function IdeA_ownnotminepreconhide(){
	/*mouse*/		
	$('.idea_ownnotmine-center-pre').mouseleave(function(){
		$('.idea_ownnotmine-center-pre').css({display:'none'});			
	});
	/*click*/	
	$('.idea_ownnotmine-center-pre').click(function(){
		$('.idea_ownnotmine-center-pre').css({display:'block'});			
	});
	$('html').mouseup(function(){
		$('.idea_ownnotmine-center-pre').css({display:'none'});			
	});
}
function IdeA_customownnotmineprelans(){
	//idea lans pre con show	
	$('.idea_ownnotmine-toollansshow img').mouseover(function(){
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea lans pre con show		
				var id='#IdeA_ownnotmine_center_pre'+ideaid;
			var lanid='#IdeA_ownnotmine_center_pre_1'+ideaid;			
		       $(id).css('display','block');
		$(lanid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	
	//idea lans pre con hide
	IdeA_ownnotminepreconhide();	
}



function IdeA_customownnotminepreimage(){
	//idea image pre con show	
	$('.idea_ownnotmine-toolimageshow img').mouseover(function(){
		//basic	
		var ideaid=$(this).attr('data-ideaid');
				
		//idea image pre con show
		 		var imgid='#IdeA_ownnotmine_pre_image'+ideaid;
			      var imgurl=$(imgid).attr('src');			 
		 	var framew=360;
		 var frameh=360;
		 PicturE_auto(imgurl,imgid,framew,frameh);		  		
		 	var id='#IdeA_ownnotmine_center_pre'+ideaid;
		 			$(id).css('display','block');
		                 var imageid='#IdeA_ownnotmine_center_pre_2'+ideaid;					
		                                     $(imageid).css('display','block');
		
		/*give the ideaid to hiddengive the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);								
	});
	
	//idea image pre con hide
	IdeA_ownnotminepreconhide();			
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
function IdeA_customownnotmine(){	
	/*
	* more menumore menumore menumore menumore menumore menumore menumore menumore
	 */
	 //showshowshowshowshow
	$('.idea_ownnotmine-right-more1').click(function(){
		//basic
		var ideaid=$(this).attr('data-ideaid');
		$('#MenU_ideatool_hidideaidnotmine').val(ideaid);
				
		//more
				var o=$(this).offset();
			var ptop=((o.top)+45)+'px';
		var pleft=((o.left)-40)+'px';
		$('#MenU_ideatoolmorenotmine').css({top:ptop,left:pleft,display:'block'});
		
		var toplength=$(this).attr('data-top');
		var menutoplength=$('.menu_ideatoolmore-kind-1notminetop').length;
		var menutopcancellength=$('.menu_ideatoolmore-kind-1notminetopcancel').length;
		if((toplength=='1')&&(menutopcancellength<=0)){
			if(menutoplength>0){
				$('.menu_ideatoolmore-kind-1notminetop').remove();
			}
			var html="<dt class='menu_ideatoolmore-kind-1notmine menu_ideatoolmore-kind-1notminetopcancel'><span id='MenU_ideatoolmorenotmine_topcancel' class='menu_ideatoolmore-kind-1-1notmine'>取消置顶</span></dt>";
			$('.menu_ideatoolmore-kindnotmine').html(html);
			
			//cancel the top cancel the top cancel the top cancel the top	  
			$('#MenU_ideatoolmorenotmine_topcancel').click(function(){			
				IdeA_topcancelpost();										
			});	  
			//cancel the top cancel the top cancel the top cancel the top			
		}else if((toplength!='1')&&(menutoplength<=0)){
			if(menutopcancellength>0){
				$('.menu_ideatoolmore-kind-1notminetopcancel').remove();
			}
			var html="<dt class='menu_ideatoolmore-kind-1notmine menu_ideatoolmore-kind-1notminetop'><span id='MenU_ideatoolmorenotmine_top' class='menu_ideatoolmore-kind-1-1notmine'>置顶</span></dt>";
			$('.menu_ideatoolmore-kindnotmine').html(html)
						
			//top the idea top the idea top the idea top the idea top the idea	   
			$('#MenU_ideatoolmorenotmine_top').click(function(){	
				//basic	
				var ideaid=$('#MenU_ideatool_hidideaidnotmine').val();
				
				IdeA_toppost(ideaid);										
			});	  
			//top the idea top the idea top the idea top the idea top the idea			
		}				
		
	});
	 //hidehidehidehidehide		
	$('#MenU_ideatoolmorenotmine').mouseleave(function(){
		$('#MenU_ideatoolmorenotmine').css({display:'none'});
	});			
	$('html').mouseup(function(){
		$('#MenU_ideatoolmorenotmine').css({display:'none'});
	});
	
	
					
	/*
	*preprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepre  
	 */
	 
	 /*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 
	 //tooltooltooltooltooltool
	 //idea lans pre tool show	
	
	//conconconconconconconconco
	IdeA_customownnotmineprelans();	
	/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 



	 /*imageimageimageimageimageimageimageimageimageimageimageimage*/	 	 
	 //tooltooltooltooltooltooltooltoolto
	 //idea image pre tool show	
	
	 //conconconconconconconconconconconco
	IdeA_customownnotminepreimage();	 	
	  /*imageimageimageimageimageimageimageimageimageimageimageimage*/

	 
	 
	//top the idea top the idea top the idea top the idea top the idea	 
	$('.idea_ownnotmine-right-tool-top').click(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		IdeA_toppost(ideaid);											
	});	  
	//top the idea top the idea top the idea top the idea top the idea
	//cancel the top cancel the top cancel the top cancel the top	  
	$('.idea_ownnotmine-right-tool-topcancel').click(function(){			
		IdeA_topcancelpost();										
	});	  
	//cancel the top cancel the top cancel the top cancel the top


 	 
	//enter the idea enter the idea enter the idea enter the idea enter the idea	 
	//mouse  
	$('.idea_ownnotmine-center-enterfra').mouseover(function(){		
		//basic	
		var ideaid=$(this).attr('data-ideaid');
		
		/*show the enter*/				
		var id="#IdeA_ownnotmine_center_enter"+ideaid;			
		$(id).css({display:'block'});
		
		/*give the ideaid to hidden*/
		$('#HiddeN_ideaid').val(ideaid);							
	});	  
	$('.idea_ownnotmine-center-enter').mouseleave(function(){		
		$('.idea_ownnotmine-center-enter').css({display:'none'});					
	});
				  
	 //enter the idea enter the idea enter the idea enter the idea enter the idea

	//processsate processsate processsate processsate processsate processsate
	//mouse  
	$('.idea_ownnotmine-others-timeprocessing-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_ownnotmine-others-timeprocessing-con span').mouseleave(function(){		
			$(this).text('加工中');					
	});
	
	$('.idea_ownnotmine-others-timeend-con span').mouseover(function(){		
			$(this).text('浏览');			
	});	  
	$('.idea_ownnotmine-others-timeend-con span').mouseleave(function(){		
			$(this).text('完工');					
	});			  
	//processsate processsate processsate processsate processsate processsate

	
	
	//cancel the top cancel the top cancel the top cancel the top
	//mouse  	
	$('.idea_ownnotmine-others-topcancel').mouseover(function(){		
			$(this).text('取消');			
	});	  
	$('.idea_ownnotmine-others-topcancel').mouseleave(function(){		
			$(this).text('置顶中');					
	}); 
	//click	  
	$('.idea_ownnotmine-others-topcancel').click(function(){			
		IdeA_topcancelpost();										
	});	  
	//cancel the top cancel the top cancel the top cancel the top	
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/