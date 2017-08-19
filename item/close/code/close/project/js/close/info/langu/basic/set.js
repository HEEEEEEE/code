/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/				
		
				/*FrameFrameFrameFrameFrameFrameFrameFrame*/
		//State:border_hide or show
//State:border_hide or show:Function
function FramE_borderhors(){
	var borderW=$('#CONTENT .frame').css('borderTopWidth');
	if(borderW=='0px'){
		$('#TooL_fram2  #FramEtoolhide').css('display','none');
		$('#TooL_fram2  #FramEtoolshow').css('display','block');
	}
	else{
		$('#TooL_fram2  #FramEtoolhide').css('display','block');
		$('#TooL_fram2  #FramEtoolshow').css('display','none');		
	}		
}
//State:border_hide or show:Action
$(function(){
	$('#FramEtoolhide').click(function(){
		$('#CONTENT .frame').css({borderTopWidth:'0px',borderBottomWidth:'0px'});
		$(this).css('display','none');
		$('#FramEtoolshow').css('display','block');
	});
	$('#FramEtoolshow').click(function(){
		$('#CONTENT .frame').css({borderTopWidth:'2.5px',borderBottomWidth:'2.5px'});
		$(this).css('display','none');
		$('#FramEtoolhide').css('display','block');
	})	
})
	/*frame:menutoremove frame:menutoremove*/
//menutoshowframe:Function
function menutoshowframe(){
	var L=$('.mCSB_container .frame').length;
	for(i=1;i<=L;i++){
		var framemenur="<div id='FramE_menur"+i+"'"+" class='framemenur'></div>";
		$('#MenU_frameremcon').append(framemenur);		
	}
	
}
//menutoshowframe:Action	
$(function(){	
	$("#FramEtoolremove").click(function(){		
		var L=$('.mCSB_container .frame').length;
		$('#IteM_numshow').text(L);
		$(this).css('display','none');
		$("#FramEtoolremoveno").css('display','block');
		menutoshowframe();
		framemenur_select();
		
		$('#FramEtoolinsert,#FramEtoolhide,#FramEtoolshow').css('display','none');
		$('#MenU_toolframe').css('display','block');	
	});
	$("#FramEtoolremoveno").click(function(){
		$('.frame').css({borderRightWidth:'0',borderLeftWidth:'0'});
		
		$(this).css('display','none');
		$("#FramEtoolremove").css('display','block');
		//item select:numhide
		$('#ItemselecT_numshowdt').css('display','none')
		$('#ItemselecT_numshow').text(''); 
				
		$('#MenU_frameremcon').html('');
		$('#FramEtoolinsert,#FramEtoolhide,#FramEtoolshow').css('display','block');
		$('#MenU_toolframe').css('display','none');
	});
})	
	
		/*Select the item:set or delete Select the item:set or delete*/
/*Select the menu item:Function*/
function framemenur_select(){
	/*select the framemenur*/	
//	var start = null;	
	$(".framemenur").click(function(event){                                      		
	    //item select more:shift
//                if (event.shiftKey) {
//	                    var si = $(start).index(), ti = $(this).index();                    
//	                    var sel = $(".framemenur").slice(Math.min(si, ti), Math.max(si, ti) + 1);
//	                    sel.addClass("framemenur-selected");
//		        framemenur_conselsame();
//		       //item select:numshow
//		       var l=$('.framemenur-selected').length;
//		       $('#ItemselecT_numshowdt').css('display','inline')
//		       $('#ItemselecT_numshow').text(l);                      
//	                    return false;
//                }
//                
//	    //item select more:ctrl	
//                if (event.ctrlKey) {                                       
//                }
                			
	    //item select one
//                start = this;            
                
                //selected element display
                $(this).addClass("framemenur-selected"); 
		var objecta=$('.framemenur-selected').toArray();
		var idsf=objecta[0].id;
		var idnf=idsf.match(/\d{1,12}/);
		var idnf=parseInt(idnf,10);
		var L=$('.framemenur-selected').length;
		var L=L+idnf;
		for(i=idnf;i<L;i++){
			var id='.frame:nth-child('+idnf+')';
			$(id).css({borderBottomWidth:'2.5px',borderRightWidth:'2.5px',borderBottomColor:'rgba(255,0,0,1)',borderRightColor:'rgba(255,0,0,1)'});
		}
	    //item select:numshow
//	    var l=$('.framemenur-selected').length;
//	    $('#ItemselecT_numshowdt').css('display','inline')
//	    $('#ItemselecT_numshow').text(l);                    	
									
	});
	//item select more:ctrl
//	$('html').keydown(function(event){
//		keyN=event.which;                  		        		        			                			
//                        if(keyN==17){
//                        	$("#MenU_frameremcon,.framemenur").off('mouseup');      		
//                        }
//	});
//
//	$('html').keyup(function(event){
//		keyN=event.which;		
//                        if(keyN==17){
//                        	$("#MenU_frameremcon").on('mouseup',function(){				
//				$(".framemenur").removeClass('framemenur-selected');
//		                        $('.frame').css({borderBottomWidth:'0',borderRightWidth:'0'});  		
//				//item select:numhide
//				$('#ItemselecT_numshowdt').css('display','none')
//				$('#ItemselecT_numshow').text('');                       		
//                        	});                        	
//                        }
//	});
	
	/*no select the framemenur*/	
	$("#MenU_frameremcenter").mouseup(function(){
		$(".framemenur").removeClass('framemenur-selected');
		
		$('.frame').css({borderBottomWidth:'0',borderRightWidth:'0'});	
			                          		
		//item select:numhide
//		$('#ItemselecT_numshowdt').css('display','none')
//		$('#ItemselecT_numshow').text(''); 													
	});		 		
}
		/*Select the item:set or delete Select the item:set or delete*/

	/*remove the item remove the item remove*/
/*remove the item:Function*/
function framemenur_remove(){
	var objecta=$('.framemenur-selected').toArray();
	var idsf=objecta[0].id;
	var idnf=idsf.match(/\d{1,12}/);
	var idnf=parseInt(idnf,10);
	var L=$('.framemenur-selected').length;
	var L=L+idnf;
	for(i=idnf;i<L;i++){
		var idmen='.framemenur-selected';
		var idcon='.frame:nth-child('+idnf+')';
		$(idmen).remove();
		var num=$('#IteM_numshow').text();
		var num=parseInt(num,10);
		$('#IteM_numshow').text(num-1);
		
		$(idcon).remove();
	}
}
/*remove the item:Action*/
$(function(){
	$('#FrameremovedonE').click(function(){
		framemenur_remove();
	});
})	
/*remove the item remove the*/		
	/*frame:menutoremove frame:menutoremove*/
			/*FrameFrameFrameFrameFrameFrame*/	
	
			/*LangLangLangLangLangLangLangLangLangLangLang*/
	//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
//pagelangselected:Function
function PagE_selectlang(){
//	$(".frame").mouseup(function(){		
//		var text = document.getSelection();
//		if(text!=''){
			FontsizE();
			BolD();
			ItaliC();
//		}
//	});	

}
	//PagEPagEPagEPagEPagEPagEPagEPagEPagEPagE
	
	//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL
/*basicbasicbasicbasicbasicbasic*/	
//menutoshow_lang:Function
function menutoshowlang(){
}
//menutoshow_lang:Action	
$(function(){	
	$("#FontsizEtool").click(function(){		
		$(this).css('display','none');
		$("#FontsizenOtool").css('display','block');
		$('#MenU_toolfontsize').css('display','block');	
	});
	$("#FontsizenOtool,#FontsizemenU").mouseup(function(){		
		$('#FontsizenOtool').css('display','none');
		$("#FontsizEtool").css('display','block');
		$('#MenU_toolfontsize').css('display','none');
	});
	$("#FontsizemenU").mouseleave(function(){		
		$('#FontsizenOtool').css('display','none');
		$("#FontsizEtool").css('display','block');
		$('#MenU_toolfontsize').css('display','none');
	});	
})
	//menutoshow_lang:Mouse
	$(function(){
	
	var spanFS=$('#FontsizemenU span');    
	for(i=0;i<spanFS.length;i++){    
		spanFS[i].onmouseover=function(){
			this.style.color='rgb(0,0,0)';
			this.style.backgroundColor='rgb(255,255,255)';
		}
		spanFS[i].onmouseout=function(){
			this.style.color='rgb(255,255,255)';
			this.style.backgroundColor='rgb(0,0,0)';
		}
	}

})
/*basicbasicbasicbasicbasicbasic*/

/*finishfinishfinishfinishfinish*/	
//fontsize:Function
function FontsizE(){	
	var spanFS=$('#FontsizemenU span');
	for(i=0;i<spanFS.length;i++){	
		spanFS[i].onmousedown=function(){
			var S=$(this).attr('class');
//			var LangSHTML="<span class='framelevel2span' style='font-size:"+S+";"+"line-height:"+S+"'>"+text+"</span>";
			document.execCommand('FontSize',false,S);
			$("font[size='3']").css('lineHeight','16px');
			$("font[size='4']").css('lineHeight','18px');
			$("font[size='5']").css('lineHeight','24px');
			$("font[size='6']").css('lineHeight','32px');
			$("font[size='7']").css('lineHeight','48px');
		}
	}

}
//bold:Function
function BolD(){	
	var LangB=$('#BolDtool');
	for(i=0;i<LangB.length;i++){	
		LangB[i].onmousedown=function(){
//			var LangBHTML="<span class='framelevel2span' style='font-weight:900;'>"+text+"</span>";
			document.execCommand('Bold',false);
		}
	}
}
//ItaliC:Function
function ItaliC(){	
	var LangI=$('#ItaliCtool');
	for(i=0;i<LangI.length;i++){	
		LangI[i].onmousedown=function(){
//			var LangIHTML="<span class='framelevel2span' style='font-style:oblique;'>"+text+"</span>";
			document.execCommand('Italic',false);
		}
	}
}
/*finishfinishfinishfinishfinish*/
	//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL
			/*LangLangLangLangLangLangLangLangLangLangLang*/

/*EditEditEditEditEditEditEditEditEditEditEditEdit*/
//TooLTooLTooLTooLTooLTooLTooLTooLTooLTooL
//undo:Function
function UndO(){	
	$('#UndOtool').mousedown(function(){
		var frameid=$('#HiddeN_projectframeid').val();
		var frameid='#'+frameid;						
		$(frameid).focus();
		document.execCommand('Undo',false);
	});
}
//redo:Function
function RedO(){	
	$('#RedOtool').mousedown(function(){
		var frameid=$('#HiddeN_projectframeid').val();
		var frameid='#'+frameid;						
		$(frameid).focus();
		document.execCommand('Redo',false);
	});
}
/*EditEditEditEditEditEditEditEditEditEditEditEdit*/			
			
			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/			

/*PagE:choose a position
 *TooL:choose a source | set a source | Insert a source 
 *PagE:show a source
 *           mouseover:side to set or delete the source
 *                    click:top to set or delete the source
 *           dblclick:set a source 
 */
			/*SOURSOURSOURSOURSOURSOURSOURSOURSOURSOURSOUR*/
						
/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/