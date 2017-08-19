<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_createimage'){
	//Include each
	require substr(dirname(__FILE__),0,-30).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();

	//update the ideaupdate the ideaupdate the ideaupdate the i
	
	$search_idealast=sql_search("SELECT
			         id,timestate,processstate
			     FROM
			         he_idea
			     WHERE
			         hid='{$_COOKIE['userid']}'
			     ORDER BY
			         createtime
			     DESC
	");
	if($search_idealast['timestate']!=0){
		if($search_idealast['processstate']==0){
			//update the ideanotproc
			$result_updateidea=sql("UPDATE
					    he_idea
					SET
					    timestate=0
					WHERE
					    id='{$search_idealast['id']}'
					AND
			         		hid='{$_COOKIE['userid']}'					    	
			");
			if(! $result_updateidea){
				closeMS();
				ajaxreturn('upadteideafail');
			}
		}else if($search_idealast['processstate']==1){
			//update the ideaprocessing
			$result_updateidea=sql("UPDATE
					     he_idea
					   SET
					processstate=2
					WHERE
					     id='{$search_idealast['id']}'
					AND
					hid='{$_COOKIE['userid']}'
			");
			if(! $result_updateidea){
				closeMS();				
				ajaxreturn('upadteideafail');				
			}						
		}				
	}
	//update the ideaupdate the ideaupdate the ideaupdate the i	
	
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include ROOTDIR.'include/engine/fu/fu_file.php';
		//filter for source //filter for source //filter for source //filter for source
		$file_type=file_upfiltertype('upload-image','image/png');
		$file_fsize=file_upfiltersize('upload-image',2500000);
		$file_name=file_upfiltername('upload-image',250,'png');
		
		//Basic
		$file_dir=ROOTDIR."source/image/idea/source";
		if(!(file_exists($file_dir))){
			mkdir($file_dir,0777,true);
			if(!(file_exists($file_dir))){
				ajaxreturn('dir:createfail');			
			}
		}
	
		$name='isou'.time().dechex(mt_rand(0,999999));
		$expand=explode('/',$_FILES['upload-image']['type']);	
		$file_path="source/image/idea/source/".$name.'.'.$expand[1];
	
		//filter for information //filter for information //filter for information
		//Include the function
		include ROOTDIR.'include/engine/fu/fu_string.php';
		//filter		
		$data=array();	
		$data['image']=$file_path;
		$data['imagename']=$file_name;
	/*filter the post filter the post filter the post filter the post filter the post
	 */

	/*save the post save the post save the post save the post save the post
	 */
		
		//Save the infor
		//Basic
		$search=sql_search("SELECT
				avatar
			        FROM
				he_humans
			        WHERE
				id='{$_COOKIE['userid']}'
			      ");		
		$result=sql("
			     INSERT
				INTO
			     he_idea(       
				          hid,
					image,
				             imagename,
				               firstentertype,
					            createtime,
				               destorytime,
				             avatar,
				           name
			     )VALUES( 
				        '{$_COOKIE['userid']}',
					     '{$data['image']}',
					     	'{$data['imagename']}',
					                     2,
				                                  NOW(),
				           DATE_ADD(NOW(),INTERVAL 6 DAY),                                         
				        '{$search['avatar']}',
			        	        '{$_COOKIE['username']}'
			     )
			");	
		if($result){
			//save sources start save sources start save sources start
			//file to up:move
			//Basic
			$tmp=$_FILES['upload-image']['tmp_name'];
			$url=ROOTDIR.$file_path;
			//file_upmove($tmp,$url);
			if(is_uploaded_file($tmp)){
				$move=move_uploaded_file($tmp,$url);
				if(!$move){					
					ajaxreturn('up:movefail');
				}else{
// 					setcookie('usercreatehabbit','1',time()+(5*24*60*60),'/');					
					closeMS();
					ajaxreturn('idea_createsuccess;');
				}
			}
			else{
				ajaxreturn('up:tmpnotexist');
			}					
		}else{
			closeMS();
			ajaxreturn('idea_createinfofail');		
		}
	/*save the post save the post save the post save the post save the post
	 */				
}
//       database database database database database database
?>



