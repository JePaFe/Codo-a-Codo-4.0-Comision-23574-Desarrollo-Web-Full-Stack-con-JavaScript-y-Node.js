// const dias = ["Martes", "Miércoles", "Jueves", "Viernes"];

// const dosDias = dias.slice(1, 3);

// ---

const dias = ["Martes", "algo", "Jueevs", "Viernes"];

dias.splice(1, 1);
dias.splice(1, 0, "Miércoles");

const index = dias.indexOf("Jueevs");
// console.log(index);
dias.splice(index, 1, "Jueves");
// dias[2] = "Jueves";
