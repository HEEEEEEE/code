<?php
//Start to upload a picture
if($_GET['action']=='close_create'){
//Include each
require substr(dirname(__FILE__),0,-16).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_file.php';
	//filter for source //filter for source //filter for source //filter for source
	$file_type=file_upfiltertype('up','image/png');
	$file_fsize=file_upfiltersize('up',2500000);
	$file_name=file_upfiltername('up',125,'png');
		
	//Basic
	$result0=sql_search("SELECT
			Humans_sourcepath
		          FROM
			He_humans
		          WHERE
			Humans_id='{$_COOKIE['userid']}'
		       ");
	$file_dir=ROOTDIR1."source/user/".$result0['Humans_sourcepath'].'/filebox/picture';
	if(!(file_exists($file_dir))){
		mkdir($file_dir,0777,true);
		if(!(file_exists($file_dir))){
			ajaxreturn('dir:createfail');			
		}
	}
	
	$name='fboxp'.time().dechex(mt_rand(0,999999));
	$expand=explode('/',$_FILES['up']['type']);	
	$file_path="source/user/".$result0['Humans_sourcepath'].'/filebox/picture/'.$name.'.'.$expand[1];
	
	//filter for information //filter for information //filter for information
		$data=array();	
		$data['pic_path']=$file_path;
		$data['pic_name']=$file_name;
		$data['pic_type']=$file_type;
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start						
				//file to up:move
				//Basic
				$tmp=$_FILES['up']['tmp_name'];
				$url=ROOTDIR1.$file_path;		
// 				file_upmove($tmp,$url);
				if(is_uploaded_file($tmp)){
					move_uploaded_file($tmp,$url);
					if(file_exists($url)){
						$file_ssize=file_info($url);
					}else{
						ajaxreturn('up:movefail');						
					}
				}
				else{
					ajaxreturn('up:tmpnotexist');					
				}				
		//save sources end save sources end save sources end
		
			
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database								
		 	$result=sql("INSERT INTO
				He_fileboxpic(
		 			Fileboxpic_path,					
					Fileboxpic_name,
		 			Fileboxpic_type,
		 			Fileboxpic_ssize,
		 			Fileboxpic_fsize,		 					 			
					Fileboxpic_uptime,
		 			Fileboxpic_hid					
				         )
				  VALUES(
					'{$data['pic_path']}',
					'{$data['pic_name']}',
					'{$data['pic_type']}',
					'{$file_ssize}',
					'{$file_fsize}',
					NOW(),
					'{$_COOKIE['userid']}'					
			                     )
			           ");
		 	//return the result
			if(!($result)){
				closeMS();
				ajaxreturn('idea_createsuccess');										
			}
			else{
				closeMS();
	// 			echo"<script>alert('infor:savesucceed')</script>";										
			}						
		//Save the infor start Save the infor start Save the infor start
	/*save the post save the post save the post save the post save the post
	 */							
}
   ?>



