<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'include/top.css' ?>" />	
	<div id='ToP'>
		<div id='ToP_basic'>
			<dl id='BasiC_face' >
				<dt id='BasicF_dl1dt1'>
				<img id='BasicF_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/basicface/white/face.png' ?>">
				<img id='BasicfnO_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/basicface/white/face.png' ?>">
				</dt>
				
				<dt id='BasicF_dl1dt2'><span id='BasicF_username' title="<?php echo $_COOKIE['username'];?>"><?php echo $_COOKIE['username'];?></span></dt>
			</dl>					
		</div>		
		<div id='ToP_basicmenu'>			
			<div id='BasicmenU_top'>
			</div>
			<div id='BasicmenU_center'>
				<dl id='BasicmenU_centerdl1'>
				<dt><a href="<?php echo PROJECTOTHERSDIR.'home.php' ?>"><span id='BasicmenU_centerbasic1'>HOME</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic2'>Settings</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic3'>Help</span></a></dt>
				<dt><a href="<?php echo ROOTOTHERSDIR1.'process/signout.php' ?>"><span id='BasicmenU_centerbasic4'>Sign out</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic5'>WORLD</span></a></dt>
				</dl>
			</div>								
		</div>		
			
		<div id='ToP_mark'>
			<dl id='ToP_markdl1'>
			<dt><a href="<?php echo ROOTOTHERSDIR1.'index.php' ?>"><img id='MarK_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/website_mark/orange/mark.png' ?>"></a></dt>
			</dl>	          
		</div>
				
		<div id='ToP_search'>
			<dl>
			<dt><input id='SearcH_input' type='text' value='Search in OCLOCLO' /></dt>
			<dt><img id='SearcH_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/search_mark/white/mark.png' ?>"></dt>
			</dl>		
		</div>
	</div>
<script src="<?php echo PROJECTJSOTHERSDIR.'include/top.js' ?>" charset='utf-8'></script>