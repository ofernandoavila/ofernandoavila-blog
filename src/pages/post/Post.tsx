import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WPService } from "../../services/WPService";

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

    if(!post) return <></>;

    return (
        <>
            <Link to={'/'}>Ir para Home</Link>
            <h1>{ post.title.rendered }</h1>
        </>
    )
}