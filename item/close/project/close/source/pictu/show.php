<?php
if($_GET['action']=='source_show'){
//Include each
require substr(dirname(__FILE__),0,-19).'/include/each.php';
//Check the login state
// isloginPT();
//is dangerous operation check the uniqid
cUniqid();

	//filter for information filter for information filter for information
	//Include the function
	include PROJECTDIR.'include/engine/fu/fu_string.php';
	$data=array();
	$data['aid']=string_filterid($_POST['aid'],0,12);	
	$data['cid']=string_filterid($_POST['cid'],0,12);
	$data['sort']=string_filtersortsource($_POST['sort']);
	$data['search']=string_filtersearchsource($_POST['search'],0,25);
	//filter for information filter for information filter for information

	//Save the infor Save the infor Save the infor
	/*Save the infor:update the album's sort custom by user*/
	$result_sort=sql("UPDATE
		          He_sortsource1
		         SET
		          sort='{$data['sort']}'
		       WHERE
		     aid='{$data['aid']}'
		         AND
			cid='{$data['cid']}'
			AND
			    hid='{$_COOKIE['userid']}'
		     ");
	/*Save the infor:update the close's sort custom by user*/
	//Save the infor Save the infor Save the infor	
	
	//infor to the browser infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
			     id,name,url,des
			   FROM
			     He_casource1
			  WHERE
			     aid='{$_POST['aid']}'
			   AND
			 cid='{$_POST['cid']}'
			AND
			 hid='{$_COOKIE['userid']}'
			 {$data['search']}
			            {$data['sort']}
		           ");

		/*echo the source's number*/
		$html1=array();
		$search=sql_search("SELECT
				COUNT(id)
			           AS
			         num
			        FROM
				He_casource1
			         WHERE
		     aid='{$data['aid']}'
		         AND
			cid='{$data['cid']}'
			    AND
			hid='{$_COOKIE['userid']}'
		{$data['search']}
			{$data['sort']}		
		");
		$html1['source_num']=htmlF($search['num']);		
		
}	
?>
	<?php
	/*infor to the browser:echo the infor*/
	$html=array();
	while(!!$search = sql_searchall($result)){
		$html['id']=htmlF($search['id']);            
	            $html['name']=htmlF($search['name']);
	            $html['url']=htmlF($search['url']);
	            $html['des']=htmlF($search['des']);	            
	?>
	<div id="<?php echo 'SourcE'.$html['id']; ?>" class="source">
		<div id="" class="source-content" style="background-image: url('<?php echo ROOTOTHERSDIR1.$html['url']; ?>')" data-src="<?php echo ROOTOTHERSDIR1.$html['url']; ?>"></div>
		<div id="" class="source-name">
			<span class="source-name-show" title='<?php echo $html['name']; ?>'><?php echo $html['name']; ?></span>
		</div>
		<div style='display:none;'>
			<dl>
			<dt><input type='hidden' value="<?php echo $html['des']; ?>" class='source-des-hide' /></dt>			
			<dt><input type='hidden' class='HiddeN_projectsearchitemnum' value='<?php echo $html1['source_num'];?>' /></dt>	
			</dl>				
		</div>
	</div>									
            <?php 
             }
     	 freeRT($result);
     	 /*infor to the browser:echo the infor*/
     	 //infor to the browser infor to the browser	     	 
            ?>											