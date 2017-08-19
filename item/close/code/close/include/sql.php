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
function sql_search($sql){
	return mysql_fetch_array(sql($sql),MYSQL_ASSOC);
}
//Super operation:
		
/*Search in the MYSQL*/

/*Add in the MYSQL*/
//Basic operation:

//Super operation:

/*Add in the MYSQL*/
/*Use the MYSQL function operate the result
 */
	
	
	
function closeMS(){
@mysql_close()
or exit("<span style='color:red'>Close MYSQL Error</span>");
}
/*MYSQL end MYSQL end MYSQL end MYSQL end MYSQL end
 *
*/
?>