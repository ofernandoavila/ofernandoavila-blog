import { FeaturedMedia } from "./FeaturedMedia";
import { RenderedField } from "./types";

export type PostStatus = "publish";
export type PostType = "post";
export type PostCommentStatus = "open";

export interface Post {
    id: number;
    date: string;
    guid: RenderedField;
    slug: string;
    modified: string;
    type: PostType;
    link: string;
    title: RenderedField;
    content: RenderedField;
    excerpt: RenderedField;
    author: number;
    featured_media: number;
    comment_status: PostCommentStatus;
    tags: string[];
    categories: number[];
    "_links": [];
    "_embedded"?: {
        "wp:featuredmedia": FeaturedMedia[];
    };
}