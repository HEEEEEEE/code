/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/



/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
//show IdeA num:function
function IdeA_numshow(){
	var itemnum=$('#IdeanuM_close').text();
	var num=parseInt(itemnum,10);
	if(!(num>0)){
		$('#LefT_div1').css("height",'100%');
		$('#LefT_div1').css("bottom",'0');
		$('#LefT_contentcenter').css("backgroundColor",'rgba(25,25,25,0.05)');
		$('#LefT_contentcentertop').css("backgroundColor",'rgba(255,75,0,1)');
		$('#IdeanuM_2,#IdeanuM_3').css("display",'none');
		$('#IdeanuM_1').css('margin','0 auto');	
		$('#IdeanuM_1').css('float','none');
		$('#IdeanuM_1 .ideanum-num').css('color','rgba(50,25,0,1)');
		$('#LefT_contentcentercenterdiv1').css("display",'block');						
	}	
}
$(function(){
	//show IdeA num:action
	IdeA_numshow();			
})