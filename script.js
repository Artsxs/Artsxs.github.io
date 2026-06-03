const SAVE_KEY = "animeClickerSimulatorSaveV3";
const ADM_CODE = "ARTSXS-ADM-2026";

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

const elementos = {
  pontos: document.getElementById("pontos"),
  ganhoRealClique: document.getElementById("ganhoRealClique"),
  multiplicador: document.getElementById("multiplicador"),
  nivelSorte: document.getElementById("nivelSorte"),

  pontosPorClique: document.getElementById("pontosPorClique"),
  pontosPorSegundo: document.getElementById("pontosPorSegundo"),
  multiplicadorStatus: document.getElementById("multiplicadorStatus"),
  ganhoRealStatus: document.getElementById("ganhoRealStatus"),
  quantidadeEquipados: document.getElementById("quantidadeEquipados"),
  quantidadeEquipadosMochila: document.getElementById("quantidadeEquipadosMochila"),
  totalCliques: document.getElementById("totalCliques"),
  totalGiros: document.getElementById("totalGiros"),
  totalBosses: document.getElementById("totalBosses"),

  botaoClick: document.getElementById("botaoClick"),
  upgradeClique: document.getElementById("upgradeClique"),
  upgradeSegundo: document.getElementById("upgradeSegundo"),
  upgradeSorte: document.getElementById("upgradeSorte"),
  botaoRng: document.getElementById("botaoRng"),
  botaoRng10: document.getElementById("botaoRng10"),
  resetarJogo: document.getElementById("resetarJogo"),

  mensagem: document.getElementById("mensagem"),

  personagemAtual: document.getElementById("personagemAtual"),
  chanceAtual: document.getElementById("chanceAtual"),
  multiplicadorAtual: document.getElementById("multiplicadorAtual"),
  listaPersonagens: document.getElementById("listaPersonagens"),
  mochilaPersonagens: document.getElementById("mochilaPersonagens"),
  listaMissoes: document.getElementById("listaMissoes"),

  nomeBoss: document.getElementById("nomeBoss"),
  nivelBoss: document.getElementById("nivelBoss"),
  vidaBoss: document.getElementById("vidaBoss"),
  vidaMaxBoss: document.getElementById("vidaMaxBoss"),
  barraVidaBoss: document.getElementById("barraVidaBoss"),

  nomeBossMenu: document.getElementById("nomeBossMenu"),
  nivelBossMenu: document.getElementById("nivelBossMenu"),
  vidaBossMenu: document.getElementById("vidaBossMenu"),
  vidaMaxBossMenu: document.getElementById("vidaMaxBossMenu"),
  barraVidaBossMenu: document.getElementById("barraVidaBossMenu"),
  recompensaBoss: document.getElementById("recompensaBoss"),

  senhaAdm: document.getElementById("senhaAdm"),
  entrarAdm: document.getElementById("entrarAdm"),
  admBloqueado: document.getElementById("admBloqueado"),
  admLiberado: document.getElementById("admLiberado"),
  admPontos: document.getElementById("admPontos"),
  admPersonagem: document.getElementById("admPersonagem"),
  admQuantidade: document.getElementById("admQuantidade"),
  admAdicionarPontos: document.getElementById("admAdicionarPontos"),
  admAdicionarPersonagem: document.getElementById("admAdicionarPersonagem"),
  admDerrotarBoss: document.getElementById("admDerrotarBoss"),
  admSalvar: document.getElementById("admSalvar"),
  admSair: document.getElementById("admSair")
};

carregarJogo();
configurarTabs();
configurarEventos();
montarListaPersonagens();
montarSelectAdm();
atualizarTudo();

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

function configurarTabs() {
  const botoes = document.querySelectorAll(".tab-button");
  const abas = document.querySelectorAll(".tab-content");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const alvo = botao.dataset.tab;

      botoes.forEach(function (item) {
        item.classList.remove("active");
      });

      abas.forEach(function (aba) {
        aba.classList.remove("active");
      });

      botao.classList.add("active");
      document.getElementById(alvo).classList.add("active");
    });
  });
}

function configurarEventos() {
  elementos.botaoClick.addEventListener("click", atacar);

  elementos.upgradeClique.addEventListener("click", comprarUpgradeClique);
  elementos.upgradeSegundo.addEventListener("click", comprarUpgradeSegundo);
  elementos.upgradeSorte.addEventListener("click", comprarUpgradeSorte);

  elementos.botaoRng.addEventListener("click", function () {
    girarRng(1);
  });

  elementos.botaoRng10.addEventListener("click", function () {
    girarRng(10);
  });

  elementos.resetarJogo.addEventListener("click", resetarJogo);

  elementos.entrarAdm.addEventListener("click", liberarAdm);
  elementos.admAdicionarPontos.addEventListener("click", admAdicionarPontos);
  elementos.admAdicionarPersonagem.addEventListener("click", admAdicionarPersonagem);
  elementos.admDerrotarBoss.addEventListener("click", admDerrotarBoss);
  elementos.admSalvar.addEventListener("click", function () {
    salvarJogo();
    mostrarMensagem("ADM: progresso salvo manualmente.");
  });

  elementos.admSair.addEventListener("click", function () {
    elementos.admLiberado.classList.add("escondido");
    elementos.admBloqueado.classList.remove("escondido");
    elementos.senhaAdm.value = "";
    mostrarMensagem("ADM fechado.");
  });

  setInterval(function () {
    if (jogo.pontosPorSegundo > 0) {
      jogo.pontos += jogo.pontosPorSegundo;
      atualizarTudo();
    }
  }, 1000);
}

function atacar() {
  const ganho = calcularGanhoRealClique();

  jogo.pontos += ganho;
  jogo.stats.cliques += 1;

  causarDanoNoBoss(ganho);

  mostrarMensagem("Você atacou e ganhou +" + formatarNumero(ganho) + " pontos!");

  atualizarTudo();
}

function comprarUpgradeClique() {
  if (jogo.pontos < jogo.precoUpgradeClique) {
    mostrarMensagem("Pontos insuficientes para comprar treino de força.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeClique;
  jogo.pontosPorClique += 1;
  jogo.precoUpgradeClique *= 3;

  mostrarMensagem("Treino de força comprado!");
  atualizarTudo();
}

function comprarUpgradeSegundo() {
  if (jogo.pontos < jogo.precoUpgradeSegundo) {
    mostrarMensagem("Pontos insuficientes para comprar aura automática.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeSegundo;
  jogo.pontosPorSegundo += 1;
  jogo.precoUpgradeSegundo *= 3;

  mostrarMensagem("Aura automática comprada!");
  atualizarTudo();
}

function comprarUpgradeSorte() {
  if (jogo.pontos < jogo.precoUpgradeSorte) {
    mostrarMensagem("Pontos insuficientes para comprar sorte.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeSorte;
  jogo.sorte += 1;
  jogo.precoUpgradeSorte = Math.floor(jogo.precoUpgradeSorte * 2.5);

  mostrarMensagem("Sorte aumentada para nível " + jogo.sorte + "!");
  atualizarTudo();
}

function girarRng(quantidade) {
  const custoTotal = jogo.precoRng * quantidade;

  if (jogo.pontos < custoTotal) {
    mostrarMensagem("Você precisa de " + formatarNumero(custoTotal) + " pontos para girar " + quantidade + "x.");
    return;
  }

  jogo.pontos -= custoTotal;

  let melhorPersonagem = null;

  for (let i = 0; i < quantidade; i++) {
    const personagem = sortearPersonagem();
    adicionarNaMochila(personagem);
    jogo.stats.giros += 1;

    if (!melhorPersonagem || personagem.multiplicador > melhorPersonagem.multiplicador) {
      melhorPersonagem = personagem;
    }
  }

  jogo.ultimoPersonagem = {
    nome: melhorPersonagem.nome,
    chanceTexto: melhorPersonagem.chanceTexto,
    multiplicador: melhorPersonagem.multiplicador
  };

  mostrarMensagem("Você girou " + quantidade + "x! Melhor personagem: " + melhorPersonagem.nome + " (" + melhorPersonagem.multiplicador + "x).");

  atualizarTudo();
}

function sortearPersonagem() {
  const numeroSorteado = Math.random();
  const bonusSorte = 1 + jogo.sorte * 0.08;

  if (numeroSorteado < (1 / 2000) * bonusSorte) return personagens[6];
  if (numeroSorteado < (1 / 500) * bonusSorte) return personagens[5];
  if (numeroSorteado < (1 / 100) * bonusSorte) return personagens[4];
  if (numeroSorteado < (1 / 50) * bonusSorte) return personagens[3];
  if (numeroSorteado < (1 / 25) * bonusSorte) return personagens[2];
  if (numeroSorteado < (1 / 10) * bonusSorte) return personagens[1];

  return personagens[0];
}

function adicionarNaMochila(personagem) {
  const existente = jogo.mochila.find(function (item) {
    return item.nome === personagem.nome;
  });

  if (existente) {
    existente.quantidade += 1;
    return;
  }

  jogo.mochila.push({
    nome: personagem.nome,
    chanceTexto: personagem.chanceTexto,
    multiplicador: personagem.multiplicador,
    raridade: personagem.raridade,
    quantidade: 1
  });
}

function equiparPersonagem(nome) {
  const personagem = jogo.mochila.find(function (item) {
    return item.nome === nome;
  });

  if (!personagem) {
    mostrarMensagem("Personagem não encontrado na mochila.");
    return;
  }

  if (jogo.equipados.includes(nome)) {
    mostrarMensagem(nome + " já está equipado.");
    return;
  }

  if (jogo.equipados.length >= 3) {
    mostrarMensagem("Você só pode equipar no máximo 3 personagens.");
    return;
  }

  jogo.equipados.push(nome);
  mostrarMensagem(nome + " foi equipado!");

  atualizarTudo();
}

function desequiparPersonagem(nome) {
  jogo.equipados = jogo.equipados.filter(function (item) {
    return item !== nome;
  });

  mostrarMensagem(nome + " foi desequipado.");

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

    mostrarMensagem("Boss derrotado! Você ganhou +" + formatarNumero(jogo.boss.recompensa) + " pontos.");

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

  return nomes[(nivel - 1) % nomes.length];
}

function montarListaPersonagens() {
  elementos.listaPersonagens.innerHTML = "";

  personagens.forEach(function (personagem) {
    const card = document.createElement("div");

    card.classList.add("personagem-card", personagem.raridade);

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador: ${personagem.multiplicador}x</span>
    `;

    elementos.listaPersonagens.appendChild(card);
  });
}

function atualizarMochila() {
  elementos.mochilaPersonagens.innerHTML = "";

  if (jogo.mochila.length === 0) {
    elementos.mochilaPersonagens.innerHTML =
      '<p class="mochila-vazia">Sua mochila está vazia. Gire o RNG para ganhar personagens.</p>';
    return;
  }

  jogo.mochila.forEach(function (personagem) {
    const estaEquipado = jogo.equipados.includes(personagem.nome);

    const card = document.createElement("div");

    card.classList.add("personagem-card", personagem.raridade);

    if (estaEquipado) {
      card.classList.add("equipado");
    }

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Status: ${estaEquipado ? "Equipado" : "Na mochila"}</span>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador: ${personagem.multiplicador}x</span>
      <span class="quantidade">Quantidade: x${personagem.quantidade}</span>
      <button class="${estaEquipado ? "botao-desequipar" : "botao-equipar"}" data-nome="${personagem.nome}">
        ${estaEquipado ? "Desequipar" : "Equipar"}
      </button>
    `;

    elementos.mochilaPersonagens.appendChild(card);
  });

  const botoes = elementos.mochilaPersonagens.querySelectorAll("button");

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
}

function atualizarMissoes() {
  elementos.listaMissoes.innerHTML = "";

  missoes.forEach(function (missao) {
    const concluida = missao.concluida();
    const resgatada = jogo.missoesResgatadas[missao.id];

    const card = document.createElement("div");
    card.classList.add("missao-card");

    if (concluida) card.classList.add("missao-concluida");
    if (resgatada) card.classList.add("missao-resgatada");

    let textoBotao = "Em andamento";

    if (concluida && !resgatada) textoBotao = "Resgatar recompensa";
    if (resgatada) textoBotao = "Resgatada";

    card.innerHTML = `
      <h3>${missao.titulo}</h3>
      <p>${missao.descricao}</p>
      <p>Progresso: <span>${missao.progresso()}</span></p>
      <p>Recompensa: <span>${formatarNumero(missao.recompensa)}</span> pontos</p>
      <button class="botao-missao" data-id="${missao.id}" ${!concluida || resgatada ? "disabled" : ""}>
        ${textoBotao}
      </button>
    `;

    elementos.listaMissoes.appendChild(card);
  });

  const botoes = elementos.listaMissoes.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      resgatarMissao(botao.dataset.id);
    });
  });
}

function resgatarMissao(id) {
  const missao = missoes.find(function (item) {
    return item.id === id;
  });

  if (!missao || jogo.missoesResgatadas[id] || !missao.concluida()) {
    return;
  }

  jogo.pontos += missao.recompensa;
  jogo.missoesResgatadas[id] = true;

  mostrarMensagem("Missão concluída! Você ganhou +" + formatarNumero(missao.recompensa) + " pontos.");

  atualizarTudo();
}

function atualizarBoss() {
  const vidaAtual = Math.max(0, Math.floor(jogo.boss.vidaAtual));
  const porcentagem = Math.max(0, (jogo.boss.vidaAtual / jogo.boss.vidaMax) * 100);

  elementos.nomeBoss.textContent = jogo.boss.nome;
  elementos.nivelBoss.textContent = jogo.boss.nivel;
  elementos.vidaBoss.textContent = formatarNumero(vidaAtual);
  elementos.vidaMaxBoss.textContent = formatarNumero(jogo.boss.vidaMax);
  elementos.barraVidaBoss.style.width = porcentagem + "%";

  elementos.nomeBossMenu.textContent = jogo.boss.nome;
  elementos.nivelBossMenu.textContent = jogo.boss.nivel;
  elementos.vidaBossMenu.textContent = formatarNumero(vidaAtual);
  elementos.vidaMaxBossMenu.textContent = formatarNumero(jogo.boss.vidaMax);
  elementos.barraVidaBossMenu.style.width = porcentagem + "%";
  elementos.recompensaBoss.textContent = formatarNumero(jogo.boss.recompensa);
}

function atualizarTela() {
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganhoReal = calcularGanhoRealClique();

  elementos.pontos.textContent = formatarNumero(jogo.pontos);
  elementos.ganhoRealClique.textContent = formatarNumero(ganhoReal);
  elementos.multiplicador.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.nivelSorte.textContent = jogo.sorte;

  elementos.pontosPorClique.textContent = formatarNumero(jogo.pontosPorClique);
  elementos.pontosPorSegundo.textContent = formatarNumero(jogo.pontosPorSegundo);
  elementos.multiplicadorStatus.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.ganhoRealStatus.textContent = formatarNumero(ganhoReal);
  elementos.quantidadeEquipados.textContent = jogo.equipados.length;
  elementos.quantidadeEquipadosMochila.textContent = jogo.equipados.length;

  elementos.totalCliques.textContent = formatarNumero(jogo.stats.cliques);
  elementos.totalGiros.textContent = formatarNumero(jogo.stats.giros);
  elementos.totalBosses.textContent = formatarNumero(jogo.stats.bossesDerrotados);

  elementos.upgradeClique.textContent =
    "Comprar treino de força - " + formatarNumero(jogo.precoUpgradeClique) + " pontos";

  elementos.upgradeSegundo.textContent =
    "Comprar aura automática - " + formatarNumero(jogo.precoUpgradeSegundo) + " pontos";

  elementos.upgradeSorte.textContent =
    "Comprar sorte - " + formatarNumero(jogo.precoUpgradeSorte) + " pontos";

  elementos.botaoRng.textContent =
    "Girar RNG - " + formatarNumero(jogo.precoRng) + " pontos";

  elementos.botaoRng10.textContent =
    "Girar 10x - " + formatarNumero(jogo.precoRng * 10) + " pontos";

  elementos.personagemAtual.textContent = jogo.ultimoPersonagem.nome;
  elementos.chanceAtual.textContent = jogo.ultimoPersonagem.chanceTexto;
  elementos.multiplicadorAtual.textContent = jogo.ultimoPersonagem.multiplicador + "x";
}

function atualizarTudo() {
  atualizarTela();
  atualizarBoss();
  atualizarMochila();
  atualizarMissoes();
  salvarJogo();
}

function montarSelectAdm() {
  elementos.admPersonagem.innerHTML = "";

  personagens.forEach(function (personagem) {
    const option = document.createElement("option");
    option.value = personagem.nome;
    option.textContent = personagem.nome + " - " + personagem.multiplicador + "x";
    elementos.admPersonagem.appendChild(option);
  });
}

function liberarAdm() {
  if (elementos.senhaAdm.value !== ADM_CODE) {
    mostrarMensagem("Código ADM incorreto.");
    return;
  }

  elementos.admBloqueado.classList.add("escondido");
  elementos.admLiberado.classList.remove("escondido");

  mostrarMensagem("ADM liberado.");
}

function admAdicionarPontos() {
  const quantidade = Number(elementos.admPontos.value);

  if (!quantidade || quantidade <= 0) {
    mostrarMensagem("ADM: quantidade inválida.");
    return;
  }

  jogo.pontos += quantidade;

  mostrarMensagem("ADM: +" + formatarNumero(quantidade) + " pontos adicionados.");
  atualizarTudo();
}

function admAdicionarPersonagem() {
  const nome = elementos.admPersonagem.value;
  const quantidade = Number(elementos.admQuantidade.value);

  const personagem = personagens.find(function (item) {
    return item.nome === nome;
  });

  if (!personagem || !quantidade || quantidade <= 0) {
    mostrarMensagem("ADM: dados inválidos.");
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    adicionarNaMochila(personagem);
  }

  jogo.ultimoPersonagem = {
    nome: personagem.nome,
    chanceTexto: personagem.chanceTexto,
    multiplicador: personagem.multiplicador
  };

  mostrarMensagem("ADM: " + personagem.nome + " x" + quantidade + " adicionado à mochila.");
  atualizarTudo();
}

function admDerrotarBoss() {
  jogo.boss.vidaAtual = 0;
  causarDanoNoBoss(1);

  mostrarMensagem("ADM: boss derrotado.");
  atualizarTudo();
}

function resetarJogo() {
  const confirmar = confirm("Tem certeza que deseja resetar todo o progresso?");

  if (!confirmar) {
    return;
  }

  localStorage.removeItem(SAVE_KEY);
  jogo = criarJogoInicial();

  mostrarMensagem("Progresso resetado.");
  atualizarTudo();
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
    const base = criarJogoInicial();

    jogo = {
      ...base,
      ...jogoSalvo,
      stats: {
        ...base.stats,
        ...jogoSalvo.stats
      },
      boss: {
        ...base.boss,
        ...jogoSalvo.boss
      },
      ultimoPersonagem: {
        ...base.ultimoPersonagem,
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

function mostrarMensagem(texto) {
  elementos.mensagem.textContent = texto;
}

function formatarNumero(numero) {
  return Math.floor(numero).toLocaleString("pt-BR");
}
