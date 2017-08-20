<?php 
if($_GET['action']=='sign_inmenushow'){
	//Include each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';	
}else{
	exit('sign_inmenushowactionfail');
}
?>
<div id='MenU_signin'>
	<div id='MenU_signintop'>
	</div>
		<div id='MenU_signinright'></div>
			<div id='MenU_signincenterback'></div>
			<div id='MenU_signincenter'>
				<div id='SigniN_end'>
					<div id='SigniN_endtop'>登录</div>	
					<div id='SigniN_endcenter'>                                                                
						<form id='ForM_signin' name='signin' autocomplete='off'>
						        <div id='SignuP_endcentercon'>
							<div id='SigniN_endcentercon1' class='signin-endcentercon'><input id='SigniN_endcenterconenter1' class='signin-endcenterconenter input-email input-show' type='text' placeholder='电子邮件' maxlength='25' /></div>
							<div id='SigniN_endcentercon2' class='signin-endcentercon'><input id='SigniN_endcenterconenter2' class='signin-endcenterconenter input-password input-show' type='password' placeholder='密码' maxlength='25' /></div>
				                                    <div id='SigniN_endcentercon3' class='signin-endcentercon'>
								<img id='RemembeR_no' class='remember' src='<?php echo ROOTOTHERSDIR.'include/part/sign/signin/remember_no.png'?>'/>
								<img style='display:none' id='RemembeR' class='remember' src='<?php echo ROOTOTHERSDIR.'include/part/sign/signin/remember.png'?>'/>
								<span id='RemembeR_tip' >记住我</span>						                                    
				                                    </div>
							<div id='SigniN_endcentercon4' class='signin-endcentercon'><input id='SigniN_endcenterconenter4' class='signin-endcenterconenter input-code input-show' type='text' placeholder='验证码' maxlength='5' /><img id='SigniN_endcenterconenter41' title='Click to changE' src='<?php echo ROOTOTHERSDIR.'include/part/code/code_imsignin.php'?>'/></div>
							<div id='SigniN_endcentercon5' class='signin-endcentercon'><span id='SigniN_endcenterconenter5' class='signin-endcenterconenter'>完成</span></div>	
						       </div>
						</form>
					</div>	
				</div>						       	
			</div>					
		<div id='MenU_signupbottom'></div>
	<div id='MenU_signinleft'></div>
	<div id='MenU_signintips'>
		<div id='SigniN_endtips'>	
			<div id='SigniN_endtipscenter'>                                                                
			        <div id='SigniN_endtipscentercon'>
				<div id='SigniN_endtipscentercon1' class='signin-endtipscentercon'></div>
				<div id='SigniN_endtipscentercon2' class='signin-endtipscentercon'></div>
	                                    <div id='SigniN_endtipscentercon3' class='signin-endtipscentercon'></div>
				<div id='SigniN_endtipscentercon4' class='signin-endtipscentercon'></div>
				<div id='SigniN_endtipscentercon5' class='signin-endtipscentercon'></div>	
			       </div>
			</div>	
		</div>		
	</div>	
	<div id='MenU_signinothers'>
		<dl id='HiddeN_signincolor' >
		<dt><input type='hidden' id='HiddeN_signincolorback' value='' /></dt>					
		</dl>
		<dl id='HiddeN_signinrem' >
		<dt><input type='hidden' id='HiddeN_signinremvalue' value='0' /></dt>					
		</dl>				
	</div>				
</div>
<script charset='utf-8'>
	var p=$('#SigniN_end').offset();
	var pt=p.top;
	var ptS=pt+'px';
	var pl=p.left;
	var pl=pl-337.5;
	var plS=pl+'px';	
	$('#MenU_signintips').css({top:ptS,left:plS});
</script>
































































