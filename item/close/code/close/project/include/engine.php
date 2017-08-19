<?php
//ajax return ajax return ajax return ajax return ajax return
function ajaxreturn($return){
	echo $return;
	exit();
}
//his back his back his back his back his back
function hisback(){
echo
"<script>
	history.go(-1);	
</script>";
exit();
} 
//url turn url turn url turn url turn url turn
function urlturn($url,$time=0,$dy='none',$tip='',$color='',$top='',$left=''){
	echo"
	<style type='text/css'>
	#php_urlturn
	{
	display:$dy;
	position:absolute;top:$top;left:$left;
	border:2.5px solid black;
	border-width:0 5px;
	background:orange;
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
	$url=ROOTOTHERSDIR1.'index.php';
	$time=0;
	$dy='block';
	$tip='signing out...';
	$color='black';
	urlturn($url,$time,$dy,$tip,$color);	

}

/*when user post the data need insert into mysql should be escape
 *two points:the user post
 *           insert into mysql
 * 
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

/*is login is login is login is login is login
 */
function isloginPT(){
	if(!(isset($_COOKIE['username']))){
		urlturn((ROOTOTHERSDIR1.'index.php'));
	}	
}
//is dangerous operation is dangerous operation is dangerous operation is dangerous operation is dangerous operation
/*is MYSQL's uniqid == $_COOKIE['uniqid'] [the first step center
 *                     the uniqid has been created in signup.php
 *
 *                            destory the cookie[the second step
 *        the cookie has been created in signup.php or login.php
 * 
 *                              exit to login.php[the third step
 */
function cUniqid(){
	$serverU=search_uniqid();
	$cookieU=$_COOKIE['uniqid'];
	if($serverU['Humans_uniqid']!=$cookieU){
		urlturn((ROOTOTHERSDIR1.'process/signout.php'));	
	}
}
//is dangerous operation is dangerous operation is dangerous operation is dangerous operation is dangerous operation


//Filter the html from the database will write into the Page
function htmlF($_str){
	$_str= htmlspecialchars($_str);
	return $_str;
}
?>