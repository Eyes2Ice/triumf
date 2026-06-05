// Слайдер услуг
const swiper = new Swiper(".services__slider", {
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },

  autoplay: {
    delay: 2000,
  },

  speed: 600,

  pauseOnInteraction: true,
});
