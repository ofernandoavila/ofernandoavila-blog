import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";
import { WPService } from "../services/WPService";

export interface SiteSettings {
    title: string;
    url: string;
    description: string;
}

export interface GlobalContextData {
    site: SiteSettings;
    setSite: React.Dispatch<SetStateAction<SiteSettings>>;

    wp_service: WPService;
}

export interface GlobalContextProps {
    children: ReactNode;
}

export const globalContext = createContext({} as GlobalContextData);

export default function GlobalContextProvider({ children }: GlobalContextProps) {
    const [site, setSite] = useState<SiteSettings>({} as SiteSettings);
    const [wp_service] = useState<WPService>(new WPService());

    useEffect(() => {
        console.log(window.wpViteData);
        wp_service.get_settings().then( data => setSite(data));
    }, []);

    if(!site) return <></>;

    return <globalContext.Provider value={{ site, setSite, wp_service }}>{ children }</globalContext.Provider>
}