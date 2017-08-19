<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'process/signin.css' ?>" />
<div id='LogiN_back'>
<div id='LogiN_backframe'></div>
</div>
<div id='LogiN'>
	<div id='LogiN_top'></div>	
	<div id='LogiN_outside'>                                                                
		<form name='LOGIN' autocomplete='off'>
		        <dl>
			<dt>
			<input type='text' value='' placeholder='Email' id='EmaiL' maxlength='25' />
			</dt>
			<dt>
			<input type='password' value='' placeholder='Password' id='PassworD' maxlength='25' />
			</dt>
			<dt>
			<img id='RemembeR_no' class='remember' src='<?php echo ROOTDATAOTHERSDIR.'process/image/remember_no.png'?>'/>
			<img id='RemembeR' class='remember' src='<?php echo ROOTDATAOTHERSDIR.'process/image/remember.png'?>'/>
			<span>Remember me</span>
			</dt>
			<dt>
			<input type='text' value='' placeholder='Code' id='VercodE' maxlength='5' /><img title='' id='code' onclick='CODE_signin()' src='<?php echo ROOTOTHERSDIR.'include/part/code.php'?>'/>
			</dt>
			<dt>
			<input type='button' value='Sign in' id='SubmiT' />
			</dt>	
		       </dl>
		</form>
	</div>
	<div id='LogiN_bottom'></div>
	<div>
	       <dl>                                 
		<dt id='LogiN_tip'>
		<span id='LogiN_tipspan1'></span>		 
		</dt>
		<dt id='LogiN_tip1'>
		<span id='LogiN_tipspan2'></span>		 
		</dt>			
	       </dl>
	</div>	
</div>
<script src="<?php echo ROOTJSOTHERSDIR.'process/signin.js' ?>" charset='utf-8'></script>