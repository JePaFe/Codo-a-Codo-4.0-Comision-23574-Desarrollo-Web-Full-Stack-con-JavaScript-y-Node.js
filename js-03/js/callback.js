// function saludaConsole(nombre) {
//   let mensaje = "Hola Tom's " + nombre;
//   console.log(mensaje);
// }

// function saludarWrite(nombre) {
//   let mensaje = `Hola "Palabra" ${nombre}`;
//   document.write(mensaje);
// }

// saludaConsole("Juan");
// saludarWrite("Maria");

// ---

function saludar(nombre, callback) {
  let mensaje = `Hola ${nombre}`;

  //   setTimeout(() => {
  callback(mensaje);
  //   }, Math.floor(Math.random() * (3000 - 100 + 1) + 100));
}

function mensaje(texto) {
  document.write(texto);
}

saludar("Uno", console.log);
saludar("Dos", alert);
saludar("Tres", mensaje);
