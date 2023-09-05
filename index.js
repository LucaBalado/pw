let numbers = [3, -1, 9, -12, -18];
function sortAbsoluteNumbers(numeros) {
  let numabs = [];
  for (let i of numeros) {
    const numero = Math.abs(i);
    numabs.push(numero);
  }
  const order = numabs.sort(function (a, b) {
    return a - b;
  });
  return order;
}
console.log(sortAbsoluteNumbers(numbers));

/**/

let words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];
let word = "pepito";

function buscaPalabras(words, word) {
  //const palabras = words.filter(length());
  const palabra = words.indexOf(word);
  let letras = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > palabra) {
      letras.push(words[i]);
    }
  }
  console.log(letras);
}
buscaPalabras(words, word);
