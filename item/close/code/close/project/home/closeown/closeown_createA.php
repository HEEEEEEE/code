<?php
//Start to upload a picture
if($_GET['action']=='close_create'){
//Include each
require substr(dirname(__FILE__),0,-14).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	include PROJECTDIR.'include/engine/fu/fu_file.php';		
	//filter for information //filter for information //filter for information
	//need to search the database
		//Check the Name repeat or not
		$result=sql_search("SELECT
				Close_name
			          FROM
				He_close
			         WHERE
				Close_name='{$_POST['name']}'
			           AND
				Close_hid='{$_COOKIE['userid']}'
			      ");
		//return the result
		if($result){
			closeMS();
			ajaxreturn("infor:repeatname");
		}
		else{
			$result0=sql_search("SELECT
					Humans_sourcepath
				          FROM
					He_humans
				          WHERE
				         Humans_id='{$_COOKIE['userid']}'
				        ");			
			if($result0){			
				$Close_dir="source/user/".$result0['Humans_sourcepath'].'/close/close/'.$_POST['name'];			
			}else{
				ajaxreturn("infor:notexistuserdir");				
			}			
		}
		//Check the Face exist or not
			$result1=sql_search("SELECT
					Fileboxpic_path,Fileboxpic_type
				          FROM
					He_fileboxpic
				             WHERE
					Fileboxpic_id='{$_POST['face']}'
				           AND
				         Fileboxpic_hid='{$_COOKIE['userid']}'
				        ");
		//return the result
		if($result1){
			$Fileboxpic_path=$result1['Fileboxpic_path'];
			
			$name='cface'.time().dechex(mt_rand(0,999999));
			$Face_dir="source/user/".$result0['Humans_sourcepath'].'/close/face';
			$Face_url="source/user/".$result0['Humans_sourcepath'].'/close/face/'.$name.'.'.$result1['Fileboxpic_type'];
		}
		else{
			ajaxreturn("infor:notexistface");
		}					
	//not to search the database
		$data=array();
		//Close
		$data['Close_name']=string_filtername($_POST['name'],0,25);	
		$data['Close_dir']=file_filterurl($Close_dir,500);
		//Close_face	
		$data['Face_url']=file_filterurl($Face_url,500);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
				//file to create
		                        $dir=ROOTDIR1.$Close_dir;
                                                if(!(file_exists($dir))){
                                                	mkdir($dir,0777,true);
                                                	if(!(file_exists($dir))){
                                                		ajaxreturn("closecreate:fail" );
                                                	}                                               	
                                                }else{
                                                	            ajaxreturn("closedir:exists" );                                                	
                                                }
						
				//file to create:copy
                                                $dir=ROOTDIR1.$Face_dir;
                                                if(!(file_exists($dir))){
                                                	mkdir($dir,0777,true);
                                                	if(!(file_exists($dir))){
                                                		ajaxreturn("facedir:createfail" );
                                                	}
                                                }
                                                				
				$cop=ROOTDIR1.$Fileboxpic_path;
				$url=ROOTDIR1.$Face_url;		
				//Close_face
				copy($cop,$url);
				if(!(file_exists($url))){
					ajaxreturn("facecreate:copyfail" );
				}				
		//save sources end save sources end save sources end
		
			
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database								
		 	$result2=sql("INSERT INTO
				He_close(
					Close_name,
					Close_dir,
		 			Close_face,					
					Close_hid,
					Close_time					
				         )
				  VALUES(
					'{$data['Close_name']}',
					'{$data['Close_dir']}',
					'{$data['Face_url']}',
					'{$_COOKIE['userid']}',
					NOW()					
			                     )
			           ");
		 	//return the result
			if(!($result2)){
				closeMS();
				ajaxreturn("infor:savefail");											
			}
			else{
				//INFO
				$result3=sql_search("SELECT
				Close_id
				FROM
				He_close
				WHERE
				Close_name='{$data['Close_name']}'
				AND
				Close_hid='{$_COOKIE['userid']}'
				");
				$result4=sql("INSERT INTO
				He_cinfo(
				cid,
				hid,
				updtime
				)
				VALUES(
				'{$result3['Close_id']}',
				'{$_COOKIE['userid']}',
				NOW()
				)
				");
				if($result4){
				closeMS();
				ajaxreturn("infor:savesucceed");
				}
				else{
				closeMS();
				ajaxreturn("infor:savefail");
				}										
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>