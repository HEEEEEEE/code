/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
//	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the item:Function*/
function item_select_filebox(){
	/*no select the lang*/
	var notselectlang=document.getElementById('FileboX_source_div');
	notselectlang.onselectstart=function(event){
		 if (event.shiftKey) {
		 	$(this).css('mozUserSelect','none');
			return false;		 	
		 }
	}
	/*select the source*/	
	var start = null;	
	$(".filebox-source").click(function(event){
	$("#FileboX_done #SubmiT").css('display','block');
	$("#FileboX_done #ButtoN").css('display','none');			
	//item select more:shift
                if (event.shiftKey) {
                    var si = $(start).index(), ti = $(this).index();                    
                    var sel = $(".filebox-source").slice(Math.min(si, ti), Math.max(si, ti) + 1);
                    sel.addClass("filebox-source-selected");                    
                    return false;
                }
                
	//item select more:ctrl	
//                if (event.ctrlKey) {               	                                       
//                    return false;
//
//                }
                			
	//item select one
                start = this;
                $(this).addClass("filebox-source-selected");				                   	
									
	});
	//item select more:ctrl
	$('html').keydown(function(event){
		keyN=event.which;                  		        		        			                			
                        if(keyN==17){
                        	$("#ProjectshowE_center").off('mouseup');       		
                        }
	});

	$('html').keyup(function(event){
		keyN=event.which;		
                        if(keyN==17){
                        	$("#ProjectshowE_center").on('mouseup',function(){				
				$(".filebox-source").removeClass('filebox-source-selected');
				//hide the done	
				$("#FileboX_done #SubmiT").css('display','none');
				$("#FileboX_done #ButtoN").css('display','block');          		
                        	});                        	
                        }
	});
	
	/*no select the source*/	
	$("#ProjectshowE_center").mouseup(function(){
		$(".filebox-source").removeClass('filebox-source-selected');
		//hide the done	
		$("#FileboX_done #SubmiT").css('display','none');
		$("#FileboX_done #ButtoN").css('display','block');														
	});				
}
/*Select the item:Action*/		
$(function(){	
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/


                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Fscroll(){				     		
}
/*Custom the scroll:ACTION*/
$(function(){
	Fscroll();
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/
                          
                          
/*when user done*/
function Selectdone(){
            /*Event:mouse*/
            //click:click the done
            $("#FileboX_done #SubmiT").click(function(){
		post_add();           				
	});
	//click:click the close
	$('#FileboX_titlecloseimg').click(function(){
		hide_filebox();					
	});
		
	//dbclickdbclickdbclickdbclickdbclick
            $(".filebox-source").dblclick(function(){
		post_add();             				            					
	});			
}
/*when user done*/
function hide_filebox(){
	//hidefilebox
	$('#AreA_source_filebox').css('display','none');
	//hide the select
	$(".filebox-source").removeClass('filebox-source-selected');
	//hide the done	
	$("#FileboX_done #SubmiT").css('display','none');
	$("#FileboX_done #ButtoN").css('display','block');								
}














                        