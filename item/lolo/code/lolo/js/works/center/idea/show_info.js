/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/


$(function(){
	/*
	*preprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepreprepre  
	 */
	 
	 /*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 
	 //tooltooltooltooltooltool
	 //idea lans pre tool show	
	$('#DisassemblE2_lanspreadd').click(function(){		
		var o=$('#DisassemblE2_center-con').offset();
			              var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';			
		$('#MenU_ideaprelanin').css({top:ptop,left:pleft});			
		$('#MenU_ideaprelan').css({display:'block'});				
	});
	//change
	//mouseover
	$('#DisassemblE2_lansp1').mouseover(function(){
		$('#DisassemblE2_lansprechange').css({display:'block'});
	});
	$('#DisassemblE2_lansp1').mouseleave(function(){
		$('#DisassemblE2_lansprechange').css({display:'none'});
	});
	//click
	$('#DisassemblE2_lansprechange').click(function(e){		
		//give the pre con to pre tool		
		var prelans=$('#DisassemblE2_lanspre').text();
				
		$('#PrelanboX').text(prelans);
		$('#PrelanboX').removeClass('prelanholder');
		$('#PrelanboX').css('color','rgba(255,255,255,1)');			
                        //count out the enterable num
		var tex=prelans.length;
		var tex=125 - tex;
		$('#PrelaN_enteralbenum').text(tex);		
												
		//show idea lans pre tool 
		var o=$('#DisassemblE2_center-con').offset();
			            var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';			
		$('#MenU_ideaprelanin').css({top:ptop,left:pleft});			
		$('#MenU_ideaprelan').css({display:'block'});				                        					
	});			
	/*lanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanlanl*/ 



	 /*imageimageimageimageimageimageimageimageimageimageimageimage*/	 	 
	 //tooltooltooltooltooltooltooltoolto
	 //idea image pre tool show	
	$('#DisassemblE2_imagepreadd').click(function(){		
		var o=$('#DisassemblE2_center-con').offset();
			                var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';				
		$('#MenU_ideapreimagein').css({top:ptop,left:pleft});			
		$('#MenU_ideapreimage').css({display:'block'});					
	});
	
	//change clear show
	//mouseover
	$('#DisassemblE2_imagep1').mouseover(function(){
		$('#DisassemblE2_imageprechange,#DisassemblE2_imagepreclear').css('display','block');
	});
	$('#DisassemblE2_imagep1').mouseleave(function(){
		$('#DisassemblE2_imageprechange,#DisassemblE2_imagepreclear').css('display','none');
	});
	//change
	$('#DisassemblE2_imageprechange').click(function(e){		
		var o=$('#DisassemblE2_center-con').offset();
			                var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';				
		$('#MenU_ideapreimagein').css({top:ptop,left:pleft});			
		$('#MenU_ideapreimage').css({display:'block'});	
		
		$('#PrE_imageupload').css({display:'block'});
		$('#PrE_imageuploadbrowser').css('display','none');					
	});
	
	//clear
	$('#DisassemblE2_imagepreclear').click(function(e){
		var o=$('#DisassemblE2_center-con').offset();
			                 var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';		
		$('#MenU_preimageclearin').css({top:ptop,left:pleft});			
		$('#MenU_preimageclear').css({display:'block'});																
	});		 	
	  /*imageimageimageimageimageimageimageimageimageimageimageimage*/
	  
	  
	  
           //tagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtagtag		
	$('#DisassemblE3_tagadd').click(function(){
		var o=$('#DisassemblE3_center-con').offset();
			                 var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';				
		      $('#MenU_ideatagin').css({top:ptop,left:pleft});			
		$('#MenU_ideatag').css({display:'block'});						
	});
	//change
	//mouseover
	$('#DisassemblE3_tag1').mouseover(function(){
		$('#DisassemblE3_tagchange').css({display:'block'});
	});
	$('#DisassemblE3_tag1').mouseleave(function(){
		$('#DisassemblE3_tagchange').css({display:'none'});
	});
	//click	
	$('#DisassemblE3_tagchange').click(function(){
		var tag=$('#DisassemblE3_tag').text();	
		var tag=tag.split(' ');	
		var tag=tag.join(',');	
		$('#TaG_entercon').val(tag);
									
		var o=$('#DisassemblE3_center-con').offset();
			                 var ptop=(o.top)+75+'px';
		      var pleft=(o.left)-105+'px';				
		      $('#MenU_ideatagin').css({top:ptop,left:pleft});			
		$('#MenU_ideatag').css({display:'block'});					
	});		  
})










