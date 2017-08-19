/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;		
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
/*auto picture's size*/
function PicturE_auto(imgurl,imgid,framew,frameh){		
		/*picture:width,heightpicture:width,heightpicture:width,height*/
		//custom the img's object
		var img=new Image();
		//set the object img's src
		img.src=imgurl;
		
		//img onload then get it width,height
		img.onload=function(){
			imgsw=img.width;
			imgsh=img.height;
			    if(framew>=imgsw && frameh>=imgsh){
				var imgnw=imgsw;
				var imgnh=imgsh;
			    }
			    else if(framew>=imgsw && frameh<imgsh){
					var imgnh=frameh;
					var rate=imgsh/imgnh;
					var imgnw=imgsw/rate;
			    }
			    else if(framew<imgsw && frameh>=imgsh){
					var imgnw=framew;
					var rate=imgsw/imgnw;
					var imgnh=imgsh/rate;
			    }
			    else if(framew<imgsw && frameh<imgsh){
			    	if(imgsw>imgsh){
					var rate=imgsw/framew;
					var imgnh=imgsh/rate;
					var imgnw=framew;					
					if(imgnh>frameh){
						var rate=imgnh/frameh;
						var imgnw=imgnw/rate;
						var imgnh=frameh;
						
					}			    		
			    	}
			    	else{
					var rate=imgsh/frameh;
					var imgnw=imgsw/rate;
					var imgnh=frameh;
					if(imgnw>framew){
						var rate=imgnw/framew;
						var imgnh=imgnh/rate;
						var imgnw=framew;						
					}			    		
			    	}		
			    }
			$(imgid).css('width',imgnw+'px');
			$(imgid).css('height',imgnh+'px');
			var positionR=(frameh-imgnh)/2;
			$(imgid).css('top',positionR+'px');    						
		}		
		$(imgid).attr('src',imgurl);	
}


/*show the close create menu*/
$(function(){		
	$('#FileboX_upload').click(function(){
	//Show the close create menu background	
	$('#ClosecMbacK').css('display','block');
	//Show the close create menu
	$('#ClosecM').css('display','block');	
	});		
})

/*hide the close create menu*/
//hide the close create menu:Function
function hidemenu_create(){
	//hide the close create menu
	$('#ClosecM').css('display','none');
	$('#ClosecMbacK').css('display','none');
	//reset the form
	var form=document.getElementById('ClosecM_form');	
	form.reset();
	//hide the tip
	$('#ClosecM_tip,#ClosecM_tip1,#ClosecM_cupname').css('display','none');
	 	$('#ClosecM_cupname').css({height:'25px'});
	 	$('#ClosecM_bom').css({marginTop:'0'});				
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
	/*selectselectselectselectselectselectselectselectselectselect*/
	//user select the file
	$('#ClosecM_cup #UP').change(function(){
		//fitlerfitlerfitlerfitlerfitler
		/*	type:image
		 *    format:.png 
		 *size:<=2.5MB 
		 *    name:<=250 
		 *          hw: 
		 */
		 $('#UploaD_imagechange').val('');		 
		 var file=this.files[0];
		 FilE_select(file);		 			 	  	
	});
	/*postpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpost*/
	$('#ClosecM_bom #SubmiT').click(function(){
			var data=new FormData(document.getElementById('ClosecM_form'));
			UploaD_datatoserver(data);					
	});
			
	//Click the 'CANCEL' cancel the 'UP'
	$("#ClosecM_cupcancel").click(function(){
		//clear the select
		$('#ClosecM_cup #UP').val('');
	 	$('#ClosecM_cupname').css({height:'25px'});
	 	$('#ClosecM_bom').css({marginTop:'0'});		
		//hide the name		
		$('#ClosecM_cupname').css('display','none');
	});	             
})
function FilE_select(file){
	 //type
	 var type=file.type;//格式：例image/png image/gif
	 var rtype=/^(image\/png|image\/png|image\/png)$/i;
	 var result=rtype.test(type);
	 if(result==false){				 	
	 	return false;	 	
	 }
	 var size=file.size;//单位：B
	 if((2.5*1024*1024)<size){	
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
			 $('#CreatechoosE_picdl2').css('display','none');
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#ClosecM_cupnameshow';			 
			 var framew=150;
			 var frameh=150;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 	$('#ClosecM_cupname').css({height:'150px'});
			 	$('#ClosecM_bom').css({marginTop:'125px'});
				$('#ClosecM_tip1').slideUp('fast');
				$('#ClosecM_cupname').slideDown('fast');	
		     }
}	
/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function UploaD_datatoserver(data){
	/*data
	 * 
	 */
	 		var data=data;
	 //ajax
		/*AJAX*/
		     /*Start:create a AJAX object*/
			var xmlhttp;
			if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			}
			else{// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		    /*Url the data:*/
			  xmlhttp.open("POST",PROJECTDIR+"filebox/picture/upload_server.php?action=close_create");
//			  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			  xmlhttp.send(data);
		    /*Acee the data:*/
			      /*return the data*/
			      xmlhttp.addEventListener('load',ResulT_uploaddatatoserverload,false);
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/					  				       
}
function ResulT_uploaddatatoserverload(e){	
//whenserveruploadsuccess
		hidemenu_create();
                        var itemnum=$("#IteM_numshow").text();
                        var itemnum=parseInt(itemnum,10);
                        var itemnum=itemnum+1;
                        //show the itemnum
                        $("#IteM_numshow").text(itemnum);			
		show_item();
	 	$('#ClosecM_cupname').css({height:'25px'});
	 	$('#ClosecM_bom').css({marginTop:'0'});				
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
		/*post the data post the data post the data*/		
/*when user post when user post when user post when user post when user post*/

















