		
		<?php 
		//phpphpphpphpphpphpphpphpphpphpphpphpphpphpphpphpphpphpphpphp
		//top
		$search_humans=sql_search("SELECT
				       lolotop
			          FROM
				       he_humans
			       WHERE
				       id='{$_COOKIE['userid']}'
		");
		$expdata=explode(':',$search_humans['lolotop']);		      
		$search=sql_search("SELECT
			            id,hid,lans,image,firstentertype,avatar,name,destorytime,lanspre,imagepre,tag,processstate,createtime
			      FROM
			            he_idea
			         WHERE
		 		id=$expdata[1]
		 	          AND		 		
		 	            timestate=1
		 	        AND		 		
				hid=$expdata[0]
			      ORDER BY
				createtime
			  DESC
		 ");			
		?>
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml ?>	
		<?php 
		/*infor to the browser:echo the infor*/
			$html=array();
							$html['id']=htmlF($search['id']);
						$html['hid']=htmlF($search['hid']);
					$html['lans']=htmlF($search['lans']);
				$html['image']=htmlF($search['image']);
				$html['firstentertype']=htmlF($search['firstentertype']);
					
				$html['avatar']=htmlF($search['avatar']);
				$html['name']=htmlF($search['name']);
				$html['destorytime']=htmlF($search['destorytime']);
				
				$html['lanspre']=htmlF($search['lanspre']);
				$html['imagepre']=htmlF($search['imagepre']);
					
				$html['tag']=htmlF($search['tag']);
				
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
					$avatarh='50px';
				}
				else{
					$avatarimg='include/part/idea/show/data/image/avatar.png';
					$avatar_back='';
					$avatarh='40px';
				}
					
				//time
					//timeforcreate
					$p=strtotime($html['createtime']);
					$n=time();
					$c=$n-$p;
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
					//timefordelete				
					$f=strtotime($html['destorytime']);
					$n=time();
					$b=$f-$n;
					if(($b/86400)>1){
						$b=floor($b/86400);
						$b=$b.'天';
					}else{
						if(($b/3600)>1){
							$b=floor($b/3600);
							$b=$b.'小时';
						}else{
							if(($b/60)>1){
								$b=floor($b/60);
								$b=$b.'分钟';
							}else{
								$b=$b.'秒';
							}
						}
					}			
		?>
				<div id="<?php echo 'IdeA_ownnotmine'.$html['id']; ?>" class='idea_ownnotmine'>
					<div class='idea_ownnotmine-top idea_ownnotmine-div'>				
					</div>
					
						<div class='idea_ownnotmine-right idea_ownnotmine-div' >
							<div class='idea_ownnotmine-right-0'>
								<div class='idea_ownnotmine-right-more' >
									<div title='更多...' data-top="1" class="idea_ownnotmine-right-more1">
										<span></span><span></span><span></span>
									</div>
								</div>					
							</div>																											     
						</div>			
							<div class='idea_ownnotmine-center' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center'.$html['id']; ?>" >
								<div class='idea_ownnotmine-center-con' >
									 <div style='display:<?php echo $lans; ?>' class='idea_ownnotmine-center-con-1' >
									 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_words'.$html['id']; ?>" class='idea_ownnotmine-words' ><?php echo $html['lans']; ?></span>						
									</div>
									 <div style='display:<?php echo $image; ?>' class='idea_ownnotmine-center-con-2' >
										<div class='idea_ownnotmine-image'><span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_image'.$html['id']; ?>" class='idea_ownnotmine-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
									</div>
								</div>
								<div class='idea_ownnotmine-center-tool' >
									 <div style='display:<?php echo $lanstool; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_toolimage'.$html['id']; ?>" class='idea_ownnotmine-toolimage<?php echo $imagepclass;?>' title='<?php echo $imageptitle;?>' >
										<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_toolimagecon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$imagep;?>" />					
									</div>
									 <div style='display:<?php echo $imagetool; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_toollans'.$html['id']; ?>" class='idea_ownnotmine-toollans<?php echo $lanspclass;?>' title='<?php echo $lansptitle;?>' >
										<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_toollanscon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$lansp;?>" />						
									</div>											
								</div>
								<div style='display:none' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_pre'.$html['id']; ?>" class='idea_ownnotmine-center-pre' >
									 <div style='display:<?php echo $lanspre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_pre_1'.$html['id']; ?>" class='idea_ownnotmine-center-pre-1' >
									 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_pre_lans'.$html['id']; ?>" class='idea_ownnotmine-pre-lans' ><?php echo $html['lanspre']; ?></span>						
									</div>
									 <div style='display:<?php echo $imagepre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_pre_2'.$html['id']; ?>" class='idea_ownnotmine-center-pre-2' >
										<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_pre_image'.$html['id']; ?>" class='idea_ownnotmine-pre-image' src="<?php echo ROOTOTHERSDIR.$html['imagepre']; ?>" />											 								
									</div>
								</div>
								<?php 
								if($html['processstate']=='0'){
								?>
								
								<?php 
								}else if($html['processstate']=='1'){
								?>
									<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_enterfra'.$html['id']; ?>" class='idea_ownnotmine-center-enterfra'>
									</div>					
									<div style='display:none' id="<?php echo 'IdeA_ownnotmine_center_enter'.$html['id']; ?>" class='idea_ownnotmine-center-enter'>
										<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'>
										<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_entercon'.$html['id']; ?>" class="idea_ownnotmine-center-entercon" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
										</a>
									</div>
								<?php										
								}else if($html['processstate']=='2'){
								?>					
									<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_enterfra'.$html['id']; ?>" class='idea_ownnotmine-center-enterfra'>
									</div>					
									<div style='display:none' id="<?php echo 'IdeA_ownnotmine_center_enter'.$html['id']; ?>" class='idea_ownnotmine-center-enter'>
										<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'>
										<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_ownnotmine_center_entercon'.$html['id']; ?>" class="idea_ownnotmine-center-entercon" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
										</a>
									</div>					
								<?php 
								}
								?>																																						     
							</div>
							
						<div class='idea_ownnotmine-bottom idea_ownnotmine-div' >										     
						</div>
						
					<div class='idea_ownnotmine-left idea_ownnotmine-div' >					     
					</div>
					<div class='idea_ownnotmine-others' >
							<div class='idea_ownnotmine-others-1' >
								<div class='idea_ownnotmine-others-1-div idea_ownnotmine-others-1-avatar' style='<?php echo $avatar_back;?>'>
									<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'>
									<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['hid']; ?>" id="<?php echo 'IdeA_ownnotmine_others_1_avatar_con'.$html['id']; ?>" class="idea_ownnotmine-others-1-avatar-con" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
									</a>
								</div>
								<div class='idea_ownnotmine-others-1-div idea_ownnotmine-others-1-1'>
									<div class='idea_ownnotmine-others-1-1-name' >
										<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'><span class="idea_ownnotmine-others-1-1-name-con"><?php echo $html['name'];?></span></a>
									</div>
									<div class='idea_ownnotmine-others--1-1-time' >
										<span><?php echo $c; ?></span> <span>前露出</span>
									</div>
								</div>
							</div>
							<div class='idea_ownnotmine-others-2' >
								<?php 
								if($html['processstate']=='0'){
								?>
									<div class='idea_ownnotmine-others-timeprocess'>
										<a class='idea_ownnotmine-others-timeprocess-fra'></a>
								             	<a class='idea_ownnotmine-others-timeprocess-con' title='<?php echo '露露销毁倒计时中 离销毁还剩:'.$b; ?>'><span><?php echo $b; ?></span></a>					             
									</div>					
								<?php 
								}else if($html['processstate']=='1'){
								?>
									<div class='idea_ownnotmine-others-timeprocessing'>
										<a class='idea_ownnotmine-others-timeprocessing-fra'></a>
										<a class='idea_ownnotmine-others-timeprocessing-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>加工中</span></a>					             
									</div>
								<?php										
								}else if($html['processstate']=='2'){
								?>
									<div class='idea_ownnotmine-others-timeend'>
									          <a class='idea_ownnotmine-others-timeend-fra'></a>
									          <a class='idea_ownnotmine-others-timeend-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>完工</span></a>					             
									</div>										
								<?php 
								}
								?>
							</div>									     
					</div>
					<div class='idea_ownnotmine-basicinfo' style='display:none;'>
						<input type='hidden' id='<?php echo 'IdeA_ownnotmine_basicinfo_tag'.$html['id']; ?>' class='idea_ownnotmine-basicinfo-tag' value='<?php echo $html['tag']; ?>' />			     					     
						<input type='hidden' id='<?php echo 'IdeA_ownnotmine_basicinfo_processstate'.$html['id']; ?>' class='idea_ownnotmine-basicinfo-processstate' value='<?php echo $html['processstate']; ?>' />			     
					</div>																		
				</div>		
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml ?>