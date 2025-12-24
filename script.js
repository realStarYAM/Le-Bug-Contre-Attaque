/**
 * =====================================================
 * LE BUG CONTRE-ATTAQUE - iOS Bookz Style
 * =====================================================
 */

// =====================================================
// DONNÉES DU LIVRE
// =====================================================

const bookData = {
  title: "Le Bug Contre-Attaque",
  chapters: [
    {
      id: 1,
      title: "Chapitre 1 : Acer tente sa chance chez TopAchat",
      emoji: "🛒",
      pages: [
        { id: 1, title: "La quête du renouveau", content: ["Après avoir été humilié par toutes les marques…", "Acer décide de se refaire une réputation.", "", "Acer (motivé) :", "« Je vais aller chez TopAchat ! Ils vont me respecter ! »", "", "Il met une cravate, un SSD de 128 Go, et part en mission…"] },
        { id: 2, title: "Le refus monumental", content: ["Chez TopAchat, le staff vérifie son dossier…", "", "Staff TopAchat :", "« Euh… excusez-moi… votre BIOS date de 2010 ?! »", "« Et votre pâte thermique… c'est du dentifrice ?! »", "", "TopAchat (ensemble, en choeur) :", "« REFUSÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ !!! »"] },
        { id: 3, title: "L'humiliation mondiale", content: ["Les marques du monde entier reçoivent l'info…", "", "ASUS, MSI, Gigabyte, HP, Lenovo, Dell, Samsung :", "« BAHAHAHAHAHAHAHA ! MEME TOPACHAT NE VEUT PAS DE TOI ! »", "", "Rodrigue :", "« Ils lui ont même pas laissé rentrer dans le panier ! »", "", "Adel :", "« Acer t'es même pas en stock… t'es en rupture de crédibilité. »"] },
        { id: 4, title: "Acer, seul dans la pluie numérique", content: ["Acer (tête basse, logo tout flou) :", "« Snif… même TopAchat… pourquoi tout le monde me déteste… »", "", "Il s'en va lentement, fond triste, clavier qui goutte…"] }
      ]
    },
    {
      id: 2,
      title: "Chapitre 2 : Rencontre au cimetière des PC oubliés",
      emoji: "⚰️",
      pages: [
        { id: 1, title: "Un lieu sombre…", content: ["Acer, triste et rejeté par TopAchat, marche seul…", "Il entend une voix venue d'un vieux disque dur IDE…", "", "Packard Bell (tout poussiéreux, avec un écran CRT sur la tête) :", "« Bonjour Acer, ça va ? »"] },
        { id: 2, title: "La réponse sèche", content: ["Acer (yeux rouges, plein de bugs) :", "« NON. »", "", "Packard Bell (surpris) :", "« Euh… pourquoi ? »"] },
        { id: 3, title: "Le flashback de la honte", content: ["Acer (raconte) :", "« ASUS m'a pissé dessus… HP aussi… Lenovo… Dell… Samsung m'a hurlé dessus…", "Même TopAchat m'a dit 'dégage'… »", "", "Packard Bell :", "« Ah ouais… t'as pris tout le catalogue de la honte ! »"] },
        { id: 4, title: "L'espoir improbable", content: ["Packard Bell :", "« Frérot, t'as touché le fond. Mais moi, je suis encore plus bas ! »", "", "Acer (curieux) :", "« Sérieux ? »", "", "Packard Bell :", "« Oui… moi j'existe même plus. T'es pas encore mort, t'as une chance ! »"] }
      ]
    },
    {
      id: 3,
      title: "Chapitre 3 : La honte chez LDLC",
      emoji: "😱",
      pages: [
        { id: 1, title: "Dernier espoir", content: ["Après avoir été rejeté par TopAchat,", "Acer se dit :", "« Bon… il me reste LDLC, eux ils sont français… ils vont m'aimer, non ? »", "", "Il arrive avec un vieux portable Aspire rouillé, écran 720p et HDD qui gratte…"] },
        { id: 2, title: "La sentence tombe", content: ["Le vendeur de LDLC regarde la fiche technique de l'Acer…", "", "LDLC :", "« Hmm… 4 Go de RAM soudés… écran TN… BIOS UEFI bugué… »", "", "Il prend une grande respiration et dit calmement :", "", "LDLC :", "« REFUSÉ. Acer, c'est aussi mauvais que Packard Bell. »"] },
        { id: 3, title: "Le coup de grâce", content: ["Acer (sous le choc) :", "« QUOI ?! COMME PACKARD BELL ??? »", "", "LDLC :", "« Oui monsieur. Même catégorie : musée de la déprime technologique. »"] },
        { id: 4, title: "Rejet mondial (encore une fois)", content: ["ASUS, MSI, Gigabyte, HP, Lenovo, Dell, Samsung, TopAchat, Packard Bell, Adel et Rodrigue (ensemble) :", "« BAHAHAHAHAHAHA ! MÊME LDLC TE COMPLÈTE LE DOSSIER DE LA HONTE !!! »", "", "Rodrigue :", "« Il va finir chez Noz ! »", "", "Adel :", "« Ou en pièce détachée sur Leboncoin… 15€ négociable. »"] }
      ]
    },
    {
      id: 4,
      title: "Chapitre 4 : Acer-Shop.fr -- Le flop de l'année",
      emoji: "💻",
      pages: [
        { id: 1, title: "Le plan désespéré", content: ["Après avoir été rejeté par TopAchat, LDLC, et humilié par tout le monde…", "", "Acer lance son propre site web :", "\"www.Acer-Shop.fr\"", "", "Avec Packard Bell en partenariat :", "\"Achetez pas cher, bug garanti\"", "", "Acer :", "« Ça y est, c'est notre moment de gloire. »", "", "Packard Bell :", "« J'ai ressorti mon Pentium III pour gérer les serveurs ! »"] },
        { id: 2, title: "Le silence total", content: ["Le site ouvre…", "0 visiteurs…", "0 clics…", "0 ventes…", "", "Packard Bell :", "« C'est normal ? Ou faut redémarrer le modem 56k ? »"] },
        { id: 3, title: "Le monde entier s'en fout", content: ["Tout le monde tech (ASUS, MSI, HP, Lenovo, Dell, Samsung, TopAchat, LDLC, Amazon, même AliExpress) :", "« MDRRRRR jamais on achète là-dessus ! »", "", "Rodrigue :", "« Même Wish refuse de les afficher ! »", "", "Adel :", "« Même les bots de test veulent pas y aller, ça fait peur ! »"] },
        { id: 4, title: "L'humiliation finale", content: ["Acer (très triste, sur un fond gris sans RGB) :", "« pffffffffffff… »", "", "Packard Bell (le console) :", "« Moi je suis habitué t'inquiète. »"] }
      ]
    },
    {
      id: 5,
      title: "Chapitre 5 : Le scandale YouTube",
      emoji: "📺",
      pages: [
        { id: 1, title: "La grande idée", content: ["Acer, au bord de la faillite avec son site Acer-Shop.fr, tente un dernier coup…", "", "Acer (motivé) :", "« Je vais faire une PUB YOUTUBE ! RGB, musique épique, processeur bridé et tout ! »", "", "Il balance 3000€ dans une pub vidéo intitulée :", "\"Acer, le futur du bug maîtrisé\""] },
        { id: 2, title: "L'explosion de vues", content: ["BOUM !", "3 MILLIONS DE VUES en 24h !", "", "Acer (fier) :", "« C'est mon moment ! Je suis enfin respecté ! »"] },
        { id: 3, title: "Les commentaires arrivent… et c'est le drame", content: ["• @GamerDu93 : « Acer c'est de la merde en plastique ! »", "• @TrollProRGB : « Le futur du bug, ça oui ! »", "• @MamieTech : « J'ai cliqué par erreur. Je veux désinstaller cette pub. »", "", "Monde entier en commentaires :", "« ACER C'EST DE LA MERDE !!! »"] },
        { id: 4, title: "La chute encore une fois", content: ["Acer (choqué, les yeux grands ouverts) :", "« Hein ? Hein ? PFFFFFFFFFFFFFFFFF !!!! »", "", "Packard Bell (en train de pleurer de rire) :", "« T'as payé 3000€ pour 3 millions d'insultes ! »"] }
      ]
    },
    {
      id: 6,
      title: "Chapitre 6 : TikTok bannit Acer",
      emoji: "🚫",
      pages: [
        { id: 1, title: "Nouvelle tentative", content: ["Après la catastrophe de YouTube, Acer se dit :", "", "Acer :", "« Bon… YouTube c'est trop méchant. Je vais aller sur TikTok ! Là-bas ils aiment tout, même les toasters qui dansent. »", "", "Il crée un compte :", "@Acer_Le_Retour", "", "Premier TikTok :", "Un laptop Acer qui clignote, avec une voix :", "« Nouveau Acer, 2h d'autonomie, 15h de bugs, garanti sans respect. »"] },
        { id: 2, title: "500 000 vues en 3h", content: ["Acer (excité) :", "« Waaa j'ai percé ! Je vais devenir influenceur tech ! »"] },
        { id: 3, title: "Le bannissement express", content: ["Notification TikTok :", "\"Votre compte @Acer_Le_Retour a été supprimé pour contenu mensonger et danger pour la santé mentale.\"", "", "Acer (en criant) :", "« HEINNNNNNN ???!!! QUOIIIIII ???!!! »"] },
        { id: 4, title: "Le monde en fou rire", content: ["ASUS, MSI, Gigabyte, HP, Dell, Lenovo, Samsung, Packard Bell, Adel et Rodrigue (en choeur) :", "« AHAHAHAHAHAHAHAH ! MÊME TIKTOK L'A JETÉÉÉÉÉÉÉÉÉ !!! »", "", "Rodrigue :", "« Il est banni même des applis gratuites mdrrrr »", "", "Adel :", "« Acer va finir sur LinkedIn avec Packard Bell, les deux seuls rejetés du siècle. »"] },
        { id: 5, title: "La tristesse totale", content: ["Acer (à genoux, dans l'ombre) :", "« J'suis maudit… pfffffffffffff… »"] }
      ]
    },
    {
      id: 7,
      title: "Chapitre 7 : Le silence total",
      emoji: "🔇",
      pages: [
        { id: 1, title: "Le dernier espoir", content: ["Acer, après avoir été banni de TikTok, viré de YouTube, rejeté par LDLC, TopAchat, et humilié par tout le monde…", "", "Il décide de tenter des réseaux \"alternatifs\".", "", "Acer :", "« Je vais aller sur Mastodon… ou Telegram ! Les geeks vont m'aimer là-bas… non ? »"] },
        { id: 2, title: "Silence glacial", content: ["Il crée un compte sur Mastodon :", "@AcerLeBug@mastodon.bzz", "", "Et une chaîne Telegram :", "\"Acer Deals -- promos pas chères qui chauffent fort\"", "", "Résultat après 1 semaine :", "• Mastodon : 0 followers", "• Telegram : 0 abonnés", "• Aucun message", "• Même les bots ont quitté"] },
        { id: 3, title: "L'indifférence mondiale", content: ["Le monde entier (en mode calme, sans même rire cette fois) :", "« … »", "Personne ne répond, personne ne commente, personne ne regarde."] },
        { id: 4, title: "Le bug final", content: ["Acer (regarde son écran seul, vide, triste) :", "« … pfffffff »", "", "Packard Bell (arrive avec un café) :", "« Bienvenue dans ma vie. »", "", "FIN DE LA SAISON 2"] }
      ]
    }
  ]
};

// =====================================================
// STATE
// =====================================================

let state = {
  currentChapter: 0,
  currentPage: 0,
  activeTab: 'home',
  pagesRead: 0,
  chaptersRead: new Set()
};

// =====================================================
// DOM ELEMENTS
// =====================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// =====================================================
// THEME MANAGEMENT
// =====================================================

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);

  // Update icons
  $('#icon-sun').classList.toggle('hidden', theme === 'dark');
  $('#icon-moon').classList.toggle('hidden', theme !== 'dark');

  // Update toggle in profile
  const toggle = $('#dark-mode-toggle');
  if (toggle) toggle.checked = theme === 'dark';
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// =====================================================
// TAB NAVIGATION
// =====================================================

function switchTab(tabName) {
  state.activeTab = tabName;

  // Update tab content
  $$('.tab-content').forEach(tab => tab.classList.remove('active'));
  $(`#tab-${tabName}`).classList.add('active');

  // Update nav items
  $$('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabName);
  });

  // Refresh content if needed
  if (tabName === 'reader') renderReader();
  if (tabName === 'profile') updateStats();
}

// =====================================================
// HOME TAB
// =====================================================

function renderHome() {
  renderPopularChapters();
  renderChaptersList();
}

function renderPopularChapters() {
  const container = $('#popular-chapters');
  // Show first 4 chapters as "popular"
  const popular = bookData.chapters.slice(0, 4);

  container.innerHTML = popular.map((ch, idx) => `
    <div class="popular-card" data-chapter="${idx}">
      <div class="popular-cover">${ch.emoji || '📖'}</div>
      <div class="popular-info">
        <div class="popular-title">${ch.title.replace(/^Chapitre \d+ : /, '')}</div>
      </div>
    </div>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.popular-card').forEach(card => {
    card.addEventListener('click', () => {
      state.currentChapter = parseInt(card.dataset.chapter);
      state.currentPage = 0;
      switchTab('reader');
    });
  });
}

function renderChaptersList(filter = '') {
  const container = $('#chapters-list');
  const filtered = bookData.chapters.filter(ch =>
    ch.title.toLowerCase().includes(filter.toLowerCase())
  );

  container.innerHTML = filtered.map((ch, idx) => {
    const realIdx = bookData.chapters.indexOf(ch);
    return `
      <div class="chapter-card" data-chapter="${realIdx}">
        <div class="chapter-icon">${ch.emoji || '📖'}</div>
        <div class="chapter-info">
          <div class="chapter-title">${ch.title}</div>
          <div class="chapter-meta">${ch.pages.length} pages</div>
        </div>
        <svg class="chapter-arrow icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      state.currentChapter = parseInt(card.dataset.chapter);
      state.currentPage = 0;
      switchTab('reader');
    });
  });
}

// =====================================================
// CHAPTERS TAB
// =====================================================

function renderAllChapters() {
  const container = $('#all-chapters-list');

  container.innerHTML = bookData.chapters.map((ch, idx) => `
    <div class="chapter-card" data-chapter="${idx}">
      <div class="chapter-icon">${ch.emoji || '📖'}</div>
      <div class="chapter-info">
        <div class="chapter-title">${ch.title}</div>
        <div class="chapter-meta">${ch.pages.length} pages</div>
      </div>
      <svg class="chapter-arrow icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `).join('');

  container.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      state.currentChapter = parseInt(card.dataset.chapter);
      state.currentPage = 0;
      switchTab('reader');
    });
  });
}

// =====================================================
// READER TAB
// =====================================================

function renderReader() {
  const chapter = bookData.chapters[state.currentChapter];
  const page = chapter.pages[state.currentPage];

  // Update header info
  $('#reader-chapter-title').textContent = chapter.title;
  $('#reader-page-indicator').textContent = `Page ${state.currentPage + 1} / ${chapter.pages.length}`;

  // Update content
  $('#reader-page-title').textContent = page.title;
  $('#reader-content').innerHTML = page.content.map(line =>
    line === '' ? '<p class="empty"></p>' : `<p>${line}</p>`
  ).join('');

  // Update counter
  $('#page-counter').textContent = `${state.currentPage + 1} / ${chapter.pages.length}`;

  // Update buttons
  const isFirst = state.currentChapter === 0 && state.currentPage === 0;
  const isLast = state.currentChapter === bookData.chapters.length - 1 &&
    state.currentPage === chapter.pages.length - 1;

  $('#btn-prev').disabled = isFirst;
  $('#btn-next').disabled = isLast;

  // Save last read position
  saveLastRead();

  // Track stats
  state.pagesRead++;
  state.chaptersRead.add(state.currentChapter);
}

function animatePageTransition(direction) {
  const readerCard = $('.reader-card');
  if (!readerCard) return;

  // Animation de sortie
  readerCard.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
  readerCard.style.transform = direction === 'next' ? 'translateX(-30px)' : 'translateX(30px)';
  readerCard.style.opacity = '0';

  return new Promise(resolve => {
    setTimeout(() => {
      // Reset pour animation d'entrée
      readerCard.style.transition = 'none';
      readerCard.style.transform = direction === 'next' ? 'translateX(30px)' : 'translateX(-30px)';

      // Forcer reflow
      readerCard.offsetHeight;

      // Animation d'entrée
      readerCard.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in';
      readerCard.style.transform = 'translateX(0)';
      readerCard.style.opacity = '1';

      resolve();
    }, 200);
  });
}

async function goToPrevPage() {
  const canGoBack = state.currentPage > 0 || state.currentChapter > 0;
  if (!canGoBack) return;

  await animatePageTransition('prev');

  if (state.currentPage > 0) {
    state.currentPage--;
  } else if (state.currentChapter > 0) {
    state.currentChapter--;
    state.currentPage = bookData.chapters[state.currentChapter].pages.length - 1;
  }
  renderReader();
}

async function goToNextPage() {
  const chapter = bookData.chapters[state.currentChapter];
  const canGoNext = state.currentPage < chapter.pages.length - 1 ||
    state.currentChapter < bookData.chapters.length - 1;
  if (!canGoNext) return;

  await animatePageTransition('next');

  if (state.currentPage < chapter.pages.length - 1) {
    state.currentPage++;
  } else if (state.currentChapter < bookData.chapters.length - 1) {
    state.currentChapter++;
    state.currentPage = 0;
  }
  renderReader();
}

// =====================================================
// PROFILE TAB
// =====================================================

function updateStats() {
  $('#stat-chapters').textContent = state.chaptersRead.size;
  $('#stat-pages').textContent = state.pagesRead;
}

// =====================================================
// LOCAL STORAGE
// =====================================================

function saveLastRead() {
  localStorage.setItem('lastRead', JSON.stringify({
    chapter: state.currentChapter,
    page: state.currentPage
  }));
}

function loadLastRead() {
  const saved = localStorage.getItem('lastRead');
  if (saved) {
    const { chapter, page } = JSON.parse(saved);
    state.currentChapter = chapter;
    state.currentPage = page;
  }
}

function continueReading() {
  loadLastRead();
  switchTab('reader');
}

// =====================================================
// SEARCH
// =====================================================

function initSearch() {
  const input = $('#search-input');
  input.addEventListener('input', (e) => {
    renderChaptersList(e.target.value);
  });
}

// =====================================================
// KEYBOARD SHORTCUTS
// =====================================================

function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (state.activeTab !== 'reader') return;

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goToNextPage();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevPage();
    }
  });
}

// =====================================================
// SYSTEM THEME LISTENER
// =====================================================

function initSystemThemeListener() {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// =====================================================
// SPLASH SCREEN
// =====================================================

/**
 * Affiche le splash screen et bloque le scroll
 */
function showSplash() {
  document.body.classList.add('no-scroll');
  const splash = $('#splash');
  if (splash) {
    splash.style.display = 'flex';
  }
}

/**
 * Cache le splash screen avec animation, puis le supprime du DOM
 * @returns {Promise} Résolu quand la transition est terminée
 */
function hideSplash() {
  return new Promise((resolve) => {
    const splash = $('#splash');
    if (!splash) {
      resolve();
      return;
    }

    // Ajoute la classe pour l'animation de sortie
    splash.classList.add('hide');

    // Ajoute l'animation d'entrée à l'app
    const app = $('.app');
    if (app) {
      app.classList.add('splash-ready');
    }

    // Après la transition, supprime le splash du DOM
    setTimeout(() => {
      splash.remove();
      document.body.classList.remove('no-scroll');
      resolve();
    }, 500); // Durée de la transition CSS
  });
}

/**
 * Initialise l'application après la disparition du splash
 */
function initAppAfterSplash() {
  // Render all sections
  renderHome();
  renderAllChapters();
  renderReader();
  updateStats();

  // Event listeners
  $('#theme-toggle').addEventListener('click', toggleTheme);
  $('#nav-profile').addEventListener('click', () => switchTab('profile'));

  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchTab(item.dataset.tab));
  });

  $('#btn-prev').addEventListener('click', goToPrevPage);
  $('#btn-next').addEventListener('click', goToNextPage);
  $('#btn-continue').addEventListener('click', continueReading);

  $('#dark-mode-toggle').addEventListener('change', (e) => {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });

  // Search
  initSearch();

  // Keyboard
  initKeyboard();
}

// =====================================================
// INIT
// =====================================================

function init() {
  // Theme - appliqué immédiatement pour que le splash ait le bon thème
  applyTheme(getInitialTheme());
  initSystemThemeListener();

  // Load last read position
  loadLastRead();

  // Affiche le splash
  showSplash();

  // Durée du splash : 1200ms (entre 900ms et 1500ms)
  const SPLASH_DURATION = 1200;

  setTimeout(async () => {
    // Cache le splash avec animation
    await hideSplash();

    // Initialise l'app après le splash
    initAppAfterSplash();
  }, SPLASH_DURATION);
}

// Start app
document.addEventListener('DOMContentLoaded', init);

