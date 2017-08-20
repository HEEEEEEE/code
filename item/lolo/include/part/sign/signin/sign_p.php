<?php 
if ($_GET['action'] == 'signin'){
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
	$data['remember']=$_POST['remem'];

	//Operate the DATA of MYSQL
	//Log in Start
	$result=sql_search("SELECT
			id,name,uniqid
		          FROM
			he_humans
		        WHERE
			email='{$data['email']}'
		        AND
			password='{$data['password']}'
	");
	if(!($result)){
		ajaxreturn('infor:eorperror');
	}
	else{
		set_c($data['remember'],$result['id'],$result['name'],$result['uniqid']);
		closeMS();
		destroySN();
		ajaxreturn('infor:signinsucceed');
	}		
}else{
	exit('signinactionfail');
}
?>