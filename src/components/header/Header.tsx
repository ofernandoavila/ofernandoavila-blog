import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

export function Header() {
    const { site } = useGlobal();

    return (
        <header>
            <h2>{ site.title }</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </header>
    );
}