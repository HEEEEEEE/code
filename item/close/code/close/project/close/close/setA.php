<?php
//Start to upload a picture
if($_GET['action']=='close_set'){
//Include each
require substr(dirname(__FILE__),0,-12).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	//filter for source //filter for source //filter for source //filter for source

	
	
	//filter for information //filter for information //filter for information
	//need to search the information
		//Check the Name repeat or not
		$result=sql_search("SELECT
				Close_name
			          FROM
				He_close
			            WHERE
				Close_hid='{$_COOKIE['userid']}'
			           AND
			          Close_id!='{$_POST['id']}'
			         AND			            				
			         Close_name='{$_POST['name']}'				
			       ");
		//return the result
		if($result){
			closeMS();
			ajaxreturn("infor:repeatname");
		}			
	//not to search the information
		$data=array();
		$data['Close_name']=string_filtername($_POST['name'],0,25);	
		$data['Close_des']=string_filterdes($_POST['des'],250);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
		//face
		if($_POST['face']!=''){
			//copy:facenowstart
			//Check the Face exist or not
			$result1=sql_search("SELECT
					Fileboxpic_path,Fileboxpic_type
				         FROM
					He_fileboxpic
				         WHERE
					Fileboxpic_hid='{$_COOKIE['userid']}'
				         AND
					Fileboxpic_id='{$_POST['face']}'
				        ");
			//return the result
			if($result1){
				$Fileboxpic_path=$result1['Fileboxpic_path'];
				//Get the user's dir
				$result2=sql_search("SELECT
						Humans_sourcepath
					          FROM
						He_humans
					        WHERE
						Humans_id='{$_COOKIE['userid']}'
					       ");
				//return the result
				if($result2){
					$name='cface'.time().dechex(mt_rand(0,999999));
					$Close_facenow="source/user/".$result2['Humans_sourcepath'].'/close/face/'.$name.'.'.$result1['Fileboxpic_type'];
					//copy:facenowend
					//file to create:copy
					//Basic
					$cop=ROOTDIR1.$Fileboxpic_path;
					$url=ROOTDIR1.$Close_facenow;		
					//Close_face
					copy($cop,$url);
					if(!(file_exists($url))){
						ajaxreturn("facecreate:copyfail" );
					}
					else{
						//delete:facehistory
						$result3=sql_search("SELECT
								   Close_face
								FROM
								   He_close
							          WHERE
								 Close_id='{$_POST['id']}'
							         AND
								Close_hid='{$_COOKIE['userid']}'
							       ");						
						$Close_faceh=ROOTDIR1.$result3['Close_face'];					
		                                                unlink($Close_faceh);
		                                                if(file_exists($Close_faceh)){
		                                                	ajaxreturn("facedelete:fail" );
		                                                }  
					}
				}
				else{
					ajaxreturn("infor:notexistuserdir");					
				}
			}
			else{
				ajaxreturn("infor:notexistface");
		            }						
		}					
		//save sources end save sources end save sources end
		

		
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
			if($_POST['face']==''){
				$result3=sql("UPDATE
					      He_close
					    SET
					       Close_name='{$data['Close_name']}',Close_des='{$data['Close_des']}',Close_updtime=NOW()
					  WHERE
					      Close_hid='{$_COOKIE['userid']}'
					    AND
					      Close_id='{$_POST['id']}'
				           ");				
			}
			else{
				$result3=sql("UPDATE
					     He_close
					           SET
					           Close_name='{$data['Close_name']}',Close_face='{$Close_facenow}',Close_updtime=NOW()
					         WHERE
					        Close_hid='{$_COOKIE['userid']}'
					      AND
					  Close_id='{$_POST['id']}'
					");				
			}					 	
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