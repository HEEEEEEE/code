/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/




/*show the filebox show the filebox show the filebox*/
		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item_filebox(){
	  	  /*start start start start start*/											  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"filebox/picture/show_source.php?action=filebox_show",
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
		  	  result_show_filebox(result);		  	  
		  	  /*Select the item*/
		  	  item_select_filebox();
//			  Fscroll();			  
		  	  /*hide the filebox*/
			  Selectdone();		  	    		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_show_filebox(result){
	document.getElementById("AreA_source_filebox").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	$("#SourcE_adda,#SforE_add,#SeforE_add").click(function(){		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}					
	});			
})

/*when user post when user post when user post when user post when user post*/
		/*delete the item delete the item delete the item*/                         
/*delete the item:Function*/
function add_source(s){
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
			  //aid
			  var aid=$('#HiddeN_projectcaid').val(); 
			  //cid      
			  var cid=$('#HiddeN_projectcid').val();              		  		
			  xmlhttp=$.ajax({
			  	//set the request url
			  	url:PROJECTDIR+"close/source/pictu/addA.php?action=source_add",
			  	//set the request way
			  	type:'POST',
			  	//set the post data
			  	data:'id='+id+'&aid='+aid+'&cid='+cid,
			  	//set return data type
			  	dataType:'text',		  
			            //set function for success		            
			  /*end end end end end*/
			  success:function(){			  				  	
			  	  s++;
			  	  if(s>=xo.length){
			  	  	//showitem
					show_source('','');
										
					//show item's num
					var itemnumf=$("#IteM_numshow").text();
					var itemnumf=parseInt(itemnumf,10);
					var more=parseInt(xo.length,10);
					var itemnumb=itemnumf+more;
					$("#IteM_numshow").text(itemnumb);
					$("#ItemsearcH_numitem").text(itemnumb);
					
					//
					 $("#SourcE_Vnosourceback").css('display','none');
					 $("#SourcE_Enosourceback").css('display','none');					 										 			  	  	
			  	  	//hidefilebox
					hide_filebox();			  	  	
			  	  }
			  	  else{
					  //return the data
					  result=xmlhttp.responseText;
					  //deal the data
					  if(result=='infor:addsucceed'){	                        			
				                        add_source(s); 								 	
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
function post_add(){
	s=0;
	add_source(s);
}
//post thedata:action
$(function(){	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













