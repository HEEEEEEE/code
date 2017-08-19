/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

		/*echo infoecho infoecho infoecho infoecho infoecho infoecho infoecho info*/                         
/*echo info:Function*/
function show_sourcemoreinfo(full){
	  	  /*start start start start start*/
		  //id
		  var id=$('#HiddeN_projectitemid').val();
		  var id=id.match(/\d{1,12}/);	  	  
		  //aid
		  var aid=$('#HiddeN_projectcaid').val(); 
		  //cid      
		  var cid=$('#HiddeN_projectcid').val(); 
		  //caname
		  var caname=$('#BasicA_name').attr('title');
		  var model = new RegExp(/&|\+/gi);
		  var result = model.test(cname);	
		  if(result){	
			var caname=caname.replace(/&/gi,'%26');
			var caname=caname.replace(/\+/gi,'%2B');
		  }		  
		  //cname
		  var cname=$('#BasicC_name').attr('title');		  
		  var model = new RegExp(/&|\+/gi);
		  var result = model.test(cname);	
		  if(result){	
			var cname=cname.replace(/&/gi,'%26');
			var cname=cname.replace(/\+/gi,'%2B');
		  }		  
//		  alert('id='+id+'&aid='+aid+'&cid='+cid+'&caname='+caname+'&cname='+cname);	  	  
		  xmlhttp=$.ajax({
		  	//set the request url
		  	url:PROJECTDIR+"close/source/pictu/showmoreinfoA.php?action=source_showmoreinfo",
		  	//set the request way
		  	type:'POST',
		  	//set the post data
		  	data:'id='+id+'&aid='+aid+'&cid='+cid+'&caname='+caname+'&cname='+cname+'&full='+full,
		  	//set return data type
		  	dataType:'html',		  
		            //set function for success		            
		  /*end end end end end*/
		  success:function(){
			  //return the data
			  result=xmlhttp.responseText;
			  //deal the data
		  	  result_showmoreinfo(result); 
				//hide
				$('#MoreinfohidE').click(function(){
					$("#SourcemoreinfO").css('display','none');			
				});
				$('#HideareaforesC').resize(function(){
					$("#SourcemoreinfO").css('display','none');			
				});						  	  		
		  	},
		  });	
}
/*Function:show the ajaxresult*/
function result_showmoreinfo(result){
		$("#LefT_sourcemoreinfo").html(result);
		$("#SourcemoreinfO").css('display','block');
	
}
		/*echo infoecho infoecho infoecho infoecho infoecho infoecho infoecho info*/  
/*echo info:Action*/
$(function(){
	//show
	$('#MoreinfO').click(function(){
		var full='showmoreinfo';
		show_sourcemoreinfo(full);			
	});
	
	$('#MoreinfO_full').click(function(){
		var full='showmoreinfofull';
		show_sourcemoreinfo(full);			
	});			
})		