/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*No any item No any item No any item No any item No any item */
/*No any item:Function*/
function Noanyclose(){
	var itemnum=$("#CloseitemnuM_show").text();
	var itemnum=parseInt(itemnum,10);
	if(itemnum==0){
		$("#CoutsidebacK,#CoutsideforE").css('display','block');	
	}
	else{
		$("#CoutsidebacK,#CoutsideforE").css('display','none');		
	}		
}
/*No any item:Action*/
$(function(){
	Noanyclose();
	$('#CoutsideforE_CloseadD').mouseover(function(){
		$('#CoutsideforE_CloseadDspan').css('color','rgb(255,125,0)');
	});
	$('#CoutsideforE_CloseadD').mouseout(function(){
		$('#CoutsideforE_CloseadDspan').css('color','rgb(0,0,0)');
	});
	$('#CoutsideforE_CloseadD').click(function(){
		//Show the close create menu background	
		$('#ClosecMbacK').css('display','block');
		//Show the close create menu
		$('#ClosecM').css('display','block');	
		//Focus the name
	            setTimeout("$('#ClosecM_cname #NamE').focus();",500);		
	});			
})
/*No any item No any item No any item No any item No any item */



		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_close(sort,search){
	/*Set the data:*/
	/*
	 *sort
	 *search  
	 * 
	 */
	var model = new RegExp(/&|\+/gi);
	var result = model.test(search);	
	if(result){	
		var search=search.replace(/&/gi,'%26');
		var search=search.replace(/\+/gi,'%2B');
	}	 		
	var data='sort='+sort+'&search='+search;	
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
		    //close/closeproc/closeproc_showA.php
		    //CLOSE.php
			xmlhttp.open("POST",PROJECTDIR+"close/close/showA.php?action=close_show",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
	    	xmlhttp.onreadystatechange=function(){
		  	if (xmlhttp.readyState==4 && xmlhttp.status==200){
				result=xmlhttp.responseText;		                        				
				result_show(result);
				
				var searchnum=$(".HiddeN_projectsearchitemnum").val();
				searchnum_show(searchnum);
								
				item_select();								
			}
	    	}		    	  	  	  	
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:show the ajaxresult*/
function result_show(result){
	document.getElementById("mCSB_1_container").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/

$(function(){
/*echo the item:Action*/
            var bcn=$('#HiddeN_projectbclosename').val();
            if(bcn){           	
		show_close('','');
//		var searchnum=$(".HiddeN_projectsearchitemnum").val();
//		searchnum_show(searchnum);		
//		$("#CloseadD_img").css('display','none');
//		$("#CloseaddnO_img").css('display','block');
//			
//		$("#CloseitemsearcH_img").css('display','none');
//		$("#CloseitemsearcH_menu").show(500);
//		
//		$('#CloseprocoutsidE_bottom').fadeIn(1000); 		            	
            }else{
		show_close('','');             	
            }	
})

		/*Search the item Search the item Search the item Search the item Search the item*/
$(function(){
	//Show the Close's SearchCustommenu
	$("#CloseitemsearcH_img").click(function(){
	var searchnum=$(".HiddeN_projectsearchitemnum").val();
	searchnum_show(searchnum);		
	$("#CloseadD_img").css('display','none');
	$("#CloseaddnO_img").css('display','block');
		
	$("#CloseitemsearcH_img").css('display','none');
	$("#CloseitemsearcH_menu").show(500);
	
	$('#CloseprocoutsidE_bottom').fadeIn(1000);	
	setTimeout("$('#CloseitemsearcH_input').focus();",1250);	
	});
	
	/*Search Search Search Search Search*/
            //Event:mouse
            $("#CloseitemsearcH_search").click(function(){
	            var search=$("#CloseitemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);		            
		if((result==false)&&(search.length>0)&&(search.length<=25)){	
			show_close('',search);
			$('#CloseitemsearcH_numshowdt').css('display','inline');									
		}	            			
	});  
	//Event:key
	$("#CloseitemsearcH_input").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
		            var search=$("#CloseitemsearcH_input").val();
			var model=new RegExp(/^\s{1,25}$/);
			var result=model.test(search);
			if((result==false)&&(search.length>0)&&(search.length<=25)){	
				show_close('',search);
				$('#CloseitemsearcH_numshowdt').css('display','inline');										
				return false;						
			}
			return false;								
		}	    
	});
	
	//Hide the Close's SearchCustommenu
            $("#CloseitemsearcH_back").click(function(){
            	$('#CloseprocoutsidE_bottom').fadeOut(1000);
            	$('#CloseitemsearcH_numshowdt').css('display','none');
            	
		var form=document.getElementById('CloseitemsearcH_form');	
		form.reset();
	            $("#CloseitemsearcH_menu").hide(500);
	            	
		$("#CloseitemsearcH_img").css('display','block');
		setTimeout("$('#CloseprocinsidE').css('height','525px');",1250);		
		setTimeout("show_close('','')",1250);
		
		setTimeout("$('#CloseaddnO_img').css('display','none');",1500);
		setTimeout("$('#CloseadD_img').css('display','block');",1500);
		
		setTimeout("Noanyclose()",1750);					            				
	});  			
})
/*Function:show the search's num*/
function searchnum_show(searchnum){
	$("#CloseitemsearcH_numshow").val(searchnum);	
	var searchnum=parseInt(searchnum,10);
	var CinsH=106.25;
	if(searchnum==1){
		$('#CloseprocinsidE').css('height','100px');
				$("#CloseitemsearcH_numshow").text(searchnum);						
	}
	else if(searchnum==2){
		$('#CloseprocinsidE').css('height',CinsH+100+'px');
				$("#CloseitemsearcH_numshow").text(searchnum);						
	}
	else if(searchnum==3){
		$('#CloseprocinsidE').css('height',2*CinsH+100+'px');
				$("#CloseitemsearcH_numshow").text(searchnum);						
	}
	else if(searchnum==4){
		$('#CloseprocinsidE').css('height',3*CinsH+100+'px');
				$("#CloseitemsearcH_numshow").text(searchnum);					
	}				
	else if(searchnum>=5){
		$('#CloseprocinsidE').css('height','525px');
				$("#CloseitemsearcH_numshow").text(searchnum);		
	}
	else{
		$('#CloseprocinsidE').css('height','0px');
				$("#CloseitemsearcH_numshow").text(0);				
	}	
}
		/*Search the item Search the item Search the item Search the item Search the item*/



		/*Custom the item's sort Custom the item's sort Custom the item's sort*/
$(function(){
	//Show or hide the Close's sortCustommenu
	$("#CloseitemsorT_mark").mouseover(function(){
		$("#CloseitemsorT_mark").css('display','none');
		$("#CoutsidE_lefttoolmenu").show('fast');	
		$("#CloseitemsorT_mark1").css('display','block');	
	});
	$("#CloseprocoutsidE").mouseup(function(){
		$("#CloseitemsorT_mark1").css('display','none');
		$("#CoutsidE_lefttoolmenu").hide('fast');	
		$("#CloseitemsorT_mark").css('display','block');	
	});
	
	//Custom the Close's sort
	$("#CloseitemsorT_menu span").click(function(){
		var sort=$(this).attr('class');
		var issearch=$("#CloseitemsearcH_menu").css('display');
		if(issearch=='none'){
			show_close(sort,'');	
		}
		else{
		var search=$("#CloseitemsearcH_input").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(search);					
			if((search.length>0)&&(search.length<=25)&&(result!=true)){
				show_close(sort,search);
				var searchnum=$(".HiddeN_projectsearchitemnum").val();	
				searchnum_show(searchnum);
			}
		}	
	});		
})
		/*Custom the item's sort Custom the item's sort Custom the item's sort*/

		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the Close:Function*/
function item_select(){
	$("#CloseprocinsidE div[class='closediv']").click(function(){
		//Change the item css
		$(this).css("backgroundColor","rgb(255,255,255)");				
		var itemid=$(this).attr("id");
		var itemid='#'+itemid;
		var itemname=itemid+' .closename';
		$(itemname).css({backgroundColor:'rgb(255,255,255)',color:'rgb(0,0,0)'});
		var itempart=itemid+' .close_part';
		$(itempart).css({backgroundColor:'rgb(0,0,0)'});
		
		//Start the set and delete
		$('#ClosedeletenO_img,#ClosesettingsnO_img').css("display","none");
		$('#ClosedeletE_img,#ClosesettingS_img').css("display","block");
		
		//Give the itemid to hiddeN
		$('#HiddeN_projectitemid').val(itemid);						
	});
	$("#CloseprocoutsidE").mouseup(function(){
		//Get the itemid from hiddeN
		var itemid=$('#HiddeN_projectitemid').val();
		
		//Change the item css
		$(itemid).css("backgroundColor","rgb(0,0,0)");					
		var itemname=itemid+' .closename';
		$(itemname).css({backgroundColor:'rgb(0,0,0)',color:'rgb(255,255,255)'});
		var itempart=itemid+' .close_part';
		$(itempart).css({backgroundColor:'rgb(255,255,255)'});
		
		//Stop the set and delete
		$('#ClosedeletE_img,#ClosesettingS_img').css("display","none");
		$('#ClosedeletenO_img,#ClosesettingsnO_img').css("display","block");								
	});		
}
/*Select the Close:Action*/		
$(function(){
	item_select();		
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/

                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Cscroll(){
	$('#CloseprocinsidE').mCustomScrollbar(
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
	$("#mCSB_1_container,#mCSB_1_dragger_vertical").css('top','0');
}
/*Custom the scroll:ACTION*/
$(function(){
	Cscroll();
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/


