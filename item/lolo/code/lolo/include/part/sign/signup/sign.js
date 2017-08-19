/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the menu:Function*/
function SigN_upmenushow(){
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
	     	url:ROOTDIR+'include/part/sign/signup/sign_h.php?action=sign_upmenushow',
	     	type:'GET',
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_signupmenushow(result);
	     		
			$('.input-show').val('');
	     		OperatE_signupmenu();								     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_signupmenushow(result){
	$('#MenU_signupstart').html(result);
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});	
}

/*show the menu:action*/
$(function(){
	/*show the idea create menu*/
	$('.signup').click(function(){		
		var cb = checkBrowser();
		if ("IE" == cb) {
			$('#BrowseR').css({display:'block'});
		}else{
			//show		
			var exist=$('#MenU_signupstart div').length;
			if(exist>0){
				$('.input-show').val('');							
				$('#MenU_signupstart').css('display','block');			
			}
			else{
				SigN_upmenushow();			
			}				
		}
	});
	
})
/*hide the menu:function*/
function SigN_upmenuhide(){
	//hide	
	$('#MenU_signupstart').css('display','none');	
	document.getElementById('ForM_signup').reset();
	$('.signup-endtipscentercon').empty();	
}
/*change the code*/
function SigN_upcodechange(){
	       src=ROOTDIR + 'include/part/code/code_imsignup.php?' + Math.random();
	       $('#SignuP_endcenterconenter41').attr('src',src);
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_signupmenu(){
	/*focusfocusfocusfocusfocusfocusfocusfocusfocusfocusfo 
	 * 
	 */
	 $('.signup-endcenterconenter').focus(function(){
	 	var sourceB=$(this).css('backgroundColor');
	 	$('#HiddeN_colorback').val(sourceB);
	 	var sourceB=$(this).css('backgroundColor','rgba(125,225,0,1)');	
	 });
	 	/*focus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfo
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			$('#SignuP_endcenterconenter2').focus(function(){
			            var numl="<span style='color:rgb(0,255,0);'>"+"5"+"</span>";
			            var numm="<span style='color:rgb(0,255,0);'>"+"25"+"</span>";
			            var con="<span >"+" &lt; 密码 &lt;= "+"</span>";
			            var tip=numl + con + numm
			            $('#SignuP_endtipscentercon2').html(tip);			
			});		 	
		 		//UsernamEUsernamEUsernamEUsernamEUsernamEUsernamE
				$('#SignuP_endcenterconenter3').focus(function(){
				            var numl="<span style='color:rgb(0,255,0);'>"+"0"+"</span>";
				            var numm="<span style='color:rgb(0,255,0);'>"+"25"+"</span>";
				            var con="<span >"+" &lt; 昵称 &lt;= "+"</span>";
				            var tip=numl + con + numm
				            $('#SignuP_endtipscentercon3').html(tip);			
				});
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
		 	$('#SignuP_endcenterconenter41').click(function(){
		 		SigN_upcodechange();
		 	});
		 //PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo	 
	 $('.signup-endcenterconenter').blur(function(){
	 	var sourceB=$('#HiddeN_colorback').val();
	 	var sourceB=$(this).css('backgroundColor',sourceB);	 		 	
	 });	 
	/*blurblurblurblurblurblurblurblurblurblurblurblurblur 
	 * 
	 */
	 	/*input:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tips
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL
		var inpu=document.getElementById('SignuP_endcenterconenter1');	
		inpu.oninput=function(){
			var value=this.value;
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(value);			
			if((result==true) && ((value.length>5) && (value.length<=25))){
				//Tip:Email's Format Right
			            var tip="<span style='color:rgb(0,255,0);'>"+"电子邮件格式正确"+"</span>";
			            $('#SignuP_endtipscentercon1').html(tip);				
			}
			else{
				//Tip:Email's Format Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
			            $('#SignuP_endtipscentercon1').html(tip);                              
			}
		}		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			var inpu=document.getElementById('SignuP_endcenterconenter2');	
			inpu.oninput=function(){
				var value=this.value;
				var model=new RegExp(/^\s{6,25}$/);
				var result=model.test(value);							
				if((result==false) && ((value.length>5) && (value.length<=25))){
					//Tip:Password's Format Right
				            var tip="<span style='color:rgb(0,255,0);'>"+"密码格式正确"+"</span>";
				            $('#SignuP_endtipscentercon2').html(tip);				
				}
				else{
					//Tip:Password's Format Error
				            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
				            $('#SignuP_endtipscentercon2').html(tip);                             
				}
			}		 	
		 		//UsernamEUsernamEUsernamEUsernamEUsernamEUsernamE
				var inpu=document.getElementById('SignuP_endcenterconenter3');	
				inpu.oninput=function(){
					var value=this.value;
					var model=new RegExp(/^\s{1,25}$/);
					var result=model.test(value);							
					if((result==false) && ((value.length>0) && (value.length<=25))){
						//Tip:Username's Format Right
					            var tip="<span style='color:rgb(0,255,0);'>"+"昵称格式正确"+"</span>";
					            $('#SignuP_endtipscentercon3').html(tip);				
					}
					else{
						//Tip:Username's Format Error
					            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
					            $('#SignuP_endtipscentercon3').html(tip);                             
					}
				}		 		
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
		 /*
		  *PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPoPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo
		  */
	 	$('#SignuP_endcenterconenter5').click(function(){
			//Email
			var EmaiL=$("#SignuP_endcenterconenter1").val();
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(EmaiL);
			
			//Password				
			var PassworD=$("#SignuP_endcenterconenter2").val();
			var model=new RegExp(/^\s{6,25}$/);
			var result1=model.test(PassworD);					
			
			//UsernamE
			var UsernamE=$("#SignuP_endcenterconenter3").val();
			var model=new RegExp(/^\s{1,25}$/);
			var result2=model.test(UsernamE);
					
			//CodE
			var CodE=$("#SignuP_endcenterconenter4").val();
			var model=new RegExp(/^\s{1,5}$/);
			var result3=model.test(CodE);
						
			if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
				//Tip:Email's Format Error 
			            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
			            $('#SignuP_endtipscentercon1').html(tip);
			            	            
	            		$("#SignuP_endcenterconenter1").focus();	            			
			            return false;				
			}
			else if((result1==true) || (PassworD.length<=5 || PassworD.length>25)){
				//Tip:Password's Format Error;
			            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
			            $('#SignuP_endtipscentercon2').html(tip);
	            
	           		            $("#SignuP_endcenterconenter2").focus();			            
			            return false;				
			}
			else if((result2==true) || (UsernamE.length<=0 || UsernamE.length>25)){
				//Tip:Username's Format Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
			            $('#SignuP_endtipscentercon3').html(tip);
	            
	           		            $("#SignuP_endcenterconenter3").focus();			             
			            return false;				
			}		
			else if(result3==true || (CodE.length<=0 || CodE.length>5)){
			            //Tip:Code Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
			            $('#SignuP_endtipscentercon4').html(tip); 
	            
	           		            $("#SignuP_endcenterconenter4").focus();			            			
			            return false;				
			}		
			else{
				SigN_upmenupost();			
			} 		 		
	 	});		 
		
		//hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide	 	 		
	 	$('#MenU_signupcenterback').click(function(){
			SigN_upmenuhide();		 		
	 	});		
}
//OperatE the menu:action
$(function(){

})

/*when user post when user post when user post when user post when user post*/
		/*user sign up*/
/*user sign up:Function*/
function SigN_upmenupost(){
	  	  /*datadatadatadatadatadatadatadatadatadatadatadatad
		   *
		   * */	  	  
             	//Email
		var data=$("#SignuP_endcenterconenter1").val();
		var email=FilteR_ajaxspecialstr(data);					  	  
			//Password
			var data=$("#SignuP_endcenterconenter2").val();
			var passw=FilteR_ajaxspecialstr(data);		
				//Username
				var data=$("#SignuP_endcenterconenter3").val();
				var usern=FilteR_ajaxspecialstr(data);				
					//Code 
					var data=$("#SignuP_endcenterconenter4").val();
					var code=FilteR_ajaxspecialstr(data);
					
	              var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	              $('#LoadiN_tipstr').html(tip);	 	     
		  $('#LoadiN_tip').css({display:'block'});		 	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:ROOTDIR+"include/part/sign/signup/sign_p.php?action=signup",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'email='+email+'&passw='+passw+'&usern='+usern+'&code='+code,
		  	//set return data type
		  	dataType:'text',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  ResulT_signupmenupost(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function ResulT_signupmenupost(result){
	//tip:Email has been exist!
	if(result=='infor:emailexist'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            var tip="<span style='color:rgba(255,0,0,1);'>电子邮件已经存在</span>";
	            $('#SignuP_endtipscentercon1').html(tip);
	            
	            SigN_upcodechange();
	            $("#SignuP_endcenterconenter4").val('');
	            
	            $("#SignuP_endcenterconenter1").focus();	              			 	
	}
	if(result=='infor:eerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Email's Format Error 
	            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
	            $('#SignuP_endtipscentercon1').html(tip);
	            
	            SigN_upcodechange();
	            $("#SignuP_endcenterconenter4").val('');            
	            
	            $("#SignuP_endcenterconenter1").focus();	             										
	}
	if(result=='infor:perror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Password's Format Error;
	            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
	            $('#SignuP_endtipscentercon2').html(tip);
	            
	            SigN_upcodechange();
	            $("#SignuP_endcenterconenter4").val('');	            
	            
		$("#SignuP_endcenterconenter2").focus();			             									
	}
	if(result=='infor:uerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Username's Format Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
	            $('#SignuP_endtipscentercon3').html(tip);
	            
	            SigN_upcodechange();
	            $("#SignuP_endcenterconenter4").val('');	            
	            
	            $("#SignuP_endcenterconenter3").focus();	            									
	}			
	//tip:Codeerror
	if(result=='infor:codeerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            //Tip:Code Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
	            $('#SignuP_endtipscentercon4').html(tip);            

	            $("#SignuP_endcenterconenter4").val('');
	            
	            $("#SignuP_endcenterconenter4").focus();										
	}			
	/*infor:signupsucceed*/		
	if(result=='infor:signupsucceed'){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	            var tip="<span style='color:rgb(0,225,0);'>"+"signup successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	
		location.reload();	 	     					 	
	}			
}



