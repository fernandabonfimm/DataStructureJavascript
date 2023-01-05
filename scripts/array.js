//Array de média de temperatura
console.log("Array de temperatura");
var avgTemp = [];

avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

for (var i = 0; i < avgTemp.length; i++) {
  console.log("Array de temperatura", avgTemp[i]);
}

// Array dos dias da semana
console.log("Array dos dias da semana");
var diasDaSemana = new Array("dom", "seg", "ter", "qua", "quin", "sex", "sab");

for (var i = 0; i < diasDaSemana.length; i++) {
  console.log("Dias da semana", diasDaSemana[i]);
}

//Fibonacci
console.log(
  "problema do Fibonacci, a soma dos dois anteriores é o resultados do posterior"
);
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log("Fibonacci array: ", fibonacci);

for (var i = 0; i < fibonacci.length; i++) {
  console.log("Fibonacci um por um: ", fibonacci[i]);
}

// Array de numeros
console.log("Array de numeros");

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Acrescentando elemento no array com pilha
numeros.push(12);
numeros.push(15);
numeros.push(20);

//Acrescentando elementos antes do menor numero do array
numeros.unshift(-1);
numeros.unshift(-3);
numeros.unshift(-5);

console.log("Números", numeros);
