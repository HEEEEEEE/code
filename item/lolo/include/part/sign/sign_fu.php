<?php
function operate_email($value,$min,$max){  //Check the email	
	$value=trim($value);
	
	$pattern='/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/';
	$result=preg_match($pattern,$value);
	
	$length=strlen($value);
	
	if(($result==false)||($length<=$min || $length>$max)){
		ajaxreturn('infor:eerror');
	}
	return escapeDtoM($value);
}

function operate_password($value,$min,$max){  //Check the user password
	$value=trim($value);

	$length=strlen($value);
		
	if($length<=$min || $length>$max){
		ajaxreturn('infor:perror');
	}
	$salt='?*!A34s_*(+7';
            return escapeDtoM(sha1($value.$salt));		
			
}
	
function operate_username($value,$min,$max){  //Check the username
	$value=trim($value);

	$length=mb_strlen($value,'utf-8');
	
	if($length<=$min || $length>$max){
		ajaxreturn('infor:uerror');
	}	
	return escapeDtoM($value);
		
}	
	
function set_c($remember,$userid,$username,$uniqid){  //Create user cookies
	if($remember=='1'){
		setcookie('userid',$userid,time()+(5*24*60*60),'/');
		setcookie('username',$username,time()+(5*24*60*60),'/');
		setcookie('uniqid',$uniqid,time()+(5*24*60*60),'/');
	}
	else{
		setcookie('userid',$userid,0,'/');
		setcookie('username',$username,0,'/');
		setcookie('uniqid',$uniqid,0,'/');		
	}
}
   ?>