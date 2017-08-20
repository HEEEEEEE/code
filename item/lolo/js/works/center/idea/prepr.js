/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//function ShoW_preajax(){
//        OperatE_ideapremenu();		
//}





//prelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelan
/*prelan the idea:Function*/
function IdeA_prelanpost(){
	/*Set the data:*/
	/*
	 * 
	 */
	 var data=$('#PrelanboX').text(); 
	 //lans
	 var lans=FilteR_ajaxspecialstr(data);
	 //ideaid	 
	 var ideaid=$('#HiddeN_ideaid').val();  
	 
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'php/public/idea/prepr/lan.php?action=idea_prelan',
	     	type:'POST',
	     	data:'id='+ideaid+'&des='+lans,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideaprelanpost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_ideaprelanpost(result){
	if(result=='idea_prelansuccess'){						
		var lans=$('#PrelanboX').text();
		if(lans !=''){
			/*preconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustom*/
			//hide add
			$('#DisassemblE2_lanspreadd').css('display','none');
			//show con			
			var prelans=$('#PrelanboX').text();		
			$('#DisassemblE2_lanspre').text(prelans);
			$('#DisassemblE2_lansp1').css('display','block');
						
			//hide the menu
			$('#MenU_ideaprelan').css('display','none');						
							
			/*preconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustom*/				
		}else{
			//hide con
			$('#DisassemblE2_lansp1').css('display','none');
			//show add			
			$('#DisassemblE2_lanspreadd').css('display','block');
									
			//hide the menu
			$('#MenU_ideaprelan').css('display','none');
				
			/*preconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustom*/																
		}
									
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);																		
	}else{
		$('#UnknowerroR').css('display','block');
	}
}

/*hide the menu:function*/
function IdeA_prelanhide(){	
	$('#MenU_ideaprelan').css('display','none');
			
		 $('#PrelaN_enteralbenum').text('125');				
	                    $('#PrelanboX').text('');
	      $('#PrelanboX').addClass('prelanholder');
	$('#PrelanboX').css({color:'rgba(255,255,255,1)'});
											
	$('#PrelanboX').on('click',function(){
		var tex=$('#PrelanboX').text();		
		//box style set by num
		if(tex==''){
			$('#PrelanboX').addClass('prelanholder');
				$('#PrelanboX').css('color','rgba(255,255,255,0.5)');				
		}
		else{						
			$('#PrelanboX').removeClass('prelanholder');
				$('#PrelanboX').css('color','rgba(255,255,255,1)');				
		}
	});	
}
//prelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelanprelan

/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
function OperatE_ideapremenuenter(){
	//basic
	var tex=$('#PrelanboX').text();
	
	//box style set by num
	if(tex==''){
		$('#PrelanboX').addClass('prelanholder');
			$('#PrelanboX').css('color','rgba(255,255,255,0.5)');				
	}
	else{						
		$('#PrelanboX').off('click');
			$('#PrelanboX').removeClass('prelanholder');
				$('#PrelanboX').css('color','rgba(255,255,255,1)');				
	}
	
	//box enter str by num 
	var texl=tex.length;
	var texl=125 - texl;
	$('#PrelaN_enteralbenum').text(texl);			
	if(texl < 0){
		$('#PrelaN_enteralbenum').css('color','rgba(255,0,0,1)');
	}
	else if(texl >= 0){
		$('#PrelaN_enteralbenum').css('color','rgba(0,125,0,1)');						
	}	
}
//OperatE the menu:function
function OperatE_ideapremenu(){	
	/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan*/	     		
            //click
	$('#PrelanboX').click(function(){
		var tex=$('#PrelanboX').text();		
		//box style set by num
		if(tex==''){
			$('#PrelanboX').addClass('prelanholder');
				$('#PrelanboX').css('color','rgba(255,255,255,0.5)');				
		}
		else{						
			$('#PrelanboX').removeClass('prelanholder');
				$('#PrelanboX').css('color','rgba(255,255,255,1)');				
		}										
	});
	
	//input
	Filter_PasteWords();
	
	//post
	$('#PrelaN_donecon').click(function(){
		var tex=$('#PrelanboX').text();
		var texl=tex.length;
		if(texl<=125){
			var blank=/^\s{1,125}$/.test(tex);
			if(blank==true){				
				$('#PrelanboX').text('');				
				IdeA_prelanpost();							
			}else{			
				IdeA_prelanpost();					
			}					
		}			

	});

	/*hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide*/
	$('#MenU_ideaprelanback,#PrelaN_cancelcon').mouseup(function(){
		IdeA_prelanhide();																					
	});


		
	/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimageimage*/
            //mouse
	$('#PrE_imageuploadconcon').mouseover(function(){
		$('#PrE_imageuploadfra').css({width:'65px',opacity:'1',fontSize:'16px'});
	});
	$('#PrE_imageuploadconcon').mouseout(function(){
		$('#PrE_imageuploadfra').css({width:'50px',opacity:'0.75',fontSize:'15px'});
	});
	//click
	$('#PrE_imageuploadconcon').click(function(){
	});
	//select
	//user select the file	
	$('#PrE_imageuploadconcon').change(function(){
		 $('#PrE_imageuploadchangeconcon').val('');		 
		 var file=document.getElementById('PrE_imageuploadconcon').files[0];
		 FilE_selectpre(file); 			
	});
	
	//post
	$('#PrE_imageuploadbrowserdonecon').click(function(){
		var data=new FormData(document.getElementById('PrE_imageform'));		
		UploaD_datatoserverpre(data);			
		
	});
		
	/*hidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehidehide*/
	$('#MenU_ideapreimageback,#PrE_imageuploadcancel').click(function(){
		IdeA_preimagehide();																					
	});			
}
//OperatE the menu:action
$(function(){
        OperatE_ideapremenu();
})




//preimagepreimagepreimagepreimagepreimagepreimagepreimagepreimagepreimagepreimagepreimage
/*hide the menu:function*/
function IdeA_preimagehide(){
		            $('#MenU_ideapreimage').css('display','none');	
	          $('#PrE_imageuploadbrowser').css('display','none');
	 $('#PrE_imageupload').css('display','block');
	 
	 $('#PrE_imageuploadconcon').val('');
	 	  $('#PrE_imageuploadbrowsershowconcon').removeAttr('src');				
}
	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectpre(file){
	//fitlerfitlerfitlerfitlerfitler
	/*	type:image
	 *    format:.png 
	 *size:<=2.5MB 
	 *    name:<=250 
	 *          hw: 
	 */
	 ///////////////////////////////	
	 //type
	 var type=file.type;//格式：例image/png image/gif
	 var rtype=/^(image\/png|image\/png|image\/png)$/i;
	 var result=rtype.test(type);
	 if(result==false){
		$('#UploaD_tip').css('display','block');	 					 	
	 	return false;	 	
	 }
	 var size=file.size;//单位：B
	 if((2.5*1024*1024)<size){
		$('#UploaD_tip').css('display','block');	 		
	 	return false;		 	
	 }
		//browserbrowserbrowserbrowser
		/*image:url
		 *name
		 *hw 
		 */
		 //custom the upload file as ReadFile
		 var oReader = new FileReader();
		 //turn 'file':var file=document.getElementById('InpuT').files[0];to a dataurl
		 oReader.readAsDataURL(file);				 
		     //when it onload
		     oReader.onload = function(e){		     				     	    
			 $('#PrE_imageupload').css({display:'none'});
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#PrE_imageuploadbrowsershowconcon';			 
			 var framew=360;
			 var frameh=360;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 $('#PrE_imageuploadbrowser').css('display','block');
		     }
}

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function UploaD_datatoserverpre(data){
	/*data
	 * 
	 */
	 var ideaid=$('#HiddeN_ideaid').val(); 
	 var ideaid=parseInt(ideaid); 	 
	 var data=data;
	 //ajax
		/*AJAX*/
		     /*Start:create a AJAX object*/
	 
	                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
	                 $('#LoadiN_tipstr').html(tip);	 	     
		     $('#LoadiN_tip').css({display:'block'});		     
			var xmlhttp;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			}
			else{// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		    /*Url the data:*/
			  xmlhttp.open("POST",ROOTDIR+'php/public/idea/prepr/image.php?action=idea_preimage&id='+ideaid);
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_uploaddatatoserverloadpre,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_uploaddatatoserverloadpre(e){	
//whenserveruploadsuccess
	var result=e.target.responseText;
	if(result=='idea_preimagesuccess'){	
		//hide add
		$('#DisassemblE2_imagepreadd').css('display','none');
		
		//show con			
		 var imgurl=$('#PrE_imageuploadbrowsershowconcon').attr('src');
		 var imgid='#DisassemblE2_imageprebrowser';			 
		 var framew=160;
		 var frameh=160;
		 PicturE_auto(imgurl,imgid,framew,frameh);
		 $('#DisassemblE2_imageprebrowser').css('display','block');
		
		//hide the menu
		IdeA_preimagehide();			
		/*preconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustompreconcustom*/
							
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	setTimeout("$('#LoadiN_tip').css('display','none'); $('#LoadiN_tipstr').html('');",1250);		
	}else{
		$('#UnknowerroR').css('display','block');		
	}		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/






