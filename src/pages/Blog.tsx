import { useEffect, useState } from "react";
import { BasicView } from "../components/basic-view/BasicView";
import { WPService } from "../services/WPService";
import { Link } from "react-router-dom";

export function Blog() {
    const [posts, setPosts] = useState<[]>([]);
    
    useEffect(() => {
        const service = new WPService();

        service.get_all_posts().then(data => setPosts(data));
    }, []);
    
    return (
        <BasicView>
            { posts.map( (post: any) => (
                <Link key={ post.id } to={'/posts/' + post.slug}>{ post.title.rendered }</Link>
            ) ) }
        </BasicView>
    );
}