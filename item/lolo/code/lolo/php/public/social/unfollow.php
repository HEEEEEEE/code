<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + 
if($_GET['action']=='social_unfollow'){
	//Include each
	require substr(dirname(__FILE__),0,-18).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
	//FILTER	
	$data=array();
	$data['followinghid']=string_filterid($_POST['followinghid'],1,12);
	$search_follow=sql_search("SELECT
			      followinghid
			   FROM
			      he_social
			   WHERE
			      hid='{$_COOKIE['userid']}'
	");
	$arr=explode(',', $search_follow['followinghid']);
	if(in_array($data['followinghid'],$arr)){
		function array_removeelement(&$arr, $name){
			array_splice($arr, $name, 1);
		}
		$arr=explode(',', $search_follow['followinghid']);
		$name=array_search($data['followinghid'],$arr);
		array_removeelement($arr,$name);
		$dataFollowinghid=implode(',',$arr);
		
		if(strlen($dataFollowinghid)>0){
			$Followinghid=$dataFollowinghid;
		}else{
			$Followinghid='';
		}
		$update=sql("UPDATE
			    he_social
			 SET
			    followinghid='{$Followinghid}'
			 WHERE
			    hid='{$_COOKIE['userid']}'
					
		");
		
		if($update){
			closeMS();
			ajaxreturn('social_unfollowsuccess');			
		}else{
			closeMS();
			ajaxreturn('social_unfollowfail');			
		}		
	}else{
		closeMS();
		ajaxreturn('social_unfollowhidnotexist');
	}				
}else{
	exit('social_unfollowactionfail');	
}
//databasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabase
/*follow
 *when follow who befollow and who follow
 *
 *:can see the lolo of following
 *:can see the following
 *:can unfollow the following
 *      following 
 *            can see the follow 
 * 
 * 
 * 
 * 
 * 
 * 
 */
//databasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabasedatabase
?>



