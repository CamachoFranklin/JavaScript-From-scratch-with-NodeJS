/**
 * Callbacks
 */

const addition = (a, b, cb) => cb(a + b);

const print = (data) => console.log(data);

addition(1, 2, print);

// . ****
// Definimos una función llamada "getData" que toma una función de callback (cb) como argumento.
const getData = (cb, cbError) => {
  if (true) {
    // Esta condición siempre se cumple, es solo un marcador de posición para simular un error o éxito.
    // Simulamos una operación asincrónica con un retraso de 3 segundos utilizando setTimeout.
    setTimeout(() => {
      // Llamamos a la función de callback (cb) y le pasamos un objeto con datos de nombre y apellido.
      cb({
        name: "Franklin",
        lastname: "Camacho",
      });
    }, 3000); // El retraso es de 3000 milisegundos (3 segundos).
  } else {
    // En caso de un error, llamamos a la función de callback de error (cbError) y le pasamos un objeto Error.
    cbError(new Error("No se pudo obtener los datos"));
  }
};

// Definimos una función llamada "printData" que toma un parámetro "data" y lo imprime en la consola.
const printData = (data) => console.log(data);

// Definimos una función llamada "errorHandler" que toma un parámetro "error" y lo imprime en la consola.
const errorHandler = (error) => console.log(error);

// Llamamos a la función "getData" y pasamos la función "printData" como argumento para manejar el éxito.
// También pasamos la función "errorHandler" para manejar cualquier error que ocurra.
// Esto significa que cuando "getData" complete su operación asincrónica, llamará a "printData" con los datos obtenidos.
// Si hay un error, se llamará a "errorHandler" con un objeto Error.
getData(printData, errorHandler);
