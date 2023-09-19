// function sumar(num1, num2, callback) {
//   let suma = num1 + num2;
//   callback(suma);
// }

// // let fn = function (result) {
// //   console.log("La en log suma es: " + result);
// // };

// // fn(5);

// sumar(4, 6, function (result) {
//   console.log("La en log suma es: " + result);
// });

// // ---

// // sumar(5, 3, function (result) {
// //   document.write("La en write suma es: " + result);
// // });

// --

// function mensaje(textoMensaje) {
//   console.log(textoMensaje);
// }

// let mensaje = function (textoMensaje) {
//   console.log(textoMensaje);
// };

// mensaje("Imprimir en impresora");

const pdf = function (textoMensaje) {
  console.log(textoMensaje);
};

const impresora = function (textoMensaje) {
  console.log(textoMensaje);
};

function imprimir(texto, fn) {
  fn(texto);
}

imprimir("Un texto", pdf);
imprimir("Un texto", impresora);
