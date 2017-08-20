<?php
/********************************************************************************
 *Here have some functions
 *                        main use to time
 *                                          ............
 ********************************************************************************/
	function Time_Count($time,$way){
		if($way=='001'){
			$past=strtotime($time);
			$now=time();
			$c=$now-$past;			
		}else{
			$future=strtotime($time);
			$now=time();
			$c=$future-$now;			
		}
		
		if(($c/86400)>1){
			$c=floor($c/86400);
			$c=$c.'天';
		}else{
			if(($c/3600)>1){
				$c=floor($c/3600);
				$c=$c.'小时';
			}else{
				if(($c/60)>1){
					$c=floor($c/60);
					$c=$c.'分钟';
				}else{
					$c=$c.'秒';
				}
			}
		}
		return $c;		
	}
?>