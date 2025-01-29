import WPAPI from "wpapi";
import { SiteSettings } from "../contexts/GlobalContext";

export class WPService {
    private __wp!: WPAPI;

    constructor() {
        this.__wp = new WPAPI({ 
            endpoint: import.meta.env.VITE_APP_WP_BASE_URL,
            username: import.meta.env.VITE_APP_WP_LOGIN,
            password: import.meta.env.VITE_APP_WP_PASSWORD,
            auth: true
        });
    }

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