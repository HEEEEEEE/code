<?php 
if($_GET['action']=='idea_showown'){
//header custom
header('Content-Type:text/html;charset=utf-8');

//require each
require substr(dirname(__FILE__),0,-21).'/include/each.php';
	
	//infor to the browser infor to the browser infor to the browser
	/*infor to the browser:select the infor*/
	$result=sql("SELECT
		            id,hid,firstentertype,lans,image,avatar,name,createtime
		      FROM
		            he_idea
		         WHERE
			timestate=1
		         AND
			processstate!=0
		      ORDER BY
			createtime
		  DESC
		");			
}else{
	exit('idea_showownactionfail');
}
?>
	<?php 
	/*infor to the browser:echo the infor*/
		$n=1;		
		while (!!$search=sql_searchall($result)){
			if($n <= 3){
	?>
			<?php			
				$html=array();
				$html['id']=htmlF($search['id']);
				$html['firstentertype']=htmlF($search['firstentertype']);
				$html['lans']=htmlF($search['lans']);
				$html['image']=htmlF($search['image']);
				$html['hid']=htmlF($search['hid']);
				$html['avatar']=htmlF($search['avatar']);
				$html['name']=htmlF($search['name']);
				$html['processstate']=htmlF($search['processstate']);
				$html['createtime']=htmlF($search['createtime']);
				//first
				$f=$html['firstentertype'];
				if($f=='1'){
					$lans='block';				
					$image='none';
				}else {
					$image='block';				
					$lans='none';
				}
								
				//avatar
				$avatar=strlen(trim($html['avatar']));
				if( ( $avatar > 0 )&&( ($n==1)||($n==3) ) ){
					$avatarimg=$html['avatar'];
					$avatar_back='background-color:rgba(0,0,0,0.125);';
					$avatarh='33px';
				}
				else if( ( $avatar > 0 )&&( $n==2 ) ){
					$avatarimg=$html['avatar'];
					$avatar_back='background-color:rgba(0,0,0,0.125);';
					$avatarh='50px';
				}
				else if( ( $avatar <= 0 )&&( ($n==1)||($n==3) ) ){
					$avatarimg='html/index/idea/show/avatar.png';
					$avatar_back='';
					$avatarh='28px';
				}else if( ( $avatar <= 0 )&&( $n==2 ) ){
					$avatarimg='html/index/idea/show/avatar.png';
					$avatar_back='';
					$avatarh='40px';
				}
				
				//time
					//timeforcreate
					$p=strtotime($html['createtime']);
					$now=time();
					$c=$now-$p;
					if(($c/86400)>1){
						$c=floor($c/86400);
						$c=$c.'天';
					}else{
						if(($c/3600)>1){
							$c=floor($c/3600);
							$c=$c.'小时';
						}else{
							if(($c/60)>1){
								$c=floor($c/60);
								$c=$c.'分钟';
							}else{
								$c=$c.'秒';
							}
						}
					}	
			?>
				<div id="<?php echo 'IdeA_own'.$html['id']; ?>" class='idea idea_own<?php echo $n; ?>'>
					<div class='idea_own<?php echo $n; ?>-top'>				
					</div>
					
						<div class='idea_own<?php echo $n; ?>-right' >										     
						</div>
						
							<div class='idea_own<?php echo $n; ?>-center' >
								<div class='idea_own<?php echo $n; ?>-center-con' >
									 <div style='display:<?php echo $lans; ?>' class='idea_own<?php echo $n; ?>-center-con-1' >
									 	<span id="<?php echo 'IdeA_own'.$n.'_words'.$html['id']; ?>" class='idea_own<?php echo $n; ?>-words' ><?php echo $html['lans']; ?></span>						
									</div>
									 <div style='display:<?php echo $image; ?>' class='idea_own<?php echo $n; ?>-center-con-2' >
										<div class='idea_own<?php echo $n; ?>-image'><span id="<?php echo 'IdeA_own'.$n.'_image'.$html['id']; ?>" class='idea_own<?php echo $n; ?>-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
									</div>
								</div>
								<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own'.$n.'_center_enterfra'.$html['id']; ?>" class='<?php echo 'idea_own'.$n.'-center-enterfra'; ?>'>
								</div>					
								<div style='display:none' id="<?php echo  'IdeA_own'.$n.'_center_enter'.$html['id']; ?>" class='<?php echo 'idea_own'.$n.'-center-enter'; ?>'>
									<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>' >
										<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own'.$n.'_center_entercon'.$html['id']; ?>" class="<?php echo 'idea_own'.$n.'-center-enterfra'; ?>" style="background-image:url(<?php echo ROOTOTHERSDIR.'html/index/idea/show/enter.png';?>);"></span>
									</a>
								</div>																																	     
							</div>
							
						<div class='idea_own<?php echo $n; ?>-bottom' >
													     
						</div>
						
					<div class='idea_own<?php echo $n; ?>-left' >					     
					</div>
					<div class='idea_own<?php echo $n; ?>-others' >
							<div class='idea_own<?php echo $n; ?>-others-1' >
								<div class='idea_own<?php echo $n; ?>-others-1-div idea_own<?php echo $n; ?>-others-1-avatar' style="<?php echo $avatar_back; ?>">
									<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'>
									<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['hid']; ?>" id="<?php echo 'IdeA_own_others_1_avatar_con'.$html['id']; ?>" class="idea_own<?php echo $n; ?>-others-1-avatar-con" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
									</a>
								</div>
								<div class='idea_own<?php echo $n; ?>-others-1-div idea_own<?php echo $n; ?>-others-1-1'>
									<div class='idea_own<?php echo $n; ?>-others-1-1-name' >
										<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'><span class="idea_own<?php echo $n; ?>-others-1-1-name-con"><?php echo $html['name'];?></span></a>
									</div>
									<div class='idea_own<?php echo $n; ?>-others--1-1-time' >
										<span><?php echo $c; ?></span> <span>前露出</span>  
									</div>
								</div>
							</div>												     
					</div>
					<div class='idea_own<?php echo $n; ?>-basicinfo' style='display:none;'>
					</div>																		
				</div>	
	<?php
			}else{
				exit;				
			}
		$n++;
		}			
		freeRT($result);
	?>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	