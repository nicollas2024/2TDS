let distancia = Number(prompt("Informe a distancia desejada"));
let preco;
if(distancia >= 200) {preco = distancia * 0.5} else{preco = distancia * 0.45 }
alert("Sua viajem custará "+preco)