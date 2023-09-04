export interface MarvelEvent {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: {
        type: string;
        url: string;
    }[];
    modified: string;
    start: string;
    end: string;
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
    series: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
        }[];
        returned: number;
    };
    next: {
        resourceURI: string;
        name: string;
    };
    previous: {
        resourceURI: string;
        name: string;
    };
}

export interface EventsFromApi {
    data: {
        data: {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: MarvelEvent[];
        };
    };
}
