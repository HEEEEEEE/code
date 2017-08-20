<?php 
//ajax return ajax return ajax return ajax return ajax return
function ajaxreturn($return){
	echo $return;
	exit();
}
//his back his back his back his back his back 
//url turn url turn url turn url turn url turn
function urlturn($url,$time=0,$dy='none',$tip='',$color='black',$top='0',$left='0'){
	echo"
	<style type='text/css'>
	#php_urlturn
	{
	display:$dy;
	position:absolute;top:$top;left:$left;
	border-width:0;
	background-color:;
	color:$color;
	font-size:22.5px;
	}
	</style>
	";
	echo"<div id='php_urlturn'>$tip</div>";
	echo
	"<script>
	function turnurl(){
	location.href='$url';};
	setTimeout('turnurl()',$time);
	</script>";
exit();	
}
//url turn url turn url turn url turn url turn

		/*Open the session in each.php
		session_start();
		*/
//Close the session
function destroySN(){
	if(session_start()){
		session_destroy();
	}
}

/*Open the cookie in signup.php or login.php
 setcookie();
*/
//Close the cookie
function destroyCE(){
	setcookie('userid','',mktime()-1,'/');
	setcookie('username','',mktime()-1,'/');
	setcookie('uniqid','',mktime()-1,'/');
	destroySN();
	$url=ROOTOTHERSDIR.'index.php';
	$time=0;
	$dy='block';
	$tip='signing out...';
	$color='black';
	urlturn($url,$time,$dy,$tip,$color);
}

/*when user post the data to mysql should be escape 
 */
function escapeDtoM($str){
	if(get_magic_quotes_gpc()){
		return $str;
	}
	else{
		mysql_real_escape_string($str);
		return $str;
	}
}

/*   is login is login is login is login is login
 *      two situations
 *          one the man in process
 *               use the part to custom
 * two the man in signup.php or login.php
 *    use the function exiting to HEEEEEEEEEE.php
 */
function islogSL(){
	if(isset($_COOKIE['username'])){
		urlturn
		(
			(ROOTOTHERSDIR.'index.php')
		);	
	}
}
/*is dangerous operation is dangerous operation is dangerous operation
 */
?>