<link type='text/css' rel='stylesheet' href='<?php echo PROJECTCSSOTHERSDIR."close/close/set.css"?>' />
<div id='ClosesMbacK'></div>



<div id='ClosesM'>
<div class='ClosesM'>
	<div id='ClosesM_top'>
	       <dl>                                 
		<dt id='ClosesM_toptitle'>
		<span>S</span><span>et</span>		 
		</dt>
		<dt id='ClosesM_topclosedt'>
		<img id='ClosesM_topclose' src="<?php echo PROJECTDATAOTHERSDIR.'close/image/close/close.png'?>" />		
		</dt>	
	       </dl>	
	</div>
	
	<div id='ClosesM_content'>
		<form id='ClosesM_form' name='close_set' autocomplete="off">
		       <dl style='display:none;'>                                 
			<dt id='ClosesM_sid'>
			<input type='hidden' value='' id='ID' name='id' />
			</dt>	
		       </dl>		
		       <dl>                                 
			<dt id='ClosesM_sname'>
			<span>NamE</span>
			<input type='text' value='' id='NamE' name='name' maxlength='25' />
			</dt>	
		       </dl>
		       <dl id='ClosesM_sface'>  		                                      			
			<dt>
			<span>FacE</span>
			</dt>
			
			<dt id='ClosesM_sfaceimgdt'>
			<span><img id='ClosesM_sfaceimg' src="" /></span>
			<span></span>			
			</dt>
			
			<dt>
			<span id='ClosesM_sfacechange'>ChangE</span>
			</dt>																						
		       </dl>		       		       
		       <dl id='ClosesM_sdes'>                                 
			<dt>
			<span>DescriptioN</span>
			</dt>
			<dt id='DeSdt'>
			<textarea id='DeS' name='des'></textarea>
			</dt>				
		       </dl>		       		       		       		
		</form>
	</div>
	
	<div id='ClosesM_bom'>
	       <dl>                                 
		<dt>
		<input name='SubmiT' type='button' value='DONE' id='SubmiT'/>
		</dt>	
	       </dl>		       		
	</div>

	
	<div>
	       <dl>                                 
		<dt id='ClosesM_tip'>
		<span id='ClosesM_tipspan1'></span>		 
		</dt>
		<dt id='ClosesM_tip1'>
		<span id='ClosesM_tipspan2'></span>		 
		</dt>			
	       </dl>
	</div>
</div>	
</div>	
<script src="<?php echo PROJECTJSOTHERSDIR."close/close/set.js"?>"></script>