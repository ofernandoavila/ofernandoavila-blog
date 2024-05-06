<?php
namespace ofernandoavila\Core\PostCore;

use ofernandoavila\Core\TemplateBuilder;


class Post {
    public static function RenderPost(\WP_Post $post, $destaque = false) {
        $thumb_url = get_the_post_thumbnail_url($post->ID);

        TemplateBuilder::incluirFragmentoTemplate('post/grid/PostItem', ['post' => $post, 'thumb_url' => $thumb_url, 'destaque' => $destaque]);
    }

    public static function RenderPostById(int $id, $destaque = false) {
        $thumb_url = get_the_post_thumbnail_url($id);

        TemplateBuilder::incluirFragmentoTemplate('post/grid/PostItem', ['postId' => $id, 'thumb_url' => $thumb_url, 'destaque' => $destaque]);
    }
}