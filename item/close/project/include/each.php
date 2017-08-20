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
$pattern="/[www]/";
$dir=substr(dirname(__FILE__),0,-16);
if(preg_match($pattern,$dir)){
	$Edir=explode("www",$dir);
	$last=count($Edir)-1;
	$last=preg_replace("/[\\\\]/","/",$Edir[$last]);
	define('ROOTNAME','http://'.$_SERVER['HTTP_HOST'].$last);
}
else{
	$Edir=explode("public_html",$dir);
	$last=count($Edir)-1;
	$last=preg_replace("/[\\\\]/","/",$Edir[$last]);
	define('ROOTNAME','http://'.$_SERVER['HTTP_HOST'].$last);		
}
// define('ROOTNAME','http://'.$_SERVER['HTTP_HOST']);
//For website'root
define('ROOTDIR1',substr(dirname(__FILE__),0,-15));
define('ROOTOTHERSDIR1',ROOTNAME.'/');
//For project
define('PROJECTDIR',substr(dirname(__FILE__),0,-7));
define('PROJECTOTHERSDIR',ROOTNAME.'/project/');
//For project css
define('PROJECTCSSDIR',substr(dirname(__FILE__),0,-7).'css/1/');
define('PROJECTCSSOTHERSDIR',ROOTNAME.'/project/css/1/');
//For project data
define('PROJECTDATADIR',substr(dirname(__FILE__),0,-7).'data/');
define('PROJECTDATAOTHERSDIR',ROOTNAME.'/project/data/');
//For project js
define('PROJECTJSDIR',substr(dirname(__FILE__),0,-7).'js/');
define('PROJECTJSOTHERSDIR',ROOTNAME.'/project/js/');

/*Include sql.php and engine.php
 */
require PROJECTDIR.'include/sql.php';
require PROJECTDIR.'include/engine.php';

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
/********Write a sql to MYSQL then operate the return result*/
/*******Close MYSQL:closeMS()*/
cUniqid();
?>