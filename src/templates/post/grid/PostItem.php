<?php
if(isset($post)) {
    $args = array( 'p' => $post->ID);
} else {
    $args = array( 'p' => $postId);
}

$custom_query = new WP_Query($args);


while($custom_query->have_posts()) : $custom_query->the_post(); ?>

<div class="post-card <?= $destaque ? 'post-destaque' : '' ?>" href="<?php the_permalink(); ?>">
    <a class="nav-link" href="<?php the_permalink(); ?>">
        <div class="post-thumb">
        <?php if($thumb_url) : ?>
                <img src="<?= $thumb_url ?>" alt="">
            <?php endif; ?>
        </div>
    </a>
    <div class="post-info">
        <?php if ($destaque): ?>
            <div class="post-badges">
                <span class="badge bg-primary">Novo post</span>
                <span class="badge bg-secondary">PHP</span>
            </div>
        <?php endif; ?>
        <a class="nav-link" href="<?php the_permalink(); ?>">
            <div class="post-title"><h5><?= the_title() ?></h5></div>
            <div class="post-excerpt"><?= the_excerpt() ?></div>
        </a>
        <div class="post-signature">
            <span class="post-date">
                <?php the_time('d/m/Y') ?> às <?php the_time('H:m') ?>
            </span> - por <a href="<?= get_site_url() ?>/sobre"><b><?php the_author() ?></b></a>
        </div>
    </div>
</div>

<?php endwhile; ?>