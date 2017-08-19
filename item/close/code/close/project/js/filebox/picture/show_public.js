/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
//	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the item:Function*/
function item_select_filebox(){
	/*Select the item:random*/
	itemnum=$('#HiddeN_projectfileboxitemnum').val();
	rando=Math.ceil(Math.random()*itemnum);	
	clas='.filebox-source:nth-child('+rando+')';
	$(clas).addClass('filebox-source-selected');	
	/*Select the item:when click*/	
	$(".filebox-source").click(function(){
		//Change the item css				
		var itemid=$(this).attr("id");
		var itemid='#'+itemid;
		$(itemid).addClass('filebox-source-selected');
		
		//Give the itemid to hiddeN
		$('#HiddeN_projectfileboxitemid').val(itemid);						
	});
	$(".filebox-source").mouseup(function(){		
		//Change the item css				
		$('.filebox-source').removeClass('filebox-source-selected');								
	});
			
}
/*Select the item:Action*/		
$(function(){	
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/


                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Fscroll(){
//	$('#FileboX_source').mCustomScrollbar(
//		{
//		 set_width:false,
//  		         set_height:false,
//  		 horizontalScroll:false,
//  		 scrollInertia:500,
//  		 scrollEasing:'easeInCubic',
//  		 mouseWheel:true,
//  		 autoDraggerLength:true,
//  		 	
//		 scrollButtons:
//		 	{
//		 enable:true,
//		 scrollType:"continuous",
//		 scrollSpeed:50,
//		 scrollAmount:50
//		 	},
//		 advanced:
//		 	{
//                            updateOnBrowserResize:true,
//                            updateOnContentResize:true,
//                            autoExpandHorizontalScroll:false,
//                            autoScrollOnFocus:true,  
//                         	},
//                         callbacks:{   onScrollStart:function(){}   } 	
//		 }	
//	);
	/*inside scroll inside scroll inside scroll inside scroll inside scrollinside scroll*/
	/*content area content area content area content area content area*/
//	           ._mCS_2  .mCSB_container
//		{display:block;
//		 opacity:1;
//			width:750px;height:;
//			background-color:rgb(,255,125,0);
//				border-radius:0;
//				border-shadow:none;
//				border-width:0;border-style:solid;border-color:rgb(0,0,0);
//		 z-index:5;			
//		}           		
	          /*scroll area scroll area scroll area scroll area scroll area*/		
//		._mCS_2 .mCSB_scrollTools
//		{display:block;
//		 opacity:1;
//			width:15px;height:;
//			background-color:rgb(,255,125,0);
//				border-radius:0;
//				border-shadow:none;
//				border-width:0;border-style:solid;border-color:rgb(0,0,0);
//		 z-index:6;			
//		}
//		
//			._mCS_2 .mCSB_scrollTools .mCSB_buttonUp
//			{display:none;
//			 opacity:0;
//				width:15px;height:0;
//			            background-color:rgb(0,0,0);
//					border-radius:0;
//					border-shadow:none;
//					border-width:0;border-style:solid;border-color:rgb(0,0,0);		
//			 z-index:5;			
//			}
//			._mCS_2 .mCSB_scrollTools a + .mCSB_draggerContainer{margin:0;}/*Delete the buttonUp and Bottom*/
//		            ._mCS_2 .mCSB_scrollTools .mCSB_draggerContainer
//			{display:block;
//			 opacity:1;
//				width:15px;height:;
//				background-color:rgb(,255,125,0);
//					border-radius:0;
//					border-shadow:none;
//					border-width:0;border-style:solid;border-color:rgb(0,0,0);
//			 z-index:6;			
//			}
//				._mCS_2 .mCSB_scrollTools .mCSB_draggerContainer .mCSB_dragger
//				{display:block;
//				 opacity:0.75;
//					width:15px;height:;
//					background-color:rgb(0,0,0);
//						border-radius:0;
//						border-shadow:none;
//						border-width:5px 0;border-style:double;border-color:rgb(255,255,255);	
//				 z-index:5;		
//				}	
//					._mCS_2 .mCSB_scrollTools .mCSB_draggerContainer .mCSB_dragger .mCSB_dragger_bar
//					{display:block;
//					 opacity:1;
//						width:7.5px;height:50%;
//						background-color:rgb(0,0,0);
//							border-radius:0;
//							border-shadow:none;
//							border-width:0 0 2.5px 0;border-style:solid;border-color:rgb(255,255,255);		
//					}	
//				._mCS_2 .mCSB_scrollTools .mCSB_draggerContainer .mCSB_dragger:hover{opacity:1;}
//		
//				._mCS_2 .mCSB_scrollTools .mCSB_draggerContainer .mCSB_draggerRail
//				{display:none;
//				 opacity:0;
//					width:2.5px;height:;
//					background-color:rgb(0,0,0);
//						border-radius:0;
//						border-shadow:none;
//						border-width:0;border-style:;border-color:;		
//				}
//		
//			._mCS_2 .mCSB_scrollTools .mCSB_buttonDown
//			{display:none;
//			 opacity:0;
//				width:15px;height:;
//			            background-color:rgb(0,0,0);
//					border-radius:0;
//					border-shadow:none;
//					border-width:0;border-style:solid;border-color:rgb(0,0,0);		
//			 z-index:5;			
//			}
	/*inside scroll inside scroll inside scroll inside scroll inside scrollinside scroll*/		     		
}
/*Custom the scroll:ACTION*/
$(function(){
//	Fscroll();
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/
                          
                          
/*when user done*/
function Selectdone(){
            /*Event:mouse*/
            //click:click the done
            $("#FileboX_done #SubmiT").click(function(){
            	var selected=$(".filebox-source-selected").length;
            	if(!(selected<=0)){
			//Give the itemid to hiddeN
			var itemid=$(".filebox-source-selected").attr("id");
			$('#HiddeN_projectfileboxitemid').val(itemid);
			
/*close close close close close*/					
			var addorset=$("#HiddeN_projectaddorset").val();
			if(addorset=='0'||addorset=='1'){
				if(addorset=='0'){
					/*for add*/	
					//Hide face add
					$('#ClosecM_cfaceadd').css('display','none');
					//Show the face
					var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
					$('#ClosecM_cfaceimg').attr('src',itemcon);
					$('#ClosecM_cface').css('display','block');
					//hide the filebox
					$('#AreA_source_filebox').css('display','none');
					
					$('#ClosecM_tip1').css('display','none');
				}
				else{
					/*for set*/	
					//Show the face
					var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
					$('#ClosesM_sfaceimg').attr('src',itemcon);
					//hide the filebox
					$('#AreA_source_filebox').css('display','none');			
				}				
			}
			else{
				/*album album album album album*/	
					//Hide face add
					$('#AlbumsM_sfaceadd').css('display','none');
					//Show the face
					var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
					$('#AlbumsM_sfaceimg').attr('src',itemcon);
					$('#AlbumsM_sface').css('display','block');
					//hide the filebox
					$('#AreA_source_filebox').css('display','none');
					
					$('#AlbumsM_tip1').css('top','190px');								
			}			            		
            	}			
	});
	//click:click the close
	$('#FileboX_titlecloseimg').click(function(){
		//hide the filebox
		$('#AreA_source_filebox').css('display','none');
			
	});
		
	//dbclickdbclickdbclickdbclickdbclick
            $(".filebox-source").dblclick(function(){
		//Give the itemid to hiddeN
		var itemid=$(".filebox-source-selected").attr("id");
		$('#HiddeN_projectfileboxitemid').val(itemid);
		
		/*close close close close close*/					
		var addorset=$("#HiddeN_projectaddorset").val();
		if(addorset=='0'||addorset=='1'){
			if(addorset=='0'){
				/*for add*/	
				//Hide face add
				$('#ClosecM_cfaceadd').css('display','none');
				//Show the face
				var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
				$('#ClosecM_cfaceimg').attr('src',itemcon);
				$('#ClosecM_cface').css('display','block');
				//hide the filebox
				$('#AreA_source_filebox').css('display','none');
				
				$('#ClosecM_tip1').css('display','none');
			}
			else{
				/*for set*/	
				//Show the face
				var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
				$('#ClosesM_sfaceimg').attr('src',itemcon);
				//hide the filebox
				$('#AreA_source_filebox').css('display','none');			
			}				
		}
		else{
			/*album album album album album*/	
				//Hide face add
				$('#AlbumsM_sfaceadd').css('display','none');
				//Show the face
				var itemcon=$(".filebox-source-selected .filebox-source-content").attr("data-src");
				$('#AlbumsM_sfaceimg').attr('src',itemcon);
				$('#AlbumsM_sface').css('display','block');
				//hide the filebox
				$('#AreA_source_filebox').css('display','none');
					
				$('#AlbumsM_tip1').css('top','190px');								
		}			            					
	});			
}
/*when user done*/















                        