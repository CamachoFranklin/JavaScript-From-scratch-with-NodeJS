/*
 * 1) Escribir un programa que calcule el número de segundos que existen en un día.
 * Para ello debemos multiplicar los segundos de un minuto, por los minutos de
 * una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */

var seconds = 60;
var minutes = 60;
var hours = 24;
var result = seconds * minutes * hours;
console.log("Un día tiene " + result + " segundos");

/**
 * 2) Realiza un programa que a partir de los valores ancho=2 y alto=5
 * Calcule el área de un rectángulo.
 */
var width = 2;
var height = 5;
var area = height * width;
console.log("El área del rectangulo es " + area);

/*
 * 3) Hacer un conversor de grados centígrados a grados Fahrenheit.
Para ello deberé multiplicar por 9/5 y sumar 32.
Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

var gradosC = 20;
var result = (gradosC * 9) / 5 + 32;
console.log(
  gradosC + "° convertidos a Fahrenheit da como resultado: " + result
);
