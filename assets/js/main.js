/**
 * ============================================================================
 * CASA EM OURINHOS — RESIDENCIAL VILLE DE FRANCE
 * Script Principal Vanilla JavaScript (Sem dependências externas)
 * CRO, UX, Analytics Extensível, Preservação de UTMs e Lightbox Acessível
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* --------------------------------------------------------------------------
     1. CONFIGURAÇÕES PRINCIPAIS E INTEGRAÇÃO CONDICIONAL
     -------------------------------------------------------------------------- */
  // WhatsApp oficial para contato
  const WHATSAPP_PHONE = "5514998521062";

  // Identificadores de Analytics e Pixel (Configuráveis - Nenhum script externo é carregado se vazio)
  const GA_MEASUREMENT_ID = ""; // Exemplo: 'G-XXXXXXXXXX'
  const META_PIXEL_ID = "";     // Exemplo: '123456789012345'

  /* --------------------------------------------------------------------------
     2. GESTÃO DE UTMs E CAPTURA DE PARÂMETROS DE CAMPANHA
     -------------------------------------------------------------------------- */
  const utmParams = {};
  const allowedUtms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

  try {
    const urlParams = new URLSearchParams(window.location.search);
    allowedUtms.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        utmParams[key] = val;
        sessionStorage.setItem(`casa_${key}`, val);
      } else {
        const stored = sessionStorage.getItem(`casa_${key}`);
        if (stored) {
          utmParams[key] = stored;
        }
      }
    });
  } catch (err) {
    // Falha silenciosa para compatibilidade
  }

  /* --------------------------------------------------------------------------
     3. MENSAGENS CONTEXTUAIS DO WHATSAPP (PROGRESSÃO DE INTENÇÃO)
     -------------------------------------------------------------------------- */
  const WHATSAPP_MESSAGES = {
    // Topo / Tráfego Frio
    hero: "Olá, Danilo. Vi a casa do Residencial Ville de France no site casaemourinhos.com.br e gostaria de receber mais informações sobre o imóvel.",
    header: "Olá, Danilo. Vi a casa do Residencial Ville de France no site casaemourinhos.com.br e gostaria de receber mais informações sobre o imóvel.",
    apresentacao: "Olá, Danilo. Vi a apresentação da casa no Residencial Ville de France e gostaria de saber mais detalhes sobre a propriedade.",
    
    // Meio de Página / Exploração de Ambientes
    duvidas: "Olá, Danilo. Vi a casa do Residencial Ville de France no site e gostaria de tirar algumas dúvidas sobre o imóvel.",
    galeria: "Olá, Danilo. Vi as fotos da casa no Residencial Ville de France e gostaria de conhecer mais detalhes da propriedade.",
    social: "Olá, Danilo. Gostei da área social e gourmet da casa no Ville de France e gostaria de conversar a respeito.",
    intima: "Olá, Danilo. Vi os detalhes das suítes da casa no Ville de France e gostaria de mais informações.",
    externa: "Olá, Danilo. Gostei do amplo quintal e dos dois terrenos da casa no Ville de France e gostaria de mais informações.",
    condominio: "Olá, Danilo. Vi as fotos do Residencial Ville de France e gostaria de informações sobre a casa anunciada.",
    ficha: "Olá, Danilo. Consultei a ficha técnica da casa no Ville de France e gostaria de tirar algumas dúvidas.",
    localizacao: "Olá, Danilo. Gostaria de solicitar informações sobre a localização da casa no Residencial Ville de France.",
    quem_atende: "Olá, Danilo. Gostaria de conversar com você sobre a casa à venda no Residencial Ville de France.",

    // Fundo / Alta Intenção / Visita
    visita: "Olá, Danilo. Vi a casa do Residencial Ville de France no site e gostaria de receber mais informações e verificar horários disponíveis para uma visita.",
    final_cta: "Olá, Danilo. Vi a casa do Residencial Ville de France no site e gostaria de receber mais informações e verificar horários disponíveis para uma visita.",
    sticky: "Olá, Danilo. Vi a casa do Residencial Ville de France no site e gostaria de receber mais informações e verificar horários disponíveis para uma visita.",
    flutuante: "Olá, Danilo. Vi a casa do Residencial Ville de France no site e gostaria de receber mais informações sobre o imóvel."
  };

  /**
   * Constrói a URL do WhatsApp com a mensagem contextual e tags discretas de rastreamento
   */
  function buildWhatsAppUrl(contextKey = "hero") {
    let baseMsg = WHATSAPP_MESSAGES[contextKey] || WHATSAPP_MESSAGES.hero;
    
    // Adiciona discretamente a origem interna
    let trackerTag = ` [ref:${contextKey}]`;
    if (utmParams.utm_source) {
      trackerTag = ` [ref:${contextKey}_${utmParams.utm_source}]`;
    }

    const fullMsg = encodeURIComponent(baseMsg + trackerTag);
    return `https://wa.me/${WHATSAPP_PHONE}?text=${fullMsg}`;
  }

  /* --------------------------------------------------------------------------
     4. BANCO DE FOTOGRAFIAS FACTUAL E COMPLETO (43 IMAGENS WEBP)
     -------------------------------------------------------------------------- */
  const GALLERY_ITEMS = [
    // --- Fachada & Entrada ---
    {
      src: "assets/images/casa/fachada-frontal-casa-alto-padrao-ourinhos.webp",
      title: "Fachada Frontal Completa",
      caption: "Arquitetura contemporânea de linhas retas com pé-direito imponente e jardim frontal.",
      category: "fachada",
      isHighlight: true
    },
    {
      src: "assets/images/casa/fachada-noturna-iluminacao-ourinhos.webp",
      title: "Fachada Noturna com Iluminação Cênica",
      caption: "Iluminação externa valorizando os volumes arquitetônicos e o paisagismo.",
      category: "fachada",
      isHighlight: true
    },
    {
      src: "assets/images/casa/fachada-moderna-jardim-frontal.webp",
      title: "Vista Frontal e Paisagismo",
      caption: "Entrada social, gramado e palmeiras na área frontal do lote.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/jardim-frontal-paisagismo-ourinhos.webp",
      title: "Jardim Frontal e Calçada em Paver",
      caption: "Área de entrada frontal integrada à alameda residencial.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/garagem-coberta-fachada-frontal.webp",
      title: "Garagem Coberta e Acesso Social",
      caption: "Espaço coberto para 2 veículos e acesso direto ao pavimento térreo.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/garagem-ampla-espaco-veiculos.webp",
      title: "Garagem com Vagas Cobertas e Descobertas",
      caption: "Espaço amplo com capacidade total para até 5 veículos na propriedade.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/vista-aerea-noturna-propriedade-ourinhos.webp",
      title: "Vista Aérea Noturna da Propriedade",
      caption: "Visão superior evidenciando os 912 m² de terreno composto por dois lotes.",
      category: "fachada",
      isHighlight: true
    },

    // --- Área Social ---
    {
      src: "assets/images/casa/sala-jantar-integrada-alto-padrao.webp",
      title: "Sala de Jantar Integrada",
      caption: "Conexão fluida entre a área de jantar, o estar e a copa.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-estar-integracao-cozinha.webp",
      title: "Sala de Estar Integrada",
      caption: "Ambiente social claro e integrado à circulação principal da casa.",
      category: "social",
      isHighlight: true
    },
    {
      src: "assets/images/casa/sala-estar-escada-design-moderno.webp",
      title: "Escada em Granito e Guarda-Corpo em Vidro",
      caption: "Circulação com acabamento em granito e fechamento em vidro conectando os pavimentos.",
      category: "social"
    },
    {
      src: "assets/images/casa/detalhe-escada-sala-estar.webp",
      title: "Perspectiva da Escada e Circulação",
      caption: "Amplitude vertical e iluminação natural na área de acesso aos quartos.",
      category: "social"
    },
    {
      src: "assets/images/casa/ambiente-social-escada-acesso-superior.webp",
      title: "Pé-Direito Elevado na Circulação Social",
      caption: "Espaço arejado com circulação livre e esquadrias amplas de alumínio.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-tv-estar-integrada.webp",
      title: "Sala de TV (Pavimento Térreo)",
      caption: "Primeiro ambiente de TV e descanso no piso térreo.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-tv-mezanino-piso-superior.webp",
      title: "Segunda Sala de TV no Pavimento Superior",
      caption: "Ambiente íntimo reservado no mezanino para momentos de tranquilidade da família.",
      category: "social"
    },
    {
      src: "assets/images/casa/mezanino-pe-direito-duplo-vista-gourmet.webp",
      title: "Mezanino com Vista para a Varanda Gourmet",
      caption: "Pé-direito elevado com visão aberta entre o pavimento superior e a varanda gourmet.",
      category: "social"
    },

    // --- Cozinha & Espaço Gourmet ---
    {
      src: "assets/images/casa/espaco-gourmet-ilha-churrasqueira-pe-direito-alto.webp",
      title: "Varanda Gourmet com Ilha e Churrasqueira",
      caption: "Bancada em granito, churrasqueira integrada, ilha de apoio e pé-direito elevado.",
      category: "gourmet",
      isHighlight: true
    },
    {
      src: "assets/images/casa/varanda-gourmet-churrasqueira-planejados.webp",
      title: "Churrasqueira e Armários Planejados",
      caption: "Espaço gourmet com armários sob medida e cuba de apoio.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/bancada-granito-churrasqueira-gourmet.webp",
      title: "Bancada Gourmet em Granito",
      caption: "Bancada de preparo e apoio integrada à varanda fechada em vidro.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/cozinha-principal-planejados-granito.webp",
      title: "Cozinha com Armários Planejados",
      caption: "Armários sob medida, bancadas em granito e torre quente.",
      category: "gourmet",
      isHighlight: true
    },
    {
      src: "assets/images/casa/cozinha-planejada-armarios-modernos.webp",
      title: "Armários e Nichos da Cozinha",
      caption: "Marcenaria funcional com armários aéreos e amplos balcões.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/cozinha-integrada-area-social.webp",
      title: "Integração da Cozinha com Área Social",
      caption: "Abertura prática facilitando o serviço para as salas e a copa.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/copa-cozinha-refeicoes-integrada.webp",
      title: "Copa para Refeições Diárias",
      caption: "Espaço para mesa de refeições rápidas integrado à cozinha.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/vista-ampla-cozinha-planejada.webp",
      title: "Visão Geral da Cozinha",
      caption: "Bancadas amplas com ventilação natural por esquadrias de alumínio.",
      category: "gourmet"
    },

    // --- Suítes & Dormitórios ---
    {
      src: "assets/images/casa/suite-master-ampla-luminosidade.webp",
      title: "Suíte Master com Closet",
      caption: "Quarto principal amplo com iluminação natural, persiana integrada e closet privativo.",
      category: "suites",
      isHighlight: true
    },
    {
      src: "assets/images/casa/suite-master-conforto-persiana-automatizada.webp",
      title: "Suíte Master — Perspectiva de Descanso",
      caption: "Espaço reservado no piso superior com persiana automatizada.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-master-acabamento-nobre.webp",
      title: "Banheiro da Suíte Master",
      caption: "Banheiro privativo da suíte master com bancada em mármore e box blindex.",
      category: "suites"
    },
    {
      src: "assets/images/casa/bancada-pia-banheiro-suite-master.webp",
      title: "Bancada Esculpida do Banheiro Master",
      caption: "Bancada com cuba esculpida e espelho amplo.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-2-superior-conforto-espaco.webp",
      title: "Segunda Suíte (Pavimento Superior)",
      caption: "Quarto confortável com banheiro privativo e iluminação embutida.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-2-superior-vista-ampla.webp",
      title: "Segunda Suíte — Vista Aberta",
      caption: "Quarto com janela ampla voltada para a área do condomínio.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-2-superior.webp",
      title: "Banheiro da Segunda Suíte",
      caption: "Banheiro privativo com bancada em mármore travertino e box.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-3-superior-iluminacao-natural.webp",
      title: "Terceira Suíte (Pavimento Superior)",
      caption: "Quarto com excelente incidência de luz natural e armários bem posicionados.",
      category: "suites"
    },
    {
      src: "assets/images/casa/quarto-dormitorio-piso-superior.webp",
      title: "Quinto Dormitório (Piso Superior)",
      caption: "Quarto versátil para acomodar hóspedes, biblioteca ou escritório.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-terrea-privativa-acessibilidade.webp",
      title: "Quarta Suíte (Pavimento Térreo)",
      caption: "Suíte privativa localizada no térreo, oferecendo facilidade de acesso sem escadas.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-terrea.webp",
      title: "Banheiro da Suíte Térrea",
      caption: "Acesso direto, ventilação natural e acabamento contemporâneo.",
      category: "suites"
    },

    // --- Quintal & Área Externa ---
    {
      src: "assets/images/casa/amplo-quintal-gramado-coqueiros.webp",
      title: "Amplo Quintal Gramado com Coqueiros",
      caption: "Área verde privativa na propriedade de 912 m² composta por dois lotes.",
      category: "externa",
      isHighlight: true
    },
    {
      src: "assets/images/casa/varanda-superior-vista-quintal-jardim.webp",
      title: "Vista da Varanda Superior para o Quintal",
      caption: "Terraço do pavimento superior com vista panorâmica para o gramado e os coqueiros.",
      category: "externa"
    },
    {
      src: "assets/images/casa/terraco-superior-vista-panoramica.webp",
      title: "Terraço Superior",
      caption: "Piso cerâmico e mureta de proteção com vista aberta para a área externa.",
      category: "externa"
    },
    {
      src: "assets/images/casa/jardim-quintal-espaco-verde-privativo.webp",
      title: "Jardim dos Coqueiros e Caminho de Acesso",
      caption: "Paisagismo consolidado com coqueiros e caminho de tijolos no quintal.",
      category: "externa"
    },
    {
      src: "assets/images/casa/quintal-amplo-terreno-912m2.webp",
      title: "Dimensão do Quintal nos Dois Lotes",
      caption: "Área privativa ampla entre muros altos no terreno de 912 m².",
      category: "externa"
    },
    {
      src: "assets/images/casa/fachada-posterior-quintal-privativo.webp",
      title: "Fachada Posterior e Varanda Gourmet",
      caption: "Conexão direta entre o fechamento de vidro da varanda gourmet e o gramado.",
      category: "externa"
    },
    {
      src: "assets/images/casa/varanda-gourmet-fechada-vidro-vista-quintal.webp",
      title: "Fechamento em Vidro da Varanda Gourmet",
      caption: "Folhas de vidro de correr que integram o ambiente gourmet com o quintal.",
      category: "externa"
    },
    {
      src: "assets/images/casa/espaco-pet-canil-quintal.webp",
      title: "Canil Estruturado no Quintal",
      caption: "Espaço dedicado para animais com estrutura segura e de fácil higienização.",
      category: "externa"
    },
    {
      src: "assets/images/casa/area-externa-canil-gramado.webp",
      title: "Circulação Lateral Independente",
      caption: "Acesso lateral ligando a frente e o quintal sem necessidade de passar pelo interior da casa.",
      category: "externa"
    },

    // --- Condomínio Ville de France ---
    {
      src: "assets/images/condominio/condominio-ville-de-france-vista-aerea-panoramica.webp",
      title: "Residencial Ville de France — Vista Aérea",
      caption: "Condomínio fechado com ruas arborizadas e infraestrutura completa em Ourinhos - SP.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-por-do-sol-aereo.webp",
      title: "Pôr do Sol no Ville de France",
      caption: "Vista aérea do condomínio ao entardecer.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-quadra-tenis.webp",
      title: "Quadra de Tênis",
      caption: "Quadra com iluminação para a prática esportiva dentro do condomínio.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-quadra-poliesportiva.webp",
      title: "Quadra Poliesportiva",
      caption: "Estrutura para futebol de salão, basquete e atividades esportivas.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-playground.webp",
      title: "Playground Infantil",
      caption: "Área de lazer ao ar livre dedicada para crianças brincarem com segurança.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-ginastica-ar-livre.webp",
      title: "Equipamentos de Ginástica ao Ar Livre",
      caption: "Estações de exercícios integradas às áreas verdes do condomínio.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-pergolado-convivencia.webp",
      title: "Pergolados de Convivência",
      caption: "Espaços com pergolados de madeira rodeados de jardins floridos.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-pergolado-paisagismo.webp",
      title: "Alamedas Arborizadas",
      caption: "Ruas tranquilas e portaria 24 horas para segurança de moradores e visitantes.",
      category: "condominio"
    }
  ];

  /* --------------------------------------------------------------------------
     5. HEADER COM TRANSIÇÃO DE SCROLL E MENU MOBILE
     -------------------------------------------------------------------------- */
  const header = document.getElementById("siteHeader");
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer-cta");

  const openMobileMenu = () => {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });

  /* --------------------------------------------------------------------------
     6. ROLAGEM SUAVE COM OFFSET PARA CABEÇALHO FIXO
     -------------------------------------------------------------------------- */
  const internalAnchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  internalAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
     7. LIGHTBOX MODAL VANILLA COMPLETO COM NAVEGAÇÃO E TOUCH
     -------------------------------------------------------------------------- */
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxPrevBtn = document.getElementById("lightboxPrev");
  const lightboxNextBtn = document.getElementById("lightboxNext");
  const lightboxCloseBtn = document.getElementById("lightboxClose");
  const lightboxTabs = document.querySelectorAll(".lightbox-tab-btn");

  let activeList = [...GALLERY_ITEMS];
  let currentIndex = 0;
  let lastActiveElement = null;

  const renderCurrentPhoto = () => {
    if (!lightboxImg || activeList.length === 0) return;
    const item = activeList[currentIndex];

    lightboxImg.style.opacity = "0.3";
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;

    lightboxImg.onload = () => {
      lightboxImg.style.opacity = "1";
    };

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} de ${activeList.length}`;
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = "";
      const strongEl = document.createElement("strong");
      strongEl.textContent = item.title;
      lightboxCaption.appendChild(strongEl);
      if (item.caption) {
        lightboxCaption.appendChild(document.createTextNode(` — ${item.caption}`));
      }
    }
  };

  const openLightboxBySrc = (imgSrc, preferCategory = "todas") => {
    lastActiveElement = document.activeElement;

    const cleanSrc = imgSrc.split("?")[0];
    let foundIndex = GALLERY_ITEMS.findIndex(
      (item) => cleanSrc.endsWith(item.src) || item.src.endsWith(cleanSrc)
    );

    if (foundIndex === -1) {
      const filename = cleanSrc.split("/").pop();
      foundIndex = GALLERY_ITEMS.findIndex((item) => item.src.endsWith(filename));
    }

    activeList = [...GALLERY_ITEMS];
    currentIndex = foundIndex !== -1 ? foundIndex : 0;

    if (lightboxTabs) {
      lightboxTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.cat === preferCategory);
      });
    }

    renderCurrentPhoto();

    if (lightbox) {
      lightbox.classList.add("is-active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    }

    trackConversionEvent("gallery_open", "lightbox", { src: imgSrc, index: currentIndex });
  };

  const filterLightboxTabs = (cat) => {
    if (cat === "todas") {
      activeList = [...GALLERY_ITEMS];
    } else {
      activeList = GALLERY_ITEMS.filter((item) => item.category === cat);
    }
    currentIndex = 0;
    renderCurrentPhoto();

    lightboxTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.cat === cat);
    });
  };

  lightboxTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterLightboxTabs(tab.dataset.cat || "todas");
    });
  });

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  };

  const nextPhoto = () => {
    if (activeList.length === 0) return;
    currentIndex = (currentIndex + 1) % activeList.length;
    renderCurrentPhoto();
  };

  const prevPhoto = () => {
    if (activeList.length === 0) return;
    currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    renderCurrentPhoto();
  };

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", prevPhoto);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", nextPhoto);
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);

  // Escuta cliques em qualquer gatilho com data-open-lightbox
  document.querySelectorAll("[data-open-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSrc = el.getAttribute("data-gallery-src") || el.querySelector("img")?.getAttribute("src") || "";
      if (targetSrc) {
        openLightboxBySrc(targetSrc);
      }
    });
  });

  /* --------------------------------------------------------------------------
     FILTROS NA PÁGINA PARA A GALERIA DE FOTOS
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll("#galleryAllGrid .gallery-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCat = btn.getAttribute("data-filter") || "todas";

      // Atualiza estado ativo dos botões
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filtra os cards visíveis na página
      galleryCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category") || "";
        if (selectedCat === "todas" || cardCat === selectedCat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Teclado no Lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("is-active")) return;
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      nextPhoto();
    } else if (e.key === "ArrowLeft") {
      prevPhoto();
    }
  });

  // Swipe Touch no Lightbox Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightbox) {
    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 45;
      if (touchEndX < touchStartX - threshold) nextPhoto();
      if (touchEndX > touchStartX + threshold) prevPhoto();
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     8. ANALYTICS EXTENSÍVEL (CONFIGURÁVEL E RESPEITOSO)
     -------------------------------------------------------------------------- */
  function trackConversionEvent(eventName, eventOrigin, customData = {}) {
    const payload = {
      event: eventName,
      origin: eventOrigin,
      timestamp: new Date().toISOString(),
      ...utmParams,
      ...customData
    };

    // Google Tag Manager / DataLayer
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }

    // Google Analytics 4 (se configurado)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: "Lead_Conversion",
        event_label: eventOrigin,
        ...customData
      });
    }

    // Meta Pixel (se configurado)
    if (typeof window.fbq === "function") {
      if (eventName === "whatsapp_click" || eventName === "schedule_visit_click") {
        window.fbq("track", "Contact", {
          content_name: "Casa Residencial Ville de France Ourinhos",
          source: eventOrigin
        });
      } else {
        window.fbq("trackCustom", eventName, payload);
      }
    }

    // Log em ambiente de desenvolvimento local
    try {
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.log("[Analytics Event]:", payload);
      }
    } catch (_) {}
  }

  // Carregamento condicional seguro de GA4 apenas se configurado
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.startsWith("G-")) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
  }

  // Carregamento condicional de Meta Pixel apenas se configurado
  if (META_PIXEL_ID && /^\d+$/.test(META_PIXEL_ID)) {
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  /* --------------------------------------------------------------------------
     9. ATUALIZAÇÃO INTELIGENTE DOS LINKS DE CONVERSÃO DO WHATSAPP
     -------------------------------------------------------------------------- */
  document.querySelectorAll("[data-wa-context]").forEach((link) => {
    const context = link.getAttribute("data-wa-context") || "hero";
    link.setAttribute("href", buildWhatsAppUrl(context));
    
    link.addEventListener("click", () => {
      const eventName = link.getAttribute("data-event") || "whatsapp_click";
      const origin = link.getAttribute("data-origin") || context;
      trackConversionEvent(eventName, origin);
    });
  });

  // Atualiza também quaisquer outros links legados marcados com data-event
  document.querySelectorAll("[data-event]:not([data-wa-context])").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventName = btn.getAttribute("data-event") || "click";
      const eventOrigin = btn.getAttribute("data-origin") || "unknown";
      trackConversionEvent(eventName, eventOrigin);
    });
  });

  console.log("Casa em Ourinhos — Sistema de UX/CRO inicializado com sucesso.");
});
