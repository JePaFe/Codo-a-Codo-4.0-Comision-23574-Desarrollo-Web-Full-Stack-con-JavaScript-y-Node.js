// function saludaConsole() {
//   console.log("Hola");
// }

// function saludarAlert() {
//   alert("Hola");
// }

// function saludarWrite() {
//   document.write("Hola");
// }

// saludaConsole();
// saludarAlert();
// saludarWrite();

// ---

// function saludar() {
//   return "Hola";
// }

// const texto = saludar();

// console.log(texto);
// document.write(texto);

// ---

// function sumar() {
//   let num1 = 3;
//   let num2 = 4;
//   let suma = num1 + num2;

//   return suma;
// }

const sumar = function () {
  let num1 = 3;
  let num2 = 4;
  let suma = num1 + num2;

  return suma;
};

let resultado = sumar();
console.log(resultado);

console.log(resultado * 2);
