<?php 
	//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	/*minemineminemineminemineminemineminemineminemineminemine
	 */
	//for belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:page
	$html_humans=array();
	$search_humans=sql_search("SELECT
			name,back,avatar
			FROM
			he_humans
			WHERE
			id='{$_GET['hid']}'
	");
				$html_humans['name']=htmlF($search_humans['name']);
			$html_humans['back']=htmlF($search_humans['back']);
	$html_humans['avatar']=htmlF($search_humans['avatar']);
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
		$backno=ROOTDATAOTHERSDIR.'image/mE/back.png';
		$have='display:none';
		$no='display:block';
	}
	
	//avatar
	$avatar=strlen(trim($html_humans['avatar']));
	if($avatar > 0){
		$backhaveavatar=ROOTOTHERSDIR.$html_humans['avatar'];
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/avatarforme.png';
		$haveavatar='display:block';
		$noavatar='display:none';
	}else{
		$backhaveavatar='';
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/avatarforme.png';
		$haveavatar='display:none';
		$noavatar='display:block';
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
<title><?php echo '| ' . $name . ' > lolo' . ' | OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />

<?php if(isset($_COOKIE['userid'])){?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />		
<?php }else{?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />		
<?php }?>

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />
<?php if(!(isset($_COOKIE['userid']))){?>
	<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/top.css' ?>" />
<?php }?>
	<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/right.css' ?>" />
      <link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/center_ienter.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mE/others.css' ?>" />     

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/idea.css' ?>" />    
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/mE/idea/comment/idea.css' ?>" /> 

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
		<dt><input type='hidden' id='HiddeN_ideaid_GET' value='<?php echo $_GET['ideaid'];?>' /></dt>		
		<dt><input type='hidden' id='HiddeN_hid' value='<?php echo $_GET['hid'];?>' /></dt>				
		</dl>					
	</div>
		
	<div id='MenU'><?php //all fullscreen menu in here ?>
		<?php if(isset($_COOKIE['userid'])){?>
		<div id='MenU_ideacre'>		
		</div>		
		<?php }else{?>
		<div id='MenU_sign'>
			<div id='MenU_signupstart'>		
			</div>
			<div id='MenU_signinstart'>		
			</div>										
		</div>		
		<?php }?>				

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
		<?php if(!isset($_COOKIE['userid'])){?>
			<?php 
			require ROOTDIR.'include/part/tips/part.php';
			?>		
		<?php }?>												
		</div>						
	</div>
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
			
		<div id='Right'></div>	
			
	<div id='CenteR'>
		<div id='CenteR_rightforright'></div>	
		<div id='CenteR_main'>
			<div id='CenteR_mainme'>
				<div id='CenteR_mainmeme'>
					<div id='mE_back'>
						<div id='mE_backcon'>
							<div style='<?php echo $have;?>' id='mE_backconhave'>
								<div id='mE_backconhavecon'>
									<img id='mE_backconhaveconcon' src='<?php echo $backhave; ?>' />
								</div>
							</div>
							<div id='mE_backconfra'></div>
							<div style='<?php echo $no;?>' id='mE_backconhave'>
								<div id='mE_backconhavecon'>
									<img id='mE_backconhaveconcon' src='<?php echo $backno; ?>' />
								</div>
							</div>
						</div>
						<div id='mE_backconhiddenforscroll'></div>
					</div>
				</div>			       	
			</div>
			<div id='mE_avatar'>	
				<div id='mE_avatarcon'>
					<div style='<?php echo $haveavatar;?>' id='mE_avatarconhave' class='avatarcon'>
						<div id='mE_avatarconhavecon' class='avatarfra'>
							<div id='mE_avatarconhavecon1' class='avatarfra1'></div>
							<div id='mE_avatarconhavecon2' class='avatarfra2'></div>
							<div id='mE_avatarconhavecon3' class='avatarfra3'><a><img id='mE_avatarconhaveconcon' src='<?php echo $backhaveavatar; ?>' /></a></div>
							<div id='mE_avatarconhavecon4' class='avatarfra4'></div>
							<div id='mE_avatarconhavecon5' class='avatarfra5'></div>	
						</div>
					</div>
					<div style='<?php echo $noavatar;?>' id='mE_avatarconhave' class='avatarcon'>
						<div id='mE_avatarconnocon' class='avatarfra'>
							<div id='mE_avatarconnocon1' class='avatarfra1'></div>
							<div id='mE_avatarconnocon2' class='avatarfra2'></div>
							<div id='mE_avatarconnocon3' class='avatarfra3'><a><img id='mE_avatarconhaveconcon' src='<?php echo $backnoavatar; ?>' /></a></div>
							<div id='mE_avatarconnocon4' class='avatarfra4'></div>
							<div id='mE_avatarconnocon5' class='avatarfra5'></div>
						</div>
						
					</div>
					<div id='mE_avatarconhiddenforscroll'></div>							
				</div>
				<?php 
				if((isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid'])){
				?>
					<?php 
					//social info:follow
// 					$html_social=array();
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
					<div id='SociaL' class='loloerfollow'>
					<?php if($nofollow==1){?>
						<div style='display:none;' class='social-follow' id='SociaL_follow'>
							<span class='follow' id='FolloW' title='关注' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/mE/center/follow.png' ;?>')"></span>
							<span class='followfra'></span>
						</div>
					<?php }else{ ?>
						<div style='display:none;' class='social-follow' id='SociaL_unfollow'>
							<span class='unfollow' id='UnfolloW'>取消</span>
						</div>
						<div class='social-following'>
							<span class='following' title='following'>关注中</span>

						</div>						
					<?php } ?>
					</div>
					<div id='mE_avatarname'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine='.$_GET['mine'];?>' title='<?php echo $name;?>'><?php echo $name;?></a></div>							
				<?php 
				}else{
				?>
					<a id='MeAvatarNameNot' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine='.$_GET['mine'];?>' ><span title='<?php echo $name;?>'><?php echo $name;?></span></a>					
				<?php }?>													
				<div id='mE_mine'>
					<div id='mE_minecon'>
						<div id='mE_minecon1' class='minecon'>
							<a id='mE_minecon1re' class='mineconre' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine=close';?>'>
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
				</div>				
			</div>			
			<div id='CenteR_mainenter'></div>						
		</div>
		<div id='CenteR_others'>
			<div style='opacity:0;' id='CenteR_othersformainheight'></div>
		</div>
	</div>
	<div id='OtherS'></div>
<?php 
	require ROOTDIR.'include/part/fullscreen/part.php'
?>
	<script charset='utf-8'>
	            //screenscreenscreenscreenscreenscreen
		var w=screen.width;
		
			//mainWmainWmainWmainWmainWmainWmainW			
			var mainW=w - 520;
		
				//centercentercentercentercentercenter		
				$('#CenteR_main').width(mainW);	
				        //me   
				        $('#CenteR_mainmeme').width(mainW);	
		        
			//toptoptoptoptoptoptoptoptoptoptoptop
			$('#ToP_content').width(mainW);
		
		//othersothersothersothersothersothers
		$('#OtherS').width(w-260);					   		
	</script>

<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>"></script>
<?php if(isset($_COOKIE['userid'])){?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>"></script>
<?php }else{?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.js' ?>" charset='utf-8'></script>				
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.js' ?>" charset='utf-8'></script>
<?php }?>
<?php 
if((isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid'])){
?>
<script src="<?php echo ROOTJSOTHERSDIR.'public/social/follow.js' ?>"></script>							
<?php 
}
?>
<?php if(!(isset($_COOKIE['userid']))){?>
	<script src="<?php echo ROOTJSOTHERSDIR.'mE/topnosign.js' ?>"></script>
<?php }else{?>
	<script src="<?php echo ROOTJSOTHERSDIR.'mE/top.js' ?>"></script>
<?php }?>   			
		<script src="<?php echo ROOTJSOTHERSDIR.'mE/right.js' ?>"></script>
            <script src="<?php echo ROOTJSOTHERSDIR.'mE/center.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'mE/center/me.js' ?>"></script>			

<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/enter/idea.js' ?>"></script>
<script src="<?php echo ROOTOTHERSDIR.'html/mE/idea/comment/idea.js' ?>"></script>
</body>