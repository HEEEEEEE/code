<?php
//Include each
require dirname(__FILE__).'/include/each.php';
//Check the login state
isloginPT();
/*echo the source's number*/
$html=array();
$search=sql_search("SELECT
		 COUNT(Fileboxpic_id)
		AS
		 num
		FROM
		 He_fileboxpic
		WHERE
		 Fileboxpic_hid='{$_COOKIE['userid']}'
	       ");
$html['source_num']=htmlF($search['num']);
?>
<!DOCTYPE html>
<html id='FileboX_html'>
<head>
<meta charset='utf-8' />
<?php 
require PROJECTDIR.'include/part/title.php';
?>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'filebox/filebox.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'filebox/picture/show.css'; ?>' />
<script src='<?php echo PROJECTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>
</head>
<body>
<div style='display:none;'><?php //HiddeN for speacil ?>
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectdir' value='<?php echo PROJECTOTHERSDIR;?>' /></dt>
	</dl>
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectitemid' value='' /></dt>
	</dl>
	<dl>			
	<dt><input type='hidden' id='HiddeN_projectdatanum' value='' /></dt>
	</dl>		
</div>
<div id='FileboxtoP'>
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
			
			<div>
			<dl id='BasiC_filebox' >			
				<dt id='BasicfI_dl1dt1' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/top/box_mark/box.png';?>);">
				<img style='display:none;' id='BasicfI_img' src="<?php echo PROJECTDATAOTHERSDIR.'filebox/image/top/box_mark/picture.png'; ?>">
				</dt>
				<dt id='BasicfI_dl1dt2'>
				<span id='BasicfI_name'>FILEBOX</span>
				</dt>				
			</dl>
			</div>											
		</div>							
		<div id='ToP_mark'>
			<dl id='ToP_markdl1'>
			<dt><a><img id='MarK_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/website_mark/white/mark.png' ?>"></a></dt>
			</dl>	          
		</div>
	</div>
	<?php 
// 	require PROJECTDIR.'home/timetodelete_website/timetodelete.php';
	?>		
</div>
<div id='FileboxcenteR'>
	<div id='FileboxcenteR_projecttool'>	
		<div id='FileboxcenteR_projecttool_t'>	
			<div id='FileboxcenteR_projecttool_tmain'>	
				<dl>
				<dt id='FileboX_delete'>
				<span id='DeletE'  style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/tool/delete.png';?>);">Delete</span>
				<span id='DeletenO'  style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/tool/delete.png';?>);">Delete</span>
				</dt>				
				<dt id='FileboX_upload' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/tool/add.png';?>);">
				<span id='UploaD'>Upload</span>
				</dt>
				<dt id='FileboX_select'>
				<span id='SelecT'  style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/tool/select.png';?>);">Select all</span>
				<span id='SelectnO'  style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/tool/selectNO.png';?>);">Unselect all</span>
				</dt>
				</dl>					
			</div>							
		</div>				
	</div>
	<div id='FileboxcenteR_projectshow'>
		<div id='FileboxcenteR_projectshow_start'>
			<div id='FileboX_filemarkframe'>
				<dl id='FileboX_filemark1' class='FileboX_filemark'>
					<dt id='FileboX_filemark1_l1' class='FileboX_filemark_l1'>
					<span>picture</span>
					</dt>
					<dt id='FileboX_filemark1_l2' data-parentid='FileboX_filemark1' class='FileboX_filemark_l2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'filebox/image/box/box.png';?>);">
					<img src='<?php echo PROJECTDATAOTHERSDIR.'filebox/image/box/mark/picture.png';?>' alt='' />
					</dt>				
				</dl>																
			</div>						
		</div>		
		<div id='FileboxcenteR_projectshow_e'>
			<div id='ProjectshowE_top'>
				<div id='FileboX_itemsnum'>
					<dl id="IteM_num">
					<dt id="IteM_numshowdt">item:<span id="IteM_numshow"><?php echo $html['source_num'];?></span></dt><dt id="ItemselecT_numshowdt">;selected:<span id="ItemselecT_numshow"></span></dt>
					</dl>
				</div>
			</div>
			<div id='ProjectshowE_center'>
				<div id='FileboX_source_div' style="-moz-user-select:none;">				
				</div>
			</div>															
		</div>								
	</div>
</div>
<?php
//Include closeproc
require PROJECTDIR.'/filebox/picture/upload_client.php';
?>
<?php
//Include closeproc
require PROJECTDIR.'/filebox/picture/delete_client.php';
?>
</body>		
<script src='<?php echo PROJECTJSOTHERSDIR."filebox/filebox.js"?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show.js'; ?>' charset='utf-8'></script>
</html>




