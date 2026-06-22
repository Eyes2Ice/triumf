// Animations
// Проверяем, поддерживает ли браузер скролл-анимации на уровне CSS
const supportsScrollTimeline = CSS.supports("animation-timeline: view()");

// Если НЕ поддерживает (привет, Safari), запускаем нативный JS-наблюдатель
if (!supportsScrollTimeline) {
  const sections = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    root: null,
    rootMargin: "-20px 0px -20px 0px", // Небольшой отступ от краев экрана для мягкости
    threshold: [0, 0.1, 0.9, 1], // Следим за моментами касания границ
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const bounding = entry.boundingClientRect;

      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        // Секция зашла на экран — плавно проявляем её
        target.classList.add("is-visible");
        target.classList.remove("is-leaving-top", "is-leaving-bottom");
      } else {
        // Секция вышла из зоны видимости. Проверяем вектор движения:
        target.classList.remove("is-visible");

        if (bounding.top < 0) {
          // Верхняя граница блока ушла выше экрана -> секция скрылась НАВЕРХ
          target.classList.add("is-leaving-top");
          target.classList.remove("is-leaving-bottom");
        } else {
          // Блок остался внизу под экраном -> секция скрылась ВНИЗ
          target.classList.add("is-leaving-bottom");
          target.classList.remove("is-leaving-top");
        }
      }
    });
  }, observerOptions);

  // Подготавливаем секции к старту
  sections.forEach((section) => {
    section.classList.add("is-leaving-bottom"); // Изначально все секции «внизу»
    observer.observe(section);
  });
}

// Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smoothWaveform: true,
  mouseMultiplier: 1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement, {
        duration: 1.5,
        immediate: false,
        lock: true,

        offset: -90,
      });
    }
  });
});

// Слайдер услуг
new Swiper(".services__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },

  autoplay: {
    delay: 3000,
  },

  speed: 2000,

  pauseOnInteraction: true,
});

// Слайдер отзывов
new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  spaceBetween: 33,

  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },

  autoplay: {
    delay: 5000,
  },

  speed: 2000,

  pauseOnInteraction: true,
});

// Слайдер фотографий
new Swiper(".gallery__slider", {
  initialSlide: 1,
  slidesPerView: 3,
  spaceBetween: 109,
  centeredSlides: true,

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  preloadImages: false,
  slideToClickedSlide: true,

  speed: 300,
});
