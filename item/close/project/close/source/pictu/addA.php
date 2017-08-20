<?php
//Start to upload a picture
if($_GET['action']=='source_add'){
//Include each
require substr(dirname(__FILE__),0,-19).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';	
	//filter for source //filter for source //filter for source //filter for source
	
	//filter for information //filter for information //filter for information
		$data=array();
		$data['id']=string_filterid($_POST['id'],1,12);	
		$data['aid']=string_filterid($_POST['aid'],1,12);	
		$data['cid']=string_filterid($_POST['cid'],1,12);					
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
			//copy:datanowstart
			//Check the filebox data exist or not
			$result1=sql_search("SELECT
					Fileboxpic_name,Fileboxpic_path,Fileboxpic_type,Fileboxpic_ssize,Fileboxpic_fsize
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
				//Get the album's dir
				$result2=sql_search("SELECT
						Calbum_dir
					          FROM
						He_calbum
					              WHERE
						Calbum_id='{$_POST['aid']}'
					            AND
					           Calbum_type=1
					         AND
					        Calbum_cid='{$_POST['cid']}'								
					       AND
					      Calbum_hid='{$_COOKIE['userid']}'
					       ");
				//return the result
				if($result2){
					$name='capsp'.time().dechex(mt_rand(0,999999));
					$Source_dir=$result2['Calbum_dir'].'/source';
					$Source_path=$result2['Calbum_dir'].'/source/'.$name.'.'.$result1['Fileboxpic_type'];
					//dir to create:create
					$dir=ROOTDIR1.$Source_dir;
					if(!(file_exists($dir))){
						mkdir($dir,0777,true);
						if(!(file_exists($dir))){
							ajaxreturn("sourcedircreate:fail" );
						}
					}
					else{										//url to create:copy
						//Basic
						$cop=ROOTDIR1.$Fileboxpic_path;
						$url=ROOTDIR1.$Source_path;		
						//source
						copy($cop,$url);
						if(!(file_exists($url))){
							ajaxreturn("sourcecreate:copyfail" );
						}
					}
				}
				else{
					ajaxreturn("infor:notexistalbumdir");					
				}
			}
			else{
				ajaxreturn("infor:notexistfileboxdata");
		            }											
		//save sources end save sources end save sources end
		

		
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database

			$result3=sql("INSERT INTO
				     He_casource1(
						name,
					          url,
					       type,
					      ssize,
					     fsize,
					     aid,
					        cid,
					          hid,
					       addtime,
					          updtime
				     )
				     VALUES(
					'{$result1['Fileboxpic_name']}',
					'{$Source_path}',
					'{$result1['Fileboxpic_type']}',
					'{$result1['Fileboxpic_ssize']}',
					'{$result1['Fileboxpic_fsize']}',
					'{$data['aid']}',
					'{$data['cid']}',
					'{$_COOKIE['userid']}',
					NOW(),
					NOW()
				     )
				");									 	
		 	//return the result
			if(!($result3)){
				closeMS();
				ajaxreturn("infor:addfail");															
			}
			else{
				closeMS();
				ajaxreturn("infor:addsucceed");																											
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>