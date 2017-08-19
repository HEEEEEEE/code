/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


		
//Refresh the code            	
function CODE_signup(){               	             
       src=ROOTDIR + 'include/part/code.php?' + Math.random();
       $('#SignuP #code').attr('src',src);
}
//Refresh the code




//when user focus:tip the conditions
$(function(){
	//EmaiL		
//	$('#SignuP #EmaiL').focus(function(){
//		//Tip:5<Email<25
//	            $('#SignuP_tip1').show('fast');
//	            var basic5="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"5"+"</span>";
//	            var basic25="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
//	            var tip=basic5+"&lt;Email&lt;="+basic25
//	            $('#SignuP_tip1span1').html(tip);			
//	});
	
	//PassworD		
	$('#SignuP #PassworD').focus(function(){
		//Tip:5<Password<25
	            $('#SignuP_tip2').show('fast');
	            var basic5="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"5"+"</span>";
	            var basic25="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
	            var tip=basic5+"&lt;Password&lt;="+basic25
	            $('#SignuP_tip2span2').html(tip);			
	});
	
	//UsernamE		
	$('#SignuP #UsernamE').focus(function(){
		//Tip:0<Username<25
	            $('#SignuP_tip3').show('fast');
	            var basic0="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
	            var basic25="<span style='color:rgb(0,112,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
	            var tip=basic0+"&lt;Username&lt;="+basic25
	            $('#SignuP_tip3span3').html(tip);			
	});				
})
//when user focus:tip the conditions



	
	
//when user input:tip until right
$(function(){
//Check the Email	
	var mail=document.getElementById('SignuP');
	var mail=mail.getElementsByTagName('input');	
	mail[0].oninput=function(){
		var value=this.value;
		var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
		var result = model.test(value);			
		if((result==true) && (value.length>5 && value.length<=25)){
			//Tip:Email's Format Right
		            $('#SignuP_tip1').show('fast');
		            var tip="<span style='color:rgb(0,150,0);font-size:20px;font-style:normal;'>"+"Email's Format Right"+"</span>";
		            $('#SignuP_tip1span1').html(tip);				
		}
		else{
			//Tip:Email's Format Error
		            $('#SignuP_tip1').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Email's Format Error"+"</span>";
		            $('#SignuP_tip1span1').html(tip);                               
		}
	}
	
//Check the Password	
	var pass=document.getElementById('SignuP');
	var pass=pass.getElementsByTagName('input');	
	pass[1].oninput=function(){
		var value=this.value;
		var model=new RegExp(/^\s{6,25}$/);
		var result=model.test(value);					
		if((result==false) && (value.length>5 && value.length<=25)){
			//Tip:Password's Format Right
		            $('#SignuP_tip2').show('fast');
		            var tip="<span style='color:rgb(0,150,0);font-size:20px;font-style:normal;'>"+"Password's Format Right"+"</span>";
		            $('#SignuP_tip2span2').html(tip);		            				
		}
		else{
			//Tip:Password's Format Error
		            $('#SignuP_tip2').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Password's Format Error"+"</span>";
		            $('#SignuP_tip2span2').html(tip);                               
		}
	}

//Check the Username	
	var username=document.getElementById('SignuP');
	var username=username.getElementsByTagName('input');	
	username[2].oninput=function(){
		var value=this.value;
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(value);					
		if((result==false) && (value.length>0 && value.length<=25)){
			//Tip:Username's Format Right
		            $('#SignuP_tip3').show('fast');
		            var tip="<span style='color:rgb(0,150,0);font-size:20px;font-style:normal;'>"+"Username's Format Right"+"</span>";
		            $('#SignuP_tip3span3').html(tip);	            				
		}
		else{
			//Tip:Username's Format Error
		            $('#SignuP_tip3').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Username's Format Error"+"</span>";
		            $('#SignuP_tip3span3').html(tip);                               
		}
	}			
})
//when user input:tip until right 
                                                                                                            
/*when user post when user post when user post when user post when user post*/
		/*user sign up*/
/*user sign up:Function*/
function user_signup(){
	  	  /*start start start start start*/	  	  
             	//Email
		var email=$("#SignuP #EmaiL").val();
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(email);	
		if(result){	
			var email=email.replace(/&/gi,'%26');
			var email=email.replace(/\+/gi,'%2B');
		}							  	  
		//Password
		var pass=$("#SignuP #PassworD").val();
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(pass);	
		if(result){	
			var pass=pass.replace(/&/gi,'%26');
			var pass=pass.replace(/\+/gi,'%2B');
		}		
		//Username
		var nam=$("#SignuP #UsernamE").val();
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(nam);	
		if(result){	
			var nam=nam.replace(/&/gi,'%26');
			var nam=nam.replace(/\+/gi,'%2B');
		}		
		//Code 
		var code=$("#SignuP #VercodE").val();		
		var model = new RegExp(/&|\+/gi);	
		var result = model.test(code);	
		if(result){	
			var code=code.replace(/&/gi,'%26');
			var code=code.replace(/\+/gi,'%2B');
		}		 	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:ROOTDIR+"process/signupA.php?action=signup",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'EmaiL='+email+'&PassworD='+pass+'&UsernamE='+nam+'&VercodE='+code,
		  	//set return data type
		  	dataType:'text',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_create_signup(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function result_create_signup(result){
	//tip:Email has been exist!
	if(result=='infor:emailexist'){
	            $('#SignuP_tip1').show('fast');
	            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Email'+"</span>";
	            var tip=basic+" has been exist !";
	            $('#SignuP_tip1span1').html(tip);
	            CODE_signup();  			 	
	}
	if(result=='infor:eerror'){
		            $('#SignuP_tip1').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Email's Format Error"+"</span>";
		            $('#SignuP_tip1span1').html(tip); 										
	}
	if(result=='infor:perror'){
		            $('#SignuP_tip2').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Password's Format Error"+"</span>";
		            $('#SignuP_tip2span2').html(tip); 									
	}
	if(result=='infor:uerror'){
		            $('#SignuP_tip3').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Username's Format Error"+"</span>";
		            $('#SignuP_tip3span3').html(tip); 									
	}			
	//tip:Codeerror
	if(result=='infor:codeerror'){
	            $('#SignuP_tip4').show('fast');
	            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Code error!'+"</span>";
	            var tip=basic+" change";
		$('#SignuP_tip4span4').html(tip);	            
	            $("#SignuP #VercodE").val('');
	            $("#SignuP #VercodE").focus();										
	}			
	/*infor:signupsucceed*/		
	if(result=='infor:signupsucceed'){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	            var url=ROOTDIR+'project/home.php';
		location.href=url;			 	
	}		
}
		/*create the item create the item create the item create the item create the item*/
		/*post the data post the data post the data*/		
//post the data:function
function post_signup(){
		//Email
		var EmaiL=$("#SignuP #EmaiL").val();
		var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
		var result = model.test(EmaiL);
		
		//Password				
		var PassworD=$("#SignuP #PassworD").val();
		var model=new RegExp(/^\s{6,25}$/);
		var result1=model.test(PassworD);					
		
		//UsernamE
		var UsernamE=$("#SignuP #UsernamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result2=model.test(UsernamE);
				
		//VercodE
		var VercodE=$("#SignuP #VercodE").val();
		var model=new RegExp(/^\s{1,5}$/);
		var result3=model.test(VercodE);
					
		if((result==false) || (EmaiL.length<=5 || EmaiL.length>25)){
			//Tip:Email's Format Error
		            $('#SignuP_tip1').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Email's Format Error"+"</span>";
		            $('#SignuP_tip1span1').html(tip); 
		            return false;				
		}
		else if((result1==true) || (PassworD.length<=5 || PassworD.length>25)){
			//Tip:Password's Format Error
		            $('#SignuP_tip2').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Password's Format Error"+"</span>";
		            $('#SignuP_tip2span2').html(tip); 
		            return false;				
		}
		else if((result2==true) || (UsernamE.length<=0 || UsernamE.length>25)){
			//Tip:Username's Format Error
		            $('#SignuP_tip3').show('fast');
		            var tip="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"Username's Format Error"+"</span>";
		            $('#SignuP_tip3span3').html(tip); 
		            return false;				
		}		
		else if(result3==true || (VercodE.length<=0 || VercodE.length>5)){
		            $('#SignuP_tip4').slideDown('fast');
		            var basic="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'Code error!'+"</span>";
		            var tip=basic+" change";
		            $('#SignuP_tip4span4').html(tip);
			$("#SignuP #VercodE").val('');
		            $("#SignuP #VercodE").focus();
		            return false;				
		}		
		else{	
			user_signup();		
		}  				
}
//post the data::action
$(function(){
            //Event:mouse
            $("#SignuP #SubmiT").click(function(){
		post_signup();			
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






















