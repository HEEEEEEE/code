<?php
//Start to upload a picture
if($_GET['action']=='album_delete'){
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['id']=string_filterid($_POST['id'],1,12);
	$data['cid']=string_filterid($_POST['cid'],1,12);
	/*delete the post delete the post delete the post delete the post delete the post
	 */
		//Include the function
		include PROJECTDIR.'include/engine/fu/fu_file.php';
		//delete the infor delete the infor delete the infor delete the infor
			$result=sql_search("SELECT
					Calbum_dir,Calbum_face
				             FROM
					He_calbum
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
			if($result){
				//delete the source delete the source delete the source delete the source
				//close
				$dir=ROOTDIR1.$result['Calbum_dir'];
				file_delete($dir);
				if(file_exists($dir)){
					ajaxreturn("dirdelete:fail" );
				}				
				//face
				$url=ROOTDIR1.$result['Calbum_face'];
				if($result['Calbum_face']!=''){
					unlink($url);
					if(file_exists($url)){
						ajaxreturn("facedelete:fail" );
					}					
				}				
				//delete the infor delete the infor delete the infor delete the infor					
					    $result=sql("DELETE FROM
						    He_calbum
						          WHERE
							Calbum_id='{$_POST['id']}'
						          AND
						           Calbum_type=1
						         AND
						        Calbum_cid='{$_POST['cid']}'								
						          AND
						           Calbum_hid='{$_COOKIE['userid']}'						
						   ");
					    if($result){
					    	closeMS();
					    	ajaxreturn('infor:deletesucceed');
					    }
					    else{
					    	closeMS();					    	
					    	ajaxreturn('infor:deletefail');					    	
					    }			   
			}
			else{
				ajaxreturn('infor:albumnotexist');				
			}		
	/*delete the post delete the post delete the post delete the post delete the post
	 */							
}
   ?>