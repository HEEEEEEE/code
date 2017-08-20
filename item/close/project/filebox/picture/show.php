<?php
if($_GET['action']=='filebox_show'){
//Include each
require substr(dirname(__FILE__),0,-16).'/include/each.php';
//Check the login state
// isloginPT();
//is dangerous operation check the uniqid
cUniqid();
	//infor to the browser infor to the browser infor to the browser
		/*infor to the browser:select the infor*/
		$result=sql("SELECT
			     Fileboxpic_id,Fileboxpic_path,Fileboxpic_name
			   FROM
			     He_fileboxpic
			  WHERE
			     Fileboxpic_hid='{$_COOKIE['userid']}'
			  ORDER BY
			     Fileboxpic_uptime
			     DESC
		           ");
}	
?>
<ol>
	<?php
	/*infor to the browser:echo the infor*/
	$html=array();
	while(!!$search = sql_searchall($result)){
		$html['id']=htmlF($search['Fileboxpic_id']);            
	            $html['source']=htmlF($search['Fileboxpic_path']);
	            $html['name']=htmlF($search['Fileboxpic_name']);
	?>
	<li id="<?php echo 'FileboX-source'.$html['id']; ?>" class="filebox-source">
		<div id="" class="filebox-source-content" style="background-image: url(<?php echo ROOTOTHERSDIR1.$html['source']; ?>)" data-src="<?php echo ROOTOTHERSDIR1.$html['source']; ?>"></div>
		<div id="" class="filebox-source-name">
			<span class="filebox-source-name-show"><?php echo $html['name']; ?></span>
		</div>
	</li>								
            <?php 
             }
     	 freeRT($result);
     	 /*infor to the browser:echo the infor*/
     	 //infor to the browser infor to the browser	     	 
            ?>											
</ol>