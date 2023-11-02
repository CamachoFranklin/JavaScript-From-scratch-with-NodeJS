/**
 * Promises
 */

const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          name: "Franklin",
          lastname: "Camacho",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos");
    }
  });

const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        resolve({
          name: "Jose",
          lastname: "Piña",
        });
      }, 3000);
    } else {
      reject("No pudimos obtener los datos de data 2");
    }
  });

console.log("Inicio");
getData(false)
  .then((data) => {
    console.log(data);
    return getData2(false);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Fin");

/**
 *  async - await
 */

// Definimos una función llamada "getData3" que toma un parámetro "error".
const getData3 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      // Simulamos una operación asincrónica con un retraso de 3 segundos utilizando setTimeout.
      setTimeout(() => {
        // Resolvemos la promesa con un objeto que contiene datos de nombre y apellido.
        resolve({
          name: "Franklin",
          lastname: "Camacho",
        });
      }, 3000); // El retraso es de 3000 milisegundos (3 segundos).
    } else {
      // Rechazamos la promesa con un mensaje de error.
      reject("No pudimos obtener los datos");
    }
  });

// Definimos una función llamada "getData4" que toma un parámetro "error".
const getData4 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
      // Simulamos una operación asincrónica con un retraso de 3 segundos utilizando setTimeout.
      setTimeout(() => {
        // Resolvemos la promesa con un objeto que contiene datos de nombre y apellido.
        resolve({
          name: "Jose",
          lastname: "Piña",
        });
      }, 3000); // El retraso es de 3000 milisegundos (3 segundos).
    } else {
      // Rechazamos la promesa con un mensaje de error.
      reject("No pudimos obtener los datos de data 2");
    }
  });

// Definimos una función principal llamada "main" como una función asincrónica (async).
const main = async () => {
  try {
    // Usamos "await" para esperar a que se resuelvan las promesas de "getData3" y "getData4".
    // En este caso, se simula un caso exitoso (sin error) para ambas promesas.
    let result = await getData3(false);
    let result2 = await getData4(false);

    // Imprimimos los resultados en la consola.
    console.log(result);
    console.log(result2);
  } catch (error) {
    // Capturamos cualquier error que se produzca y lo imprimimos en la consola.
    console.log(error);
  }
};

// Llamamos a la función principal "main".
main();
