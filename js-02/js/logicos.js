let result;

// 3, 4, 5, 6

let num = 1;

p = num >= 3;
q = num <= 6;

result = p && q;
result = num >= 3 && num <= 6;

// ---

let edad = 12;
let autorizacion = false;

p = edad >= 13;
q = autorizacion == true;

result = p || q;
result = edad >= 13 || autorizacion == true;

// ---

let encendido = true;

encendido = !encendido; // false
