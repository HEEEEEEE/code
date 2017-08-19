
<div id='Tips' style='display:none;width:;height:25px;position:fixed;top:0;left:0;z-index:50000000;'>
	<div id='Tips_Content' style='width:100%;height:100%;background:rgba(255,255,255,0.75);margin:0 auto;'>
		<span id='Tips_ContentA' style='display:block;width:100%;height:100%;margin:0 auto;text-align:center;line-height:25px;font-size:15px;cursor:text;)' ></span>
	</div>
</div>
<script charset='utf-8'>
	$(function(){
		$('.loginTips').click(function(){
			var height=$(this).height();
			var width=$(this).width();
			var o=$(this).offset();
			var oLeft=o.left;
			var oTop=o.top;

			var tipsWidth=$('Tips').width();
			var tipsLeft=oLeft-width+12.5;
			var tipsTop=oTop+height-12.5;
			
			$('#Tips_ContentA').text('请先登录！').css({color:'rgba(255,0,0,1)'});
			$('#Tips').css({left:tipsLeft,top:tipsTop,display:'block'});
			setTimeout("$('#Tips').css('display','none');","2500");
		});	
	})
				
</script>	