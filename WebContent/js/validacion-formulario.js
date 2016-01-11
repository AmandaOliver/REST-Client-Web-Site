function eliminarEspaciosIzquierda(cadena) {
	var i = 0;
	while (cadena[i] == ' ')
		i++;
	if (i > 0)
		cadena = cadena.substr(i, cadena.length);
	return cadena;
}

function validarFormulario() {
	var expresion_Nombre = /^([a-z 0-9 ñáéíóú])$/i;
	var expresion_Apellido1 = /^([a-z 0-9 ñáéíóú])$/i;
	var expresion_Apellido2 = /^([a-z 0-9 ñáéíóú])$/i;
	var expresion_Tema = /^([a-z 0-9 ñáéíóú])$/i;
	var expresion_tutor = /^([a-z 0-9 ñáéíóú])$/i;
	var expresion_cotutor  = /^([a-z 0-9 ñáéíóú])$/i;
	var expCorreo = /^(.+\@+\alum.uca.es)$/;
	var nombre = document.getElementById("nombre").value;
	if (!(expNombre.test(nombre))) {
		error += "Debe introducir nombre y apellidos\n";
		ok = false;
	}
	return ok;
}