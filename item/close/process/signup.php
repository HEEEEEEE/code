<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'process/signup.css' ?>" />
<div id='SignuP_back'>
<div id='SignuP_backframe'></div>
</div>
<div id='SignuP'>
	<div id='SignuP_top'></div>	
	<div id='SignuP_outside'>                                                                
		<form name='SIGNUP' autocomplete='off'>
		        <dl>
			<dt><input type='text' value='' placeholder='Email' id='EmaiL' maxlength='25' /></dt>
			<dt><input type='password' value='' placeholder='Password' id='PassworD' maxlength='25' /></dt>
                                    <dt><input type='text' value='' placeholder='Username' id='UsernamE' class='' maxlength='25' /></dt>
			<dt><input type='text' value='' placeholder='Code' id='VercodE' maxlength='5' /><img title='' id='code' onclick='CODE_signup()' src='<?php echo ROOTOTHERSDIR.'include/part/code.php'?>'/></dt>
			<dt><input type='button' value='Sign up' id='SubmiT' class='SubmiT' /></dt>	
		       </dl>
		</form>
	</div>
	<div id='SignuP_bottom'></div>	
</div>
<div id='SignuP_tips'>
       <dl>                                 
	<dt id='SignuP_tip1'>
		<span id='SignuP_tip1span1'></span>		 
	</dt>
	<dt id='SignuP_tip2'>
		<span id='SignuP_tip2span2'></span>		 
	</dt>
	<dt id='SignuP_tip3'>
		<span id='SignuP_tip3span3'></span>		 
	</dt>
	<dt id='SignuP_tip4'>
		<span id='SignuP_tip4span4'></span>		 
	</dt>						
       </dl>
</div>
<script src="<?php echo ROOTJSOTHERSDIR.'process/signup.js' ?>" charset='utf-8'></script>