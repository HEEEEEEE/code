/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


/*No any item No any item No any item No any item No any item */
/*No any item:Function*/
function Noanysource(){
	var itemnum=$("#IteM_numshow").text();
	var itemnum=parseInt(itemnum,10);
	if(itemnum==0){
		$("#SourcE_Vnosourceback").css('display','block');
		$("#SourcE_Enosourceback").css('display','block');	
	}
	else{
		$("#SourcE_Vnosourceback").css('display','none');
		$("#SourcE_Enosourceback").css('display','none');				
	}		
}
/*No any item:Action*/
$(function(){
	Noanysource();
	$('#SforE_add').mouseover(function(){
		$('#SforE_addspan').css('color','rgb(125,255,0)');
	});
	$('#SforE_add').mouseout(function(){
		$('#SforE_addspan').css('color','rgb(255,255,255)');
	});				
})
/*No any item No any item No any item No any item No any item */


		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_source(sort,search){
	  	  /*start start start start start*/
		  //aid
		  var aid=$('#HiddeN_projectcaid').val(); 
		  //cid      
		  var cid=$('#HiddeN_projectcid').val(); 
		  //search
		  var model = new RegExp(/&|\+/gi);
		  var result = model.test(search);	
		  if(result){	
			var search=search.replace(/&/gi,'%26');
			var search=search.replace(/\+/gi,'%2B');
		  }		  
//		  alert('aid='+aid+'&cid='+cid+'&sort='+sort+'&search='+search);	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/source/pictu/show.php?action=source_show",
		  	//set the request way
		  	type:'POST',
		  	//set the post data
		  	data:'aid='+aid+'&cid='+cid+'&sort='+sort+'&search='+search,
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_show(result);
			  /*show_Vshow_Vshow_Vshow_Vshow_Vshow_V*/
			  //scroll					
			  Scroll();
			  conts_toptozer();
                                      
                                      //search area
			  searchnum_show();
			  
			  //select				
			  item_select();
			  $('#SourcE_select #SelecT').css('display','block');
			  $('#SourcE_select #SelectnO').css('display','none');
			  			  
			  //see
			  var see=$('.see').css('display')
			  if(see!='block'){
				//show the name
		                        $('.source-name-show').css('display','block');
		                        
				$('#EnamE').css('display','block');				  	
			  }
			   /*show_Eshow_Eshow_Eshow_Eshow_Eshow_E*/
			  //show the first source to E 
			  $('#HiddeN_projectitemordernum').val('0');							  
			  PicturE_show('0');  		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_show(result){
	$(".mCSB_container").html(result);	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	var itemnum=$("#IteM_numshow").text();
	var itemnum=parseInt(itemnum,10);
	if(itemnum!=0){
		show_source('','');	
	}		
})

		/*Search the item Search the item Search the item Search the item Search the item*/
$(function(){
	//Show the Source's SearchCustommenu
	$("#ItemsearcH_img").click(function(){
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
		$('#ItemsearcH_numselectdt').css('display','none');
		
		//custom the scroll
		num=$('#ItemsearcH_numitem').text();		
		searchnum_show(num);
					
		$("#SourcE_add .SourcE_adda").css('display','none');
		$("#SourcE_add .SourcE_addano").css('display','block');			
			
		$("#ItemsearcH_img").css('display','none');
		$("#ItemsearcH_menu").show(500);
		
		$('#SourcE_Vsearchdatashowframe').fadeIn(1000);	
		setTimeout("$('#ItemsearcH_input').focus();",1250);	
	});
	
	/*Search Search Search Search Search*/
            //Event:mouse
            $("#ItemsearcH_search").click(function(){
	            var search=$("#ItemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=25)){	
			show_source('',search);
			$('#ItemsearcH_numshowdt').css('display','inline');
			
			$('#ItemsearcH_numselectdt').css('display','none')
			$('#ItemsearcH_numselect').text('');
			
			  //see
			 $('#SourcE_see #SeE').css('display','none');
			 $('#SourcE_see #SeenO').css('display','block');
			 $('.source-name-show').css('display','block');			  									
		}	            			
	});  
	//Event:key
	$("#ItemsearcH_input").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$("#ItemsearcH_input").val();
			var model=new RegExp(/^\s{1,25}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=25)){	
				show_source('',search);
				$('#ItemsearcH_numshowdt').css('display','inline');
				
				$('#ItemsearcH_numselectdt').css('display','none')
				$('#ItemsearcH_numselect').text(''); 
				
				  //see
				 $('#SourcE_see #SeE').css('display','none');
				 $('#SourcE_see #SeenO').css('display','block');
				 $('.source-name-show').css('display','block');			 										
				return false;						
			}
			return false;								
		}	    
	});
	
	//Hide the Album's SearchCustommenu
            $("#ItemsearcH_back").click(function(){
            	Noanysource();
            	$('#SourcE_Vsearchdatashowframe').fadeOut(1000);
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text(''); 
			            	
            	$('#ItemsearcH_numshowdt').css('display','none');
            	
		var form=document.getElementById('ItemsearcH_form');	
		form.reset();
	            $("#ItemsearcH_menu").hide(500);
	            	
		$("#ItemsearcH_img").css('display','block');		
		setTimeout("show_source('','')",1250);
		
		setTimeout("$('#SourcE_add .SourcE_addano').css('display','none');",1500);
		setTimeout("$('#SourcE_add .SourcE_adda').css('display','block');",1500);					            				
	});  			
})
/*Function:show the search's num*/
function searchnum_show(num){
	//num is set for delete when delete in search
	if(!num){
		var num=$(".HiddeN_projectsearchitemnum").val();		
	}
	var num=parseInt(num,10);
	var CinsH=136;	
	if(num==1){
		$('#SourcE_Vsearchdatashowframe').css('top',CinsH+153+'px');
		$("#ItemsearcH_numshow").text(num);							
	}
	else if(num==2){
		$('#SourcE_Vsearchdatashowframe').css('top',CinsH*2+153+'px');
		$("#ItemsearcH_numshow").text(num);		
	}
	else if(num==3){
		$('#SourcE_Vsearchdatashowframe').css('top',CinsH*3+153+'px');
		$("#ItemsearcH_numshow").text(num);			
	}
	else if(num==4){
		$('#SourcE_Vsearchdatashowframe').css('top',CinsH*4+153+'px');
		$("#ItemsearcH_numshow").text(num);								
	}				
	else if(num>=5){
		$('#SourcE_Vsearchdatashowframe').css('top','');
		$("#ItemsearcH_numshow").text(num);							
	}
	else{
		$('#SourcE_Vsearchdatashowframe').css('top','150px');		
		$("#ItemsearcH_numshow").text(0);				
	}			
}
		/*Search the item Search the item Search the item Search the item Search the item*/

		/*Custom the item's sort Custom the item's sort Custom the item's sort*/
$(function(){
	//Show or hide the sortCustommenu
	$("#SourcE_sort #SorT").mouseover(function(){
		$("#SourcE_Votherstool_menu,#SourcE_sortmenu").show('fast');		
	});
	$("#SourcE_sortmenu").mouseleave(function(){
		$("#SourcE_Votherstool_menu,#SourcE_sortmenu").hide('fast');	
	
	});
	$("#SourcE_sortmenu,#SourcE_Votherstool_menu,#SourcE_Vcenter").mouseup(function(){
		$("#SourcE_Votherstool_menu,#SourcE_sortmenu").hide('fast');		
	});	
	
	//Custom the sort
	$("#SourcE_sortmenu span").click(function(){
		var sort=$(this).attr('class');
		var issearch=$("#ItemsearcH_menu").css('display');
		if(issearch=='none'){
//			alert(sort);
			show_source(sort,'');			
		}
		else{
		var search=$("#ItemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);					
			if((search.length>0)&&(search.length<=25)&&(result!=true)){
//				alert(sort);
				show_source(sort,search);				
			}
		}	
	});		
})
		/*Custom the item's sort Custom the item's sort Custom the item's sort*/
		
		
		/*Show or Hide the item's nameShow or Hide the item's nameShow or Hide the item's name*/
$(function(){
	$('.see').click(function(){
                        $('.see').css('display','none');
                        $('.seeno').css('display','block');
		
		//show the name
                        $('.source-name-show').css('display','block');
		                        
		$('#EnamE').css('display','block');                        		                                 		
	});

	$('.seeno').mouseup(function(){
                        $('.seeno').css('display','none');
                        $('.see').css('display','block');
		
		//hide the name
                        $('.source-name-show').css('display','none');
                        
		$('#EnamE').css('display','none');                         	                                                                    		
	});		
})
		/*Show or Hide the item's nameShow or Hide the item's nameShow or Hide the item's name*/

                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Scroll(){
	$('#SourcE_Vsourcesshow').mCustomScrollbar(
		{
		 set_width:false,
  		         set_height:false,
  		 horizontalScroll:false,
  		 scrollInertia:500,
  		 scrollEasing:'easeInCubic',
  		 mouseWheel:true,
  		 autoDraggerLength:true,
  		 	
		 scrollButtons:
		 	{
		 enable:true,
		 scrollType:"continuous",
		 scrollSpeed:50,
		 scrollAmount:50
		 	},
		 advanced:
		 	{
                            updateOnBrowserResize:true,
                            updateOnContentResize:true,
                            autoExpandHorizontalScroll:false,
                            autoScrollOnFocus:true,  
                         	},
                         callbacks:{   onScrollStart:function(){}   } 	
		 }	
	);		
}
/*Function:cont and scroll top*/
function conts_toptozer(){
	$(".mCSB_container,.mCSB_dragger").css('top','0');
}
/*Custom the scroll:ACTION*/
$(function(){
	Scroll();	
})




















		
		
		