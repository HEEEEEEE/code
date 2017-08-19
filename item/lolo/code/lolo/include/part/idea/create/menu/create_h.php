<?php 
if($_GET['action']=='idea_createmenushow'){
	//header coustom
	header('Content-Type:text/html;charset=utf-8');
	//Include each
	require substr(dirname(__FILE__),0,-30).'/include/each.php';	
}
?>
<div id='MenU_ideacreate'>
	<div id='MenU_ideacreatetop'>
		
	</div>
		<div id='MenU_ideacreateright'>
			
		</div>
			<div id='MenU_ideacreatecenterback'></div>
			<div id='MenU_ideacreatecenter'>
				<div id='PalmleaveS'>
					<div id='PalmleaveS_petiole'>
						<div id='PalmleaveS_leaves'>
							<div class='palmleaf' id='PalmleaveS_leaf1'>
								<dl class='palmleaf-levell-1top' >
									<dt id='PalmleaveS_leaf1_enteralbetips' class='contentEditableTips'>
										<span>用文字露露</span>
									</dt>
									<dt id='PalmleaveS_leaf1_backtips'>
									</dt>
									<dt id='PalmleaveS_leaf1_enteralbecont'>
										<span id='PalmleaveS_leaf1_enteralbe' class='leaf1-enteralbe '>还可以输入:</span><span id='PalmleaveS_leaf1_enteralbenum' class='leaf1-enteralbe contentEditableNum'>125</span>
									</dt>									
								</dl>
								<dl class='palmleaf-levell-1' >
									<dt class='palmleaf-level2-1' >
										<span data-holder='leaf1-placeholder'  data-parents='PalmleaveS_leaf1' contentEditable='true' spellcheck='false' data-placeholder-default='用文字露露' id='MenU_ideawithlansbox' class='leaf1-placeholder palmleaf-level3-1 contentEditable'></span>
									</dt>
								</dl>
								<dl class='palmleaf-levell-1bottom' >
									<dt id='PalmleaveS_leaf1_ideawithlansdone'>
										<span id='IdeA_createmenudone'>露露</span>
									</dt>									
								</dl>								
							</div>
							<div class='palmleaf' id='PalmleaveS_leaf2'>
								<div id='PalmleaveS_uploaderror'>
								</div>
								<form id='ForM_uploadmenu' name='form-upload' enctype='multipart/form-data'>
									<div id='PalmleaveS_uploadbegin'>
										<dl class='palmleaf-levell-1' >
											<dt class='palmleaf-level2-1' >
												<span id='PalmleaveS_leaf2con' class='palmleaf-level3-1'><img id='PalmleaveS_leaf2conimg' class='palmleaf-level4-1' title='' src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/egami.png';?>" /></span>
												<span id='PalmleaveS_leaf2upload' class='palmleaf-level3-1'><input title='用照片露露' type='file' id='UploaD_imagemenu' class='palmleaf-level3-1' name='upload-image' value='' accept='image/png' /></span>
											</dt>
										</dl>
										<dl id='PalmleaveS_leaf2frame' >
										</dl>
									</div>
								</form>
								
								<div id='PalmleaveS_uploadbrowser'>
								
									<form id='ForM_uploadchangemenu' name='form-upload' enctype='multipart/form-data'>
									<div id='UploadbrowseR_show'>
										<div id='UploadbrowseR_show_con'>
											<img id='UploadbrowseR_show_con_img' alt='     ' src='' />
										</div>
																																	
									</div>
									</form>
									
									<div id='UploadbrowseR_done'>
										<div id='UploadbrowseR_donein'>
										<span id='UploadbrowseR_done_imgmenu'>露露</span>
										</div>
									</div>
								</div>																		
							</div>														
						</div>						
					</div>					
				</div>				
			</div>		
		<div id='MenU_ideacreatebottom'>
			
		</div>
	<div id='MenU_ideacreateleft'>
		
	</div>				
</div>					