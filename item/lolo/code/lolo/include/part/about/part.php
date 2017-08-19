<?php 
//WHEREWHEREWHEREWHEREWHEREWHEREWHEREWHEREWHE
global $whereName;
switch($whereName){
	case 'about':
		$name1=array($whereName,'关于');
		$name2=array('help','帮助');
		$name3=array('job','工作');
		$name4=array('business','商业');
		$name5=array('uS','我们');
	break;
	case 'help':
		$name1=array($whereName,'帮助');
		$name2=array('job','工作');
		$name3=array('business','商业');
		$name4=array('uS','我们');
		$name5=array('about','关于');
	break;	
	case 'job':
		$name1=array($whereName,'工作');
		$name2=array('business','商业');
		$name3=array('uS','我们');
		$name4=array('about','关于');
		$name5=array('help','帮助');
		break;			
	case 'business':
		$name1=array($whereName,'商业');
		$name2=array('uS','我们');
		$name3=array('about','关于');
		$name4=array('help','帮助');
		$name5=array('job','工作');			
	break;
	case 'uS':
		$name1=array($whereName,'我们');
		$name2=array('about','关于');
		$name3=array('help','帮助');
		$name4=array('job','工作');
		$name5=array('business','商业');
	break;		
}
?>
<!DOCTYPE html>
	<html>
<head>
<meta charset='utf-8' />	
<title><?php echo ' > '.$whereName.' < OCLOCLO '; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />

<?php 
if(isset($_COOKIE['userid'])){
?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />				
<?php }else{?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />		
<?php }?>	

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/about/part.css' ?>" />	

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>
</head>

<body>
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
						<span id='ToP_guidestr'><?php echo $name1[1];?></span>					
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
							<dt title='露露' id='BasicI_dl1dt1'>
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
							<a id='CategorY_leafcon1' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.$name1[0].'.php';?>'><?php echo $name1[1];?></a>
						</div>
						<div id='CategorY_leaf2' class='category-leaf'>
							<a id='CategorY_leafcon2' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.$name2[0].'.php';?>'><?php echo $name2[1];?></a>
						</div>
						<div id='CategorY_leaf3' class='category-leaf'>
							<a id='CategorY_leafcon3' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.$name3[0].'.php';?>'><?php echo $name3[1];?></a>						
						</div>
						<div id='CategorY_leaf4' class='category-leaf'>
							<a id='CategorY_leafcon4' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.$name4[0].'.php';?>'><?php echo $name4[1];?></a>						
						</div>
						<div id='CategorY_leaf5' class='category-leaf'>
							<a id='CategorY_leafcon5' class='category-leafcon' href='<?php echo ROOTOTHERSDIR.$name5[0].'.php';?>'><?php echo $name5[1];?></a>						
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
				<div id='ExplorE'>
					<div id='ExplorE_leftforcategory'></div>
					<div id='FeaturE'>
						<div id='WebsitE_info1' class='websiteinfo'>
							<a>手机</a>
							<a>|</a>
							<a>18814485701</a>
						</div>
						<div id='WebsitE_info2' class='websiteinfo'>
							<a>邮件</a>
							<a>|</a>
							<a>chen@ocloclo.com</a>						
						</div>						
					</div>
				</div>												
			</div>														
		</div>
		<div id='CenteR_others'>
		
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

		   	// the top basicf
		   	/*show the top basicf menu*/		
		   	$('#BasicF_dl1dt1span1').mouseover(function(){	
		   		var o=$('#BasicF_dl1dt1span1').offset();
		   			var ptop='35px';
		   				var pleft=((o.left)-160)+'px';			
		   		$('#ToP_basicdiv1menu').css({top:ptop,left:pleft,display:'block'});		
		   	});	
		   	/*hide the top basicf menu*/
		   	$('#ToP_basicdiv1menu').mouseleave(function(){
		   		$('#ToP_basicdiv1menu').css({display:'none'});				
		   	});
		   	$('html').mouseup(function(){
		   		$('#ToP_basicdiv1menu').css({display:'none'});				
		   	});
	   	   
		//for category zIndex 
		$('#ExplorE_leftforcategory').mouseover(function(){
			$('#LefT').css('zIndex','2525');
				$('#CenteR').css('zIndex','2502');		
		});
		$('#LefT_niam').mouseleave(function(){
			$('#LefT').css('zIndex','2502');
				$('#CenteR').css('zIndex','2525');		
		});		
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
</body>
	</html>
	
	
	
	
	
	
	
	
	
	
	
	
	
		
