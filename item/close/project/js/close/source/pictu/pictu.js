/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





$(function(){
	/*Custom the included title Custom the included title Custom the included title
	 */
	var username=$('#BasicF_username').attr('title');
	var closename=$('#BasicC_name').attr('title');
	var albumname=$('#BasicA_name').attr('title');
	var title='OCLOCLO '+username+' > Close:'+closename+' > Album:'+albumname+' > Source:Picture';
	$('title').text(title);
		 		
	/*Custom the included top's cssCustom the included top's cssCustom the included top's css
	 *
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * /
	 /*Custom the top Custom the top Custom the top Custom the top Custom the top Custom the top*/	
	 
	 //Custom the album's des
	 /*
	  * *********************
	  */
	 var itemnum=$("#IteM_numshow").text();
	 var itemnum=parseInt(itemnum,10);	  
	 var des=$('#AlbumdeS_content #DeS').text();
	 if(itemnum==0 && des==''){
	 	$('#SourcE_adesnosourceback,#SadesbacK').css('display','block');
	 }
	 else if(itemnum!=0 && des==''){
	 	$('#SourcE_adesnosourceback,#SadesforE').css('display','block');	 	
	 }								



})



		/*echo the set menuecho the set menuecho the set menuecho the set menu*/                         
/*echo the set menu:Function*/
function show_setm(){
	  	  /*start start start start start*/		  		   	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/source/pictu/set.php",
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
		  	  	result_showsetm(result);
		  	  	
		  	  //show
		  	  	showmenu_set();	
		  	  //input
		  	  	input_set();
		  	  	
		  	  //done:close
				  $('#SourcesM_topclose').click(function(){
					hidemenu_set();	
				  });		  	  
		  	  //done:done
			            //Event:mouse
			            $("#SourcesM_bom #SubmiT").click(function(){
					post_set();			
				});  
				//Event:key
				$("#SourcesM_sname #NamE").keydown(function(event){  	 
					keyN=event.which;
					if(keyN==13){
						post_set();
						return false; 								
					}	    
				});		  	    		  	   		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_showsetm(result){
	$("#SourcE_Vmaintoolmenu_settings").html(result);	
}
		/*echo the set menuecho the set menuecho the set menuecho the set menu*/  
/*echo the set menu:Action*/
$(function(){
	$('#SourcE_set #SeT').click(function(){
		show_setm();
	});
})


		/*echo the delete menuecho the delete menuecho the delete menuecho the delete menu*/                         
/*echo the delete menu:Function*/
function show_deletem(){
	  	  /*start start start start start*/		  		   	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/source/pictu/delete.php",
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
		  	  	result_showdeletem(result);
		  	  	
		  	  //show
		  	  	showmenu_delete();	
		  	  	
		  	  //done:close
				  $('#SourcedM_topclose').click(function(){
					hidemenu_delete();	
				  });		  	  
		  	  //done:done
			            //Event:mouse
			            $("#SourcedM_bom #SubmiT").click(function(){
					post_delete();			
				});  
				//Event:key	
				$("#SourcedM_dname #NamE").keydown(function(event){  	 
					keyN=event.which;
					if(keyN==13){
			//			post_delete();
						return false; 								
					}	    
				});		  	    		  	   		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_showdeletem(result){
	$("#SourcE_Vmaintoolmenu_delete").html(result);	
}
		/*echo the delete menuecho the delete menuecho the delete menuecho the delete menu*/  
/*echo the delete menu:Action*/
$(function(){
	$('#SourcE_delete #DeletE').click(function(){
		show_deletem();
	});
})




