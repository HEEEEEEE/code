/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
var time0;


/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


//show PalmleaveS by scroll:function
function ExplorEbyscroll(){
	var t=$('#mCSB_1_container').offset();
	var t=t.top;
	//for category zIndex 
//	if(t<=-364){
//		$('#LefT').css('zIndex','2502');
//		$('#CenteR').css('zIndex','2525');		
//	}else{
//		$('#LefT').css('zIndex','2525');
//		$('#CenteR').css('zIndex','2502');		
//	}
	//for category guide and search show
	if(t<=-605){
		$('#ToP_scroll').css('display','block');		
	}else{
		$('#ToP_scroll').css('display','none');						
	}			
}

$(function(){		
	time0=setInterval('ExplorEbyscroll()',500);			
})       










     