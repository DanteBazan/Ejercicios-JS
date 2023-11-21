///EJERCICIO 1

console.log("Ejercicio numero 1");

function numerosPares(number) {
  if (number % 2 === 0) {
    console.log(`El numero es par`);
  } else {
    console.log(`El numero es impar`);
  }
}

numerosPares(9);

console.log("-------------------------------");

//EJERCICIO 2
console.log("Ejercicio numero 2");

function mayorIgual(number1, number2) {
  if (number1 > number2) {
    console.log(`Number1 es mayor`);
  } else if (number2 > number1) {
    console.log(`Number2 es mayor`);
  } else {
    console.log(`Los numeros son iguales`);
  }
}

mayorIgual(20, 20);

console.log("--------------------------------");

//EJERCICIO 3
console.log("Ejercicio 3");

function multiplo(numero) {
  if (numero % 5 == 0) {
    console.log(`${numero} es multiplo de 5`);
  } else {
    console.log(`el ${numero} no es multiplo`);
  }
}

multiplo(5);

console.log("--------------------------------");

//EJERCICIO 4
console.log("Ejercicio 4");

function imprimir(b) {
  for (let i = 0; i <= b; i++) {
    console.log(i);
  }
}

imprimir(5);

console.log("-----------------------------");

//EJERCICIO 5
console.log("Ejercicio 5");

function frases(frase, cantidad) {
  for (let i = 0; i <= cantidad; i++) console.log(frase);
}

frases("laucha", 10);

console.log("----------------------------");

//EJERCICIO 6
console.log("Ejercicio 6");

const miArray = ["Dante", "Lucho", "Erick", "Marcelo", "Ale", "Laucha"];

function functionArray(miArray) {
  console.log(miArray);
}

functionArray(miArray);
//NO SE SI ESTA BIEN ECHO JAJA, PERO MASO MENOS LO HICE ASI JAJA.

console.log("----------------------------");

//EJERCICIO 7
console.log("Ejercicio 7");

const array = (numeros) => {
  for (numero of numeros) {
    if (numero == 4) {
      continue;
    }
    console.log(numero);
  }
};

let contador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array(contador);

console.log("--------------------------");
//EJERCICIO 8
console.log("Ejercicio 8");

function arrayy(numeros, num) {
  for (numero of numeros) {
    let result = numero * num;
    console.log(result);
  }
}

let numerosDeArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMultiplicador = 3;

arrayy(numerosDeArray, numeroMultiplicador);
console.log("----------------------");
console.log("Me costo una banda");
