//  =
// ==
// ===

let a = 12;
let b = 12;
console.log(a === b);

b = '12';
console.log(a == b);

// !==

b = '12';
console.log(a != b);
console.log(a !== b);

// >
// <
// >=
// <=

console.log( 1 < 2); // true
console.log( 1 > 2); // false
console.log( 1 >= 2); // false
console.log( 1 <= 2); //true

//  ||
//  &&

let isWoman = true;
let isMan = false;

isWoman ? console.log('sim') : console.log('nao') // sim

isWoman || isMan ? console.log('sim') : console.log('nao') //sim

isWoman && isMan ? console.log('sim') : console.log('nao') //não


