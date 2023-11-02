/**
 *  Manipulacion de arreglos
 */

// ForEach
var letters = ["a", "b", "c", "d", "e"];
letters.forEach((element) => console.log(element));

console.log(letters.length);

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
}

// Push - shift - pop
var letters = ["a", "b", "c", "d", "e"];
console.log(letters); // Arreglo original
letters.push("f"); // inserción de datos
console.log(letters); // Arreglo con el push

/* Shift Elimina el primer elemento de un arreglo,
 dicho elemento tambien puede ser almacenado */
var firstElement = letters.shift();
console.log(firstElement);
console.log(letters);

/* Pop Elimina el ultimo elemento de un arreglo,
dicho elemento tambien puede ser almacenado */
var lastElement = letters.pop();
console.log(lastElement);
console.log(letters);

// Maps
var student = ["Franklin", "José", "Maria", "Ana"];
var attendance = student.map((name) => {
  return {
    name: name,
    attendance: false,
  };
});
console.log(student);
console.log(attendance);
console.log(student);

// Map 2

// Definimos un array llamado "products" que contiene objetos que representan productos con nombre y precio.
var products = [
  { name: "shirt", price: 15 },
  { name: "shoes", price: 20 },
  { name: "pants", price: 25 },
];

// Utilizamos el método "map" en el array "products" para crear un nuevo array llamado "taxedProducts."
var taxedProducts = products.map((product) => {
  // Para cada objeto "product" en el array "products," realizamos las siguientes operaciones:

  /*
  1. Copiamos todas las propiedades del objeto "product" original
  utilizando el operador de propagación ("...product").
  Esto garantiza que todas las propiedades originales del producto se mantengan en la copia.

  2. Agregamos una nueva propiedad "tax" al objeto copiado y le asignamos un valor de 0.16.
  Esta propiedad "tax" representa un impuesto del 16% que se añade al precio del producto.
  */

  return {
    ...product,
    tax: 0.16,
  };
});

/*
El resultado es un nuevo array llamado "taxedProducts"
que contiene copias de los objetos originales de "products."
Cada copia tiene una propiedad adicional "tax" con un valor de 0.16,
representando el impuesto del 16% aplicado a cada producto.
*/

// Obtenemos solo los precios de los objetos
var prices = products.map((product) => product.price);

console.log(products); // Impresión del arreglo original
console.log(taxedProducts); // Impresion del arreglo con el impuesto
console.log(prices); // Impresion solo de los precios

// Manipulación mediante filter, dicho metodo no modifica el arreglo de origen
var students = [
  { name: "Ada", yearsOld: 19, registered: true },
  { name: "Juan", yearsOld: 21, registered: true },
  { name: "Franklin", yearsOld: 24, registered: false },
  { name: "Maria", yearsOld: 23, registered: true },
  { name: "Jose", yearsOld: 20, registered: false },
];

var filtered = students.filter(
  (student) => student.yearsOld >= 21 && student.registered
);
console.log(filtered);

// Manipulación mediante reduce - Ejemplo 1
var calificaciones = [3, 5, 9, 10, 10];
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(calificaciones);
console.log(suma / calificaciones.length);

// Ejemplo 2
// Definimos un array llamado "edades" que contiene una serie de valores numéricos representando edades.
var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

// Utilizamos el método "reduce" en el array "edades" para procesar y contar las ocurrencias de cada edad.
var resultado = edades.reduce((acumulador, edad) => {
  // La función de reducción toma dos argumentos, el "acumulador" y el valor actual "edad".

  // Verificamos si la edad actual ya existe como propiedad en el "acumulador".
  if (!acumulador[edad]) {
    // Si no existe, creamos una propiedad con el nombre de la edad y le asignamos el valor 1.
    acumulador[edad] = 1;
  } else {
    // Si la propiedad ya existe, incrementamos su valor en 1 para contar otra ocurrencia de esa edad.
    acumulador[edad] += 1;
  }
  // Retornamos el "acumulador" modificado después de procesar la edad actual.
  return acumulador;
}, {});
console.log(edades);
console.log(resultado);

var sellings = [
  { name: "T-shirt", price: 15, totalSold: 10 },
  { name: "Shoes", price: 150, totalSold: 8 },
  { name: "Pants", price: 20, totalSold: 30 },
];

var result = sellings.reduce((acum, product) => {
  let totalSelling = product.price * product.totalSold;
  acum[product.name] = `$${totalSelling}`;
  return acum;
}, {});

console.log(sellings);
console.log(result);

// Vamos a contar los matriculados y los no matriculados
var students = [
  { name: "Ada", yearsOld: 19, registered: true },
  { name: "Juan", yearsOld: 21, registered: true },
  { name: "Franklin", yearsOld: 24, registered: false },
  { name: "Maria", yearsOld: 23, registered: true },
  { name: "Jose", yearsOld: 20, registered: false },
];

var result = students
  .map((student) => student.registered)
  .reduce(
    (acum, item) => {
      if (item) {
        acum.registered += 1;
      } else {
        acum.notRegistered += 1;
      }
      return acum;
    },
    { registered: 0, notRegistered: 0 }
  );

console.log(students);
console.log(result);

// Some
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.some((number) => number % 2 === 0);
console.log(result); // Si al menos un elemento, es verdadero retorna true

// Every
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = numbers.every((number) => number % 2 === 0);
console.log(result); // Si todos los elementos cumplen la condición, retorna true

// Find - FindIndex
var customers = [
  { id: 1, name: "Franklin" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Ana" },
  { id: 4, name: "Juan" },
  { id: 5, name: "Jose" },
];

var customer = customers.find((customer) => customer.id === 1); // Retorna un unico elemento que cumpla con la condicón
var filter = customers.filter((customer) => customer.id === 1); // Retorna un array de los elementos que cumplan con la condición
console.log(customers);
console.log(customer);
console.log(filter);

// FindIndex
var customers = [
  { id: 1, name: "Franklin" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Ana" },
  { id: 4, name: "Juan" },
  { id: 5, name: "Jose" },
];

var position = customers.findIndex((customer) => customer.id === 3); // Busca el elemento dentro del array y regresa su posición
console.log(position);
console.log(customers[position]);

// Includes
var pets = ["Dog", "Cat", "Bunny"];
var result = pets.includes("Cat"); // La comparación es exacta y sensible a mayusculas y minusculas
console.log(result); // Imprime true

// Example 2
var search = (params) => {
  let customers = [
    { id: 1, name: "Franklin" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Juan" },
    { id: 5, name: "Jose" },
  ];
  return customers.filter((customer) => customer.name.includes(params));
};

console.log(search("a")); // Retorna elementos que contengan la letra "a"

// Join
var elements = ["air", "fire", "water", "earth"];
var result = elements.join(" ");
console.log(result);

// Example 2
// Definimos un array de objetos llamado "customers" que contiene información sobre clientes.
var customers = [
  { id: 1, name: "Franklin" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Ana" },
  { id: 4, name: "Juan" },
  { id: 5, name: "Jose" },
];

// Creamos una función llamada "csvGenerator" que toma un array y un carácter separador (por defecto, una coma).
var csvGenerator = (array, separator = ",") => {
  // Generamos una cadena de texto llamada "headers" que contiene los nombres de las propiedades del primer objeto en el array,
  // separados por el carácter especificado.
  let headers = Object.keys(array[0]).join(separator);

  // Creamos un nuevo array llamado "data" que contiene cada objeto del array original convertido en una cadena de valores,
  // donde las propiedades están separadas por el carácter especificado.
  let data = array.map((element) => Object.values(element).join(separator));

  // Imprimimos las cabeceras en la consola.
  console.log(headers);

  // Iteramos a través del array "data" e imprimimos cada elemento en la consola.
  data.forEach((element) => console.log(element));
};

// Llamamos a la función "csvGenerator" pasando el array "customers" como argumento.
csvGenerator(customers);

/**
 * concat, sort, slice, splice
 */

// concat
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 0];
var array3 = array1.concat(array2); // Forma 1 de concatenar arreglos
var array4 = [...array1, ...array2]; // Forma 2 de concatenar arreglos

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Sort
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array1.sort());

var months = ["Dic", "Ene", "Mar", "Feb"];
console.log(months.sort());

var array = [1, 10000, 21, 30, 4];
var order = array.sort((a, b) => a - b); // Usar (a - b) para ascendente y (b - a) forma descendente
console.log(order);

// Splice
var names = ["Franklin", "Jose", "Maria", "Ana"];
names.splice(1, 1, "Ada");
console.log(names);

// Slice
var names = ["Franklin", "Jose", "Maria", "Ana"];
var result = names.slice(1, 2); // No incluye la ultima posición
console.log(result);