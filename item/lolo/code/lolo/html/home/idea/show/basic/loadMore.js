/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/








/*action action action action action action action action action action a*/
$(function(){
	
})
/*action action action action action action action action action action a*/










/*function function function function function function function function*/
function Idea_LoadMore(loadMore){
	//tipstipstipstipstipstipstipstipstipstipstipstipstipstips
	var w=$('#IdeA').width();
	var o=$('#IdeA').offset();
	var pleft=((o.left)+w/2)+'px';				
	$('#LoadiN_tip1').css({top:'auto',bottom:'25px',left:pleft});	
									
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr1').html(tip);
	$('#LoadiN_tip1').css('display','block'); 
		
	/*datadatadatadatadatadatadatadatadatadatadatadatadatadat
	 * 
	 */
	if(loadMore=='001'){
		var idea_belong='mine';
		var idea_num=$('#IdeA_mine .idea_own').length;
		var idea_id=$('#IdeA_mine .idea_own:last').attr('data-id');
		var url=ROOTDIR+'html/home/idea/show/basic/mine_loadMore.php?action=idea_loadMore';
	}else if(loadMore=='002'){
		var idea_belong='notmine';
		var idea_num=$('#IdeA_notmine .idea_ownnotmine').length;
		var idea_id=$('#IdeA_notmine .idea_ownnotmine:last').attr('data-id');		
		var url=ROOTDIR+'html/home/idea/show/basic/notmine_loadMore.php?action=idea_loadMore';
	}

	//postpostpostpostpostpostpostpostpostpostpostpostpostpost	
	var xmlhttp=$.ajax({
		url:url,
		type:'POST',
		data:'idea_belong='+idea_belong+'&idea_num='+idea_num+'&idea_id='+idea_id,
		datatype:'html',
		success:function(){
			var result=xmlhttp.responseText;
			Result_IdeaLoadMore(result,loadMore);
			    IdeA_customown();
				IdeA_customownnotmine();			
		},
		
	});
	
}
function Result_IdeaLoadMore(result,loadMore){
	if(result.length>125){
		//echo search
		if(loadMore=='001'){
			$('.idea_ownloadMoreyesornoHidden').remove();
			$('#IdeA_mine').append(result);
		}else if(loadMore=='002'){
			$('.idea_ownnotmineloadMoreyesornoHidden').remove();
			$('#IdeA_notmine').append(result);
		}	
		
		//hidden tips
		$('#LoadiN_tip1').css({display:'none',top:0,bottom:'auto',left:0});	
		$('#LoadiN_tipstr1').html('');		
	}else{
		$('#UnknowerroR').css('display','block');		
	}
	
}
/*function function function function function function function function*/