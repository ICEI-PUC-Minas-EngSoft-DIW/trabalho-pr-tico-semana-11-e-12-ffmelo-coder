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
    imagem: "img/cartas/sword-of-feast-and-famine.jpg",
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
        imagem: "img/cartas/sword-of-feast-and-famine.jpg",
      },
      {
        titulo: "Símbolo do Set Double Masters",
        imagem: "img/set-symbols/double-masters.png",
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
    imagem: "img/cartas/war-54-jace-wielder-of-mysteries.jpg",
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
        imagem: "img/cartas/war-54-jace-wielder-of-mysteries.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "img/mana/U.svg",
      },
      {
        titulo: "Símbolo do Set War of the Spark",
        imagem: "img/set-symbols/war-of-the-spark.png",
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
    imagem: "img/cartas/eoc-86-blasphemous-act.jpg",
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
        imagem: "img/cartas/eoc-86-blasphemous-act.jpg",
      },
      {
        titulo: "Símbolo de Mana Vermelho",
        imagem: "img/mana/R.svg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities: Commander",
        imagem: "img/set-symbols/EOE-commander.png",
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
    imagem: "img/cartas/dsc-114-counterspell.jpg",
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
        imagem: "img/cartas/dsc-114-counterspell.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "img/mana/U.svg",
      },
      {
        titulo: "Símbolo do Set Duskmourn: House of Horror Commander",
        imagem: "img/set-symbols/duskmourn-commander.png",
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
    imagem: "img/cartas/eoe-192-icetill-explorer.jpg",
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
        imagem: "img/cartas/eoe-192-icetill-explorer.jpg",
      },
      {
        titulo: "Símbolo de Mana Verde",
        imagem: "img/mana/G.svg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities",
        imagem: "img/set-symbols/EOE_expsym_m_3in.png",
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
    imagem: "img/cartas/eoe-239-the-dominion-bracelet.jpg",
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
        imagem: "img/cartas/eoe-239-the-dominion-bracelet.jpg",
      },
      {
        titulo: "Símbolo do Set Edge of Eternities",
        imagem: "img/set-symbols/EOE_expsym_m_3in.png",
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
    imagem: "img/cartas/dsk-220-kaito-bane-of-nightmares.jpg",
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
        imagem: "img/cartas/dsk-220-kaito-bane-of-nightmares.jpg",
      },
      {
        titulo: "Símbolo de Mana Azul",
        imagem: "img/mana/U.svg",
      },
      {
        titulo: "Símbolo de Mana Preto",
        imagem: "img/mana/B.svg",
      },
      {
        titulo: "Símbolo do Set Duskmourn: House of Horror",
        imagem: "img/set-symbols/duskmourn.png",
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
    imagem: "img/cartas/big-29-fomori-vault.jpg",
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
        imagem: "img/cartas/big-29-fomori-vault.jpg",
      },
      {
        titulo: "Símbolo de Mana Incolor",
        imagem: "img/mana/C.svg",
      },
      {
        titulo: "Símbolo do Set The Big Score",
        imagem: "img/set-symbols/big-score.png",
      },
    ],
  },
];

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

function obterClasseRaridade(raridade) {
  const classesRaridade = {
    "Mythic Rare": "raridade-mythic",
    Rare: "raridade-rare",
    Uncommon: "raridade-uncommon",
    Common: "raridade-common",
  };
  return classesRaridade[raridade] || "raridade-common";
}

function obterSimboloSet(nomeSet) {
  const simbolosSet = {
    "Double Masters": "img/set-symbols/double-masters.png",
    "War of the Spark": "img/set-symbols/war-of-the-spark.png",
    "Edge of Eternities: Commander": "img/set-symbols/EOE-commander.png",
    "Duskmourn: House of Horror Commander":
      "img/set-symbols/duskmourn-commander.png",
    "Edge of Eternities": "img/set-symbols/EOE_expsym_m_3in.png",
    "Duskmourn: House of Horror": "img/set-symbols/duskmourn.png",
    "The Big Score": "img/set-symbols/big-score.png",
    Alpha: "img/set-symbols/double-masters.png",
  };
  return simbolosSet[nomeSet] || "img/set-symbols/double-masters.png";
}
// ============================================
// FUNÇÕES DE GERAÇÃO DE CONTEÚDO
// ============================================

function gerarCarrossel() {
  const cartasDestaque = cartas.filter(
    (carta) => carta.categoria === "Destaque"
  );
  const carrosselInner = document.querySelector(
    "#carrosselDestaque .carousel-inner"
  );
  const carrosselIndicadores = document.querySelector(
    "#carrosselDestaque .carousel-indicators"
  );

  if (!carrosselInner || !carrosselIndicadores) return;

  carrosselInner.innerHTML = "";
  carrosselIndicadores.innerHTML = "";

  cartasDestaque.forEach((carta, index) => {
    const slide = document.createElement("div");
    slide.className = `carousel-item${index === 0 ? " active" : ""}`;

    slide.innerHTML = `
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="card border-warning shadow-lg" style="max-width: 900px; width: 100%; cursor: pointer;" onclick="window.location.href='html/detalhes.html?id=${
          carta.id
        }&origem=destaque'">
          <div class="row g-0 h-100">
            <div class="col-md-4">
              <img src="${
                carta.imagem
              }" class="img-fluid rounded-start h-100" alt="${
      carta.nome
    }" style="object-fit: contain;">
            </div>
            <div class="col-md-8">
              <div class="card-body h-100 d-flex flex-column justify-content-between p-4">
                <h4 class="card-title text-warning fs-3 mb-3">${carta.nome}</h4>
                <p class="card-text fs-6 mb-3 text-justify">${carta.resumo}</p>
                
                <div class="row mb-3">
                  <div class="col-6">
                    <small class="text-muted">Tipo:</small><br>
                    <span class="fw-bold">${carta.descricao}</span>
                  </div>
                  <div class="col-6">
                    <small class="text-muted">Preço:</small><br>
                    <span class="text-success fs-5 fw-bold">${
                      carta.preco
                    }</span>
                  </div>
                </div>
                
                <div class="row mb-3">
                  <div class="col-6">
                    <small class="text-muted">Set:</small><br>
                    <div class="d-flex align-items-center mt-1">
                      <img src="${obterSimboloSet(carta.detalhes.set)}" alt="${
      carta.detalhes.set
    }" class="set-symbol-small me-2">
                      <span class="fw-bold">${carta.detalhes.set}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <small class="text-muted">Artista:</small><br>
                    <span class="fw-bold">${carta.detalhes.artista}</span>
                  </div>
                </div>
                
                <div class="row mb-3">
                  <div class="col-6">
                    <small class="text-muted">Cores:</small><br>
                    <div class="d-flex align-items-center mt-1">
                      ${carta.cores
                        .map((cor) => {
                          const simbolos = {
                            branco: "img/mana/W.svg",
                            azul: "img/mana/U.svg",
                            preto: "img/mana/B.svg",
                            vermelho: "img/mana/R.svg",
                            verde: "img/mana/G.svg",
                            incolor: "img/mana/C.svg",
                          };
                          return `<img src="${simbolos[cor]}" alt="${cor}" style="width: 20px; height: 20px; margin-right: 5px;">`;
                        })
                        .join("")}
                    </div>
                  </div>
                  <div class="col-6">
                    <small class="text-muted">Formatos Legais:</small><br>
                    <span class="fw-bold">${carta.detalhes.formato}</span>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <span class="badge ${obterClasseRaridade(
                    carta.raridade
                  )} text-dark fs-6 px-3 py-2">${carta.raridade}</span>
                  <small class="text-muted">📖 Clique para ver detalhes</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    carrosselInner.appendChild(slide);

    const indicador = document.createElement("button");
    indicador.type = "button";
    indicador.setAttribute("data-bs-target", "#carrosselDestaque");
    indicador.setAttribute("data-bs-slide-to", index.toString());
    indicador.className = index === 0 ? "active" : "";
    indicador.setAttribute("aria-current", index === 0 ? "true" : "false");
    indicador.setAttribute("aria-label", `Slide ${index + 1}`);

    carrosselIndicadores.appendChild(indicador);
  });

  const carrosselElement = document.getElementById("carrosselDestaque");
  if (carrosselElement) {
    carrosselElement.classList.add("carousel-fade");

    const carousel = new bootstrap.Carousel(carrosselElement, {
      interval: 5000,
      wrap: true,
      touch: true,
      pause: "hover",
    });

    carrosselElement.addEventListener("slide.bs.carousel", function (e) {
      const activeItem = carrosselElement.querySelector(
        ".carousel-item.active"
      );
      const nextItem = e.relatedTarget;

      if (activeItem && nextItem) {
        activeItem.style.zIndex = "1";
        nextItem.style.zIndex = "2";
      }
    });

    carrosselElement.addEventListener("slid.bs.carousel", function (e) {
      const items = carrosselElement.querySelectorAll(".carousel-item");
      items.forEach((item) => {
        item.style.zIndex = "";
      });
    });
  }
}
function gerarCardsBootstrap() {
  const containerCards = document.getElementById("container-cards");
  if (!containerCards) return;

  containerCards.innerHTML = "";

  cartas.forEach((carta) => {
    const cardCol = document.createElement("div");
    cardCol.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    cardCol.innerHTML = `
        <div class="card h-100 shadow border-warning card-hover" style="cursor: pointer;" onclick="window.location.href='html/detalhes.html?id=${
          carta.id
        }&origem=todas'">
        <div class="card-img-container" style="height: 300px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #f8f9fa;">
          <img src="${carta.imagem}" class="card-img-top" alt="${
      carta.nome
    }" style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-primary">${carta.nome}</h5>
          <p class="card-text text-muted small flex-grow-1">${carta.resumo}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <span class="text-success fw-bold fs-6">${carta.preco}</span>
            <span class="badge ${obterClasseRaridade(
              carta.raridade
            )} text-dark">${carta.raridade}</span>
          </div>
        </div>
      </div>
    `;

    containerCards.appendChild(cardCol);
  });
}

function gerarCards() {
  gerarCarrossel();
  gerarCardsBootstrap();
}

// ============================================
// FUNÇÕES DE INTERATIVIDADE
// ============================================

function configurarBotoesMana() {
  const botoesMana = document.querySelectorAll(".filtro-mana");
  const containerCards = document.getElementById("container-cards");

  if (!containerCards) return;

  botoesMana.forEach((botao) => {
    botao.addEventListener("click", () => {
      const corSelecionada = botao.getAttribute("data-cor");

      botoesMana.forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");

      let cartasFiltradas;
      if (corSelecionada === "todas") {
        cartasFiltradas = cartas;
      } else {
        cartasFiltradas = cartas.filter((carta) =>
          carta.cores.includes(corSelecionada)
        );
      }

      containerCards.innerHTML = "";
      cartasFiltradas.forEach((carta) => {
        const cardCol = document.createElement("div");
        cardCol.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

        cardCol.innerHTML = `
            <div class="card h-100 shadow border-warning card-hover" style="cursor: pointer;" onclick="window.location.href='html/detalhes.html?id=${carta.id}&origem=todas'">
            <div class="card-img-container" style="height: 300px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #f8f9fa;">
              <img src="${carta.imagem}" class="card-img-top" alt="${carta.nome}" style="max-height: 100%; max-width: 100%; object-fit: contain;">
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-primary">${carta.nome}</h5>
              <p class="card-text text-muted small flex-grow-1">${carta.resumo}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="text-success fw-bold fs-6">${carta.preco}</span>
                <span class="badge bg-secondary">${carta.raridade}</span>
              </div>
            </div>
          </div>
        `;

        containerCards.appendChild(cardCol);
      });
    });
  });
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO - PÁGINA PRINCIPAL
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  gerarCarrossel();
  gerarCards();
  configurarBotoesMana();
});
