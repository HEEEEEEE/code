/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


/*show the PICTURE:Functionshow the PICTURE:Functionshow the PICTURE:Function*/
function PicturE_show(ordernum){
		//frame w
                	var framew=$('#SourcE_Ecenter').css('width');
                	var framew=parseInt(framew,10);
                	
                	//frame h               	
                	var frameh=$('#SourcE_Ecenter').css('height'); 
                	var frameh=parseInt(frameh,10);
                	
                	//id:picture
                	id=$('.source:eq('+ordernum+')').attr('id')
                	$('#HiddeN_projectitemid').val(id);	
		//url:picture
		var url=$('.source:eq('+ordernum+')'+' .source-content').attr('data-src');
		//name:picture
		var nam=$('.source:eq('+ordernum+')'+' .source-name-show').attr('title');		
		
		/*picture:width,heightpicture:width,heightpicture:width,height*/
		//custom the img's object
		var img=new Image();
		//set the object img's src
		img.src=url;
		
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
			$('#SourceE').css('width',imgnw+'px');
			$('#SourceE').css('height',imgnh+'px');    						
		}		
		$('#SourceE').attr('src',url);
		$('#EnamE').html(nam);	
}

/*show or hide the Etoolsshow or hide the Etoolsshow or hide the Etoolsshow or hide the Etools*/

$(function(){	
	$('#SourcE_Ec').mouseover(function(){
		$('.source_ef,.source_emoreinfo').css('display','block');						
	});
	$('#SourcE_V').mouseover(function(){
		$('.source_ef,.source_emoreinfo').css('display','none');				
	});				
	$('#SourcE_Etopf').mouseover(function(){
		$('.source_ef,.source_emoreinfo').css('display','none');		
		$(this).css('cursor','none');		
	});			
})
/*show or hide the Etoolsshow or hide the Etoolsshow or hide the Etoolsshow or hide the Etools*/

/*uponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeupone*/
/*upone:Function*/
function UponE(){
		var ordernum=$('#HiddeN_projectitemordernum').val();		
		var i=parseInt(ordernum,10);		
		i--;
		if(i<0){
			$('#SourcE_Euponeothers').show('fast');
			setTimeout("$('#SourcE_Euponeothers').hide('fast');",2500);	
		}
		else{
		                if(i==0){              	
				PicturE_show('0');
		              	
		                }else{             	
				PicturE_show(i);
		                }
			    $('#HiddeN_projectitemordernum').val(i);		                							
		}	
}
/*upone:Action*/
$(function(){
	$('#UponE').click(function(){
		UponE();	
	});
})
/*uponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeuponeupone*/


/*nextonenextonenextonenextonenextonenextonenextonenextonenextonenextonenextone*/
/*nextone:Function*/
function NextonE(){
		var ordernum=$('#HiddeN_projectitemordernum').val();	
		var i=parseInt(ordernum,10);		
		i++;
		usesearch=$('#SourcE_Vsearchdatashowframe').css('display');
		if(usesearch!='block'){
			var itemnum=$("#IteM_numshow").text();
			var itemnum=parseInt(itemnum,10);		
			l=itemnum-1;
		}
		else{
			var itemnum=$("#ItemsearcH_numshow").text();
			var itemnum=parseInt(itemnum,10);		
			l=itemnum-1;									
		}		

		if(i>l){
			$('#SourcE_Enextoneothers').show('fast');
			setTimeout("$('#SourcE_Enextoneothers').hide('fast');",2500);				
		}
		else{             	
			PicturE_show(i);			
			$('#HiddeN_projectitemordernum').val(i);			
		}	
}
/*nextone:Action*/
$(function(){	
	$('#NextonE').click(function(){
		NextonE();				
	});	
})
/*nextonenextonenextonenextonenextonenextonenextonenextonenextonenextonenextone*/



/*fullscreenfullscreenfullscreenfullscreenfullscreenfullscreenfullscreenfullscreen*/
/*fullscreen:Function*/
function FullscreeN(object){		
	  if(object.requestFullscreen){
		object.requestFullscreen();
	  } 
	  else if(object.mozRequestFullScreen){
	  	object.mozRequestFullScreen();
	  } 
	  else if(object.webkitRequestFullscreen){
	  	object.webkitRequestFullscreen();
	  } 
	  else if(object.msRequestFullscreen){
	  	object.msRequestFullscreen();
	  }		  			  	  					 			
}
/*fullscreen:Action*/
$(function(){	
	$('#FullscreeN').click(function(){	
		//frame w
		var w=screen.width;
		var w=w-84+'px';
                	$('#SourcE_Ecenter').css('width',w);               	               	
                	//frame h  
                	var h=screen.height;
                	var h=h-84+'px';             	
                	$('#SourcE_Ecenter').css('height',h);
                	var ordernum=$('#HiddeN_projectitemordernum').val();
	            if(ordernum==0){             	
			PicturE_show('0');
	              	
	            }else{            	
			PicturE_show(ordernum);
	            }
	            
	            $(this).css('display','none'); 
	            $('#ExitscreeN').css('display','block');	           
	            
	            $('#RighT').addClass('full_right');	
	                        
	            	$('#SourcE_V').addClass('full_source_v');
	            		$('#SourcE_Vsearchdatashowframe').addClass('full_source_vsearchdatashowframe');
	            		
	            		$('#SourcE_Etopf').css('display','block');
	            		
	            		$('#SourcE_Emoreinfo').addClass('full_source_emoreinfo');
	            			
	           	            	$('#SourcE_Eright').addClass('full_source_eright');
	           	            		$('#SourcE_Elexpand').addClass('full_source_elexpand');
	           	            	
	           	            	$('#SourcE_Eleft').addClass('full_source_eleft');

	           	            	$('#MoreinfO').css('display','none');
	           	            	$('#MoreinfO_full').css('display','block');
	           	            		           	            	
	           	            	$('#E_see').css('display','block');
	           	            	$('#FullorexitscreeN').addClass('full_fullorexitscreen');
	           	            		           	             	            	                            	 		
		var object=document.getElementById('RighT');
		FullscreeN(object);						
	});	
})
/*fullscreenfullscreenfullscreenfullscreenfullscreenfullscreenfullscreenfullscreen*/










	