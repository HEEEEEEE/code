<?php 
if($_GET['action']=='mime'){
	//require each
	require substr(dirname(__FILE__),0,-22).'/include/each.php';
	//infor to the browser infor to the browser infor to the browser
	/*infor to the browser:select the infor*/
	//follow
		//basic
		if($_COOKIE['userid']==$_POST['hid'] && $_POST['mimeWhich']=='following'){
			$selectRow='followinghid';
			$belonguserid=$_COOKIE['userid'];
			
			$followClass='mime-following';
		}else if($_COOKIE['userid']==$_POST['hid'] && $_POST['mimeWhich']=='follower'){
			$selectRow='followhid';
			$belonguserid=$_COOKIE['userid'];

			$followClass='mime-follower';						
		}else if($_COOKIE['userid']!=$_POST['hid'] && $_POST['mimeWhich']=='following'){
			$selectRow='followinghid';
			$belonguserid=$_POST['hid'];

			$followClass='mime-following';						
		}else if($_COOKIE['userid']!=$_POST['hid'] && $_POST['mimeWhich']=='follower'){
			$selectRow='followhid';
			$belonguserid=$_POST['hid'];

			$followClass='mime-follower';			
		}else{
			ajaxreturn('未知错误 请刷新');
		}
			//id
			$search_follow=sql_search("SELECT
						$selectRow
					       FROM
						he_social
					   WHERE
						hid=$belonguserid
			");
			if($search_follow[$selectRow]!=''){
				$hid=$search_follow[$selectRow];
			}else{
				echo "这个地方一个人也没有";
				ajaxreturn('');
			}
			
			
				//info
				$result=sql("SELECT
					            id,avatar,name,bio
					        FROM
					            he_humans
					     WHERE
						id IN ($hid) 
					        ORDER BY
					            id
					           	     DESC
					 LIMIT 25
				");
		//follower
			//have been following
				if($_COOKIE['userid']==$_POST['hid'] && $_POST['mimeWhich']=='follower'){		
					$search_following=sql_search("SELECT
								followinghid
							        FROM
								he_social
							   WHERE
							            hid='{$_COOKIE['userid']}'
					");		
				}
				
}
?>

	<?php 
	/*infor to the browser:echo the infor*/
		$html=array();
		while (!!$search=sql_searchall($result)){
			$html['id']=htmlF($search['id']);
			$html['avatar']=htmlF($search['avatar']);
			$html['name']=htmlF($search['name']);
			$html['bio']=htmlF($search['bio']);
			
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

			//bio
			$bio=strlen(trim($html['bio']));
			if($bio > 0){
				$bio=$html['bio'];
			}else{
				$bio='这家伙还是一张白纸';
			}
			
			//have been following
			if($search_following['followinghid']!=''){
				$arr=explode(',', $search_following['followinghid']);
				$exist=in_array($html['id'], $arr);
				if($exist){
					$style="1";
				}else{
					$style="0";
				}
			}else{
				$style="0";
			}			
	?>
	<div class='mime <?php echo $followClass;?>' data-hid="<?php echo $html['id']; ?>">
		<div class='mime-top'></div>		
			<div class='mime-left' >
				<div class='mime-avatar' style='<?php echo $avatar_back;?>'>
					<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['id'].'&mine=close';?>'>
						<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['id']; ?>" class="mime-avatar-img" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
					</a>
				</div>
			</div>
				<div class='mime-center' >
					<div class='mime-name' title='<?php echo $html['name'];?>'><a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['id'].'&mine=close';?>'><?php echo $html['name'];?></a></div>
					<div class='mime-bio' ><?php echo $bio;?></div>
				</div>	
			<div class='mime-right' >
				<?php if($_COOKIE['userid']==$_POST['hid'] && $_POST['mimeWhich']=='following'){?>
					<div class='mime-follow' data-hid="<?php echo $html['id']; ?>">
						<span style='display:none;' class='follow unfollow' data-hid="<?php echo $html['id']; ?>">取消</span>
						<span class='follow following'>关注中</span>
					</div>					
				<?php }else if($_COOKIE['userid']==$_POST['hid'] && $_POST['mimeWhich']=='follower'){?>
					<div class='mime-follow' data-hid="<?php echo $html['id']; ?>">
						<?php if($style=='0'){?>
							<div class='follow startToFollow' data-hid="<?php echo $html['id']; ?>">
									<span>+</span>
									<span>关注</span>
							</div>
						<?php }else{?>
							<div class='follow haveBeenFollow' >
								<span>关注中</span>
							</div>
						<?php }?>
					</div>
				<?php }?>			
			</div>																																     
		<div class='mime-bottom' ></div>		
		
		<div class='mime-others' ></div>																				
	</div>
		
	<?php 
		}
		freeRT($result);
	?>



