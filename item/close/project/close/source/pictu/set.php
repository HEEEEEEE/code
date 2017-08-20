<?php 
//Include each
require substr(dirname(__FILE__),0,-18).'/include/each.php';
?>
<div id='SourcesMbacK'></div>
<div id='SourcesM'>
<div class='SourcesM'>
	<div id='SourcesM_top'>
	       <dl>                                 
		<dt id='SourcesM_toptitle'>
		<span>S</span><span>et</span>		 
		</dt>
		<dt id='SourcesM_topclosedt'>
		<img id='SourcesM_topclose' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/album/toolmenu/close.png'?>" />		
		</dt>	
	       </dl>	
	</div>
	
	<div id='SourcesM_content'>
		<form id='SourcesM_form' autocomplete="off">
		       <dl style='display:none;'>                                 
			<dt id='SourcesM_sid'>
			<input type='hidden' value='' id='ID' name='id' />
			</dt>	
		       </dl>		
		       <dl>                                 
			<dt id='SourcesM_sname'>
			<span>NamE</span>
			<input type='text' value='' id='NamE' name='name' maxlength='25' />
			</dt>	
		       </dl>
		       		       		       
		       <dl id='SourcesM_sdes'>                                 
			<dt>
			<span>DescriptioN</span>
			</dt>
			<dt id='DeSdt'>
			<textarea id='DeS' name='des'></textarea>
			</dt>				
		       </dl>		       		       		       		
		</form>
	</div>
	
	<div id='SourcesM_bom'>
	       <dl>                                 
		<dt>
		<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
		</dt>	
	       </dl>		       		
	</div>

	
	<div>
	       <dl>                                 
		<dt id='SourcesM_tip'>
		<span id='SourcesM_tipspan1'></span>		 
		</dt>
		<dt id='SourcesM_tip1'>
		<span id='SourcesM_tipspan2'></span>		 
		</dt>			
	       </dl>
	</div>
</div>	
</div>	