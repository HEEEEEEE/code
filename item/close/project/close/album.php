<?php
//Include each
require substr(dirname(__FILE__),0,-6).'/include/each.php';
//Check the login state
isloginPT();
//Check the close exist
if(isset($_GET['closeid'])){
	$result=sql_search("
	          	        SELECT 
			Close_name,Close_des
		          FROM
			He_close
		         WHERE
			Close_id='{$_GET['closeid']}'
		           AND
			Close_hid='{$_COOKIE['userid']}'
			
	                  ");
	if($result){
		$html=array();
		$html['cname']=htmlF($result['Close_name']);
		$html['cdes']=htmlF($result['Close_des']);
	}else{
		hisback();		
	}
	
}else{
	hisback();
}
?>
<!DOCTYPE html>
<html id='AlbuM_html'>
<head>
<meta charset='utf-8' />
<?php 
require PROJECTDIR.'include/part/title.php';
?>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/album.css' ?>' />
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
	<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR1;?>' /></dt>			
	<dt><input type='hidden' id='HiddeN_projectdir' value='<?php echo PROJECTOTHERSDIR;?>' /></dt>
	</dl>
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectitemid' value='' /></dt>		
	</dl>	
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectcid' value='<?php echo $_GET['closeid'];?>' /></dt>
	</dl>
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>	
	</dl>		
</div>
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
			<a>
			<img id='BasicC_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/top/close_mark.png' ?>">
			</a>
			</dt>				
			<dt id='BasicC_dl1dt2'>
			<a>
			<span id='BasicC_name' title="<?php echo $html['cname'];?>"><?php echo $html['cname'];?></span>
			</a>
			</dt>
		</dl>
		</div>
		
		<div>
		<dl id='BasiC_album' >			
			<dt id='BasicA_dl1dt1' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/top/album_mark/album.png';?>);">
			<img style='display:none;' id='BasicA_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/top/album_mark/picture.png'; ?>">
			</dt>
			<dt id='BasicA_dl1dt2'>
			<span id='BasicA_name'>ALBUM</span>
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
<div id='CenteR'>
	<div id='AlbuM_frame'>
		<div id='AlbuM_filemarkframe'>
			<dl id='AlbuM_filemark1' class='AlbuM_filemark'>
				<dt id='AlbuM_filemark1_l1' class='AlbuM_filemark_l1'>
				<span>picture</span>
				</dt>
				<dt id='AlbuM_filemark1_l2' data-type='1' data-parentid='AlbuM_filemark1' class='AlbuM_filemark_l2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/album/album/album.png';?>);">
				<img src='<?php echo PROJECTDATAOTHERSDIR.'close/image/album/album/mark/picture.png';?>' alt='' />
				</dt>				
			</dl>																
		</div>						
	</div>
	
	<div id='AlbuM_cdes'>
		<div id='ClosedeS'>
			<dl id='ClosedeS_top'>
				<dt>
					<span>DescriptioN</span>
					<span>set by close:<?php echo $html['cname'];?></span>
				</dt>
				
			</dl>
			<dl id='ClosedeS_content'>                                 
				<dt id='DeSdt'>
					<textarea id='DeS' name='des' readonly="readonly"><?php echo $html['cdes'];?></textarea>
				</dt>				
			</dl>
		</div>				
	</div>			

	<div id='AlbuM_con'>
		<?php require PROJECTDIR.'close/albui/pictu/show.php';?>								
	</div>
</div>
	<div id='AreA_source_filebox'></div>
</body>		
<script src='<?php echo PROJECTJSOTHERSDIR."close/album.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show_public.js'; ?>' charset='utf-8'></script>
</html>