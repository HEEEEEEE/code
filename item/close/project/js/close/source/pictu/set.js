/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show set menu*/
//show set menu:Function
function showmenu_set(){
		//Show the set menu background	
		$('#SourcesMbacK').css('display','block');
		//Show the set menu
		$('#SourcesM').css('display','block');
			
		/*Get the dataGet the dataGet the dataGet the dataGet the data*/
		//Get the itemid				
		var itemid=$('.source-selected').attr("id");
		var itemid='#'+itemid;		
		 //ID
		var id=itemid.match(/\d{1,12}/);
		$("#SourcesM_sid #ID").val(id);
								
	             //NamE
		var itemname=itemid+' .source-name-show';
		var nam=$(itemname).text();
		$("#SourcesM_sname #NamE").val(nam); 
			            
	             //DeS	             
		var itemdes=itemid+' .source-des-hide';
		var itemdes=$(itemdes).val();
	            var des=document.getElementById('SourcesM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            des[0].value=itemdes;
	            //Focus the DeS
	            setTimeout("$('#SourcesM_sdes #DeS').focus();",500);				
}
//show set menu:action
$(function(){				
})



/*hide the set menu*/
//hide set menu:Function
function hidemenu_set(){
	//hide
	var src=$('#SourcesM_sfaceimg').attr('src');
	if(src==''){
		$('#SourcesM_tip1').css('top','145px');		
	}
	else{
		$('#SourcesM_tip1').css('top','190px');		
	}	
	//hide the set menu
	$('#SourcesM').css('display','none');
	$('#SourcesMbacK').css('display','none');
	//hide the tip
	$('#SourcesM_tip1').css('top','145px');
	$('#SourcesM_tip,#SourcesM_tip1').css('display','none');

	$('#CenteR').css('zIndex','5');
	$('#AlbuM_con').css('zIndex','5');
		
	//reset
	//reset the form
	var form=document.getElementById('SourcesM_form');	
	form.reset();				
}
//hide set menu:action
$(function(){
			             
})

/*When user input*/
//user input:Function
function input_set(){
//name            
            var nam=document.getElementById('SourcesM_sname');
            var nam=nam.getElementsByTagName('input');
            nam[0].oninput=function(){
            	var nam=$(this).val();
		            $('#SourcesM_tip').slideDown('fast');
		            var num=25-(nam.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#SourcesM_tipspan1').html(nametip);	            	
            }                   
          
//des
            var des=document.getElementById('SourcesM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
            	if(des.length<=250){
	 	            $('#SourcesM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#SourcesM_tipspan2').html(nametip);          		
            	}          	
	            else{
	 	            $('#SourcesM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var destip="you still can enter:"+num;
		            $('#SourcesM_tipspan2').html(destip);  	            	
	            }	
            }				
}
//user input::action
$(function(){
			             
})



/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function set_source(){
	/*Set the data:*/
	//id
	var id=$("#SourcesM_sid #ID").val();
	
	//name
	var nam=$("#SourcesM_sname #NamE").val();
	var model = new RegExp(/&|\+/gi);
	var result = model.test(nam);	
	if(result){	
		var nam=nam.replace(/&/gi,'%26');
		var nam=nam.replace(/\+/gi,'%2B');
	}		
		 	  	
	//des
            var des=document.getElementById('SourcesM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}
	//aid
	var aid=$('#HiddeN_projectcaid').val();
	//cid
	var cid=$('#HiddeN_projectcid').val();
	
//	alert(id+';'+nam+';'+';'+des+';'+aid+';'+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/source/pictu/setA.php?action=source_set",
		     	type:"POST",
		     	data:'id='+id+'&name='+nam+'&des='+des+'&aid='+aid+'&cid='+cid,
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
	var match=/^infor:setsucceed/i.test(result);		
	if(match==true){		
		//Get the itemid				
		var itemid=$('.source-selected').attr("id");
		var itemid='#'+itemid;		
								
	             //NamE
	            var nam=$("#SourcesM_sname #NamE").val();
		var itemname=itemid+' .source-name-show';
		$(itemname).text(nam); 
			            
	             //DeS	             
	            var des=document.getElementById('SourcesM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value;
		var itemdes=itemid+' .source-des-hide';
		var itemdes=$(itemdes).val(des);
			            				
		/*hidemenu*/
		hidemenu_set();			 	
	}
	//Repeattip:name
	if(result=='infor:repeatname'){		
	            $('#SourcesM_tip').slideDown('fast');
	            var nam="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
	            var nametip=nam+" has been exist !";
	            $('#SourcesM_tipspan1').html(nametip);   						
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_set(){
	            //basic:name
		var nam=$("#SourcesM_sname #NamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(nam);		
		 //basic:des
	            var des=document.getElementById('SourcesM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if((result==true)||(nam.length<=0)||(nam.length>25)){
		            $('#SourcesM_tip').slideDown('fast');
		            var nam0="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
		            var nam25="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
		            var nametip=nam0+"&lt;NamE&lt;="+nam25
		            $('#SourcesM_tipspan1').html(nametip);				
		}
		else if(des.length>250){
	 	            $('#SourcesM_tip1').slideDown('fast');
		            var des250="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+250+"</span>";
		            var destip="DescriptioN must &lt;="+des250;
		            $('#SourcesM_tipspan2').html(destip); 			
		}
		else{			
			 set_source();	
		}  	
}
//post the data:action
$(function(){
	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













