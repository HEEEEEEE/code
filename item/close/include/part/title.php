<?php 
if(isset($_COOKIE['username'])){
	echo "<title>OCLOCLO {$_COOKIE['username']}</title>";
}
else{
	echo "<title>OCLOCLO</title>";
}
?>
<link rel="shortcut icon" href="<?php echo ROOTDATAOTHERSDIR.'include/image/title/orange/title.ico'; ?>" />