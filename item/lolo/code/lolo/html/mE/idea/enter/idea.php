<?php 
if($_GET['action']=='idea_enter'){
	//header coustom
	header('Content-Type:text/html;charset=utf-8');
	//Include each
	require substr(dirname(__FILE__),0,-18).'/include/each.php';
?>
		<?php
		//processstate
		$result_idea=sql_search("SELECT
				     processstate
				FROM
				     he_idea
				WHERE
				     id='{$_POST['ideaid']}'
		");
		$processstate=$result_idea['processstate'];		 
		if($processstate!=0){	
		?>
			<?php 
				//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP				
				//timepoint
				//num
				$result_timenum=sql_search("SELECT
						        COUNT(id)
						        AS
						      num
						    FROM
						        he_works
						    WHERE
						        iid='{$_POST['ideaid']}'
				");
				$timenum=$result_timenum['num'];
			?>
			<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<div id='MenU_ideaenterprocessstate'>
<?php 
if($processstate=='1'){
?>
	<div id='ProcessstatE_processing' style='background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/processstate_processing180.png'; ?>");'>
		<a id='ProcessstatE_processingcon' ><span>加工中</span></a>					             
	</div>
<?php										
}else if($processstate=='2'){
?>
	<div id='ProcessstatE_end' style='background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/processstate_end180.png'; ?>");'>
	          <a id='ProcessstatE_endcon' ><span>完工</span></a>					             
	</div>										
<?php 
}
?>
</div>

<div id='MenU_ideaenterendtips'>
<?php 
if($processstate=='2'){
?>
	<?php
		//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
		$result_timelineone=sql_search("SELECT
				     timepoint
			              FROM
			            he_works
			           WHERE
				iid='{$_POST['ideaid']}'
			           ORDER BY
				     id
			              DESC
		");
	?>								
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
	<?php 
		//timebefore
		$past=strtotime($result_timelineone['timepoint']);
		$now=time();
		$b=$now-$past;
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
	
		//timein
		$html_timelineone=strtotime($result_timelineone['timepoint']);
		$html_timelineone=date("m/d/Y H:i:s",$html_timelineone);
		$a_timelineone=explode(' ',$html_timelineone);
		$time_mdy_timelineone=$a_timelineone[0];
		$time_his_timelineone=$a_timelineone[1];
		$time_onein=$time_mdy_timelineone.' '.$time_his_timelineone;		
	?>
	<div id='MenU_ideaenterendtipscon'>
		<div>
			<span class='ideaenterendtipscontime'><?php echo $b; ?></span><span class='ideaenterendtipscontips'>前完工</span>
		</div>		
		<div>
			<span class='ideaenterendtipscontips'>时间是:</span><span class='ideaenterendtipscontime'><?php echo $time_onein; ?></span>
		</div>
	</div>
<?php										
}
?>
</div>

<div id='MenU_ideaentercomment'></div>
			
<div id='MenU_ideaenter'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_enterid' >
		<dt><input type='hidden' id='HiddeN_enterhid' value='<?php echo $_POST['hid'];?>' /></dt>
		<dt><input type='hidden' id='HiddeN_enteriid' value='<?php echo $_POST['ideaid'];?>' /></dt>				
		</dl>
		<dl id='HiddeN_enterproc' >
		<dt><input type='hidden' id='HiddeN_enterprocvalue' value='<?php echo $processstate;?>' /></dt>
		</dl>
		
		<dl id='HiddeN_enterurl' >
		<dt><input type='hidden' id='HiddeN_enterurlvalue' value='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_POST['hid'].'&mine=close&ideaid='.$_POST['ideaid']; ?>' /></dt>
		</dl>											
	</div>
	<div id='MenU_ideaenterback'></div>
	<div id='MenU_ideaentertop'>
	</div>
	
		<div id='MenU_ideaenterright'>
			<div id='MenU_ideaenterrightmain'>
					<div id='IdeA_enterenilemit'></div>							
					<div id='IdeA_entertimeline'>								
					<!--<div id='TimelinE_begin'>Begin</div> -->
							<?php if($timenum > 4){$class_timeline='timeline5';}else{$class_timeline='timeline'.$timenum;}?>
							<div id='TimelinE' class='<?php echo $class_timeline; ?>'>
								<?php
									//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
									if($processstate==1){
										$result_timelineorder=' DESC';
									}else{
										$result_timelineorder=' ASC';
									}
									$result_timeline=sql("SELECT
											     id,timepoint
										              FROM
										            he_works
										           WHERE
											iid='{$_POST['ideaid']}'
										           ORDER BY
											     id
										              $result_timelineorder
									");
								?>								
									<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
								<?php 									
									$html=array();
									$n=1;
									while (!!$search=sql_searchall($result_timeline)){
										$html['id']=htmlF($search['id']);
										$html['timepoint']=strtotime($search['timepoint']);
										
										$timepoint=date("m/d/Y H:i:s",$html['timepoint']);
										$a=explode(' ',$timepoint);
										$time_mdy=$a[0];
										$time_his=$a[1];
										if($n==$timenum){
											$n='last';
										}
										//timeless
										$past=$html['timepoint'];
										$now=time();
										$b=$now-$past;
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
									<div data-ordernum='<?php echo $n; ?>' data-timeid='<?php echo $html['id']; ?>' id='<?php echo 'TimepoinT'.$html['id']; ?>' class='timepoint'>
										<div class='timepointfra'>
											<div class='timepoint_left'>
												<span class='timepoint_leftmdy'><?php echo $b; ?></span><span class='timepoint_lefttips'>前发送</span>
											</div>										
											<div class='timepointcon' style='display:none'>
												<div class='timepointcon-mdy'><?php echo $time_mdy; ?></div>
												<div class='timepointcon-his'><?php echo $time_his; ?></div>
											</div>
										</div>
									</div>
								<?php 
								            $n++;
									}
									freeRT($result_timeline);
								?>
								<?php if($timenum>5){?>
															
								<?php }?>								
							</div>
						<?php if($timenum>5){?>
							<div id='TimelinE_expanddown' class='timeline-expand' title='展开' style='background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/expand_down.png'; ?>");'></div>
							<div id='TimelinE_expandup' title='收起' class='timeline-expand' style='display:none;background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/expand_up.png'; ?>");'></div>																																											
						<?php }?>		
						<?php 
						if( (isset($_COOKIE['userid'])) && ($_COOKIE['userid']==$_POST['hid']) && ($processstate==1) ){
						?>							
							<?php 
							$timeless=12-$timenum;
							if($timeless!=1){
								$less="<span>还能加个数</span>"."<span style='color:rgba(0,255,0,1)'>"." ".$timeless."</span>";
							}else{
								$less="<span style='color:rgba(255,0,0,1)'>最后一个了</span>";
							}
							?>
							<?php if($timenum > 4){$class_timeprocessin='timeprocessin';}else{$class_timeprocessin='timeprocessin';}?>
							<div id='TimeprocessiN' class='timeprocessing'>
								<a><span class='timeprocessin-fra'></span></a>
								<a href="<?php echo ROOTOTHERSDIR.'works.php?ideaid='.$_POST['ideaid']; ?>"><img title='再加' class='timeprocessin-img' src="<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/process.gif'; ?>" /></a>
								<a><span class='timeprocessin-less'><?php echo $less; ?></span></a>
							</div>
						<?php }?>
					</div>
			</div>
			<div id='MenU_ideaenterrightothers'></div>		
		</div>
					
			<div id='MenU_ideaentercenter'>
				<div id='MenU_ideaentercentermain'>
					<div id='MenU_ideaentercentermainleft'></div>
						<div id='MenU_ideaentercentermaintop'>
						</div>
							<div id='MenU_ideaentercentermaincenter'>
								<div id='MenU_ideaentercentermaincentercon'>
								<?php
									//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP	
									if($processstate==1){
										$result_timeconorder=' DESC';								
									}else{
										$result_timeconorder=' ASC';
									}														
									$result_timecon=sql("SELECT
											     id,timepoint,image,des
											    FROM
											  he_works
										           WHERE
											  iid='{$_POST['ideaid']}'
											     ORDER BY
											   id
											$result_timeconorder
									");														
								?>
									<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
								<?php
									$html_timecon=array();
									$n=1;
									while (!!$search=sql_searchall($result_timecon)){
										$html_timecon=array();
										$html_timecon['id']=htmlF($search['id']);
										$html_timecon['timepoint']=strtotime($search['timepoint']);
										$html_timecon['image']=htmlF($search['image']);
										$html_timecon['des']=htmlF($search['des']);
															
										//first timecont show
										if($n==1){
											//timeclass
											$timeclass='timecon timeshow';
										}else{
											//timeclass
											$timeclass='timecon timehide';
										}											
								?>
										<div data-timeid='<?php echo $html_timecon['id']; ?>' id='TimeconT<?php echo $html_timecon['id']; ?>' class='<?php echo $timeclass; ?>'>		
											<div id='TimeconT_ye<?php echo $html_timecon['id']; ?>' class='timecont-ye'>
												<div id='TimeconT_main<?php echo $html_timecon['id']; ?>' class='timecont-main'>
													<div class='timecont-main1'>
														<div class='timecont-main1con'>
															<span class='timecont-main1conimg' data-url='<?php echo $html_timecon['image']; ?>' style="background-image:url('<?php echo $html_timecon['image']; ?>');"></span>
														</div>											
													</div>								
												</div>
												<div id='TimeconT_point<?php echo $html_timecon['id']; ?>' class='timecont-point'>
													
												</div>
												<div id='TimeconT_form<?php echo $html_timecon['id']; ?>' class='timecont-form'>
													<div class='timecont-form1'>
														<div class='timecont-form1con'>
															<span class='timecont-form1condes'><?php echo $html_timecon['des']; ?></span>
														</div>								
													</div>														
												</div>
											</div>						
										</div>						
								<?php
									$n++;
									}
		                                                                                    freeRT($result_timecon);
								?>
								</div>
								<?php 
									/*count the commentcount the commentcount the commentcount the commentcount the comment
									 * 
									 */
									$search_comnum=sql_search("SELECT
                                                                                                                                             COUNT(id)
										                  AS
                    										         num
										               FROM			
											         he_ideacomment
										            WHERE						
											         iid='{$_POST['ideaid']}'	
									");	
									if($search_comnum['num']==0){
										$commentNum='';
										$imgP='html/mE/idea/enter/tool_commentsno.png';
									}else{
										$commentNum=$search_comnum['num'];
										$imgP='html/mE/idea/enter/tool_commentsye.png';
									}									
								?>
								<div id='MenU_ideaentercentermaincentertool'>
									<div id='IdeaenterR_tool'>
										<div title='<?php echo '评论('.$commentNum.')'; ?>' id='IdeaenterR_tool1' class='ideaenter-tool'>
											<span id='IdeaenterR_tool1-img' class='ideaenter-tool-img' style='background-image:url("<?php echo ROOTOTHERSDIR.$imgP; ?>");'></span>
											<span style='display:none;' id='IdeaenterR_tool1-lan' class='ideaenter-tool-lan' ></span>
										</div>							
									</div>
								</div>						
							</div>
						<div id='MenU_ideaentercentermainright'></div>
					<div id='MenU_ideaentercentermainbottom'>
					
					</div>				
				</div>
				<div id='MenU_ideaentercenterothers'></div>	
			</div>
			
		<div id='MenU_ideaenterleft'>
			<div id='MenU_ideaenterleftmain'>
				<div id='IdeA_enteraedi'>	</div>
							
				<div id='IdeA_enteridea'>				
					<div id='IdeA_enteridea1'>
						<?php 
						//infor to the browser infor to the browser infor to the browser
						/*infor to the browser:select the infor*/
						$search=sql_search("SELECT
							    lans,image,tag,firstentertype,lanspre,imagepre
							   FROM
							    he_idea
							  WHERE
							    id='{$_POST['ideaid']}'
						");
						/*infor to the browser:echo the infor*/
						$html=array();
						$html['id']=htmlF($search['id']);
							$html['hid']=htmlF($search['hid']);
							
								$html['lans']=htmlF($search['lans']);
							      $html['image']=htmlF($search['image']);
							$html['tag']=htmlF($search['tag']);
								
						$html['firstentertype']=htmlF($search['firstentertype']);
						
						$html['lanspre']=htmlF($search['lanspre']);
						$html['imagepre']=htmlF($search['imagepre']);
						
						//prepreprepreprepreprepreprepreprepreprepreprepre
						$f=$html['firstentertype'];
						$imagep=strlen(trim($html['imagepre']));
						$lansp=strlen(trim($html['lanspre']));
						if(($f==1)&&($imagep<=0)){
							$lans='block';
							$imagepre='none';
							$lanspre='none';
							
							$image='none';
						}
						else if(($f==1)&&($imagep>0)){
							$lans='block';
							$imagepre='block';
							$lanspre='none';
							
							$image='none';
						}
						else if(($f==2)&&($lansp<=0)){
							$image='block';
							$lanspre='none';
							$imagepre='none';
							
							$lans='none';
						}
						else if(($f==2)&&($lansp>0)){
							$image='block';
							$lanspre='block';
							$imagepre='none';
							
							$lans='none';
						}
						
						//tagtagtagtagtagtagtagtagtagtagtagtag
						$tagL=strlen(trim($html['tag']));
						if($tagL > 0){
							$tag='block';
							$pattern="/,/";
							$subject=$html['tag'];
							if(preg_match($pattern, $subject)){
								$pattern="/,/";
								$replacement=' ';
								$subject=$html['tag'];
								$tagcon=preg_replace($pattern, $replacement, $subject);                          
							}else{
								$tagcon=$html['tag'];
							}

						}else{
							$tag='none';
							$tagcon='';
						}

						?>					
						<div id="<?php echo 'IdeA_enter'.$html['id']; ?>" class='idea_enter'>
							<div class='idea_enter-top'></div>		
								<div class='idea_enter-right' ></div>			
									<div class='idea_enter-center' >
										<div class='idea_enter-center-con' >
											 <div style='display:<?php echo $lans ; ?>' class='idea_enter-center-con-1' >
											 	<span class='idea_enter-words' ><?php echo $html['lans'] ; ?></span>						
											</div>
											 <div style='display:<?php echo $image ; ?>' class='idea_enter-center-con-2' >
												<div class='idea_enter-image'>
													<span class='idea_enter-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span>	
												</div>						
											</div>
										</div>
																					     
									</div>				
								<div class='idea_enter-bottom' ></div>								
							<div class='idea_enter-left' ></div>
							
							<div class='idea_enter-others' ></div>
							<div class='idea_enter-basicinfo' style='display:none;'></div>																		
						</div>	
					</div>
					
					<div id='IdeA_enteridea2'>
						<div id='IdeA_pre'>
							<div style='display:<?php echo $imagepre ; ?>' id='IdeA_pre1'>
								<div id='IdeA_pre1guide'>
									<span id='IdeA_pre1guidecon'>封面</span>
								</div>
								<div id='IdeA_pre1con'>
									<span id='IdeA_pre1concon' style="background-image:url('<?php echo $html['imagepre'] ; ?>');"></span>
								</div>
							</div>
							<div style='display:<?php echo $lanspre ; ?>' id='IdeA_pre2'>
								<div id='IdeA_pre2guide'>
									<span id='IdeA_pre2guidecon'>描述</span>
								</div>
								<div id='IdeA_pre2con'>
									<span id='IdeA_pre2concon'><?php echo $html['lanspre'] ; ?></span>
								</div>							
							</div>
						</div>
						<div id='IdeA_tag'>
							<div style='display:<?php echo $tag ; ?>' id='IdeA_tagcon'>
								<div id='IdeA_tagconguide'>
									<span id='IdeA_tagconguidecon'>标签</span>
								</div>
								<div id='IdeA_tagconcon'>
									<span id='IdeA_tagconconcon'><?php echo $tagcon ; ?></span>
								</div>
							</div>
						</div>						
					</div>					
				</div>
			</div>
			<div id='MenU_ideaenterleftothers'></div>
		</div>					
	<div id='MenU_ideaenterbottom'>
	</div>											
</div>											
		<?php }else{ ?>
			<?php 
			//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
			
			?>
			<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>	
			
			
						
		<?php }?>	
<?php
}else{
	exit('idea_enterfail');	
}
?>
