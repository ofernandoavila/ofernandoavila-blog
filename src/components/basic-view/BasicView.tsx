import { ReactNode } from "react";
import { Header } from "../header/Header";

interface BasicViewProps {
    hideHeader?: boolean;
    children?: ReactNode;
}

export function BasicView({ children, hideHeader }: BasicViewProps) {
    return (
        <div className="vh-100 d-flex flex-column">
            { hideHeader ? '' : <Header /> }
            <div className="container-fluid">
                <main>{ children }</main>
            </div>
        </div>
    );
}