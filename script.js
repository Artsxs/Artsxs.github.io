const SAVE_KEY = "animeClickerSimulatorSave";

const OLD_SAVE_KEYS = [
  "animeClickerSimulatorSaveV51",
  "animeClickerSimulatorSaveV50",
  "animeClickerSimulatorSaveV42",
  "animeClickerSimulatorSaveV41",
  "animeClickerSimulatorSaveV4",
  "animeClickerSimulatorSaveV3"
];

const ADM_CODE = "ARTSXS-ADM-2026";

const imagensPersonagens = {
  Naruto: "./img/naruto.png",
  Sasuke: "./img/sasuke.png",
  Zetsu: "./img/zetsu.png",
  Minato: "./img/minato.png",
  Obito: "./img/obito.png",
  Madara: "./img/madara.png",
  Kaguya: "./img/kaguya.png",

  Zoro: "./img/zoro.png",
  Sanji: "./img/sanji.png",
  Law: "./img/law.png",
  Luffy: "./img/luffy.png",
  Kaido: "./img/kaido.png",
  Imu: "./img/imu.png",
  JoyBoy: "./img/joyboy.png",

  Itadori: "./img/itadori.png",
  Nanami: "./img/nanami.png",
  Jogo: "./img/jogo.png",
  Mahito: "./img/mahito.png",
  Gojo: "./img/gojo.png",
  Sukuna: "./img/sukuna.png",
  Yuta: "./img/yuta.png",

  Murata: "./img/murata.png",
  Inosuke: "./img/inosuke.png",
  Zenitsu: "./img/zenitsu.png",
  Nezuko: "./img/nezuko.png",
  Rengoku: "./img/rengoku.png",
  Tanjiro: "./img/tanjiro.png",
  Muzan: "./img/muzan.png"
};

function criarAvatarPersonagem(nome) {
  const imagem = imagensPersonagens[nome];

  return `
    <div class="avatar-personagem">
      <img 
        src="${imagem || ""}" 
        alt="${nome}" 
        onerror="this.style.display='none'; this.parentElement.querySelector('.avatar-fallback').style.display='grid';"
      />
      <span class="avatar-fallback">${nome.charAt(0)}</span>
    </div>
  `;
}

const updateLogs = [
  {
    versao: "1.0",
    codigo: "Update1",
    titulo: "Início do jogo",
    descricao: "Primeira versão com sistema de clique, pontos e upgrades básicos.",
    recompensaTexto: "2.500 pontos"
  },
  {
    versao: "2.0",
    codigo: "Update2",
    titulo: "RNG, mochila e boss",
    descricao: "Adicionado sistema de RNG, mochila, personagens equipáveis, missões e boss fight.",
    recompensaTexto: "5.000 pontos"
  },
  {
    versao: "3.0",
    codigo: "Update3",
    titulo: "Sistema de abas e ADM",
    descricao: "O jogo ganhou menu por abas, status organizado, painel de boss e menu ADM para testes.",
    recompensaTexto: "7.500 pontos"
  },
  {
    versao: "4.0",
    codigo: "Update4",
    titulo: "Mundos, fusão e evolução",
    descricao: "Adicionados novos mundos, RNG por mundo, fusão de repetidos e evolução de personagens.",
    recompensaTexto: "10.000 pontos"
  },
  {
    versao: "4.1",
    codigo: "Update41",
    titulo: "Update Log e Códigos",
    descricao: "Adicionadas as abas Update Log e Códigos com recompensas resgatáveis.",
    recompensaTexto: "12.500 pontos"
  },
  {
    versao: "4.2",
    codigo: "Update42",
    titulo: "Economia balanceada e RNG avançado",
    descricao: "Economia ficou mais difícil, fusão exige mais cópias e foram adicionados giros 100x e 1000x.",
    recompensaTexto: "15.000 pontos"
  },
  {
    versao: "5.0",
    codigo: "Update50",
    titulo: "Rank, Rebirth, Eventos e Coleção",
    descricao: "Adicionados rank, rebirth, eventos ADM, coleção, conquistas, tickets, pity, loja especial e progressão avançada.",
    recompensaTexto: "25.000 pontos"
  },
  {
    versao: "5.1",
    codigo: "Update51",
    titulo: "Interface limpa e imagens",
    descricao: "Interface visual reorganizada, cards mais limpos e imagens adicionadas aos personagens.",
    recompensaTexto: "35.000 pontos + 2 Tickets 10x"
  },
  {
    versao: "5.2",
    codigo: "Update52",
    titulo: "Menu organizado e save permanente",
    descricao: "Interface reorganizada por categorias e save fixo com migração automática de versões antigas.",
    recompensaTexto: "50.000 pontos + 3 Tickets 10x"
  }
];

const codigosPromocionais = {
  Update1: {
    pontos: 2500,
    mensagem: "Código Update1 resgatado! Você ganhou 2.500 pontos."
  },
  Update2: {
    pontos: 5000,
    mensagem: "Código Update2 resgatado! Você ganhou 5.000 pontos."
  },
  Update3: {
    pontos: 7500,
    mensagem: "Código Update3 resgatado! Você ganhou 7.500 pontos."
  },
  Update4: {
    pontos: 10000,
    mensagem: "Código Update4 resgatado! Você ganhou 10.000 pontos."
  },
  Update41: {
    pontos: 12500,
    mensagem: "Código Update41 resgatado! Você ganhou 12.500 pontos."
  },
  Update42: {
    pontos: 15000,
    mensagem: "Código Update42 resgatado! Você ganhou 15.000 pontos."
  },
  Update50: {
    pontos: 25000,
    tickets: { t1: 5, t10: 1, t100: 0 },
    mensagem: "Código Update50 resgatado! Você ganhou 25.000 pontos, 5 Tickets 1x e 1 Ticket 10x."
  },
  Update51: {
    pontos: 35000,
    tickets: { t1: 0, t10: 2, t100: 0 },
    mensagem: "Código Update51 resgatado! Você ganhou 35.000 pontos e 2 Tickets 10x."
  },
  Update52: {
    pontos: 50000,
    tickets: { t1: 0, t10: 3, t100: 0 },
    mensagem: "Código Update52 resgatado! Você ganhou 50.000 pontos e 3 Tickets 10x."
  }
};

const mundos = [
  {
    id: "vila_ninja",
    nome: "Vila Ninja Oculta",
    custo: 0,
    bossesNecessarios: 0,
    precoRng: 1000,
    descricao: "Treine seu chakra, enfrente rivais e desbloqueie ninjas lendários com poderes cada vez maiores.",
    personagens: [
      { nome: "Naruto", chanceTexto: "1/2", multiplicador: 2, raridade: "comum" },
      { nome: "Sasuke", chanceTexto: "1/10", multiplicador: 10, raridade: "raro" },
      { nome: "Zetsu", chanceTexto: "1/25", multiplicador: 25, raridade: "epico" },
      { nome: "Minato", chanceTexto: "1/50", multiplicador: 50, raridade: "lendario" },
      { nome: "Obito", chanceTexto: "1/100", multiplicador: 100, raridade: "mitico" },
      { nome: "Madara", chanceTexto: "1/500", multiplicador: 500, raridade: "divino" },
      { nome: "Kaguya", chanceTexto: "1/2000", multiplicador: 2000, raridade: "secreto" }
    ]
  },
  {
    id: "ilha_pirata",
    nome: "Ilha dos Piratas",
    custo: 250000,
    bossesNecessarios: 3,
    precoRng: 5000,
    descricao: "Navegue em busca de tesouros, capitães poderosos e guerreiros raros que aumentam seu multiplicador.",
    personagens: [
      { nome: "Zoro", chanceTexto: "1/2", multiplicador: 20, raridade: "comum" },
      { nome: "Sanji", chanceTexto: "1/15", multiplicador: 75, raridade: "raro" },
      { nome: "Law", chanceTexto: "1/50", multiplicador: 200, raridade: "epico" },
      { nome: "Luffy", chanceTexto: "1/150", multiplicador: 600, raridade: "lendario" },
      { nome: "Kaido", chanceTexto: "1/500", multiplicador: 1500, raridade: "mitico" },
      { nome: "Imu", chanceTexto: "1/2000", multiplicador: 5000, raridade: "divino" },
      { nome: "JoyBoy", chanceTexto: "1/10000", multiplicador: 15000, raridade: "secreto" }
    ]
  },
  {
    id: "cidade_amaldiçoada",
    nome: "Estação Shibuya",
    custo: 5000000,
    bossesNecessarios: 10,
    precoRng: 25000,
    descricao: "Domine energia sombria, enfrente maldições e conquiste feiticeiros raríssimos para fortalecer seu time.",
    personagens: [
      { nome: "Itadori", chanceTexto: "1/2", multiplicador: 100, raridade: "raro" },
      { nome: "Nanami", chanceTexto: "1/25", multiplicador: 500, raridade: "epico" },
      { nome: "Jogo", chanceTexto: "1/100", multiplicador: 2000, raridade: "lendario" },
      { nome: "Mahito", chanceTexto: "1/500", multiplicador: 8000, raridade: "mitico" },
      { nome: "Gojo", chanceTexto: "1/2500", multiplicador: 25000, raridade: "divino" },
      { nome: "Sukuna", chanceTexto: "1/10000", multiplicador: 75000, raridade: "secreto" },
      { nome: "Yuta", chanceTexto: "1/50000", multiplicador: 250000, raridade: "universal" }
    ]
  },
  {
    id: "reino_virtual",
    nome: "Ilha de Caçadores",
    custo: 100000000,
    bossesNecessarios: 25,
    precoRng: 100000,
    descricao: "Entre em um mundo digital de espadas, níveis e chefes, onde cada personagem raro aumenta seu poder.",
    personagens: [
      { nome: "Murata", chanceTexto: "1/2", multiplicador: 1000, raridade: "epico" },
      { nome: "Inosuke", chanceTexto: "1/50", multiplicador: 8000, raridade: "lendario" },
      { nome: "Zenitsu", chanceTexto: "1/500", multiplicador: 50000, raridade: "mitico" },
      { nome: "Nezuko", chanceTexto: "1/5000", multiplicador: 250000, raridade: "divino" },
      { nome: "Rengoku", chanceTexto: "1/25000", multiplicador: 1000000, raridade: "secreto" },
      { nome: "Tanjiro", chanceTexto: "1/100000", multiplicador: 5000000, raridade: "celestial" },
      { nome: "Muzan", chanceTexto: "1/1000000", multiplicador: 50000000, raridade: "universal" }
    ]
  }
];

const missoes = [
  {
    id: "cliques50",
    titulo: "Primeiros ataques",
    descricao: "Clique 50 vezes.",
    recompensa: 500,
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
    recompensa: 1500,
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
    recompensa: 2500,
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
    recompensa: 3000,
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
    descricao: "Desbloqueie a Ilha dos Piratas.",
    recompensa: 7500,
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
    recompensa: 10000,
    concluida: function () {
      return jogo.stats.fusoes >= 1;
    },
    progresso: function () {
      return Math.min(jogo.stats.fusoes, 1) + "/1 fusão";
    }
  }
];

const conquistas = [
  {
    id: "primeiroMilhao",
    titulo: "Primeiro milhão",
    descricao: "Alcance 1.000.000 de pontos.",
    recompensa: 50000,
    concluida: function () {
      return jogo.pontos >= 1000000 || jogo.stats.maiorPontos >= 1000000;
    }
  },
  {
    id: "primeiroSecreto",
    titulo: "Drop secreto",
    descricao: "Obtenha qualquer personagem secreto ou melhor.",
    recompensa: 75000,
    concluida: function () {
      return jogo.mochila.some(function (personagem) {
        return ["secreto", "celestial", "universal"].includes(personagem.raridade);
      });
    }
  },
  {
    id: "primeiraFusao",
    titulo: "Evolução iniciada",
    descricao: "Faça sua primeira fusão.",
    recompensa: 25000,
    concluida: function () {
      return jogo.stats.fusoes >= 1;
    }
  },
  {
    id: "dezBosses",
    titulo: "Caçador avançado",
    descricao: "Derrote 10 bosses.",
    recompensa: 100000,
    concluida: function () {
      return jogo.stats.bossesDerrotados >= 10;
    }
  },
  {
    id: "milGiros",
    titulo: "Viciado em RNG",
    descricao: "Faça 1.000 giros.",
    recompensa: 150000,
    concluida: function () {
      return jogo.stats.giros >= 1000;
    }
  },
  {
    id: "primeiroRebirth",
    titulo: "Renascimento",
    descricao: "Faça seu primeiro rebirth.",
    recompensa: 250000,
    concluida: function () {
      return jogo.rebirths >= 1;
    }
  }
];

let jogo = criarJogoInicial();

const elementos = {
  pontos: document.getElementById("pontos"),
  ganhoRealClique: document.getElementById("ganhoRealClique"),
  multiplicador: document.getElementById("multiplicador"),
  mundoAtualTexto: document.getElementById("mundoAtualTexto"),
  rankJogador: document.getElementById("rankJogador"),
  eventoAtivoTexto: document.getElementById("eventoAtivoTexto"),

  pontosPorClique: document.getElementById("pontosPorClique"),
  pontosPorSegundo: document.getElementById("pontosPorSegundo"),
  nivelAura: document.getElementById("nivelAura"),
  multiplicadorStatus: document.getElementById("multiplicadorStatus"),
  ganhoRealStatus: document.getElementById("ganhoRealStatus"),
  nivelSorte: document.getElementById("nivelSorte"),
  rebirthsTexto: document.getElementById("rebirthsTexto"),
  bonusRebirthTexto: document.getElementById("bonusRebirthTexto"),
  quantidadeEquipados: document.getElementById("quantidadeEquipados"),
  limiteEquipadosTexto: document.getElementById("limiteEquipadosTexto"),
  favoritoTexto: document.getElementById("favoritoTexto"),
  totalCliques: document.getElementById("totalCliques"),
  totalGiros: document.getElementById("totalGiros"),
  totalBosses: document.getElementById("totalBosses"),
  pityTexto: document.getElementById("pityTexto"),

  botaoClick: document.getElementById("botaoClick"),
  upgradeClique: document.getElementById("upgradeClique"),
  upgradeSegundo: document.getElementById("upgradeSegundo"),
  upgradeSorte: document.getElementById("upgradeSorte"),

  comprarDescontoRng: document.getElementById("comprarDescontoRng"),
  comprarSlotEquipado: document.getElementById("comprarSlotEquipado"),
  comprarBonusBoss: document.getElementById("comprarBonusBoss"),
  comprarBonusPps: document.getElementById("comprarBonusPps"),

  rebirthsPainel: document.getElementById("rebirthsPainel"),
  bonusRebirthPainel: document.getElementById("bonusRebirthPainel"),
  custoRebirthTexto: document.getElementById("custoRebirthTexto"),
  botaoRebirth: document.getElementById("botaoRebirth"),

  botaoRng: document.getElementById("botaoRng"),
  botaoRng10: document.getElementById("botaoRng10"),
  botaoRng100: document.getElementById("botaoRng100"),
  botaoRng1000: document.getElementById("botaoRng1000"),

  usarTicket1: document.getElementById("usarTicket1"),
  usarTicket10: document.getElementById("usarTicket10"),
  usarTicket100: document.getElementById("usarTicket100"),

  resetarJogo: document.getElementById("resetarJogo"),
  mensagem: document.getElementById("mensagem"),

  mundoAtualRng: document.getElementById("mundoAtualRng"),
  precoRngAtual: document.getElementById("precoRngAtual"),
  ticket1Texto: document.getElementById("ticket1Texto"),
  ticket10Texto: document.getElementById("ticket10Texto"),
  ticket100Texto: document.getElementById("ticket100Texto"),

  personagemAtual: document.getElementById("personagemAtual"),
  chanceAtual: document.getElementById("chanceAtual"),
  multiplicadorAtual: document.getElementById("multiplicadorAtual"),
  listaPersonagens: document.getElementById("listaPersonagens"),
  mochilaPersonagens: document.getElementById("mochilaPersonagens"),
  listaColecao: document.getElementById("listaColecao"),
  listaHistorico: document.getElementById("listaHistorico"),
  listaConquistas: document.getElementById("listaConquistas"),
  listaMissoes: document.getElementById("listaMissoes"),
  listaMundos: document.getElementById("listaMundos"),

  quantidadeEquipadosMochila: document.getElementById("quantidadeEquipadosMochila"),
  limiteEquipadosMochila: document.getElementById("limiteEquipadosMochila"),

  listaUpdateLog: document.getElementById("listaUpdateLog"),
  inputCodigo: document.getElementById("inputCodigo"),
  botaoResgatarCodigo: document.getElementById("botaoResgatarCodigo"),
  listaCodigos: document.getElementById("listaCodigos"),

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

  admEventoLuck: document.getElementById("admEventoLuck"),
  admEventoPontos: document.getElementById("admEventoPontos"),
  admEventoBoss: document.getElementById("admEventoBoss"),
  admEventoOff: document.getElementById("admEventoOff"),

  admSalvar: document.getElementById("admSalvar"),
  admSair: document.getElementById("admSair")
};

carregarJogo();
configurarTabs();
configurarEventos();
atualizarTudo();

function criarJogoInicial() {
  return {
    pontos: 0,
    pontosPorClique: 1,
    precoUpgradeClique: 25,

    pontosPorSegundo: 0,
    nivelAura: 0,
    precoUpgradeSegundo: 250,

    sorte: 0,
    precoUpgradeSorte: 25000,

    mundoAtual: "vila_ninja",
    mundosDesbloqueados: ["vila_ninja"],

    mochila: [],
    equipados: [],
    personagemFavorito: null,

    ultimoPersonagem: {
      nome: "Nenhum",
      chanceTexto: "---",
      multiplicador: 1
    },

    boss: {
      nome: "Dragão Sombrio",
      nivel: 1,
      vidaAtual: 50000,
      vidaMax: 50000,
      recompensa: 1000
    },

    tickets: {
      t1: 0,
      t10: 0,
      t100: 0
    },

    loja: {
      descontoRng: 0,
      precoDescontoRng: 100000,

      limiteEquipados: 3,
      precoSlotEquipado: 1000000,

      bonusBoss: 0,
      precoBonusBoss: 250000,

      bonusPps: 0,
      precoBonusPps: 150000
    },

    rebirths: 0,
    custoRebirth: 1000000,

    eventoAtivo: null,

    pity: 0,
    historicoDrops: [],
    colecaoObtidos: {},

    stats: {
      cliques: 0,
      giros: 0,
      bossesDerrotados: 0,
      fusoes: 0,
      maiorPontos: 0
    },

    missoesResgatadas: {},
    codigosResgatados: {},
    conquistasResgatadas: {}
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

      const abaAlvo = document.getElementById(alvo);

      if (abaAlvo) {
        abaAlvo.classList.add("active");
      }
    });
  });
}

function configurarEventos() {
  elementos.botaoClick.addEventListener("click", atacar);

  elementos.upgradeClique.addEventListener("click", comprarUpgradeClique);
  elementos.upgradeSegundo.addEventListener("click", comprarUpgradeSegundo);
  elementos.upgradeSorte.addEventListener("click", comprarUpgradeSorte);

  elementos.comprarDescontoRng.addEventListener("click", comprarDescontoRng);
  elementos.comprarSlotEquipado.addEventListener("click", comprarSlotEquipado);
  elementos.comprarBonusBoss.addEventListener("click", comprarBonusBoss);
  elementos.comprarBonusPps.addEventListener("click", comprarBonusPps);

  elementos.botaoRebirth.addEventListener("click", fazerRebirth);

  elementos.botaoRng.addEventListener("click", function () {
    girarRng(1, false);
  });

  elementos.botaoRng10.addEventListener("click", function () {
    girarRng(10, false);
  });

  elementos.botaoRng100.addEventListener("click", function () {
    girarRng(100, false);
  });

  elementos.botaoRng1000.addEventListener("click", function () {
    girarRng(1000, false);
  });

  elementos.usarTicket1.addEventListener("click", function () {
    usarTicket("t1", 1);
  });

  elementos.usarTicket10.addEventListener("click", function () {
    usarTicket("t10", 10);
  });

  elementos.usarTicket100.addEventListener("click", function () {
    usarTicket("t100", 100);
  });

  elementos.resetarJogo.addEventListener("click", resetarJogo);

  elementos.botaoResgatarCodigo.addEventListener("click", resgatarCodigo);

  elementos.inputCodigo.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      resgatarCodigo();
    }
  });

  elementos.entrarAdm.addEventListener("click", liberarAdm);
  elementos.admAdicionarPontos.addEventListener("click", admAdicionarPontos);
  elementos.admAdicionarPersonagem.addEventListener("click", admAdicionarPersonagem);
  elementos.admDesbloquearMundos.addEventListener("click", admDesbloquearTodosMundos);
  elementos.admDerrotarBoss.addEventListener("click", admDerrotarBoss);

  elementos.admEventoLuck.addEventListener("click", function () {
    ativarEvento("luck10");
  });

  elementos.admEventoPontos.addEventListener("click", function () {
    ativarEvento("pontos10");
  });

  elementos.admEventoBoss.addEventListener("click", function () {
    ativarEvento("bossFrenzy");
  });

  elementos.admEventoOff.addEventListener("click", function () {
    jogo.eventoAtivo = null;
    mostrarMensagem("Evento desativado.");
    atualizarTudo();
  });

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
      const ganho = calcularGanhoPorSegundoReal();
      jogo.pontos += ganho;
      atualizarMaiorPontos();
      atualizarTudo();
    }
  }, 1000);
}

function atacar() {
  const ganho = calcularGanhoRealClique();

  jogo.pontos += ganho;
  jogo.stats.cliques += 1;

  atualizarMaiorPontos();
  causarDanoNoBoss(ganho);

  mostrarMensagem("Você atacou e ganhou +" + formatarNumero(ganho) + " pontos!");

  atualizarTudo();
}

function calcularMultiplicadorEventoPontos() {
  if (jogo.eventoAtivo === "pontos10") {
    return 10;
  }

  return 1;
}

function calcularBonusRebirth() {
  return jogo.rebirths * 0.25;
}

function calcularGanhoRealClique() {
  const base = jogo.pontosPorClique * calcularMultiplicadorTotal();
  const rebirth = 1 + calcularBonusRebirth();
  const evento = calcularMultiplicadorEventoPontos();

  return Math.floor(base * rebirth * evento);
}

function calcularGanhoPorSegundoReal() {
  const rebirth = 1 + calcularBonusRebirth();
  const evento = calcularMultiplicadorEventoPontos();

  return Math.floor(jogo.pontosPorSegundo * rebirth * evento);
}

function comprarUpgradeClique() {
  if (jogo.pontos < jogo.precoUpgradeClique) {
    mostrarMensagem("Pontos insuficientes para comprar treino de força.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeClique;
  jogo.pontosPorClique += 1;
  jogo.precoUpgradeClique = Math.floor(jogo.precoUpgradeClique * 4);

  mostrarMensagem("Treino de força comprado!");
  atualizarTudo();
}

function comprarUpgradeSegundo() {
  if (jogo.pontos < jogo.precoUpgradeSegundo) {
    mostrarMensagem("Pontos insuficientes para comprar aura automática.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeSegundo;
  jogo.nivelAura += 1;

  const ganhoAura = Math.floor((jogo.nivelAura * jogo.nivelAura) + jogo.nivelAura + jogo.loja.bonusPps * 5);
  jogo.pontosPorSegundo += ganhoAura;

  jogo.precoUpgradeSegundo = Math.floor(jogo.precoUpgradeSegundo * 4);

  mostrarMensagem("Aura automática melhorada! +" + formatarNumero(ganhoAura) + " pontos por segundo.");
  atualizarTudo();
}

function comprarUpgradeSorte() {
  if (jogo.pontos < jogo.precoUpgradeSorte) {
    mostrarMensagem("Pontos insuficientes para comprar sorte.");
    return;
  }

  jogo.pontos -= jogo.precoUpgradeSorte;
  jogo.sorte += 1;
  jogo.precoUpgradeSorte = Math.floor(jogo.precoUpgradeSorte * 3);

  mostrarMensagem("Sorte aumentada para nível " + jogo.sorte + "!");
  atualizarTudo();
}

function comprarDescontoRng() {
  if (jogo.pontos < jogo.loja.precoDescontoRng) {
    mostrarMensagem("Pontos insuficientes para comprar desconto de RNG.");
    return;
  }

  if (jogo.loja.descontoRng >= 10) {
    mostrarMensagem("Desconto de RNG já está no máximo.");
    return;
  }

  jogo.pontos -= jogo.loja.precoDescontoRng;
  jogo.loja.descontoRng += 1;
  jogo.loja.precoDescontoRng = Math.floor(jogo.loja.precoDescontoRng * 3);

  mostrarMensagem("Desconto de RNG comprado! Nível " + jogo.loja.descontoRng + ".");
  atualizarTudo();
}

function comprarSlotEquipado() {
  if (jogo.pontos < jogo.loja.precoSlotEquipado) {
    mostrarMensagem("Pontos insuficientes para aumentar limite de equipados.");
    return;
  }

  if (jogo.loja.limiteEquipados >= 6) {
    mostrarMensagem("Limite de equipados já está no máximo.");
    return;
  }

  jogo.pontos -= jogo.loja.precoSlotEquipado;
  jogo.loja.limiteEquipados += 1;
  jogo.loja.precoSlotEquipado = Math.floor(jogo.loja.precoSlotEquipado * 5);

  mostrarMensagem("Novo limite de equipados: " + jogo.loja.limiteEquipados + ".");
  atualizarTudo();
}

function comprarBonusBoss() {
  if (jogo.pontos < jogo.loja.precoBonusBoss) {
    mostrarMensagem("Pontos insuficientes para comprar bônus de boss.");
    return;
  }

  jogo.pontos -= jogo.loja.precoBonusBoss;
  jogo.loja.bonusBoss += 1;
  jogo.loja.precoBonusBoss = Math.floor(jogo.loja.precoBonusBoss * 3);

  mostrarMensagem("Bônus de boss comprado! Nível " + jogo.loja.bonusBoss + ".");
  atualizarTudo();
}

function comprarBonusPps() {
  if (jogo.pontos < jogo.loja.precoBonusPps) {
    mostrarMensagem("Pontos insuficientes para melhorar pontos por segundo.");
    return;
  }

  jogo.pontos -= jogo.loja.precoBonusPps;
  jogo.loja.bonusPps += 1;
  jogo.pontosPorSegundo += 10 * jogo.loja.bonusPps;
  jogo.loja.precoBonusPps = Math.floor(jogo.loja.precoBonusPps * 3);

  mostrarMensagem("Pontos por segundo melhorado! Bônus nível " + jogo.loja.bonusPps + ".");
  atualizarTudo();
}

function fazerRebirth() {
  if (jogo.pontos < jogo.custoRebirth) {
    mostrarMensagem("Você precisa de " + formatarNumero(jogo.custoRebirth) + " pontos para fazer rebirth.");
    return;
  }

  const confirmar = confirm("Fazer rebirth? Você perderá pontos e upgrades básicos, mas manterá personagens, mundos, coleção e ganhará bônus permanente.");

  if (!confirmar) {
    return;
  }

  jogo.rebirths += 1;

  jogo.pontos = 0;
  jogo.pontosPorClique = 1;
  jogo.precoUpgradeClique = 25;

  jogo.pontosPorSegundo = 0;
  jogo.nivelAura = 0;
  jogo.precoUpgradeSegundo = 250;

  jogo.sorte = 0;
  jogo.precoUpgradeSorte = 25000;

  jogo.custoRebirth = Math.floor(jogo.custoRebirth * 5);

  mostrarMensagem("Rebirth realizado! Bônus permanente atual: " + Math.floor(calcularBonusRebirth() * 100) + "%.");
  atualizarTudo();
}

function obterMundoAtual() {
  return mundos.find(function (mundo) {
    return mundo.id === jogo.mundoAtual;
  }) || mundos[0];
}

function calcularPrecoRng(mundo) {
  const desconto = Math.min(jogo.loja.descontoRng * 0.05, 0.5);
  return Math.max(1, Math.floor(mundo.precoRng * (1 - desconto)));
}

function girarRng(quantidade, gratuito) {
  const mundo = obterMundoAtual();
  const precoUnitario = calcularPrecoRng(mundo);
  const custoTotal = precoUnitario * quantidade;

  if (!gratuito && jogo.pontos < custoTotal) {
    mostrarMensagem("Você precisa de " + formatarNumero(custoTotal) + " pontos para girar " + quantidade + "x.");
    return;
  }

  if (!gratuito) {
    jogo.pontos -= custoTotal;
  }

  let melhorPersonagem = null;

  for (let i = 0; i < quantidade; i++) {
    const personagem = sortearPersonagemDoMundo(mundo);
    adicionarNaMochila(personagem, mundo.id);
    adicionarNoHistorico(personagem, mundo);
    atualizarPity(personagem, mundo);

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
    formatarNumero(melhorPersonagem.multiplicador) +
    "x)."
  );

  atualizarTudo();
}

function usarTicket(tipo, quantidade) {
  if (jogo.tickets[tipo] <= 0) {
    mostrarMensagem("Você não tem esse ticket.");
    return;
  }

  jogo.tickets[tipo] -= 1;
  girarRng(quantidade, true);
}

function sortearPersonagemDoMundo(mundo) {
  const numeroSorteado = Math.random();
  const bonusSorteBase = 1 + jogo.sorte * 0.05;
  const bonusEvento = jogo.eventoAtivo === "luck10" ? 10 : 1;
  const bonusSorte = bonusSorteBase * bonusEvento;

  const lista = mundo.personagens;

  if (jogo.pity >= 500) {
    return lista[Math.min(2, lista.length - 1)];
  }

  for (let i = lista.length - 1; i >= 1; i--) {
    const chanceNumerica = pegarNumeroChance(lista[i].chanceTexto);
    const chanceComBonus = (1 / chanceNumerica) * bonusSorte;

    if (numeroSorteado < chanceComBonus) {
      return lista[i];
    }
  }

  return lista[0];
}

function atualizarPity(personagem, mundo) {
  const indice = mundo.personagens.findIndex(function (item) {
    return item.nome === personagem.nome;
  });

  if (indice >= 2) {
    jogo.pity = 0;
    return;
  }

  jogo.pity += 1;
}

function pegarNumeroChance(chanceTexto) {
  return Number(chanceTexto.replace("1/", ""));
}

function adicionarNaMochila(personagem, mundoId) {
  const chave = personagem.nome + "_" + mundoId;

  jogo.colecaoObtidos[chave] = true;

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

function adicionarNoHistorico(personagem, mundo) {
  jogo.historicoDrops.unshift({
    nome: personagem.nome,
    mundo: mundo.nome,
    chanceTexto: personagem.chanceTexto,
    multiplicador: personagem.multiplicador,
    raridade: personagem.raridade
  });

  if (jogo.historicoDrops.length > 30) {
    jogo.historicoDrops.pop();
  }
}

function calcularMultiplicadorPersonagem(personagem) {
  return personagem.multiplicadorBase * personagem.nivel;
}

function obterEstagioPersonagem(nivel) {
  if (nivel >= 50) {
    return "Absoluto";
  }

  if (nivel >= 25) {
    return "Divino";
  }

  if (nivel >= 10) {
    return "Supremo";
  }

  if (nivel >= 5) {
    return "Desperto";
  }

  return "Normal";
}

function fundirPersonagem(chave) {
  const personagem = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  if (!personagem) {
    mostrarMensagem("Personagem não encontrado.");
    return;
  }

  const custoFusao = 10;

  if (personagem.quantidade < custoFusao) {
    mostrarMensagem("Você precisa de 10 cópias para evoluir " + personagem.nome + ".");
    return;
  }

  personagem.quantidade -= custoFusao;
  personagem.nivel += 1;
  jogo.stats.fusoes += 1;

  mostrarMensagem(personagem.nome + " evoluiu para o nível " + personagem.nivel + " - estágio " + obterEstagioPersonagem(personagem.nivel) + "!");

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

  if (jogo.equipados.length >= jogo.loja.limiteEquipados) {
    mostrarMensagem("Você só pode equipar no máximo " + jogo.loja.limiteEquipados + " personagens.");
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

function favoritarPersonagem(chave) {
  const personagem = jogo.mochila.find(function (item) {
    return item.chave === chave;
  });

  if (!personagem) {
    mostrarMensagem("Personagem não encontrado.");
    return;
  }

  jogo.personagemFavorito = chave;

  mostrarMensagem(personagem.nome + " agora é seu personagem favorito!");
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

function causarDanoNoBoss(dano) {
  jogo.boss.vidaAtual -= dano;

  if (jogo.boss.vidaAtual <= 0) {
    const recompensa = calcularRecompensaBoss();

    jogo.pontos += recompensa;
    jogo.stats.bossesDerrotados += 1;
    entregarTicketBoss();

    mostrarMensagem("Boss derrotado! Você ganhou +" + formatarNumero(recompensa) + " pontos e pode ter recebido tickets.");

    criarProximoBoss();
  }
}

function calcularRecompensaBoss() {
  let recompensa = jogo.boss.recompensa;

  recompensa *= 1 + jogo.loja.bonusBoss * 0.25;

  if (jogo.eventoAtivo === "bossFrenzy") {
    recompensa *= 5;
  }

  return Math.floor(recompensa);
}

function entregarTicketBoss() {
  const chance = jogo.eventoAtivo === "bossFrenzy" ? 1 : Math.random();

  if (chance < 0.15 || jogo.eventoAtivo === "bossFrenzy") {
    jogo.tickets.t1 += 1;
  }

  if (chance < 0.06 || jogo.eventoAtivo === "bossFrenzy") {
    jogo.tickets.t10 += 1;
  }

  if (chance < 0.015 || jogo.eventoAtivo === "bossFrenzy") {
    jogo.tickets.t100 += 1;
  }
}

function criarProximoBoss() {
  const novoNivel = jogo.boss.nivel + 1;
  const novaVida = Math.floor(50000 * Math.pow(2.5, novoNivel - 1));
  const novaRecompensa = Math.floor(1000 * Math.pow(1.35, novoNivel - 1));

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

  if (jogo.stats.bossesDerrotados < mundo.bossesNecessarios) {
    mostrarMensagem("Você precisa derrotar " + mundo.bossesNecessarios + " bosses para desbloquear " + mundo.nome + ".");
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

function obterRank() {
  const poder = calcularGanhoRealClique();

  if (poder >= 1000000000) return "Deus";
  if (poder >= 100000000) return "SS";
  if (poder >= 10000000) return "S";
  if (poder >= 1000000) return "A";
  if (poder >= 100000) return "B";
  if (poder >= 10000) return "C";
  if (poder >= 1000) return "D";

  return "E";
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
      textoBotao = "Desbloquear";
      classeBotao += " bloqueado";
    }

    card.innerHTML = `
      <h3>${mundo.nome}</h3>
      <p>${mundo.descricao}</p>
      <p>Custo: <span>${formatarNumero(mundo.custo)}</span> pontos</p>
      <p>Bosses necessários: <span>${mundo.bossesNecessarios}</span></p>
      <p>Preço do RNG: <span>${formatarNumero(calcularPrecoRng(mundo))}</span> pontos</p>
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

    card.classList.add("personagem-card", personagem.raridade, "personagem-card-clean");

    card.innerHTML = `
      ${criarAvatarPersonagem(personagem.nome)}

      <div class="personagem-info">
        <strong>${personagem.nome}</strong>
        <span>Chance: ${personagem.chanceTexto}</span>
        <span>Base: ${formatarNumero(personagem.multiplicador)}x</span>
        <span class="tag-raridade">${personagem.raridade}</span>
      </div>
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
    const ehFavorito = jogo.personagemFavorito === personagem.chave;

    const mundo = mundos.find(function (item) {
      return item.id === personagem.mundoId;
    });

    const multiplicadorAtual = calcularMultiplicadorPersonagem(personagem);
    const podeFundir = personagem.quantidade >= 10;

    const card = document.createElement("div");
    card.classList.add("personagem-card", personagem.raridade, "personagem-card-clean");

    if (estaEquipado) {
      card.classList.add("equipado");
    }

    if (ehFavorito) {
      card.classList.add("favorito");
    }

    card.innerHTML = `
      ${criarAvatarPersonagem(personagem.nome)}

      <div class="personagem-info">
        <strong>${ehFavorito ? "⭐ " : ""}${personagem.nome}</strong>
        <span>Mundo: ${mundo ? mundo.nome : "Desconhecido"}</span>
        <span>Atual: ${formatarNumero(multiplicadorAtual)}x</span>
        <span>Nível ${personagem.nivel} • ${obterEstagioPersonagem(personagem.nivel)}</span>
        <span>Qtd: x${personagem.quantidade}</span>

        <div class="acoes-card">
          <button class="${estaEquipado ? "botao-desequipar" : "botao-equipar"}" data-chave="${personagem.chave}" data-acao="equipar">
            ${estaEquipado ? "Desequipar" : "Equipar"}
          </button>

          <button class="botao-favorito" data-chave="${personagem.chave}" data-acao="favoritar">
            Favoritar
          </button>

          <button class="botao-fundir" data-chave="${personagem.chave}" data-acao="fundir" ${podeFundir ? "" : "disabled"}>
            Evoluir
          </button>
        </div>
      </div>
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

      if (acao === "favoritar") {
        favoritarPersonagem(chave);
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

function montarColecao() {
  elementos.listaColecao.innerHTML = "";

  mundos.forEach(function (mundo) {
    mundo.personagens.forEach(function (personagem) {
      const chave = personagem.nome + "_" + mundo.id;
      const obtido = jogo.colecaoObtidos[chave];

      const card = document.createElement("div");
      card.classList.add("colecao-card", "personagem-card-clean");
      card.classList.add(obtido ? "colecao-obtido" : "colecao-nao-obtido");

      card.innerHTML = `
        ${criarAvatarPersonagem(obtido ? personagem.nome : "?")}

        <div class="personagem-info">
          <strong>${obtido ? personagem.nome : "???"}</strong>
          <span>Mundo: ${mundo.nome}</span>
          <span>Chance: ${personagem.chanceTexto}</span>
          <span>Raridade: ${personagem.raridade}</span>
          <span>Status: ${obtido ? "Obtido" : "Não obtido"}</span>
        </div>
      `;

      elementos.listaColecao.appendChild(card);
    });
  });
}

function montarHistorico() {
  elementos.listaHistorico.innerHTML = "";

  if (jogo.historicoDrops.length === 0) {
    elementos.listaHistorico.innerHTML = '<p class="mochila-vazia">Nenhum drop ainda.</p>';
    return;
  }

  jogo.historicoDrops.forEach(function (drop) {
    const card = document.createElement("div");
    card.classList.add("historico-card", "personagem-card-clean");

    card.innerHTML = `
      ${criarAvatarPersonagem(drop.nome)}

      <div class="personagem-info">
        <strong>${drop.nome}</strong>
        <span>Mundo: ${drop.mundo}</span>
        <span>Chance: ${drop.chanceTexto}</span>
        <span>Multiplicador: ${formatarNumero(drop.multiplicador)}x</span>
        <span>Raridade: ${drop.raridade}</span>
      </div>
    `;

    elementos.listaHistorico.appendChild(card);
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

function atualizarConquistas() {
  elementos.listaConquistas.innerHTML = "";

  conquistas.forEach(function (conquista) {
    const concluida = conquista.concluida();
    const resgatada = jogo.conquistasResgatadas[conquista.id];

    const card = document.createElement("div");
    card.classList.add("conquista-card");

    if (concluida && !resgatada) {
      card.classList.add("conquista-disponivel");
    }

    if (resgatada) {
      card.classList.add("conquista-resgatada");
    }

    let textoBotao = "Bloqueada";

    if (concluida && !resgatada) {
      textoBotao = "Resgatar";
    }

    if (resgatada) {
      textoBotao = "Resgatada";
    }

    card.innerHTML = `
      <h3>${conquista.titulo}</h3>
      <p>${conquista.descricao}</p>
      <p>Recompensa: <span>${formatarNumero(conquista.recompensa)}</span> pontos</p>
      <button class="botao-missao" data-id="${conquista.id}" ${!concluida || resgatada ? "disabled" : ""}>
        ${textoBotao}
      </button>
    `;

    elementos.listaConquistas.appendChild(card);
  });

  const botoes = elementos.listaConquistas.querySelectorAll("button");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      resgatarConquista(botao.dataset.id);
    });
  });
}

function resgatarConquista(id) {
  const conquista = conquistas.find(function (item) {
    return item.id === id;
  });

  if (!conquista || jogo.conquistasResgatadas[id] || !conquista.concluida()) {
    return;
  }

  jogo.pontos += conquista.recompensa;
  jogo.conquistasResgatadas[id] = true;

  mostrarMensagem("Conquista resgatada! Você ganhou +" + formatarNumero(conquista.recompensa) + " pontos.");

  atualizarTudo();
}

function montarUpdateLog() {
  elementos.listaUpdateLog.innerHTML = "";

  updateLogs.forEach(function (update) {
    const card = document.createElement("div");

    card.classList.add("update-card");

    card.innerHTML = `
      <h3>Versão ${update.versao} - ${update.titulo}</h3>
      <p>${update.descricao}</p>
      <p>Código: <span>${update.codigo}</span></p>
      <p>Recompensa: <span>${update.recompensaTexto}</span></p>
    `;

    elementos.listaUpdateLog.appendChild(card);
  });
}

function montarListaCodigos() {
  elementos.listaCodigos.innerHTML = "";

  updateLogs.forEach(function (update) {
    const foiResgatado = jogo.codigosResgatados && jogo.codigosResgatados[update.codigo];

    const card = document.createElement("div");

    card.classList.add("codigo-card");

    if (foiResgatado) {
      card.classList.add("codigo-resgatado");
    } else {
      card.classList.add("codigo-nao-resgatado");
    }

    card.innerHTML = `
      <h3>${update.codigo}</h3>
      <p>Versão: <span>${update.versao}</span></p>
      <p>Recompensa: <span>${update.recompensaTexto}</span></p>
      <p>Status: <span>${foiResgatado ? "Resgatado" : "Disponível"}</span></p>
    `;

    elementos.listaCodigos.appendChild(card);
  });
}

function resgatarCodigo() {
  const codigoDigitado = elementos.inputCodigo.value.trim();

  if (!codigoDigitado) {
    mostrarMensagem("Digite um código para resgatar.");
    return;
  }

  const codigo = codigosPromocionais[codigoDigitado];

  if (!codigo) {
    mostrarMensagem("Código inválido.");
    return;
  }

  if (jogo.codigosResgatados[codigoDigitado]) {
    mostrarMensagem("Esse código já foi resgatado.");
    return;
  }

  jogo.pontos += codigo.pontos;

  if (codigo.tickets) {
    jogo.tickets.t1 += codigo.tickets.t1 || 0;
    jogo.tickets.t10 += codigo.tickets.t10 || 0;
    jogo.tickets.t100 += codigo.tickets.t100 || 0;
  }

  jogo.codigosResgatados[codigoDigitado] = true;

  elementos.inputCodigo.value = "";

  mostrarMensagem(codigo.mensagem);

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
  elementos.recompensaBoss.textContent = formatarNumero(calcularRecompensaBoss());
}

function atualizarTela() {
  const mundo = obterMundoAtual();
  const precoRng = calcularPrecoRng(mundo);
  const multiplicadorTotal = calcularMultiplicadorTotal();
  const ganhoReal = calcularGanhoRealClique();
  const ppsReal = calcularGanhoPorSegundoReal();

  elementos.pontos.textContent = formatarNumero(jogo.pontos);
  elementos.ganhoRealClique.textContent = formatarNumero(ganhoReal);
  elementos.multiplicador.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.mundoAtualTexto.textContent = mundo.nome;
  elementos.rankJogador.textContent = obterRank();
  elementos.eventoAtivoTexto.textContent = obterNomeEvento();

  elementos.pontosPorClique.textContent = formatarNumero(jogo.pontosPorClique);
  elementos.pontosPorSegundo.textContent = formatarNumero(ppsReal);
  elementos.nivelAura.textContent = jogo.nivelAura;
  elementos.multiplicadorStatus.textContent = formatarNumero(multiplicadorTotal) + "x";
  elementos.ganhoRealStatus.textContent = formatarNumero(ganhoReal);
  elementos.nivelSorte.textContent = jogo.sorte;

  elementos.rebirthsTexto.textContent = jogo.rebirths;
  elementos.bonusRebirthTexto.textContent = Math.floor(calcularBonusRebirth() * 100) + "%";
  elementos.rebirthsPainel.textContent = jogo.rebirths;
  elementos.bonusRebirthPainel.textContent = Math.floor(calcularBonusRebirth() * 100) + "%";
  elementos.custoRebirthTexto.textContent = formatarNumero(jogo.custoRebirth);

  elementos.quantidadeEquipados.textContent = jogo.equipados.length;
  elementos.quantidadeEquipadosMochila.textContent = jogo.equipados.length;
  elementos.limiteEquipadosTexto.textContent = jogo.loja.limiteEquipados;
  elementos.limiteEquipadosMochila.textContent = jogo.loja.limiteEquipados;

  elementos.favoritoTexto.textContent = obterNomeFavorito();

  elementos.totalCliques.textContent = formatarNumero(jogo.stats.cliques);
  elementos.totalGiros.textContent = formatarNumero(jogo.stats.giros);
  elementos.totalBosses.textContent = formatarNumero(jogo.stats.bossesDerrotados);
  elementos.pityTexto.textContent = jogo.pity;

  elementos.upgradeClique.textContent =
    "Comprar treino de força - " + formatarNumero(jogo.precoUpgradeClique) + " pontos";

  elementos.upgradeSegundo.textContent =
    "Comprar aura automática - " + formatarNumero(jogo.precoUpgradeSegundo) + " pontos";

  elementos.upgradeSorte.textContent =
    "Comprar sorte - " + formatarNumero(jogo.precoUpgradeSorte) + " pontos";

  elementos.comprarDescontoRng.textContent =
    "Comprar desconto de RNG - " + formatarNumero(jogo.loja.precoDescontoRng) + " pontos";

  elementos.comprarSlotEquipado.textContent =
    "Aumentar limite de equipados - " + formatarNumero(jogo.loja.precoSlotEquipado) + " pontos";

  elementos.comprarBonusBoss.textContent =
    "Aumentar recompensa de boss - " + formatarNumero(jogo.loja.precoBonusBoss) + " pontos";

  elementos.comprarBonusPps.textContent =
    "Melhorar ganho por segundo - " + formatarNumero(jogo.loja.precoBonusPps) + " pontos";

  elementos.mundoAtualRng.textContent = mundo.nome;
  elementos.precoRngAtual.textContent = formatarNumero(precoRng);

  elementos.ticket1Texto.textContent = jogo.tickets.t1;
  elementos.ticket10Texto.textContent = jogo.tickets.t10;
  elementos.ticket100Texto.textContent = jogo.tickets.t100;

  elementos.botaoRng.textContent =
    "Girar RNG - " + formatarNumero(precoRng) + " pontos";

  elementos.botaoRng10.textContent =
    "Girar 10x - " + formatarNumero(precoRng * 10) + " pontos";

  elementos.botaoRng100.textContent =
    "Girar 100x - " + formatarNumero(precoRng * 100) + " pontos";

  elementos.botaoRng1000.textContent =
    "Girar 1000x - " + formatarNumero(precoRng * 1000) + " pontos";

  elementos.personagemAtual.textContent = jogo.ultimoPersonagem.nome;
  elementos.chanceAtual.textContent = jogo.ultimoPersonagem.chanceTexto;
  elementos.multiplicadorAtual.textContent = formatarNumero(jogo.ultimoPersonagem.multiplicador) + "x";
}

function obterNomeFavorito() {
  if (!jogo.personagemFavorito) {
    return "Nenhum";
  }

  const personagem = jogo.mochila.find(function (item) {
    return item.chave === jogo.personagemFavorito;
  });

  return personagem ? personagem.nome : "Nenhum";
}

function obterNomeEvento() {
  if (jogo.eventoAtivo === "luck10") {
    return "10x Luck RNG";
  }

  if (jogo.eventoAtivo === "pontos10") {
    return "10x Pontos";
  }

  if (jogo.eventoAtivo === "bossFrenzy") {
    return "Boss Frenzy";
  }

  return "Nenhum";
}

function atualizarMaiorPontos() {
  if (jogo.pontos > jogo.stats.maiorPontos) {
    jogo.stats.maiorPontos = jogo.pontos;
  }
}

function atualizarTudo() {
  atualizarMaiorPontos();
  atualizarTela();
  atualizarBoss();
  montarListaMundos();
  montarListaPersonagens();
  atualizarMochila();
  montarColecao();
  montarHistorico();
  atualizarConquistas();
  atualizarMissoes();
  montarUpdateLog();
  montarListaCodigos();
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

function ativarEvento(evento) {
  jogo.eventoAtivo = evento;

  mostrarMensagem("Evento ativado: " + obterNomeEvento() + ".");
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

function buscarDadosSalvos() {
  const saveAtual = localStorage.getItem(SAVE_KEY);

  if (saveAtual) {
    return saveAtual;
  }

  for (let i = 0; i < OLD_SAVE_KEYS.length; i++) {
    const saveAntigo = localStorage.getItem(OLD_SAVE_KEYS[i]);

    if (saveAntigo) {
      localStorage.setItem(SAVE_KEY, saveAntigo);
      return saveAntigo;
    }
  }

  return null;
}

function salvarJogo() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(jogo));
}

function carregarJogo() {
  const dadosSalvos = buscarDadosSalvos();

  if (!dadosSalvos) {
    return;
  }

  try {
    const jogoSalvo = JSON.parse(dadosSalvos);
    const base = criarJogoInicial();

    jogo = {
      ...base,
      ...jogoSalvo,
      tickets: {
        ...base.tickets,
        ...(jogoSalvo.tickets || {})
      },
      loja: {
        ...base.loja,
        ...(jogoSalvo.loja || {})
      },
      stats: {
        ...base.stats,
        ...(jogoSalvo.stats || {})
      },
      boss: {
        ...base.boss,
        ...(jogoSalvo.boss || {})
      },
      ultimoPersonagem: {
        ...base.ultimoPersonagem,
        ...(jogoSalvo.ultimoPersonagem || {})
      },
      missoesResgatadas: {
        ...(jogoSalvo.missoesResgatadas || {})
      },
      codigosResgatados: {
        ...(jogoSalvo.codigosResgatados || {})
      },
      conquistasResgatadas: {
        ...(jogoSalvo.conquistasResgatadas || {})
      },
      colecaoObtidos: {
        ...(jogoSalvo.colecaoObtidos || {})
      }
    };

    if (!jogo.mundosDesbloqueados) {
      jogo.mundosDesbloqueados = ["vila_ninja"];
    }

    if (!jogo.mundoAtual) {
      jogo.mundoAtual = "vila_ninja";
    }

    if (!jogo.historicoDrops) {
      jogo.historicoDrops = [];
    }

    if (!jogo.personagemFavorito) {
      jogo.personagemFavorito = null;
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
