/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select :Function*/
function select_all(){
	var li=$('#IteM_numshow').text();
	var li=parseInt(li,10);            
	var ls=$('.source-selected').length;
	if( li == ls ){
	       //show the others
	       $('#SourcE_select #SelecT').css('display','none');
	       $('#SourcE_select #SelectnO').css('display','block'); 		
	}
	else{
	       //hide the others
	       $('#SourcE_select #SelecT').css('display','block');
	       $('#SourcE_select #SelectnO').css('display','none'); 		
	}	
}
function item_select(){
	/*no select the lang*/
	var notselectlang=document.getElementById('SourcE_Vsourcesshow');
	notselectlang.onselectstart=function(event){
		 if (event.shiftKey) {
		 	$(this).css('mozUserSelect','none');
			return false;		 	
		 }
	}
	/*select the source*/	
	var start = null;	
	$(".source").click(function(event){                    
            //Start the delete
            $('#SourcE_delete #DeletE').css('display','block');		
            $('#SourcE_delete #DeletenO').css('display','none');                  
            
            //show the select all mark		
            setTimeout('select_all()');
            		
	    //item select more:shift
                if (event.shiftKey) {
	                    var si = $(start).index(), ti = $(this).index();                    
	                    var sel = $(".source").slice(Math.min(si, ti), Math.max(si, ti) + 1);
	                    sel.addClass("source-selected");
			
		       //item select:numshow
		       var l=$('.source-selected').length;
		       $('#ItemselecT_numshowdt').css('display','inline')
		       $('#ItemselecT_numshow').text(l);
		       $('#ItemsearcH_numselectdt').css('display','inline')
		       $('#ItemsearcH_numselect').text(l);
			
		       //hidden the others
		       $('#SourcE_select #SelecT').css('display','block');
		       $('#SourcE_select #SelectnO').css('display','none');                       
	                    return false;
                }
                
	    //item select more:ctrl	
                if (event.ctrlKey) {                                       
                }
                			
	    //item select one
                start = this;            
                //show source to the E  
                var ordernum=$(this).index();
                if(ordernum==0){             	
		PicturE_show('0');
              	
                }else{            	
		PicturE_show(ordernum);
                }
                
                //set ordernum for up and next one
                $('#HiddeN_projectitemordernum').val(ordernum);
                
                //selected element display
                $(this).addClass("source-selected");
                				
	    //Start the set
	    $('#SourcE_set #SeT').css('display','block');		
	    $('#SourcE_set #SetnO').css('display','none');
	       
	    //item select:numshow
	    var l=$('.source-selected').length;
	    $('#ItemselecT_numshowdt').css('display','inline')
	    $('#ItemselecT_numshow').text(l);
	    $('#ItemsearcH_numselectdt').css('display','inline')
	    $('#ItemsearcH_numselect').text(l);
	
	    //hidden the others
                $('#SourcE_select #SelecT').css('display','block');
                $('#SourcE_select #SelectnO').css('display','none');                     	
									
	});
	//item select more:ctrl
	$('html').keydown(function(event){
		keyN=event.which;                  		        		        			                			
                        if(keyN==17){
                        	$("#SourcE_Vsourcesshow,#SourcE_adda,.source").off('mouseup');  
                        	//Stop the set
			$('#SourcE_set #SeT').css('display','none');		
			$('#SourcE_set #SetnO').css('display','block');    		
                        }
	});

	$('html').keyup(function(event){
		keyN=event.which;		
                        if(keyN==17){
                        	$("#SourcE_Vsourcesshow,#SourcE_adda").on('mouseup',function(){				
				$(".source").removeClass('source-selected');
				//Stop the delete
				$('#SourcE_delete #DeletE').css('display','none');		
				$('#SourcE_delete #DeletenO').css('display','block');
		                          		
				//Stop the set
				$('#SourcE_set #SeT').css('display','none');		
				$('#SourcE_set #SetnO').css('display','block'); 
		                          		
				//item select:numhide
				$('#ItemselecT_numshowdt').css('display','none')
				$('#ItemselecT_numshow').text('');
				$('#ItemsearcH_numselectdt').css('display','none')
				$('#ItemsearcH_numselect').text(''); 
				
				//hidden the others
		                         $('#SourcE_select #SelecT').css('display','block');
		                         $('#SourcE_select #SelectnO').css('display','none');                      		
                        	});                        	
                        }
	});

	//item select more:all
	$('#SourcE_select #SelecT').click(function(){
                        $(".source").addClass('source-selected');
                        $(this).css('display','none');
                        $('#SourcE_select #SelectnO').css('display','block');
                         
     		//Start the delete
		$('#SourcE_delete #DeletE').css('display','block');		
		$('#SourcE_delete #DeletenO').css('display','none');

		//Stop the set
		$('#SourcE_set #SeT').css('display','none');		
		$('#SourcE_set #SetnO').css('display','block');
		
		//item select:numshow
		var l=$('.source-selected').length;
		$('#ItemselecT_numshowdt').css('display','inline')
		$('#ItemselecT_numshow').text(l);
		$('#ItemsearcH_numselectdt').css('display','inline')
		$('#ItemsearcH_numselect').text(l);			                                 		
	});

	$('#SourcE_select #SelectnO').mouseup(function(){
                         $(".source").removeClass('source-selected');
                         $(this).css('display','none');
                         $('#SourcE_select #SelecT').css('display','block'); 
				
		//Stop the delete
		$('#SourcE_delete #DeletE').css('display','none');		
		$('#SourcE_delete #DeletenO').css('display','block');
		
		//Stop the set
		$('#SourcE_set #SeT').css('display','none');		
		$('#SourcE_set #SetnO').css('display','block');		 
		
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');	                                                                     		
	});
	
	/*no select the source*/	
	$("#SourcE_Vsourcesshow,#SourcE_adda").mouseup(function(){
		$(".source").removeClass('source-selected');
		//Stop the delete
		$('#SourcE_delete #DeletE').css('display','none');		
		$('#SourcE_delete #DeletenO').css('display','block');
		                          		
		//Stop the set
		$('#SourcE_set #SeT').css('display','none');		
		$('#SourcE_set #SetnO').css('display','block'); 
		                          		
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');
		$('#ItemsearcH_numselectdt').css('display','none')
		$('#ItemsearcH_numselect').text(''); 
		
		//hidden the others
                         $('#SourcE_select #SelecT').css('display','block');
                         $('#SourcE_select #SelectnO').css('display','none');												
	});		 		
}
/*Select:Action*/		
$(function(){		
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/




