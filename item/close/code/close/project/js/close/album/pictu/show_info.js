/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
//	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the Album:Function*/
function item_select_album(){
	/*Select the item:random*/
	itemnum=$('#HiddeN_projectalbumitemnum').val();
	rando=Math.ceil(Math.random()*itemnum);	
	clas='.album-p:nth-child('+rando+')';
	$(clas).addClass('album-p-selected');
	
	/*Select the item:when click*/		
	$(".album-p").click(function(){
                $(this).addClass("album-p-selected");			        		 		                   										
	});
		
	/*no select the source*/	
	$(".album-p").mouseup(function(){
		$(".album-p").removeClass('album-p-selected'); 	 															
	});		
}
/*Select the Album:Action*/
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/


                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Ascroll(){
}
/*Custom the scroll:ACTION*/
$(function(){
//	Ascroll();
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/
                          
                          
/*when user done*/
function Selectdonealbum(){
            /*Event:mouse*/
            //click:click the done
            $("#AlbuM_done #SubmiT").click(function(){
            	var selected=$(".album-p-selected").length;
            	if(!(selected<=0)){
			//Give the itemid to hiddeN
			var itemid=$(".album-p-selected").attr("id");
			$('#HiddeN_projectalbumitemid').val(itemid);
			
					//show album insert menu
				showmenu_album(itemid);	
			//hide the album
			$('#AreA_source_album').css('display','none');				
												            		
            	}			
	});
	//click:click the close
	$('#AlbuM_titlecloseimg').click(function(){
		//hide the filebox
		$('#AreA_source_album').css('display','none');
			
	});
		
	//dbclickdbclickdbclickdbclickdbclick
            $(".album-p").dblclick(function(){		
		//Give the itemid to hiddeN
		var itemid=$(".album-p-selected").attr("id");
		$('#HiddeN_projectalbumitemid').val(itemid);
		
		//show source set menu
		showmenu_album(itemid);	
		//hide the album
		$('#AreA_source_album').css('display','none');			            					
	});			
}
/*when user done*/















                        