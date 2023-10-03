// function fn() {
//   console.log("Pasaron 2 segundos");
// }

// console.log("1");

// setInterval(() => {
//   console.log("Pasaron 2 segundos");
// }, 2000);

// console.log("2");

// ---

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiplicar(num1, num2, callback) {
  setTimeout(() => {
    callback(num1, num2, num1 * num2);
  }, getRandomIntInclusive(100, 2000));
}

// const fn = (num1, num2, result) => {
//   console.log(`${num1} * ${num2} = ${result}`);
// };

multiplicar(1, 2, (num1, num2, result) => {
  console.log(`${num1} * ${num2} = ${result}`);

  multiplicar(2, 2, (num1, num2, result) => {
    console.log(`${num1} * ${num2} = ${result}`);

    multiplicar(3, 2, (num1, num2, result) => {
      console.log(`${num1} * ${num2} = ${result}`);
    });
  });
});
