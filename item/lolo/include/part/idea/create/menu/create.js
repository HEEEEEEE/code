/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*show the menu:Function*/
function IdeA_createmenushow(){
	/*Set the data:*/
	/*
	 * 
	 */ 			
	/*AJAX*/
	     /*Start:create a AJAX object*/
                 var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	     	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'include/part/idea/create/menu/create_h.php?action=idea_createmenushow',
	     	type:'GET',
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideacreatemenushow(result);
			OperatE_createmenu();
			
			MenU_uplodmenushowajax();								     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_ideacreatemenushow(result){	
	$('#MenU_ideacre').html(result);
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});		
}

/*show the menu:action*/
$(function(){
	/*show the idea create menu*/
	$('.create').click(function(){
		var exist=$('#MenU_ideacre div').length;
		if(exist>0){
			$('#MenU_ideacreate').css('display','block');			
		}
		else{
			IdeA_createmenushow();			
		}
	});
	
})
/*hide the menu:function*/
function IdeA_createmenuhide(){
	$('#PalmleaveS_leaf1_enteralbetips').css('display','none');
	$('#MenU_ideacreate').css('display','none');
	$('.palmleaf').css('height','75px');
	$('.palmleaf-levell-1top,.palmleaf-levell-1bottom').css('display','none');
	$('#PalmleaveS_leaf1_enteralbenum').text('125');									
	$('#PalmleaveS_leaf1 .palmleaf-level3-1').text('').addClass('leaf1-placeholder').css({color:'rgba(255,255,255,1)',height:'25px'});
	
	$('#PalmleaveS_leaf1 .palmleaf-level3-1').on('click',function(){
		$('.palmleaf-levell-1top,.palmleaf-levell-1bottom').css('display','block');
		$('.palmleaf').css('height','140px');						
		$('#PalmleaveS_leaf1 .palmleaf-level3-1').css({color:'rgba(255,255,255,0.5)',height:'75px'});	
										
	});
	
	$('#PalmleaveS_uploadbegin').css('display','block');
	$('#UploaD_imagemenu,#UploaD_imagechangemenu').val('');
	$('#PalmleaveS_uploadbrowser').css('display','none');	
}



//OperatE the menu:function
function OperatE_createmenu(){	
		//custom the menu
		//lanlanlanlanlanlanlanlanlanlanlanlanlanlanlan	     		
	            //click
		$('#PalmleaveS_leaf1 .palmleaf-level3-1').click(function(){
			$('.palmleaf-levell-1top,.palmleaf-levell-1bottom').css('display','block');
			$('.palmleaf').css('height','140px');						
			$('#PalmleaveS_leaf1 .palmleaf-level3-1').css({color:'rgba(255,255,255,0.5)',height:'75px'});
					
			 $('#PalmleaveS_uploadbegin').css('display','block');
			$('#UploaD_imagemenu,#UploaD_imagechangemenu').val('');			 
			 $('#PalmleaveS_uploadbrowser').css('display','none');					
		});


		
//		var lanarea=document.getElementById('MenU_ideawithlansbox');
////		//keyboard:ctrl+v
//		lanarea.onkeydown=function(e){
//			if(e.ctrlKey==true && e.which==86){				
//			}	
//		};		
		//input
		Filter_PasteWords();
//		//mouse:right oncontextmenu
//		lanarea.contextmenu=function(e){return false;};


				
		//post
		$('#IdeA_createmenudone').click(function(){
			//filter:empty blank more
				//basic
				var text=$('#PalmleaveS_leaf1 .palmleaf-level3-1').text();
				var textl=text.length;
				var blank=/^\s{1,125}$/.test(text);
				if(textl>0 && textl<=125 && blank==false){
					IdeA_createmenupost();				
				}
				if(blank==true){
					$('#PalmleaveS_leaf1_enteralbetips').css('display','none');
					$('#PalmleaveS_leaf1_enteralbenum').text('125');
					$('#PalmleaveS_leaf1 .palmleaf-level3-1').text('').addClass('leaf1-placeholder').css('color','rgba(255,255,255,0.5)').focus();		
				}
		});		
		//imageimageimageimageimageimageimageimageimageimageimageimageimage
		// hover style
		$('#UploaD_imagemenu').mouseover(function(){
			$('#PalmleaveS_leaf2conimg').attr('src',ROOTDIR+'include/part/idea/create/menu/image.png');
		});
		$('#UploaD_imagemenu').mouseout(function(){
			$('#PalmleaveS_leaf2conimg').attr('src',ROOTDIR+'include/part/idea/create/menu/egami.png');			
		});
		$('#UploaD_imagemenu').click(function(){
			$('.palmleaf').css('height','75px');
	     		$('.palmleaf-levell-1top,.palmleaf-levell-1bottom').css('display','none');
	     		$('#PalmleaveS_leaf1_enteralbenum').text('125');				
			$('#PalmleaveS_leaf1 .palmleaf-level3-1').text('').addClass('leaf1-placeholder').css({color:'rgba(255,255,255,1)',height:'25px'});
;			
		});
							 
		/*hide the idea create menu*/
		$('#MenU_ideacreatecenterback').click(function(){
			IdeA_createmenuhide();																					
		});	
}
//OperatE the menu:action
$(function(){

})





function ResulT_ideacreatemenupostdeal(match){	
	if(match==true){					
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);				            	     	
		var url=ROOTDIR+'works.php?ideaid=true';
		location.href=url;						
	}else{
		$('#UnknowerroR').css('display','block');		
	}	
}

/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan
 * 
 * */
/*post the idea:Function*/
function IdeA_createmenupost(){
	/*Set the data:*/

	 var data=$('#PalmleaveS_leaf1 .palmleaf-level3-1').text(); 
	 //lans
	 var lans=FilteR_ajaxspecialstr(data);			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
					
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'include/part/idea/create/menu/create_lan_p.php?action=idea_createlan',
	     	type:'POST',
	     	data:'lans='+lans,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideacreatemenupost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_ideacreatemenupost(result){
	var match=/idea_createsuccess/i.test(result);
	ResulT_ideacreatemenupostdeal(match);
}

/*post the idea:Action*/
$(function(){
})
/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan
 * 
 * */





/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */
function MenU_uplodmenushowajax(){	
	UploaD_imgselectmenu();
	ActioN_uploaddatatoservermenu();		
}

	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectmenu(file){
	 //type
	 var type=file.type;//格式：例image/png image/gif
	 var rtype=/^(image\/png|image\/png|image\/png)$/i;
	 var result=rtype.test(type);
	 if(result==false){
		$('#UploaD_tip').css('display','block');	 					 	
	 	return false;	 	
	 }
	 var size=file.size;//单位：B
	 if((2.5*1024*1024)<size){
		$('#UploaD_tip').css('display','block');	 		
	 	return false;		 	
	 }
		//browserbrowserbrowserbrowser
		/*image:url
		 *name
		 *hw 
		 */
		 //custom the upload file as ReadFile
		 var oReader = new FileReader();
		 //turn 'file':var file=document.getElementById('InpuT').files[0];to a dataurl
		 oReader.readAsDataURL(file);				 
		     //when it onload
		     oReader.onload = function(e){		     				     	    
			 $('#PalmleaveS_uploadbegin').css('display','none');
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#UploadbrowseR_show_con_img';			 
			 var framew=325;
			 var frameh=325;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 $('#PalmleaveS_uploadbrowser').css('display','block');
			 	//user select the file:change
			 	//style
				$('#UploadbrowseR_show_change_img').mouseover(function(){
					$('#UploadbrowseR_show_change_frame').css('color','rgba(0,125,0,1)');
				});
				$('#UploadbrowseR_show_change_img').mouseout(function(){
					$('#UploadbrowseR_show_change_frame').css('color','rgba(0,125,0,0.5)');
				});
		     }
}				 	 

function UploaD_imgselectmenu(){
	//user select the file
	$('#UploaD_imagemenu').change(function(){
		//fitlerfitlerfitlerfitlerfitler
		/*	type:image
		 *    format:.png 
		 *size:<=2.5MB 
		 *    name:<=250 
		 *          hw: 
		 */
		 $('#UploaD_imagechangemenu').val('');		 
		 var file=document.getElementById('UploaD_imagemenu').files[0];
		 FilE_selectmenu(file);		 			 	  	
	});
	//user select the file:change
	$('#UploaD_imagechangemenu').change(function(){
		//fitlerfitlerfitlerfitlerfitler
		/*	type:image
		 *    format:.png 
		 *size:<=2.5MB 
		 *    name:<=250 
		 *          hw: 
		 */
		 $('#UploaD_imagemenu').val('');		 
		 var file=document.getElementById('UploaD_imagechangemenu').files[0];
		 FilE_selectmenu(file);				 	 			 	
	});	
	
}	 	
	//browserbrowserbrowserbrowser
/*When user selectWhen user selectWhen user selectWhen user select*/

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function UploaD_datatoservermenu(data){
	/*data
	 * 
	 */
	 		var data=data;
	 //ajax
		/*AJAX*/
		     /*Start:create a AJAX object*/
					
	                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	                 $('#LoadiN_tipstr').html(tip);	 	     
		     $('#LoadiN_tip').css({display:'block'});			     
			var xmlhttp;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			}
			else{// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		    /*Url the data:*/
			  xmlhttp.open("POST",ROOTDIR+'include/part/idea/create/menu/create_image_p.php?action=idea_createimage');
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_uploaddatatoserverloadmenu,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_uploaddatatoserverloadmenu(e){	
//whenserveruploadsuccess
	var result=e.target.responseText;
	var match=/idea_createsuccess/i.test(result);
	ResulT_ideacreatemenupostdeal(match);		
}
function ActioN_uploaddatatoservermenu(){	
	$('#UploadbrowseR_done_imgmenu').click(function(){
		var val=$('#UploaD_imagemenu').val();
		if(val!=''){			
			var data=new FormData(document.getElementById('ForM_uploadmenu'));
			UploaD_datatoservermenu(data);			
		}else{			
			var data=new FormData(document.getElementById('ForM_uploadchangemenu'));
			UploaD_datatoservermenu(data);			
		}		
	});		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/

/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */