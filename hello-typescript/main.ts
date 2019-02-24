// TS aceita js vanilla, por exemplo variáveis e funções
var minhaVar = "minha variável";

function minhaFunc(x, y) {
  return x + y;
}

// ES6 (http://es6-features.org/)
let i = 0;
const PI = 3.14;

// Arrow function
var numeros = [1, 2, 3, 4];
numeros.map(v => v * 2);

// Para observar as diferenças entre puro e ES6 ()
class Matematica {
  soma(x, y) {
    return x + y;
  }
}

var n1: any = "Qualquer tipo";
n1 = 1;
