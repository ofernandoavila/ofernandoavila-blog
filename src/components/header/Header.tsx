import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { Header as HeaderElement } from 'avilalab-elements';

export function Header() {
    const { site } = useGlobal();

    return (
        <HeaderElement>
            <h2>{ site.title }</h2>
            <ul className="nav">
                { site.menus.primary.map( item => (<li className="nav-item" key={ item.url }><Link className="nav-link" to={ item.url }>{ item.title }</Link></li>) ) }
            </ul>
        </HeaderElement>
    );
}