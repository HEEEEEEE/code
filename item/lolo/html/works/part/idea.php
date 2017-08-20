<?php 
//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	/*useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser
	 *
	*/
	//echo the user's info
	$result_user = sql_search("SELECT
			        avatar
			   FROM
			        he_humans
			   WHERE
			        id='{$_COOKIE['userid']}'
	");
	$html_user = array();
	$html_user['avatar'] = htmlF($result_user['avatar']);
	$avatarstrl=strlen(trim($html_user['avatar']));
	if($avatarstrl > 0 ){
		$avatar_top=ROOTOTHERSDIR.$html_user['avatar'];
		$avatar_topback='background-color:rgba(0,0,0,0.125);';
		$avatar_toph='40px';
	}else{
		$avatar_top=ROOTDATAOTHERSDIR.'image/works/top/avatar.png';
		$avatar_topback='';
		$avatar_toph='32px';
	}
	/*
	*useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser
	*/
	/*
	 *lolololololololololololololololololololololololololololololololololo
	*/
	$search=sql_search("SELECT
		      id,hid,lans,image,firstentertype,destorytime,lanspre,imagepre,tag,processstate,createtime
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
	$html=array();
	$html['id']=htmlF($search['id']);
		$html['hid']=htmlF($search['hid']);
		        $html['lans']=htmlF($search['lans']);
	         $html['image']=htmlF($search['image']);
	$html['firstentertype']=htmlF($search['firstentertype']);
		
	$html['lanspre']=htmlF($search['lanspre']);
		$html['imagepre']=htmlF($search['imagepre']);
		
	                      $html['tag']=htmlF($search['tag']);
	                      
	        $html['createtime']=htmlF($search['createtime']);
	$html['processstate']=htmlF($search['processstate']);	
	      $html['destorytime']=htmlF($search['destorytime']);
	
	//first
			      $firstEnterType=$html['firstentertype'];
	         $imagep=strlen(trim($html['imagepre']));
	$lansp=strlen(trim($html['lanspre']));
	if(($firstEnterType==1)&&($imagep<=0)){
		$lans='block';	
		$imagepre='none';
		$imagepreadd='block';
		$lanspre='none';
		
		$lanspreadd='none';
		$image = 'none';
	}
	else if(($firstEnterType==1)&&($imagep>0)){
		$lans='block';
		$imagepre='block';
		$imagepreadd='none';
		$lanspre='none';
		
		$lanspreadd='none';
		$image = 'none';
	}
	else if(($firstEnterType==2)&&($lansp<=0)){
		$image='block';
		$lanspre='none';
		$lanspreadd='block';
		$imagepre='none';
		
		$imagepreadd='none';
		$lans='none';
	}
	else if(($firstEnterType==2)&&($lansp>0)){
		$image='block';
		$lanspre='block';
		$lanspreadd='none';		
		$imagepre='none';
		
		$imagepreadd='none';
		$lans='none';
	}
		
	//time to destroy
	$future=strtotime($html['destorytime']);
	$now=time();
	$b=$future-$now;
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

	//tagtagtagtagtagtagtagtagtagtagtagtag
	$tagL=strlen(trim($html['tag']));
	if($tagL > 0){
		$tag='block';
		$tagadd='none';
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
		$tagadd='block';
		$tagcon='';
	}	
	/*
	 *lolololololololololololololololololololololololololololololololololo
	*/	
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />
<title><?php echo '| ' . $_COOKIE['username'] . ' > Works | OCLOCLO' ;?></title>
<link rel='shortcut icon' href='<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>' />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ; ?>" />

		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'works.css' ; ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/left.css' ; ?>' />
	<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/right.css' ; ?>' />
		<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/center.css' ; ?>' />							
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/left/idea/show_one.css' ; ?>' />		
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/center/idea/show_info.css' ; ?>' />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'works/center/idea/tag.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'works/center/idea/prepr.css' ?>" /> 	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'works/center/idea/prepr_imageclear.css' ?>" />  

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />

<link id='LinK_html_process' type='text/css' rel='stylesheet' href='<?php echo ROOTOTHERSDIR.'html/works/works/process/process.css' ; ?>' />

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script> 
</head>
<body id='BodY_works'>
<div id='BodY_scroll'>	
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='<?php echo $html['id']; ?>' /></dt>
						    <?php if(isset($_GET['ideaid'])){ $ideaidGET=1; }else{ $ideaidGET=0; } ?>	
		<dt><input type='hidden' id='HiddeN_GETideaid' value='<?php echo $ideaidGET; ?>' /></dt>										
		</dl>					
	</div>
	<div id='MenU'><?php //all fullscreen menu in here ?>
		<div id='MenU_ideacre'>		
		</div>	
		<div id='MenU_ideatag' style='display:none;'>
			<div id='MenU_ideatagback'></div>
			<div id='MenU_ideatagin'>
				<div id='TaG' class='tag'>
					<dl class='tag-top' >
						<dt id='TaG_enteralbe'>
							<span>隔开不同的标签</span><span title='逗号'>,</span><span>用</span>
						</dt>									
					</dl>
					<dl class='tag-center' >
						<dt id='TaG_enter'>
							<input id='TaG_entercon' type='text' value='' maxlength='64' placeholder="标签+" />	
						</dt>
					</dl>
					<dl class='tag-bottom' >
						<dt id='TaG_done'>
							<span id='TaG_donecon'>完成</span>
						</dt>
						<dt id='TaG_cancel'>
							<span id='TaG_cancelcon'>取消</span>
						</dt>									
					</dl>						
				</div>
			</div>				
		</div>				
		<div id='MenU_ideapre'>
			<div id='MenU_ideaprelan' style='display:none;'>
				<div id='MenU_ideaprelanback'></div>
				<div id='MenU_ideaprelanin'>									
					<div id='PrE_lan' class='prelan'>
						<dl class='prelan-top' >
							<dt id='PrelaN_enteralbe'>
								<span id='PrelaN_enteralbefra'>还可输入:</span><span id='PrelaN_enteralbenum'class='contentEditableNum'>125</span>
							</dt>									
						</dl>
						<dl class='prelan-center' >
							<dt>
								<span data-holder='prelanholder'  data-parents='PrE_lan' id='PrelanboX' class='prelanholder prelanbox contentEditable' contentEditable='true' spellcheck='false' data-placeholder-default='描述+'></span>
							</dt>
						</dl>
						<dl class='prelan-bottom' >
							<dt id='PrelaN_done'>
								<span id='PrelaN_donecon'>完成</span>
							</dt>
							<dt id='PrelaN_cancel'>
								<span id='PrelaN_cancelcon'>取消</span>
							</dt>									
						</dl>						
					</div>
				</div>							
			</div>
			<div id='MenU_ideapreimage' style='display:none;'>
				<div id='MenU_ideapreimageback'></div>
				<div id='MenU_ideapreimagein'>
					<div id='PrE_image' class='preimage'>
						<div id='PrE_imagetop' >								
						</div>
						<div id='PrE_imagecenter' >
							<form id='PrE_imageform' name='pre-imageform' enctype='multipart/form-data'>					
								<div id='PrE_imageupload'>
									<div id='PrE_imageupload1'>
										<span id='PrE_imageuploadfra'>上传</span>
									</div>
									<div id='PrE_imageupload11'>
										<span></span>
										<span></span>
									</div>									
									<div id='PrE_imageupload2'>
										<span id='PrE_imageuploadcon'><input title='     ' id='PrE_imageuploadconcon' type='file' name='upload-imagepre' value='' accept='image/png' /></span>
									</div>
									<div id='PrE_imageupload3'>
										<span id='PrE_imageuploadcancel'>取消</span>
									</div>									
								</div>
							</form>
							<div id='PrE_imageuploadbrowser'>
								<div id='PrE_imageuploadbrowsershow'>
									<div id='PrE_imageuploadbrowsershowcon'>
										<img id='PrE_imageuploadbrowsershowconcon' alt='' />
									</div>
								</div>																																
								<div id='PrE_imageuploadbrowserdone'>
									<div id='PrE_imageuploadbrowserdonecon'>
										<span id='PrE_imageuploadbrowserdonecon'>完成</span>
									</div>
								</div>
							</div>							
						</div>
						
						<div id='PrE_imagebottom' >															
						</div>												
					</div>					
			
				</div>							
			</div>
			<div id='MenU_preimageclear' style='display:none;'>
				<div id='MenU_preimageclearback'></div>
				<div id='MenU_preimageclearin'>
				<div id='MenU_preimageclearinin'>
					<div id='MenU_preimagecleartop'>
						<dl id='MenU_preimagecleartoptips'>
						</dl>	
					</div>		
					<div id='MenU_preimageclearcontent'>
					       <dl>                                 
						<dt id='MenU_preimageclearcon_fra'>
							<span id='MenU_preimageclearcon_fra_con1'>清除封面!</span>
						</dt>
						<dt id='MenU_preimageclearcon_can'>
							<span id='MenU_preimageclearcon_can_con'>取消</span>
						</dt>						
					       </dl>				
					</div>				
					<div id='MenU_preimageclearbom'>
					       <dl>                                 
						<dt>
							<span id='MenU_preimageclearbom_don'>清除</span>
						</dt>	
					       </dl>				       		       		
					</div>
				</div>
				</div>				
			</div>													
		</div>
					
		<div id='MenU_others' >
			<?php 
			require ROOTDIR.'include/part/unknowerror/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/upload/tip/upload.php';
			?>
			<?php 
			require ROOTDIR.'include/part/loadin/part.php';
			?>								
		</div>										
	</div>
					
		<?php 
		require ROOTDIR.'include/part/top/part.php';
		?>									

		<div id='LefT'>
			<div id='LefT_main'>
				<div id='LefT_content'>
					<div id='LefT_contentmain'>
						<div id='LefT_contentmain1'>
						<div id="IdeA_own" class='idea_own' data-ideaid='<?php echo $html['id'] ; ?>'>
							<div class='idea_own-top'>				
							</div>		
								<div class='idea_own-right' >										     
								</div>			
									<div class='idea_own-center' >
										<div class='idea_own-center-con' >
											 <div style='display:<?php echo $lans ; ?>' class='idea_own-center-con-1' >
											 	<span class='idea_own-words' ><?php echo $html['lans'] ; ?></span>						
											</div>
											 <div style='display:<?php echo $image ; ?>' class='idea_own-center-con-2' >
												<div class='idea_own-image'><span class='idea_own-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
											</div>
										</div>
										<div class='idea_own-center-tool' >
											 <div class='idea_own-center-tool-1' >
												<div class='idea_own-center-tool-processstart'>
													<?php if($html['processstate']=='0'){?>
													<div class='idea_own-center-tool-processstart-con'>
														<img title='加工下露露' class='idea_processs-gif idea_own-center-tool-processstart-con-img starttoprocess' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/process.gif'; ?>' />
													</div>
																					
													<div class='idea_own-center-tool-processstart-con-processtime'>
														<span><?php echo $b; ?></span>
													</div>
																					
													<div style='display:none' class='idea_own-center-tool-processstart-con-processing'>
														<img class='idea_own-center-tool-processstart-con-processing-img' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/process.png'; ?>' />
														<span>加工</span>
													</div>
													<div style='display:none;' class='idea_own-center-tool-processstart-con-processstop'>
														<img class='idea_own-center-tool-processstart-con-processstop-img' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/process.png'; ?>' />
														<span class='process-cancel' >取消</span>
													</div>								
													<?php }else if(($html['processstate']=='1')){?>
													<div class='idea_own-center-tool-processstart-con'>
														<img title='加工下露露' class='idea_processs-gif idea_own-center-tool-processstart-con-img starttoprocess' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/process.gif'; ?>' />
													</div>
													
													<div class='idea_own-center-tool-processstart-con-processprocessing'>
														<span>加工中</span>
													</div>								
													
													<div style='display:none' class='idea_own-center-tool-processstart-con-processing'>
														<img class='idea_own-center-tool-processstart-con-processing-img' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/processing.png'; ?>' />
														<span>加工中</span>
													</div>
													<div style='display:none' class='idea_own-center-tool-processstart-con-processstop'>
														<img class='idea_own-center-tool-processstart-con-processstop-img' src='<?php echo ROOTDATAOTHERSDIR.'image/works/left/processstop.png'; ?>' />
														<span>停止加工</span>
													</div>								
													<?php }?>
												</div>						
											</div>											
										</div>																		     
									</div>				
								<div class='idea_own-bottom' >										     
								</div>
								
							<div class='idea_own-left' >					     
							</div>
							
							<div class='idea_own-others' >					     
							</div>
							<div style='display:none;' class='idea_own-basicinfo'>
								<input class='idea_own-basicinfo-processstate' type='hidden' value='<?php echo $html['processstate']; ?>' />
							</div>																		
						</div>
						</div>
						<div id='LefT_contentmain2'>
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
				<div id='LefT_frame'>
					<div id='FramE1' id='frame'>
						<div id='FramE1_own1' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE1_own2' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE1_own3' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>																	
					</div>				
				</div>
			</div>	
			
			<div id='LefT_others'></div>
		</div>	
	
			<div id='BottoM'>
		
			</div>
	
		<div id='RighT'>
			<div id='RighT_main'>
				<div id='RighT_content'>	
							
				</div>
				<div id='RighT_frame'>
					<div id='FramE3' id='frame'>
						<div id='FramE3_own1' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE3_own2' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE3_own3' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>																	
					</div>				
				</div>
			</div>	
			
			<div id='RighT_others'></div>	
		</div>
		
	<div id='CenteR'>
		<div id='CenteR_leftforleft'></div>
		<div id='CenteR_main'>
			<div id='CenteR_contentleftborder'></div>
			<div id='CenteR_content'>	
				<div id='CenteR_contentdisassemble'>	
							<div id='DisassemblE_title1'></div>
					<div id='DisassemblE_title2'>DISASSEMBLE</div>			
					<div id='DisassemblE_con'>
						<div id='DisassemblE1' class='disassemble'>
									<div class='disassemble-top disassemble-div'><span>露露</span></div>
								<div class='disassemble-right disassemble-div' ></div>
							<div class='disassemble-center'>
								<div class='disassemble-center-con' >
									 <div style='display:<?php echo $lans ; ?>' id='DisassemblE1_words'>
									 	<span><?php echo $html['lans'] ; ?></span>						
									</div>
									 <div style='display:<?php echo $image ; ?>' id='DisassemblE1_img'>
										<span style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span>						
									</div>
								</div>							
							</div>
								<div class='disassemble-bottom disassemble-div' ></div>
									<div class='disassemble-left disassemble-div' ></div>																		
						</div>
						<div id='DisassemblE2' class='disassemble'>
									<div class='disassemble-top disassemble-div'>
										<?php if($firstEnterType==1){?> <span>封面</span> <?php }else if($firstEnterType==2){?> <span>描述</span> <?php }?>	
									</div>
								<div class='disassemble-right disassemble-div' ></div>
							<div class='disassemble-center'>
								<div id='DisassemblE2_center-con' class='disassemble-center-con' >
									<div id='DisassemblE2_imagep1'>
										<img id='DisassemblE2_imageprebrowser' style='display:none' />
											<span id='DisassemblE2_imageprechange' style='display:none'>更改</span>
										<img id='DisassemblE2_imagepreclear' style='display:none' alt='' title='clear' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/close.png'; ?>" />											
									</div>									
									<span id='DisassemblE2_imagepre' style="display:<?php echo $imagepre ; ?>;background-image:url('<?php echo ROOTOTHERSDIR.$html['imagepre'] ; ?>');"></span>	
									<span id='DisassemblE2_imagepreadd' title="让它露露脸吧" style="display:<?php echo $imagepreadd ; ?>;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/works/center/add.png'; ?>');"></span>
									
									<div id='DisassemblE2_lansp1' style='display:<?php echo $lanspre ; ?>'>
										<span id='DisassemblE2_lanspre'><?php echo $html['lanspre'] ; ?></span>
										<span id='DisassemblE2_lansprechange' style='display:none'>更改</span>										
									</div>
									<span id='DisassemblE2_lanspreadd' title="让它说些什么吧" style="display:<?php echo $lanspreadd ; ?>;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/works/center/add.png'; ?>');"></span>									
	
								</div>
							</div>
								<div class='disassemble-bottom disassemble-div' ></div>
									<div class='disassemble-left disassemble-div' ></div>																		
						</div>
						<div id='DisassemblE3' class='disassemble'>
									<div class='disassemble-top disassemble-div'><span>标签</span></div>
								<div class='disassemble-right disassemble-div' ></div>
							<div class='disassemble-center'>
								<div id='DisassemblE3_center-con' class='disassemble-center-con' >
									<div id='DisassemblE3_tag1' style='display:<?php echo $tag ; ?>'>
										<span id='DisassemblE3_tag'><?php echo $tagcon ; ?></span>
										<span id='DisassemblE3_tagchange' style='display:none'>更改</span>										
									</div>
									<span id='DisassemblE3_tagadd' title="给它加几个标签吧" style="display:<?php echo $tagadd ; ?>;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/works/center/add.png'; ?>');"></span>
								</div>
							</div>
								<div class='disassemble-bottom disassemble-div' ></div>
									<div class='disassemble-left disassemble-div' ></div>																		
						</div>
						<div id='DisassemblE4' class='disassemble'>
									<div class='disassemble-top disassemble-div'><span>其它</span></div>
								<div class='disassemble-right disassemble-div' ></div>
							<div class='disassemble-center'>
								<div class='disassemble-center-con' >
								<?php if($html['processstate']=='0'){?>
									<div id='DisassemblE4_others'>
										<a><span>加工状态</span><span class='disassemble4-otherscon starttoprocess' title='加工下露露'>未加工的</span></a>
										<a><span>创建时间</span><span class='disassemble4-otherscon'><?php echo $html['createtime'] ; ?></span></a>
										<a><span>销毁时间</span><span class='disassemble4-otherscon'><?php echo $html['destorytime'] ; ?></span></a>
										<a><span>剩余时间</span><span class='disassemble4-otherscon'><?php echo '离销毁还剩 '.$b ; ?></span></a>
										
									</div>
								<?php }else{?>
									<div id='DisassemblE4_others'>
										<a><span>加工状态</span><span class='disassemble4-otherscon starttoprocess' title='加工下露露'>加工中</span></a>
										<a><span>创建时间</span><span class='disassemble4-otherscon'><?php echo $html['createtime'] ; ?></span></a>										
									</div>
								<?php }?>
								</div>
							</div>
								<div class='disassemble-bottom disassemble-div' ></div>
									<div class='disassemble-left disassemble-div' ></div>																		
						</div>																			
					</div>											
				</div>
				<div style='display:none;' id='CenteR_contentprocess'>	
						
				</div>									
			</div>
			<div id='CenteR_frame'>
				<div id='FramE2' id='frame'>
					<div id='FramE2_own1' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>
					<div id='FramE2_own2' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>
					<div id='FramE2_own3' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>																	
				</div>				
			</div>
		</div>	
		
		<div id='CenteR_others'></div>										
	</div>
		
</div>

<script charset='utf-8'>
//screenscreenscreenscreenscreenscreen
var w=screen.width;
	//mainWmainWmainWmainWmainWmainWmainW			
	var mainW=w - 600;
		//centercentercentercentercentercenter		
		$('#CenteR_main').width(mainW);		
			$('#CenteR_content').width(mainW);
		
</script>

<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."public.js" ; ?>'></script>

<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works.js" ; ?>'></script>

<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/top.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/left.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/right.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/center.js" ; ?>'></script>
		
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/left/idea/show_one.js" ; ?>'></script>
						   			
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/center/idea/show_info.js" ; ?>'></script>
<script charset='utf-8' src="<?php echo ROOTJSOTHERSDIR.'works/center/idea/tag.js' ?>"></script>
<script charset='utf-8' src="<?php echo ROOTJSOTHERSDIR.'works/center/idea/prepr.js' ?>"></script>
<script charset='utf-8' src="<?php echo ROOTJSOTHERSDIR.'works/center/idea/prepr_imageclear.js' ?>"></script>

<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>"></script>

<script charset='utf-8' src='<?php echo ROOTOTHERSDIR."html/works/works/process/process.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTOTHERSDIR."html/works/works/process/processing.js" ; ?>'></script>
</body>
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>