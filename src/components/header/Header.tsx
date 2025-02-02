import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

export function Header() {
    const { site } = useGlobal();

    return (
        <header>
            <div className="container">
                <div className="w-100 d-flex align-items-center justify-content-between py-2">
                    <h2>{ site.title }</h2>
                    <ul className="nav">
                        { site.menus.primary.map( item => (<li className="nav-item" key={ item.url }><Link className="nav-link" to={ item.url }>{ item.title }</Link></li>) ) }
                    </ul>
                </div>
            </div>
        </header>
    );
}