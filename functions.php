<?php

use EvoMark\WpVite\WpVite;

require_once __DIR__ . '/vendor/autoload.php';

add_action('wp_enqueue_scripts', function() {
    global $wpVite;

    $viteHandle = $wpVite->enqueue([
        'input' => [
            'src/main.tsx'
        ],
        'namespace' => 'theme-vite'
    ]);

    wp_localize_script($viteHandle, 'wpViteData', [
        'ajax_url'      => admin_url('admin-ajax.php'),
        'user_id'       => get_current_user_id(),
        'site_url'      => get_site_url(),
        'custom_value'  => 'Valor inicial do PHP' // O valor pode ser dinâmico aqui
    ]);
}, 20);