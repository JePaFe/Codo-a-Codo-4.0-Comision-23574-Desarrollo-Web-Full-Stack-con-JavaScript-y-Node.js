function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiplicar(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      reject("Los valores no son numéricos");
    }
    setTimeout(() => {
      resolve({
        num1,
        numero2: num2,
        result: num1 * num2,
      });
    }, getRandomIntInclusive(100, 2000));
  });
}

const tabla = async () => {
  try {
    let res = await multiplicar(1, 2);
    console.log(`${res.num1} * ${res.numero2} = ${res.result}`);

    res = await multiplicar(1, 2);
    console.log(`${res.num1} * ${res.numero2} = ${res.result}`);

    res = await multiplicar(3, 2);
    console.log(`${res.num1} * ${res.numero2} = ${res.result}`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Siempre");
  }
};

tabla();
