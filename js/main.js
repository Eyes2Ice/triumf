// Lenis
const lenis = new Lenis({
  duration: 1.2, // Длительность анимации прокрутки (в секундах). Чем больше, тем "вязче" скролл.
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
        duration: 4,
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
