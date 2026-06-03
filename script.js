const SAVE_KEY = "animeClickerSimulatorSaveV4";
const ADM_CODE = "ARTSXS-ADM-2026";

const mundos = [
  {
    id: "vila_ninja",
    nome: "Vila Ninja",
    custo: 0,
    precoRng: 1000,
    descricao: "Mundo inicial com personagens básicos.",
    personagens: [
      { nome: "Naruto", chanceTexto: "1/2", multiplicador: 2, raridade: "comum" },
      { nome: "Sasuke", chanceTexto: "1/10", multiplicador: 10, raridade: "raro" },
      { nome: "Boruto", chanceTexto: "1/25", multiplicador: 25, raridade: "epico" },
      { nome: "Minato", chanceTexto: "1/50", multiplicador: 50, raridade: "lendario" },
      { nome: "Obito", chanceTexto: "1/100", multiplicador: 100, raridade: "mitico" },
      { nome: "Madara", chanceTexto: "1/500", multiplicador: 500, raridade: "divino" },
      { nome: "Kaguya", chanceTexto: "1/2000", multiplicador: 2000, raridade: "secreto" }
    ]
  },
  {
    id: "ilha_pirata",
    nome: "Ilha Pirata",
    custo: 500000,
    precoRng: 5000,
    descricao: "Personagens mais fortes e RNG mais caro.",
    personagens: [
      { nome: "Zoro", chanceTexto: "1/2", multiplicador: 20, raridade: "comum" },
      { nome: "Luffy", chanceTexto: "1/15", multiplicador: 75, raridade: "raro" },
      { nome: "Sanji", chanceTexto: "1/50", multiplicador: 200, raridade: "epico" },
      { nome: "Ace", chanceTexto: "1/150", multiplicador: 600, raridade: "lendario" },
      { nome: "Roger", chanceTexto: "1/500", multiplicador: 1500, raridade: "mitico" },
      { nome: "Kaido", chanceTexto: "1/2000", multiplicador: 5000, raridade: "divino" },
      { nome: "JoyBoy", chanceTexto: "1/10000", multiplicador: 15000, raridade: "secreto" }
    ]
  },
  {
    id: "arena_deuses",
    nome: "Estação Shibuya",
    custo: 10000000,
    precoRng: 25000,
    descricao: "Mundo avançado com personagens muito raros.",
    personagens: [
      { nome: "Itadori", chanceTexto: "1/2", multiplicador: 100, raridade: "raro" },
      { nome: "Megumi", chanceTexto: "1/25", multiplicador: 500, raridade: "epico" },
      { nome: "Jogo", chanceTexto: "1/100", multiplicador: 2000, raridade: "lendario" },
      { nome: "Mahito", chanceTexto: "1/500", multiplicador: 8000, raridade: "mitico" },
      { nome: "Gojo", chanceTexto: "1/2500", multiplicador: 25000, raridade: "divino" },
      { nome: "Sukuna", chanceTexto: "1/10000", multiplicador: 75000, raridade: "secreto" },
      { nome: "Yuta", chanceTexto: "1/50000", multiplicador: 250000, raridade: "universal" }
    ]
  },
  {
    id: "dimensao_final",
    nome: "Aincrad",
    custo: 100000000,
    precoRng: 100000,
    descricao: "Mundo endgame com personagens absurdamente raros.",
    personagens: [
      { nome: "Klein", chanceTexto: "1/2", multiplicador: 1000, raridade: "epico" },
      { nome: "Noboyuki", chanceTexto: "1/50", multiplicador: 8000, raridade: "lendario" },
      { nome: "Alice", chanceTexto: "1/500", multiplicador: 50000, raridade: "mitico" },
      { nome: "Eugeo", chanceTexto: "1/5000", multiplicador: 250000, raridade: "divino" },
      { nome: "Sinon", chanceTexto: "1/25000", multiplicador: 1000000, raridade: "secreto" },
      { nome: "Asuna", chanceTexto: "1/100000", multiplicador: 5000000, raridade: "celestial" },
      { nome: "Kirito", chanceTexto: "1/1000000", multiplicador: 50000000, raridade: "universal" }
    ]
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
  },
  {
    id: "mundo2",
    titulo: "Explorador",
    descricao: "Desbloqueie a Ilha Pirata.",
    recompensa: 20000,
    concluida: function () {
      return jogo.mundosDesbloqueados.includes("ilha_pirata");
    },
    progresso: function () {
      return jogo.mundosDesbloqueados.includes("ilha_pirata") ? "1/1 mundo" : "0/1 mundo";
    }
  },
  {
    id: "fusao1",
    titulo: "Primeira fusão",
    descricao: "Faça 1 fusão de personagem.",
    recompensa: 15000,
    concluida: function () {
      return jogo.stats.fusoes >= 1;
    },
    progresso: function () {
      return Math.min(jogo.stats.fusoes, 1) + "/1 fusão";
    }
  }
];

let jogo = criarJogoInicial();

const elementos = {
  pontos: document.getElementById("pontos"),
  ganhoRealClique: document.getElementById("ganhoRealClique"),
  multiplicador: document.getElementById("multiplicador"),
  mundoAtualTexto: document.getElementById("mundoAtualTexto"),

  pontosPorClique: document.getElementById("pontosPorClique"),
  pontosPorSegundo: document.getElementById("pontosPorSegundo"),
  multiplicadorStatus: document.getElementById("multiplicadorStatus"),
  ganhoRealStatus: document.getElementById("ganhoRealStatus"),
  nivelSorte: document.getElementById("nivelSorte"),
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

  mundoAtualRng: document.getElementById("mundoAtualRng"),
  precoRngAtual: document.getElementById("precoRngAtual"),
  personagemAtual: document.getElementById("personagemAtual"),
  chanceAtual: document.getElementById("chanceAtual"),
  multiplicadorAtual: document.getElementById("multiplicadorAtual"),
  listaPersonagens: document.getElementById("listaPersonagens"),
  mochilaPersonagens: document.getElementById("mochilaPersonagens"),
  listaMissoes: document.getElementById("listaMissoes"),
  listaMundos: document.getElementById("listaMundos"),

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
  admDesbloquearMundos: document.getElementById("admDesbloquearMundos"),
  admDerrotarBoss: document.getElementById("admDerrotarBoss"),
  admSalvar: document.getElementById("admSalvar"),
  admSair: document.getElementById("admSair")
};

carregarJogo();
configurarTabs();
configurarEventos();
montarSelectAdm();
atualizarTudo();

function criarJogoInicial() {
  return {
    pontos: 0,
    pontosPorClique: 1,
    precoUpgradeClique: 10,
    pontosPorSegundo: 0,
    precoUpgradeSegundo: 50,
    sorte: 0,
    precoUpgradeSorte: 5000,

    mundoAtual: "vila_ninja",
    mundosDesbloqueados: ["vila_ninja"],

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
      bossesDerrotados: 0,
      fusoes: 0
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
  elementos.admDesbloquearMundos.addEventListener("click", admDesbloquearTodosMundos);
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

function obterMundoAtual() {
  return mundos.find(function (mundo) {
    return mundo.id === jogo.mundoAtual;
  }) || mundos[0];
}

function girarRng(quantidade) {
  const mundo = obterMundoAtual();
  const custoTotal = mundo.precoRng * quantidade;

  if (jogo.pontos < custoTotal) {
    mostrarMensagem("Você precisa de " + formatarNumero(custoTotal) + " pontos para girar " + quantidade + "x.");
    return;
  }

  jogo.pontos -= custoTotal;

  let melhorPersonagem = null;

  for (let i = 0; i < quantidade; i++) {
    const personagem = sortearPersonagemDoMundo(mundo);
    adicionarNaMochila(personagem, mundo.id);
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

  mostrarMensagem(
    "Você girou " +
    quantidade +
    "x no mundo " +
    mundo.nome +
    "! Melhor personagem: " +
    melhorPersonagem.nome +
    " (" +
    melhorPersonagem.multiplicador +
    "x)."
  );

  atualizarTudo();
}

function sortearPersonagemDoMundo(mundo) {
  const numeroSorteado = Math.random();
  const bonusSorte = 1 + jogo.sorte * 0.08;

  const lista = mundo.personagens;

  for (let i = lista.length - 1; i >= 1; i--) {
    const chanceNumerica = pegarNumeroChance(lista[i].chanceTexto);
    const chanceComBonus = (1 / chanceNumerica) * bonusSorte;

    if (numeroSorteado < chanceComBonus) {
      return lista[i];
    }
  }

  return lista[0];
}

function pegarNumeroChance(chanceTexto) {
  return Number(chanceTexto.replace("1/", ""));
}

function adicionarNaMochila(personagem, mundoId) {
  const chave = personagem.nome + "_" + mundoId;

  const existente = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  if (existente) {
    existente.quantidade += 1;
    return;
  }

  jogo.mochila.push({
    chave: chave,
    nome: personagem.nome,
    mundoId: mundoId,
    chanceTexto: personagem.chanceTexto,
    multiplicadorBase: personagem.multiplicador,
    raridade: personagem.raridade,
    quantidade: 1,
    nivel: 1
  });
}

function calcularMultiplicadorPersonagem(personagem) {
  return personagem.multiplicadorBase * personagem.nivel;
}

function fundirPersonagem(chave) {
  const personagem = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  if (!personagem) {
    mostrarMensagem("Personagem não encontrado.");
    return;
  }

  const custoFusao = 5;

  if (personagem.quantidade < custoFusao) {
    mostrarMensagem("Você precisa de 5 cópias para evoluir " + personagem.nome + ".");
    return;
  }

  personagem.quantidade -= custoFusao;
  personagem.nivel += 1;
  jogo.stats.fusoes += 1;

  mostrarMensagem(personagem.nome + " evoluiu para o nível " + personagem.nivel + "!");

  atualizarTudo();
}

function equiparPersonagem(chave) {
  const personagem = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  if (!personagem) {
    mostrarMensagem("Personagem não encontrado na mochila.");
    return;
  }

  if (jogo.equipados.includes(chave)) {
    mostrarMensagem(personagem.nome + " já está equipado.");
    return;
  }

  if (jogo.equipados.length >= 3) {
    mostrarMensagem("Você só pode equipar no máximo 3 personagens.");
    return;
  }

  jogo.equipados.push(chave);
  mostrarMensagem(personagem.nome + " foi equipado!");

  atualizarTudo();
}

function desequiparPersonagem(chave) {
  const personagem = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  jogo.equipados = jogo.equipados.filter(function (item) {
    return item !== chave;
  });

  mostrarMensagem((personagem ? personagem.nome : "Personagem") + " foi desequipado.");

  atualizarTudo();
}

function calcularMultiplicadorTotal() {
  if (jogo.equipados.length === 0) {
    return 1;
  }

  let total = 0;

  jogo.equipados.forEach(function (chave) {
    const personagem = jogo.mochila.find(function (item) {
      return item.chave === chave;
    });

    if (personagem) {
      total += calcularMultiplicadorPersonagem(personagem);
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
    "Imperador das Sombras",
    "Guardião Dimensional"
  ];

  return nomes[(nivel - 1) % nomes.length];
}

function trocarMundo(mundoId) {
  if (!jogo.mundosDesbloqueados.includes(mundoId)) {
    mostrarMensagem("Esse mundo ainda está bloqueado.");
    return;
  }

  jogo.mundoAtual = mundoId;
  const mundo = obterMundoAtual();

  mostrarMensagem("Você entrou no mundo: " + mundo.nome + ".");

  atualizarTudo();
}

function desbloquearMundo(mundoId) {
  const mundo = mundos.find(function (item) {
    return item.id === mundoId;
  });

  if (!mundo) {
    return;
  }

  if (jogo.mundosDesbloqueados.includes(mundoId)) {
    trocarMundo(mundoId);
    return;
  }

  if (jogo.pontos < mundo.custo) {
    mostrarMensagem("Você precisa de " + formatarNumero(mundo.custo) + " pontos para desbloquear " + mundo.nome + ".");
    return;
  }

  jogo.pontos -= mundo.custo;
  jogo.mundosDesbloqueados.push(mundoId);
  jogo.mundoAtual = mundoId;

  mostrarMensagem("Mundo desbloqueado: " + mundo.nome + "!");

  atualizarTudo();
}

function montarListaMundos() {
  elementos.listaMundos.innerHTML = "";

  mundos.forEach(function (mundo) {
    const desbloqueado = jogo.mundosDesbloqueados.includes(mundo.id);
    const atual = jogo.mundoAtual === mundo.id;

    const card = document.createElement("div");
    card.classList.add("mundo-card");

    let textoBotao = "Entrar";
    let classeBotao = "botao-mundo";

    if (atual) {
      textoBotao = "Mundo atual";
      classeBotao += " atual";
    } else if (!desbloqueado) {
      textoBotao = "Desbloquear - " + formatarNumero(mundo.custo) + " pontos";
      classeBotao += " bloqueado";
    }

    card.innerHTML = `
      <h3>${mundo.nome}</h3>
      <p>${mundo.descricao}</p>
      <p>Preço do RNG: <span>${formatarNumero(mundo.precoRng)}</span> pontos</p>
      <p>Status: <span>${desbloqueado ? "Desbloqueado" : "Bloqueado"}</span></p>
      <button class="${classeBotao}" data-mundo="${mundo.id}">
        ${textoBotao}
      </button>
    `;

    elementos.listaMundos.appendChild(card);
  });

  const botoes = elementos.listaMundos.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const mundoId = botao.dataset.mundo;

      if (jogo.mundosDesbloqueados.includes(mundoId)) {
        trocarMundo(mundoId);
      } else {
        desbloquearMundo(mundoId);
      }
    });
  });
}

function montarListaPersonagens() {
  const mundo = obterMundoAtual();

  elementos.listaPersonagens.innerHTML = "";

  mundo.personagens.forEach(function (personagem) {
    const card = document.createElement("div");

    card.classList.add("personagem-card", personagem.raridade);

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador base: ${formatarNumero(personagem.multiplicador)}x</span>
      <span>Mundo: ${mundo.nome}</span>
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
    const estaEquipado = jogo.equipados.includes(personagem.chave);
    const mundo = mundos.find(function (item) {
      return item.id === personagem.mundoId;
    });

    const multiplicadorAtual = calcularMultiplicadorPersonagem(personagem);
    const podeFundir = personagem.quantidade >= 5;

    const card = document.createElement("div");
    card.classList.add("personagem-card", personagem.raridade);

    if (estaEquipado) {
      card.classList.add("equipado");
    }

    card.innerHTML = `
      <strong>${personagem.nome}</strong>
      <span>Status: ${estaEquipado ? "Equipado" : "Na mochila"}</span>
      <span>Mundo: ${mundo ? mundo.nome : "Desconhecido"}</span>
      <span>Chance: ${personagem.chanceTexto}</span>
      <span>Multiplicador base: ${formatarNumero(personagem.multiplicadorBase)}x</span>
      <span>Multiplicador atual: ${formatarNumero(multiplicadorAtual)}x</span>
      <span class="nivel-personagem">Nível: ${personagem.nivel}</span>
      <span class="quantidade">Quantidade: x${personagem.quantidade}</span>

      <button class="${estaEquipado ? "botao-desequipar" : "botao-equipar"}" data-chave="${personagem.chave}" data-acao="equipar">
        ${estaEquipado ? "Desequipar" : "Equipar"}
      </button>

      <button class="botao-fundir" data-chave="${personagem.chave}" data-acao="fundir" ${podeFundir ? "" : "disabled"}>
        Fundir 5 cópias / Evoluir
      </button>
    `;

    elementos.mochilaPersonagens.appendChild(card);
  });

  const botoes = elementos.mochilaPersonagens.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const chave = botao.dataset.chave;
      const acao = botao.dataset.acao;

      if (acao === "fundir") {
        fundirPersonagem(chave);
        return;
      }

      if (jogo.equipados.includes(chave)) {
        desequiparPersonagem(chave);
      } else {
        equiparPersonagem(chave);
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
  const mundo = obterMundoAtual();
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganhoReal = calcularGanhoRealClique();

  elementos.pontos.textContent = formatarNumero(jogo.pontos);
  elementos.ganhoRealClique.textContent = formatarNumero(ganhoReal);
  elementos.multiplicador.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.mundoAtualTexto.textContent = mundo.nome;

  elementos.pontosPorClique.textContent = formatarNumero(jogo.pontosPorClique);
  elementos.pontosPorSegundo.textContent = formatarNumero(jogo.pontosPorSegundo);
  elementos.multiplicadorStatus.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.ganhoRealStatus.textContent = formatarNumero(ganhoReal);
  elementos.nivelSorte.textContent = jogo.sorte;

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

  elementos.mundoAtualRng.textContent = mundo.nome;
  elementos.precoRngAtual.textContent = formatarNumero(mundo.precoRng);

  elementos.botaoRng.textContent =
    "Girar RNG - " + formatarNumero(mundo.precoRng) + " pontos";

  elementos.botaoRng10.textContent =
    "Girar 10x - " + formatarNumero(mundo.precoRng * 10) + " pontos";

  elementos.personagemAtual.textContent = jogo.ultimoPersonagem.nome;
  elementos.chanceAtual.textContent = jogo.ultimoPersonagem.chanceTexto;
  elementos.multiplicadorAtual.textContent = formatarNumero(jogo.ultimoPersonagem.multiplicador) + "x";
}

function atualizarTudo() {
  atualizarTela();
  atualizarBoss();
  montarListaMundos();
  montarListaPersonagens();
  atualizarMochila();
  atualizarMissoes();
  montarSelectAdm();
  salvarJogo();
}

function montarSelectAdm() {
  elementos.admPersonagem.innerHTML = "";

  mundos.forEach(function (mundo) {
    mundo.personagens.forEach(function (personagem) {
      const option = document.createElement("option");
      option.value = personagem.nome + "_" + mundo.id;
      option.textContent = personagem.nome + " - " + mundo.nome + " - " + formatarNumero(personagem.multiplicador) + "x";
      elementos.admPersonagem.appendChild(option);
    });
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
  const valor = elementos.admPersonagem.value;
  const quantidade = Number(elementos.admQuantidade.value);

  if (!valor || !quantidade || quantidade <= 0) {
    mostrarMensagem("ADM: dados inválidos.");
    return;
  }

  let personagemEncontrado = null;
  let mundoEncontrado = null;

  mundos.forEach(function (mundo) {
    mundo.personagens.forEach(function (personagem) {
      const chave = personagem.nome + "_" + mundo.id;

      if (chave === valor) {
        personagemEncontrado = personagem;
        mundoEncontrado = mundo;
      }
    });
  });

  if (!personagemEncontrado || !mundoEncontrado) {
    mostrarMensagem("ADM: personagem não encontrado.");
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    adicionarNaMochila(personagemEncontrado, mundoEncontrado.id);
  }

  jogo.ultimoPersonagem = {
    nome: personagemEncontrado.nome,
    chanceTexto: personagemEncontrado.chanceTexto,
    multiplicador: personagemEncontrado.multiplicador
  };

  mostrarMensagem("ADM: " + personagemEncontrado.nome + " x" + quantidade + " adicionado à mochila.");
  atualizarTudo();
}

function admDesbloquearTodosMundos() {
  jogo.mundosDesbloqueados = mundos.map(function (mundo) {
    return mundo.id;
  });

  mostrarMensagem("ADM: todos os mundos foram desbloqueados.");
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

    if (!jogo.mundosDesbloqueados) {
      jogo.mundosDesbloqueados = ["vila_ninja"];
    }

    if (!jogo.mundoAtual) {
      jogo.mundoAtual = "vila_ninja";
    }

    jogo.mochila = jogo.mochila.map(function (personagem) {
      return {
        ...personagem,
        chave: personagem.chave || personagem.nome + "_" + (personagem.mundoId || "vila_ninja"),
        mundoId: personagem.mundoId || "vila_ninja",
        multiplicadorBase: personagem.multiplicadorBase || personagem.multiplicador || 1,
        nivel: personagem.nivel || 1,
        quantidade: personagem.quantidade || 1
      };
    });

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
