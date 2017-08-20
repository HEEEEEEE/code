<?php
/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 	*
      * 
 * 
 */
//basic:each
require dirname(__FILE__).'/include/each.php';
	//Check the login state
	isloginPT();
		//update the idea
		update_idea();
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<!DOCTYPE HTML>
<html id='HtmL_works'>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<?php
// lolo num count lolo num count lolo num count lolo num count lolo num count
$search=sql_search("SELECT
	       id,processstate
               FROM
	      he_idea
           WHERE
	      hid='{$_COOKIE['userid']}'
               AND
	      timestate=1
	   ORDER BY
	        createtime
		    DESC
");
if($search['id']){
$processstate=$search['processstate'];
}else{
$processstate='no';
}
?> 

<?php 
if(($processstate=='no')||($processstate==2)){
?>

	<?php 
	require ROOTDIR.'html/works/part/noidea.php';
	?>
			
<?php
}else{
?>

	<?php 
	require ROOTDIR.'html/works/part/idea.php';
	?>
	
<?php 
}
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
</html>	
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>