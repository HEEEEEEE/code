<?php 
/*MYSQL start MYSQL start MYSQL start MYSQL start MYSQL start
 * 
 */
//Connect the  MYSQL
function connectMS(){
global $connect;
$connect=@mysql_connect(HOST,USER,PASSWORD)
or exit("<span style='color:red'>Connect MYSQL Error</span>");	
}
//Select the  DB
function selectDB(){
@mysql_select_db(DBNAME)
or exit("<span style='color:red'>Select DBNAME Error</span>");
}
//Select the  DB's Encoding
function setDBE(){
@mysql_query(DBENCODING)
or exit("<span style='color:red'>Set DBEncoding Error</span>");
}

/*Write a sql to MYSQL and return the result
 *$sql: sql
 *$result: result
 */
function sql($sql){
$result=@mysql_query($sql)
or exit("<span style='color:red'>sql to MYSQL Error Error type is:</span>".mysql_error());
return $result;
}

/*Use the MYSQL function operate the result 
 */
/*Search in the MYSQL*/
//Basic operation:
//   operate the result then return one single result row as a array
function sql_search($sql){
	return mysql_fetch_array(sql($sql),MYSQL_ASSOC);
}
//operate the result then use while control echo all the result rows
function sql_searchall($result){
	return mysql_fetch_array($result,MYSQL_ASSOC);
}
//Super operation:
//search the uniqid
function search_uniqid(){
	return sql_search("SELECT
			uniqid
		      FROM
			he_humans
		        WHERE
			id='{$_COOKIE['userid']}'
		     ");
}
/*Search in the MYSQL*/


/*Update in the MYSQL*/
//Basic operation:

//Super operation:
//update the idea
function update_idea(){
	if(isset($_COOKIE['userid'])){
		$con='hid='.$_COOKIE['userid'].' AND';
	}else{
		$con=' ';
	}
	sql("UPDATE
	       he_idea
		 SET
                          timestate=0
	           WHERE
	         $con
	        destorytime<=NOW()
	     AND
	    processstate=0
	");	
}
/*Update in the MYSQL*/

/*Use the MYSQL function operate the result
 */

//Free the result
function freeRT($result){
	mysql_free_result($result);
}
	
function closeMS(){
@mysql_close()
or exit("<span style='color:red'>Close MYSQL Error</span>");
}
/*MYSQL end MYSQL end MYSQL end MYSQL end MYSQL end
 *
*/
?>