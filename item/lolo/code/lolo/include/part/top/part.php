<?php 
//echo the user's info
$search=sql_search("SELECT
		avatar
	        FROM
		he_humans
	      WHERE
		id='{$_COOKIE['userid']}'
");
$html_user=array();
$html_user['avatar']=htmlF($search['avatar']);
		
//avatar
$avatar=strlen(trim($html_user['avatar']));
if($avatar > 0){
	$avatar_top=$html_user['avatar'];
	$avatar_topback='background-color:rgba(0,0,0,0.125);';
	
	$avatardisplay='display:block;';
	$avataradddisplay='display:none;';
	
	
}else{
	$avatar_top='image/home/top/avatar.png';
	$avatar_topback='';
	
	$avataradddisplay='display:block;';
	$avatardisplay='display:none;';
}	
?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/top/part.css' ?>" />	
	<div id='ToP'>		
		<div id='ToP_content'>	
			<div id='ToP_basic'>
				<div id='ToP_basicdiv1'>
					<dl id='BasiC_face' >
						<dt id='BasicF_dl1dt1' title="">
							<span id='BasicF_dl1dt1span1' style='<?php echo $avatar_topback;?>'>
								<a title='<?php echo $_COOKIE['username']; ?>'>
								<img style='<?php echo $avataradddisplay;?>' id='BasicF_img' src="<?php echo ROOTDATAOTHERSDIR.$avatar_top; ?>" />
								<img style='<?php echo $avatardisplay;?>' id='BasicF_imgavatar' src="<?php echo ROOTOTHERSDIR.$avatar_top; ?>" />
								</a>
							</span>
						</dt>
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
				<div id='ToP_basicdiv2'>
					<dl id='BasiC_idea' >
						<dt title='露露' id='BasicI_dl1dt1'>
							<span id='BasicI_img' class='create' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/top/create.png' ?>');"></span>
						</dt>
					</dl>
				</div>								
				<div id='ToP_basicdiv3'>
					<a class='topBasic3 topBasic3_1' href='<?php echo ROOTOTHERSDIR.'home.php' ?>'><img id='TopBasic3_1_Home' title='首页' src="<?php echo ROOTDATAOTHERSDIR.'image/public/home_gray.png' ?>" /><span id='TopBasic3_1_HomeLan' style='display:none'>首页</span></a>
					
					<a class='topBasic3 topBasic3_2' href='<?php echo ROOTOTHERSDIR.'works.php' ?>'><img id='TopBasic3_2_Works' title='工厂' src="<?php echo ROOTDATAOTHERSDIR.'image/public/works_gray.png' ?>" /><span id='TopBasic3_1_WorksLan' style='display:none'>工厂</span></a>
					
					<a class='topBasic3 topBasic3_3' href='<?php echo ROOTOTHERSDIR.'explore.php' ?>'><img id='TopBasic3_3_Explore' title='发现' src="<?php echo ROOTDATAOTHERSDIR.'image/public/discovery_gray.png' ?>" /><span id='TopBasic3_1_ExploreLan' style='display:none'>发现</span></a>			
				</div>				
			</div>	
			<div id='ToP_mark'>
				<dl id='ToP_markdl1'>
				<dt><a><span id='MarK_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/public/website.png' ?>');"></span></a></dt>
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
	<script charset='utf-8'>
							
	</script>	
<script src="<?php echo ROOTOTHERSDIR.'include/part/top/part.js' ?>" charset='utf-8'></script>	