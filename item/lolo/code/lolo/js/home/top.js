/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
$(function(){
	// the top basicf
		/*show the top basicf menu*/		
		$('#BasicF_dl1dt1span1').mouseover(function(){	
			var o=$('#BasicF_dl1dt1span1').offset();
				var ptop='35px';
					var pleft=((o.left)-40)+'px';			
			$('#ToP_basicdiv1menu').css({top:ptop,left:pleft,display:'block'});		
		});	
		/*hide the top basicf menu*/
		$('#ToP_basicdiv1menu').mouseleave(function(){
			$('#ToP_basicdiv1menu').css({display:'none'});				
		});
		$('html').mouseup(function(){
			$('#ToP_basicdiv1menu').css({display:'none'});				
		});
	
		/*stylestylestylestylestylestyle*/	
		$("#TopBasic3_2_Works").mouseover(function(){
			var url=ROOTDIR+'data/image/home/top/works.png';
			$(this).attr('src',url);
		});
		$("#TopBasic3_2_Works").mouseout(function(){
			var url=ROOTDIR+'data/image/home/top/works_gray.png';
			$(this).attr('src',url);
		});		
		
		$("#TopBasic3_3_Explore").mouseover(function(){
			var url=ROOTDIR+'data/image/home/top/discovery.png';
			$(this).attr('src',url);
		});
		$("#TopBasic3_3_Explore").mouseout(function(){
			var url=ROOTDIR+'data/image/home/top/discovery_gray.png';
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