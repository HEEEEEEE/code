<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_comment'){
	//Include each
	require substr(dirname(__FILE__),0,-24).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
	//FILTER	
	$data=array();
	$data['lans']=string_filterlesstomore($_POST['lans'],0,125);
	$data['iid']=string_filterid($_POST['iid'],1,25);	
	//Save the infor
	$search_iid=sql_search("SELECT
			   id
		         FROM
			he_idea
		        WHERE
			id='{$data['iid']}'
	");
	if($search_iid){
		$search_humans=sql_search("SELECT
				avatar
	                                FROM
				he_humans
			      WHERE
				id='{$_COOKIE['userid']}'
		");		
		$result=sql("INSERT
			    INTO
			      he_ideacomment(  iid,     
				         commenthid,
					con,		
				           avatar,
				          name,
				       createtime		
			      )VALUES( 
				       '{$data['iid']}',
				        '{$_COOKIE['userid']}',
					     '{$data['lans']}',                          
				            '{$search_humans['avatar']}',
				        '{$_COOKIE['username']}',
				        NOW()
			      )
		");	
		if($result){			
			closeMS();
			ajaxreturn('idea_commentsuccess;');							
		}else{
			closeMS();
			ajaxreturn('idea_commentfail');		
		}
	}else{
		closeMS();
		ajaxreturn('idea_commentideanotexist');		
	}				
}else{
	exit('idea_commentactionfail');	
}
?>



