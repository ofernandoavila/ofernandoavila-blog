import { SiteSettings } from "../contexts/GlobalContext";
import axios, { AxiosInstance } from "axios";

export class WPService {
    private __axios!: AxiosInstance;
    
    constructor() {
        this.__axios = axios.create({
            baseURL: import.meta.env.VITE_APP_WP_API_BASE_URL
        });
    }

    get_post = (slug: string):Promise<any> => this.__axios.get('/wp/v2/posts', { params: { slug: slug, _embed: "wp:featuredmedia" } }).then( response => response.data[0] );
    get_all_posts = ():Promise<any> => this.__axios.get('/wp/v2/posts').then( response => response.data );
    get_settings = ():Promise<SiteSettings> => this.__axios.get('/blog-theme/v1/info').then( response => response.data );
}