<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='user_backclear'){
	//Include each
	require substr(dirname(__FILE__),0,-15).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information	
	//delete the source
	//search the database
	$result_search=sql_search("SELECT
				back
			          FROM
				he_humans
			          WHERE
				id='{$_COOKIE['userid']}'
			");
			if($result_search['back']!=''){
				//delete the source delete the source delete the source delete the source
				$url=ROOTDIR.$result_search['back'];
				if (file_exists($url)){
					unlink($url);
					if(file_exists($url)){
						ajaxreturn('source:filedeletefail');
					}
				}
				else{
					//ajaxreturn('source:filenotexist');
				}
			}
			//clear the info
			$result_clear=sql("UPDATE
				           he_humans
				       SET
				           back=''
				     WHERE
				           id='{$_COOKIE['userid']}'
				     ");
			$result_clearidea=sql("UPDATE
					   he_idea
					  SET
					   back=''
					WHERE
					   hid='{$_COOKIE['userid']}'
				         ");			
			if($result_clear && $result_clearidea){
				closeMS();
				ajaxreturn('user_backclearsuccess');
			}else{
				closeMS();
				ajaxreturn('user_backclearfail');
			}								
}else{
	exit('user_backclearactionfail');
}
//       database database database database database database
?>



