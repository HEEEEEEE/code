<?php
if($_GET['action']=='info_show'){
//Include each
require substr(dirname(__FILE__),0,-17).'/include/each.php';
//Check the login state
// isloginPT();
//is dangerous operation check the uniqid
cUniqid();

	//filter for information filter for information filter for information
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['id']=string_filterid($_POST['aid'],0,12);	
	$data['cid']=string_filterid($_POST['cid'],0,12);
	//filter for information filter for information filter for information

	//infor to the browser infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql_search("SELECT
			             con
			          FROM
			             He_cinfo
			         WHERE
			             id='{$_POST['id']}'
			            AND
			          cid='{$_POST['cid']}'
			         AND
			       hid='{$_COOKIE['userid']}'
		                   ");
		if($result){
			echo $result['con'];
		}			
}	
?>