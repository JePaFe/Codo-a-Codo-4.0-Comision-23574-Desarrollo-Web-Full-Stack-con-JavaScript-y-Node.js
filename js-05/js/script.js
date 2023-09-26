// const numeros = [5, 2, 8, 4, 9, 7, 1];

// let result = numeros.every((numero) => numero > 0);

// result = numeros.some((numero) => numero > 5);

// ---

const numeros = [1, 2, 3, 4];

//                                10
const total = numeros.reduce((acumulador, numero) => {
  return (acumulador += numero);
}, 0);

console.log(total);
