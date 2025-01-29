import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WPService } from "../../services/WPService";
import { BasicView } from "../../components/basic-view/BasicView";
import { PostContentWidget } from 'avilalab-elements/main';
import { Post as PostType } from "../../models/Post";

export function Post() {
    const [post, setPost] = useState<PostType | null>(null);
    const { slug } = useParams();

    useEffect(() => {
        if(slug) {
            const service = new WPService();
            service.get_post(slug)
                    .then( post => setPost(post));
        }
    }, [slug]);

    if(!post) return <BasicView></BasicView>;

    return (
        <BasicView>
            { post ? (
                <PostContentWidget
                    postThumbnailUrl={ post._embedded?.["wp:featuredmedia"][0].link }
                    postPublishDate={ post.date }
                    postTitle={ post.title.rendered }
                    postContent={ post.content.rendered }
                />
            ) : '' }
        </BasicView>
    )
}