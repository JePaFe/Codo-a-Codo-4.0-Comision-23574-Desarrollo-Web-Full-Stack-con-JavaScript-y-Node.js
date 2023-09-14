// let cantidad = 2;

// if (cantidad >= 3) {
//   console.log("Tiene un descuento");
// } else {
//   console.log("Paga el precio de lista");
// }

// console.log(cantidad >= 3);

// ---

let semaforo = "Verde";

// semaforo = semaforo.toLowerCase();

// if (semaforo == "verde" || semaforo == "Verde") {
//   console.log("Avanzar");
// } else {
//   if (semaforo == "Amarillo") {
//     console.log("Precaución");
//   } else {
//     console.log("Detener");
//   }
// }

// if (semaforo == "verde" || semaforo == "Verde") {
//   console.log("Avanzar");
// } else if (semaforo == "Amarillo") {
//   console.log("Precaución");
// } else if (semaforo == "Rojo") {
//   console.log("Detener");
// }

// if (semaforo == "verde" || semaforo == "Verde") {
//   console.log("Avanzar");
// } else if (semaforo == "Amarillo") {
//   console.log("Precaución");
// } else {
//   console.log("Detener");
// }

switch (semaforo) {
  case "Verde":
    console.log("Avanzar");
    break;
  case "Amarillo":
    console.log("Precaución");
    break;
  default:
    console.log("Detener");
}
