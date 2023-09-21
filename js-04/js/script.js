class Persona {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.admin = false;
  }

  nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

const persona2 = new Persona(1, "Juan", "Perez");

const nombre_completo = persona2.nombreCompleto();
console.log(nombre_completo);
