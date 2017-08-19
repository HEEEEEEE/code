/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


																						
$(function(){
	/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	/*change the idea result tips
	 *action
	 **************************** 
	 */
	setInterval('CreatE_idearesulttips()',5000);
	
	/*change the idea create type
	 **************************** 
	 */
	var r=Math.random();
	if(r>=0.1 && r<0.5){
		$('#CreatechoosE_lan').css({left:'5px',right:'auto'});
		$('#CreatechoosE_pic').css({right:'7.5px',left:'auto'});	
	}else{
		$('#CreatechoosE_lan').css({right:'7.5px',left:'auto'});
		$('#CreatechoosE_pic').css({left:'5px',right:'auto'});		
	}		 	
	//lanlanlanlanlanlanlanlanlanlanlanlanlanlanlan	     		
            //click
	$('#IdeawithlansboX').click(function(){
		$('.createlan-top,.createlan-bottom').css('display','block');						
		$('.ideawithlansboxhabbitno').css({color:'rgba(255,255,255,0.5)',height:'75px',borderRadius:'0'});
//		$('.ideawithlansboxhabbitye').css({color:'rgba(255,255,255,0.5)',height:'112.5px'});		
		//image box hide
		IdeA_createimagehide();			
	});
	
	//input
	Filter_PasteWords();	
	
	//post
	$('#IdeA_createdone').click(function(){
		//filter:empty blank more
			//basic
			var text=$('#IdeawithlansboX').text();
			var textl=text.length;
			var blank=/^\s{1,125}$/.test(text);
			if(textl>0 && textl<=125 && blank==false){
				IdeA_createpost();				
			}
			if(textl==0){
				$('.createlan-top,.createlan-bottom').css('display','block');						
				$('.ideawithlansboxhabbitno').css({color:'rgba(255,255,255,0.5)',height:'75px',borderRadius:'0'});
//				$('.ideawithlansboxhabbitye').css({color:'rgba(255,255,255,0.5)',height:'112.5px'});				
			}			
			if(blank==true){
				$('#CreatelaN_enteralbetips').css('display','none');
				$('#CreatelaN_enteralbenum').text('125');
				$('#IdeawithlansboX').text('');
				$('#IdeawithlansboX').addClass('createlan-placeholder');
				$('#IdeawithlansboX').css('color','rgba(255,255,255,0.5)');
				$('#IdeawithlansboX').focus();		
			}
	});
	
	
	
			
	//imageimageimageimageimageimageimageimageimageimageimageimageimage
	// hover style
	$('#UploaD_image').mouseover(function(){
		$('#CreatechoosE_picimg').attr('src',ROOTDIR+'data/image/home/center/image.png');
	});
	$('#UploaD_image').mouseout(function(){
		$('#CreatechoosE_picimg').attr('src',ROOTDIR+'data/image/home/center/egami.png');			
	});
	$('#UploaD_image').click(function(){
		//lans box hide
		IdeA_createlanshide();
	});
			
	/*selectselectselectselectselectselectselectselectselectselect*/
	//user select the file
	$('#UploaD_image').change(function(){
		//fitlerfitlerfitlerfitlerfitler
		/*	type:image
		 *    format:.png 
		 *size:<=2.5MB 
		 *    name:<=250 
		 *          hw: 
		 */
		 $('#UploaD_imagechange').val('');		 
		 var file=document.getElementById('UploaD_image').files[0];
		 FilE_select(file);		 			 	  	
	});
	//user select the file:change
	$('#UploaD_imagechange').change(function(){
		//fitlerfitlerfitlerfitlerfitler
		/*	type:image
		 *    format:.png 
		 *size:<=2.5MB 
		 *    name:<=250 
		 *          hw: 
		 */
		 $('#UploaD_image').val('');		 
		 var file=document.getElementById('UploaD_imagechange').files[0];
		 FilE_select(file);				 	 			 	
	});
	
	
	
	/*postpostpostpostpostpostpostpostpostpostpostpostpostpostpostpostpost*/
	$('#UploadbrowseR_done_img').click(function(){
		var val=$('#UploaD_image').val();
		if(val!=''){
			var data=new FormData(document.getElementById('ForM_upload'));
			UploaD_datatoserver(data);			
		}else{
			var data=new FormData(document.getElementById('ForM_uploadchange'));
			UploaD_datatoserver(data);			
		}		
	});	
	
	
		
	/*hide the idea create area*/
		
})





//change the idea result tips:function
function CreatE_idearesulttipsslide(){
	var t=new Array();
	t[1]='声影 照片 笑脸...';
		t[2]='想法 背包 轨迹...';
			t[3]='鸡爪 时光 汗水...';
		t[4]='涂鸦 调调 感觉...';
	t[5]='声音 宝贝 人生...';	
	var r=Math.ceil((Math.random())*(t.length));	
	$('#CreateguidE_lan2').text(t[r]);
	$('#CreateguidE_lan2').slideDown();
}
function CreatE_idearesulttips(){
	$('#CreateguidE_lan2').slideUp(1000);
	setTimeout('CreatE_idearesulttipsslide()',1000);		
}

/*hide the area:function*/
function IdeA_createlanshide(){
	//lans
	$('#CreatelaN_enteralbetips').css('display','none');
	$('.createlan-top,.createlan-bottom').css('display','none');
     	$('#CreatelaN_enteralbenum').text('125');				
	$('#IdeawithlansboX').text('');
	$('#IdeawithlansboX').addClass('createlan-placeholder');				

	$('.ideawithlansboxhabbitno').css({color:'rgba(255,255,255,1)',height:'25px',borderRadius:'25px'});
//	$('.ideawithlansboxhabbitye').css({color:'rgba(255,255,255,1)',height:'25px'});

	$('#IdeawithlansboX').on('click',function(){
		$('.createlan-top,.createlan-bottom').css('display','block');						
		$('.ideawithlansboxhabbitno').css({color:'rgba(255,255,255,0.5)',height:'75px',borderRadius:'0'});
//		$('.ideawithlansboxhabbitye').css({color:'rgba(255,255,255,0.5)',height:'112.5px'});					
	});		
}
function IdeA_createimagehide(){	
	//image
	$('#CreatechoosE_picdl1').css('display','none');	
	$('#CreatechoosE_picdl2').css('display','block');
	$('#UploaD_image,#UploaD_imagechange').val('');
	$('#CreatechoosE_picuploadbrowser').css('display','none');			
}
function IdeA_createhide(){
	//lans
	IdeA_createlanshide();
	
	//image
	IdeA_createimagehide();			
}

function OperatE_createenter(){
		var text=$('#IdeawithlansboX').text();
		if(text==''){
			$('#CreatelaN_enteralbetips').css('display','none');
			$('#IdeawithlansboX').addClass('createlan-placeholder');
			$('#IdeawithlansboX').css('color','rgba(255,255,255,0.5)');				
		}
		else{
			$('#CreatelaN_enteralbetips').css('display','block');
			$('#IdeawithlansboX').off('click');
			$('#IdeawithlansboX').removeClass('createlan-placeholder');
			$('#IdeawithlansboX').css('color','rgba(255,255,255,1)');				
		}
					
		var textl=text.length;
		var textl=125 - textl;
		$('#CreatelaN_enteralbenum').text(textl);			
		if(textl < 0){
			$('#CreatelaN_enteralbenum').css('color','rgba(255,0,0,1)');
		}
		else if(textl >= 0){
			$('#CreatelaN_enteralbenum').css('color','rgba(0,125,0,1)');						
		}	
}

/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan
 * 
 * */
/*post the idea:Function*/
function IdeA_createpost(){
	/*Set the data:*/
	 var data=$('#IdeawithlansboX').text(); 
	 //lans
	 lans=FilteR_ajaxspecialstr(data);			
	/*AJAX*/
	     /*Start:create a AJAX object*/
					
                 var tip="<span style='color:rgb(255,125,0);'>"+"dealing..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});		     	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'include/part/idea/create/menu/create_lan_p.php?action=idea_createlan',
	     	type:'POST',
	     	data:'lans='+lans,
	     	datatype:'text',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideacreatepost(result);										     			
	     	},
	     });
}
/*deal the result:Function*/
function ResulT_ideacreatepost(result){
	var match=/idea_createsuccess/i.test(result);
	if(match==true){					
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	var url=ROOTDIR+'works.php?ideaid=true';
	     	location.href=url;										
	}else{
		$('#UnknowerroR').css('display','block');
	}
}

/*post the idea:Action*/
$(function(){
})
/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlan
 * 
 * */









/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */
	/*When user selectWhen user selectWhen user selectWhen user select*/
function FilE_select(file){
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
			 $('#CreatechoosE_picdl2').css('display','none');
			 //give the dataurl to the img src
			 var imgurl=e.target.result;//e.target.result = dataurl
			 var imgid='#PicuploadbrowseR_show_con_img';
			 var i=$('#CreatechoosE_pic').width();			 
			 var framew=i;
			 var frameh=i;
			 PicturE_auto(imgurl,imgid,framew,frameh);
			 $('#CreatechoosE_picuploadbrowser').css({height:i+'px',display:'block'});
			 	//user select the file:change
			 	//style
				$('#PicuploadbrowseR_show_change_img').mouseover(function(){
					$('#PicuploadbrowseR_show_change_frame').css('color','rgba(0,125,0,1)');
				});
				$('#PicuploadbrowseR_show_change_img').mouseout(function(){
					$('#PicuploadbrowseR_show_change_frame').css('color','rgba(0,125,0,0.5)');
				});
		     }
}				 	 	 	

/*When user selectWhen user selectWhen user selectWhen user select*/

/*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/
function UploaD_datatoserver(data){
	/*data
	 * 
	 */
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
			  xmlhttp.open("POST",ROOTDIR+'include/part/idea/create/menu/create_image_p.php?action=idea_createimage');
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
	var result=e.target.responseText;
	var match=/idea_createsuccess/i.test(result);
	if(match==true){		
	            var tip="<span style='color:rgb(0,225,0);'>"+"deal successful !!!"+"</span>";
	            $('#LoadiN_tipstr').html(tip);	     	
	     	var url=ROOTDIR+'works.php?ideaid=true';
	     	location.href=url;				
	}else{
		$('#UnknowerroR').css('display','block');		
	}		
}		
    /*when user upwhen user upwhen user upwhen user upwhen user upwhen user up*/

/*imageimageimageimageimageimageimageimageimageimageimageimageimageimageimage
 * 
 * */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 