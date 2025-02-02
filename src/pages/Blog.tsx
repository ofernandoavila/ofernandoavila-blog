import { useEffect, useState } from "react";
import { BasicView } from "../components/basic-view/BasicView";
import { WPService } from "../services/WPService";
import { Link, useNavigate } from "react-router-dom";
import { PostCard } from "avilalab-elements";
import { Post } from "../models/Post";

export function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        const service = new WPService();

        service.get_all_posts().then(data => setPosts(data));
    }, []);
    
    return (
        <BasicView>
            <div className="container">
                <div className="row row-cols-lg-4">
                { posts.map( (post) => (
                    <div className="col">
                        <Link key={ post.id } to={'/posts/' + post.slug}>
                            <PostCard
                                key={ post.slug }
                                postCategory="Teste"
                                postCategoryBackgroundColor="#000"
                                postCategoryColor="#fff"
                                postAuthor={ post.author.name }
                                postExcerpt={ post.excerpt }
                                postReadTime={10}
                                postTitle={ post.title }
                                onClickPost={() => navigate('/posts/' + post.slug)}
                                onClickAuthorPost={() => navigate('/author/' + post.author.slug)}
                            />
                        </Link>
                    </div>
                ) ) }
                </div>
            </div>
        </BasicView>
    );
}