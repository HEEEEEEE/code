/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

/*Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic Basic*/

$(function(){
	//basic
	var t=new Array();
	t[1]='http://www.firefox.com';t[2]='火狐';
		t[3]='http://www.google.com';t[6]='谷歌';
			t[5]='http://www.safari.com';t[10]='苹果';
		t[7]='http://www.opera.com';t[14]='opera';
	t[8]='http://chrome.360.cn/features/';t[16]='360';	
	var r=Math.ceil((Math.random())*8);
	if(r==4 || r==7){
		r=1;				
	}
	$('#Browser_Others').attr('href',t[r]).text(t[2*r]);	
	/*hide the  menu*/
	$('#BrowseRback').click(function(){
		$('#BrowseR').css('display','none');																					
	});	
})
