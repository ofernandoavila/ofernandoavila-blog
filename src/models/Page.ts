import { RenderedField } from "./types";

export interface PageDTO {
    id: number;
    date: string;
    slug: string;
    title: RenderedField;
    content: RenderedField;
    excerpt: RenderedField;
}

export interface Page {
    id: number;
    date: string;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
}

export const MapPage = (data: PageDTO): Page => {
    const page: Partial<Page> = {
        id: data.id,
        slug: data.slug,
        content: data.content.rendered,
        date: data.date,
        excerpt: data.excerpt.rendered,
        title: data.title.rendered
    }

    return page as Page;
}