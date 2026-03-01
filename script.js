/* =============================================
   PERETZ GARCIK — script.js
   - Navbar scroll behaviour
   - Hero reveal animations
   - Scroll-triggered reveals
   - Gallery lightbox
   - Vinyl spin on audio play
   - Mobile menu
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -------- NAVBAR SCROLL -------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* -------- HERO REVEAL -------- */
  // Trigger hero animations shortly after page load
  setTimeout(() => {
    document.querySelectorAll('.hero-content .reveal').forEach(el => {
      el.classList.add('visible');
    });
  }, 200);

  /* -------- SCROLL REVEAL -------- */
  // Add .scroll-reveal to key elements
  const revealTargets = [
    '#about .section-title',
    '#about .rule',
    '#about .about-text p',
    '#about .about-photo',
    '#gallery .section-title',
    '#gallery .rule',
    '#media .section-title',
    '#media .rule',
    '#media .media-card',
    '#press .section-title',
    '#press .rule',
    '#press .press-quote',
    '#press .press-downloads',
    '#contact .section-title',
    '#contact .rule',
    '#contact .contact-sub',
    '#contact .contact-card',
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

  /* -------- GALLERY ITEMS REVEAL -------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  galleryItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    galleryObserver.observe(item);
  });

  /* -------- LIGHTBOX -------- */
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');

  // Only actual <img> tags trigger the lightbox (not placeholders)
  let currentIndex = 0;
  let galleryImages = [];

  function refreshGalleryImages() {
    galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  }

  function openLightbox(index) {
    refreshGalleryImages();
    if (galleryImages.length === 0) return;
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
  }

  document.querySelector('.gallery-grid').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const img = item.querySelector('img');
    if (!img) return;
    refreshGalleryImages();
    const idx = galleryImages.indexOf(img);
    if (idx !== -1) openLightbox(idx);
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', showNext);
  lightboxPrev.addEventListener('click', showPrev);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  /* -------- VINYL SPIN ON AUDIO PLAY -------- */
  const audioPlayers = [
    { audio: document.getElementById('audio1'), vinyl: document.getElementById('vinyl1') },
    { audio: document.getElementById('audio2'), vinyl: document.getElementById('vinyl2') },
  ];

  audioPlayers.forEach(({ audio, vinyl }) => {
    if (!audio || !vinyl) return;
    audio.addEventListener('play', () => vinyl.classList.add('spinning'));
    audio.addEventListener('pause', () => vinyl.classList.remove('spinning'));
    audio.addEventListener('ended', () => vinyl.classList.remove('spinning'));
  });

  /* -------- MOBILE MENU -------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* -------- SMOOTH ACTIVE NAV HIGHLIGHTING -------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

});
