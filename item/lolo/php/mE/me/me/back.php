<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='user_back'){
	//Include each
	require substr(dirname(__FILE__),0,-13).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include ROOTDIR.'include/engine/fu/fu_file.php';
		//filter for source //filter for source //filter for source //filter for source
		$file_type=file_upfiltertype('input-uploadmeback','image/png');
		$file_fsize=file_upfiltersize('input-uploadmeback',2500000);
		$file_name=file_upfiltername('input-uploadmeback',250,'png');
		
		//Basic
		$file_dir=ROOTDIR."source/image/user/back";
		if(!(file_exists($file_dir))){
			mkdir($file_dir,0777,true);
			if(!(file_exists($file_dir))){
				ajaxreturn('dir:createfail');			
			}
		}
	
		$name='ubac'.time().dechex(mt_rand(0,999999));
		$expand=explode('/',$_FILES['input-uploadmeback']['type']);	
		$file_path="source/image/user/back/".$name.'.'.$expand[1];
	
		//filter for information //filter for information //filter for information
		$data=array();	
		$data['image']=$file_path;
	/*filter the post filter the post filter the post filter the post filter the post
	 */

	/*save the post save the post save the post save the post save the post
	 */	
		//Save the infor		
		$result=sql("UPDATE
			      he_humans
			    SET
			      back='{$data['image']}'
			 WHERE
			      id='{$_COOKIE['userid']}'
			");
		$result_idea=sql("UPDATE
			      he_idea
			   SET
			      back='{$data['image']}'
			 WHERE
			      hid='{$_COOKIE['userid']}'
			");			
		if($result && $result_idea){
			//save sources start save sources start save sources start
				//file to up:move
				//Basic
				$tmp=$_FILES['input-uploadmeback']['tmp_name'];
				$url=ROOTDIR.$file_path;
				//file_upmove($tmp,$url);
				if(is_uploaded_file($tmp)){
					$move=move_uploaded_file($tmp,$url);
					if($move){
						ajaxreturn('user_backsuccess');
					}else{
						//delete the infor
						$result=sql("UPDATE
							     he_humans
							   SET
							      back==''
							 WHERE
							      id='{$_COOKIE['userid']}'
							");
						closeMS();
						ajaxreturn('up:movefail');
					}
				}
				else{
					//delete the infor
					$result=sql("UPDATE
						     he_humans
						   SET
						      back==''
						 WHERE
						     id='{$_COOKIE['userid']}'
						");
					closeMS();
					ajaxreturn('up:tmpnotexist');
				}
				//save sources end save sources end save sources end										
		}else{
			closeMS();
			ajaxreturn('user_backfail');		
		}
	/*save the post save the post save the post save the post save the post
	 */				
}else{
	exit('user_backactionfail');
}
//       database database database database database database
?>



