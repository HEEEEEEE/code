/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/

	/*PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE*/
	/*frameframeframeframeframeframeframeframeframeframeframeframeframeframeframeframeframeframe*/ 
//InsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsertInsert
//Insert a frame:Function
//a frame:browser
//function FramE_browser(){	
//}
//a frame:truely
function InserT_frame(){
	var framel=$('#CONTENT .frame').length;
	var framen=framel+1;
	//frame:page
	var frame="<div id='FramE"+framen+"'"+" class='frame' contenteditable='true'></div>";
	$('.mCSB_container').append(frame);
	var w=screen.width;var w=(w-700);
 	//the CONTENT's frame width
 	$('#CONTENT .frame').css('width',w-43);
 		
	//frame:menutoremove
//	var framemenur="<div id='FramE_menur"+framen+"'"+" class='framemenur'></div>";
//	$('#MenU_frameremcon').append(framemenur);		
}

function DraG_frame(){
	$('#CONTENT').bind({
		mousedown:function(event){
			yI=event.clientY;
			xI=event.clientX;
			$(this).mousemove(function(event){
				var l=$('.mCSB_container .frame').length;
				if(l==0){
					yII=event.clientY;
					var h=Math.abs(yII-yI);
					$('#HiddeN_projectdragh').val(h);
					
					xII=event.clientX;
					var w=Math.abs(xII-xI);	
					$('#HiddeN_projectdragw').val(w);
								
					$('#MenU_pagebrowserframe').css({top:(yI-50)+'px',left:xI+'px',width:w+'px',height:h+'px',display:'block'});
				}
			});
		},
		mouseup:function(){
			$('#CONTENT').off('mousemove');
			var dragw=$('#HiddeN_projectdragw').val();
			var w=parseInt(dragw,10);
			
			var dragh=$('#HiddeN_projectdragw').val();
			var h=parseInt(dragh,10);
			
			var l=$('.mCSB_container .frame').length;
			if((w>=50 || h>=50) && l==0){
				var dragw=$('#HiddeN_projectdragw').val('');
				var dragw=$('#HiddeN_projectdragh').val('');
				$('#MenU_pagebrowserframe').css({display:'none'});								
				InserT_frame();
			}else{
				$('#MenU_pagebrowserframe').css({display:'none'});				
			}
		}
	});		
}

//Insert a frame:Action	 
$(function(){
	/* Very Important code don't delete */
	//Insert a frame:drag
//	$('#CONTENT').bind({
//		mousedown:function(event){
//			yI=event.clientY;
//			xI=event.clientX;
//			$(this).mousemove(function(event){
//				yII=event.clientY;
//				var h=Math.abs(yII-yI);
//				$('#HiddeN_projectdragh').val(h);
//				
//				xII=event.clientX;
//				var w=Math.abs(xII-xI);	
//				$('#HiddeN_projectdragw').val(w);
//							
//				$('#MenU_pagebrowserframe').css({top:(yI-50)+'px',left:xI+'px',width:w+'px',height:h+'px',display:'block'});
//			});
//		},
//		mouseup:function(){
//			$('#CONTENT').off('mousemove');
//			var dragw=$('#HiddeN_projectdragw').val();
//			var w=parseInt(dragw,10);
//			
//			var dragh=$('#HiddeN_projectdragw').val();
//			var h=parseInt(dragh,10);
//			if(w>=50 || h>=50){
//				var dragw=$('#HiddeN_projectdragw').val('');
//				var dragw=$('#HiddeN_projectdragh').val('');
//				$('#MenU_pagebrowserframe').css({display:'none'});				
//				CreatE_frame();
//			}else{
//				$('#MenU_pagebrowserframe').css({display:'none'});				
//			}
//		}
//	});
	//Insert a frame:page
//	$('#CONTENT').click(function(){
//	var framel=$('.mCSB_container .frame').length;
//	if(framel=0){
		DraG_frame();		
//	}	
//	});	
	//Insert a frame:tool
	$('#FramEtoolinsert').click(function(){
		InserT_frame();
	});	
})


	 			
	/*Custom the ContentCustom the ContentCustom the ContentCustom the Content
	 */
		//Custom the Content level1:Function
		function FramE_level1(){		
			$('#CONTENT .frame').click(function(){	 		
				this.onkeydown=function(event){
					n=event.which;
					var id=$(this).attr('id');
	                                    				
					var level1='#'+id+' p';				
					var l=$(level1).length;
					if(l<=0 && n==13){						
						var conI=$(this).text();		
						var conII="<p class='framelevel1 framelevel1-lang'>"+conI+"<br class='framelevel1-br'/></p>"+"<p class='framelevel1 framelevel1-lang'><br class='framelevel1-br'/></p>";
						$(this).html(conII);

	                                    		var br='#'+id+" br[class!='framelevel1-br']";
	                                    		setTimeout("$("+'"'+br+'"'+").remove();",250);		
					}													
				}						
			});							
		}
		$(function(){
			//Custom the Content level1:Action	
			setInterval('FramE_level1()',250);	
		}) 		 
		/*PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE*/

		//TOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOL
	
	//TOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOL

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/