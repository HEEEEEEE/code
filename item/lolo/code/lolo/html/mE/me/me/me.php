<?php 
if($_GET['action']=='me_me'){
	//header coustom
	header('Content-Type:text/html;charset=utf-8');
	//Include each
	require substr(dirname(__FILE__),0,-13).'/include/each.php';
	//the USER's INFO echo to
	$html_humans=array();
	$search_humans=sql_search("SELECT
			bio,email
			FROM
			he_humans
			WHERE
			id='{$_COOKIE['userid']}'
			");
	$html_humans['bio']=htmlF($search_humans['bio']);
	$html_humans['email']=htmlF($search_humans['email']);
	//bio
	$bio=$html_humans['bio'];
	
	//email
	$email=$html_humans['email'];			
}
else{
	exit('me_meactionfail');
}
?>
<div id='MenU_me'>
	<div id='MenU_metop'>
		<div id='MenU_medone'>完成</div>
		<div id='MenU_mecancel'>取消</div>
	</div>
		<div id='MenU_meright'></div>
			<div id='MenU_mecenterback'></div>
			<div id='MenU_mecenter'>
				<div id='MenU-CenteR_mainme'>
					<div id='MenU-mE_back'>
						<div id='MenU-mE_backcon'>
							<div style='display:none;' id='MenU-mE_backcontool'>
								<img id='MenU-mE_backcontoolbro' />
								<span id='MenU-mE_backcontoolcancel'>取消</span>
							</div>						
							<div id='MenU-mE_backconfra'>
							</div>
							<div id='MenU-mE_backconno'>
								<div id='MenU-mE_backconnocon'>
									<form id='MenU-FroM_upload1' name='form-uploadmeback' enctype='multipart/formdata'>
										<input id='MenU-InpuT_upload1' name='input-uploadmeback' type='file' accept='image/png' title='我的封面+' />
										<img id='MenU-img_upload1' src='<?php echo ROOTOTHERSDIR.'html/mE/me/me/back.png'; ?>' />
									</form>
								</div>
							</div>
							<div style='display:none;'>
								<input id='MenU_mehidden1' type='hidden' value='0' />
							</div>
						</div>
					</div>
					<div id='MenU-mE_avatar'>
						<div id='MenU-mE_avatarcon'>
							<div id='MenU-mE_avatarconno' class='avatarcon'>
								<div id='MenU-mE_avatarconnocon' class='avatarfra'>
									<form id='MenU-FroM_upload2' name='form-uploadmeavatar' enctype='multipart/formdata'>
										<div id='MenU-mE_avatarconnocon1' class='avatarfra1'></div>
										<div id='MenU-mE_avatarconnocon2' class='avatarfra2'></div>
										<div id='MenU-mE_avatarconnocon3' class='avatarfra3'>
											<input id='MenU-InpuT_upload2' name='input-uploadmeavatar' type='file' accept='image/png' title='我的头像+' />
											<img id='MenU-img_upload2' src='<?php echo ROOTOTHERSDIR.'html/mE/me/me/avatar.png'; ?>' />								
										</div>
										<div id='MenU-mE_avatarconnocon4' class='avatarfra4'></div>
										<div id='MenU-mE_avatarconnocon5' class='avatarfra5'></div>
									</form>
								</div>
								<div style='display:none;' id='MenU-mE_avatarconnotool'>
									<img id='MenU-mE_avatarconnobro' />
									<span id='MenU-mE_avatarconnocancel'>取消</span>
								</div>		
							</div>
							<div style='display:none;'>
								<input id='MenU_mehidden2' type='hidden' value='0' />
							</div>														
						</div>
						<div id='MenU-mE_avatarname'>
							<span id='MenU-mE_avatarnametitle' class='avatarname'>昵称</span>
							<input id='MenU-mE_avatarnameinput' class='avatarname' type='text' value="<?php echo $_COOKIE['username'];?>" title='<?php echo $_COOKIE['username'];?>' maxlength='25' />
						</div>
						<div id='MenU-mE_avatarbio'>
							<div id='MenU-mE_avatarbiotitle' class='avatarbio'>简介</div>
							<div id='MenU-mE_avatarbiocon' class='avatarbio' contentEditable='true'><?php echo $bio;?></div>		
						</div>
						<div id='MenU-mE_avataremail' style='display:none' >
							<span id='MenU-mE_avataremailtitle' class='avataremail'>邮箱</span>
							<input id='MenU-mE_avataremailcon' class='avataremail' type='text' value="<?php echo $email;?>" title='<?php echo $email;?>' maxlength='25' />
						</div>														
					</div>			       	
				</div>
			</div>
	<script charset='utf-8'>
		var screenW=screen.width;

		//mainWmainWmainWmainWmainWmainWmainWmainWmainWmainWmainWmainW
		var p=$('#ToP_basic').offset();
		var pl=p.left;
		var pls=pl+'px';
			
		var mainW=screenW - 520;
		
		var avatarH=$('#mE_avatar').height();
		var mainH=avatarH+125;
		var mainHS=mainH+'px';
		$('#MenU_mecenter').css('minHeight',mainHS);		
		        $('#MenU_mecenter,#MenU_metop').width(mainW);	
			   $('#MenU_mecenter,#MenU_metop').css({left:pls});

			   
		$('#MenU-CenteR_mainme').width(mainW);
		//mineWmineWmineWmineWmineWmineWmineWmineWmineWmineWmineWmineW
		$('#MenU-mE_mine').width(mainW-370);
					   		
	</script>					
		<div id='MenU_mebottom'></div>
	<div id='MenU_meleft'></div>
	<div id='MenU_metips'>                                                            
		<div id='MenU_metipscon1' class='menu-metipscon'></div>
		<div id='MenU_metipscon2' class='menu-metipscon'></div>
            	<div id='MenU_metipscon3' class='menu-metipscon'></div>		
	</div>
	<script charset='utf-8'>
		var p=$('#MenU-mE_avatarname').offset();
		var pt=p.top;
		var ptS=pt+'px';
		var pl=p.left;
		var pl=pl+300;
		var plS=pl+'px';	
		$('#MenU_metips').css({top:ptS,left:plS});					   		
	</script>						
</div>					