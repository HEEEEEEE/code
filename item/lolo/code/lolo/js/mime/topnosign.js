/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
$(function(){
	$('#ToP_basic').css('left',0);
	$(".topBasic3").css({cursor:'point'});
	
	$("#TopBasic3_3_Explore").mouseover(function(){
		var url=ROOTDIR+'data/image/public/discovery.png';
		$(this).attr('src',url);
	});
	$("#TopBasic3_3_Explore").mouseout(function(){
		var url=ROOTDIR+'data/image/public/discovery_gray.png';
		$(this).attr('src',url);
	});
	
	//Search in 3C
	/*Search in 3C display just one*/
//	$("#ToP_search input").one("click",function(){
//		$(this).val('');
//	});
	/*Search Search Search Search Search*/
            //Event:mouse
            $("#ToP_search #SearcH_img").click(function(){
	            var search=$("#ToP_search input").val();
//		var model=new RegExp(/^\s{1,25}$/);
//		var result=model.test(search);		            
//		if((result==false)&&(search.length>0)&&(search.length<=25)){
 			var url=ROOTDIR+'explore.php?search='+search;
 			location.href=url;											
//		}	            			
	});  	
	//Event:key
	$("#ToP_search input").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$("#ToP_search input").val();
//			var model=new RegExp(/^\s{1,25}$/);
//			var result=model.test(search);
//			if((result==false)&&(search.length>0)&&(search.length<=25)){	
	 			var url=ROOTDIR+'explore.php?search='+search;
	 			location.href=url;													
				return false;						
//			}
//			return false;								
		}	    
	});						
})