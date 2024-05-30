let vitoria = 200;
let derrota = 150;
let rank;

saldo = calcularSaldo(vitoria,derrota);
rank = calcularRank(vitoria);

//Se for considerar apenas as vitórias como é pedido no desafio, o resultado fica:
console.log("O Herói tem de saldo de "+saldo+" está no nível de "+rank+"");

//Em ranks normalmente o que importa é o saldo, não apenas a quantidade de vitórias, então eu acredito que o código ficaria melhor da forma:

rank = calcularRank(saldo);
console.log("O Herói tem de saldo de "+saldo+" está no nível de "+rank+"");


function calcularSaldo(vitoria,derrota){
  let saldo = vitoria-derrota;
  return saldo;
}

function calcularRank(vitoria){
  if (vitoria <= 10 ){
    rank = "Ferro";
  } else if (vitoria <= 20){
    rank = "Bronze";
  } else if (vitoria <= 50){
    rank = "Prata";
  } else if (vitoria <= 80){
    rank = "Ouro";
  } else if (vitoria <= 90){
    rank = "Diamante";
  } else if (vitoria <= 100){
    rank = "Lendário";
  }else {
    rank = "Imortal";
  }
  return rank;
}