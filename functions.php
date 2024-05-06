<?php

add_theme_support( 'post-thumbnails' );

#region Criação menu topo

add_theme_support( 'menus' );

function criar_menu_topo() {
    register_nav_menu( 'menu-topo', 'Menu principal header' );
}

function add_additional_class_on_li($classes, $item, $args) {
    $classes = [];
    if(isset($args->li_class)) {
        $classes[] = $args->li_class;
    }
    return $classes;
}

add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

function add_a_class($atts, $item, $args) {
    $current_page_id = get_queried_object_id();
    $atts['class'] = $args->a_class;

    // Verifica se o item de menu corresponde à página atual
    if ($item->object_id == $current_page_id) {
        // Adiciona a classe desejada aos atributos da tag <a>
        $atts['class'] .= ' active';
    }
    
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_a_class', 1, 3);

add_action( 'init', 'criar_menu_topo' );

#endregion

function adicionar_folhas_de_estilo() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'adicionar_folhas_de_estilo' );

function adicionar_autoload() {
    require_once get_template_directory() . '/vendor/autoload.php';
}

add_action( 'init', 'adicionar_autoload', 1 );

function register_prism_scripts() {
    // Register prism.css file
    wp_register_style(
        'prismCSS', // handle name for the style 
        get_stylesheet_directory_uri() . '/assets/prism/prism.css' // location of the prism.css file
    );

    // Register prism.js file
    wp_register_script(
        'prismJS', // handle name for the script 
        get_stylesheet_directory_uri() . '/assets/prism/prism.js' // location of the prism.js file
    );

    // Enqueue the registered style and script files
    wp_enqueue_style('prismCSS');
    wp_enqueue_script('prismJS');
}
add_action('wp_enqueue_scripts', 'register_prism_scripts');

function register_fontawesome() {
    // Register prism.css file
    wp_register_style(
        'fontawesomeCSS',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    );

    // Enqueue the registered style and script files
    wp_enqueue_style('fontawesomeCSS');
}
add_action('wp_enqueue_scripts', 'register_fontawesome');