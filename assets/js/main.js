/**
 * ============================================================================
 * CASA EM OURINHOS — LANDING PAGE DE ALTO PADRÃO
 * Script Principal Vanilla JavaScript (Sem dependências externas)
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* --------------------------------------------------------------------------
     1. CONSTANTES E CONFIGURAÇÕES OFICIAIS
     -------------------------------------------------------------------------- */
  // URL para consulta de localização do condomínio no Google Maps
  const MAPS_URL = "https://maps.google.com/?q=Residencial+Ville+de+France+Ourinhos+SP";

  // Número oficial e mensagem formatada solicitada pelo usuário
  const WHATSAPP_PHONE = "5514998521062";
  const WHATSAPP_DEFAULT_MSG = encodeURIComponent(
    "Oi Danilo, vim pelo site da casa www.casaemourinhos.com.br e gostaria de obter mais informações e fazer uma visita"
  );

  /* --------------------------------------------------------------------------
     2. BANCO DE IMAGENS COMPLETO (43 FOTOGRAFIAS EM WEBP)
     -------------------------------------------------------------------------- */
  const GALLERY_ITEMS = [
    // --- Fachada e Entrada ---
    {
      src: "assets/images/casa/fachada-frontal-casa-alto-padrao-ourinhos.webp",
      title: "Fachada Frontal Completa",
      caption: "Arquitetura contemporânea de linhas retas com pé-direito imponente e jardim frontal.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/fachada-noturna-iluminacao-ourinhos.webp",
      title: "Fachada Noturna com Iluminação Cênica",
      caption: "Projeto luminotécnico valorizando os volumes arquitetônicos e o paisagismo.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/fachada-moderna-jardim-frontal.webp",
      title: "Vista Frontal e Paisagismo",
      caption: "Gramado verdejante, palmeiras e entrada social imponente com vidros duplos.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/jardim-frontal-paisagismo-ourinhos.webp",
      title: "Jardim Frontal e Calçada em Paver",
      caption: "Área frontal com acabamento refinado e integração com a rua arborizada.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/garagem-coberta-fachada-frontal.webp",
      title: "Garagem Coberta e Acesso Social",
      caption: "Espaço coberto para 2 veículos e acesso direto sem desníveis.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/garagem-ampla-espaco-veiculos.webp",
      title: "Acomodação para até 5 Veículos",
      caption: "Amplo espaço entre vagas cobertas e descobertas com piso de alta durabilidade.",
      category: "fachada"
    },
    {
      src: "assets/images/casa/vista-aerea-noturna-propriedade-ourinhos.webp",
      title: "Vista Aérea Noturna da Propriedade",
      caption: "Destaque para o lote duplo de 912 m² e sua iluminação perimetral segura.",
      category: "fachada"
    },

    // --- Área Social e Convivência ---
    {
      src: "assets/images/casa/sala-jantar-integrada-alto-padrao.webp",
      title: "Sala de Jantar Integrada",
      caption: "Conexão fluida com a área de estar e cozinha, piso em porcelanato polido.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-estar-integracao-cozinha.webp",
      title: "Sala de Estar e Convivência",
      caption: "Ambiente claro, acolhedor e perfeitamente integrado para reunir família e convidados.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-estar-escada-design-moderno.webp",
      title: "Escada Escultural em Granito e Vidro",
      caption: "Guarda-corpo panorâmico em vidro e degraus com acabamento refinado.",
      category: "social"
    },
    {
      src: "assets/images/casa/detalhe-escada-sala-estar.webp",
      title: "Perspectiva da Escada e Circulação",
      caption: "Design minimalista e amplitude vertical conectando os dois pavimentos.",
      category: "social"
    },
    {
      src: "assets/images/casa/ambiente-social-escada-acesso-superior.webp",
      title: "Pé-Direito Elevado na Circulação Social",
      caption: "Excelente entrada de luz natural e conforto térmico em todas as estações.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-tv-estar-integrada.webp",
      title: "Sala de TV e Estar Térrea",
      caption: "Ambiente reservado para entretenimento e descanso no pavimento inferior.",
      category: "social"
    },
    {
      src: "assets/images/casa/sala-tv-mezanino-piso-superior.webp",
      title: "Segunda Sala de TV no Mezanino Superior",
      caption: "Ambiente privativo no andar superior para momentos em família com total tranquilidade.",
      category: "social"
    },
    {
      src: "assets/images/casa/mezanino-pe-direito-duplo-vista-gourmet.webp",
      title: "Vista do Mezanino para a Varanda Gourmet",
      caption: "Sensação ímpar de amplitude visual do pé-direito duplo sobre a área gourmet.",
      category: "social"
    },

    // --- Cozinha e Espaço Gourmet ---
    {
      src: "assets/images/casa/espaco-gourmet-ilha-churrasqueira-pe-direito-alto.webp",
      title: "Espaço Gourmet com Ilha e Pé-Direito Elevado",
      caption: "Bancada em granito escuro, marcenaria planejada e integração visual completa.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/varanda-gourmet-churrasqueira-planejados.webp",
      title: "Churrasqueira Moderna Revestida",
      caption: "Grelha inox, coifa eficiente e revestimento geométrico 3D de alta sofisticação.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/bancada-granito-churrasqueira-gourmet.webp",
      title: "Bancada Gourmet e Cuba de Apoio",
      caption: "Espaço funcional pensado para o preparo de refeições especiais com amigos.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/cozinha-principal-planejados-granito.webp",
      title: "Cozinha com Armários Planejados",
      caption: "Móveis sob medida, amplas bancadas de trabalho e torre quente funcional.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/cozinha-planejada-armarios-modernos.webp",
      title: "Detalhes da Marcenaria da Cozinha",
      caption: "Armários superiores com nichos e acabamento resistente de fácil manutenção.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/cozinha-integrada-area-social.webp",
      title: "Integração da Cozinha com a Área Social",
      caption: "Visão aberta facilitando a comunicação com a copa e salas.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/copa-cozinha-refeicoes-integrada.webp",
      title: "Copa para Refeições Diárias",
      caption: "Praticidade e conforto para o café da manhã e almoços cotidianos.",
      category: "gourmet"
    },
    {
      src: "assets/images/casa/vista-ampla-cozinha-planejada.webp",
      title: "Ampla Visão da Cozinha Funcional",
      caption: "Iluminação dedicada e ventilação natural com esquadrias de alumínio.",
      category: "gourmet"
    },

    // --- Suítes e Área Íntima ---
    {
      src: "assets/images/casa/suite-master-ampla-luminosidade.webp",
      title: "Suíte Master com Closet",
      caption: "Espaço generoso, closet privativo e portas balcão com persiana integrada.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-master-conforto-persiana-automatizada.webp",
      title: "Suíte Master — Ângulo de Descanso",
      caption: "Conforto acústico, climatização preparada e privacidade absoluta.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-master-acabamento-nobre.webp",
      title: "Banheiro da Suíte Master",
      caption: "Revestimentos em porcelanato de grande formato e box blindex de qualidade.",
      category: "suites"
    },
    {
      src: "assets/images/casa/bancada-pia-banheiro-suite-master.webp",
      title: "Bancada Esculpida do Banheiro Master",
      caption: "Mármore nobre com cuba esculpida e metais sanitários de alto padrão.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-2-superior-conforto-espaco.webp",
      title: "Suíte Superior 2",
      caption: "Quarto amplo com espaço para bancada de estudos e iluminação embutida.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-2-superior-vista-ampla.webp",
      title: "Suíte Superior 2 — Conforto",
      caption: "Acesso privativo ao banheiro e vista aberta para a tranquilidade do condomínio.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-2-superior.webp",
      title: "Banheiro da Suíte Superior 2",
      caption: "Bancada em mármore travertino, espelho amplo e box com acabamento fosco.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-3-superior-iluminacao-natural.webp",
      title: "Suíte Superior 3",
      caption: "Excelente incidência de luz natural e armários bem posicionados.",
      category: "suites"
    },
    {
      src: "assets/images/casa/quarto-dormitorio-piso-superior.webp",
      title: "Quinto Dormitório (Piso Superior)",
      caption: "Ambiente flexível para dormitório de hóspedes, home office ou biblioteca.",
      category: "suites"
    },
    {
      src: "assets/images/casa/suite-terrea-privativa-acessibilidade.webp",
      title: "Suíte Térrea Privativa",
      caption: "Quarta suíte posicionada no piso térreo, ideal para visitantes ou acessibilidade.",
      category: "suites"
    },
    {
      src: "assets/images/casa/banheiro-suite-terrea.webp",
      title: "Banheiro da Suíte Térrea",
      caption: "Acesso direto, ventilação natural e acabamento contemporâneo.",
      category: "suites"
    },

    // --- Quintal e Área Externa ---
    {
      src: "assets/images/casa/amplo-quintal-gramado-coqueiros.webp",
      title: "Amplo Quintal Gramado com Coqueiros",
      caption: "Área verde exuberante no lote duplo de 912 m² com espaço para diversos projetos.",
      category: "externa"
    },
    {
      src: "assets/images/casa/varanda-superior-vista-quintal-jardim.webp",
      title: "Vista Panorâmica da Varanda Superior",
      caption: "Terraço do andar de cima com vista ampla para o quintal privativo e horizonte.",
      category: "externa"
    },
    {
      src: "assets/images/casa/terraco-superior-vista-panoramica.webp",
      title: "Terraço Superior e Deck",
      caption: "Piso cerâmico que remete à madeira e mureta com acabamento em granito.",
      category: "externa"
    },
    {
      src: "assets/images/casa/jardim-quintal-espaco-verde-privativo.webp",
      title: "Jardim dos Coqueiros e Caminho de Tijolos",
      caption: "Paisagismo natural consolidado proporcionando sombra, ar puro e privacidade.",
      category: "externa"
    },
    {
      src: "assets/images/casa/quintal-amplo-terreno-912m2.webp",
      title: "Espaço Aberto do Quintal",
      caption: "Terreno duplo de 912 m² unificado com segurança entre muros altos.",
      category: "externa"
    },
    {
      src: "assets/images/casa/fachada-posterior-quintal-privativo.webp",
      title: "Fachada Posterior e Varanda Gourmet",
      caption: "Varanda fechada em blindex com ligação direta para o gramado.",
      category: "externa"
    },
    {
      src: "assets/images/casa/varanda-gourmet-fechada-vidro-vista-quintal.webp",
      title: "Fechamento em Vidro da Varanda Gourmet",
      caption: "Permite desfrutar do espaço gourmet em dias de chuva ou vento com todo o conforto.",
      category: "externa"
    },
    {
      src: "assets/images/casa/espaco-pet-canil-quintal.webp",
      title: "Canil Estruturado no Quintal",
      caption: "Estrutura dedicada para animais de estimação com segurança e higienização fácil.",
      category: "externa"
    },
    {
      src: "assets/images/casa/area-externa-canil-gramado.webp",
      title: "Circulação Lateral e Canil",
      caption: "Acesso lateral independente conectando frente e fundos sem passar pela casa.",
      category: "externa"
    },

    // --- Condomínio Ville de France ---
    {
      src: "assets/images/condominio/condominio-ville-de-france-vista-aerea-panoramica.webp",
      title: "Residencial Ville de France — Vista Aérea",
      caption: "Condomínio fechado com ruas largas, infraestrutura completa e contato direto com a natureza.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-por-do-sol-aereo.webp",
      title: "Pôr do Sol no Ville de France",
      caption: "Cenário inspirador e tranquilidade para viver os melhores momentos da vida.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-quadra-tenis.webp",
      title: "Quadra Oficial de Tênis",
      caption: "Piso profissional com iluminação para a prática esportiva a poucos passos de casa.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-quadra-poliesportiva.webp",
      title: "Quadra Poliesportiva e Basquete",
      caption: "Espaço completo para futebol de salão, basquete e atividades esportivas infantis.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-playground.webp",
      title: "Playground Infantil com Área Verde",
      caption: "Brinquedos modernos e seguros para as crianças se divertirem com total segurança.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-ginastica-ar-livre.webp",
      title: "Equipamentos de Ginástica ao Ar Livre",
      caption: "Estação de exercícios físicos em meio à vegetação preservada do condomínio.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-pergolado-convivencia.webp",
      title: "Pergolado e Espaço de Convivência",
      caption: "Ambiente para leitura, descanso e contemplação das áreas arborizadas.",
      category: "condominio"
    },
    {
      src: "assets/images/condominio/condominio-ville-de-france-pergolado-paisagismo.webp",
      title: "Paisagismo e Alamedas Arborizadas",
      caption: "Ruas calmas, segurança e portaria 24 horas para sua total tranquilidade.",
      category: "condominio"
    }
  ];

  /* --------------------------------------------------------------------------
     3. HEADER COM TRANSIÇÃO INTELIGENTE DE SCROLL
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

  /* --------------------------------------------------------------------------
     4. MENU MOBILE HAMBÚRGUER COM ACESSIBILIDADE
     -------------------------------------------------------------------------- */
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
     5. ROLAGEM SUAVE COM OFFSET PARA O HEADER FIXO
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
     6. FILTROS NA PÁGINA PARA A GALERIA DE FOTOS
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCat = btn.getAttribute("data-filter") || "todas";

      // Atualiza botões
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filtra os cards visíveis na página
      galleryCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (selectedCat === "todas" || cardCat === selectedCat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. LIGHTBOX MODAL VANILLA — BUSCA EXATA POR SRC (ZERO DESCOMPASSO)
     -------------------------------------------------------------------------- */
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxPrevBtn = document.getElementById("lightboxPrev");
  const lightboxNextBtn = document.getElementById("lightboxNext");
  const lightboxCloseBtn = document.getElementById("lightboxClose");
  const lightboxTabs = document.querySelectorAll(".lightbox-tab-btn");

  let currentCategory = "todas";
  let activeList = [...GALLERY_ITEMS];
  let currentIndex = 0;
  let lastActiveElement = null;

  // Atualiza a exibição no lightbox com métodos DOM seguros
  const renderCurrentPhoto = () => {
    if (!lightboxImg || activeList.length === 0) return;
    const item = activeList[currentIndex];

    lightboxImg.style.opacity = "0.4";
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
      lightboxCaption.appendChild(document.createTextNode(` — ${item.caption}`));
    }
  };

  // Abre o lightbox buscando pelo SRC exato da imagem clicada
  const openLightboxBySrc = (imgSrc) => {
    lastActiveElement = document.activeElement;

    // Normaliza caminho para busca
    const cleanSrc = imgSrc.split("?")[0];
    let foundIndex = GALLERY_ITEMS.findIndex(
      (item) => cleanSrc.endsWith(item.src) || item.src.endsWith(cleanSrc)
    );

    if (foundIndex === -1) {
      // Tenta achar pelo nome do arquivo
      const filename = cleanSrc.split("/").pop();
      foundIndex = GALLERY_ITEMS.findIndex((item) => item.src.endsWith(filename));
    }

    // Se encontrou, usa a lista completa com todas as fotos para navegação
    activeList = [...GALLERY_ITEMS];
    currentIndex = foundIndex !== -1 ? foundIndex : 0;

    // Sincroniza abas internas do modal
    if (lightboxTabs) {
      lightboxTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.cat === "todas");
      });
    }

    renderCurrentPhoto();

    if (lightbox) {
      lightbox.classList.add("is-active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    }

    trackConversionEvent("open_gallery", "lightbox", { src: imgSrc, index: currentIndex });
  };

  // Filtragem interna do modal
  const filterLightboxTabs = (cat) => {
    currentCategory = cat;
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

  // Escuta cliques em qualquer imagem com atributo data-open-lightbox ou em galeria
  document.querySelectorAll("[data-open-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSrc = el.getAttribute("data-gallery-src") || el.querySelector("img")?.getAttribute("src") || "";
      if (targetSrc) {
        openLightboxBySrc(targetSrc);
      }
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

  // Touch Swipe Mobile no Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 50;
      if (touchEndX < touchStartX - threshold) nextPhoto();
      if (touchEndX > touchStartX + threshold) prevPhoto();
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     8. TRACKING DE EVENTOS DE CONVERSÃO & ANALYTICS EXTENSÍVEL
     -------------------------------------------------------------------------- */
  function trackConversionEvent(eventName, eventOrigin, customData = {}) {
    const payload = {
      event: eventName,
      origin: eventOrigin,
      timestamp: new Date().toISOString(),
      ...customData
    };

    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: "Engagement",
        event_label: eventOrigin,
        ...customData
      });
    }

    if (typeof window.clarity === "function") {
      window.clarity("event", `${eventName}_${eventOrigin}`);
    }

    try {
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.log("[Analytics]:", payload);
      }
    } catch (_) {}
  }

  document.querySelectorAll("[data-event]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const eventName = btn.getAttribute("data-event") || "click";
      const eventOrigin = btn.getAttribute("data-origin") || "unknown";
      trackConversionEvent(eventName, eventOrigin);
    });
  });

  // Botão de Localização Maps
  const mapsBtn = document.getElementById("btnRequestMaps");
  if (mapsBtn) {
    mapsBtn.addEventListener("click", () => {
      trackConversionEvent("click_maps", "location_section");
      mapsBtn.setAttribute(
        "href",
        `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_DEFAULT_MSG}`
      );
    });
  }

  // Atualiza dinamicamente todos os links oficiais com a mensagem solicitada
  document.querySelectorAll("a.btn-whatsapp-dynamic").forEach((waLink) => {
    waLink.setAttribute("href", `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_DEFAULT_MSG}`);
  });

  console.log("Casa em Ourinhos — Sistema inicializado com mensagem oficial do Danilo.");
});
