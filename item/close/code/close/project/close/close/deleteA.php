<?php
//Start to upload a picture
if($_GET['action']=='close_delete'){
//Include each
require substr(dirname(__FILE__),0,-12).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['id']=string_filterid($_POST['id'],1,12);			
	/*delete the post delete the post delete the post delete the post delete the post
	 */
		//Include the function
		include PROJECTDIR.'include/engine/fu/fu_file.php';
		//delete the infor delete the infor delete the infor delete the infor
			$result=sql_search("SELECT
					Close_dir,Close_face
				          FROM
					He_close
				             WHERE
					Close_hid='{$_COOKIE['userid']}'
				           AND
				        Close_id='{$data['id']}'
				      ");
			//return the result
			if($result){
				//delete the source delete the source delete the source delete the source
				//close
				$dir=ROOTDIR1.$result['Close_dir'];
				file_delete($dir);
				if(file_exists($dir)){
					ajaxreturn("dirdelete:fail" );
				}				
				//face
				$url=ROOTDIR1.$result['Close_face'];
				unlink($url);
				if(file_exists($url)){
					ajaxreturn("facedelete:fail" );
				}				
				//delete the infor delete the infor delete the infor delete the infor										    
					    $resultca=sql("SELECT
					    	           Calbum_id
					    		      FROM
					    		   He_calbum	
					    		       WHERE
					    		    Calbum_cid='{$_POST['id']}'
					    		       AND
					    		Calbum_hid='{$_COOKIE['userid']}'
					    	     ");
					    if($resultca){
					    	$resultcad=sql("DELETE FROM
					    		         He_calbum
					    		           WHERE
					    			    Calbum_cid='{$_POST['id']}'
					    		           AND
					    		         Calbum_hid='{$_COOKIE['userid']}'
					    		  ");
					    	if($resultcad){
					    		$resultcd=sql("DELETE FROM
					    			          He_close
					    				   WHERE
					    				Close_id='{$_POST['id']}'
					    				   AND
					    			          Close_hid='{$_COOKIE['userid']}'
					    			 ");
					    		if($resultcd){
					    			closeMS();
					    			ajaxreturn('infor:deletesucceed');
					    		}
					    		else{
					    			closeMS();
					    			ajaxreturn('infor:deletefail');
					    		}					    							    		
					    	}
					    	else{
					    		closeMS();
					    		ajaxreturn('infor:deletealbumfail');					    		
					    	}					    	
					    }
					    else{
					    	$resultcd=sql("DELETE FROM
					    			He_close
					    		          WHERE
					    			  Close_id='{$_POST['id']}'
					    		          AND
					    			Close_hid='{$_COOKIE['userid']}'
					    		 ");
					    	if($resultcd){
					    		closeMS();
					    		ajaxreturn('infor:deletesucceed');
					    	}
					    	else{
					    		closeMS();
					    		ajaxreturn('infor:deletefail');
					    	}					    	
					    } 			   
			}
			else{
				ajaxreturn('infor:closenotexist');				
			}		
	/*delete the post delete the post delete the post delete the post delete the post
	 */							
}
   ?>