<?php 
//Include each

require substr(dirname(__FILE__),0,-25).'include/each.php';
	
$url=ROOTDIR1.'index.php';
if(file_exists($url)){
	//delete the frame
	unlink($url);
	//delete the cookie
	setcookie('userid','',mktime()-1,'/');
	setcookie('username','',mktime()-1,'/');
	setcookie('uniqid','',mktime()-1,'/');	
	echo 'Byebye';
	exit();
}
else{
	//delete the frame
	//delete the cookie
	setcookie('userid','',mktime()-1,'/');
	setcookie('username','',mktime()-1,'/');
	setcookie('uniqid','',mktime()-1,'/');	
	echo 'Byebyf';
	exit();	
}		            	
?>