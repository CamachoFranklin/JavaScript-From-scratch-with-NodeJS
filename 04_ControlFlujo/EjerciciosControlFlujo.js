/*
 * 1) Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

//  If and Else
var day = ""; // Tipear el dia de la semana

if (day === "Lunes") {
  console.log("The day of week is Monday");
} else if (day === "Martes") {
  console.log("The day of week is Tuesday");
} else if (day === "Miercoles") {
  console.log("The day of week is Wednesday");
} else if (day === "Jueves") {
  console.log("The day of week is Thursday");
} else if (day === "Viernes") {
  console.log("The day of week is Friday");
} else if (day === "Sabado") {
  console.log("The day of week is Saturday");
} else if (day === "Domingo") {
  console.log("The day of week is Sunday");
} else {
  console.log("Ingrese un día de la semana valido");
}

// Switch Case
var day = ""; // Tipear el dia de la semana

switch (day) {
  case "Lunes":
    console.log("The day of week is Monday");
    break;
  case "Martes":
    console.log("The day of week is Tuesday");
    break;
  case "Miercoles":
    console.log("The day of week is Wednesday");
    break;
  case "Jueves":
    console.log("The day of week is Thursday");
    break;
  case "Viernes":
    console.log("The day of week is Friday");
    break;
  case "Sabado":
    console.log("The day of week is Saturday");
    break;
  case "Domingo":
    console.log("The day of week is Sunday");
    break;
  default:
    console.log("Ingrese un día de la semana valido");
    break;
}

/**
 * 2) Escribir un programa que según el total de la compra, se agregue un valor de envio.
 * Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
 * Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
 * Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
 * Si la compra supera los $50 el gasto de envío será gratuito
 */

//  If and Else
var purchaseTotal = 30; // Cambia este valor según la compra realizada

if (purchaseTotal > 0) {
  // Compra superior a 0
  if (purchaseTotal <= 10) {
    var shippingCost = 3;
  } else if (purchaseTotal <= 20 && purchaseTotal > 10) {
    shippingCost = 5;
  } else if (purchaseTotal <= 50 && purchaseTotal > 20) {
    shippingCost = 7;
  } else {
    shippingCost = 0;
  }

  console.log("Total purchase: $" + purchaseTotal);
  console.log("Cost of shipping: $" + shippingCost);
  console.log("The total amount to pay is: $" + (purchaseTotal + shippingCost));
} else {
  // Compra con monto negativo
  console.log("The amount to be paid must be greater than 0");
}

//  Switch Case
var amount = 30; // Tipear el monto

switch (true) {
  case amount <= 10 && amount > 0:
    console.log("The amount to pay is " + (amount + 3) + "$");
    break;
  case amount <= 20 && amount >= 10:
    console.log("The amount to pay is " + (amount + 5) + "$");
    break;
  case amount <= 50 && amount >= 20:
    console.log("The amount to pay is " + (amount + 7) + "$");
    break;
  case amount > 50:
    console.log("The amount to pay is " + amount + "$, your shipping is free");
    break;
  case amount <= 0:
    console.log("The amount to be paid must be greater than 0");
    break;
  default:
    console.log("Enter a valid amount");
    break;
}
