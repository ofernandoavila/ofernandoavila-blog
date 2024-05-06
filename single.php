<?php

get_header();

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

<main>
    <div class="d-flex flex-column align-items-center">
        <div class="post-container w-50">
            <div class="post-header">
                <h2><?php the_title(); ?></h2>
                <div class="py-2">por <b><?php the_author(); ?></b> | <?php the_time('d/m/Y - H:m'); ?></div> 
            </div>
            <div class="d-flex flex-column" style="gap: 10px;">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</main>

<?php
    endwhile;
endif;

get_footer();

?>