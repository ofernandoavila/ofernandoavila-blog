import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WPService } from "../../services/WPService";
import { BasicView } from "../../components/basic-view/BasicView";

export function Post() {
    const [post, setPost] = useState<any | null>(null);
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
                <>
                    <h2>{ post.title.rendered }</h2>
                    <article dangerouslySetInnerHTML={{ __html: post.content.rendered }}></article>
                </>
            ) : '' }
        </BasicView>
    )
}