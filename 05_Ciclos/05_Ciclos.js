/**
 * Ciclos repetitivos
 */

// Ciclo While - Primero evalua la condicion y despues realiza la corrida del codigo
var contador = 0;
while (contador < 5) {
  console.log("Hola Mundo!");
  contador += 1;
}

// Ciclo Do while - Primero evalua una vuelta y despues la condición
var contador = 0;
do {
  console.log("Hola Mundo!");
  contador += 1;
} while (contador < 5);

// Ciclo For - Recorrer arrays o repetir instrucciones sean sea deseado.
for (let i = 0; i < 5; i++) {
  console.log("Hola Mundo!");
}

// Ciclo For - In
var person = {
  name: "Franklin",
  lastname: "Camacho",
  yearsOld: 24,
};

for (const key in person) {
  console.log(key, person[key]);
}

// Ciclo For - of - Para recorrer arreglos
var array = [1, 2, 3, 4, 5];

for (const value of array) {
  console.log(value);
}
