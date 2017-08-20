/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


/*show delete menu*/
//show delete menu:Function
function showmenu_delete(){
		//Show delete menu background	
		$('#SourcedMbacK').css('display','block');
		//Show delete menu
		$('#SourcedM').css('display','block');
		
		/*Get the dataGet the dataGet the dataGet the dataGet the data*/
                        //num
	            var xol=$(".source-selected").length;
	            if(xol==1){
	            	$('#SourcedM_dname #NuM').text(xol);
	            	$('#SourcedM_dname #ImagetiP').text('Picture?');
	            }else{
	            	$('#SourcedM_dname #NuM').text(xol);
	            	$('#SourcedM_dname #ImagetiP').text('Pictures?');	            	
	            } 				
}
//show delete menu:action
$(function(){				
})



/*hide delete menu*/
//hide delete menu:Function
function hidemenu_delete(){
	//hide the close delete menu
	$('#SourcedM').css('display','none');
	$('#SourcedMbacK').css('display','none');	
	
	//reset the form
	var form=document.getElementById('SourcedM_form');	
	form.reset();
	//hide the tip
	$('#SourcedM_tip,#SourcedM_tip1').css('display','none');			
}
//hide delete menu:action
$(function(){			             
})

/*when user post when user post when user post when user post when user post*/
		/*delete the item delete the item delete the item*/                         
/*delete the item:Function*/
function delete_source(s){
	/*Set the data:*/
	//id
	var xo=$(".source-selected");
	var xa=$(".source-selected").toArray();
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     //id
		     var ids=xa[s].id;
		     var id=ids.match(/\d{1,12}/);
		     var id=parseInt(id,10);
		     //aid
		     var aid=$('#HiddeN_projectcaid').val();
		     //cid
		     var cid=$('#HiddeN_projectcid').val();		     
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/source/pictu/deleteA.php?action=source_delete",
		     	type:'POST',
		     	data:'id='+id+'&aid='+aid+'&cid='+cid,
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
					
					//item :numshow
					var itemnumf=$("#IteM_numshow").text();
					var itemnumf=parseInt(itemnumf,10);
					var less=parseInt(xo.length,10);
					var itemnumb=itemnumf-less;
					$("#IteM_numshow").text(itemnumb);
					$('#ItemsearcH_numitem').text(itemnumb);
					
					noanysource=$('#SourcE_Vsearchdatashowframe').css('display');
					if(noanysource!='block'){
						if(itemnumb==0){
							$("#SourcE_Vnosourceback").css('display','block');
							$("#SourcE_Enosourceback").css('display','block');
							
							//clear the E's src
							$('#SourceE').attr('src','');
						}
						else{
							$("#SourcE_Vnosourceback").css('display','none');
							$("#SourcE_Enosourceback").css('display','none');
							
							  //scroll to top					
							  conts_toptozer();
							  
							   /*show_Eshow_Eshow_Eshow_Eshow_Eshow_E*/
							  //show the first source to E							  
							  PicturE_show('0'); 									
						}
					}else{
						if(itemnumb==0){	
							$("#SourcE_Enosourceback").css('display','block');
							
							//clear the E's src
							$('#SourceE').attr('src','');
						}
						else{
							$("#SourcE_Enosourceback").css('display','none');
							
							  //scroll to top					
							  conts_toptozer();
							  
							   /*show_Eshow_Eshow_Eshow_Eshow_Eshow_E*/
							  //show the first source to E
							  PicturE_show('0');									
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
				                        delete_source(s); 								 	
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
	delete_source(s);
}
//post thedata:action
$(function(){	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













