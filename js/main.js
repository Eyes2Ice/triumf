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

// Мобильное меню
document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");
  const menuLinks = document.querySelectorAll(".menu__link");
  const body = document.body;
  const html = document.documentElement; // ПОЧИНИЛИ: теперь переменная определена

  function toggleMenu() {
    const isOpen = headerNav.classList.toggle("header__nav--opened");

    burgerButton.textContent = isOpen ? "Закрыть" : "Меню";
    burgerButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";

      // Блокируем Lenis
      if (typeof lenis !== "undefined") {
        lenis.stop();
      }

      // Жесткий костыль для iOS/Android Safari: запрещаем двигать страницу пальцем
      window.addEventListener("touchmove", preventDefaultScroll, {
        passive: false,
      });
    } else {
      body.style.overflow = "";
      html.style.overflow = "";

      // Включаем Lenis обратно
      if (typeof lenis !== "undefined") {
        lenis.start();
      }

      // Разрешаем тач-скролл обратно
      window.removeEventListener("touchmove", preventDefaultScroll);
    }
  }

  burgerButton.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerNav.classList.contains("header__nav--opened")) {
        toggleMenu();
      }
    });
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

// Плавный скролл к якорям через Lenis
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
