<?php

/* Template Name: Pagina de postagens */

use ofernandoavila\Core\PostCore\Post;
use ofernandoavila\Core\TemplateBuilder;

 get_header(); 

 $currentPage = 1;

 if(isset($_GET['page'])) {
    $currentPage = intval($_GET['page']);
 }

 $currentPage--;

 $posts = get_posts([ 
    "posts_per_page" => 10,
    "offset" => $currentPage * 10
 ]); 
 
?>

<?php TemplateBuilder::OpenContainer(); ?>

<main id="postagens">
    <h1 class="mb-4"><?= single_post_title();?></h1>
    <div class="postagens-grid">
        <?php foreach($posts as $post): ?>
            <?php Post::RenderPost($post); ?>
        <?php endforeach; ?>
    </div>
</main>

<?php TemplateBuilder::CloseContainer(); ?>

<?php get_footer(); ?>