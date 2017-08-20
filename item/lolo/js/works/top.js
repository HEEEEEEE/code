/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


$(function(){
//screenscreenscreenscreenscreenscreen
var w=screen.width;
	//mainWmainWmainWmainWmainWmainWmainW			
	var mainW=w - 600;			
		//toptoptoptoptoptoptoptoptoptoptoptop
		$('#ToP_content').width(w);
			//search
			$('#ToP_search').css('right','12.5px');
				
	$("#TopBasic3_1_Home").mouseover(function(){
		var url=ROOTDIR+'data/image/public/home.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_1_Home").mouseout(function(){
		var url=ROOTDIR+'data/image/public/home_gray.png';
		$(this).attr('src',url);
	});
			
	var url=ROOTDIR+'data/image/public/works.png';
	$("#TopBasic3_2_Works").attr('src',url).css({cursor:'default'});
	$('#TopBasic3_1_WorksLan').css({display:'block'});
	
	$("#TopBasic3_3_Explore").mouseover(function(){
		var url=ROOTDIR+'data/image/public/discovery.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_3_Explore").mouseout(function(){
		var url=ROOTDIR+'data/image/public/discovery_gray.png';
		$(this).attr('src',url);
	});		
})