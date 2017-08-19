<?php 
if($_GET['action']=='works_processmenushow'){
	//header coustom
	header('Content-Type:text/html;charset=utf-8');
	//Include each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';

	$search_idea=sql_search("SELECT
			    id,processstate
		           FROM
			    he_idea
		         WHERE
			    hid='{$_COOKIE['userid']}'
			AND
			    timestate=1
			ORDER BY
		         createtime
		                   DESC
	");
	if($search_idea['id']){
		$ideaIdFromDB=$search_idea['id'];
		$ideaProcessStateFromDB=$search_idea['processstate'];
	}	
?>
	<?php 
	if($ideaProcessStateFromDB=='0'){	
	?>
		<?php 
		//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
		
		?>
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<div id='MenU_worksprocess'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_processid' >
		<dt><input type='hidden' id='HiddeN_processhid' value='<?php echo $_COOKIE['userid'];?>' /></dt>
		<dt><input type='hidden' id='HiddeN_processiid' value='<?php echo $ideaIdFromDB;?>' /></dt>				
		</dl>							
	</div>
	<div id='MenU_worksprocesstop'></div>
		<div id='MenU_worksprocessright'></div>
			<div id='MenU_worksprocesscenterback'></div>
			<div id='MenU_worksprocesscenter'>
				<div class='menu-worksprocess' id='MenU_workstimecont'>
					<div id='TimeborsweR' class='timeborswer'>
						<div id='TimeborsweR_con1' class='timeborswer-con'></div>
					</div>
					<div id='MenU_workstimecontcon'>
						<div style='display:none;' id='TimeerroR' class='timeerror'>
						
						</div>
						<div id='TimeconT' class='timecont'>
							<div style='margin:0 auto;' id='TimeconT_main' class='timecont-main'>
								<div id='TimeconT_main2' class='timecont-main2'>
									<div id='TimeconT_main2tips' class='timecont-main2tips'>
										<span id='TimeconT_main2tipscon' class='timecont-main2tipscon'></span>
									</div>								
									<div id='TimeconT_main2con' class='timecont-main2con'>
										<form id='FroM_upload1' name='form-upload' enctype='multipart/form-data'>
										<img id='TimeconT_main2conimg' class='timecont-main2conimg' title='用照片加工' alt="用照片加工" src="<?php echo ROOTOTHERSDIR.'html/works/works/process/egami.png';?>" />
										<img style='display:none;' id='TimeconT_main2congmi' class='timecont-main2conimg' title='用照片加工' alt="用照片加工" src="<?php echo ROOTOTHERSDIR.'html/works/works/process/image.png';?>" />
										<input title='用照片加工' id='InpuT_upload1' type='file' name='input-upload' value='' accept='image/png' />
										</form>
									</div>
									<div style='display:none;' id='TimeconT_main2str' class='timecont-main2str'>
										<span id='TimeconT_main2strcancel' class='timecont-main2strcancel' >取消</span>
										<img id='TimeconT_main2strbro' class='timecont-main2strbro' src="" />
										<span id='TimeconT_main2strdone' class='timecont-main2strdone' >下一步</span>
									</div>								
								</div>								
							</div>
							<div id='TimeconT_form' class='timecont-form'>
								<div style='display:none;' id='TimeconT_form2' class='timecont-form'>
									<div style='display:none;' id='TimeconT_form2ent' class='timecont-form2ent'>
										还可以输入:<span id='TimeconT_form2entnum' class='timecont-form2entnum contentEditableNum'>125</span>
									</div>								
									<div id='TimeconT_form2con' class='timecont-formcon'>
										<span data-color='true' data-holder='timecont-form2condesholder' data-parents='TimeconT_form' class='contentEditable timecont-form2condes timecont-form2condesholder' id='TimeconT_form2condes' contentEditable='true' spellcheck='false' data-placeholder-default="背后有什么故事!"></span>
									</div>								
								</div>														
							</div>																
						</div>
						<div style='display:none;' id='TimedonE' class='timedone'>
								<span id='TimedonE_con' class='timedone-con'>加露</span>
								<span id='TimedonE_cancel' class='timedone-cancel' >取消</span>
								<span id='TimedonE_fra1'></span>
						</div>										
					</div>										
				</div>
				
				<div class='menu-worksprocess' id='MenU_workstimeline'>
					<div id='MenU_workstimelinenoc'></div>
					<div id='MenU_workstimelinecon'>
						<div id='MenU_workstimelineconcon'>
							<div id='TimelinE_begin'>现在加:</div>
							<div id='TimelinE'>
								<?php 
								//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
									$begin=date("m/d/Y H:i:s",time());
									$a=explode(' ',$begin);
									$time_mdy=$a[0];
									$time_his=$a[1];
								?>
								<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
									<div class='timepoint'>
										<div class='timepointfra'>
											<div class='timepointcon'>
												<div class='timepointcon-mdy'><?php echo $time_mdy; ?></div>
												<div class='timepointcon-his'><?php echo $time_his; ?></div>
											</div>
										</div>
									</div>
							</div>
						</div>												
					</div>	
				</div>				
			</div>												
		<div id='MenU_worksprocessbottom'></div>
	<div id='MenU_worksprocessleft'></div>				
</div>			
	<?php }else if($ideaProcessStateFromDB=='1'){ ?>
		<?php 
		//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
		//timepointtimepointtimepointtimepointtimepointtimepointtimepointtimepointtimepointimepointtimepointtimepointtimepointtimepoint
		//num
		$result_timenum=sql_search("SELECT
				       COUNT(id)
				      AS
				    num
				      FROM
				       he_works
				    WHERE
				       iid='{$ideaIdFromDB}'
				   AND
				       hid='{$_COOKIE['userid']}'
		");
		$timenum=$result_timenum['num'];
		$leftnum=12-$timenum;
		//con
		$result_timecon=sql_search("SELECT
				 id,image,des,timepoint
			          FROM
		                         he_works
		                        WHERE
		                              iid='{$ideaIdFromDB}'
		                           AND
		                              hid='{$_COOKIE['userid']}'
		                        ORDER BY
		                            id
		                      DESC
		");
		$html_timecon=array();
		$html_timecon['id']=htmlF($result_timecon['id']);
		$html_timecon['image']=htmlF($result_timecon['image']);
		$html_timecon['des']=htmlF($result_timecon['des']);
		$html_timecon['timepoint']=htmlF(strtotime($result_timecon['timepoint']));
		
		//timeless
		$past=$html_timecon['timepoint'];
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
		
		//timepoint
		$html_timecon['timepoint']=date("m/d/Y H:i:s",$html_timecon['timepoint']);
		$a=explode(' ',$html_timecon['timepoint']);
		$time_mdy=$a[0];
		$time_his=$a[1];		
		?>
		<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<div id='MenU_worksprocess'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_processid' >
		<dt><input type='hidden' id='HiddeN_processhid' value='<?php echo $_COOKIE['userid'];?>' /></dt>
		<dt><input type='hidden' id='HiddeN_processiid' value='<?php echo $ideaIdFromDB;?>' /></dt>
		<dt><input type='hidden' id='HiddeN_processiidnum' value='<?php echo $timenum;?>' /></dt>						
		</dl>							
	</div>
	<div id='MenU_worksprocesstop'></div>
		<div id='MenU_worksprocessright'></div>
			<div id='MenU_worksprocesscenterback'></div>
			<div id='MenU_worksprocesscenter'>
				<div class='menu-worksprocess' id='MenU_workstimecont'>
					<div id='TimeborsweR' class='timeborswer'>
						<div id='TimeborsweR_con1' class='timeborswer-con'>
							<div id='ProcesstooL1' class='processtool'>
								<form id='FroM_upload1' name='form-upload' enctype='multipart/form-data'>
									<img id='TimeconT_main2conimg' class='timecont-main2conimg' title='用照片加工' alt="用照片加工" src="<?php echo ROOTOTHERSDIR.'html/works/works/process/egami.png';?>" />
									<img style='display:none;' id='TimeconT_main2congmi' class='timecont-main2conimg' title='用照片加工' alt="照片+" src="<?php echo ROOTOTHERSDIR.'html/works/works/process/image.png';?>" />
									<input title='用照片加工' id='InpuT_upload1' type='file' name='input-upload' value='' accept='image/png' />
								</form>
							</div>						
						</div>
					</div>
					<div id='MenU_workstimecontcon'>
						<div style='display:none;' id='TimeerroR' class='timeerror'>
							
						</div>
						<div id='TimecoN_nearest'>
							<div id='TimecoN_browser'>
								<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close&ideaid='.$ideaIdFromDB;?>'>浏览</a>
							</div>						
							<div id='TimecoN_point'>
								<div class='timecon_point timeCon_pointTips'>还能加个数</div>
								<div class='timecon_point' id='TimecoN_pointleft'><?php echo $leftnum;?></div>
								<div class='timecon_point timeCon_pointSplit'>;</div>
								<div class='timecon_point timeCon_pointMDY' id='TimecoN_pointmdy'><?php echo $b; ?></div>
								<div class='timecon_point timeCon_pointTips timeCon_pointMDY'>前发送</div>
							</div>													
						</div>

						<div data-timeid='<?php echo $html_timecon['id']; ?>' id='TimeconT' class='timecont'>
							<div style='margin:0;' id='TimeconT_main' class='timecont-main'>
								<div id='TimeconT_main1' class='timecont-main1'>
									<div id='TimeconT_main1con' class='timecont-main1con'>
										<span id='TimeconT_main1conimg' class='timecont-main1conimg' style="background-image:url('<?php echo ROOTOTHERSDIR.$html_timecon['image']; ?>');"></span>
									</div>								
								</div>
								<div style='display:none' id='TimeconT_main2' class='timecont-main2'>							
									<div id='TimeconT_main2str' class='timecont-main2str'>
										<span id='TimeconT_main2strcancel' class='timecont-main2strcancel' >取消</span>
										<img id='TimeconT_main2strbro' class='timecont-main2strbro' src="" />
										<span id='TimeconT_main2strdone' class='timecont-main2strdone' >下一步</span>
									</div>								
								</div>								
							</div>
							<div id='TimeconT_form' class='timecont-form'>
								<div id='TimeconT_form1' class='timecont-form'>
									<div style='display:none;' id='TimeconT_form1str' class='timecont-form1str'>
									</div>
									<div id='TimeconT_form1con' class='timecont-formcon'>
										<span id='TimeconT_form1condes' class='timecont-form1condes'><?php echo $html_timecon['des']; ?></span>
									</div>								
								</div>
								<div style='display:none;' id='TimeconT_form2' class='timecont-form'>
									<div style='display:none;' id='TimeconT_form2ent' class='timecont-form2ent'>
										还可以输入:<span id='TimeconT_form2entnum' class='timecont-form2entnum contentEditableNum'>125</span>
									</div>								
									<div id='TimeconT_form2con' class='timecont-formcon'>
										<span data-color='true' data-holder='timecont-form2condesholder' data-parents='TimeconT_form' class='contentEditable timecont-form2condes timecont-form2condesholder' id='TimeconT_form2condes' contentEditable='true' spellcheck='false' data-placeholder-default="背后有什么故事!"></span>
									</div>								
								</div>	
													
							</div>																
						</div>
						<div style='display:none;' id='TimedonE' class='timedone'>
							<a id='TimedonE_con' class='timedone-con'><span>再加</span></a>
							<a id='TimedonE_end' class='timedone-end' title='再加同时结束这个露露'><span>完工</span></a>
							<a id='TimedonE_cancel' class='timedone-cancel'><span>取消</span></a>
							<span id='TimedonE_fra1'></span>
						</div>										
					</div>										
				</div>
				
				<div class='menu-worksprocess' id='MenU_workstimeline'>
					<div id='MenU_workstimelinenoc'></div>
					<div id='MenU_workstimelinecon'>
						<div id='MenU_workstimelineconcon'>
							<div id='TimelinE_begin'>最近加:</div>
							<div id='TimelinE'>
								<div id='<?php echo 'TimepoinT'.$html_timecon['id']; ?>' class='timepoint'>
									<div class='timepointfra'>
										<div class='timepointcon'>
											<div class='timepointcon-mdy'><?php echo $time_mdy; ?></div>
											<div class='timepointcon-his'><?php echo $time_his; ?></div>
										</div>
									</div>
								</div>
								<?php 
// 								}
// 								freeRT($result_timeline);
								?>
							</div>
							<div id='TimelinE_process'></div>
							<!-- <div style='display:none;' id='TimelinE_end'>End</div> -->								
						</div>												
					</div>	
				</div>				
			</div>												
		<div id='MenU_worksprocessbottom'></div>
	<div id='MenU_worksprocessleft'></div>				
</div>						
	<?php }else{?>
	<?php 
// 	ajaxreturn('works_processmenushowfail');
	}?>		
<?php
}else{
// 	ajaxreturn('works_processmenushowfail');
}
?>
			