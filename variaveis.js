
// tipo var
var nome = "Vanessa Araujo";
console.log(nome);

nome = "Elisama"
console.log(nome)

// tipo let
let nomeDaPessoa = "Elisama"
console.log(nomeDaPessoa)

nomeDaPessoa = "Vanessa Araujo"
console.log(nomeDaPessoa)

// atribuindo função a uma variavel
const idade = (pastel) => {
  let age = pastel;
  console.log(age);
}

idade(33);
// console.log(age); gera erro!!!!

const aluna = 'Nadia Aaújo';
console.log(aluna);

// aluna = "Larissa Moura"
// console.log(aluna)
// Gera erro!!

// Criando um objeto
let pessoa = {
  name: 'Nadia',
  age: 32,
  stature: 1.73,
  isWoman: true,
};
console.log(pessoa.name);

// array
const newArr = [1, 'nome', true, 2.2];
console.log(newArr[1]);

// validações
let estaVeirificado = 'Nome'
console.log(!!estaVeirificado);
console.log('concatenando', estaVeirificado + ' ' + estaVeirificado);

let sim = true;
let nao = false;

console.log(sim);

// uso da negação na prática;
const inscricao = (person) => {
  let woman = person.isWoman;
  !woman ? (console.log(`${person.name} Desenvolvedor`)) : (console.log(`${person.name} Desenvolvedora e tem ${person.age}`))
  woman && console.log(person.name, ' Desenvolvedora');
}

inscricao(pessoa);
