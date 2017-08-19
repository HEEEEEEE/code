/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the close delete menu*/
function showTheCloseDeleteMenu(){	
	//Show the close delete menu background	
	$('#ClosedMbacK').css('display','block');
	//Show the close delete menu
	$('#ClosedM').css('display','block');
	
	var id_name=document.getElementById("ClosedM_dname");
	var tag_name=id_name.getElementsByTagName("input");
	tag_name[0].readOnly=true;
//		setTimeout("$('#ClosedM_dname #NamE').focus();",1500);	
	/*Get the dataGet the dataGet the dataGet the dataGet the data*/
	//Get the itemid from hiddeN
	var itemid=$('#HiddeN_projectitemid').val();
	 //ID
	var id=itemid.match(/\d{1,12}/);
	$("#ClosedM_did #ID").val(id);						
             //NamE
	var itemname=itemid+' .closename';
	var nam=$(itemname).text();
	$("#ClosedM_dname #NamE").val(nam);                         				
}

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
	$('#ClosedM_tip,#ClosedM_tip1').css('display','none');			
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
function delete_close(){
	/*Set the data:*/
	//id
	var id=$("#ClosedM_did #ID").val();	 			
	var data='id='+id;

		/*AJAX*/
		     /*Start:create a AJAX object*/
			var xmlhttp;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			}
			else{// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
												  
		    /*Url the data:*/
		    //close/closeproc/closeproc_deleteA.php
		    //CLOSE.php
			  xmlhttp.open("POST",PROJECTDIR+"close/close/deleteA.php?action=close_delete",true);
			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
			  
		    /*Acee the data:*/
			      /*return the data*/
		    	xmlhttp.onreadystatechange=function(){
			  	if (xmlhttp.readyState==4 && xmlhttp.status==200){
			  		/************************************ 
			  		 * source:
			  		 * information:
			  		 * 
			  		 **/
					result=xmlhttp.responseText;
					result_delete(result);
				}
		    	}
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:delete the ajaxresult*/
function result_delete(result){
	/*Deleteecho:succeed*/	
	if(result=='infor:deletesucceed'){
                        //delete the item
		var itemid=$('#HiddeN_projectitemid').val();
                        $(itemid).remove();
                         
                        //hide delete 		                         	                        
		/*hidemenu*/
		hidemenu_delete();								 	
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post thedata:function		
function post_delete(){
	delete_close();
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













