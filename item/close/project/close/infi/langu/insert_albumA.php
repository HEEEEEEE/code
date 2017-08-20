<?php
//Start to upload a picture
if($_GET['action']=='album_insert'){
//Include each
require substr(dirname(__FILE__),0,-17).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	//filter for source //filter for source //filter for source //filter for source

	
	
	//filter for information //filter for information //filter for information
		$data=array();
		$data['des']=string_filterdes($_POST['des'],250);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	

		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
			$result3=sql("UPDATE
				       He_calbum
				     SET
				       Calbum_des='{$data['des']}',
					Calbum_updtime=NOW(),
					     Calbum_infousedstate=1
					   WHERE
					Calbum_id='{$_POST['id']}'
					  AND
					Calbum_type=1
					     AND
					      Calbum_cid='{$_POST['cid']}'								
					        AND
					         Calbum_hid='{$_COOKIE['userid']}'     
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