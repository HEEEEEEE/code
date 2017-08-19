/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;		
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*show the album create menu*/
$(function(){		
	$('#AlbumtooL #CreatE').click(function(){
	//
	$('#CenteR').css('zIndex','7');
	$('#AlbuM_con').css('zIndex','7');	
	//Show the close create menu background	
	$('#AlbumcMbacK').css('display','block');
	//Show the close create menu
	$('#AlbumcM').css('display','block');	
	//Focus the name
            setTimeout("$('#AlbumcM_cname #NamE').focus();",500);		
	});		
})





/*show the filebox show the filebox show the filebox*/
		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item_filebox(){
	  	  /*start start start start start*/											  	  
//		  xmlhttp=$.ajax({
//		  	//set the request url
//		  	url:PROJECTDIR+"filebox/picture/show_public.php?action=filebox_show",
//		  	//set the request way
//		  	type:'GET',
//		  	//set return data type
//		  	dataType:'html',		  
//		            //set function for success		            
//		  /*end end end end end*/
//		  success:function(){
//			  //return the data
//			  result=xmlhttp.responseText;
//			  //deal the data
//		  	  result_show_filebox(result);
//		  	  
//		  	  /*Select the item*/
//		  	  item_select_filebox();
////			  Fscroll();
//		  	  /*hide the filebox*/
//			  Selectdone();		  	    		
//		  	},
//		  });	
}
/*Function:show the ajaxresult*/
function result_show_filebox(result){
//	document.getElementById("AreA_source_filebox").innerHTML=result;	
}
		/*echo the item echo the item echo the item echo the item echo the item*/
/*echo the item:Action*/
$(function(){
//	$("#AlbumcM_cup #UP").click(function(){
//		$("#HiddeN_projectaddorset").val('0');
//		
//		var fileboxL=$("#AreA_source_filebox div").length;
//		if(fileboxL==0){
//			show_item_filebox();
//			$('#AreA_source_filebox').css('display','block');			
//		}
//		else{
//			$('#AreA_source_filebox').css('display','block');			
//		}					
//	});
//	$("#AlbumcM_cfacechange").click(function(){
//		$("#HiddeN_projectaddorset").val('0');
//		
//		$('#AreA_source_filebox').css('display','block');			
//	});			
})





/*hide the album create menu*/
//hide the album create menu:Function
function hidemenu_create(){	
	//hide
	//hide the close create menu
	$('#AlbumcM').css('display','none');
	$('#AlbumcMbacK').css('display','none');	
	//hide the tip
	$('#AlbumcM_tip,#AlbumcM_tip1').css('display','none');
	//hide the face
	$('#AlbumcM_cfaceadd').css('display','block');
	$('#AlbumcM_cface').css('display','none');
	
	$('#CenteR').css('zIndex','5');
	$('#AlbuM_con').css('zIndex','5');
			
	//reset
	//form
	var form=document.getElementById('AlbumcM_form');	
	form.reset();
	//faceid
	$('#HiddeN_projectfileboxitemid').val('');		
}
//hide the close create menu:action
$(function(){
	$('#AlbumcM_topclose').click(function(){
		hidemenu_create();
	});			             
})

/*When user input*/
//fitler the up fitler the up fitler the up
$(function(){
//name            
            var na=document.getElementById('AlbumcM_cname');
            var na=na.getElementsByTagName('input');
            na[0].oninput=function(){
	            $('#AlbumcM_tip').slideDown('fast');
	            var na=$("#AlbumcM_cname #NamE").val();
	            var num=25-(na.length);
	            var num="<span style='color:rgb(0,255,125);font-size:20px;font-style:normal;'>"+num+"</span>";
	            var nametip="you still can enter:"+num;
	            $('#AlbumcM_tipspan1').html(nametip);	            	
            }	             
})

/*when user post when user post when user post when user post when user post*/
		/*create the item create the item create the item create the item create the item*/
/*create the item:Function*/
function create_album(){
	  	  /*start start start start start*/	  	  
             	//NamE
		var nam=$("#AlbumcM_cname #NamE").val();
		var model = new RegExp(/&|\+/gi);
		var result = model.test(nam);	
		if(result){	
			var nam=nam.replace(/&/gi,'%26');
			var nam=nam.replace(/\+/gi,'%2B');
		}							  	  
//		 //TypE
//		type=1;
		 //CiD
		var cid=$("#HiddeN_projectcid").val();				 	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/albui/video/createA.php?action=album_create",
		  	//set the request way
		  	type:'POST',
		  	//set the data
		  	data:'name='+nam+'&cid='+cid,
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
		//show the album
		show_album('','');
		//show the item number
		var itemnum=$("#IteM_numshow").text();
		var itemnum=parseInt(itemnum,10)+1;
		 $("#IteM_numshow").text(itemnum);
		 $("#ItemsearcH_numitem").text(itemnum);
		 //Custom the scroll	
		conts_toptozer();		 
	            //hide the sleect set delete
		//Stop the delete
		$('#AlbumtooL #DeletE').css('display','none');		
		$('#AlbumtooL #DeletenO').css('display','block');
		//Stop the set
		$('#AlbumtooL #SeT').css('display','none');		
		$('#AlbumtooL #SetnO').css('display','block');	            
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text('');
					            
		//Hide the create menu			
		hidemenu_create();
	            //change the searcH_numitem
		$("#ItemsearcH_numshow").text(itemnum);
		
		$("#AlbuM_con_oaback").css('display','none');				 	
	}
	//Repeattip:name
	if(result=='infor:repeatname'){		
	            $('#AlbumcM_tip').slideDown('fast');
	            var nam="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+'NamE'+"</span>";
	            var nametip=nam+" has been exist !";
	            $('#AlbumcM_tipspan1').html(nametip);  						
	}	
}
		/*create the item create the item create the item create the item create the item*/
		/*post the data post the data post the data*/		
//post the data:function
function post_create(){
		var foldnam=$("#AlbumcM_cname #NamE").val();
		var model=new RegExp(/^\s{1,25}$/);
		var result=model.test(foldnam);			
		if((result==true)||(foldnam.length<=0)||(foldnam.length>25)){
		            $('#AlbumcM_tip').slideDown('fast');
		            var nam0="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"0"+"</span>";
		            var nam25="<span style='color:rgb(255,0,0);font-size:20px;font-style:normal;'>"+"25"+"</span>";
		            var nametip=nam0+"&lt;NamE&lt;="+nam25
		            $('#AlbumcM_tipspan1').html(nametip);				
		}
		else{	
			create_album();		
		}  	
}
//post the data::action
$(function(){
            //Event:mouse
            $("#AlbumcM_bom #SubmiT").click(function(){
		post_create();			
	});  
	//Event:key
	$("#AlbumcM_cname #NamE,#AlbumcM_cup #UP").keydown(function(event){  	 
		keyN=event.which;
		if(keyN==13){
			post_create();
			return false; 								
		}	    
	});	
})
/*when user post when user post when user post when user post when user post*/













