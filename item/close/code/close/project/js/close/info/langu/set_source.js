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
 function setsource_outside(){
 	//show
 	$('.source').mouseover(function(event){		
 				var sourceid=$(this).attr('id');
 		$('#HiddeN_projectitemsourceid').val(sourceid);
 		
		to=event.clientY;
		to=to-75;
		le=event.clientX;
		le=le+25;
		$('#MenU_pagesourcemouseover').css({top:to+'px',left:le+'px',display:'block'});	
	});
		//delete the source
		$('#MouseoveR_remove').click(function(){
			var sourceid=$('#HiddeN_projectitemsourceid').val();
			var sourceid='#'+sourceid;
			$(sourceid).remove();
			$('#HiddeN_projectitemsourceid').val('');			
		});
		
		//set the source
		$('#MouseoveR_set').click(function(){
			$('#HiddeN_projectfileboxinsertorset').val('1');
			var itemid=$('#HiddeN_projectitemsourceid').val();
			showmenu_sourcesetpage(itemid);			
		});
		
	$('.source').dblclick(function(){
		$('#HiddeN_projectfileboxinsertorset').val('1');
		var itemid=$(this).attr('id');
		showmenu_sourcesetpage(itemid);			
	});				
	//hide
 	$('html').click(function(){
		$('#MenU_pagesourcemouseover').css('display','none');
	});					
 }
 //action
 $(function(){
 })
	/*show the source set menu*/
//function
function showmenu_sourcesetpage(itemid){
	/*sourcesourcesourcesourcesourcesourcesourcesource
	 * 
	 */
			var itemid='#'+itemid;		 											
	//Frame
		var framew=150;
	var frameh=150;
			
	//url
	var sourceconid=itemid+' .con';
		var url=$(sourceconid).attr('src');							
	//object
	var object='#SourceBset';			
	//source	
	PicturE_show(framew,frameh,url,object);		
	/*sourcesourcesourcesourcesourcesourcesourcesource
	 * 
	 */
	 
	/*desdesdesdesdesdesdesdesdesdesdesdesdesdesdesdes
	 */		 				 
            //DeS
            var sourcedesid=itemid+' .des';
            var sourcedes=$(sourcedesid).text();
		//des
            var des=document.getElementById('InfossetM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            des[0].value=sourcedes;	
            
            setTimeout("$('#InfossetM_sdes #DeSset').focus();",500);
            
            //showshowshowshowshowshowshowshowshowshowshowshow
            $('#InfossetMbacK,#InfossetM').css('display','block');				
}
//function
function showmenu_sourcesetbox(itemid){
	/*sourcesourcesourcesourcesourcesourcesourcesource
	 * 
	 */											
	//Frame
		var framew=150;
	var frameh=150;		
	//url			
	var itemid='#'+itemid+' .filebox-source-content';
	var url=$(itemid).attr('data-src');		
	//object
	var object='#SourceBset';			
	//source	
	PicturE_show(framew,frameh,url,object);		
	/*sourcesourcesourcesourcesourcesourcesourcesource
	 * 
	 */
	 
	/*desdesdesdesdesdesdesdesdesdesdesdesdesdesdesdes
	 */		 				 
            //DeS
            setTimeout("$('#InfossetM_sdes #DeSset').focus();",500);
            
            //showshowshowshowshowshowshowshowshowshowshowshow
            $('#InfossetMbacK,#InfossetM').css('display','block');				
}
//action
	/*hide the source set menu*/
	//function
	function hidemenu_sourceset(){					            
	            //hide
	            $('#InfossetMbacK,#InfossetM').css('display','none');
		//hide the tip
		
		/*resetresetresetresetresetreset
		 * 
		 ***********************************************/
		//reset the form
		var form=document.getElementById('InfossetM_form');	
		form.reset(); 	           				
	}
	//action
	$(function(){
		$('#CanceLsourceset').click(function(){
			hidemenu_sourceset();	
		});			             
	}) 
	
	
	
/*When user input*/
$(function(){                            
//des
            var des=document.getElementById('InfossetM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
            	if(des.length<=250){         		
            	}          	
	            else{ 	            	
	            }	
            }              	             
})



/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function set_sourceA(){
	/*Set the data:*/
	//id
	var id=$('#HiddeN_projectfileboxitemid').val();	
	if(id==''){
		var id='';
	}else{
		  var id=id.match(/\d{1,12}/);
		   var id=parseInt(id,10);		
	}	
	//des
            var des=document.getElementById('InfossetM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}
	
	//iid
	var iid=$('#HiddeN_projectciid').val();
	//cid
	var cid=$('#HiddeN_projectcid').val();
//	alert(id+"\n"+des+"\n"+iid+"\n"+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/infi/langu/set_sourceA.php?action=source_set",
		     	type:"POST",
		     	data:'id='+id+'&des='+des+'&iid='+iid+'&cid='+cid,
		     	datatype:'text',
		     	success:function(){
				result=xmlhttp.responseText;
				result_setsourceA(result);	     		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_setsourceA(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savefail/i.test(result);		
	if((match==false) && (result=='setsourceNO')){
			//url					
			//des
		            var des=document.getElementById('InfossetM_sdes');
		            var des=des.getElementsByTagName('textarea'); 
		            var des=des[0].value;
		            var itemid=$('#HiddeN_projectitemsourceid').val();
		            var itemid='#'+itemid;	
			var sourcedesid=itemid+' .des';
			$(sourcedesid).text(des);
						            
			/*hidemenu*/
			hidemenu_sourceset();				
	}else if((match==false) && (result!='setsourceNO')){
			//url		
			var url=ROOTDIR+result;
			var itemid=$('#HiddeN_projectitemsourceid').val();
			var itemid='#'+itemid;
			var object=itemid+' .con';
			PicturE_show(250,250,url,object);
			
			//des
		            var des=document.getElementById('InfossetM_sdes');
		            var des=des.getElementsByTagName('textarea'); 
		            var des=des[0].value;	
			var sourcedesid=itemid+' .des';
			$(sourcedesid).text(des);						            				
            }
			/*hidemenu*/
			hidemenu_sourceset();            	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_setsourceA(){		
		 //basic:des
	            var des=document.getElementById('InfossetM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if(des.length>250){ 			
		}
		else{			
			 set_sourceA();	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse       
            $("#SubmiTsourceset").click(function(){
		post_setsourceA();			
	}); 
//	//Event:key	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/



 /*top set top set top set top set top set
  * 
  */
  //function
 function setsource_top(){
 	//show
 	$('.source').click(function(){
		$('#MenU_pagesourceclick').css('display','block');	
	});
		
		//set the source
		            //positionpositionpositionpositionpositionpositionposition
			//browser
			//done
			$('#ClicK_positionfloatl').click(function(){
				var itemid=$('#HiddeN_projectitemsourceid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','left');
							
			});
			$('#ClicK_positionmarginc').click(function(){
				var itemid=$('#HiddeN_projectitemsourceid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','none');
				$(itemid).css('margin','0 auto');
				
							
			});			
			$('#ClicK_positionfloatr').click(function(){
				var itemid=$('#HiddeN_projectitemsourceid').val();
				var itemid='#'+itemid;
				$(itemid).css('float','right');
							
			});
			
			//sizesizesizesizesizesizesizesizesizesizesizesizesizesize
			$('#ClicK_sizesmall').click(function(){
				var itemid=$('#HiddeN_projectitemsourceid').val();
				var itemid='#'+itemid;				
				$(itemid).css('width','250px');
				
				var sourceconid=itemid+' .sourcecon';
				$(sourceconid).css('width','250px');
				$(sourceconid).css('height','250px');				
				//object				
				var itemconid=itemid+' .con';
				//url
				var url=$(itemconid).attr('src');				
				PicturE_show(250,250,url,itemconid);
				
				var sourcedesid=itemid+' .sourcedes';
				$(sourcedesid).css('width','250px');
				
							
			});
			$('#ClicK_sizebig').click(function(){
				var itemid=$('#HiddeN_projectitemsourceid').val();
				var itemid='#'+itemid;				
				$(itemid).css('width','500px');
				
				var sourceconid=itemid+' .sourcecon';
				$(sourceconid).css('width','500px');
				$(sourceconid).css('height','500px');				
				//object				
				var itemconid=itemid+' .con';
				//url
				var url=$(itemconid).attr('src');				
				PicturE_show(500,500,url,itemconid);
				
				var sourcedesid=itemid+' .sourcedes';
				$(sourcedesid).css('width','500px');
							
			});						
						
	//hide
 	$('#CONTENT').mouseup(function(){
		$('#MenU_pagesourceclick').css('display','none');
	});	
 }
  //action
	 $(function(){
	 	
	 })
 
 
 
  /*full set full set full set full set full set
  * 
  */
  //function
 function setsource_full(){
 	
 }
  //action
	 $(function(){
	 	
	 })
 
 
 
 
 	