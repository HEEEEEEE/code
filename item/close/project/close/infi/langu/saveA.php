<?php
//Start to upload a picture
if($_GET['action']=='info_save'){
//Include each
require substr(dirname(__FILE__),0,-17).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	
	//filter for information //filter for information //filter for information
		$data=array();
		$data['con']=string_filtercon($_POST['con']);	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */			
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
				$result3=sql("UPDATE
					      He_cinfo
					    SET
					       con='{$data['con']}',updtime=NOW()
					   WHERE
					     id='{$_POST['id']}'
					      AND
					       cid='{$_POST['cid']}'								
					       AND
					         hid='{$_COOKIE['userid']}'
				           ");									 	
		 	//return the result
			if(!($result3)){
				closeMS();
				ajaxreturn("infor:savefail");															
			}
			else{
				closeMS();
				ajaxreturn("infor:savesucceed");																											
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>