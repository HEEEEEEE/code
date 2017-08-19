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
 		 //load more
 		 var scrollB=$("#mCSB_1_dragger_vertical").css('bottom');
 		 var loadMine=$(".idea_ownloadMoreyesornoHidden").val();
 		 
 		 var loadMore=$("#Idea_loadMoreHidden").val();
 		 if(scrollB=='0px' && loadMine=='1'){
 		 	$("#mCSB_1_dragger_vertical").css({bottom:'25px',top:'auto'});
 		 	Idea_LoadMore();
 		 }
 		 
 		 
	//for mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor mefor me
	
	
	
	
}
/*FUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTION*/ 