import WPAPI from "wpapi";
import { SiteSettings } from "../contexts/GlobalContext";

export class WPService {
    private __wp!: WPAPI;

    constructor() {
        this.__wp = new WPAPI({ 
            endpoint: import.meta.env.VITE_APP_WP_BASE_URL,
            nonce: 'admin%7C1738287399%7CYSNMB4CvAyJV9cjlX65DpWb0Fmi2hcx9kvLD6duuNdS%7C334c9e985ca4b15c26d63329a06be627e25f8cde16582a992d2d37a6784d64477C1738287399%7CYSNMB4CvAyJV9cjlX65DpWb0Fmi2hcx9kvLD6duuNdS%7C334c9e985ca4b15c26d63329a06be627e25f8cde16582a992d2d37a6784d6447'
        });
    }

    static get_current_user = () => new Promise<any>((resolve, reject) => {
        fetch(import.meta.env.VITE_APP_WP_BASE_URL + import.meta.env.VITE_APP_WP_THEME_API + '/auth', {
            method: 'get',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        }).then( res => res.json())
            .then(data => resolve(data));
    });

    get_post = (slug: string) => new Promise<any>((resolve, reject) => {
        this.__wp.posts().slug(slug).get((error, data) => {
            if(error) return reject(error);
            
            resolve(data[0]);
        });
    });

    get_all_posts = (perPage: number = 10, page: number = 1) => new Promise<any>((resolve, reject) => {
        if(page === 1) {
            this.__wp.posts().perPage(perPage).page( page ).get((error, data) => {
                if(error) return reject(error);
            
                resolve(data);
            });
        } else {
            this.__wp.posts().perPage(perPage).offset( page * perPage ).get((error, data) => {
                if(error) return reject(error);
            
                resolve(data);
            });
        }
    });

    get_settings = () => new Promise<SiteSettings>((resolve, reject) => {
        this.__wp.settings().get((error, data: SiteSettings) => {
                if(error) return reject(error);
                
                resolve(data);
            });
    });
}