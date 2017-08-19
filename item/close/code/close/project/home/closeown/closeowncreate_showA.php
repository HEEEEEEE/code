<?php
if($_GET['action']=='close_show'){
//Include each
require substr(dirname(__FILE__),0,-14).'/include/each.php';
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
	$data['equal']=string_filterequal($_POST['equal'],0,25);
	//filter for information filter for information filter for information
	
	//Save the infor Save the infor Save the infor
	//Save the infor Save the infor Save the infor

	//infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql_search("SELECT
			     Close_id,Close_name,Close_face,Close_des
			   FROM
			     He_close
			  WHERE
			     Close_hid='{$_COOKIE['userid']}'
			     {$data['equal']}
			        {$data['search']}
			  	{$data['sort']}
		           ");
}	
?>
<!-- <div id='CloseprocinsidE'> -->
		<?php
		/*infor to the browser:echo the infor*/
		$html=array();
		$html['id']=htmlF($result['Close_id']);            
	            $html['name']=htmlF($result['Close_name']);
	            $html['face']=htmlF($result['Close_face']);
		?>
		<div id="<?php echo 'ClosediV'.$html['id']; ?>" class='closediv'>
		<div class='closediv_div1'>
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
			     	<span title="Enter the information" id="ClosE_infor" class="close_part" style="background-image:url(<?php echo ROOTOTHERSDIR1.'frame/close/mark_infor.png';?>);"></span>
			     	</a>
			     </dt>		     
			</dl>
		</div>			
		<div class='closediv_div2'>
			<dl class='closediv_div2dl1'>
			     <dt id='<?php echo 'ClosesettingS'.$html['id'];?>' class='closesettings' title='more...' style="background-image:url(<?php echo ROOTOTHERSDIR1.'frame/close/more.png';?>);"></dt>	     
			</dl>			     
		</div>															
		</div>