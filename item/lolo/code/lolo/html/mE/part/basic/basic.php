	<?php 
	//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	/*memememememememememememememememememememememememememememe
	 */
	//the USER's INFO echo to	
	//for belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:page
	$html_humans=array();
	$search_humans=sql_search("SELECT
			      name,back,avatar,bio,email,emailstate
		            FROM
			      he_humans
		         WHERE
			      id='{$_GET['hid']}'
	");
			$html_humans['name']=htmlF($search_humans['name']);
		$html_humans['back']=htmlF($search_humans['back']);
	$html_humans['avatar']=htmlF($search_humans['avatar']);
	$html_humans['bio']=htmlF($search_humans['bio']);
		$html_humans['email']=htmlF($search_humans['email']);
			$html_humans['emailS']=htmlF($search_humans['emailstate']);
	//name
	$name=$html_humans['name'];
	
	//back
	$back=strlen(trim($html_humans['back']));
	if($back > 0){
		$backhave=ROOTOTHERSDIR.$html_humans['back'];
		$backno=ROOTDATAOTHERSDIR.'image/mE/back.png';
		$have='display:block';
		$no='display:none';
	}else{
		$backhave='';
		$backno=ROOTDATAOTHERSDIR.'image/mE/center/back.png';
		$have='display:none';
		$no='display:block';
	}

	//avatar
	$avatar=strlen(trim($html_humans['avatar']));
	if($avatar > 0){
		$backhaveavatar=ROOTOTHERSDIR.$html_humans['avatar'];
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/center/avatar.png';
		$haveavatar='display:block';
		$noavatar='display:none';
	}else{
		$backhaveavatar='';
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/center/avatar.png';
		$haveavatar='display:none';
		$noavatar='display:block';
	}
	
	//bio
	$bio=strlen(trim($html_humans['bio']));
	if($bio > 0){
		$bioD='display:block';
		$bio=$html_humans['bio'];
	}else{
		$bioD='display:none';
		$bio='';
	}
	
	//email
	$emailS=$html_humans['emailS'];
	if($emailS != '0'){
		$emailD='display:block';
		$email=$html_humans['email'];
	}else{
		$emailD='display:none';
		$email='';
	}
	
	
	
	/*minemineminemineminemineminemineminemineminemineminemine
	 */
	//mine
	$html_mine=array();
	$search_mine=sql_search("SELECT
		               COUNT(id)
		         AS
		               num
		      FROM
		               he_idea
		        WHERE
		               hid='{$_GET['hid']}'
		           AND
		               timestate=1
	");
	$html_mine['close']=htmlF($search_mine['num']);

	if($search_mine['num']=='0'){		
		//search
		$searchD='display:none';
	}else{					
		//search
		$searchD='display:block';			
	}

	//social info echo social info echo social info echo social info echo social info echo
	$html_social=array();
	$search_social=sql_search("SELECT
			id,followinghid,followhid
			FROM
			he_social
			WHERE
			hid='{$_GET['hid']}'
	");
	if($search_social['id']){
		if(($search_social['followinghid']=='')&&($search_social['followhid']=='')){
			$followhidD='display:none;';
			$followhidN=0;
			$followinghidD='display:none;';
			$followinghidN=0;
		}else if(($search_social['followinghid']!='')&&($search_social['followhid']=='')){
			$followhidD='display:none;';
			$followhidN=0;
			$followinghidD='display:block;';
			$following=explode(',', $search_social['followinghid']);
			$followinghidN=count($following);
		}else if(($search_social['followinghid']=='')&&($search_social['followhid']!='')){
			$followhidD='display:block;';
			$follow=explode(',', $search_social['followhid']);
			$followhidN=count($follow);
			$followinghidD='display:none;';
			$followinghidN=0;
		}else{
			$followhidD='display:block;';
			$follow=explode(',', $search_social['followhid']);
			$followhidN=count($follow);
	
			$followinghidD='display:block;';
			$following=explode(',', $search_social['followinghid']);
			$followinghidN=count($following);
		}
	}else{
		$followinghidD='display:none;';
		$followhidD='display:none;';
	}
	$html_social['followinghid']=htmlF($search_social['followinghid']);
	$html_social['followhid']=htmlF($search_social['followhid']);	
	?>	
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />
<title><?php echo '| ' . $name . ' | OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE.css' ?>" />
<?php if(!(isset($_COOKIE['userid']))){?>
	<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/top.css' ?>" />
<?php }?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/right.css' ?>" />
<link id='LinK_center'  class='link' type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/others.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea.css' ?>" />


	<?php 
	if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
	?>			
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/me/me/me.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/me/avatar.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/me/avatar_clear.css' ?>" /> 
		
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />		
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own/show.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea/more.css' ?>" />   
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea/delete.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea/tag.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea/prepr.css' ?>" /> 
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center/idea/prepr_imageclear.css' ?>" />   

		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/show/css/public.css' ?>" />
	<?php 
	}else if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid']) ){
	?>	
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/show.css' ?>" />
	<?php 
	}else if( (!(isset($_COOKIE['userid']))) ){
	?>
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/show.css' ?>" />									
	<?php 
	}
	?>
	

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script> 
</head>
<body id='BodY_mE'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>		
		<dt><input type='hidden' id='HiddeN_hid' value='<?php echo $_GET['hid'];?>' /></dt>
		<?php if(isset($_COOKIE['userid'])){ ?>
			<dt><input type='hidden' id='Hidden_HidCookie' value='<?php echo $_COOKIE['userid'];?>' /></dt>	
		<?php }?>							
		</dl>
		<?php 
		if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
			$HiddeN_me='1';
		}else{
			$HiddeN_me='0';
		}
		?>		
		<dl id='HiddeN_me' >
		<dt><input type='hidden' id='HiddeN_me' value='<?php echo $HiddeN_me; ?>' /></dt>				
		</dl>
				
		<dl id='HiddeN_mine' >
		<dt><input type='hidden' id='HiddeN_mineclose' value='<?php echo $_GET['mine']; ?>' /></dt>
		<dt><input type='hidden' id='HiddeN_mineclosenum' value='<?php echo $html_mine['close']; ?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_others' >
		<dt><input type='hidden' id='HiddeN_OthersSettings' value='<?php echo $_GET['others']; ?>' /></dt>
		</dl>							
	</div>
	<?php 
	if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
	?>			
		<div id='MenU'><?php //all fullscreen menu in here ?>
			<div id='MenU_meme'>		
			</div>		
			<div id='MenU_avatar' >
				<div id='MenU_avataradd' style='display:none;'>
					<div id='MenU_avataraddback'></div>
					<div id='MenU_avataraddin'>
						<div id='AvataR_add' class='preimage'>
							<div id='AvataR_addtop' >								
							</div>
							<div id='AvataR_addcenter' >
								<form id='AvataR_addform' name='form-uploadavatar' enctype='multipart/form-data'>					
									<div id='AvataR_addupload'>
										<div id='AvataR_addupload1'>
											<span id='AvataR_adduploadfra'>上传</span>
										</div>
										<div id='AvataR_addupload11'>
											<span></span>
											<span></span>
										</div>									
										<div id='AvataR_addupload2'>
											<span id='AvataR_adduploadcon'><input title='     ' id='AvataR_adduploadconcon' type='file' name='upload-imageavatar' value='' accept='image/png' /></span>
										</div>
										<div id='AvataR_addupload3'>
											<span id='AvataR_adduploadcancel'>取消</span>
										</div>									
									</div>
								</form>
								<div id='AvataR_adduploadbrowser'>
									<div id='AvataR_adduploadbrowsershow'>
										<div id='AvataR_adduploadbrowsershowcon'>
											<img id='AvataR_adduploadbrowsershowconcon' alt='' />
										</div>
									</div>																																
									<div id='AvataR_adduploadbrowserdone'>
										<div id='AvataR_adduploadbrowserdonecon'>
											<span id='AvataR_adduploadbrowserdonecon'>完成</span>
										</div>
									</div>
								</div>							
							</div>
							
							<div id='AvataR_addbottom' >															
							</div>												
						</div>					
					</div>
				</div>
				<div id='MenU_avatarclear' style='display:none;'>
					<div id='MenU_avatarclearback'></div>
					<div id='MenU_avatarclearin'>
					<div id='MenU_avatarclearinin'>
						<div id='MenU_avatarcleartop'>
							<dl id='MenU_avatarcleartoptips'>
							</dl>	
						</div>		
						<div id='MenU_avatarclearcontent'>
						       <dl>                                 
							<dt id='MenU_avatarclearcon_fra'>
								<span id='MenU_avatarclearcon_fra_con1'>清除头像!</span>
							</dt>
							<dt id='MenU_avatarclearcon_can'>
								<span id='MenU_avatarclearcon_can_con'>取消</span>
							</dt>						
						       </dl>				
						</div>				
						<div id='MenU_avatarclearbom'>
						       <dl>                                 
							<dt>
								<span id='MenU_avatarclearbom_don'>清除</span>
							</dt>	
						       </dl>				       		       		
						</div>
					</div>
					</div>				
				</div>
			<div id='MenU_mehide' style='display:none;'>
			       <dl>                                 
				<dt>
					<input id='MenU_mehide_avatarorback' type='hidden' value='' />
				</dt>	
			       </dl>
			</div>						
			</div>	
	
			
			
		<div id='MenU_ideacre'>		
		</div>
		<div id='MenU_ideatag' style='display:none;'>
			<div id='MenU_ideatagback'></div>
			<div id='MenU_ideatagin'>
				<div id='TaG' class='tag'>
					<dl class='tag-top' >
						<dt id='TaG_entertitle'>
							<span id='TaG_entertitlecon'>添加标签</span>
						</dt>
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
		<div id='MenU_ideadel' style='display:none;'>
			<div id='MenU_ideadelback'></div>
			<div id='MenU_ideadelin'>
			<div id='MenU_ideadelinin'>
				<div id='MenU_ideadeltop'>
					<dl id='MenU_ideadeltoptips'>
					</dl>	
				</div>		
				<div id='MenU_ideadelcontent'>
				       <dl>                                 
					<dt id='MenU_ideadelcon_fra'>
						<span id='MenU_ideadelcon_fra_con1'>删除露露!</span>
					</dt>
					<dt id='MenU_ideadelcon_can'>
						<span id='MenU_ideadelcon_can_con'>取消</span>
					</dt>						
				       </dl>				
				</div>				
				<div id='MenU_ideadelbom'>
				       <dl>                                 
					<dt>
						<span id='MenU_ideadelbom_don'>删除</span>
					</dt>	
				       </dl>				       		       		
				</div>
			</div>
			</div>				
		</div>
		<div id='MenU_ideapre'>
			<div id='MenU_ideaprelan' style='display:none;'>
				<div id='MenU_ideaprelanback'></div>
				<div id='MenU_ideaprelanin'>
					<div id='PrE_lanfra'>
						 <img id="PrE_lanfracon" title='DescriptioN+' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/lansadd.png';?>" />												
					</div>
					<div id='PrE_lan' class='prelan'>
						<dl class='prelan-top' >
							<dt id='PrelaN_enteralbe'>
								<span id='PrelaN_enteralbefra'>还可输入:</span><span class='contentEditableNum' id='PrelaN_enteralbenum' >125</span>
							</dt>									
						</dl>
						<dl class='prelan-center' >
							<dt>
								<span data-holder='prelanholder'  data-parents='PrE_lan' class='contentEditable prelanholder prelanbox' id='PrelanboX' contentEditable='true' spellcheck='false' data-placeholder-default='描述+'></span>
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
					<div id='PrE_imagefra'>
						 <img id="PrE_imagefracon" title='ImagE+' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/imageadd.png';?>" />												
					</div>
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
		<div id='MenU_ideatool'>
			<div id='MenU_ideatoolmore'>
				<dl class='menu_ideatoolmore-kind'>			   						
				   <dt class='menu_ideatoolmore-kind-1 menu_ideatoolmore-kind-1delete'>
				   	<span id='MenU_ideatoolmore_delete' class='menu_ideatoolmore-kind-1-1'>删除</span>
				   </dt>		   			   
				</dl>
						
			</div>										
			<div id='MenU_ideatoolhide' style='display:none;'>
			       <dl>                                 
				<dt>
					<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
				</dt>	
			       </dl>
			</div>		
		</div>
	<?php 
	}else if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid']) ){
	?>	
		<div id='MenU'><?php //all fullscreen menu in here ?>
			<div id='MenU_ideacre'>								
			</div>								
		</div>				
		<div id='MenU_others' >
			<?php 
			require ROOTDIR.'include/part/loadin/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/unknowerror/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/upload/tip/upload.php';
			?>						
		</div>
		<div id='MenU_ideatool'>
			<div id='MenU_ideatooluinf' style='display:none;'>	
			</div>										
			<div id='MenU_ideatoolhide' style='display:none;'>
			       <dl>                                 
				<dt>
					<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
				</dt>	
			       </dl>
			</div>		
		</div>
	<?php 
	}else if( (!(isset($_COOKIE['userid']))) ){
	?>
		<div id='MenU'><?php //all fullscreen menu in here ?>
			<div id='MenU_sign'>
				<div id='MenU_signupstart'>		
				</div>
				<div id='MenU_signinstart'>		
				</div>										
			</div>		
			<div id='MenU_others' >
			<?php 
			require ROOTDIR.'include/part/unknowerror/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/loadin/part.php';
			?>
			<?php 
			require ROOTDIR.'include/part/browser/part.php';
			?>
			<?php 
			require ROOTDIR.'include/part/tips/part.php';
			?>													
			</div>						
		</div>
		<div id='MenU_ideatool'>
			<div id='MenU_ideatooluinf' style='display:none;'>	
			</div>										
			<div id='MenU_ideatoolhide' style='display:none;'>
			       <dl>                                 
				<dt>
					<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
				</dt>	
			       </dl>
			</div>		
		</div>									
	<?php 
	}
	?>	
<div id='BodY_scroll'>	
	<?php if(isset($_COOKIE['userid'])){?>
		<?php 
		//the USER's INFO echo to
		/*memememememememememememememememememememememememememememe
		 */
		//for login:topfor login:topfor login:topfor login:topfor login:topfor login:top
		$html_humansC=array();
		$search_humansC=sql_search("SELECT
				       avatar
				    FROM
				       he_humans
				    WHERE
				       id='{$_COOKIE['userid']}'
		");
		$html_humansC['avatar']=htmlF($search_humansC['avatar']);
		//avatar
		$avatarC=strlen(trim($html_humansC['avatar']));
		if($avatarC > 0){
			$top_avatarC=ROOTOTHERSDIR.$html_humansC['avatar'];
			$avatar_topback='background-color:rgba(0,0,0,0.125);';
			$top_avatarHC='50px';
		}else{
			$top_avatarC=ROOTDATAOTHERSDIR.'image/mE/top/avatar.png';
			$avatar_topback='';
			$top_avatarHC='40px';
		}
		//for login:topfor login:topfor login:topfor login:topfor login:topfor login:top	
		?>
		<?php 
		require ROOTDIR.'include/part/top/part.php';
		?>	
	<?php }else{?>
	<div id='ToP'>	
		<div id='ToP_content'>	
			<div id='ToP_basic'>
				<div id='ToP_basicdiv1'>
					<div id='SigN'>
						<span id='SignuP' class='signconcon signup'>注册</span>
						<span id='SigniN' class='signconcon signin'>登录</span>								
					</div>
				</div>
				<div id='ToP_basicdiv3'>					
					<a class='topBasic3 topBasic3_3' href='<?php echo ROOTOTHERSDIR.'explore.php' ?>'><img id='TopBasic3_3_Explore' title='发现' src="<?php echo ROOTDATAOTHERSDIR.'image/public/discovery_gray.png' ?>" /><span id='TopBasic3_1_ExploreLan' style='display:none'>发现</span></a>			
				</div>																
			</div>
							
			<div id='ToP_mark'>
				<dl id='ToP_markdl1'>
				<dt><a href='<?php echo ROOTOTHERSDIR.'index.php'; ?>'><span id='MarK_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/public/website.png' ?>');"></span></a></dt>
				</dl>	          
			</div>
					
			<div id='ToP_search'>
				<div id='ToP_searchdiv1'>
					<dl>
					<dt><input id='SearcH_input' class='input-search input-show' type='text' value='' placeholder='在全站搜露' /></dt>
					<dt><span id='SearcH_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/public/search.png' ;?>')"></span></dt>
					</dl>
				</div>		
			</div>
		</div>		
	</div>
	<?php }?>
					

		<div id='LefT'></div>
	
			<div id='BottoM'></div>
			
		<div id='Right'>			
		</div>

	<div id='CenteR' class='forNormal'>
		<div id='CenteR_rightforright'></div>	
		<div id='CenteR_main'>
			<div id='CenteR_mainme' class='center_mainMeforNormal center_mainMeforScroll'>
			<div id='CenteR_mainmeme'>
				<div id='mE_back' class='me_backforNormal me_backforScroll'>
					<div id='mE_backcon'>
						<div style='<?php echo $have;?>' id='mE_backconhave'>
							<div id='mE_backconhavecon'>
								<img id='mE_backconhaveconcon' src='<?php echo $backhave; ?>' />
							</div>
							<?php 
							if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
							?>
								<div style='display:none;' id='mE_backconhavetool'>
								<img id='mE_backconhavetoolclear' title='清除' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/center/close.png';?>' />
								<span id='mE_backconhavetoolchange'>更改</span>
								</div>
							<?php }?>
						</div>
						<div id='mE_backconfra'></div>
						<?php 
						if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
						?>		
						<div style='<?php echo $no;?>' id='mE_backconno'>
							<div id='mE_backconnocon'>
								<form id='FroM_upload1'>
									<?php //cookiecookiecookiecookiecookiecookie?>
									<img title='我的封面+' id='img_upload1' src='<?php echo $backno; ?>' />
								</form>								
							</div>
						</div>
						<?php }else{?>
						<div style='<?php echo $no;?>' id='mE_backconhave'>
							<div id='mE_backconhavecon'>
								<img id='mE_backconhaveconcon' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/back.png';; ?>' />
							</div>
						</div>							
						<?php }?>						
					</div>
					<div id='mE_backconhiddenforscroll' class='me_backConHiddenforNormal me_backConHiddenforScroll'></div>
				</div>
				<div id='mE_avatar' class='me_avatarforNormal me_avatarforScroll'>
					<div id='mE_avatarcon'>
						<div style='<?php echo $haveavatar;?>' id='mE_avatarconhave' class='avatarcon'>
							<div id='mE_avatarconhavecon' class='avatarfra'>
								<div id='mE_avatarconhavecon1' class='avatarfra1'></div>
								<div id='mE_avatarconhavecon2' class='avatarfra2'></div>
								<div id='mE_avatarconhavecon3' class='avatarfra3'>
									<img id='mE_avatarconhaveconcon' src='<?php echo $backhaveavatar; ?>' />										
								</div>
								<div id='mE_avatarconhavecon4' class='avatarfra4'></div>
								<div id='mE_avatarconhavecon5' class='avatarfra5'></div>	
							</div>
							<?php 
							if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
							?>
								<div style='display:none;' id='mE_avatarconhavetool' class='avatartool'>
									<img id='mE_avatarconhavetoolclear' title='清除' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/center/close.png';?>' />
									<span id='mE_avatarconhavetoolchange'>更改</span>
								</div>
							<?php }?>						

						</div>
<!-- 						<div id='mE_avatarconfra'></div> -->
						<?php 
						if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){
						?>
						<div style='<?php echo $noavatar;?>' id='mE_avatarconno' class='avatarcon'>
							<div id='mE_avatarconnocon' class='avatarfra'>
								<form id='FroM_upload2'>
									<div id='mE_avatarconnocon1' class='avatarfra1'></div>
									<div id='mE_avatarconnocon2' class='avatarfra2'></div>
									<div id='mE_avatarconnocon3' class='avatarfra3'>
										<img title='我的头像+' id='img_upload2' src='<?php echo $backnoavatar; ?>' />															
									</div>
									<div id='mE_avatarconnocon4' class='avatarfra4'></div>
									<div id='mE_avatarconnocon5' class='avatarfra5'></div>
								</form>
							</div>
							
						</div>
						<?php }else{?>
						<div style='<?php echo $noavatar;?>' id='mE_avatarconhave' class='avatarcon'>
							<div id='mE_avatarconhavecon' class='avatarfra'>
								<div id='mE_avatarconhavecon1' class='avatarfra1'></div>
								<div id='mE_avatarconhavecon2' class='avatarfra2'></div>
								<div id='mE_avatarconhavecon3' class='avatarfra3'>
									<img id='mE_avatarconhaveconcon' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/avatarforme.png';; ?>' />
								</div>
								<div id='mE_avatarconhavecon4' class='avatarfra4'></div>
								<div id='mE_avatarconhavecon5' class='avatarfra5'></div>	
							</div>						
						</div>								
						<?php }?>				
						<?php 
						if((isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid'])){
						?>
							<?php 
							//social info:follow
							$search_social=sql_search("SELECT
									       id,followinghid
									   FROM
									       he_social
									   WHERE
									       hid='{$_COOKIE['userid']}'
							");
							if($search_social['id']){
								$arr=explode(',', $search_social['followinghid']);
								if(in_array($_GET['hid'],$arr)){
									$nofollow=0;
								}else{
									$nofollow=1;
								}
							}else{
								$nofollow=1;
							}					
							?>
							<?php if($nofollow==1){?>
							<div id='SocialFollow' class='loloerfollow'>
								<div style='display:none;' class='social-follow' id='SociaL_follow'>
									<span class='follow' id='FolloW' title='关注' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/mE/center/follow.png' ;?>')"></span>
									<span class='followfra' id='followFra' ></span>
								</div>						
							
							</div>
							<?php } ?>					
						<?php }?>						
						<div id='mE_avatarconhiddenforscroll' class='me_avatarConHiddenforNormal me_avatarConHiddenforScroll'>	</div>							
					</div>
					<div id='mE_avatarname'>
						<?php echo $name;?>
					</div>
					<div style='<?php echo $bioD;?>' id='mE_avatarbio'>
						<div id='mE_avatarbiotitle' class='avatarbio'></div>
						<div id='mE_avatarbiocon' class='avatarbio'><?php echo $bio;?></div>		
					</div>
					<div style='display:none' id='mE_avataremail'>
						<div id='mE_avataremailtitle' class='avataremail'>邮箱</div>
						<div id='mE_avataremailcon' class='avataremail' title='<?php echo $email;?>'><?php echo $email;?></div>		
					</div>														
				</div>
				<div id='mE_mine' class='me_mineforNormal me_mineforScroll'>
					<div id='mE_minecon'>
						<div id='mE_minecon1' class='minecon'>
							<a id='mE_minecon1re' class='mineconre mineconreBorder' data-closeis='1' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine=close';?>'>
								<span class='minecontitle' >露露</span>
								<span id='mE_minecon1num' class='mineconnum' title='<?php echo $html_mine['close'];?>'><?php echo $html_mine['close'];?></span>					
							</a>
						</div>
						<?php 
							if(isset($_COOKIE['userid'])){
								$hrefFollowing='href='.ROOTOTHERSDIR.'mime.php?hid='.$_GET['hid'].'&mime=following';
								
								$hrefFollower='href='.ROOTOTHERSDIR.'mime.php?hid='.$_GET['hid'].'&mime=follower';
							}else{
								$hrefFollowing='';
								
								$hrefFollower='';
							}
						?>						
						<div style="<?php echo $followinghidD; ?>" id='mE_minecon2' class='minecon'>
							<a id='mE_minecon2re' class='mineconre loginTips' <?php echo $hrefFollowing;?>>
								<span class='minecontitle' >关注</span>
								<span id='mE_minecon2num' class='mineconnum' title='<?php echo $followinghidN;?>'><?php echo $followinghidN;?></span>					
							</a>
						</div>
						<div style="<?php echo $followhidD; ?>" id='mE_minecon3' class='minecon'>
							<a id='mE_minecon3re' class='mineconre loginTips' <?php echo $hrefFollower;?>>
								<span class='minecontitle' >粉丝</span>
								<span id='mE_minecon3num' class='mineconnum' title='<?php echo $followhidN;?>'><?php echo $followhidN;?></span>					
							</a>
						</div>																							
					</div>
						<?php 
						if((isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid'])){
						?>
							<div id='mE_mineper' class='me_minePerforNormal me_minePerforScroll'>
								<span>设置</span>
							</div>
						<?php }else if((isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid'])){?>
							<?php if($nofollow!=1){?>
							<div id='SocialFollowing' class='loloerfollow me_minePerforNormal me_minePerforScroll' >
								<div style='display:none;' class='social-follow' id='SociaL_unfollow'>
										<span id='UnfolloW'>取消</span>
								</div>
								<div class='following' id='SocialFollowing'>
									<span>关注中</span>
								</div>
							</div>
							<?php }?>							
						<?php }?>			
				</div>
			</div>			       	
			</div>
			<div id='CenteR_mainidea' class='center_mainIdeaforNormal center_mainIdeaforScroll'>
				<div style='<?php echo $searchD; ?>' id='ProjectclosE_search' class='projectClose_searchforNormal projectClose_searchforScroll'>
					   <div id='ProjectclosE_searchdiv1' >
				               	<input id='ProjectclosE_searchinput' class='input-search input-show' type='text' value='' maxlength='125' placeholder="搜搜这的露" />
					   </div>
					   
					    <div id='ProjectclosE_searchdiv2' >
					   	<span id='ProjectclosE_searchimg' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/mE/center/search.png' ;?>')"></span>
				               </div>			
				</div>
				<div id='ProjectclosE_close' class='projectClose_closeforNormal projectClose_closeforScroll'>
					<div id='IdeA_showcontop' style='display:none;'>
						<div id='IdeA_showcontopsearchinfo'>
							<div class='searchinfo-idea' id='SearchinfO_ideanum'>这的露:<span id='SearchinfO_ideanumcon'><?php echo $html_mine['close']; ?></span></div>	
							<div class='searchinfo-idea' id='SearchinfO_searchnum'>搜出来:<span id='SearchinfO_searchnumcon'>0</span></div>
							<div class='searchinfo-idea' id='SearchinfO_back' title='返回' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/mE/center/search_back.png' ;?>')"></div>	
						</div>						
					</div>
					<?php 
					if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
					?>
						<div id='IdeA'>
						</div>
					<?php }else{?>
						<div id='ProjectclosE_closecontent'></div>
						<div id='IdeA_showconbottom' style='display:none;'>
							<div id='IdeA_showconbottomnoideTips'>这家伙还没露哦</div>
							<div id='IdeA_showconbottomnoide' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/mE/center/noide.png' ;?>')"></div>												
						</div>					
					<?php }?>
				</div>							
			</div>						
		</div>
		<div id='CenteR_others'>
			<div style='opacity:0;' id='CenteR_othersformainheight'></div>
		</div>
	</div>			
</div>			
	<script charset='utf-8'>
	            //screen
		var w=screen.width;
			//mainW			
			var mainW=w - 520;
			//mainH
			var avatarH=$('#mE_avatar').height();
			var mainH=avatarH+125;
		var mainHS=mainH+'px';
		
		//centercentercentercentercenter		
		        $('#CenteR_main').width(mainW);
			$('#CenteR_main').css('minHeight',mainHS);	
			        //me   
			        $('#CenteR_mainmeme').width(mainW);
			        	           $('#mE_mine').width(mainW-370);
			
		        //idea
		        $('#CenteR_mainidea').width(mainW-370);	
		        
		//toptoptoptoptoptop
		$('#ToP_content').width(mainW);

		//others
		$('#OtherS').width(w-260);					   		
	</script>

	<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>" charset='utf-8'></script>
	
		     <script src="<?php echo ROOTJSOTHERSDIR.'mE.js' ?>" charset='utf-8'></script>
<?php if(!(isset($_COOKIE['userid']))){?>
	<script src="<?php echo ROOTJSOTHERSDIR.'mE/topnosign.js' ?>"></script>
<?php }else{?>
	<script src="<?php echo ROOTJSOTHERSDIR.'mE/top.js' ?>"></script>
<?php }?> 
          <script src="<?php echo ROOTJSOTHERSDIR.'mE/right.js' ?>" charset='utf-8'></script>
    <script src="<?php echo ROOTJSOTHERSDIR.'mE/center.js' ?>" charset='utf-8'></script>
<script src="<?php echo ROOTJSOTHERSDIR.'mE/center_scroll.js' ?>" charset='utf-8'></script>
<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/me.js' ?>" charset='utf-8'></script>
    <script src="<?php echo ROOTJSOTHERSDIR.'mE/center/me/mine.js' ?>" charset='utf-8'></script>
    
          <script src="<?php echo ROOTJSOTHERSDIR.'mE/center/idea.js' ?>" charset='utf-8'></script>

          
	<?php 
	if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
	?>			
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/me/me/me.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/me/avatar.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/me/avatar_clear.js' ?>" charset='utf-8'></script>
		
		<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own/show.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/search/show.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own/loadMore.js' ?>"></script>	
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/idea/delete.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/idea/tag.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/idea/prepr.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/idea/prepr_imageclear.js' ?>" charset='utf-8'></script>			
		
		<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/js/public.js' ?>" charset='utf-8'></script>  	
	<?php 
	}else if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid']) ){
	?>	
		<script src="<?php echo ROOTJSOTHERSDIR.'public/social/follow.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/show.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/search_notme/show.js' ?>" charset='utf-8'></script>	
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/loadMore.js' ?>"></script>		
	<?php 
	}else if( (!(isset($_COOKIE['userid']))) ){
	?>
		<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.js' ?>" charset='utf-8'></script>				
		<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/show.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/search_notme/show.js' ?>" charset='utf-8'></script>									
		<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/show/own_notme/loadMore.js' ?>"></script>	
	<?php 
	}
	?>
</body>	
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	