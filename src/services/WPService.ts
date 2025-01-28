import WPAPI from "wpapi";

export class WPService {
    private __wp: WPAPI;

    constructor() {
        this.__wp = new WPAPI({ endpoint: import.meta.env.VITE_APP_WP_BASE_URL });
    }

    get_post = (slug: string) => new Promise<any>((resolve, reject) => {
        this.__wp.posts().slug(slug).get((error, data) => {
            if(error) return reject(error);
            
            resolve(data[0]);
        });
    });
}