
function changetype(){
	var text=document.getElementById('TexT');
	var check=document.getElementById('ChecK');
	text.onfocus=function toempty(){
	this.value='';					
	};
	text.oninput=function tocheck(){
	var enterstr=this.value;
	var model = new RegExp(/^[a-z0-9_-]{1,25}$/);
	var result = model.test(enterstr);
//	var result = /EwxyE/i.test(enterstr);simple write model
	check.innerHTML='the result:'+result;					
	};
};
changetype();