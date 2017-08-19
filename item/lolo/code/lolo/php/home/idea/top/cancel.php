<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_topcancel'){
	//Include each
	require substr(dirname(__FILE__),0,-18).'/include/each.php';
			
	//is dangerous operation check the uniqid
	cUniqid();

	//cancel the topcancel the topcancel the topcancel the top
	$update=sql("UPDATE
		    he_humans
		 SET
		    lolotop=''
		 WHERE
		    id='{$_COOKIE['userid']}'	
	");
	if($update){
		closeMS();
		ajaxreturn('idea_topcancelsuccess');
	}else{
		closeMS();
		ajaxreturn('idea_topcancelfail');						
	}
	//cancel the topcancel the topcancel the topcancel the top				
}
else{
	exit('idea_topcancelactionfail');
}
?>



