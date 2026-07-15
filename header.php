<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a
            href="/"
            class="logo header__logo"
            aria-label="Логотип - ссылка на главную страницу">
            <img
              src="<?php echo get_template_directory_uri() ?>/assets/img//triumf-logo.webp"
              alt="Логотип теннисного клуба `Трумф`" />
          </a>
          <button class="header__burger" aria-label="Открыть меню">
            Меню
          </button>
          <nav class="header__nav">
            <ul class="header__menu menu">
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
        </div>
      </div>
    </header>