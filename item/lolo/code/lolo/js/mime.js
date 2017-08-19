/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
var stop_Time_PalmleaveSbyscroll;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/




/*ACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTIONACTION*/
$(function(){
	Scroll();	
//	stop_Time_PalmleaveSbyscroll=setInterval('PalmleaveSbyscroll()',500);		
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
}
/*FUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTIONFUNCTION*/ 