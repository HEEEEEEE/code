<?php
//Include each
require dirname(__FILE__).'/include/each.php';
//Check the login state
isloginPT();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<?php 
require PROJECTDIR.'include/part/title.php';
?>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/close/close.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/close/show.css'; ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'filebox/picture/show_public.css'; ?>' />

<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />
<script src='<?php echo PROJECTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script>

</head>
<body>
<div style='display:none;'><?php //HiddeN for speacil ?>	
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectdir' value='<?php echo PROJECTOTHERSDIR;?>' /></dt>
	</dl>
	
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectitemid' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectaddorset' value='' /></dt>		
	</dl>

	<dl>			
	<dt><input type='hidden' id='HiddeN_projectbclosename' value='<?php echo $_GET['bclosename'];?>' /></dt>		
	</dl>	
	
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>	
	</dl>			
</div>
<div id='ClosetoP'>
	<div id='ToP'>
		<div id='ToP_basic'>
		            <div id='ToP_basicdiv1'>	            
			<dl id='BasiC_face' >			
				<dt id='BasicF_dl1dt1'>
				<a href="<?php echo PROJECTOTHERSDIR.'home.php' ?>">
				<img id='BasicF_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/basicface/white/face.png' ?>">
				</a>
				</dt>				
				<dt id='BasicF_dl1dt2'>
				<a href="<?php echo PROJECTOTHERSDIR.'home.php' ?>">
				<span id='BasicF_username' title="<?php echo $_COOKIE['username'];?>"><?php echo $_COOKIE['username'];?></span>
				</a>
				</dt>
			</dl>
			</div>
			
			<div id='ToP_basicdiv2'>	
			<dl id='BasiC_close' >			
				<dt id='BasicC_dl1dt1'>
				<img id='BasicC_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/close_mark.png' ?>">
				</dt>				
				<dt id='BasicC_dl1dt2'>
				<span id='BasicC_name'>CLOSE</span>
				</dt>
			</dl>
			</div>											
		</div>							
		<div id='ToP_mark'>
			<dl id='ToP_markdl1'>
			<dt><a href="<?php echo ROOTOTHERSDIR1.'index.php' ?>"><img id='MarK_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/website_mark/white/mark.png' ?>"></a></dt>
			</dl>	          
		</div>
	</div>
	<?php 
// 	require PROJECTDIR.'home/timetodelete_website/timetodelete.php';
	?>			
</div>
<div id="CloseproC">
            <div id="CloseproC_top">
            	<span>CLOSE</span>
            </div>
            <div id="CloseproC_center">
		<div id="ClosetooL" >
			<div id="ClosedeletE">
				<dl>
				<dt><img id='ClosedeletE_img' class='closedelete' title='Delete' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/delete.png'?>"></dt>
				<dt><img id='ClosedeletenO_img' class='closedelete' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/delete.png'?>"></dt>
				</dl>				
			</div>	
			<div id="CloseadD">
				<dl>
				<dt><img id='CloseadD_img' class='closeadd' title='Create' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/add.png'?>"></dt>
				<dt><img id='CloseaddnO_img' class='closeadd' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/add.png'?>"></dt>
				</dl>			
			</div>
			<div id="ClosesettingS">
				<dl>
				<dt><img id='ClosesettingS_img' class='closesettings' title='Set' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/settings.png'?>"></dt>
				<dt><img id='ClosesettingsnO_img' class='closesettings' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/settings.png'?>"></dt>
				</dl>						 	
			</div>		
		</div>
		<?php
		//Include the part the closeproc_show
		require PROJECTDIR.'close/close/show.php';
		   ?>
	</div>	
</div>
<?php
//Include the part the close delete menu
require PROJECTDIR.'close/close/delete.php';
   ?>
	<?php
	//Include the part the close create menu
	require PROJECTDIR.'close/close/create.php';
	   ?>
<?php
//Include the part the close set menu
require PROJECTDIR.'close/close/set.php';
   ?>
	<div id='AreA_source_filebox'></div>
<div id='ClosebottoM'></div>
</body>		
<script src='<?php echo PROJECTJSOTHERSDIR."close/close/close.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/close/show.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show_public.js'; ?>' charset='utf-8'></script>
</html>