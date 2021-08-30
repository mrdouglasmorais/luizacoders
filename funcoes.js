function calculoIMC(altura, peso){
  console.log((peso / (altura * altura)).toFixed(2))
}
calculoIMC(1.93, 92);

let funcaoAnonima = function(altura, peso){
  console.log((peso / (altura * altura)).toFixed(2))
}
funcaoAnonima(1.70, 75)

let funcaoArrow = (altura, peso) => {
  console.log((peso / (altura * altura)).toFixed(2))
}
funcaoArrow(1.70, 75)

const product = {
  name: 'Iphone',
  price: 6000,
  discount: 5,
  finalPrice: function(){
    let result = (this.price - (this.price * this.discount) / 100);
    return Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL'}).format(result);
  }
}

console.log(product.finalPrice());

const queDiaEHoje = new Date();
console.log(new Intl.DateTimeFormat('pt-BR').format(queDiaEHoje));