class Exemplo{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  speak(){
    return console.log(`Nome ${this.name} idade: ${this.age}`);
  }
  // setters
  set person(person){
    return this.age = person;
  }
  set namePerson(namePerson){
    return this.name = namePerson;
  }
}



// set value
let setandoValores = new Exemplo();
setandoValores.person = 22;
setandoValores.namePerson = 'John';
setandoValores.speak();


let issoEUmaClasse = new Exemplo();

issoEUmaClasse.speak();



//  rest operator
let arrTester = { name: 'aluno'} ;
let arrTesterNovo = { name: 'aluno'};

let arrStudents = [];

let usandoOSpread = [ ...arrStudents, arrTesterNovo]

// Resultado do spread 
console.log('resultado do spread', usandoOSpread)

console.log(arrTester);
console.log(arrTesterNovo);

console.log(arrTester);

let pessoa = {
  name: 'Pesso',
  age: 33
}

console.log(pessoa.age);

console.log({ ...pessoa, stature: 1.70 });


console.log({ ...pessoa, age: 22});
