/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/
	//ROOTDIR
	var ROOTDIR=document.getElementById('HiddeN_rootdir').value;
	//PROJECTDIR
	var PROJECTDIR=document.getElementById('HiddeN_projectdir').value;
/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/

	/*PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE*/	 	
	/*SAVESAVESAVESAVESAVESAVESAVESAVESAVESAVE
	 *
	 *  
	 */
/*filter the infowhensave*/
//filter the infowhensave:function
function save_filter(){
}	 
		/*save the infosave the infosave the infosave the info*/                         
/*save the info:Function*/
function save_info(){
	/*Set the data:*/
	//id
	var id=$("#HiddeN_projectciid").val();		
		 	  	
	//con
            var con=$('.mCSB_container').html();
	var model = new RegExp(/&|\+/gi);
	var result = model.test(con);	
	if(result){	
		var con=con.replace(/&/gi,'%26');
		var con=con.replace(/\+/gi,'%2B');
	}
	//cid
	var cid=$('#HiddeN_projectcid').val();
	
//	alert(id+';'+con+';'+cid);	           
		/*AJAX*/
		     /*Start:create a AJAX object*/
		     xmlhttp=$.ajax({
		     	url:PROJECTDIR+"close/infi/langu/saveA.php?action=info_save",
		     	type:"POST",
		     	data:'id='+id+'&con='+con+'&cid='+cid,
		     	datatype:'text',
		     	success:function(){
				result=xmlhttp.responseText;
				result_save(result);	     		
		     	},
		     });
		      /*End:create a AJAX object*/    			    		    	  	  	  	
		/*AJAX*/	
}
/*Function:set the ajaxresult*/
function result_save(result){
	/*Saveecho:inforsucceed*/
	var match=/^infor:savesucceed/i.test(result);		
	if(match==true){					 	
	}
}
		/*filter the infofilter the infofilter the infofilter the info*/                         
/*filter the info:Function*/
function filter_info(){
	save_info();
}
//filter the info:action
$(function(){
	
})
		/*post the data post the data post the data post the data post the data*/
//post the data:function		
function post_info(){
	filter_info();		
}
//post the data:action
$(function(){
var stop
	//time to save time t o save time to save
//	$('#CONTENT').click(function(){
		sto=setInterval('post_info()',25000);
//	});
	//click to saveclick to saveclick to save
	$('#SavEtool').click(function(){
		post_info();
		clearInterval(sto);
		$(this).css('display','none');	
		$('#TooL_file1 #SavenOtool').css('display','block');
	});	
	$('#TooL').mouseup(function(){
		$('#TooL_file1 #SavEtool').css('display','block');	
		$('#TooL_file1 #SavenOtool').css('display','none');
	});	
})
		/*post the data post the data post the data post the data post the data*/
/*save the infosave the infosave the infosave the info*/ 	 
	/*PAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGEPAGE*/

	//TOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOL
	
	//TOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOLTOOL

/*INFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFOINFO*/


