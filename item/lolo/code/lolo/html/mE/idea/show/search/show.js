/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*echo the item echo the item echo the item echo the item echo the item*/
//echo the item:function
function IdeA_search(search){
	/*set the data
	 * 
	 */
	 var search=FilteR_ajaxspecialstr(search);
	 	 
	 var mine=$('#HiddeN_mineclose').val();

		 
	var w=$('#ProjectclosE_search').width();
	var w2=w/2;
	var o=$('#ProjectclosE_search').offset();
	var ptop=((o.top)+125)+'px';
	var pleft=((o.left)+w2)+'px';
	$('#LoadiN_tipcon').css({margin:0});				
	$('#LoadiN_tipcon').css({top:ptop,left:pleft});	
								
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr').html(tip);
	$('#LoadiN_tip').css('display','block'); 	 	  	 
	 var xmlhttp=$.ajax({
	 	url:ROOTDIR+'html/mE/idea/show/search/show.php?action=idea_search&mine='+mine,
	 	type:'POST',
	 	data:'search='+search,
	 	datatype:'html',
	 	success:function(){
	 		var result=xmlhttp.responseText;
	 		ResulT_ideasearch(result);
			IdeA_customown();
					    
//			  ShoW_deletemenuajax();
//			            ShoW_ideaenterajax();	                     
//			                     ShoW_preajax(); 		
	 	},
	 });
}
/*deal the resultdeal the resultdeal the result*/
//deal the result:function
function ResulT_ideasearch(result){	
	//echo search
	$('#IdeA').html(result);
	//echo item num
	//basic	
	
	//echo search num
	//basic
	var searchl=$('.idea_own').length;
	$('#SearchinfO_searchnumcon').text(searchl);
	//show
	$('#IdeA_showcontop').css('display','block');
	
	
	$('#LoadiN_tipcon').css('margin','5px auto 0');				
		$('#LoadiN_tipcon').css({top:0,left:0});		
			$('#LoadiN_tip').css('display','none');
					$('#LoadiN_tipstr').html('');							
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



