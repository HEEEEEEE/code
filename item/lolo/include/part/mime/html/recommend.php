<?php 
if($_GET['action']=='user_recommend'){
	//require each
	require substr(dirname(__FILE__),0,-22).'/include/each.php';
	//infor to the browser infor to the browser infor to the browser
	/*infor to the browser:select the infor*/
	//followinghid
	$search_following=sql_search("SELECT
				followinghid
			       FROM
			            he_social
			   WHERE
				hid='{$_COOKIE['userid']}'
	");
	
	//BASIC:minid
	$result_minid=sql_search("SELECT
		          MIN(id)
			AS
			minid
		      FROM
		          he_humans
	");
	$minid=$result_minid['minid'];
	//BASIC:idnum

	//BASIC:maxid
	$result_maxid=sql_search("SELECT
		          MAX(id)
			AS
			maxid
		      FROM
		          he_humans
	");
	$maxid=$result_maxid['maxid'];	
	$maxid=$maxid-2;
	//BASIC:minid maxid
	if($minid==0){
		$minid=1;
		$maxid=$minid+2;
	}else{
		$minid=mt_rand($minid,$maxid);
		$maxid=$minid+2;
	}
	$result=sql("SELECT
		            id,avatar,name
		        FROM
		            he_humans
		     WHERE
		            id BETWEEN $minid AND $maxid
			AND
			id !='{$_COOKIE['userid']}' 
		        ORDER BY
		            id
		           	     DESC
	");	
}
?>

	<?php 
	/*infor to the browser:echo the infor*/
		$html=array();
		while (!!$search=sql_searchall($result)){
			$html['id']=htmlF($search['id']);
			$html['avatar']=htmlF($search['avatar']);
			$html['name']=htmlF($search['name']);
			
			//have been following
			if($search_following['followinghid']!=''){
				$arr=explode(',', $search_following['followinghid']);
				$exist=in_array($html['id'], $arr);
				if($exist){
					$style="display:none";
				}else{
					$style="";
				}
			}else{
				$style="";
			}			
			//avatar
			$avatar=strlen(trim($html['avatar']));
			if($avatar > 0){
				$avatarimg=$html['avatar'];
				$avatar_back='background-color:rgba(0,0,0,0.125);';
				$avatarh='100px';
			}
			else{
				$avatarimg='include/part/mime/data/image/avatar.png';
				$avatar_back='';
				$avatarh='80px';
			}			
	?>
	<div class='user' style='<?php echo $style; ?>'>
		<div class='user-top'></div>		
			<div class='user-left' >
				<div class='user-avatar' style='<?php echo $avatar_back;?>'>
					<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['id'].'&mine=close';?>'>
						<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['id']; ?>" class="user-avatar-img" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
					</a>
				</div>
			</div>
				<div class='user-center' >
					<div class='user-name' title='<?php echo $html['name'];?>'><a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['id'].'&mine=close';?>'><?php echo $html['name'];?></a></div>
					<div class='user-follow' data-hid="<?php echo $html['id']; ?>">
						<span>+</span>
						<span>关注</span>
					</div>
				</div>	
			<div class='user-right' >
			</div>																																     
		<div class='user-bottom' ></div>		
		
		<div class='user-others' ></div>																				
	</div>	
	<?php 
		}
		freeRT($result);
	?>



