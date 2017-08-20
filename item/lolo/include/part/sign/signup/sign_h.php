<?php 
if($_GET['action']=='sign_upmenushow'){
	//Include each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';	
}else{
	exit('sign_upmenushowactionfail');
}
?>
<div id='MenU_signup'>
	<div id='MenU_signuptop'>
	</div>
		<div id='MenU_signupright'></div>
			<div id='MenU_signupcenterback'></div>
			<div id='MenU_signupcenter'>
				<div id='SignuP_end'>
					<div id='SignuP_endtop'>注册</div>	
					<div id='SignuP_endcenter'>                                                                
						<form id='ForM_signup' name='signup' autocomplete='off'>
						        <div id='SignuP_endcentercon'>
							<div id='SignuP_endcentercon1' class='signup-endcentercon'><input id='SignuP_endcenterconenter1' class='signup-endcenterconenter input-email input-show' type='text' placeholder='电子邮件' maxlength='25' /></div>
							<div id='SignuP_endcentercon2' class='signup-endcentercon'><input id='SignuP_endcenterconenter2' class='signup-endcenterconenter input-password input-show' type='password' placeholder='密码' maxlength='25' /></div>
				                                    <div id='SignuP_endcentercon3' class='signup-endcentercon'><input id='SignuP_endcenterconenter3' class='signup-endcenterconenter input-username input-show' type='text' placeholder='昵称' maxlength='25' /></div>
							<div id='SignuP_endcentercon4' class='signup-endcentercon'><input id='SignuP_endcenterconenter4' class='signup-endcenterconenter input-code input-show' type='text' placeholder='验证码' maxlength='5' /><img id='SignuP_endcenterconenter41' title='Click to changE' src='<?php echo ROOTOTHERSDIR.'include/part/code/code_imsignup.php'?>'/></div>
							<div id='SignuP_endcentercon5' class='signup-endcentercon'><span id='SignuP_endcenterconenter5' class='signup-endcenterconenter'>完成</span></div>	
						       </div>
						</form>
					</div>	
				</div>						       	
			</div>					
		<div id='MenU_signupbottom'></div>
	<div id='MenU_signupleft'></div>
	<div id='MenU_signuptips'>
		<div id='SignuP_endtips'>	
			<div id='SignuP_endtipscenter'>                                                                
			        <div id='SignuP_endtipscentercon'>
				<div id='SignuP_endtipscentercon1' class='signup-endtipscentercon'></div>
				<div id='SignuP_endtipscentercon2' class='signup-endtipscentercon'></div>
	                                    <div id='SignuP_endtipscentercon3' class='signup-endtipscentercon'></div>
				<div id='SignuP_endtipscentercon4' class='signup-endtipscentercon'></div>
				<div id='SignuP_endtipscentercon5' class='signup-endtipscentercon'></div>	
			       </div>
			</div>	
		</div>		
	</div>	
	<div id='MenU_signupothers'>
		<dl id='HiddeN_color' >
		<dt><input type='hidden' id='HiddeN_colorback' value='' /></dt>					
		</dl>		
	</div>				
</div>
<script charset='utf-8'>
	var p=$('#SignuP_end').offset();
	var pt=p.top;
	var ptS=pt+'px';
	var pl=p.left;
	var pl=pl-337.5;
	var plS=pl+'px';	
	$('#MenU_signuptips').css({top:ptS,left:plS});
</script>
































































