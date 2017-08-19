/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*show the menu:Function*/
function WorkS_processmenushow_processing(){
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
		     		ResulT_worksprocessmenushow_processing(result);
				OperatE_worksprocessmenu_processing();									     			
		     	},
		     });
}
/*deal the result:function*/
function ResulT_worksprocessmenushow_processing(result){	
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
function OperatE_worksprocessmenu_processing(){	
	//processprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessprocessproc
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
		 FilE_selectprocess_processing(file);		 			 	  	
	});
	/*okokokokokokokokokokokokokokokokokokokokokokokokokokokokokoko*/
	$('#TimeconT_main2strdone').click(function(){
		$('#TimeconT_main').css({margin:'0',opacity:'0.5'});
			        $('#TimeconT_main2strcancel,#TimeconT_main2strdone').css({display:'none'});
		$('#TimeconT_form2,#TimedonE').css({display:'block'});				
	});		
													
	//timelinetimelinetimelinetimelinetimelinetimelinetimelinetimelinetimelinetimelinetimelinetimeline

	//timeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimeconttimecontt								
	/*
	 * mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmamainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmamainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmamainmainmainmainmainmainmainmainmainmainmainmainmainmainmainma
	 * */
	 
	/*
	 *conconconconconconconconconconconconconconconconconconconconcon
	 */	 
	$('#TimeconT_main1conimg').mouseover(function(){
		$('#TimeconT_main1conimg').css({opacity:'1'});	
		$('#TimeconT_form').css({opacity:'0.5',zIndex:'2499'});
	});
	$('#TimeconT_main1conimg').mouseout(function(){
		$('#TimeconT_main1conimg').css({opacity:'0.5'});	
		$('#TimeconT_form').css({opacity:'1',zIndex:'2501'});
	});																 
					
	/*mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain*/





	/*formformformformformformformformformformformformformformformformformformformformformformform*/
            //conconconconconconconconconconconconconconconconconconconconcon
	$('#TimeconT_form1condes').mouseover(function(){	
		$('#TimeconT_form1str').css('display','block');
	});
	$('#TimeconT_form1').mouseleave(function(){
		$('#TimeconT_form1str').css('display','none');
	});									            
            //conconconconconconconconconconconconconconconconconconconconcon
            
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
			var datadone='processing';							
			ProcesS_post_processing(iid,dataimage,datastr,datadone);
		}			
			 																		
	});
	$('#TimedonE_end span').click(function(){
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
			var datadone='end';							
			ProcesS_post_processing(iid,dataimage,datastr,datadone);
		}			
			 																		
	});	
	//cancel
	$('#TimedonE_cancel').click(function(){
						$('#TimeconT_main2,#TimeconT_form2,#TimedonE').css('display','none');				
					$('#TimeconT_main').css({margin:'0'});
		$('#TimeconT_main1,#TimeconT_form1,#TimeconT_main2strcancel,#TimeconT_main2strdone').css('display','block');
		
		$('#TimeconT_form2condes').text('');
		        $('#TimeconT_form2condes').addClass('timecont-form2condesholder');
				$('#TimeconT_form2condes').css('color','rgba(50,25,0,1)');
				
		$('#TimeconT_form2condes').on('click',function(){
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
	});								
}
//OperatE the menu:action
$(function(){

})



/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */
	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_selectprocess_processing(file){
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
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#TimeconT_main2strbro';			 
			 var framew=310;
			 var frameh=310;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 				$('#TimeconT_main1,#TimeconT_form1,#TimeconT_form2,#TimedonE').css('display','none');
						$('#TimeconT_main').css({margin:'0 auto'});
				$('#TimeconT_main2,#TimeconT_main2strcancel,#TimeconT_main2strdone').css('display','block');
				
			 	//user select the file:cancel
			 	//style
				$('#TimeconT_main2strcancel').click(function(){	
									$('#TimeconT_main2,#TimeconT_form2,#TimedonE').css('display','none');			
								$('#TimeconT_main').css({margin:'0'});
					$('#TimeconT_main1,#TimeconT_form1').css('display','block');						
				});
				
		     }
}				 	 	 	

/*When user selectWhen user selectWhen user selectWhen user select*/

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function ProcesS_post_processing(iid,dataimage,datastr,datadone){
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
			  xmlhttp.open("POST",ROOTDIR+'php/works/works/process/'+datadone+'.php?action=works_process'+'&iid='+iid+'&des='+datastr);
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_processpost_processing,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_processpost_processing(e){	
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









