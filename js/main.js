function validateForm(){
	var ingresoNombre = document.getElementById('name').value;
	if (ingresoNombre==null||ingresoNombre.length==0 ||/[0-9]/.test(ingresoNombre)){
		alert ('campo obligatorio ingrese su nombre');
		return false;
	}
	else if (ingresoNombre.charAt(0)!=ingresoNombre.charAt(0).toUpperCase()){
		alert('ingrese la primera letra con mayuscula');
		return false;
	}

	var ingresoApellido=document.getElementById('lastname').value;
	if (ingresoApellido==null||ingresoApellido.length==0 ||/[0-9]/.test(ingresoApellido)){
		alert ('campo obligatorio ingrese su apellido');
		return false;
	}
	else if (ingresoApellido.charAt(0)!=ingresoApellido.charAt(0).toUpperCase()){
		alert('ingrese la primera letra con mayuscula');
		return false;
	}

	var ingresoMail=document.getElementById('input-email').value;
	if  (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))){
        alert("ingrese dirección de correo electrónico valida");
        return false;
   }
	var ingresoClave=document.getElementById('input-password').value;
	if (ingresoClave.length<6|| ingresoClave=='password'||ingresoClave==123456||ingresoClave==098754){

		alert ('ingrese una contraseña valida');
		return false; 
	}

	var ingresoBici=document.querySelector('select').value;
	if (ingresoBici==0){
		alert ('selecciona tu tipo de bici');
		return false;
	}
}




