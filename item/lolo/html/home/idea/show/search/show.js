/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_search(search){
	//set the dataset the dataset the dataset the dataset the d 
	var search=FilteR_ajaxspecialstr(search);

	//showshowshowshowshowshowshowshowshowshowshowshowshowshow
		//search
		$('#IdeA_showcontop').css('display','block'); 	
		//tips
		var w=$('#IdeA').width();
		var o=$('#IdeA').offset();
		var ptop=((o.top)+125)+'px';
		var pleft=((o.left)+w/2)+'px';				
		$('#LoadiN_tip1').css({top:ptop,left:pleft});	
										
	            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
	            $('#LoadiN_tipstr1').html(tip);
		$('#LoadiN_tip1').css('display','block'); 
		       	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/home/idea/show/search/show.php?action=idea_search',
	 	type:'POST',
	 	data:'search='+search,
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideasearch(result);
			IdeA_customown(); 		
	 	},
	 });
}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideasearch(result){			
	//echo search
	$('#IdeA').html(result);
				
	//echo search num
	var search=$('.idea_own').length;
	$('#SearchinfO_searchnumcon').text(search);
	
	//hidden tips
	$('#LoadiN_tip1').css({display:'none',top:0,left:0});	
	$('#LoadiN_tipstr1').html('');							
}
//echo the item:action
$(function(){	
	/*Search Search Search Search Search*/
            //Event:mouse
            $("#ProjectclosE_searchimg").click(function(){		            	
	            var search=$("#ProjectclosE_searchinput").val();
		var result=/^\s{1,125}$/.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=125)){	
			IdeA_search(search);		  									
		}	            			
	});  
	//Event:key
	$("#ProjectclosE_searchinput").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){							
		            var search=$("#ProjectclosE_searchinput").val();
			var model=new RegExp(/^\s{1,125}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=125)){	
				IdeA_search(search);		 										
				return false;						
			}
			return false;								
		}	    
	});
	/*backbackbackbackbackbackbackbackback*/
            $("#SearchinfO_back").click(function(){           	
		//hide
		$('#IdeA_showcontop').css('display','none'); 
		//show           	
	            IdeA_showown();	            			
	}); 		
})
/*echo the item echo the item echo the item echo the item echo the item*/



