# Planejamento do Projeto: Landing Page Premium — Casa em Ourinhos (Ville de France)

## 1. Visão Geral e Objetivos
- **Imóvel:** Residência unifamiliar de alto padrão no Residencial Ville de France, Ourinhos - SP.
- **Valor:** R$ 2.600.000,00.
- **Terreno:** 912 m² (dois terrenos).
- **Área construída:** 430 m².
- **Dormitórios / Suítes:** 5 dormitórios, sendo 4 suítes (1 suíte master com closet).
- **Banheiros:** 6 banheiros no total.
- **Vagas:** Até 5 veículos (2 cobertas + ~3 descobertas).
- **Objetivo Principal de Conversão:** Agendamento de visita via WhatsApp (+55 14 998521062 / `5514998521062`) com mensagem pré-formatada.
- **Estética:** Visual editorial e sofisticado inspirado em referências internacionais de imóveis de luxo (Sotheby’s, Christie’s, JamesEdition).
- **Sem Dependência de Frameworks:** HTML5 semântico, CSS3 Vanilla, JavaScript Vanilla leve e modular, sem frameworks pesados, 100% compatível com GitHub Pages.

---

## 2. Inventário e Estratégia de Imagens
- **Total de imagens originais:** 35 fotos da casa (incluindo subpastas de suítes e salas) + 9 arquivos do condomínio.
- **Privacidade:** Nenhuma imagem publicada conterá metadados EXIF ou coordenadas de GPS. O número exato da residência não será mencionado em textos, metadados ou marcações estruturadas.
- **Conversão e Otimização:**
  - Todas as fotos convertidas para formato `.webp` de alta fidelidade (qualidade 82-86).
  - Remoção rigorosa de metadados EXIF/GPS.
  - Nomes de arquivos semanticamente descritivos em minúsculas, separados por hífen.
  - Geração de variantes responsivas (`srcset` e `sizes`) para imagens principais (Hero, Destaques) e versão social Open Graph (1200x630).
  - `logo-do-condominio.png` preservado em PNG com transparência limpa.
  - Atributos `width` e `height` em todas as imagens no HTML para eliminar Cumulative Layout Shift (CLS).
  - Foto HERO com `fetchpriority="high"`, preload no `<head>` e sem `loading="lazy"`. Demais fotos com `loading="lazy"` e `decoding="async"`.

---

## 3. Arquitetura de Informação e Seções
1. **Header / Navbar:** Logo textual "Casa em Ourinhos", navegação (O Imóvel, Fotos, Detalhes, Condomínio, Localização), botão CTA "Agendar visita", scroll blur inteligente, menu mobile hambúrguer acessível.
2. **Hero Section:** Fotografia de alto impacto visual, eyebrow "RESIDENCIAL VILLE DE FRANCE • OURINHOS - SP", H1 "Casa de Alto Padrão à Venda em Ourinhos", subtítulo refinado, preço R$ 2.600.000, destaques imediatos (5 dorms, 4 suítes, 430 m², 912 m², 5 vagas) e botões de ação ("Agendar uma visita", "Conhecer o imóvel").
3. **Bloco de Números de Alto Padrão:** Grade refinada com métricas principais (912 m² terreno, 430 m² área construída, 5 dormitórios, 4 suítes, 6 banheiros, 5 vagas).
4. **Apresentação e Storytelling:** Texto editorial "Espaço para viver bem em todos os ambientes" destacando fluidez, iluminação, pé-direito elevado e convivência familiar.
5. **Galeria Principal da Residência:** Grid editorial (1 foto magna + 4 secundárias) + botão "Ver todas as fotos" com contador total, abrindo Lightbox Vanilla imersivo com filtros de categorias (Fachada, Área Social, Gourmet, Suítes, Quintal, Condomínio), navegação por setas, teclado (Esc, setas), toque mobile e contadores.
6. **Área Social:** Destaque para sala de estar frontal, sala de jantar e 2 salas de TV com pé-direito elevado.
7. **Cozinha e Espaço Gourmet:** Cozinha com armários planejados integrada à varanda gourmet com pé-direito elevado, fechamento em vidro, churrasqueira e ilha.
8. **Área Íntima:** 4 suítes amplas, incluindo a suíte master com closet privativo, acabamentos de alto padrão e conforto acústico.
9. **Quintal e Área Externa:** Grande terreno privativo com jardim, coqueiros, gramado verdejante, canil e varanda panorâmica.
10. **Ficha Completa:** Tabela/grid técnico dividido em Imóvel, Área Social, Gourmet & Serviço e Área Externa.
11. **Viver no Residencial Ville de France:** Seção de estilo de vida em condomínio fechado com foto aérea panorâmica, amenidades reais (portaria 24h, quadra de tênis, poliesportiva, basquete, academia, playground, ginástica ao ar livre, áreas arborizadas).
12. **Galeria do Condomínio:** Mosaico fotográfico das áreas comuns reais.
13. **Localização Privilegiada em Ourinhos:** Enfoque no prestígio do Residencial Ville de France em Ourinhos - SP, configuração `MAPS_URL`, CTA "Solicitar localização e agendar visita".
14. **Perguntas Frequentes (FAQ):** Componente `<details>` e `<summary>` acessível com as perguntas e respostas exatas do briefing.
15. **CTA Final de Agendamento:** Bloco de fechamento consultivo para agendamento privativo de visita.
16. **Rodapé:** Identificação da propriedade, aviso legal sobre agendamento prévio, e rodapé institucional com link azul para `siteprofissional.pro`.
17. **Elementos Flutuantes de Conversão:** Botão flutuante WhatsApp para desktop e barra inferior fixa inteligente para dispositivos móveis com tracking de eventos.

---

## 4. Otimização Técnica, SEO e Dados Estruturados
- **SEO On-Page:** Palavra-chave primária "casa à venda em Ourinhos", variações naturais, Title e Meta Description otimizados, hierarquia estrita de cabeçalhos (um único `<h1>`, `<h2>` e `<h3>` semânticos).
- **Open Graph e Twitter Cards:** Imagem dedicada 1200x630, título, descrição, `og:locale` pt_BR, visualização perfeita para compartilhamento no WhatsApp e redes sociais.
- **Schema.org / JSON-LD:** `@graph` com entidades `WebSite`, `RealEstateListing`, `SingleFamilyResidence` e `Offer` especificando valores numéricos, área em metros quadrados (`floorSize` 430 m², `additionalProperty` 912 m²), 5 quartos, 6 banheiros, 4 suítes, 5 vagas, R$ 2.600.000 BRL, sem exposição do número do imóvel.
- **Arquivos Estruturais:** `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html`, `CNAME` (`casaemourinhos.com.br`), favicons.

---

## 5. Rastreamento e Conversão
- Atributos `data-event="click_whatsapp"` com `data-origin="..."` em todos os pontos de contato (hero, sticky, gallery, condominio, final_cta).
- Camada extensível em `main.js` para integração transparente com Google Analytics 4 (GA4), Google Tag Manager (GTM) e Microsoft Clarity sem quebrar execução local.

---

## 6. Verificação e Garantia de Qualidade
- Verificação de responsividade em múltiplos viewports (360px, 390px, 768px, 1024px, 1440px, 1920px).
- Teste de interação de galeria, lightbox e navegação via teclado e toque.
- Varredura de links e ausência de erros no console.
- Auditoria de segurança e validação de código.
