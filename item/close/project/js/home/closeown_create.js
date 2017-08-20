/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;		
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

			//change the idea result tips:function
function CreatE_idearesulttipsslide(){
	var t=new Array();
	t[1]='Project Work Explore...';
		t[2]='Item Explore Project...';
			t[3]='Plan Work Explore...';
		t[4]='Work Plan Discovery...';
	t[5]='Voyage Work Explore...';	
	var r=Math.ceil((Math.random())*(t.length));	
	$('#CreateguidE_lan2').text(t[r]);
	$('#CreateguidE_lan2').slideDown();
}
		function CreatE_idearesulttips(){
			$('#CreateguidE_lan2').slideUp(1000);
			setTimeout('CreatE_idearesulttipsslide()',1000);		
		}																						
$(function(){
	/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	/*change the idea result tips
	 *action
	 **************************** 
	 */
	setInterval('CreatE_idearesulttips()',5000);
})

/*show the close create menu*/
$(function(){		
	$('#CloseadD_img').click(function(){
		//Show the close create menu background	
		$('#ClosecMbacK').css('display','block');
		//Show the close create menu
		$('#ClosecM').css('display','block');	
		//Focus the name
	            setTimeout("$('#ClosecM_cname #NamE').focus();",500);		
	});
//	$('html').keydown(function(event){
//		keyN=event.which;
//		if(keyN==67){
//			//Show the close create menu background	
//			$('#ClosecMbacK').css('display','block');
//			//Show the close create menu
//			$('#ClosecM').css('display','block');	
//			//Focus the name
//		            setTimeout("$('#ClosecM_cname #NamE').focus();",500);			
//		}
//	});		
})





/*show the filebox show the filebox show the filebox*/
		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item_filebox(){
	  	  /*start start start start start*/											  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"filebox/picture/show_public.php?action=filebox_show",
		  	//set the request way
		  	type:'GET',
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_show_filebox(result);
		  	  
		  	  /*Select the item*/
		  	  item_select_filebox();
//			  Fscroll();
		  	  /*hide the filebox*/
			  Selectdone();		  	    		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_show_filebox(result){
	document.getElementById("AreA_source_filebox").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	$("#ClosecM_cup #UP").click(function(){
		$("#HiddeN_projectaddorset").val('0');
		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}					
	});
	$("#ClosecM_cfacechange").click(function(){
		$("#HiddeN_projectaddorset").val('0');
		
		$('#AreA_source_filebox').css('display','block');			
	});			
})





/*hide the close create menu*/
//hide the close create menu:Function
function hidemenu_create(){	
	//hide
	//hide the close create menu
	$('#ClosecM').css('display','none');
	$('#ClosecMbacK').css('display','none');	
	//hide the tip
	$('#ClosecM_tip,#ClosecM_tip1').css('display','none');
	//hide the face
	$('#ClosecM_cfaceadd').css('display','block');
	$('#ClosecM_cface').css('display','none');
		
	//reset
	//form
	var form=document.getElementById('ClosecM_form');	
	form.reset();
	//faceid
	$('#HiddeN_projectfileboxitemid').val('');		
}
//hide the close create menu:action
$(function(){
	$('#ClosecM_topclose').click(function(){
		hidemenu_create();
	});			             
})

/*When user input*/
//fitler the up fitler the up fitler the up
$(function(){
//name            
            var na=document.getElementById('ClosecM_cname');
            var na=na.getElementsByTagName('input');
            na[0].oninput=function(){
	            $('#ClosecM_tip').slideDown('fast');
	            var na=$("#ClosecM_cname #NamE").val();
	            var num=25-(na.length);
	            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
	            var nametip="you still can enter:"+num;
	            $('#ClosecM_tipspan1').html(nametip);	            	
            }	             
})

/*when user post when user post when user post when user post when user post*/
		/*create the item create the item create the item create the item create the item*/
/*create the item:Function*/
function create_close(){
	  	  /*start start start start start*/	  	  
             	//NamE
		var nam=$("#ClosecM_cname #NamE").val();
		var model = new RegExp(/&|\+/gi);
		var result = model.test(nam);	
		if(result){	
			var nam=nam.replace(/&/gi,'%26');
			var nam=nam.replace(/\+/gi,'%2B');
		}							  	  
		 //FacE
		itemid=$('#HiddeN_projectfileboxitemid').val();		 
		var face=itemid.match(/\d{1,12}/);	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"home/closeown/closeown_createA.php?action=close_create",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'name='+nam+'&face='+face,
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_create(result);		  	    		
		  	},
		  });		
}
/*Function:create the ajaxresult*/
function result_create(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savesucceed/i.test(result);		
	if(match==true){			
	/*EndEndEndEndEndEndEndEndEndEndEndEndEndEnd*/
	//show the close
	//NamE
	var nam=$("#ClosecM_cname #NamE").val();	
	show_closecreate('','',nam);
	//change the item number
	var itemnum=$("#CloseitemsearcH_numitem").text();
	var itemnum=parseInt(itemnum,10)+1;
	 $("#CloseitemsearcH_numitem").text(itemnum);
	 //Custom the scroll	
//	conts_toptozer();
	/*No any item:Action*/	
//	Noanyclose();
	//Hide the create menu			
	hidemenu_create();
            //Hide the bottom
	$("#CloseprocoutsidE_bottom").css('display','none');				 	
	}
	//Repeattip:name
	if(result=='infor:repeatname'){		
	            $('#ClosecM_tip').slideDown('fast');
	            var nam="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
	            var nametip=nam+" has been exist !";
	            $('#ClosecM_tipspan1').html(nametip);  						
	}	
}
		/*create the item create the item create the item create the item create the item*/
		/*post the data post the data post the data*/		
//post the data:function
function post_create(){
		var closen=$("#ClosecM_cname #NamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(closen);
		
		var sourcename=$('#HiddeN_projectfileboxitemid').val();			
		if((result==true)||(closen.length<=0)||(closen.length>25)){
		            $('#ClosecM_tip').slideDown('fast');
		            var nam0="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
		            var nam25="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
		            var nametip=nam0+"&lt;NamE&lt;="+nam25
		            $('#ClosecM_tipspan1').html(nametip);				
		}
		else if(sourcename==''){
			$('#ClosecM_tip1').slideDown('fast');
		            var sourc1="add a ";
		            var sourc2="<span style='color:rgb(255,0,0);font-size:16px;font-style:normal;'>"+"Face"+"</span>";
		            var sourc3=" to close";
		            var sourcetip=sourc1+sourc2+sourc3;
		            $('#ClosecM_tipspan2').html(sourcetip);
		            $('#ClosecM_cfaceadd').css('display','block');
		            $('#ClosecM_cface').css('display','none');				
		}
		else{	
			create_close()		
		}  	
}
//post the data::action
$(function(){
            //Event:mouse
            $("#ClosecM_bom #SubmiT").click(function(){
		post_create();			
	});  
	//Event:key
//	$("#ClosecM_cname #NamE,#ClosecM_cup #UP").keydown(function(event){  	 
//		keyN=event.which;
//		if(keyN==13){
//			post_create();
//			return false; 								
//		}	    
//	});	
})
/*when user post when user post when user post when user post when user post*/













