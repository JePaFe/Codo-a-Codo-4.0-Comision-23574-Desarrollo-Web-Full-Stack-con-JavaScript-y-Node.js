// const nombres = ["Pedro", "Maria", "Ana", "Juan"];

// nombres.sort().reverse();

// ---

const numeros = [5, 1, 20, 4, 4, 10, 2, 30, 7, 3];

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

// numeros.sort(compare);

numeros.sort((a, b) => a - b);
