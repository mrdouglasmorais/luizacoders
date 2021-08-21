// class createPerson {
//   constructor(name, age, personSize, personWeight) {
//       this.name = name;
//       this.age = age;
//       this.personSize = personSize;
//       this.personWeight = personWeight;

//       let imc = calcIMC(personSize, personWeight);
//       this.imc = imc;

//       let year = calcAge(this.age);
//       this.yearBirth = year;

//   }
// }

// function calcIMC(personSize, personWeight){
//   return (personWeight / (personSize * personSize)).toFixed(2)
  
// }
// function calcAge(age){
//   var year = new Date().getFullYear();
//   return (year - age)
  
// }

// function arrayPerson(...person){
//   const arrayPerson=[...person];
//   console.log(arrayPerson)
// }

// const personA = new createPerson("Renata", 28, 1.50, 65)
// const personB = new createPerson("Marciel", 35, 1.70, 70)

// arrayPerson(personA, personB)

// Refatorando
class personRefec{
  constructor( { nome, idade, altura, peso } ){
    this.nome = nome
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  // getter
  get result(){
    return this.concatResult();
  }

  imc(){
    return (this.peso / (this.altura * this.altura)).toFixed(2)
  }

  calculaAno(){
    let date = new Date();
    return (date.getFullYear() - this.idade);
  }

  concatResult(){
    return {
      nome: this.nome,
      imc: this.imc(),
      anoDeNasc: this.calculaAno(),
    }
  }

  // setters
  // set valor(){

  // }

}

let testandoClasse = new personRefec({ 
  altura: 1.60, 
  peso: 70, 
  idade: 30, 
  nome: 'Lorena' 
});

console.log('primeiro objeto', testandoClasse.result)

let testandoClasseDenovo = new personRefec({ 
  altura: 1.80, 
  peso: 60, 
  idade: 21, 
  nome: 'Elisama' 
});

let unindo = [testandoClasse.result, testandoClasseDenovo.result]

console.log('segundo objeto', testandoClasseDenovo.result)

console.log('unindo resultado', unindo)

let alunos = [
  { name: 'Elisama', age: 22},
  { name: 'Lorena' }
]

alunos.map(val => console.log(val.age))