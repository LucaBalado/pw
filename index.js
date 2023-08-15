const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);

//Lo que imprime es una lista de los numeros del 1 al 5 en donde el numero 1 fue reemplazado por el 10
//y el numero 3 fue reemplazado por el 30

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      suma = suma + numeros[i];
    }
  }
  console.log(suma);
}

sumarPares(numbers);

let palabras = ["juega", "casa", "mesa"];
function terminanEnA(words) {
  const todosTerminanEnA = words.every((word) => word.endswith("a"));
  console.log(todosTerminanEnA);
}
terminanEnA(palabras);
