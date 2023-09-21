// let nombre = "Juan";
// let apellido = "Perez";
// let dni = 98765432;

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

// console.log(Object.getOwnPropertyDescriptor(usuario, "dni"));

// console.log(Object.keys(usuario));
// console.log(Object.values(usuario));

usuario.nombre = "Juan Pablo";
console.log(usuario.nombre);

// usuario["nombre"] = "Peter Pablo";

console.log(usuario.nombre);
console.log(usuario["apellido"]);

usuario.id = 123;

delete usuario.dni;
