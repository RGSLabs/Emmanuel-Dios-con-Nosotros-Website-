/* ==========================================================================
   EMMANUEL™ — main.js
   Bilingual system, scroll reveal (Motion Tokens), navigation, verse reveal
   ========================================================================== */

/* Global — referenced by inline onerror on logo <img> tags */
function handleLogoError(img) {
  var badge = img.closest(".logo-badge");
  if (badge) badge.classList.add("is-fallback");
}

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. i18n DICTIONARY
     ------------------------------------------------------------------------ */
  const dictionary = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.mission": "Misión",
      "nav.beliefs": "Creemos",
      "nav.verse": "Versículo",
      "nav.prayer": "Oración",
      "nav.devotionals": "Devocionales",
      "nav.events": "Eventos",

      "hero.eyebrow": "Emmanuel · Dios con Nosotros",
      "hero.title": "No estás solo en esto.",
      "hero.subtitle": "Un lugar digital para quienes buscan, dudan, creen y simplemente necesitan un poco de esperanza hoy.",
      "hero.ctaPrimary": "Comienza aquí",
      "hero.ctaSecondary": "Síguenos",
      "hero.scroll": "Desplázate",

      "about.eyebrow": "Quiénes somos",
      "about.title": "Emmanuel no es una página. Es una presencia.",
      "about.p1": "Emmanuel existe para ayudar a las personas a redescubrir a Dios a través de experiencias digitales significativas, relaciones auténticas y verdad bíblica.",
      "about.p2": "No competimos con ninguna iglesia ni ministerio. Simplemente cumplimos con lo que se nos ha llamado a hacer: recordarle a alguien, en medio del ruido, que Dios no está lejos.",

      "mv.eyebrow": "Hacia dónde vamos",
      "mv.heading": "Misión y Visión",
      "mv.missionTitle": "Misión",
      "mv.missionBody": "Ayudar a las personas a encontrar a Dios a través de experiencias digitales cuidadosamente creadas que comuniquen esperanza, verdad bíblica y comunidad auténtica.",
      "mv.visionTitle": "Visión",
      "mv.visionBody": "Convertirnos en una de las comunidades cristianas digitales más respetadas del mundo, combinando integridad bíblica, narrativa cinematográfica, diseño excepcional y conexión humana real.",

      "beliefs.eyebrow": "Nuestros fundamentos",
      "beliefs.heading": "En qué creemos",
      "beliefs.item1": "La presencia de Dios transforma vidas.",
      "beliefs.item2": "La verdad siempre se comunica con amor.",
      "beliefs.item3": "La belleza también puede glorificar a Dios.",
      "beliefs.item4": "La autenticidad vale más que la perfección.",
      "beliefs.item5": "La comunidad importa más que la popularidad.",
      "beliefs.item6": "Todos merecen sentirse bienvenidos aquí.",

      "verse.text": "Emmanuel significa que Dios no nos da respuestas desde lejos; nos da su presencia en medio del dolor. No promete un camino sin tormentas, promete no soltar nuestra mano durante la tempestad.",
      "verse.ref": "— Basado en Isaías 41:10, 13 y Mateo 1:23",

      "prayer.eyebrow": "Un espacio para orar",
      "prayer.title": "Puedes traer lo que llevas contigo.",
      "prayer.body": "No necesitas las palabras correctas. Solo un corazón honesto. Si hoy necesitas oración, escríbenos por nuestras redes — te leemos, y oramos contigo.",

      "devo.eyebrow": "Para reflexionar",
      "devo.heading": "Devocionales destacados",
      "devo.viewAll": "Ver todos los artículos",
      "devo.badge": "Devocional",
      "devo.soon": "Artículo completo — próximamente",
      "devo.card1.category": "Esperanza",
      "devo.card1.title": "La luz que no se apaga",
      "devo.card1.excerpt": "Aun en los días más oscuros, hay una presencia que no se retira. Reflexionamos sobre lo que significa sostenerse en silencio.",
      "devo.card2.category": "Duda",
      "devo.card2.title": "Cuando Dios parece silencioso",
      "devo.card2.excerpt": "Esperar no siempre se siente como fe. A veces se siente como espera, simplemente. Y eso también está bien.",
      "devo.card3.category": "Comunidad",
      "devo.card3.title": "Pequeños actos, presencia grande",
      "devo.card3.excerpt": "Dios rara vez llega con estruendo. Casi siempre llega a través de alguien que decide quedarse.",

      "events.title": "Próximamente",
      "events.body": "Estamos preparando los primeros encuentros de Emmanuel. Síguenos en redes para ser el primero en enterarte.",

      "footer.tagline": "Dios con nosotros. Un lugar digital donde las personas redescubren la esperanza.",
      "footer.explore": "Explorar",
      "footer.follow": "Síguenos",
      "footer.copyright": "© 2026 Emmanuel™. Todos los derechos reservados.",
      "footer.credit": "Desarrollado por RGS Labs™"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.mission": "Mission",
      "nav.beliefs": "Beliefs",
      "nav.verse": "Verse",
      "nav.prayer": "Prayer",
      "nav.devotionals": "Devotionals",
      "nav.events": "Events",

      "hero.eyebrow": "Emmanuel · God With Us",
      "hero.title": "You are not alone in this.",
      "hero.subtitle": "A digital place for those who search, doubt, believe, and simply need a little hope today.",
      "hero.ctaPrimary": "Start here",
      "hero.ctaSecondary": "Follow us",
      "hero.scroll": "Scroll",

      "about.eyebrow": "Who we are",
      "about.title": "Emmanuel isn't a page. It's a presence.",
      "about.p1": "Emmanuel exists to help people rediscover God through meaningful digital experiences, authentic relationships and biblical truth.",
      "about.p2": "We don't compete with any church or ministry. We simply fulfill what we've been called to do: remind someone, in the middle of the noise, that God is not far away.",

      "mv.eyebrow": "Where we're headed",
      "mv.heading": "Mission & Vision",
      "mv.missionTitle": "Mission",
      "mv.missionBody": "To help people encounter God through carefully crafted digital experiences that communicate hope, biblical truth and authentic community.",
      "mv.visionTitle": "Vision",
      "mv.visionBody": "To become one of the world's most respected digital Christian communities, combining biblical integrity, cinematic storytelling, exceptional design and real human connection.",

      "beliefs.eyebrow": "Our foundations",
      "beliefs.heading": "What we believe",
      "beliefs.item1": "God's presence changes lives.",
      "beliefs.item2": "Truth is always communicated with love.",
      "beliefs.item3": "Beauty can glorify God too.",
      "beliefs.item4": "Authenticity is worth more than perfection.",
      "beliefs.item5": "Community matters more than popularity.",
      "beliefs.item6": "Everyone deserves to feel welcome here.",

      "verse.text": "Behold, a virgin shall be with child, and bear a Son, and they shall call His name Immanuel, which is translated, 'God with us.'",
      "verse.ref": "Matthew 1:23 · NKJV",

      "prayer.eyebrow": "A space to pray",
      "prayer.title": "You can bring what you're carrying.",
      "prayer.body": "You don't need the right words. Just an honest heart. If you need prayer today, message us on social media — we read every message, and we pray with you.",

      "devo.eyebrow": "For reflection",
      "devo.heading": "Featured devotionals",
      "devo.viewAll": "View all articles",
      "devo.badge": "Devotional",
      "devo.soon": "Full article — coming soon",
      "devo.card1.category": "Hope",
      "devo.card1.title": "The light that never goes out",
      "devo.card1.excerpt": "Even on the darkest days, there's a presence that doesn't withdraw. A reflection on what it means to hold on in silence.",
      "devo.card2.category": "Doubt",
      "devo.card2.title": "When God seems silent",
      "devo.card2.excerpt": "Waiting doesn't always feel like faith. Sometimes it just feels like waiting. And that's okay too.",
      "devo.card3.category": "Community",
      "devo.card3.title": "Small acts, a great presence",
      "devo.card3.excerpt": "God rarely arrives with thunder. Most often, He arrives through someone who decides to stay.",

      "events.title": "Coming soon",
      "events.body": "We're preparing Emmanuel's first gatherings. Follow us on social media to be the first to know.",

      "footer.tagline": "God with us. A digital place where people rediscover hope.",
      "footer.explore": "Explore",
      "footer.follow": "Follow us",
      "footer.copyright": "© 2026 Emmanuel™. All rights reserved.",
      "footer.credit": "Built by RGS Labs™"
    }
  };

  /* ------------------------------------------------------------------------
     2. LANGUAGE SYSTEM
     ------------------------------------------------------------------------ */
  const STORAGE_KEY = "emmanuel-lang";

  function detectDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
    const browserLang = (navigator.language || "es").slice(0, 2);
    return browserLang === "en" ? "en" : "es";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dictionary[lang][key];
      if (value) el.textContent = value;
    });

    const verseEl = document.getElementById("verse-text");
    if (verseEl) {
      buildWordReveal(verseEl, dictionary[lang]["verse.text"], { delayStep: 45, autoOnView: true });
    }

    const heroTitleEl = document.getElementById("hero-title");
    if (heroTitleEl) {
      buildWordReveal(heroTitleEl, dictionary[lang]["hero.title"], { delayStep: 65, baseDelay: 550, autoOnView: false });
    }

    document.getElementById("lang-es").setAttribute("aria-pressed", String(lang === "es"));
    document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));
    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.getElementById("lang-es").addEventListener("click", () => applyLang("es"));
  document.getElementById("lang-en").addEventListener("click", () => applyLang("en"));

  /* ------------------------------------------------------------------------
     3. NAVBAR SCROLL STATE
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById("navbar");
  function onScroll() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------------------
     4. MOBILE MENU
     ------------------------------------------------------------------------ */
  const mobileMenu = document.getElementById("mobile-menu");
  const navToggle = document.getElementById("nav-toggle");
  const menuClose = document.getElementById("mobile-menu-close");

  function openMenu() {
    mobileMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ------------------------------------------------------------------------
     3b. MOTION ENGINE — Lenis (smooth scroll) + GSAP/ScrollTrigger
     Falls back gracefully to native scroll + IntersectionObserver if the
     CDN scripts fail to load (offline testing, blocked network, etc).
     ------------------------------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gsapAvailable = !prefersReducedMotion && typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  let lenis = null;

  if (gsapAvailable) {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (!prefersReducedMotion && typeof window.Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true
    });

    if (gsapAvailable) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  // Smooth in-page navigation through Lenis (falls back to native anchor jump)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const hash = this.getAttribute("href");
      if (hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      if (lenis) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      }
    });
  });



  /* ------------------------------------------------------------------------
     5. SCROLL REVEAL (Reflection / Hope Reveal motion tokens)
     ------------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else if (gsapAvailable) {
    revealTargets.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (i % 6) * 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        }
      );
    });
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--stagger-index", i % 6);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------------------------
     5b. HERO PARALLAX (Dawn scene depth — only with GSAP, always respects reduced motion)
     ------------------------------------------------------------------------ */
  if (gsapAvailable) {
    const heroBgImage = document.querySelector(".hero__bg-image");
    const heroGlow = document.querySelector(".hero__glow");
    if (heroBgImage) {
      gsap.to(heroBgImage, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });
    }
    if (heroGlow) {
      gsap.to(heroGlow, {
        yPercent: -12,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });
    }
  }

  /* ------------------------------------------------------------------------
     5c. SCENE INDICATOR — active dot + dark/light awareness
     ------------------------------------------------------------------------ */
  const sceneNav = document.getElementById("scene-nav");
  const sceneDots = sceneNav ? sceneNav.querySelectorAll(".scene-nav__dot") : [];
  const darkSceneIds = ["inicio", "versiculo"];

  if (sceneDots.length && "IntersectionObserver" in window) {
    const sceneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            sceneDots.forEach((d) => d.classList.toggle("is-active", d.dataset.scene === id));
            sceneNav.classList.toggle("on-dark", darkSceneIds.indexOf(id) !== -1);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-35% 0px -35% 0px" }
    );
    sceneDots.forEach((dot) => {
      const section = document.getElementById(dot.dataset.scene);
      if (section) sceneObserver.observe(section);
    });
  }

  /* ------------------------------------------------------------------------
     6. WORD-BY-WORD REVEAL (Biblical Text Philosophy + Hero cinematic intro)
     ------------------------------------------------------------------------ */
  function buildWordReveal(el, text, opts) {
    opts = opts || {};
    const delayStep = opts.delayStep || 45;
    const baseDelay = opts.baseDelay || 0;
    const autoOnView = opts.autoOnView !== false;

    const words = text.split(" ");
    el.innerHTML = words
      .map((w, i) => `<span class="word" style="transition-delay:${baseDelay + i * delayStep}ms">${w}</span>`)
      .join(" ");

    if (prefersReducedMotion) {
      el.querySelectorAll(".word").forEach((w) => w.classList.add("is-visible"));
      return;
    }

    if (!autoOnView) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.querySelectorAll(".word").forEach((w) => w.classList.add("is-visible"));
        }, 30);
      });
      return;
    }

    const wordObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".word").forEach((w) => w.classList.add("is-visible"));
            wordObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    wordObserver.observe(el);
  }

  /* ------------------------------------------------------------------------
     7. INIT
     ------------------------------------------------------------------------ */
  applyLang(detectDefaultLang());
})();
