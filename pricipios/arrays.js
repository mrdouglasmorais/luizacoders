let pessoas = [
  { 
    nome: 'Nadia',
    idade: 17
  },
  { 
    nome: 'Chauana',
    idade: 23
  },
];

let filtrando = pessoas.filter( value => value.idade <= 18 );
console.log(filtrando);

let mapeando = pessoas.map( (pessoa, index) => console.log('usando o map', pessoa.nome, index));
mapeando;

let procura = pessoas.find( pessoa => pessoa.nome === 'Chauana' )
console.log(procura);


let calcula = (valor, soma) => valor.idade + soma.idade;
let reducao = pessoas.reduce(calcula);
console.log('reduce', reducao);

function isBiggerThan10(element, index, array) {
  return element > 10;
}
let a = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
let b = [12, 5, 8, 1, 4].some(isBiggerThan10); // true

console.log(a, b);

let arrTest = [ 10, 20, 30, 40, 50, 60]

for(const el of arrTest){
  console.log(el)
}

const logArr = (el, index, array) => {
  console.log(`indice ${index}, valor = ${el}`)
}

arrTest.forEach(logArr)

