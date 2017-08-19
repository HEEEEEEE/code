<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_view'){
	//Include each
	require substr(dirname(__FILE__),0,-19).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	//basic
	$search_lolostate=sql_search("SELECT
				myloloviewstate
			      FROM
			            he_humans
			      WHERE
			            id='{$_COOKIE['userid']}'
	");
	if($search_lolostate['myloloviewstate']=='1'){
		$lolostate=0;
	}else{
		$lolostate=1;
	}		
	//update the infor
	$result=sql("UPDATE
		      he_humans
		 SET
		      myloloviewstate=$lolostate
		 WHERE
		      id='{$_COOKIE['userid']}'
	");
	if($result){
		closeMS();
		ajaxreturn('idea_viewsuccess');
	}else{
		closeMS();
		ajaxreturn('idea_viewfail');
	}			
}
else{
	exit('idea_viewactionfail');
}
?>



