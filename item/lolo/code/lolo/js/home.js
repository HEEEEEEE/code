/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
var stop_Time_PalmleaveSbyscroll;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/




/*ACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTION*/
$(function(){
	Scroll();	
	stop_Time_PalmleaveSbyscroll=setInterval('PalmleaveSbyscroll()',500);		
})
/*ACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTION*/ 




/*FUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTION*/                         
function Scroll(){
	$('#BodY_scroll').mCustomScrollbar({
		 set_width:false,
  		 set_height:false,
  		 horizontalScroll:false,
  		 scrollInertia:500,
  		 scrollEasing:'easeInCubic',
  		 mouseWheel:true,
  		 autoDraggerLength:true,
  		 	
		 scrollButtons:{
			 enable:true,
			 scrollType:"continuous",
			 scrollSpeed:50,
			 scrollAmount:50
		 },
		 advanced:{
			 updateOnBrowserResize:true,
			 updateOnContentResize:true,
			 autoExpandHorizontalScroll:false,
			 autoScrollOnFocus:true,  
                         },
                         callbacks:{
			onScrollStart:function(){
                      	
                         }} 	
	});		
}

// by scroll:function
function PalmleaveSbyscroll(){
	//for ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor ideafor idea
		//who lolo
		var loc=$('#IdeA').offset();
		var loctop=loc.top;
		var locleft=loc.left;
	 	if(loctop<=83.5){ 
	 		//for idea	
	 		$('.whololotip').css({position:'fixed',left:locleft+7.5+'px',top:'83.5px'});
	 		
	 	}else{
	  		//for idea	
	 		$('.whololotip').css({position:'absolute',left:'7.5px',top:'12.5px'});  	                 		
	 	}	
	 
	 	if((($('#IdeA_top div').length)>0)&&(($('#IdeA_mine div').length)>0)&&(($('#IdeA_notmine div').length)<=0)){
			var loc=$('#IdeA_spilttopandnot').offset();
			var loctop=loc.top;
								
		 	if(loctop>=73.5){ 
		 		//for idea	
		 		$('.toplolopetiole').css({display:'block'});
		 		
		 		$('.mylolopetiole').css({display:'none'});		
		 	}else if(loctop<73.5){
		  		//for idea	
		 		$('.mylolopetiole').css({display:'block'});
				
				$('.toplolopetiole').css({display:'none'});		
		 	}	 	 		
	 	}else if(((($('#IdeA_top div').length)>0)&&($('#IdeA_mine div').length)<=0)&&(($('#IdeA_notmine div').length)>0)){
			var loc=$('#IdeA_spilttopandnot').offset();
			var loctop=loc.top;
								
		 	if(loctop>=73.5){ 
		 		//for idea	
		 		$('.toplolopetiole').css({display:'block'});
		 		
		 		$('.theirlolopetiole').css({display:'none'});		
		 	}else if(loctop<73.5){
		  		//for idea	
		 		$('.theirlolopetiole').css({display:'block'});
				
				$('.toplolopetiole').css({display:'none'});		
		 	}	 	 		
	 	}else if(((($('#IdeA_top div').length)<=0)&&($('#IdeA_mine div').length)>0)&&(($('#IdeA_notmine div').length)>0)){
			var loc=$('#IdeA_spiltmineandnot').offset();
			var loctop=loc.top;
			
			var mine=$('#IdeA_spiltmineandnot').attr('data-state');							
		 	if((loctop>=73.5)&&(mine=='1')){ 
		 		//for idea	
		 		$('.mylolopetiole').css({display:'block'});
		 		
		 		$('.theirlolopetiole').css({display:'none'});		
		 	}else if((loctop<73.5)&&(mine=='1')){
		  		//for idea	
		 		$('.theirlolopetiole').css({display:'block'});
				
				$('.mylolopetiole').css({display:'none'});		
		 	}	 	 		
	 	}else if(((($('#IdeA_top div').length)>0)&&($('#IdeA_mine div').length)>0)&&(($('#IdeA_notmine div').length)>0)){
			var loc=$('#IdeA_spilttopandnot').offset();
			var loctop=loc.top;
					
			var loc1=$('#IdeA_spiltmineandnot').offset();
			var loctop1=loc1.top;		
	
			var mine=$('#IdeA_spiltmineandnot').attr('data-state');	
									
		 	if(loctop>=73.5){ 
		 		//for idea	
		 		$('.toplolopetiole').css({display:'block'});
		 		
		 		$('.mylolopetiole').css({display:'none'});
		 		
		 		$('.theirlolopetiole').css({display:'none'});		
		 	}else if((loctop<73.5)&&(mine!='1')){
		  		//for idea	
		 		$('.theirlolopetiole').css({display:'block'});
				
				$('.mylolopetiole').css({display:'none'});
				
		 		$('.toplolopetiole').css({display:'none'});					
		 	}else if((loctop<73.5)&&(loctop1>=73.5)&&(mine=='1')){
		  		//for idea	
		 		$('.mylolopetiole').css({display:'block'});
				
				$('.theirlolopetiole').css({display:'none'});
				
		 		$('.toplolopetiole').css({display:'none'});					
		 	}else if((loctop1<73.5)&&(mine=='1')){
		  		//for idea	
		 		$('.theirlolopetiole').css({display:'block'});
				
				$('.mylolopetiole').css({display:'none'});
				
		 		$('.toplolopetiole').css({display:'none'});					
		 	}	 		 	 		
	 	}
 	
 		 //load more
 		 var scrollB=$("#mCSB_1_dragger_vertical").css('bottom');
 		 var loadMine=$(".idea_ownloadMoreyesornoHidden").val();
 		 var loadNotMine=$(".idea_ownnotmineloadMoreyesornoHidden").val();
 		 
 		 var loadMore=$("#Idea_loadMoreHidden").val();
 		 if(scrollB=='0px' && (loadMine=='1' || loadNotMine=='1')){
 		 	$("#mCSB_1_dragger_vertical").css({bottom:'25px',top:'auto'});
 		 	Idea_LoadMore(loadMore);
 		 }
 		 
 		 
	//for mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor me
	var o=$('#IdeA').offset();
	var oTop=o.top;
	if(oTop < -50){
		var loc=$('#CenteR_projectstart').offset();
		var locleft=loc.left;
		$('#Home_Me').addClass('homeMe_avatarByScroll').removeClass('homeMe_avatar');
		$('.homeMe_avatarByScroll').css({top:'62.5px',left:locleft+'px'});
	}else{
		$('#Home_Me').addClass('homeMe_avatar').removeClass('homeMe_avatarByScroll');
		$('.homeMe_avatar').css({top:'0',left:'0'});
	}
	
	
	
	
}
/*FUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTION*/                         
                                              
                                            
