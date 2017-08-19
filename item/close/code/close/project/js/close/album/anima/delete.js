/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the close delete menu*/
$(function(){		
	$('#AlbumtooL #DeletE').click(function(){
		//
		$('#CenteR').css('zIndex','7');
		$('#AlbuM_con').css('zIndex','7');		
		//Show the close delete menu background	
		$('#AlbumdMbacK').css('display','block');
		//Show the close delete menu
		$('#AlbumdM').css('display','block');
		
		/*Get the dataGet the dataGet the dataGet the dataGet the data*/
                        //num
	            var xol=$(".album-p-selected").length;
	            if(xol==1){
	            	$('#AlbumdM_dname #NuM').text(xol);
	            	$('#AlbumdM_dname #ImagetiP').text('Album?');
	            }else{
	            	$('#AlbumdM_dname #NuM').text(xol);
	            	$('#AlbumdM_dname #ImagetiP').text('Albums?');	            	
	            }  						                        		
	});		
})

/*hide the close delete menu*/
//hide the close delete menu:Function
function hidemenu_delete(){
	//hide the close delete menu
	$('#AlbumdM').css('display','none');
	$('#AlbumdMbacK').css('display','none');
	
	$('#CenteR').css('zIndex','5');
	$('#AlbuM_con').css('zIndex','5');	
	
	//reset the form
	var form=document.getElementById('AlbumdM_form');	
	form.reset();
	//hide the tip
	$('#AlbumdM_tip,#AlbumdM_tip1').css('display','none');			
}
//hide the close delete menu:action
$(function(){
	$('#AlbumdM_topclose').click(function(){
		hidemenu_delete();
	});			             
})

/*when user post when user post when user post when user post when user post*/
		/*delete the item delete the item delete the item*/                         
/*delete the item:Function*/
function delete_albump(s){
	/*Set the data:*/
	//id
	var xo=$(".album-p-selected");
	var xa=$(".album-p-selected").toArray();
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     //id
		     var ids=xa[s].id;
		     var id=ids.match(/\d{1,12}/);
		     var id=parseInt(id,10);
			//cid
			var cid=$('#HiddeN_projectcid').val();		     
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/albui/anima/deleteA.php?action=album_delete",
		     	type:'POST',
		     	data:'id='+id+'&cid='+cid,
		     	dataType:'text',
		     	success:function(){
			  	  s++;
			  	  if(s>=xo.length){
		                          //delete the item
		                          for(i=0;i<xo.length;i++){
		                          	var ids=xa[i].id;
		                          	var ids='#'+ids;
		                          	$(ids).remove();		                          	
		                          }				                         			  	  				  	  				                         
					//delete:hide
					$('#AlbumtooL #DeletE').css('display','none');		
					$('#AlbumtooL #DeletenO').css('display','block');
					
					//set:hide
					$('#AlbumtooL #SeT').css('display','none');		
					$('#AlbumtooL #SetnO').css('display','block');
					
					//item select:numhide
					$('#ItemselecT_numshowdt').css('display','none')
					$('#ItemselecT_numshow').text('');
								
					$('#ItemsearcH_numselectdt').css('display','none')
					$('#ItemsearcH_numselect').text('');
					
					//item :numshow
					var itemnumf=$("#IteM_numshow").text();
					var itemnumf=parseInt(itemnumf,10);
					var less=parseInt(xo.length,10);
					var itemnumb=itemnumf-less;
					$("#IteM_numshow").text(itemnumb);
					$('#ItemsearcH_numitem').text(itemnumb);
					
					noanyalbum=$('#AlbumprocoutsidE_bottom').css('display');
					if(noanyalbum!='block'){
						if(itemnumb==0){
							$("#AlbuM_con_oaback").css('display','block');	
						}
						else{
							$("#AlbuM_con_oaback").css('display','none');		
						}
					}
								
					//item :searchnumshow
					var itemnumf=$("#ItemsearcH_numshow").text();
					var itemnumf=parseInt(itemnumf,10);
					var less=parseInt(xo.length,10);
					var itemnumb=itemnumf-less;
					$("#ItemsearcH_numshow").text(itemnumb);
					searchnum_show(itemnumb);
																 					 		                         	                        
					/*hidemenu*/
					hidemenu_delete();			  	  	
			  	  }
			  	  else{
					  //return the data
					  result=xmlhttp.responseText;
					  //deal the data
					  if(result=='infor:deletesucceed'){	                        			
				                        delete_albump(s); 								 	
					  }
			  	  }			  	  		     		
		     	},
		     	
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:delete the ajaxresult*/
function result_delete(result){
}

		/*post the data post the data post the data post the data post the data*/
//post thedata:function		
function post_delete(){
	s=0;
	delete_albump(s);
}
//post thedata:action
$(function(){
            //Event:mouse
            $("#AlbumdM_bom #SubmiT").click(function(){
		post_delete();			
	});  
	//Event:key
	/*Focus the NamE*/
//	$("#AlbumdMbacK,#AlbumdM").click(function(){  	 
//		$('#AlbumdM_dname #NamE').focus();	    
//	});	
	$("#AlbumdM_dname #NamE").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
//			post_delete();
			return false; 								
		}	    
	});	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













