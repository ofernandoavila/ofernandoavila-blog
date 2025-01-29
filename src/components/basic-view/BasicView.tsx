import { ReactNode } from "react";
import { Header } from "../header/Header";

interface BasicViewProps {
    children?: ReactNode;
}

export function BasicView({ children }: BasicViewProps) {
    return (
        <>
            <Header />
            <h1>{ import.meta.env.VITE_APP_WP_AUTH_TOKEN }</h1>
            <main>{ children }</main>
        </>
    );
}