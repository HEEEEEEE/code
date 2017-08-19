/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
$(function(){
	$('#ToP_basic').css('left',0);
	$(".topBasic3").css({cursor:'point'});
	$("#TopBasic3_1_Home").mouseover(function(){
		var url=ROOTDIR+'data/image/public/home.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_1_Home").mouseout(function(){
		var url=ROOTDIR+'data/image/public/home_gray.png';
		$(this).attr('src',url);
	});
	
	$("#TopBasic3_2_Works").mouseover(function(){
		var url=ROOTDIR+'data/image/public/works.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_2_Works").mouseout(function(){
		var url=ROOTDIR+'data/image/public/works_gray.png';
		$(this).attr('src',url);
	});
	
	$("#TopBasic3_3_Explore").mouseover(function(){
		var url=ROOTDIR+'data/image/public/discovery.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_3_Explore").mouseout(function(){
		var url=ROOTDIR+'data/image/public/discovery_gray.png';
		$(this).attr('src',url);
	});					
})