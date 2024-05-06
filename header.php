<?php wp_head(); 
use ofernandoavila\Core\TemplateBuilder;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= bloginfo( 'title' ) ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

<header>
    <?php TemplateBuilder::OpenContainer(); ?>
    <div class="d-flex flex-column align-items-center py-4">
        <div class="d-flex justify-content-between">
            <a class="nav-link" href="<?= get_site_url(); ?>">
                <div class="logo">
                    <img src="<?= get_template_directory_uri(); ?>/assets/profile_pic.png" alt="">
                    <h3>@<?= bloginfo('title') ?></h3>
                </div>
            </a>
            <?php wp_nav_menu( [ 
                'container' => 'nav',
                'container_class' => 'navbar navbar-expand-lg navbar-light',
                'li_class' => 'nav-item',
                'a_class' => 'nav-link',
                'menu_id' => false,
                'items_wrap' => '<ul class="navbar-nav me-auto mb-2 mb-lg-0">%3$s</ul>',
                'theme_location' => 'menu-topo' 
                ] ) ?>
        </div>
    </div>
    <?php TemplateBuilder::CloseContainer(); ?>
</header>