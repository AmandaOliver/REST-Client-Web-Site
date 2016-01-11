function eliminarEspaciosIzquierda(cadena) {
	var i = 0;
	while (cadena[i] == ' ')
		i++;
	if (i > 0)
		cadena = cadena.substr(i, cadena.length);
	return cadena;
}

function validarFormulario() {
	var error="";
	var ok=true;
	var expresion_Nombre = /^([a-z ñáéíóú])$/i;
	var expresion_Apellido1 = /^([a-z ñáéíóú])$/i;
	var expresion_Apellido2 = /^([a-z ñáéíóú])$/i;
	var expresion_Tema = /^([a-z ñáéíóú])$/i;
	var expresion_Tutor = /^([a-z ñáéíóú])$/i;
	var expresion_Cotutor  = /^([a-z ñáéíóú])$/i;
	var expresion_Correo = /^(.+\@+\alum.uca.es)$/;
	var nombre = eliminarEspaciosIzquierda(document.getElementById("nombre_nuevo").value);
	var apellido1 = eliminarEspaciosIzquierda(document.getElementById("apellido1_nuevo").value);
	var apellido2 = eliminarEspaciosIzquierda(document.getElementById("apellido2_nuevo").value);
	var tema = eliminarEspaciosIzquierda(document.getElementById("tema_nuevo").value);
	var tutor = eliminarEspaciosIzquierda(document.getElementById("director_nuevo").value);
	var cotutor = eliminarEspaciosIzquierda(document.getElementById("co-director_nuevo").value);
	var correo = eliminarEspaciosIzquierda(document.getElementById("correo").value);
	var calificacion =  eliminarEspaciosIzquierda(document.getElementById("calificacion_nuevo").value);
	var fecha=document.getElementById("fecha_nuevo").value;
	if (!(expresion_Nombre.test(nombre))) {
		error += "Debe introducir el nombre con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Apellido1.test(apellido1))) {
		error += "Debe introducir el primer apellido con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Apellido2.test(apellido2))) {
		error += "Debe introducir el segundo apellido con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Tema.test(tema))) {
		error += "Debe introducir el tema del TFG con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Tutor.test(tutor))) {
		error += "Debe introducir el director del TFG con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Cotutor.test(cotutor))) {
		error += "Debe introducir el co-director con caracteres alfabéticos\n";
		ok= false;
	}
	if (!(expresion_Correo.test(correo))) {
		error += "Debe introducir un correo institucional de la UCA\n";
		ok= false;
	}
	if(calificacion<0 || calificacion>10){
		error+= "La calificación debe ser un número entre 0 y 10";
		ok= false;
	}
	if(fecha>new Date()){
		error+="Debe introducir una fecha ya pasada";
		ok= false;
	}
	if (!ok)
	alert(error);
}