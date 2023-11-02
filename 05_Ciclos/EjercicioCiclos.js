/**
 * 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
 * Pista: anidamiento.
 */

// Usando ciclo for
// Iteramos desde 2 hasta 12 para generar las tablas de multiplicar del 2 al 12.
for (let i = 2; i <= 12; i++) {
  console.log("Tabla de multiplicar del " + i + ":"); // Imprime el encabezado de la tabla.

  // Iteramos desde 1 hasta 10 para generar las multiplicaciones.
  for (let j = 1; j <= 10; j++) {
    var result = i * j; // Calculamos el resultado de la multiplicación.
    console.log(i + " x " + j + " = " + result); // Imprimimos la multiplicación y su resultado.
  }
  console.log(""); // Agregamos un salto de linea
}

//Usando ciclo While
var i = 2; // Inicializamos el primer número de la tabla.

while (i <= 12) {
  // Mientras el número sea menor o igual a 12.
  console.log("Tabla de multiplicar del " + i + ":"); // Imprime el encabezado de la tabla.

  var j = 1; // Inicializamos el primer número para multiplicar.

  while (j <= 10) {
    // Mientras el número sea menor o igual a 10.
    var resultado = i * j; // Calculamos el resultado de la multiplicación.
    console.log(i + " x " + j + " = " + resultado); // Imprimimos la multiplicación y su resultado.
    j++; // Incrementamos el número para la siguiente multiplicación.
  }

  console.log(""); // Agregamos una línea en blanco para separar las tablas.
  i++; // Pasamos al siguiente número de la tabla.
}

//Usando ciclo Do-While
var i = 2; // Inicializamos el primer número de la tabla.

do {
  console.log("Tabla de multiplicar del " + i + ":"); // Imprime el encabezado de la tabla.

  var j = 1; // Inicializamos el primer número para multiplicar.

  do {
    var resultado = i * j; // Calculamos el resultado de la multiplicación.
    console.log(i + " x " + j + " = " + resultado); // Imprimimos la multiplicación y su resultado.
    j++; // Incrementamos el número para la siguiente multiplicación.
  } while (j <= 10); // Mientras el número sea menor o igual a 10.

  console.log(""); // Agregamos una línea en blanco para separar las tablas.
  i++; // Pasamos al siguiente número de la tabla.
} while (i <= 12); // Mientras el número sea menor o igual a 12.
