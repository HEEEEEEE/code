/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*show the menu:Function*/
function WorkS_processmenushow_process(){
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
		     	url:ROOTDIR+'html/works/works/process/process.php?action=works_processmenushow',
		     	type:'GET',
		     	datatype:'html',
		     	success:function(){
		     		var result=xmlhttp.responseText;
		     		ResulT_worksprocessmenushow_process(result);
				OperatE_worksprocessmenu_process();								     			
		     	},
		     });
}
/*deal the result:function*/
function ResulT_worksprocessmenushow_process(result){	
	$('#CenteR_contentprocess').html(result);	
	$('#CenteR_contentprocess').css({display:'block'});
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});					
}

/*show the menu:action*/
$(function(){
	
})	

/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_worksprocessmenu_process(){	
	/*PROCESSPROCESSPROCESSPROCESSPROCESSPROCESSPROCESSPROC
	 * 
	 */
		//timeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimecontt								
		/*
		 * 
		 * mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain*/					
																			
		// add add add add add add add add add add add add add add add add
		$('#InpuT_upload1').mouseover(function(){	
			$('#TimeconT_main2conimg').css('display','none');
			$('#TimeconT_main2congmi').css('display','block');
		});
		$('#InpuT_upload1').mouseout(function(){
			$('#TimeconT_main2conimg').css('display','block');
			$('#TimeconT_main2congmi').css('display','none');						
		});
		/*selectselectselectselectselectselectselectselectselectselect*/
		//user select the file
		$('#InpuT_upload1').change(function(){
			$('#TimeconT_main').off('mouseout');
			//fitlerfitlerfitlerfitlerfitler
			           /*      type:image
		 	*    format:.png 
		 *size:<=2.5MB 
		 	*    name:<=250 
		                    *          hw: 
		 		*/
			 $('#InpuT_uploadchange1').val('');		 
			 var file=document.getElementById('InpuT_upload1').files[0];
			 FilE_selectprocess_process(file);		 			 	  	
		});
		/*then:descriptionthen:descriptionthen:descriptionthen:description*/
		$('#TimeconT_main2strdone').click(function(){
						$('#TimeconT_main').css({margin:'0',opacity:'0.5'});
				      $('#TimeconT_main2strcancel,#TimeconT_main2strdone').css({display:'none'});
			$('#TimeconT_form2,#TimedonE').css({display:'block'});					
		});
		// add add add add add add add add add add add add add add add add					
		/*
		 * 
		 * mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain*/





		/*formformformformformformformformformformformformformformformformformformformformformformform*/
	            
	            // add add add add add add add add add add add add add add add add
	            //click
		$('#TimeconT_form2condes').click(function(){
			//enterable
			$('#TimeconT_form2ent').css('display','block');	

			//box		
			var tex=$('#TimeconT_form2condes').text();		
			//box style set by num
			if(tex==''){
				$('#TimeconT_form2condes').addClass('timecont-form2condesholder');
					$('#TimeconT_form2condes').css('color','rgba(50,25,0,0.5)');				
			}
			else{						
				$('#TimeconT_form2condes').removeClass('timecont-form2condesholder');
					$('#TimeconT_form2condes').css('color','rgba(50,25,0,1)');				
			}																
		});
		
		//input
		Filter_PasteWords();
		
		// add add add add add add add add add add add add add add add add																				
		/*formformformformformformformformformformformformformformformformformformformformformformform*/
		
		
		
		/*
		 * 
		 * DONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONEDONE*/																															   				
		$('#TimedonE_con').click(function(){
			var lans=$('#TimeconT_form2condes').text();
                                    var lansl=lans.length;
                                    var blank=/^\s{1,125}$/.test(lans);
			if( lansl<=0 || lansl>125 || blank==true ){
				if(blank==true){
					$('#TimeconT_form2condes').text('');
					$('#TimeconT_form2condes').focus();	
				}
			            var tip="<span style='color:rgb(255,0,0);'>"+" 0&lt;故事&lt125"+"</span>";
			            $('#TimeerroR').html(tip);
			            $('#TimeerroR').css({display:'block'});							
				return false;					
			}else{
				var iid=$('#HiddeN_processiid').val();									
				var dataimage=new FormData(document.getElementById('FroM_upload1'));
				var datastr=$('#TimeconT_form2condes').text();							
				ProcesS_post_process(iid,dataimage,datastr);
			}			
				 																		
		});
		//cancel
		$('#TimedonE_cancel').click(function(){
			$('#TimeconT_main').css({margin:'0 auto',opacity:'1'});
				$('#TimeconT_main2strcancel,#TimeconT_main2strdone,#TimeconT_main2con,#TimeconT_main2tips').css('display','block');
				      $('#TimeerroR,#TimeconT_form2,#TimeconT_main2str,#TimedonE').css('display','none');									
			$('#TimeconT_form2condes').text('');	 																		
		});	 
	/*PROCESSSINGPROCESSSINGPROCESSSINGPROCESSSINGPROCESSSI
	 * 
	 */				
}
//OperatE the menu:action
$(function(){

})



/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */
	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectprocess_process(file){
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
			 $('#TimeconT_main2con,#TimeconT_main2tips').css('display','none');
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#TimeconT_main2strbro';			 
			 var framew=310;
			 var frameh=310;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 $('#TimeconT_main2str').css('display','block');
			 	//user select the file:cancel
			 	//style
				$('#TimeconT_main2strcancel').click(function(){
					$('#TimeconT_main2str').css('display','none');
					$('#TimeconT_main2con,#TimeconT_main2tips').css('display','block');
					
					$('#TimeconT_main').on('mouseout',function(){
						$('#TimeconT_form').css({opacity:'1',zIndex:'2501'});
					});	
				});
				
		     }
}				 	 	 	

/*When user selectWhen user selectWhen user selectWhen user select*/

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function ProcesS_post_process(iid,dataimage,datastr){
	/*data
	 * 
	 */
	var iid=iid;
	var datastr=FilteR_ajaxspecialstr(datastr);
	var data=dataimage;
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
			  xmlhttp.open("POST",ROOTDIR+'php/works/works/process/process.php?action=works_process'+'&iid='+iid+'&des='+datastr);
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_processpost_process,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_processpost_process(e){	
//whenserveruploadsuccess
	var result=e.target.responseText;
	if(result=='works_processsuccess'){
	            var tip="<span style='color:rgb(0,225,0);'>"+"process successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);
	            		
		var hid=$('#HiddeN_processhid').val();
		var iid=$('#HiddeN_processiid').val();
		window.location.href=ROOTDIR+'mE.php?hid='+hid+'&mine=close&ideaid='+iid;		
	}else{
		$('#UnknowerroR').css('display','block');		
	}		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/



/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */









