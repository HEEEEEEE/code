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
	$result1=sql_search("SELECT
			  id
			FROM
			  He_cinfo
			WHERE
			  cid='{$_GET['closeid']}'
			AND
		        hid='{$_COOKIE['userid']}'
		       ");	
// 	if($result && $result1){
		$htmlc=array();
		$htmlc['name']=htmlF($result['Close_name']);
		$htmlc['des']=htmlF($result['Close_des']);
		
		$htmlci=array();
		$htmlci['id']=htmlF($result1['id']);		
// 	}
// 	else{
// 		hisback();		
// 	}
	
}else{
	hisback();
}
?>
<!DOCTYPE html>
<html id='InfO_html'>
<head>
<meta charset='utf-8' />
<?php 
require PROJECTDIR.'include/part/title.php';
?>

<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/info.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'filebox/picture/show_info.css'; ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/album/pictu/show_info.css'; ?>' />
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'close/info/langu/menu/insert_source.css'?>"/>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'close/info/langu/menu/set_source.css'?>"/>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'close/info/langu/menu/insert_album.css'?>"/>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'close/info/langu/menu/set_album.css'?>"/>

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
	<dt><input type='hidden' id='HiddeN_projectciid' value='<?php echo $htmlci['id'];?>' /></dt>				
	<dt><input type='hidden' id='HiddeN_projectcid' value='<?php echo $_GET['closeid'];?>' /></dt>
	</dl>

	<dl>
	<dt><input type='hidden' id='HiddeN_projectcname' value='<?php echo $htmlc['name'];?>' /></dt>				
	</dl>	
	
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectdragw' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectdragh' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectframeid' value='' /></dt>				
	</dl>
	
	<dl>
	<dt><input type='hidden' id='HiddeN_projectitemsourceid' value='' /></dt>								
	<dt><input type='hidden' id='HiddeN_projectitemsourceurl' value='' /></dt>	
	<dt><input type='hidden' id='HiddeN_projectitemsourcedes' value='' /></dt>
	</dl>
	
	<dl>
	<dt><input type='hidden' id='HiddeN_projectalbumitemid' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectalbumexist' value='' /></dt>																	
	</dl>
			
	<dl>
	<dt><input type='hidden' id='HiddeN_projectfileboxinsertorset' value='' /></dt>							
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>	
	</dl>								
</div>
<div id='ToP'>
    <div id='ToplefT'><div></div></div>
    <div id='TopforE'><div></div></div>
    <div id='TopcontenT'>
	<div id='ToP_basic'>
	            <div id='ToP_basicdiv1'>	            
		<dl id='BasiC_face' >			
			<dt id='BasicF_dl1dt1'>
			<a href="<?php echo PROJECTOTHERSDIR.'home.php' ?>">
			<img id='BasicF_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/info/top/mark_user.png' ?>">
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
			<img id='BasicC_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/info/top/mark_close.png' ?>">
			</a>
			</dt>				
			<dt id='BasicC_dl1dt2'>
			<a>
			<span id='BasicC_name' title="<?php echo $htmlc['name'];?>"><?php echo $htmlc['name'];?></span>
			</a>
			</dt>
		</dl>
		</div>
		
		<div>
		<dl id='BasiC_info' >					
			<dt id='BasicI_dl1dt1' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/info/top/mark_info.png';?>);">			
			</dt>
			<dt id='BasicI_dl1dt2'>
			<span id='BasicI_name'>Info</span>
			</dt>				
		</dl>
		</div>
															
	</div>
								
	<div id='ToP_mark'>
		<dl id='ToP_markdl1'>
		<dt><a href="<?php echo ROOTOTHERSDIR1.'index.php' ?>"><img id='MarK_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/info/top/mark_website.png' ?>"></a></dt>
		</dl>	          
	</div>
      </div>
      <div id='ToprighT'><div></div></div>	
</div>
<div id='LefT'>
	<div id='InfO_cdes'>
		<div id='ClosedeS'>
			<dl id='ClosedeS_top'>
				<dt id='ClosedeS_topdt1'>
					<span>DescriptioN</span>
				</dt>
				<dt id='ClosedeS_topdt2'>
					<span>set by close:</span><span id='ClosedeS_topdt2span2' title='<?php echo $htmlc['name'];?>'><?php echo $htmlc['name'];?></span>				
				</dt>				
				
			</dl>
			<dl id='ClosedeS_content'>                                 
				<dt id='DeSdt'>
					<span id='DeS'><?php echo $htmlc['des'];?></span>
				</dt>				
			</dl>
		</div>				
	</div>
	<div id='InfO_cdesnoinfoback'>
		<div id='IcdesforE'>	
		            <div id='IcdesforE_div1'>
				<dl id='IcdesforE_div1_dl1'>
					<dt><span>this close need some</span></dt>
					<dt><span>descriptions</span></dt>
				</dl>
						
				<dl id='IcdesforE_div1_dl2'>
					<dt><span id='CdeS_set'>Write...</span></dt>
				</dl>
			</div>	
		</div>
		<div id='IcdesbacK'>		
		</div>			
	</div>		
</div>

          <div id='CenteR'></div>

<div id='RighT'>
	<?php require PROJECTDIR.'close/infi/langu/langu.php'; ?>
</div>

            <div id='BottoM'></div>
<div id='AreA_source_filebox'></div>
<div id='AreA_source_album'></div>
<div id='MenU_toolsourceinsert'>
	<?php require PROJECTDIR.'close/infi/langu/insert_source.php'; ?>
</div> 
<div id='MenU_toolsourceset'>
	<?php require PROJECTDIR.'close/infi/langu/set_source.php'; ?>
</div>
<div id='MenU_toolalbuminsert'>
	<?php require PROJECTDIR.'close/infi/langu/insert_album.php'; ?>
</div> 
<div id='MenU_toolalbumset'>
	<?php require PROJECTDIR.'close/infi/langu/set_album.php'; ?>
</div>          
<script src='<?php echo PROJECTJSOTHERSDIR.'close/info.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show_info.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/album/pictu/show_info.js'; ?>' charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'close/info/langu/insert_source.js';?>" charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'close/info/langu/set_source.js';?>" charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'close/info/langu/insert_album.js';?>" charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'close/info/langu/set_album.js';?>" charset='utf-8'></script>
</html>