/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/

	/*PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE*/
	/*SHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOWSHOW
	 *
	 *  
	 */
/*filter the infowhenshow*/
//filter the infowhenshow:function
function show_filter(){
	var framel=$('.mCSB_container .frame').length;
	if(framel<=0){
		$('.mCSB_container').html('');
	}
}
	/*show the infoshow the infoshow the infoshow the infoshow the info*/                          
/*show the info:Function*/
function show_info(){
	/*Set the data:*/
	//id
	var id=$("#HiddeN_projectciid").val();		
	//cid
	var cid=$('#HiddeN_projectcid').val();
	
//	alert(id+';'+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/infi/langu/showA.php?action=info_show",
		     	type:"POST",
		     	data:'id='+id+'&cid='+cid,
		     	datatype:'html',
		     	success:function(){
				result=xmlhttp.responseText;
				result_show(result);
				
				show_filter();
				
				var w=screen.width;var w=(w-700);
			    	 	//the CONTENT's frame width
			    	 	$('#CONTENT .frame').css('width',w-43);
						 //the ScrolL's width
					    	 $('._mCS_1').width(w);
					$('.mCSB_container').width(w);
					
				FramE_borderhors();
					$('#CONTENT .frame').click(function(){
						var frameid=$(this).attr('id');
						$('#HiddeN_projectframeid').val(frameid);
					});
					
					PagE_selectlang(); 
				
							setsource_outside(); 
						setsource_top();
				 
					setalbum_outside(); 
				setalbum_top(); 
				
				UndO();
				RedO();		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_show(result){
	$('.mCSB_container').html(result);		
}
/*show the info:Action*/
$(function(){
	show_info();
})
/*show the infoshow the infoshow the infoshow the infoshow the info*/




	 
                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Scroll(){
	$('#CONTENT').mCustomScrollbar(
		{
		 set_width:false,
  		         set_height:false,
  		 horizontalScroll:false,
  		 scrollInertia:500,
  		 scrollEasing:'easeInCubic',
  		 mouseWheel:true,
  		 autoDraggerLength:true,
  		 	
		 scrollButtons:
		 	{
		 enable:true,
		 scrollType:"continuous",
		 scrollSpeed:50,
		 scrollAmount:50
		 	},
		 advanced:
		 	{
                            updateOnBrowserResize:true,
                            updateOnContentResize:true,
                            autoExpandHorizontalScroll:false,
                            autoScrollOnFocus:true,  
                         	},
                         callbacks:{   onScrollStart:function(){}   } 	
		 }	
	);		
}
/*Custom the scroll:ACTION*/
$(function(){
	Scroll();	
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/


	 
	 
	 
	//TOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOL

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/


