<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_prelan'){
	//Include each
	require substr(dirname(__FILE__),0,-22).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	$data=array();
	$data['id']=string_filterlesstomore($_POST['id'],0,25);
	$data['des']=string_filterless($_POST['des'],125);	
	//Save the infor
	$result=sql("UPDATE
		     he_idea
		    SET
		     lanspre='{$data['des']}'
		 WHERE
		     id='{$data['id']}'
		   AND
		     hid='{$_COOKIE['userid']}'
		");	
	if($result){
		closeMS();		
		ajaxreturn('idea_prelansuccess');
	}else{
		closeMS();
		ajaxreturn('idea_prelanfail');		
	}			
}
//       database database database database database database
//FielD
/*
 *   id
 *    lans
 *      image
 *    processstate
 *createtime
 *   //
 *   deletetime
 *      perpmoretime
 *   //
 *************************************************************
 */
?>



