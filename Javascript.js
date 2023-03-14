document.getElementById("botónTel").addEventListener("click", function(){
	console.log("Capturamos el evento click de teléfono");
	document.getElementById("detalleTel").style.display = "block";
	let presencia=false;
})
document.getElementById("botónMail").addEventListener("click", function(){
	console.log("Capturamos el evento click de email");
	document.getElementById("detalleMail").style.display = "block";
})

document.getElementById("botónNac").addEventListener("click", function(){
	console.log("Capturamos el evento click de fecha de nacimiento");
	document.getElementById("detalleNac").style.display = "block";
})
document.getElementById("botónDir").addEventListener("click", function(){
	console.log("Capturamos el evento click de dirección");
	document.getElementById("detalleDir").style.display = "block";
})