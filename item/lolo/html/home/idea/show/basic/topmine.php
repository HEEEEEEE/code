		
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
		 $search=sql_search("SELECT
				id,hid,lans,image,firstentertype,avatar,name,destorytime,lanspre,imagepre,tag,processstate,createtime
			   FROM
				he_idea
			     WHERE
		 		id='{$search_humans['lolotop']}'
		 	          AND		 		
		 	            timestate=1
		 	        AND
				hid='{$_COOKIE['userid']}'
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
						$firstEnterType=$html['firstentertype'];
					$imagepreforcondition=strlen(trim($html['imagepre']));
				$lanspreforcondition=strlen(trim($html['lanspre']));
				if(($firstEnterType==1)&&($imagepreforcondition<=0)){
					$lans='block';
					$imagepclass='';
					$imageptitle='封面+';
					$imagep='include/part/idea/show/data/image/imageadd.png';
					$imagepre='none';
					$lanspre='none';
					
					$image='none';
				}
				else if(($firstEnterType==1)&&($imagepreforcondition>0)){
					$lans='block';
					$imagepclass='show';
					$imageptitle='';
					$imagep=$html['imagepre'];
					$imagepre='block';
					$lanspre='none';
					
					$image='none';
				}
				else if(($firstEnterType==2)&&($lanspreforcondition<=0)){
					$image='block';
					$lanspclass='';
					$lansptitle='描述+';
					$lansp='include/part/idea/show/data/image/lansadd.png';
					$lanspre='none';
					$imagepre='none';
					
					$lans='none';
				}
				else if(($firstEnterType==2)&&($lanspreforcondition>0)){
					$image='block';
					$lanspclass='show';
					$lansptitle='';
					$lansp='include/part/idea/show/data/image/lanspre.png';
					$lanspre='block';
					$imagepre='none';
					
					$lans='none';
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
	
				//aroundbackColor
				
				if($html['processstate']=='2'){
					$aroundbackColorClass="idea_ownend";
				}else if($html['processstate']=='1'){
					$aroundbackColorClass="idea_ownprocessing";
				}else{
					$aroundbackColorClass="idea_ownnotprocess";
				}			
		?>
		<div id="<?php echo 'IdeA_own'.$html['id']; ?>" class='idea_own <?php echo $aroundbackColorClass; ?>'>
			<div class='idea_own-top idea_own-div'>				
			</div>
			
				<div class='idea_own-right idea_own-div' >
					<div class='idea_own-right-0'>
						<div class='idea_own-right-more' >
							<div title='更多...' data-top="1" data-ideaid="<?php echo $html['id']; ?>" class="idea_own-right-more1">
								<span></span><span></span><span></span>
							</div>
						</div>					
					</div>

					<div class='idea_own-right-1'>					
						<?php 
						if($html['processstate']=='1'){
						?>
						<div class='idea_own-right-tool' >
							<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'>
						     		<span title="进入露露" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
							</a>
						</div>
						<?php }?>					
					</div>											     
				</div>
				
					<div class='idea_own-center' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center'.$html['id']; ?>" >
						<div class='idea_own-center-con' >
							 <div style='display:<?php echo $lans; ?>' class='idea_own-center-con-1' >
							 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_words'.$html['id']; ?>" class='idea_own-words' ><?php echo $html['lans']; ?></span>						
							</div>
							 <div style='display:<?php echo $image; ?>' class='idea_own-center-con-2' >
								<div class='idea_own-image'><span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_image'.$html['id']; ?>" class='idea_own-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
							</div>
						</div>
						<?php if($html['processstate']!='2'){ ?>
						<div class='idea_own-center-tool' >
							 <div style='display:<?php echo $lans; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toolimage'.$html['id']; ?>" class='idea_own-toolimage<?php echo $imagepclass;?>' title='<?php echo $imageptitle;?>' >
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toolimagecon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$imagep;?>" />					
							</div>
							 <div style='display:<?php echo $image; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toollans'.$html['id']; ?>" class='idea_own-toollans<?php echo $lanspclass;?>' title='<?php echo $lansptitle;?>' >
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toollanscon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$lansp;?>" />						
							</div>											
						</div>
						<?php }else if(($html['processstate']=='2')&&(($lanspreforcondition>0)||($imagepreforcondition>0))){?>
						<div class='idea_own-center-tool' >
							 <div style='display:<?php echo $lans; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toolimage'.$html['id']; ?>" class='idea_own-toolimage<?php echo $imagepclass;?>' title='<?php echo $imageptitle;?>' >
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toolimagecon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$imagep;?>" />					
							</div>
							 <div style='display:<?php echo $image; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toollans'.$html['id']; ?>" class='idea_own-toollans<?php echo $lanspclass;?>' title='<?php echo $lansptitle;?>' >
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_toollanscon'.$html['id']; ?>" src="<?php echo ROOTOTHERSDIR.$lansp;?>" />						
							</div>											
						</div>											
						<?php }?>										
						<div style='display:none' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_pre'.$html['id']; ?>" class='idea_own-center-pre'>
							 <div style='display:<?php echo $lanspre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_pre_1'.$html['id']; ?>" class='idea_own-center-pre-1' >
							 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_pre_lans'.$html['id']; ?>" class='idea_own-pre-lans' ><?php echo $html['lanspre']; ?></span>
							 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_pre_lanschange'.$html['id']; ?>" class='idea_own-pre-lanschange' >更改</span>						
							</div>
							 <div style='display:<?php echo $imagepre; ?>' data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_pre_2'.$html['id']; ?>" class='idea_own-center-pre-2' >
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_pre_image'.$html['id']; ?>" class='idea_own-pre-image' src="<?php echo ROOTOTHERSDIR.$html['imagepre']; ?>" />
							 	<span data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_pre_imagechange'.$html['id']; ?>" class='idea_own-pre-imagechange'>更改</span>
								<img data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_pre_imageclear'.$html['id']; ?>" class='idea_own-pre-imageclear' alt='' title='清除' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/close.png'; ?>" />											 								
							</div>
						</div>		
						<?php 
						if($html['processstate']=='0'){
						?>
							<div class='idea_own-others-timeprocess'>
						             	<a class='idea_own-others-timeprocess-con' href='<?php echo ROOTOTHERSDIR.'works.php?ideaid='.$html['id']; ?>' title='<?php echo '露露销毁倒计时中 离销毁还剩:'.$b; ?>'><span><?php echo $b; ?></span></a>					             
							</div>		
							<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_processfra'.$html['id']; ?>" class='idea_own-center-processfra'>
							</div>					
							<div id="<?php echo 'IdeA_own_center_process'.$html['id']; ?>" class='idea_own-center-process'>
								<a href="<?php echo ROOTOTHERSDIR.'works.php?ideaid='.$html['id']; ?>">
									<img title="加工下露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_processcon'.$html['id']; ?>" class="idea_own-center-processcon" src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/anima/process.gif';?>" />
								</a>
							</div>					
						<?php 
						}else if($html['processstate']=='1'){
						?>
							<div class='idea_own-others-timeprocessing'>
								<a class='idea_own-others-timeprocessing-con'><span>加工中</span></a>					             
							</div>						
							<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_processfra'.$html['id']; ?>" class='idea_own-center-processfra'>
							</div>					
							<div id="<?php echo 'IdeA_own_center_process'.$html['id']; ?>" class='idea_own-center-process'>
								<a href="<?php echo ROOTOTHERSDIR.'works.php?ideaid='.$html['id']; ?>">
									<img title="加工下露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_processcon'.$html['id']; ?>" class="idea_own-center-processcon" src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/anima/process.gif';?>" />
								</a>
							</div>										
						<?php 
						}else if($html['processstate']=='2'){
						?>					
							<div data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_enterfra'.$html['id']; ?>" class='idea_own-center-enterfra'>
							</div>					
							<div style='display:none' id="<?php echo 'IdeA_own_center_enter'.$html['id']; ?>" class='idea_own-center-enter'>
								<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'>
								<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" id="<?php echo 'IdeA_own_center_entercon'.$html['id']; ?>" class="idea_own-center-entercon" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
								</a>
							</div>					
						<?php 
						}
						?>																																											     
					</div>
					
				<div class='idea_own-bottom idea_own-div' >										     
				</div>
				
			<div class='idea_own-left idea_own-div' >					     
			</div>
			<div class='idea_own-others' >
					<div class='idea_own-others-1' >
						<div class='idea_own-others-1-div idea_own-others-1-avatar' style='<?php echo $avatar_back;?>'>
							<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'>
							<img style="height:<?php echo $avatarh; ?>" data-hid="<?php echo $html['hid']; ?>" id="<?php echo 'IdeA_own_others_1_avatar_con'.$html['id']; ?>" class="idea_own-others-1-avatar-con" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
							</a>
						</div>
						<div class='idea_own-others-1-div idea_own-others-1-1'>
							<div class='idea_own-others-1-1-name' >
								<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['hid'].'&mine=close';?>'><span class="idea_own-others-1-1-name-con"><?php echo $html['name'];?></span></a>
							</div>
							<div class='idea_own-others--1-1-time' > 
								<span><?php echo $c; ?></span> <span>前露出</span>        
							</div>
						</div>
					</div>
					<div class='idea_own-others-2' >
						<?php 
						if($html['processstate']=='2'){
						?>
							<div class='idea_own-others-timeend'>
							          <a class='idea_own-others-timeend-fra'></a>
							          <a class='idea_own-others-timeend-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>完工</span></a>					             
							</div>										
						<?php 
						}
						?>
					</div>									     
			</div>
			<div class='idea_own-basicinfo' style='display:none;'>
				<input type='hidden' id='<?php echo 'IdeA_own_basicinfo_tag'.$html['id']; ?>' class='idea_own-basicinfo-tag' value='<?php echo $html['tag']; ?>' />			     					     
				<input type='hidden' id='<?php echo 'IdeA_own_basicinfo_processstate'.$html['id']; ?>' class='idea_own-basicinfo-processstate' value='<?php echo $html['processstate']; ?>' />				
			</div>																		
		</div>		
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml ?>