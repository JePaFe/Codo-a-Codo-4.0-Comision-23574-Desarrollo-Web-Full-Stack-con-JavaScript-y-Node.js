function Persona(id, nombre, apellido) {
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.admin = false;

  // this.nombreCompleto = function (texto) {
  //   return `${texto} ${this.nombre} ${this.apellido}`;
  // };
}

Persona.prototype.nombreCompleto = function (texto) {
  //   return `${texto} ${this.nombre} ${this.apellido}`;
  return this.saludar(`${texto} ${this.nombre} ${this.apellido}`);
};

Persona.prototype.saludar = function (texto) {
  return `${texto}`;
};

// const nombreCompleto = function (texto, nombre, apellido) {
//   return `${texto} ${nombre} ${apellido}`;
// };

const persona1 = new Persona(1, "Juan", "Perez");

persona1.id = 123;
persona1.dni = 98765432;

const nombre_completo = persona1.nombreCompleto("Hola");
// const nombre_completo = nombreCompleto(
//   "Hola",
//   persona1.nombre,
//   persona1.apellido
// );
console.log(nombre_completo);

delete persona1.apellido;
