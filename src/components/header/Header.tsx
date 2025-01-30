import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

export function Header() {
    const { site } = useGlobal();

    return (
        <header>
            <h2>{ site.title }</h2>
            <ul>
                { site.menus.primary.map( item => (
                    <li><Link to={ item.url }>{ item.title }</Link></li>
                ) ) }
            </ul>
        </header>
    );
}