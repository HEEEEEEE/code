<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_delete'){
	//Include each
	require substr(dirname(__FILE__),0,-23).'/include/each.php';
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
				image
			         FROM
				he_idea
			        WHERE
				id='{$data['id']}'
			           AND
				hid='{$_COOKIE['userid']}'
			      ");
		if($result_search['image']!=''){
			//delete the source delete the source delete the source delete the source
			$url=ROOTDIR.$result_search['image'];
			if (file_exists($url)){
				unlink($url);
				if(file_exists($url)){
					ajaxreturn('source:filedeletefail');						
				}
		            }
		            else{
// 		            	ajaxreturn('source:filenotexist');			            	
		            }				  		   
		}	
	//delete the info
	         //idea
                     $result_delete=sql("DELETE FROM
                     		       	    he_idea
                     		            WHERE
				   id='{$data['id']}'
			           AND
				    hid='{$_COOKIE['userid']}'                     		
                     		   "); 
                     if($result_delete){
                     	            //process
                     		$result_delete=sql("DELETE FROM
                     			                 he_works
                     			              WHERE
                     			                 iid='{$data['id']}'
                     			               AND
                     			        hid='{$_COOKIE['userid']}'
                     		");
                     		if($result_delete){
                     			closeMS();
                     			ajaxreturn('idea_deletesuccess');
                     		}else{
                     			closeMS();
                     			ajaxreturn('idea_deleteprocessinfofail');
                     		}                   		
                     }else{
                     		closeMS();
                     		ajaxreturn('idea_deleteideainfofail');
                     }                  				
}
?>



