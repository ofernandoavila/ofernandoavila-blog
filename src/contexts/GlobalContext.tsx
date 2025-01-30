import { createContext, ReactNode, useEffect, useState } from "react";
import { WPService } from "../services/WPService";
import { MenuItem } from "../models/Menu";

export interface SiteSettings {
    title: string;
    url: string;
    description: string;
    menus: {
        primary: MenuItem[];
    }
}

export interface GlobalContextData {
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

    useEffect(() => {
        wp_service.get_settings().then( data => setSite(data));
    }, []);

    if(!site) return <></>;

    return <globalContext.Provider value={{ site, wp_service }}>{ children }</globalContext.Provider>
}