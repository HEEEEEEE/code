<?php 
if($_GET['action']=='idea_showrecommend'){
	//require each
	require substr(dirname(__FILE__),0,-27).'/include/each.php';
	//infor to the browser infor to the browser infor to the browser
	/*infor to the browser:select the infor*/
	//BASIC:minid
	$result_minid=sql_search("SELECT
		          MIN(id)
			AS
			minid
		      FROM
		          he_idea
		   WHERE
		          timestate=1
	");
	$minid=$result_minid['minid'];
	//BASIC:idnum

	//BASIC:maxid
	$result_maxid=sql_search("SELECT
		          MAX(id)
			AS
			maxid
		      FROM
		          he_idea
		   WHERE
		          timestate=1
	");
	$maxid=$result_maxid['maxid'];	
	$maxid=$maxid-2;
	//BASIC:minid maxid
	if($minid==0){
		$minid=1;
		$maxid=$minid+2;
	}else{
		$minid=mt_rand($minid,$maxid);
		$maxid=$minid+2;
	}
	$result=sql("SELECT
		            id,hid,lans,image,firstentertype,avatar,name,processstate
		        FROM
		            he_idea
		     WHERE
			timestate=1
		     AND
			processstate!=0
		        AND
		            id BETWEEN $minid AND $maxid 
		ORDER BY
		         createtime
		           	        DESC
	");	
}
?>
<div id="RecommenD" >
	<div id="RecommenD_create" >
		<dl id='RecommenD_create_dl1'><dt id='RecommenD_create_dl1dt1' ><span>首页空空如也，看起来你还没有露一手!!!</span></dt></dl>	
		<dl id='RecommenD_create_dl2'><dt id='RecommenD_create_dl2dt1' >
		<span title='露一露' id='RecommenD_create_dl2dt1span1' class='create' style='background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/create.png';?>)'></span></dt></dl>			
	</div>
	<div id='RecommenD_frame'>
		<dl id='RecommenD_frame_dl1'><dt id='RecommenD_frame_dl1dt1'><span></span></dt></dl>						
	</div>	
	<div id="RecommenD_content" >
		<div id="RecommenD_content_top" >
			<dl><dt id="RecommenD_content_topdl1dt1" ><span>或&nbsp;</span><span id="RecommenD_content_topdl1dt1_explore" title='探索更多...'>探索&nbsp;</span><span>这些...</span></dt></dl>		
		</div>
			
<div id="RecommenD_content_center" >
	<?php 
	/*infor to the browser:echo the infor*/
		$html=array();
		while (!!$search=sql_searchall($result)){
					$html['id']=htmlF($search['id']);
				$html['hid']=htmlF($search['hid']);
			$html['lans']=htmlF($search['lans']);			
			$html['image']=htmlF($search['image']);
			$html['firstentertype']=htmlF($search['firstentertype']);						
			$html['destorytime']=htmlF($search['destorytime']);
			$html['processstate']=htmlF($search['processstate']);										
			//first
			$f=$html['firstentertype'];
			$imagep=strlen(trim($html['imagepre']));
			$lansp=strlen(trim($html['lanspre']));
			if($f==1){
				$lans='block';		
				$image='none';
			}else if($f==2){
				$lans='none';
				$image='block';
			}
				
			//time
			$f=strtotime($html['destorytime']);
			$n=time();
			$b=$f-$n;
			if(($b/86400)>1){
				$b=floor($b/86400);
				$b=$b.'天';
			}else{
				if(($b/3600)>1){
					$b=floor($b/3600);
					$b=$b.'小时';
				}else{
					if(($b/60)>1){
						$b=floor($b/60);
						$b=$b.'分钟';
					}else{
						$b=$b.'秒';
					}
				}
			}			
	?>
	<div class='idea' data-ideaid="<?php echo $html['id']; ?>">
		<div class='idea-top'></div>		
		<div class='idea-right' ></div>
		<div class='idea-center' >
			<div class='idea-center-con' >
				 <div style='display:<?php echo $lans; ?>' class='idea-center-con-1' >
				 	<span class='idea-words' ><?php echo $html['lans']; ?></span>						
				</div>
				 <div style='display:<?php echo $image; ?>' class='idea-center-con-2' >
					<div class='idea-image'><span class='idea-image-con' style='background-image:url("<?php echo ROOTOTHERSDIR.$html['image']; ?>");'></span></div>						
				</div>
			</div>
			<div class='idea-center-enterfra' data-ideaid="<?php echo $html['id']; ?>">
			</div>					
			<div style='display:none' class='idea-center-enter'>
				<a href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>' >
					<span title="进入露露" data-ideaid="<?php echo $html['id']; ?>" class="idea-center-entercon" style="background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/enter.png';?>);"></span>
				</a>
			</div>																																	     
		</div>
		<div class='idea-bottom' ></div>
		<div class='idea-left' ></div>
		<div class='idea-others' >
			<div class='idea-others-1' ></div>
				<div class='idea-others-2' >					
					<?php 
					if($html['processstate']=='1'){
					?>
						<div class='idea-others-timeprocessing' style='background-image:url("<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/processstate_processing.png'; ?>");'>
							<a class='idea-others-timeprocessing-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>加工中</span></a>					             
						</div>
					<?php										
					}else if($html['processstate']=='2'){
					?>
						<div class='idea-others-timeend' style='background-image:url("<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/processstate_end.png'; ?>");'>
						          <a class='idea-others-timeend-con' href='<?php echo ROOTOTHERSDIR.'mE.php?hid='.$html['hid'].'&mine=close&ideaid='.$html['id'];?>'><span>完工</span></a>					             
						</div>										
					<?php 
					}
					?>
				</div>									     
		</div>																				
	</div>	
	<?php 
		}
		freeRT($result);
	?>
</div>

		<div id="RecommenD_content_bottom" >
			<dl id='RecommenD_content_bottom_dl1'><dt id='RecommenD_content_bottom_dl1dt1' ><span title='换一组' id='RecommenD_content_anotherground'  style='background-image:url(<?php echo ROOTOTHERSDIR.'include/part/idea/show/data/image/anotherground.png';?>)'></span></dt></dl>		
		</div>										
	</div>
</div>



