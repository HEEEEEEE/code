/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





/*show the close set menu*/
$(function(){		
	$('#AlbumtooL #SeT').click(function(){
		//
		$('#CenteR').css('zIndex','7');
		$('#AlbuM_con').css('zIndex','7');
		//Show the close set menu background	
		$('#AlbumsMbacK').css('display','block');
		//Show the close set menu
		$('#AlbumsM').css('display','block');
			
		/*Get the dataGet the dataGet the dataGet the dataGet the data*/
		//Get the itemid				
		var itemid=$('.album-p-selected').attr("id");
		var itemid='#'+itemid;		
		 //ID
		var id=itemid.match(/\d{1,12}/);
		$("#AlbumsM_sid #ID").val(id);
								
	             //NamE
		var itemname=itemid+' .album-p-name-show';
		var nam=$(itemname).text();
		$("#AlbumsM_sname #NamE").val(nam); 
		
		//FacE
		var face=$('.album-p-selected').attr('data-src');
		if(face!=ROOTDIR){		
			$("#AlbumsM_sfaceimg").attr('src',face);
			$('#AlbumsM_sface').css('display','block');
			$('#AlbumsM_sfaceadd').css('display','none');		
		} 
			            
	             //DeS
		var src=$('#AlbumsM_sfaceimg').attr('src');
		if(src==''){
			$('#AlbumsM_tip1').css('top','145px');		
		}
		else{
			$('#AlbumsM_tip1').css('top','190px');		
		}	             
		var itemdes=itemid+' .album-p-des-hide';
		var itemdes=$(itemdes).val();
	            var des=document.getElementById('AlbumsM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            des[0].value=itemdes;
	            //Focus the DeS
	            setTimeout("$('#AlbumsM_sdes #DeS').focus();",500);		
	});		
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
	$("#AlbumsM_sup #UP").click(function(){		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}					
	});
	$("#AlbumsM_sfacechange").click(function(){		
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
	var src=$('#AlbumsM_sfaceimg').attr('src');
	if(src==''){
		$('#AlbumsM_tip1').css('top','145px');		
	}
	else{
		$('#AlbumsM_tip1').css('top','190px');		
	}	
	//hide the close set menu
	$('#AlbumsM').css('display','none');
	$('#AlbumsMbacK').css('display','none');
	//hide the tip
	$('#AlbumsM_tip1').css('top','145px');
	$('#AlbumsM_tip,#AlbumsM_tip1').css('display','none');

	$('#CenteR').css('zIndex','5');
	$('#AlbuM_con').css('zIndex','5');
		
	//reset
	//reset the form
	var form=document.getElementById('AlbumsM_form');	
	form.reset();
	
	$("#AlbumsM_sfaceimg").attr('src','');
	$('#AlbumsM_sface').css('display','none');
	$('#AlbumsM_sfaceadd').css('display','block');	
		
	//reset the faceid
	$('#HiddeN_projectfileboxitemid').val('');				
}
//hide the close set menu:action
$(function(){
	$('#AlbumsM_topclose').click(function(){
		hidemenu_set();	
	});			             
})

/*When user input*/
$(function(){
//name            
            var nam=document.getElementById('AlbumsM_sname');
            var nam=nam.getElementsByTagName('input');
            nam[0].oninput=function(){
            	var nam=$(this).val();
		            $('#AlbumsM_tip').slideDown('fast');
		            var num=25-(nam.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#AlbumsM_tipspan1').html(nametip);	            	
            }  
                   
//face
$(function(){
	$('#AlbumsM_sfaceremove').click(function(){
		//set menu change		
		$("#AlbumsM_sfaceimg").attr('src','');
		$('#AlbumsM_sface').css('display','none');
		$('#AlbumsM_sfaceadd').css('display','block');
		$('#AlbumsM_tip1').css('top','145px');
		$('#HiddeN_projectfileboxitemid').val('');				
	});
}) 
          
//des
            var des=document.getElementById('AlbumsM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
            	if(des.length<=250){
	 	            $('#AlbumsM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var nametip="you still can enter:"+num;
		            $('#AlbumsM_tipspan2').html(nametip);          		
            	}          	
	            else{
	 	            $('#AlbumsM_tip1').slideDown('fast');
		            var num=250-(des.length);
		            var num="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+num+"</span>";
		            var destip="you still can enter:"+num;
		            $('#AlbumsM_tipspan2').html(destip);  	            	
	            }	
            }              	             
})



/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function set_album(face){
	/*Set the data:*/
	//id
	var id=$("#AlbumsM_sid #ID").val();
	
	//name
	var nam=$("#AlbumsM_sname #NamE").val();
	var model = new RegExp(/&|\+/gi);
	var result = model.test(nam);	
	if(result){	
		var nam=nam.replace(/&/gi,'%26');
		var nam=nam.replace(/\+/gi,'%2B');
	}		
	 //FacE
//	itemid=$('#HiddeN_projectfileboxitemid').val();	
//	if(itemid==''){
//		var face='';		
//	}
//	else{
//		var face=itemid.match(/\d{1,12}/);		
//	}
		 	  	
	//des
            var des=document.getElementById('AlbumsM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}
	
	//cid
	var cid=$('#HiddeN_projectcid').val();
//	alert(id+';'+nam+';'+face+';'+des+';'+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/albui/hlink/setA.php?action=album_set",
		     	type:"POST",
		     	data:'id='+id+'&name='+nam+'&face='+face+'&des='+des+'&cid='+cid,
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

		show_album('','');
	            //hide the sleect set delete
		//Stop the delete
		$('#AlbumtooL #DeletE').css('display','none');		
		$('#AlbumtooL #DeletenO').css('display','block');
		//Stop the set
		$('#AlbumtooL #SeT').css('display','none');		
		$('#AlbumtooL #SetnO').css('display','block');	            
//		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');		
//		/*hidemenu*/
		hidemenu_set();			 	
	}
	//Repeattip:name
	if(result=='infor:repeatname'){		
	            $('#AlbumsM_tip').slideDown('fast');
	            var nam="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
	            var nametip=nam+" has been exist !";
	            $('#AlbumsM_tipspan1').html(nametip);   						
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_set(){
	            //basic:name
		var nam=$("#AlbumsM_sname #NamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(nam);		
		 //basic:des
	            var des=document.getElementById('AlbumsM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if((result==true)||(nam.length<=0)||(nam.length>25)){
		            $('#AlbumsM_tip').slideDown('fast');
		            var nam0="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
		            var nam25="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
		            var nametip=nam0+"&lt;NamE&lt;="+nam25
		            $('#AlbumsM_tipspan1').html(nametip);				
		}
		else if(des.length>250){
	 	            $('#AlbumsM_tip1').slideDown('fast');
		            var des250="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+250+"</span>";
		            var destip="DescriptioN must &lt;="+des250;
		            $('#AlbumsM_tipspan2').html(destip); 			
		}
		else{
		//FacE
			 itemid=$('#HiddeN_projectfileboxitemid').val();	
			 if(itemid==''){
			 	var face='';		
			 }
			 else{
			 	var face=itemid.match(/\d{1,12}/);		
			 }			
			 set_album(face);	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse
            $("#AlbumsM_bom #SubmiT").click(function(){
		post_set();			
	});  
	//Event:key
	$("#AlbumsM_sname #NamE").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
			post_set();
			return false; 								
		}	    
	});	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













