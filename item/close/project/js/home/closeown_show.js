/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/





		/*echo the item echo the item echo the item echo the item echo the item*/                         
/*echo the item:Function*/
function show_close(sort,search,equal){
	/*Set the data:*/
	/*
	 *sort
	 *search  
	 * 
	 */
	var model = new RegExp(/&|\+/gi);
	var result = model.test(search);	
	if(result){	
		var search=search.replace(/&/gi,'%26');
		var search=search.replace(/\+/gi,'%2B');
	}	 		
	var data='sort='+sort+'&search='+search+'&equal='+equal;	
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"home/closeown/closeown_showA.php?action=close_show",
		     	type:'POST',
		     	data:'sort='+sort+'&search='+search+'&equal='+equal,
		     	datatype:'html',
		     	success:function(){
				result=xmlhttp.responseText;
				result_show(result);				
								
				item_select();
				
				OperatE_deletemenu();						     		
		     	},
		     });		    	  	  	  	
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:show the ajaxresult*/
function result_show(result){
	document.getElementById("CloseprocinsidE").innerHTML=result;	
}
/*echo the item:Function*/
$(function(){
	show_close('','','');	
})

function show_closecreate(sort,search,equal){
	/*Set the data:*/
	/*
	 *sort
	 *search  
	 * 
	 */
	var model = new RegExp(/&|\+/gi);
	var result = model.test(search);	
	if(result){	
		var search=search.replace(/&/gi,'%26');
		var search=search.replace(/\+/gi,'%2B');
	}	 		
	var data='sort='+sort+'&search='+search+'&equal='+equal;	
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"home/closeown/closeown_showA.php?action=close_show",
		     	type:'POST',
		     	data:'sort='+sort+'&search='+search+'&equal='+equal,
		     	datatype:'html',
		     	success:function(){
				result=xmlhttp.responseText;
				result_showcreate(result);
				
				var searchnum=$(".HiddeN_projectsearchitemnum").val();
				searchnum_show(searchnum);				
								
				item_select();
				
				OperatE_deletemenu();						     		
		     	},
		     });		    	  	  	  	
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:show the ajaxresult*/
function result_showcreate(result){
	$('#CloseprocinsidE').prepend(result);;
}
		/*echo the item echo the item echo the item echo the item echo the item*/
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/
/*Select the Close:Function*/
function item_select(){
	$("#CloseprocinsidE div[class='closediv']").click(function(){
		//Change the item css				
		var itemid=$(this).attr("id");
		var itemid='#'+itemid;
		
		//Give the itemid to hiddeN
		$('#HiddeN_projectitemid').val(itemid);						
	});		
}
/*Select the Close:Action*/		
$(function(){
	item_select();		
})
		/*Select the item:set or delete Select the item:set or delete Select the item:set or delete*/



