let listaDeNumerosSorteados = [];
let limiteQuantidade = 100;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazzilian Portuguese Female", { rate: 1.2 });
}
function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "escolha um numero entre 1 e 100");
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute == NumeroSecreto);
  console.log("O botão foi clicado");

  if (chute == NumeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

    document.getElementById("reiniciar").removeAttribute("disabled");

    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > NumeroSecreto) {
      exibirTextoNaTela("p", "O numero é menor");
    } else {
      exibirTextoNaTela("p", "O numero é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteQuantidade + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == limiteQuantidade) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  NumeroSecreto = gerarNumeroAleatorio;
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

//Desafio functions

function olaMundo() {
  console.log("Olá Mundo");
}

olaMundo();

function pessoa(nome) {
  console.log(`Olá ${nome}`);
}

pessoa("Vinicius");

function Multiplcar(numero) {
  return numero * 2;
}
let resultadoDobro = Multiplcar(15);
console.log(resultadoDobro);

Multiplcar("15");

function calculoMedia(A, B, C) {
  console.log((A + B + C) / 3);
}

let media = calculoMedia(12, 24, 36);
console.log(media);

function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let numeroMaior = encontrarMaior(15, 27);
console.log(numeroMaior);

function multiplicarEle(a) {
  console.log(a * a);
}
let resultado = multiplicarEle(5);
console.logo(elePorEle);

//Segundo desafio

function calculoIMC(peso, altura) {
  let imc = peso / (altura * altura);
}

calculoIMC();
