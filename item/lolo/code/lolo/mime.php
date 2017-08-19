	<?php 
	/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
	 *
	*
	*
	*/

	//basic:each
	require dirname(__FILE__).'/include/each.php';
	//check
	if(!(isset($_COOKIE['userid']))){
		hisback();
	}		
	//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	/*memememememememememememememememememememememememememememe
	 */
	//the USER's INFO echo to	
	//for belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:pagefor belong:page
	$html_humans=array();
	$search_humans=sql_search("SELECT
			      name,back,avatar
		            FROM
			      he_humans
		         WHERE
			      id='{$_GET['hid']}'
	");
			$html_humans['name']=htmlF($search_humans['name']);
		$html_humans['back']=htmlF($search_humans['back']);
	$html_humans['avatar']=htmlF($search_humans['avatar']);
	//name
	$name=$html_humans['name'];
	
	//back
	$back=strlen(trim($html_humans['back']));
	if($back > 0){
		$backhave=ROOTOTHERSDIR.$html_humans['back'];
		$backno=ROOTDATAOTHERSDIR.'image/mE/back.png';
		$have='display:block';
		$no='display:none';
	}else{
		$backhave='';
		$backno=ROOTDATAOTHERSDIR.'image/mE/center/back.png';
		$have='display:none';
		$no='display:block';
	}

	//avatar
	$avatar=strlen(trim($html_humans['avatar']));
	if($avatar > 0){
		$backhaveavatar=ROOTOTHERSDIR.$html_humans['avatar'];
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/center/avatar.png';
		$haveavatar='display:block';
		$noavatar='display:none';
	}else{
		$backhaveavatar='';
		$backnoavatar=ROOTDATAOTHERSDIR.'image/mE/center/avatar.png';
		$haveavatar='display:none';
		$noavatar='display:block';
	}

	//mime 
		//his
		if($_COOKIE['userid']==$_GET['hid']){
			$his='我';
		}else{
			$his='这';
		}		
		//choose
		if($_GET['mime']=='following'){
			$followingClass="mimeTitle chooseYes";
			$followerClass="mimeTitle chooseNo";
		}else{
			$followerClass="mimeTitle chooseYes";
			$followingClass="mimeTitle chooseNo";		
		}
	?>	
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />
<title><?php echo '| ' . $name ." 's ".$_GET['mime'].' | OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mime.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'mime/center.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/mime/css/follow.css' ?>" />	
		
<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script> 
</head>
<body id='BodY_mE'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
			<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_id' >		
			<dt><input type='hidden' id='HiddeN_hid' value='<?php echo $_GET['hid'];?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_mime' >		
			
			<?php if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){$mimeyes=1;}else{$mimeyes=0;}?>			
			<dt><input type='hidden' id='HiddeN_MimeYes' value='<?php echo $mimeyes; ?>' /></dt>	
			<dt><input type='hidden' id='HiddeN_MimeWhich' value='<?php echo $_GET['mime'];?>' /></dt>			
		</dl>									
	</div>
	<?php 
	if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']==$_GET['hid']) ){	
	?>			
		<div id='MenU'><?php //all fullscreen menu in here ?>			
			<div id='MenU_ideacre'></div>													
		</div>
		<div id='MenU_others' >
		<?php 
		require ROOTDIR.'include/part/loadin/part.php';
		?>		
		<?php 
		require ROOTDIR.'include/part/unknowerror/part.php';
		?>		
		<?php 
		require ROOTDIR.'include/part/upload/tip/upload.php';
		?>								
		</div>						
	<?php 
	}else if( (isset($_COOKIE['userid']))&&($_COOKIE['userid']!=$_GET['hid']) ){
	?>	
		<div id='MenU'><?php //all fullscreen menu in here ?>
			<div id='MenU_ideacre'>								
			</div>								
		</div>				
		<div id='MenU_others' >
			<?php 
			require ROOTDIR.'include/part/loadin/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/unknowerror/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/upload/tip/upload.php';
			?>
		</div>
	<?php }?>	
<div id='BodY_scroll'>	
		<?php 
		//the USER's INFO echo to
		/*memememememememememememememememememememememememememememe
		 */
		//for login:topfor login:topfor login:topfor login:topfor login:topfor login:top
		$html_humansC=array();
		$search_humansC=sql_search("SELECT
				       avatar
				    FROM
				       he_humans
				    WHERE
				       id='{$_COOKIE['userid']}'
		");
		$html_humansC['avatar']=htmlF($search_humansC['avatar']);
		//avatar
		$avatarC=strlen(trim($html_humansC['avatar']));
		if($avatarC > 0){
			$top_avatarC=ROOTOTHERSDIR.$html_humansC['avatar'];
			$avatar_topback='background-color:rgba(0,0,0,0.125);';
			$top_avatarHC='50px';
		}else{
			$top_avatarC=ROOTDATAOTHERSDIR.'image/mE/top/avatar.png';
			$avatar_topback='';
			$top_avatarHC='40px';
		}
		//for login:topfor login:topfor login:topfor login:topfor login:topfor login:top	
		?>
		<?php 
		require ROOTDIR.'include/part/top/part.php';
		?>	
					
		<div id='LefT'></div>
	
			<div id='BottoM'></div>
			
		<div id='Right'>			
		</div>

	<div id='CenteR' class='forScroll'>
		<div id='CenteR_rightforright'></div>	
		<div id='CenteR_main'>
			<div id='CenteR_mainme' class='center_mainMeforNormal center_mainMeforScroll'>
			<div id='CenteR_mainmeme'>
				<div id='mE_back' class='me_backforNormal me_backforScroll'>
					<div id='mE_backcon'>
						<div style='<?php echo $have;?>' id='mE_backconhave'>
							<div id='mE_backconhavecon'>
								<img id='mE_backconhaveconcon' src='<?php echo $backhave; ?>' />
							</div>
						</div>
						<div id='mE_backconfra'></div>
						<div style='<?php echo $no;?>' id='mE_backconhave'>
							<div id='mE_backconhavecon'>
								<img id='mE_backconhaveconcon' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/back.png';; ?>' />
							</div>
						</div>													
					</div>
					<div id='mE_backconhiddenforscroll' class='me_backConHiddenforNormal me_backConHiddenforScroll'></div>
				</div>
				<div id='mE_avatar' class='me_avatarforNormal me_avatarforScroll'>
					<div id='mE_avatarcon'>
						<div style='<?php echo $haveavatar;?>' id='mE_avatarconhave' class='avatarcon'>
							<div id='mE_avatarconhavecon' class='avatarfra'>
								<div id='mE_avatarconhavecon1' class='avatarfra1'></div>
								<div id='mE_avatarconhavecon2' class='avatarfra2'></div>
								<div id='mE_avatarconhavecon3' class='avatarfra3'>
									<a href="<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine=close';?>"><img id='mE_avatarconhaveconcon' src='<?php echo $backhaveavatar; ?>' /></a>										
								</div>
								<div id='mE_avatarconhavecon4' class='avatarfra4'></div>
								<div id='mE_avatarconhavecon5' class='avatarfra5'></div>	
							</div>					

						</div>
<!-- 						<div id='mE_avatarconfra'></div> -->
						<div style='<?php echo $noavatar;?>' id='mE_avatarconhave' class='avatarcon'>
							<div id='mE_avatarconhavecon' class='avatarfra'>
								<div id='mE_avatarconhavecon1' class='avatarfra1'></div>
								<div id='mE_avatarconhavecon2' class='avatarfra2'></div>
								<div id='mE_avatarconhavecon3' class='avatarfra3'>
									<a href="<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine=close';?>"><img id='mE_avatarconhaveconcon' src='<?php echo ROOTDATAOTHERSDIR.'image/mE/avatarforme.png';; ?>' /></a>
								</div>
								<div id='mE_avatarconhavecon4' class='avatarfra4'></div>
								<div id='mE_avatarconhavecon5' class='avatarfra5'></div>	
							</div>						
						</div>																									
					</div>
					<div id='mE_avatarname'>
						<a href="<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_GET['hid'].'&mine=close';?>"><?php echo $name;?></a>
					</div>
					<div id='mE_MimeFollowing' class='mime'>
						<div id='mE_MimeFollowingtitle' class='mimeBaisc mimeFollow mimeFollowing'><a class="<?php echo $followingClass;?>" href="<?php echo ROOTOTHERSDIR.'mime.php?hid='.$_GET['hid'].'&mime=following'?>"><?php echo $his;?>的关注</a></div>		
					</div>
					<div id='mE_MimeFollower' class='mime'>
						<div id='mE_avataremailtitle' class='mimeBaisc mimeFollow mimeFollower'><a class="<?php echo $followerClass;?>" href="<?php echo ROOTOTHERSDIR.'mime.php?hid='.$_GET['hid'].'&mime=follower'?>"><?php echo $his;?>的粉丝</a></div>		
					</div>														
				</div>
				<div id='mE_mine' class='me_mineforNormal me_mineforScroll'>			
				</div>
			</div>			       	
			</div>
			<div id='CenteR_mainidea' class='center_mainIdeaforNormal center_mainIdeaforScroll'>
				<div id='ProjectclosE_close' class='projectClose_closeforNormal projectClose_closeforScroll'>
					<div id='IdeA_showcontop' style='display:none;'>						
					</div>
					<div id='IdeA'>
					</div>
				</div>							
			</div>						
		</div>
		<div id='CenteR_others'>
			<div style='opacity:0;' id='CenteR_othersformainheight'></div>
		</div>
	</div>			
</div>			
	<script charset='utf-8'>
	            //screen
		var w=screen.width;
			//mainW			
			var mainW=w - 520;
			//mainH
			var avatarH=$('#mE_avatar').height();
			var mainH=avatarH+125;
		var mainHS=mainH+'px';
		
		//centercentercentercentercenter		
		        $('#CenteR_main').width(mainW);
			$('#CenteR_main').css('minHeight',mainHS);	
			        //me   
			        $('#CenteR_mainmeme').width(mainW);
			        	           $('#mE_mine').width(mainW-370);
			
		        //idea
		        $('#CenteR_mainidea').width(mainW-370);	
		        
		//toptoptoptoptoptop
		$('#ToP_content').width(mainW);

		//others
		$('#OtherS').width(w-260);					   		
	</script>

	<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>" charset='utf-8'></script>
	<script src="<?php echo ROOTJSOTHERSDIR.'mime.js' ?>" charset='utf-8'></script>		
	<script src="<?php echo ROOTJSOTHERSDIR.'mime/top.js' ?>" charset='utf-8'></script>
	<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>" charset='utf-8'></script>
	<script src="<?php echo ROOTOTHERSDIR.'include/part/mime/js/follow.js' ?>" charset='utf-8'></script>		
</body>	
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	