<?php 
//Include each
require dirname(__FILE__).'/include/each.php';
	//Check the login state
	isloginPT();
		//update the idea
		update_idea();
//host info echo host info echo host info echo host info echo host info echo host info echo
//the ClosE's num echo to
$html_close=array();
$search_close=sql_search("SELECT
		      COUNT(id)
	                 AS
		      num
	              FROM
		      he_idea
	              WHERE
		      hid='{$_COOKIE['userid']}'
		  AND
		      timestate=1		  
");
$html_close['num']=htmlF($search_close['num']);
$close=$html_close['num'];

//echo the user's info
$search=sql_search("SELECT
		avatar
	        FROM
		he_humans
	      WHERE
		id='{$_COOKIE['userid']}'
");
$html_user=array();
$html_user['avatar']=htmlF($search['avatar']);
		
//avatar
$avatar=strlen(trim($html_user['avatar']));
if($avatar > 0){
	$avatar_top=$html_user['avatar'];
	$avatar_topback='background-color:rgba(0,0,0,0.125);';
	
	$avatar=$html_user['avatar'];
	$avatardisplay='display:block;';
	$avataradddisplay='display:none;';
	
	
}else{
	$avatar_top='image/home/top/avatar.png';
	$avatar_topback='';
	
	$avatar='image/home/center/avatar_add.png';
	$avataradddisplay='display:block;';
	$avatardisplay='display:none;';
}	
//social info echo social info echo social info echo social info echo social info echo
$html_social=array();
$search_social=sql_search("SELECT
		     id,followinghid,followhid
		       FROM
		     he_social
		   WHERE
		     hid='{$_COOKIE['userid']}'
");
if($search_social['id']){
	if(($search_social['followinghid']=='')&&($search_social['followhid']=='')){
		$followhidD='display:none;';
		$followhidN=0;
				
		$followinghidD='display:none;';
		$followinghidN=0;
	}else if(($search_social['followinghid']!='')&&($search_social['followhid']=='')){
		$followhidD='display:none;';
		$followhidN=0;
		
		$followinghidD='display:block;';		
		$following=explode(',', $search_social['followinghid']);
		$followinghidN=count($following);
	}else if(($search_social['followinghid']=='')&&($search_social['followhid']!='')){
		$followhidD='display:block;';
		$follow=explode(',', $search_social['followhid']);
		$followhidN=count($follow);
				
		$followinghidD='display:none;';
		$followinghidN=0;
	}else{
		$followhidD='display:block;';
		$follow=explode(',', $search_social['followhid']);
		$followhidN=count($follow);

		$followinghidD='display:block;';
		$following=explode(',', $search_social['followinghid']);
		$followinghidN=count($following);		
	}
}else{
		$followinghidD='display:none;';
		$followhidD='display:none;';
}
$html_social['followinghid']=htmlF($search_social['followinghid']);
$html_social['followhid']=htmlF($search_social['followhid']);
?>
<!DOCTYPE HTML>
<html id='HtmL_home'>
<head>
<meta charset='utf-8' />
<title><?php echo '| ' . $_COOKIE['username'] . ' > Home | OCLOCLO ' ; ?></title>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR . 'image/title.ico' ; ?>" />

<link type='text/css' rel='stylesheet' href='<?php echo ROOTCSSOTHERSDIR.'jquery.mCustomScrollbar.css' ?>' />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />


<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/top.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/left.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/others.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/me.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/me/avatar.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/me/avatar_clear.css' ?>" /> 

<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea.css' ?>" /> 
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/create.css' ?>" /> 

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'html/home/idea/show/basic/show.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/more.css' ?>" />          	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/delete.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/tag.css' ?>" />
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/prepr.css' ?>" /> 	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'home/center/idea/prepr_imageclear.css' ?>" />   

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/mime/css/recommend.css' ?>" />

<link type='text/css' rel='stylesheet' href="<?php echo ROOTOTHERSDIR.'include/part/idea/show/css/public.css' ?>" />



<script src='<?php echo ROOTJSOTHERSDIR."jquery-2.1.3.min.js"?>' charset='utf-8'></script>

<script src='<?php echo ROOTJSOTHERSDIR."jquery-ui-1.10.4.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mousewheel.min.js"?>' charset='utf-8'></script>
<script src='<?php echo ROOTJSOTHERSDIR."jquery.mCustomScrollbar.min.js"?>' charset='utf-8'></script>  
</head>
<body id='BodY_home'>
	<div style='display:none;'><?php //HiddeN for speacil ?>
		<dl id='HiddeN_dir' >
		<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_id' >
		<dt><input type='hidden' id='HiddeN_ideaid' value='' /></dt>	
		<dt><input type='hidden' id='HiddeN_hid' value='<?php echo $_COOKIE['userid'];?>' /></dt>
		<dt><input type='hidden' id='HiddeN_followinghid' value='<?php echo $search_social['followinghid'];?>' /></dt>				
		</dl>
		
		<dl id='HiddeN_top' >
		<dt><input type='hidden' id='HiddeN_topid' value='' /></dt>				
		</dl>

		<dl id='Hidden_Style' >				
		</dl>		
	</div>
		
	<div id='MenU'><?php //all fullscreen menu in here ?>	
		<div id='MenU_ideacre'>		
		</div>
		<div id='MenU_ideatag' style='display:none;'>
			<div id='MenU_ideatagback'></div>
			<div id='MenU_ideatagin'>
				<div id='TaG' class='tag'>
					<dl class='tag-top' >
						<dt id='TaG_entertitle'>
							<span id='TaG_entertitlecon'>添加标签</span>
						</dt>
						<dt id='TaG_enteralbe'>
							<span>隔开不同的标签</span><span title='逗号'>,</span><span>用</span>
						</dt>									
					</dl>
					<dl class='tag-center' >
						<dt id='TaG_enter'>
							<input id='TaG_entercon' type='text' value='' maxlength='64' placeholder="标签+" />	
						</dt>
					</dl>
					<dl class='tag-bottom' >
						<dt id='TaG_done'>
							<span id='TaG_donecon'>完成</span>
						</dt>
						<dt id='TaG_cancel'>
							<span id='TaG_cancelcon'>取消</span>
						</dt>									
					</dl>						
				</div>
			</div>				
		</div>				
		<div id='MenU_ideadel' style='display:none;'>
			<div id='MenU_ideadelback'></div>
			<div id='MenU_ideadelin'>
			<div id='MenU_ideadelinin'>
				<div id='MenU_ideadeltop'>
					<dl id='MenU_ideadeltoptips'>
					</dl>	
				</div>		
				<div id='MenU_ideadelcontent'>
				       <dl>                                 
					<dt id='MenU_ideadelcon_fra'>
						<span id='MenU_ideadelcon_fra_con1'>删除露露!</span>
					</dt>
					<dt id='MenU_ideadelcon_can'>
						<span id='MenU_ideadelcon_can_con'>取消</span>
					</dt>						
				       </dl>				
				</div>				
				<div id='MenU_ideadelbom'>
				       <dl>                                 
					<dt>
						<span id='MenU_ideadelbom_don'>删除</span>
					</dt>	
				       </dl>				       		       		
				</div>
			</div>
			</div>				
		</div>
		<div id='MenU_ideapre'>
			<div id='MenU_ideaprelan' style='display:none;'>
				<div id='MenU_ideaprelanback'></div>
				<div id='MenU_ideaprelanin'>
					<div id='PrE_lanfra'>
						 <img id="PrE_lanfracon" title='DescriptioN+' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/lansadd.png';?>" />												
					</div>
					<div id='PrE_lan' class='prelan'>
						<dl class='prelan-top' >
							<dt id='PrelaN_enteralbe'>
								<span id='PrelaN_enteralbefra'>还可输入:</span><span class='contentEditableNum' id='PrelaN_enteralbenum' >125</span>
							</dt>									
						</dl>
						<dl class='prelan-center' >
							<dt>
								<span data-holder='prelanholder'  data-parents='PrE_lan' class='contentEditable prelanholder prelanbox' id='PrelanboX' contentEditable='true' spellcheck='false' data-placeholder-default='描述+'></span>
							</dt>
						</dl>
						<dl class='prelan-bottom' >
							<dt id='PrelaN_done'>
								<span id='PrelaN_donecon'>完成</span>
							</dt>
							<dt id='PrelaN_cancel'>
								<span id='PrelaN_cancelcon'>取消</span>
							</dt>									
						</dl>						
					</div>					

				</div>							
			</div>
			<div id='MenU_ideapreimage' style='display:none;'>
				<div id='MenU_ideapreimageback'></div>
				<div id='MenU_ideapreimagein'>
					<div id='PrE_imagefra'>
						 <img id="PrE_imagefracon" title='ImagE+' src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/imageadd.png';?>" />												
					</div>
					<div id='PrE_image' class='preimage'>
						<div id='PrE_imagetop' >								
						</div>
						<div id='PrE_imagecenter' >
							<form id='PrE_imageform' name='pre-imageform' enctype='multipart/form-data'>					
								<div id='PrE_imageupload'>
									<div id='PrE_imageupload1'>
										<span id='PrE_imageuploadfra'>上传</span>
									</div>
									<div id='PrE_imageupload11'>
										<span></span>
										<span></span>
									</div>									
									<div id='PrE_imageupload2'>
										<span id='PrE_imageuploadcon'><input title='     ' id='PrE_imageuploadconcon' type='file' name='upload-imagepre' value='' accept='image/png' /></span>
									</div>
									<div id='PrE_imageupload3'>
										<span id='PrE_imageuploadcancel'>取消</span>
									</div>									
								</div>
							</form>
							<div id='PrE_imageuploadbrowser'>
								<div id='PrE_imageuploadbrowsershow'>
									<div id='PrE_imageuploadbrowsershowcon'>
										<img id='PrE_imageuploadbrowsershowconcon' alt='' />
									</div>
								</div>																																
								<div id='PrE_imageuploadbrowserdone'>
									<div id='PrE_imageuploadbrowserdonecon'>
										<span id='PrE_imageuploadbrowserdonecon'>完成</span>
									</div>
								</div>
							</div>							
						</div>
						
						<div id='PrE_imagebottom' >															
						</div>												
					</div>					
			
				</div>							
			</div>
			<div id='MenU_preimageclear' style='display:none;'>
				<div id='MenU_preimageclearback'></div>
				<div id='MenU_preimageclearin'>
				<div id='MenU_preimageclearinin'>
					<div id='MenU_preimagecleartop'>
						<dl id='MenU_preimagecleartoptips'>
						</dl>	
					</div>		
					<div id='MenU_preimageclearcontent'>
					       <dl>                                 
						<dt id='MenU_preimageclearcon_fra'>
							<span id='MenU_preimageclearcon_fra_con1'>清除封面!</span>
						</dt>
						<dt id='MenU_preimageclearcon_can'>
							<span id='MenU_preimageclearcon_can_con'>取消</span>
						</dt>						
					       </dl>				
					</div>				
					<div id='MenU_preimageclearbom'>
					       <dl>                                 
						<dt>
							<span id='MenU_preimageclearbom_don'>清除</span>
						</dt>	
					       </dl>				       		       		
					</div>
				</div>
				</div>				
			</div>													
		</div>

		
		<div id='MenU_avatar' >
			<div id='MenU_avataradd' style='display:none;'>
				<div id='MenU_avataraddback'></div>
				<div id='MenU_avataraddin'>
					<div id='AvataR_add' class='preimage'>
						<div id='AvataR_addtop' >								
						</div>
						<div id='AvataR_addcenter' >
							<form id='AvataR_addform' name='form-uploadavatar' enctype='multipart/form-data'>					
								<div id='AvataR_addupload'>
									<div id='AvataR_addupload1'>
										<span id='AvataR_adduploadfra'>上传</span>
									</div>
									<div id='AvataR_addupload11'>
										<span></span>
										<span></span>
									</div>									
									<div id='AvataR_addupload2'>
										<span id='AvataR_adduploadcon'><input title='     ' id='AvataR_adduploadconcon' type='file' name='upload-imageavatar' value='' accept='image/png' /></span>
									</div>
									<div id='AvataR_addupload3'>
										<span id='AvataR_adduploadcancel'>取消</span>
									</div>									
								</div>
							</form>
							<div id='AvataR_adduploadbrowser'>
								<div id='AvataR_adduploadbrowsershow'>
									<div id='AvataR_adduploadbrowsershowcon'>
										<img id='AvataR_adduploadbrowsershowconcon' alt='' />
									</div>
								</div>																																
								<div id='AvataR_adduploadbrowserdone'>
									<div id='AvataR_adduploadbrowserdonecon'>
										<span id='AvataR_adduploadbrowserdonecon'>完成</span>
									</div>
								</div>
							</div>							
						</div>
						
						<div id='AvataR_addbottom' >															
						</div>												
					</div>					
				</div>
			</div>
			<div id='MenU_avatarclear' style='display:none;'>
				<div id='MenU_avatarclearback'></div>
				<div id='MenU_avatarclearin'>
				<div id='MenU_avatarclearinin'>
					<div id='MenU_avatarcleartop'>
						<dl id='MenU_avatarcleartoptips'>
						</dl>	
					</div>		
					<div id='MenU_avatarclearcontent'>
					       <dl>                                 
						<dt id='MenU_avatarclearcon_fra'>
							<span id='MenU_avatarclearcon_fra_con1'>清除头像!</span>
						</dt>
						<dt id='MenU_avatarclearcon_can'>
							<span id='MenU_avatarclearcon_can_con'>取消</span>
						</dt>						
					       </dl>				
					</div>				
					<div id='MenU_avatarclearbom'>
					       <dl>                                 
						<dt>
							<span id='MenU_avatarclearbom_don'>清除</span>
						</dt>	
					       </dl>				       		       		
					</div>
				</div>
				</div>				
			</div>						
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
	
	
	
	<div id='MenU_ideatool'>
		<div id='MenU_ideatoolmore'>
			<dl class='menu_ideatoolmore-kind'>			   						
			   <dt class='menu_ideatoolmore-kind-1 menu_ideatoolmore-kind-1delete'>
			   	<span id='MenU_ideatoolmore_delete' class='menu_ideatoolmore-kind-1-1'>删除</span>
			   </dt>		   			   
			</dl>
					
		</div>										
		<div id='MenU_ideatoolhide' style='display:none;'>
		       <dl>                                 
			<dt>
				<input id='MenU_ideatool_hidideaid' type='hidden' value='' />
			</dt>	
		       </dl>
		</div>		
	</div>	
	<div id='MenU_ideatoolnotmine'>
		<div id='MenU_ideatoolmorenotmine'>
			<dl class='menu_ideatoolmore-kindnotmine'>	
			</dl>											
		</div>										
		<div id='MenU_ideatoolhidenotmine' style='display:none;'>
		       <dl>                                 
			<dt>
				<input id='MenU_ideatool_hidideaidnotmine' type='hidden' value='' />
			</dt>	
		       </dl>
		</div>		
	</div>	
			
       <div id='BodY_scroll'>				
		<div id='ToP'>
			<div id='ToP_leftforleft'></div>		
			<div id='ToP_content'>	
				<div id='ToP_basic'>
					<div id='ToP_basicdiv1'>
						<dl id='BasiC_face' >
							<dt id='BasicF_dl1dt1' title="">
								<span id='BasicF_dl1dt1span1' style='<?php echo $avatar_topback;?>'>
									<a title='<?php echo $_COOKIE['username']; ?>'>
									<img style='<?php echo $avataradddisplay;?>' id='BasicF_img' src="<?php echo ROOTDATAOTHERSDIR.$avatar_top; ?>" />
									<img style='<?php echo $avatardisplay;?>' id='BasicF_imgavatar' src="<?php echo ROOTOTHERSDIR.$avatar; ?>" />
									</a>
								</span>
							</dt>
						</dl>
					</div>
					<div id='ToP_basicdiv1menu' style='display:none;'>		
						<dl id='ToP_basicdiv1menudl1'>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'><span class='basicusermenucon basicusermenuconfl' title='<?php echo $_COOKIE['username']; ?>'><?php echo $_COOKIE['username']; ?></span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close&others=settings';?>'><span class='basicusermenucon'>设置</span></a></dt>		
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'help.php';?>'><span class='basicusermenucon'>帮助</span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'signout.php';?>'><span class='basicusermenucon'>注销</span></a></dt>
						   <dt class='basicusermenu'><a href='<?php echo ROOTOTHERSDIR.'uS.php';?>'><span class='basicusermenucon basicusermenuconfl'>我们</span></a></dt>			   			   
						</dl>
						<dl id='ToP_basicdiv1menudl2' style='opacity:0;'>		
						   <dt><a href='<?php echo ROOTOTHERSDIR.'explore.php';?>'><img id='BasicF_imgworld' src="<?php echo ROOTDATAOTHERSDIR.'image/home/top/world.png'; ?>" /></a></dt>			   			   
						</dl>					
					</div>					
					<div id='ToP_basicdiv2'>
						<dl id='BasiC_idea' >
							<dt title='露露' id='BasicI_dl1dt1'>
								<span id='BasicI_img' class='create' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/top/create.png' ?>');"></span>
							</dt>
						</dl>
					</div>								
					<div id='ToP_basicdiv3'>
						<a class='topBasic3 topBasic3_1' href='<?php echo ROOTOTHERSDIR.'home.php' ?>'><span style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/top/home.png' ?>');"></span><span>首页</span></a>
						
						<a class='topBasic3 topBasic3_2' href='<?php echo ROOTOTHERSDIR.'works.php' ?>'><img id='TopBasic3_2_Works' title='工厂' src="<?php echo ROOTDATAOTHERSDIR.'image/home/top/works_gray.png' ?>" /></a>
						
						<a class='topBasic3 topBasic3_3' href='<?php echo ROOTOTHERSDIR.'explore.php' ?>'><img id='TopBasic3_3_Explore' title='发现' src="<?php echo ROOTDATAOTHERSDIR.'image/home/top/discovery_gray.png' ?>" /></a>			
					</div>				
				</div>	
				<div id='ToP_mark'>
					<dl id='ToP_markdl1'>
					<dt><a><span id='MarK_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/top/website.png' ?>');"></span></a></dt>
					</dl>	          
				</div>
						
				<div id='ToP_search'>
					<div id='ToP_searchdiv1'>
						<dl>
						<dt><input id='SearcH_input' class='input-search input-show' type='text' value='' placeholder='在全站搜露' /></dt>
						<dt><span id='SearcH_img' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/top/search.png' ;?>')"></span></dt>
						</dl>
					</div>		
				</div>
			</div>
		</div>								
		<?php include ROOTDIR.'include/part/time/part.php';?>
		<div id='LefT' style='opacity:0;'>	  			  			
		</div>
	
	<div id='BottoM'>
	</div>
	
	<div id='RightT'>
	</div>
	
	<div id='CenteR'>
		<div id='CenteR_content'>
			<div id='CenteR_projectstart'>
				<div id='Home_Me'>
					<div id='ProjectstarT_home' class='homeMe_avatar'>
						<div id='ProjectstarT_homeback'>
						</div>
						<div id='ProjectstarT_homehead'>
							<dl id='HomeheaD_dl1'>
								<dt id='HomeheaD_dl1dt1' style="background-image:url('');"></dt>
								<dt id='HomeheaD_dl1dt2'>
								<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'>
								<span id='HomeheaD_username' title="<?php echo $_COOKIE['username'];?>"><?php echo $_COOKIE['username'];?></span>
								</a>				
								</dt>																	
							</dl>
							<div id='HomeheaD_dl2'>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt1'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt2'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt3'>
									<div class='homehead-avatarfra1' id='HomeheaD_dl2dt31'>
									<form style='<?php echo $avataradddisplay;?>' id='ForM_uploadavatar'>
										<a>
										<img id='HomeheaD_avataradd' title="我的头像+" alt='' src="<?php echo ROOTDATAOTHERSDIR.$avatar; ?>" />
										</a>
									</form>
									<form style='<?php echo $avatardisplay;?>' id='ForM_uploadavatarchange'>
										<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'>
										<img id='HomeheaD_avatar' alt='' src="<?php echo ROOTOTHERSDIR.$avatar;?>" />										
										</a>
										<a style='display:none' id='AvataR_imageuploadchange'>
											<span id='AvataR_imageuploadchangefra'>更改</span>
										</a>
										<a style='display:none' id='AvataR_imageuploadclear'>
											<img id="AvataR_imageuploadclearcon" alt='' title='清除' src="<?php echo ROOTDATAOTHERSDIR.'image/home/center/close.png'; ?>" />	
										</a>
									</form>
									</div>
									
								</div>								
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt4'></div>
								<div class='homehead-avatarfra' id='HomeheaD_dl2dt5'></div>																								
							</div>						
						</div>									
						<div id='ProjectstarT_homestart'>
							<dl id='HomestarT_dl1' >
							</dl>
							<dl id='HomestarT_dl2' >	
								<dt id='HomestarT_dl2dt1'>
									<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$_COOKIE['userid'].'&mine=close';?>'>
									<span id='HomestarT_closeall'>露露</span>
									<span id='HomestarT_closeallnum' title='<?php echo $close; ?>'><?php echo $close; ?></span>
									</a>											
								</dt>
								<dt style="<?php echo $followinghidD; ?>" id='HomestarT_dl2dt3'>
									<a href='<?php echo ROOTOTHERSDIR.'mime.php?hid='.$_COOKIE['userid'].'&mime=following';?>'>
									<span id='HomestarT_closepub'>关注</span>
									<span id='HomestarT_closepubnum' title='<?php echo $followinghidN;?>'><?php echo $followinghidN;?></span>
									</a>				
								</dt>
								<dt style="<?php echo $followhidD; ?>" id='HomestarT_dl2dt2'>
									<a href='<?php echo ROOTOTHERSDIR.'mime.php?hid='.$_COOKIE['userid'].'&mime=follower';?>'>
									<span id='HomestarT_closepri'>粉丝</span>								
									<span id='HomestarT_closeprinum' title='<?php echo $followhidN;?>'><?php echo $followhidN;?></span>
									</a>							
								</dt>
																	
							</dl>
						</div>			
					</div>
							
					<div id='ProjectstarT_project'>
						<div class='recommendUser_top'>
							<span>你可能对这些人感兴趣</span>
						</div>
						<div class='recommendUser_center'>
							<div class='user_recommend' id='User_Recommend'></div>
						</div>		
					</div>
				</div>						
			</div>
			<div id='CenteR_projectidea'>
				<div id='ProjectclosE_create'>
				<div id='ProjectclosE_createframeleft'></div>
				<div id='ProjectclosE_createframecenter'></div>
				<div id='ProjectclosE_createcontent'>
					<div id='ProjectclosE_createguide'>
						<dl id='CreateguidE_dl1'>
							<dt>
							<span id='CreateguidE_lan1'>露一露那些</span>
							</dt>
							<dt>
							<span id='CreateguidE_lan2'>想法 背包 汗水...</span>
							</dt>
							<dt>
							<span id='CreateguidE_lan3'></span>
							</dt>
						</dl>
					</div>
					<div id='ProjectclosE_createchoose'>
						<div class='createlan' id='CreatechoosE_lan'>
							<dl class='createlan-top' >
								<dt id='CreatelaN_enteralbetips' class='contentEditableTips'>
									<span>用文字露露</span>
								</dt>
								<dt id='CreatelaN_backtips'>
								</dt>
								<dt id='CreatelaN_enteralbecont'>
									<span id='CreatelaN__enteralbe' class='enteralbe'>还剩:</span><span id='CreatelaN_enteralbenum' class='enteralbe contentEditableNum'>125</span>
								</dt>									
							</dl>
							<dl class='createlan-center' >
								<dt>
									<span data-holder='createlan-placeholder'  data-parents='CreatechoosE_lan' contentEditable='true' spellcheck='false' data-placeholder-default='用文字露露' id='IdeawithlansboX' class='createlan-placeholder ideawithlansbox ideawithlansboxhabbitno contentEditable'></span>
								</dt>
							</dl>
							<dl class='createlan-bottom' >
								<dt id='IdeawithlansdonE'>
									<span id='IdeA_createdone'>露露</span>
								</dt>									
							</dl>						
						</div>
						<div id='CreatechoosE_frame'>
							<dl id='CreatechoosE_framedl1'>
								<dt>
									<span id='CreatechoosE_or' >或</span>
								</dt>
							</dl>						
						</div>
						<div class='createpic' id='CreatechoosE_pic'>
							<dl id='CreatechoosE_picdl1'>
							</dl>
							<form id='ForM_upload' name='form-upload' enctype='multipart/form-data'>					
							<dl id='CreatechoosE_picdl2'>
								<dt id='CreatechoosE_picdl2dt1'>
									<span id='CreatechoosE_picframe' ></span>
								</dt>
								<dt id='CreatechoosE_picdl2dt2'>
									<span id='CreatechoosE_piccon'><img id='CreatechoosE_picimg' title='' src="<?php echo ROOTDATAOTHERSDIR.'image/home/center/egami.png';?>" /></span>
									<span id='CreatechoosE_picupload'><input title='用照片露露' id='UploaD_image' type='file' name='upload-image' value='' accept='image/png' /></span>
								</dt>
							</dl>
							</form>
							<div id='CreatechoosE_picuploadbrowser'>
							
								<form id='ForM_uploadchange' name='form-upload' enctype='multipart/form-data'>
								<div id='PicuploadbrowseR_show'>
									<div id='PicuploadbrowseR_show_con'>
										<img id='PicuploadbrowseR_show_con_img' alt='     ' src='' />
									</div>
									<div style='display:none;' id='PicuploadbrowseR_show_change'>
										<span id='PicuploadbrowseR_show_change_frame'>CHANGE</span>
										<span id='PicuploadbrowseR_show_change_img'><input type='file' id='UploaD_imagechange' name='upload-image' value='' accept='image/png' /></span>
									</div>																								
								</div>
								</form>
								
								<div id='PicuploadbrowseR_done'>
									<div id='PicuploadbrowseR_donein'>
									<span id='UploadbrowseR_done_img'>露露</span>
									</div>
								</div>
							</div>													
						</div>
					</div>
				</div>	
				<div id='ProjectclosE_createframeright'></div>	
				</div>
				<div id='ProjectclosE_search'>
					   <div id='ProjectclosE_searchdiv1' >
				               	<input id='ProjectclosE_searchinput' class='input-search input-show' type='text' value='' maxlength='125' placeholder="搜搜你的露" />
					   </div>
					   
					    <div id='ProjectclosE_searchdiv2' >
					   	<span id='ProjectclosE_searchimg' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/center/search.png' ;?>')"></span>
				               </div>				
				</div>
				<div id='ProjectclosE_close'>
					<div id='IdeA_showcontop' style='display:none;'>
						<div id='IdeA_showcontopsearchinfo'>
							<div class='searchinfo-idea' id='SearchinfO_ideanum'>你的露:<span id='SearchinfO_ideanumcon'><?php echo $close;?></span></div>	
							<div class='searchinfo-idea' id='SearchinfO_searchnum'>搜出来:<span id='SearchinfO_searchnumcon'>0</span></div>
							<div class='searchinfo-idea' id='SearchinfO_back' title='返回' style="background-image:url('<?php echo ROOTDATAOTHERSDIR.'image/home/center/search_back.png' ;?>')"></div>	
						</div>						
					</div>
					<div id='IdeA'></div>
				</div>								
			</div>			
		</div>
	</div>
	<div id='OtherS'></div>
    </div>
    
	<script charset='utf-8'>
 		//style the pagestyle the pagestyle the pagestyle the page
		//basic 
		var w =screen.width;
		          var ccontentw= w - 520;
		    var icontentprojectw=ccontentw-380;
		var leftw=(w-ccontentw)/2;
		          
		//center
		$('#CenteR_content').width(ccontentw);
		        $('#CenteR_projectidea').width(icontentprojectw);
		//left
	           $('#LefT').width(leftw);
	           
		//top
		$('#ToP_content').width(ccontentw);

		//others
		$('#OtherS').width(w-260);							
	</script>	 							    		

<script src="<?php echo ROOTJSOTHERSDIR.'public.js' ?>"></script>


		<script src="<?php echo ROOTJSOTHERSDIR.'home.js' ?>"></script>
	      <script src="<?php echo ROOTJSOTHERSDIR.'home/home.js' ?>"></script>
         <script src="<?php echo ROOTJSOTHERSDIR.'home/top.js' ?>"></script>
    <script src="<?php echo ROOTJSOTHERSDIR.'home/left.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/me.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea/create.js' ?>"></script>

<script src="<?php echo ROOTJSOTHERSDIR.'home/center/me/avatar.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/me/avatar_clear.js' ?>"></script>


<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/create/menu/create.js' ?>"></script>
<script src="<?php echo ROOTOTHERSDIR.'html/home/idea/show/basic/show.js' ?>"></script>
<script src="<?php echo ROOTOTHERSDIR.'html/home/idea/show/search/show.js' ?>"></script>
<script src="<?php echo ROOTOTHERSDIR.'html/home/idea/show/basic/loadMore.js' ?>"></script>

<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea/delete.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea/tag.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea/prepr.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'home/center/idea/prepr_imageclear.js' ?>"></script>

<script src="<?php echo ROOTOTHERSDIR.'include/part/mime/js/recommend.js' ?>"></script>
<script src="<?php echo ROOTJSOTHERSDIR.'public/social/follow.js' ?>"></script>

<script src="<?php echo ROOTOTHERSDIR.'include/part/idea/show/js/public.js' ?>"></script>
</body>
</html>