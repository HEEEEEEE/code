/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/








/*action action action action action action action action action action a*/
$(function(){
	
})
/*action action action action action action action action action action a*/










/*function function function function function function function function*/
function Idea_LoadMore(){
	//tipstipstipstipstipstipstipstipstipstipstipstipstipstips
	var w=$('#CategorY_centercon').width();
	var o=$('#CategorY_centercon').offset();
	var pleft=((o.left)+w/2)+'px';				
	$('#LoadiN_tip1').css({top:'auto',bottom:'25px',left:pleft});	
									
            var tip="<span style='color:rgb(255,125,0);'>"+"loading..."+"</span>";
            $('#LoadiN_tipstr1').html(tip);
	$('#LoadiN_tip1').css('display','block'); 
		
	/*datadatadatadatadatadatadatadatadatadatadatadatadatadat
	 * 
	 */
	var idea_num=$('.idea_catego').length;
	var idea_id=$('.idea_catego:last').attr('data-id');
	var hid=$('#HiddeN_hid').val();
	var url=ROOTDIR+'html/explore/idea/catego/loadMore.php?action=idea_loadMore';

	//postpostpostpostpostpostpostpostpostpostpostpostpostpost	
	var xmlhttp=$.ajax({
		url:url,
		type:'POST',
		data:'&idea_num='+idea_num+'&idea_id='+idea_id,
		datatype:'html',
		success:function(){
			var result=xmlhttp.responseText;
			Result_IdeaLoadMore(result);
			IdeA_customcatego();			
		},
		
	});
	
}
function Result_IdeaLoadMore(result){
	if(result.length>125){
		//echo search
		$('.idea_ownloadMoreyesornoHidden').remove();
		$('#CategorY_centercon').append(result);	
		//style
		var frameW=$('#CategorY_centercon').width();
		var ideaMargin=(frameW-3*325)/2;
		$(".idea_catego").css({marginLeft:ideaMargin+'px',marginBottom:ideaMargin+'px'});
		$(".idea_catego:nth-child(3n+1)").css({marginLeft:0});		
		//hidden tips
		$('#LoadiN_tip1').css({display:'none',top:0,bottom:'auto',left:0});	
		$('#LoadiN_tipstr1').html('');		
	}else{
		$('#UnknowerroR').css('display','block');		
	}
	
}
/*function function function function function function function function*/