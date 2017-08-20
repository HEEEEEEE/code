/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//function ShoW_ideaenterajax(){
//	ActioN_ideaenter();			
//}
                        /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Scroll(){
	$('#TimelinE').mCustomScrollbar(
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
                         callbacks:{   onScrollStart:function(){                    	
                         }   } 	
		 }	
	);
	
	var timelength=$('.timepoint').length;
	if(timelength > 5){
		$('#TimelinE').css('height','210px');
	}			
}
/*Custom the scroll:ACTION*/
$(function(){

})
function IdeA_enter(){
	/*Set the data:*/
	/*
	 * 
	 */ 
	   var ideaid=$('#HiddeN_ideaid_GET').val();
	 	 var hid=$('#HiddeN_hid').val();		 	 	 			
	/*AJAX*/
	     /*Start:create a AJAX object*/	
                 var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
                 $('#LoadiN_tipstr').html(tip);	 	     
	     $('#LoadiN_tip').css({display:'block'});	
	     xmlhttp=$.ajax({
	     	url:ROOTDIR+'html/mE/idea/enter/idea.php?action=idea_enter',
	     	type:'POST',
	     	data:'ideaid='+ideaid+'&hid='+hid,
	     	datatype:'html',
	     	success:function(){
	     		var result=xmlhttp.responseText;
	     		ResulT_ideaenter(result);
	     		
			Scroll();	
	     					     		
			OperatE_ideaenter();
			
			StartFullscreen();		     										     			
	     	},
	     });
}
/*deal the result:function*/
function ResulT_ideaenter(result){	
	$('#CenteR_mainenter').html(result);
		
	$('#LoadiN_tipstr').html('');
	$('#LoadiN_tip').css({display:'none'});	
}
/*enter the idea:action*/
$(function(){		
	IdeA_enter();
	//enter with GET enter with GET enter with GET enter with GET enter with GET enter with GET
})



/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the enter:function
function OperatE_ideaenter(){
								 
 	/*timelinetimelinetimelinetimelinetimelinetimelinetimelinetimelin
 	 * 
 	 */
 	//basic
	var processstate=$('#HiddeN_enterprocvalue').val(); 	 
	var timelength=$('.timepoint').length;
		
	//style:end
	if(processstate=='2'){
		//palm leave back
		$(".timepoint:first-child .timepointfra").css({backgroundColor:'rgba(0,255,0,1)'});														
		$(".timepoint:last-child .timepointfra").css({backgroundColor:'rgba(255,0,0,1)'});
			//palm leave con
			var timePointNum=$(".timepoint").length;
			if(timePointNum==1){
				var html="<span>最后发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:last-child .timepoint_left').prepend(html);			
			}else{
				var html="<span>最早发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:first-child .timepoint_left').prepend(html);
			
				var html="<span>最后发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:last-child .timepoint_left').prepend(html);			
			}	
		//palm pe
//		$("#IdeA_enterenilemit").css({borderColor:'rgba(255,0,0,1)'});							
	}else{
			//palm leave con
			var timePointNum=$(".timepoint").length;
			if(timePointNum==1){
				var html="<span>最近发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:first-child .timepoint_left').prepend(html);		
			}else{
				var html="<span>最早发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:last-child .timepoint_left').prepend(html);	
						
				var html="<span>最近发送的一个&nbsp;</span>"+"<span>;</span>"+"&nbsp;";
				$('.timepoint:first-child .timepoint_left').prepend(html);			
			}		
				
	}
	
	//style:processing
		//to process
		$('.timeprocessin-img').mouseover(function(){
			var imgUrl=ROOTDIR+'html/mE/idea/enter/process.png';
			$(this).attr('src',imgUrl);	
		});
		$('.timeprocessin-img').mouseout(function(){
			var imgUrl=ROOTDIR+'html/mE/idea/enter/process.gif';
			$(this).attr('src',imgUrl);
		});													 


			 
 	 //mouse
 	$(".timepoint[data-ordernum!='1'][data-ordernum!='last']").mouseover(function(){
 		var timeid=$(this).attr('data-timeid');
 	 	var id=".timepoint[data-timeid='"+timeid+"']"+" .timepointfra";
 	 	$(id).css({opacity:'1'});	 		
 	}); 
  	$(".timepoint[data-ordernum!='1'][data-ordernum!='last']").mouseout(function(){
  		var timeid=$(this).attr('data-timeid');
 	 	var nid=".timepoint[data-timeid!='"+timeid+"']"+"[data-ordernum!='1'][data-ordernum!='last']"+" .timepointfra";
 	 	$(nid).css({opacity:'0.5'});	 		
 	}); 
 	
  	$(".timepoint[data-ordernum='last'],.timepoint[data-ordernum='1']").mouseover(function(){
 	 	$(".timepoint[data-ordernum!='1'][data-ordernum!='last'] .timepointfra").css({opacity:'0.5'});	 		
 	}); 			 



 	//click:expand down or up		 	 	 		 
 	$("#TimelinE_expanddown").click(function(){
	 	$(this).css({display:'none'});
	 	$("#TimeprocessiN").css({display:'none'});
	 	
	 	
		var p=$('#IdeA_enterenilemit').offset();
		var pb=p.top;
		var bh=document.documentElement.clientHeight; 	
	 	var th=bh - pb - 45;
	 	
	 	//palm main
	 	var n=timelength;
	 	var hpm=((n-1)*45)+30
	 	if(th < hpm){
	 	       var hpm=th;
	 	}else{
	 	       var hpm=hpm;
	 	}	 		 	
	 	$('#TimelinE').css('height',hpm+'px');	 	
	 	//expand
	 	var expandTop=(hpm-35)/2;
		$('#TimelinE_expandup').css('top',expandTop+'px');	 	
	 		 	
	 	//palm p
	 	var hpp=hpm-120;	 		 	
	 	$('#IdeA_enterenilemit').css('height',hpp+'px');
	 	$('#IdeA_enterenilemit').css('top','82.5px');
	 	
	 	$("#TimelinE_expandup").css({display:'block'});	 		
 	}); 
  	$("#TimelinE_expandup").click(function(){
	 	$(this).css({display:'none'});
	 	
	 	//palm p
	 	$('#IdeA_enterenilemit').css('height','100%');
	 	$('#IdeA_enterenilemit').css('top','0');
	 		 	
	 	//palm main
	 	$('#TimelinE').css({height:'210px'});
	 	
	 	//expand
		$('#TimelinE_expandup').css('top','0');
			 	
	 	$("#TimelinE_expanddown").css({display:'block'});
	 	$("#TimeprocessiN").css({display:'block'});	 	 		 		
 	}); 




 	
	/*timecontimecontimecontimecontimecontimecontimecontimecontimecon
 	 * 
 	 */

	 
 	 
 	 
 	//timelinetocontimelinetocontimelinetocontimelinetocontimelinetocontimelinetocontimelinetocontime
 	 $(".timepoint").mouseover(function(){
 	 	var timeid=$(this).attr('data-timeid');
 	 	var id=".timecon[data-timeid='"+timeid+"']";		 	 	
 	 	$(id).removeClass('timehide');
 	 	$(id).addClass('timeshow');
 	 	
 	 	var nid=".timecon[data-timeid!='"+timeid+"']";
 	 	$(nid).removeClass('timeshow');
 	 	$(nid).addClass('timehide');
 	 }); 
 	 
 	 
 
 	//tooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltooltool
 	//comment
	/*show the idea comment menu*/
	
 	 $("#IdeaenterR_tool1").click(function(){
		var exist=$('#MenU_ideaentercomment div').length;
		if(exist>0){
			$('#MenU_ideaentercomment').css('display','block');			
		}
		else{
			IdeA_commentmenu();			
		} 	 	
		
 	 }); 	 	  		
}
//OperatE the enter:Action
$(function(){
	
})

