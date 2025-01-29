import { FeaturedMediaType, MediaType, MimeType, RenderedField } from "./types";

export interface MediaFile {
    file: string;
    width: number;
    height: number;
    filesize: number;
    mime_type: MimeType;
    source_url: string;
}

export interface FeaturedMedia {
    id: number;
    date: string;
    slug: string;
    type: FeaturedMediaType;
    link: string;
    title: RenderedField;
    author: number;
    featured_media: number;
    caption: RenderedField;
    alt_text: string;
    media_type: MediaType;
    media_details: MediaDetails;
    source_url: string;
}

export interface ImageMeta {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: string[];
}

export interface MediaDetails {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes?: {
        medium: MediaFile;
        large: MediaFile;
        thumbnail: MediaFile;
        medium_large: MediaFile;
        "1536x1536": MediaFile;
        "2048x2048": MediaFile;
        full: MediaFile;
    };
    image_meta: ImageMeta;
    original_image: string;
}