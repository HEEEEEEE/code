/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the close delete menu*/
$(function(){		
	$('#FileboX_delete #DeletE').click(function(){
		//Show the close delete menu background	
		$('#ClosedMbacK').css('display','block');
		//Show the close delete menu
		$('#ClosedM').css('display','block');
			
		/*Get the dataGet the dataGet the dataGet the dataGet the data*/
                        //num
	            var xol=$(".filebox-source-selected").length;
	            if(xol==1){
	            	$('#ClosedM_dname #NuM').text(xol);
	            	$('#ClosedM_dname #ImagetiP').text('Image?');
	            }else{
	            	$('#ClosedM_dname #NuM').text(xol);
	            	$('#ClosedM_dname #ImagetiP').text('Images?');	            	
	            }                       
		                         		
	});		
})

/*hide the close delete menu*/
//hide the close delete menu:Function
function hidemenu_delete(){
	//hide the close delete menu
	$('#ClosedM').css('display','none');
	$('#ClosedMbacK').css('display','none');
	//reset the form
	var form=document.getElementById('ClosedM_form');	
	form.reset();
	//hide the tip
//	$('#ClosedM_tip,#ClosedM_tip1').css('display','none');			
}
//hide the close delete menu:action
$(function(){
	$('#ClosedM_topclose').click(function(){
		hidemenu_delete();
	});			             
})

/*when user post when user post when user post when user post when user post*/
		/*delete the item delete the item delete the item*/                         
/*delete the item:Function*/
function delete_close(s){
	  	  /*start start start start start*/
  	  	/*Set the data:*/
		//id
//		var id=$("#ClosedM_did #ID").val();
	              //begin:let the object can array
	              var xo=$(".filebox-source-selected");
		  var xa=$(".filebox-source-selected").toArray();
//		  for(s=0;s<xo.length;s++){
			  var ids=xa[s].id;
			  var id=ids.match(/\d{1,12}/);
			  var id=parseInt(id,10);                        		  		
			  xmlhttp=$.ajax({
			  	//set the request url
			  	url:PROJECTDIR+"filebox/picture/delete_server.php?action=close_delete",
			  	//set the request way
			  	type:'POST',
			  	//set the post data
			  	data:'id='+id,
			  	//set return data type
			  	dataType:'text',		  
			            //set function for success		            
			  /*end end end end end*/
			  success:function(){			  				  	
			  	  s++;
			  	  if(s>=xo.length){
					//itemnum
			                        var itemnum=$("#IteM_numshow").text();
			                        var itemnum=parseInt(itemnum,10);
			                        var itemnum=itemnum-(xo.length);
			                         $("#IteM_numshow").text(itemnum);
		                          //delete the item
		                          for(i=0;i<xo.length;i++){
		                          	var ids=xa[i].id;
		                          	var ids='#'+ids;
		                          	$(ids).remove();		                          	
		                          }				                         			  	  				  	  				                         
			                        //hide delete
					$('#FileboX_delete #DeletE').css("display","none");
					$('#FileboX_delete #DeletenO').css("display","block");
					//item select:numhide
					$('#ItemselecT_numshowdt').css('display','none')
					$('#ItemselecT_numshow').text('');
					
					//hidden the others
			                         $('#FileboX_select #SelecT').css('display','block');
			                         $('#FileboX_select #SelectnO').css('display','none');					 		                         	                        
					/*hidemenu*/
					hidemenu_delete();			  	  	
			  	  }
			  	  else{
					  //return the data
					  result=xmlhttp.responseText;
					  //deal the data
					  if(result=='infor:deletesucceed'){	                        			
				                        delete_close(s); 								 	
					  }			  	  				  	  	
			  	  }		
			          }
			  });			  
//		  }	
}
/*Function:delete the ajaxresult*/
function result_delete(result){	
}

		/*post the data post the data post the data post the data post the data*/
//post thedata:function		
function post_delete(){
	s=0;
	delete_close(s);
}
//post thedata:action
$(function(){
            //Event:mouse
            $("#ClosedM_bom #SubmiT").click(function(){
		post_delete();			
	});  
	//Event:key
	/*Focus the NamE*/
//	$("#ClosedMbacK,#ClosedM").click(function(){  	 
//		$('#ClosedM_dname #NamE').focus();	    
//	});	
	$("#ClosedM_dname #NamE").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
//			post_delete();
			return false; 								
		}	    
	});	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













