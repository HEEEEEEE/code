<?php
//Create the code in local
function code($width,$height,$br,$bg,$bb,$fr,$fg,$fb,$font)
	{

		for($c=0;$c<5;$c++)
			{
			/* 去掉点只输出一个数  加上点就输出五个数
			*
			*
			*
			*/
			$code .=dechex(mt_rand(0, 15));
			}
		$_SESSION['CODE']=$code;
		/*
		*                $_SESSION['名称']='值'；
		*                         存值
		*有5个值的CODE数组                                    【区别于一般的数组】
		*$_SESSION['CODE']=输出五个值 $_SESSION['CODE'][2]=输出五个值中的第二个值
		*
		*                      跨页面调用
		*跨页面调用跨页面调用跨页面调用跨页面调用跨页面调用跨页面
		*/
		
		
		
		
		/*验证图验证图验证图验证图验证图验证图验证图验证图验证图验证图验证图验证图验证图验证图
		 */
		$EE=imagecreatetruecolor($width,$height);
		$backcolor=imagecolorallocate($EE,$br,$bg,$bb);
		$forecolor=imagecolorallocate($EE,$fr,$fg,$fb);
		
		imagefill($EE, 0, 0,$backcolor);
		/*验证码验证码验证码验证码验证码验证码验证码验证码
		 */
		for($i=0;$i<strlen($_SESSION['CODE']);$i++)
		{
		$ttf=dirname(__FILE__).'/'.$font;
			imagettftext($EE,15,0,$i*($width/5)+mt_rand(1,5),mt_rand(15,22.5),$forecolor,$ttf,$_SESSION['CODE'][$i]);
		/*     I5个字符从左向右均占据独立空间II不脱离画画区域
		*                $i*($width/5)+mt_rand(1,5)
		*              第一个字符的位置=0+mt_rand(1,5)
		* 第二个字符的位置=1*(75/5)+mt_rand(1,5)=15+mt_rand(1,5)
		*
		*
		* 第五个字符的位置=4*(75/5)+mt_rand(1,5)=60+mt_rand(1,5)
		*/
			}
                        header('Content-Type:image/png;charset=utf-8');imagepng($EE);imagedestroy($EE);		
	}


	
//Check the code in server
function check_code($secode,$encode){
	if(! preg_match("/$secode/i",$encode)){
		ajaxreturn('infor:codeerror');           
	}
}		
 ?>