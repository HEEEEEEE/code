<?php 
//Include each
require dirname(__FILE__).'/include/each.php';
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />	
<?php 
require ROOTDIR.'include/part/title.php';
?>
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'public.css' ?>" />	
<link type='text/css' rel='stylesheet' href="<?php echo ROOTCSSOTHERSDIR.'index.css' ?>" />	
<script src="<?php echo ROOTJSOTHERSDIR.'jquery-2.1.3.min.js' ?>" charset='utf-8'></script>	
</head>

<body>
<div style='display:none;'><?php //HiddeN for speacil ?>
	<dl>			
	<dt><input type='hidden' id='HiddeN_rootdir' value='<?php echo ROOTOTHERSDIR;?>' /></dt>
	</dl>			
</div>
<div id='IndextoP'>
<?php 
require ROOTDIR.'include/part/top.php';
?>
<?php 
require ROOTDIR.'index/timetodelete_website/timetodelete.php';
?>	
</div>
<?php
if(!(isset($_COOKIE['username']))){
	require ROOTDIR.'process/signin.php';
} 

?>
<?php
if(!(isset($_COOKIE['username']))){
	require ROOTDIR.'process/signup.php';
} 

?>		
</body>
<script src="<?php echo ROOTJSOTHERSDIR.'index.js' ?>" charset='utf-8'></script>
</html>