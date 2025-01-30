import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WPService } from "../../services/WPService";
import { BasicView } from "../../components/basic-view/BasicView";
import { Post as PostType } from "../../models/Post";
import { Alert } from "avilalab-elements";

import 'avilalab-elements/dist/avilalab-elements.css';

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
            <Alert
                mesage="Parece que agora a componentização funciona com sucesso!"
                type="success"
            />
            { post ? (
                <article dangerouslySetInnerHTML={{ __html: post.content.rendered }}></article>
            ) : '' }
        </BasicView>
    )
}