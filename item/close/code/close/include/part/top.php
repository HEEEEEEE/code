<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'include/top.css' ?>" />	
	<div id='ToP'>
		<?php 
		$username=$_COOKIE['username'];
		$BasicF_img=ROOTDATAOTHERSDIR.'include/image/top/basicface/white/face.png';
		$url_home=ROOTOTHERSDIR.'project/home.php';
		$url_signout=ROOTPROCESSOTHERSDIR.'signout.php';		
		if(isset($_COOKIE['username'])){
		echo 
		"
		<div id='ToP_basic'>
			<dl id='BasiC_face' >
				<dt id='BasicF_dl1dt1'>
				<img id='BasicF_img' src='$BasicF_img'>
				<img id='BasicfnO_img' src='$BasicF_img'>
				</dt>
				
				<dt id='BasicF_dl1dt2'><span id='BasicF_username' title='$username'>$username</span></dt>
			</dl>					
		</div>
		<div id='ToP_basicmenu'>			
			<div id='BasicmenU_top'>
			</div>
			<div id='BasicmenU_center'>
				<dl id='BasicmenU_centerdl1'>
				<dt><a href='$url_home'><span id='BasicmenU_centerbasic1'>HOME</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic2'>Settings</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic3'>Help</span></a></dt>
				<dt><a href='$url_signout'><span id='BasicmenU_centerbasic4'>Sign out</span></a></dt>
				<dt><a><span id='BasicmenU_centerbasic5'>WORLD</span></a></dt>
				</dl>
			</div>								
		</div>						
		";	
		}
		else{
		echo
		"
		<div id='ToP_sign'>
			<dl id='SigN' >
				<dt id='SigN_dl1dt1'><span></span></dt>
				<dt id='SigN_dl1dt2'><span id='SigN_in' class='signin-click'>Sign in</span><span id='SigN_up' class='signup'>Sign up</span></dt>	
			</dl>					
		</div>								       		
		";
                        }	
		?>
		<div id='ToP_mark'>
			<dl id='ToP_markdl1'>
			<dt><a href="<?php echo ROOTOTHERSDIR.'index.php' ?>"><img id='MarK_img' src="<?php echo ROOTDATAOTHERSDIR.'include/image/top/website_mark/orange/mark.png' ?>"></a></dt>
			</dl>	          
		</div>
				
		<div id='ToP_search'>
			<dl>
			<dt><input id='SearcH_input' type='text' value='Search in OCLOCLO' /></dt>
			<dt><img id='SearcH_img' src="<?php echo ROOTDATAOTHERSDIR.'include/image/top/search_mark/white/mark.png' ?>"></dt>
			</dl>		
		</div>		
	</div>						
<script src="<?php echo ROOTJSOTHERSDIR.'include/top.js' ?>" charset='utf-8'></script>