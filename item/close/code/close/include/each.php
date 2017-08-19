<?php
//Open the session
session_start();
/*Close the session in engine
destroySN();  
 */ 
/*Set the encoding
 *warnning:header() must be sent before any 'html' or  'echo' 
 */
header('Content-Type:text/html;charset=utf-8');

/*Set the absolute dir by constant 
 */
//root's name
$pattern="/[\/]/";
$dir=substr(dirname(__FILE__),0,-8);
if(preg_match($pattern,$dir)){
	$Edir=explode("/",$dir);
	$last=count($Edir)-1;
	if($Edir[$last]=='public_html'){
		define('ROOTNAME','http://'.$_SERVER['HTTP_HOST']);		
	}
	else{
		define('ROOTNAME','http://'.$_SERVER['HTTP_HOST'].'/'.$Edir[$last]);		
	}
}
else{
	$Edir=explode("\\",$dir);
	$last=count($Edir)-1;
	if($Edir[$last]=='public_html'){
		define('ROOTNAME','http://'.$_SERVER['HTTP_HOST']);		
	}
	else{
		define('ROOTNAME','http://'.$_SERVER['HTTP_HOST'].'/'.$Edir[$last]);		
	}
}
// define('ROOTNAME','http://'.$_SERVER['HTTP_HOST']);
//For website'root
define('ROOTDIR',substr(dirname(__FILE__),0,-7));
define('ROOTOTHERSDIR',ROOTNAME.'/');
//For process
define('ROOTPROCESSDIR',substr(dirname(__FILE__),0,-7).'process/');
define('ROOTPROCESSOTHERSDIR',ROOTNAME.'/process/');
//For css
define('ROOTCSSDIR',substr(dirname(__FILE__),0,-7).'css/1/');
define('ROOTCSSOTHERSDIR',ROOTNAME.'/css/1/');
//For data
define('ROOTDATADIR',substr(dirname(__FILE__),0,-7).'data/');
define('ROOTDATAOTHERSDIR',ROOTNAME.'/data/');
//For js
define('ROOTJSDIR',substr(dirname(__FILE__),0,-7).'js/');
define('ROOTJSOTHERSDIR',ROOTNAME.'/js/');
/*Include sql.php and engine.php
 */
require ROOTDIR.'include/sql.php';
require ROOTDIR.'include/engine.php';

/*MYSQL Connect Select Set Operate Close
 */
define('HOST','localhost');
define('USER','EconHyerd');
define('PASSWORD','Eulb0sseld5n2e');
define('DBNAME','heeeeeeeeet');
define('DBENCODING','SET NAMES UTF8');
connectMS();//Connect MYSQL
selectDB();//Select a database 
setDBE();//Set the encoding
/********Write a sql to MYSQL operate the return result*/
/*******Close MYSQL*/
?>