<?php wp_footer(); ?>

<footer class="footer fade-in-section">
  <div class="container">
    <div class="footer__inner">
      <nav class="footer__nav">
        <ul class="footer__menu menu">
          <li class="menu__item">
            <a href="#about" class="menu__link">О нас</a>
          </li>
          <li class="menu__item">
            <a href="#services" class="menu__link">Услуги</a>
          </li>
          <li class="menu__item">
            <a href="#testimonials" class="menu__link">Отзывы</a>
          </li>
          <li class="menu__item">
            <a href="#gallery" class="menu__link">Фото</a>
          </li>
          <li class="menu__item">
            <a href="#faq" class="menu__link">FAQ</a>
          </li>
          <li class="menu__item">
            <a href="#contacts" class="menu__link">Контакты</a>
          </li>
        </ul>
      </nav>
      <div class="footer__body">
        <address class="footer__info address">
          <h4>Контакты</h4>
          <div class="address__location">
            <h5>Наш адрес</h5>
            <p>
              г. Ярославль
              <br />
              Ленинградский проспект 18А
            </p>
          </div>
          <div class="address__hours">
            <h5>Часы работы</h5>
            <p>
              <time datetime="Mo-Su 8:00+03:00/22:00+03:00">
                Ежедневно: с 8 до 23 часов
              </time>
            </p>
          </div>
          <div class="address__phone">
            <h5>Номера телефонов</h5>
            <ul>
              <li>
                <a
                  href="tel:+79619728000"
                  target="_blank"
                  aria-label="Связаться по мобильному телефону">
                  +7 (961) 972-80-00</a>
              </li>
              <li>
                <a
                  href="tel:+74852660218"
                  target="_blank"
                  aria-label="Связаться по городскому телефону">
                  +7 (4852) 66-02-18</a>
              </li>
            </ul>
          </div>
          <div class="address__telegram">
            <h5>Здесь можно задать вопросы</h5>
            <a href="#" aria-label="Ссылка на Telegram">
              <svg
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.9932 1.58221C15.0223 1.40736 14.9567 1.23016 14.8208 1.11645C14.6848 1.00274 14.4988 0.969519 14.3318 1.02914L0.331836 6.02914C0.143209 6.0965 0.0129867 6.26994 0.000913704 6.46987C-0.0111592 6.6698 0.0972469 6.85765 0.276398 6.94722L4.2764 8.94722C4.43688 9.02746 4.62806 9.01556 4.77735 8.91603L8.09775 6.70244L6.10957 9.18766C6.02203 9.29709 5.98442 9.43824 6.00592 9.57672C6.02742 9.7152 6.10605 9.8383 6.22265 9.91603L12.2227 13.916C12.3638 14.0101 12.5431 14.0262 12.6988 13.9588C12.8545 13.8914 12.9653 13.7496 12.9932 13.5822L14.9932 1.58221Z"
                  fill="black" />
              </svg>
              Наш Telegram
            </a>
          </div>
        </address>
        <!-- <div class="details footer__details">
          <h5>Реквизиты</h5>
          <address>
            <ul class="details__list">
              <li>ИП: ######</li>
              <li>ИНН: ######</li>
              <li>ОГРНИП: ######</li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Согласие на обработку данных</a></li>
            </ul>
          </address>
        </div> -->
      </div>
      <img
        src="<?php echo get_template_directory_uri() ?>/assets/img//icons/player.svg"
        alt="Декоративное изображение человека с теннисной ракеткой"
        class="footer__img" />
    </div>
  </div>
</footer>
</div>

</body>

</html>