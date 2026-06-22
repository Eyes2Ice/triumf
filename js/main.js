// Animations
const supportsScrollTimeline = CSS.supports("animation-timeline: view()");

if (!supportsScrollTimeline) {
  const sections = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    root: null,
    rootMargin: "-20px 0px -20px 0px",
    threshold: [0, 0.1, 0.9, 1],
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const bounding = entry.boundingClientRect;

      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        target.classList.add("is-visible");
        target.classList.remove("is-leaving-top", "is-leaving-bottom");
      } else {
        target.classList.remove("is-visible");

        if (bounding.top < 0) {
          target.classList.add("is-leaving-top");
          target.classList.remove("is-leaving-bottom");
        } else {
          target.classList.add("is-leaving-bottom");
          target.classList.remove("is-leaving-top");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.classList.add("is-leaving-bottom");
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
  smoothWheel: true,
});

window.addEventListener("mousedown", (e) => {
  if (e.clientX >= document.documentElement.clientWidth - 25) {
    if (lenis.isScrolling) {
      lenis.scrollTo(window.scrollY, { immediate: true });
    }
  }
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
