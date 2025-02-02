import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WPService } from "../../services/WPService";
import { BasicView } from "../../components/basic-view/BasicView";
import { PostContent } from 'avilalab-elements';
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
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                        <PostContent
                            postThumbnailUrl={ post.thumbnail_url }
                            postPublishDate={ post.date }
                            postTitle={ post.title }
                            postContent={ post.content }
                        />
                    </div>
                </div>
            </div>
        </BasicView>
    )
}