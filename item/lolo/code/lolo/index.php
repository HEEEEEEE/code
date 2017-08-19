<?php 
/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 	*
      * 
 * 
 */
//basic:each
require dirname(__FILE__).'/include/each.php';
	//is login!!!!!
	isloginSL();
		//update the idea
		update_idea();
?>
<!DOCTYPE html>
<html id='HtmL_index'>
<head>
<meta charset='utf-8' />	
<title><?php echo ' OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.css' ?>" />
			
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index/top.css' ?>" /> 
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index/bottom.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index/left.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index/center.css' ?>" />	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index/left/signup.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/index/idea/show/idea.css' ?>" />

<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>
</head>

<body id='BodY_index'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>						
		</dl>
		<dl id='HiddeN_input' >
		<dt><input type='hidden' id='HiddeN_inputbrowser' value='' /></dt>						
		</dl>													
	</div>
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
		</div>								
	</div>
	<div id='MenU_tool'>
		<div id='MenU_ideatool'>	
			<div id='MenU_ideatooluinf' style='display:none;'>	
			</div>		
		</div>
			
		<div id='MenU_signupouttool'>
			<div id='MenU_signupouttooltips'>
				<div id='SignupouT_endtips'>	
					<div id='SignupouT_endtipscenter'>                                                                
					        <div id='SignupouT_endtipscentercon'>
						<div id='SignupouT_endtipscentercon1' class='signupout-endtipscentercon'>
							<div id='SignupouT_endtipscenterconcon1' class='signupout-endtipscenterconcon'></div>
						</div>
						<div id='SignupouT_endtipscentercon2' class='signupout-endtipscentercon'>
							<div id='SignupouT_endtipscenterconcon2' class='signupout-endtipscenterconcon'></div>
						</div>
			                                    <div id='SignupouT_endtipscentercon3' class='signupout-endtipscentercon'>
			                                    	<div id='SignupouT_endtipscenterconcon3' class='signupout-endtipscenterconcon'></div>
			                                    </div>
						<div id='SignupouT_endtipscentercon4' class='signupout-endtipscentercon'>
							<div id='SignupouT_endtipscenterconcon4' class='signupout-endtipscenterconcon'></div>
						</div>
						<div id='SignupouT_endtipscentercon5' class='signupout-endtipscentercon'>
							<div id='SignupouT_endtipscenterconcon5' class='signupout-endtipscenterconcon'></div>
						</div>	
					       </div>
					</div>	
				</div>		
			</div>	
			<div id='MenU_signupouttoolothers'>
				<dl id='HiddeN_signupoutcolor' >
				<dt><input type='hidden' id='HiddeN_signupoutcolorback' value='' /></dt>					
				</dl>		
			</div>			
		</div>	
	</div>	
<div id='BodY_scroll'>	
	<div id='ToP'>
		<div id='ToP_main'>
			<div id='ToP_mainleft'>
				<div id='SigN'>
					<span id='SignuP' class='signconcon signup'>注册</span>
					<span id='SigniN' class='signconcon signin'>登录</span>				
				</div>		
			</div>
				<div id='ToP_maincenter'>
					<a id='WebsitE' href=''>
						<span id='WebsitE_mark' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/index/top/website.png' ?>');"></span>
						<span id='WebsitE_name'>OCLOCLO</span>
					</a>					
				</div>				
		</div>
		<div id='ToP_others'>					
		</div>											
	</div>
			<div id='RightT'>
			</div>

	<div id='CenteR'>
		<div id='CenteR_main'>
			<div id='CenteR_maintop' class='center-main'>
				<div id='CenteR_maintopcon'>
					<div id='CenteR_maintopconleft' class='center-maintopcon'>
						<span class='center-maintopconleftcon'>露露属于你自己的 时光</span>
						<span class='center-maintopconleftcon'>和朋友分享各自的 时光</span>
						<span class='center-maintopconleftcon'>向每一个人展现自己的 时光</span>
					</div>
					<div id='CenteR_maintopconright' class='center-maintopcon'>
						<span class='center-maintopconrightcon'>开启 露露 分享那些关于时光的旅行</span>
						<span class='center-maintopconrightcon'>那些关于时光的计划</span>
						<span class='center-maintopconrightcon'>那些关于时光的项目...</span>
					</div>					
				</div>		
			</div>
				<div id='CenteR_maincenter' class='center-main'>
					<div id='CenteR_maincentercon'>					
					</div>									
				</div>
			<div id='CenteR_mainbottom' class='center-main'>
				<div id='CenteR_mainbottomcon'>
					<div id='ExplorE_more'><a href='<?php echo ROOTOTHERSDIR.'explore.php'; ?>'>发现更多...</a></div>
				</div>			
			</div>				
		</div>
		<div id='CenteR_others'></div>				
	</div>			
			
		<div id='LefT'>
			<div id='LefT_fra'>
				<div id='LefT_fracon'>注册</div>
			</div>
			<div id='LefT_main'>
				<div id='SignupouT_petiole'>
				</div>
			</div>
			<div id='LefT_niam'>
				<div id='SignupouT_leaves'>
				        <form id='ForM_signupout' autocomplete='off'>
					<div id='SignupouT_leaf1' class='signupout-leaf'>
						<input id='SignupouT_leafcon1' class='signupout-leafcon input-email input-show' type='text' placeholder='电子邮件' maxlength='25' />
					</div>
					<div id='SignupouT_leaf2' class='signupout-leaf'>
						<input id='SignupouT_leafcon2' class='signupout-leafcon input-password input-show' type='password' placeholder='密码' maxlength='25' />
					</div>
					<div id='SignupouT_leaf3' class='signupout-leaf'>
						<input id='SignupouT_leafcon3' class='signupout-leafcon input-username input-show' type='text' placeholder='昵称' maxlength='25' />
					</div>
					<div id='SignupouT_leaf4' class='signupout-leaf'>
						<input id='SignupouT_leafcon4' class='signupout-leafcon input-code input-show' type='text' placeholder='验证码' maxlength='5' /><img id='SignupouT_leafcon41' title='Click to changE' src='<?php echo ROOTOTHERSDIR.'include/part/code/code_imsignup.php'?>'/>
					</div>
					<div id='SignupouT_leaf5' class='signupout-leaf'>
						<span id='SignupouT_leafcon5' class='signupout-leafcon'>完成</span>
					</div>
				       </form>																				
				</div>			
			</div>
		</div>
		<div id='Right'>
			<div id='AppShow' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/index/app.png' ?>');"></div>
		</div>	
	
			<div id='BottoM'>
				<div id='BottoM_main'>
					<div id='BottoM_maincenter'>
						<div id='WebsitE_guide1' class='website-guide'><a href='<?php echo ROOTOTHERSDIR.'about.php'; ?>'>关于</a></div>
						<div id='WebsitE_guide2' class='website-guide'><a href='<?php echo ROOTOTHERSDIR.'help.php'; ?>'>帮助</a></div>
						<div id='WebsitE_guide3' class='website-guide'><a href='<?php echo ROOTOTHERSDIR.'job.php'; ?>'>工作</a></div>
						<div id='WebsitE_guide4' class='website-guide'><a href='<?php echo ROOTOTHERSDIR.'about.php'; ?>'>商业</a></div>
						<div id='WebsitE_guide5' class='website-guide'><a><?php echo '© '.date('Y').' OCLOCLO'; ?></a></div>									
					</div>								
				</div>
				<div id='BottoM_others'></div>				
			</div>			
</div>	
	<script charset='utf-8'>
		   var screenW=screen.width;
	       var pl=325;
	         var pr=325;			
	               var mainW=screenW - (pl + pr);
			   /*
			  *centercentercentercentercentercent
			   */		   
			   $('#CenteR_main').width(mainW);
					/*
					*bottombottombottombottombottombottom
					 */		   
					$('#BottoM_main').width(mainW);
					$('.website-guide').width((mainW-100)/5);
	</script>
	
<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>"></script>

<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signup/sign.js' ?>" charset='utf-8'></script>				
<script src="<?php echo ROOTOTHERSDIR.'include/part/sign/signin/sign.js' ?>" charset='utf-8'></script>

<script src="<?php echo ROOTJSOTHERSDIR.'index.js' ?>" charset='utf-8'></script>
<script src="<?php echo ROOTJSOTHERSDIR.'index/left/signup.js' ?>" charset='utf-8'></script>	

<script src="<?php echo ROOTOTHERSDIR.'html/index/idea/show/idea.js' ?>"></script>	
</body>

</html>