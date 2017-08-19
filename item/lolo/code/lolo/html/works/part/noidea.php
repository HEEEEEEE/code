<?php 
//PHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHPPHP
	/*useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser
	 *
	*/
	//echo the user's info
	$result_user = sql_search("SELECT
			        avatar
			   FROM
			        he_humans
			   WHERE
			        id='{$_COOKIE['userid']}'
	");
	$html_user = array();
	$html_user['avatar'] = htmlF($result_user['avatar']);
	$avatarstrl=strlen(trim($html_user['avatar']));
	if($avatarstrl > 0 ){
		$avatar_top=ROOTOTHERSDIR.$html_user['avatar'];
		$avatar_topback='background-color:rgba(0,0,0,0.125);';
		$avatar_toph='40px';
	}else{
		$avatar_top=ROOTDATAOTHERSDIR.'image/works/top/avatar.png';
		$avatar_topback='';
		$avatar_toph='32px';
	}
	/*
	*useruseruseruseruseruseruseruseruseruseruseruseruseruseruseruseruser
	*/		
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<head>
<meta charset='utf-8' />
<title><?php echo '| ' . $_COOKIE['username'] . ' > Works | OCLOCLO' ;?></title>
<link rel='shortcut icon' href='<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>' />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ; ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'works.css' ; ?>" />
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/left.css' ; ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/right.css' ; ?>' />
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/center.css' ; ?>' />							
<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'works/center/noidea/create.css' ; ?>' />
		
<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>
</head>
<body id='BodY_works'>
<div id='BodY_scroll'>	
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>										
		</dl>					
	</div>
	<div id='MenU'><?php //all fullscreen menu in here ?>	
		<div id='MenU_ideacre'>		
		</div>	
		<div id='MenU_others' >
			<?php 
			require ROOTDIR.'include/part/unknowerror/part.php';
			?>		
			<?php 
			require ROOTDIR.'include/part/upload/tip/upload.php';
			?>
			<?php 
			require ROOTDIR.'include/part/loadin/part.php';
			?>								
		</div>										
	</div>
									
		<?php 
		require ROOTDIR.'include/part/top/part.php';
		?>																			

		<div id='LefT'>
			<div id='LefT_main'>
				<div id='LefT_content'>
				</div>
				<div id='LefT_frame'>
					<div id='FramE1' id='frame'>
						<div id='FramE1_own1' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE1_own2' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE1_own3' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>																	
					</div>				
				</div>
			</div>	
			
			<div id='LefT_others'></div>
		</div>	
	
			<div id='BottoM'>
		
			</div>
	
		<div id='RighT'>
			<div id='RighT_main'>
				<div id='RighT_content'>				
				</div>
				<div id='RighT_frame'>
					<div id='FramE3' id='frame'>
						<div id='FramE3_own1' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE3_own2' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>
						<div id='FramE3_own3' class='frame_own'>
									<div class='frame_own-top frame_own-div'></div>
								<div class='frame_own-right frame_own-div' ></div>
							<div class='frame_own-center'></div>
								<div class='frame_own-bottom frame_own-div' ></div>
									<div class='frame_own-left frame_own-div' ></div>																		
						</div>																	
					</div>				
				</div>
			</div>	
			
			<div id='RighT_others'></div>	
		</div>
		
	<div id='CenteR'>
		<div id='CenteR_leftforleft'></div>
		<div id='CenteR_main'>
			<div id='CenteR_contentleftborder'></div>
			<div id='CenteR_content'>
				<div id="CenteR_contentcreate">
					<div id="CenteR_contentcreatetips">
						<span>没有任何能加工的露露!!!</span>
					</div>
					<div id="CenteR_contentcreateimg">
						<img id="CenteR_contentcreateimgimg" title='露露' class='create' src="<?php echo ROOTDATAOTHERSDIR.'image/works/center/create.gif';?>" />
					</div>			
				</div>			
			</div>
			<div id='CenteR_frame'>
				<div id='FramE2' id='frame'>
					<div id='FramE2_own1' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>
					<div id='FramE2_own2' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>
					<div id='FramE2_own3' class='frame_own'>
								<div class='frame_own-top frame_own-div'></div>
							<div class='frame_own-right frame_own-div' ></div>
						<div class='frame_own-center'></div>
							<div class='frame_own-bottom frame_own-div' ></div>
								<div class='frame_own-left frame_own-div' ></div>																		
					</div>																	
				</div>				
			</div>
		</div>	
		
		<div id='CenteR_others'></div>										
	</div>
		
</div>

<script charset='utf-8'>
//screenscreenscreenscreenscreenscreen
var w=screen.width;
	//mainWmainWmainWmainWmainWmainWmainW			
	var mainW=w - 600;
		//centercentercentercentercentercenter		
		$('#CenteR_main').width(mainW);		
			$('#CenteR_content').width(mainW);		
</script>

<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."public.js" ; ?>'></script>

<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>"></script>

<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/top.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/left.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/right.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/center.js" ; ?>'></script>
<script charset='utf-8' src='<?php echo ROOTJSOTHERSDIR."works/center/noidea/create.js" ; ?>'></script>  		
		   			
</body>
	<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>