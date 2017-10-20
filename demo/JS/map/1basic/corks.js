/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 * 
 */

 
/*actionactionactionactionactionactionactionactionactionactionactio
 * 
 */
$(function(){
/*1:supportsupportsupportsupportsupportsupport
 *main:browser 
 */
/*2:return dealreturn dealreturn dealreturn de
 *		1:waiting
 *	2:success
 *	2_1success_coords
 *		2_2success_location
 *3:error
 */
LocationGet();	
})


/*functionfunctionfunctionfunctionfunctionfunctionfunctionfunctionf
 * 
 */
function LocationGet(){
	/*1:supportsupportsupportsupportsupportsupport
	 *main:browser 
	 */
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(LocationGet_Progress,LocationGet_Error);
	}else{
		var tips='browser not support!!';
		$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
	}	
}
function LocationGet_Progress(position){
	//coordinatecoordinatecoordinatecoordinatecoordinate
	var lo=position.coords.longitude;
	var la=position.coords.latitude;
	$('#LongitudeData').text(lo);
	$('#LatitudeData').text(la);
	var coords=position.coords.latitude + ',' + position.coords.longitude;
	//locationlocationlocationlocationlocationlocationlo
	//google
	var url="http://maps.google.cn/maps/api/geocode/json?latlng="+ coords;
	xmlhttp=$.ajax({
		type:'GET',		
		url:url,
		dataType: "json",				
		beforeSend:function(){
			var tips='positioning!!!!';
			$('#TipsContent').css({color:'rgba(255,125,0,1)'}).text(tips);			
		},
		success:function(json){
			var jso=xmlhttp.responseText;
//			var json=eval('('+json+')');			
//			alert(jso);
						
			//function(json) not to transfrom
			$('#TipsContent').css({color:'rgba(255,255,255,1)'});
			$('#LocationByGoogleData').text(json.results[2].address_components[0].long_name);
			
			
		},
		error:function(XMLHttpRequset,textStatus,errorThrown){
			var tips='location get failed!!';
			$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);			
		}
	});
	//baidu
	var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+coords+"&output=json&pois=0";
	xmlhttp1=$.ajax({ 
		type: "GET",  
		url: url,
		dataType: "jsonp",		
		beforeSend: function(){
			var tips='定位中!!';
			$('#TipsContent').css({color:'rgba(255,125,0,1)'}).text(tips);
		},
		success: function (json) {
			var jso=xmlhttp1.responseText;
//			var json=eval('('+json+')');			
			alert(jso);
			
			$('#TipsContent').css({color:'rgba(255,255,255,1)'});
			$("#LocationByBaiduData").html(json.result.formatted_address);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) { 
			var tips='获取失败！';
			$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
		}
	});	
}

function LocationGet_Error(error){
	switch(error.code){
		case error.PERMISSION_DENIED :
		var tips='user denied!!!';
		$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
		break;
		case error.POSITION_UNAVAILABLE :
		var tips='location unavailable!!!';
		$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
		break;		
		case error.TIMEOUT :
		var tips='timeout!!!!';
		$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
		break;
		case error.UNKNOWN_ERROR :
		var tips='unkown error!!!';
		$('#TipsContent').css({color:'rgba(255,0,0,1)'}).text(tips);
		break;						
	}
}	












