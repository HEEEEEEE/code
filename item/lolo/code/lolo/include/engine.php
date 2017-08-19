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
function urlturn($url,$time=0,$dy='none',$tip='',$color='black',$top='0',$left='0'){
	echo"
		<style type='text/css'>
		#php_urlturn{
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
			location.href='$url';
		};
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
	
	setcookie('usercreatehabbit','',mktime()-1,'/');	
	destroySN();
	$url=ROOTOTHERSDIR.'index.php';
	$time=0;
	$dy='block';
	$tip='signing out...';
	$color='black';
	urlturn($url,$time,$dy,$tip,$color);
}

/*when user post the data to mysql should be escape 
 *two points:the user post
 *           insert into mysql
 * 
 */

function escapeDtoM($str){
	if(get_magic_quotes_gpc()){
		return $str;
	}
	else{
		return mysql_real_escape_string($str);
	}
}

/*   is login is login is login is login is login
 *      two situations
 *          one the man has been signed in
 *               to the home
 * two the man not sign in
 *               to the index
 */
function islogin(){
	if(!(isset($_COOKIE['userid']))){
		urlturn((ROOTOTHERSDIR.'index.php'));
	}else{
		urlturn((ROOTOTHERSDIR.'home.php'));		
	}
}
function isloginSL(){
	if(isset($_COOKIE['userid'])){
		urlturn((ROOTOTHERSDIR.'home.php'));	
	}
}
function isloginPT(){
	if(!(isset($_COOKIE['userid']))){
		urlturn((ROOTOTHERSDIR.'index.php'));
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
	if($serverU['uniqid']!=$cookieU){
		urlturn((ROOTOTHERSDIR.'signout.php'));	
	}
}
//is dangerous operation is dangerous operation is dangerous operation is dangerous operation is dangerous operation


//Filter the html from the database will write into the Page
function htmlF($_str){
	$_str= htmlspecialchars($_str);
	return $_str;
}
?>