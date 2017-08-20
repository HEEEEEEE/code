/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*echo the item echo the item echo the item echo the item echo the item*/
function IdeA_process(){
	//check the idea processstate
	var processState=$('.idea_own-basicinfo-processstate').val();
	//process
	if(processState == '0'){
 		//css change
 		$('#LinK_html_process').attr('href',ROOTDIR+'html/works/works/process/process.css?'+Math.random());	
		
		//idea
		$('.idea_own-center-tool-processstart-con-processtime').css('display','none');	
			
		$('.idea_own-center-tool-processstart-con-processing').css('display','block');
			$('#CenteR_contentleftborder,.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processstop').css('display','none');
				$('.idea_own-center-tool-processstart').css('backgroundColor','rgba(0,0,0,0.5)');

		//process
		WorkS_processmenushow_process();				
	//processing			
	}else if(processState == '1'){
 		//css change
 		$('#LinK_html_process').attr('href',ROOTDIR+'html/works/works/process/processing.css?'+Math.random());	
		
		//idea
		$('.idea_own-center-tool-processstart-con-processprocessing').css('display','none');
				
		$('.idea_own-center-tool-processstart-con-processing').css('display','block');
			$('#CenteR_contentleftborder,.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processstop').css('display','none');
				$('.idea_own-center-tool-processstart').css('backgroundColor','rgba(0,0,0,0.5)');		
		
		//process
		WorkS_processmenushow_processing();	
	}	
}
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/
//custom the item:function
$(function(){
	$('.idea_processs-gif').mouseover(function(){
		var imgUrl=ROOTDIR+'data/image/works/left/process.png';
		$(this).attr('src',imgUrl);			
	});
	$('.idea_processs-gif').mouseout(function(){
		var imgUrl=ROOTDIR+'data/image/works/left/process.gif';
		$(this).attr('src',imgUrl);			
	});
		
	var getIdea=$('#HiddeN_GETideaid').val();
	if(getIdea=='1'){
		IdeA_process();
		
		$('.idea_own-center-tool-processstart-con-processing').on('mouseover',function(){
			$('.idea_own-center-tool-processstart-con-processstop').css('display','block');
			$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processing').css('display','none');			
		});
		$('.idea_own-center-tool-processstart-con-processstop').on('mouseout',function(){
			$('.idea_own-center-tool-processstart-con-processing').css('display','block');
			$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processstop').css('display','none');			
		});
		
		$('#LefT_contentmain2').css('opacity','0.5');		
	}
	
	//processprocessprocessprocessprocessprocessprocessprocessprocessprocess
	//process:start or processing		
	$('.starttoprocess').click(function(){						
		IdeA_process();
		
		$('.idea_own-center-tool-processstart-con-processing').on('mouseover',function(){
			$('.idea_own-center-tool-processstart-con-processstop').css('display','block');
			$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processing').css('display','none');			
		});
		$('.idea_own-center-tool-processstart-con-processstop').on('mouseout',function(){
			$('.idea_own-center-tool-processstart-con-processing').css('display','block');
			$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processstop').css('display','none');			
		});
		
		$('#LefT_contentmain2').css('opacity','0.5');
						 
	});
	//process:processing
	$('.idea_own-center-tool-processstart-con-processing').mouseover(function(){
		$('.idea_own-center-tool-processstart-con-processstop').css('display','block');
		$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processing').css('display','none');			
	});
	$('.idea_own-center-tool-processstart-con-processstop').mouseout(function(){
		$('.idea_own-center-tool-processstart-con-processing').css('display','block');
		$('.idea_own-center-tool-processstart-con,.idea_own-center-tool-processstart-con-processstop').css('display','none');			
	});
	//process:stop
	$('.idea_own-center-tool-processstart-con-processstop').click(function(){
		$('.idea_own-center-tool-processstart-con-processing').off('mouseover');
		$('.idea_own-center-tool-processstart-con-processstop').off('mouseout');
		
		//idea
		$('#CenteR_contentleftborder,.idea_own-center-tool-processstart-con-processtime,.idea_own-center-tool-processstart-con-processprocessing,.idea_own-center-tool-processstart-con').css('display','block');
		$('.idea_own-center-tool-processstart-con-processing,.idea_own-center-tool-processstart-con-processstop').css('display','none');
		$('.idea_own-center-tool-processstart').css('backgroundColor','rgba(0,0,0,0)');
		
		$('#LefT_contentmain2').css('opacity','1');
		
		$('#CenteR_contentprocess').css({display:'none'});
		$('#CenteR_contentprocess').empty();									
	});			
	//processprocessprocessprocessprocessprocessprocessprocessprocessprocess
})
/*custom the itemcustom the itemcustom the itemcustom the itemcustom the item*/




















