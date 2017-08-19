<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='user_avatarclear'){
	//Include each
	require substr(dirname(__FILE__),0,-17).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information	
	//delete the source
	//search the database
	$result_search=sql_search("SELECT
				avatar
			          FROM
				he_humans
			          WHERE
				id='{$_COOKIE['userid']}'
			");
			if($result_search['avatar']!=''){
				//delete the source delete the source delete the source delete the source
				$url=ROOTDIR1.$result_search['avatar'];
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
				           avatar=''
				     WHERE
				            id='{$_COOKIE['userid']}'
				     ");
			$result_clearidea=sql("UPDATE
					   he_idea
					  SET
					   avatar=''
					WHERE
					   hid='{$_COOKIE['userid']}'
				         ");			
			if($result_clear && $result_clearidea){
				closeMS();
				ajaxreturn('user_avatarclearsuccess');
			}else{
				closeMS();
				ajaxreturn('user_avatarclearfail');
			}								
}
else{
	ajaxreturn('user_avatarclearactionfail');	
}
//       database database database database database database
?>



