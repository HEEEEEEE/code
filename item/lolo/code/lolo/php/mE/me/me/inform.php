<?php 
if ($_GET['action'] == 'user_info'){
	//Include each
	require substr(dirname(__FILE__),0,-13).'/include/each.php';

	//is dangerous operation check the uniqid
	cUniqid();
		
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
	//Include email password username check function
	include ROOTDIR.'include/part/sign/sign_fu.php';
	$data=array();
	$data['name']=operate_username($_POST['name'],0,25);	
	$data['email']=operate_email($_POST['email'],5,25);
	$data['bio']=string_filterless($_POST['bio'], 125);
	//Operate the DATA of MYSQL
	//Check the Email exist or not
	$result=sql_search("SELECT
			email
		          FROM
		            he_humans
		        WHERE
			email='{$data['email']}'
		           AND
		            id!='{$_COOKIE['userid']}'
	");
	if($result){
		ajaxreturn('infor:emailexist');
	}
	//Add a user to DATA
	$result1=sql("UPDATE 
		      he_humans
			SET
			name='{$data['name']}',email='{$data['email']}',bio='{$data['bio']}'
		          WHERE
		  	id='{$_COOKIE['userid']}'
	                   
	");
	if(!($result1)){
		ajaxreturn('user_infofail');
	}else{
		ajaxreturn('user_infosuccess');		
	}
	
}else{
	exit('user_infoactionfail');
}
?>