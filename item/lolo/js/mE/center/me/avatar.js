/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
																						
$(function(){			
	/*addaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddaddadd*/
	//avatar add menu show	
	$('#img_upload2').click(function(e){
		
		$('#MenU_mehide_avatarorback').val('avatar');
			
		var o=$('#mE_avatarconno').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)-50)+'px';			
		$('#MenU_avataraddin').css({top:ptop,left:pleft});			
		$('#MenU_avataradd').css({display:'block'});								
	});

           //back add menu show
	$('#img_upload1').click(function(e){
		
		$('#MenU_mehide_avatarorback').val('back');
						
		var o=$('#mE_backconno').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)-50)+'px';
		$('#AvataR_addupload').css({width:'320px',top:'105px'});		
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
	/*
	 *OperatE the menu OperatE the menu OperatE the menu OperatE the menu OperatE the menu 
	 */






	
	//tool change && clear mouse  
	//avataravataravataravataravataravataravataravataravataravataravatar
	$('#mE_avatarconhave').mouseover(function(){	
		$('#mE_avatarconhavetool').css('display','block');
	});
	$('#mE_avatarconhave').mouseout(function(){
		$('#mE_avatarconhavetool').css('display','none');
	});				
 	//user select the file:change		
	//click
	$('#mE_avatarconhavetoolchange').click(function(){
		
		$('#MenU_mehide_avatarorback').val('avatar');
			
		var o=$('#mE_avatarconhave').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)-50)+'px';			
		$('#MenU_avataraddin').css({top:ptop,left:pleft});			
		$('#MenU_avataradd').css({display:'block'});							 	 			 	
	});	
 	//user clear the file	
	//click
	$('#mE_avatarconhavetoolclear').click(function(){
		
		$('#MenU_mehide_avatarorback').val('avatar');
					
		var o=$('#mE_avatarconhave').offset();
		var ptop=((o.top)+75)+'px';
		var pleft=((o.left)-75)+'px';					
		$('#MenU_avatarclearin').css({top:ptop,left:pleft});			
		$('#MenU_avatarclear').css({display:'block'});							 	 			 	
	});
	
	//backbackbackbackbackbackbackbackbackbackbackbackbackbackbackbackback
	$('#mE_backconhave').mouseover(function(){	
		$('#mE_backconhavetool').css('display','block');
	});
	$('#mE_backconhave').mouseout(function(){
		$('#mE_backconhavetool').css('display','none');
	});				
 	//user select the file:change		
	//click
	$('#mE_backconhavetoolchange').click(function(){
		
		$('#MenU_mehide_avatarorback').val('back');
		
		var w=$('#mE_backconhave').width();
		var w=w/2;		
		var o=$('#mE_backconhave').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)+ w -200)+'px';
		
		$('#AvataR_addupload').css({width:'320px',top:'105px'});
				
		$('#MenU_avataraddin').css({top:ptop,left:pleft});			
		$('#MenU_avataradd').css({display:'block'});								 	 			 	
	});	
 	//user clear the file	
	//click
	$('#mE_backconhavetoolclear').click(function(){
		
		$('#MenU_mehide_avatarorback').val('back');
		
		var w=$('#mE_backconhave').width();
		var w=w/2;					
		var o=$('#mE_backconhave').offset();
		var ptop=(o.top)+'px';
		var pleft=((o.left)+ w -200)+'px';
		
		$('#MenU_avatarclearcon_fra_con1').text('Clear the back!!');
									
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
	 		
	 		var hideAB=$('#MenU_mehide_avatarorback').val();
	 		if(hideAB=='avatar'){
	 			var url=ROOTDIR+'php/mE/me/avatar/avatar.php?action=user_avatar';
	 		}else{
	 			var url=ROOTDIR+'php/mE/me/back/back.php?action=user_back';
	 		}
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
			  xmlhttp.open("POST",url);
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
		$('#mE_avatarconhaveconcon').attr('src',imgurl);
		AvataR_addhide();
		$('#mE_avatarconno').css('display','none');
		$('#mE_avatarconhave').css('display','block');
		
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);					
	}else if(result=='user_backsuccess'){
		$('#AvataR_addupload').css({width:'320px',top:'85px'});
		
		var imgurl=$('#AvataR_adduploadbrowsershowconcon').attr('src');		
		$('#mE_backconhaveconcon').attr('src',imgurl);
		AvataR_addhide();
		$('#mE_backconno').css('display','none');
		$('#mE_backconhave').css('display','block');
		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);								
	}else{
		$('#UnknowerroR').css('display','block');		
	}		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 