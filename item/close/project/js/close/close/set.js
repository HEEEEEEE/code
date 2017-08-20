/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the close set menu*/
$(function(){		
	$('#ClosesettingS_img').click(function(){
	//Show the close set menu background	
	$('#ClosesMbacK').css('display','block');
	//Show the close set menu
	$('#ClosesM').css('display','block');
		
	/*Get the dataGet the dataGet the dataGet the dataGet the data*/
	//Get the itemid from hiddeN
	var itemid=$('#HiddeN_projectitemid').val();
	 //ID
	var id=itemid.match(/\d{1,12}/);
	$("#ClosesM_sid #ID").val(id);
							
             //NamE
	var itemname=itemid+' .closename';
	var nam=$(itemname).text();
	$("#ClosesM_sname #NamE").val(nam); 
	
	//FacE
	var itemface=itemid+' .closeface';
	var face=$(itemface).attr('src');
	$("#ClosesM_sfaceimg").attr('src',face); 
		            
             //DeS
	var itemdes=itemid+' .closedes';
	var itemdes=$(itemdes).val();
            var des=document.getElementById('ClosesM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            des[0].value=itemdes;
            //Focus the DeS
            setTimeout("$('#ClosesM_sdes #DeS').focus();",500);		
	});		
})

/*show the filebox show the filebox show the filebox*/
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
	$("#ClosesM_sfacechange").click(function(){
		$("#HiddeN_projectaddorset").val('1');
		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}			
	});			
})

/*hide the close set menu*/
//hide the close set menu:Function
function hidemenu_set(){
	//hide
	//hide the close set menu
	$('#ClosesM').css('display','none');
	$('#ClosesMbacK').css('display','none');
	//hide the tip
	$('#ClosesM_tip,#ClosesM_tip1').css('display','none');
		
	//reset
	//reset the form
	var form=document.getElementById('ClosesM_form');	
	form.reset();	
	//reset the faceid
	$('#HiddeN_projectfileboxitemid').val('');				
}
//hide the close set menu:action
$(function(){
	$('#ClosesM_topclose').click(function(){
		hidemenu_set();
	});			             
})

/*When user input*/
$(function(){
//name            
            var nam=document.getElementById('ClosesM_sname');
            var nam=nam.getElementsByTagName('input');
            nam[0].oninput=function(){
            	var nam=$(this).val();
//            	result1=/^\s{1,25}$/.test(nam);
//            	if((result1!=true)&&(nam!='')){
		            $('#ClosesM_tip').slideDown('fast');
		            var num=25-(nam.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#ClosesM_tipspan1').html(nametip);            		
//            	}
//            	else{
//		            $('#ClosesM_tip').slideDown('fast');
//		            var nam="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
//		            var nametip=nam+"will not change!";
//		            $('#ClosesM_tipspan1').html(nametip);             		
//            	}	            	
            }         
            
//des
            var des=document.getElementById('ClosesM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
            	if(des.length<=250){
	 	            $('#ClosesM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#ClosesM_tipspan2').html(nametip);          		
            	}          	
	            else{
	 	            $('#ClosesM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var destip="you still can enter:"+num;
		            $('#ClosesM_tipspan2').html(destip);  	            	
	            }	
            }              	             
})

/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function set_close(){
	/*Set the data:*/
	//id
	var id=$("#ClosesM_sid #ID").val();
	//name
	var nam=$("#ClosesM_sname #NamE").val();
	var model = new RegExp(/&|\+/gi);
	var result = model.test(nam);	
	if(result){	
		var nam=nam.replace(/&/gi,'%26');
		var nam=nam.replace(/\+/gi,'%2B');
	}	
	 //FacE
	itemid=$('#HiddeN_projectfileboxitemid').val();	
	if(itemid==''){
		face='';		
	}
	else{
		var face=itemid.match(/\d{1,12}/);		
	}	 	  	
	//des
            var des=document.getElementById('ClosesM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/close/setA.php?action=close_set",
		     	type:"POST",
		     	data:'id='+id+'&name='+nam+'&face='+face+'&des='+des,
		     	datatype:'text',
		     	success:function(){
				result=xmlhttp.responseText;
				result_set(result);	     		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_set(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savesucceed/i.test(result);		
	if(match==true){		
		//ID
		var itemid=$('#HiddeN_projectitemid').val();
		
		//name
		var nam=$("#ClosesM_sname #NamE").val();		
	             //NamE
		var itemname=itemid+' .closename';		
		$(itemname).text(nam);
		 //NamE's title
		$(itemname).attr('title',nam);
		
		//face
		face=$('#ClosesM_sfaceimg').attr('src');
	             //FacE
		var itemface=itemid+' .closeface';				
		$(itemface).attr('src',face);
		
		//des
	            var des=document.getElementById('ClosesM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value;		            
	             //DeS
		var itemdes=itemid+' .closedes';		
		$(itemdes).val(des);
		
		/*hidemenu*/
		hidemenu_set();			 	
	}
	//Repeattip:name
	if(result=='infor:repeatname'){		
	            $('#ClosesM_tip').slideDown('fast');
	            var nam="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
	            var nametip=nam+" has been exist !";
	            $('#ClosesM_tipspan1').html(nametip);   						
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_set(){
	            //basic:name
		var nam=$("#ClosesM_sname #NamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(nam);		
		 //basic:des
	            var des=document.getElementById('ClosesM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if((result==true)||(nam.length<=0)||(nam.length>25)){
		            $('#ClosesM_tip').slideDown('fast');
		            var nam0="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
		            var nam25="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
		            var nametip=nam0+"&lt;NamE&lt;="+nam25
		            $('#ClosesM_tipspan1').html(nametip);				
		}
		else if(des.length>250){
	 	            $('#ClosesM_tip1').slideDown('fast');
		            var des250="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+250+"</span>";
		            var destip="DescriptioN must &lt;="+des250;
		            $('#ClosesM_tipspan2').html(destip); 			
		}
		else{
			set_close();	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse
            $("#ClosesM_bom #SubmiT").click(function(){
		post_set();			
	});  
	//Event:key
	$("#ClosesM_sname #NamE").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
			post_set();
			return false; 								
		}	    
	});	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













