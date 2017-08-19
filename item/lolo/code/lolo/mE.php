<?php
/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 	*
      * 
 * 
 */
//basic:each
require dirname(__FILE__).'/include/each.php';
	//update the idea
	update_idea();

if((isset($_GET['hid']))&&(isset($_GET['mine']))){
?>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
<!DOCTYPE HTML>
<html id='HtmL_mE'>
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>



	<?php 
	if(!(isset($_GET['ideaid']))){	
	?>	
		<?php 
		require ROOTDIR.'html/mE/part/basic/basic.php';
		?>			
									
	<?php 
	}else if(isset($_GET['ideaid'])){
	?>
		<?php 
		require ROOTDIR.'html/mE/part/idea/idea.php';
		?>	
	<?php 
	}
	?>	
	
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>
</html>	
<?php //htmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtmlhtml?>				
<?php
}else{
	hisback();
}
?>