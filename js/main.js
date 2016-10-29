function validateForm(){
	//ingreso nombre
	ingresoNombre=document.getElementById('name').value;
	if( ingresoNombre == null || ingresoNombre.length == 0) {
       alert ('Escribe tu nombre!!');
       return false; 
    }
       
    //permite caracteres de la A-Z
	letrasNombre=document.getElementById('name').value;
		if (/[0-9]/.test(letrasNombre)) {
		alert ('Nombre no valido ingresa solo letras!');
		return false;
	}
	//ingreso letra mayuscula nombre
	mayusculaName = ingresoName.charAt(0);
    if (!(/[A-Z]/.test(mayusculaName))){
        alert("Ingrese primera letra con mayúscula");
        return false;
    }
 	//ingreso apellido 
	ingresoApellido=document.getElementById('lastname').value;
    if (ingresoApellido ==null ||ingresoApellido.length ==0 ){
	alert ('escribe tu apellido!!');
	return false;
	}
	//permite caracteres de la A-Z
	letrasApellido=document.getElementById('lastname').value;
		if (/[0-9]/.test(letrasApellido)) {
		alert ('nombre no valido ingresa solo letras!');
		return false;
	}
	//ingreso mayuscula
	mayusculaApellido = ingresoApellido.charAt(0);
    if (!(/[A-Z]/.test(mayusculaApellido))){
        alert ('ingrese primera letra con mayúscula');
        return false;
    }
	//validacion email 
	ingresoMail=document.getElementById('email').value;
	
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correctEmail))) {
         alert('ingreso un mail correcto!');
         return false;
    }
    // clave 
	ingresoClave=document.getElementById('password').value;
	if (ingresoClave.length<6||ingresoClave=='password'||ingresoClave==123456||ingresoClave==0987654){
		alert ('contraseña muy facil');
		return false;
	}
	// seleccion bici 
	ingresoBici= document.querySelector('select').value;
	if (ingresoBici==0){
		alert ('elige tu bici');
		return false;
	}
}




