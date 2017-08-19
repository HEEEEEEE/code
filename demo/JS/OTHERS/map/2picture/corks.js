/*basicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasicbasic
 * 
 */

 
/*actionactionactionactionactionactionactionactionactionactionactio
 * 
 */
$(function(){
	MapGet();	
})


/*functionfunctionfunctionfunctionfunctionfunctionfunctionfunctionf
 * 
 */
function MapGet(){
	/*1:supportsupportsupportsupportsupportsupport
	 *main:browser 
	 */
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(MapGet_Progress);
	}else{
		var tips='browser not support!!';
		alert(tips);
	}	
}
function MapGet_Progress(position){
	//coordinatecoordinatecoordinatecoordinatecoordinate
	var lo=position.coords.longitude;
	var la=position.coords.latitude;
	//mapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmapmap
	//baidu
		//basic
		var map = new BMap.Map("GeoMap");
		var point = new BMap.Point(lo,la);
		map.centerAndZoom(point,15);
		
		//point
		map.addOverlay(new BMap.Marker(point));
		
		//controler
		map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl()); 
		map.enableScrollWheelZoom();  
		map.addControl(new BMap.MapTypeControl());  	
}
	












