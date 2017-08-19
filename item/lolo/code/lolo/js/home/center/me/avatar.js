/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
																						
$(function(){			
	/*addaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddadd*/
	//avatar add menu show	
	$('#HomeheaD_avataradd').click(function(e){	
		var o=$('#HomeheaD_dl2').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)-75)+'px';			
		$('#MenU_avataraddin').css({top:ptop,left:pleft});			
		$('#MenU_avataradd').css({display:'block'});								
	});
	
	/*
	 *OperatE the menu OperatE the menu OperatE the menu OperatE the menu OperatE the menu 
	 */
            //mouse
	$('#AvataR_adduploadconcon').mouseover(function(){
		$('#AvataR_adduploadfra').css({width:'65px',opacity:'1',fontSize:'16px'});
	});
	$('#AvataR_adduploadconcon').mouseout(function(){
		$('#AvataR_adduploadfra').css({width:'50px',opacity:'0.75',fontSize:'15px'});
	});
	//click
	$('#AvataR_adduploadconcon').click(function(){
	});
	//select
	//user select the file	
	$('#AvataR_adduploadconcon').change(function(){		 
		 var file=document.getElementById('AvataR_adduploadconcon').files[0];
		 FilE_selectavatar(file);			
	});	
	//post
	$('#AvataR_adduploadbrowserdonecon').click(function(){
		var data=new FormData(document.getElementById('AvataR_addform'));
		UploaD_datatoserveravatar(data);			
		
	});		
	/*hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide*/
	$('#MenU_avataraddback,#AvataR_adduploadcancel').click(function(){
		AvataR_addhide();																					
	});
	
	
			
 	//user select the file:change
 	//show
	$('#HomeheaD_avatar').mouseover(function(){
		$('#AvataR_imageuploadchange').css('display','block');
	});
	//hide
	$('#AvataR_imageuploadchange').mouseout(function(){
		$('#AvataR_imageuploadchange,#AvataR_imageuploadclear').css('display','none');
	});	
	//click
	$('#AvataR_imageuploadchangefra').click(function(){
		var o=$('#HomeheaD_dl2').offset();
		var ptop=((o.top)+50)+'px';
		var pleft=((o.left)-75)+'px';			
		$('#MenU_avataraddin').css({top:ptop,left:pleft});			
		$('#MenU_avataradd').css({display:'block'});							 	 			 	
	});


	
 	//user clear the file
 	//show
	$('#HomeheaD_dl2').mouseover(function(){
		$('#AvataR_imageuploadclear').css('display','block');
	});
	//hide
	$('#HomeheaD_dl2').mouseleave(function(){
		$('#AvataR_imageuploadchange,#AvataR_imageuploadclear').css('display','none');
	});	
	//click
	$('#AvataR_imageuploadclearcon').click(function(){
		var o=$('#HomeheaD_dl2').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)-130)+'px';					
		$('#MenU_avatarclearin').css({top:ptop,left:pleft});			
		$('#MenU_avatarclear').css({display:'block'});							 	 			 	
	});			
})
/*hide the menu:function*/
function AvataR_addhide(){	
              $('#MenU_avataradd').css('display','none');
      			$('#AvataR_addupload').css({display:'block'});
	     				$('#AvataR_adduploadconcon').val('');
			$('#AvataR_adduploadbrowser').css('display','none');
	  $('#AvataR_adduploadbrowsershowconcon').removeAttr('src');						
}



	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectavatar(file){
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
			 $('#AvataR_addupload').css({display:'none'});
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#AvataR_adduploadbrowsershowconcon';			 
			 var framew=360;
			 var frameh=360;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 $('#AvataR_adduploadbrowser').css('display','block');		     		     				     	    
		     }
}				 	 	 	

/*When user selectWhen user selectWhen user selectWhen user select*/

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function UploaD_datatoserveravatar(data){
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
			  xmlhttp.open("POST",ROOTDIR+'php/public/me/avatar.php?action=user_avatar');
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_uploaddatatoserverloadavatar,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_uploaddatatoserverloadavatar(e){	
//whenserveruploadsuccess
	var result=e.target.responseText;
	if(result=='user_avatarsuccess'){		
		var imgurl=$('#AvataR_adduploadbrowsershowconcon').attr('src');
		$('#HomeheaD_avatar').attr('src',imgurl);
		AvataR_addhide();
		$('#ForM_uploadavatar').css('display','none');
		$('#ForM_uploadavatarchange').css('display','block');
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);					
	}else{
		$('#UnknowerroR').css('display','block');				
	}		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 