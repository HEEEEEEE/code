<?php
/********************************************************************************
 *Here have some functions
 *                        main use to file
 *                                          up create del by system
 ********************************************************************************/
                                     //file to up create del file to up create del
      //file to up create del:filter
//url
function file_filterurl($url,$max){
	if(strlen($url)>$max){
// 		echo"<script>alert('file:filterurlerror')</script>";
// 		exit();	
		ajaxreturn('file:filterurlerror');
	}
	return escapeDtoM($url);
}


	//file to up file to up file to up file to up file to up
	//file to up:filter
	//type
	function file_upfiltertype($up_name,$type){		
		$type= array($type);
		if (!in_array($_FILES[$up_name]['type'],$type)){
			echo"<script>alert('file:typeerror')</script>";
			exit();
// 			ajaxreturn("file:typeerror");				
		}
		$file_type=explode('/',$_FILES['up']['type']);
		return escapeDtoM($file_type[1]);
	}
	//size
	function file_upfiltersize($up_name,$size){
		$up_size=$_FILES[$up_name]['size'];
		if($up_size>$size){
			echo"<script>alert('file:sizeerror')</script>";
			exit();
// 			ajaxreturn("file:sizeerror");			
		}
		if($up_size<1024){
			$val=round(($up_size/1024),2);
			$up_size= $val . 'KB';			
		}
		else if($up_size>1024 && $up_size<(1024*1024)){
			$val=round(($up_size/1024),2);
			$up_size= $val . 'KB';
		}		
		else if($up_size>(1024*1024)){
			$val=round(($up_size/(1024*1024)),2);
			$up_size= $val . 'MB';			
		}					
		return escapeDtoM($up_size);
	}
	//name
	function file_upfiltername($up_name,$name_max,$name_exp){
		$pattern='/\.('.$name_exp.')$/i';
		$subject=$_FILES[$up_name]['name'];
		$name=preg_split($pattern,$subject);
		$name=$name[0];
		if(mb_strlen($name,'utf-8')>$name_max){
			echo"<script>alert('file:nameerror')</script>";
			exit();
// 			ajaxreturn("file:nameerror");		
		}
		return escapeDtoM($name);
	}
			
	//file to up:move
	function file_upmove($tmp,$url){
		if(is_uploaded_file($tmp)){
			move_uploaded_file($tmp,$url);			
		}		
	}
	
	
	
            //file to create file to create file to create file to create file to create
	//file to create:copy
	function file_createcopy($cop,$url){
		$dir=opendir($cop);
		@mkdir($url);
		while(false!==( $file=readdir($dir)) ){
			if ( ( $file!= '.')&&($file!='..') ){
				if( is_dir($cop.'/'.$file) ){
					file_createcopy($cop.'/'.$file,$url.'/'.$file);
				}
				else{
					copy($cop.'/'.$file,$url.'/'.$file);
				}
			}
		}
		closedir($dir);	
	}
	//file to delete file to delete file to delete file to delete file to delete
	// file to delete
	function file_delete($del){
		if(! is_dir($del)){
			return false;
		}
		$handle = @opendir($del);
		while(($file = @readdir($handle)) !== false){
			if($file != '.' && $file != '..'){
				$dir = $del . '/' . $file;
				is_dir($dir) ? file_delete($dir) : @unlink($dir);
			}
		}
		closedir($handle);
		return rmdir($del) ;
	}

	
	// file get info file get info file get info file get info file get info
	// file get info：picture
	function file_info($url){
		list($width, $height, $type, $attr) = getimagesize($url);
		$ssize=$width.'*'.$height;
		return escapeDtoM($ssize);
	}	

	
	
   ?>