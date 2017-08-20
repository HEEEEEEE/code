<?php
if($_GET['action']=='close_show'){
//Include each
require substr(dirname(__FILE__),0,-12).'/include/each.php';
//Check the login state
isloginPT();
//is dangerous operation check the uniqid
cUniqid();
	//filter for information filter for information filter for information
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';	
	$data=array();
	$data['sort']=string_filtersortclose($_POST['sort']);
	$data['search']=string_filtersearchclose($_POST['search'],0,25);
	//filter for information filter for information filter for information
	
	//Save the infor Save the infor Save the infor
		/*Save the infor:update the close's sort custom by user*/
		$result_sort=sql("UPDATE
				He_sortclose
			        SET
			            Sort_sort='{$data['sort']}'
			      WHERE
				Sort_hid='{$_COOKIE['userid']}'
			   ");
		/*Save the infor:update the close's sort custom by user*/
	//Save the infor Save the infor Save the infor

	//infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
			     Close_id,Close_name,Close_face,Close_des
			   FROM
			     He_close
			  WHERE
			     Close_hid='{$_COOKIE['userid']}'
			     {$data['search']}
			  	{$data['sort']}
		           ");
		/*infor to the browser:select the infor*/
		/*echo the source's number*/
		$html1=array();
		$search=sql_search("SELECT
				COUNT(Close_id)
			        AS
				num
			        FROM
				He_close
			        WHERE
				Close_hid='{$_COOKIE['userid']}'
			     {$data['search']}				     			
			     ");
		$html1['source_num']=htmlF($search['num']);		
}	
?>
<!-- <div id='CloseprocinsidE'> -->
		<?php
		/*infor to the browser:echo the infor*/
		$html=array();
		$n=0;
		while(!!$search = sql_searchall($result)){
			$html['id']=htmlF($search['Close_id']);            
		            $html['name']=htmlF($search['Close_name']);
		            $html['face']=htmlF($search['Close_face']);
		            $html['des']=htmlF($search['Close_des']);
		$n++;
		?>
		<div id="<?php echo 'ClosediV'.$html['id']; ?>" class='closediv'>
			<dl class='closediv_dl1'>
			     <dt class='closediv_dl1dt1'>
			     <img class='closeface' alt='' src="<?php echo ROOTOTHERSDIR1.$html['face'];?>" />
			     </dt>
			</dl>
			<dl class='closediv_dl2' >
			     <dt>
			     	<span class='closename' title='<?php echo $html['name'];?>'><?php echo $html['name'];?></span>
			     </dt>
			     <dt class='closemark' style="background-image:url(<?php echo ROOTOTHERSDIR1.'frame/close/mark.png';?>);">
			     	<a href='<?php echo PROJECTOTHERSDIR.'close/album.php?closeid='.$html['id'];?>'>
			     	<span title="Enter the source" id="ClosE_sourc" class="close_part" style="background-image:url(<?php echo ROOTOTHERSDIR1.'frame/close/mark_sourc.png';?>);"></span>
			     	</a>
			     	<a href='<?php echo PROJECTOTHERSDIR.'close/info.php?closeid='.$html['id'];?>'>
			     	<span title="Enter the info" id="ClosE_infor" class="close_part" style="background-image:url(<?php echo ROOTOTHERSDIR1.'frame/close/mark_infor.png';?>);"></span>
			     	</a>
			     </dt>	     
			</dl>
			<dl class='closediv_dl3' style='display:none;'>
			     <dt><input type='hidden' value="<?php echo $html['des']; ?>" class='closedes' /></dt>	     
			</dl>
		<dl style='display:none;'>			
		<dt><input type='hidden' class='HiddeN_projectsearchitemnum' value='<?php echo $html1['source_num'];?>' /></dt>	
		</dl>										
		</div>
	            <?php 
	             }
	     	 freeRT($result);
	     	 /*infor to the browser:echo the infor*/
	     	 //infor to the browser infor to the browser	     	 
	            ?>											
<!-- </div> -->