/**
 * Funciones
 */

// Declarativas

// Funcion sin parametros
function greeting() {
  console.log("Hello i'm Franklin");
}
greeting();

// Funcion con parametros
function greeting(name) {
  console.log(`Hello i'm ${name}`);
}
greeting("Franklin");

// Funcion con retorno
function greeting(name) {
  return `Hello i'm ${name}`;
}
var greet = greeting("Franklin");
console.log(greet);
console.log(greeting("Franklin Camacho"));

// Funcion con expresion o anonimas
var addition = function (a, b) {
  return a + b;
};
console.log(addition(2, 2));

// Funcion flecha o arrow function
var subtract = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Solo puede restar números";
  }
};
console.log(subtract(4, 2));

// Usando el return implicito
var multiply = (a, b) => a * b;
console.log(multiply(3, 3));
