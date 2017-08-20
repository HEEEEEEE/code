<?php 
// php + sql php + sql php + sql php + sql php + sql php + sql
if($_GET['action']=='idea_createlan'){
	//Include each
	require substr(dirname(__FILE__),0,-30).'/include/each.php';
		
	//is dangerous operation check the uniqid
	cUniqid();
	
	//update the ideaupdate the ideaupdate the ideaupdate the i	
	$search_idealast=sql_search("SELECT
			id,timestate,processstate
			FROM
			he_idea
			WHERE
			hid='{$_COOKIE['userid']}'
			ORDER BY
			createtime
			DESC
	");
	if($search_idealast['timestate']!=0){
		if($search_idealast['processstate']==0){
			//update the ideanotproc
			$result_updateidea=sql("UPDATE
					he_idea
					SET
					timestate=0
					WHERE
					id='{$search_idealast['id']}'
					AND
					hid='{$_COOKIE['userid']}'
			");
			if(! $result_updateidea){
				closeMS();
				ajaxreturn('upadteideafail');
			}
		}else if($search_idealast['processstate']==1){
			//update the ideaprocessing
			$result_updateidea=sql("UPDATE
					he_idea
					SET
					processstate=2
					WHERE
					id='{$search_idealast['id']}'
					AND
					hid='{$_COOKIE['userid']}'
			");
			if(! $result_updateidea){
				closeMS();
				ajaxreturn('upadteideafail');
			}
		}
	}
	//update the ideaupdate the ideaupdate the ideaupdate the i	
	
	/*filter the post filter the post filter the post filter the post filter the post
	 */
	//filter for information //filter for information //filter for information
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
	//FILTER	
	$data=array();
	$data['lans']=string_filterlesstomore($_POST['lans'],0,125);
	$search=sql_search("SELECT
			avatar
		         FROM
			he_humans
		        WHERE
			id='{$_COOKIE['userid']}'
	");	
	//Save the infor
	$result=sql("INSERT
		    INTO
		      he_idea(       
			        hid,
				lans,
			              firstentertype,
				           createtime,
                                                destorytime,			
			        avatar,
				name		
			 )
		      VALUES( 
			        '{$_COOKIE['userid']}',
				     '{$data['lans']}',
				                     1,
			                                  NOW(),
			                 DATE_ADD(NOW(),INTERVAL 6 DAY),                            
			            '{$search['avatar']}',
			        '{$_COOKIE['username']}'
			)
	");	
	if($result){
// 		setcookie('usercreatehabbit','0',time()+(5*24*60*60),'/');			
		closeMS();
		ajaxreturn('idea_createsuccess;');							
	}else{
		closeMS();
		ajaxreturn('idea_createinfofail');		
	}			
}
//       database database database database database database
?>



