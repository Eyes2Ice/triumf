<?php
if (! defined('_S_VERSION')) {
  define('_S_VERSION', '1.0.0');
}
function triumph_setup()
{
  add_theme_support('automatic-feed-links');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support(
    'html5',
    array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
      'style',
      'script',
    )
  );
}

// Стили и скрипты
function triumph_assets()
{
  $theme_uri = get_template_directory_uri();

  // Стили
  wp_enqueue_style('triumph-reset', $theme_uri . '/css/reset.css', array(), '1.0');
  wp_enqueue_style('triumph-vars', $theme_uri . '/css/vars.css', array('triumph-reset'), '1.0');
  wp_enqueue_style('triumph-fonts', $theme_uri . '/css/fonts.css', array('triumph-vars'), '1.0');
  wp_enqueue_style('swiper-bundle-css', $theme_uri . '/css/swiper-bundle.min.css', array('triumph-vars'), '11.0.0');
  wp_enqueue_style('triumph-global', $theme_uri . '/css/global.css', array('triumph-vars', 'triumph-fonts'), '1.0');
  wp_enqueue_style('main-style', $theme_uri . '/css/style.css', array('triumph-global', 'swiper-bundle-css'), '1.0');
  wp_enqueue_style('triumph-media', $theme_uri . '/css/media.css', array('main-style'), '1.0');

  // Скрипты
  wp_enqueue_script('lenis-cdn', 'https://unpkg.com/lenis@1.3.23/dist/lenis.min.js', array(), '1.3.23', true);
  wp_enqueue_script('fslightbox', $theme_uri . '/js/fslightbox.js', array(), '3.4.1', true);
  wp_enqueue_script('swiper-bundle-js', $theme_uri . '/js/swiper-bundle.min.js', array(), '11.0.0', true);
  wp_enqueue_script('main-js', $theme_uri . '/js/main.js', array('lenis-cdn', 'fslightbox', 'swiper-bundle-js'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'triumph_assets');

// Добавление скриптам defer 
function triumph_add_defer_attribute(string $tag, string $handle): string
{
  $scripts_to_defer = array('lenis-cdn', 'fslightbox', 'swiper-bundle-js', 'main-js');

  if (in_array($handle, $scripts_to_defer, true)) {
    return str_replace(' src', ' defer src', $tag);
  }

  return $tag;
}
add_filter('script_loader_tag', 'triumph_add_defer_attribute', 10, 2);


// Удаление верхней плашки 
add_filter('show_admin_bar', '__return_false');

// Класс на body
function my_custom_body_classes(array $classes)
{
  // Добавляем один класс
  $classes[] = 'body';

  return $classes;
}
add_filter('body_class', 'my_custom_body_classes');
