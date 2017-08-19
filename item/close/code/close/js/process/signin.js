/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


		
//Refresh the code            	
function CODE_signin(){               	             
       src=ROOTDIR + 'include/part/code.php?' + Math.random();
       $('#LogiN #code').attr('src',src);
}
//Refresh the code



//when user input
$(function(){
	/*remember*/		
	$('#LogiN #RemembeR').click(function(){
		$(this).css('display','none');
		$('#LogiN #RemembeR_no').css('display','block');		
	});	
	/*hide the top basicf menu*/
	$('#LogiN #RemembeR_no').mouseup(function(){
		$(this).css('display','none');
		$('#LogiN #RemembeR').css('display','block');		
	});	
})
//when user input



/*when user post when user post when user post when user post when user post*/
		/*user sign in*/
/*user sign in:Function*/
function user_signin(){
	  	  /*start start start start start*/	  	  
             	//Email
		var email=$("#LogiN #EmaiL").val();
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(email);	
		if(result){	
			var email=email.replace(/&/gi,'%26');
			var email=email.replace(/\+/gi,'%2B');
		}							  	  
		//Password
		var pass=$("#LogiN #PassworD").val();
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(pass);	
		if(result){	
			var pass=pass.replace(/&/gi,'%26');
			var pass=pass.replace(/\+/gi,'%2B');
		}		
		//Remember
		var rem=$('#LogiN #RemembeR').css('display');
		if(rem=='block'){
			rem='1';	
		}
		else{
			rem='0';			
		}		
		//Code 
		var code=$("#LogiN #VercodE").val();		
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(code);	
		if(result){	
			var code=code.replace(/&/gi,'%26');
			var code=code.replace(/\+/gi,'%2B');
		}		 	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:ROOTDIR+"process/signinA.php?action=signin",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'EmaiL='+email+'&PassworD='+pass+'&RemembeR='+rem+'&VercodE='+code,
		  	//set return data type
		  	dataType:'text',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_create_signin(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function result_create_signin(result){
	//tip:Codeerror
	if(result=='infor:codeerror'){
	            $('#LogiN_tip').slideDown('fast');
	            var code="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Code error!'+"</span>";
	            var codetip=code+" change";
	            $('#LogiN_tipspan1').html(codetip); 
	            $("#LogiN #VercodE").val('');
	            $("#LogiN #VercodE").focus();										
	}
	if(result=='infor:eerror'){
		            $('#LogiN_tip').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Email format error!'+"</span>";
		            var tip=basic+" change";
		            $('#LogiN_tipspan1').html(tip); 										
	}
	if(result=='infor:perror'){
		            $('#LogiN_tip').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Password format error!'+"</span>";
		            var tip=basic+" change";
		            $('#LogiN_tipspan1').html(tip);  									
	}	
	//tip:Email or Password error
	if(result=='infor:eorperror'){
	            $('#LogiN_tip').slideDown('fast');
	            var eorp="<span style='color:rgb(255,0,0);font-size:16px;font-style:normal;'>"+'Password or email error!'+"</span>";
	            var eorptip=eorp+" change";
	            $('#LogiN_tipspan1').html(eorptip);
	            $("#LogiN #VercodE").val('');
	            $("#LogiN #VercodE").focus();	            
	            CODE_signin(); 										
	}		
	/*infor:loginsucceed*/		
	if(result=='infor:loginsucceed'){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	            var url=ROOTDIR+'project/home.php';
		location.href=url;			 	
	}		
}
		/*create the item create the item create the item create the item create the item*/
		/*post the data post the data post the data*/		
//post the data:function
function post_signin(){
		var EmaiL=$("#LogiN #EmaiL").val();
		var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
		var result = model.test(EmaiL);
				
		var PassworD=$("#LogiN #PassworD").val();
		var model=new RegExp(/^\s{6,25}$/);
		var result1=model.test(PassworD);
				
		var VercodE=$("#LogiN #VercodE").val();
		var model=new RegExp(/^\s{1,5}$/);
		var result2=model.test(VercodE);			
		if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
		            $('#LogiN_tip').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Email format error!'+"</span>";
		            var tip=basic+" change";
		            $('#LogiN_tipspan1').html(tip); 
		            return false;				
		}
		else if((result1==true) || (PassworD.length<=5 || PassworD.length>25)){
		            $('#LogiN_tip').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Password format error!'+"</span>";
		            var tip=basic+" change";
		            $('#LogiN_tipspan1').html(tip); 
		            return false;				
		}
		else if(result2==true || (VercodE.length<=0 || VercodE.length>5)){
		            $('#LogiN_tip').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Code format error!'+"</span>";
		            var tip=basic+" change";
		            $('#LogiN_tipspan1').html(tip);
		            return false;				
		}		
		else{	
			user_signin();		
		}  				
}
//post the data::action
$(function(){
            //Event:mouse
            $("#LogiN #SubmiT").click(function(){
		post_signin();			
	});  
	//Event:key
//	$("").keydown(function(event){  	 
//		keyN=event.which;
//		if(keyN==13){
//			post_signin();
//			return false; 								
//		}	    
//	});	
})
/*when user post when user post when user post when user post when user post*/
                              
                                                                                                              