
function changetype(){
	var text=document.getElementById('TexT');
	var check=document.getElementById('ChecK');
	text.onfocus=function toempty(){
	this.value='';					
	};
	text.oninput=function tocheck(){
	var enterstr=this.value;
	var model = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/);
	var result = model.test(enterstr);
//	var result = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/.test(enterstr);//simple write model
	check.innerHTML='the result:'+result;					
	};
};
changetype();
/*email
///^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/ 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */