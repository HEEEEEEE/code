<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_tag'){
	//Include each
	require substr(dirname(__FILE__),0,-20).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	$data=array();
	$data['id']=string_filterlesstomore($_POST['id'],0,25);
	$data['tag']=string_filterless($_POST['tag'],64);	
	//Save the infor
	$result=sql("UPDATE
		     he_idea
		    SET
		     tag='{$data['tag']}'
		 WHERE
		     id='{$data['id']}'
		   AND
		     hid='{$_COOKIE['userid']}'
		");	
	if($result){
		closeMS();		
		ajaxreturn('idea_tagsuccess');
	}else{
		closeMS();
		ajaxreturn('idea_tagfail');		
	}			
}
else{
	exit('idea_tagactionfail');
}
?>



