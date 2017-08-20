<?php 
//Include each
require substr(dirname(__FILE__),0,-7).'include/each.php';
//Check the login state
islogSL();
//Operate the post data
if ($_GET['action'] == 'signup')
{
	//Include code check function
	include ROOTDIR.'include/engine/fu/fu_code.php';
// 	echo $_SESSION['CODE'].'<br/>'.$_POST['VercodE'];
	check_code($_SESSION['CODE'],$_POST['VercodE']);

	//Include email password username check function
	include ROOTDIR.'include/engine/fu/fu_sign.php';
	//Accept the data by array
	$data=array();
	$data['email']=operate_email($_POST['EmaiL'],5,25);
	$data['password']=operate_password($_POST['PassworD'],5,25);
	$data['username']=operate_username($_POST['UsernamE'],0,25);
	$data['uniqid']=sha1(uniqid(mt_rand(),true));
	// 		echo $signup['email'].$signup['password'].$signup['username'];

	                                      //Operate the DATA of MYSQL
	             //Check the Email exist or not
	$result=sql_search("
		       SELECT
			  Humans_email
		       FROM
			  He_humans
		       WHERE
			  Humans_email='{$data['email']}'
		      ");
	if($result){
 		ajaxreturn('infor:emailexist');
	}

	//Add a user to DATA
	$result1=sql("INSERT INTO
	                  He_humans (
				Humans_email,
				Humans_password,
				Humans_name,
			            Humans_uniqid,
				Humans_sourcepath
			     )
	                     VALUES  (
				'{$data['email']}',
				'{$data['password']}',
				'{$data['username']}',
				'{$data['uniqid']}',
				'{$data['email']}'
		                 )		
	   ");
	if(!($result1)){
		ajaxreturn('infor:savefail');
	}			
	//Create the cookies
	$result2=sql_search("
			SELECT 
			      Humans_id,Humans_uniqid 
			FROM
			      He_humans
			WHERE
			      Humans_email='{$data['email']}'
			AND
			      Humans_password='{$data['password']}'
		        ");
	
	if($result2){
		$uniqid=$result2['Humans_uniqid'].$result2['Humans_id'].dechex(mt_rand(0,999));
		$sourcepath='clor'.dechex(mt_rand(0,9999)).$result2['Humans_id'].dechex(mt_rand(0,99999));
		$result3=sql("
				UPDATE
				    He_humans
				SET
				    Humans_uniqid='{$uniqid}',Humans_sourcepath='{$sourcepath}'
				WHERE
				    Humans_email='{$data['email']}'
				AND
				    Humans_password='{$data['password']}'
			 ");
		if($result3){
			$result4=sql_search("
					SELECT
					     Humans_id,Humans_name,Humans_uniqid,Humans_sourcepath
					FROM
					     He_humans
					WHERE
					     Humans_email='{$data['email']}'
					AND
					     Humans_password='{$data['password']}'
				       ");
			if($result4){
				//Create user's dir
				$dir=ROOTDIR.'source/user/'.$result4['Humans_sourcepath'];
				if(!(file_exists($dir))){
					mkdir($dir,0777,true);
					if(!(file_exists($dir))){
						ajaxreturn("userdircreate:fail" );
					}				
				}else{
					ajaxreturn("userdir:exists" );					
				}
						
				//Create user's cookies
				set_c('0',$result4['Humans_id'],$result4['Humans_name'],$result4['Humans_uniqid']);
				closeMS();
				destroySN();
				ajaxreturn('infor:signupsucceed');				
			}						
		}		

	}
}
?>