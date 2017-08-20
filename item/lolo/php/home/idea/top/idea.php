<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_top'){
	//Include each
	require substr(dirname(__FILE__),0,-18).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
			
	//is dangerous operation check the uniqid
	cUniqid();
		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	$data=array();
	$data['ideaid']=string_filterid(($_POST['ideaid']), 1, 38);	
	if(preg_match("/[:]/",$data['ideaid'])){
		$expdata=explode(':', $data['ideaid']);
		
		$search=sql_search("SELECT
				followinghid
			        FROM
				he_social
			        WHERE
				hid='{$_COOKIE['userid']}'
		");
		if($search){
			$pattern='/['.$expdata[0].']/';
			if(preg_match($pattern,$search['followinghid'])){
				$search=sql_search("SELECT
						id
					        FROM
						he_idea
					        WHERE
						hid=$expdata[0]
					        AND
						id=$expdata[1]
				");
				if($search){
					$update=sql("UPDATE
						    he_humans
						 SET
						    lolotop='{$data['ideaid']}'
						 WHERE
						    id='{$_COOKIE['userid']}'	
					");
					if($update){
						closeMS();
						ajaxreturn('idea_topsuccess');
					}else{
						closeMS();
						ajaxreturn('idea_topfail');						
					}
				}else{
					closeMS();
					ajaxreturn('followinghidideanotexist');					
				}				
			}else{
				closeMS();
				ajaxreturn('followinghidnotexist');
			}
		}
	}else{
		$search=sql_search("SELECT
				id
			        FROM
				he_idea
			        WHERE
				hid='{$_COOKIE['userid']}'
			        AND
				id='{$data['ideaid']}'
		");
		if($search){
			$update=sql("UPDATE
				    he_humans
				 SET
				    lolotop='{$data['ideaid']}'
				 WHERE
				    id='{$_COOKIE['userid']}'
			");
			if($update){
				closeMS();
				ajaxreturn('idea_topsuccess');
			}else{
				closeMS();
				ajaxreturn('idea_topfail');
			}
		}else{
			closeMS();
			ajaxreturn('followinghidideanotexist');
		}		
	}
}
else{
	exit('idea_topactionfail');
}
?>



