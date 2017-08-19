<?php
//Start to upload a picture
if($_GET['action']=='source_set'){
//Include each
require substr(dirname(__FILE__),0,-19).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	include PROJECTDIR.'include/engine/fu/fu_file.php';
	//filter for source //filter for source //filter for source //filter for source

	
	
	//filter for information //filter for information //filter for information
	//need to search the database
		//Check the Name repeat or not
		$result=sql_search("SELECT
				   name
			             FROM
				He_casource1
			          WHERE
				name='{$_POST['name']}'
			         AND
				id!='{$_POST['id']}'
			          AND
			           aid='{$_POST['aid']}'
			          AND
			           cid='{$_POST['cid']}'								
			             AND
			               hid='{$_COOKIE['userid']}'
			       ");
		//return the result
		if($result){
			closeMS();
			ajaxreturn("infor:repeatname");
		}			
	//not to search the information
		$data=array();
		$data['name']=string_filtername($_POST['name'],0,25);
		$data['des']=string_filterdes($_POST['des'],250);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start					
		//save sources end save sources end save sources end
		

		
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
				$result3=sql("UPDATE
					      He_casource1
					    SET
					       name='{$data['name']}',des='{$data['des']}',updtime=NOW()
					   WHERE
					     id='{$_POST['id']}'
					  AND
					    aid='{$_POST['aid']}'
					     AND
					      cid='{$_POST['cid']}'								
					       AND
					         hid='{$_COOKIE['userid']}'
				           ");									 	
		 	//return the result
			if(!($result3)){
				closeMS();
				ajaxreturn("infor:setfail");															
			}
			else{
				closeMS();
				ajaxreturn("infor:setsucceed");																											
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>