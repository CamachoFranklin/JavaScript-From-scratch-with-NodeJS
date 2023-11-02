/**
 * setTimeout
 */
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

setTimeout(() => {
    console.log("Task 4"); // JS lo interpreta como asincrono y lo salta hasta despues de la ejecución del siguiente bloque
}, 2000)

console.log("Task 5");
