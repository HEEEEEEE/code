<?php 
//Include each
require dirname(__FILE__).'/include/each.php';
//Check the login state
isloginPT();
/*echo the close's number create by own*/
$html=array();
$search=sql_search("SELECT
		  COUNT(Close_id)
		AS
		  num
	          FROM
		  He_close
	         WHERE
		  Close_hid='{$_COOKIE['userid']}'
	       ");
$html['close_num']=htmlF($search['num']);
?>
<!DOCTYPE HTML>
<html id='PtprocesS_html'>
<head>
	<meta charset='utf-8' />
	<?php 
	require PROJECTDIR.'include/part/title.php';
	?> 
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'public.css' ?>" />
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'home/home.css' ?>" />
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'home/me.css' ?>" />
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'include/top.css' ?>" />	
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'home/closeown_create.css' ?>" />	
	<link type='text/css' rel='stylesheet' href="<?php echo PROJECTCSSOTHERSDIR.'home/closeown_show.css' ?>" />
	<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."close/close/delete.css"?>' />			
	
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
	<dt><input type='hidden' id='HiddeN_projectitemnum' value='<?php echo $html['close_num'];?>' /></dt>
	<dt><input type='hidden' id='HiddeN_projectaddorset' value='' /></dt>		
	</dl>
	
	<dl>						
	<dt><input type='hidden' id='HiddeN_projectfileboxitemid' value='' /></dt>	
	</dl>	
</div>	

	<div id='ClosedMbacK'></div>
	<div id='ClosedM'>
		<div class='ClosedM'>
			<div id='ClosedM_top'>
			       <dl>                                 
				<dt id='ClosedM_toptitle'>
				<span>D</span><span>elete</span>		 
				</dt>
				<dt id='ClosedM_topclosedt'>
				<img id='ClosedM_topclose' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/close.png'?>" />		
				</dt>	
			       </dl>	
			</div>
			
			<div id='ClosedM_content'>
				<form id='ClosedM_form' name='close_delete' autocomplete="off">
				       <dl style='display:none;'>                                 
					<dt id='ClosedM_did'>
					<input type='hidden' value='' id='ID' name='id' />
					</dt>	
				       </dl>		
				       <dl>                                 
					<dt id='ClosedM_dname'>
					<span>NamE</span>
					<input type='text' value='' id='NamE' name='name' />
					</dt>
				       </dl>						       		       		       		
				</form>
			</div>
			
			<div id='ClosedM_bom'>
			       <dl>                                 
				<dt>
				<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
				</dt>	
			       </dl>		       		
			</div>
		</div>	
	</div>	

	<div id='MenU_ideatool'>
		<div id='MenU_ideatoolmore'>
			<dl class='menu_ideatoolmore-kind'>		
			   <dt class='menu_ideatoolmore-kind-1'><span id='MenU_ideatoolmore_delete' class='menu_ideatoolmore-kind-1-1'>DeletE</span></dt>		   			   
			</dl>
					
		</div>		
	</div>
	<div id='AreA_source_filebox'></div>	
	
	<div id='PtprocesstoP'>		
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
					<dt><a><span id='BasicmenU_centerbasic4'>Sign out</span></a></dt>
					<dt><a><span id='BasicmenU_centerbasic5'>WORLD</span></a></dt>
					</dl>
				</div>								
			</div>		
				
			<div id='ToP_mark'>
				<dl id='ToP_markdl1'>
				<dt><a ><img id='MarK_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/website_mark/orange/mark.png' ?>"></a></dt>
				</dl>	          
			</div>
					
			<div id='ToP_search'>
				<dl>
				<dt><input id='SearcH_input' type='text' value='Search in OCLOCLO' /></dt>
				<dt><img id='SearcH_img' src="<?php echo PROJECTDATAOTHERSDIR.'include/image/top/search_mark/white/mark.png' ?>"></dt>
				</dl>		
			</div>
		</div>
	</div>
	
	<div id='BodY_scroll'>
		<div id='PtprocesscenteR'>
			<div id='CenteR_content'>
				<div id='CenteR_projectstart'>
					<div id='ProjectstarT_home'>
						<div id='ProjectstarT_homeback'>
						</div>
						<div id='ProjectstarT_homehead'>
							<dl id='HomeheaD_dl1'>
								<dt id='HomeheaD_dl1dt1' style="background-image:url('');"></dt>
								<dt id='HomeheaD_dl1dt2'>
								<a>
								<span id='HomeheaD_username' title="<?php echo $_COOKIE['username'];?>"><?php echo $_COOKIE['username'];?></span>
								</a>				
								</dt>																	
							</dl>
							<div id='HomeheaD_dl2'>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt1'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt2'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt3'>
									<div class='homehead-avatarfra1' id='HomeheaD_dl2dt31'>
									<form id='ForM_uploadavatar'>
										<a>
										<img id='HomeheaD_avataradd' title="to have avatar" alt='' src="<?php echo PROJECTDATAOTHERSDIR.'image/home/center/avatar_add.png'; ?>" />
										</a>
									</form>
									</div>
									
								</div>								
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt4'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt5'></div>																								
							</div>						
						</div>									
						<div id='ProjectstarT_homestart'>
							<dl id='HomestarT_dl1' >
							</dl>
							<dl id='HomestarT_dl2' >	
								<dt id='HomestarT_dl2dt1'>
									<a>
									<span id='HomestarT_closeall'>close</span>
									<span id='HomestarT_closeallnum' title='<?php echo $html['close_num']; ?>'><?php echo $html['close_num']; ?></span>
									</a>											
								</dt>																	
							</dl>
						</div>			
					</div>
					<div id='ProjectstarT_project'>
						<div id='ProjectstarT_projectframe'></div>
						<div id='ProjectstarT_projectcontent'>
							<dl id='HomE_projectmark1' class='HomE_projectmark'>
								<dt id='HomE_projectmark1_l1' class='HomE_projectmark_l1'>
									<a href='<?php echo PROJECTOTHERSDIR.'filebox.php' ?>'>
										<span class='projectmark-str'>FILEBOX</span>
											<span class='projectmark-strfra1'></span>
									</a>
								</dt>
								<dt id='HomE_projectmark1_l2' class='HomE_projectmark_l2' style="background-image:url(<?php echo PROJECTDATAOTHERSDIR.'image/home/center/box.png';?>);">
									<a href='<?php echo PROJECTOTHERSDIR.'filebox.php' ?>'></a>
								</dt>
								<dt id='HomE_projectmark1_l3' class='HomE_projectmark_l3'></dt>				
							</dl>
						</div>		
					</div>			
				</div>
				
				<div id='PtprocesscenteR_closeown'>
					<div id="PT_closeadd">
						<div id='ClosecM_top'>
							<div id='ProjectclosE_createguide'>
								<dl id='CreateguidE_dl1'>
									<dt>
									<span id='CreateguidE_lan1'>Begin&nbsp;</span>
									</dt>
									<dt>
									<span id='CreateguidE_lan2'>Project Work Explore...</span>
									</dt>
									<dt>
									<span id='CreateguidE_lan3'>&nbsp;with a ClosE</span>
									</dt>
								</dl>
							</div>	
						</div>
						
						<div id='ClosecM_content'>
							<form id='ClosecM_form' name='close_create' autocomplete="off">
							       <dl>                                 
								<dt id='ClosecM_cname'>
								<span>NamE</span>
								<input type='text' name='name' value='' id='NamE' maxlength='25' />
								</dt>	
							       </dl>
							       
							       <dl id='ClosecM_cfaceadd'>  		                                      
								<dt id='ClosecM_cup'>
								<input type='text' name='up' value='' id='UP' />			
								</dt>			
								<dt id='ClosecM_cupcover'><span>FacE</span><span>add</span></dt>																
							       </dl>
							       <dl id='ClosecM_cface'>  		                                      			
								<dt>
								<span>FacE</span>
								</dt>
								
								<dt id='ClosecM_cfaceimgdt'>
								<span><img id='ClosecM_cfaceimg' src="" /></span>
								<span></span>			
								</dt>
								
								<dt>
								<span id='ClosecM_cfacechange'>ChangE</span>
								</dt>																						
							       </dl>		       		       		       		
							</form>
						</div>
						
						<div id='ClosecM_bom'>
						       <dl>                                 
							<dt>
							<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
							</dt>	
						       </dl>		       		
						</div>
					
						
						<div>
						       <dl>                                 
							<dt id='ClosecM_tip'>
							<span id='ClosecM_tipspan1'></span>		 
							</dt>
							<dt id='ClosecM_tip1'>
							<span id='ClosecM_tipspan2'></span>		 
							</dt>			
						       </dl>
						</div>					
					</div>
					
					<div id='PT_closeshow'>
						<div id='CloseprocoutsidE'>
							<div id="CloseprocinsidE" >
							</div>		
						</div>
							
					</div>		
									
				</div>			
			</div>
	
		</div>	
	</div>	

	<script charset='utf-8'>
						var w =screen.width;
				          var ccontentw= w - 520;
			var icontentprojectw=ccontentw-380;
		var leftw=(w-ccontentw)/2;
		//center
		$('#CenteR_content').width(ccontentw);
			$('#PtprocesscenteR_closeown').width(icontentprojectw);						
	</script>	
	
	
<script src="<?php echo PROJECTJSOTHERSDIR.'home/home.js' ?>"></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'include/top.js' ?>" charset='utf-8'></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'home/closeown_create.js' ?>"></script>
<script src="<?php echo PROJECTJSOTHERSDIR.'home/closeown_show.js' ?>"></script>
<script src="<?php echo PROJECTJSOTHERSDIR."close/close/delete.js"?>"></script>

<script src='<?php echo PROJECTJSOTHERSDIR.'filebox/picture/show_public.js'; ?>' charset='utf-8'></script>
</body>
				
</html>