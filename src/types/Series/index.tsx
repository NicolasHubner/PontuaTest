export interface ComicSeries {
    id: number;
    title: string;
    description: string | null;
    resourceURI: string;
    urls: {
        type: string;
        url: string;
    }[];
    startYear: number;
    endYear: number;
    rating: string;
    type: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    creators: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            role: string;
        }[];
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            type: string;
        }[];
        returned: number;
    };
    comics: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    next: null | any;
    previous: null | any;
}

export interface SeriesFromApi {
    data: {
        data: {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: ComicSeries[];
        };
    };
}
