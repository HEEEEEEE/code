<?php 
if($_GET['action']=='idea_comment'){
	//header coustom
	header('Content-Type:text/html;charset=utf-8');
	//Include each
	require substr(dirname(__FILE__),0,-20).'/include/each.php';
	
	$search_count=sql_search("SELECT
			     COUNT(id)
		            AS
			     num
		         FROM
			     he_ideacomment
		           WHERE
			     iid='{$_POST['iid']}'
		
	");
	if($search_count['num']==0){
		$commentNum='';
	}else{
		$commentNum='('.$search_count['num'].')';
	}
	
?>
<div id='CommenT'>
	<div id='CommenT_main'>
		<div id='CommenT_maincenter'>
			<div id='CommenT_con'>
				<div id='CommenT_confra'>
					<div id='CommenT_confracenter'>
						<div class='comment-basic' id='CommenT_basictitle'>评论</div>
						<div class='comment-basic' id='CommenT_basicnum'><?php echo $commentNum; ?></div>
					</div>		
				</div>			
				<div id='CommenT_concon'>
					<div id='CommenT_conconcenter'>		
						<div id='CommenT_write'>
							<?php if($_COOKIE['userid']){?>
								<div id='CommenT_writesignye'>
									<dl class='comment-writesignyetop' >
										<dt id='CommenT_writesignye_enteralbetips' class='contentEditableTips'>
											<span>有什么想法</span>
										</dt>
										<dt id='CommenT_writesignye_enteralbecont'>
											<span id='CommenT_writesignye_enteralbe' class='comment-enteralbe'>还可以输入:</span><span id='CommenT_writesignye_enteralbenum' class='comment-enteralbe contentEditableNum'>125</span>
										</dt>									
									</dl>
									<dl class='comment-writesignyecenter' >
										<dt class='comment-writesignyecentercon' >
											<span data-holder='comment-placeholder'  data-parents='CommenT_writesignye' contentEditable='true' spellcheck='false' data-placeholder-default='有什么想法' id='CommenT_writesignyebox' class='comment-placeholder comment-box contentEditable'></span>
										</dt>
									</dl>
									<dl class='comment-writesignyebottom' >
										<dt class='comment-writesignyedone'>
											<span id='CommenT_writesignyedonecon'>评论</span>
										</dt>									
									</dl>
								</div>								
							<?php }else{?>
								<div id='CommenT_writesignno'>登录后再评论!</div>
							<?php }?>
						</div>
						<div id='CommenT_read'>
						<?php if($search_count['num']==0){?>
							<div id='CommenT_readno'>
								<div id='CommenT_readnocon'>沙发的位置空着呢</div>
							</div>
						<?php }else{?>
							<div id='CommenT_readtype'>新鲜出炉：</div>
							<div id='CommenT_readye'>
								<?php 
								$result=sql("SELECT
									            id,iid,commenthid,con,avatar,name,createtime
									      FROM
									            he_ideacomment
									         WHERE
					                                                            iid='{$_POST['iid']}'
									      ORDER BY
										createtime
									  DESC
								");			
								?>
								<?php 
									$html=array();
									while (!!$search=sql_searchall($result)){
												$html['id']=htmlF($search['id']);
											$html['commenthid']=htmlF($search['commenthid']);
										$html['iid']=htmlF($search['iid']);			
										
										$html['con']=htmlF($search['con']);
										
										$html['avatar']=htmlF($search['avatar']);
										$html['name']=htmlF($search['name']);
										
										$html['createtime']=htmlF($search['createtime']);			
							
										//avatar
										$avatar=strlen(trim($html['avatar']));
										if($avatar > 0){
											$avatarimg=$html['avatar'];
											$avatar_back='background-color:rgba(0,0,0,0.125);';				
											$avatarh='33px';
										}
										else{
											$avatarimg='html/mE/idea/show/avatar.png';
											$avatar_back='';				
											$avatarh='28px';
										}
									 							
								?>
								<div id="<?php echo 'IdeA_comment'.$html['id']; ?>" class='idea_comment'>
									<div class='idea_comment-top'>
										<div class='idea_comment-top-1 idea_comment-top-div' style='<?php echo $avatar_back;?>'>
											<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['commenthid'].'&mine=close';?>'>
												<img style="height:<?php echo $avatarh; ?>" alt='' src="<?php echo ROOTOTHERSDIR.$avatarimg;?>" />
											</a>
										</div>
										<div class='idea_comment-top-2 idea_comment-top-div'>											
											<a href='<?php echo ROOTOTHERSDIR.'me.php?hid='.$html['commenthid'].'&mine=close';?>'>
												<span><?php echo $html['name'];?></span>
											</a>
										</div>								
									</div>
										
									<div class='idea_comment-center'>
										<span class='idea_comment-wordsfra' ></span>
										<span class='idea_comment-words' ><?php echo $html['con']; ?></span>																																																	     
									</div>
									
									<div class='idea_comment-others'>
										<div class='idea_comment-others-1' style='background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/comment/comment_arrow.png'; ?>");'></div>
									</div>
								</div>			
								<?php 
									}
									freeRT($result);
								?>
													
							</div>	
						<?php }?>					
						</div>					
					</div>
				</div>		
			</div>
<!-- 			<div id='CommenT_fra'> -->
<!-- 				<div id='CommenT_fracenter'></div>	 -->
<!-- 			</div> -->
		</div>
		<div id='CommenT_mainright'>
			<div id='CommenT_mainrightclose' style='background-image:url("<?php echo ROOTOTHERSDIR.'html/mE/idea/comment/close_white.png'; ?>");'></div>
		</div>
	</div>	
</div>
<script charset='utf-8'>
// 	var p=$('#SociaL').offset();
// 	var pb=(p.top);
// 	var bh=document.documentElement.clientHeight; 	
//  	var thbottom=bh - pb - 35 + 57.5;
//  	$('#CommenT_main').css('top',pb+'px');					   		
</script>
<?php
}else{
	exit('idea_commentactionfail');	
}
?>
