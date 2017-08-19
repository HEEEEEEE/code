<?php
//Start to upload a picture
if($_GET['action']=='source_set'){
//Include each
require substr(dirname(__FILE__),0,-17).'/include/each.php';
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	include PROJECTDIR.'include/engine/fu/fu_file.php';
	//filter for source //filter for source //filter for source //filter for source

	
	
	//filter for information //filter for information //filter for information
		$data=array();
		$data['id']=$_POST['id'];
		$data['iid']=string_filterid($_POST['iid'],0,12);
		$data['cid']=string_filterid($_POST['cid'],0,12);
		$data['des']=string_filterdes($_POST['des'],250);		
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
		//source
		   //copy:sourcenowstart
			//Check the boxp exist or not
			if($data['id']!=''){
				$result1=sql_search("SELECT
						Fileboxpic_path,Fileboxpic_type
					         FROM
						He_fileboxpic
					         WHERE
						Fileboxpic_hid='{$_COOKIE['userid']}'
					         AND
						Fileboxpic_id='{$_POST['id']}'
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
						//source dir
						$dir_source=$result2['Close_dir'].'/info/picture';;
						$dir=ROOTDIR1.$dir_source;
						if(!(file_exists($dir))){
							mkdir($dir,0777,true);
							if(!(file_exists($dir))){
								ajaxreturn("create:fail" );
							}
						}
											
						$name='cip'.time().dechex(mt_rand(0,999999));
						$source=$dir_source.'/'.$name.'.'.$result1['Fileboxpic_type'];
						
						//file to create:copy
						//Basic
						$cop=ROOTDIR1.$Fileboxpic_path;
						$url=ROOTDIR1.$source;		
						//source
						copy($cop,$url);
						if(!(file_exists($url))){
							ajaxreturn("sourcecreate:copyfail" );
						}
					}
					else{
						ajaxreturn("infor:notexistclosedir");					
					}
				}
				else{
					ajaxreturn("infor:notexistboxp");
			            }
			}else{
				$source='setsourceNO';
			}											
		//save sources end save sources end save sources end
		

		
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database
			$result3=sql("INSERT INTO
				      He_cinfop(
				      	 url,
					     des,
					       intime,
					iid,
					  cid,
					    hid
				       )
				  VALUES(
				       	'{$source}',
				       	     '{$data['des']}',
				       	     	       NOW(),
				       	'{$_POST['id']}',
				       	    '{$_POST['cid']}',
				       		'{$_COOKIE['userid']}'   
				  )
				");				
					 	
		 	//return the result
			if(!($result3)){
				closeMS();
				ajaxreturn("infor:savefail");															
			}
			else{
				closeMS();
				ajaxreturn($source);																											
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>