<?php 
if ($_GET['action'] == 'signup'){
	//Include each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';
	
	//Include code check function
	include ROOTDIR.'include/part/code/code_fu.php';
	check_code($_SESSION['CODE'],$_POST['code']);

	//Include email password username check function
	include ROOTDIR.'include/part/sign/sign_fu.php';
	$data=array();
	$data['email']=operate_email($_POST['email'],5,25);
	$data['password']=operate_password($_POST['passw'],5,25);
	$data['username']=operate_username($_POST['usern'],0,25);
	$data['uniqid']=sha1(uniqid(mt_rand(),true));

	//Operate the DATA of MYSQL
	//Check the Email exist or not
	$result=sql_search("SELECT
			email
		          FROM
		            he_humans
		        WHERE
			email='{$data['email']}'
	");
	if($result){
		ajaxreturn('infor:emailexist');
	}
	//Add a user to DATA
	$result1=sql("INSERT INTO
		       he_humans (
			email,
			password,
			name,
			uniqid
	                   )
		       VALUES  (
			'{$data['email']}',
			'{$data['password']}',
			'{$data['username']}',
			'{$data['uniqid']}'
		)
	");
	if(!($result1)){
		ajaxreturn('infor:savefail');
	}
	//Create the cookies
	$result2=sql_search("SELECT
			id,uniqid
		          FROM
			he_humans
		         WHERE
			email='{$data['email']}'
			AND
		         password='{$data['password']}'
	");
	if($result2){
		$uniqid=$result2['uniqid'].$result2['id'].dechex(mt_rand(0,999));
		$result3=sql("UPDATE
			      he_humans
			  SET
			      uniqid='{$uniqid}'
			  WHERE
			      email='{$data['email']}'
			  AND
			      password='{$data['password']}'
		");
		if($result3){
			$result4=sql_search("SELECT
					id,name,uniqid
				          FROM
					he_humans
				         WHERE
					email='{$data['email']}'
				         AND
					password='{$data['password']}'
			");
			if($result4){	
				//Create user's cookies
				set_c('0',$result4['id'],$result4['name'],$result4['uniqid']);
				closeMS();
				destroySN();
				ajaxreturn('infor:signupsucceed');
			}
		}
	
	}				
}else{
	exit('signupactionfail');
}
?>