<?php
//Start to upload a video
if($_GET['action']=='album_create'){
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';	
//is dangerous operation check the uniqid
cUniqid();
            /*filter the post filter the post filter the post filter the post filter the post
             */
	//Include the function	 
	include PROJECTDIR.'include/engine/fu/fu_string.php';		
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
				Calbum_type=4
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
		else{
			$result0=sql_search("SELECT
					   Close_dir
				               FROM
					    He_close
				              WHERE
					   Close_id='{$_POST['cid']}'
				             AND										
				         Close_hid='{$_COOKIE['userid']}'
				       ");			
			$Calbum_dir=$result0['Close_dir'].'/album/video/album/'.$_POST['name'];			
		}				
	//not to search the database
		$data=array();
		//Close
		$data['name']=string_filtername($_POST['name'],0,25);
		$data['cid']=string_filterid($_POST['cid'],1,12);
	/*filter the post filter the post filter the post filter the post filter the post
	 */
		
	/*save the post save the post save the post save the post save the post
	 */	
		//save sources start save sources start save sources start
				//file to create
				$dir=ROOTDIR1.$Calbum_dir;
				if(!(file_exists($dir))){
					mkdir($dir,0777,true);
					if(!(file_exists($dir))){
						ajaxreturn("create:fail" );
					}
				}
				else{
					ajaxreturn("direxist" );					
				}				
		//save sources end save sources end save sources end
		
			
		//Save the infor start Save the infor start Save the infor start
		 	
			//save the post infor to database								
		 	$result=sql("INSERT INTO
				He_calbum(
					Calbum_name,
					       Calbum_dir,
		 			          Calbum_type,
		 			       Calbum_cid,				
					     Calbum_hid,
					  Calbum_time,
		 			Calbum_updtime					
				         )
				  VALUES(
					'{$data['name']}',
					'{$Calbum_dir}',
					4,
					'{$_POST['cid']}',
					'{$_COOKIE['userid']}',
					NOW(),
					NOW()					
			                     )
			           ");
		 	//return the result
			if(!($result)){
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