<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."filebox/picture/upload_client.css"?>' />
<div id='ClosecMbacK'></div>
<div id='ClosecM'>
	<div class='ClosecM'>
		<div id='ClosecM_top'>
		       <dl>                                 
			<dt id='ClosecM_toptitle'>
			<span>U</span><span>pload picture</span>		 
			</dt>
			<dt id='ClosecM_topclosedt'>
			<img id='ClosecM_topclose' src="<?php echo PROJECTDATAOTHERSDIR.'filebox/image/upmenu/close.png'?>" />		
			</dt>				
		       </dl>	
		</div>
		
		<div id='ClosecM_content'>
			<form id='ClosecM_form' name='close_create' action="<?php echo PROJECTOTHERSDIR.'filebox/picture/upload_server.php?action=close_create' ?>" method='post' target='iframe_up' enctype='multipart/form-data' autocomplete="off">			       
			       <dl>  		                                      
				<dt id='ClosecM_cup'>
				<input type='file' name='up' value='' id='UP' accept='image/png' />
				<iframe name="iframe_up" style='display:none;'></iframe>			
				</dt>			
				<dt id='ClosecM_cupcover'>
				<span>Start to select</span>
				</dt>
				<dt id='ClosecM_cupname'>
				<span id='ClosecM_cupnamespan1'><img id='ClosecM_cupnamespan1img' alt='' /></span>
				<img id='ClosecM_cupnameshow' alt='' />
				<span id='ClosecM_cupcancel' title='cancel'><img src="<?php echo PROJECTDATAOTHERSDIR.'filebox/image/upmenu/cancel.png'?>" /></span>
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
</div>	
<script src="<?php echo PROJECTJSOTHERSDIR."filebox/picture/upload_client.js"?>"></script>




