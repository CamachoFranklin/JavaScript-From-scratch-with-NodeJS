/*
 * Control de flujo
 */

/**
 * Estructura if
 * if(condicion){
 *  Codigo...
 * }
 */

// If
var llueve = true;
if (llueve) {
  console.log("Necesito una sombrilla");
}

var administrador = "administrador";
if (administrador === "administrador") {
  console.log("Bienveniedo al sistema");
}

// If and Else
const requestedAge = 18;
var yearsOld = 12;

if (yearsOld >= requestedAge) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

var semaforo = "rojo";
if (semaforo === "verde") {
  console.log("Arranca");
} else if (semaforo === "amarillo") {
  console.log("Listo?");
} else if (semaforo === "rojo") {
  console.log("Motores apagados");
} else {
  console.log("Color no identificado");
}

// Switch
var producto = "mango";
switch (producto) {
  case "limon":
    console.log("El precio del limon es de 1$");
    break;
  case "naranja":
    console.log("El precio de las naranjas es de 3$");
    break;
  case "naranja":
    console.log("El precio de las naranjas es de 3$");
    break;
  case "mango":
    console.log("El precio de los mangos es de 2$");
    break;
  default:
    console.log("No disponemos de ese producto");
    break;
}
