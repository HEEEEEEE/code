/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item(){
	  	  /*start start start start start*/
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"filebox/picture/show.php?action=filebox_show",
		  	//set the request way
		  	type:'GET',
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_show(result);
		  	  item_select();  		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_show(result){
	document.getElementById("FileboX_source_div").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	show_item();	
})


		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the Close:Function*/
function select_all(){
	var li=$('#IteM_numshow').text();
	var li=parseInt(li,10);            
	var ls=$('.filebox-source-selected').length;
	if( li == ls ){
	       //show the others
	       $('#FileboX_select #SelecT').css('display','none');
	       $('#FileboX_select #SelectnO').css('display','block'); 		
	}
	else{
	       //hide the others
	       $('#FileboX_select #SelecT').css('display','block');
	       $('#FileboX_select #SelectnO').css('display','none'); 		
	}	
}
function item_select(){
	/*no select the lang*/
	var notselectlang=document.getElementById('FileboX_source_div');
	notselectlang.onselectstart=function(event){
		 if (event.shiftKey) {
		 	$(this).css('mozUserSelect','none');
			return false;		 	
		 }
	}
	/*select the source*/	
	var start = null;	
	$(".filebox-source").click(function(event){
            setTimeout('select_all()');		
	//item select more:shift
                if (event.shiftKey) {
                    var si = $(start).index(), ti = $(this).index();                    
                    var sel = $(".filebox-source").slice(Math.min(si, ti), Math.max(si, ti) + 1);
                    sel.addClass("filebox-source-selected");
                    
	       //Start the delete
	       $('#FileboX_delete #DeletE').css('display','block');		
	       $('#FileboX_delete #DeletenO').css('display','none');
		
	       //item select:numshow
	       var l=$('.filebox-source-selected').length;
	       $('#ItemselecT_numshowdt').css('display','inline')
	       $('#ItemselecT_numshow').text(l);
		
	       //hidden the others
	       $('#FileboX_select #SelecT').css('display','block');
	       $('#FileboX_select #SelectnO').css('display','none');                       
                    return false;
                }
                
	//item select more:ctrl	
//                if (event.ctrlKey) {                                       
//                    return false;
	       //Start the delete
//	       $('#FileboX_delete #DeletE').css('display','block');		
//	       $('#FileboX_delete #DeletenO').css('display','none');
//		
//	       //item select:numshow
//	       var l=$('.filebox-source-selected').length;
//	       $('#ItemselecT_numshowdt').css('display','inline')
//	       $('#ItemselecT_numshow').text(l);
//		
//	       //hidden the others
//	       $('#FileboX_select #SelecT').css('display','block');
//	       $('#FileboX_select #SelectnO').css('display','none'); 
//                }
                			
	//item select one
                start = this;
                $(this).addClass("filebox-source-selected");		
		//Start the delete
		$('#FileboX_delete #DeletE').css('display','block');		
		$('#FileboX_delete #DeletenO').css('display','none');
		
		//item select:numshow
		var l=$('.filebox-source-selected').length;
		$('#ItemselecT_numshowdt').css('display','inline')
		$('#ItemselecT_numshow').text(l);
		
		//hidden the others
                         $('#FileboX_select #SelecT').css('display','block');
                         $('#FileboX_select #SelectnO').css('display','none');                     	
									
	});
	//item select more:ctrl
	$('html').keydown(function(event){
		keyN=event.which;                  		        		        			                			
                        if(keyN==17){
                        	$("#ProjectshowE_center,#FileboX_upload,.filebox-source").off('mouseup');       		
                        }
	});

	$('html').keyup(function(event){
		keyN=event.which;		
                        if(keyN==17){
                        	$("#ProjectshowE_center,#FileboX_upload").on('mouseup',function(){				
				$(".filebox-source").removeClass('filebox-source-selected');
				//Stop the delete
				$('#FileboX_delete #DeletE').css('display','none');		
				$('#FileboX_delete #DeletenO').css('display','block');
		                          		
				//item select:numhide
				$('#ItemselecT_numshowdt').css('display','none')
				$('#ItemselecT_numshow').text('');
				
				//hidden the others
		                         $('#FileboX_select #SelecT').css('display','block');
		                         $('#FileboX_select #SelectnO').css('display','none');                      		
                        	});                        	
                        }
	});

	//item select more:all
	$('#FileboX_select #SelecT').click(function(){
                         $(".filebox-source").addClass('filebox-source-selected');
                         $(this).css('display','none');
                         $('#FileboX_select #SelectnO').css('display','block');
                         
     		//Start the delete
		$('#FileboX_delete #DeletE').css('display','block');		
		$('#FileboX_delete #DeletenO').css('display','none');
		
		//item select:numshow
		var l=$('.filebox-source-selected').length;
		$('#ItemselecT_numshowdt').css('display','inline')
		$('#ItemselecT_numshow').text(l);			                                 		
	});

	$('#FileboX_select #SelectnO').mouseup(function(){
                         $(".filebox-source").removeClass('filebox-source-selected');
                         $(this).css('display','none');
                         $('#FileboX_select #SelecT').css('display','block'); 
				
		//Stop the delete
		$('#FileboX_delete #DeletE').css('display','none');		
		$('#FileboX_delete #DeletenO').css('display','block'); 
		
		//Stop the delete
		$('#FileboX_delete #DeletE').css('display','none');		
		$('#FileboX_delete #DeletenO').css('display','block');
		
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');	                                                                     		
	});
	
	/*no select the source*/	
	$("#ProjectshowE_center,#FileboX_upload").mouseup(function(){
		$(".filebox-source").removeClass('filebox-source-selected');
		//Stop the delete
		$('#FileboX_delete #DeletE').css('display','none');		
		$('#FileboX_delete #DeletenO').css('display','block');
                          		
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');
		
		//hidden the others
                         $('#FileboX_select #SelecT').css('display','block');
                         $('#FileboX_select #SelectnO').css('display','none');												
	});		 		
}
/*Select the Close:Action*/		
$(function(){		
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/

