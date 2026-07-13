// Lenis инициализируем сразу, чтобы экземпляр был доступен глобально
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smoothWaveform: true,
  mouseMultiplier: 1,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Функция для жесткой блокировки тач-скролла на смартфонах
function preventDefaultScroll(e) {
  e.preventDefault();
}

// Мобильное меню (Оптимизированное для работы с Lenis)
document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");
  const menuLinks = document.querySelectorAll(".menu__link");
  const body = document.body;
  const html = document.documentElement;

  window.toggleMenu = function () {
    const isOpen = headerNav.classList.toggle("header__nav--opened");

    burgerButton.textContent = isOpen ? "Закрыть" : "Меню";
    burgerButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";

      if (typeof lenis !== "undefined") {
        lenis.stop();
      }

      window.addEventListener("touchmove", preventDefaultScroll, {
        passive: false,
      });
    } else {
      body.style.overflow = "";
      html.style.overflow = "";

      if (typeof lenis !== "undefined") {
        lenis.start();
      }

      window.removeEventListener("touchmove", preventDefaultScroll);
    }
  };

  burgerButton.addEventListener("click", window.toggleMenu);
});

// Плавный скролл к якорям через Lenis (Синхронизирован с меню)
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerNav = document.querySelector(".header__nav");

    if (targetElement) {
      if (headerNav && headerNav.classList.contains("header__nav--opened")) {
        // 1. Сначала закрываем меню и возвращаем тач-события браузеру
        if (typeof window.toggleMenu === "function") {
          window.toggleMenu();
        }

        setTimeout(() => {
          lenis.scrollTo(targetElement, {
            duration: 1.5,
            immediate: false,
            lock: true,
            offset: -90,
          });
        }, 10);
      } else {
        lenis.scrollTo(targetElement, {
          duration: 1.5,
          immediate: false,
          lock: true,
          offset: -90,
        });
      }
    }
  });
});

// Анимации
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

// Клик по полосе прокрутки
window.addEventListener("mousedown", (e) => {
  if (e.clientX >= document.documentElement.clientWidth - 25) {
    if (lenis.isScrolling) {
      lenis.scrollTo(window.scrollY, { immediate: true });
    }
  }
});

// Слайдер услуг
new Swiper(".services__slider", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  pauseOnInteraction: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 1500,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 2000,
    },
  },
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

  breakpoints: {
    576: {
      speed: 1500,
    },
    992: {
      speed: 2000,
    },
  },
});

// Слайдер фотографий
new Swiper(".gallery__slider", {
  initialSlide: 0,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 16,

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

  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1440: {
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 109,
      centeredSlides: true,
    },
  },
});
