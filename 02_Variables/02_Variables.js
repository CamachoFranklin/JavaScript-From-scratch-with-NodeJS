/**
 * Variables
 *
 * 3 formas de definir variables
 *
 * var
 * let
 * const (palabra reservada)
 */

// variables con VAR
var name = "Franklin"; // x = 2
console.log(name);

var age = 24;
console.log(age);

var person = {
  name: "Franklin",
  lastname: "Camacho",
  age: 24,
  adress: { street: "37th", houseNumber: "27-35" },
  visitedCities: ["Barquisimeto", "Caracas", "Cojedes"],
};
console.log(person);

var city;
city = "Barquisimeto";
city = "Cojedes";
city = "Caracas";
console.log(city);

// Variables con let
let name = "Franklin";
console.log(name);

// let solo funciona dentro del bloque de codigo que se está definiendo
{
  let greeting = "Hello, I'm Franklin";
  console.log(greeting);
}
console.log(greeting); // Undefined

// Funciona de forma global dentro del codigo
{
  var greeting = "Hello, I'm Franklin";
  console.log(greeting);
}
console.log(greeting);

// Variables con const
const PI = 3.14;
console.log(PI);

var name = "Franklin";
var lastname = `Camacho ${name}`;
console.log(lastname);