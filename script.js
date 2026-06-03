const SAVE_KEY = "animeClickerSimulatorSaveV2";

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
  },
  {
    nome: "Herói Secreto",
    chanceTexto: "1/2000",
    multiplicador: 2000,
    raridade: "secreto"
  }
];

const missoes = [
  {
    id: "cliques50",
    titulo: "Primeiros ataques",
    descricao: "Clique 50 vezes.",
    recompensa: 1000,
    concluida: function () {
      return jogo.stats.cliques >= 50;
    },
    progresso: function () {
      return Math.min(jogo.stats.cliques, 50) + "/50 cliques";
    }
  },
  {
    id: "giros5",
    titulo: "Começando no RNG",
    descricao: "Gire o RNG 5 vezes.",
    recompensa: 2500,
    concluida: function () {
      return jogo.stats.giros >= 5;
    },
    progresso: function () {
      return Math.min(jogo.stats.giros, 5) + "/5 giros";
    }
  },
  {
    id: "equipar3",
    titulo: "Time completo",
    descricao: "Equipe 3 personagens.",
    recompensa: 3000,
    concluida: function () {
      return jogo.equipados.length >= 3;
    },
    progresso: function () {
      return Math.min(jogo.equipados.length, 3) + "/3 equipados";
    }
  },
  {
    id: "boss1",
    titulo: "Caçador de Boss",
    descricao: "Derrote 1 boss.",
    recompensa: 5000,
    concluida: function () {
      return jogo.stats.bossesDerrotados >= 1;
    },
    progresso: function () {
      return Math.min(jogo.stats.bossesDerrotados, 1) + "/1 boss";
    }
  }
];

let jogo = criarJogoInicial();

const textoPontos = document.getElementById("pontos");
const textoPontosPorClique = document.getElementById("pontosPorClique");
const textoPontosPorSegundo = document.getElementById("pontosPorSegundo");
const textoMultiplicador = document.getElementById("multiplicador");
const textoGanhoRealClique = document.getElementById("ganhoRealClique");
const textoNivelSorte = document.getElementById("nivelSorte");

const botaoClick = document.getElementById("botaoClick");
const botaoUpgradeClique = document.getElementById("upgradeClique");
const botaoUpgradeSegundo = document.getElementById("upgradeSegundo");
const botaoUpgradeSorte = document.getElementById("upgradeSorte");
const botaoRng = document.getElementById("botaoRng");
const botaoRng10 = document.getElementById("botaoRng10");
const botaoResetar = document.getElementById("resetarJogo");

const mensagem = document.getElementById("mensagem");

const personagemAtual = document.getElementById("personagemAtual");
const chanceAtual = document.getElementById("chanceAtual");
const multiplicadorAtual = document.getElementById("multiplicadorAtual");
const listaPersonagens = document.getElementById("listaPersonagens");

const mochilaPersonagens = document.getElementById("mochilaPersonagens");
const quantidadeEquipados = document.getElementById("quantidadeEquipados");

const nomeBoss = document.getElementById("nomeBoss");
const nivelBoss = document.getElementById("nivelBoss");
const vidaBoss = document.getElementById("vidaBoss");
const vidaMaxBoss = document.getElementById("vidaMaxBoss");
const recompensaBoss = document.getElementById("recompensaBoss");
const barraVidaBoss = document.getElementById("barraVidaBoss");

const listaMissoes = document.getElementById("listaMissoes");

carregarJogo();
montarListaPersonagens();
atualizarTudo();

botaoClick.addEventListener("click", function () {
  const ganho = calcularGanhoRealClique();

  jogo.pontos += ganho;
  jogo.stats.cliques += 1;

  causarDanoNoBoss(ganho);

  mensagem.textContent = "Você atacou, ganhou +" + formatarNumero(ganho) + " pontos e causou dano no boss!";

  atualizarTudo();
});

botaoUpgradeClique.addEventListener("click", function () {
  if (jogo.pontos >= jogo.precoUpgradeClique) {
    jogo.pontos -= jogo.precoUpgradeClique;
    jogo.pontosPorClique += 1;
    jogo.precoUpgradeClique *= 3;

    mensagem.textContent = "Treino de força comprado!";
    atualizarTudo();
  } else {
    mensagem.textContent = "Pontos insuficientes para comprar treino de força.";
  }
});

botaoUpgradeSegundo.addEventListener("click", function () {
  if (jogo.pontos >= jogo.precoUpgradeSegundo) {
    jogo.pontos -= jogo.precoUpgradeSegundo;
    jogo.pontosPorSegundo += 1;
    jogo.precoUpgradeSegundo *= 3;

    mensagem.textContent = "Aura automática comprada!";
    atualizarTudo();
  } else {
    mensagem.textContent = "Pontos insuficientes para comprar aura automática.";
  }
});

botaoUpgradeSorte.addEventListener("click", function () {
  if (jogo.pontos >= jogo.precoUpgradeSorte) {
    jogo.pontos -= jogo.precoUpgradeSorte;
    jogo.sorte += 1;
    jogo.precoUpgradeSorte = Math.floor(jogo.precoUpgradeSorte * 2.5);

    mensagem.textContent = "Sorte aumentada! Agora sua sorte é nível " + jogo.sorte + ".";
    atualizarTudo();
  } else {
    mensagem.textContent = "Pontos insuficientes para comprar sorte.";
  }
});

botaoRng.addEventListener("click", function () {
  girarRng(1);
});

botaoRng10.addEventListener("click", function () {
  girarRng(10);
});

botaoResetar.addEventListener("click", function () {
  const confirmar = confirm("Tem certeza que deseja resetar todo o progresso?");

  if (!confirmar) {
    return;
  }

  localStorage.removeItem(SAVE_KEY);
  jogo = criarJogoInicial();

  mensagem.textContent = "Progresso resetado.";
  atualizarTudo();
});

setInterval(function () {
  if (jogo.pontosPorSegundo > 0) {
    jogo.pontos += jogo.pontosPorSegundo;
    atualizarTudo();
  }
}, 1000);

function criarJogoInicial() {
  return {
    pontos: 0,

    pontosPorClique: 1,
    precoUpgradeClique: 10,

    pontosPorSegundo: 0,
    precoUpgradeSegundo: 50,

    precoRng: 1000,

    sorte: 0,
    precoUpgradeSorte: 5000,

    mochila: [],
    equipados: [],

    ultimoPersonagem: {
      nome: "Nenhum",
      chanceTexto: "---",
      multiplicador: 1
    },

    boss: {
      nome: "Dragão Sombrio",
      nivel: 1,
      vidaAtual: 10000,
      vidaMax: 10000,
      recompensa: 5000
    },

    stats: {
      cliques: 0,
      giros: 0,
      bossesDerrotados: 0
    },

    missoesResgatadas: {}
  };
}

function girarRng(quantidade) {
  const custoTotal = jogo.precoRng * quantidade;

  if (jogo.pontos < custoTotal) {
    mensagem.textContent = "Você precisa de " + formatarNumero(custoTotal) + " pontos para girar " + quantidade + "x.";
    return;
  }

  jogo.pontos -= custoTotal;

  let melhorPersonagem = null;

  for (let i = 0; i < quantidade; i++) {
    const personagemSorteado = sortearPersonagem();
    adicionarNaMochila(personagemSorteado);
    jogo.stats.giros += 1;

    if (!melhorPersonagem || personagemSorteado.multiplicador > melhorPersonagem.multiplicador) {
      melhorPersonagem = personagemSorteado;
    }
  }

  jogo.ultimoPersonagem = {
    nome: melhorPersonagem.nome,
    chanceTexto: melhorPersonagem.chanceTexto,
    multiplicador: melhorPersonagem.multiplicador
  };

  mensagem.textContent =
    "Você girou " +
    quantidade +
    "x! Melhor personagem: " +
    melhorPersonagem.nome +
    " (" +
    melhorPersonagem.multiplicador +
    "x).";

  atualizarTudo();
}

function sortearPersonagem() {
  const numeroSorteado = Math.random();

  const bonusSorte = 1 + jogo.sorte * 0.08;

  if (numeroSorteado < (1 / 2000) * bonusSorte) {
    return personagens[6];
  }

  if (numeroSorteado < (1 / 500) * bonusSorte) {
    return personagens[5];
  }

  if (numeroSorteado < (1 / 100) * bonusSorte) {
    return personagens[4];
  }

  if (numeroSorteado < (1 / 50) * bonusSorte) {
    return personagens[3];
  }

  if (numeroSorteado < (1 / 25) * bonusSorte) {
    return personagens[2];
  }

  if (numeroSorteado < (1 / 10) * bonusSorte) {
    return personagens[1];
  }

  return personagens[0];
}

function adicionarNaMochila(personagemSorteado) {
  const personagemExistente = jogo.mochila.find(function (item) {
    return item.nome === personagemSorteado.nome;
  });

  if (personagemExistente) {
    personagemExistente.quantidade += 1;
    return;
  }

  jogo.mochila.push({
    nome: personagemSorteado.nome,
    chanceTexto: personagemSorteado.chanceTexto,
    multiplicador: personagemSorteado.multiplicador,
    raridade: personagemSorteado.raridade,
    quantidade: 1
  });
}

function equiparPersonagem(nome) {
  const personagem = jogo.mochila.find(function (item) {
    return item.nome === nome;
  });

  if (!personagem) {
    mensagem.textContent = "Personagem não encontrado na mochila.";
    return;
  }

  const jaEquipado = jogo.equipados.includes(nome);

  if (jaEquipado) {
    mensagem.textContent = personagem.nome + " já está equipado.";
    return;
  }

  if (jogo.equipados.length >= 3) {
    mensagem.textContent = "Você só pode equipar no máximo 3 personagens.";
    return;
  }

  jogo.equipados.push(nome);

  mensagem.textContent = personagem.nome + " foi equipado!";
  atualizarTudo();
}

function desequiparPersonagem(nome) {
  jogo.equipados = jogo.equipados.filter(function (item) {
    return item !== nome;
  });

  mensagem.textContent = nome + " foi desequipado.";
  atualizarTudo();
}

function calcularMultiplicadorTotal() {
  if (jogo.equipados.length === 0) {
    return 1;
  }

  let total = 0;

  jogo.equipados.forEach(function (nome) {
    const personagem = jogo.mochila.find(function (item) {
      return item.nome === nome;
    });

    if (personagem) {
      total += personagem.multiplicador;
    }
  });

  return total || 1;
}

function calcularGanhoRealClique() {
  return jogo.pontosPorClique * calcularMultiplicadorTotal();
}

function causarDanoNoBoss(dano) {
  jogo.boss.vidaAtual -= dano;

  if (jogo.boss.vidaAtual <= 0) {
    jogo.pontos += jogo.boss.recompensa;
    jogo.stats.bossesDerrotados += 1;

    mensagem.textContent =
      "Boss derrotado! Você ganhou +" +
      formatarNumero(jogo.boss.recompensa) +
      " pontos.";

    criarProximoBoss();
  }
}

function criarProximoBoss() {
  const novoNivel = jogo.boss.nivel + 1;
  const novaVida = Math.floor(10000 * Math.pow(1.8, novoNivel - 1));
  const novaRecompensa = Math.floor(5000 * Math.pow(1.7, novoNivel - 1));

  jogo.boss = {
    nome: escolherNomeBoss(novoNivel),
    nivel: novoNivel,
    vidaAtual: novaVida,
    vidaMax: novaVida,
    recompensa: novaRecompensa
  };
}

function escolherNomeBoss(nivel) {
  const nomes = [
    "Dragão Sombrio",
    "Titã da Tempestade",
    "Samurai Corrompido",
    "Rei Demônio",
    "Deus da Arena",
    "Imperador das Sombras"
  ];

  const indice = (nivel - 1) % nomes.length;

  return nomes[indice];
}

function resgatarMissao(id) {
  const missao = missoes.find(function (item) {
    return item.id === id;
  });

  if (!missao) {
    return;
  }

  if (jogo.missoesResgatadas[id]) {
    mensagem.textContent = "Essa missão já foi resgatada.";
    return;
  }

  if (!missao.concluida()) {
    mensagem.textContent = "Essa missão ainda não foi concluída.";
    return;
  }

  jogo.pontos += missao.recompensa;
  jogo.missoesResgatadas[id] = true;

  mensagem.textContent =
    "Missão concluída! Você ganhou +" +
    formatarNumero(missao.recompensa) +
    " pontos.";

  atualizarTudo();
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

  if (jogo.mochila.length === 0) {
    mochilaPersonagens.innerHTML =
      '<p class="mochila-vazia">Sua mochila está vazia. Gire o RNG para ganhar personagens.</p>';

    quantidadeEquipados.textContent = jogo.equipados.length;
    return;
  }

  jogo.mochila.forEach(function (personagem) {
    const estaEquipado = jogo.equipados.includes(personagem.nome);

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

      if (jogo.equipados.includes(nome)) {
        desequiparPersonagem(nome);
      } else {
        equiparPersonagem(nome);
      }
    });
  });

  quantidadeEquipados.textContent = jogo.equipados.length;
}

function atualizarMissoes() {
  listaMissoes.innerHTML = "";

  missoes.forEach(function (missao) {
    const concluida = missao.concluida();
    const resgatada = jogo.missoesResgatadas[missao.id];

    const card = document.createElement("div");

    card.classList.add("missao-card");

    if (concluida) {
      card.classList.add("missao-concluida");
    }

    if (resgatada) {
      card.classList.add("missao-resgatada");
    }

    let textoBotao = "Em andamento";

    if (concluida && !resgatada) {
      textoBotao = "Resgatar recompensa";
    }

    if (resgatada) {
      textoBotao = "Resgatada";
    }

    card.innerHTML = `
      <h3>${missao.titulo}</h3>
      <p>${missao.descricao}</p>
      <p>Progresso: <span>${missao.progresso()}</span></p>
      <p>Recompensa: <span>${formatarNumero(missao.recompensa)}</span> pontos</p>
      <button class="botao-missao" data-id="${missao.id}" ${!concluida || resgatada ? "disabled" : ""}>
        ${textoBotao}
      </button>
    `;

    listaMissoes.appendChild(card);
  });

  const botoes = listaMissoes.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      resgatarMissao(botao.dataset.id);
    });
  });
}

function atualizarBoss() {
  nomeBoss.textContent = jogo.boss.nome;
  nivelBoss.textContent = jogo.boss.nivel;
  vidaBoss.textContent = formatarNumero(Math.max(0, Math.floor(jogo.boss.vidaAtual)));
  vidaMaxBoss.textContent = formatarNumero(jogo.boss.vidaMax);
  recompensaBoss.textContent = formatarNumero(jogo.boss.recompensa);

  const porcentagem = Math.max(0, (jogo.boss.vidaAtual / jogo.boss.vidaMax) * 100);
  barraVidaBoss.style.width = porcentagem + "%";
}

function atualizarTela() {
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganhoReal = calcularGanhoRealClique();

  textoPontos.textContent = formatarNumero(Math.floor(jogo.pontos));
  textoPontosPorClique.textContent = formatarNumero(jogo.pontosPorClique);
  textoPontosPorSegundo.textContent = formatarNumero(jogo.pontosPorSegundo);
  textoMultiplicador.textContent = formatarNumero(multiplicadorTotal) + "x";
  textoGanhoRealClique.textContent = formatarNumero(ganhoReal);
  textoNivelSorte.textContent = jogo.sorte;

  botaoUpgradeClique.textContent =
    "Comprar treino de força - " + formatarNumero(jogo.precoUpgradeClique) + " pontos";

  botaoUpgradeSegundo.textContent =
    "Comprar aura automática - " + formatarNumero(jogo.precoUpgradeSegundo) + " pontos";

  botaoUpgradeSorte.textContent =
    "Comprar sorte - " + formatarNumero(jogo.precoUpgradeSorte) + " pontos";

  botaoRng.textContent =
    "Girar RNG - " + formatarNumero(jogo.precoRng) + " pontos";

  botaoRng10.textContent =
    "Girar 10x - " + formatarNumero(jogo.precoRng * 10) + " pontos";

  quantidadeEquipados.textContent = jogo.equipados.length;

  personagemAtual.textContent = jogo.ultimoPersonagem.nome;
  chanceAtual.textContent = jogo.ultimoPersonagem.chanceTexto;
  multiplicadorAtual.textContent = jogo.ultimoPersonagem.multiplicador + "x";
}

function atualizarTudo() {
  atualizarTela();
  atualizarMochila();
  atualizarBoss();
  atualizarMissoes();
  salvarJogo();
}

function salvarJogo() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(jogo));
}

function carregarJogo() {
  const dadosSalvos = localStorage.getItem(SAVE_KEY);

  if (!dadosSalvos) {
    return;
  }

  try {
    const jogoSalvo = JSON.parse(dadosSalvos);

    jogo = {
      ...criarJogoInicial(),
      ...jogoSalvo,
      stats: {
        ...criarJogoInicial().stats,
        ...jogoSalvo.stats
      },
      boss: {
        ...criarJogoInicial().boss,
        ...jogoSalvo.boss
      },
      ultimoPersonagem: {
        ...criarJogoInicial().ultimoPersonagem,
        ...jogoSalvo.ultimoPersonagem
      },
      missoesResgatadas: {
        ...jogoSalvo.missoesResgatadas
      }
    };
  } catch (erro) {
    console.error("Erro ao carregar save:", erro);
    jogo = criarJogoInicial();
  }
}

function formatarNumero(numero) {
  return Math.floor(numero).toLocaleString("pt-BR");
}
