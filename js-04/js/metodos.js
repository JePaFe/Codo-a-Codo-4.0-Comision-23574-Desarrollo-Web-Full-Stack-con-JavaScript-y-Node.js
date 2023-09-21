const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
  //   nombreCompleto: function () {
  //     console.log(this.nombre + " " + this.apellido);
  //   },
  nombreCompleto() {
    console.log(this.nombre + " " + this.apellido);
  },
};

const usuario1 = {
  nombre: "Maria",
  apellido: "Garcia",
  dni: 23456789,
  nombreCompleto: function (texto) {
    // console.log(this.nombre + " " + this.apellido);
    return `${texto} ${this.nombre} ${this.apellido}`;
  },
};

usuario.nombreCompleto();

const nombre_completo = usuario1.nombreCompleto("Hola");
console.log(nombre_completo);

function documento() {
  usuario.nombreCompleto();
}
