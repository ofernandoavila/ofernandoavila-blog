<?php

/* Template Name: Pagina Sobre */

use ofernandoavila\Core\TemplateBuilder;

 get_header(); ?>

<?php TemplateBuilder::OpenContainer(); ?>

<main>
    <h1><?= single_post_title();?></h1>
</main>

<?php TemplateBuilder::CloseContainer(); ?>

<?php get_footer(); ?>