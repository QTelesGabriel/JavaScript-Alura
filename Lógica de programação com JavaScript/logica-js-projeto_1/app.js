alert('Bem vindo ao jogo da adivinhação');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt(`Chute um número de 1 a ${numeroMaximo}:`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto < chute) {
            alert(`O número secreto é menor que ${chute}`);
        }
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns! Você acertou em ${tentativas} ${palavraTentativa}! O número secreto era ${numeroSecreto}`);
