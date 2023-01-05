//Array de média de temperatura
console.log("Array de temperatura");
var avgTempSemana = [];

var avgTempSemana1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempSemana2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

avgTempSemana[0] = avgTempSemana1;
avgTempSemana[1] = avgTempSemana2;

for (var i = 0; i < avgTempSemana.length; i++) {
  for (var j = 0; j < avgTempSemana[i].length; j++) {
    console.log("Array 1 e 2 de temperatura: ", avgTempSemana[i][j]);
  }
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

// Removendo o ultimo elemento do array
numeros.pop();

numeros.shift();

//Removendo elementos do array, partindo de acordo com a qnt indicada com splice
numeros.splice(3, 3);
console.log("numeros removidos com splice: ", numeros);

//Inserir elementos em uma posição especifica do array com splice
numeros.splice(3, 0, 3, 4, 5);
console.log("numeros inseridos com splice: ", numeros);
