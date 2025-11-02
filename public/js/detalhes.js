// ============================================
// DADOS DAS CARTAS MAGIC
// ============================================
const cartas = [
  {
    id: 1,
    nome: "Sword of Feast and Famine",
    preco: "BRL 87,14",
    descricao: "Artifact — Equipment",
    custoMana: "3",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Destaque",
    imagem: "../img/cartas/sword-of-feast-and-famine.jpg",
    resumo:
      "Uma das espadas mais poderosas do Magic, oferecendo proteção e vantagem de recursos.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto:
        "Equipped creature gets +2/+2 and has protection from black and from green.\n\nWhenever equipped creature deals combat damage to a player, that player discards a card and you untap all lands you control.\n\nEquip {2}",
      artista: "Chris Rahn",
      set: "Double Masters",
      numero: "296/332",
      formato: "Legacy, Vintage, Commander",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Original da Carta",
        imagem: "../img/cartas/sword-of-feast-and-famine.jpg",
      },
      {
        titulo: "Símbolo do Set Double Masters",
        imagem: "../img/set-symbols/double-masters.png",
      },
    ],
  },
  {
    id: 2,
    nome: "Jace, Wielder of Mysteries",
    preco: "BRL 18,43",
    descricao: "Legendary Planeswalker — Jace",
    custoMana: "1UUU",
    cores: ["azul"],
    raridade: "Rare",
    categoria: "Destaque",
    imagem: "../img/cartas/war-54-jace-wielder-of-mysteries.jpg",
    resumo:
      "Planeswalker focado em estratégias de mill e draw, com condição de vitória alternativa.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      lealdade: "4",
      texto:
        "If you would draw a card while your library has no cards in it, you win the game instead.\n\n+1: Target player mills two cards. Draw a card.\n\n−8: Draw seven cards. Then if your library has no cards in it, you win the game.",
      artista: "Anna Steinbauer",
      set: "War of the Spark",
      numero: "54/264",
      formato: "Standard, Modern, Pioneer",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Completa de Jace",
        imagem: "../img/cartas/war-54-jace-wielder-of-mysteries.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "../img/mana/U.svg",
      },
      {
        titulo: "Símbolo do Set War of the Spark",
        imagem: "../img/set-symbols/war-of-the-spark.png",
      },
    ],
  },
  {
    id: 3,
    nome: "Blasphemous Act",
    preco: "BRL 11,16",
    descricao: "Sorcery",
    custoMana: "8R",
    cores: ["vermelho"],
    raridade: "Rare",
    categoria: "Destaque",
    imagem: "../img/cartas/eoc-86-blasphemous-act.jpg",
    resumo:
      "Feitiço devastador que limpa o campo de batalha, custando menos conforme mais criaturas existem.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto:
        "This spell costs {1} less to cast for each creature on the battlefield. \n\nBlasphemous Act deals 13 damage to each creature.",
      artista: "Daarken",
      set: "Edge of Eternities: Commander",
      numero: "0086",
      formato: "Commander, Legacy, Vintage",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Completa - Blasphemous Act",
        imagem: "../img/cartas/eoc-86-blasphemous-act.jpg",
      },
      {
        titulo: "Símbolo de Mana Vermelho",
        imagem: "../img/mana/R.svg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities: Commander",
        imagem: "../img/set-symbols/EOE-commander.png",
      },
    ],
  },
  {
    id: 4,
    nome: "Counterspell",
    preco: "BRL 4,81",
    descricao: "Instant",
    custoMana: "UU",
    cores: ["azul"],
    raridade: "Uncommon",
    categoria: "Destaque",
    imagem: "../img/cartas/dsc-114-counterspell.jpg",
    resumo:
      "O contra-feitiço clássico do Magic, simples e eficaz para neutralizar ameaças.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: "Counter target spell.",
      artista: "Zack Stella",
      set: "Duskmourn: House of Horror Commander",
      numero: "0114",
      formato: "Modern, Legacy, Vintage, Commander",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Original - Counterspell",
        imagem: "../img/cartas/dsc-114-counterspell.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "../img/mana/U.svg",
      },
      {
        titulo: "Símbolo do Set Duskmourn: House of Horror Commander",
        imagem: "../img/set-symbols/duskmourn-commander.png",
      },
    ],
  },
  {
    id: 5,
    nome: "Icetill Explorer",
    preco: "BRL 68,69",
    descricao: "Creature — Insect Scout",
    custoMana: "2GG",
    cores: ["verde"],
    raridade: "Rare",
    categoria: "Nova",
    imagem: "../img/cartas/eoe-192-icetill-explorer.jpg",
    resumo:
      "Criatura exploradora que permite jogar terrenos adicionais e aproveitá-los do cemitério.",
    detalhes: {
      poder: "2",
      resistencia: "4",
      texto: `You may play an additional land on each of your turns.\n\nYou may play lands from your graveyard.\n\nLandfall — Whenever a land you control enters, mill a card.`,
      artista: "Warren Mahy",
      set: "Edge of Eternities",
      numero: "0192",
      formato: "Standard, Modern, Commander",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Completa - Icetill Explorer",
        imagem: "../img/cartas/eoe-192-icetill-explorer.jpg",
      },
      {
        titulo: "Símbolo de Mana Verde",
        imagem: "../img/mana/G.svg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities",
        imagem: "../img/set-symbols/EOE_expsym_m_3in.png",
      },
    ],
  },
  {
    id: 6,
    nome: "The Dominion Bracelet",
    preco: "BRL 17,99",
    descricao: "Legendary Artifact - Equipment",
    custoMana: "2",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "../img/cartas/eoe-239-the-dominion-bracelet.jpg",
    resumo:
      "Artefato lendário que oferece controle sobre oponentes com mecânica única e poderosa.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: `Equipped creature gets +1/+1 and has "{15}, Exile The Dominion Bracelet: You control target opponent during their next turn. This ability costs {X} less to activate, where X is this creature's power. Activate only as a sorcery." \n\nEquip {1}`,
      artista: "Nathaniel Himawan",
      set: "Edge of Eternities",
      numero: "0239",
      formato: "Commander, Legacy, Vintage",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Original - The Dominion Bracelet",
        imagem: "../img/cartas/eoe-239-the-dominion-bracelet.jpg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities",
        imagem: "../img/set-symbols/EOE_expsym_m_3in.png",
      },
    ],
  },
  {
    id: 7,
    nome: "Kaito, Bane of Nightmares",
    preco: "BRL 179,49",
    descricao: "Legendary Planeswalker — Kaito",
    custoMana: "2UB",
    cores: ["azul", "preto"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "../img/cartas/dsk-220-kaito-bane-of-nightmares.jpg",
    resumo:
      "Planeswalker ninja com habilidades versáteis e mecânica de transformação em criatura.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      lealdade: "4",
      texto: `Ninjutsu {1}{U}{B}\n\nDuring your turn, as long as Kaito has one or more loyalty counters on him, he's a 3/4 Ninja creature and has hexproof.\n\n+1: You get an emblem with "Ninjas you control get +1/+1."\n\n0: Surveil 2. Then draw a card for each opponent who lost life this turn.\n\n−2: Tap target creature. Put two stun counters on it.`,
      artista: "Joshua Raphael",
      set: "Duskmourn: House of Horror",
      numero: "220",
      formato: "Standard, Modern, Commander",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Completa - Kaito",
        imagem: "../img/cartas/dsk-220-kaito-bane-of-nightmares.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "../img/mana/U.svg",
      },
      {
        titulo: "Símbolo de Mana Preto",
        imagem: "../img/mana/B.svg",
      },
      {
        titulo: "Símbolo do Set Duskmourn: House of Horror",
        imagem: "../img/set-symbols/duskmourn.png",
      },
    ],
  },
  {
    id: 8,
    nome: "Fomori Vault",
    preco: "BRL 49,90",
    descricao: "Land",
    custoMana: "",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "../img/cartas/big-29-fomori-vault.jpg",
    resumo:
      "Terreno utilitário com habilidade poderosa de busca baseada em artefatos controlados.",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: `{T}: Add {C}.\n\n{3}, {T}, Discard a card: Look at the top X cards of your library, where X is the number of artifacts you control. Put one of those cards into your hand and the rest on the bottom of your library in a random order.`,
      artista: "Jonas de Ro",
      set: "The Big Score",
      numero: "0029",
      formato: "Modern, Legacy, Vintage, Commander",
    },
    fotosVinculadas: [
      {
        titulo: "Arte Completa - Fomori Vault",
        imagem: "../img/cartas/big-29-fomori-vault.jpg",
      },
      {
        titulo: "Símbolo de Mana Incolor",
        imagem: "../img/mana/C.svg",
      },
      {
        titulo: "Símbolo do Set The Big Score",
        imagem: "../img/set-symbols/big-score.png",
      },
    ],
  },
];

// ============================================
// FUNÇÕES PARA PÁGINA DE DETALHES
// ============================================
function obterSimboloSet(nomeSet) {
  const simbolosSet = {
    "Double Masters": "../img/set-symbols/double-masters.png",
    "War of the Spark": "../img/set-symbols/war-of-the-spark.png",
    "Edge of Eternities: Commander": "../img/set-symbols/EOE-commander.png",
    "Duskmourn: House of Horror Commander":
      "../img/set-symbols/duskmourn-commander.png",
    "Edge of Eternities": "../img/set-symbols/EOE_expsym_m_3in.png",
    "Duskmourn: House of Horror": "../img/set-symbols/duskmourn.png",
    "The Big Score": "../img/set-symbols/big-score.png",
    Alpha: "../img/set-symbols/double-masters.png",
  };
  return simbolosSet[nomeSet] || "../img/set-symbols/double-masters.png";
}

function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const cartaId = parseInt(urlParams.get("id"));

  const carta = cartas.find((c) => c.id === cartaId);

  if (!carta) {
    document.body.innerHTML =
      "<h1>Carta não encontrada</h1><a href='../index.html'>Voltar para a página inicial</a>";
    return;
  }

  const imagemElement = document.getElementById("carta-imagem");
  const nomeElement = document.getElementById("carta-nome");
  const precoElement = document.getElementById("carta-preco");
  const descricaoElement = document.getElementById("carta-descricao");
  const custoManaElement = document.getElementById("carta-custo-mana");
  const raridadeElement = document.getElementById("carta-raridade");
  const poderResistenciaElement = document.getElementById(
    "carta-poder-resistencia"
  );
  const lealdadeElement = document.getElementById("carta-lealdade");
  const formatoElement = document.getElementById("carta-formato");
  const idiomaElement = document.getElementById("carta-idioma");
  const coresElement = document.getElementById("carta-cores");
  const artistaElement = document.getElementById("carta-artista");
  const setElement = document.getElementById("carta-set");
  const numeroElement = document.getElementById("carta-numero");
  const textoElement = document.getElementById("carta-texto");

  // Preencher informações básicas
  if (imagemElement) {
    imagemElement.src = carta.imagem;
    imagemElement.alt = carta.nome;
  }
  if (nomeElement) nomeElement.textContent = carta.nome;
  if (precoElement) precoElement.textContent = carta.preco;
  if (descricaoElement) descricaoElement.textContent = carta.descricao;
  if (raridadeElement) raridadeElement.textContent = carta.raridade;

  if (custoManaElement) {
    if (carta.custoMana) {
      const simbolos = {
        0: "../img/mana/0.svg",
        1: "../img/mana/1.svg",
        2: "../img/mana/2.svg",
        3: "../img/mana/3.svg",
        4: "../img/mana/4.svg",
        5: "../img/mana/5.svg",
        6: "../img/mana/6.svg",
        7: "../img/mana/7.svg",
        8: "../img/mana/8.svg",
        9: "../img/mana/9.svg",
        W: "../img/mana/W.svg",
        U: "../img/mana/U.svg",
        B: "../img/mana/B.svg",
        R: "../img/mana/R.svg",
        G: "../img/mana/G.svg",
        C: "../img/mana/C.svg",
      };

      let custoHTML = "";
      for (let char of carta.custoMana) {
        if (simbolos[char]) {
          custoHTML += `<img src="${simbolos[char]}" alt="${char}" class="simbolo-mana">`;
        }
      }
      custoManaElement.innerHTML = custoHTML || "—";
    } else {
      custoManaElement.textContent = "—";
    }
  }

  if (poderResistenciaElement) {
    if (carta.detalhes.poder && carta.detalhes.resistencia) {
      poderResistenciaElement.textContent = `${carta.detalhes.poder}/${carta.detalhes.resistencia}`;
    } else {
      poderResistenciaElement.textContent = "—";
    }
  }

  if (lealdadeElement) {
    lealdadeElement.textContent = carta.detalhes.lealdade || "—";
  }

  if (formatoElement) formatoElement.textContent = carta.detalhes.formato;
  if (idiomaElement) idiomaElement.textContent = "Inglês";
  if (artistaElement) artistaElement.textContent = carta.detalhes.artista;
  if (setElement) setElement.textContent = carta.detalhes.set;
  if (numeroElement) numeroElement.textContent = carta.detalhes.numero;

  if (coresElement) {
    const simbolosCores = {
      branco: "../img/mana/W.svg",
      azul: "../img/mana/U.svg",
      preto: "../img/mana/B.svg",
      vermelho: "../img/mana/R.svg",
      verde: "../img/mana/G.svg",
      incolor: "../img/mana/C.svg",
    };

    coresElement.innerHTML = "";
    carta.cores.forEach((cor) => {
      if (simbolosCores[cor]) {
        const img = document.createElement("img");
        img.src = simbolosCores[cor];
        img.alt = cor;
        img.className = "simbolo-mana";
        coresElement.appendChild(img);
      }
    });
  }

  if (textoElement) {
    textoElement.textContent = carta.detalhes.texto;
  }

  carregarFotosVinculadas(carta);
}

function carregarFotosVinculadas(carta) {
  const containerFotos = document.getElementById("fotos-vinculadas");
  if (!containerFotos || !carta.fotosVinculadas) return;

  containerFotos.innerHTML = "";

  carta.fotosVinculadas.forEach((foto, index) => {
    const divFoto = document.createElement("div");
    divFoto.className = "col-md-4 mb-3";

    divFoto.innerHTML = `
      <div class="foto-vinculada">
        <div class="foto-container" onclick="abrirModalImagem('${foto.imagem}', '${foto.titulo}')">
          <img src="${foto.imagem}" alt="${foto.titulo}">
        </div>
        <h6 class="text-center mt-2 text-muted">${foto.titulo}</h6>
      </div>
    `;

    containerFotos.appendChild(divFoto);
  });

  criarModalImagem();
}

function criarModalImagem() {
  if (document.getElementById("modalImagem")) return;

  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "modalImagem";
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="modalImagemTitulo">Visualizar Imagem</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <img id="modalImagemSrc" src="" alt="" style="max-width: 100%; max-height: 100%; object-fit: contain;">
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function abrirModalImagem(src, titulo) {
  const modalImagem = document.getElementById("modalImagem");
  const modalTitulo = document.getElementById("modalImagemTitulo");
  const modalSrc = document.getElementById("modalImagemSrc");

  if (modalTitulo) modalTitulo.textContent = titulo;
  if (modalSrc) modalSrc.src = src;

  const modal = new bootstrap.Modal(modalImagem);
  modal.show();
}

function configurarNavegacaoCartas() {
  const btnAnterior = document.getElementById("carta-anterior");
  const btnProxima = document.getElementById("carta-proxima");

  if (!btnAnterior || !btnProxima) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cartaAtual = parseInt(urlParams.get("id"));
  const origem = urlParams.get("origem") || "todas";

  const carta = cartas.find((c) => c.id === cartaAtual);
  if (!carta) return;

  let cartasParaNavegacao;
  if (origem === "destaque") {
    cartasParaNavegacao = cartas.filter((c) => c.categoria === "Destaque");
  } else {
    cartasParaNavegacao = cartas;
  }

  const indexAtual = cartasParaNavegacao.findIndex((c) => c.id === cartaAtual);

  if (indexAtual > 0) {
    const cartaAnterior = cartasParaNavegacao[indexAtual - 1];
    btnAnterior.addEventListener("click", () => {
      window.location.href = `../html/detalhes.html?id=${cartaAnterior.id}&origem=${origem}`;
    });
    btnAnterior.disabled = false;
    btnAnterior.title = `← ${cartaAnterior.nome}`;
  } else {
    btnAnterior.disabled = true;
    const contexto = origem === "destaque" ? "cartas em destaque" : "coleção";
    btnAnterior.title = `Primeira carta da ${contexto}`;
  }

  if (indexAtual < cartasParaNavegacao.length - 1) {
    const cartaProxima = cartasParaNavegacao[indexAtual + 1];
    btnProxima.addEventListener("click", () => {
      window.location.href = `../html/detalhes.html?id=${cartaProxima.id}&origem=${origem}`;
    });
    btnProxima.disabled = false;
    btnProxima.title = `${cartaProxima.nome} →`;
  } else {
    btnProxima.disabled = true;
    const contexto = origem === "destaque" ? "cartas em destaque" : "coleção";
    btnProxima.title = `Última carta da ${contexto}`;
  }
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  carregarDetalhes();
  configurarNavegacaoCartas();
});
