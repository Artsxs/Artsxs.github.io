let pontos = 0;

let pontosPorClique = 1;
let precoUpgradeClique = 10;

let pontosPorSegundo = 0;
let precoUpgradeSegundo = 50;

const precoRng = 1000;

let mochila = [];
let equipados = [];

const personagens = [
  {
    nome: "Tanjiro",
    chanceTexto: "1/2",
    multiplicador: 2,
    raridade: "comum"
  },
  {
    nome: "Naruto",
    chanceTexto: "1/10",
    multiplicador: 10,
    raridade: "raro"
  },
  {
    nome: "Luffy",
    chanceTexto: "1/25",
    multiplicador: 25,
    raridade: "epico"
  },
  {
    nome: "Ichigo",
    chanceTexto: "1/50",
    multiplicador: 50,
    raridade: "lendario"
  },
  {
    nome: "Goku",
    chanceTexto: "1/100",
    multiplicador: 100,
    raridade: "mitico"
  },
  {
    nome: "Saitama",
    chanceTexto: "1/500",
    multiplicador: 500,
    raridade: "divino"
  }
];

const textoPontos = document.getElementById("pontos");
const textoPontosPorClique = document.getElementById("pontosPorClique");
const textoPontosPorSegundo = document.getElementById("pontosPorSegundo");
const textoMultiplicador = document.getElementById("multiplicador");
const textoGanhoRealClique = document.getElementById("ganhoRealClique");

const botaoClick = document.getElementById("botaoClick");
const botaoUpgradeClique = document.getElementById("upgradeClique");
const botaoUpgradeSegundo = document.getElementById("upgradeSegundo");
const botaoRng = document.getElementById("botaoRng");

const mensagem = document.getElementById("mensagem");

const personagemAtual = document.getElementById("personagemAtual");
const chanceAtual = document.getElementById("chanceAtual");
const multiplicadorAtual = document.getElementById("multiplicadorAtual");
const listaPersonagens = document.getElementById("listaPersonagens");

const mochilaPersonagens = document.getElementById("mochilaPersonagens");
const quantidadeEquipados = document.getElementById("quantidadeEquipados");

botaoClick.addEventListener("click", function () {
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganho = pontosPorClique * multiplicadorTotal;

  pontos = pontos + ganho;

  mensagem.textContent = "Você atacou e ganhou +" + ganho + " pontos!";
  atualizarTela();
});

botaoUpgradeClique.addEventListener("click", function () {
  if (pontos >= precoUpgradeClique) {
    pontos = pontos - precoUpgradeClique;
    pontosPorClique = pontosPorClique + 1;
    precoUpgradeClique = precoUpgradeClique * 3;

    mensagem.textContent = "Treino de força comprado!";
    atualizarTela();
  } else {
    mensagem.textContent = "Pontos insuficientes para comprar treino de força.";
  }
});

botaoUpgradeSegundo.addEventListener("click", function () {
  if (pontos >= precoUpgradeSegundo) {
    pontos = pontos - precoUpgradeSegundo;
    pontosPorSegundo = pontosPorSegundo + 1;
    precoUpgradeSegundo = precoUpgradeSegundo * 3;

    mensagem.textContent = "Aura automática comprada!";
    atualizarTela();
  } else {
    mensagem.textContent = "Pontos insuficientes para comprar aura automática.";
  }
});

botaoRng.addEventListener("click", function () {
  if (pontos < precoRng) {
    mensagem.textContent = "Você precisa de 1.000 pontos para girar o RNG.";
    return;
  }

  pontos = pontos - precoRng;

  const personagemSorteado = sortearPersonagem();

  adicionarNaMochila(personagemSorteado);

  personagemAtual.textContent = personagemSorteado.nome;
  chanceAtual.textContent = personagemSorteado.chanceTexto;
  multiplicadorAtual.textContent = personagemSorteado.multiplicador + "x";

  mensagem.textContent =
    "Você pegou " +
    personagemSorteado.nome +
    "! Quantidade na mochila atualizada.";

  atualizarTela();
  atualizarMochila();
});

setInterval(function () {
  pontos = pontos + pontosPorSegundo;
  atualizarTela();
}, 1000);

function adicionarNaMochila(personagemSorteado) {
  const personagemExistente = mochila.find(function (item) {
    return item.nome === personagemSorteado.nome;
  });

  if (personagemExistente) {
    personagemExistente.quantidade = personagemExistente.quantidade + 1;
    return;
  }

  const novoPersonagem = {
    nome: personagemSorteado.nome,
    chanceTexto: personagemSorteado.chanceTexto,
    multiplicador: personagemSorteado.multiplicador,
    raridade: personagemSorteado.raridade,
    quantidade: 1
  };

  mochila.push(novoPersonagem);
}

function sortearPersonagem() {
  const numeroSorteado = Math.random();

  if (numeroSorteado < 1 / 500) {
    return personagens[5];
  }

  if (numeroSorteado < 1 / 100) {
    return personagens[4];
  }

  if (numeroSorteado < 1 / 50) {
    return personagens[3];
  }

  if (numeroSorteado < 1 / 25) {
    return personagens[2];
  }

  if (numeroSorteado < 1 / 10) {
    return personagens[1];
  }

  return personagens[0];
}

function equiparPersonagem(nome) {
  const personagem = mochila.find(function (item) {
    return item.nome === nome;
  });

  if (!personagem) {
    mensagem.textContent = "Personagem não encontrado na mochila.";
    return;
  }

  const jaEquipado = equipados.some(function (item) {
    return item.nome === nome;
  });

  if (jaEquipado) {
    mensagem.textContent = personagem.nome + " já está equipado.";
    return;
  }

  if (equipados.length >= 3) {
    mensagem.textContent = "Você só pode equipar no máximo 3 personagens.";
    return;
  }

  equipados.push(personagem);

  mensagem.textContent = personagem.nome + " foi equipado!";
  atualizarTela();
  atualizarMochila();
}

function desequiparPersonagem(nome) {
  equipados = equipados.filter(function (item) {
    return item.nome !== nome;
  });

  mensagem.textContent = nome + " foi desequipado.";
  atualizarTela();
  atualizarMochila();
}

function calcularMultiplicadorTotal() {
  if (equipados.length === 0) {
    return 1;
  }

  let total = 0;

  equipados.forEach(function (personagem) {
    total = total + personagem.multiplicador;
  });

  return total;
}

function atualizarTela() {
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganhoReal = pontosPorClique * multiplicadorTotal;

  textoPontos.textContent = pontos;
  textoPontosPorClique.textContent = pontosPorClique;
  textoPontosPorSegundo.textContent = pontosPorSegundo;
  textoMultiplicador.textContent = multiplicadorTotal + "x";
  textoGanhoRealClique.textContent = ganhoReal;

  botaoUpgradeClique.textContent =
    "Comprar treino de força - " + precoUpgradeClique + " pontos";

  botaoUpgradeSegundo.textContent =
    "Comprar aura automática - " + precoUpgradeSegundo + " pontos";

  botaoRng.textContent = "Girar RNG - " + precoRng + " pontos";

  quantidadeEquipados.textContent = equipados.length;
}

function montarListaPersonagens() {
  listaPersonagens.innerHTML = "";

  personagens.forEach(function (personagem) {
    const card = document.createElement("div");

    card.classList.add("personagem-card");
    card.classList.add(personagem.raridade);

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador: ${personagem.multiplicador}x</span>
    `;

    listaPersonagens.appendChild(card);
  });
}

function atualizarMochila() {
  mochilaPersonagens.innerHTML = "";

  if (mochila.length === 0) {
    mochilaPersonagens.innerHTML =
      '<p class="mochila-vazia">Sua mochila está vazia. Gire o RNG para ganhar personagens.</p>';
    quantidadeEquipados.textContent = equipados.length;
    return;
  }

  mochila.forEach(function (personagem) {
    const estaEquipado = equipados.some(function (item) {
      return item.nome === personagem.nome;
    });

    const card = document.createElement("div");

    card.classList.add("personagem-card");
    card.classList.add(personagem.raridade);

    if (estaEquipado) {
      card.classList.add("equipado");
    }

    const tituloStatus = estaEquipado ? "Equipado" : "Na mochila";
    const textoBotao = estaEquipado ? "Desequipar" : "Equipar";
    const classeBotao = estaEquipado ? "botao-desequipar" : "botao-equipar";

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Status: ${tituloStatus}</span>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador: ${personagem.multiplicador}x</span>
      <span class="quantidade">Quantidade: x${personagem.quantidade}</span>
      <button class="${classeBotao}" data-nome="${personagem.nome}">
        ${textoBotao}
      </button>
    `;

    mochilaPersonagens.appendChild(card);
  });

  const botoes = mochilaPersonagens.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const nome = botao.dataset.nome;

      const estaEquipado = equipados.some(function (item) {
        return item.nome === nome;
      });

      if (estaEquipado) {
        desequiparPersonagem(nome);
      } else {
        equiparPersonagem(nome);
      }
    });
  });

  quantidadeEquipados.textContent = equipados.length;
}

montarListaPersonagens();
atualizarTela();
atualizarMochila();
