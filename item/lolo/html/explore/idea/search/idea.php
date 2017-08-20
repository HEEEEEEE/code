<?php 
if($_GET['action']=='idea_search'){
	//require each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';

	//filter for information filter for information filter for information
	//Include the function
	include ROOTDIR.'include/engine/fu/fu_string.php';
	//include function
	include ROOTDIR.'include/engine/fu/fu_time.php';	
	$data=array();
	$data['search']=string_filterlesstomore($_POST['search'],0,125);
	//filter for information filter for information filter for information	
	//infor to the browser infor to the browser infor to the browser
	/*infor to the browser:select the infor*/
	//ideaideaideaideaideaideaideaideaideaideaideaideaidea
	//idea's num
	$search_num=sql_search("
				SELECT
			   COUNT(id)
			AS
			   num
			FROM
			   he_idea
			WHERE
			   timestate=1
	                        AND
			lans 
		            LIKE
			'%{$data['search']}%'			 
	");
	if($search_num['num']>=25){$max=25;}else{$max=$search_num['num'];};		
	$result=sql("SELECT
		            id,hid,lans,image,firstentertype,avatar,name,lanspre,imagepre,destorytime,processstate,createtime
		      FROM
		            he_idea
		 WHERE
			timestate=1
	           AND
			lans 
		 LIKE
			'%{$data['search']}%'			 
		      ORDER BY
			createtime
		  DESC
		  LIMIT $max
	");			
}
?>
	<?php 
	/*infor to the browser:echo the infor*/
		$html=array();
		while (!!$search=sql_searchall($result)){
					$html['id']=htmlF($search['id']);
				$html['hid']=htmlF($search['hid']);
			$html['lans']=htmlF($search['lans']);			
			$html['image']=htmlF($search['image']);
			$html['firstentertype']=htmlF($search['firstentertype']);
			$html['avatar']=htmlF($search['avatar']);
			$html['name']=htmlF($search['name']);
			$html['lanspre']=htmlF($search['lanspre']);
			$html['imagepre']=htmlF($search['imagepre']);									
			$html['destorytime']=htmlF($search['destorytime']);
			$html['processstate']=htmlF($search['processstate']);
			$html['createtime']=htmlF($search['createtime']);
			//first
			$f=$html['firstentertype'];
			$imagep=strlen(trim($html['imagepre']));
			$lansp=strlen(trim($html['lanspre']));
			if(($f==1)&&($imagep<=0)){
				$lans='block';
				$lanstool='none';
				$imagepclass='';
				$imageptitle='';
				$imagep='';
				$imagepre='none';
				$lanspre='none';
				
				$image='none';
				$imagetool='none';
			}
			else if(($f==1)&&($imagep>0)){
				$lans='block';
				$lanstool='block';
				$imagepclass='show';
				$imageptitle='';
				$imagep=$html['imagepre'];
				$imagepre='block';
				$lanspre='none';
				
				$image='none';
				$imagetool='none';
			}
			else if(($f==2)&&($lansp<=0)){
				$image='block';
				$imagetool='none';
				$imageimg='none';
				$lanspclass='';
				$lansptitle='';
				$lansp='';
				$lanspre='none';
				$imagepre='none';
				
				$lans='none';
				$lanstool='none';
			}
			else if(($f==2)&&($lansp>0)){
				$image='block';
				$imagetool='block';
				$lanspclass='show';
				$lansptitle='';
				$lansp='include/part/idea/show/data/image/lanspre.png';
				$lanspre='block';
				$imagepre='none';
				
				$lans='none';
				$lanstool='none';
			}

			//avatar
			$avatar=strlen(trim($html['avatar']));
			if($avatar > 0){
				$avatarimg=$html['avatar'];
				$avatar_back='background-color:rgba(0,0,0,0.125);';				
				$avatarh='33px';
			}
			else{
				$avatarimg='include/part/idea/show/data/image/avatar.png';
				$avatar_back='';				
				$avatarh='28px';
			}
		 						 				
			//time
				//timeforcreate
				$c=Time_Count($html['createtime'],'001');				
				//timefordelete
				$b=Time_Count($html['destorytime'],'002');

	?>
	<div id="<?php echo 'IdeA_search'.$html['id']; ?>" class='idea_search'>
		<div class='idea_search-top'>				
		</div>
		
			<div class='idea_search-right' >										     
			</div>
			
				<div class='idea_search-center' >
					<div class='idea_search-center-con' >
						 <div style='display:<?php echo $lans; ?>' class='idea_search-center-con-1' >
						 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_words'.$html['id']; ?>" class='idea_search-words' ><?php echo $html['lans']; ?></span>						
						</div>
						 <div style='display:<?php echo $image; ?>' class='idea_search-center-con-2' >
							<div class='idea_search-image'><span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_image'.$html['id']; ?>" class='idea_search-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
						</div>
					</div>
					<div class='idea_search-center-tool' >
						 <div style='display:<?php echo $lanstool; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_toolimage'.$html['id']; ?>" class='idea_search-toolimage<?php echo $imagepclass;?>' title='<?php echo $imageptitle;?>' >
							<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_toolimagecon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$imagep;?>" />					
						</div>
						 <div style='display:<?php echo $imagetool; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_toollans'.$html['id']; ?>" class='idea_search-toollans<?php echo $lanspclass;?>' title='<?php echo $lansptitle;?>' >
							<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_toollanscon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$lansp;?>" />						
						</div>											
					</div>
					<div style='display:none' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_center_pre'.$html['id']; ?>" class='idea_search-center-pre' >
						 <div style='display:<?php echo $lanspre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_center_pre_1'.$html['id']; ?>" class='idea_search-center-pre-1' >
						 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_pre_lans'.$html['id']; ?>" class='idea_search-pre-lans' ><?php echo $html['lanspre']; ?></span>						
						</div>
						 <div style='display:<?php echo $imagepre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_center_pre_2'.$html['id']; ?>" class='idea_search-center-pre-2' >
							<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_pre_image'.$html['id']; ?>" class='idea_search-pre-image' src="<?php echo ROOTOTHERSDIR.$html['imagepre']; ?>" />											 								
						</div>
					</div>
					<?php 
					if($html['processstate']!='0'){
					?>
					<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_center_enterfra'.$html['id']; ?>" class='idea_search-center-enterfra'>
					</div>					
					<div style='display:none' id="<?php echo 'IdeA_search_center_enter'.$html['id']; ?>" class='idea_search-center-enter'>
						<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>' >
							<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_search_center_entercon'.$html['id']; ?>" class="idea_search-center-entercon" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
						</a>
					</div>										
					<?php 
					}
					?>																							     
				</div>
				
			<div class='idea_search-bottom' >
										     
			</div>
			
		<div class='idea_search-left' >					     
		</div>
		<div class='idea_search-others' >
				<div class='idea_search-others-1' >
					<div class='idea_search-others-1-div idea_search-others-1-avatar' style='<?php echo $avatar_back; ?>'>
						<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close';?>'>
						<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['hid']; ?>" id="<?php echo 'IdeA_search_others_1_avatar_con'.$html['id']; ?>" class="idea_search-others-1-avatar-con" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
						</a>
					</div>
					<div class='idea_search-others-1-div idea_search-others-1-1'>
						<div class='idea_search-others-1-1-name' >
							<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close';?>'><span class="idea_search-others-1-1-name-con"><?php echo $html['name'];?></span></a>
						</div>
						<div class='idea_search-others--1-1-time' >
							<span><?php echo $c; ?></span> <span>前露出</span>  
						</div>
					</div>
				</div>
				<div class='idea_search-others-2' >
					<?php 
					if($html['processstate']=='0'){
					?>
						<div class='idea_search-others-timeprocess' style='background-image:url("<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/processstate_notprocess.png'; ?>");'>
					             	<a class='idea_search-others-timeprocess-con' title='<?php echo '露露销毁倒计时中 离销毁还剩:'.$b; ?>'><span><?php echo $b; ?></span></a>					             
						</div>					
					<?php 
					}else if($html['processstate']=='1'){
					?>
						<div class='idea_search-others-timeprocessing' style='background-image:url("<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/processstate_processing.png'; ?>");'>
							<a class='idea_search-others-timeprocessing-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>加工中</span></a>					             
						</div>
					<?php										
					}else if($html['processstate']=='2'){
					?>
						<div class='idea_search-others-timeend' style='background-image:url("<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/processstate_end.png'; ?>");'>
						          <a class='idea_search-others-timeend-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>完工</span></a>					             
						</div>										
					<?php 
					}
					?>
				</div>									     
		</div>
		<div class='idea_search-basicinfo' style='display:none;'>
		</div>																		
	</div>
<?php 
		}
		freeRT($result);
?>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			