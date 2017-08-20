<?php 
/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 	*
      * 
 * 
 */
//basic:each
require dirname(__FILE__).'/include/each.php';
	//update the idea
	update_idea();
?>
<!DOCTYPE html>
<html id='HtmL_explore'>
<?php 
	if((!(isset($_GET['search']))||($_GET['search']==''))){
      //PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP      
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />	
<title><?php echo ' > EXPLORE < OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />

<?php 
if(isset($_COOKIE['userid'])){
?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />				
<?php }else{?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />		
<?php }?>	

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/top.css' ?>" />
	<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/left.css' ?>" />		
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/center.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/explore/idea/feature/idea.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/explore/idea/catego/idea.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/explore/idea/search/idea.css' ?>" />	

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script>
</head>

<body id='BodY_explore'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>						
		</dl>							
	</div>
	<div id='MenU'><?php //all fullscreen menu in here ?>
		<div id='MenU_ideacre'>		
		</div>
									
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
		if(isset($_COOKIE['userid'])){
		require ROOTDIR.'include/part/upload/tip/upload.php';
		}
		?>
		<?php 
		require ROOTDIR.'include/part/loadin/part.php';
		?>
		<?php 
		require ROOTDIR.'include/part/browser/part.php';
		?>										
		</div>						
	</div>
	<div id='MenU_ideatool'>												
		<div id='MenU_ideatoolhide' style='display:none;'>
		       <dl>                                 
			<dt>
				<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
			</dt>	
		       </dl>
		</div>		
	</div>	
<div id='BodY_scroll'>	
	<div id='ToP'>
		<div id='ToP_main'>
			<div id='ToP_mark'>
				<dl id='ToP_markdl1'>
					<dt>
						<?php 
						if(!(isset($_COOKIE['userid']))){
						?>						
						<a href='<?php echo ROOTOTHERSDIR.'index.php'; ?>'><span id='MarK_img' style="cursor:pointer;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/website.png' ?>');"></span></a>
						<?php }else{?>
						<a><span id='MarK_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/website.png' ?>');"></span></a>
						<?php }?>
					</dt>
				</dl>	          
			</div>
			
			<div id='ToP_guide'>
				<dl id='ToP_guidedl1'>
					<dt id='ToP_guidedl1dt1'>
						<a style='cursor:text;'>
						<span id='ToP_guidestr'>探索这个世界</span>					
						</a>
					</dt>				
				</dl>	
			</div>			
			<div id='ToP_basic'>
				<?php 
				if(!(isset($_COOKIE['userid']))){
				?>
				<div id='SigN'>
					<span id='SignuP' class='signconcon signup'>注册</span>
					<span id='SigniN' class='signconcon signin'>登录</span>								
				</div>
				<?php }else{?>
				<?php 
				//the USER's INFO echo to
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
					$top_avatarC=ROOTDATAOTHERSDIR.'image/explore/top/avatar.png';
					$avatar_topback='';					
					$top_avatarHC='40px';
				}				
				?>				
				<div id='NgiS'>
					<div id='ToP_basicdiv1' class='basic-block'>
						<dl id='BasiC_face' >
							<dt id='BasicF_dl1dt1' title="">
								<span id='BasicF_dl1dt1span1' style='<?php echo $avatar_topback;?>'>
									<a title='<?php echo $_COOKIE['username']; ?>'>
										<img style='height:<?php echo $top_avatarHC; ?>' id='BasicF_img' src="<?php echo $top_avatarC; ?>" />
									</a>
								</span>
							</dt>
							
							<dt id='BasicF_dl1dt2'><span id='BasicF_username' title=""></span></dt>
						</dl>
					</div>
					<div id='ToP_basicdiv1menu' style='display:none;'>		
						<dl id='ToP_basicdiv1menudl1'>		
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'><span class='basicusermenucon basicusermenuconfl' title='<?php echo $_COOKIE['username']; ?>'><?php echo $_COOKIE['username']; ?></span></a></dt>		
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close&others=settings';?>'><span class='basicusermenucon'>设置</span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'help.php';?>'><span class='basicusermenucon'>帮助</span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'signout.php';?>'><span class='basicusermenucon'>注销</span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'uS.php';?>'><span class='basicusermenucon basicusermenuconfl'>我们</span></a></dt>				   			   
						</dl>				
					</div>					
					<div id='ToP_basicdiv2' class='basic-block'>
						<dl id='BasiC_idea' >
							<dt title='lolo' id='BasicI_dl1dt1'>
								<span id='BasicI_img' class='create' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/create.png' ?>');"></span>
							</dt>
						</dl>
					</div>
				</div>
				<?php }?>																
			</div>				
		</div>
		<div id='ToP_others'>					
		</div>
		<div id='ToP_scroll' style='display:none;'>
					<?php 
						if((!(isset($_GET['explore'])))||(isset($_GET['explore']))&&(($_GET['explore']=='')||($_GET['explore']=='EverythinG'))){
							$explore1=array('EverythinG','一切');
							$explore2=array('WorK','作品');
							$explore3=array('IteM','项目');
							$explore4=array('PlaN','计划');
							$explore5=array('EverythinG','一切');
							$explore51=array('MorE...','更多');
						}else if((isset($_GET['explore']))&&(($_GET['explore']=='')||($_GET['explore']=='WorK'))){
							$explore1=array('WorK','作品');
							$explore2=array('IteM','项目');
							$explore3=array('PlaN','计划');
							$explore4=array('EverythinG','一切');
							$explore5=array('EverythinG','一切');
							$explore51=array('MorE...','更多');
						}else if((isset($_GET['explore']))&&(($_GET['explore']=='')||($_GET['explore']=='IteM'))){
							$explore1=array('IteM','项目');
							$explore2=array('PlaN','计划');
							$explore3=array('WorK','作品');
							$explore4=array('EverythinG','一切');
							$explore5=array('EverythinG','一切');
							$explore51=array('MorE...','更多');
						}else if((isset($_GET['explore']))&&(($_GET['explore']=='')||($_GET['explore']=='PlaN'))){
							$explore1=array('PlaN','计划');
							$explore2=array('WorK','作品');
							$explore3=array('IteM','项目');
							$explore4=array('EverythinG','一切');
							$explore5=array('EverythinG','一切');
							$explore51=array('MorE...','更多');
						}					
					?>
			<div id='ToP_scrollcategory'>
				<div id='ScrolL_categoryfra1' class='scrollcategory_topfra'>
					<a><span id='ScrolL_categoryfra1con1' class='scrollcategory_topfracon'>探索</span></a>
					<a href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore1[0];?>'><span id='ScrolL_categoryfra1con2' class='scrollcategory_topfracon'><?php echo $explore1[1]; ?></span></a>
					<a><span id='ScrolL_categoryfra1con3' class='scrollcategory_topfracon'>在这儿 !</span></a>
				</div>
			</div>
			<div id='ToP_scrollsearch'>
				<div id='SearcH2'>
					<div id='SearcH2_tool'>
						<div id='SearcH2_toolenter' class='search2tool' >
							<input id='SearcH2_toolentercon' class='search2toolcon input-search input-show' type='text' value='' maxlength='125' placeholder="搜一下" />
						</div>
						<div id='SearcH1_too2do' class='search2tool' >
							<span id='SearcH2_tooldocon' class='search2toolcon' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/center/search.png' ;?>')"></span>
						</div>						
					</div>
				</div>
			</div>							
		</div>											
	</div>

		<div id='LefT'>
			<div id='LefT_center'>
				<div id='LefT_main'>
					<div id='CategorY_petiole'>
					</div>
				
				</div>
				<div id='LefT_niam'>
					<div id='CategorY_leaves'>
						<div id='CategorY_leaf1' class='category-leaf'>
							<a data-search='<?php echo $explore1[0]; ?>' id='CategorY_leafcon1' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore1[0];?>'><?php echo $explore1[1]; ?></a>
						</div>
						<div id='CategorY_leaf2' class='category-leaf'>
							<a id='CategorY_leafcon2' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore2[0];?>'><?php echo $explore2[1]; ?></a>
						</div>
						<div id='CategorY_leaf3' class='category-leaf'>
							<a id='CategorY_leafcon3' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore3[0];?>'><?php echo $explore3[1]; ?></a>						
						</div>
						<div id='CategorY_leaf4' class='category-leaf'>
							<a id='CategorY_leafcon4' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore4[0];?>'><?php echo $explore4[1]; ?></a>						
						</div>
						<div id='CategorY_leaf5' class='category-leaf'>
							<a id='CategorY_leafcon5' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore5[0];?>'><?php echo $explore51[1]; ?></a>						
						</div>
					</div>			
				</div>
			</div>
		</div>
	
			<div id='BottoM'>
			</div>
	
		<div id='RightT'>
		</div>
	
	
	<div id='CenteR'>
		<div id='CenteR_main'>
			<div id='CenteR_maintop'>
			
			</div>
				<div id='CenteR_mainright'>
					<div id='SearcH1'>
						<div id='SearcH1_tool'>
							<div id='SearcH1_toolenter' class='search1tool' >
								<input id='SearcH1_toolentercon' class='search1toolcon input-search input-show' type='text' value='' maxlength='125' placeholder="搜一下" />
							</div>
							<div id='SearcH1_tooldo' class='search1tool' >
								<span id='SearcH1_tooldocon' class='search1toolcon' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/center/search.png' ;?>')"></span>
							</div>						
						</div>
					</div>								
				</div>
					<div id='CenteR_mainbottom'>
					
					</div>
				<div id='CenteR_mainleft'>				
									
				</div>
			<div id='CenteR_maincenter'>
				<div id='ExplorE'>
					<div id='ExplorE_leftforcategory'></div>
					<div id='FeaturE'>
						<div id='FeaturE_top'>
							<div id='FeaturE_topfra1' class='feature_topfra'>&gt;</div>
							<div id='FeaturE_topfra2' class='feature_topfra'>最新的</div>
						</div>
						<div id='FeaturE_center'>
							<div id='FeaturE_centercon'></div>
						</div>
					</div>
					<div id='CategorY'>
						<div id='CategorY_top'>
							<div id='CategorY_topfra1' class='category_topfra'>
								<a><span id='CategorY_topfra1con1' class='category_topfracon'>探索</span></a>
								<a href='<?php echo ROOTOTHERSDIR.'explore.php?explore='.$explore1[0];?>'><span id='CategorY_topfra1con2' class='category_topfracon'><?php echo$explore1[1]; ?></span></a>
								<a><span id='CategorY_topfra1con3' class='category_topfracon'>在这儿 !</span></a>
							</div>
						</div>
						<div id='CategorY_center'>
							<div id='CategorY_centercon'></div>
						</div>					
					</div>
				</div>												
			</div>														
		</div>
		<div id='CenteR_others'>
		
		</div>			
	</div>
</div>

	<script charset='utf-8'>
		   var screenW=screen.width;			
		  	 var mainW=screenW - 520;
			   /*
			   *toptoptoptoptoptoptoptoptoptoptoptoptoptoptop
			    */	             		
			   $('#ToP_main').width(mainW);
				   //scroll
				   $('#ToP_scroll').width(mainW);
				   
		   /*
		   *leftleftleftleftleftleftleftleftleftleftleftleft
		    */	             		
		   $('#LefT_center').width(mainW);
				   
		  	   /*
			   *centercentercentercentercentercent
			    */		   
		   	   $('#CenteR_main').width(mainW);		
	</script> 

<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>"></script>

<?php 
if(isset($_COOKIE['userid'])){
?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>" charset='utf-8'></script>								
<?php }else{?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.js' ?>" charset='utf-8'></script>				
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.js' ?>" charset='utf-8'></script>
<?php }?>

<script src="<?php echo ROOTJSOTHERSDIR.'explore.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'explore/top.js' ?>" charset='utf-8'></script>
	<script src="<?php echo ROOTJSOTHERSDIR.'explore/left.js' ?>" charset='utf-8'></script>	
<script src="<?php echo ROOTJSOTHERSDIR.'explore/center.js' ?>" charset='utf-8'></script>
<script src="<?php echo ROOTJSOTHERSDIR.'explore/center_scroll.js' ?>" charset='utf-8'></script>
	
<script src="<?php echo ROOTOTHERSDIR.'html/explore/idea/feature/idea.js' ?>"></script>	
<script src="<?php echo ROOTOTHERSDIR.'html/explore/idea/catego/idea.js' ?>"></script>	
<script src="<?php echo ROOTOTHERSDIR.'html/explore/idea/search/idea_searchou.js' ?>"></script>	
<script src="<?php echo ROOTOTHERSDIR.'html/explore/idea/catego/loadMore.js' ?>"></script>	
</body>
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<?php }else{
	//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
?>
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />	
<title><?php echo ' > SEARCH < OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />

<?php 
if(isset($_COOKIE['userid'])){
?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />				
<?php }else{?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />		
<?php }?>
	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore.css' ?>" />
		<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/top.css' ?>" />
	<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/left.css' ?>" />		
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'explore/center.css' ?>" />				
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/explore/idea/search/idea.css' ?>" />	

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script>
</head>

<body id='BodY_explore'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>						
		</dl>							
	</div>
	<div id='MenU'><?php //all fullscreen menu in here ?>
		<div id='MenU_ideacre'>		
		</div>
									
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
		if(isset($_COOKIE['userid'])){
		require ROOTDIR.'include/part/upload/tip/upload.php';
		}
		?>
		<?php 
		require ROOTDIR.'include/part/loadin/part.php';
		?>
		<?php 
		require ROOTDIR.'include/part/browser/part.php';
		?>										
		</div>						
	</div>
	<div id='MenU_ideatool'>												
		<div id='MenU_ideatoolhide' style='display:none;'>
		       <dl>                                 
			<dt>
				<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
			</dt>	
		       </dl>
		</div>		
	</div>	
<div id='BodY_scroll'>	
	<div id='ToP'>
		<div id='ToP_main'>
			<div id='ToP_mark'>
				<?php 
				if(!(isset($_COOKIE['userid']))){
				?>						
				<a href='<?php echo ROOTOTHERSDIR.'index.php'; ?>'><span id='MarK_img' style="cursor:pointer;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/website.png' ?>');"></span></a>
				<?php }else{?>
				<a><span id='MarK_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/website.png' ?>');"></span></a>
				<?php }?>	          
			</div>
			
			<div id='ToP_guide'>
				<dl id='ToP_guidedl1'>
					<dt id='ToP_guidedl1dt1'>
						<a href='<?php echo ROOTOTHERSDIR.'explore.php';?>'>
						<span id='ToP_guideimg' style="display:block;background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/explore.png' ;?>')"></span>
						</a>
					</dt>				
				</dl>	
			</div>			
			<div id='ToP_basic'>
				<?php 
				if(!(isset($_COOKIE['userid']))){
				?>
				<div id='SigN'>
					<span id='SignuP' class='signconcon signup'>注册</span>
					<span id='SigniN' class='signconcon signin'>登录</span>				
				</div>
				<?php }else{?>
				<?php 
				//the USER's INFO echo to
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
					$top_avatarC=ROOTDATAOTHERSDIR.'image/explore/top/avatar.png';
					$avatar_topback='';					
					$top_avatarHC='40px';
				}				
				?>				
				<div id='NgiS'>
					<div id='ToP_basicdiv1' class='basic-block'>
						<dl id='BasiC_face' >
							<dt id='BasicF_dl1dt1' title="">
								<span id='BasicF_dl1dt1span1' style="<?php echo $avatar_topback; ?>">
									<a title='<?php echo $_COOKIE['username']; ?>'>
										<img style='height:<?php echo $top_avatarHC; ?>' id='BasicF_img' src="<?php echo $top_avatarC; ?>" />
									</a>
								</span>
							</dt>
							
							<dt id='BasicF_dl1dt2'><span id='BasicF_username' title=""></span></dt>
						</dl>
					</div>
					<div id='ToP_basicdiv1menu' style='display:none;'>		
						<dl id='ToP_basicdiv1menudl1'>		
							   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'><span class='basicusermenucon basicusermenuconfl' title='<?php echo $_COOKIE['username']; ?>'><?php echo $_COOKIE['username']; ?></span></a></dt>		
							   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close&others=settings';?>'><span class='basicusermenucon'>设置</span></a></dt>
							   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'help.php';?>'><span class='basicusermenucon'>帮助</span></a></dt>
							   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'signout.php';?>'><span class='basicusermenucon'>注销</span></a></dt>
							   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'uS.php';?>'><span class='basicusermenucon basicusermenuconfl'>我们</span></a></dt>				   			   
						</dl>
						<dl id='ToP_basicdiv1menudl2'>		
						   <dt><a href='<?php echo ROOTOTHERSDIR.'home.php';?>'><img id='BasicF_imgworld' src="<?php echo ROOTDATAOTHERSDIR.'image/explore/top/home.png'; ?>" /></a></dt>			   			   
						</dl>					
					</div>					
					<div id='ToP_basicdiv2' class='basic-block'>
						<dl id='BasiC_idea' >
							<dt title='lolo' id='BasicI_dl1dt1'>
								<span id='BasicI_img' class='create' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/create.png' ?>');"></span>
							</dt>
						</dl>
					</div>
				</div>
				<?php }?>																
			</div>				
		</div>
		<div id='ToP_others'>					
		</div>		
		<div id='ToP_search' style='display:block;'>
			<div id='ToP_searchtool' >
				<div id='SearcH3' >
					<div id='SearcH3_tool'>
						<div id='SearcH3_toolenter' class='search3tool' >
							<input id='SearcH3_toolentercon' class='search3toolcon input-search' type='text' value='<?php echo $_GET['search']; ?>' maxlength='125' placeholder="搜一下" />
						</div>
						<div id='SearcH3_tooldo' class='search3tool' >
							<span id='SearcH3_tooldocon' class='search3toolcon' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/center/search.png' ;?>')"></span>
						</div>						
					</div>
				</div>
			</div>							
		</div>											
	</div>

		<div id='LefT'>
			<div id='LefT_center'>
				<div id='LefT_main'>
					<div id='CategorY_petiole'>
					</div>
				
				</div>
				<div id='LefT_niam' style='z-index:3000;'>
					<div id='CategorY_leaves'>
						<div id='CategorY_leaf1' class='category-leafforsearch'>
							<a id='CategorY_leafcon1' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.'explore.php?explore=EverythinG';?>'>一切</a>
						</div>
					</div>			
				</div>
			</div>
		</div>
	
			<div id='BottoM'>
			</div>
	
		<div id='RightT'>
		</div>
	
	
	<div id='CenteR'>
		<div id='CenteR_main'>
			<div id='CenteR_maintop'>
			
			</div>
				<div id='CenteR_mainright'>								
				</div>
					<div id='CenteR_mainbottom'>
					
					</div>
				<div id='CenteR_mainleft'>				
									
				</div>
			<div id='CenteR_maincenter'>
				<div id='SearcH' style='display:block'>
					<div id='SearcH_tool' >
						<div id='SearcH0' >
							<div id='SearcH0_tool'>
								<div id='SearcH0_toolenter' class='search0tool' >
									<input id='SearcH0_toolentercon' class='search0toolcon input-search input-show' type='text' value='SearcH' maxlength='125' placeholder="" />
								</div>
								<div id='SearcH0_tooldo' class='search0tool' >
									<span id='SearcH0_tooldocon' class='search0toolcon' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/center/search.png' ;?>')"></span>
								</div>						
							</div>
						</div>
					</div>
					<div id='SearcH_result'>
						<div id='SearcH_resultcon'>
						</div>
						<div id='SearcH_resultfra' style='display:none;'>
							<div id='SearcH_resultfracon' >
							<?php 
							if(!(isset($_COOKIE['userid']))){
							?>
							<div id='SigNsearch'>
								<div id='SigNsearch_div1' class='signsearchdiv'>
								<span id='SigNsearch_div1con' class='signsearchdivcon'>没有找到你想要的</span>
								</div>
								
								<div id='SigNsearch_fra' class='signsearchdiv'>
									<span id='SignuPsearch' class='signsearchconcon signup'>注册</span>
									<span id='SigniNsearch' class='signsearchconcon signin'>登录</span>				
								</div>
								
								<div id='SigNsearch_div3' class='signsearchdiv'>
									<span id='SigNsearch_div3con' class='signsearchdivcon'>或</span>
								</div>
								
								<div id='SigNsearch_div4' class='signsearchdiv'>
									<a href='<?php echo ROOTOTHERSDIR.'explore.php';?>'>
										<span id='SigNsearch_div4con' class='signsearchdivcon' title='探一下' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/explore.png' ?>');"></span>
									</a>
								</div>												
							</div>
							<?php }else{?>				
							<div id='NgiSsearch'>
								<div id='NgiSsearch_div1' class='ngissearchdiv'>
								<span id='NgiSsearch_div1con' class='ngissearchdivcon'>没有找到你想要的</span>
								</div>
													
								<div id='NgiSsearch_div2' class='ngissearchdiv'>
								<span id='NgiSsearch_div2con' class='ngissearchdivcon create' title='露一露' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/create.png' ?>');"></span>
								</div>
								
								<div id='NgiSsearch_div3' class='ngissearchdiv'>
								<span id='NgiSsearch_div3con' class='ngissearchdivcon'>或</span>
								</div>
								
								<div id='NgiSsearch_div4' class='ngissearchdiv'>
									<a href='<?php echo ROOTOTHERSDIR.'explore.php';?>'>
										<span id='NgiSsearch_div4con' class='ngissearchdivcon' title='探一下' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/explore/top/explore.png' ?>');"></span>
									</a>
								</div>																
							</div>
							<?php }?>
							</div>						
						</div>
					</div>
				</div>												
			</div>														
		</div>
		<div id='CenteR_others'>
		
		</div>			
	</div>
</div>
	<script charset='utf-8'>
		   var screenW=screen.width;			
		   	var mainW=screenW - 520;
			   /*
			   *toptoptoptoptoptoptoptoptoptoptoptoptoptoptop
			    */	             		
			   $('#ToP_main').width(mainW);
				   //search
				   $('#ToP_search').width(mainW);
   
				   /*
				   *leftleftleftleftleftleftleftleftleftleftleftleft
				    */	             		
				   $('#LefT_center').width(mainW);	
				   			   
		  	   /*
			   *centercentercentercentercentercent
			    */		   
		   	   $('#CenteR_main').width(mainW);		
	</script>

<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>"></script>

<?php 
if(isset($_COOKIE['userid'])){
?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>" charset='utf-8'></script>								
<?php }else{?>
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.js' ?>" charset='utf-8'></script>				
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.js' ?>" charset='utf-8'></script>
<?php }?>

<script src="<?php echo ROOTJSOTHERSDIR.'explore.js' ?>" charset='utf-8'></script>
		<script src="<?php echo ROOTJSOTHERSDIR.'explore/top.js' ?>" charset='utf-8'></script>
	<script src="<?php echo ROOTJSOTHERSDIR.'explore/left.js' ?>" charset='utf-8'></script>	
<script src="<?php echo ROOTJSOTHERSDIR.'explore/center.js' ?>" charset='utf-8'></script>
<script src="<?php echo ROOTOTHERSDIR.'html/explore/idea/search/idea_searchin.js' ?>"></script>	
</body>
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>	
<?php }?>
</html>