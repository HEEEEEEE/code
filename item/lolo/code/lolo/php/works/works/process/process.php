<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql php + sql php
if($_GET['action']=='works_process'){
	//Include each
	require substr(dirname(__FILE__),0,-24).'/include/each.php';
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include ROOTDIR.'include/engine/fu/fu_file.php';
		//filter for source //filter for source //filter for source //filter for source
		$file_type=file_upfiltertype('input-upload','image/png');
		$file_fsize=file_upfiltersize('input-upload',2500000);
		
		//Basic
		$file_dir=ROOTDIR."source/image/works";
		if(!(file_exists($file_dir))){
			mkdir($file_dir,0777,true);
			if(!(file_exists($file_dir))){
				ajaxreturn('dir:createfail');			
			}
		}
	
		$name='wpro'.time().dechex(mt_rand(0,999999));
		$expand=explode('/',$_FILES['input-upload']['type']);	
		$file_path="source/image/works/".$name.'.'.$expand[1];
	
		//filter for information //filter for information //filter for information
		$data=array();
		$data['iid']=string_filterid($_GET['iid'], 0, 25);
		$data['image']=$file_path;
		$data['des']=string_filterlesstomore($_GET['des'],0,125);
	/*filter the post filter the post filter the post filter the post filter the post
	 */

	/*save the post save the post save the post save the post save the post
	 */	
		//Save the infor	
		$result=sql("INSERT INTO
			     he_works(
				hid,
				  iid,
				    timepoint,
				  image,
				des
			     )VALUES(
				'{$_COOKIE['userid']}',
				            {$data['iid']},
				                   NOW(),
				       '{$data['image']}',
				'{$data['des']}'
		                 )	
		");	
		if($result){
			$result=sql("UPDATE
				     he_idea
				SET
				     processstate=1
				WHERE
				     id='{$data['iid']}'
				AND
				     hid='{$_COOKIE['userid']}'
			");
			if($result){
				closeMS();				
				//save sources start save sources start save sources start
				//file to up:move
				//Basic
				$tmp=$_FILES['input-upload']['tmp_name'];
				$url=ROOTDIR.$file_path;
				//file_upmove($tmp,$url);
				if(is_uploaded_file($tmp)){
					$move=move_uploaded_file($tmp,$url);
					if($move){
						ajaxreturn('works_processsuccess');
					}else{
						ajaxreturn('up:movefail');
					}
				}
				else{
					ajaxreturn('up:tmpnotexist');
				}
				//save sources end save sources end save sources end				
			}else{
				closeMS();
				ajaxreturn('works_updateideafail');				
			}								
		}else{
			closeMS();
			ajaxreturn('works_processinfofail');		
		}
	/*save the post save the post save the post save the post save the post
	 */				
	
}else{
	exit('works_processactionfail');
}
// php + sql php + sql php + sql php + sql php + sql php + sql php + sql php
/*database database database database database database database database data
 * 
 * 
 * 
 *
 */
?>



