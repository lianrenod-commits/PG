/* =============================================
   PERETZ GARCIK — script.js
   Trilingual i18n (ES / Yiddish / EN)
   + navbar, gallery lightbox, vinyl, mobile menu
   ============================================= */

// =================== TRANSLATIONS ===================
const translations = {

  es: {
    nav_about:    "Sobre",
    nav_gallery:  "Fotos",
    nav_media:    "Música",
    nav_press:    "Prensa",
    nav_contact:  "Contacto",

    hero_cta_book:   "Contrataciones",
    hero_cta_listen: "Escuchar",

    about_title: "Sobre la banda",
    about_lead:  "Siete músicos. Instrumentos acústicos. Una música que viene de lejos y llega con todo.",
    about_p1:    "Peretz Garcik toca klezmer e ídish: la música que sonaba en las bodas, los mercados y las plazas del Este europeo judío. Freylachs, bulgars, shers y zhoks — ritmos que hacen mover los pies y también detienen el tiempo.",
    about_p2:    "Con una impronta argentina que le da nueva vida a lo tradicional, la banda propone un viaje verdadero: música que parece venir de antiguas celebraciones comunitarias y que, al mismo tiempo, suena viva y urgente hoy. Energía festiva y emoción profunda, en el mismo aliento.",
    about_p3:    "Un repertorio que invita tanto al baile como a la escucha atenta. La memoria de la diáspora con el pulso de ahora.",

    gallery_title: "Galería",
    gallery_hint:  "Reemplazá las imágenes con tus fotos profesionales",

    media_title:       "Música & Videos",
    track_placeholder: "Demo · Placeholder",
    audio_hint:        "→ Reemplazá con tu archivo de audio",
    shorts_title:      "En vivo",

    press_title:          "Prensa & Kit",
    press_q1: "Una experiencia que transporta al alma hacia los rincones más profundos de la memoria colectiva.",
    press_c1: "— Nombre del Medio, Año",
    press_q2: "Música que no te pide que la conozcas de antes — te agarra igual y no te suelta.",
    press_c2: "— Nombre del Medio, Año",
    press_q3: "Reemplazá estas citas con tus reseñas reales.",
    press_c3: "— Medio / Publication",
    press_download_title: "Descargar",
    dl_rider_es: "↓ Rider Técnico (ES)",
    dl_rider_en: "↓ Technical Rider (EN)",
    dl_bio:      "↓ Bio completa",
    dl_photos:   "↓ Fotos de prensa",

    contact_title:      "Contacto",
    contact_sub:        "Para contrataciones, prensa y consultas generales",
    contact_email_hint: "Reemplazá con tu email real",
    contact_wa_hint:    "Reemplazá con tu número real",

    footer_copy: "© 2026 Peretz Garcik. Todos los derechos reservados.",
  },

  yi: {
    nav_about:    "וועגן",
    nav_gallery:  "בילדער",
    nav_media:    "מוזיק",
    nav_press:    "פּרעסע",
    nav_contact:  "קאָנטאַקט",

    hero_cta_book:   "אָפּדינגען",
    hero_cta_listen: "הערן",

    about_title: "וועגן דער באַנדע",
    about_lead:  "זיבן מוזיקאַנטן. אַקוסטישע כּלים. מוזיק וואָס קומט פֿון ווײַט און טרעפֿט אין האַרצן.",
    about_p1:    "פּרץ גאַרציק שפּילט קלעזמער און ייִדיש: די מוזיק וואָס האָט געקלונגען אויף חתונות, יריד-פּלעצער און גאַסן פֿון מיזרח-אייראָפּע. פֿריִלעכס, בולגאַרן, שערס, זשאָקס — רידמן וואָס לאָזן ניט שטיין.",
    about_p2:    "מיט אַן אַרגענטינישן טעם וואָס גיט נײַ לעבן צו אַלטן, שלאָגט די באַנדע פֿאָר אַ ריכטיקע נסיעה: מוזיק וואָס קלינגט ווי אַ מנגינה פֿון אַמאָליקע קהילות, אַבער גלײַכצײַטיק — לעבעדיק און דרינגלעך הײַנט.",
    about_p3:    "אַ רעפּערטואַר וואָס לאַדט אַרײַן צום טאַנצן אַזוי ווי צום ציכטיקן צוהערן. דאָס זכּרון פֿון דער גולה — מיטן קלאַנג פֿון הײַנט.",

    gallery_title: "בילדער",
    gallery_hint:  "טוש אַרײַן דײַנע פּראָפֿעסיאָנעלע פֿאָטאָגראַפֿיעס",

    media_title:       "מוזיק & ווידעאָ",
    track_placeholder: "דעמאָ · פּלאַצהאָלדער",
    audio_hint:        "→ טוש אַרײַן דײַן אוידיאָ-דאַטײ",
    shorts_title:      "לייוו",

    press_title:          "פּרעסע & קיט",
    press_q1: "אַן אַנטפּלעקונג וואָס פֿירט דעם נשמה צו די טיפֿסטע ווינקלען פֿון קאָלעקטיוון זיכּרון.",
    press_c1: "— מעדיום נאָמען, יאָר",
    press_q2: "מוזיק וואָס פֿרעגט ניט צי דו קענסט זי — זי כאַפּט דיך אַליין.",
    press_c2: "— מעדיום נאָמען, יאָר",
    press_q3: "טוש אַרײַן דײַנע עכטע רעצענזיעס.",
    press_c3: "— מעדיום / Publication",
    press_download_title: "אָפּלאָדן",
    dl_rider_es: "↓ טעכנישער רײַדער (ES)",
    dl_rider_en: "↓ Technical Rider (EN)",
    dl_bio:      "↓ פֿולע ביאָגראַפֿיע",
    dl_photos:   "↓ פּרעסע-פֿאָטאָגראַפֿיעס",

    contact_title:      "קאָנטאַקט",
    contact_sub:        "פֿאַר אָפּדינגונגען, פּרעסע און אַלגעמיינע פֿראַגן",
    contact_email_hint: "טוש אַרײַן דײַן ריכטיקן עמעיל",
    contact_wa_hint:    "טוש אַרײַן דײַן ריכטיקע נומער",

    footer_copy: "© 2026 Peretz Garcik. אַלע רעכטן פֿאַרבעהאַלטן.",
  },

  en: {
    nav_about:    "About",
    nav_gallery:  "Photos",
    nav_media:    "Music",
    nav_press:    "Press",
    nav_contact:  "Contact",

    hero_cta_book:   "Book Us",
    hero_cta_listen: "Listen",

    about_title: "About the band",
    about_lead:  "Seven musicians. Acoustic instruments. Music that travels far and lands hard.",
    about_p1:    "Peretz Garcik plays klezmer and Yiddish: the music that rang out at weddings, marketplaces and town squares of Jewish Eastern Europe. Freylachs, bulgars, shers and zhoks — rhythms that move the feet and stop the clock.",
    about_p2:    "With an Argentine imprint that breathes new life into the traditional, the band offers a genuine journey: music that sounds like it comes from ancient communal celebrations, yet feels alive and urgent today. Festive energy and deep emotion, in the same breath.",
    about_p3:    "A repertoire that invites both dancing and careful listening. The memory of the diaspora, beating with the pulse of now.",

    gallery_title: "Gallery",
    gallery_hint:  "Replace with your professional photos",

    media_title:       "Music & Videos",
    track_placeholder: "Demo · Placeholder",
    audio_hint:        "→ Replace with your audio file",
    shorts_title:      "Live",

    press_title:          "Press & Media Kit",
    press_q1: "An experience that carries the soul to the deepest corners of collective memory.",
    press_c1: "— Publication Name, Year",
    press_q2: "Music that doesn't ask if you know it — it grabs you anyway and doesn't let go.",
    press_c2: "— Publication Name, Year",
    press_q3: "Replace these quotes with your real press reviews.",
    press_c3: "— Publication Name, Year",
    press_download_title: "Download",
    dl_rider_es: "↓ Technical Rider (ES)",
    dl_rider_en: "↓ Technical Rider (EN)",
    dl_bio:      "↓ Full Bio",
    dl_photos:   "↓ Press Photos",

    contact_title:      "Contact",
    contact_sub:        "For bookings, press and general inquiries",
    contact_email_hint: "Replace with your real email",
    contact_wa_hint:    "Replace with your real number",

    footer_copy: "© 2026 Peretz Garcik. All rights reserved.",
  }
};

// =================== I18N ENGINE ===================
let currentLang = 'es';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update html lang & body dir
  document.documentElement.lang = lang === 'yi' ? 'yi' : (lang === 'en' ? 'en' : 'es');
  document.body.setAttribute('data-lang', lang);

  // Update active button state — both desktop and mobile
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    applyLanguage(lang);
    document.body.classList.remove('lang-switching');
  }, 150);
}

// Bind all lang buttons (desktop + mobile)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.getAttribute('data-lang')));
});

// =================== NAVBAR ===================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// =================== HERO REVEAL ===================
setTimeout(() => {
  document.querySelectorAll('.hero-content .reveal').forEach(el => el.classList.add('visible'));
}, 200);

// =================== SCROLL REVEAL ===================
const revealSelectors = [
  '#about .section-title', '#about .rule', '#about .about-text p', '#about .about-photo',
  '#gallery .section-title', '#gallery .rule',
  '#media .section-title', '#media .rule', '#media .media-card',
  '#press .section-title', '#press .rule', '#press .press-quote', '#press .press-downloads',
  '#contact .section-title', '#contact .rule', '#contact .contact-sub', '#contact .contact-card',
];
revealSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.scroll-reveal').forEach(el => revealObs.observe(el));

// Gallery items staggered reveal
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 60);
      galleryObs.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });
galleryItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  galleryObs.observe(item);
});

// =================== LIGHTBOX ===================
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentIdx = 0, galleryImgs = [];

const refreshImgs = () => { galleryImgs = Array.from(document.querySelectorAll('.gallery-item img')); };

function openLightbox(idx) {
  refreshImgs(); if (!galleryImgs.length) return;
  currentIdx = idx;
  lightboxImg.src = galleryImgs[currentIdx].src;
  lightboxImg.alt = galleryImgs[currentIdx].alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
function showNext() { currentIdx = (currentIdx + 1) % galleryImgs.length; lightboxImg.src = galleryImgs[currentIdx].src; }
function showPrev() { currentIdx = (currentIdx - 1 + galleryImgs.length) % galleryImgs.length; lightboxImg.src = galleryImgs[currentIdx].src; }

document.querySelector('.gallery-grid').addEventListener('click', e => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  const img = item.querySelector('img');
  if (!img) return;
  refreshImgs();
  const idx = galleryImgs.indexOf(img);
  if (idx !== -1) openLightbox(idx);
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', showNext);
document.getElementById('lightboxPrev').addEventListener('click', showPrev);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft')  showPrev();
});

// =================== VINYL SPIN ===================
[{ audio: 'audio1', vinyl: 'vinyl1' }, { audio: 'audio2', vinyl: 'vinyl2' }].forEach(({ audio, vinyl }) => {
  const a = document.getElementById(audio);
  const v = document.getElementById(vinyl);
  if (!a || !v) return;
  a.addEventListener('play',  () => v.classList.add('spinning'));
  a.addEventListener('pause', () => v.classList.remove('spinning'));
  a.addEventListener('ended', () => v.classList.remove('spinning'));
});

// =================== MOBILE MENU ===================
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// =================== ACTIVE NAV ===================
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObs.observe(s));
