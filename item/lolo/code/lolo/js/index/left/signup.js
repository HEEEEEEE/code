/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*change the code*/
function SigN_upoutcodechange(){
	       src=ROOTDIR + 'include/part/code/code_imsignup.php?' + Math.random();
	       $('#SignupouT_leafcon41').attr('src',src);
}
/*OperatE OperatE OperatE OperatE OperatE OperatE 
 */
function SigN_upoutoperate(){
	//tips hiddentips hiddentips hiddentips hiddentips hiddentips hiddentips hiddentips hidden
	 $('html').mouseup(function(){
	 	$('.signupout-endtipscentercon').css('display','none');	
	 });	
	
	/*focusfocusfocusfocusfocusfocusfocusfocusfocusfocusfo 
	 * 
	 */
	 $('.signupout-leafcon').focus(function(){
	 	var sourceB=$(this).css('backgroundColor');
	 	$('#HiddeN_signupoutcolorback').val(sourceB);
	 	var sourceB=$(this).css('backgroundColor','rgba(125,225,0,1)');	
	 });
	 	/*focus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfocus:tipsfo
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			$('#SignupouT_leafcon2').click(function(){
			            var numl="<span style='color:rgb(0,200,0);'>"+"5"+"</span>";
			            var numm="<span style='color:rgb(0,200,0);'>"+"25"+"</span>";
			            var con="<span >"+" &lt; 密码 &lt;= "+"</span>";
			            var tip=numl + con + numm
			            $('#SignupouT_endtipscenterconcon2').html(tip);	
			            $('#SignupouT_endtipscentercon2').css('display','block');		
			});		 	
		 		//UsernamEUsernamEUsernamEUsernamEUsernamEUsernamE
				$('#SignupouT_leafcon3').click(function(){
				            var numl="<span style='color:rgb(0,200,0);'>"+"0"+"</span>";
				            var numm="<span style='color:rgb(0,200,0);'>"+"25"+"</span>";
				            var con="<span >"+" &lt; 昵称 &lt;= "+"</span>";
				            var tip=numl + con + numm
				            $('#SignupouT_endtipscenterconcon3').html(tip);
				            $('#SignupouT_endtipscentercon3').css('display','block');				
				});
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
		 	$('#SignupouT_leafcon41').click(function(){
		 		SigN_upoutcodechange();
		 	});
		 //PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo
		 
		 
		 
	/*blurblurblurblurblurblurblurblurblurblurblurblurblurblurblurblurblurblur 
	 * 
	 */	 
	 $('.signupout-leafcon').blur(function(){
	 	var sourceB=$('#HiddeN_signupoutcolorback').val();
	 	var sourceB=$(this).css('backgroundColor',sourceB);	 		 	
	 });	 
	 	/*input:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tipsinput:tips
	 	 * 
	 	 */	 
		 //EmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiLEmaiL
		var inpu=document.getElementById('SignupouT_leafcon1');	
		inpu.oninput=function(){
			var value=this.value;
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(value);			
			if((result==true) && ((value.length>5) && (value.length<=25))){
				//Tip:Email's Format Right
			            var tip="<span style='color:rgb(0,200,0);'>"+"电子邮件格式正确"+"</span>";
			            $('#SignupouT_endtipscenterconcon1').html(tip);	
			            $('#SignupouT_endtipscentercon1').css('display','block');			
			}
			else{
				//Tip:Email's Format Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
			            $('#SignupouT_endtipscenterconcon1').html(tip); 
			            $('#SignupouT_endtipscentercon1').css('display','block');                             
			}
		}		 
		 	//PassworDPassworDPassworDPassworDPassworDPassworDPa
			var inpu=document.getElementById('SignupouT_leafcon2');	
			inpu.oninput=function(){
				var value=this.value;
				var model=new RegExp(/^\s{6,25}$/);
				var result=model.test(value);							
				if((result==false) && ((value.length>5) && (value.length<=25))){
					//Tip:Password's Format Right
				            var tip="<span style='color:rgb(0,200,0);'>"+"密码格式正确"+"</span>";
				            $('#SignupouT_endtipscenterconcon2').html(tip);
				            $('#SignupouT_endtipscentercon2').css('display','block');				
				}
				else{
					//Tip:Password's Format Error
				            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
				            $('#SignupouT_endtipscenterconcon2').html(tip);
				            $('#SignupouT_endtipscentercon2').css('display','block');                             
				}
			}		 	
		 		//UsernamEUsernamEUsernamEUsernamEUsernamEUsernamE
				var inpu=document.getElementById('SignupouT_leafcon3');	
				inpu.oninput=function(){
					var value=this.value;
					var model=new RegExp(/^\s{1,25}$/);
					var result=model.test(value);							
					if((result==false) && ((value.length>0) && (value.length<=25))){
						//Tip:Username's Format Right
					            var tip="<span style='color:rgb(0,200,0);'>"+"昵称格式正确"+"</span>";
					            $('#SignupouT_endtipscenterconcon3').html(tip);	
					            $('#SignupouT_endtipscentercon3').css('display','block');			
					}
					else{
						//Tip:Username's Format Error
					            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
					            $('#SignupouT_endtipscenterconcon3').html(tip);
					            $('#SignupouT_endtipscentercon3').css('display','block');                             
					}
				}		 		
		 	//CODECODECODECODECODECODECODECODECODECODECODECODECO
		 /*
		  *PosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPoPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPosTPo
		  */
	 	$('#SignupouT_leafcon5').click(function(){
			//Email
			var EmaiL=$("#SignupouT_leafcon1").val();
			var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
			var result = model.test(EmaiL);
			
			//Password				
			var PassworD=$("#SignupouT_leafcon2").val();
			var model=new RegExp(/^\s{6,25}$/);
			var result1=model.test(PassworD);					
			
			//UsernamE
			var UsernamE=$("#SignupouT_leafcon3").val();
			var model=new RegExp(/^\s{1,25}$/);
			var result2=model.test(UsernamE);
					
			//CodE
			var CodE=$("#SignupouT_leafcon4").val();
			var model=new RegExp(/^\s{1,5}$/);
			var result3=model.test(CodE);
						
			if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
				//Tip:Email's Format Error 
			            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件格式错误"+"</span>";
			            $('#SignupouT_endtipscenterconcon1').html(tip);	
			            $('#SignupouT_endtipscentercon1').css('display','block');
			            
			            $("#SignupouT_leafcon1").focus();			
			            return false;				
			}
			else if((result1==true) || (PassworD.length<=5 || PassworD.length>25)){
				//Tip:Password's Format Error;
			            var tip="<span style='color:rgb(255,0,0);'>"+"密码格式错误"+"</span>";
			            $('#SignupouT_endtipscenterconcon2').html(tip);
			            $('#SignupouT_endtipscentercon2').css('display','block');
			            
			            $("#SignupouT_leafcon2").focus();
			            return false;				
			}
			else if((result2==true) || (UsernamE.length<=0 || UsernamE.length>25)){
				//Tip:Username's Format Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
			            $('#SignupouT_endtipscenterconcon3').html(tip);
			            $('#SignupouT_endtipscentercon3').css('display','block');
			            
			            $("#SignupouT_leafcon3").focus();
			            return false;				
			}		
			else if(result3==true || (CodE.length<=0 || CodE.length>5)){
			            //Tip:Code Error
			            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
			            $('#SignupouT_endtipscenterconcon4').html(tip);
			            $('#SignupouT_endtipscentercon4').css('display','block');
			            
			            $("#SignupouT_leafcon4").focus(); 			
			            return false;				
			}		
			else{
				SigN_upoutmenupost();			
			} 		 		
	 	});
}
//OperatE:action
$(function(){
	var cb = checkBrowser();
	if ("IE" == cb) {
		 $('.input-show').click(function(){
			$('#BrowseR').css({display:'block'});	
		 });		
		
	}else{
		SigN_upoutoperate();				
	}		 	
})
 
/*when user post when user post when user post when user post when user post*/
		/*user sign up*/
/*user sign up:Function*/
function SigN_upoutmenupost(){
	  	  /*datadatadatadatadatadatadatadatadatadatadatadatad
		   *
		   * */	  	  
             	//Email
		var data=$("#SignupouT_leafcon1").val();
		var email=FilteR_ajaxspecialstr(data);					  	  
			//Password
			var data=$("#SignupouT_leafcon2").val();
			var passw=FilteR_ajaxspecialstr(data);		
				//Username
				var data=$("#SignupouT_leafcon3").val();
				var usern=FilteR_ajaxspecialstr(data);				
					//Code 
					var data=$("#SignupouT_leafcon4").val();
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
		  	  ResulT_signupoutmenupost(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function ResulT_signupoutmenupost(result){
	//tip:Email has been exist!
	if(result=='infor:emailexist'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            var tip="<span style='color:rgba(255,0,0,1);'>电子邮件已经存在</span>";
	            $('#SignupouT_endtipscenterconcon1').html(tip);
	            $('#SignupouT_endtipscentercon1').css('display','block');
	            
	            SigN_upoutcodechange();
	            $("#SignupouT_leafcon4 ").val('');
	            	            	           
	            $("#SignupouT_leafcon1").focus();	              			 	
	}
	if(result=='infor:eerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Email's Format Error 
	            var tip="<span style='color:rgb(255,0,0);'>"+"电子邮件电子邮件"+"</span>";
	            $('#SignupouT_endtipscenterconcon1').html(tip);
	            $('#SignupouT_endtipscentercon1').css('display','block');
	            
	            SigN_upoutcodechange();
	            $("#SignupouT_leafcon4 ").val('');
	                        
	            $("#SignupouT_leafcon1").focus();	             										
	}
	if(result=='infor:perror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Password's Format Error;
	            var tip="<span style='color:rgb(255,0,0);'>"+"密码电子邮件"+"</span>";
	            $('#SignupouT_endtipscenterconcon2').html(tip);
	            $('#SignupouT_endtipscentercon2').css('display','block');
	            	            
	            SigN_upoutcodechange();
	            $("#SignupouT_leafcon4 ").val('');
	            				            
		$("#SignupouT_leafcon2").focus();			             									
	}
	if(result=='infor:uerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
		//Tip:Username's Format Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"昵称格式错误"+"</span>";
	            $('#SignupouT_endtipscenterconcon3').html(tip);
	            $('#SignupouT_endtipscentercon3').css('display','block');
	            	            
	            SigN_upoutcodechange();
	            $("#SignupouT_leafcon4 ").val('');
	                        
	            $("#SignupouT_leafcon3").focus();	            									
	}			
	//tip:Codeerror
	if(result=='infor:codeerror'){
		$('#LoadiN_tipstr').html('');
		$('#LoadiN_tip').css({display:'none'});		
	            //Tip:Code Error
	            var tip="<span style='color:rgb(255,0,0);'>"+"验证码错误"+"</span>";
	            $('#SignupouT_endtipscenterconcon4').html(tip);
	            $('#SignupouT_endtipscentercon4').css('display','block');

	            $("#SignupouT_leafcon4 ").val('');
	            
	            $("#SignupouT_leafcon4").focus();										
	}			
	/*infor:signupsucceed*/		
	if(result=='infor:signupsucceed'){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	            var tip="<span style='color:rgb(0,225,0);'>"+"signup successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	
	            var url=ROOTDIR+'home.php';
		location.href=url;					 	
	}			
}














     