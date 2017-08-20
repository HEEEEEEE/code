/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
/*show the PICTURE:Functionshow the PICTURE:Functionshow the PICTURE:Function*/
function PicturE_show(framew,frameh,url,object){            					
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
		var margin=(frameh-imgnh)/2;
		$(object).css('width',imgnw+'px');
		$(object).css({height:imgnh+'px',marginTop:margin+'px'});   						
	}
	$(object).attr('src',url);				
	
}

/*show or hide the Etoolsshow or hide the Etoolsshow or hide the Etoolsshow or hide the Etools*/


			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/			

/*PagE:choose a position
 *TooL:choose a source | //set a source | Insert a source 
 *PagE:show a source
 *           mouseover:side to set or delete the source
 *                    click:top to set or delete the source
 *           dblclick:set a source 
 */
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
/*PagE:choose a position
 */ 		
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
		
		//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL 
/*PagE:choose a position
 *TooL:choose a source | set a source | Insert a source 
 */
//TooL:choose a source		
/*show the filebox show the filebox show the filebox*/
		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_item_filebox(){
	  	  /*start start start start start*/											  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"filebox/picture/show_info.php?action=filebox_show",
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
	$("#TooL_sour1 #SourcE").click(function(){
		$('#HiddeN_projectfileboxinsertorset').val('0');		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}					
	});
	
	$("#InfossM_sbrowserchange #ChangE").click(function(){		
		var fileboxL=$("#AreA_source_filebox div").length;
		if(fileboxL==0){
			show_item_filebox();
			$('#AreA_source_filebox').css('display','block');			
		}
		else{
			$('#AreA_source_filebox').css('display','block');			
		}			
	});
	
	$("#InfossetM_sbrowserchange #ChangEset").click(function(){		
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

/*PagE:choose a position
 *TooL:choose a source | Insert a source 
 */
//TooL:insert a source
	/*show the source insert menu*/
	//function
	function showmenu_source(itemid){
		/*sourcesourcesourcesourcesourcesourcesourcesource
		 * 
		 */											
		//Frame
			var framew=150;
		var frameh=150;		
		//url			
		var itemid='#'+itemid+' .filebox-source-content';
		var url=$(itemid).attr('data-src');		
		//object
		var object='#SourceB';			
		//source	
		PicturE_show(framew,frameh,url,object);		
		/*sourcesourcesourcesourcesourcesourcesourcesource
		 * 
		 */
		/*desdesdesdesdesdesdesdesdesdesdesdesdesdesdesdes
		 */		 				 
	            //Focus the DeS
	            setTimeout("$('#InfossM_sdes #DeS').focus();",500);
	            
	            //showshowshowshowshowshowshowshowshowshowshowshow
	            $('#InfossMbacK,#InfossM').css('display','block');				
	}
	//action



/*PagE:choose a position
 *TooL:choose a source | set a source | Insert a source 
 */
/*foucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucs 
 */
	
 /*foucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucsfoucs 
  */
//TooL:Insert a source
//function
function insert_source(url,des){		
	//source	
	framew=250;
	frameh=250;
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
		//source_idnum   
		var sourcel=$('#CONTENT .source').length;
		var source_idnum=sourcel+1;		
		//source_size
		//source_position
		//source_so
		var source_sp='width:'+imgnw+'px;'+'float:left;clear:both;';
		
		//sourceconframe_size
		var sourceconframe_size='width:250px;height:250px;';		
		//sourcecon_size
		//sourcecon_position		
		//sourcecon_sp		    
		var position=(frameh-imgnh)/2;
		var sourcecon_sp='width:'+imgnw+'px;'+'height:'+imgnh+'px;'+'margin-top:'+position+'px;'; 
		//sourcecon_source
		var sourcecon_source=url;
				
		//sourcedesframe_size	
		var sourcedesframe_size='width:250px;';
		//sourcedescon
		var sourcedescon=des;
		
		var source="<p class='framelevel1 framelevel1-lang'><br class='framelevel1-br'/></p>"+"<div contenteditable='false' id='SourcE"+source_idnum+"' class='source' style='"+source_sp+"'><div style='"+sourceconframe_size+"' class='sourcecon' ><img style='"+sourcecon_sp+"'class='con' src='"+sourcecon_source+"' ></div><div class='sourcedes' style='"+sourcedesframe_size+"'><span class='des'>"+sourcedescon+"</span></div></div>"+"<p class='framelevel1 framelevel1-lang'><br class='framelevel1-br'/></p>";
		document.execCommand('InsertHTML',false,source);		  						
	}
}
//action
function InserT(){
            $('.frame').click(function(){
            	var url=$('#HiddeN_projectitemsourceurl').val();
            	var des=$('#HiddeN_projectitemsourcedes').val();
            	if(url!=''){
	            	var url=$('#HiddeN_projectitemsourceurl').val();
	            	var des=$('#HiddeN_projectitemsourcedes').val();
	            	            		
		            insert_source(url,des);	
		            setTimeout('setsource_outside();',500);
		            setTimeout('setsource_top();',500);
		            
		            $('#HiddeN_projectitemsourceurl').val('');
		            $('#HiddeN_projectfileboxitemid').val('');		            			            	            		
            	}	            	
            });	
}

	/*hide the source insert menu*/
	//function
	function hidemenu_source(){					            
	            //hide
	            $('#InfossMbacK,#InfossM').css('display','none');
		//hide the tip
		
		/*resetresetresetresetresetreset
		 * 
		 ***********************************************/
		//reset the form
		var form=document.getElementById('InfossM_form');	
		form.reset(); 	           				
	}
	//action
	$(function(){
		$('#CanceLsource').click(function(){
			hidemenu_source();	
		});			             
	})
		//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL



 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
/*PagE:show a source
 *           mouseover:side to set or delete the source
 *                    click:top to set or delete the source
 *           dblclick:set a source 
 */		
 		//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE 
			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/



/*When user input*/
$(function(){                            
//des
            var des=document.getElementById('InfossM_sdes');
            var des=des.getElementsByTagName('textarea');
            des[0].oninput=function(){ 
            	var des=this.value;
            	if(des.length<=250){         		
            	}          	
	            else{ 	            	
	            }	
            }              	             
})



/*when user post when user post when user post when user post when user post*/
		/*set the item set the item set the item*/                         
/*set the item:Function*/
function insert_sourceA(){
	/*Set the data:*/
	//id
	var id=$('#HiddeN_projectfileboxitemid').val();
	  var id=id.match(/\d{1,12}/);
	   var id=parseInt(id,10);	
	//des
            var des=document.getElementById('InfossM_sdes');
            var des=des.getElementsByTagName('textarea'); 
            var des=des[0].value;
	var model = new RegExp(/&|\+/gi);
	var result = model.test(des);	
	if(result){	
		var des=des.replace(/&/gi,'%26');
		var des=des.replace(/\+/gi,'%2B');
	}
	
	//iid
	var iid=$('#HiddeN_projectciid').val();
	//cid
	var cid=$('#HiddeN_projectcid').val();
//	alert(id+"\n"+des+"\n"+iid+"\n"+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/infi/langu/insert_sourceA.php?action=source_insert",
		     	type:"POST",
		     	data:'id='+id+'&des='+des+'&iid='+iid+'&cid='+cid,
		     	datatype:'text',
		     	success:function(){
				result=xmlhttp.responseText;
				result_insertsourceA(result);	     		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_insertsourceA(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savefail/i.test(result);		
	if(match==false){
		//url		
		var url=ROOTDIR+result;
		$('#HiddeN_projectitemsourceurl').val(url);
		//des
	            var des=document.getElementById('InfossM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value;		
		$('#HiddeN_projectitemsourcedes').val(des);			            
		/*hidemenu*/
		hidemenu_source();	            			 	
	}	
}

		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_insertsourceA(){		
		 //basic:des
	            var des=document.getElementById('InfossM_sdes');
	            var des=des.getElementsByTagName('textarea'); 
	            var des=des[0].value; 			
		if(des.length>250){ 			
		}
		else{			
			 insert_sourceA();	
		}  	
}
//post the data:action
$(function(){
            //Event:mouse       
            $("#SubmiTsource").click(function(){
		post_insertsourceA();
		InserT();			
	}); 
//	//Event:key	
})
		/*post the data post the data post the data post the data post the data*/
/*when user post when user post when user post when user post when user post*/













