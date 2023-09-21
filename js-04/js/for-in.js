const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

for (const prop in usuario) {
  console.log(`obj.${prop}: ${usuario[prop]}`);
}

// ---

const keys = Object.keys(usuario);

for (let i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
  //   const prop = keys[i];
  //   console.log(usuario[prop]);

  console.log(`obj.${keys[i]}: ${usuario[keys[i]]}`);
}
