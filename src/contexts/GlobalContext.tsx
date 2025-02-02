import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { WPService } from "../services/WPService";
import { useLocation } from "react-router-dom";

export interface MenuItem {
    title: string;
    url: string;
}

export interface SiteSettings {
    title: string;
    url: string;
    description: string;
    menus: {
        primary: MenuItem[];
    }
}

export interface GlobalContextData {
    lastRoute: string | null;
    site: SiteSettings;
    wp_service: WPService;
}

export interface GlobalContextProps {
    children: ReactNode;
}

export const globalContext = createContext({} as GlobalContextData);

export default function GlobalContextProvider({ children }: GlobalContextProps) {
    const [site, setSite] = useState<SiteSettings | null>(null);
    const [wp_service] = useState<WPService>(new WPService());
    const lastRoute = useRef<string | null>(null);

    const { pathname } = useLocation();

    useEffect(() => {
        lastRoute.current = pathname;
    }, [pathname]);
    
    useEffect(() => {
        wp_service.get_settings().then( data => setSite(data));
    }, []);

    if(!site) return <></>;

    return <globalContext.Provider value={{ lastRoute: lastRoute.current, site, wp_service }}>{ children }</globalContext.Provider>
}