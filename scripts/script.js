
let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando ...");

    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;
    let duracao = document.getElementById("duracao").value;

    let totalCarne = (carnePP(duracao) * adultos) + (carnePP(duracao) / 2 * criancas); 
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalBebidas = (bebidasPP(duracao) * adultos) + (bebidasPP(duracao) / 2 * criancas); 

    resultado.innerHTML = `<p>${parseFloat((totalCarne / 1000).toFixed(2))} Quilos de Carne</p>` // toFixed adiciona casas decimais em uma string e o parseFloat converte para numero decimal
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} Latas de Cerveja</p>` // Math.ceil arredonda para cima
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas / 1000 / 2)} Refrigerantes de 2 litros de Bebidas</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

