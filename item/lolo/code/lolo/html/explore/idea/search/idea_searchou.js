/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

$(function(){	
	/*Search Search Search Search SearchSearch Search Search Search Search
	  * 
	 ******/
	//Search:outsideSearch:outsideSearch:outsideSearch:outsideSearch:outside
            //Event:mouse	
            $("#SearcH1_tooldocon").click(function(){
	            var search=$("#SearcH1_toolentercon").val();
		var result=/^\s{1,125}$/.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=125)){	
			var url=ROOTDIR+'explore.php?search='+search;
 			location.href=url;					  									
		}	            			
	}); 
            $("#SearcH2_tooldocon").click(function(){
	            var search=$("#SearcH2_toolentercon").val();
		var result=/^\s{1,125}$/.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=125)){	
			var url=ROOTDIR+'explore.php?search='+search;
 			location.href=url;											  									
		}	            			
	}); 			  
	//Event:key	
	$("#SearcH1_toolentercon").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$(this).val();
			var model=new RegExp(/^\s{1,125}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=125)){	
				var url=ROOTDIR+'explore.php?search='+search;
	 			location.href=url;														 										
				return false;						
			}
			return false;								
		}	    
	});	
	$("#SearcH2_toolentercon").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$(this).val();
			var model=new RegExp(/^\s{1,125}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=125)){	
				var url=ROOTDIR+'explore.php?search='+search;
	 			location.href=url;				
				return false;						
			}
			return false;								
		}	    
	});
	//Search:outsideSearch:outsideSearch:outsideSearch:outsideSearch:outside
})


