<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + sql php + 
if($_GET['action']=='social_follow'){
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
			      id,followinghid
			   FROM
			      he_social
			   WHERE
			      hid='{$_COOKIE['userid']}'
	");
	if($search_follow['id']){
		//followfollowfollowfollowfollowfollowfollowfollowfollowfollowfollow
		if($search_follow['followinghid']==''){
			$followinghid=$data['followinghid'];
		}else{
			$followinghid=$search_follow['followinghid'].','.$data['followinghid'];
		}
		$update_follow=sql("UPDATE
				  he_social
			        SET
				  followinghid='{$followinghid}'
			        WHERE
			              hid='{$_COOKIE['userid']}'		                    
		");
		if($update_follow){
			//followingfollowingfollowingfollowingfollowingfollowingfollowing
			$search_following=sql_search("SELECT
					           id,followhid
					      FROM
					           he_social
					      WHERE
					           hid='{$data['followinghid']}'
			");
			if($search_following['id']){
				if($search_following['followhid']==''){
					$followhid=$_COOKIE['userid'];
				}else{
					$followhid=$search_following['followhid'].','.$_COOKIE['userid'];
				}
				$update_follow=sql("UPDATE
						he_social
					        SET
						followhid='{$followhid}'
					        WHERE
						hid='{$data['followinghid']}'
				");
				if($update_follow){
					closeMS();
					ajaxreturn('social_followsuccess');
				}else{
					closeMS();
					ajaxreturn('social_followfail');
				}							
			}else{
				$insert_following=sql("INSERT INTO
						     he_social(
							     hid,
			                                                     followhid
				                             )VALUES(
							    '{$data['followinghid']}',
						                '{$_COOKIE['userid']}'
				                             )
				");
				if($insert_following){
					closeMS();
					ajaxreturn('social_followsuccess');
				}else{
					closeMS();
					ajaxreturn('social_followfail');					
				}
			}				
		}		
	}else{
		//followfollowfollowfollowfollowfollowfollowfollowfollowfollowfollow
		$insert_follow=sql("INSERT INTO
				  he_social(
					hid,
					followinghid				 
		                          )VALUES(
					'{$_COOKIE['userid']}',
					'{$data['followinghid']}'
		                          )
		");
		if($insert_follow){
			//followingfollowingfollowingfollowingfollowingfollowingfollowing
			$search_following=sql_search("SELECT
					           id,followhid
					      FROM
					           he_social
					      WHERE
					           hid='{$data['followinghid']}'
			");
			if($search_following['id']){
				if($search_following['followhid']==''){
					$followhid=$_COOKIE['userid'];
				}else{
					$followhid=$search_following['followhid'].','.$_COOKIE['userid'];
				}
				$update_follow=sql("UPDATE
						he_social
					        SET
						followhid='{$followhid}'
					        WHERE
						hid='{$data['followinghid']}'
				");
				if($update_follow){
					closeMS();
					ajaxreturn('social_followsuccess');
				}else{
					closeMS();
					ajaxreturn('social_followfail');
				}							
			}else{
				$insert_following=sql("INSERT INTO
						     he_social(
							     hid,
			                                                     followhid
				                             )VALUES(
							    '{$data['followinghid']}',
						                '{$_COOKIE['userid']}'
				                             )
				");
				if($insert_following){
					closeMS();
					ajaxreturn('social_followsuccess');
				}else{
					closeMS();
					ajaxreturn('social_followfail');					
				}
			}			
		}
	}
			
}else{
	exit('social_followactionfail');	
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



