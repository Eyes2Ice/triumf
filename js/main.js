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
  slidesPerView: 5,
  spaceBetween: 27,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },

  // autoplay: {
  //   delay: 7000,
  // },

  // speed: 2000,

  // pauseOnInteraction: true,
});
