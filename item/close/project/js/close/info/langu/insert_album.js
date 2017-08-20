/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/			

/*PagE:choose a position
 *TooL:choose a source | //set a source | Insert a source 
 *PagE:show a source
 *           mouseover:side to set or delete the source
 *                    click:top to set or delete the source
 *           dblclick:set a source 
 */
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
/*PagE:choose a position
 */ 		
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
		
		//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL 
/*PagE:choose a position
 *TooL:choose a source | set a source | Insert a source 
 */
//TooL:choose a source		
/*show the album show the album show the album show the album show the album*/
		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item_album(){
	//cid
	var cid=$('#HiddeN_projectcid').val();
//	alert(cid);	
	  	  /*start start start start start*/											  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/albui/pictu/show_info.php?action=album_show",
		  	//set the request way
		  	type:'POST',
		  	//data
		  	data:'cid='+cid,
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  		result=xmlhttp.responseText;
			  		//deal the data
		  	  	result_show_album(result);		  	  
		  	  /*Select the item*/
		  	  		item_select_album();
//			  Fscroll();
		  	  	/*hide the filebox*/
			  			Selectdonealbum();		  	    		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_show_album(result){
	document.getElementById("AreA_source_album").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	$("#TooL_sour2 #AlbuM").click(function(){		
		var albumL=$("#AreA_source_album div").length;
		if(albumL==0){
			show_item_album();
			$('#AreA_source_album').css('display','block');			
		}
		else{
			$('#AreA_source_album').css('display','block');			
		}					
	});
	
	$("#InfoasM_sbrowserchange #ChangEA").click(function(){		
		var albumL=$("#AreA_source_filebox div").length;
		if(albumL==0){
			show_item_album();
			$('#AreA_source_album').css('display','block');			
		}
		else{
			$('#AreA_source_album').css('display','block');			
		}			
	});
	
	$("#InfoasetM_sbrowserchange #ChangEsetA").click(function(){		
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

/*PagE:choose a position
 *TooL:choose a source | Insert a source 
 */
//TooL:insert a source
	/*show the source insert menu*/
	//function
	function showmenu_album(itemid){		
					   	     var itemid='#'+itemid;
				     	var cloneitem=$(itemid).clone();
		           		$('#InfoasM_sbrowsershow').empty();
			$('#InfoasM_sbrowsershow').append(cloneitem);					   
	            //DeS
	            var adesid='#InfoasM_sbrowsershow .album-p-des-hide';
	            var ades=$(adesid).text();
	
	            var des=document.getElementById('InfoasM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            	des[0].value=ades;           
	            		setTimeout("$('#InfoasM_sdes #DeSA').focus();",500); 	                       				 	
	            			            
		           $('#InfoasMbacK,#InfoasM').css('display','block');		           				
	}
	//action



/*PagE:choose a position
 *TooL:choose a source | set a source | Insert a source 
 */
/*foucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucs 
 */
	
 /*foucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucs 
  */
//TooL:Insert a source
//function
function insert_album(){
	//id 
	var albuml=$('#CONTENT .album-p').length;
	var album_idnum=albuml+1;
	var id='AlbuM-p'+album_idnum;
	$('#InfoasM_sbrowsershow .album-p').attr('id',id);
	$('#InfoasM_sbrowsershow .album-p').removeClass('album-p-selected');
	$('#InfoasM_sbrowsershow .album-p').css('float','left');
	$('#InfoasM_sbrowsershow .album-p').css('clear','both');

	var album=$('#InfoasM_sbrowsershow').html();
	var album="<p class='framelevel1 framelevel1-lang'><br class='framelevel1-br'/></p>"+album+"<p class='framelevel1 framelevel1-lang'><br class='framelevel1-br'/></p>";		
	document.execCommand('InsertHTML',false,album);		  						
}
//action
function InserTalbum(){
            $('.frame').click(function(){
		var albumexist=$('#HiddeN_projectalbumexist').val();
            	if(albumexist==1){
		            insert_album();	
//		            setTimeout('setalbum_outside();',500);
//		            setTimeout('setalbum_top();',500); 
			$('#HiddeN_projectalbumexist').val(''); 
		            		setTimeout('setalbum_outside();',500);
		            			setTimeout('setalbum_top();',500);			           		
            	}           		            	            		
	            	
            });	
}

	/*hide the source insert menu*/
	//function
	function hidemenu_album(){					            
	            //hide
	            $('#InfoasMbacK,#InfoasM').css('display','none');
		//hide the tip
		
		/*resetresetresetresetresetreset
		 * 
		 ***********************************************/
		//reset the form
		var form=document.getElementById('InfoasM_form');	
		form.reset(); 	           				
	}
	//action
	$(function(){
		$('#CanceLalbum').click(function(){
			hidemenu_album();	
		});			             
	})
		//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL



 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
/*PagE:show a source
 *           mouseover:side to set or delete the source
 *                    click:top to set or delete the source
 *           dblclick:set a source 
 */		
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE 
			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/



/*When user input*/
$(function(){                            
//des
            var des=document.getElementById('InfoasM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
	            //DeS
	            var adesid='#InfoasM_sbrowsershow .album-p-des-hide';
	            $(adesid).text(des);            	
            	if(des.length<=250){         		
            	}          	
	            else{ 	            	
	            }	
            }              	             
})



/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function insert_albumA(){
	/*Set the data:*/
	//id
	var id=$('#HiddeN_projectalbumitemid').val();
	  var id=id.match(/\d{1,12}/);
	   var id=parseInt(id,10);	
	//des
            var des=document.getElementById('InfoasM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}

	//cid
	var cid=$('#HiddeN_projectcid').val();
//	alert(id+"\n"+des+"\n"+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/infi/langu/insert_albumA.php?action=album_insert",
		     	type:"POST",
		     	data:'id='+id+'&des='+des+'&cid='+cid,
		     	datatype:'text',
		     	success:function(){
				result=xmlhttp.responseText;
				result_insertalbumA(result);	     		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_insertalbumA(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savefail/i.test(result);		
	if(match==false){
		$('#HiddeN_projectalbumexist').val('1');			            
		/*hidemenu*/
		hidemenu_album();	            			 	
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_insertalbumA(){		
		 //basic:des
	            var des=document.getElementById('InfoasM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if(des.length>250){ 			
		}
		else{			
			 insert_albumA();	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse       
            $("#SubmiTalbum").click(function(){
		post_insertalbumA();
		InserTalbum();			
	}); 
//	//Event:key	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













