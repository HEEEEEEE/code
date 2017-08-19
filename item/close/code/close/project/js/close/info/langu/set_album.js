/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*mouseover:outside
 *	click:top 
 *	     dblclick:full 
 * 
 * 
 * */
 /*outside set outside set outside set outside set outside set
  * 
  */
  //function
 function setalbum_outside(){
 	//show
 	$('#CONTENT .album-p').mouseover(function(event){		
 				var id=$(this).attr('id');
 		$('#HiddeN_projectalbumitemid').val(id); 		
		to=event.clientY;
		to=to-75;
		le=event.clientX;
		le=le+25;
		$('#MenU_pagealbummouseover').css({top:to+'px',left:le+'px',display:'block'});	
	});
	
		//set the album
		$('#MouseoveR_setalbum').click(function(){
			var itemid=$('#HiddeN_projectalbumitemid').val();
						showmenu_albumsetpage(itemid);			
		});	
	
		//delete the album
		$('#MouseoveR_removealbum').click(function(){
			var id=$('#HiddeN_projectalbumitemid').val();
			var id='#'+id;
			$(id).remove();
			$('##HiddeN_projectalbumitemid').val('');			
		});		
		
	$('#CONTENT .album-p').dblclick(function(){
			var itemid=$('#HiddeN_projectalbumitemid').val();
						showmenu_albumsetpage(itemid);			
	});				
	//hide
 	$('html').click(function(){
		$('#MenU_pagealbummouseover').css('display','none');
	});					
 }
 //action
 $(function(){
 })
	/*show the source set menu*/
//function
function showmenu_albumsetpage(itemid){
					   		var itemid='#'+itemid;
				     	var cloneitem=$(itemid).clone();
		                  $('#InfoasetM_sbrowsershow').empty();
		                         
					$('#InfoasetM_sbrowsershow').append(cloneitem);
		            $('#InfoasetM_sbrowsershow .album-p').css('float','none');
		$('#InfoasetM_sbrowsershow .album-p').css('margin','12.5px auto');					   
	            //DeS
	            var adesid='#InfoasetM_sbrowsershow .album-p-des-hide';
	            			var ades=$(adesid).text();
	
	            		var des=document.getElementById('InfoasetM_sdes');
	            			 var des=des.getElementsByTagName('textarea'); 
	            					    des[0].value=ades;                       
            setTimeout("$('#InfoasetM_sdes #DeSsetA').focus();",500);
            
            //showshowshowshowshowshowshowshowshowshowshowshow
            $('#InfoasetMbacK,#InfoasetM').css('display','block');				
}
//function
function showmenu_albumsetbox(itemid){				
}
//action
	/*hide the album set menu*/
	//function
	function hidemenu_albumset(){					            
	            //hide
	            $('#InfoasetMbacK,#InfoasetM').css('display','none');
		//hide the tip
		
		/*resetresetresetresetresetreset
		 * 
		 ***********************************************/
		//reset the form
		var form=document.getElementById('InfoasetM_form');	
		form.reset(); 	           				
	}
	//action
	$(function(){
		$('#CanceLalbumset').click(function(){
			hidemenu_albumset();	
		});			             
	}) 
	
	
	
/*When user input*/
$(function(){                            
//des
            var des=document.getElementById('InfoasetM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
	            //DeS
	            var adesid='#InfoasetM_sbrowsershow .album-p-des-hide';
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
function set_albumA(){
	/*AJAX*/
	     /*Start:create a AJAX object*/
	result='infor:savesucceed'
	result_setalbumA(result);
	      /*End:create a AJAX object*/    			    		    	  	  	  	
	/*AJAX*/	

	
}
/*Function:set the ajaxresult*/
function result_setalbumA(result){		            
	/*Saveecho:inforsucceed*/
	var match=/^infor:savesucceed/i.test(result);		
	if(match==true){
		/*hidemenu*/
		hidemenu_albumset();		
	}				          	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_setalbumA(){		
		 //basic:des
	            var des=document.getElementById('InfoasetM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if(des.length>250){ 			
		}
		else{			
			 set_albumA();	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse       
            $("#SubmiTalbumset").click(function(){
		post_setalbumA();			
	}); 
//	//Event:key	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/



 /*top set top set top set top set top set
  * 
  */
  //function
 function setalbum_top(){
 	//show
 	$('#CONTENT .album-p').click(function(){
		$('#MenU_pagealbumclick').css('display','block');	
	});
		
		//set the source
		            //positionpositionpositionpositionpositionpositionposition
			//browser
			//done
			$('#ClicK_positionfloatlalbum').click(function(){
				var itemid=$('#HiddeN_projectalbumitemid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','left');
							
			});
			$('#ClicK_positionmargincalbum').click(function(){
				var itemid=$('#HiddeN_projectalbumitemid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','none');
				$(itemid).css('margin','0 auto');
				
							
			});			
			$('#ClicK_positionfloatralbum').click(function(){
				var itemid=$('#HiddeN_projectalbumitemid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','right');
							
			});												
	//hide
 	$('#CONTENT').mouseup(function(){
		$('#MenU_pagealbumclick').css('display','none');
	});	
 }
  //action
	 $(function(){
	 	
	 })
 
 
 
  /*full set full set full set full set full set
  * 
  */
  //function
 function setalbum_full(){
 	
 }
  //action
	 $(function(){
	 	
	 })
 
 
 
 
 	