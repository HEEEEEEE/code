/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*No any item No any item No any item No any item No any item */
/*No any item:Function*/
function Noanyalbum(){
	var itemnum=$("#IteM_numshow").text();
	var itemnum=parseInt(itemnum,10);
	if(itemnum==0){
		$("#AlbuM_con_oaback").css('display','block');	
	}
	else{
		$("#AlbuM_con_oaback").css('display','none');		
	}		
}
/*No any item:Action*/
$(function(){
	Noanyalbum();
	$('#AoutsideforE_add').mouseover(function(){
		$('#AoutsideforE_addspan').css('color','rgb(125,255,0)');
	});
	$('#AoutsideforE_add').mouseout(function(){
		$('#AoutsideforE_addspan').css('color','rgb(255,255,255)');
	});	
	$('#AoutsideforE_add').click(function(){
		//Show the close create menu background	
		$('#AlbumcMbacK').css('display','block');
		//Show the close create menu
		$('#AlbumcM').css('display','block');	
		//Focus the name
	            setTimeout("$('#AlbumcM_cname #NamE').focus();",500);		
	});			
})
/*No any item No any item No any item No any item No any item */

		/*show the item show the item show the item show the item */
/*show the item's:Function*/
function item_show(){
	var faceo=$('div[data-src='+"'"+ROOTDIR+"'"+']');
	var facea=$('div[data-src='+"'"+ROOTDIR+"'"+']').toArray();
            for(s=0;s<faceo.length;s++){
            	var id=facea[s].id;
            	var id="#"+id;
            	$(id).addClass('album-phavef');
            }	
}
/*show the item's:Action*/
$(function(){
	item_show();			
})
		/*show the item show the item show the item show the item */

		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_album(sort,search){
	/*Set the data:*/
	/*cid
	 *sort
	 *search  
	 * 
	 */
	var cid=$('#HiddeN_projectcid').val();
	var model = new RegExp(/&|\+/gi);
	var result = model.test(search);	
	if(result){	
		var search=search.replace(/&/gi,'%26');
		var search=search.replace(/\+/gi,'%2B');
	}	 			
		/*AJAX*/
		     /*Start:create a AJAX object*/
			xmlhttp=$.ajax({
				url:PROJECTDIR+'close/albui/audio/showA.php?action=album_show',
				type:'POST',
				data:'cid='+cid+'&sort='+sort+'&search='+search,
				datatype:'html',
				success:function(){
					result=xmlhttp.responseText;		                        				
					result_show(result);
					
					item_show();
					
					searchnum_show();
					
					Scroll();
									
					item_select();										
				},
			});		    	  	  	  	
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:show the ajaxresult*/
function result_show(result){
	$(".mCSB_container").html(result);		
}
/*Action:show the ajaxresult*/
$(function(){
//	show_album('','');
})
		/*echo the item echo the item echo the item echo the item echo the item*/



		/*show the item's num show the item's num show the item's num show the item's num show the item's num*/
/*show the item's num:Function*/
function itemnum_show(){
}
/*show the item's num:Action*/
		/*show the item's num show the item's num show the item's num show the item's num show the item's num*/



		/*Search the item Search the item Search the item Search the item Search the item*/
$(function(){
	//Show the Album's SearchCustommenu
	$("#AlbumitemsearcH_img").click(function(){
		$(".album-p").removeClass('album-p-selected');	
		//Stop the delete
		$('#AlbumtooL #DeletE').css('display','none');		
		$('#AlbumtooL #DeletenO').css('display','block');
		//Stop the set
		$('#AlbumtooL #SeT').css('display','none');		
		$('#AlbumtooL #SetnO').css('display','block');
			
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text(''); 	
		$('#ItemsearcH_numselectdt').css('display','none');
		
		//custom the scroll
		num=$('#ItemsearcH_numitem').text();		
		searchnum_show(num);
					
		$(".AlbuM_create .AlbuM_createa").css('display','none');
		$(".AlbuM_create .AlbuM_createano").css('display','block');			
		$("#AlbumadD_img").css('display','none');
		$("#AlbumaddnO_img").css('display','block');
			
		$("#AlbumitemsearcH_img").css('display','none');
		$("#AlbumitemsearcH_menu").show(500);
		
		$('#AlbumprocoutsidE_bottom').fadeIn(1000);	
		setTimeout("$('#AlbumitemsearcH_input').focus();",1250);	
	});
	
	/*Search Search Search Search Search*/
            //Event:mouse
            $("#AlbumitemsearcH_search").click(function(){
	            var search=$("#AlbumitemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=25)){	
			show_album('',search);
			$('#ItemsearcH_numshowdt').css('display','inline');
			
			$('#ItemsearcH_numselectdt').css('display','none')
			$('#ItemsearcH_numselect').text('');  									
		}	            			
	});  
	//Event:key
	$("#AlbumitemsearcH_input").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$("#AlbumitemsearcH_input").val();
			var model=new RegExp(/^\s{1,25}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=25)){	
				show_album('',search);
				$('#ItemsearcH_numshowdt').css('display','inline');
				
				$('#ItemsearcH_numselectdt').css('display','none')
				$('#ItemsearcH_numselect').text('');  										
				return false;						
			}
			return false;								
		}	    
	});
	
	//Hide the Album's SearchCustommenu
            $("#AlbumitemsearcH_back").click(function(){
            	$('#AlbumprocoutsidE_bottom').fadeOut(1000);
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text(''); 
			            	
            	$('#ItemsearcH_numshowdt').css('display','none');
            	
		var form=document.getElementById('AlbumitemsearcH_form');	
		form.reset();
	            $("#AlbumitemsearcH_menu").hide(500);
	            	
		$("#AlbumitemsearcH_img").css('display','block');		
		setTimeout("show_album('','')",1250);
		
		setTimeout("$('#AlbumaddnO_img').css('display','none');",1500);
		setTimeout("$('#AlbumadD_img').css('display','block');",1500);
			
		setTimeout("$('.AlbuM_create .AlbuM_createa').css('display','block');",1500);
		setTimeout("$('.AlbuM_create .AlbuM_createano').css('display','none');",1500);		
		
		setTimeout("Noanyalbum()",1750);					            				
	});  			
})
/*Function:show the search's num*/
function searchnum_show(num){
	if(!num){
		var num=$(".HiddeN_projectsearchitemnum").val();		
	}
	var num=parseInt(num,10);
	var CinsH=137;	
	if(num==1){
		$('#AlbumprocoutsidE_bottom').css('top',CinsH+150+'px');
		$("#ItemsearcH_numshow").text(num);							
	}
	else if(num==2){
		$('#AlbumprocoutsidE_bottom').css('top',CinsH*2+150+'px');
		$("#ItemsearcH_numshow").text(num);		
	}
	else if(num==3){
		$('#AlbumprocoutsidE_bottom').css('top',CinsH*3+150+'px');
		$("#ItemsearcH_numshow").text(num);			
	}
	else if(num==4){
		$('#AlbumprocoutsidE_bottom').css('top',CinsH*4+150+'px');
		$("#ItemsearcH_numshow").text(num);								
	}				
	else if(num>=5){
		$('#AlbumprocoutsidE_bottom').css('top','');
		$("#ItemsearcH_numshow").text(num);							
	}
	else{
		$('#AlbumprocoutsidE_bottom').css('top','150px');		
		$("#ItemsearcH_numshow").text(0);				
	}	
}
		/*Search the item Search the item Search the item Search the item Search the item*/



		/*Custom the item's sort Custom the item's sort Custom the item's sort*/
$(function(){
	//Show or hide the Album's sortCustommenu
	$("#AlbumitemsorT_mark").mouseover(function(){
//		$("#AlbumitemsorT_mark").css('display','none');
		$("#AoutsidE_toprighttoolmenu").show('fast');	
//		$("#AlbumitemsorT_mark1").css('display','block');	
	});
	$("#AoutsidE_toprighttoolmenu").mouseleave(function(){
//		$("#AlbumitemsorT_mark1").css('display','none');
		$("#AoutsidE_toprighttoolmenu").hide('fast');	
//		$("#AlbumitemsorT_mark").css('display','block');	
	});
	$("#AoutsidE_toprighttoolmenu,#AlbuM_con_album").mouseup(function(){
//		$("#AlbumitemsorT_mark1").css('display','none');
		$("#AoutsidE_toprighttoolmenu").hide('fast');	
//		$("#AlbumitemsorT_mark").css('display','block');	
	});	
	
	//Custom the Album's sort
	$("#AlbumitemsorT_menu span").click(function(){
		var sort=$(this).attr('class');
		var issearch=$("#AlbumitemsearcH_menu").css('display');
		if(issearch=='none'){
			show_album(sort,'');	
		}
		else{
		var search=$("#AlbumitemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);					
			if((search.length>0)&&(search.length<=25)&&(result!=true)){
				show_album(sort,search);
			}
		}	
	});		
})
		/*Custom the item's sort Custom the item's sort Custom the item's sort*/

		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the Album:Function*/
function item_select(){
	/*select the source*/	
	var start = null;	
	$(".album-p").click(function(event){
	//Start the delete
	$('#AlbumtooL #DeletE').css('display','block');		
	$('#AlbumtooL #DeletenO').css('display','none');						
	//item select more:shift
                if (event.shiftKey) {
                    var si = $(start).index(), ti = $(this).index();                    
                    var sel = $(".album-p").slice(Math.min(si, ti), Math.max(si, ti) + 1);
                    sel.addClass("album-p-selected");               
		
	       //item select:numshow
	       var l=$('.album-p-selected').length;
	       $('#ItemselecT_numshowdt').css('display','inline')
	       $('#ItemselecT_numshow').text(l);
	       $('#ItemsearcH_numselectdt').css('display','inline')
	       $('#ItemsearcH_numselect').text(l);	                       	                      
                    return false;
                }
             //item select more:ctrl	
                 if (event.ctrlKey) {                	                      
//                    return false;
                }               			
	//item select one
                start = this;
                $(this).addClass("album-p-selected");		
		//Start the set
		$('#AlbumtooL #SeT').css('display','block');		
		$('#AlbumtooL #SetnO').css('display','none');
	       //item select:numshow
	       var l=$('.album-p-selected').length;
	       $('#ItemselecT_numshowdt').css('display','inline')
	       $('#ItemselecT_numshow').text(l);
	       $('#ItemsearcH_numselectdt').css('display','inline')
	       $('#ItemsearcH_numselect').text(l);	        		 		                   	
									
	});
	$('html').keydown(function(event){
		keyN=event.which;                  		        		        			                			
                        if(keyN==16){
		//Stop the set
		$('#AlbumtooL #SeT').css('display','none');		
		$('#AlbumtooL #SetnO').css('display','block');                      	       		
                        }
	});	
	//item select more:ctrl
	$('html').keydown(function(event){
		keyN=event.which;                  		        		        			                			
                        if(keyN==17){
                        	$("#AlbuM_con_album").off('mouseup'); 
			//Stop the set
			$('#AlbumtooL #SeT').css('display','none');		
			$('#AlbumtooL #SetnO').css('display','block');                        	                      	       		
                        }
	});

	$('html').keyup(function(event){
		keyN=event.which;		
                        if(keyN==17){
                        	$("#AlbuM_con_album").on('mouseup',function(){				
				$(".album-p").removeClass('album-p-selected');
					//Stop the delete
					$('#AlbumtooL #DeletE').css('display','none');		
					$('#AlbumtooL #DeletenO').css('display','block');
					//Stop the set
					$('#AlbumtooL #SeT').css('display','none');		
					$('#AlbumtooL #SetnO').css('display','block');
		                          		
				//item select:numhide
				$('#ItemselecT_numshowdt').css('display','none')
				$('#ItemselecT_numshow').text('');
				$('#ItemsearcH_numselectdt').css('display','none')
				$('#ItemsearcH_numselect').text('');                    		
                        	});                        	
                        }
	});	
	
	/*no select the source*/	
	$("#AlbuM_con_album").mouseup(function(){
		$(".album-p").removeClass('album-p-selected');
		//Stop the delete
		$('#AlbumtooL #DeletE').css('display','none');		
		$('#AlbumtooL #DeletenO').css('display','block');
		//Stop the set
		$('#AlbumtooL #SeT').css('display','none');		
		$('#AlbumtooL #SetnO').css('display','block');
		
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');
		$('#ItemsearcH_numselectdt').css('display','none')
		$('#ItemsearcH_numselect').text('');  	 															
	});		
}
/*Select the Album:Action*/		
$(function(){
item_select();		
})



                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Scroll(){
	$('.album').mCustomScrollbar(
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
/*Custom the scroll:ACTION*/
$(function(){
	Scroll();	
})
