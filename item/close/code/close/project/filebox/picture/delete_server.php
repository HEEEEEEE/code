<?php
//Start to upload a picture
if($_GET['action']=='close_delete'){
//Include each
require substr(dirname(__FILE__),0,-16).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['id']=string_filterid($_POST['id'],1,12);		
	/*delete the post delete the post delete the post delete the post delete the post
	 */
		//delete the infor delete the infor delete the infor delete the infor
			$result=sql_search("SELECT
					Fileboxpic_path
				          FROM
					He_fileboxpic
				             WHERE
					Fileboxpic_id='{$data['id']}'
				           AND
				        Fileboxpic_hid='{$_COOKIE['userid']}'
				      ");
			//return the result
			if($result){
				//delete the source delete the source delete the source delete the source
				$url=ROOTDIR1.$result['Fileboxpic_path'];
				if (file_exists($url)){
					unlink($url);
					if(file_exists($url)){
						ajaxreturn('source:filedeletefail');						
					}
			            }
			            else{
// 			            	ajaxreturn('source:filenotexist');			            	
			            }				
				//delete the infor delete the infor delete the infor delete the infor
				if(!(file_exists($url))){					
				    $result1=sql("DELETE FROM
						    He_fileboxpic
					           WHERE
						    Fileboxpic_id='{$data['id']}'
					             AND
						    Fileboxpic_hid='{$_COOKIE['userid']}'						
					   ");
				    if($result1){
				    	closeMS();
				    	ajaxreturn('infor:deletesucceed');
				    }else{
				    	closeMS();
				    	ajaxreturn('infor:deletefail');				    	
				    }
				}	   
			   
			}
			else{
				ajaxreturn('infor:filenotexist');				
			}		
	/*delete the post delete the post delete the post delete the post delete the post
	 */							
}
   ?>