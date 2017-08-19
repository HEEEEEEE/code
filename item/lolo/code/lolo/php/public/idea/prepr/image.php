<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_preimage'){
	//Include each
	require substr(dirname(__FILE__),0,-22).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include ROOTDIR.'include/engine/fu/fu_file.php';
		//filter for source //filter for source //filter for source //filter for source
		$file_type=file_upfiltertype('upload-imagepre','image/png');
		$file_fsize=file_upfiltersize('upload-imagepre',2500000);
		$file_name=file_upfiltername('upload-imagepre',250,'png');
		
		//Basic
		$file_dir=ROOTDIR."source/image/idea/pre";
		if(!(file_exists($file_dir))){
			mkdir($file_dir,0777,true);
			if(!(file_exists($file_dir))){
				ajaxreturn('dir:createfail');			
			}
		}
	
		$name='isou'.time().dechex(mt_rand(0,999999));
		$expand=explode('/',$_FILES['upload-imagepre']['type']);	
		$file_path="source/image/idea/pre/".$name.'.'.$expand[1];
	
		//filter for information //filter for information //filter for information
		$data=array();
		$data['id']=string_filterlesstomore($_GET['id'], 0, 12);
		$data['preimage']=$file_path;
	/*filter the post filter the post filter the post filter the post filter the post
	 */

	/*save the post save the post save the post save the post save the post
	 */	
		//Save the infor		
		$result=sql("UPDATE
		                  he_idea
			    SET
			      imagepre='{$data['preimage']}'
			 WHERE
			      id='{$data['id']}'
			AND
			      hid='{$_COOKIE['userid']}'			 
		           ");	
		if($result){
			//save sources start save sources start save sources start
				//file to up:move
				//Basic
				$tmp=$_FILES['upload-imagepre']['tmp_name'];
				$url=ROOTDIR.$file_path;
				//file_upmove($tmp,$url);
				if(is_uploaded_file($tmp)){
					$move=move_uploaded_file($tmp,$url);
					if($move){
						ajaxreturn('idea_preimagesuccess');
					}else{
						//delete the infor
						$result=sql("UPDATE
							     he_idea
							   SET
							     imagepre=''
							 WHERE
							     id='{$data['id']}'
							     AND
							     hid='{$_COOKIE['userid']}'
							");
						closeMS();
						ajaxreturn('up:movefail');
					}
				}
				else{
					//delete the infor
					$result=sql("UPDATE
						    he_idea
						     SET
						    imagepre=''
						 WHERE
						    id='{$data['id']}'
						 AND
						    hid='{$_COOKIE['userid']}'
						");
					closeMS();
					ajaxreturn('up:tmpnotexist');
				}
				//save sources end save sources end save sources end					
		}else{
			closeMS();
			ajaxreturn('idea_preimagefail');		
		}
	/*save the post save the post save the post save the post save the post
	 */				
}
?>



