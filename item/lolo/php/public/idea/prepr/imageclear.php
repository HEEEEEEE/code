<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_preimageclear'){
	//Include each
	require substr(dirname(__FILE__),0,-22).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	$data=array();
	$data['id']=string_filterlesstomore($_POST['id'],0,12);
	//delete the source
	//search the database
	$result_search=sql_search("SELECT
				imagepre
			   FROM
			            he_idea
			 WHERE
			            id='{$data['id']}'
			     AND
			            hid='{$_COOKIE['userid']}'
			");
			if($result_search['imagepre']!=''){
				//delete the source delete the source delete the source delete the source
				$url=ROOTDIR.$result_search['imagepre'];
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
				           he_idea
				       SET
				           imagepre=''
				     WHERE
				           id='{$data['id']}'
				        AND
				            hid='{$_COOKIE['userid']}'
				     ");
			if($result_clear){
				closeMS();
				ajaxreturn('idea_preimageclearsuccess');
			}else{
				closeMS();
				ajaxreturn('idea_preimageclearfail');
			}				
}
?>



