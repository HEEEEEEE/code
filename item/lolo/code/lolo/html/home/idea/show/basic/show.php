<?php 
if($_GET['action']=='idea_showown'){
	//require each
	require substr(dirname(__FILE__),0,-25).'/include/each.php';
	//include function
	include ROOTDIR.'include/engine/fu/fu_time.php';
	
	//infor to the browser infor to the browser infor to the browser
	//top
	$search_humans=sql_search("SELECT
			          lolotop
			 FROM
			          he_humans
		          WHERE
			          id='{$_COOKIE['userid']}'
	");
	if(preg_match("/[:]/",$search_humans['lolotop'])){
		//first
		$search_humanswhololo='their';
				
		$expdata=explode(':',$search_humans['lolotop']);
		
		$search=sql_search("SELECT
				followinghid
			        FROM
				he_social
			        WHERE
				hid='{$_COOKIE['userid']}'
		");
		if($search){
			$pattern='/['.$expdata[0].']/';
			if(preg_match($pattern,$search['followinghid'])){
				$search=sql_search("SELECT
						id
					     FROM
						he_idea
					 WHERE
					            hid=$expdata[0]
					     AND
					            id=$expdata[1]
				");
				if($search){
					//second
					$search_humansloloexist=1;					
				}else{
					//second
					$search_humansloloexist=0;					
				}
			}else{
				//second
				$search_humansloloexist=0;				
			}
		}else{
			//second
			$search_humansloloexist=0;			
		}
	}else if($search_humans['lolotop']==''){
		//second
		$search_humansloloexist=0;		
	}else{
		//first
		$search_humanswhololo='mine';	
			
		$search=sql_search("SELECT
			            id
	                              FROM
                                                he_idea
	        		  WHERE
	        		            hid='{$_COOKIE['userid']}'
	        		      AND
	        		            id='{$search_humans['lolotop']}'
	        	");
		if($search){
			//second
			$search_humansloloexist=1;			
		}else{
			//second
			$search_humansloloexist=0;			
		}
	}		
	
	//he_humans
	$search_lolostate=sql_search("SELECT
		         	          myloloviewstate
		                  FROM
		                      he_humans
		                  WHERE
		                      id='{$_COOKIE['userid']}'                                                         
	");
	if($search_lolostate['myloloviewstate']=='1'){
		$lolostatetitle='总是隐藏我的露露';
		$lolostateclass='idea-myloloviewstate idea-myloloviewstate1';
		
		
		$lolohideD='display:block;';
		$loloshowD='display:none;';
		
		$lolomineD='display:block;';
		
		$lolominespiltstate='1';
	}else{
		$lolostatetitle='总是显示我的露露';
		$lolostateclass='idea-myloloviewstate idea-myloloviewstate0';

		
		$lolohideD='display:none;';
		$loloshowD='display:block;';		
		
		$lolomineD='display:none;';
		
		$lolominespiltstate='0';			
	}
?>
		
		<?php if($search_humansloloexist=='1'){?>	
			<div class='whololotip'>
				<div class='whololopetiole toplolopetiole' style="display:block;">
					<span class='whololo toplolo'>置顶的露露</span>
				</div>
				
				<div class='whololopetiole mylolopetiole' style="display:none;">
					<span class='whololo mylolo'>我的露露</span>
				</div>
				
				<div class='whololopetiole theirlolopetiole' style="display:none;">
					<span class='whololo theirlolo'>关注的露露</span>
				</div>
			</div>
		<?php }else if(($_POST['followingnum']!='0')&&($_POST['ideanum']!='0')){ ?>
			<div class='whololotip'>
				<div class='whololopetiole mylolopetiole' style="<?php echo $lolohideD; ?>">
					<span class='whololo mylolo'>我的露露</span>
				</div>
				<div class='whololopetiole theirlolopetiole' style="<?php echo $loloshowD; ?>">
					<span class='whololo theirlolo'>关注的露露</span>
				</div>
			</div>							
		<?php }else if(($_POST['followingnum']=='0')&&($_POST['ideanum']!='0')){ ?>
			<div class='whololotip'>
				<div class='whololopetiole mylolopetiole' >
					<span class='whololo mylolo'>我的露露</span>
				</div>
			</div>									
		<?php }else if(($_POST['followingnum']!='0')&&($_POST['ideanum']=='0')){ ?>
			<div class='whololotip'>
				<div class='whololopetiole theirlolopetiole' >
					<span class='whololo theirlolo'>关注的露露</span>
				</div>
			</div>									
		<?php }?>
		
		
					
		<?php if(($search_humanswhololo=='mine')&&($search_humansloloexist=='1')){?>	
			<div id='IdeA_top'>
			<?php 
			require ROOTDIR.'html/home/idea/show/basic/topmine.php';
			?>
			</div>
			<div id='IdeA_spilttopandnot'></div>					
		<?php }else if(($search_humanswhololo=='their')&&($search_humansloloexist=='1')){ ?>				
			<div id='IdeA_top'>
			<?php 
			require ROOTDIR.'html/home/idea/show/basic/topnotmine.php';
			?>
			<div id='IdeA_spilttopandnot'></div>
			</div>			
		<?php }?>
		
		
		
		<?php if($_POST['followingnum']=='0' ||$_POST['followingnum']==''){?>	
			<div id='IdeA_mime'>
			<?php 
			require ROOTDIR.'html/home/idea/show/basic/mine.php';
			?>
			</div>
			<input style='display:none' type='hidden' id='Idea_loadMoreHidden' value='001'>		
		<?php }else{ ?>						
		<div id='IdeA_mineshoworhidden'>
			<div class='<?php echo $lolostateclass; ?>' id='IdeA_myloloviewstate' title='<?php echo $lolostatetitle; ?>'>
			</div>
			<img class='idea-mineshoworhide' id='IdeA_mineshow' title='隐藏我的露露' src='<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/myloloshow.png';?>' style="<?php echo $lolohideD; ?>" />
								
			<img class='idea-mineshoworhide' id='IdeA_minehide' title='显示我的露露' src='<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/mylolohide.png';?>' style="<?php echo $loloshowD; ?>" />
		</div>
		<div id='IdeA_mine' style="<?php echo $lolomineD; ?>">
			<?php 
			require ROOTDIR.'html/home/idea/show/basic/mine.php';
			?>
			<div data-state='<?php echo $lolominespiltstate; ?>' id='IdeA_spiltmineandnot'></div>
		</div>
		
		<div id='IdeA_notmine'>
			<?php 
			require ROOTDIR.'html/home/idea/show/basic/notmine.php';
			?>		
		</div>
		<input style='display:none' type='hidden' id='Idea_loadMoreHidden' value='002'>		
		<?php }?>
<?php }else{ ?>

	<?php }?>	
			


	
	
	
	
	
	
	
	
	
	
	
	