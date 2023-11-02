/**
 * Operadores de asignación
 */

var x = 2; // Simbolo de igualdad
var y = true;

// Operador de asignación de adición ( += )
var x = 2;
var y = 1;
x += y; // x = x + y
console.log(x);

// Operador de asignación de resta ( -= )
var x = 1;
var y = 2;
x -= y; // x = x - y
console.log(x);

// Operador de asignación de multiplicación ( *= )
var x = 1;
var y = 2;
x *= y; // x = x * y
console.log(x);

// Operador de asignación de división ( /= )
var x = 1;
var y = 2;
x /= y; // x = x / y
console.log(x);

// Operador de asignación de residuo ( %= )
var x = 1;
var y = 2;
x %= y; // x = x % y
console.log(x);

// Operador de asignación de exponenciación ( **= )
var x = 1;
var y = 2;
x **= y; // x = x ** y
console.log(x);

/**
 * Operadores de comparación
 */

// Operador igual ( == )
console.log(3 == 3); // True
console.log(3 == 2); // False
console.log(3 == "3"); //True

// Operador desigual ( != )
console.log(3 != 2); // True
console.log(3 != 3); // False

// Operador estrictamente igual ( === )
console.log(3 === 3); // True
console.log(3 === "3"); // False

// Operador desigualdad estricta
console.log(3 !== "3"); // True
console.log(3 != "3"); // False

// Operadores >, >=, <, <=
console.log(3 > 4); // False
console.log(3 >= 3); // True
console.log(2 < 4); // True
console.log(2 <= 4); // True

/**
 * Operadores aritméticos
 *
 * Suma +
 * Resta -
 * Multiplicación
 * División /
 * Resto o modulo %
 * Exponenciación **
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// Operadores de incremento ( ++ )
var number = 0;
console.log(++number); // Aumenta el valor de la variable antes de imprimir
console.log(number++); // Muestra el valor actual de la variable y despues le incrementa
console.log(number); // Imprime el valor actual de la variable

// Operadores de decremento ( -- )
var number = 0;
console.log(--number); // Disminuye el valor de la variable antes de imprimir
console.log(number--); // Muestra el valor actual de la variable y despues lo disminuye
console.log(number); // Imprime el valor actual de la variable

/**
 * Operadores lógicos
 */

// Operador AND u operador "y"
console.log(true && true); // True
console.log(true && false); // False
console.log(false && true); // False
console.log(false && false); // False

// Operador OR u operador "o"
console.log(true || true); // True
console.log(true || false); // True
console.log(false || true); // True
console.log(false || false); // False

// Operador NOT o Negación
console.log(!true); // False
console.log(!false); // True

// Operador de cadena o concatenación ( + )
var name = "Franklin";
var lastname = "Camacho";
var fullname = name + " " + lastname;
console.log(fullname);

// Operador Condicional u Operador ternario ( condition ? value1 : value2 )
console.log(2 > 3 ? "Es mayor" : "Es menor");

// Operador de desestructuración
var person = {
  name: "Franklin",
  lastname: "Camacho",
};

var { name: xyz, lastname } = person; // Podemos crear una nueva variable a partir de la desestructuración de un objeto
console.log(xyz);
console.log(lastname);
console.log(person);

// Desestructuración para arreglos o arrays
var arreglo = [1, 2, 3, 4, 5];

var [firstP, secondP] = arreglo;
console.log(firstP);
console.log(secondP);

/**
 *  Operador de miembro o acceso de propiedad
 */

// Notación punto
var person = {
  name: "Franklin",
  lastname: "Camacho",
};

console.log(person.name);
console.log(person.lastname);

// Notación por corchetes
var person = {
  name: "Franklin",
  lastname: "Camacho",
};

console.log(person["name"]);
console.log(person["lastname"]);

// Notación por corchetes en arreglos
var arreglo = [21, 22, 23, 25, 24, 26];
console.log(arreglo[3]); // devuelve 25

// Operación de determinación de tipo ( typeof )
console.log(typeof "Franklin"); // return string
console.log(typeof 2); // return number
console.log(typeof Boolean); // return boolean