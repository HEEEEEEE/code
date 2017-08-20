<?php
//Start to upload a picture
if($_GET['action']=='album_set'){
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';
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
				Calbum_name
			             FROM
				He_calbum
			          WHERE
				Calbum_name='{$_POST['name']}'
			         AND
				Calbum_id!='{$_POST['id']}'
			        AND			        
				Calbum_type=5
			          AND
			           Calbum_cid='{$_POST['cid']}'								
			             AND
			               Calbum_hid='{$_COOKIE['userid']}'
			       ");
		//return the result
		if($result){
			closeMS();
			ajaxreturn("infor:repeatname");
		}			
	//not to search the information
		$data=array();
		$data['Calbum_name']=string_filtername($_POST['name'],0,25);
		$data['Calbum_des']=string_filterdes($_POST['des'],250);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
		//face
		if($_POST['face']!=''){
			//copy:facenowstart
			//Check the boxp exist or not
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
				//Get the close's dir
				$result2=sql_search("SELECT
						Close_dir
					               FROM
						    He_close
					              WHERE
						   Close_id='{$_POST['cid']}'
					             AND										
					         Close_hid='{$_COOKIE['userid']}'
				       	        ");			
				//return the result
				if($result2){
					//file to create
					//face dir
					$dir_face=$result2['Close_dir'].'/album/hyperlink/face';;
					$dir=ROOTDIR1.$dir_face;
					if(!(file_exists($dir))){
						mkdir($dir,0777,true);
						if(!(file_exists($dir))){
							ajaxreturn("create:fail" );
						}
					}					
					$name='cahface'.time().dechex(mt_rand(0,999999));
					$facenow=$dir_face.'/'.$name.'.'.$result1['Fileboxpic_type'];
					//copy:facenowend
					//file to create:copy
					//Basic
					$cop=ROOTDIR1.$Fileboxpic_path;
					$url=ROOTDIR1.$facenow;		
					//Close_face
					copy($cop,$url);
					if(!(file_exists($url))){
						ajaxreturn("facecreate:copyfail" );
					}
					else{
						//delete:facehistory
						$result3=sql_search("SELECT
								   Calbum_face
							             FROM
								He_calbum
							          WHERE
								Calbum_id='{$_POST['id']}'
							        AND			        
								Calbum_type=5
							          AND
							           Calbum_cid='{$_POST['cid']}'								
							             AND
							               Calbum_hid='{$_COOKIE['userid']}'
							       ");
						if($result3){
							if($result3['Calbum_face']!=''){
								$faceh=ROOTDIR1.$result3['Calbum_face'];
								unlink($faceh);
								if(file_exists($faceh)){
									ajaxreturn("facedelete:fail" );
								}								
							}
						}						
					}
				}
				else{
					ajaxreturn("infor:notexistclosedir");					
				}
			}
			else{
				ajaxreturn("infor:notexistboxp");
		            }						
		}
		else{
			$result_fexist=sql_search("SELECT
					        Calbum_face
					     FROM
					        He_calbum
					       WHERE
					    Calbum_id='{$_POST['id']}'
					      AND
					Calbum_type=5
					   AND
				            Calbum_cid='{$_POST['cid']}'
					      AND
					    Calbum_hid='{$_COOKIE['userid']}'									
					");
			if($result_fexist['Calbum_face']!=''){
				$url=ROOTDIR1.$result_fexist['Calbum_face'];
				unlink($url);
				if(file_exists($url)){
					ajaxreturn("faceremove:fail" );
				}				
			}
		}					
		//save sources end save sources end save sources end
		

		
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
			if($_POST['face']==''){
				$result3=sql("UPDATE
					      He_calbum
					    SET
					       Calbum_name='{$data['Calbum_name']}',Calbum_face='',Calbum_des='{$data['Calbum_des']}',Calbum_updtime=NOW()
					   WHERE
					Calbum_id='{$_POST['id']}'
					  AND
					Calbum_type=5
					     AND
					      Calbum_cid='{$_POST['cid']}'								
					        AND
					         Calbum_hid='{$_COOKIE['userid']}'
				           ");				
			}
			else{
				$result3=sql("UPDATE
					      He_calbum
					    SET
					       Calbum_name='{$data['Calbum_name']}',Calbum_face='{$facenow}',Calbum_des='{$data['Calbum_des']}',Calbum_updtime=NOW()
					   WHERE
					Calbum_id='{$_POST['id']}'
					  AND
					Calbum_type=5
					     AND
					      Calbum_cid='{$_POST['cid']}'								
					        AND
					         Calbum_hid='{$_COOKIE['userid']}'
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