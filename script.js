const imagemprincipla = document.getElementById("imagem-visualizacao");
const tituloproduto = document.getElementById("titulo-produto");
const corpricipla = document.getElementById("nome-cor-selecionada");
const miniaturas0 = document.getElementById("0-imagem-miniatura")
const miniaturas1 = document.getElementById("1-imagem-miniatura")
const miniaturas2 = document.getElementById("2-imagem-miniatura")

const verdeCipreste = {
  nome: 'Verde-cipreste',
  Pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
  nome: 'Azul-inverno',
  Pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
  nome: 'Meia-noite',
  Pasta: 'imagens-meia-noite'
};

const estelar = {
  nome: 'Estelar',
  Pasta: 'imagens-estelar'
};

const rosaClaro = {
  nome: 'Rosa-claro',
  Pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionad = 1;
let corSelecionada = 1;

function trocaImagem() {
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
 
  imagemprincipla.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].Pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}

function trocaTamanho() {
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
  tamanhoSelecionad = idOpcaoSelecionada.charAt(0);
  
  tituloproduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de " + opcoesTamanho[tamanhoSelecionad];
  
  if (opcoesTamanho[tamanhoSelecionad] === '41 mm') {
    imagemprincipla.classList.add('caixa-pequena');
  } else {
    imagemprincipla.classList.remove('caixa-pequena');
  }
}

function trocaCor() {
  const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
  corSelecionada = idOpcaoSelecionada.charAt(0);
 
  tituloproduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de " + opcoesTamanho[tamanhoSelecionad];
  
  corpricipla.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
 
  miniaturas0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].Pasta + "/imagem-0.jpeg";
  miniaturas1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].Pasta + "/imagem-1.jpeg";
  miniaturas2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].Pasta + "/imagem-2.jpeg";

  imagemprincipla.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].Pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}
 
