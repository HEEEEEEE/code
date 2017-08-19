/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the menu:Function*/
function SigN_inmenushow(){
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
	     	url:ROOTDIR+'include/part/sign/signin/sign_h.php?action=sign_inmenushow',
	     	type:'GET',
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_signinmenushow(result);
	     		
	     		$('.input-show').val('');
	     		OperatE_signinmenu();								     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_signinmenushow(result){
	$('#MenU_signinstart').html(result);
	
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});	
}

/*show the menu:action*/
$(function(){
	/*show the idea create menu*/
	$('.signin').click(function(){
		var cb = checkBrowser();
		if ("IE" == cb) {
			$('#BrowseR').css({display:'block'});
		}else{
			//show		
			var exist=$('#MenU_signinstart div').length;
			if(exist>0){
				$('.input-show').val('');			
				$('#MenU_signinstart').css('display','block');			
			}
			else{
				SigN_inmenushow();			
			}				
		}				

	});
	
})
/*hide the menu:function*/
function SigN_inmenuhide(){
	//hide
	$('#MenU_signinstart').css('display','none');	
	document.getElementById('ForM_signin').reset();
	$('.signin-endtipscentercon').empty();	
}
/*change the code*/
function SigN_incodechange(){
	       src=ROOTDIR + 'include/part/code/code_imsignin.php?' + Math.random();
	       $('#SigniN_endcenterconenter41').attr('src',src);
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_signinmenu(){
	/*focusfocusfocusfocusfocusfocusfocusfocusfocusfocusfo 
	 * 
	 */
	 $('.signin-endcenterconenter').focus(function(){
	 	var sourceB=$(this).css('backgroundColor');
	 	$('#HiddeN_signincolorback').val(sourceB);
	 	var sourceB=$(this).css('backgroundColor','rgba(255,175,0,1)');	
	 });
	 	/*focus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfo
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			$('#SigniN_endcenterconenter2').focus(function(){			
			});		 	
		 		//RemembeRRemembeRRemembeRRemembeRRemembeRRemembeR
				$('#RemembeR_no').click(function(){
					$(this).css('display','none');
					$('#RemembeR').css('display','block');
					$('#HiddeN_signinremvalue').val('1');			
				});
				$('#RemembeR').click(function(){
					$(this).css('display','none');
					$('#RemembeR_no').css('display','block');
					$('#HiddeN_signinremvalue').val('0');								
				});				
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
		 	$('#SigniN_endcenterconenter41').click(function(){
			       SigN_incodechange();		 		
		 	});
		 //PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo	 
	 $('.signin-endcenterconenter').blur(function(){
	 	var sourceB=$('#HiddeN_signincolorback').val();
	 	var sourceB=$(this).css('backgroundColor',sourceB);	 		 	
	 });	 
	/*blurblurblurblurblurblurblurblurblurblurblurblurblur 
	 * 
	 */
	 	/*input:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tips
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL
		var inpu=document.getElementById('SigniN_endcenterconenter1');	
		inpu.oninput=function(){
			$('#SigniN_endtipscentercon1').empty();
		}		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			var inpu=document.getElementById('SigniN_endcenterconenter2');	
			inpu.oninput=function(){
				$('#SigniN_endtipscentercon2').empty();

			}		 	
		 		//UsernamEUsernamEUsernamEUsernamEUsernamEUsernamE
		 		
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
				var inpu=document.getElementById('SigniN_endcenterconenter4');	
				inpu.oninput=function(){
					$('#SigniN_endtipscentercon4').empty();

				}	 	
		 /*
		  *PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPoPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo
		  */
	 	$('#SigniN_endcenterconenter5').click(function(){
			//Email
			var EmaiL=$("#SigniN_endcenterconenter1").val();
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(EmaiL);
			
			//Password				
			var PassworD=$("#SigniN_endcenterconenter2").val();
			var model=new RegExp(/^\s{6,25}$/);
			var result1=model.test(PassworD);					
			
			//RemembeR
			var result2=$('#HiddeN_signinremvalue').val();
					
			//CodE
			var CodE=$("#SigniN_endcenterconenter4").val();
			var model=new RegExp(/^\s{1,5}$/);
			var result3=model.test(CodE);
						
			if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
				//Tip:Email's Format Error 
			            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
			            $('#SigniN_endtipscentercon1').html(tip);
			            
	            		$("#SigniN_endcenterconenter1").focus();			            			
			            return false;				
			}
			else if((result1==true) || (PassworD.length<=5 || PassworD.length>25)){
				//Tip:Password's Format Error;
			            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
			            $('#SigniN_endtipscentercon2').html(tip);
			            
	            		$("#SigniN_endcenterconenter2").focus();			            
			            return false;				
			}
//			else if((result2!='0')||(result2!='1')){ 
//			            return false;				
//			}		
			else if(result3==true || (CodE.length<=0 || CodE.length>5)){
			            //Tip:Code Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
			            $('#SigniN_endtipscentercon4').html(tip); 
			            	            
	            		$("#SigniN_endcenterconenter4").focus();			            			
			            return false;				
			}		
			else{
				SigN_inmenupost();			
			} 		 		
	 	});		 
		
		//hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide	 	 		
	 	$('#MenU_signincenterback').click(function(){
			SigN_inmenuhide();		 		
	 	});		
}
//OperatE the menu:action
$(function(){

})
 
/*when user post when user post when user post when user post when user post*/
		/*user sign up*/
/*user sign up:Function*/
function SigN_inmenupost(){
	  	  /*datadatadatadatadatadatadatadatadatadatadatadatad
		   *
		   * */	  	  
             	//Email
		var data=$("#SigniN_endcenterconenter1").val();
		var email=FilteR_ajaxspecialstr(data);					  	  
			//Password
			var data=$("#SigniN_endcenterconenter2").val();
			var passw=FilteR_ajaxspecialstr(data);		
				//Remember
				var remem=$('#HiddeN_signinremvalue').val();			
					//Code 
					var data=$("#SigniN_endcenterconenter4").val();
					var code=FilteR_ajaxspecialstr(data);		 	  
	              var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	              $('#LoadiN_tipstr').html(tip);	 	     
		  $('#LoadiN_tip').css({display:'block'});		  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:ROOTDIR+"include/part/sign/signin/sign_p.php?action=signin",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'email='+email+'&passw='+passw+'&remem='+remem+'&code='+code,
		  	//set return data type
		  	dataType:'text',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  ResulT_signinmenupost(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function ResulT_signinmenupost(result){
	if(result=='infor:eerror'){	
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Email's Format Error 
	            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
	            $('#SigniN_endtipscentercon1').html(tip);
	            
	       	SigN_incodechange();
	       	$("#SigniN_endcenterconenter4").val('');
	       		            
	            $("#SigniN_endcenterconenter1").focus();	             										
	}
	if(result=='infor:perror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Password's Format Error;
	            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
	            $('#SigniN_endtipscentercon2').html(tip);
	            
	       	SigN_incodechange();
	       	$("#SigniN_endcenterconenter4").val('');
	       		            
		$("#SigniN_endcenterconenter2").focus();			             									
	}			
	if(result=='infor:codeerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            //Tip:Code Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
	            $('#SigniN_endtipscentercon4').html(tip);            

	       	$("#SigniN_endcenterconenter4").val('');

	            $("#SigniN_endcenterconenter4").focus();										
	}
	if(result=='infor:eorperror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            //Tip:eorp Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"用户不存在或密码邮件错误"+"</span>";
	            $('#SigniN_endtipscentercon5').html(tip);
	       	setTimeout("$('#SigniN_endtipscentercon5').empty();",5000);
	       		             
	       	SigN_incodechange();
	       	$("#SigniN_endcenterconenter4").val('');	       	
                       										
	}				
	/*infor:signinsucceed*/		
	if(result=='infor:signinsucceed'){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	            var tip="<span style='color:rgb(255,125,0);'>"+"signin successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	
		location.reload();					 	
	}			
}



