<?php

use ofernandoavila\Core\TemplateBuilder;
use ofernandoavila\Core\PostCore\Post;

$posts = get_posts();
?>


<div class="post-grid">
    <div class="post-destaque">
        <?php Post::RenderPost($posts[0], true); ?>
    </div>
    <div class="posts">
        <?php 
            array_shift($posts);
            foreach($posts as $key => $post): 
                Post::RenderPost($post);
                if($key == 1) break;
            endforeach; 
        ?>
    </div>
</div>