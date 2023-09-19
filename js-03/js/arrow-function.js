// function mensaje() {
//   console.log("Un mensaje!");
// }

// const mensaje = function () {
//   console.log("Un mensaje!!");
// };

// const mensaje = () => console.log("Un mensaje!!!");

// mensaje();

// ---

// function saludar(nombre) {
//   return "Hola " + nombre;
// }

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

// const saludar = nombre => `Hola ${nombre}`;

// let saludo = saludar("Maria");
// console.log(saludo);

// ---

// const sumar = function (num1, num2) {
//   let suma = num1 + num2;

//   return suma;
// };

const sumar = (num1, num2) => {
  let suma = num1 + num2;

  return suma;
};

let resultado = sumar(3, 4);
console.log(resultado);
