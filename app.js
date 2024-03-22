alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
while (chute ! = numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
   } else {
    if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
    } else {
        alert (`O número secreto é maior que ${chute}`); 
    }
    // tentativas = tentativas + 1; 
    tentativas++;
}
}

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    alert (`isso aí! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

   // if (tentativas >1) {
   //   alert (`isso aí! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
   // } else {
   //   alert (`isso aí! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
   // }
