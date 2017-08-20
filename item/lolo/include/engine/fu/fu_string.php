<?php
/********************************************************************************
 *Here have some functions
 *                        main use to string
 *                                          write by user
 ********************************************************************************/
	//string to filter string to filter string to filter string to filter string to filter
	//string to filter:int
	function string_filterid($id,$min,$max){		
		if(strlen($id)<$min || strlen($id)>$max){
			ajaxreturn("string:iderror");
		}
		return escapeDtoM($id);
	}
	//string to filter:str
	//less
	function string_filterless($str,$max){
		$str_trim=trim($str);
		if((mb_strlen($str_trim,'utf-8'))<=$max){
			return escapeDtoM($str_trim);
		}
		else{
			ajaxreturn("string:lesstomorerror");
		}
	
	}	
	//lesstomore
	function string_filterlesstomore($str,$min,$max){
		$str_trim=trim($str);
		if((mb_strlen($str_trim,'utf-8')>$min)&&(mb_strlen($str_trim,'utf-8')<=$max)){
			return escapeDtoM($str_trim);			
		}
		else{
			ajaxreturn("string:lesstomorerror");						
		}

	}
function string_filtername($name,$min,$max){
	$name=trim($name);
	if((mb_strlen($name,'utf-8')<=$min)||(mb_strlen($name,'utf-8')>$max)){
		ajaxreturn("string:nameerror");			
	}
	return escapeDtoM($name);
}
	
	function string_filtername_empty($name,$max){
		$name=trim($name);
		if((mb_strlen($name,'utf-8')>$max)){
			ajaxreturn("string:name_emptyerror");
		}
		return escapeDtoM($name);
	}
		
	function string_filterdes($des,$max){
		$des=trim($des);
		if((mb_strlen($des,'utf-8'))>$max){
			ajaxreturn("string:deserror");			
		}
		return escapeDtoM($des);
	}

	function string_filtercon($con){
		$con=trim($con);
// 		if((mb_strlen($con,'utf-8'))>$max){
// 			ajaxreturn("string:conerror");
// 		}
		return escapeDtoM($con);
	}	
	//string to filter:sort
	function string_filtersortclose($sort){
		if($sort=="date0"){
			$sort="ORDER BY Close_time DESC";
		}
		else if($sort=="date1"){
			$sort="ORDER BY Close_time ASC";
		}
		else{
			$sort="ORDER BY Close_time DESC";
		}
		return escapeDtoM($sort);
	}
	
	function string_filtersortalbum($sort){
		if($sort=="date0"){
			$sort="ORDER BY Calbum_time DESC";
		}
		else if($sort=="date1"){
			$sort="ORDER BY Calbum_time ASC";
		}
		else{
			$sort="ORDER BY Calbum_time DESC";
		}
		return escapeDtoM($sort);		
	}	

	function string_filtersortsource($sort){
		if($sort=="date0"){
			$sort="ORDER BY addtime DESC";
		}
		else if($sort=="date1"){
			$sort="ORDER BY addtime ASC";
		}
		else{
			$sort="ORDER BY addtime DESC";
		}
		return escapeDtoM($sort);
	}
		
	//string to filter:search		
function string_filtersearchclose($search,$min,$max){
	$search=trim($search);
	if((mb_strlen($search,'utf-8')<=$min)||(mb_strlen($search,'utf-8')>$max)){
		$search="";
	}
	else{
		$search="AND Close_name LIKE"."'%".$search."%'";
	}
	return $search;		
}

function string_filtersearchalbum($search,$min,$max){
	$search=trim($search);
	if((mb_strlen($search,'utf-8')<=$min)||(mb_strlen($search,'utf-8')>$max)){
		$search="";
	}
	else{
		$search="AND Calbum_name LIKE"."'%".$search."%'";
	}
	return $search;
}	

function string_filtersearchsource($search,$min,$max){
	$search=trim($search);
	if((mb_strlen($search,'utf-8')<=$min)||(mb_strlen($search,'utf-8')>$max)){
		$search="";
	}
	else{
		$search="AND name LIKE"."'%".$search."%'";
	}
	return $search;
}	
	
	//string to filter:equal
	function string_filterequal($equal,$min,$max){
		$equal=trim($equal);
		if((mb_strlen($equal,'utf-8')<=$min)||(mb_strlen($equal,'utf-8')>$max)){
			$equal="";
		}
		else{
			$equal="AND Close_name='{$equal}'";
		}
		return $equal;
	}			
   ?>