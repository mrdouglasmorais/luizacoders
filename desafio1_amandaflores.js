/* Desafio 1:
Criar dois objetos: pessoa A e pessoa B. 
Esses objetos receberão valores (nome, peso, altura, idade). 
Criar uma função que vai retornar o IMC e o ano de nascimento 
das pessoas A e B */

const personA = {
    name: 'Amanda',
    age: 28,
    weight: 68,
    height: 1.60,
    year: new Date().getFullYear(),
    birthYear: function(){
        let response = (`${this.name} nasceu em ` + (this.year - this.age));
        return response;
    },
    calcIMC: function(height, weight){
        let imc = (` e possui o IMC: ` +
        (this.weight / (this.height * this.height)).toFixed(2));
        return imc;
    }
}

const personB = {
    name: 'Carlos',
    age: 33,
    weight: 85,
    height: 1.90,
    year: new Date().getFullYear(),
    birthYear: function(){
        let response = (`${this.name} nasceu em ` + (this.year - this.age));
        return response;
    },
    calcIMC: function(height, weight){
        let imc = (` e possui o IMC: ` +
        (this.weight / (this.height * this.height)).toFixed(2));
        return imc;
    }
}

console.log(personA.birthYear() + personA.calcIMC());
console.log(personB.birthYear() + personB.calcIMC());

