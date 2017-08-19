/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*show the menu:Function*/
function ME_me(){
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
	     	url:ROOTDIR+'html/mE/me/me/me.php?action=me_me',
	     	type:'GET',
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_meme(result);
	     		OperatE_me();								     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_meme(result){	
	$('#MenU_meme').html(result);
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'}); 
}

/*show the menu:action*/
$(function(){
	/*show the idea create menu*/
	$('#mE_mineper').click(function(){
		//hide
		$('#CenteR_mainme').css('opacity','0');
		//show
		ME_me();			
	});
	
	var settings=$('#HiddeN_OthersSettings').val();
	if(settings=='settings'){
		//hide
		$('#CenteR_mainme').css('opacity','0');
		//show
		ME_me();		
	}
	
})
/*hide the menu:function*/
function ME_mehide(){
	//hide
	$('#MenU_meme').empty();	
	//show
	$('#CenteR_mainme').css('opacity','1');	
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
 	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectimageback(file){
	 /*
	 *filterfilterfilterfilterfilterfilterfilterfilterfilterfil
	  */	
	 //type
	 var type=file.type;//格式：例image/png image/gif
	 var rtype=/^(image\/png|image\/png|image\/png)$/i;
	 var result=rtype.test(type);
	 if(result==false){
		$('#UploaD_tip').css('display','block');
		$('#MenU_mehidden1').val('0');			 					 	
	 	return false;	 	
	 }
	 var size=file.size;//单位：B
	 if((2.5*1024*1024)<size){
		$('#UploaD_tip').css('display','block');
		$('#MenU_mehidden1').val('0');			 		
	 	return false;		 	
	 }
	 
	 /*
	 *browserbrowserbrowserbrowser browserbrowserbrowserbrowser 
	  */
	 //custom the upload file as ReadFile
	 var oReader = new FileReader();
	 //turn 'file':var file=document.getElementById('InpuT').files[0];to a dataurl
	 oReader.readAsDataURL(file);				 
	 //when it onload
	 oReader.onload = function(e){
		 //give the dataurl to the img src
		 var imgurl=e.target.result;//e.target.result = dataurl	
		 $('#MenU-mE_backcontoolbro').attr('src',imgurl);
		 $('#MenU-mE_backcontool').css('display','block');
		 $('#MenU-mE_backconno').css('display','none');   				     	    
	 }
}
function FilE_selectimageavatar(file){
	 /*
	 *filterfilterfilterfilterfilterfilterfilterfilterfilterfil
	  */	
	 //type
	 var type=file.type;//格式：例image/png image/gif
	 var rtype=/^(image\/png|image\/png|image\/png)$/i;
	 var result=rtype.test(type);
	 if(result==false){
		$('#UploaD_tip').css('display','block');
		$('#MenU_mehidden2').val('0');	 					 	
	 	return false;	 	
	 }
	 var size=file.size;//单位：B
	 if((2.5*1024*1024)<size){
		$('#UploaD_tip').css('display','block');
		$('#MenU_mehidden2').val('0');			 		
	 	return false;		 	
	 }
	 
	 /*
	 *browserbrowserbrowserbrowser browserbrowserbrowserbrowser 
	  */
	 //custom the upload file as ReadFile
	 var oReader = new FileReader();
	 //turn 'file':var file=document.getElementById('InpuT').files[0];to a dataurl
	 oReader.readAsDataURL(file);				 
	 //when it onload
	 oReader.onload = function(e){
		 //give the dataurl to the img src
		 var imgurl=e.target.result;//e.target.result = dataurl	
		 $('#MenU-mE_avatarconnobro').attr('src',imgurl);
		 $('#MenU-mE_avatarconnotool').css('display','block');   				     	    
	 }
}
//OperatE the menu:function
function OperatE_me(){	
		/*backbackbackbackbackbackbackbackbackbackbackbackbackbackbackback
		 * 
		 * 
		 */
		 //mouse
		 $('#MenU-InpuT_upload1').mouseover(function(){
		 	 $('#MenU-img_upload1').css({backgroundColor:'rgba(255,255,255,1)'});
		 });
		 $('#MenU-InpuT_upload1').mouseleave(function(){
		 	 $('#MenU-img_upload1').css({backgroundColor:'rgba(255,255,255,0.125)'});
		 });
		//select	
		$('#MenU-InpuT_upload1').change(function(){
			$('#MenU_mehidden1').val('1');
					 
			 	var file=this.files[0];
			 FilE_selectimageback(file);

		});
		//cancel
		$('#MenU-mE_backcontoolcancel').click(function(){
			$('#MenU_mehidden1').val('0');
			
		 		$('#MenU-mE_backcontool').css('display','none');
		 	$('#MenU-mE_backconno').css('display','block'); 

		});
		
		
						 		 	     		
		/*avataravataravataravataravataravataravataravataravataravataravat
		 * 
		 * 
		 */
		 //mouse
		 $('#MenU-InpuT_upload2').mouseover(function(){
		 	 $('#MenU-img_upload2').css({width:'65%',height:'65%',padding:'17.5%'});
		 });
		 $('#MenU-InpuT_upload2').mouseleave(function(){
		 	 $('#MenU-img_upload2').css({width:'50%',height:'50%',padding:'25%'});
		 });
		//select	
		$('#MenU-InpuT_upload2').change(function(){
			$('#MenU_mehidden2').val('1');
					 
			 	var file=this.files[0];
			 FilE_selectimageavatar(file);

		});
		//cancel
		$('#MenU-mE_avatarconnocancel').click(function(){
			$('#MenU_mehidden2').val('0');
		 	$('#MenU-mE_avatarconnotool').css('display','none');

		});
		
		
				 
		/*namenamenamenamenamenamenamenamenamenamenamenamenamenamenamename
		 * 
		 * 
		 */
		$('#MenU-mE_avatarnameinput').click(function(){
		            var numl="<span style='color:rgb(0,255,0);'>"+"0"+"</span>";
		            var numm="<span style='color:rgb(0,255,0);'>"+"25"+"</span>";
		            var con="<span >"+" &lt; NamE &lt;= "+"</span>";
		            var tip=numl + con + numm
		            $('#MenU_metipscon1').html(tip);			
		});				
				 		
		/*biobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobio
		 * 
		 * 
		 */
		$('#MenU-mE_avatarbiocon').click(function(){
		            var numm="<span style='color:rgb(0,255,0);'>"+"125"+"</span>";
		            var con="<span >"+"BIO &lt;= "+"</span>";
		            var tip=con + numm
		            $('#MenU_metipscon2').html(tip);			
		});
		
		
				 		 		
		/*emailemailemailemailemailemailemailemailemailemailemailemailemail
		 * 
		 * 
		 */
		$('#MenU-mE_avataremailcon').click(function(){
		            $('#MenU_metipscon3').html('');			
		});		 
		 
		 				
		//postpostpostpostpostpostpostpostpostpostpostpostpostpostpostpost
		$('#MenU_medone').click(function(){
			//NamE
			var NamE = $("#MenU-mE_avatarnameinput").val();
			var model = new RegExp(/^\s{1,25}$/);
			var result2 = model.test(NamE);
					
			//BIO
			var BiO = $("#MenU-mE_avatarbiocon").text();
			var model = new RegExp(/^\s{1,125}$/);
			var result1 = model.test(BiO);
							
			//EmaiL
			var EmaiL = $("#MenU-mE_avataremailcon").val();
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(EmaiL);				
			
			if((result2==true) || (NamE.length<=0 || NamE.length>25)){
			            var tip="<span style='color:rgb(255,0,0);'>"+"NamE's Format Error"+"</span>";
			            $('#MenU_metipscon1').html(tip); 
			            $("#MenU-mE_avatarnameinput").focus();
			            return false;								
			}
			else if(BiO.length>=125){
			            var tip="<span style='color:rgb(255,0,0);'>"+"BIO's Format Error"+"</span>";
			            $('#MenU_metipscon2').html(tip);
			            $("#MenU-mE_avatarbiocon").focus();
			            return false;				
			}
			else if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
			            var tip="<span style='color:rgb(255,0,0);'>"+"EmaiL's Format Error"+"</span>";
			            $('#MenU_metipscon3').html(tip);
			            $("#MenU-mE_avataremailcon").focus();			
			            return false;			            				
			}				
			else{
				UseR_infopost();
			} 			
		});							 
		/*hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide
		 * 
		 * */
		$('#MenU_mecancel').click(function(){
			ME_mehide();																					
		});	
}

/*user info:Function*/
function UseR_infopost(){
	  	  /*datadatadatadatadatadatadatadatadatadatadatadatad
		   *
		   * */
			//EmaiL
			var data = $("#MenU-mE_avataremailcon").val();
			var email=FilteR_ajaxspecialstr(data);				
			
			//BIO
			var data = $("#MenU-mE_avatarbiocon").text();
			var bio=FilteR_ajaxspecialstr(data);
					
			//NamE
			var data = $("#MenU-mE_avatarnameinput").val();
			var nam=FilteR_ajaxspecialstr(data);		   	  	  
	 
	                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	                 $('#LoadiN_tipstr').html(tip);	 	     
		     $('#LoadiN_tip').css({display:'block'});		 	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:ROOTDIR+"php/mE/me/me/inform.php?action=user_info",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'email='+email+'&bio='+bio+'&name='+nam,
		  	//set return data type
		  	dataType:'text',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  ResulT_userinfopost(result);		  	    		
		  	},
		  });		
}
/*deal the result:Function*/
function ResulT_userinfopost(result){
	//tip:Email has been exist!
	if(result=='infor:emailexist'){
	            var tip="<span style='color:rgba(255,0,0,1);'>EmaiL has been exist !</span>";
	            $('#MenU_metipscon3').html(tip);
	            $("#MenU-mE_avataremailcon").focus();	              			 	
	}
	if(result=='infor:eerror'){
	            var tip="<span style='color:rgb(255,0,0);'>"+"EmaiL's Format Error"+"</span>";
	            $('#MenU_metipscon3').html(tip);
	            $("#MenU-mE_avataremailcon").focus();	             										
	}
	
	if(result=='string:lesstomorerror'){
	            var tip="<span style='color:rgb(255,0,0);'>"+"BIO's Format Error"+"</span>";
	            $('#MenU_metipscon2').html(tip);
	            $("#MenU-mE_avatarbiocon").focus();										
	}
		
	if(result=='infor:uerror'){
	            var tip="<span style='color:rgb(255,0,0);'>"+"NamE's Format Error"+"</span>";
	            $('#MenU_metipscon1').html(tip);
	            $("#MenU-mE_avatarnameinput").focus();	            									
	}			
			
	/*infor:signupsucceed*/		
	if(result=='user_infosuccess'){			
		var avatar=$('#MenU_mehidden2').val();
		var back=$('#MenU_mehidden1').val();
		if((avatar!='0')||(back!='0')){
			FilE_uploadimage(avatar);
		}else{		
		            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
		            $('#LoadiN_tipstr').html(tip);	     	
		     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);
		            var url=location.href;
		            var url=url.replace(/&others=settings/,' ');
		            location.href=url;							
		}					 	
	}
}

function FilE_uploadimage(avatar){
	/*data
	 * 
	 */
	if(avatar!='0'){
		var data=new FormData(document.getElementById('MenU-FroM_upload2'));
 		var url=ROOTDIR+'php/mE/me/me/avatar.php?action=user_avatar';		
	}else{
		var data=new FormData(document.getElementById('MenU-FroM_upload1'));
 		var url=ROOTDIR+'php/mE/me/me/back.php?action=user_back';		
	}	 		
	 //ajax
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
			  xmlhttp.open("POST",url);
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
			  
		    /*Acee the data:*/
		    
		      /*return the data*/
		      xmlhttp.addEventListener('load',ResulT_fileuploadimage,false);
			      
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_fileuploadimage(e){	
//whenserveruploadsuccess
	var result=e.target.responseText;
	if(result=='user_avatarsuccess'){
		var back=$('#MenU_mehidden1').val();
		if(back!='0'){
			var avatar='0';
			FilE_uploadimage(avatar);		
		}else{
		            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
		            $('#LoadiN_tipstr').html(tip);	     	
		     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);
		           
		            var url=location.href;
		            var url=url.replace(/&others=settings/,' ');
		            location.href=url;		            		
		}		
			
	}else if(result=='user_backsuccess'){		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);
	            
	            var url=location.href;
	            var url=url.replace(/&others=settings/,' ');
	            location.href=url;						
	}else{
		$('#UnknowerroR').css('display','block');		
	}		
}