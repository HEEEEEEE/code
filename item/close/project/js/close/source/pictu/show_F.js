// a js code for risize
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*exitscreenexitscreenexitscreenexitscreenexitscreenexitscreenexitscreenexitscreen*/
/*exitscreen:Function*/
function ExitscreeN(){		
	  if(document.exitFullscreen){
	  	document.exitFullscreen();
	  }
	  else if(document.mozCancelFullScreen){
	  	document.mozCancelFullScreen();
	  }
              else if(document.webkitExitFullscreen){
              	document.webkitExitFullscreen();
              }                        	  	  
}		  			  	  					 			
/*exitscreen:Action*/
$(function(){
	//MOUSE:CLICK	
	$('#ExitscreeN').click(function(){	
		//frame w
                	$('#SourcE_Ecenter').css('width','500px');               	               	
                	//frame h             	
                	$('#SourcE_Ecenter').css('height','500px');
                	var ordernum=$('#HiddeN_projectitemordernum').val();
	            if(ordernum==0){             	
			PicturE_show('0');
	              	
	            }else{            	
			PicturE_show(ordernum);
	            }
	            
	            $(this).css('display','none'); 
	            $('#FullscreeN').css('display','block'); 
	            
	            $("#RighT").removeClass('full_right');
	            		$('#SourcE_V').removeClass('full_source_v');
	            	       		$('#SourcE_Vsearchdatashowframe').removeClass('full_source_vsearchdatashowframe');
	 	            		
	            			$('#SourcE_Etopf').css('display','none');
	        	            		$('#SourcE_Emoreinfo').removeClass('full_source_emoreinfo'); 
	        	            		           	       		
		           	            	$('#SourcE_Eright').removeClass('full_source_eright');
		           	            		$('#SourcE_Elexpand').removeClass('full_source_elexpand');
	        	            			   			
		           	            	$('#SourcE_Eleft').removeClass('full_source_eleft');
	           	            	
		           	            	$('#MoreinfO').css('display','block');
		           	            	$('#MoreinfO_full').css('display','none');    	
		           	            	
		           	            	$('#E_see').css('display','none');	 		           	            		           	          	
		           	           		$('#FullorexitscreeN').removeClass('full_fullorexitscreen');
		           	           			            
							$('#LshrinK').css('display','none');
                				$('#SourcE_Ec').css({position:'',left:'',width:''});
                		$('#SourcE_Etop').css({position:'absolute',left:'0px',width:'100%'});               		
		$('#LexpanD').css({display:'block',});
						
		ExitscreeN();			
	});
	
	//KEYBOARD:ESC || F11
	$('#HideareaforesC').resize(function(){
		var w=$('#HideareaforesC').css('width');
		if(w=='5px'){
			//frame w
	                	$('#SourcE_Ecenter').css('width','500px');               	               	
	                	//frame h             	
	                	$('#SourcE_Ecenter').css('height','500px');
	                	var ordernum=$('#HiddeN_projectitemordernum').val();
		            if(ordernum==0){             	
				PicturE_show('0');
		              	
		            }else{            	
				PicturE_show(ordernum);
		            }
		            
		            $("#RighT").removeClass('full_right');
		            
	            		$('#SourcE_V').removeClass('full_source_v');
	            	       		$('#SourcE_Vsearchdatashowframe').removeClass('full_source_vsearchdatashowframe');
	            			
	            			$('#SourcE_Etopf').css('display','none');
	        	            		$('#SourcE_Emoreinfo').removeClass('full_source_emoreinfo'); 
	        	            			            	       		
		           	            	$('#SourcE_Eright').removeClass('full_source_eright');
		           	            		$('#SourcE_Elexpand').removeClass('full_source_elexpand');	   
	            					           	            	
		           	            	$('#SourcE_Eleft').removeClass('full_source_eleft');
		           	            	
		           	            	$('#MoreinfO').css('display','block');
		           	            	$('#MoreinfO_full').css('display','none'); 
	           	            						           	            	
		           	            	$('#E_see').css('display','none');	           	          	
		           	           		$('#FullorexitscreeN').removeClass('full_fullorexitscreen');		            			            
		
		                                                  $('#LshrinK').css('display','none');
             	                                    $('#SourcE_Ec').css({position:'',left:'',width:''});
                	$('#SourcE_Etop').css({position:'absolute',left:'0px',width:'100%'});             				
			$('#LexpanD').css({display:'block',});
							            
		            $('#ExitscreeN').css('display','none'); 
		            $('#FullscreeN').css('display','block');           			
		}		
	});
		
		
})
/*exitscreenexitscreenexitscreenexitscreenexitscreenexitscreenexitscreenexitscreen*/




/*List hide or show List hide or show List hide or show List hide or show List hide or show*/
$(function(){
	//show
	$('#LexpanD').click(function(){
		$(this).css('display','none');
		$('#LshrinK').css({display:'block',});
		
	            $('#SourcE_V').removeClass('full_source_v');	
	             	            	
			$('#SourcE_Eright').removeClass('full_source_eright');
		           	     	$('#FullorexitscreeN').removeClass('full_fullorexitscreen');		           	   
		$('#E_see').css('display','none');
			 
		//frame w
		var w=screen.width;
		var w=w-409+'px';
                	$('#SourcE_Ecenter').css('width',w);               	               	
                	//frame h  
                	var h=screen.height;
                	var h=h-84+'px';             	
                	$('#SourcE_Ecenter').css('height',h);
                	
                	$('#SourcE_Ec').css({position:'absolute',left:'42px',width:w});
                	$('#SourcE_Etop').css({position:'absolute',left:'42px',width:w});
                	
                	var ordernum=$('#HiddeN_projectitemordernum').val();
	            if(ordernum==0){             	
			PicturE_show('0');
	              	
	            }else{            	
			PicturE_show(ordernum);
	            }
		           	     				
	});
	
	//hide
	$('#LshrinK').click(function(){
		$(this).css('display','none');
		$('#LexpanD').css({display:'block',});
		
	            $('#SourcE_V').addClass('full_source_v');		
			$('#SourcE_Eright').addClass('full_source_eright');
		           	     	$('#FullorexitscreeN').addClass('full_fullorexitscreen');
		$('#E_see').css('display','block');
				           	     
		//frame w
		var w=screen.width;
		var w=w-84+'px';
                	$('#SourcE_Ecenter').css('width',w);               	               	
                	//frame h  
                	var h=screen.height;
                	var h=h-84+'px';             	
                	$('#SourcE_Ecenter').css('height',h);              
		
                	$('#SourcE_Ec').css({position:'',left:'',width:''});
                	$('#SourcE_Etop').css({position:'absolute',left:'0px',width:'100%'});                	
                	
                	var ordernum=$('#HiddeN_projectitemordernum').val();
	            if(ordernum==0){             	
			PicturE_show('0');
	              	
	            }else{            	
			PicturE_show(ordernum);
	            }		
	});	
})




/*List hide or show List hide or show List hide or show List hide or show List hide or show*/


