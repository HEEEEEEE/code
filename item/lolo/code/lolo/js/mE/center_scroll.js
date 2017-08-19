/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


//show PalmleaveS by scroll:function
function MEbyscroll(){
	var t=$('#mCSB_1_container').offset();
	var t=t.top;
	if(t<=-125){
//		$('#LinK_center').attr('href',ROOTDIR+'css/1/mE/center_scroll.css?');
		$('#CenteR').addClass('forScroll').removeClass('forNormal');	
	}else{
//		$('#LinK_center').attr('href',ROOTDIR+'css/1/mE/center.css?');
		$('#CenteR').addClass('forNormal').removeClass('forScroll');		
	}		
}

$(function(){	
	setInterval('MEbyscroll()',500);			
})       










     