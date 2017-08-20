<?php
//Include each
require substr(dirname(__FILE__),0,-19).'/include/each.php';
//Check the login state
isloginPT();
//Check the album exist
if(isset($_GET['closeid']) && isset($_GET['calbumid'])){
	$result=sql_search("
	          	        SELECT 
			Close_name
		           FROM
			He_close
		         WHERE
		           Close_id='{$_GET['closeid']}'
		          AND
		        Close_hid='{$_COOKIE['userid']}'
		      ");
	if($result){
		$htmlc=array();
		$htmlc['cname']=htmlF($result['Close_name']);
		$result=sql_search("
			        SELECT
				Calbum_name,Calbum_des
			          FROM
				He_calbum
			          WHERE
				Calbum_id='{$_GET['calbumid']}'
			            AND
			             Calbum_type=1				
			            AND
			          Calbum_cid='{$_GET['closeid']}'
			          AND			          
			        Calbum_hid='{$_COOKIE['userid']}'
			      ");
		if($result){
			$htmlca=array();
			$htmlca['caname']=htmlF($result['Calbum_name']);
			$htmlca['cades']=htmlF($result['Calbum_des']);			
		}
		else{
			hisback();
		}						
	}else{
		hisback();		
	}
	
}else{
	hisback();
}
/*create the album sort*/
$result_sort=sql_search("SELECT
		     sort
		   FROM
		     He_sortsource1
		WHERE
		      aid='{$_GET['calbumid']}'
		    AND
		   cid='{$_GET['closeid']}'
		  AND
		hid='{$_COOKIE['userid']}'
		");
if(!($result_sort)){
	$result_sort=sql("INSERT INTO
			He_sortsource1(
				      sort,
				         aid,
					cid,
					  hid
				   )
				 VALUES
				   (
				'ORDER BY addtime DESC',
				'{$_GET['calbumid']}',
					'{$_GET['closeid']}',
						'{$_COOKIE['userid']}'
				   )
		    ");
}
//echo the item's num
	$result=sql_search("SELECT
			COUNT(id)
			AS
			num
		        FROM
			He_casource1
		        WHERE
			aid='{$_GET['calbumid']}'
			AND
			cid='{$_GET['closeid']}'
			AND
			hid='{$_COOKIE['userid']}'		
		      ");
	$htmlsnum=array();
	$htmlsnum['source_num']=htmlF($result['num']);
//echo the first item to E
// 	$result=sql_search("SELECT
// 			url
// 		        FROM
// 		        He_casource1
// 		        WHERE
// 			aid='{$_GET['calbumid']}'
// 		          AND
// 		        cid='{$_GET['closeid']}'
// 		        AND
// 		        hid='{$_COOKIE['userid']}'
// 		       ");
// 	if($result){
// 		$htmlsf=array();
// 		$htmlsf['url']=htmlF($result['url']);
// 		$firstS=ROOTOTHERSDIR1.$htmlsf['url'];		
// 	}
// 	else{
// 		$firstS='';		
// 	}		
?>
<!DOCTYPE html>
<html id='SourcE_html'>
<head>
<meta charset='utf-8' />
<?php 
require PROJECTDIR.'include/part/title.php';
?>
<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/pictu.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/show_V.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/show_E.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/show_F.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'close/source/pictu/show.css' ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."close/source/pictu/set.css"?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."close/source/pictu/delete.css"?>' />
<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR.'filebox/picture/show_source.css'; ?>' />

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
	<dt><input type='hidden' id='HiddeN_projectcid' value='<?php echo $_GET['closeid'];?>' /></dt>			
	<dt><input type='hidden' id='HiddeN_projectcaid' value='<?php echo $_GET['calbumid'];?>' /></dt>						
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>
	<dt><input type='hidden' id='HiddeN_projectitemordernum' value='0' /></dt>		
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
			<img id='BasicC_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/source/close_mark.png' ?>">
			</a>
			</dt>				
			<dt id='BasicC_dl1dt2'>
			<a>
			<span id='BasicC_name' title="<?php echo $htmlc['cname'];?>"><?php echo $htmlc['cname'];?></span>
			</a>
			</dt>
		</dl>
		</div>
		
		<div>
		<dl id='BasiC_album' >					
			<dt id='BasicA_dl1dt1'>
			<a href="<?php echo PROJECTOTHERSDIR.'close/album.php?closeid='.$_GET['closeid'].'&bcatype=1'.'&bcan='.$htmlca['caname']; ?>">
			<img id='BasicA_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/album.png' ?>">	
			</a>			
			</dt>
			<dt id='BasicA_dl1dt2'>
			<a href="<?php echo PROJECTOTHERSDIR.'close/album.php?closeid='.$_GET['closeid'].'&bcatype=1'.'&bcan='.$htmlca['caname']; ?>">
			<span id='BasicA_name' title="<?php echo $htmlca['caname'];?>"><?php echo $htmlca['caname'];?></span>
			</a>
			</dt>				
		</dl>
		</div>
		
		<div>
		<dl id='BasiC_source' >					
			<dt id='BasicS_dl1dt1' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/source_mark.png';?>);">			
			</dt>
			<dt id='BasicS_dl1dt2'>
			<span id='BasicS_name'>Picture</span>
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
      <div id='ToprighT'><div></div></div>	
</div>
	<?php 
// 	require PROJECTDIR.'home/timetodelete_website/timetodelete.php';
	?>
<div id='LefT'>
	<div id='SourcE_ades'>
		<div id='AlbumdeS'>
			<dl id='AlbumdeS_top'>
				<dt id='AlbumdeS_topdt1'>
					<span>DescriptioN</span>
				</dt>
				<dt id='AlbumdeS_topdt2'>
					<span>set by album:</span><span title='<?php echo $htmlca['caname'];?>'><?php echo $htmlca['caname'];?></span>				
				</dt>				
				
			</dl>
			<dl id='AlbumdeS_content'>                                 
				<dt id='DeSdt'>
					<span id='DeS'><?php echo $htmlca['cades'];?></span>
				</dt>				
			</dl>
		</div>				
	</div>
	<div id='SourcE_adesnosourceback'>
		<div id='SadesforE'>	
		            <div id='SadesforE_div1'>
				<dl id='SadesforE_div1_dl1'>
					<dt><span>this album need some</span></dt>
					<dt><span>descriptions</span></dt>
				</dl>
						
				<dl id='SadesforE_div1_dl2'>
					<dt><span id='AdeS_set'>Write...</span></dt>
				</dl>
			</div>	
		</div>
		<div id='SadesbacK'>		
		</div>			
	</div>	
</div>

<div id='CenteR'>

</div>

<div id='RighT' class='right'>
	<div id='SourcE_V' class='source_v'>
		<div id='SourcE_Vtop'>
			<div id='SourcE_Vmaintool'>
				<dl id='SourcE_Vmaintooldl1'>
					<dt id='SourcE_delete' class='SourcE_delete'>
					<span id='DeletE' class='DeletE' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/delete.png';?>);">Delete</span>
					<span id='DeletenO' class='DeletenO' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/delete.png';?>);">Delete</span>
					</dt>				
					<dt id='SourcE_add' class='SourcE_add'>
					<a id='SourcE_adda' class='SourcE_adda' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/add.png';?>);">
					<span id='AdD' class='AdD' >Add</span>
					</a>
					<a id='SourcE_addano' class='SourcE_addano' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/add.png';?>);">
					<span id='AddnO' class='AddnO' >Add</span>
					</a>
					</dt>
					<dt id='SourcE_set' class='SourceE_set'>
					<span id='SeT' class='SeT' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/settings.png';?>);">Set</span>
					<span id='SetnO' class='SetnO' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/settings.png';?>);">Set</span>
					</dt>
				</dl>			
			</div>
			<div id='SourcE_Vsearch'>
			            <div id='SourceiteM1'>
					<dl id="IteM_num">
						<dt id="IteM_numshowdt">item:<span id="IteM_numshow"><?php echo $htmlsnum['source_num'];?></span></dt><dt id="ItemselecT_numshowdt">;selected:<span id="ItemselecT_numshow"></span></dt>
					</dl>
				</div>
				<div id='SourceiteM2'>		            
					<dl id='ItemsearcH'>
					<dt><img id='ItemsearcH_img' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/source/search_start.png'?>"></dt>
					</dl>
					<form id='ItemsearcH_form' autocomplete="off">			
					<dl id='ItemsearcH_menu'>			
					<dt><img id='ItemsearcH_back' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/source/search_back.png'?>"></dt>
					<dt><input type='text' id='ItemsearcH_input' value='' maxlength='25' /></dt>
					<dt><img id='ItemsearcH_search' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/source/search_end.png'?>"></dt>
					</dl>
					</form>
			            </div>			
			</div>														
		</div>
		<div id='SourcE_Vcenter'>
			<div id='SourcE_Vsourcesshow' style='-moz-user-select:none;'>
			</div>												
		</div>
	
		<div id='SourcE_Vleft' class='source_vleft'>
			<div id='SourcE_Votherstool'>
				<dl id='SourcE_sort'>
					<dt><span id='SorT'>sort</span></dt>					
				</dl>
				
				<dl id='SourcE_select'>
					<dt title='select all' id='SelecT' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/select.png';?>);">
					</dt>
					<dt title='unselect all' id='SelectnO' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/selectNO.png';?>);">
					</dt>					
				</dl>
				<dl id='SourcE_see'>
					<dt title='show the name' id='SeE' class='see' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/see.png';?>);">
					</dt>
					<dt title='hide the name' id='SeenO' class='seeno' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/seeNO.png';?>);">
					</dt>					
				</dl>
				<dl id='SourcE_backchange'>
					<dt title='change the back' id='BacK' class='back' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/backchange.png';?>);">
					</dt>					
				</dl>
				<dl id='SourcE_displaymode'>
					<dt title='Watch Mode' id='ModE1' class='mode1' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/watchmode.png';?>);">
					</dt>				
					<dt title='Edit Mode' id='ModE2' class='mode2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/editmode.png';?>);">
					</dt>					
				</dl>																				
			</div>
			<div id='SourcE_Votherstool_menu'>
					<dl id='SourcE_sortmenu'>
						<dt><span id='SorT_datedea' class='date0'>sort by date[default</span></dt>
						<dt><span id='SorT_dateopp' class='date1'>sort by date[opposite</span></dt>						
					</dl>							
			</div>													
		</div>
	
		<div id='SourcE_Vbottom'>
			<div id='SourcE_Vsearchdatashowframe' class='source_vsearchdatashowframe'>
				<div id='IteM_search'>
					<dl id="ItemsearcH_num">
					<dt id="ItemsearcH_numitemdt">item:<span id="ItemsearcH_numitem"><?php echo $htmlsnum['source_num'];?></span></dt>
					<dt id="ItemsearcH_numshowdt">;searched:<span id="ItemsearcH_numshow"><?php echo $htmlsnum['source_num'];?></span></dt>
					<dt id="ItemsearcH_numselectdt">;selected:<span id="ItemsearcH_numselect"></span></dt>
					</dl>
				</div>				
			</div>												
		</div>																			
	</div>
	
	
	
	<div id='SourcE_E'>
		<div id='SourcE_Emoreinfo' class='source_emoreinfo'>
		             <dl>
			             <dt>
			             	<span id='MoreinfO' class='moreinfo' title='more infos' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/moreinfo.png'?>);'></span>
			             	<span id='MoreinfO_full' class='moreinfo' title='more infos' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/moreinfo.png'?>);'></span>
			             </dt>
		             </dl>				
		</div>																			
		<div id='SourcE_Etop' class='source_etop'>
			<div id='SourcE_Etopf'></div>			
			<div id='SourcE_Ename'>
			             <dl>
			             <dt>
			             <span id='EnamE' class='ename' title=''>
			             </span>
			             </dt>
			             </dl>				
			</div>															
		</div>
			
		<div id='SourcE_Ec'>	
			<div id='SourcE_Ecenter'>
				<div id='SourcE_Esourcesshow'>
					<dl>
					<dt>
					<span>
					<img id='SourceE' class='sourcee' src="<?php //echo $firstS; ?>" alt='     ' />
					</span>
					</dt>
					</dl>
				</div>													
			</div>
		</div>
		
		<div id='SourcE_Ef' class='source_ef'>		
		
			<div id='SourcE_Eleft' class='source_eleft'>
				<div id='SourcE_Eupone'>
				             <dl>
				             <dt>
				             <span id='UponE' title='UponE' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/upone.png'?>);'>
				             </span>
				             </dt>
				             </dl>				
				</div>
				<div id='SourcE_Euponeothers'>
				             <dl>
				             <dt>
				             <span id='UponE_tip'>It's the first picture!</span>
				             </dt>
				             </dl>				
				</div>																	
			</div>
			<div id='SourcE_Eright' class='source_eright'>
				<div id='SourcE_Emaintool'>
				             <dl id='SourcE_Enextone'>
				             <dt>
				             <span id='NextonE' title='NextonE' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/nextone.png'?>);'>
				             </span>
				             </dt>
				             </dl>
				             
					 <dl id='SourcE_Elexpand' class='source_elexpand'>
				             <dt>
				             <span id='LexpanD' title='Expand the list' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/Lexpand.png'?>);'></span>
				             <span id='LshrinK' title='Shrink the list' style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/Lshrink.png'?>);'></span>
				             </dt>
				             </dl>			             				             				
				</div>				
				<div id='SourcE_Enextoneothers'>
				             <dl>
				             <dt>
				             <span id='NextonE_tip'>It's the last picture!</span>
				             </dt>
				             </dl>				
				</div>																
			</div>		
			<div id='SourcE_Ebottom' class='source_ebottom'>
				<div id='E_fullorexitscreen'>
				             <dl id='FullorexitscreeN' class='fullorexitscreen'>
				             <dt>
				             <span id='FullscreeN' class='screen' title='FullscreeN'  style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/full.png'?>);'>
				             </span>
				             </dt>
				             <dt>
				             <span id='ExitscreeN' class='screen' title='ExitscreeN'  style='background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/exit.png'?>);'>
				             </span>				             
				             </dt>
				             </dl>
				             
				             <dl id='HideareaforesC' style='display:none'>
				             </dl>
				</div>  
				<div id='E_centertool'>           
					<dl id='E_see'>
						<dt title='show the name' id='EseE' class='see' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/see.png';?>);">
						</dt>
						<dt title='hide the name' id='EseenO' class='seeno' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/seeNO.png';?>);">
						</dt>					
					</dl>
				</div>				             				             																	
			</div>
		</div>															
	</div>
	
       <!-- <div id='SourcE_F'></div> -->
	
	<div id='SourcE_Vnosourceback'>
		<div id='SforE'>	
		            <div id='SforE_div1'>
				<dl id='SforE_div1_dl1'>
				<dt><span>Hurry up</span></dt>
				</dl>
						
				<dl id='SforE_div1_dl2'>
				<dt><span>Just&nbsp;</span></dt>
				<dt id='SforE_add'>A<span id='SforE_addspan'>dd&nbsp;</span></dt>
				<dt><span>some pictures into me</span></dt>
				</dl>
			</div>	
		</div>	
	</div>
	<div id='SourcE_Enosourceback'>	
		<div id='SeforE'>
			<dl >					
			    <dt style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/Eback.png';?>);">
			    	<span id='SeforE_add' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'close/image/source/pictu/Ebackp.png';?>);"></span>
			    </dt>				
			</dl>				
		</div>	
	</div>	
</div>

<div id='OtherS'>
	<div id='LefT_sourcemoreinfo'></div>
	<div id='SourcE_Vmaintoolmenu'>
		<div id='SourcE_Vmaintoolmenu_delete'></div>
		<div id='SourcE_Vmaintoolmenu_add'></div>
		<div id='SourcE_Vmaintoolmenu_settings'></div>					
	</div>
</div>
<div id='AreA_source_filebox'></div>
</body>

<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/pictu.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/add.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/show_V.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/show_E.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/show_F.js'; ?>' charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/show.js'; ?>' charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR."close/source/pictu/set.js"?>" charset='utf-8'></script>
<script src='<?php echo PROJECTJSOTHERSDIR.'close/source/pictu/showmoreinfo.js'; ?>' charset='utf-8'></script>	
<script src="<?php echo PROJECTJSOTHERSDIR."close/source/pictu/delete.js"?>" charset='utf-8'></script>				
<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show_source.js'; ?>' charset='utf-8'></script>
</html>