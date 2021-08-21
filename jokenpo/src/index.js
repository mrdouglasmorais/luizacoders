const options = require('./data');
const User = require('./controller/user');

let jogar = new User({ opt: options }).game();
jogar