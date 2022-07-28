const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

const resultado = document.getElementById('resultado');

function somar() {
    
    let soma = parseFloat(number1.value) + parseFloat(number2.value);
    resultado.textContent = soma;
}

function subtrair() {
    
    let subtracao = parseFloat(number1.value) - parseFloat(number2.value);
    resultado.textContent = subtracao;
}

function dividir() {

    if (parseFloat(number2.value) == 0) {
        resultado.textContent = 'Não existe divisão por 0'; 
    } else{
        
        let divisao = parseFloat(number1.value) / parseFloat(number2.value);
        resultado.textContent = divisao;
    }
}

function multiplicar() {
    
    let multiplicacao = parseFloat(number1.value) * parseFloat(number2.value);
    resultado.textContent = multiplicacao;
}

const buttonSomar = document.getElementById('buttonSomar').addEventListener('click', somar);
const buttonSubtrair = document.getElementById('buttonSubtrair').addEventListener('click', subtrair);
const buttonDividir = document.getElementById('buttonDividir').addEventListener('click', dividir);
const buttonMultiplicar = document.getElementById('buttonMultiplicar').addEventListener('click', multiplicar);