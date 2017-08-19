<?php 
//Include each
require substr(dirname(__FILE__),0,-7).'include/each.php';
// //Check the login state
// islogSL();
//Operate the post data
if ($_GET['action'] == 'signin')
{
	//Include code check function
	include ROOTDIR.'include/engine/fu/fu_code.php';
// 	echo $_SESSION['CODE'].'<br/>'.$_POST['VercodE'];
	check_code($_SESSION['CODE'],$_POST['VercodE']);

	//Include email password check function
	include ROOTDIR.'include/engine/fu/fu_sign.php';
	//Accept the data by array
	$data=array();
	$data['email']=operate_email($_POST['EmaiL'],5,25);
	$data['password']=operate_password($_POST['PassworD'],5,25);
	$data['remember']=$_POST['RemembeR'];
// 	echo $login['email'].'<br/>'.$login['password'];

	                    //Operate the DATA of MYSQL
	         //Log in Start
	$result=sql_search("
		       SELECT
			  Humans_id,Humans_name,Humans_uniqid
		       FROM
			  He_humans
		       WHERE
			  Humans_email='{$data['email']}'
		       AND
		              Humans_password='{$data['password']}'
		        ");
	if(!($result)){
		ajaxreturn('infor:eorperror');
	}
	else{
		set_c($data['remember'],$result['Humans_id'],$result['Humans_name'],$result['Humans_uniqid']);
		closeMS();
		destroySN();
		ajaxreturn('infor:loginsucceed');
	}
}
?>