
                          /*Custom the scroll Custom the scroll Custom the scroll*/
/*Custom the scroll:FUNCTION*/                         
function Cscroll(){
	$('#BodY_scroll').mCustomScrollbar(
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
}
/*Custom the scroll:ACTION*/
$(function(){
	Cscroll();
})
                          /*Custom the scroll Custom the scroll Custom the scroll*/


$(function(){
	/*Custom the included title Custom the included title Custom the included title
	 */
	var title=$('#BasicF_username').attr('title');
	var title='OCLOCLO '+title+" > Home";
	$('title').text(title);
		 	
	/*Custom the included top's cssCustom the included top's cssCustom the included top's css
	 */
	$('#ToP').css('backgroundColor','rgb(0,0,0)');
	/*Custom the PtprocesscenteR_closeown
	 * 
	 * 
	 * 
	 */
	 //Custom the search
	 $("#CloseitemsearcH_input").one('click',function(){
	 	$(this).val('');
	 });		
})

/*hide the menu:function*/
function IdeA_deletemenuhide(){
		$('#MenU_ideadeltop').css('display','none');
	$('#MenU_ideadel').css('display','none');	
}
/*OperatE the menuOperatE the menuOperatE the menuOperatE the menu
 */
//OperatE the menu:function
function OperatE_deletemenu(){	
            /*custom the menucustom the menucustom the menucustom the menu
             * 
             * 
             */
	/*more menumore menumore menumore menumore menumore menumore menumore menumore menumore menumore menu
	 */
	 //showshowshowshowshow
	$('.closesettings').click(function(e){
		//more
		         var id=e.target.id;
		            var id='#'+id;
		var o=$(id).offset();
		var ptop=((o.top)+20)+'px';
		var pleft=((o.left)-40)+'px';
		$('#MenU_ideatoolmore').css({top:ptop,left:pleft,display:'block'});
		
		//more:delete		
		$('#MenU_ideatoolmore_delete').click(function(){
			showTheCloseDeleteMenu();									
		});
	}); 
	//hide
	$('html').mouseup(function(e){
		$('#MenU_ideatoolmore').css('display','none');  
	}); 	
          					 	
}







